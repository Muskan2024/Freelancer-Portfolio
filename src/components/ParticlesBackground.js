import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  return (
    <Particles
      options={{
        background: {
          color: {
            value: "#ffffff",
          },
        },
        particles: {
          color: {
            value: "#007bff",
          },
          links: {
            enable: true,
            color: "#007bff",
            distance: 150,
          },
          move: {
            enable: true,
            speed: 2,
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
