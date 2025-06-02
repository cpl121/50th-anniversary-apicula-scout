import Link from 'next/link';
import { useState } from 'react';
import SHA256 from 'crypto-js/sha256';

const HASH = 'b4b53da1ab7fc52e477e160a321a39be4d65640ab2df31db7a06d79b04fb92c2';

const objetos = [
  {
    slug: 'tent',
    titulo: '⛺ Tu primer techo bajo las estrellas',
    hasModel: true,
  },
  {
    slug: 'compass',
    titulo: '🧭 Tu brújula interior',
    hasModel: true,
  },
  {
    slug: 'knot',
    titulo: '🪢 El nudo del tiempo',
    hasModel: true,
  },
  {
    slug: 'canteen',
    titulo: '💧 La cantimplora del espíritu inagotable',
    hasModel: true,
  },
  {
    slug: 'horn',
    titulo: '📯 El sonido del reencuentro',
    hasModel: true,
  },
  {
    slug: 'axe',
    titulo: '🪓 Donde hubo cabaña, su filo dejó marca',
    hasModel: true,
  },
  {
    slug: 'campfire',
    titulo: '🔥 Run Run Deri Derá',
    hasModel: true,
  },
  {
    slug: 'fleur-de-lis',
    titulo: '🌿 El símbolo que nos une',
    hasModel: true,
  },
  {
    slug: 'hat',
    titulo: '🎩 El gorro de Baden-Powell',
    hasModel: true,
  },
  {
    slug: 'neckerchief',
    titulo: '🧣 El pasador único',
    hasModel: true,
  },
];

const Popup = ({
  setShowPopup,
  setShowObjects,
}: {
  setShowPopup: (value: boolean) => void;
  setShowObjects: (value: boolean) => void;
}) => {
  const [value, setValue] = useState('');

  const onClickButton = () => {
    const hashed = SHA256(value).toString();
    if (hashed === HASH) {
      setShowPopup(false);
      setShowObjects(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center h-full">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />
      <div className="w-full h-fit max-w-md mx-4 p-6 rounded-xl bg-gray-900 border border-gray-700 text-white space-y-4 shadow-xl opacity-95 pointer-events-auto flex  flex-col items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-semibold text-center">
          Introduce el código secreto
        </h1>
        <div className="h-px w-full bg-white/50 my-6" />
        <div className="flex flex-col space-y-8 justify-center items-center">
          <span>Introduce el código secreto para acceder a los objetos</span>
          <input
            type="password"
            name="password"
            value={value}
            autoFocus
            onChange={(e) => setValue(e.target.value)}
            className={`w-full px-4 py-2 bg-white/20 rounded-lg`}
          />
        </div>
        <div className="w-full">
          <div className="h-px w-full bg-white/50 my-6" />
          <div className="w-full">
            <button
              disabled={!value.trim()}
              onClick={onClickButton}
              className={`text-md p-4 rounded w-full h-full text-white transition
              ${value.trim() ? 'bg-white/10 hover:bg-white/20 cursor-pointer' : 'bg-white/5 cursor-not-allowed'}`}
            >
              Comprobar contraseña
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ObjectsIndex = () => {
  const [showObjects, setShowObjects] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

  return (
    <>
      {showPopup && <Popup setShowPopup={setShowPopup} setShowObjects={setShowObjects} />}
      <div
        className={`${showObjects ? '' : 'blur-2xl'} min-h-screen bg-zinc-900 text-white py-20 px-6 space-y-12 md:space-y-20`}
      >
        <h1 className="text-4xl font-bold text-center">🌟 Objetos legendarios 🌟</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {objetos.map((objeto) => (
            <Link href={objeto.hasModel ? `/objects/${objeto.slug}` : '/objects'} key={objeto.slug}>
              <div
                className={`w-full h-full bg-zinc-800 hover:bg-zinc-700 transition rounded-xl space-y-2 md:space-y-4 flex flex-col justify-between p-6 shadow-md ${!objeto.hasModel ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <h2 className="text-xl font-semibold text-emerald-200">{objeto.titulo}</h2>
                {objeto.hasModel ? (
                  <p className="text-zinc-200 mt-1 text-lg">Ver en realidad aumentada →</p>
                ) : (
                  <p className="text-red-200 mt-1 text-lg">No existe el modelo todavia</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ObjectsIndex;
