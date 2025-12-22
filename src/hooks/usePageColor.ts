import { usePathname } from 'next/navigation';

export const usePageColor = () => {
  const pathname = usePathname();

  if (pathname?.startsWith('/about')) return '#0052CC'; // Blue
  if (pathname?.startsWith('/services')) return '#00B8D9'; // Cyan
  if (pathname?.startsWith('/works')) return '#8E44AD'; // Purple
  if (pathname?.startsWith('/tech')) return '#2ECC71'; // Green
  
  return '#3EA8FF'; // Default Light Blue
};
