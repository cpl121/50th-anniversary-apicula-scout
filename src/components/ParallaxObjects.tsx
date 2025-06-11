import React, { useEffect, useState } from 'react';

interface ParallaxItem {
  src: string;
  className: string;
  speed: number;
}

const ITEMS: ParallaxItem[] = [
  { src: '/assets/compass/compass.glb', className: 'left-10 top-[3rem] h-16 w-16', speed: 0.05 },
  { src: '/assets/tent/tent.glb', className: 'left-1/3 top-[10rem] h-20 w-20', speed: 0.08 },
  { src: '/assets/knot/knot.glb', className: 'right-10 top-[20rem] h-16 w-16', speed: 0.12 },
  { src: '/assets/canteen/canteen.glb', className: 'left-2/3 top-[30rem] h-20 w-20', speed: 0.15 },
  { src: '/assets/horn/horn.glb', className: 'left-20 top-[40rem] h-16 w-16', speed: 0.1 },
  { src: '/assets/axe/axe.glb', className: 'right-20 top-[50rem] h-20 w-20', speed: 0.2 },
  { src: '/assets/campfire/campfire.glb', className: 'left-1/4 top-[65rem] h-20 w-20', speed: 0.18 },
  { src: '/assets/fleur-de-lis/fleur-de-lis.glb', className: 'left-1/2 top-[75rem] h-20 w-20', speed: 0.07 },
  { src: '/assets/hat/hat.glb', className: 'right-1/3 top-[85rem] h-20 w-20', speed: 0.13 },
  { src: '/assets/neckerchief/neckerchief.glb', className: 'left-[5%] top-[95rem] h-20 w-20', speed: 0.16 },
];

const ParallaxObjects: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 hidden sm:block">
      {ITEMS.map((item, idx) =>
        React.createElement('model-viewer', {
          key: idx,
          src: item.src,
          'camera-controls': false,
          'auto-rotate': true,
          className: `absolute ${item.className}`,
          style: { transform: `translateY(${scrollY * item.speed}px)` },
        })
      )}
    </div>
  );
};

export default ParallaxObjects;
