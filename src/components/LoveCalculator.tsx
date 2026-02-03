import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

// Love Intensity Meter — simplified, animated progress bar with labeled steps
export const LoveCalculator = () => {
  const steps = [
    'Like',
    'Love',
    'Adore',
    'Obsessed',
    "Can't Live Without!",
  ];

  // Percent positions for each step (approx)
  const stepPercents = [10, 30, 55, 80, 100];

  const [progress, setProgress] = useState(0);
  const [isMeasuring, setIsMeasuring] = useState(false);
  const [resultIndex, setResultIndex] = useState<number | null>(null);

  // Make the fill happen almost instantly on click
  const DURATION = 0.12; // very short animation for instant feel

  const measureLove = () => {
    if (isMeasuring) return;
    const idx = steps.length - 1; // always show the full result
    setResultIndex(idx);
    setIsMeasuring(true);
    setProgress(100); // fill to 100%

    // Small delay to keep the measuring state briefly for UX
    setTimeout(() => setIsMeasuring(false), 400);
  };

  const resetMeter = () => {
    if (isMeasuring) return;
    setProgress(0);
    setResultIndex(null);
  };

  return (
    <section className="min-h-screen gradient-romantic py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-6xl font-cursive text-love-gradient mb-4">
            Love Intensity Meter <span className="ml-2">💖</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Measure our love — click the button and watch the meter fill ✨
          </p>
        </div>

        <div className="bg-card/80 rounded-2xl p-8 shadow-heart border border-primary/10">
          <div className="mb-6">
            <div className="relative w-full bg-pink-100 rounded-full h-6 md:h-8 overflow-hidden">
              {/* Filled bar */}
              <motion.div
                className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-pink-500 to-rose-400 shadow-md"
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: DURATION, ease: 'easeOut' }}
              />

              {/* Marker */}
              <div
                className="absolute -top-3 md:-top-4"
                style={{ left: `${progress}%`, transform: 'translateX(-50%)' }}
                aria-hidden
              >
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white shadow flex items-center justify-center text-pink-500">
                  <span className="text-xs md:text-sm">{progress > 0 ? '💘' : ''}</span>
                </div>
              </div>
            </div>

            {/* Labels */}
            <div className="mt-4 flex justify-between text-sm text-muted-foreground px-1">
              {steps.map((label) => (
                <div key={label} className="text-center w-1/5">
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <button
              onClick={measureLove}
              disabled={isMeasuring}
              className={`px-8 py-4 rounded-full text-lg font-semibold bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-heart transition-transform disabled:opacity-60 ${isMeasuring ? 'scale-95' : 'hover:scale-105'}`}
            >
              {isMeasuring ? 'Measuring...' : 'Measure Our Love! ❤️'}
            </button>

            <div className="text-center mt-2">
              {resultIndex !== null && (
                <div className="inline-flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Result:</span>
                  <span className="text-xl font-cursive text-love-gradient">
                    {steps[resultIndex]} {resultIndex !== null ? '💞' : ''}
                  </span>
                </div>
              )}
            </div>

            <button
              onClick={resetMeter}
              disabled={isMeasuring}
              className="text-sm text-muted-foreground underline-offset-2"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
