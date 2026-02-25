"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <h3 className="text-lg font-semibold text-slate-900">Send a message</h3>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          {...register("name", { required: "Name is required" })}
          className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 shadow-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-400"
          autoComplete="name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-700">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Please enter a valid email address",
            },
          })}
          className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 shadow-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-400"
          autoComplete="email"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
          Phone number
        </label>
        <input
          id="phone"
          type="tel"
          {...register("phone")}
          className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 shadow-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-400"
          autoComplete="tel"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message", { required: "Message is required" })}
          className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 shadow-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-400"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {status === "success" && (
        <p className="rounded-lg bg-green-50 p-3 text-sm text-green-800" role="status">
          Thank you! Your message has been sent. We&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-lg bg-red-50 p-3 text-sm text-red-800" role="alert">
          Something went wrong. Please try again or contact us by phone/email.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-cyan-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-cyan-700 disabled:opacity-70 focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
