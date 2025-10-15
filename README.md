# Next.js Laravel Sanctum Authentication Kit

A modern, production-ready authentication system for Next.js applications that seamlessly integrates with Laravel Sanctum API. Built with TypeScript, featuring beautiful UI components, state management, and comprehensive form validation.

## ✨ Features

- 🔐 **Complete Authentication Flow** - Login, Register, and Logout functionality
- 🎨 **Modern UI Components** - Built with shadcn/ui and Radix UI primitives
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🔄 **State Management** - Zustand for efficient state management with persistence
- ✅ **Form Validation** - Zod schema validation with React Hook Form
- 🚀 **TypeScript** - Full type safety throughout the application
- 🔒 **Token Management** - Automatic token handling and refresh
- 🌐 **API Integration** - Axios-based HTTP client with interceptors
- 🎯 **Error Handling** - Comprehensive error handling with user-friendly messages
- 📦 **Modular Architecture** - Clean, maintainable code structure
- 🏗️ **Laravel-Inspired Structure** - Follows Laravel conventions and architectural patterns

## 🛠️ Tech Stack

### Core Technologies

- **Next.js 15.5.4** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5** - Type safety and developer experience

### UI & Styling

- **shadcn/ui** - Modern component library
- **Radix UI** - Accessible component primitives
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **next-themes** - Theme management

### State Management & Forms

- **Zustand 5.0.8** - Lightweight state management
- **React Hook Form 7.65.0** - Performant forms
- **Zod 4.1.12** - Schema validation
- **@hookform/resolvers** - Form validation integration

### HTTP & Data Fetching

- **Axios 1.12.2** - HTTP client
- **SWR 2.3.6** - Data fetching and caching

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Turbopack** - Fast bundling

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Laravel backend with Sanctum configured

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/hasemon/nextjs-laravel-authkit.git
   cd authkitlarapi
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:

   ```env
   NEXT_PUBLIC_API_URL=http://localhost:8000/api
   NEXT_PUBLIC_APP_NAME=Your App Name
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes
│   │   ├── login/         # Login page
│   │   └── register/      # Register page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── pages/auth/        # Authentication forms
│   ├── ui/               # shadcn/ui components
│   ├── app-logo.tsx      # Application logo
│   ├── nav-bar.tsx       # Navigation component
│   └── user-dropdown.tsx # User menu
├── lib/                   # Utility libraries
│   ├── request.ts        # Axios configuration
│   ├── useAuth.ts       # Authentication hooks
│   ├── useGet.ts        # Data fetching hooks
│   └── utils.ts         # Utility functions
├── routes/               # Route definitions
│   ├── api.ts           # API endpoints
│   └── web.ts           # Web routes
├── store/                # State management
│   └── useAuthStore.ts  # Authentication store
└── types/               # TypeScript definitions
    └── nav-link-type.d.ts
```

## 🏗️ Laravel Architecture Inspiration

This project is heavily inspired by Laravel's elegant architecture and follows many of its conventions:

### File Naming Conventions

- **Controllers** → `useAuth.ts` (similar to Laravel's AuthController)
- **Models** → `useAuthStore.ts` (state management like Eloquent models)
- **Routes** → `api.ts` and `web.ts` (mirroring Laravel's route files)
- **Middleware** → Request/Response interceptors in `request.ts`
- **Services** → Authentication service pattern in `useAuth.ts`

### Architectural Patterns

- **Service Layer** - Authentication logic separated into services
- **Repository Pattern** - State management with Zustand stores
- **Middleware** - Axios interceptors for request/response handling
- **Form Requests** - Zod validation schemas (similar to Laravel Form Requests)
- **Resource Controllers** - API endpoint organization
- **Blade Components** → React Components with similar structure

### Laravel Sanctum Integration

- **Token-based Authentication** - Seamless integration with Laravel Sanctum
- **CSRF Protection** - Built-in CSRF token handling
- **Session Management** - Persistent authentication state
- **API Routes** - RESTful endpoint structure matching Laravel conventions

This approach makes the codebase familiar to Laravel developers while leveraging the power of React and Next.js.

## 🔧 Configuration

### Laravel Sanctum Backend Setup

Your Laravel backend should have the following API endpoints:

```php
// routes/api.php
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
Route::get('/user', [AuthController::class, 'user'])->middleware('auth:sanctum');
```

### API Configuration

Update the API endpoints in `src/routes/api.ts`:

```typescript
const api = {
  auth: {
    user: () => "user",
    register: () => "register",
    login: () => "login",
    logout: () => "logout",
  },
};
```

## 🎯 Usage Examples

### Authentication Hook

```typescript
import { useAuth } from "@/lib/useAuth";

// Login
const handleLogin = async (credentials) => {
  try {
    await useAuth.login(credentials);
    // User is now logged in
  } catch (error) {
    // Handle error
  }
};

// Register
const handleRegister = async (userData) => {
  try {
    await useAuth.register(userData);
    // User is automatically logged in
  } catch (error) {
    // Handle error
  }
};

// Logout
const handleLogout = async () => {
  await useAuth.logout();
  // User is now logged out
};

// Check authentication status
const isAuthenticated = useAuth.isAuthenticated();
const currentUser = useAuth.getCurrentUser();
```

### State Management

```typescript
import useAuthStore from "@/store/useAuthStore";

function MyComponent() {
  const { token, user, setAuth, clearAuth } = useAuthStore();

  // Access authentication state
  const isLoggedIn = !!token;

  // Update authentication state
  setAuth(token, user);

  // Clear authentication state
  clearAuth();
}
```

### Form Components

The project includes pre-built form components with validation:

- `LoginForm` - User login with email/password
- `RegisterForm` - User registration with validation
- Form validation using Zod schemas
- Error handling and loading states

## 🎨 UI Components

Built with shadcn/ui, the project includes:

- **Form Components** - Input, Button, Field with validation
- **Layout Components** - Card, Navigation, Dropdown
- **Feedback Components** - Toast notifications, Spinner
- **Accessibility** - ARIA labels, keyboard navigation

## 🔒 Security Features

- **Token Management** - Automatic token storage and refresh
- **Request Interceptors** - Automatic Bearer token attachment
- **Response Interceptors** - Handle token expiration
- **CSRF Protection** - Laravel Sanctum CSRF tokens
- **Input Validation** - Client and server-side validation

## 📱 Responsive Design

- Mobile-first approach
- Responsive navigation
- Touch-friendly interfaces
- Optimized for all screen sizes

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Laravel Sanctum](https://laravel.com/docs/sanctum) - API authentication
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Zustand](https://zustand-demo.pmnd.rs/) - State management
- [Radix UI](https://www.radix-ui.com/) - Accessible components

## 📞 Support

If you have any questions or need help, please:

- Open an issue on GitHub
- Check the documentation
- Join our community discussions

---

**Made with ❤️ for the open source community**
