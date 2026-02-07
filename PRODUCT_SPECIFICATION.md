# FleetPulse War Room Product Specification

## Purpose
The War Room is a live operations dashboard for FleetPulse leadership to monitor fleet health, subsidiary activity, and critical events across the network. It provides a geographic view of subsidiaries and factories, real-time activity logging, and controlled onboarding of new companies with automated link visualization.

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
- FleetPulse Operations Admins
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
- **Target Company Name** (required): Name of the company being connected to the network.
- **Target Location** (required): City, State/Province, or coordinates (latitude, longitude).
- **Subsidiary Description** (optional): Brief description of the company's operations.
- **Your Company** (required): Name of the source company initiating the connection.
- **Your Company Location** (required): Location of the source company (city, state, or coordinates).
- **Logo Upload** (optional): Custom logo for the subsidiary.

#### Behavior
- On submit, the new company is added to the map immediately.
- The new company is **auto-included** in active filters to ensure visibility without clearing user's current view.
- The activity log opens automatically.
- Link lines appear:
  - Blue line: target company to FleetPulse HQ (Toronto)
  - Green line: "Your Company" to the new target location

### 3) Activity Log
- Side panel that auto-expands on new registration.
- Lists the most recent operations and updates.
- Each entry displays company name, location, status, and sync metrics.

### 4) Filter Resilience
- Filters should never block visibility of newly created entries.
- When a new company is registered, the new company is **automatically included** in active filters to preserve the user's current filtered view while ensuring the new entry is visible.

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
   - Blue line to FleetPulse HQ appears.
   - Green line from Seattle to Chicago appears.
   - Activity log opens and lists Hyperloop One.

## Resolved Design Decisions
- **Coordinate Support**: Target Location supports both city/state format and coordinate pairs (latitude, longitude).
- **Filter Behavior**: New companies are auto-included in active filters (no user confirmation required).
- **Activity Log**: Auto-opens on new company registration (not user-configurable at this time).
