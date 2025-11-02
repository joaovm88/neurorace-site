# NeuroRace

## Overview

NeuroRace is a neurofeedback-based racing application that measures and analyzes player focus and cognitive performance during kart racing events. The system collects real-time brainwave data to provide insights into concentration levels, mental resilience, and performance consistency. Players can view their performance metrics, compare against others on a leaderboard, and track their progress over multiple sessions.

The application serves as an interactive demonstration piece for events (specifically FIAP NEXT 2025), combining hardware neurofeedback sensors with a web-based dashboard for visualization and engagement.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes (November 2, 2025)

1. **Design System Update:**
   - Updated dark mode color palette to futuristic neuroscience theme
   - Background changed from GitHub-inspired to deep navy (#0a192f)
   - Primary color: Cyan/Turquoise (#00CED1)
   - Accent: Pink (#FF5C8D)
   - Highlight: Yellow (#FFC107)

2. **Content Consolidation:**
   - Moved "Premiação" (competition prizes) section to Home page
   - Moved "Publique sua Experiência" (social sharing) section to Home page
   - Removed standalone /premiacao and /publique routes

3. **Navigation Reorganization:**
   - Simplified to: VOTE NO NEXT → Dashboard → Ranking → Equipe
   - Enhanced VOTE NO NEXT button with gradient background, larger size, star emoji, and animation

4. **Dashboard Enhancements:**
   - Added "Histórico de Corridas" (Race History) feature
   - Displays multiple race sessions with timestamps
   - Shows badges for "Mais Recente" (most recent) and "Recorde Pessoal" (personal record)
   - Each session displays: Date/Time, TZF, Consistency, Resilience, LFO metrics

5. **Dark Mode as Default:**
   - Site now loads in dark mode by default
   - Applied `class="dark"` to HTML element for consistent dark theme experience

6. **Home Page Restructuring (November 2, 2025):**
   - Added VOTE NO NEXT button in hero section above main title with Star icon
   - Removed "Compete e Vença" (Premiação) section with prize cards
   - Removed duplicate HashtagSection component at bottom
   - Updated all image backgrounds to match site color (#0a192f)
   - Updated final section "Pronto para testar sua concentração" background to #0a192f

7. **Image Background Consistency (November 2, 2025):**
   - Applied #0a192f background to all mascot images throughout the site
   - Navigation logo mascot now has dark background
   - Hero section mascot has dark background
   - Final section running mascot has dark background
   - All VOTE NO NEXT buttons now use Star icon from lucide-react instead of emoji
   - Removed non-compliant hover effects (hover:scale-105, hover:opacity-90) from all buttons

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework:** React 18 with TypeScript
- **Routing:** Wouter (lightweight client-side routing)
- **UI Components:** Radix UI primitives with shadcn/ui styling system
- **Styling:** Tailwind CSS with custom design tokens
- **Data Visualization:** Chart.js for performance graphs
- **State Management:** TanStack Query (React Query) for server state
- **Build Tool:** Vite

**Design System:**
- Dark futuristic theme with neuroscience-inspired colors (Updated: Nov 2, 2025)
- Background: #0a192f (HSL 217, 75%, 11%) - Deep navy blue
- Card/Surface: #12151B (HSL 217, 22%, 9%) - Darker navy
- Text: #E6F1FF (HSL 216, 100%, 95%) - Light cyan-white
- Primary: #00CED1 (Cyan/Turquoise) - HSL 181, 100%, 41%
- Accent: #FF5C8D (Pink) - HSL 340, 100%, 68%
- Highlight: #FFC107 (Yellow) - HSL 45, 100%, 52%
- Poppins font family (400, 500, 700 weights)
- Component library using shadcn/ui "new-york" style preset
- Responsive layout with mobile-first approach

**Key Pages:**
1. Home - Project introduction, feature explanations, competition prizes (Premiação), and social sharing section (Publique sua Experiência)
2. Dashboard - Individual player performance analytics with race history
3. Ranking - Global leaderboard of top performers
4. Equipe (Team) - Team member information
5. RaceFinished - Post-race results with QR codes for dashboard access

**Navigation Structure (Updated: Nov 2, 2025):**
- Primary CTA: "⭐ VOTE NO NEXT!" - Gradient button (primary to accent) with star emoji, larger size, and hover scale animation
- Core navigation: Dashboard → Ranking → Equipe
- Removed standalone routes: /premiacao and /publique (content now on Home page)

**State Management Approach:**
- React Query handles all server state with custom query functions
- Local component state for UI interactions
- No global state management library (Redux, etc.) - keeping it simple
- Query caching disabled (staleTime: Infinity) for demo consistency

### Backend Architecture

**Technology Stack:**
- **Runtime:** Node.js with TypeScript
- **Framework:** Express.js
- **Development:** tsx for TypeScript execution
- **Build:** esbuild for production bundling

**Server Structure:**
- Single entry point (`server/index.ts`) with middleware setup
- Route registration pattern through `registerRoutes` function
- Request/response logging with duration tracking
- JSON body parsing with raw body capture for webhook support
- HTTP server creation for potential WebSocket upgrades

**Storage Layer:**
- Interface-based storage abstraction (`IStorage`)
- In-memory implementation (`MemStorage`) for development/demo
- Designed for easy swap to database implementation
- Currently includes mock data for testing purposes

**API Design:**
- RESTful endpoints prefixed with `/api`
- CRUD operations abstracted through storage interface
- Session-based data model (no authentication required for demo)

### Data Storage Solutions

**Schema Design (Drizzle ORM):**

Three core tables defined in `shared/schema.ts`:

1. **Players Table:**
   - Primary key: email (varchar)
   - Phone number for contact
   - Minimal user profile for event participation

2. **Sessions Table:**
   - Unique session ID
   - References player by email
   - Neurofeedback metrics:
     - `tzf` (Time in Zone Focus) - primary performance metric
     - `cvfLabel` (Consistency) - "estavel" or "oscilante"
     - `ircLabel` (Resilience) - "baixo", "medio", "alto"
     - `lfoMean` (Low Frequency Oscillations) - neural recovery metric
   - Badge system stored as JSONB
   - Timestamp tracking

3. **Stats Table:**
   - Player personal bests and records
   - TZF personal best (`tzfPB`)
   - Focus sequence record (`trzPBsec`)
   - Historical TZF series (array of doubles)

**Database Configuration:**
- Configured for PostgreSQL via Drizzle Kit
- Migration directory: `./migrations`
- Environment-based connection string
- Schema validation using Zod

**Current State:**
- In-memory storage for demo/development
- Mock data pre-populated for testing
- Production-ready schema defined but not actively used
- Easy migration path to PostgreSQL when needed

### External Dependencies

**Third-Party Services:**
- **Google Fonts:** Poppins font family via CDN
- **QRCode Generation:** `qrcode` library for dashboard access links
- **Neon Database:** PostgreSQL serverless database (configured but not actively used)

**Key Libraries:**
- **@tanstack/react-query:** Server state management and caching
- **chart.js & react-chartjs-2:** Performance visualization
- **drizzle-orm & drizzle-kit:** Database ORM and migrations
- **@neondatabase/serverless:** PostgreSQL driver for serverless environments
- **wouter:** Lightweight routing (~1.2KB)
- **zod:** Runtime type validation and schema definitions
- **nanoid:** Unique ID generation

**Development Tools:**
- **Replit-specific plugins:** Runtime error modal, cartographer, dev banner
- **Vite plugins:** React, build optimization
- **TypeScript:** Type safety across full stack

**UI Component Dependencies:**
All Radix UI primitives for accessible, unstyled components:
- Dialog, Popover, Dropdown, Tooltip
- Accordion, Tabs, Navigation Menu
- Form controls (Checkbox, Radio, Select, Slider, Switch)
- Data display (Avatar, Badge, Card, Table)
- Feedback (Alert, Toast, Progress)

**Session Management:**
- `connect-pg-simple` for PostgreSQL session store (available but not configured)
- `express-session` likely for future authentication needs

**Styling Dependencies:**
- **tailwindcss:** Utility-first CSS framework
- **autoprefixer:** CSS vendor prefixing
- **class-variance-authority:** Component variant management
- **tailwind-merge & clsx:** Conditional class merging

**Build & Development:**
- Custom Vite configuration with path aliases (@, @shared, @assets)
- ESBuild for fast production builds
- TSX for development TypeScript execution