import { Children, Fragment, ReactNode } from 'react';

interface MetadataListProps {
  children: ReactNode;
}

export function MetadataList({ children }: MetadataListProps) {
  return (
    <div className="text-caption text-neutral-200">
      {Children.toArray(children).map((child, index) => (
        <Fragment key={index}>
          {child}
          {index < Children.count(children) - 1 && (
            <span className="inline-block text-[6px] w-[3px] h-[3px] bg-current rounded-full mx-[6px] align-middle" />
          )}
        </Fragment>
      ))}
    </div>
  );
}
