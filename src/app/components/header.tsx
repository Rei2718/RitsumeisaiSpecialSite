"use client";

import { useState, useEffect, useRef } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';

export default function Header() {
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
      {/* Header */}
      <header className={`z-50 fixed top-0 w-full ${isHeader ? 'backdrop-blur-[2px]' : 'backdrop-blur-none'}`}>
        <div className="flex justify-between items-center h-full w-full bg-gray-800 bg-clip-padding backdrop-filter bg-opacity-0">
          <button onClick={() => handleLinkClick('/')}>
            <div className="py-2 px-2 flex justify-start items-center">
              <img
                src="../logo.png"
                alt="logo"
                className="w-10 h-10 bg-transparent cursor-pointer"
              />
            </div>
          </button>
          <div className='text-base '><span className='text-red-500'>R</span>itsumeikan Keisho</div>
          <div className="py-2 px-2 flex justify-end items-center">
            <button
              onClick={toggleMenu}
              className=" focus:outline-none z-50 relative w-10 h-10 px-1"
            >
              <div className={`w-8 h-0.5 bg-black mb-1.5 transition-all duration-700 ${isMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-8 h-0.5 bg-black mb-1.5 transition-all duration-700 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-8 h-0.5 bg-black transition-all duration-700 ${isMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></div>
            </button>
          </div>
        </div>
        <div className="w-full border-t border-white/5"></div>
      </header>
      {/* Header_END */}

      {/* Fullscreen Menu */}
      <div className={`fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-40 transition-opacity duration-700 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <ul className=" text-xl text-center">
          {/* HOME */}
          <li className='py-1.5'><button onClick={() => handleLinkClick('/')}>トップ</button></li>

          <li className='py-1.5'><button onClick={() => handleLinkClick('/kitchen')}>キッチンカー</button></li>

          <li className='py-1.5'><button onClick={() => handleLinkClick('/cotan')}>Co-Tan BP</button></li>

          <li className='py-1.5'><button onClick={() => handleLinkClick('/arena')}>アリーナ有志</button></li>

          {/* Section02 */}
          <li className="py-1.5">
            <div className="flex flex-col items-center transform -translate-x-2.5">
              <button onClick={() => toggleSubMenu('section02')} className="flex items-center">
                <span className={`mr-2 text-sm transition-transform duration-500 ${activeMenu === 'section02' ? 'rotate-180' : 'rotate-0'}`}>
                  <svg className="w-[10px] h-[10px] fill-gray-400" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                  </svg>
                </span>
                <span className="flex-grow text-center">中学クラス企画</span>
              </button>
              <ul className={`overflow-hidden transition-all duration-700 text-center ${activeMenu === 'section02' ? 'max-h-40 opacity-100 blur-none' : 'max-h-0 opacity-0 blur-sm'}`}>
                <li className='py-1.5'><button onClick={() => handleLinkClick('/jhs/j1')}>中1企画</button></li>
                <li className='py-1.5'><button onClick={() => handleLinkClick('/jhs/j2')}>中2企画</button></li>
                <li className='py-1.5'><button onClick={() => handleLinkClick('/jhs/j3')}>中3企画</button></li>
              </ul>
            </div>
          </li>

          {/* Section03 */}
          <li className="py-1.5">
            <div className="flex flex-col items-center transform -translate-x-2.5">
              <button onClick={() => toggleSubMenu('section03')} className="flex items-center">
                <span className={`mr-2 text-sm transition-transform duration-500 ${activeMenu === 'section03' ? 'rotate-180' : 'rotate-0'}`}>
                  <svg className="w-[10px] h-[10px] fill-gray-400" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                  </svg>
                </span>
                <span className="flex-grow text-center">高校クラス企画</span>
              </button>
              <ul className={`overflow-hidden transition-all duration-700 text-center ${activeMenu === 'section03' ? 'max-h-40 opacity-100 blur-none' : 'max-h-0 opacity-0 blur-sm'}`}>
                <li className='py-1.5'><button onClick={() => handleLinkClick('/shs/s1')}>高1企画</button></li>
                <li className='py-1.5'><button onClick={() => handleLinkClick('/shs/s2')}>高2企画</button></li>
                <li className='py-1.5'><button onClick={() => handleLinkClick('/shs/s3')}>高3企画</button></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      {/* KeyVisual */}
      <div className="object-cover w-screen h-lvh fixed top-0 left-0 z-0 flex justify-center items-center">
        {/* BgImg */}
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
          <div className="gradients-container">
            <div className="g1"></div>
            <div className="g2"></div>
            <div className="g3"></div>
            <div className="g4"></div>
            <div className="g5"></div>
            <div className="interactive" ref={interactiveRef}></div>
          </div>
        </div>

{/*
        <div className="absolute inset-0 bg-fixed z-10"
            style={{ 
              backgroundImage: `url(https://www.twicejapan.com/static/twice/official/top/dot.png)`,
              backgroundRepeat: 'repeat',
              backgroundSize: '2px 2px'
            }}>
        </div>
*/}
      </div>
    </>
  );
}
