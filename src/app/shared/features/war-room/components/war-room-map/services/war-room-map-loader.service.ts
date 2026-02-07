import { Injectable } from '@angular/core';

declare global {
  interface Window {
    jsVectorMap: any;
  }
}

@Injectable({ providedIn: 'root' })
export class WarRoomMapLoaderService {
  loadScripts(destroyed: () => boolean): Promise<void> {
    if ((window as any).jsVectorMap) {
      return new Promise((resolve) => setTimeout(resolve, 500));
    }

    return new Promise((resolve, reject) => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '/assets/libs/jsvectormap/css/jsvectormap.min.css';
      document.head.appendChild(link);

      const script1 = document.createElement('script');
      script1.src = '/assets/libs/jsvectormap/js/jsvectormap.min.js';
      script1.onload = () => {
        if (destroyed()) {
          reject(new Error('Component destroyed before scripts loaded'));
          return;
        }
        const script2 = document.createElement('script');
        script2.src = '/assets/libs/jsvectormap/maps/world.js';
        script2.onload = () => {
          if (destroyed()) {
            reject(new Error('Component destroyed before scripts loaded'));
            return;
          }
          setTimeout(() => {
            if (!destroyed()) {
              resolve();
            }
          }, 300);
        };
        script2.onerror = () => reject(new Error('Failed to load world map data'));
        document.head.appendChild(script2);
      };
      script1.onerror = () => reject(new Error('Failed to load jsVectorMap library'));
      document.head.appendChild(script1);
    });
  }

  initMap(config: any): any {
    if (!window.jsVectorMap) {
      throw new Error('jsVectorMap library not loaded');
    }
    return new window.jsVectorMap(config);
  }

  observeContainerSize(target: HTMLElement, callback: ResizeObserverCallback): ResizeObserver {
    const observer = new ResizeObserver(callback);
    observer.observe(target);
    return observer;
  }

  observeViewBox(svg: SVGElement, callback: (viewBox: string) => void): MutationObserver {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'viewBox') {
          const target = mutation.target as SVGElement;
          const viewBox = target.getAttribute('viewBox');
          if (viewBox) {
            callback(viewBox);
          }
        }
      });
    });
    observer.observe(svg, { attributes: true, attributeFilter: ['viewBox'] });
    return observer;
  }

  observeRegionTransform(svg: SVGElement, callback: (transform: string) => void): MutationObserver | null {
    const regionsGroup = svg.querySelector('#jvm-regions-group') as SVGGElement | null;
    if (!regionsGroup) return null;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'transform') {
          const target = mutation.target as SVGElement;
          const transform = target.getAttribute('transform') || '';
          callback(transform);
        }
      });
    });
    observer.observe(regionsGroup, { attributes: true, attributeFilter: ['transform'] });
    return observer;
  }
}
