import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

const GenericTile = ({ title, tags, description, footer, darkMode }) => {
  const textColor = darkMode ? 'light' : 'dark';
  const bgColor = !darkMode ? 'light' : 'dark';
  return (
    <div
      className={`w-full project-tile flex flex-col justify-center min-h-56 sm:h-48 bg-secondary-${bgColor} mb-2 px-8 lg:px-10 xl:px-12 py-6 text-${
        footer ? 'accent' : 'primary'
      }-${textColor}`}
    >
      <div className="flex">
        {tags?.map((tag, i) => (
          <div
            key={tag}
            className={`${
              i !== tags.length - 1 && 'md:mr-6 mr-4'
            } text-xs font-light uppercase`}
          >
            {tag}
          </div>
        ))}
      </div>
      {title && <div className="text-xl xl:text-2xl mb-4">{title}</div>}

      <div className="text-sm">
        <ReactMarkdown children={description} rehypePlugins={[rehypeRaw]} />
      </div>
      {footer && (
        <div className={`text-sm mt-4 text-primary-${textColor}`}>{footer}</div>
      )}
    </div>
  );
};

export default GenericTile;
