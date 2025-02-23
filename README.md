# Telewebion Task - Series Viewer

A Next.js application for viewing TV series details and episodes, built as a task for a senior front-end position. This project demonstrates modern React practices, efficient data management, and responsive UI design.

## 🚀 Features

- Series details page with hero banner and metadata
- Season-based episode listing with tabs
- Infinite scrolling for episode lists
- Responsive design (mobile-first approach)
- RTL support for Persian language
- Loading states and error handling
- Modern UI with smooth transitions

## 🛠 Technical Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data Fetching**: TanStack Query (React Query) v5 ,Mock API with simulated network delays
- **UI Components**: Custom-built components
- **Font**: Vazirmatn (Google Fonts)

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── _components/       # Page-specific components
│   ├── providers.tsx      # React Query provider setup
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Home page component
├── shared/
│   ├── components/        # Shared UI components
│   ├── hooks/            # Custom hooks and React Query hooks
│   ├── services/         # API service layer
│   ├── types/            # TypeScript type definitions
│   └── mocks/            # Mock data and generators
└── core/                  # Core application components
```

## 🔄 Data Management

### React Query Implementation

The project uses TanStack Query for efficient data management with the following setup:

```typescript
// Query Client Configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      refetchOnWindowFocus: false,
    },
  },
});
```

### Query Keys Structure

```typescript
export const seriesKeys = {
  all: ['series'] as const,
  details: () => [...seriesKeys.all, 'details'] as const,
  episodes: (seasonNumber: number) => [...seriesKeys.all, 'episodes', seasonNumber] as const,
};
```

### Custom Hooks

- `useSeriesDetails`: Fetches and caches series metadata
- `useSeasonEpisodes`: Handles infinite loading of episodes per season

## 📱 UI Components

### Responsive Design Breakpoints

- Mobile: Default
- Tablet: md (768px)
- Desktop: lg (1024px)

### Key Components

1. **Series Hero Section**
   - Full-width banner with gradient overlay
   - Responsive image sizing
   - RTL-aware text alignment

2. **Season Tabs**
   - Dynamic tab switching
   - Lazy loading of season data
   - Preserved tab state

3. **Episode Grid**
   - Responsive grid layout
   - Infinite scroll implementation
   - Loading states and error handling

## 🔄 Data Flow

1. **Initial Load**
   - Series details are fetched on page load
   - First season's episodes are pre-fetched
   - Loading states shown during data fetch

2. **Season Navigation**
   - Episodes fetched on tab change if not cached
   - Infinite scroll enabled per season
   - Data preserved across tab switches

3. **Pagination**
   - 16 episodes per page
   - "Show More" button appears when more data available
   - Smooth loading states during fetch

## 🎨 Styling Approach

- Utility-first with Tailwind CSS
- Mobile-first responsive design
- RTL support built-in
- Consistent spacing and typography
- Smooth transitions and animations

## 🎯 Design Tokens

### Colors
```css
--color-primary: #fd4141
--color-background: #000000
--color-foreground: #10151a
--color-neutral-900: #10151a
--color-neutral-400: #7b8794
--color-neutral-200: #cbd2d9
```

### Typography
```css
/* Caption */
--text-caption: 12.64px
--text-caption--line-height: 20px
--text-caption--font-weight: 500

/* Footnote */
--text-footnote: 11.24px
--text-footnote--line-height: 16px
--text-footnote--font-weight: 500

/* Body Small */
--text-body-small: 14px
--text-body-small--line-height: 20px
--text-body-small--font-weight: 500

/* Body */
--text-body: 16px
--text-body--line-height: 24px
--text-body--font-weight: 500

/* Title */
--text-title: 20px
--text-title--line-height: 28px
--text-title--font-weight: 700

/* Subtitle */
--text-subtitle: 18px
--text-subtitle--line-height: 24px
--text-subtitle--font-weight: 500
```

### Spacing
```css
--spacing: 8px
```

### Animations
```css
--animate-blink: 0.3s linear blink
```

## 🔧 Mock Data Structure

```typescript
interface Series {
  id: number;
  title: string;
  originalTitle: string;
  description: string;
  bannerImage: string;
  logoImage: string;
  rating: {
    imdb: number;
    userRating: number;
  };
  // ... other metadata
  seasons: Season[];
}

interface Episode {
  id: number;
  title: string;
  episodeName: string;
  imageUrl: string;
  duration: number;
  rate: number;
  season: number;
  episode: number;
}
```

## 🚀 Performance Considerations

1. **Data Caching**
   - React Query caching for API responses
   - Stale time of 1 minute
   - Preserved data across navigation

2. **Image Optimization**
   - Next.js Image component for optimization
   - Proper sizing and priority loading
   - Lazy loading for off-screen images

3. **Code Organization**
   - Component-based architecture
   - Lazy loading of season data
   - Efficient state management

## 🔍 Future Improvements

1. **API Integration**
   - Replace mock data with real API endpoints
   - Add error retry mechanisms
   - Implement proper authentication

2. **Performance**
   - Add Suspense boundaries
   - Implement proper error boundaries
   - Add skeleton loading states

3. **Features**
   - Add search functionality
   - Implement favorites system
   - Add episode details page

## 🏃‍♂️ Running the Project

1. Install dependencies:
   ```bash
   yarn install
   ```

2. Run the development server:
   ```bash
   yarn dev
   ```

3. Build for production:
   ```bash
   yarn build
   ```

## 📝 Development Decisions

1. **React Query Over SWR**
   - Better TypeScript support
   - More powerful features like infinite queries
   - Built-in devtools
   - Better caching mechanisms

2. **Mock Data Approach**
   - Simulated network delays for realism
   - Structured data generation
   - Easy to replace with real API

3. **Component Structure**
   - Atomic design principles
   - Clear separation of concerns
   - Reusable components

## 📄 License

This project is open-source and available under the MIT License.
