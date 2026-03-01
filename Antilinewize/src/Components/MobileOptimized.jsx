import React from 'react';
import { motion } from 'framer-motion';
import { useReducedAnimations } from '../hooks/useIsMobile';

/**
 * Wrapper component that conditionally renders motion.div or regular div
 * based on whether animations should be reduced (mobile/accessibility)
 */
export const MobileOptimizedMotion = ({
    children,
    className = '',
    as = 'div',
    // Motion props
    initial,
    animate,
    whileInView,
    whileHover,
    whileTap,
    exit,
    variants,
    transition,
    viewport,
    layoutId,
    style,
    ...rest
}) => {
    const reduceAnimations = useReducedAnimations();

    // On mobile/reduced motion, render a simple static element
    if (reduceAnimations) {
        const Component = as;
        return (
            <Component className={className} style={style} {...rest}>
                {children}
            </Component>
        );
    }

    // On desktop, render with full animations
    const MotionComponent = motion[as] || motion.div;

    return (
        <MotionComponent
            className={className}
            initial={initial}
            animate={animate}
            whileInView={whileInView}
            whileHover={whileHover}
            whileTap={whileTap}
            exit={exit}
            variants={variants}
            transition={transition}
            viewport={viewport}
            layoutId={layoutId}
            style={style}
            {...rest}
        >
            {children}
        </MotionComponent>
    );
};

/**
 * Simple fade-in wrapper - shows content immediately on mobile
 */
export const FadeIn = ({ children, className = '', delay = 0, ...props }) => {
    const reduceAnimations = useReducedAnimations();

    if (reduceAnimations) {
        return <div className={className} {...props}>{children}</div>;
    }

    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

/**
 * Hover effect wrapper - disabled on mobile (no hover on touch)
 */
export const HoverScale = ({ children, className = '', scale = 1.02, ...props }) => {
    const reduceAnimations = useReducedAnimations();

    if (reduceAnimations) {
        return <div className={className} {...props}>{children}</div>;
    }

    return (
        <motion.div
            className={className}
            whileHover={{ scale }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default MobileOptimizedMotion;
