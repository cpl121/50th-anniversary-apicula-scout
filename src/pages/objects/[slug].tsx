import React, { useEffect, useState } from 'react';
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
    title: '⛺ Tu primer techo bajo las estrellas',
    description: 'La lona que vio nacer nuestras primeras noches bajo las estrellas.',
    glbModel: '/assets/tent/tent.glb',
    iosModel: '/assets/tent/tent.usdz',
  },
  compass: {
    title: '🧭 Tu brújula interior',
    description:
      'No te indicó el norte, te mostró el camino. El que elegiste, el que sigues, el que te hace scout.',
    glbModel: '/assets/compass/compass.glb',
    iosModel: '/assets/compass/compass.usdz',
  },
  knot: {
    title: '🪢 El nudo del tiempo',
    description: 'Une más que cuerdas. Une generaciones.',
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
    title: '📯 El sonido del reencuentro',
    description: 'En cada campamento, una sola nota bastaba para que todos se volvieran a unir.',
    glbModel: '/assets/horn/horn.glb',
    iosModel: '/assets/horn/horn.usdz',
  },
  axe: {
    title: '🪓 Donde hubo cabaña, su filo dejó marca',
    description: 'Cada banco, cada mástil, cada cabaña, cada mochilero tiene su firma.',
    glbModel: '/assets/axe/axe.glb',
    iosModel: '/assets/axe/axe.usdz',
  },
  campfire: {
    title: '🔥 Run Run Deri Derá',
    description: 'Llama ancestral que reúne historias, cantos y sabiduría compartida.',
    glbModel: '/assets/campfire/campfire.glb',
    iosModel: '/assets/campfire/campfire.usdz',
  },
  'fleur-de-lis': {
    title: '🌿 El símbolo que nos une',
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
    title: '🧣 El pasador único',
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

const Popup = ({ setClosePopup }: { setClosePopup: (value: boolean) => void }) => {
  const onClickButton = () => {
    setClosePopup(true);
    localStorage.setItem('popupUnlocked', 'true');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none h-full">
      <div className="w-full h-fit max-w-md mx-2 p-4 rounded-xl bg-gray-900 border border-gray-700 text-white space-y-2 shadow-xl opacity-95 pointer-events-auto flex  flex-col items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-semibold text-center">
          Explora en Realidad Aumentada
        </h1>
        <div className="h-px w-full bg-white/50 my-6" />
        <div className="flex flex-col space-y-8 justify-center items-center">
          <p className="text-lg text-gray-300 text-center">
            Busca un icono como este en la pantalla y haz click en él para entrar en la Realidad
            Aumentada y asi poder escanear el entorno y hacer una foto con el objeto.
          </p>
          <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full border-2 shadow-sm">
            <Image
              src="/images/realidad-aumentada.svg"
              alt="Realidad aumentada"
              width={30}
              height={30}
            />
          </div>
          <br />
          <p className="text-lg text-gray-300 text-center">
            ⚠️ Si no ves el icono, o lo pulsas y no ocurre nada, es porque tu móvil no permite su
            acceso. Intentalo con otro móvil ⚠️
          </p>
        </div>
        <div className="w-full">
          <div className="h-px w-full bg-white/50 my-6" />
          <div className="w-full">
            <Button text={'¡De acuerdo!'} onClickButton={onClickButton} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ObjectPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [closePopup, setClosePopup] = useState(false);

  let showPopup;

  if (typeof window !== 'undefined') {
    showPopup = localStorage.getItem('popupUnlocked') || '';
  }

  const parsedSlug = Array.isArray(slug) ? slug[0] : slug;
  const object = parsedSlug ? objects[parsedSlug] : undefined;

  if (!object) return <p>No existe el objeto</p>;

  return (
    <>
      {!showPopup && !closePopup && <Popup setClosePopup={setClosePopup} />}
      <div
        className={`flex flex-col items-center h-screen w-screen overflow-hidden bg-zinc-900 text-center ${!showPopup && !closePopup ? 'blur-xs brightness-20' : ''}`}
      >
        <div className="flex flex-col flex-none items-center justify-center pt-8 space-y-8 mx-6">
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-200 tracking-tight">
            {object.title}
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-zinc-200 italic mb-4">
            {object.description}
          </p>
        </div>
        <div className="flex-1 w-full">
          {React.createElement('model-viewer', {
            src: object.glbModel,
            'ios-src': object.iosModel,
            ar: true,
            'ar-modes': 'scene-viewer quick-look',
            'auto-rotate': true,
            'camera-controls': true,
            style: { width: '100%', height: '100%' },
          })}
        </div>
      </div>
    </>
  );
};

export default ObjectPage;
