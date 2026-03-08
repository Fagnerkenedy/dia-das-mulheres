import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function HeartsBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
        background: { color: "transparent" },
        particles: {
          color: {
            value: "#ec4899"
          },
          number: { value: 20 },
          move: {
            enable: true,
            speed: 1,
            direction: "top",
            outModes: { default: "out" },
          },
          shape: {
            type: "char",
            character: {
              value: "❤",
              font: "Verdana",
              style: "",
              weight: "400",
            },
          },
          size: {
            value: { min: 24, max: 48 },
          },
          opacity: {
            value: 0.7,
          },
        },
      }}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 1,
      }}
    />
  );
}