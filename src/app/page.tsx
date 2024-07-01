"use client";

import ScrollRevealContainer from './components/ScrollReveal';

function HomeContent() {
  return (
    <div className="relative z-10">
      
      <section className="flex flex-col items-center justify-center h-screen relative text-center">
        <div className="">
          <ScrollRevealContainer move="bottom">
            <div className="mb-4 px-2 text-3xl sm:text-3xl md:text-5xl lg:text-6xl">
              The 29th RitsumeiSai
            </div>
            <div className="mb-1 text-lg sm:text-lg md:text-xl lg:text-4xl">
              2024.7.20 (Mon) - 2024.7.21 (Tue)
            </div>
            <div className="text-base sm:text-base md:text-base lg:text-lg">
              @RitsumeikanKeisho
            </div>
          </ScrollRevealContainer>

          <div className="flex justify-center w-full mt-24">
            <button className="bg-white text-black py-2 px-4 w-full text-base rounded-full">
              Get Started →
            </button>
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="flex items-center justify-center h-lvh text-center relative z-10">
        <div className="w-10/12 max-w-xl flex flex-col items-center">
          <ScrollRevealContainer move="bottom">
            <p className="text-lg sm:text-2xl">
              世界に没入し<br />
              他者と共に創造し<br />
              一体となる
            </p>
            <div className="flex my-8 justify-center">
              <div className="h-20 border-r border-white rounded-full"></div>
            </div>
          </ScrollRevealContainer>

          <div className="text-sm sm:text-base">
            <ScrollRevealContainer move="bottom">
              <p className="mb-4 sm:mb-8">
                <strong><span className='text-red-500'>立命館慶祥中学校・高等学校</span></strong>は、開校以来この言葉をスローガンに掲げ、日本国内だけでなく、世界を舞台に活躍できる人材の育成に力を入れてきました。
              </p>
            </ScrollRevealContainer>

            <ScrollRevealContainer move="bottom">
              <p className="mb-4 sm:mb-8">
                「世界に通用する18歳」とはどんな力を持った人でしょうか？
              </p>
            </ScrollRevealContainer>

            <ScrollRevealContainer move="bottom">
              <p className="mb-4 sm:mb-8">
                私は、英語や数学などの基礎学力はもちろんですが、3つの「C」を持っている人だと考えています。1つは、困難な問題にも果敢に挑戦（Challenge）するマインドを持っている人。2つ目は社会や世界に貢献（Contribution）する強い意志と高い志を持った人。3つ目は人種、宗教、文化の違いを超えて互いに協働（Collaboration）できる人です。
              </p>
            </ScrollRevealContainer>

            <ScrollRevealContainer move="bottom">
              <p className="mb-4 sm:mb-8">
                そして、立命館慶祥中学校・高等学校には学力はもちろん、3つの「C」を身につける環境や行事がたくさんあります。
              </p>
              <p>
                一緒に「世界に通用する18歳」を目指しましょう!
              </p>
            </ScrollRevealContainer>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="flex items-center justify-center h-lvh text-center">
        <p className="text-lg">Here is the K-tech page. This page will be created by Shido Ito!(2-G🐻)</p>
      </section>
    </div>
  );
}

export default HomeContent;
