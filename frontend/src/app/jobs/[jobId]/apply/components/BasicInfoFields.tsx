import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control } from "react-hook-form";

interface BasicInfoFieldsProps {
  control: Control<any>;
}

export const NameField = ({ control }: BasicInfoFieldsProps) => (
  <FormField
    control={control}
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
);

export const EmailField = ({ control }: BasicInfoFieldsProps) => (
  <FormField
    control={control}
    name="email"
    render={({ field }) => (
      <FormItem>
        <FormLabel>이메일 *</FormLabel>
        <FormControl>
          <Input type="email" placeholder="example@email.com" {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
);

export const PhoneField = ({ control }: BasicInfoFieldsProps) => (
  <FormField
    control={control}
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
);

export const EnglishNameField = ({ control }: BasicInfoFieldsProps) => (
  <FormField
    control={control}
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
);
