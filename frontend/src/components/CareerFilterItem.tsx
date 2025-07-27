import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

interface CareerFilterItemProps {
  itemTitle: string;
  itemKoreanTitle: string;
  items: string[];
}

const CareerFilterItem = ({
  itemTitle,
  itemKoreanTitle,
  items,
}: CareerFilterItemProps) => {
  return (
    <AccordionItem value={itemTitle}>
      <AccordionTrigger>{itemKoreanTitle}</AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        {items.map((item, index) => (
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
              {item}
            </label>
          </div>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};

export default CareerFilterItem;
