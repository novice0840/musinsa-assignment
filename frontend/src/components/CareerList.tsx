"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useFilteredCareers } from "@/hooks/useFilteredCareers";

const CareerList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredCareers = useFilteredCareers(searchTerm);

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
          <li key={career.id} className="border-b">
            <Link
              href={`/jobs/${career.id}`}
              className="block py-6 cursor-pointer group transition-colors duration-200"
            >
              <div className="text-2xl font-bold mb-2 group-hover:text-gray-500">
                {career.description}
              </div>
              <div className="text-sm text-gray-600">
                {career.subsidiary} | {career.occupation} | {career.job} |{" "}
                {career.career > 0
                  ? `경력 ${career.career}년 이상`
                  : "경력 무관"}{" "}
                | {career.employment} | {career.place}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CareerList;
