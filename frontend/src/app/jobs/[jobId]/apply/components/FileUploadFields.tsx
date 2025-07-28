import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";

interface FileUploadFieldsProps {
  control: Control<any>;
}

export const ResumeField = ({ control }: FileUploadFieldsProps) => (
  <FormField
    control={control}
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
);

export const PortfolioField = ({ control }: FileUploadFieldsProps) => (
  <FormField
    control={control}
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
);
