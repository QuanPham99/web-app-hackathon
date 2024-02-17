// "use client";
import React from "react";
import NavBar from "@/components/navigation/NavBar";
import { Button, ThemeProvider, createTheme, Box } from "@mui/material";

export const metadata = {
  title: "Professor Page",
};

const companyNavOptions = [
  { name: "Current Projects", url: "/companyPage" },
  { name: "Professors", url: "/companyPage/associatedProfessors" },
];
const pageButton = () => {
  return (
    // <ThemeProvider theme={theme}>
    <Box paddingRight='16px'>
      <Button variant='contained' style={{ borderRadius: "24px" }}>
        Add Project
      </Button>
    </Box>
    // </ThemeProvider>
  );
};

function CompanyPageLayout({ children }) {
  return (
    <div>
      <NavBar navOptions={companyNavOptions} optionComponents={pageButton()} />

      <div
        style={{ paddingRight: "24px", paddingLeft: "24px", marginTop: "16px" }}
      >
        {children}
      </div>
    </div>
  );
}

export default CompanyPageLayout;
