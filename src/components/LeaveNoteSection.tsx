import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Send, Sparkles } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

// ═══════════════════════════════════════════════════════════════
// 💬 LOVE RESPONSES - Edit these loving responses!
// These are shown after your Valentine sends a message
// ═══════════════════════════════════════════════════════════════
const loveResponses = [
  "Your words make my heart flutter! 💕",
  "I'm blushing from reading this! 🥰",
  "You just made my day so much brighter! ✨",
  "My heart is doing a happy dance! 💃❤️",
  "I'm smiling so big right now! 😊💖",
  "You're the sweetest! I love you more! 💗",
  "Reading this made my heart skip a beat! 💓",
  "I'm keeping this forever in my heart! 💝",
  "You always know what to say! 🥹💕",
  "Sending you a million virtual hugs! 🤗💖",
  "I love you even when you steal the blanket! 😄❤️",
  "You make my heart so full! Thank you! 💕",
  "Can't wait to see you and read this in person! 😍💌",
];

export const LeaveNoteSection = () => {
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [response, setResponse] = useState('');
  const [showSparkles, setShowSparkles] = useState(false);

  const handleSubmit = () => {
    if (!message.trim()) return;
    
    setShowSparkles(true);
    setTimeout(() => {
      const randomResponse = loveResponses[Math.floor(Math.random() * loveResponses.length)];
      setResponse(randomResponse);
      setSubmitted(true);
      setShowSparkles(false);
    }, 1500);
  };

  const handleReset = () => {
    setMessage('');
    setSubmitted(false);
    setResponse('');
  };

  return (
    <section className="min-h-screen gradient-romantic py-20 px-4 relative overflow-hidden">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.span
            className="text-5xl inline-block mb-4"
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💬
          </motion.span>
          <h2 className="text-4xl sm:text-6xl font-cursive text-love-gradient mb-4">
            Leave Me a Love Note
          </h2>
          <p className="text-lg text-muted-foreground">
            Share your thoughts with me, my love 💕
          </p>
        </motion.div>

        {/* Message Box */}
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="input"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="relative"
            >
              <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-love border border-primary/10">
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write something sweet... 💕"
                  className="min-h-[150px] text-lg border-primary/20 focus:border-primary resize-none bg-background/50"
                />
                
                <motion.div
                  className="mt-6 flex justify-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <Button
                    onClick={handleSubmit}
                    disabled={!message.trim()}
                    className="px-8 py-6 text-lg rounded-full bg-gradient-to-r from-primary to-accent hover:opacity-90 shadow-heart"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Love 💌
                  </Button>
                </motion.div>
              </div>

              {/* Sparkle animation overlay */}
              <AnimatePresence>
                {showSparkles && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-card/80 rounded-2xl flex items-center justify-center"
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360]
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <Sparkles className="w-16 h-16 text-primary" />
                    </motion.div>
                    {/* Flying hearts */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute"
                        initial={{ 
                          x: 0, 
                          y: 0, 
                          opacity: 1, 
                          scale: 0 
                        }}
                        animate={{ 
                          x: (Math.random() - 0.5) * 200,
                          y: (Math.random() - 0.5) * 200,
                          opacity: 0,
                          scale: 1
                        }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                      >
                        <Heart className="w-8 h-8 text-primary fill-primary" />
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              key="response"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="bg-card rounded-2xl p-8 shadow-heart border border-primary/20">
                {/* Hearts animation */}
                <motion.div
                  className="flex justify-center gap-2 mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ 
                        y: [0, -10, 0],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 1, 
                        repeat: Infinity, 
                        delay: i * 0.15 
                      }}
                    >
                      <Heart className="w-10 h-10 text-primary fill-primary" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* Response message */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl sm:text-3xl font-cursive text-love-gradient mb-6"
                >
                  {response}
                </motion.p>

                {/* Your message */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="bg-secondary/50 rounded-xl p-4 mb-6"
                >
                  <p className="text-sm text-muted-foreground mb-2">Your message:</p>
                  <p className="text-foreground italic">"{message}"</p>
                </motion.div>

                {/* Send another button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <Button
                    onClick={handleReset}
                    variant="outline"
                    className="rounded-full border-primary text-primary hover:bg-primary/10"
                  >
                    Send Another Note 💕
                  </Button>
                </motion.div>
              </div>

              {/* Floating celebration */}
              {[...Array(6)].map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute text-2xl"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                >
                  {['💕', '💖', '✨', '💗', '💝', '🥰'][i]}
                </motion.span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
