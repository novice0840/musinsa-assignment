"use client";

import React, { useState } from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useSearchParams, useRouter } from "next/navigation";

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
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialCheckedItems = searchParams.getAll(itemTitle);
  const [checkedItems, setCheckedItems] =
    useState<string[]>(initialCheckedItems);

  const handleCheckboxChange = (item: string, checked: boolean) => {
    const newCheckedItems = checked
      ? [...checkedItems, item]
      : checkedItems.filter((checkedItem) => checkedItem !== item);

    setCheckedItems(newCheckedItems);
    const params = new URLSearchParams(searchParams);
    params.delete(itemTitle);

    newCheckedItems.forEach((checkedItem) => {
      params.append(itemTitle, checkedItem);
    });

    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <AccordionItem value={itemTitle}>
      <AccordionTrigger>{itemKoreanTitle}</AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
        {items.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type="checkbox"
              id={`${itemTitle}-${index}`}
              checked={checkedItems.includes(item)}
              onChange={(e) => handleCheckboxChange(item, e.target.checked)}
              className="w-4 h-4 rounded"
            />
            <label
              htmlFor={`${itemTitle}-${index}`}
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
