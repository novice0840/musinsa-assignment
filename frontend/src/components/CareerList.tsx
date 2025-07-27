"use client";

import { CAREER_LIST } from "@/constants/career";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";

const CareerList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCareers = searchTerm.trim()
    ? CAREER_LIST.filter((career) =>
        career.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : CAREER_LIST;

  return (
    <div className="w-full">
      <div className="mb-8">
        <Input
          placeholder="검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ul>
        {filteredCareers.map((career) => (
          <li
            key={career.id}
            className="py-6 border-b cursor-pointer  group"
            tabIndex={0}
          >
            <div className="text-2xl font-bold mb-2 group-hover:text-gray-500 ">
              {career.description}
            </div>
            <div className="text-sm text-gray-600">
              {career.subsidiary} | {career.occupation} | {career.job} |{" "}
              {career.career > 0 ? `경력 ${career.career}년 이상` : "경력 무관"}{" "}
              | {career.employment} | {career.place}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CareerList;
