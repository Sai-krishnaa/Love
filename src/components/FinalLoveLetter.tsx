import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

// ═══════════════════════════════════════════════════════════════
// ✍️ FINAL LOVE LETTER - EDIT YOUR HEARTFELT MESSAGE HERE!
// Pour your heart out in this beautiful letter
// ═══════════════════════════════════════════════════════════════
const letterContent = {
  greeting: "My Dearest Love,",
  paragraphs: [
    "From the moment you walked into my life, everything changed. Colors became brighter, music sounded sweeter, and every ordinary day transformed into an extraordinary adventure just because you were in it.",
    "You are my sunshine on cloudy days, my anchor in stormy seas, and my forever source of joy. The way you love me, with all my flaws and imperfections, makes me believe in fairy tales and happy endings.",
    "Every laugh we share, every tear we wipe away together, every silent moment we spend just being in each other's presence - these are the treasures I hold closest to my heart.",

    "I don’t love you in loud, dramatic ways I love you in the quiet moments — the ones most people don’t notice but that somehow matter the most.I love you in the way my mind looks for you first when something good happens… and even when something goes wrong.",

   "In the way your presence calms me without trying ,In the way you feel like home — not because everything is perfect, but because with you, I don’t have to pretend , You’ve seen parts of me that aren’t impressive, polished, or easy to love — and you stayed.",

  "That alone means more to me than any grand gesture ever could,You challenge me , You soften me where I’m too hard, and strengthen me where I doubt myself,Because of you, I want to grow — not out of fear of losing you, but out of respect for what we have.",

"I don’t just love you for who you are today.",
"I love you for who you’re becoming — and for letting me walk that journey with you.",
"You are not just someone I love.",
"You are someone I choose.",
"Thank you for choosing me, for loving me, for being my partner in this beautiful journey called life. I promise to cherish you, support you, and love you with everything I have, today and always.",

    
  ],
  closing: "Forever and Always Yours,",
  signature: "Your Saikrishna (chipmunk) 💕"
};

export const FinalLoveLetter = () => {
  return (
    <section className="min-h-screen gradient-romantic py-20 px-4 relative overflow-hidden">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span
            className="text-5xl inline-block mb-4"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💕
          </motion.span>
          <h2 className="text-4xl sm:text-6xl font-cursive text-love-gradient mb-4">
            A Final Love Letter
          </h2>
        </motion.div>

        {/* Letter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative"
        >
          {/* Paper effect */}
          <div className="bg-card rounded-lg shadow-love p-8 sm:p-12 relative overflow-hidden border-2 border-primary/10">
            {/* Decorative corner hearts */}
            <motion.div
              className="absolute top-4 right-4"
              animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-6 h-6 text-primary/30 fill-primary/30" />
            </motion.div>
            <motion.div
              className="absolute bottom-4 left-4"
              animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <Heart className="w-6 h-6 text-primary/30 fill-primary/30" />
            </motion.div>

            {/* Letter content */}
            <div className="space-y-6">
              {/* Greeting */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-2xl sm:text-3xl font-cursive text-love-gradient"
              >
                {letterContent.greeting}
              </motion.p>

              {/* Paragraphs */}
              {letterContent.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.3 }}
                  className="text-foreground/80 leading-relaxed text-lg"
                >
                  {paragraph}
                </motion.p>
              ))}

              {/* Closing */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.5 }}
                className="pt-8 text-right"
              >
                <p className="text-xl font-cursive text-muted-foreground mb-2">
                  {letterContent.closing}
                </p>
                <motion.p
                  className="text-2xl sm:text-3xl font-cursive text-love-gradient"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {letterContent.signature}
                </motion.p>
              </motion.div>
            </div>

            {/* Wax seal effect */}
            <motion.div
              className="absolute -bottom-6 right-8 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-heart"
              initial={{ scale: 0, rotate: -30 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 2, type: "spring", stiffness: 200 }}
            >
              <Heart className="w-8 h-8 text-primary-foreground fill-primary-foreground" />
            </motion.div>
          </div>
        </motion.div>

        {/* Floating hearts decoration */}
        <motion.div
          className="absolute top-20 left-10 text-4xl opacity-30"
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          💌
        </motion.div>
        <motion.div
          className="absolute bottom-40 right-10 text-3xl opacity-30"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        >
          💝
        </motion.div>
      </div>
    </section>
  );
};
