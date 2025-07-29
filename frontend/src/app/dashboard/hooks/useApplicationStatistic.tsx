import { useApplications, useJobs } from "@/hooks/useApi";

export const useApplicationStatistic = () => {
  const { data: applications, ...rest } = useApplications();
  const { data: jobs } = useJobs();

  if (!applications || !jobs) return { data: [], ...rest };

  const jobStats = applications.reduce((acc, application) => {
    const jobId = application.job.id;

    if (!acc[jobId]) {
      acc[jobId] = 0;
    }

    acc[jobId] += 1;
    return acc;
  }, {} as Record<number, number>);

  const data = jobs
    .map((job: any) => ({
      ...job,
      applicantCount: jobStats[job.id] || 0,
    }))
    .sort((a: any, b: any) => b.applicantCount - a.applicantCount);

  return { data, ...rest };
};
