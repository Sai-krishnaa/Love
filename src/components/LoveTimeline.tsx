import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

// ═══════════════════════════════════════════════════════════════
// 📅 TIMELINE EVENTS - EDIT YOUR LOVE STORY HERE!
// Replace images with your actual photos
// ═══════════════════════════════════════════════════════════════
const timelineEvents = [
  {
    id: 1,
    date: "January 15, 2023",
    title: "First Meeting",
    description: "The moment our eyes met for the first time...",
    image: "/placeholder.svg", // 👈 Replace with your image
    icon: "👋"
  },
  {
    id: 2,
    date: "February 14, 2023",
    title: "First Date",
    description: "Our first magical date together...",
    image: "/placeholder.svg", // 👈 Replace with your image
    icon: "💐"
  },
  {
    id: 3,
    date: "March 20, 2023",
    title: "First Kiss",
    description: "A moment I'll never forget...",
    image: "/placeholder.svg", // 👈 Replace with your image
    icon: "💋"
  },
  {
    id: 4,
    date: "April 10, 2023",
    title: "Became Official",
    description: "The day we made it official...",
    image: "/placeholder.svg", // 👈 Replace with your image
    icon: "💕"
  },
  {
    id: 5,
    date: "Forever",
    title: "Forever Together",
    description: "And the journey continues...",
    image: "/placeholder.svg", // 👈 Replace with your image
    icon: "💍"
  },
];

interface TimelineCardProps {
  event: typeof timelineEvents[0];
  index: number;
  isLeft: boolean;
}

const TimelineCard = ({ event, index, isLeft }: TimelineCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`flex items-center gap-4 md:gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:flex-row`}
    >
      {/* Card */}
      <div 
        className="perspective-1000 w-full md:w-[calc(50%-2rem)] cursor-pointer group"
        onClick={() => setIsFlipped(!isFlipped)}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <motion.div
          className="relative w-full h-48 md:h-64 preserve-3d transition-transform duration-700"
          style={{ 
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
          }}
        >
          {/* Front of card */}
          <div 
            className="absolute inset-0 backface-hidden rounded-2xl bg-card shadow-love p-6 flex flex-col justify-center"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <motion.div
              className="text-4xl mb-3"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {event.icon}
            </motion.div>
            <p className="text-sm text-muted-foreground mb-2">{event.date}</p>
            <h3 className="text-2xl font-cursive text-love-gradient mb-2">{event.title}</h3>
            <p className="text-muted-foreground text-sm">{event.description}</p>
            <motion.div
              className="absolute bottom-4 right-4"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="w-5 h-5 text-primary fill-primary" />
            </motion.div>
          </div>

          {/* Back of card (Image) */}
          <div 
            className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-heart"
            style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
              <p className="text-white font-cursive text-xl">{event.title} 💕</p>
            </div>
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{ 
                boxShadow: [
                  'inset 0 0 20px rgba(236, 72, 153, 0.3)',
                  'inset 0 0 40px rgba(236, 72, 153, 0.5)',
                  'inset 0 0 20px rgba(236, 72, 153, 0.3)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>

      {/* Timeline dot */}
      <div className="hidden md:flex flex-col items-center">
        <motion.div
          className="w-4 h-4 rounded-full bg-primary shadow-heart"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
        />
      </div>

      {/* Empty space for alternating layout */}
      <div className="hidden md:block w-[calc(50%-2rem)]" />
    </motion.div>
  );
};

export const LoveTimeline = () => {
  return (
    <section className="min-h-screen gradient-romantic py-20 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            className="text-5xl inline-block mb-4"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            💕
          </motion.span>
          <h2 className="text-4xl sm:text-6xl font-cursive text-love-gradient mb-4">
            Our Love Story
          </h2>
          <p className="text-lg text-muted-foreground">
            Hover over each card to reveal our precious memories
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary transform -translate-x-1/2" />

          {/* Events */}
          <div className="space-y-8 md:space-y-16">
            {timelineEvents.map((event, index) => (
              <TimelineCard
                key={event.id}
                event={event}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating decorations */}
      <motion.div
        className="absolute top-20 left-10 text-4xl opacity-30"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        💝
      </motion.div>
      <motion.div
        className="absolute bottom-40 right-10 text-3xl opacity-30"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      >
        💖
      </motion.div>
    </section>
  );
};
