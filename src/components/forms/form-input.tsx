import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { InputHTMLAttributes } from "react";
import { Textarea } from "../ui/textarea";

interface IFormInputProps {
  label?: string;
  name: string;
  typeInput?: "textarea" | "textinput" | null;
  iconR?: { name: string; size: number; color: string };
  iconL?: { name: string; size: number; color: string };
}

export const FormInput = ({
  label,
  name,
  typeInput = "textinput",
  ...props
}: IFormInputProps &
  InputHTMLAttributes<HTMLInputElement> &
  InputHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <FormField
      data-testid="form-input"
      name={name}
      render={({ field }) => {
        const renderBody = () => {
          if (typeInput === "textarea") {
            return <Textarea {...props} {...field} />;
          }
          return <Input {...props} {...field} />;
        };
        return (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>{renderBody()}</FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};
