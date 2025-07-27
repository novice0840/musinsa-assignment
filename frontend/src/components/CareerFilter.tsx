import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";
import {
  CAREERS,
  EMPLOYMENTS,
  JOBS,
  OCCUPATIONS,
  PLACES,
  SUBSIDIARIES,
} from "@/constants/career";
import CareerFilterItem from "./CareerFilterItem";

const CareerFilter = () => {
  return (
    <div className="w-64">
      <Accordion type="multiple">
        <CareerFilterItem
          itemTitle="subsidiaries"
          itemKoreanTitle="구분"
          items={OCCUPATIONS}
        />
        <CareerFilterItem
          itemTitle="occupations"
          itemKoreanTitle="직군"
          items={CAREERS}
        />
        <CareerFilterItem
          itemTitle="jobs"
          itemKoreanTitle="직무"
          items={JOBS}
        />
        <CareerFilterItem
          itemTitle="경력사항"
          itemKoreanTitle="careers"
          items={CAREERS}
        />
        <CareerFilterItem
          itemTitle="employments"
          itemKoreanTitle="고용형태"
          items={EMPLOYMENTS}
        />
        <CareerFilterItem
          itemTitle="places"
          itemKoreanTitle="근무지"
          items={PLACES}
        />
      </Accordion>
      <Button variant="outline" size="sm">
        필터 초기화
      </Button>
    </div>
  );
};

export default CareerFilter;
