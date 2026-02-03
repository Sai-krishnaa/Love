import { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Plane, Home, Dog, GraduationCap, Heart, Gem } from 'lucide-react';

// ═══════════════════════════════════════════════════════════════
// 🎯 COUPLE GOALS - EDIT YOUR GOALS HERE!
// Adjust progress percentages as you achieve them together
// ═══════════════════════════════════════════════════════════════
const coupleGoals = [
  {
    id: 1,
    title: "Travel the World",
    description: "Explore new places and create adventures together",
    icon: Plane,
    emoji: "✈️",
    progress: 25,
    color: "from-blue-400 to-cyan-400"
  },
  {
    id: 2,
    title: "Our Dream Home",
    description: "Build a cozy home filled with love and laughter",
    icon: Home,
    emoji: "🏡",
    progress: 40,
    color: "from-green-400 to-emerald-400"
  },
  {
    id: 3,
    title: "Adopt Pets",
    description: "Add furry members to our little family",
    icon: Dog,
    emoji: "🐶",
    progress: 60,
    color: "from-amber-400 to-orange-400"
  },
  {
    id: 4,
    title: "Learn Together",
    description: "Take classes and grow together as a couple",
    icon: GraduationCap,
    emoji: "🎓",
    progress: 35,
    color: "from-purple-400 to-violet-400"
  },
  {
    id: 5,
    title: "Date Nights",
    description: "Keep the romance alive with regular date nights",
    icon: Heart,
    emoji: "💕",
    progress: 80,
    color: "from-pink-400 to-rose-400"
  },
  {
    id: 6,
    title: "Forever Together",
    description: "Build a lifetime of beautiful memories",
    icon: Gem,
    emoji: "💍",
    progress: 100,
    color: "from-primary to-accent"
  },
];

interface AnimatedProgressBarProps {
  progress: number;
  color: string;
}

const AnimatedProgressBar = ({ progress, color }: AnimatedProgressBarProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setWidth(progress), 200);
      return () => clearTimeout(timer);
    }
  }, [isInView, progress]);

  return (
    <div ref={ref} className="w-full h-3 bg-secondary rounded-full overflow-hidden">
      <motion.div
        className={`h-full rounded-full bg-gradient-to-r ${color}`}
        initial={{ width: 0 }}
        animate={{ width: `${width}%` }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </div>
  );
};

export const CoupleGoalsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 12 }
    }
  };

  return (
    <section className="min-h-screen gradient-romantic py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            className="text-5xl inline-block mb-4"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🎯
          </motion.span>
          <h2 className="text-4xl sm:text-6xl font-cursive text-love-gradient mb-4">
            Our Couple Goals
          </h2>
          <p className="text-lg text-muted-foreground">
            Dreams we're building together, one step at a time 💕
          </p>
        </motion.div>

        {/* Goals Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {coupleGoals.map((goal) => {
            const IconComponent = goal.icon;
            return (
              <motion.div
                key={goal.id}
                variants={itemVariants}
                className="group"
              >
                <motion.div
                  className="bg-card rounded-2xl p-6 shadow-soft hover:shadow-love transition-all duration-300 h-full border border-primary/10"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  {/* Icon and emoji */}
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${goal.color} flex items-center justify-center shadow-md`}
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </motion.div>
                    <motion.span
                      className="text-2xl"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: goal.id * 0.2 }}
                    >
                      {goal.emoji}
                    </motion.span>
                  </div>

                  {/* Title and description */}
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {goal.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {goal.description}
                  </p>

                  {/* Progress bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-semibold text-primary">{goal.progress}%</span>
                    </div>
                    <AnimatedProgressBar progress={goal.progress} color={goal.color} />
                  </div>

                  {/* Completion heart for 100% */}
                  {goal.progress === 100 && (
                    <motion.div
                      className="mt-4 flex items-center gap-2 text-primary"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Heart className="w-4 h-4 fill-primary" />
                      <span className="text-sm font-medium">Achieved together!</span>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
