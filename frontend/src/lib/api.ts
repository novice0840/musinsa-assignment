const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_SERVER_URL || "http://localhost:3001";

export const api = {
  // 모든 지원서 조회
  getApplications: async () => {
    const response = await fetch(`${API_BASE_URL}/applications`);
    if (!response.ok) {
      throw new Error("지원서 목록을 가져오는데 실패했습니다.");
    }
    return response.json();
  },

  // 지원서 제출
  submitApplication: async (formData: FormData) => {
    const response = await fetch(`${API_BASE_URL}/applications`, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error("지원서 제출에 실패했습니다.");
    }
    return response.json();
  },

  // 모든 채용공고 조회 (Job API가 있다면)
  getJobs: async () => {
    const response = await fetch(`${API_BASE_URL}/jobs`);
    if (!response.ok) {
      throw new Error("채용공고 목록을 가져오는데 실패했습니다.");
    }
    return response.json();
  },
};
