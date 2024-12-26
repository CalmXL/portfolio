import { useEffect } from 'react';
import { useActiveSectionContext } from '@/context/active-section-context';
import { useInView } from 'react-intersection-observer';
import { SectionName } from './type';

export function useSectionView(sectionName: SectionName) {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveAction, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveAction(sectionName);
    }
  }, [inView, setActiveAction, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
