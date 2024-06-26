"use client"

import { useSearchParams, useRouter } from 'next/navigation';
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
  const router = useRouter();

  useEffect(() => {
    if (id) {
      const fetchClassDetail = async () => {
        const classDetails = [
          { id: 1, title: 'Class1-1 Project', time: '12:00 ~ 12:10', location: 'Arena', description: 'Heres a concept of an event discovery app that features vivid custom illustrations. With this app, users can find various events around the globe and buy tickets right from their phones..', img: './img1.jpg' },
          { id: 2, title: 'Class2-1 Project', time: '13:00 ~ 13:10', location: 'Co-Tan', description: 'Heres a concept of an event discovery app that features vivid custom illustrations. With this app, users can find various events around the globe and buy tickets right from their phones.', img: './img2.jpg' },
          { id: 3, title: 'Class2-3 Project', time: '13:00 ~ 13:10', location: 'Co-Tan', description: 'Heres a concept of an event discovery app that features vivid custom illustrations. With this app, users can find various events around the globe and buy tickets right from their phones.', img: './img3.jpg' },
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
        <div className="fixed top-0 left-0 w-full h-lvh">
          <img src={classDetail.img} alt="Event" className="w-full object-cover"  style={{ height: 'calc(100lvh / 3)' }}/>
          <img src={classDetail.img} alt="Event" className="w-full h-lvh object-cover -z-50"/>
          <button 
            className="absolute top-0 left-0 py-4 px-3 flex items-center text-white bg-transparent border-none outline-none cursor-pointer" 
            onClick={() => router.back()}
          >
            <svg className="w-[25px] h-[25px] fill-[#81D8D0] opacity-50" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z"></path>
            </svg>
          </button>
        </div>
        {/* Background Image_End */}

        {/* Detail */}
        <div className="relative z-10 w-full h-auto px-8 bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-t-2xl overflow-y-auto" style={{ marginTop: 'calc(100lvh / 3.5)' }}>
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-black py-8">{classDetail.title}</h1>
            <svg className="w-[30px] h-[30px] fill-pink-500" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
            </svg>
          </div>
          <div className="flex w-full flex-col lg:flex-row">
            <div className="py-2 flex items-center">
              <svg className="w-[25px] h-[25px] fill-[#81D8D0] mr-4" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M408 120c0 54.6-73.1 151.9-105.2 192c-7.7 9.6-22 9.6-29.6 0C241.1 271.9 168 174.6 168 120C168 53.7 221.7 0 288 0s120 53.7 120 120zm8 80.4c3.5-6.9 6.7-13.8 9.6-20.6c.5-1.2 1-2.5 1.5-3.7l116-46.4C558.9 123.4 576 135 576 152V422.8c0 9.8-6 18.6-15.1 22.3L416 503V200.4zM137.6 138.3c2.4 14.1 7.2 28.3 12.8 41.5c2.9 6.8 6.1 13.7 9.6 20.6V451.8L32.9 502.7C17.1 509 0 497.4 0 480.4V209.6c0-9.8 6-18.6 15.1-22.3l122.6-49zM327.8 332c13.9-17.4 35.7-45.7 56.2-77V504.3L192 449.4V255c20.5 31.3 42.3 59.6 56.2 77c20.5 25.6 59.1 25.6 79.6 0zM288 152a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"></path>
              </svg>
              <p className="text-black">{classDetail.location}</p>
            </div>

            <div className="py-2 flex items-center">
              <svg className="w-[25px] h-[25px] fill-[#81D8D0] mr-4" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path>
              </svg>
              <p className="text-black">{classDetail.time}</p>
            </div>
          </div>

          {/* Detail_End */}

          {/* About */}
          <div className="pt-8">
            <h2 className="text-xl font-semibold text-black">About</h2>
            <p className="text-black">{classDetail.description}</p>
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
