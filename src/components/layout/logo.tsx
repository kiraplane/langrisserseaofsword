'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <span
      aria-label="Langrisser: Sea of Sword Wiki logo"
      title="Langrisser: Sea of Sword Wiki"
      className={cn(
        'relative inline-flex h-10 w-20 shrink-0 items-center justify-center overflow-hidden',
        'drop-shadow-[0_0_18px_rgba(110,210,197,0.22)]',
        className
      )}
    >
      <Image
        src="/langrisserseaofsword/logo.png"
        alt=""
        fill
        sizes="80px"
        className="object-contain"
      />
    </span>
  );
}
