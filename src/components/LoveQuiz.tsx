import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

// Easy to edit quiz questions
const quizQuestions = [
  {
    id: 1,
    question: "Where was our first meetup? 💕",
    options: [
      "Coffee shop downtown",
      "At a friend's party",
      "Online",
      "At work/school"
    ],
    correctIndex: 0, // Update this to match the correct answer
  },
  {
    id: 2,
    question: "What was our first date? 🌹",
    options: [
      "Movie night",
      "Dinner at a restaurant",
      "Walk in the park",
      "Cooking together"
    ],
    correctIndex: 1,
  },
  {
    id: 3,
    question: "When did we first meet? 📅",
    options: [
      "Spring 2023",
      "Summer 2023",
      "Fall 2023",
      "Winter 2023"
    ],
    correctIndex: 2,
  },
  {
    id: 4,
    question: "What's our song? 🎵",
    options: [
      "Perfect - Ed Sheeran",
      "All of Me - John Legend",
      "A Thousand Years - Christina Perri",
      "Can't Help Falling in Love - Elvis"
    ],
    correctIndex: 0,
  },
];

interface LoveQuizProps {
  onComplete: () => void;
}

export const LoveQuiz = ({ onComplete }: LoveQuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    setSelectedAnswer(optionIndex);
    
    if (optionIndex === quizQuestions[currentQuestion].correctIndex) {
      setScore(score + 1);
    }

    setShowResult(true);

    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        setIsComplete(true);
      }
    }, 1500);
  };

  const question = quizQuestions[currentQuestion];

  return (
    <section className="min-h-screen gradient-romantic py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-6xl font-cursive text-love-gradient mb-4">
            Our Love Story Quiz 💝
          </h2>
          <p className="text-lg text-muted-foreground">
            How well do you remember our journey?
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isComplete ? (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-card/80 backdrop-blur-sm shadow-love border-primary/10">
                <CardContent className="p-8">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-sm font-medium text-muted-foreground">
                      Question {currentQuestion + 1} of {quizQuestions.length}
                    </span>
                    <span className="text-2xl">💕</span>
                  </div>

                  <h3 className="text-2xl font-semibold text-foreground mb-8">
                    {question.question}
                  </h3>

                  <div className="space-y-4">
                    {question.options.map((option, index) => {
                      const isCorrect = index === question.correctIndex;
                      const isSelected = index === selectedAnswer;
                      
                      return (
                        <motion.button
                          key={index}
                          onClick={() => !showResult && handleAnswer(index)}
                          disabled={showResult}
                          whileHover={{ scale: showResult ? 1 : 1.02 }}
                          whileTap={{ scale: showResult ? 1 : 0.98 }}
                          className={`w-full p-4 rounded-xl text-left font-medium transition-all ${
                            showResult
                              ? isCorrect
                                ? 'bg-green-100 border-2 border-green-400 text-green-800'
                                : isSelected
                                ? 'bg-red-100 border-2 border-red-400 text-red-800'
                                : 'bg-muted border-2 border-transparent text-muted-foreground'
                              : 'bg-secondary hover:bg-secondary/80 border-2 border-transparent hover:border-primary/30'
                          }`}
                        >
                          {option}
                          {showResult && isCorrect && ' ✓'}
                          {showResult && isSelected && !isCorrect && ' ✗'}
                        </motion.button>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <Card className="bg-card/80 backdrop-blur-sm shadow-love border-primary/10">
                <CardContent className="p-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.2 }}
                    className="text-6xl mb-6"
                  >
                    {score === quizQuestions.length ? '🏆💕' : score >= quizQuestions.length / 2 ? '💖' : '💗'}
                  </motion.div>
                  
                  <h3 className="text-3xl font-cursive text-love-gradient mb-4">
                    {score === quizQuestions.length
                      ? "Perfect! You know our love story by heart!"
                      : score >= quizQuestions.length / 2
                      ? "Great job! Our memories are precious!"
                      : "Let's make more memories together!"}
                  </h3>
                  
                  <p className="text-xl text-muted-foreground mb-8">
                    You got {score} out of {quizQuestions.length} correct!
                  </p>

                  <Button
                    onClick={onComplete}
                    className="px-8 py-6 text-lg bg-gradient-to-r from-primary to-accent shadow-heart"
                  >
                    See our memories 📸
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Progress indicator */}
        {!isComplete && (
          <div className="mt-8 flex justify-center gap-2">
            {quizQuestions.map((_, index) => (
              <motion.div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentQuestion
                    ? 'bg-primary'
                    : index < currentQuestion
                    ? 'bg-primary/50'
                    : 'bg-muted'
                }`}
                animate={index === currentQuestion ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.5, repeat: Infinity }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
