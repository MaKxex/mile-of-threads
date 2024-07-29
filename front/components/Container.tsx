// components/Container.tsx
import React from 'react';
import { IContainer } from '@/lib/interfaces';

export function Container({ children, className = '' }: IContainer) {
  return (
    <div className={`container mx-auto p-4 ${className}`}>
      {children}
    </div>
  );
}