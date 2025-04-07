
import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
}

export function useProgressiveAnimation(threshold = 0.1, delay = 0.1) {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);

  const updateRef = (index: number) => (node: HTMLElement | null) => {
    elementsRef.current[index] = node;
  };

  useEffect(() => {
    const currentRefs = elementsRef.current.filter(Boolean) as HTMLElement[];
    if (currentRefs.length === 0) return;

    if (visibleItems.length === 0) {
      setVisibleItems(new Array(currentRefs.length).fill(false));
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = currentRefs.findIndex((ref) => ref === entry.target);
            if (index !== -1) {
              setVisibleItems((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold,
      }
    );

    currentRefs.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        observer.unobserve(ref);
      });
    };
  }, [elementsRef.current.length, threshold]);

  return { refs: updateRef, visibleItems };
}
