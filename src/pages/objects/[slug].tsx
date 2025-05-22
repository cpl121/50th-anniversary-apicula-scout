import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import * as THREE from 'three';
import { ARButton } from 'three/examples/jsm/webxr/ARButton.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { NextPage } from 'next';
import Image from 'next/image';

interface Object {
  title: string;
  description: string;
  glbModel: string;
  iosModel: string;
}

type ButtonProps = {
  text: string;
  onClickButton: (value?: boolean) => void;
};

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

const Button = ({ text, onClickButton }: ButtonProps) => {
  return (
    <button
      className="text-md p-4 bg-white/10 hover:bg-white/20 rounded cursor-pointer w-full h-full text-white"
      onClick={() => onClickButton()}
    >
      {text}
    </button>
  );
};

const Popup = ({
  setShowPopup,
  supportsAR,
}: {
  setShowPopup: (value: boolean) => void;
  supportsAR: boolean;
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none h-full">
      <div className="w-full h-[60%] max-w-md mx-4 p-6 rounded-xl bg-gray-900 border border-gray-700 text-white space-y-4 shadow-xl opacity-95 pointer-events-auto flex  flex-col items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-semibold text-center">
          Explora en Realidad Aumentada
        </h1>
        {supportsAR ? (
          <div className="flex flex-col space-y-8 justify-center items-center">
            <p className="text-lg text-gray-300">
              Pulsa en el siguiente icono para entrar en modo de Realidad Aumentada (RA).
            </p>
            <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full border-2 shadow-sm">
              <Image
                src="/images/realidad-aumentada.svg"
                alt="Realidad aumentada"
                width={20}
                height={20}
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col space-y-8 justify-center items-center">
            <p className="text-lg text-gray-300">
              Pulsa en el boton para entrar en AR.
              <br />
              Si no ves nada, pulsar el boton "No veo nada"
            </p>
          </div>
        )}
        <div className="w-full">
          <div className="h-px w-full bg-white/50 my-6" />
          <div className="w-full">
            <Button text={'De acuerdo!'} onClickButton={() => setShowPopup(false)} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ObjectPage: NextPage = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const { slug } = router.query;
  const [supportsAR, setSupportsAR] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

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
    <>
      {showPopup && <Popup setShowPopup={setShowPopup} supportsAR={supportsAR} />}
      <div
        className={`flex flex-col items-center h-screen w-screen overflow-hidden bg-zinc-900 text-center ${showPopup ? 'blur-xs brightness-20' : ''}`}
      >
        <div className="flex flex-col items-center justify-center mt-8 space-y-4 mx-4 overflow-hidden">
          <h1 className="text-4xl md:text-5xl font-bold text-[#54E794FF] tracking-tight">
            {object.title}
          </h1>
          <div className="w-24 h-1 bg-[#54E794FF] rounded-full mb-4" />
          <p className="text-lg md:text-xl max-w-2xl mb-8 text-zinc-200 italic">
            {object.description}
          </p>
        </div>
        {supportsAR ? (
          <>
            <div ref={mountRef} style={{ width: '100vw', height: '80vh' }} />
            <div className="mb-4 w-full px-4">
              <Button text={'No veo nada'} onClickButton={() => setSupportsAR(false)} />
            </div>
          </>
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
    </>
  );
};

export default ObjectPage;
