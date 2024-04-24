"use client";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/app/utils/send-email";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-3/4">
      <div className="mb-5">
        <label
          htmlFor="name"
          className="mb-3 block text-base font-medium text-black"
        >
          Full Name
        </label>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 outline-none focus:border-violet-500 focus:shadow-md"
          {...register("name", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-3 block text-base font-medium text-black"
        >
          Email Address
        </label>
        <input
          type="email"
          placeholder="example@domain.com"
          className="w-full rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 outline-none focus:border-violet-500 focus:shadow-md"
          {...register("email", { required: true })}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="message"
          className="mb-3 block text-base font-medium text-black"
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder="Type your message"
          className="w-full resize-none rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 outline-none focus:border-violet-500 focus:shadow-md"
          {...register("message", { required: true })}
        ></textarea>
      </div>
      <div>
        <button className="md:text-md flex grow items-center justify-center gap-2 rounded-md bg-violet-500 p-1.5 text-sm text-white hover:bg-violet-300 hover:text-gray-950 md:p-3 lg:text-lg">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
