# THE ARCHIVE

![App Preview](https://imgix.cosmicjs.com/cbfe0cf0-6c6f-11f1-a7b1-a329933c1eaf-autopilot-photo-1492562080023-ab3db95bfbce-1781936284470.jpeg?w=1200&h=630&fit=crop&auto=format,compress)

**Ahmedabad's streetwear culture destination.** A digital streetwear museum and youth-culture hub — every piece treated as a numbered artifact, not a SKU. Built on [Cosmic](https://www.cosmicjs.com) with a near-monochrome, gallery-lit aesthetic and a single acid-green signal accent.

## Features

- 🖤 **Cinematic monochrome design** — void-black, bone-white, concrete-grey with a sparing acid-green signal accent
- 🏷️ **Artifact-numbered products** — every piece displayed as `ARC-XXXX` with monospace metadata
- 🛍️ **Archive Wings (Collections)** — each category styled as its own gallery wing
- ⭐ **Reviews integration** — customer reviews surfaced on product pages
- 🔥 **Featured Drop carousel** — curated, drop-flagged pieces front and center
- 📦 **Condition & rarity tagging** — scarcity cues for thrifted/vintage pieces
- 📱 **Fully responsive** — mobile-native interactions and editorial layouts
- ⚡ **Server-rendered & SEO-optimized** — fast Core Web Vitals with JSON-LD

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=6a36303a5b2ac5cef3df9055&clone_repository=6a36316f5b2ac5cef3df9090)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create content models for an online store with products (including images, pricing, description, and inventory status), product categories, and customer reviews.
>
> User instructions: Here's a condensed version you can use for quick iterations or as a starting brief:
>
> **Overview Prompt — Ahmedabad Streetwear Archive**
>
> Build a premium streetwear-thrift e-commerce website for **THE ARCHIVE**, Ahmedabad's streetwear culture destination — selling oversized tees, graphic tees, denim, cargos, jerseys, hoodies, jackets, sneakers, and curated streetwear pieces. This is not a thrift store; it's a digital streetwear museum and youth culture hub, closer in spirit to Kith, Corteiz, Stüssy, and Hypebeast than a typical online shop.
>
> **Visual identity:** Near-monochrome palette (deep void-black `#0A0A0A`, off-white bone `#F2EFE9`, concrete-grey surfaces) with a single acid-green accent (`#D4FF3F`) used sparingly for CTAs and live-drop signals. Condensed industrial display type for headlines, clean grotesk for body, monospace for SKUs/prices/metadata — every product treated as a numbered \"artifact\" (e.g., `ARC-0042`), not a SKU."

### Code Generation Prompt

> Build a Next.js application for an online business called "THE ARCHIVE" — a premium streetwear-thrift e-commerce website, Ahmedabad's streetwear culture destination. Use the near-monochrome palette (void-black, bone-white, concrete-grey) with a single acid-green signal accent. Treat every product as a numbered artifact. Create a beautiful, modern, responsive design with a homepage and pages for each content type (categories, products, reviews), drawing design inspiration from Bluorng and Spoiled Duckie.

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- [Next.js 16](https://nextjs.org) (App Router)
- [Cosmic](https://www.cosmicjs.com/docs) headless CMS
- [Tailwind CSS](https://tailwindcss.com)
- TypeScript

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 18+
- A Cosmic account with a bucket containing `categories`, `products`, and `reviews` object types

### Installation

```bash
bun install
```

Set up your environment variables (these are provided automatically when cloned via Cosmic):

```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
```

Run the development server:

```bash
bun dev
```

## Cosmic SDK Examples

```typescript
import { cosmic } from '@/lib/cosmic'

// Fetch all products with their category (depth for connected objects)
const { objects: products } = await cosmic.objects
  .find({ type: 'products' })
  .props(['id', 'slug', 'title', 'metadata'])
  .depth(1)

// Fetch reviews for a specific product
const { objects: reviews } = await cosmic.objects
  .find({ type: 'reviews', 'metadata.product': productId })
  .depth(1)
```

## Cosmic CMS Integration

This app reads three object types from your Cosmic bucket:

- **categories** — `name`, `description`, `accent_color`, `cover_image`
- **products** — `name`, `artifact_number`, `description`, `price`, `gallery`, `inventory_status`, `condition`, `category`, `featured_drop`
- **reviews** — `reviewer_name`, `rating`, `review`, `product`

Learn more in the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment Options

- **Vercel** — connect the repo and add your `COSMIC_*` environment variables.
- **Netlify** — set the same environment variables in the dashboard.

<!-- README_END -->