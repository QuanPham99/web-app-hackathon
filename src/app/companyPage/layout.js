"use client";
import React, { useState } from "react";
import NavBar from "@/components/navigation/NavBar";
import { Button, ThemeProvider, createTheme, Box } from "@mui/material";
import AddProjectPopUp from "../../components/popup/AddProjectPopUp";

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
  const [showModal, setShowModal] = useState(false);
  const pageButton = () => {
    return (
      // <ThemeProvider theme={theme}>
      <Box paddingRight='16px'>
        <Button
          onClick={() => {
            setShowModal(true);
            console.log(showModal);
          }}
          variant='contained'
          style={{ borderRadius: "24px" }}
        >
          Add Project
        </Button>
      </Box>
      // </ThemeProvider>
    );
  };
  const handleClose = (event, reason) => {
    // console.log(reason);
    if (reason !== "backdropClick") {
      setShowModal(false);
    }
  };
  const popUp = (
    <div>
      {" "}
      <AddProjectPopUp open={showModal} onClose={handleClose} />
    </div>
  );
  return (
    <div>
      <NavBar navOptions={companyNavOptions} optionComponents={pageButton()} />

      <div
        style={{ paddingRight: "24px", paddingLeft: "24px", marginTop: "16px" }}
      >
        {props.children}
        {showModal && popUp}
      </div>
    </div>
  );
}
