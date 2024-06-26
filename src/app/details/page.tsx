// src/app/detailes/page.tsx
'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Loading from '../loading';

interface ClassDetail {
  id: number;
  title: string;
  time: string;
  location: string;
  description: string;
  img: string;
}

const DetailsPage = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [classDetail, setClassDetail] = useState<ClassDetail | null>(null);

  useEffect(() => {
    if (id) {
      const fetchClassDetail = async () => {
        const classDetails = [
          { id: 1, title: 'Class1-1 Project', time: '12:00 ~ 12:10', location: 'Arena', description: 'Heres a concept of an event discovery app that features vivid custom illustrations. With this app, users can find various events around the globe and buy tickets right from their phones..', img: './img1.jpg' },
          { id: 2, title: 'Class2-1 Project', time: '13:00 ~ 13:10', location: 'Co-Tan', description: 'Heres a concept of an event discovery app that features vivid custom illustrations. With this app, users can find various events around the globe and buy tickets right from their phones.', img: './img2.jpg' },
        ];
        const detail = classDetails.find(item => item.id === parseInt(id, 10));
        setClassDetail(detail || null);
      };
      fetchClassDetail();
    }
  }, [id]);

  if (!classDetail) {
    return <Loading />;
  }

  return (
    <>
<div className="relative text-white overflow-hidden">
  
  {/* Background Image */}
  <div className="fixed top-0 left-0 w-full h-full bg-white">
    <img src={classDetail.img} alt="Event" className="w-full h-1/3 object-cover" />
    <button className="absolute top-4 left-4 text-white">&larr; back</button>
  </div>
  {/* Background Image_End */}

  {/* Detail */}
  <div className="relative z-10 w-full h-auto px-8 bg-white rounded-t-2xl overflow-y-auto" style={{ marginTop: 'calc(100vh / 3.2)' }}>
    <h1 className="text-3xl font-bold text-black py-8">{classDetail.title}</h1>
    <div className="py-2 flex items-center">
      <svg className="w-[25px] h-[25px] fill-[#8e8e8e] mr-4" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"></path>
      </svg>
      <p className="text-black">{classDetail.location}</p>
    </div>
    <div className="py-2 flex items-center">
      <svg className="w-[25px] h-[25px] fill-[#8e8e8e] mr-4" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
        <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path>
      </svg>
      <p className="text-black">{classDetail.time}</p>
    </div>
    {/* Detail_End */}




    <div className="py-4">
      {/* TimeLine */}
      <div className="flex gap-x-3">
        {/* Left Content */}
        <div className="flex py-2 justify-center">
          <div className="flex flex-col items-center">
            <div className="h-10 border-r border-black rounded-full"></div>
            <span className="text-xs text-black py-3">NOW</span>
            <div className="h-10 border-r border-black rounded-full"></div>
          </div>
        </div>
        {/* End Left Content */}

        {/* Icon */}
        <div className="text-black flex items-center">・</div>
        
        {/* Icon _End */}

        {/* Right Content */}
        <h3 className="flex items-center text-black">
          Class1 Project
        </h3>
        {/* End Right Content */}
      </div>
      {/* End Item 2 */}
    </div>





    {/* About */}
    <div className="py-2">
      <h2 className="text-xl font-semibold text-black">About</h2>
      <p className="text-black">{classDetail.description}</p>
      <p className="text-black">{classDetail.description}</p>
    </div>
    {/* About_End */}

    {/* Button */}
    <button className="w-full py-2 px-4 my-8 bg-pink-500 text-white font-bold rounded-lg shadow-md hover:bg-pink-600">Book</button>
    {/* Button_End */}

  </div>
</div>

  </>
  );
};

export default DetailsPage;
