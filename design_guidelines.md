# NeuroRace Design Guidelines

## Design Approach
**System-Based with Custom Identity**: Following the provided specifications with a dark, gaming-inspired aesthetic optimized for neurofeedback data visualization and competitive racing engagement.

## Core Visual Identity

### Color Palette (As Specified)
- **Background**: #0d1117 (Dark GitHub-inspired)
- **Text Primary**: #c9d1d9 (Light gray)
- **Text Secondary**: #8b949e (Muted gray)
- **Surface**: #161b22 (Card backgrounds)
- **Borders**: #30363d (Subtle dividers)
- **Accent Gradient**: Linear gradient from #bf46f3 (Purple) to #4c66f4 (Blue)
- **Highlight Colors**: 
  - First place/crown: #f1c40f (Gold)
  - Player 1: #38bdf8 (Cyan)
  - Player 2: #f43f82 (Pink)

### Typography
- **Font Family**: Poppins (via Google Fonts)
- **Weights**: 400 (Regular), 500 (Medium), 700 (Bold)
- **Title**: 3.5rem, bold, gradient fill
- **Subtitle**: 1.1rem, secondary color
- **Body**: 1rem base
- **Player Names**: 1.25rem, bold
- **Scores**: 2rem, bold, cyan color

## Layout System

### Spacing
- Container max-width: 900px for content, centered with auto margins
- Container padding: 0 20px horizontal
- Section margins: 50px bottom for headers, 20px for main containers
- Card gaps: 15px vertical in lists, 40px horizontal in grids
- Internal card padding: 16px-30px depending on component

### Navigation
- **Fixed Top Menu**: 70px height, sticky positioning, full-width
- Logo positioning: Left-aligned
- Menu items: Horizontal flex layout with 25px gaps
- CTA button: Gradient background with 8px vertical, 16px horizontal padding

## Component Library

### Cards
- Background: #161b22
- Border: 1px solid #30363d
- Border-radius: 8px (standard), 12px (player cards)
- Padding: 16px-24px (ranking), 30px (player cards)
- Hover state: Border color transition
- First place: Gold border (#f1c40f) with subtle glow shadow

### Ranking Items
- Horizontal flex layout
- Rank position: 2rem font, 40px width, centered
- Crown icon: 1.5rem, gold, positioned above rank number
- Score display: Right-aligned, 2rem, cyan color
- Transition: 0.2s ease-in-out on border-color

### Player Cards (Race Finished)
- Width: 320px
- Top border: 5px colored stripe (player-specific)
- Center-aligned content
- QR code: White background, 10px padding, 8px border-radius
- QR image size: 200px × 200px

### Data Visualization Cards
- Grid layout: 2-column on desktop, 1-column mobile
- Full-width cards: Single column spanning entire width
- Metric labels: Gray color with tooltips
- Metric values: Large, bold, gradient or colored text

### Hashtag Display
- Container with flex layout
- Individual hashtags: `<code>` elements
- Background: Subtle dark
- Monospace presentation

### Form Elements (Dashboard Login)
- Input fields: Full-width, dark background
- Border: Consistent with card borders
- Focus state: Gradient border or glow
- Button: Gradient background matching brand

## Page-Specific Layouts

### Index (O Projeto)
- Hero header: Centered title with gradient, subtitle below
- 2-column grid: "Insights sobre Foco" and "Premiação" cards
- Full-width social card: Hashtag promotion section

### Ranking
- Header with title
- Vertical list of ranking items
- No pagination (shows all players)
- Scroll behavior: Natural

### Equipe
- Grid layout: Team member cards
- Links to LinkedIn/GitHub
- Profile information display

### Dashboard
- Login section: Email input with submit
- After login: 4-column metrics grid (TZF, CVF, IRC, LFO)
- Badge section: Visual achievement indicators
- Historical chart: Line graph showing TZF evolution (Chart.js)
- Stats cards: Personal bests display

### Race Finished (TV Display)
- Centered layout
- Side-by-side player comparison
- Large player cards with colored accents
- QR codes: Centered, white background for scannability
- Final scores: Prominent display

### Votação
- Simple redirect page or inline iframe to NEXT platform
- Minimal layout with CTA

## Interactive Elements

### Tooltips
- Dark background with light border
- Small arrow pointer
- Triggered on hover over info icons
- Explain metrics: TZF, CVF, IRC, LFO, TRZ

### Chart Integration
- Library: Chart.js
- Chart type: Line graph for TZF series
- Theme: Dark mode compatible
- Colors: Match brand gradient
- Grid lines: Subtle, matching border colors

## Responsive Behavior
- Desktop: 900px max-width container
- Cards: Flex-wrap for smaller screens
- Menu: Maintains horizontal layout (no hamburger specified)
- Grid: 2-column collapses to 1-column on mobile
- Player cards: Stack vertically on narrow viewports

## Special Features

### QR Code Display
- Always white background for scanner contrast
- Padding around QR for visual breathing room
- Image format: PNG or SVG at 200×200px minimum

### Firebase Integration
- Read-only data access
- Real-time updates not required (static load)
- Error states: Graceful messaging if data unavailable

### Social Engagement
- Hashtag promotion: Visible, easy to copy
- LinkedIn/GitHub links: External, open in new tabs
- Vote CTA: Prominent gradient button in navigation

## Images
No hero images specified. The design relies on:
- **Typography-driven headers** with gradient text effects
- **Data visualization** as primary visual element
- **QR codes** for functional imagery
- **Icons** potentially for badges (crown emoji for first place)
- **Optional**: Team member photos for equipe.html if available

The aesthetic is clean, data-focused, and gaming-inspired with neuroscience credibility through restrained use of gradient accents on a dark professional background.