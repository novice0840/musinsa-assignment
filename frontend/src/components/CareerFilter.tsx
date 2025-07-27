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
import CareerFilterContent from "./CareerFilterContent";

const CareerFilter = () => {
  return (
    <div className="w-64">
      <Accordion type="multiple">
        <AccordionItem value="subsidiaries">
          <AccordionTrigger>구분</AccordionTrigger>
          <AccordionContent>
            <CareerFilterContent contentTitle="구분" contents={SUBSIDIARIES} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="occupations">
          <AccordionTrigger>직군</AccordionTrigger>
          <AccordionContent>
            <CareerFilterContent contentTitle="직군" contents={OCCUPATIONS} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="jobs">
          <AccordionTrigger>직무</AccordionTrigger>
          <AccordionContent>
            <CareerFilterContent contentTitle="직무" contents={JOBS} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="careers">
          <AccordionTrigger>경력사항</AccordionTrigger>
          <AccordionContent>
            <CareerFilterContent contentTitle="경력사항" contents={CAREERS} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="employments">
          <AccordionTrigger>고용형태</AccordionTrigger>
          <AccordionContent>
            <CareerFilterContent
              contentTitle="고용형태"
              contents={EMPLOYMENTS}
            />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="places">
          <AccordionTrigger>근무지</AccordionTrigger>
          <AccordionContent>
            <CareerFilterContent contentTitle="근무지" contents={PLACES} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button variant="outline" size="sm">
        필터 초기화
      </Button>
    </div>
  );
};

export default CareerFilter;
