import { useState, useRef, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

interface DraggableProps {
  children: React.ReactNode;
  onPositionChange?: (position: Position) => void;
  bounds?: 'parent' | 'window';
}

export function Draggable({ children, onPositionChange, bounds = 'parent' }: DraggableProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const elementRef = useRef<HTMLDivElement>(null);
  const dragStartRef = useRef<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const dx = e.clientX - dragStartRef.current.x;
      const dy = e.clientY - dragStartRef.current.y;

      let newX = position.x + dx;
      let newY = position.y + dy;

      if (bounds === 'parent' && elementRef.current?.parentElement) {
        const parent = elementRef.current.parentElement;
        const parentRect = parent.getBoundingClientRect();
        const elementRect = elementRef.current.getBoundingClientRect();

        newX = Math.max(0, Math.min(newX, parentRect.width - elementRect.width));
        newY = Math.max(0, Math.min(newY, parentRect.height - elementRect.height));
      }

      setPosition({ x: newX, y: newY });
      onPositionChange?.({ x: newX, y: newY });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, position, onPositionChange, bounds]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
  };

  return (
    <div
      ref={elementRef}
      style={{
        position: 'absolute',
        transform: `translate(${position.x}px, ${position.y}px)`,
        cursor: isDragging ? 'grabbing' : 'grab',
        userSelect: 'none',
      }}
      onMouseDown={handleMouseDown}
    >
      {children}
    </div>
  );
}