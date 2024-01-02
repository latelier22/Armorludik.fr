"use client"
import React from 'react';
import Link from 'next/link';
import { useEffect } from 'react';

const Navbar = () => {
  useEffect(() => {
    const init = async () => {
      const { Collapse, initTE } = await import('tw-elements');
      initTE({ Collapse });
    };
    init();
  }, []);

  // Définir les menus et les routes
  const menuItems = [
    { label: 'Accueil', route: '/' },
    { label: 'Activités', route: '/activites' },
    { label: 'Anniversaires', route: '/anniversaires' },
    { label: 'Boutique', route: '/boutique' },
    { label: 'Réservez', route: '/reservations' },
    { label: 'Tarifs', route: '/tarifs' },
    { label: 'Horaires', route: '/horaires' },
    { label: 'Contact', route: '/contact' },
  ];

  return (
    <nav className="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start" data-te-navbar-ref>
      <div className="flex w-full flex-wrap items-center justify-center px-3">
        <div className="flex items-center">
          <button
            className="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContentY"
            aria-controls="navbarSupportedContentY"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="[&>svg]:w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-20 w-20"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </span>
          </button>

          <div className="hidden lg:flex">
            {menuItems.slice(0, 4).map((menuItem, index) => (
              <a
                key={index}
                className={`block font-medium text-2xl transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90`}
                href={menuItem.route}
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                {menuItem.label}
              </a>
            ))}
          </div>

        {/* Logo au centre */}
        <a href="/" className="mx-auto">
          <img src="logo.png" className="h-28 w-28" alt="Accueil" />
        </a>

        <div className="hidden lg:flex items-center justify-end">
          {menuItems.slice(4).map((menuItem, index) => (
            <a
              key={index}
              className={`block font-medium text-2xl transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90`}
              href={menuItem.route}
              data-te-nav-link-ref
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              {menuItem.label}
            </a>
          ))}
        </div>
      </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
