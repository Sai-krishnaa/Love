import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

// ═══════════════════════════════════════════════════════════════
// ❤️ LOVE CALCULATOR - All values are 100% because love is perfect!
// You can adjust these for fun, but we know the truth 💕
// ═══════════════════════════════════════════════════════════════
const compatibilityBars = [
  { name: "Chemistry", value: 100, color: "from-pink-500 to-rose-500", emoji: "⚗️" },
  { name: "Understanding", value: 100, color: "from-purple-500 to-violet-500", emoji: "🧠" },
  { name: "Trust", value: 100, color: "from-blue-500 to-cyan-500", emoji: "🤝" },
  { name: "Love", value: 100, color: "from-red-500 to-pink-500", emoji: "❤️" },
];

interface AnimatedBarProps {
  name: string;
  value: number;
  color: string;
  emoji: string;
  delay: number;
}

const AnimatedBar = ({ name, value, color, emoji, delay }: AnimatedBarProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setWidth(value), delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, value, delay]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-lg">{emoji}</span>
          <span className="font-medium text-foreground">{name}</span>
        </div>
        <motion.span
          className="font-bold text-primary"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ delay: delay / 1000 + 1 }}
        >
          {value}%
        </motion.span>
      </div>
      <div className="h-4 bg-secondary rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1.5, ease: "easeOut", delay: delay / 1000 }}
        />
      </div>
    </div>
  );
};

export const LoveCalculator = () => {
  const circleRef = useRef(null);
  const isInView = useInView(circleRef, { once: true });
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        let current = 0;
        const interval = setInterval(() => {
          current += 2;
          if (current >= 100) {
            current = 100;
            clearInterval(interval);
          }
          setPercentage(current);
        }, 30);
        return () => clearInterval(interval);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const circumference = 2 * Math.PI * 90;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <section className="min-h-screen gradient-romantic py-20 px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="flex justify-center gap-2 mb-4"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {['💕', '❤️', '💕'].map((heart, i) => (
              <motion.span
                key={i}
                className="text-4xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              >
                {heart}
              </motion.span>
            ))}
          </motion.div>
          <h2 className="text-4xl sm:text-6xl font-cursive text-love-gradient mb-4">
            Love Calculator
          </h2>
          <p className="text-lg text-muted-foreground">
            Scientifically proven by love 💖
          </p>
        </motion.div>

        {/* Main Calculator */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Circular Percentage */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div ref={circleRef} className="relative w-56 h-56">
              {/* Background circle */}
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="112"
                  cy="112"
                  r="90"
                  fill="none"
                  stroke="hsl(var(--secondary))"
                  strokeWidth="12"
                />
                {/* Animated progress circle */}
                <motion.circle
                  cx="112"
                  cy="112"
                  r="90"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  style={{ transition: 'stroke-dashoffset 0.5s ease' }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Center content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <motion.span
                  className="text-5xl font-bold text-love-gradient"
                  animate={{ scale: percentage === 100 ? [1, 1.1, 1] : 1 }}
                  transition={{ duration: 1, repeat: percentage === 100 ? Infinity : 0 }}
                >
                  {percentage}%
                </motion.span>
                <span className="text-sm text-muted-foreground mt-1">Perfect Match</span>
              </div>

              {/* Sparkles around circle */}
              {percentage === 100 && (
                <>
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      style={{
                        top: `${20 + Math.random() * 60}%`,
                        left: `${20 + Math.random() * 60}%`,
                      }}
                      animate={{ 
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        rotate: [0, 180]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        delay: i * 0.4 
                      }}
                    >
                      <Sparkles className="w-4 h-4 text-primary" />
                    </motion.div>
                  ))}
                </>
              )}
            </div>

            {/* Hearts */}
            <motion.div
              className="flex gap-2 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: [1, 1.3, 1],
                    y: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 1, 
                    repeat: Infinity, 
                    delay: i * 0.2 
                  }}
                >
                  <Heart className="w-8 h-8 text-primary fill-primary" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Compatibility Bars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 bg-card rounded-2xl p-6 shadow-love"
          >
            <h3 className="text-2xl font-cursive text-love-gradient text-center mb-6">
              Our Compatibility 💕
            </h3>
            {compatibilityBars.map((bar, index) => (
              <AnimatedBar
                key={bar.name}
                name={bar.name}
                value={bar.value}
                color={bar.color}
                emoji={bar.emoji}
                delay={500 + index * 300}
              />
            ))}
          </motion.div>
        </div>

        {/* Playful text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <motion.p
            className="text-xl font-cursive text-muted-foreground"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ✨ Results verified by the universe ✨
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
