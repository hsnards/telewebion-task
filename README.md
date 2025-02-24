# Telewebion Task - Series Viewer

A Next.js application for viewing TV series details and episodes. This project demonstrates modern React practices, efficient data management, and responsive UI design.

## 🚀 Features

- Series details page with hero banner and metadata
- Season-based episode listing with tabs
- Infinite scrolling for episode lists
- Responsive design (mobile-first approach)
- RTL support for Persian language

## 🌟 Bonus Features

### 1. Advanced Header Behavior

- **Desktop Version**

  - Transparent background when not scrolled
  - Smooth transition to solid background color on scroll
  - Reference: `src/core/layout/Header.tsx` and `useScrollDirection` hook
  - Custom hover effects with underline animation for nav items

- **Mobile Version**
  - Auto-hide on scroll down
  - Reappear on first scroll up

### 2. Development Workflow

- **Code Quality Tools**
  - Lefthook for pre-commit hooks
  - Prettier configuration
  - Import sorting rules
  - Consistent code formatting

### 3. Advanced Data Management

- **Infinite Scroll Implementation**
  - Efficient pagination using React Query's useInfiniteQuery
  - "Show More" button with loading states
  - Automatic cache management
  - Reference: `src/app/_components/season-list/EpisodeList.tsx`

### 4. Enhanced Component Architecture

- **Reusable UI Components**
  - Button component with multiple variants (primary, outlined, text)
  - Custom Tab system with context-based state management
  - Lightweight Tag component
  - Container component with responsive padding
  - Loading and Error components with consistent styling

### 5. Error Handling

- **Comprehensive Error States**
  - Loading states for initial data fetch
  - Error boundaries for API failures
  - Empty state handling
  - Network error recovery

## 🛠 Technical Stack

- **Framework**: Next.js 15 (App Router)
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

## 🎯 Design Tokens

### Colors

```css
--color-primary: #fd4141 --color-background: #000000 --color-foreground: #10151a
  --color-neutral-900: #10151a --color-neutral-400: #7b8794 --color-neutral-200: #cbd2d9;
```

### Typography

```css
/* Caption */
--text-caption: 12.64px --text-caption--line-height: 20px --text-caption--font-weight: 500
  /* Footnote */ --text-footnote: 11.24px --text-footnote--line-height: 16px
  --text-footnote--font-weight: 500 /* Body Small */ --text-body-small: 14px
  --text-body-small--line-height: 20px --text-body-small--font-weight: 500 /* Body */
  --text-body: 16px --text-body--line-height: 24px --text-body--font-weight: 500 /* Title */
  --text-title: 20px --text-title--line-height: 28px --text-title--font-weight: 700 /* Subtitle */
  --text-subtitle: 18px --text-subtitle--line-height: 24px --text-subtitle--font-weight: 500;
```

### Spacing

```css
--spacing: 8px;
```

### Animations

```css
--animate-blink: 0.3s linear blink;
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

- Mobile: 360px
- Tablet: md (768px)
- Desktop: lg (1024px)

## 🔄 Data Flow

1. **Pagination**

   - 16 episodes per page
   - "Show More" button appears when more data available
   - Smooth loading states during fetch

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

2. **Performance**

   - Add Suspense boundaries
   - Implement proper error boundaries
   - Add skeleton loading states

3. **Features**
   - Add search menu
   - Implement Like, Dislike, Bookmark system
   - Add episode details page
   - Add bottom navigation in mobile screen

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
