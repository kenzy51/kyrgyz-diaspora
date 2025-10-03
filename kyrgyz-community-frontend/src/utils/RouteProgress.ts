import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "nprogress/nprogress.css";
import NProgress from "nprogress";

export default function RouteProgress() {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    NProgress.set(0.4);
    NProgress.inc();   
    NProgress.done();   
  }, [location]);

  return null;
}
