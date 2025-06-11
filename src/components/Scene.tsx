'use client';

import { ReactNode, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

interface CenterModelProps {
  url: string;
  objectsDistance: number;
}

const CenterModel: React.FC<CenterModelProps> = ({ url, objectsDistance }) => {
  const { scene } = useGLTF(url);
  const ref = useRef<THREE.Group>(null!);

  useFrame(() => {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;
    const offset = (scrollY / vh) * objectsDistance + 1;
    ref.current.position.set(0.2, -offset, -7);
    ref.current.rotation.y = scrollY * 0.001;
  });

  return <primitive ref={ref} object={scene} />;
};

interface SideModelProps {
  key: string;
  url: string;
  index: number;
  objectsDistance: number;
  scale: number;
  extraDistance?: number;
}

const SideModel: React.FC<SideModelProps> = ({
  key,
  url,
  index,
  objectsDistance,
  scale,
  extraDistance = 0,
}) => {
  const { scene } = useGLTF(url);
  const ref = useRef<THREE.Group>(null!);
  const side = index % 2 === 0 ? -1 : 1;

  const initialPosition = useMemo(() => {
    const x = side * (2 + extraDistance);
    const y = -index * objectsDistance;
    return new THREE.Vector3(x, y, 0);
  }, [index, objectsDistance, side]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.position.set(
      initialPosition.x,
      initialPosition.y + Math.sin(t + index) * 0.1,
      initialPosition.z,
    );
    const scrollY = window.scrollY;
    ref.current.rotation.y = scrollY * -0.00015;
  });

  return <primitive key={key} ref={ref} object={scene} position={initialPosition} scale={scale} />;
};

function ThreeScene() {
  const { camera } = useThree();

  const objectsDistance = 1;

  useFrame(() => {
    const scrollY = window.scrollY;
    const vh = window.innerHeight;
    const offset = (scrollY / vh) * objectsDistance;
    camera.position.y = -offset;
  });

  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight position={[1, 1, 0]} intensity={5} />
      <CenterModel url={'/assets/logo/scout_logo_2.glb'} objectsDistance={objectsDistance} />

      <SideModel
        key={'/assets/canteen/canteen.glb'}
        url={'/assets/canteen/canteen.glb'}
        index={1}
        scale={0.35}
        objectsDistance={2}
        extraDistance={-0.5}
      />
      <SideModel
        key={'/assets/compass/compass.glb'}
        url={'/assets/compass/compass.glb'}
        index={2}
        scale={0.35}
        objectsDistance={1}
        extraDistance={1}
      />
      <SideModel
        key={'/assets/neckerchief/neckerchief.glb'}
        url={'/assets/neckerchief/neckerchief.glb'}
        index={3}
        scale={0.15}
        objectsDistance={objectsDistance}
        extraDistance={0.5}
      />
      <SideModel
        key={'/assets/horn/horn.glb'}
        url={'/assets/horn/horn.glb'}
        index={4}
        scale={0.2}
        objectsDistance={objectsDistance}
        extraDistance={0.5}
      />
      <SideModel
        key={'/assets/axe/axe.glb'}
        url={'/assets/axe/axe.glb'}
        index={5}
        scale={0.3}
        objectsDistance={objectsDistance}
        extraDistance={0}
      />
      <SideModel
        key={'/assets/campfire/campfire.glb'}
        url={'/assets/campfire/campfire.glb'}
        index={6}
        scale={0.3}
        objectsDistance={objectsDistance}
        extraDistance={0.5}
      />
      <SideModel
        key={'/assets/fleur-de-lis/fleur-de-lis.glb'}
        url={'/assets/fleur-de-lis/fleur-de-lis.glb'}
        index={7}
        scale={0.25}
        objectsDistance={objectsDistance}
        extraDistance={0}
      />
      <SideModel
        key={'/assets/hat/hat.glb'}
        url={'/assets/hat/hat.glb'}
        index={8}
        scale={0.4}
        objectsDistance={objectsDistance}
        extraDistance={-0.5}
      />
    </>
  );
}

interface ThreeSceneProps {
  children?: ReactNode;
}

const Scene: React.FC<ThreeSceneProps> = ({ children }) => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Canvas
        style={{ position: 'fixed', inset: 0, zIndex: -1 }}
        camera={{ fov: 35, position: [0, 0, 6], near: 0.1, far: 100 }}
        gl={{ alpha: true }}
      >
        <ThreeScene />
      </Canvas>
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  );
};

export default Scene;
