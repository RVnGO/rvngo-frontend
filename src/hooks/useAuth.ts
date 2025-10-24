import { useState, useEffect } from "react";
import { isAuthenticated } from "@/lib/auth";

/**
 * Custom hook for authentication state
 */
export function useAuth() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      const authenticated = isAuthenticated();
      setIsAuth(authenticated);
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  return { isAuthenticated: isAuth, isLoading };
}

