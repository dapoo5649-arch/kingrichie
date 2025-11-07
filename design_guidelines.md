# Design Guidelines: Oladele Habeeb Portfolio

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern portfolio leaders like Linear (typography), Stripe (minimal restraint), and Behance (project showcases). This creates a type-driven, professional developer portfolio that balances minimalism with impactful project presentation.

## Core Design Principles
1. **Type-Driven Hierarchy**: Large, bold typography as the primary visual element
2. **Generous Breathing Room**: Extensive whitespace to let content breathe
3. **Subtle Sophistication**: Minimal animations, clean transitions, professional polish
4. **Project-First Showcase**: Work takes center stage with professional presentation

## Typography System

**Font Families**:
- **Display/Headings**: Inter or DM Sans (600-700 weight) via Google Fonts
- **Body Text**: Inter or DM Sans (400-500 weight)
- **Monospace Accents**: JetBrains Mono for tech tags and code references

**Type Scale**:
- Hero Headline: text-6xl to text-7xl (desktop), text-4xl (mobile)
- Section Headers: text-4xl to text-5xl (desktop), text-3xl (mobile)
- Subheadings: text-2xl to text-3xl
- Body Text: text-lg (18px), line-height relaxed
- Small Text/Tags: text-sm (14px)

**Type Treatment**: Use tight letter-spacing (-0.02em) for headlines, normal spacing for body. Left-align all text for modern, editorial feel.

## Layout System

**Spacing Units**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32 for consistent rhythm
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Component spacing: gap-8 to gap-12
- Content max-width: max-w-6xl centered

**Grid Strategy**:
- Hero/About: Single column, max-w-4xl
- Work Section: 3-column grid (lg:grid-cols-3 md:grid-cols-2 grid-cols-1)
- Contact: 2-column layout (form + info) on desktop, stacked mobile

## Component Library

### Hero Section
Full-viewport section (min-h-screen) with centered content:
- Large display headline: "Oladele Habeeb" in text-7xl
- Subheading: "Replit Expert • AI Automation • Vibe Coding Developer" in text-2xl with reduced opacity (0.8)
- Short tagline paragraph below
- Smooth scroll arrow/indicator at bottom
- Clean, minimal - no background image, pure typography impact

### Navigation
Sticky top navigation bar (backdrop-blur-md):
- Logo/Name on left (text-xl font-bold)
- Navigation links right-aligned: About, Work, Contact (text-base, hover underline effect)
- Mobile: Hamburger menu transitioning to full-screen overlay
- Padding: px-6 py-4

### About Section
Two-column layout (desktop):
- **Left Column**: Circular profile picture (w-64 h-64, rounded-full, shadow-xl, border-4)
- **Right Column**: Bio text with generous leading, email displayed as clickable link with subtle hover state
- Mobile: Stack vertically, profile picture centered at w-48 h-48

### Work Section (Project Gallery)
3-column masonry-style grid with professional project cards:
- **Card Structure**: Aspect ratio 4:3, rounded corners (rounded-xl), hover lift effect (hover:shadow-2xl hover:-translate-y-1)
- **Card Content**:
  - Project thumbnail image (full-width, rounded-t-xl)
  - Padding container (p-6)
  - Project title (text-xl font-semibold)
  - Description (text-base, 2-3 lines, opacity-80)
  - Tech tags row (flex gap-2, small rounded pills with monospace font)
- 6 projects total showcasing variety
- "Download Portfolio PDF" button at section bottom (prominent, rounded-full, px-8 py-4)

### Contact Section
Split layout:
- **Left**: Contact information display
  - Heading "Let's Connect"
  - Phone with icon: 07051292695
  - Email with icon: oladeleh140@gmail.com (clickable mailto:)
  - WhatsApp button with link
  - All info items with generous spacing (space-y-6)
- **Right**: Optional minimal contact form (name, email, message fields, submit button)
- Background: Subtle gray (bg-gray-50) to differentiate from white sections

### Footer
Clean, minimal footer (py-12):
- Copyright: "© 2025 Oladele Habeeb — Replit Expert" centered
- Social links if applicable
- All text in text-sm with reduced opacity

## Animation Guidelines
**Minimal and Purposeful**:
- Page load: Subtle fade-in for hero content (0.6s ease)
- Scroll: Smooth scroll behavior enabled
- Cards: Hover lift (transform translateY -0.25rem) + shadow increase
- Navigation: Underline slide-in effect on hover
- NO parallax, NO scroll-triggered animations, NO complex transitions

## Responsive Breakpoints
- Mobile: < 768px (single column, stacked layouts)
- Tablet: 768px - 1024px (2-column grids where appropriate)
- Desktop: > 1024px (full 3-column layouts, wider spacing)

## Images

**Profile Picture**:
- Location: About section, left side
- Treatment: Circular (rounded-full), professional headshot
- Size: 256px × 256px (desktop), 192px × 192px (mobile)
- Border: 4px solid border with subtle shadow

**Project Thumbnails** (6 images needed):
- Location: Work section grid
- Dimensions: 800px × 600px (4:3 aspect ratio)
- Style: Professional mockups showing:
  1. Web app interface screenshot
  2. AI automation dashboard
  3. Replit workspace with code
  4. Mobile app preview on device mockup
  5. API integration visualization
  6. Full-stack project architecture diagram
- Treatment: Subtle rounded corners, maintain aspect ratio, object-fit cover

**Hero Section**: No hero image - pure typography impact with gradient or solid background

## Visual Accents
- Accent color: Blue (#3B82F6) or Purple (#8B5CF6) for links, buttons, active states
- Neutral base: White (#FFFFFF) backgrounds, Gray (#6B7280) for secondary text
- Shadows: Use sparingly - shadow-lg for cards, shadow-xl for profile picture
- Borders: Minimal - only where necessary for card definition

This creates a professional, minimal portfolio that emphasizes Oladele's expertise through clean typography, generous spacing, and a polished project showcase.