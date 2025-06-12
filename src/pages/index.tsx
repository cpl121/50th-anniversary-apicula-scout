'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { Tent, Flame, Users, Sparkles, Calendar, MapPin, Heart } from 'lucide-react';
import { Scene } from '@/components';
import { useRouter } from 'next/router';

const APICULA_URL = 'https://apiculamsc.com/';
const APICULA_URL_INSTAGRAM = 'https://www.instagram.com/apiculamsc/';
const APICULA_URL_CONTACT = 'https://apiculamsc.com/contacto/';
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

  function clickObjects() {
    router.push('/objects');
  }
  const clickApiculaWeb = useCallback(() => {
    window.open(APICULA_URL, '_blank', 'noopener,noreferrer');
  }, []);

  const clickApiculaInstagram = useCallback(() => {
    window.open(APICULA_URL_INSTAGRAM, '_blank', 'noopener,noreferrer');
  }, []);
  const clickApiculaContact = useCallback(() => {
    window.open(APICULA_URL_CONTACT, '_blank', 'noopener,noreferrer');
  }, []);

  return (
    <Scene>
      <main className="relative flex min-h-screen flex-col">
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
          <div
            className="absolute right-8 top-8 h-20 w-20 opacity-20 md:h-28 md:w-28"
            style={{ transform: `translateY(${scrollY * 0.15}px)` }}
          >
            <Image src="/images/flor-de-lis.svg" alt="Flor de Lis Icon" width={112} height={112} />
          </div>

          <div
            className="container relative z-10 mx-auto px-4 text-center"
            style={{ transform: `translateY(${scrollY * -0.2}px)` }}
          >
            <div className="mx-auto max-w-4xl py-20 border-5 rounded-lg border-green-700 bg-green-200/50 backdrop-blur-md">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-800/30 backdrop-blur-md">
                <Image src="/images/bee.svg" alt="Bee Icon" width={40} height={40} />
              </div>

              <h1 className="mb-4 font-serif text-5xl font-bold text-green-800 md:text-7xl">
                50 años de <span className="block italic">Apicula</span>
              </h1>

              <p className="mb-8 text-lg text-green-900/90 md:text-xl">
                Explora medio siglo de aventuras, amistad y servicio a través de nuestro juego
                interactivo
              </p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
              className="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-green-800/70 py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-white md:text-5xl">50</div>
                <div className="text-green-200">Años de historia</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-white md:text-5xl">1,200+</div>
                <div className="text-green-200">Scouts</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-white md:text-5xl">500+</div>
                <div className="text-green-200">Acampadas</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-4xl font-bold text-white md:text-5xl">17</div>
                <div className="text-green-200">Monitores actuales</div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div>
                  <h2 className="mb-6 font-serif text-3xl font-bold text-green-800 md:text-4xl">
                    Nuestra Historia
                  </h2>
                  <p className="mb-4 text-green-900 font-semibold">
                    Desde 1975, el Grupo Scout Apicula ha sido un faro de aventura y crecimiento
                    personal en nuestra comunidad. Fundado por un grupo de visionarios que creían en
                    el poder transformador del escultismo, hemos crecido hasta convertirnos en una
                    familia de más de 1,200 scouts.
                  </p>
                  <p className="mb-6 text-green-900 font-semibold">
                    Como las abejas que inspiran nuestro nombre, trabajamos juntos para construir
                    algo más grande que nosotros mismos: una comunidad donde cada joven puede
                    descubrir su potencial y contribuir al mundo.
                  </p>
                  <button
                    className="rounded-full cursor-pointer bg-green-800/90 px-6 py-3 font-medium text-white transition-colors hover:bg-green-800/90"
                    onClick={clickApiculaWeb}
                  >
                    Conoce más sobre nosotros
                  </button>
                </div>
                <div className="relative">
                  <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src="/images/logoScout.jpeg"
                      alt="Historia del grupo"
                      width={200}
                      height={200}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-green-100 p-4 shadow-lg">
                    <Image src="/images/bee.svg" alt="Bee Icon" width={64} height={64} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="relative py-32">
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center font-serif text-3xl font-bold text-green-800 md:text-4xl">
                Valores que nos guían
              </h2>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {/* Aventura */}
                <div className="group flex flex-col items-center rounded-lg p-6 transition-all hover:-translate-y-1 backdrop-blur-sm">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-50 shadow-md transition-all group-hover:shadow-lg">
                    <Tent className="h-10 w-10 text-green-700" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-green-800">Aventura</h3>
                  <p className="text-center text-green-900 font-semibold">
                    Exploramos nuevos horizontes y abrazamos los desafíos con valentía y entusiasmo
                  </p>
                </div>

                {/* Creatividad */}
                <div className="group flex flex-col items-center rounded-lg p-6 transition-all hover:-translate-y-1 backdrop-blur-sm">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-50 shadow-md transition-all group-hover:shadow-lg">
                    <Sparkles className="h-10 w-10 text-green-700" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-green-800">Creatividad</h3>
                  <p className="text-center text-green-900 font-semibold">
                    Fomentamos la imaginación y la innovación para resolver problemas y crear
                    experiencias únicas
                  </p>
                </div>

                {/* Comunidad */}
                <div className="group flex flex-col items-center rounded-lg p-6 transition-all hover:-translate-y-1 backdrop-blur-sm">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-50 shadow-md transition-all group-hover:shadow-lg">
                    <Users className="h-10 w-10 text-green-700" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-green-800">Comunidad</h3>
                  <p className="text-center text-green-900 font-semibold">
                    Construimos lazos fuertes basados en el respeto, la colaboración y el servicio a
                    los demás
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="bg-green-800/50 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center font-serif text-3xl font-bold text-white md:text-4xl">
                Momentos que marcaron historia
              </h2>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 top-0 h-full w-0.5 bg-green-200 md:left-1/2"></div>

                {/* Timeline Items */}
                <div className="space-y-12">
                  <div className="relative flex items-center md:justify-end">
                    <div className="ml-12 rounded-lg bg-green-800/90  p-6 shadow-md md:ml-0 md:mr-12 md:w-5/12">
                      <div className="mb-2 text-sm font-semibold text-green-50">1975</div>
                      <h3 className="mb-2 text-lg font-bold text-white">Fundación del Grupo</h3>
                      <p className="text-white">
                        La historia apícola scout se remonta a 1975, cuando un grupo de scouts de
                        Guadalajara, España, que habían formado parte de un grupo scout previo que
                        se había cerrado, fundaron el Grupo Scout Apícula.
                      </p>
                    </div>
                    <div className="absolute left-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-900 md:left-1/2 md:-translate-x-1/2">
                      <div className="h-2 w-2 rounded-full "></div>
                    </div>
                  </div>

                  <div className="relative flex items-center md:justify-start">
                    <div className="ml-12 rounded-lg bg-green-800/90  p-6 shadow-md md:ml-12 md:w-5/12">
                      <div className="mb-2 text-sm font-semibold text-green-50">1977</div>
                      <h3 className="mb-2 text-lg font-bold text-white">Nombre del grupo</h3>
                      <p className="text-white">
                        El nombre Apícula se adoptó en 1977, y el grupo se ha identificado con el
                        mundo apícola y la naturaleza desde entonces.
                      </p>
                    </div>
                    <div className="absolute left-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-900 md:left-1/2 md:-translate-x-1/2">
                      <div className="h-2 w-2 rounded-full "></div>
                    </div>
                  </div>

                  <div className="relative flex items-center md:justify-end">
                    <div className="ml-12 rounded-lg bg-green-800/90  p-6 shadow-md md:ml-0 md:mr-12 md:w-5/12">
                      <div className="mb-2 text-sm font-semibold text-green-50">1999</div>
                      <h3 className="mb-2 text-lg font-bold text-white">25 Años de Servicio</h3>
                      <p className="text-white">
                        Celebramos nuestro primer cuarto de siglo con más de 500 scouts formados y
                        múltiples reconocimientos.
                      </p>
                    </div>
                    <div className="absolute left-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-900 md:left-1/2 md:-translate-x-1/2">
                      <div className="h-2 w-2 rounded-full "></div>
                    </div>
                  </div>

                  <div className="relative flex items-center md:justify-start">
                    <div className="ml-12 rounded-lg bg-green-800/90 p-6 shadow-md md:ml-12 md:w-5/12">
                      <div className="mb-2 text-sm font-semibold text-green-50">2025</div>
                      <h3 className="mb-2 text-lg font-bold text-white">50 Años de Legado</h3>
                      <p className="text-white">
                        Medio siglo de aventuras, conmemorandolos con una carrera popular y una
                        acampada reuniendo a todos los antiguos responsables.
                      </p>
                    </div>
                    <div className="absolute left-2 flex h-6 w-6 items-center justify-center rounded-full bg-green-900 md:left-1/2 md:-translate-x-1/2">
                      <div className="h-2 w-2 rounded-full "></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center font-serif text-3xl font-bold text-green-800 md:text-4xl">
                Juego Antiguos responsables
              </h2>

              <div className="grid grid-cols-1 space-x-12 md:grid-cols-2">
                <div className="rounded-lg p-6 shadow-md backdrop-blur-lg">
                  <span className="mb-4 flex text-green-900 text-xl font-bold">
                    Encuentra. Escanea. Recuerda.
                  </span>
                  <p className="mb-4 text-green-800 text-lg">
                    Encuentra el código QR escondido por la zona de acampada, escanealo y descubre
                    el objeto en realidad aumentada, hazte una foto con tu equipo… y gana el objeto
                    real impreso en 3D como recompensa. Cada objeto cuenta una historia. Cada
                    historia, un recuerdo compartido.
                  </p>
                </div>

                <div className="rounded-lg p-6 shadow-md backdrop-blur-lg">
                  <span className="mb-4 flex text-green-900 text-xl font-bold">
                    Tecnología al servicio del recuerdo
                  </span>
                  <p className="mb-4 text-green-800 text-lg">
                    Creamos esta experiencia usando realidad aumentada y diseño 3D. Escanea los
                    objetos desde el móvil, interactúa con ellos y, si completas el reto, recibirás
                    tu versión física impresa. Un puente entre lo digital y lo tangible, hecho para
                    celebrar nuestros 50 años.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="bg-green-50/80 py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <h2 className="mb-12 text-center font-serif text-3xl font-bold text-green-800 md:text-4xl">
                Galería de Objetos
              </h2>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {/* 1. Tiendas (span 2x2) */}
                <div className="relative aspect-square overflow-hidden rounded-lg md:col-span-2 md:row-span-2 group">
                  <Image
                    src="/images/tent.jpeg"
                    alt="Campamento principal"
                    width={600}
                    height={600}
                    className="h-full w-full object-cover brightness-125 transform transition-transform duration-500 ease-out group-hover:scale-120"
                  />
                  {/* overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-75" />
                  {/* texto */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
                    <h3 className="text-white text-lg font-bold">Tiendas de campaña</h3>
                    <p className="text-white text-sm opacity-90 mt-1">Campamento en miniatura</p>
                  </div>
                </div>

                {/* 2. Abeja (object-bottom) */}
                <div className="relative aspect-square overflow-hidden rounded-lg group">
                  <Image
                    src="/images/bee.jpeg"
                    alt="Abeja en flor"
                    width={600}
                    height={600}
                    className="h-full w-full object-cover object-bottom transform transition-transform duration-500 ease-out group-hover:scale-120"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-75" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
                    <h3 className="text-white text-lg font-bold">Logo del grupo</h3>
                    <p className="text-white text-sm opacity-90 mt-1">
                      Icono de los scouts y de Apicula
                    </p>
                  </div>
                </div>

                {/* 3. Brújula (brightness-90, object-bottom) */}
                <div className="relative aspect-square overflow-hidden rounded-lg group">
                  <Image
                    src="/images/compass.jpeg"
                    alt="Brújula Scout"
                    width={600}
                    height={600}
                    className="h-full w-full object-cover brightness-90 object-bottom transform transition-transform duration-500 ease-out group-hover:scale-120"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-75" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
                    <h3 className="text-white text-lg font-bold">Brújula Scout</h3>
                    <p className="text-white text-sm opacity-90 mt-1">Rumbo al norte</p>
                  </div>
                </div>

                {/* 4. Hoguera (brightness-90, object-[10%_75%]) */}
                <div className="relative aspect-square overflow-hidden rounded-lg group">
                  <Image
                    src="/images/hogueraScout.jpeg"
                    alt="Hoguera Scout"
                    width={600}
                    height={600}
                    className="h-full w-full object-cover brightness-90 object-[10%_75%] transform transition-transform duration-500 ease-out group-hover:scale-120"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-75" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
                    <h3 className="text-white text-lg font-bold">Hoguera nocturna</h3>
                    <p className="text-white text-sm opacity-90 mt-1">Bajo las estrellas</p>
                  </div>
                </div>

                {/* 5. Pasador (brightness-90, object-[20%_65%]) */}
                <div className="relative aspect-square overflow-hidden rounded-lg group">
                  <Image
                    src="/images/pasador.jpeg"
                    alt="Pasador de campamento"
                    width={600}
                    height={600}
                    className="h-full w-full object-cover brightness-90 object-[20%_65%] transform transition-transform duration-500 ease-out group-hover:scale-120"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-75" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100">
                    <h3 className="text-white text-lg font-bold">Pasador de campamento</h3>
                    <p className="text-white text-sm opacity-90 mt-1">Detalle en madera</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  className="group relative cursor-pointer inline-flex items-center justify-center overflow-hidden rounded-full bg-green-300 px-8 py-4 font-medium text-green-800 transition-all hover:bg-white/90"
                  onClick={clickObjects}
                >
                  <span className="relative">Ver todos los objetos legendarios</span>
                  <span className="absolute right-4 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Scout Elements Section - Redesigned */}
        <section className="relative py-32">
          <div className="container relative z-10 mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-10 text-center font-serif text-3xl font-bold text-green-800 md:text-4xl">
                Símbolos que nos representan
              </h2>

              <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
                {/* Neckerchief */}
                <div className="group relative overflow-hidden rounded-xl bg-green-50/80 p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg backdrop-blur-sm">
                  <div className="absolute -right-8 -top-8 h-16 w-16 rounded-full bg-green-100 opacity-50"></div>
                  <div className="relative flex flex-col items-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center">
                      <Image
                        src="/images/neckerchief.svg"
                        alt="Neckerchief"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-center text-base font-semibold text-green-800">Pañoleta</h3>
                    <p className="mt-2 text-center text-xs text-green-600">
                      Símbolo de identidad y pertenencia
                    </p>
                  </div>
                </div>

                {/* Campfire */}
                <div className="group relative overflow-hidden rounded-xl bg-green-50/80 p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg backdrop-blur-sm">
                  <div className="absolute -right-8 -top-8 h-16 w-16 rounded-full bg-green-100 opacity-50"></div>
                  <div className="relative flex flex-col items-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center">
                      <Flame className="h-10 w-10 text-brown-600" />
                    </div>
                    <h3 className="text-center text-base font-semibold text-green-800">Fogata</h3>
                    <p className="mt-2 text-center text-xs text-green-600">
                      Calor, luz y punto de reunión
                    </p>
                  </div>
                </div>

                {/* Tent */}
                <div className="group relative overflow-hidden rounded-xl bg-green-50/80 p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg backdrop-blur-sm">
                  <div className="absolute -right-8 -top-8 h-16 w-16 rounded-full bg-green-100 opacity-50"></div>
                  <div className="relative flex flex-col items-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center">
                      <Tent className="h-10 w-10 text-black" />
                    </div>
                    <h3 className="text-center text-base font-semibold text-green-800">Tienda</h3>
                    <p className="mt-2 text-center text-xs text-green-600">
                      Hogar en la naturaleza
                    </p>
                  </div>
                </div>

                {/* Fleur-de-lis */}
                <div className="group relative overflow-hidden rounded-xl bg-green-50/80 p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg backdrop-blur-sm">
                  <div className="absolute -right-8 -top-8 h-16 w-16 rounded-full bg-green-100 opacity-50"></div>
                  <div className="relative flex flex-col items-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center">
                      <Image
                        src="/images/flor-de-lis.svg"
                        alt="Flor de Lis Icon"
                        width={48}
                        height={48}
                      />
                    </div>
                    <h3 className="text-center text-base font-semibold text-green-800">
                      Flor de Lis
                    </h3>
                    <p className="mt-2 text-center text-xs text-green-600">
                      Guía en nuestro camino
                    </p>
                  </div>
                </div>

                {/* Bee */}
                <div className="group relative overflow-hidden rounded-xl bg-green-50/80 p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg backdrop-blur-sm">
                  <div className="absolute -right-8 -top-8 h-16 w-16 rounded-full bg-green-100 opacity-50"></div>
                  <div className="relative flex flex-col items-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center">
                      <Image src="/images/bee.svg" alt="Bee Icon" width={40} height={40} />
                    </div>
                    <h3 className="text-center text-base font-semibold text-green-800">Abeja</h3>
                    <p className="mt-2 text-center text-xs text-green-600">
                      Trabajo en equipo y comunidad
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="bg-green-800/70 py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center font-serif text-3xl font-bold text-white md:text-4xl">
                Eventos del Aniversario
              </h2>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-lg p-6 border-2 w-full h-full flex flex-col justify-between backdrop-blur-md">
                  <div className="mb-4 flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <Calendar className="h-6 w-6 text-green-700" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">30 Marzo</div>
                      <div className="text-sm text-white">2025</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-white">Carrera popular</h3>
                    <p className="mb-4 text-green-50">
                      Carrera popular solidaria que busca recaudar fondos para Futucam, una
                      organización que apoya a personas con discapacidad intelectual.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white">
                    <MapPin className="h-4 w-4" />
                    <span>Guadalajara</span>
                  </div>
                </div>

                <div className="rounded-lg p-6 border-2 w-full h-full flex flex-col justify-between backdrop-blur-md">
                  <div className="mb-4 flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <Tent className="h-6 w-6 text-green-700" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">07-08 Junio</div>
                      <div className="text-sm text-white">2025</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-white">
                      Acampada antiguos responsables
                    </h3>
                    <p className="mb-4 text-green-50">
                      Acampada especial donde antiguos y actuales responsables compartieron
                      experiencias y anécdotas.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white">
                    <MapPin className="h-4 w-4" />
                    <span>Mohernando, Guadalajara</span>
                  </div>
                </div>

                <div className="rounded-lg p-6 border-2 w-full h-full flex flex-col justify-between backdrop-blur-md">
                  <div className="mb-4 flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <Heart className="h-6 w-6 text-green-700" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">15-30 Julio</div>
                      <div className="text-sm text-white">2025</div>
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-white">Campamento</h3>
                    <p className="mb-4 text-green-50">
                      Campamento de verano donde conmerar el cierre de la ronda solar del 50
                      aniversario.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white">
                    <MapPin className="h-4 w-4" />
                    <span>Aun por definir</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-48">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-6 font-serif text-3xl font-bold text-green-800 md:text-4xl">
                Únete a nuestra celebración
              </h2>
              <p className="mb-8 text-lg text-green-700">
                Ya seas un ex-scout, padre de familia, o simplemente alguien que comparte nuestros
                valores, te invitamos a ser parte de esta celebración histórica.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <button
                  className="rounded-full cursor-pointer bg-green-700 px-8 py-3 font-medium text-white transition-colors hover:bg-green-800/80"
                  onClick={clickApiculaInstagram}
                >
                  Mantente al día
                </button>
                <button
                  className="rounded-full cursor-pointer border-2 border-green-700 px-8 py-3 font-medium text-green-700 transition-colors hover:bg-green-50"
                  onClick={clickApiculaContact}
                >
                  Contactar al grupo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-zinc-800 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-between gap-4 border-t border-green-100 pt-8 text-center md:flex-row md:text-left">
              <div>
                <p className="text-sm text-emerald-200">
                  © {new Date().getFullYear()} Grupo Scout Apicula. 50 Aniversario.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-emerald-200">Hecho con</span>
                <Flame className="h-4 w-4 text-brown-600" color="aquamarine" />
                <span className="text-sm text-emerald-200">y espíritu scout</span>
              </div>
              <div className="flex flex-row space-x-2">
                <span className="text-emerald-200">Desarrollado por</span>
                <a
                  className="hover:underline hover:underline-offset-4 hover:text-emerald-200"
                  href="https://www.linkedin.com/in/c%C3%A9sar-pe%C3%B3n-lamparero/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-emerald-200">César Peón</span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </Scene>
  );
}
