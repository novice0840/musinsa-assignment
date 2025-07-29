import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api";
import { toast } from "sonner";

interface Application {
  id: number;
  jobId: number;
  name: string;
  englishName: string;
  email: string;
  phone: string;
  resumeUrl: string;
  portfolioUrl?: string;
  source: string;
  job: Job;
}

interface Job {
  id: number;
  description: string;
  career: number;
  subsidiary: string;
  occupation: string;
  job: string;
  place: string;
  employment: string;
}

export const useApplications = () => {
  return useQuery<Application[]>({
    queryKey: ["applications"],
    queryFn: api.getApplications,
  });
};

export const useSubmitApplication = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: api.submitApplication,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["applications"] });
      toast.success("지원서가 성공적으로 제출되었습니다.");
    },
    onError: (error: Error) => {
      toast.error(error.message || "지원서 제출 중 오류가 발생했습니다.");
    },
  });
};

export const useJobs = () => {
  return useQuery({
    queryKey: ["jobs"],
    queryFn: api.getJobs,
  });
};
