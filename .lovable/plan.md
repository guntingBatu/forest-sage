

# Earthy Editorial Landing Page

## 1. Design System Setup
- Define the earthy color palette (Forest, Sage, Olive, Cream, Moss) as CSS variables
- Import Google Fonts: Anton (display) and Inter (body)
- Add SVG fractal noise overlay fixed across the viewport at 4% opacity
- Configure extreme border-radius tokens (5rem, 3rem, 2.5rem)
- Add custom cubic-bezier (0.16, 1, 0.3, 1) reveal animation and float keyframes to Tailwind config
- Set Forest (#01472e) as default dark text color

## 2. Fixed Navigation Bar
- Left: Bold uppercase logo with hyphen prefix
- Center: Frosted-glass pill nav bar (blur backdrop, semi-transparent white bg) with tiny uppercase links
- Right: Cart icon with white pill counter badge
- Stays fixed on scroll with high z-index

## 3. Hero Section
- Full viewport height, Sage (#ccd5ae) background
- Massive Anton text (23vw) with staggered per-letter reveal animation
- 2–3 floating organic images with parallax scroll behavior, 3rem rounded corners, and infinite float animation
- Bottom area: two-column descriptive text with origin/location labels

## 4. Product/Feature Grid Section
- Olive (#e9edc9) background with 5rem rounded top corners
- Giant Anton heading (15vw) with a large circular CTA button
- 3-column grid of product cards with 4:5 aspect-ratio images (2.5rem radius)
- Hover effect: image scales to 1.1x, blur overlay fades in, "Quick Add" button slides up

## 5. Footer
- Forest (#01472e) background, Sage text
- Left half: Large newsletter signup with underline-only uppercase input
- Right half: Two columns of bold, tracked-out uppercase links
- Bottom bar: Copyright and legal links at 30% opacity

## 6. Scroll-Triggered Animations
- Intersection Observer hook to trigger reveal animations (slide up from 100px, fade in) on all sections and cards
- Parallax scroll listener for floating hero images (translateY based on scroll depth)

