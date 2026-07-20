"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Controller,
  useForm,
  type SubmitHandler,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  BriefcaseBusiness,
  Building2,
  IndianRupee,
  Loader2,
  MapPin,
  Plus,
  X,
} from "lucide-react";

import {
  createJobSchema,
  type CreateJobFormInput,
  type CreateJobSchema,
} from "@/modules/jobs/schemas/job.schema";
import {
  EmploymentType,
  ExperienceLevel,
} from "@/modules/jobs/types/job.types";

const employmentTypeOptions = [
  {
    label: "Full time",
    value: EmploymentType.FULL_TIME,
  },
  {
    label: "Part time",
    value: EmploymentType.PART_TIME,
  },
  {
    label: "Internship",
    value: EmploymentType.INTERNSHIP,
  },
  {
    label: "Contract",
    value: EmploymentType.CONTRACT,
  },
  {
    label: "Freelance",
    value: EmploymentType.FREELANCE,
  },
];

const experienceLevelOptions = [
  {
    label: "Fresher",
    value: ExperienceLevel.FRESHER,
  },
  {
    label: "Junior",
    value: ExperienceLevel.JUNIOR,
  },
  {
    label: "Mid level",
    value: ExperienceLevel.MID_LEVEL,
  },
  {
    label: "Senior",
    value: ExperienceLevel.SENIOR,
  },
];

interface ApiResponse {
  message?: string;
}

export default function CreateJobForm() {
  const router = useRouter();

  const [skillInput, setSkillInput] = useState("");
  const [apiError, setApiError] = useState<string | null>(
    null
  );
  const [successMessage, setSuccessMessage] = useState<
    string | null
  >(null);

  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<
    CreateJobFormInput,
    unknown,
    CreateJobSchema
  >({
    resolver: zodResolver(createJobSchema),

    defaultValues: {
      title: "",
      company: "",
      location: "",
      description: "",
      employmentType: EmploymentType.FULL_TIME,
      experienceLevel: ExperienceLevel.FRESHER,
      skills: [],
    },
  });

  const skills = watch("skills") ?? [];

  function addSkill() {
    const normalizedSkill = skillInput.trim();

    if (!normalizedSkill) {
      return;
    }

    const alreadyExists = skills.some(
      (skill) =>
        skill.toLowerCase() ===
        normalizedSkill.toLowerCase()
    );

    if (alreadyExists || skills.length >= 15) {
      return;
    }

    setValue("skills", [...skills, normalizedSkill], {
      shouldDirty: true,
      shouldValidate: true,
    });

    setSkillInput("");
  }

  function removeSkill(skillToRemove: string) {
    const updatedSkills = skills.filter(
      (skill) => skill !== skillToRemove
    );

    setValue("skills", updatedSkills, {
      shouldDirty: true,
      shouldValidate: true,
    });
  }

  function handleSkillKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (event.key === "Enter" || event.key === ",") {
      event.preventDefault();
      addSkill();
    }
  }

  const onSubmit: SubmitHandler<
    CreateJobSchema
  > = async (data) => {
    setApiError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch("/api/jobs", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });

      const result =
        (await response.json()) as ApiResponse;

      if (!response.ok) {
        throw new Error(
          result.message ?? "Unable to create the job."
        );
      }

      setSuccessMessage(
        result.message ?? "Job created successfully."
      );

      router.push("/dashboard/jobs");
      router.refresh();
    } catch (error) {
      setApiError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
      noValidate
    >
      <div className="border-b border-slate-200 px-6 py-5 sm:px-8">
        <h2 className="text-lg font-semibold text-slate-900">
          Job details
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Provide clear information to attract suitable
          candidates.
        </p>
      </div>

      <div className="space-y-8 px-6 py-6 sm:px-8 sm:py-8">
        {apiError && (
          <div
            role="alert"
            className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {apiError}
          </div>
        )}

        {successMessage && (
          <div
            role="status"
            className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700"
          >
            {successMessage}
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2">
          <FormField
            label="Job title"
            htmlFor="title"
            error={errors.title?.message}
            required
          >
            <InputWithIcon icon={<BriefcaseBusiness />}>
              <input
                {...register("title")}
                id="title"
                placeholder="Senior Frontend Developer"
                className={inputClassName}
              />
            </InputWithIcon>
          </FormField>

          <FormField
            label="Company"
            htmlFor="company"
            error={errors.company?.message}
            required
          >
            <InputWithIcon icon={<Building2 />}>
              <input
                {...register("company")}
                id="company"
                placeholder="JobSphere Technologies"
                className={inputClassName}
              />
            </InputWithIcon>
          </FormField>

          <FormField
            label="Location"
            htmlFor="location"
            error={errors.location?.message}
            required
          >
            <InputWithIcon icon={<MapPin />}>
              <input
                {...register("location")}
                id="location"
                placeholder="Bengaluru, India or Remote"
                className={inputClassName}
              />
            </InputWithIcon>
          </FormField>

          <FormField
            label="Annual salary"
            htmlFor="salary"
            error={errors.salary?.message}
            required
          >
            <InputWithIcon icon={<IndianRupee />}>
              <input
                {...register("salary", {
                  valueAsNumber: true,
                })}
                id="salary"
                type="number"
                min="1"
                step="1"
                placeholder="1200000"
                className={inputClassName}
              />
            </InputWithIcon>
          </FormField>

          <FormField
            label="Employment type"
            htmlFor="employmentType"
            error={errors.employmentType?.message}
            required
          >
            <select
              {...register("employmentType")}
              id="employmentType"
              className={selectClassName}
            >
              {employmentTypeOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </FormField>

          <FormField
            label="Experience level"
            htmlFor="experienceLevel"
            error={errors.experienceLevel?.message}
            required
          >
            <select
              {...register("experienceLevel")}
              id="experienceLevel"
              className={selectClassName}
            >
              {experienceLevelOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </select>
          </FormField>
        </div>

        <FormField
          label="Job description"
          htmlFor="description"
          description="Explain the role, responsibilities and ideal candidate."
          error={errors.description?.message}
          required
        >
          <textarea
            {...register("description")}
            id="description"
            rows={8}
            placeholder="Describe the role and its responsibilities..."
            className={`${selectClassName} resize-y`}
          />
        </FormField>

        <Controller
          name="skills"
          control={control}
          render={() => (
            <FormField
              label="Required skills"
              htmlFor="skillInput"
              description="Press Enter or comma after each skill."
              error={errors.skills?.message}
            >
              <div className="rounded-xl border border-slate-300 bg-white p-3 transition focus-within:border-indigo-500 focus-within:ring-4 focus-within:ring-indigo-500/10">
                {skills.length > 0 && (
                  <div className="mb-3 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center gap-1.5 rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700"
                      >
                        {skill}

                        <button
                          type="button"
                          onClick={() =>
                            removeSkill(skill)
                          }
                          aria-label={`Remove ${skill}`}
                          className="rounded-full p-0.5 transition hover:bg-indigo-100"
                        >
                          <X className="size-3.5" />
                        </button>
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex gap-2">
                  <input
                    id="skillInput"
                    value={skillInput}
                    onChange={(event) =>
                      setSkillInput(event.target.value)
                    }
                    onKeyDown={handleSkillKeyDown}
                    placeholder="React, TypeScript, Next.js"
                    className="min-w-0 flex-1 border-0 bg-transparent px-1 py-1.5 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                  />

                  <button
                    type="button"
                    onClick={addSkill}
                    disabled={
                      !skillInput.trim() ||
                      skills.length >= 15
                    }
                    className="inline-flex items-center gap-1 rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <Plus className="size-4" />
                    Add
                  </button>
                </div>
              </div>
            </FormField>
          )}
        />
      </div>

      <div className="flex flex-col-reverse gap-3 border-t border-slate-200 bg-slate-50 px-6 py-4 sm:flex-row sm:justify-end sm:px-8">
        <button
          type="button"
          onClick={() => router.back()}
          disabled={isSubmitting}
          className="inline-flex min-h-11 items-center justify-center rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Publishing…
            </>
          ) : (
            "Publish job"
          )}
        </button>
      </div>
    </form>
  );
}

interface FormFieldProps {
  label: string;
  htmlFor: string;
  description?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

function FormField({
  label,
  htmlFor,
  description,
  error,
  required,
  children,
}: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-medium text-slate-700"
      >
        {label}

        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      {children}

      {description && !error && (
        <p className="mt-2 text-xs text-slate-500">
          {description}
        </p>
      )}

      {error && (
        <p className="mt-2 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

interface InputWithIconProps {
  icon: React.ReactElement;
  children: React.ReactNode;
}

function InputWithIcon({
  icon,
  children,
}: InputWithIconProps) {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-slate-400 [&>svg]:size-4">
        {icon}
      </span>

      {children}
    </div>
  );
}

const inputClassName =
  "min-h-11 w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10";

const selectClassName =
  "min-h-11 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10";