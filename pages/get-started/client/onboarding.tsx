import Head from "next/head";
import { FormEvent, useState } from "react";
import Nav from "@/src/components/Nav";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const INDUSTRY_OPTIONS = [
  "Technology",
  "Finance",
  "Healthcare",
  "Education",
  "Marketing",
  "Ecommerce",
  "Consulting",
  "Other",
];

const SIZE_OPTIONS = [
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "200+ employees",
];

const COUNTRY_OPTIONS = ["India", "United States", "United Kingdom", "Singapore", "Australia"];

export default function ClientOnboardingPage() {
  const [companyName, setCompanyName] = useState("");
  const [website, setWebsite] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [industry, setIndustry] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // UI-first page: API wiring can be added later.
  }

  return (
    <>
      <Head>
        <title>Client Onboarding - Hustlr</title>
      </Head>

      <Nav />

      <main className="min-h-screen bg-[#f4f4f4] pt-16 md:pt-20">
        <section className="px-6 py-10 sm:px-10 md:px-14 lg:px-24">
          <div className="w-full max-w-2xl font-sans text-black">
            <h1 className="font-serif text-4xl font-normal tracking-tight text-black/90">
              Tell Us About Your Business
            </h1>
            <p className="mt-6 text-[2rem] font-semibold leading-tight text-black/85">
              Help students understand who they will be working with
            </p>
            <p className="mt-3 text-2xl font-semibold text-[#58b7ba]">
              Verified companies attract better student talent.
            </p>

            <form onSubmit={onSubmit} className="mt-12 space-y-7">
              <div className="space-y-2">
                <label className="block text-sm font-semibold">Company Name</label>
                <Input
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Autofill based on data from Account Creation page but allow Edit"
                  className="h-11 rounded-md border-black/10 bg-[#eaeaea] text-black placeholder:text-black/45"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold">Company Website</label>
                <Input
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="Link"
                  className="h-11 rounded-md border-black/10 bg-[#eaeaea] text-black placeholder:text-black/45"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold">Company LinkedIn</label>
                <Input
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                  placeholder="Link"
                  className="h-11 rounded-md border-black/10 bg-[#eaeaea] text-black placeholder:text-black/45"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold">Industry</label>
                <div className="flex flex-col gap-3 md:flex-row md:items-center">
                  <Select value={industry} onValueChange={setIndustry}>
                    <SelectTrigger className="h-11 w-full md:w-[220px] rounded-md border-black/10 bg-[#eaeaea] text-black">
                      <SelectValue placeholder="Dropdown" />
                    </SelectTrigger>
                    <SelectContent>
                      {INDUSTRY_OPTIONS.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-black/60">
                    Technology, Finance, Healthcare, Education, Marketing, Ecommerce, Consulting, Other
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold">Company Size</label>
                <div className="flex flex-col gap-3 md:flex-row md:items-center">
                  <Select value={companySize} onValueChange={setCompanySize}>
                    <SelectTrigger className="h-11 w-full md:w-[220px] rounded-md border-black/10 bg-[#eaeaea] text-black">
                      <SelectValue placeholder="Dropdown" />
                    </SelectTrigger>
                    <SelectContent>
                      {SIZE_OPTIONS.map((item) => (
                        <SelectItem key={item} value={item}>
                          {item}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <p className="text-xs text-black/60">1-10 employees, 11-50 employees, 51-200 employees, 200+ employees</p>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-semibold">Country</label>
                <Select value={country} onValueChange={setCountry}>
                  <SelectTrigger className="h-11 w-full md:w-[220px] rounded-md border-black/10 bg-[#eaeaea] text-black">
                    <SelectValue placeholder="Dropdown" />
                  </SelectTrigger>
                  <SelectContent>
                    {COUNTRY_OPTIONS.map((item) => (
                      <SelectItem key={item} value={item}>
                        {item}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <label className="block text-sm font-semibold">Company Description</label>
                  <span className="text-xs text-black/55">Word limit: 50</span>
                </div>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Briefly explain what your company does\nEx: We are a fintech startup building tools that help small businesses manage payments."
                  rows={3}
                  className="resize-none rounded-md border-black/10 bg-[#eaeaea] text-black placeholder:text-black/45"
                />
              </div>

              <div className="pt-4">
                <Button type="submit" className="h-10 rounded-lg bg-black px-10 text-white hover:bg-black/90">
                  Complete Onboarding
                </Button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
