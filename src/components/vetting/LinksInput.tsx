import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FieldValues, UseFormReturn, Path } from "react-hook-form";
import { FormFieldProp } from "../../lib/schemas/formSchema";

export function LinksInput({ form }: { form: FormFieldProp }) {
  return (
    <>
      <FormField
        name="linkedin"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-black">LinkedIn</FormLabel>
            <FormControl>
              <Input
                placeholder="https://linkedin.com/in/username"
                className=" border border-black/25 p-2 w-full text-black shadow-black/30"
                {...field}
              />
            </FormControl>
            <FormDescription className="mb-4">
              Enter your full LinkedIn profile URL.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="github"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-black">
              GitHub Profile or Portfolio Link
            </FormLabel>
            <FormControl>
              <Input
                placeholder="https://github.com/username"
                className=" border border-black/25 p-2 w-full text-black shadow-black/30"
                {...field}
              />
            </FormControl>
            <FormDescription className="mb-4">
              Enter your full GitHub profile or portfolio URL.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
