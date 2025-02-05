'use client';

import CountryList from './CountryList';
import Chat from './Chat';
import MainNavbar from './navbar/MainNavbar';

export default function HomePage() {
  return (
    <div className="lg:max-w-3xl md:max-w-2xl sm:max-w-xl w-full flex flex-col h-screen overflow-hidden shadow-lg bg-white bg-opacity-10 backdrop-blur-lg text-dark dark:text-light mx-auto">
      <MainNavbar />
      <CountryList />
      <Chat />
    </div>
  );
}
