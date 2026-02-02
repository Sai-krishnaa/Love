import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface YesButtonProps {
  onClick: () => void;
}

const loveMessages = [
  "Click me! I'm waiting... 💕",
  "You know you want to! 😍",
  "Best decision ever! 💖",
  "Forever starts here! 💗",
  "My heart is yours! 💝",
  "Say yes to love! 🥰",
];

export const YesButton = ({ onClick }: YesButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [hearts, setHearts] = useState<number[]>([]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setCurrentMessage(Math.floor(Math.random() * loveMessages.length));
  };

  const handleClick = () => {
    // Create burst of hearts
    const newHearts = Array.from({ length: 10 }, (_, i) => Date.now() + i);
    setHearts(newHearts);
    setTimeout(() => onClick(), 500);
  };

  return (
    <div className="relative">
      <Tooltip open={isHovered}>
        <TooltipTrigger asChild>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="text-xl px-12 py-8 bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-heart hover:shadow-love transition-all duration-300 relative overflow-hidden"
              onClick={handleClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="relative z-10 flex items-center gap-2">
                Yes 💖
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent to-primary"
                initial={{ x: '-100%' }}
                animate={{ x: isHovered ? '0%' : '-100%' }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent 
          side="top" 
          className="bg-card border-primary/20 text-foreground px-4 py-2 text-sm font-medium"
        >
          {loveMessages[currentMessage]}
        </TooltipContent>
      </Tooltip>
      
      {/* Heart burst effect */}
      <AnimatePresence>
        {hearts.map((id, index) => (
          <motion.span
            key={id}
            initial={{ 
              opacity: 1, 
              scale: 0,
              x: 0,
              y: 0 
            }}
            animate={{ 
              opacity: 0, 
              scale: 1.5,
              x: (Math.random() - 0.5) * 200,
              y: -100 - Math.random() * 100
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="absolute top-1/2 left-1/2 text-2xl pointer-events-none"
            onAnimationComplete={() => {
              setHearts((prev) => prev.filter((h) => h !== id));
            }}
          >
            {['💕', '💖', '💗', '💓', '💝'][index % 5]}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
};
