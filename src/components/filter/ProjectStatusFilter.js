import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import { MdOutlineExpandMore } from "react-icons/md";
import FilterMultiChoice from "./FilterMultiChoice";
import FilterSingleChoice from "./FilterSingleChoice";

function ProjectStatusFilter({
  title,
  fetchdata_url,
  isMultiChoice = false,
  projectsList,
}) {
  // TODO: Fetch filter options from backend
  const mock_options = [
    { name: "All Projects", count: projectsList ? projectsList.length : 6 },
    {
      name: "On Going Projects",
      count: projectsList
        ? projectsList.filter((obj) => obj.status === "accepted").length
        : 3,
    },
    {
      name: "Available Projects",
      count: projectsList
        ? projectsList.filter((obj) => obj.status != "accepted").length
        : 3,
    },
  ];

  return (
    <Accordion elevation={0}>
      <AccordionSummary
        expandIcon={
          <MdOutlineExpandMore style={{ color: "black", fontSize: "24px" }} />
        }
      >
        <Typography variant='h6'>{title}</Typography>
      </AccordionSummary>

      <AccordionDetails>
        {isMultiChoice ? (
          <FilterMultiChoice options={mock_options} />
        ) : (
          <FilterSingleChoice options={mock_options} />
        )}
      </AccordionDetails>
    </Accordion>
  );
}

export default ProjectStatusFilter;
