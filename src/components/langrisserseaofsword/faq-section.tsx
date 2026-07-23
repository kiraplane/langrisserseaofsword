import type { GuideFaq } from '@/data/langrisserseaofsword/types';
import { cn } from '@/lib/utils';

export function FaqSection({
  className,
  items,
  title = 'FAQ',
}: {
  className?: string;
  items: GuideFaq[];
  title?: string;
}) {
  return (
    <section
      id="faq"
      className={cn(
        'rounded-xl border border-[#39505a] bg-[#0d2029] p-5 md:p-6',
        className
      )}
    >
      <h2 className="font-display text-2xl font-bold text-[#f5efe1]">
        {title}
      </h2>
      <div className="mt-5 grid gap-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-lg border border-[#39505a] bg-[#07131b] p-4"
          >
            <summary className="cursor-pointer font-semibold text-[#f5efe1] transition group-open:text-[#d8b060]">
              {item.question}
            </summary>
            <p className="mt-3 text-sm leading-7 text-[#aebcb8]">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
