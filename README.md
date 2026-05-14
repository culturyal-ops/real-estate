# BuildBase - Real Estate & Builder Management Platform

A production-ready, full-stack real estate management platform built with Next.js 14, Payload CMS 3.0, and PostgreSQL. Features a powerful admin CMS for managing properties, lands, and projects, plus a beautiful public-facing website for visitors.

## 🚀 Features

### Admin Features (CMS)
- **Full CRUD Operations**: Add, edit, delete properties, lands, and projects
- **Image Management**: Drag-and-drop image uploads via Cloudinary
- **Status Management**: Mark listings as Available, Booked, or Sold
- **Lead Management**: View and manage all inquiries from the website
- **Rich Text Editor**: Lexical editor for detailed descriptions
- **SEO Controls**: Meta titles and descriptions for each listing
- **Media Library**: Centralized media management with Cloudinary integration

### Public Website Features
- **Advanced Search & Filtering**: Filter by price, area, bedrooms, location, etc.
- **Interactive Map View**: Mapbox integration showing all listings
- **Property Detail Pages**: High-resolution galleries, floor plans, virtual tours
- **Lead Capture Forms**: Inquiry forms with email notifications
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **SEO Optimized**: Open Graph tags, meta descriptions, semantic HTML

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 14 (App Router, TypeScript) |
| CMS | Payload CMS 3.0 |
| Database | PostgreSQL |
| ORM | Drizzle (via Payload) |
| Image Storage | Cloudinary |
| Maps | Mapbox GL JS |
| Email | Resend |
| Styling | Tailwind CSS + shadcn/ui |
| Hosting | Vercel (Next.js) + Railway (PostgreSQL) |

## 📋 Prerequisites

- Node.js 18+ installed
- PostgreSQL database (local or cloud)
- Cloudinary account (free tier works)
- Mapbox account (free tier works)
- Resend account for emails (optional)

## 🚀 Quick Start

### 1. Clone and Install

```bash
# Install dependencies
npm install
```

### 2. Set Up Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit `.env` with your credentials:

```env
# Database - Get from Railway, Supabase, or local PostgreSQL
DATABASE_URI=postgresql://user:password@localhost:5432/buildbase

# Payload CMS - Generate a random string
PAYLOAD_SECRET=your-super-secret-random-string-here

# Cloudinary - Get from cloudinary.com dashboard
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Mapbox - Get from mapbox.com
NEXT_PUBLIC_MAPBOX_TOKEN=pk.your-mapbox-token

# Resend - Get from resend.com (optional)
RESEND_API_KEY=re_your_api_key
ADMIN_EMAIL=your-email@domain.com

# App URLs
NEXT_PUBLIC_SITE_URL=http://localhost:3000
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000
```

### 3. Set Up Database

```bash
# Generate Payload types and run migrations
npm run payload migrate:create
npm run payload migrate
```

### 4. Create Admin User

Start the dev server and create your first admin user:

```bash
npm run dev
```

Visit `http://localhost:3000/admin` and create your admin account.

### 5. Seed Sample Data (Optional)

```bash
npm run seed
```

This creates sample properties, lands, and projects for testing.

## 📁 Project Structure

```
buildbase/
├── src/
│   ├── app/
│   │   ├── (frontend)/          # Public pages
│   │   │   ├── page.tsx          # Homepage
│   │   │   ├── properties/       # Properties listing & detail
│   │   │   ├── lands/            # Lands listing & detail
│   │   │   ├── projects/         # Projects listing & detail
│   │   │   ├── map/              # Map view
│   │   │   └── contact/          # Contact page
│   │   ├── (payload)/            # Payload admin (auto-generated)
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── collections/              # Payload CMS collections
│   │   ├── Properties.ts
│   │   ├── Lands.ts
│   │   ├── Projects.ts
│   │   ├── Leads.ts
│   │   ├── Media.ts
│   │   └── Users.ts
│   ├── components/
│   │   ├── PropertyCard.tsx
│   │   ├── LandCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── FilterSidebar.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ui/                   # shadcn/ui components
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── resend.ts
│   │   └── mapbox.ts
│   └── payload.config.ts
├── public/
├── .env.example
├── package.json
├── tailwind.config.ts
├── next.config.ts
└── README.md
```

## 🎨 Design System

- **Typography**: DM Serif Display (headings) + DM Sans (body)
- **Colors**: 
  - Primary: Earthy brown (#8B6F47)
  - Background: White (#FFFFFF)
  - Text: Charcoal (#1F2937)
- **Components**: shadcn/ui for consistent, accessible UI
- **Inspiration**: Compass.com, RE/MAX - clean, luxury aesthetic

## 📝 Admin Guide (For Non-Technical Users)

### Accessing the Admin Panel

1. Go to `https://yourdomain.com/admin`
2. Log in with your email and password

### Adding a New Property

1. Click **Properties** in the sidebar
2. Click **Create New**
3. Fill in all fields:
   - Title, description, price
   - Bedrooms, bathrooms, area
   - Upload images (drag & drop)
   - Set location and coordinates
4. Click **Save**

### Marking a Property as Sold

1. Open the property
2. Change **Status** dropdown to "Sold"
3. Click **Save**
4. The "Inquire Now" button will automatically disappear from the website

### Managing Leads

1. Click **Leads** in the sidebar
2. View all inquiries from the website
3. Mark as "Contacted" or "Closed" as you follow up

### Uploading Images

- Drag and drop images into any image field
- Images are automatically uploaded to Cloudinary
- Recommended size: 1920x1080px for best quality

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Add all environment variables
4. Deploy!

### Database on Railway

1. Create a new PostgreSQL database on Railway
2. Copy the `DATABASE_URI` connection string
3. Add to your Vercel environment variables
4. Run migrations: `npm run payload migrate`

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Generate Payload types
npm run generate:types

# Open Payload admin locally
npm run payload

# Seed sample data
npm run seed
```

## 📧 Email Notifications

When a visitor submits an inquiry:
1. Admin receives an email with lead details
2. Visitor receives a confirmation email
3. Lead is saved in the admin panel under "Leads"

Configure Resend in `.env` to enable this feature.

## 🗺️ Map Integration

The map view shows all properties, lands, and projects as pins:
- **Blue pins**: Properties
- **Green pins**: Lands
- **Orange pins**: Projects

Click any pin to see a preview card with details.

## 🎯 Key Behaviors

### Status-Based UI

- **Available**: Shows green badge, "Inquire Now" button visible
- **Booked**: Shows amber badge, inquiry button hidden
- **Sold**: Shows red badge, inquiry button hidden, "No longer available" message

### Auto-Generated Slugs

- Slugs are automatically created from titles (e.g., "Luxury Villa" → "luxury-villa")
- Admin can manually override if needed

### Image Optimization

- All images served via Cloudinary CDN
- Automatic WebP conversion
- Responsive image sizes
- Lazy loading below the fold

## 🆘 Troubleshooting

### Database Connection Issues

```bash
# Test your DATABASE_URI
psql "postgresql://user:password@host:5432/buildbase"
```

### Cloudinary Upload Fails

- Check your API credentials in `.env`
- Ensure `CLOUDINARY_CLOUD_NAME`, `API_KEY`, and `API_SECRET` are correct

### Admin Panel Not Loading

- Clear browser cache
- Check `PAYLOAD_SECRET` is set in `.env`
- Ensure database migrations have run

## 📄 License

MIT License - feel free to use for commercial projects.

## 🤝 Support

For issues or questions:
- Check the [Payload CMS docs](https://payloadcms.com/docs)
- Check the [Next.js docs](https://nextjs.org/docs)
- Open an issue on GitHub

---

**Built with ❤️ using Next.js, Payload CMS, and modern web technologies.**
