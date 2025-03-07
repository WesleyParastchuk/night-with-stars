import { motion } from "framer-motion";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const PulsingCircleWithStars = ({ onClick }: { onClick: () => void }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-screen">
      {/* Fundo de estrelas */}
      <Particles
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 50 },
            shape: { type: "star" },
            size: {
              value: 3,
              random: true,
              animation: {
                enable: true,
                speed: 3,
                minimumValue: 1,
              },
            },
            opacity: { value: 0.8 },
            color: { value: "#ffffff" },
            twinkle: {
              particles: { enable: true, frequency: 0.05, opacity: 1 },
            },
            shadow: {
              enable: true,
              color: "#ffffff50",
              blur: 4,
            },
          },
        }}
        className="absolute inset-0 w-full h-full z-0"
      />
      <motion.button
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        className="bg-yellow-300 rounded-full w-40 h-40 md:w-60 md:h-60 flex items-center justify-center relative z-10 overflow-hidden"
        onClick={onClick}
      >
        <div className="absolute -right-1/3 w-3/4 h-3/4 md:w-3/4 md:h-3/4 bg-radial from-white to-yellow-300 opacity-50 rounded-full blur-sm"></div>
      </motion.button>
    </div>
  );
};

export default PulsingCircleWithStars;
