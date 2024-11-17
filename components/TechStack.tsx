'use client';
import React, { useState, useEffect, useRef } from 'react';
import { 
  Code, Database, Globe, Palette, 
  Server, Terminal, Layout, Settings, Layers3
} from 'lucide-react';

const TechWheel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const timerRef = useRef(null);
  
  const technologies = [
    { 
      name: 'Frontend', 
      icon: Layout,
      items: ['React', 'Next', 'Vanilla', 'HTML/CSS'] 
    },
    { 
      name: 'Backend', 
      icon: Server,
      items: ['Node.js', 'Python', 'Java', 'Go'] 
    },
    { 
      name: 'Database', 
      icon: Database,
      items: ['MongoDB', 'PostgreSQL', 'Redis', 'MySQL'] 
    },
    { 
      name: 'DevOps', 
      icon: Settings,
      items: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'Google', 'GitActions', 'Ansible', 'Terraform'] 
    },
    { 
      name: 'Languages', 
      icon: Code,
      items: ['JavaScript', 'Python', 'Java', 'TypeScript'] 
    },
    { 
      name: 'Tools', 
      icon: Terminal,
      items: ['Git', 'ZSH', 'BASH', 'PowerShell', 'Vim', 'Tmux'] 
    },
    { 
      name: 'Design', 
      icon: Palette,
      items: ['Figma', 'Adobe XD', 'Photoshop'] 
    },
    { 
      name: 'Web Services', 
      icon: Globe,
      items: ['REST APIs', 'GraphQL', 'WebSockets', 'OAuth'] 
    },
    { 
      name: 'ITSM Platforms', 
      icon: Layers3,
      items: ['ServiceNow'] 
    }
];

  const startAutoRotation = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (!isHovering && !isLocked) {
        setActiveIndex((current) => 
          current === technologies.length - 1 ? 0 : current + 1
        );
      }
    }, 3000);
  };

  useEffect(() => {
    const updateWidth = () => {
      const container = document.getElementById('tech-container');
      if (container) {
        setContainerWidth(container.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    startAutoRotation();

    return () => {
      window.removeEventListener('resize', updateWidth);
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovering, isLocked]);

  const handleIconClick = (index) => {
    setActiveIndex(index);
    setIsLocked(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setIsLocked(false);
  };

  return (
    <div 
      className="w-full bg-white h-auto py-8"
      id="tech-container"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full px-4 sm:px-6 md:px-8 relative h-48">
        {technologies.map((tech, index) => {
          const Icon = tech.icon;
          const totalItems = technologies.length;
          
          const itemWidth = containerWidth / totalItems;
          const baseX = itemWidth * index + itemWidth / 2;
          const percentX = (baseX / containerWidth) * 100;
          
          const distance = Math.abs(index - activeIndex);
          const wrappedDistance = Math.min(
            distance,
            totalItems - distance
          );
          const scale = 1 - (wrappedDistance * 0.15);
          const opacity = 1 - (wrappedDistance * 0.2);

          const isActive = index === activeIndex;
          
          return (
            <div
              key={tech.name}
              className={`absolute top-1/2 -translate-y-1/2 transition-all duration-500 cursor-pointer group
                        ${isActive && isLocked ? 'pointer-events-none' : ''}`}
              style={{
                left: `${percentX}%`,
                transform: `translateX(-50%) translateY(-50%) scale(${scale})`,
                opacity: Math.max(0.3, opacity),
                zIndex: Math.round(scale * 10)
              }}
              onClick={() => handleIconClick(index)}
            >
              <div className="flex flex-col items-center gap-4">
                <div className={`p-4 sm:p-5 md:p-6 rounded-full shadow-lg 
                              border border-gray-100
                              transition-all duration-300 ease-in-out
                              group-hover:shadow-xl group-hover:scale-110
                              group-hover:-translate-y-1
                              ${isActive && isLocked ? 'bg-black' : 'bg-white group-hover:bg-black'}`}>
                  <Icon 
                    className={`w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 
                              transition-colors duration-300
                              ${isActive && isLocked ? 'text-white' : 'text-gray-800 group-hover:text-white'}`}
                  />
                </div>
                <span className="font-medium text-sm sm:text-base whitespace-nowrap
                              text-gray-800
                              transition-transform duration-300
                              group-hover:scale-110">
                  {tech.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="text-center bg-white mt-8">
        <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-800">
          {technologies[activeIndex].name}
        </h3>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {technologies[activeIndex].items.map((item) => (
            <span
              key={item}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-white rounded-full 
                        border border-gray-100
                        shadow-sm transition-all hover:shadow-md 
                        text-sm sm:text-lg hover:scale-105
                        text-gray-800"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechWheel;