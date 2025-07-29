"use client";

import { Input } from "@/components/ui/input";
import { useApplications } from "@/hooks/useApi";
import { useFilteredApplications } from "@/hooks/useFilteredApplications";
import React, { useState } from "react";

const ApplicantionList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: applications } = useApplications();
  const filteredApplications = useFilteredApplications(
    applications || [],
    searchTerm
  );

  return (
    <section className="w-full">
      <div className="mb-8">
        <Input
          placeholder="검색"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <ul>
        {filteredApplications &&
          filteredApplications.map((application) => (
            <li className="border-b py-6 space-y-2" key={application.id}>
              <div className="text-xl font-bold">{application.name}</div>
              <div className="flex gap-4 flex-wrap">
                <span>{application.email}</span>
                <span>{application.phone}</span>
                <span>{application.englishName}</span>
                <span>{application.source}</span>
              </div>
              <div>직군정보</div>
              <div className="flex gap-4 flex-wrap">
                <span>{application.job.description}</span>
                <span>{application.job.subsidiary}</span>
                <span>{application.job.occupation}</span>
                <span>{application.job.job}</span>
                <span>
                  {application.job.career > 0
                    ? `경력 ${application.job.career}년`
                    : "경력 무관"}
                </span>
                <span>{application.job.employment}</span>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default ApplicantionList;
