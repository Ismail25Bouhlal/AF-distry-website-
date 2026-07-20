"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="fixed inset-0 z-[200] bg-navy-deep flex items-center justify-center"
        >
          {/* Background rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[500px] h-[500px] rounded-full border border-gold/10"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute w-[350px] h-[350px] rounded-full border border-gold/20"
          />

          {/* Center content */}
          <div className="relative flex flex-col items-center">
            {/* Logo reveal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-white leading-none">
                GLORY
              </h1>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-gold leading-none mt-2">
                DIGITIL
              </h1>
              <p className="text-[9px] uppercase tracking-[4px] text-grey-light mt-4">
                BY AF DISTRY
              </p>
            </motion.div>

            {/* Progress line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, delay: 0.5, ease: "easeInOut" }}
              className="h-px bg-gold mt-10 max-w-[200px]"
            />

            {/* Loading text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-[9px] uppercase tracking-[3px] text-grey-light mt-4"
            >
              Chargement de l'excellence
            </motion.p>
          </div>

          {/* Corner accents */}
          <div className="absolute top-8 left-8 w-8 h-8 border-t border-l border-gold/40" />
          <div className="absolute top-8 right-8 w-8 h-8 border-t border-r border-gold/40" />
          <div className="absolute bottom-8 left-8 w-8 h-8 border-b border-l border-gold/40" />
          <div className="absolute bottom-8 right-8 w-8 h-8 border-b border-r border-gold/40" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
