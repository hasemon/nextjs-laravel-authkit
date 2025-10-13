import request from "./request";
import useAuthStore from "@/store/useAuthStore";
import api from "@/routes/api";

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

interface AuthResponse {
  message: string;
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    two_factor_confirmed_at: string | null;
  };
}

export const useAuth = {
  async login(credentials: LoginData): Promise<AuthResponse> {
    try {
      const response = await request.post<AuthResponse>(
        api.auth.login(),
        credentials
      );
      const { token, user } = response.data;

      // Store auth data in Zustand store
      useAuthStore.getState().setAuth(token, user);

      return response.data;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  },

  async register(userData: RegisterData): Promise<AuthResponse> {
    try {
      const response = await request.post<AuthResponse>(
        api.auth.register(),
        userData
      );
      const { token, user } = response.data;

      // Auto-login after successful registration
      useAuthStore.getState().setAuth(token, user);

      return response.data;
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  },

  async logout(): Promise<void> {
    try {
      // Call logout endpoint if needed
      await request.post(api.auth.logout());
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      // Clear auth state regardless of API call success
      useAuthStore.getState().clearAuth();
    }
  },

  // Check if user is authenticated
  isAuthenticated(): boolean {
    return !!useAuthStore.getState().token;
  },

  // Get current user
  getCurrentUser() {
    return useAuthStore.getState().user;
  },

  // Get current token
  getToken(): string | null {
    return useAuthStore.getState().token;
  },
};

export default useAuth;
