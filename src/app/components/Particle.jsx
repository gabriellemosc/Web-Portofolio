import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";

export default function Page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Atualiza o estado quando o componente for renderizado no cliente
  }, []);

  if (!isClient) {
    return null; // Retorna null enquanto o componente estiver sendo renderizado no servidor
  }

  return (
    <div>
      <h1>Bem-vindo ao meu site!</h1>
      <Particles
        id="tsparticles"
        options={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: true,
                value_area: 1500,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: 4,
              random: true,
            },
            opacity: {
              value: 0.6,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
              },
            },
            move: {
              direction: "none",
              speed: 0.5,
              out_mode: "out",
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
              onclick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              push: {
                particles_nb: 1,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
}
