import React from 'react';
import Link from 'next/link';

const events = [
  { id: 1, title: 'Wine Tasting', date: 'Fri, June 8, 2019', time: '07:30 PM' },
  { id: 2, title: 'Vegetarian Food Festival', date: 'Fri, June 8, 2019', time: '05:30 PM' },
  { id: 3, title: 'Sunday Food Market', date: 'Fri, June 8, 2019', time: '07:30 PM' },
  { id: 4, title: 'Pie Baking Class', date: 'Fri, June 8, 2019', time: '02:30 PM' },
  { id: 5, title: 'NYC Food Festival', date: 'Fri, June 8, 2019', time: '04:00 PM' },
];

const EventList: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Tickets</h1>
      <ul>
        {events.map(event => (
          <li key={event.id} className="mb-4">
            <Link href={`/class/details/${event.id}`} legacyBehavior>
              <a className="block p-4 bg-white rounded shadow hover:bg-gray-100">
                <h2 className="text-lg font-semibold">{event.title}</h2>
                <p>{event.date}</p>
                <p>{event.time}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
