import { useState, useEffect } from 'react';

/**
 * Hook to detect if user is on a mobile device
 * Uses both screen width and user agent detection
 */
export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            // Check screen width (768px is typical tablet/mobile breakpoint)
            const isSmallScreen = window.innerWidth < 768;

            // Check user agent for mobile devices
            const isMobileAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            );

            // Consider mobile if either condition is true
            setIsMobile(isSmallScreen || isMobileAgent);
        };

        // Check on mount
        checkMobile();

        // Listen for resize events
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile;
};

/**
 * Hook to check if user prefers reduced motion (accessibility)
 */
export const usePrefersReducedMotion = () => {
    const [prefersReduced, setPrefersReduced] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReduced(mediaQuery.matches);

        const handler = (e) => setPrefersReduced(e.matches);
        mediaQuery.addEventListener('change', handler);

        return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    return prefersReduced;
};

/**
 * Combined hook - returns true if animations should be disabled
 * (either on mobile or if user prefers reduced motion)
 */
export const useReducedAnimations = () => {
    const isMobile = useIsMobile();
    const prefersReduced = usePrefersReducedMotion();

    return isMobile || prefersReduced;
};

export default useIsMobile;
