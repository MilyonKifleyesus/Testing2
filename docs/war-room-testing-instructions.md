# War Room Map - Behavioral Testing Instructions

## Overview

This document provides comprehensive behavioral testing instructions for the **War Room Map** component. The War Room Map is an interactive global visualization that displays transit companies, factories, and their connections in real-time.

## Testing Objectives

- Verify map initialization and rendering
- Validate interactive behaviors (hover, click, zoom, pan)
- Test "Add Company" workflow end-to-end
- Confirm transit route visualization and animations
- Verify filtering and view mode functionality
- Test edge cases and error handling
- Ensure cross-browser compatibility

---

## Test Environment Setup

### Prerequisites
- Local dev server running: `npm start` or `ng serve`
- Navigate to: `http://localhost:4200/war-room`
- Test on multiple browsers: Chrome, Edge, Firefox, Safari
- Test on different screen sizes: Desktop (1920x1080), Tablet (1024x768), Mobile (375x667)

---

## Test Cases

### 1. Smoke Tests - Initial Load

#### TC-001: Map Renders Successfully
**Objective**: Verify the map loads and displays correctly on first visit.

**Steps**:
1. Navigate to `/war-room`
2. Wait for page to fully load

**Expected Results**:
- ✅ World map is visible and fills the container
- ✅ Map shows complete world view (not cropped or zoomed in)
- ✅ Grid overlay is visible
- ✅ Map controls (zoom in, zoom out, fullscreen) are visible in top-right corner
- ✅ No console errors
- ✅ Map renders within 2 seconds

**Test Data**: N/A

---

#### TC-002: Company Markers Display
**Objective**: Verify company markers/logos appear on the map.

**Steps**:
1. Navigate to `/war-room`
2. Observe the map after load

**Expected Results**:
- ✅ Company logos or markers are visible at their geographic locations
- ✅ Markers are positioned correctly (e.g., North American companies in North America)
- ✅ Markers are appropriately sized and not overlapping excessively
- ✅ FleetZero HQ marker is visible

**Test Data**: Existing companies from `war-room-data.json`

---

#### TC-003: Theme Compatibility
**Objective**: Verify map displays correctly in both light and dark themes.

**Steps**:
1. Navigate to `/war-room` in light theme
2. Observe map appearance
3. Switch to dark theme (toggle in app settings)
4. Observe map appearance

**Expected Results**:
- ✅ Light theme: Map background is light (#f5f5f5), regions are visible
- ✅ Dark theme: Map background is dark (#1a1a1a), regions are visible
- ✅ Markers and routes are visible in both themes
- ✅ Theme transition is smooth (no flashing)

**Test Data**: N/A

---

### 2. Interactive Behaviors

#### TC-004: Marker Hover Tooltip
**Objective**: Verify tooltip appears when hovering over company markers.

**Steps**:
1. Navigate to `/war-room`
2. Hover mouse over a company logo/marker
3. Wait 200ms
4. Move mouse away

**Expected Results**:
- ✅ Tooltip appears near the marker
- ✅ Tooltip displays: company logo, company name, description, location, status
- ✅ Tooltip is positioned within viewport (not cut off)
- ✅ Tooltip disappears when mouse moves away
- ✅ Tooltip follows marker position during zoom/pan

**Test Data**: Any visible company marker

---

#### TC-005: Zoom In/Out Controls
**Objective**: Verify zoom controls function correctly.

**Steps**:
1. Navigate to `/war-room`
2. Click the "+" (zoom in) button 3 times
3. Observe map zoom level
4. Click the "−" (zoom out) button 5 times
5. Observe map returns to full world view

**Expected Results**:
- ✅ Zoom in: Map zooms smoothly, markers scale appropriately
- ✅ Zoom out: Map zooms out smoothly
- ✅ Zoom limits: Cannot zoom in infinitely or zoom out beyond full world view
- ✅ Markers remain visible during zoom
- ✅ Transit routes remain aligned with markers during zoom

**Test Data**: N/A

---

#### TC-006: Mouse Wheel Zoom
**Objective**: Verify mouse wheel zooms the map.

**Steps**:
1. Navigate to `/war-room`
2. Place cursor over the map
3. Scroll mouse wheel up (zoom in)
4. Scroll mouse wheel down (zoom out)

**Expected Results**:
- ✅ Wheel up: Map zooms in centered on cursor position
- ✅ Wheel down: Map zooms out centered on cursor position
- ✅ Zoom is smooth and responsive
- ✅ `userHasZoomed` flag is set (prevents auto-reset)

**Test Data**: N/A

---

#### TC-007: Map Pan/Drag
**Objective**: Verify map can be panned by dragging.

**Steps**:
1. Navigate to `/war-room`
2. Click and hold left mouse button on the map (not on a marker)
3. Drag mouse in any direction
4. Release mouse button

**Expected Results**:
- ✅ Map pans in the direction of the drag
- ✅ Pan is smooth and responsive
- ✅ Markers move with the map
- ✅ Transit routes move with the map
- ✅ No performance lag during drag

**Test Data**: N/A

---

#### TC-008: Fullscreen Toggle
**Objective**: Verify fullscreen mode works correctly.

**Steps**:
1. Navigate to `/war-room`
2. Click the fullscreen button (⤢)
3. Observe map in fullscreen
4. Press ESC key or click exit fullscreen button (⤓)

**Expected Results**:
- ✅ Map enters fullscreen mode
- ✅ Map displays full world view in fullscreen (not cropped)
- ✅ All controls remain functional in fullscreen
- ✅ Fullscreen button changes to exit icon (⤓)
- ✅ Map exits fullscreen and returns to normal view
- ✅ No layout issues after exiting fullscreen

**Test Data**: N/A

---

### 3. Add Company Workflow

#### TC-009: Open Add Company Modal
**Objective**: Verify "Add Company" modal can be opened.

**Steps**:
1. Navigate to `/war-room`
2. Locate and click the "Add Company" button (usually in top-right or header)

**Expected Results**:
- ✅ Modal dialog appears
- ✅ Modal has two sections: "Company to Connect" and "Your Company"
- ✅ All form fields are empty and enabled
- ✅ "Submit" button is visible but disabled initially
- ✅ "Cancel" button is visible and enabled

**Test Data**: N/A

---

#### TC-010: Add Company - Valid Data
**Objective**: Verify adding a new company with valid data.

**Steps**:
1. Open "Add Company" modal
2. Fill in "Company to Connect" section:
   - Company Name: "Test Transit Corp"
   - Location: "Seattle, Washington, USA"
   - Description: "Test transit company for QA"
3. Fill in "Your Company" section:
   - Company Name: "QA Testing Inc"
   - Location: "Portland, Oregon, USA"
4. Click "Submit"

**Expected Results**:
- ✅ Form validation passes
- ✅ Modal closes automatically
- ✅ New company marker appears on the map (Seattle location)
- ✅ Source company marker appears (Portland location)
- ✅ Animated transit route appears connecting Portland → Seattle
- ✅ Another animated route appears connecting Seattle → FleetZero HQ
- ✅ Routes animate with traveling dots
- ✅ New company appears in the company list/sidebar

**Test Data**: See steps above

---

#### TC-011: Add Company - Geocoding Validation
**Objective**: Verify system correctly geocodes location strings.

**Steps**:
1. Open "Add Company" modal
2. Enter location: "Tokyo, Japan"
3. Submit form with valid data

**Expected Results**:
- ✅ System geocodes "Tokyo, Japan" to coordinates (~35.6762° N, 139.6503° E)
- ✅ Marker appears in correct geographic location (Japan, East Asia)
- ✅ No errors in console

**Test Data**: Various location formats:
- "London, UK"
- "Sydney, Australia"
- "Toronto, Canada"
- "Berlin, Germany"

---

#### TC-012: Add Company - Invalid Data
**Objective**: Verify validation prevents submission with invalid/missing data.

**Steps**:
1. Open "Add Company" modal
2. Leave "Company Name" empty
3. Attempt to click "Submit"

**Expected Results**:
- ✅ Submit button remains disabled OR
- ✅ Validation error appears: "Company name is required"
- ✅ Form does not submit

**Test Data**: 
- Empty company name
- Empty location
- Invalid location: "asdfghjkl123456"

---

#### TC-013: Add Company with Sub-Locations
**Objective**: Verify adding a company with multiple factory/sub-locations.

**Steps**:
1. Open "Add Company" modal
2. Fill in main company data:
   - Company Name: "Multi-Site Transit"
   - Location: "Chicago, Illinois, USA"
3. Add sub-location #1:
   - Name: "East Coast Facility"
   - Location: "Boston, Massachusetts, USA"
   - Status: "ACTIVE"
4. Add sub-location #2:
   - Name: "West Coast Facility"
   - Location: "San Francisco, California, USA"
   - Status: "ACTIVE"
5. Submit form

**Expected Results**:
- ✅ Main company marker appears in Chicago
- ✅ Sub-location marker appears in Boston
- ✅ Sub-location marker appears in San Francisco
- ✅ Total of 3 new markers on map
- ✅ Transit routes connect all locations appropriately
- ✅ All markers are clickable and show correct tooltips

**Test Data**: See steps above

---

### 4. Transit Route Visualization

#### TC-014: Transit Route Animation
**Objective**: Verify transit routes animate correctly.

**Steps**:
1. Navigate to `/war-room`
2. Observe existing transit routes (animated lines connecting locations)
3. Watch for at least 10 seconds

**Expected Results**:
- ✅ Routes are curved paths (not straight lines)
- ✅ Animated "traveling dot" moves along each route path
- ✅ Animation loops continuously (every ~6 seconds)
- ✅ Multiple routes have staggered start times (not all synchronized)
- ✅ Source and target points pulse/glow
- ✅ Routes have gradient effect (fading at ends)
- ✅ Animation is smooth (60fps, no stuttering)

**Test Data**: Any existing transit routes

---

#### TC-015: Route Visibility During Zoom
**Objective**: Verify routes remain aligned with markers during zoom.

**Steps**:
1. Navigate to `/war-room`
2. Identify a transit route connecting two markers
3. Zoom in 5x using zoom controls
4. Verify route endpoints align with markers
5. Zoom out to original view

**Expected Results**:
- ✅ Routes scale with zoom level
- ✅ Route endpoints remain perfectly aligned with source/target markers
- ✅ No visual "jumping" or misalignment
- ✅ Animation continues smoothly during zoom

**Test Data**: N/A

---

#### TC-016: Multiple Route Handling
**Objective**: Verify map handles multiple routes without performance issues.

**Steps**:
1. Add 5 new companies in different locations (see TC-010)
2. Observe map with multiple routes (10+ total routes)
3. Zoom and pan the map

**Expected Results**:
- ✅ All routes render correctly
- ✅ No route overlap causes visual issues
- ✅ Animations remain smooth (no frame drops)
- ✅ Map remains responsive during interactions
- ✅ No browser performance warnings

**Test Data**: Add companies in: London, Tokyo, Sydney, Mumbai, São Paulo

---

### 5. Filtering & View Modes

#### TC-017: Parent View Mode
**Objective**: Verify "Parent View" shows only parent companies.

**Steps**:
1. Navigate to `/war-room`
2. Select "Parent View" from view mode selector (if available)

**Expected Results**:
- ✅ Only parent company markers are visible
- ✅ Subsidiary and factory markers are hidden
- ✅ Routes connecting parents are visible
- ✅ Map shows full world view

**Test Data**: N/A

---

#### TC-018: Subsidiary View Mode
**Objective**: Verify "Subsidiary View" shows parent + subsidiaries.

**Steps**:
1. Navigate to `/war-room`
2. Select "Subsidiary View" from view mode selector

**Expected Results**:
- ✅ Parent company markers are visible
- ✅ Subsidiary company markers are visible
- ✅ Factory markers are hidden
- ✅ Routes connect parents to subsidiaries

**Test Data**: N/A

---

#### TC-019: Factory View Mode
**Objective**: Verify "Factory View" shows all locations including factories.

**Steps**:
1. Navigate to `/war-room`
2. Select "Factory View" from view mode selector
3. Click on a subsidiary company

**Expected Results**:
- ✅ All markers are visible (parents, subsidiaries, factories)
- ✅ When a subsidiary is selected, only its factories are highlighted
- ✅ Routes connect to factory locations

**Test Data**: N/A

---

### 6. Selection & Interaction

#### TC-020: Select Company from Map
**Objective**: Verify clicking a marker selects the company.

**Steps**:
1. Navigate to `/war-room`
2. Click on a company marker/logo
3. Observe map and sidebar

**Expected Results**:
- ✅ Marker is visually highlighted (larger, glowing border, etc.)
- ✅ Map zooms to selected company location
- ✅ Company details panel/sidebar updates with selected company info
- ✅ Related routes are highlighted
- ✅ Tooltip remains visible or transforms to selection popup

**Test Data**: Any visible company marker

---

#### TC-021: Deselect Company
**Objective**: Verify deselection returns map to neutral state.

**Steps**:
1. Select a company (see TC-020)
2. Click on empty map area (not on a marker)

**Expected Results**:
- ✅ Selected marker returns to normal styling
- ✅ Map zooms out to full world view
- ✅ Company details panel clears or shows default view
- ✅ `userHasZoomed` flag is reset

**Test Data**: N/A

---

### 7. Edge Cases & Error Handling

#### TC-022: Missing Coordinates
**Objective**: Verify system handles companies without coordinates gracefully.

**Steps**:
1. Add a company with an invalid/unrecognizable location: "XYZ123 Nowhere Land"
2. Submit form

**Expected Results**:
- ✅ System attempts geocoding
- ✅ Geocoding fails gracefully (no crash)
- ✅ Error message appears: "Unable to geocode location. Please enter a valid city/country."
- ✅ Company is not added to map OR appears at default coordinates with warning icon

**Test Data**: "XYZ123 Nowhere Land", "12345", "!!@#$%"

---

#### TC-023: Window Resize
**Objective**: Verify map adjusts correctly when window is resized.

**Steps**:
1. Navigate to `/war-room`
2. Resize browser window from 1920x1080 to 1024x768
3. Resize to 800x600
4. Return to original size

**Expected Results**:
- ✅ Map container resizes to fit window
- ✅ SVG viewBox adjusts to maintain aspect ratio
- ✅ Markers remain in correct positions
- ✅ Routes remain aligned
- ✅ No horizontal/vertical scrollbars appear (unless intended)
- ✅ Tooltips reposition to stay within viewport

**Test Data**: N/A

---

#### TC-024: Rapid Interactions
**Objective**: Verify system handles rapid user interactions without errors.

**Steps**:
1. Navigate to `/war-room`
2. Rapidly click zoom in/out buttons (10 times in 2 seconds)
3. Rapidly hover over multiple markers
4. Rapidly pan and zoom simultaneously

**Expected Results**:
- ✅ No JavaScript errors in console
- ✅ Map remains responsive
- ✅ No visual glitches or flickering
- ✅ Tooltips don't accumulate or overlap
- ✅ Animations continue smoothly

**Test Data**: N/A

---

#### TC-025: Browser Compatibility
**Objective**: Verify map works across different browsers.

**Steps**:
1. Test ALL previous test cases on:
   - Google Chrome (latest)
   - Microsoft Edge (latest)
   - Mozilla Firefox (latest)
   - Safari (latest, macOS only)

**Expected Results**:
- ✅ All functionality works identically across browsers
- ✅ Visual rendering is consistent
- ✅ No browser-specific errors
- ✅ Performance is acceptable on all browsers

**Test Data**: N/A

---

#### TC-026: Long Company Name Handling
**Objective**: Verify UI handles long company names gracefully.

**Steps**:
1. Add a company with a very long name: "The International Global Worldwide Transit Transportation and Logistics Services Corporation of North America Limited"
2. Submit and observe marker tooltip

**Expected Results**:
- ✅ Tooltip adjusts width to fit content (up to max-width)
- ✅ Long text wraps to multiple lines
- ✅ Tooltip remains readable
- ✅ No text overflow or cut-off

**Test Data**: See step 1

---

#### TC-027: No Companies Scenario
**Objective**: Verify map handles empty state gracefully.

**Steps**:
1. Clear all companies from `war-room-data.json` (or use empty test data)
2. Navigate to `/war-room`

**Expected Results**:
- ✅ Map renders successfully
- ✅ No markers are visible
- ✅ No transit routes are visible
- ✅ Empty state message appears (e.g., "No companies to display")
- ✅ "Add Company" functionality still works

**Test Data**: Empty `parentGroups` array

---

## Automated Testing Recommendations

### Unit Tests
- Component initialization and cleanup
- Input/output bindings
- Helper method logic (geocoding, coordinate projection)

### Integration Tests
Existing test: `war-room.integration.spec.ts`
- Add company flow with sub-locations
- Route creation and alignment

### E2E Tests (Playwright/Cypress)
```typescript
// Example: Add Company E2E Test
test('should add a new company and display on map', async ({ page }) => {
  await page.goto('/war-room');
  await page.click('button:has-text("Add Company")');
  await page.fill('input[name="companyName"]', 'Test Corp');
  await page.fill('input[name="location"]', 'Seattle, WA');
  await page.click('button:has-text("Submit")');
  
  // Verify marker appears
  const marker = await page.locator('.node-marker').count();
  expect(marker).toBeGreaterThan(0);
});
```

---

## Test Execution Checklist

### Smoke Test Suite (Priority 1)
- [ ] TC-001: Map Renders Successfully
- [ ] TC-002: Company Markers Display
- [ ] TC-004: Marker Hover Tooltip
- [ ] TC-010: Add Company - Valid Data

### Core Functionality (Priority 2)
- [ ] TC-005: Zoom In/Out Controls
- [ ] TC-007: Map Pan/Drag
- [ ] TC-014: Transit Route Animation
- [ ] TC-020: Select Company from Map

### Advanced Features (Priority 3)
- [ ] TC-013: Add Company with Sub-Locations
- [ ] TC-017-019: View Mode Filtering
- [ ] TC-008: Fullscreen Toggle

### Edge Cases (Priority 4)
- [ ] TC-022: Missing Coordinates
- [ ] TC-023: Window Resize
- [ ] TC-025: Browser Compatibility

---

## Known Issues & Limitations

> [!NOTE]
> Document any known issues discovered during testing here.

### Example:
- **Issue**: Tooltip may flicker briefly when switching between closely-positioned markers
- **Severity**: Low
- **Workaround**: Move mouse slowly between markers

---

## Test Reporting

### Bug Report Template
```markdown
**Test Case ID**: TC-XXX
**Title**: Brief description of the bug
**Severity**: Critical / High / Medium / Low
**Steps to Reproduce**:
1. Step 1
2. Step 2
3. Step 3

**Expected Result**: What should happen
**Actual Result**: What actually happened
**Browser/OS**: Chrome 120 / Windows 11
**Screenshots**: [Attach if applicable]
**Console Errors**: [Paste if applicable]
```

---

## Summary

This comprehensive testing guide covers:
- **27 test cases** across 7 categories
- **Smoke, functional, integration, and edge case testing**
- **Manual and automated testing strategies**
- **Cross-browser and responsive design verification**

Execute tests systematically, document all findings, and maintain a regression test suite for continuous quality assurance.
