import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

// Easy to edit promises - customize these for your relationship
const lovePromises = [
  {
    emoji: "💕",
    promise: "I promise to always make you smile, even on your worst days",
  },
  {
    emoji: "🌹",
    promise: "I promise to be your biggest cheerleader and support your dreams",
  },
  {
    emoji: "☕",
    promise: "I promise to bring you coffee in bed (sometimes with breakfast too!)",
  },
  {
    emoji: "🌙",
    promise: "I promise to be your safe place when the world feels too heavy",
  },
  {
    emoji: "🎵",
    promise: "I promise to dance with you in the kitchen, even without music",
  },
  {
    emoji: "🌈",
    promise: "I promise to see the rainbow with you after every storm",
  },
  {
    emoji: "🍪",
    promise: "I promise to share the last cookie with you (maybe...)",
  },
  {
    emoji: "💝",
    promise: "I promise to love you more with each passing day, forever and always",
  },
];

export const PromisesSection = () => {
  return (
    <section className="min-h-screen gradient-romantic py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-6"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart className="w-16 h-16 text-primary mx-auto fill-primary" />
          </motion.div>
          <h2 className="text-4xl sm:text-6xl font-cursive text-love-gradient mb-4">
            My Promises to You 💝
          </h2>
          <p className="text-lg text-muted-foreground">
            Things I'll always do, because I love you
          </p>
        </motion.div>

        <div className="space-y-6">
          {lovePromises.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, x: 10 }}
              className="group"
            >
              <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft hover:shadow-love transition-all duration-300 border border-primary/10">
                <div className="flex items-center gap-4">
                  <motion.span
                    className="text-4xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, delay: index * 0.2, repeat: Infinity }}
                  >
                    {item.emoji}
                  </motion.span>
                  <p className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">
                    {item.promise}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-12 shadow-heart border border-primary/20">
            <motion.h3
              className="text-3xl sm:text-5xl font-cursive text-love-gradient mb-6"
              animate={{ 
                textShadow: [
                  '0 0 20px rgba(236, 72, 153, 0.3)',
                  '0 0 40px rgba(236, 72, 153, 0.5)',
                  '0 0 20px rgba(236, 72, 153, 0.3)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Forever Yours 💕
            </motion.h3>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto">
              These promises are just the beginning. Every day with you is a new adventure, 
              and I can't wait to see what our love story brings next.
            </p>
            
            <div className="flex justify-center gap-3 mt-8">
              {['💕', '💖', '💗', '💓', '💝', '❤️', '🩷', '💘'].map((heart, i) => (
                <motion.span
                  key={i}
                  className="text-2xl"
                  animate={{ 
                    y: [0, -10, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ 
                    duration: 1.5,
                    delay: i * 0.15,
                    repeat: Infinity,
                  }}
                >
                  {heart}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
