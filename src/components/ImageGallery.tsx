import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Heart } from 'lucide-react';
import img4 from '../assets/4.jpeg'; 
import img6 from '../assets/6.jpg'; 
import img7 from '../assets/7.jpg';
import img8 from '../assets/8.jpg';  
import img9 from '../assets/9.jpeg';
import img10 from '../assets/10.jpeg';
import img11 from '../assets/11.jpeg';
// ═══════════════════════════════════════════════════════════════
// 🖼️ GALLERY IMAGES - EDIT YOUR PHOTOS HERE!
// Replace "src" with your image path (e.g., "/my-photo.jpg")
// Update "caption" and "date" for each memory
// ═══════════════════════════════════════════════════════════════
const galleryImages = [
  {
    id: 1,
    src: img6, // 👈 Replace with your image
    caption: "Our first adventure together 💕",
    date: "Budha park"
  },
  {
    id: 2,
    src: img7, // 👈 Replace with your image
    caption: "That sunset we'll never forget 🌅",
    date: "Jaydev vathika"
  },
  {
    id: 3,
    src: img8, // 👈 Replace with your image
    caption: "Just us being silly 😂",
    date: "Ram mandir"
  },
  {
    id: 4,
    src: img9, // 👈 Replace with your image
    caption: "Our favorite spot 🌸",
    date: "Bindusagar"
  },
  {
    id: 5,
    src: img10, // 👈 Replace with your image
    caption: "Making memories 💖",
    date: "Iter"
  },
  {
    id: 6,
    src: img11, // 👈 Replace with your image
    caption: "Forever my favorite person 💝",
    date: "Ram mandir"
  },
];

// ═══════════════════════════════════════════════════════════════
// 🥰 FIRST DATE SECTION - EDIT YOUR SPECIAL PHOTO HERE!
// ═══════════════════════════════════════════════════════════════
const firstDatePhoto = {
  src: img4, // 👈 Replace with your first date photo
  caption: "Forever....💕",
  date: "Our Best memories"
};

interface GalleryImage {
  id: number;
  src: string;
  caption: string;
  date: string;
}

export const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [revealedImages, setRevealedImages] = useState<number[]>([]);
  const [firstDateRevealed, setFirstDateRevealed] = useState(false);

  const handleReveal = (id: number) => {
    if (!revealedImages.includes(id)) {
      setRevealedImages([...revealedImages, id]);
    }
    const image = galleryImages.find(img => img.id === id);
    if (image) setSelectedImage(image);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
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
          <motion.div
            className="flex justify-center gap-3 mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            {['💕', '📸', '💕'].map((emoji, i) => (
              <motion.span
                key={i}
                className="text-4xl"
                animate={{ 
                  y: [0, -8, 0],
                  rotate: i === 1 ? [0, 5, -5, 0] : 0
                }}
                transition={{ 
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>
          <h2 className="text-4xl sm:text-6xl font-cursive text-love-gradient mb-4">
            Our Precious Memories
          </h2>
          <p className="text-lg text-muted-foreground">
            Click on each memory to reveal our special moments
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {galleryImages.map((image) => {
            const isRevealed = revealedImages.includes(image.id);
            
            return (
              <motion.div
                key={image.id}
                variants={itemVariants}
                onClick={() => handleReveal(image.id)}
                className="cursor-pointer group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-love hover:shadow-heart transition-all duration-500">
                  {!isRevealed ? (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/40 backdrop-blur-md flex flex-col items-center justify-center"
                    >
                      <motion.div
                        className="relative"
                        animate={{ 
                          scale: [1, 1.15, 1],
                        }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <span className="text-6xl">💝</span>
                        <motion.div
                          className="absolute -top-1 -right-1"
                          animate={{ scale: [0, 1, 0] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        >
                          <Heart className="w-4 h-4 text-primary fill-primary" />
                        </motion.div>
                      </motion.div>
                      <p className="text-foreground font-medium mt-4">Click to reveal</p>
                      <p className="text-sm text-muted-foreground mt-2">{image.date}</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="w-full h-full"
                    >
                      <img
                        src={image.src}
                        alt={image.caption}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <motion.p 
                            className="font-cursive text-xl"
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                          >
                            {image.caption}
                          </motion.p>
                          <p className="text-sm opacity-80 mt-1">{image.date}</p>
                        </div>
                      </motion.div>
                      {/* Corner heart decoration */}
                      <div className="absolute top-3 right-3">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Heart className="w-6 h-6 text-white drop-shadow-lg fill-primary/80" />
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* ═══════════════════════════════════════════════════════════════ */}
        {/* 💕 FIRST DATE SECTION */}
        {/* ═══════════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center"
        >
          <motion.div
            className="flex justify-center gap-2 mb-4"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-3xl">💑</span>
          </motion.div>
          <h3 className="text-3xl sm:text-4xl font-cursive text-love-gradient mb-8">
            Our Best memory
          </h3>
          
          <motion.div
            className="max-w-xl mx-auto"
            whileHover={{ scale: 1.02 }}
            onClick={() => setFirstDateRevealed(true)}
          >
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-heart cursor-pointer">
              <AnimatePresence mode="wait">
                {!firstDateRevealed ? (
                  <motion.div
                    key="hidden"
                    className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 backdrop-blur-sm flex flex-col items-center justify-center"
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    <motion.span
                      className="text-7xl mb-4"
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      📸
                    </motion.span>
                    <p className="text-xl font-cursive text-foreground">
                      Click to reveal our special moment
                    </p>
                    <motion.p
                      className="text-muted-foreground mt-2"
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {firstDatePhoto.date}
                    </motion.p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="revealed"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full h-full"
                  >
                    <img
                      src={firstDatePhoto.src}
                      alt={firstDatePhoto.caption}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center pb-6">
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-white text-2xl font-cursive"
                      >
                        {firstDatePhoto.caption}
                      </motion.p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="rounded-2xl overflow-hidden shadow-heart bg-card"
              >
                <div className="relative">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.caption}
                    className="w-full max-h-[70vh] object-contain"
                  />
                  <motion.div
                    className="absolute top-4 right-4"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Heart className="w-8 h-8 text-primary fill-primary drop-shadow-lg" />
                  </motion.div>
                </div>
                <div className="p-6 text-center">
                  <p className="text-2xl font-cursive text-foreground">
                    {selectedImage.caption}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {selectedImage.date}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
};
