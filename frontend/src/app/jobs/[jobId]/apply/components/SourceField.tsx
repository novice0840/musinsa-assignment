import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Control } from "react-hook-form";

interface SourceFieldProps {
  control: Control<any>;
}

const SOURCE_OPTIONS = [
  "무신사 홈페이지",
  "채용 플랫폼 (잡코리아, 사람인 등)",
  "링크드인",
  "지인 추천",
  "기타",
];

export const SourceField = ({ control }: SourceFieldProps) => (
  <FormField
    control={control}
    name="source"
    render={({ field }) => (
      <FormItem>
        <FormLabel>해당 공고를 처음 접한 경로를 선택해주세요. *</FormLabel>
        <FormControl>
          <div className="space-y-2">
            {SOURCE_OPTIONS.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <input
                  type="radio"
                  id={option}
                  value={option}
                  checked={field.value === option}
                  onChange={() => field.onChange(option)}
                  className="w-4 h-4"
                />
                <label htmlFor={option} className="text-sm cursor-pointer">
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
);
