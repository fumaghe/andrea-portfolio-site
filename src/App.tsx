import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Index from '@/pages/Index';
import NotFound from '@/pages/NotFound';
import { useEffect } from 'react';

const queryClient = new QueryClient();

/* ---------------- Gradient che segue il cursore ---------------- */
const CursorSpotlight = () => {
  useEffect(() => {
    const el = document.getElementById('cursor‑spotlight');
    if (!el) return;
    const handle = (e: MouseEvent) => {
      el.style.left = `${e.clientX}px`;
      el.style.top  = `${e.clientY}px`;
    };
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  return (
    <div
      id="cursor‑spotlight"
      className="pointer-events-none fixed left-0 top-0 z-[-1] h-[500px] w-[500px]
                 -translate-x-1/2 -translate-y-1/2 rounded-full
                 bg-blue-600/40 blur-[160px] opacity-40"
    />
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CursorSpotlight />

      {/* Toast / Sonner  */}
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
