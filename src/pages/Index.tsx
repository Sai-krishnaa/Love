import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HeroSection } from '@/components/HeroSection';
import { CelebrationSection } from '@/components/CelebrationSection';
import { LoveQuiz } from '@/components/LoveQuiz';
import { ImageGallery } from '@/components/ImageGallery';
import { PromisesSection } from '@/components/PromisesSection';

type Section = 'hero' | 'celebration' | 'quiz' | 'gallery' | 'promises';

const Index = () => {
  const [currentSection, setCurrentSection] = useState<Section>('hero');

  const handleYesClick = () => {
    setCurrentSection('celebration');
  };

  const handleContinue = () => {
    setCurrentSection('quiz');
  };

  const handleQuizComplete = () => {
    setCurrentSection('gallery');
  };

  const scrollToPromises = () => {
    setCurrentSection('promises');
  };

  return (
    <div className="min-h-screen gradient-romantic overflow-x-hidden">
      <AnimatePresence mode="wait">
        {currentSection === 'hero' && (
          <motion.div
            key="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <HeroSection onYesClick={handleYesClick} />
          </motion.div>
        )}

        {currentSection === 'celebration' && (
          <motion.div
            key="celebration"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <CelebrationSection onContinue={handleContinue} />
          </motion.div>
        )}

        {currentSection === 'quiz' && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            <LoveQuiz onComplete={handleQuizComplete} />
          </motion.div>
        )}

        {currentSection === 'gallery' && (
          <motion.div
            key="gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ImageGallery />
            <div className="gradient-romantic py-8 text-center">
              <motion.button
                onClick={scrollToPromises}
                className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold text-lg shadow-heart hover:shadow-love transition-all hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See my promises to you 💕
              </motion.button>
            </div>
          </motion.div>
        )}

        {currentSection === 'promises' && (
          <motion.div
            key="promises"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <PromisesSection />
            
            {/* Footer */}
            <footer className="gradient-romantic py-12 text-center">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-3xl font-cursive text-love-gradient mb-4">
                  Made with all my love 💝
                </p>
                <p className="text-muted-foreground">
                  Happy Valentine's Day, my love!
                </p>
                <div className="flex justify-center gap-2 mt-6">
                  {['💕', '💖', '💗', '💓', '💝'].map((heart, i) => (
                    <motion.span
                      key={i}
                      className="text-2xl"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ 
                        duration: 1,
                        delay: i * 0.1,
                        repeat: Infinity,
                      }}
                    >
                      {heart}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
