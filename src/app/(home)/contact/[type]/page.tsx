import React from "react";
import ContactComponent from "../../../../components/contact";
import { ContactCategoryType } from "../../../../types/contact";

interface ContactProps {
  params: Promise<{
    type: string;
  }>;
}

export default async function Contact({ params }: ContactProps) {
  const type = (await params).type as ContactCategoryType;

  return (
    <div>
      <ContactComponent
        type={
          type === "mobile" || type === "web" || type === "other" ? type : null
        }
      />
    </div>
  );
}

export async function generateStaticParams() {
  return [{ type: "mobile" }, { type: "web" }, { type: "other" }];
}

export async function generateMetadata({ params }: ContactProps) {
  const { type } = await params;
  return {
    title: `Contact - ${type}`,
  };
}
