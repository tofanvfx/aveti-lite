
import React from 'react';

const SectionBlock = ({ section, index, cardTheme, borderColor }) => {
  // Staggered animation delay based on index
  const delayClass = index === 0 ? 'delay-[300ms]' :
    index === 1 ? 'delay-[400ms]' :
      index === 2 ? 'delay-[500ms]' :
        index === 3 ? 'delay-[600ms]' : 'delay-[700ms]';

  return (
    <div className={`
      rounded-3xl p-6 mb-4 animate-fade-in backdrop-blur-md shadow-sm border
      ${delayClass} ${cardTheme} ${borderColor}
    `}>
      <div className="flex items-center gap-3 mb-4">
        <div className="h-8 w-1 bg-gray-900 rounded-full opacity-70"></div>
        <h3 className="text-lg text-gray-900">
          <span className="font-bold">{section.title}</span>
          {section.subtitle && <span className="font-medium text-gray-600 ml-2 text-sm">{section.subtitle}</span>}
        </h3>
      </div>

      {section.image && (
        <div className="mb-4 rounded-xl overflow-hidden shadow-sm border border-gray-100 aspect-square w-full">
          <img
            src={section.image}
            alt={section.subtitle || section.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      <div className="flex flex-col gap-4">
        <div className="text-sm text-gray-700 leading-relaxed font-medium">
          {Array.isArray(section.englishText) ? (
            <ul className="list-disc pl-5 space-y-1">
              {section.englishText.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          ) : (
            section.englishText
          )}
        </div>
        <div className={`h-px w-full bg-gradient-to-r from-transparent via-gray-400/30 to-transparent`}></div>
        <div className="text-sm text-gray-800 font-odia leading-relaxed">
          {Array.isArray(section.odiaText) ? (
            <ul className="list-disc pl-5 space-y-1">
              {section.odiaText.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          ) : (
            section.odiaText
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionBlock;