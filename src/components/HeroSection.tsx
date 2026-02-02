import { motion } from 'framer-motion';
import { FloatingHearts } from './FloatingHearts';
import { YesButton } from './YesButton';
import { EscapingButton } from './EscapingButton';

interface HeroSectionProps {
  onYesClick: () => void;
}

export const HeroSection = ({ onYesClick }: HeroSectionProps) => {
  return (
    <section className="min-h-screen gradient-romantic flex flex-col items-center justify-center relative overflow-hidden px-4">
      <FloatingHearts />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center z-10"
      >
        <motion.h1
          className="text-5xl sm:text-7xl md:text-8xl font-cursive text-love-gradient mb-6"
          animate={{ 
            scale: [1, 1.02, 1],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          Will you be my Valentine?
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl sm:text-2xl text-muted-foreground font-medium mb-12"
        >
          Will you be mine? 💕
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <YesButton onClick={onYesClick} />
          <EscapingButton />
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-20 left-10 text-6xl opacity-50"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        💝
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-10 text-5xl opacity-50"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        💖
      </motion.div>
      <motion.div
        className="absolute top-40 right-20 text-4xl opacity-40"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        💗
      </motion.div>
    </section>
  );
};
