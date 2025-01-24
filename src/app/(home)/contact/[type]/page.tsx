import React from "react";
import ContactComponent from "../../../../components/contact";
import { ContactCategoryType } from "../../../../types/contact";
export default function Contact({ params }: { params: { type: string } }) {
  const type = params.type as ContactCategoryType;

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
