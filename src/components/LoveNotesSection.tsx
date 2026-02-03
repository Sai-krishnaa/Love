import { motion } from 'framer-motion';
import { FloatingHearts } from './FloatingHearts';

// ═══════════════════════════════════════════════════════════════
// 💌 LOVE NOTES - EDIT YOUR MESSAGES HERE!
// Add your own heartfelt messages
// ═══════════════════════════════════════════════════════════════
const loveNotes = [
  {
    id: 1,
    message: "Every moment with you feels like a beautiful dream I never want to wake up from. 💕",
    color: "bg-yellow-100"
  },
  {
    id: 2,
    message: "You make my heart smile in ways I never knew were possible. 🥰",
    color: "bg-pink-100"
  },
  {
    id: 3,
    message: "I fall more in love with you every single day. 💖",
    color: "bg-orange-100"
  },
  {
    id: 4,
    message: "You're the reason I believe in forever. 💞",
    color: "bg-rose-100"
  },
  {
    id: 5,
    message: "My favorite place in the world is next to you. 🏠💕",
    color: "bg-yellow-100"
  },
  {
    id: 6,
    message: "Thank you for loving me the way you do. 💗",
    color: "bg-pink-100"
  },
  {
    id: 7,
    message: "You're not just my love, you're my best friend. 👫💕",
    color: "bg-amber-100"
  },
  {
    id: 8,
    message: "With you, every day is Valentine's Day. 💝",
    color: "bg-rose-100"
  },
];

export const LoveNotesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const noteVariants = {
    hidden: { opacity: 0, y: 30, rotate: -5 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotate: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 12 }
    }
  };

  return (
    <section className="min-h-screen gradient-romantic py-20 px-4 relative overflow-hidden">
      <FloatingHearts />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            className="text-5xl inline-block mb-4"
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💌
          </motion.span>
          <h2 className="text-4xl sm:text-6xl font-cursive text-love-gradient mb-4">
            Love Notes for You
          </h2>
          <p className="text-lg text-muted-foreground">
            Little messages from my heart to yours 💕
          </p>
        </motion.div>

        {/* Notes Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {loveNotes.map((note, index) => (
            <motion.div
              key={note.id}
              variants={noteVariants}
              className="group"
              style={{ 
                rotate: `${(index % 2 === 0 ? -2 : 2) + Math.random() * 2}deg`
              }}
            >
              <motion.div
                className={`${note.color} p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 relative min-h-[160px] flex items-center justify-center`}
                whileHover={{ 
                  scale: 1.05, 
                  rotate: 0,
                  y: -5,
                  zIndex: 10
                }}
                style={{
                  boxShadow: '2px 2px 10px rgba(0,0,0,0.1)'
                }}
              >
                {/* Tape effect */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-primary/20 rounded-sm" />
                
                <p className="text-foreground/80 text-center font-medium leading-relaxed">
                  {note.message}
                </p>

                {/* Heart decoration */}
                <motion.span
                  className="absolute bottom-2 right-3 text-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  💕
                </motion.span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Extra floating notes decoration */}
        <motion.div
          className="absolute top-40 -left-10 text-6xl opacity-20 hidden lg:block"
          animate={{ rotate: [0, 15, 0], y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          📝
        </motion.div>
        <motion.div
          className="absolute bottom-20 -right-10 text-5xl opacity-20 hidden lg:block"
          animate={{ rotate: [0, -15, 0], y: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        >
          💌
        </motion.div>
      </div>
    </section>
  );
};
