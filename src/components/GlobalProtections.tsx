'use client';

import { useEffect } from 'react';

export default function GlobalProtections() {
  useEffect(() => {
    // Allow inspect and right-click during local development
    if (process.env.NODE_ENV === 'development') {
      return;
    }

    // Prevent right-click context menu globally in production
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return null;
}
