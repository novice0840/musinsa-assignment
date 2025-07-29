import { useApplications, useJobs } from "@/hooks/useApi";
import { useSearchParams } from "next/navigation";

export const useApplicationStatistic = () => {
  const { data: applications, ...rest } = useApplications();
  const { data: jobs } = useJobs();
  const searchParams = useSearchParams();

  const subsidiaries = searchParams.getAll("subsidiaries");
  const occupations = searchParams.getAll("occupations");
  const jobTitles = searchParams.getAll("jobs");
  const careers = searchParams.getAll("careers");
  const employments = searchParams.getAll("employments");
  const places = searchParams.getAll("places");

  if (!applications || !jobs) return { data: [], ...rest };

  let filteredJobs = jobs;

  if (subsidiaries.length > 0) {
    filteredJobs = filteredJobs.filter((job: any) =>
      subsidiaries.includes(job.subsidiary)
    );
  }

  if (occupations.length > 0) {
    filteredJobs = filteredJobs.filter((job: any) =>
      occupations.includes(job.occupation)
    );
  }

  if (jobTitles.length > 0) {
    filteredJobs = filteredJobs.filter((job: any) =>
      jobTitles.includes(job.job)
    );
  }

  if (careers.length > 0) {
    filteredJobs = filteredJobs.filter((job: any) => job.career > 0);
  }

  if (employments.length > 0) {
    filteredJobs = filteredJobs.filter((job: any) =>
      employments.includes(job.employment)
    );
  }

  if (places.length > 0) {
    filteredJobs = filteredJobs.filter((job: any) =>
      places.includes(job.place)
    );
  }

  if (!applications || !jobs) return { data: [], ...rest };

  const jobStats = applications.reduce((acc, application) => {
    const jobId = application.job.id;

    if (!acc[jobId]) {
      acc[jobId] = 0;
    }

    acc[jobId] += 1;
    return acc;
  }, {} as Record<number, number>);

  const data = filteredJobs
    .map((job: any) => ({
      ...job,
      applicantCount: jobStats[job.id] || 0,
    }))
    .sort((a: any, b: any) => b.applicantCount - a.applicantCount);

  return { data, ...rest };
};
