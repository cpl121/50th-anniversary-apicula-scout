import Link from 'next/link';

const objetos = [
  {
    slug: 'tent',
    titulo: '⛺ La Tienda Fundacional',
    hasModel: true
  },
  {
    slug: 'compass',
    titulo: '🧭 La Brújula del Norte Verdadero',
    hasModel: true
  },
  {
    slug: 'knot',
    titulo: '🪢 El Nudo del Tiempo',
    hasModel: true
  },
  {
    slug: 'canteen',
    titulo: '💧 La Cantimplora del Espíritu Inagotable',
    hasModel: true
  },
  {
    slug: 'horn',
    titulo: '📯 El Cuerno de la Llamada',
    hasModel: true
  },
  {
    slug: 'axe',
    titulo: '🪓 El Hacha del Clan Perdido',
    hasModel: true
  },
  {
    slug: 'campfire',
    titulo: '🔥 El Fuego de la Tribu',
    hasModel: true
  },
  {
    slug: 'fleur-de-lis',
    titulo: '🌿 La Flor de Lis Eterna',
    hasModel: true
  },
  {
    slug: 'hat',
    titulo: '🎩 El Gorro de Baden-Powell',
    hasModel: true
  },
  {
    slug: 'neckerchief',
    titulo: '🧣 El Lazo del Compromiso',
    hasModel: true
  },
];

const ObjectsIndex = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-8">🌟 Objetos Legendarios 🌟</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {objetos.map((objeto) => (
          <Link href={objeto.hasModel ? `/objects/${objeto.slug}` : '/objects'} key={objeto.slug}>
            <div className={`w-full h-full bg-zinc-800 hover:bg-zinc-700 transition rounded-xl p-6 shadow-md ${!objeto.hasModel ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
              <h2 className="text-xl font-semibold text-green-600">{objeto.titulo}</h2>
              {objeto.hasModel ? (
                <p className="text-zinc-200 mt-1 text-sm">Ver en realidad aumentada →</p>
              ) : (
                <p className="text-red-200 mt-1 text-sm">No existe el modelo todavia</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ObjectsIndex