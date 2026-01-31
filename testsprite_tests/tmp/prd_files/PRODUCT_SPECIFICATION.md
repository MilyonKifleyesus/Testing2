# BusPulse War Room Product Specification

## Purpose
The War Room is a live operations dashboard for FleetZero/BusPulse leadership to monitor fleet health, subsidiary activity, and critical events across the network. It provides a geographic view of subsidiaries and factories, real-time activity logging, and controlled onboarding of new companies with automated link visualization.

## Goals
- Provide a clear, map-first view of subsidiaries and factories worldwide.
- Make onboarding of new subsidiaries fast and visible to operators.
- Surface critical activity changes in a side log for quick response.
- Ensure filters never hide newly created entities after registration.
- Maintain consistent FleetPulse theme and UX patterns.

## Non-Goals
- Full CRUD admin for every company property.
- Long-term analytics or reporting (handled in other dashboards).
- User authentication and account management beyond existing app flow.

## Users
- FleetZero Operations Admins
- Supervisors monitoring live activity
- Analysts validating subsidiary connections

## Core Features

### 1) War Room Map
- Interactive map with zoom controls and fullscreen mode.
- Two map views:
  - Subsidiary View
  - Factory View
- Map markers are generated from War Room data sources.
- Map auto-zooms to newly added company location after registration.

### 2) Add Company (Subsidiary) Flow
From the War Room page, users can add a subsidiary and optionally connect it to another company.

#### Input Fields
- Target Company Name (company to connect)
- Target Location
- Subsidiary Description
- Your Company (connection source)
- Your Company Location

#### Behavior
- On submit, the new company is added to the map immediately.
- Filters are cleared/reset so the new company is visible by default.
- The activity log opens automatically.
- Link lines appear:
  - Blue line: target company to FleetZero HQ (Toronto)
  - Green line: “Your Company” to the new target location

### 3) Activity Log
- Side panel that auto-expands on new registration.
- Lists the most recent operations and updates.
- Each entry displays company name, location, status, and sync metrics.

### 4) Filter Resilience
- Filters should never block visibility of newly created entries.
- When a new company is registered:
  - Active filters are cleared, or
  - The new company is auto-included.

## Data Sources
- War Room data is loaded from local static sources and services.
- Primary sources:
  - `public/assets/data/war-room-data.json`
  - War Room services in `src/app/shared/services/`

## UX/Theme Requirements
- FleetPulse theme colors:
  - Primary: #5ad85a
  - Accent: #6ee755
  - Dark backgrounds: #050505 / #0a0c0a
  - Status: Optimal #6ee755, Warning #eab308, Critical #ef4444
- Dark/light theme toggle supported.
- Clean, readable typography with high contrast for map overlays.

## Success Criteria
- New company registration appears instantly on the map.
- Map auto-zooms to the new location.
- Blue and green animated links appear after registration.
- Activity log opens and shows the new entry.
- Filters never prevent visibility of the new company.

## Testing Checklist
1. Open War Room at `http://localhost:4200/admin/dashboard`.
2. Click `ADD SUBSIDIARY`.
3. Enter:
   - Target Company: Hyperloop One
   - Target Location: Chicago, IL
   - Description: New integration test.
   - Your Company: Antigravity HQ
   - Your Company Location: Seattle, WA
4. Click `EXECUTE SYNC`.
5. Validate:
   - Map zooms to Chicago.
   - Blue line to FleetZero HQ appears.
   - Green line from Seattle to Chicago appears.
   - Activity log opens and lists Hyperloop One.

## Open Questions
- Should the Target Location support coordinates as well as city/state?
- Should the user be prompted for confirmation before filters reset?
- Should activity log auto-open be configurable per user?
