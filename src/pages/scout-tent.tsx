import React from "react";

export default function TiendaCampana() {
  return (
    <>
      <main
        style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          height: '90vh',
          overflow: 'hidden',
        }}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-800 mb-6 leading-tight">
          ✨ Tu primera noche<br className="hidden md:inline" /> bajo las estrellas ✨
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            La tienda que marcó el inicio de incontables travesías vuelve a la vida.<br />
            Proyéctala en tu espacio, imagina el fuego, escucha el viento.<br />
            Porque cada aventura empieza con un campamento.
          </p>
        </div>
        {React.createElement('model-viewer', {
          src: '/assets/tent/tent.glb',
          'ios-src': '/assets/tent/tent.usdz',
          ar: true,
          'ar-modes': 'scene-viewer quick-look',
          'auto-rotate': true,
          'camera-controls': true,
          style: { width: '100%', height: '100%' },
        })}
      </main>
    </>
  );
}
