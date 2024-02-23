// "use client";
import React from "react";
import NavBar from "@/components/navigation/NavBar";
import AddButton from "../../components/buttons/AddButton";
const companyNavOptions = [
  { name: "Current Projects", url: "/companyPage" },
  { name: "Professors", url: "/companyPage/associatedProfessors" },
];

const company = {
  username: "Shadow_Org",
  password: "bnm",
  id: "com_1",
  org: "Shadow Corp",
  email: "shadow_org@gmail.com",
  role: "com",
  image_url: "",
  owned_projects: ["Web Dev"],
  company_overview: "This is a shadow company",
};

export default function CompanyPageLayout(props) {
  props.params.company = company;
  //   console.log(props);

  return (
    <div>
      <NavBar navOptions={companyNavOptions} optionComponents={<AddButton />} />

      <div
        style={{ paddingRight: "24px", paddingLeft: "24px", marginTop: "16px" }}
      >
        {props.children}
      </div>
    </div>
  );
}
