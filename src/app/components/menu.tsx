"use client";

import { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('');
  const [isHeader, setIsHeader] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const interactiveRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (href: string) => {
    if (pathname === href) {
      setIsMenuOpen(false);
    } else {
      router.push(href);
      setIsMenuOpen(false);
    }
  };

  const toggleSubMenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? '' : menu);
  };

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setIsHeader(true);
    } else {
      setIsHeader(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMenuOpen]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, searchParams]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  useEffect(() => {
    const interBubble = interactiveRef.current;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      if (interBubble) {
        interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(move);
    }

    const handleMouseMove = (event: MouseEvent) => {
      tgX = event.clientX;
      tgY = event.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    move();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Menu */}
      <div className="transition duration-300 ease-in-out flex justify-center">
        <button
            onClick={toggleMenu}
            className="focus:outline-none z-50 relative w-10 h-10 px-1"
        >
          <div className={`w-8 h-0.5 bg-[#81D8D0] rounded-full mb-1.5 transition-all duration-700 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-8 h-0.5 bg-[#81D8D0] rounded-full mb-1.5 transition-all duration-700 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-8 h-0.5 bg-[#81D8D0] rounded-full transition-all duration-700 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>
      {/* Menu_END */}

      {/* Fullscreen Menu */}
      <div className={`fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-40 transition-opacity duration-700 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <ul className=" text-xl text-center">
          <li className='py-1.5'><button onClick={() => handleLinkClick('/kitchen')}>キッチンカー</button></li>
          <li className='py-1.5'><button onClick={() => handleLinkClick('/map')}>マップ</button></li>
          <li className='py-1.5'><button onClick={() => handleLinkClick('/class')}>クラス企画</button></li>
          <li className="py-1.5">
            <div className="flex flex-col items-center transform -translate-x-2.5">
              <button onClick={() => toggleSubMenu('section01')} className="flex items-center">
                <span className={`mr-2 text-sm transition-transform duration-500 ${activeMenu === 'section01' ? 'rotate-180' : 'rotate-0'}`}>
                  <svg className="w-[10px] h-[10px] fill-gray-400" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                  </svg>
                </span>
                <span className="flex-grow text-center">有志企画</span>
              </button>
              <ul className={`overflow-hidden transition-all duration-700 text-center ${activeMenu === 'section01' ? 'max-h-40 opacity-100 blur-none' : 'max-h-0 opacity-0 blur-sm'}`}>
                <li className='py-1.5'><button onClick={() => handleLinkClick('/jhs/j2')}>アリーナ有志</button></li>
                <li className='py-1.5'><button onClick={() => handleLinkClick('/jhs/j1')}>Co-Tan有志</button></li>
                <li className='py-1.5'><button onClick={() => handleLinkClick('/jhs/j3')}>その他有志</button></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
