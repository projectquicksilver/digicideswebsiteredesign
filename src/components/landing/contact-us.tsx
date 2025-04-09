'use client';

import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', organization: '', email: '', message: '' });
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = recaptchaRef.current?.getValue();

    if (!token) {
      setError("Please verify reCAPTCHA");
      return;
    }

    // At this point, reCAPTCHA is passed
    // You can now submit formData to Formspree, Getform, etc.
    try {
      const response = await fetch("/api/contact-us", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        setError("Failed to submit form");
      }

      setSuccess("Form submitted successfully");
    } catch (error) {
      console.error("Error submitting form", error);
    }
    recaptchaRef.current?.reset();
  };

  return (
    <div className="z-10 flex w-full flex-col items-center justify-start gap-8 px-4 pt-20 sm:pt-48 md:pt-48 lg:pt-48 xl:pt-48 2xl:pt-48 text-foreground md:px-24 xl:px-44">
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
          onSubmit={handleSubmit}
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

          {/* Name Field */}
          <div className="flex w-full flex-col gap-3">
            <Label className="text-lg">Your name</Label>
            <Input
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="h-12"
              required
            />
          </div>

          {/* Organization Field */}
          <div className="flex w-full flex-col gap-3">
            <Label className="text-lg">Organization name</Label>
            <Input
              type="text"
              placeholder="Enter your organization name"
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              className="h-12"
              required
            />
          </div>

          {/* Email Field */}
          <div className="flex w-full flex-col gap-3">
            <Label className="text-lg">Your email</Label>
            <Input
              type="email"
              placeholder="Enter your email"
              className="h-12"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          {/* Message Field */}
          <div className="flex w-full flex-col gap-1">
            <Label className="text-lg">Your message</Label>
            <Textarea
              placeholder="Enter your message"
              className="h-32"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
          </div>

          {/* reCAPTCHA Component */}
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
            ref={recaptchaRef}
          />

          {/* Error Text */}
          {error && <p className="text-red-500">{error}</p>}
          
          {/* Success Text */}
          {success && <p className="text-green-500">{success}</p>}

          {/* Submit Button */}
          <Button type="submit" variant="default" className="w-full" size="lg">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
