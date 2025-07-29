"use client";

import React, { use } from "react";
import { MoveLeft } from "lucide-react";
import { CAREER_LIST } from "@/constants/career";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  NameField,
  EmailField,
  PhoneField,
  EnglishNameField,
} from "./components/BasicInfoFields";
import { ResumeField, PortfolioField } from "./components/FileUploadFields";
import { SourceField } from "./components/SourceField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSubmitApplication } from "@/hooks/useApi";

const formSchema = z.object({
  name: z.string().min(1, "이름을 입력해주세요"),
  email: z.email("유효한 이메일을 입력해주세요"),
  phone: z.string().min(10, "유효한 전화번호를 입력해주세요"),
  englishName: z.string().min(1, "영문 이름을 입력해주세요"),
  resume: z.any().refine((file) => file?.length > 0, "이력서를 첨부해주세요"),
  portfolio: z.any().optional(),
  source: z.string().min(1, "공고를 접한 경로를 선택해주세요"),
});

type FormData = z.infer<typeof formSchema>;

interface JobsPageProps {
  params: Promise<{
    jobId: string;
  }>;
}

const ApplyPage = ({ params }: JobsPageProps) => {
  const { jobId } = use(params);
  const router = useRouter();
  const career = CAREER_LIST.find((item) => item.id === parseInt(jobId));
  const submitMutation = useSubmitApplication();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      englishName: "",
      source: "",
    },
  });

  const onSubmit = (data: FormData) => {
    const formData = new FormData();
    formData.append("jobId", jobId);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("phone", data.phone);
    formData.append("englishName", data.englishName);
    formData.append("source", data.source);

    if (data.resume && data.resume.length > 0) {
      formData.append("resume", data.resume[0]);
    }
    if (data.portfolio && data.portfolio.length > 0) {
      formData.append("portfolio", data.portfolio[0]);
    }

    submitMutation.mutate(formData, {
      onSuccess: () => {
        router.push("/");
      },
    });
  };

  if (!career) {
    return (
      <div className="w-5xl mx-auto mt-24">
        <div className="text-center">
          <h1 className="text-3xl font-bold">지원공고를 찾을 수 없습니다</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-4 flex flex-col gap-8 p-6">
      <Link
        href={`/jobs/${jobId}`}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
      >
        <MoveLeft size={20} />
        <span>뒤로가기</span>
      </Link>

      <div>
        <h1 className="text-3xl font-bold mb-2">지원서 작성하기</h1>
        <div className="text-gray-600">{career.description}</div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="border-b pb-6">
            <h2 className="text-xl font-bold mb-4">기본정보</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <NameField control={form.control} />
              <EmailField control={form.control} />
              <PhoneField control={form.control} />
              <EnglishNameField control={form.control} />
            </div>
          </div>

          <div className="border-b pb-6">
            <h2 className="text-xl font-bold mb-4">제출 서류</h2>
            <div className="space-y-4">
              <ResumeField control={form.control} />
              <PortfolioField control={form.control} />
            </div>
          </div>

          <div className="border-b pb-6">
            <h2 className="text-xl font-bold mb-4">사전질문</h2>
            <SourceField control={form.control} />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={submitMutation.isPending}
          >
            {submitMutation.isPending ? "제출 중..." : "지원서 제출하기"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ApplyPage;
