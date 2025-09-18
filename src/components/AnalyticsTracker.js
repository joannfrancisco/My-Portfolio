// src/components/AnalyticsTracker.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag("config", "G-EB6GXHJXE5", {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

export default AnalyticsTracker;
