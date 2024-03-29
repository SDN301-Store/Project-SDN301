import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function useAuthentication() {
  const user = JSON.parse(localStorage.getItem('data'));
  const navigate = useNavigate();
  const location = useLocation();
  const isLogged = !!user;

  useEffect(() => {
    if (isLogged && location.pathname === '/login') {
      navigate('/');
    }
  }, [isLogged, location.pathname, navigate]);

  const isAdmin = isLogged && user?.role === 'admin';
  const role = (user?.role) || '';
  const name = user?.name || '';
  const currentUser = user || {};

  return {
    isLogged,
    isAdmin,
    role,
    name,
    currentUser,
  };
}