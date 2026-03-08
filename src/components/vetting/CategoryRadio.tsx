import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Bot, Layers, Smartphone, AppWindow, Server } from "lucide-react";
import { FormFieldProp } from "../../lib/schemas/formSchema";

const categories = [
  {
    name: "AI ML Developer",
    svg: <Bot className="w-8 h-8 text-white mb-3" strokeWidth={1.5} />,
  },
  {
    name: "Full Stack Developer",
    svg: <Layers className="w-8 h-8 text-white mb-3" strokeWidth={1.5} />,
  },
  {
    name: "Mobile App Developer",
    svg: <Smartphone className="w-8 h-8 text-white mb-3" strokeWidth={1.5} />,
  },
  {
    name: "Frontend Developer",
    svg: <AppWindow className="w-8 h-8 text-white mb-3" strokeWidth={1.5} />,
  },
  {
    name: "Backend Developer",
    svg: <Server className="w-8 h-8 text-white mb-3" strokeWidth={1.5} />,
  },
];

export default function CategoryRadio({ form }: { form: FormFieldProp }) {
  return (
    <FormField
      control={form.control}
      name="category"
      render={({ field }) => (
        <FormItem className="w-full max-w-4xl mx-auto p-6">
          <FormLabel className="block mb-4 text-lg font-semibold text-center">
            Choose your main category
          </FormLabel>
          <FormControl>
            <RadioGroup
              value={field.value}
              onValueChange={field.onChange}
              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map(({ name, svg }) => {
                const value = name.toLowerCase(); // ensure consistent casing
                return (
                  <FormItem key={value} className="w-full md:w-[30%]">
                    <FormLabel htmlFor={value} className="cursor-pointer h-full block">
                      <div className={`flex flex-col items-center justify-center p-8 bg-accentBlue rounded-2xl hover:bg-opacity-90 transition-colors h-full text-center ${field.value === value ? "border-2 border-black" : "border-2 border-transparent"}`}>
                        <RadioGroupItem
                          value={value}
                          id={value}
                          className="sr-only"
                        />
                        {svg}
                        <span className="text-xl font-semibold text-white">
                          {name}
                        </span>
                      </div>
                    </FormLabel>
                  </FormItem>
                );
              })}
            </RadioGroup>
          </FormControl>
          <FormDescription className="text-base text-center font-medium mt-4">
            {field.value
              ? `Selected: ${categories.find(c => c.name.toLowerCase() === field.value)?.name || field.value}`
              : "Please select a category"}
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}