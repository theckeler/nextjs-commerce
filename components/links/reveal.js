'use client';

import ExpandMore from '@/components/icons/expandmore';
import LinksOutput from './components/output';

export default function LinksReveal({
  className,
  title,
  links,
  component,
  row = false,
  extra = null
}) {
  return (
    <div
      className={`sm:h-full sm:border-b-0 ${
        row ? 'flex-wrap items-center sm:flex' : ''
      } ${className}`}
    >
      {title && (
        <h3
          className={`relative flex truncate p-4 font-bold dark:text-neutral-400 sm:p-0 ${
            row ? 'sm:py-5' : 'sm:border-b sm:pb-3'
          } ${title.className}`}
        >
          <button
            className="absolute left-0 top-0 block h-full w-full sm:hidden"
            aria-label={title.copy}
            onClick={(e) => {
              e.currentTarget.parentElement.nextElementSibling.classList.toggle('hidden');
              e.currentTarget.nextElementSibling.classList.toggle('rotate-180');
            }}
          />
          {title.copy}
          <ExpandMore className="ml-auto w-6 dark:fill-white sm:hidden" />
        </h3>
      )}

      <div className="hidden sm:block sm:h-full">
        {component && component}

        {links && <LinksOutput links={links} row={row} />}

        {extra && (
          <div
            className={extra.className}
            dangerouslySetInnerHTML={{
              __html: extra.copy
            }}
          />
        )}
      </div>
      <hr className="border-t border-gray-300 dark:border-neutral-800 sm:hidden" />
    </div>
  );
}
