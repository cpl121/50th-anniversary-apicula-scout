import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import * as THREE from 'three';
import { ARButton } from 'three/examples/jsm/webxr/ARButton.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { NextPage } from 'next';

interface Object {
  title: string;
  description: string;
  glbModel: string;
  iosModel: string;
}

const objects: Record<string, Object> = {
  tent: {
    title: '⛺ La Tienda Fundacional',
    description: 'La lona que vio nacer nuestras primeras noches bajo las estrellas.',
    glbModel: '/assets/tent/tent.glb',
    iosModel: '/assets/tent/tent.usdz',
  },
  compass: {
    title: '🧭 La Brújula del Norte Verdadero',
    description: 'Siempre señala hacia el espíritu scout.',
    glbModel: '/assets/compass/compass.glb',
    iosModel: '/assets/compass/compass.usdz',
  },
  knot: {
    title: '🪢 El Nudo del Tiempo',
    description: 'Un lazo que une generaciones en una única cuerda de sabiduría.',
    glbModel: '/assets/knot/knot.glb',
    iosModel: '/assets/knot/knot.usdz',
  },
  canteen: {
    title: '💧 La Cantimplora del Espíritu Inagotable',
    description: 'Portó el aliento de los exploradores que nunca se rindieron.',
    glbModel: '/assets/canteen/canteen.glb',
    iosModel: '/assets/canteen/canteen.usdz',
  },
  horn: {
    title: '📯 El Cuerno de la Llamada',
    description: 'Una sola nota bastaba para reunir a la patrulla entera.',
    glbModel: '/assets/horn/horn.glb',
    iosModel: '/assets/horn/horn.usdz',
  },
  axe: {
    title: '🪓 El Hacha del Clan Perdido',
    description: 'Su filo forjó caminos en los bosques más densos.',
    glbModel: '/assets/axe/axe.glb',
    iosModel: '/assets/axe/axe.usdz',
  },
  campfire: {
    title: '🔥 El Fuego de la Tribu',
    description: 'Llama ancestral que reúne historias, cantos y sabiduría compartida.',
    glbModel: '/assets/campfire/campfire.glb',
    iosModel: '/assets/campfire/campfire.usdz',
  },
  'fleur-de-lis': {
    title: '🌿 La Flor de Lis Eterna',
    description: 'Emblema que guía con firmeza a los corazones nobles por el buen camino.',
    glbModel: '/assets/fleur-de-lis/fleur-de-lis.glb',
    iosModel: '/assets/fleur-de-lis/fleur-de-lis.usdz',
  },
  hat: {
    title: '🎩 El Gorro de Baden-Powell',
    description: 'Imbuido con el espíritu del fundador, inspira liderazgo y servicio.',
    glbModel: '/assets/hat/hat.glb',
    iosModel: '/assets/hat/hat.usdz',
  },
  neckerchief: {
    title: '🧣 El Lazo del Compromiso',
    description: 'Su nudo no se deshace: une almas, no solo telas.',
    glbModel: '/assets/neckerchief/neckerchief.glb',
    iosModel: '/assets/neckerchief/neckerchief.usdz',
  },
};

const ObjectPage: NextPage = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const { slug } = router.query;
  const [supportsAR, setSupportsAR] = useState(false);

  const parsedSlug = Array.isArray(slug) ? slug[0] : slug;
  const object = parsedSlug ? objects[parsedSlug] : undefined;

  useEffect(() => {
    if (typeof window !== 'undefined' && navigator.xr?.isSessionSupported) {
      navigator.xr
        .isSessionSupported('immersive-ar')
        .then((supported) => {
          setSupportsAR(supported);
        })
        .catch(() => {
          setSupportsAR(false);
        });
    } else {
      setSupportsAR(false);
    }
  }, []);

  useEffect(() => {
    if (!supportsAR && typeof window !== 'undefined' && !customElements.get('model-viewer')) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
      document.head.appendChild(script);
    }
  }, [supportsAR]);

  useEffect(() => {
    if (!supportsAR || !object || !mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.01,
      20,
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.xr.enabled = true;

    const mountEl = mountRef.current;
    mountEl.appendChild(renderer.domElement);
    document.body.appendChild(ARButton.createButton(renderer));

    const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
    light.position.set(0.5, 1, 0.25);
    scene.add(light);

    const loader = new GLTFLoader();
    loader.load(object.glbModel, (gltf) => {
      scene.add(gltf.scene);
    });

    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });

    return () => {
      while (mountEl.firstChild) {
        mountEl.removeChild(mountEl.firstChild);
      }
    };
  }, [supportsAR, object]);

  if (!object) return <p>No existe el objeto</p>;

  return (
    <div className="flex flex-col items-center h-screen w-screen overflow-hidden bg-zinc-900 text-center">
      <div className="flex flex-col items-center justify-center mt-8 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 tracking-tight">
          {object.title}
        </h1>
        <div className="w-24 h-1 bg-green-600 rounded-full mb-4" />
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-zinc-200 italic">
          {object.description}
        </p>
      </div>
      {supportsAR ? (
        <div ref={mountRef} style={{ width: '100vw', height: '80vh' }} />
      ) : (
        React.createElement('model-viewer', {
          src: object.glbModel,
          'ios-src': object.iosModel,
          ar: true,
          'ar-modes': 'scene-viewer quick-look',
          'auto-rotate': true,
          'camera-controls': true,
          style: { width: '100%', height: '80vh' },
        })
      )}
    </div>
  );
};

export default ObjectPage;
