
import React from 'react';

const InfoCard = ({ title, children, delay, cardTheme, borderColor }) => (
  <div className={`
    p-3 rounded-2xl flex flex-col h-32
    hover:scale-[1.02] transition-all duration-300 animate-fade-in 
    backdrop-blur-md shadow-sm border
    ${delay} ${cardTheme} ${borderColor}
  `}>
    <span className="font-medium text-[10px] text-gray-500 uppercase tracking-wider mb-1">{title}</span>
    <div className="flex-1 flex items-center justify-center">
      {children}
    </div>
  </div>
);

const InfoGrid = ({ cardTheme, borderColor }) => {
  return (
    <div className="grid grid-cols-3 gap-2 mb-6 px-1">
      <InfoCard title="Topics" delay="delay-[0ms]" cardTheme={cardTheme} borderColor={borderColor}>
        <span className="text-xs font-medium text-gray-800 leading-tight text-left">
          10.1 How Do Plants Grow?
        </span>
      </InfoCard>

      <InfoCard title="Materials Needed" delay="delay-[100ms]" cardTheme={cardTheme} borderColor={borderColor}>
        <span className="text-xs font-medium text-gray-800 leading-tight text-left">
          A small plant (optional)
        </span>
      </InfoCard>

      <InfoCard title="How to teach this lesson" delay="delay-[200ms]" cardTheme={cardTheme} borderColor={borderColor}>
        <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center shadow-md transition-colors cursor-pointer">
          <span className="ml-0.5 text-xs">▶</span>
        </div>
      </InfoCard>
    </div>
  );
};

export default InfoGrid;