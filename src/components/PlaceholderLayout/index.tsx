import React from 'react';
import uniqueString from 'unique-string';

interface PlaceholderLayoutProps {
  rows?: number;
  className?: string;
}

const PlaceholderLayout: React.FC<PlaceholderLayoutProps> = ({
  children,
  rows = 1,
  className = '',
}) => {
  return (
    <div className={`placeholder-layout ${className}`}>
      {Array.from({ length: rows }).map(() => (
        <div key={uniqueString()}>{children}</div>
      ))}
    </div>
  );
};

export default PlaceholderLayout;
