"use client";
import React from "react";
import Button from "../../../components/button";
import { Rocket } from "lucide-react";
import useLangStorage from "../../../store/langStorage";
import { ILocale } from "../../../types";
import { useGetData } from "../../../hooks/useGetData";
import ContactPage from "../../../types/contact";

export default function Contact() {
  const locale = useLangStorage((state: any) => state.lang) as ILocale;
  const contactData = useGetData("contact").data as ContactPage;
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <label htmlFor="company-name" className="block">
                <span className="text-white text-sm font-medium">
                  {contactData.form.companyName.label[locale]}
                </span>
                <input
                  type="text"
                  id="company-name"
                  name="company-name"
                  className="w-full bg-[#111113] border border-gray-700 rounded-lg p-3 mt-2 text-white placeholder:text-white/60 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder={contactData.form.companyName.placeholder[locale]}
                />
              </label>
              <label htmlFor="name" className="block">
                <span className="text-white text-sm font-medium">
                  {contactData.form.yourName.label[locale]}
                </span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-[#111113] border border-gray-700 rounded-lg p-3 mt-2 text-white placeholder:text-white/60 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder={contactData.form.yourName.placeholder[locale]}
                />
              </label>
              <label htmlFor="phone" className="block">
                <span className="text-white text-sm font-medium">
                  {contactData.form.phoneNumber.label[locale]}
                </span>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full bg-[#111113] border border-gray-700 rounded-lg p-3 mt-2 text-white placeholder:text-white/60 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder={contactData.form.phoneNumber.placeholder[locale]}
                />
              </label>
              <label htmlFor="project-type" className="block">
                <span className="text-white text-sm font-medium">
                  {contactData.form.projectType.label[locale]}
                </span>
                <select
                  name="project-type"
                  id="project-type"
                  className="w-full bg-[#111113] border border-gray-700 rounded-lg p-3 mt-2 text-white placeholder:text-white/60 focus:ring-2 focus:ring-blue-500 focus:outline-none"
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
              </label>
            </div>
            <div className="mb-6">
              <label htmlFor="description" className="block">
                <span className="text-white text-sm font-medium">
                  {contactData.form.projectDescription.label[locale]}
                </span>
                <textarea
                  id="description"
                  name="description"
                  className="w-full bg-[#111113] border border-gray-700 rounded-lg p-3 mt-2 text-white placeholder:text-white/60 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none h-28"
                  placeholder={
                    contactData.form.projectDescription.placeholder[locale]
                  }
                ></textarea>
              </label>
            </div>
            <Button
              text={contactData.button.text[locale]}
              element={
                <div className="w-6 h-6 flex items-center justify-center bg-blue-700 rounded-full duration-300">
                  <Rocket size={24} />
                </div>
              }
            />
          </div>
        )}
      </div>
    </div>
  );
}
