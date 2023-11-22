import React from 'react';
import Image from 'next/image';

interface TimelineItemProps {
  imageSrc: string;
  date: string;
  location: string;
  title: string;
  description: string;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ imageSrc, date, location, title, description }) => {
  return (
    <li className="timeline-item text-gray-100">
      <div className="timeline-content">
        <div className="image">
          <Image src={imageSrc} alt="Image" width={500} height={300} layout="responsive" />
        </div>
        <div className="p-8">
          <h3 className='text-3xl my-0 uppercase'>{date} <span className='font-bold inline'>{location}</span></h3>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </li>
  );
};

export default TimelineItem;
