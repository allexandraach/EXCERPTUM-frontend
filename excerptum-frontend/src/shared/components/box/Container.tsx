import type { ReactNode } from 'react';

interface ContainerProps {
  keyText?: string;
  extraClass?: string;
  children: ReactNode;
}

export function Container({ keyText, extraClass, children }: ContainerProps) {
  return (
    <div key={keyText} className={`min-h-screen relative p-10 ${extraClass}`}>
      {children}
    </div>
  );
}
