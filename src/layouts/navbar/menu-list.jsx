'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar';
import { menus } from '@/menus';
import { useLenis } from '@/lib/lenis';
import { handleLenisScroll } from '@/utils/functions';

function MenuList({ className, mode = 'light' }) {
  const isDarkMode = mode === 'dark';
  const textColor = isDarkMode ? 'text-white' : 'text-[#112352]';
  const lenis = useLenis();
  const [activeId, setActiveId] = useState(menus[0]?.id ?? null);

  const onNavClick = (event, path) => {
    // Only intercept in-page section links (e.g. '/#layanan').
    if (path && path.includes('#')) {
      handleLenisScroll(lenis, event, path, 80);
    }
  };

  // Tracks which section is currently in view so the nav can show a
  // quiet underline under the active item — the way apple.com's nav
  // reflects scroll position without any jump or flash.
  useEffect(() => {
    const sectionIds = menus
      .filter((m) => m.path?.includes('#'))
      .map((m) => m.path.split('#')[1]);

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0 || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`flex items-center gap-1 ${className} ${mode}`}>
      {menus.map((menu) => {
        const sectionId = menu.path?.includes('#')
          ? menu.path.split('#')[1]
          : null;
        const isActive = sectionId && sectionId === activeId;

        return menu.children && menu.children.length > 0 ? (
          <DropdownMenu key={menu.id}>
            <DropdownMenuTrigger asChild>
              <span
                className={`group opacity-95 text-base font-medium px-3 flex items-center cursor-pointer ${textColor}`}>
                {menu.name}
                <ChevronDown
                  className={`ml-2 h-3 w-3 transition-transform duration-300 ease-out group-data-popup-open:rotate-180 ${textColor}`}
                />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <div
                className={`w-62.5 flex flex-col p-4 rounded-lg shadow-lg ${
                  isDarkMode
                    ? 'bg-slate-800 text-white'
                    : 'bg-white text-[#112352]'
                }`}>
                {menu.children.map((child) => (
                  <a
                    key={child.id}
                    href={child.path || '#'}
                    onClick={(event) => onNavClick(event, child.path)}
                    className={`flex items-center gap-2 p-2 rounded-md transition-colors duration-200 ease-out text-base ${
                      isDarkMode
                        ? 'hover:bg-slate-700 text-white'
                        : 'hover:bg-gray-100 text-[#112352]'
                    }`}>
                    <span className='font-medium text-base'>{child.name}</span>
                  </a>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Menubar
            key={menu.id}
            className='bg-transparent border-none shadow-none'>
            <a
              href={menu.path || '#'}
              onClick={(event) => onNavClick(event, menu.path)}
              data-active={isActive}
              className={`nav-link-underline opacity-95 ${textColor}`}>
              <MenubarMenu>
                <MenubarTrigger className='bg-transparent cursor-pointer'>
                  <span className={`font-medium text-base ${textColor}`}>
                    {menu.name}
                  </span>
                </MenubarTrigger>
              </MenubarMenu>
            </a>
          </Menubar>
        );
      })}
    </section>
  );
}

export default MenuList;
