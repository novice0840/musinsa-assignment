import { useSearchParams } from "next/navigation";

export const useFilteredApplications = (
  applications: any[],
  searchTerm: string
) => {
  const searchParams = useSearchParams();
  const subsidiaries = searchParams.getAll("subsidiaries");
  const occupations = searchParams.getAll("occupations");
  const jobs = searchParams.getAll("jobs");
  const careers = searchParams.getAll("careers");
  const employments = searchParams.getAll("employments");
  const places = searchParams.getAll("places");

  let filteredApplications = applications;

  if (searchTerm.trim()) {
    filteredApplications = filteredApplications.filter(
      (application) =>
        application.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        application.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        application.englishName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (subsidiaries.length > 0) {
    filteredApplications = filteredApplications.filter((application) =>
      subsidiaries.includes(application.job.subsidiary)
    );
  }

  if (occupations.length > 0) {
    filteredApplications = filteredApplications.filter((application) =>
      occupations.includes(application.job.occupation)
    );
  }

  if (jobs.length > 0) {
    filteredApplications = filteredApplications.filter((application) =>
      jobs.includes(application.job.job)
    );
  }

  if (careers.length > 0) {
    filteredApplications = filteredApplications.filter(
      (application) => application.job.career > 0
    );
  }

  if (employments.length > 0) {
    filteredApplications = filteredApplications.filter((application) =>
      employments.includes(application.job.employment)
    );
  }

  if (places.length > 0) {
    filteredApplications = filteredApplications.filter((application) =>
      places.includes(application.job.place)
    );
  }

  return filteredApplications;
};
