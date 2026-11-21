import { Toaster as Sonner } from 'sonner';
import { useTheme } from '@/src/components/theme-provider';

export function Toaster() {
  const { theme } = useTheme();
  return (
    <Sonner
      theme={theme}
      position="bottom-right"
      toastOptions={{
        classNames: {
          toast: 'border border-border bg-card text-card-foreground shadow-lg font-sans text-sm',
          description: 'text-muted-foreground',
        },
      }}
    />
  );
}
