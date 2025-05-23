import React, { useState } from 'react';
import { useRouter } from 'next/router';
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
    title: '⛺ La tienda fundacional',
    description: 'La lona que vio nacer nuestras primeras noches bajo las estrellas.',
    glbModel: '/assets/tent/tent.glb',
    iosModel: '/assets/tent/tent.usdz',
  },
  compass: {
    title: '🧭 La brújula del norte verdadero',
    description: 'Siempre señala hacia el espíritu scout.',
    glbModel: '/assets/compass/compass.glb',
    iosModel: '/assets/compass/compass.usdz',
  },
  knot: {
    title: '🪢 El nudo del tiempo',
    description: 'Un lazo que une generaciones en una única cuerda de sabiduría.',
    glbModel: '/assets/knot/knot.glb',
    iosModel: '/assets/knot/knot.usdz',
  },
  canteen: {
    title: '💧 La cantimplora del espíritu inagotable',
    description: 'Portó el aliento de los exploradores que nunca se rindieron.',
    glbModel: '/assets/canteen/canteen.glb',
    iosModel: '/assets/canteen/canteen.usdz',
  },
  horn: {
    title: '📯 El cuerno de la llamada',
    description: 'Una sola nota bastaba para reunir a la patrulla entera.',
    glbModel: '/assets/horn/horn.glb',
    iosModel: '/assets/horn/horn.usdz',
  },
  axe: {
    title: '🪓 El hacha del clan perdido',
    description: 'Su filo forjó caminos en los bosques más densos.',
    glbModel: '/assets/axe/axe.glb',
    iosModel: '/assets/axe/axe.usdz',
  },
  campfire: {
    title: '🔥 El fuego de la tribu',
    description: 'Llama ancestral que reúne historias, cantos y sabiduría compartida.',
    glbModel: '/assets/campfire/campfire.glb',
    iosModel: '/assets/campfire/campfire.usdz',
  },
  'fleur-de-lis': {
    title: '🌿 La flor de lis eterna',
    description: 'Emblema que guía con firmeza a los corazones nobles por el buen camino.',
    glbModel: '/assets/fleur-de-lis/fleur-de-lis.glb',
    iosModel: '/assets/fleur-de-lis/fleur-de-lis.usdz',
  },
  hat: {
    title: '🎩 El gorro de Baden-Powell',
    description: 'Imbuido con el espíritu del fundador, inspira liderazgo y servicio.',
    glbModel: '/assets/hat/hat.glb',
    iosModel: '/assets/hat/hat.usdz',
  },
  neckerchief: {
    title: '🧣 El lazo del compromiso',
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

const Popup = ({ setShowPopup }: { setShowPopup: (value: boolean) => void }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none h-full">
      <div className="w-full h-fit max-w-md mx-4 p-6 rounded-xl bg-gray-900 border border-gray-700 text-white space-y-4 shadow-xl opacity-95 pointer-events-auto flex  flex-col items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-semibold text-center">
          Explora en Realidad Aumentada
        </h1>
        <div className="h-px w-full bg-white/50 my-6" />
        <div className="flex flex-col space-y-8 justify-center items-center">
          <p className="text-lg text-gray-300">
            Busca este icono en tu pantalla y haz click en él para entrar en la Realidad Aumentada.
          </p>
          <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full border-2 shadow-sm">
            <Image
              src="/images/realidad-aumentada.svg"
              alt="Realidad aumentada"
              width={20}
              height={20}
            />
          </div>
          <br />
          <p className="text-lg text-gray-300">
            ⚠️ Si no ves el icono es porque tu móvil no permite su acceso. Intentad entrar con otro
            móvil.
          </p>
        </div>
        <div className="w-full">
          <div className="h-px w-full bg-white/50 my-6" />
          <div className="w-full">
            <Button text={'¡De acuerdo!'} onClickButton={() => setShowPopup(false)} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ObjectPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [showPopup, setShowPopup] = useState(true);

  const parsedSlug = Array.isArray(slug) ? slug[0] : slug;
  const object = parsedSlug ? objects[parsedSlug] : undefined;

  if (!object) return <p>No existe el objeto</p>;

  return (
    <>
      {showPopup && <Popup setShowPopup={setShowPopup} />}
      <div
        className={`flex flex-col items-center h-screen w-screen overflow-hidden bg-zinc-900 text-center ${showPopup ? 'blur-xs brightness-20' : ''}`}
      >
        <div className="flex flex-col items-center justify-center pt-8 space-y-8 mx-6 overflow-hidden">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-200 tracking-tight">
            {object.title}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-zinc-200 italic mb-4">
            {object.description}
          </p>
        </div>
        {React.createElement('model-viewer', {
          src: object.glbModel,
          'ios-src': object.iosModel,
          ar: true,
          'ar-modes': 'scene-viewer quick-look',
          'auto-rotate': true,
          'camera-controls': true,
          style: { width: '100%', height: '80vh' },
        })}
      </div>
    </>
  );
};

export default ObjectPage;
