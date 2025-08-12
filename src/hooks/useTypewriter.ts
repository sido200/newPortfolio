import { useState, useEffect } from 'react';

export const useTypewriter = (
  words: string[],
  speed: number = 100,
  deleteSpeed: number = 50,
  pauseTime: number = 2000
) => {
  const [currentWord, setCurrentWord] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = words[currentIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setCurrentWord(prev => prev.slice(0, -1));
        if (currentWord === '') {
          setIsDeleting(false);
          setCurrentIndex(prev => (prev + 1) % words.length);
        }
      }, deleteSpeed);
    } else {
      timeout = setTimeout(() => {
        setCurrentWord(prev => current.slice(0, prev.length + 1));
        if (currentWord === current) {
          setIsDeleting(true);
        }
      }, currentWord === current ? pauseTime : speed);
    }

    return () => clearTimeout(timeout);
  }, [currentWord, currentIndex, isDeleting, words, speed, deleteSpeed, pauseTime]);

  return currentWord;
};
