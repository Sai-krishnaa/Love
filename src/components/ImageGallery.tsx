import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent } from '@/components/ui/dialog';

// Easy to edit gallery - replace with your own images
const galleryImages = [
  {
    id: 1,
    src: "/placeholder.svg",
    caption: "Our first adventure together 💕",
    date: "January 2024"
  },
  {
    id: 2,
    src: "/placeholder.svg",
    caption: "That sunset we'll never forget 🌅",
    date: "February 2024"
  },
  {
    id: 3,
    src: "/placeholder.svg",
    caption: "Just us being silly 😂",
    date: "March 2024"
  },
  {
    id: 4,
    src: "/placeholder.svg",
    caption: "Our favorite spot 🌸",
    date: "April 2024"
  },
  {
    id: 5,
    src: "/placeholder.svg",
    caption: "Making memories 💖",
    date: "May 2024"
  },
  {
    id: 6,
    src: "/placeholder.svg",
    caption: "Forever my favorite person 💝",
    date: "June 2024"
  },
];

interface GalleryImage {
  id: number;
  src: string;
  caption: string;
  date: string;
}

export const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [revealedImages, setRevealedImages] = useState<number[]>([]);

  const handleReveal = (id: number) => {
    if (!revealedImages.includes(id)) {
      setRevealedImages([...revealedImages, id]);
    }
    const image = galleryImages.find(img => img.id === id);
    if (image) setSelectedImage(image);
  };

  return (
    <section className="min-h-screen gradient-romantic py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-6xl font-cursive text-love-gradient mb-4">
            Our Precious Memories 📸
          </h2>
          <p className="text-lg text-muted-foreground">
            Click on each memory to reveal and relive the moment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => {
            const isRevealed = revealedImages.includes(image.id);
            
            return (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => handleReveal(image.id)}
                className="cursor-pointer group"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-love hover:shadow-heart transition-all duration-300">
                  {!isRevealed ? (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 backdrop-blur-md flex flex-col items-center justify-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.span
                        className="text-6xl mb-4"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        💝
                      </motion.span>
                      <p className="text-foreground font-medium">Click to reveal</p>
                      <p className="text-sm text-muted-foreground mt-2">{image.date}</p>
                    </motion.div>
                  ) : (
                    <>
                      <img
                        src={image.src}
                        alt={image.caption}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <p className="font-medium">{image.caption}</p>
                          <p className="text-sm opacity-80">{image.date}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* First Date Image Reveal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-cursive text-love-gradient mb-8">
            Our First Date 💕
          </h3>
          <motion.div
            className="max-w-xl mx-auto rounded-3xl overflow-hidden shadow-heart"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20">
              <img
                src="/placeholder.svg"
                alt="Our first date"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <p className="text-white text-xl font-cursive">
                  Replace with your first date photo 📸
                </p>
              </div>
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
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="rounded-2xl overflow-hidden shadow-heart"
              >
                <img
                  src={selectedImage.src}
                  alt={selectedImage.caption}
                  className="w-full"
                />
                <div className="bg-card p-6">
                  <p className="text-xl font-cursive text-foreground">
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
