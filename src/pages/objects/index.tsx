import Link from 'next/link';

const objetos = [
  {
    slug: 'tent',
    titulo: '⛺ La tienda fundacional',
    hasModel: true,
  },
  {
    slug: 'compass',
    titulo: '🧭 La brújula del norte verdadero',
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
    titulo: '📯 El cuerno de la llamada',
    hasModel: true,
  },
  {
    slug: 'axe',
    titulo: '🪓 El hacha del clan perdido',
    hasModel: true,
  },
  {
    slug: 'campfire',
    titulo: '🔥 El fuego de la tribu',
    hasModel: true,
  },
  {
    slug: 'fleur-de-lis',
    titulo: '🌿 La flor de lis eterna',
    hasModel: true,
  },
  {
    slug: 'hat',
    titulo: '🎩 El gorro de Baden-Powell',
    hasModel: true,
  },
  {
    slug: 'neckerchief',
    titulo: '🧣 El lazo del compromiso',
    hasModel: true,
  },
];

const ObjectsIndex = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white py-20 px-6 space-y-12 md:space-y-20">
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
  );
};

export default ObjectsIndex;
