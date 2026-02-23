import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionReveal from "./ui/SectionReveal";

const Experience: React.FC = () => {
  return (
    <SectionReveal
      className="
        relative isolate min-h-screen overflow-hidden
        px-4 py-16
        sm:px-6 sm:py-20
        md:px-8 md:py-28
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div
          className="
            absolute top-20 left-1/2 -translate-x-1/2
            w-[350px] h-[350px]
            sm:w-[500px] sm:h-[500px]
            md:w-[600px] md:h-[600px]
            bg-primary/10 blur-[120px] rounded-full
          "
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20"
        >
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Experience
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Building intelligent vision systems at scale — transforming
            research into real-world robotics applications.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-border ml-4 sm:ml-6">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative pl-8 sm:pl-12 pb-12 sm:pb-16"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-4 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary shadow-lg" />

            {/* Experience Card */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="
                rounded-2xl sm:rounded-3xl
                border border-border/60
                bg-background/70
                backdrop-blur-xl
                p-6 sm:p-8 md:p-10
                shadow-lg hover:shadow-2xl
                transition-all duration-300
              "
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <Briefcase size={22} />
                  <h2 className="text-xl sm:text-2xl font-semibold">
                    Robotics Computer Vision Intern
                  </h2>
                </div>

                <img
                  src="/airbus.svg"
                  alt="Airbus"
                  className="h-7 sm:h-8 opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              <p className="text-primary font-medium">
                Airbus India Private Limited
              </p>

              <p className="text-xs sm:text-sm text-muted-foreground mb-6 sm:mb-8">
                Feb 2026 — Present · Bengaluru, India
              </p>

              {/* Description */}
              <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                <p>
                  Designing and implementing Computer Vision pipelines powering
                  robotics perception systems using deep neural networks and
                  vision transformer models.
                </p>

                <p>
                  Working on real-world industrial AI workflows, optimizing
                  model inference and enabling scalable deployment strategies.
                </p>

                <p>
                  Collaborating with cross-functional research teams to bridge
                  machine learning innovation with production-ready engineering.
                </p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mt-8 sm:mt-10">
                {[
                  "Computer Vision",
                  "Deep Learning",
                  "PyTorch",
                  "TensorFlow",
                  "Transfer Learning",
                  "Robotics AI",
                  "Fine Tuning",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3 sm:px-4 py-1
                      sm:py-1.5
                      rounded-full
                      text-xs sm:text-sm
                      border border-border
                      bg-secondary/40
                      backdrop-blur-sm
                      hover:scale-105
                      transition-transform
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionReveal>
  );
};

export default Experience;