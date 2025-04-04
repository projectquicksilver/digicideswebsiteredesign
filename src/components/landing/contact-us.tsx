"use client";

import Image from "next/image";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

type FormData = {
  name: string;
  organization: string;
  email: string;
  message: string;
};

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Submitted:", data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="z-10 flex w-full flex-col items-center justify-start gap-8 px-4 pt-48 text-foreground md:px-24 xl:px-44">
      <div className="flex w-full gap-5">
        <div className="hidden h-[770px] w-full overflow-hidden rounded-[18px] md:flex md:w-1/2">
          <Image
            src="/contact.webp"
            alt="contact"
            width={1000}
            height={1400}
            className="h-full w-full pt-5 md:pt-0"
          />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col items-start justify-start gap-7 rounded-[18px] bg-[#fafafa] p-6 md:w-1/2"
        >
          <h1 className="text-center text-3xl md:text-4xl">
            Contact
            <span className="ml-2 rounded-md bg-primary/10 px-2 text-primary">
              us
            </span>
          </h1>
          <p className="text-left text-lg font-normal text-muted-foreground">
            Let&apos;s work together
          </p>

          <div className="flex w-full flex-col gap-3">
            <Label className="text-lg">Your name</Label>
            <Input
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
              className="h-12"
            />
            {errors.name && (
              <p className="text-sm text-red-500">
                {errors.name?.message?.toString()}
              </p>
            )}
          </div>
          <div className="flex w-full flex-col gap-3">
            <Label className="text-lg">Organization name</Label>
            <Input
              type="text"
              placeholder="Enter your organization name"
              {...register("organization", {
                required: "Organization name is required",
              })}
              className="h-12"
            />
            {errors.organization && (
              <p className="text-sm text-red-500">
                {errors.organization.message?.toString()}
              </p>
            )}
          </div>
          <div className="flex w-full flex-col gap-3">
            <Label className="text-lg">Your email</Label>
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-12"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-sm text-red-500">
                {errors.email?.message?.toString()}
              </p>
            )}
          </div>
          <div className="flex w-full flex-col gap-1">
            <Label className="text-lg">Your message</Label>
            <Textarea
              placeholder="Enter your message"
              className="h-32"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <p className="text-sm text-red-500">
                {errors.message?.message?.toString()}
              </p>
            )}
          </div>
          <Button type="submit" variant="default" className="w-full" size="lg">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
