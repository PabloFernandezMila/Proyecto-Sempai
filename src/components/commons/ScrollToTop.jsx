import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//This function was added to scroll to top on redirect
export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
