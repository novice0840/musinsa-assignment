import React from "react";

interface CareerFilterContentProps {
  contentTitle: string;
  contents: string[];
}

const CareerFilterContent = ({
  contentTitle,
  contents,
}: CareerFilterContentProps) => {
  return (
    <div className="space-y-3">
      {contents.map((content, index) => (
        <div key={index} className="flex items-center space-x-2">
          <input
            type="checkbox"
            id={`subsidiary-${index}`}
            className="w-4 h-4 rounded"
          />
          <label
            htmlFor={`subsidiary-${index}`}
            className="text-sm font-medium text-gray-900 cursor-pointer"
          >
            {content}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CareerFilterContent;
