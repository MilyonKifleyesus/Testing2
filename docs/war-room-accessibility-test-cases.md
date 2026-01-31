# War Room Accessibility Test Cases

These test cases cover desktop, tablet, and mobile layouts plus keyboard and screen-reader checks to meet WCAG 2.1 AA.

## Desktop (>= 1200px)
- Confirm the map occupies the largest area, with the sidebar expandable/collapsible.
- Open Activity Log and Hub Status; verify both sections render without overlap.
- Activate map view toggles; verify selection indicators show a check mark and an outline.
- Open Filters panel; verify selected status pills and checkboxes show non-color indicators and remain legible.
- Use the Activity Log refresh button; verify a busy overlay appears and the log scroll position updates for selection.

## Tablet (768px–1199px)
- Verify sidebar width reduces and still allows toggles and collapse button.
- Confirm map view and filters remain reachable and readable without truncation.
- Toggle Activity Log visibility and ensure content wraps without overlap at 200% zoom.

## Mobile (< 576px)
- Verify map stacks above the sidebar and the sidebar height is capped.
- Confirm sidebar collapse hides sections and provides max map space.
- Ensure Activity Log cards remain readable with increased font sizes and spacing.

## Keyboard Navigation
- Tab through map view toggle buttons, filter buttons, and checkboxes; verify focus ring is visible.
- Tab to Activity Log entries; verify `Enter` and `Space` activate selection and no text overlaps.
- Tab to Refresh and Sidebar Collapse buttons; verify focus indicators and state announcements.

## Screen Reader
- Verify activity log updates announce via the live region (filters applied, toggles, and collapse).
- Confirm Activity Log entries announce state changes via `aria-selected` and button roles.
- Ensure the refresh overlay uses `aria-live` and does not trap focus.

## Zoom (200%)
- Verify log card labels, values, and metrics remain aligned and readable.
- Ensure no truncation or overlap occurs in activity log cards and map controls.
