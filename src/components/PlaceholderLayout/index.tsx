import React from 'react';

interface PlaceholderLayoutProps {
  rows?: number;
  className?: string;
}

const PlaceholderLayout: React.FC<PlaceholderLayoutProps> = ({
  children,
  rows = 1,
  className = "",
}) => {
  return (
    <div className={`placeholder-layout ${className}`}>
      {Array.from({ length: rows }).map(() => (
        // eslint-disable-next-line react/jsx-key
        <div>{children}</div>
      ))}
    </div>
  );
};

export default PlaceholderLayout;
