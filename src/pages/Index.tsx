import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HeroSection } from '@/components/HeroSection';
import { CelebrationSection } from '@/components/CelebrationSection';
import { LoveQuiz } from '@/components/LoveQuiz';
import { LoveTimeline } from '@/components/LoveTimeline';
import { ImageGallery } from '@/components/ImageGallery';
import { ReasonsSection } from '@/components/ReasonsSection';
import { LoveNotesSection } from '@/components/LoveNotesSection';
import { CoupleGoalsSection } from '@/components/CoupleGoalsSection';
import { LoveCalculator } from '@/components/LoveCalculator';
import { FinalLoveLetter } from '@/components/FinalLoveLetter';
import { LeaveNoteSection } from '@/components/LeaveNoteSection';
import { PromisesSection } from '@/components/PromisesSection';

const Index = () => {
  const [started, setStarted] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  const handleYesClick = () => {
    setShowCelebration(true);
  };

  const handleContinue = () => {
    setStarted(true);
    setShowCelebration(false);
  };

  return (
    <div className="min-h-screen gradient-romantic overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!started && !showCelebration && (
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

        {showCelebration && (
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

        {started && (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Love Story Timeline */}
            <LoveTimeline />

            {/* Love Quiz */}
            <LoveQuiz onComplete={() => {}} />

            {/* Image Gallery */}
            <ImageGallery />

            {/* 100 Reasons Why I Love You */}
            <ReasonsSection />

            {/* Love Notes */}
            <LoveNotesSection />

            {/* Couple Goals */}
            <CoupleGoalsSection />

            {/* Love Calculator */}
            <LoveCalculator />

            {/* Promises Section */}
            <PromisesSection />

            {/* Final Love Letter */}
            <FinalLoveLetter />

            {/* Leave Me a Love Note */}
            <LeaveNoteSection />

            {/* Footer */}
            <footer className="gradient-romantic py-12 text-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
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
