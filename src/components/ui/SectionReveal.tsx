import React, { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type SectionRevealProps = HTMLMotionProps<"section"> & {
  children: React.ReactNode;
};

const SectionReveal = forwardRef<HTMLElement, SectionRevealProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.section
        ref={ref}
        {...props}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, margin: "-80px" }}
        className={className}
      >
        {children}
      </motion.section>
    );
  }
);

SectionReveal.displayName = "SectionReveal";

export default SectionReveal;