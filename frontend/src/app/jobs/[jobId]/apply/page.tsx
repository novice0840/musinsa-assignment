"use client";

import React from "react";
import { MoveLeft } from "lucide-react";
import { CAREER_LIST } from "@/constants/career";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(1, "이름을 입력해주세요"),
  email: z.string().email("유효한 이메일을 입력해주세요"),
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
  const { jobId } = React.use(params);
  const career = CAREER_LIST.find((item) => item.id === parseInt(jobId));

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
    console.log(data);
    // 여기에 폼 제출 로직을 추가하세요
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
    <div className="max-w-3xl mx-auto mt-24 flex flex-col gap-8 p-6">
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
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>이름 *</FormLabel>
                    <FormControl>
                      <Input placeholder="홍길동" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>이메일 *</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="example@email.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>전화번호 *</FormLabel>
                    <FormControl>
                      <Input placeholder="010-1234-5678" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="englishName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>영문 이름 *</FormLabel>
                    <FormControl>
                      <Input placeholder="Hong Gil Dong" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="border-b pb-6">
            <h2 className="text-xl font-bold mb-4">제출 서류</h2>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="resume"
                render={({ field: { onChange, value, ...field } }) => (
                  <FormItem>
                    <FormLabel>이력서 *</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => onChange(e.target.files)}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      PDF, DOC, DOCX 파일만 업로드 가능합니다.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="portfolio"
                render={({ field: { onChange, value, ...field } }) => (
                  <FormItem>
                    <FormLabel>포트폴리오 (선택)</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        accept=".pdf,.doc,.docx,.zip"
                        onChange={(e) => onChange(e.target.files)}
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      PDF, DOC, DOCX, ZIP 파일만 업로드 가능합니다.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="border-b pb-6">
            <h2 className="text-xl font-bold mb-4">사전질문</h2>

            <FormField
              control={form.control}
              name="source"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    해당 공고를 처음 접한 경로를 선택해주세요. *
                  </FormLabel>
                  <FormControl>
                    <div className="space-y-2">
                      {[
                        "무신사 홈페이지",
                        "채용 플랫폼 (잡코리아, 사람인 등)",
                        "링크드인",
                        "지인 추천",
                        "기타",
                      ].map((option) => (
                        <div
                          key={option}
                          className="flex items-center space-x-2"
                        >
                          <input
                            type="radio"
                            id={option}
                            value={option}
                            checked={field.value === option}
                            onChange={() => field.onChange(option)}
                            className="w-4 h-4"
                          />
                          <label
                            htmlFor={option}
                            className="text-sm cursor-pointer"
                          >
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="w-full">
            지원서 제출하기
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ApplyPage;
