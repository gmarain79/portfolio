import { useState } from 'react';
import { Layers } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface ProjectImageProps {
  src: string;
  alt: string;
  title: string;
  className?: string;
}

export function ProjectImage({ src, alt, title, className }: ProjectImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={cn(
          'flex h-full w-full flex-col items-center justify-center gap-2 bg-secondary/70 p-6 text-center text-muted-foreground',
          className
        )}
      >
        <Layers className="h-7 w-7 text-accent-brand/70" aria-hidden="true" />
        <span className="text-sm font-medium text-foreground">{title}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={cn('h-full w-full object-cover', className)}
    />
  );
}
