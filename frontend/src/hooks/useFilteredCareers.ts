import { CAREER_LIST } from "@/constants/career";
import { useSearchParams } from "next/navigation";

export const useFilteredCareers = (searchTerm: string) => {
  const searchParams = useSearchParams();
  const subsidiaries = searchParams.getAll("subsidiaries");
  const occupations = searchParams.getAll("occupations");
  const jobs = searchParams.getAll("jobs");
  const careers = searchParams.getAll("careers");
  const employments = searchParams.getAll("employments");
  const places = searchParams.getAll("places");
  let filteredCareers = CAREER_LIST;

  if (searchTerm.trim()) {
    filteredCareers = filteredCareers.filter((career) =>
      career.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (subsidiaries.length > 0) {
    filteredCareers = filteredCareers.filter((career) =>
      subsidiaries.includes(career.subsidiary)
    );
  }

  if (occupations.length > 0) {
    filteredCareers = filteredCareers.filter((career) =>
      occupations.includes(career.occupation)
    );
  }

  if (jobs.length > 0) {
    filteredCareers = filteredCareers.filter((career) =>
      jobs.includes(career.job)
    );
  }

  if (careers.length > 0) {
    filteredCareers = filteredCareers.filter((career) => career.career > 0);
  }

  if (employments.length > 0) {
    filteredCareers = filteredCareers.filter((career) =>
      employments.includes(career.employment)
    );
  }

  if (places.length > 0) {
    filteredCareers = filteredCareers.filter((career) =>
      places.includes(career.place)
    );
  }
  return filteredCareers;
};
