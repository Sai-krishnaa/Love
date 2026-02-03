import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ChevronDown } from "lucide-react";

// ═══════════════════════════════════════════════════════════════
// 💯 100 REASONS WHY I LOVE YOU
// ═══════════════════════════════════════════════════════════════
const allReasons = [
  "Your beautiful smile lights up my world",
  "The way you laugh makes my heart melt",
  "You always know how to make me feel better",
  "Your kindness inspires me every day",
  "The way you look at me like I'm your whole world",
  "You understand me like no one else",
  "Your hugs feel like home",
  "You make ordinary moments extraordinary",
  "The way you support all my dreams",
  "Your beautiful eyes that I get lost in",
  "How you always think of others first",
  "Your sense of humor matches mine perfectly",
  "The cute way you scrunch your nose",
  "You make me want to be a better person",
  "Your passion for the things you love",
  "The way you hold my hand",
  "You're my best friend and my soulmate",
  "How you never give up on us",
  "Your patience with all my quirks",
  "The adorable way you say my name",
  "You make my heart skip a beat",
  "Your warmth and gentle nature",
  "How you remember the little things",
  "The way you dance when no one's watching",
  "Your creativity and imagination",
  "How you make every day an adventure",
  "Your strength through difficult times",
  "The way you believe in me",
  "Your kisses that make everything better",
  "How you complete my sentences",
  "Your beautiful heart inside and out",
  "The comfort of falling asleep with you",
  "How you make me laugh until I cry",
  "Your cute morning voice",
  "The way you care for everyone around you",
  "How you always see the good in people",
  "Your determination and ambition",
  "The way you fight for what's right",
  "How you make me feel safe",
  "Your thoughtful surprises",
  "The way you listen without judging",
  "How you accept all of me",
  "Your beautiful soul",
  "The way you make me feel loved",
  "How you're always there when I need you",
  "Your intelligence that amazes me",
  "The way you cuddle up next to me",
  "How you make everything more fun",
  "Your encouraging words",
  "The way you brighten my darkest days",
  "How you inspire me constantly",
  "Your unconditional love",
  "The way you know what I'm thinking",
  "How you make me feel special",
  "Your beautiful laugh that's contagious",
  "The way you care about my happiness",
  "How you make me feel understood",
  "Your adorable quirks that I adore",
  "The way you make my heart flutter",
  "How you always root for me",
  "Your tender loving care",
  "The way you fit perfectly in my arms",
  "How you make life worth living",
  "Your sweet messages that make my day",
  "The way you look when you're concentrating",
  "How you never let me feel alone",
  "Your warmth on cold nights",
  "The way you sing along to our songs",
  "How you make every moment count",
  "Your gentleness with my heart",
  "The way you make ordinary feel magical",
  "How you always have my back",
  "Your loving heart that chose me",
  "The way you say I love you",
  "How you make me feel complete",
  "Your endless support and encouragement",
  "The way you treasure our memories",
  "How you bring out the best in me",
  "Your beautiful spirit",
  "The way you make me feel at peace",
  "How you're my home wherever we are",
  "Your sweet gestures of love",
  "The way you prioritize our love",
  "How you make every challenge easier",
  "Your romantic surprises",
  "The way you hold me close",
  "How you make me feel cherished",
  "Your loyalty that never wavers",
  "The way you dream with me",
  "How you make even silence comfortable",
  "Your tender kisses on my forehead",
  "The way you celebrate my successes",
  "How you comfort me when I'm sad",
  "Your beautiful presence in my life",
  "The way you complete my heart",
  "How you make me believe in forever",
  "Your promise to love me always",
  "The way you are my everything",
  "How you make me the luckiest person",
  "Because you're simply you 💕",
];

const INITIAL_COUNT = 12;
const LOAD_MORE_COUNT = 24;

export const ReasonsSection = () => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const displayedReasons = allReasons.slice(0, visibleCount);
  const hasMore = visibleCount < allReasons.length;

  const loadMore = () => {
    setVisibleCount((prev) =>
      Math.min(prev + LOAD_MORE_COUNT, allReasons.length)
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 140, damping: 16 },
    },
  };

  return (
    <section className="min-h-screen gradient-romantic py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4 text-5xl">💯</div>
          <h2 className="text-4xl sm:text-6xl font-cursive text-love-gradient mb-4">
            100 Reasons Why I Love You
          </h2>
          <p className="text-lg text-muted-foreground">
            Every reason is a piece of my heart 💕
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {displayedReasons.map((reason, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                className="relative p-5 rounded-2xl bg-card/80 backdrop-blur-sm shadow-soft border border-primary/10 h-full"
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                <p className="text-foreground/90 text-sm leading-relaxed pt-2">
                  {reason}
                </p>

                <motion.div
                  className="absolute bottom-2 right-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4 text-primary fill-primary" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More */}
        {hasMore ? (
          <div className="text-center mt-12">
            <motion.button
              onClick={loadMore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-heart"
            >
              Show More Reasons 💕
              <ChevronDown className="w-5 h-5" />
            </motion.button>
            <p className="text-sm text-muted-foreground mt-3">
              {visibleCount} of {allReasons.length} reasons
            </p>
          </div>
        ) : (
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-card shadow-love">
              <Heart className="w-5 h-5 text-primary fill-primary" />
              <span className="font-cursive text-xl text-love-gradient">
                And a million more reasons... 💕
              </span>
              <Heart className="w-5 h-5 text-primary fill-primary" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
