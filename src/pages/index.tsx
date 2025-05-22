'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Tent, Flame, Users, Sparkles, Globe2 } from 'lucide-react';
import { useRouter } from 'next/router';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (path: string) => {
    router.push(path);
  };

  return (
    <main className="relative flex min-h-screen flex-col bg-white">
      {/* Hero Section with Parallax */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Parallax Background Layers */}
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/scouts.jpg')",
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        ></div>
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/scouts.jpg')",
            opacity: 0.6,
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        ></div>
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/scouts.jpg')",
            opacity: 0.4,
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-green-900/30 backdrop-blur-sm"></div>

        {/* Scout Symbol (Fleur-de-lis) - Positioned with parallax */}
        <div
          className="absolute right-8 top-8 h-20 w-20 opacity-20 md:h-28 md:w-28"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
          <Image src="/images/flor-de-lis.svg" alt="Flor de Lis" width={112} height={112} />
        </div>

        {/* Honeycomb Pattern - Positioned with parallax */}
        <div
          className="absolute bottom-8 left-8 h-32 w-32 opacity-15 md:h-40 md:w-40"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        >
          <Image src="/images/honeycomb.svg" alt="Honeycomb Pattern" width={160} height={160} />
        </div>

        {/* Content */}
        <div
          className="container relative z-10 mx-auto px-4 text-center"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        >
          <div className="mx-auto max-w-2xl">
            {/* Bee Icon */}
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
              <Image src="/images/bee.svg" alt="Bee Icon" width={40} height={40} />
            </div>

            <h1 className="mb-4 font-serif text-5xl font-bold text-white md:text-7xl">
              50 años de <span className="block italic">Apicula</span>
            </h1>

            <p className="mb-8 text-lg text-white/90 md:text-xl">
              Explora medio siglo de aventuras, amistad y servicio a través de nuestro juego
              interactivo
            </p>

            <button
              onClick={() => handleClick('objects')}
              className="group cursor-pointer relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-8 py-4 font-medium text-green-800 transition-all hover:bg-white/90"
            >
              <span className="relative">Ver Objetos Legendarios</span>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative bg-white py-20">
        {/* Subtle Honeycomb Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[url('/images/honeycomb.svg')] bg-repeat"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center font-serif text-3xl font-bold text-green-800 md:text-4xl">
              Valores que nos guían
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Aventura */}
              <div className="group flex flex-col items-center rounded-lg p-6 transition-all hover:-translate-y-1">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-50 shadow-md transition-all group-hover:shadow-lg">
                  <Tent className="h-10 w-10 text-green-700" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-green-800">Aventura</h3>
                <p className="text-center text-green-600">
                  Exploramos nuevos horizontes y abrazamos los desafíos con valentía y entusiasmo
                </p>
              </div>

              {/* Creatividad */}
              <div className="group flex flex-col items-center rounded-lg p-6 transition-all hover:-translate-y-1">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-50 shadow-md transition-all group-hover:shadow-lg">
                  <Sparkles className="h-10 w-10 text-green-700" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-green-800">Creatividad</h3>
                <p className="text-center text-green-600">
                  Fomentamos la imaginación y la innovación para resolver problemas y crear
                  experiencias únicas
                </p>
              </div>

              {/* Comunidad */}
              <div className="group flex flex-col items-center rounded-lg p-6 transition-all hover:-translate-y-1">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-50 shadow-md transition-all group-hover:shadow-lg">
                  <Users className="h-10 w-10 text-green-700" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-green-800">Comunidad</h3>
                <p className="text-center text-green-600">
                  Construimos lazos fuertes basados en el respeto, la colaboración y el servicio a
                  los demás
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scout Elements Section */}
      <section className="bg-green-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex flex-col items-center">
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                  <Image src="/images/neckerchief.svg" alt="Neckerchief" width={20} height={20} />
                </div>
                <span className="text-sm text-green-700">Pañoleta</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                  <Flame className="h-8 w-8 text-brown-600" />
                </div>
                <span className="text-sm text-green-700">Fogata</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                  <Image src="/images/flor-de-lis.svg" alt="Fleur-de-lis" width={40} height={40} />
                </div>
                <span className="text-sm text-green-700">Flor de Lis</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                  <Image src="/images/bee.svg" alt="Bee" width={40} height={40} />
                </div>
                <span className="text-sm text-green-700">Abeja</span>
              </div>

              <div className="flex flex-col items-center">
                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                  <Globe2 className="h-8 w-8" />
                </div>
                <span className="text-sm text-green-700">Naturaleza</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 border-t border-green-100 pt-8 text-center md:flex-row md:text-left">
            <div>
              <p className="text-sm text-green-600">
                © {new Date().getFullYear()} Grupo Scout Apicula. 50 Aniversario.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-green-600">Hecho con</span>
              <Flame className="h-4 w-4 text-brown-600" />
              <span className="text-sm text-green-600">y espíritu scout</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
