import { useEffect, useState } from "react";

export default function Route({ path, children }) {
  const [currentPath, setCurentPath] = useState(window.location.pathname);
  useEffect(() => {
    const onLocationChange = () => {
      console.log("Location Change");
      setCurentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);
  }, []);
  return currentPath === path ? children : null;
}
