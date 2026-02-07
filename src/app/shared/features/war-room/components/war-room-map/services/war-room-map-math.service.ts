import { Injectable } from '@angular/core';

export interface ViewBoxMetrics {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface TooltipBounds {
  left: number;
  right: number;
  top: number;
  bottom: number;
}

export interface TooltipAnchor {
  left: number;
  top: number;
  width: number;
  height: number;
}

export interface TooltipSize {
  width: number;
  height: number;
}

export interface TooltipPosition {
  top: number;
  left: number;
  flipped: boolean;
}

@Injectable({ providedIn: 'root' })
export class WarRoomMapMathService {
  readonly BASE_VIEWBOX_WIDTH = 950;
  readonly BASE_VIEWBOX_HEIGHT = 550;

  parseViewBox(viewBox: string | null | undefined): ViewBoxMetrics {
    if (!viewBox) {
      return { x: 0, y: 0, width: this.BASE_VIEWBOX_WIDTH, height: this.BASE_VIEWBOX_HEIGHT };
    }
    const parts = viewBox.split(' ').map(Number);
    if (parts.length === 4 && parts.every(Number.isFinite)) {
      const [x, y, width, height] = parts;
      return { x, y, width, height };
    }
    return { x: 0, y: 0, width: this.BASE_VIEWBOX_WIDTH, height: this.BASE_VIEWBOX_HEIGHT };
  }

  getZoomFactor(viewBox: ViewBoxMetrics): number {
    const zoom = (this.BASE_VIEWBOX_WIDTH / viewBox.width + this.BASE_VIEWBOX_HEIGHT / viewBox.height) / 2;
    return Math.max(0.1, Math.min(10, zoom));
  }

  projectLatLngToMapSpace(lat: number, lng: number, viewBox: ViewBoxMetrics): { x: number; y: number } {
    const baseWidth = this.BASE_VIEWBOX_WIDTH;
    const baseHeight = this.BASE_VIEWBOX_HEIGHT;
    const centralMeridian = 11.5;

    let x = (lng - centralMeridian) * (baseWidth / 360) + baseWidth / 2;
    if (x < 0) x += baseWidth;
    if (x > baseWidth) x -= baseWidth;

    const latRad = (lat * Math.PI) / 180;
    const millerY = 1.25 * Math.log(Math.tan(Math.PI / 4 + 0.4 * latRad));
    const multiplier = baseWidth / (2 * Math.PI) * 0.82;
    const y = baseHeight / 2 - (multiplier * millerY);

    const scaleX = viewBox.width / baseWidth;
    const scaleY = viewBox.height / baseHeight;

    return { x: viewBox.x + x * scaleX, y: viewBox.y + y * scaleY };
  }

  createCurvedPath(start: { x: number; y: number } | null, end: { x: number; y: number } | null): string {
    if (!start || !end) return '';
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  }

  svgPointToContainerPixels(
    svgEl: SVGSVGElement | null,
    svgX: number,
    svgY: number,
    container: HTMLElement | null,
    fallbackViewBox?: ViewBoxMetrics
  ): { x: number; y: number } | null {
    if (!svgEl || !container) return null;

    try {
      const createPoint = (svgEl as any).createSVGPoint;
      if (typeof createPoint === 'function' && typeof svgEl.getScreenCTM === 'function') {
        const pt = (svgEl as any).createSVGPoint();
        pt.x = svgX;
        pt.y = svgY;
        const screenPt = pt.matrixTransform(svgEl.getScreenCTM());
        const containerRect = container.getBoundingClientRect();
        return { x: screenPt.x - containerRect.left, y: screenPt.y - containerRect.top };
      }
    } catch {
      // Fall through to proportional math
    }

    const viewBoxAttr = svgEl.getAttribute('viewBox');
    const vb = viewBoxAttr ? this.parseViewBox(viewBoxAttr) : fallbackViewBox;
    if (!vb) return null;

    const containerRect = container.getBoundingClientRect();
    const left = ((svgX - vb.x) / vb.width) * containerRect.width;
    const top = ((svgY - vb.y) / vb.height) * containerRect.height;
    if (Number.isFinite(left) && Number.isFinite(top)) {
      return { x: left, y: top };
    }

    return null;
  }

  computeTooltipPosition(anchor: TooltipAnchor, bounds: TooltipBounds, size: TooltipSize): TooltipPosition {
    const spacing = 12;
    const anchorCenterX = anchor.left + anchor.width / 2;
    let tooltipLeft = anchorCenterX;
    let tooltipTop = anchor.top - spacing;
    let flipped = false;

    if (tooltipLeft + size.width / 2 > bounds.right) {
      tooltipLeft = bounds.right - size.width / 2;
    }
    if (tooltipLeft - size.width / 2 < bounds.left) {
      tooltipLeft = bounds.left + size.width / 2;
    }

    if (tooltipTop - size.height < bounds.top) {
      tooltipTop = anchor.top + anchor.height + spacing;
      flipped = true;
    }

    if (tooltipTop + size.height > bounds.bottom) {
      tooltipTop = bounds.bottom - size.height;
    }

    return { top: tooltipTop, left: tooltipLeft, flipped };
  }
}
