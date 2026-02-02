import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const EscapingButton = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [escapeCount, setEscapeCount] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const messages = [
    "Nice try! 🙈",
    "Nope! 😜",
    "Can't catch me! 💨",
    "Too slow! 🐌",
    "Keep trying! 😂",
    "You really want to click No? 😤",
    "Just click Yes! 💕",
    "I don't think so! 🙅",
  ];

  const handleEscape = useCallback(() => {
    if (!containerRef.current) return;
    
    const container = containerRef.current.getBoundingClientRect();
    const maxX = 200;
    const maxY = 150;
    
    const newX = (Math.random() - 0.5) * maxX * 2;
    const newY = (Math.random() - 0.5) * maxY * 2;
    
    setPosition({ x: newX, y: newY });
    setEscapeCount((prev) => prev + 1);
  }, []);

  return (
    <div ref={containerRef} className="relative flex items-center justify-center min-h-[120px]">
      <motion.div
        animate={{ x: position.x, y: position.y }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <Button
          ref={buttonRef}
          variant="outline"
          size="lg"
          className="text-lg px-8 py-6 border-2 border-muted-foreground/30 bg-card hover:bg-muted transition-all"
          onMouseEnter={handleEscape}
          onTouchStart={handleEscape}
          onClick={(e) => {
            e.preventDefault();
            handleEscape();
          }}
        >
          No 🙃
        </Button>
      </motion.div>
      {escapeCount > 0 && (
        <motion.p
          key={escapeCount}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute -bottom-8 text-sm text-muted-foreground font-medium"
        >
          {messages[escapeCount % messages.length]}
        </motion.p>
      )}
    </div>
  );
};
