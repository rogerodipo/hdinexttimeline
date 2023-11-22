'use client'
import React, { useState, useRef, useEffect } from 'react';
import Timeline from './Timeline';
import Nav from './Nav';

interface TimelineItemData {
  id: string;
  imageSrc: string;
  date: string;
  location: string;
  title: string;
  description: string;
  category: string;
}


// Timeline items
const timelineItems: TimelineItemData[] = [
  {
    id: '1',
    imageSrc: 'https://images.unsplash.com/photo-1682685797828-d3b2561deef4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: '2004-2009',
    location: 'Guyana',
    title: 'Interactive Comic Book',
    description: 'Description of the Interactive Comic Book project.',
    category: 'Game-Based Learning'
  },
  {
    id: '2',
    imageSrc: 'https://images.unsplash.com/photo-1682686581427-7c80ab60e3f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: '2015–2019',
    location: 'Pakistan',
    title: 'Interactive Voice Response',
    description: 'Description of the Interactive Voice Response project.',
    category: 'Game-Based Learning'
  },
  {
    id: '3',
    imageSrc: 'https://images.unsplash.com/photo-1695653420508-f2481c1d783c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: '2018 - ONGOING',
    location: 'GLOBAL',
    title: 'Game-Based Learning Project',
    description: 'Description of the Game-Based Learning project.',
    category: 'Demand Generation'
  },
  {
    id: '4',
    imageSrc: 'https://images.unsplash.com/photo-1682685796467-89a6f149f07a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: '2018 - ONGOING',
    location: 'GLOBAL',
    title: 'Game-Based Learning Project',
    description: 'Description of the Game-Based Learning project.',
    category: 'Demand Generation'
  },
  {
    id: '5',
    imageSrc: 'https://images.unsplash.com/photo-1700463887323-732990f4540a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: '2018 - ONGOING',
    location: 'GLOBAL',
    title: 'Game-Based Learning Project',
    description: 'Description of the Game-Based Learning project.',
    category: 'Social Franchising of Health Services'
  },
];

const IndexPage: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState<string>('');
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const scrollPosition = container.scrollTop;
      const containerHeight = container.clientHeight;

      timelineItems.forEach((item, index) => {
        // Calculate position and height of the timeline item
        const itemPosition = (index * containerHeight) / timelineItems.length;
        if (scrollPosition >= itemPosition && scrollPosition < itemPosition + containerHeight) {
          setBackgroundImage(item.imageSrc);
        }
      });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="main full-screen-container h-full overflow-y-auto" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Timeline items={timelineItems} />
    </div>
  );
};

export default IndexPage;