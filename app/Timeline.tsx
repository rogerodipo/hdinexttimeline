// components/Timeline.tsx
import React from 'react';
import TimelineItem from './TimelineItem';

interface ItemData {
  id: string;
  imageSrc: string;
  date: string;
  location: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: ItemData[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <ul className="timeline relative max-w-[80%] my-8">
      {items.map(item => (
        <TimelineItem 
          key={item.id}
          imageSrc={item.imageSrc}
          date={item.date}
          location={item.location}
          title={item.title}
          description={item.description}
        />
      ))}
    </ul>
  );
};

export default Timeline;
