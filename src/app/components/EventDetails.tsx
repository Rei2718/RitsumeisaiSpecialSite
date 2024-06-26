import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const events = [
  { id: 1, title: 'Wine Tasting', date: 'Fri, June 8, 2019', time: '07:30 PM', location: 'Wine & Design, 35 W. Bradford St, Brooklyn, NY' },
  { id: 2, title: 'Vegetarian Food Festival', date: 'Fri, June 8, 2019', time: '05:30 PM', location: 'Food Court, 123 Main St, New York, NY' },
  { id: 3, title: 'Sunday Food Market', date: 'Fri, June 8, 2019', time: '07:30 PM', location: 'Market Square, 456 Central Ave, Brooklyn, NY' },
  { id: 4, title: 'Pie Baking Class', date: 'Fri, June 8, 2019', time: '02:30 PM', location: 'Baking Studio, 789 Broadway, New York, NY' },
  { id: 5, title: 'NYC Food Festival', date: 'Fri, June 8, 2019', time: '04:00 PM', location: 'Festival Grounds, 321 Park Ave, New York, NY' },
];

const EventDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const event = events.find(event => event.id === Number(id));

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <Link href="/" legacyBehavior>
        <a className="text-blue-500 underline">Back to list</a>
      </Link>
      <div className="mt-4 p-4 bg-white rounded shadow">
        <h1 className="text-2xl font-bold">{event.title}</h1>
        <p>{event.date}</p>
        <p>{event.time}</p>
        <p>{event.location}</p>
        <div className="mt-4">
          <img src="/path-to-barcode-image.png" alt="Barcode" className="w-full max-w-xs" />
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
