import { motion } from 'framer-motion';
import { FloatingHearts } from './FloatingHearts';
import loveCatImage from '@/assets/love-cat.png';

interface CelebrationSectionProps {
  onContinue: () => void;
}

export const CelebrationSection = ({ onContinue }: CelebrationSectionProps) => {
  return (
    <section className="min-h-screen gradient-romantic flex flex-col items-center justify-center relative overflow-hidden px-4">
      <FloatingHearts />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="text-center z-10 max-w-2xl"
      >
        <motion.h2
          className="text-5xl sm:text-7xl font-cursive text-love-gradient mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Good choice, bugu 💕
        </motion.h2>

        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
          className="mb-8"
        >
          <img
            src={loveCatImage}
            alt="Cute cats in love"
            className="w-64 h-64 sm:w-80 sm:h-80 mx-auto rounded-3xl shadow-heart"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-2xl sm:text-3xl font-cursive text-foreground mb-12"
        >
          You are stuck with me, with all my love ❤️
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {['💕', '💖', '💗', '💓', '💝', '❤️'].map((heart, index) => (
            <motion.span
              key={index}
              className="text-4xl"
              animate={{
                y: [0, -10, 0],
                rotate: [-5, 5, -5],
              }}
              transition={{
                duration: 2,
                delay: index * 0.2,
                repeat: Infinity,
              }}
            >
              {heart}
            </motion.span>
          ))}
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={onContinue}
          className="mt-12 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold text-lg shadow-heart hover:shadow-love transition-all hover:scale-105"
        >
          Continue our love story 💝
        </motion.button>
      </motion.div>
    </section>
  );
};
