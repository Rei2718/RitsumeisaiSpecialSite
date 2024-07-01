"use client";

import { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function Background() {
  const interactiveRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');
  const [isHeader, setIsHeader] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = (href: string) => {
    if (pathname === href) {
      setIsMenuOpen(false);
    } else {
      router.push(href);
      setIsMenuOpen(false);
    }
  };

  const toggleSubMenu = (menu: string) => setActiveMenu(activeMenu === menu ? '' : menu);

  useEffect(() => {
    const handleScroll = () => setIsHeader(window.scrollY > window.innerHeight);

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isMenuOpen);
  }, [isMenuOpen]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, searchParams]);

  useEffect(() => {
    const interBubble = interactiveRef.current;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      if (interBubble) {
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(move);
    };

    const handleMouseMove = (event: MouseEvent) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    move();

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <KeyVisual interactiveRef={interactiveRef} />
      <StickyNavbar toggleMenu={toggleMenu} handleLinkClick={handleLinkClick} />
      <FullscreenMenu
        isOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        handleLinkClick={handleLinkClick}
        activeMenu={activeMenu}
        toggleSubMenu={toggleSubMenu}
      />
    </>
  );
}

const KeyVisual = ({ interactiveRef }: { interactiveRef: React.RefObject<HTMLDivElement> }) => (
  <div className="object-cover w-screen h-lvh fixed top-0 left-0 z-0 flex justify-center items-center">
    <div className="gradient-bg">
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      {/*<div className="grid-overlay"></div> */}
      <div className="gradients-container">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g1"></div>
        <div className="interactive" ref={interactiveRef}></div>
      </div>
    </div>
  </div>
);

const StickyNavbar = ({ toggleMenu, handleLinkClick }: { toggleMenu: () => void; handleLinkClick: (href: string) => void }) => (
  <div className="sticky-navbar fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-xl mx-auto z-50 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm shadow-md rounded-t-2xl text-white flex justify-center items-center p-3">
    <nav className="w-full flex justify-around">
      <NavbarIcon onClick={() => handleLinkClick('/')} path="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
      <NavbarIcon onClick={() => handleLinkClick('/map')} path="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
      <NavbarIcon onClick={() => handleLinkClick('/kitchen')} path="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z" />
      <button className="menu-button" onClick={toggleMenu}>
        <svg className="w-[25px] h-[25px] fill-[#ffffff]" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </button>
    </nav>
  </div>
);

const NavbarIcon = ({ onClick, path }: { onClick: () => void; path: string }) => (
  <button onClick={onClick} className="hover:text-gray-300 transition duration-300 ease-in-out flex justify-center">
    <svg className="w-[25px] h-[25px] fill-[#ffffff]" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
      <path d={path} />
    </svg>
  </button>
);

const FullscreenMenu = ({
  isOpen,
  toggleMenu,
  handleLinkClick,
  activeMenu,
  toggleSubMenu
}: {
  isOpen: boolean;
  toggleMenu: () => void;
  handleLinkClick: (href: string) => void;
  activeMenu: string;
  toggleSubMenu: (menu: string) => void;
}) => (
  <div className={`text-black fixed inset-0 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-700 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
    <button className="absolute top-2 right-2 text-black text-3xl" onClick={toggleMenu}>
      &times;
    </button>
    <ul className="text-xl text-center">
      <MenuItem onClick={() => handleLinkClick('/class')}>クラス企画</MenuItem>
      <MenuItem onClick={() => handleLinkClick('/map')}>タイムテーブル</MenuItem>
      <MenuItem onClick={() => handleLinkClick('/kitchen')}>キッチンカー</MenuItem>
      <MenuItem onClick={() => handleLinkClick('/map')}>マップ</MenuItem>
      <li className="py-1.5">
        <div className="flex flex-col items-center transform -translate-x-2.5">
          <button onClick={() => toggleSubMenu('section01')} className="flex items-center">
            <span className={`mr-2 text-sm transition-transform duration-500 ${activeMenu === 'section01' ? 'rotate-180' : 'rotate-0'}`}>
              <svg className="w-[10px] h-[10px] fill-gray-400" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </span>
            <span className="flex-grow text-center">有志企画</span>
          </button>
          <ul className={`overflow-hidden transition-all duration-700 text-center ${activeMenu === 'section01' ? 'max-h-40 opacity-100 blur-none' : 'max-h-0 opacity-0 blur-sm'}`}>
            <MenuItem onClick={() => handleLinkClick('/jhs/j2')}>アリーナ有志</MenuItem>
            <MenuItem onClick={() => handleLinkClick('/jhs/j1')}>Co-Tan有志</MenuItem>
            <MenuItem onClick={() => handleLinkClick('/jhs/j3')}>その他有志</MenuItem>
          </ul>
        </div>
      </li>
    </ul>
  </div>
);

const MenuItem = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <li className='py-1.5'><button onClick={onClick}>{children}</button></li>
);