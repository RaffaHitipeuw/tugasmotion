import { useEffect, useState } from 'react';
import ContentContainer from '@/components/ContentContainer';
import logo from '/logo.svg';
import MenuList from './menu-list';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`nav-chrome w-full h-17.5 md:h-20 sticky top-0 z-50 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-[0_1px_0_0_rgba(15,23,42,0.06)]'
          : 'bg-white'
      }`}>
      <ContentContainer className='flex items-center justify-between h-17.5 md:h-20'>
        <section className={`gap-2 items-center cursor-pointer`}>
          <img
            src={logo}
            alt={'logo-sandbox'}
            className='w-auto h-8.75 md:h-12 transition-transform duration-300 ease-out hover:scale-[1.02]'
            width={155}
            height={31}
          />
        </section>

        <section>
          <MenuList className='hidden lg:flex items-center' />
        </section>
      </ContentContainer>
    </nav>
  );
}

export default Navbar;
