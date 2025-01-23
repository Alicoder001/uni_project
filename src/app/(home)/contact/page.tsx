"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../../components/button";
import { Rocket } from "lucide-react";
import useLangStorage from "../../../store/langStorage";
import { ILocale } from "../../../types";
import { useGetData } from "../../../hooks/useGetData";
import { ContactData } from "../../../types/contact";

// Validatsiya uchun schema

export default function Contact() {
  const locale = useLangStorage((state: any) => state.lang) as ILocale;
  const contactData = useGetData("contact").data as ContactData;
  console.log(contactData);
  const schema = yup.object().shape({
    companyName: yup
      .string()
      .required(contactData?.validationErrors?.companyName?.required[locale]),
    name: yup
      .string()
      .required(contactData?.validationErrors?.name?.required[locale]),
    phone: yup
      .string()
      .matches(
        /^\+998[0-9]{9}$/,
        contactData?.validationErrors?.phone?.invalid[locale]
      )
      .required(contactData?.validationErrors?.phone?.required[locale]),
    projectType: yup
      .string()
      .required(contactData?.validationErrors?.projectType?.required[locale]),
    description: yup
      .string()
      .min(10, contactData?.validationErrors?.description?.minLength[locale])
      .required(contactData?.validationErrors?.description?.required[locale]),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch("/api/send_email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert(contactData.notifications.success[locale]);
        reset(); // Formni tozalash
      } else {
        alert(result.error || contactData.notifications.error[locale]);
      }
    } catch (error) {
      console.error("Xatolik:", error);
      alert("Xatolik yuz berdi!");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center pt-32 pb-24"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="container max-w-4xl">
        {Object.keys(contactData).length > 0 && (
          <div className="bg-[var(--bg-secondary)] rounded-lg p-8 shadow-lg">
            <h1 className="text-white text-2xl font-bold mb-6">
              {contactData.title[locale]}
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="company-name"
                    className="block text-white text-sm font-medium"
                  >
                    {contactData.form.companyName.label[locale]}
                  </label>
                  <input
                    type="text"
                    id="company-name"
                    {...register("companyName")}
                    className={`w-full bg-[#111113] border ${
                      errors.companyName ? "border-red-500" : "border-gray-700"
                    } rounded-lg p-3 mt-2 text-white placeholder:text-white/60 focus:ring-2 focus:ring-blue-500 focus:outline-none`}
                    placeholder={
                      contactData.form.companyName.placeholder[locale]
                    }
                  />
                  {errors.companyName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.companyName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="block text-white text-sm font-medium"
                  >
                    {contactData.form.yourName.label[locale]}
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register("name")}
                    className={`w-full bg-[#111113] border ${
                      errors.name ? "border-red-500" : "border-gray-700"
                    } rounded-lg p-3 mt-2 text-white placeholder:text-white/60 focus:ring-2 focus:ring-blue-500 focus:outline-none`}
                    placeholder={contactData.form.yourName.placeholder[locale]}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-white text-sm font-medium"
                  >
                    {contactData.form.phoneNumber.label[locale]}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register("phone")}
                    className={`w-full bg-[#111113] border ${
                      errors.phone ? "border-red-500" : "border-gray-700"
                    } rounded-lg p-3 mt-2 text-white placeholder:text-white/60 focus:ring-2 focus:ring-blue-500 focus:outline-none`}
                    placeholder={
                      contactData.form.phoneNumber.placeholder[locale]
                    }
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="project-type"
                    className="block text-white text-sm font-medium"
                  >
                    {contactData.form.projectType.label[locale]}
                  </label>
                  <select
                    id="project-type"
                    {...register("projectType")}
                    className={`w-full bg-[#111113] border ${
                      errors.projectType ? "border-red-500" : "border-gray-700"
                    } rounded-lg py-[15px] px-3 mt-2 text-white placeholder:text-white/60 focus:ring-2 focus:ring-blue-500 focus:outline-none`}
                  >
                    <option value="web">
                      {contactData.form.projectType.options.web[locale]}
                    </option>
                    <option value="mobile">
                      {contactData.form.projectType.options.mobile[locale]}
                    </option>
                    <option value="desktop">
                      {contactData.form.projectType.options.desktop[locale]}
                    </option>
                    <option value="other">
                      {contactData.form.projectType.options.other[locale]}
                    </option>
                  </select>
                  {errors.projectType && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.projectType.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="description"
                  className="block text-white text-sm font-medium"
                >
                  {contactData.form.projectDescription.label[locale]}
                </label>
                <textarea
                  id="description"
                  {...register("description")}
                  className={`w-full bg-[#111113] border ${
                    errors.description ? "border-red-500" : "border-gray-700"
                  } rounded-lg p-3 mt-2 text-white placeholder:text-white/60 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none h-28`}
                  placeholder={
                    contactData.form.projectDescription.placeholder[locale]
                  }
                ></textarea>
                {errors.description && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.description.message}
                  </p>
                )}
              </div>

              <Button
                text={contactData.button.text[locale]}
                element={
                  <div className="w-6 h-6 flex items-center justify-center bg-blue-700 rounded-full duration-300">
                    <Rocket size={24} />
                  </div>
                }
              />
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
