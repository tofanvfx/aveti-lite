
import React from 'react';
import InfoGrid from './InfoGrid';
import SectionBlock from './SectionBlock';

const LessonPlanView = ({ data, cardTheme, borderColor }) => {
  return (
    <div className="w-full pb-20 px-1">
      {/* Chapter Title */}


      {/* Top Info Grid */}
      <InfoGrid cardTheme={cardTheme} borderColor={borderColor} />

      {/* Content Sections */}
      <div className="flex flex-col">
        {data.sections.map((section, index) => (
          <SectionBlock
            key={section.id}
            section={section}
            index={index}
            cardTheme={cardTheme}
            borderColor={borderColor}
          />
        ))}
      </div>
    </div>
  );
};

export default LessonPlanView;