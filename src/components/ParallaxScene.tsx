import React, { useEffect, useState } from 'react';

const ParallaxScene: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className="relative h-screen overflow-hidden bg-fixed bg-cover bg-center"
      style={{ backgroundImage: "url('/images/scouts.jpg')" }}
    >
      {/* Parallax 3D elements - hidden on small screens */}
      {React.createElement('model-viewer', {
        src: '/assets/compass/compass.glb',
        'camera-controls': false,
        'auto-rotate': true,
        className: 'absolute left-1/4 top-20 z-10 hidden h-24 w-24 sm:block',
        style: { transform: `translateY(${scrollY * 0.1}px)` },
      })}
      {React.createElement('model-viewer', {
        src: '/assets/tent/tent.glb',
        'camera-controls': false,
        'auto-rotate': true,
        className: 'absolute left-1/2 top-40 z-20 hidden h-28 w-28 sm:block',
        style: { transform: `translateY(${scrollY * 0.3}px)` },
      })}
      {React.createElement('model-viewer', {
        src: '/assets/canteen/canteen.glb',
        'camera-controls': false,
        'auto-rotate': true,
        className: 'absolute left-2/3 top-60 z-30 hidden h-32 w-32 sm:block',
        style: { transform: `translateY(${scrollY * 0.5}px)` },
      })}

      {/* Content in front of background */}
      <div className="relative z-40 flex h-full items-center justify-center">
        <h1 className="text-4xl font-bold text-white md:text-7xl">
          Parallax Scene
        </h1>
      </div>
    </section>
  );
};

export default ParallaxScene;
