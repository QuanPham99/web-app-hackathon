"use client";
import ProjectCard from "../../components/ProjectCard";
import {
  Container,
  Stack,
  Grid,
  Button,
  AppBar,
  Toolbar,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React from "react";
import { createTheme } from "@mui/material";

const projectDetail = {
  company_name: "Google",
  company_logo_url: "/assets/google_logo.png",
  title: "Software Development",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ante sed est euismod fermentum. Nam non libero vitae sapien vestibulum feugiat eu eget tellus. In pretium, nunc id iaculis faucibus, odio tellus sollicitudin lorem, dictum cursus risus lacus quis lorem. Nam et nunc id felis fermentum viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut imperdiet elementum nisi, rhoncus venenatis orci aliquet a. Vestibulum tincidunt, nunc nec viverra vulputate, enim diam aliquet enim, vel aliquet purus tortor eu justo. Vivamus nec nulla ipsum. Pellentesque ut neque dolor. Pellentesque vulputate quam faucibus, ornare dui ac, vestibulum orci. Ut risus nulla, rhoncus nec vestibulum quis, efficitur vitae libero. Duis elementum erat ut mi tempus, non efficitur diam semper. Mauris convallis rhoncus turpis non varius. Fusce at nunc ut nulla vehicula cursus. Proin laoreet, ante id commodo tristique, mi lacus bibendum sem, non mattis metus urna vel nisl.\nProin dictum a ante nec pharetra. Ut lacus sem, dictum in metus vel, pharetra fermentum purus. Duis nec sem at lacus fringilla iaculis at a elit. Duis nunc lacus, lobortis sed felis a, luctus sagittis massa. Curabitur quis fermentum nulla. Etiam commodo eget sem nec egestas. Quisque nec justo vel sapien congue sagittis. Duis euismod tortor et lorem suscipit elementum. Morbi non nisl sit amet massa varius viverra. Donec laoreet mauris sem, non commodo sapien condimentum nec. Aliquam id magna arcu. Proin consequat consectetur porta.\nEtiam et arcu dui. Aliquam posuere diam ut venenatis scelerisque. Donec posuere placerat aliquam. Fusce ut justo accumsan nisl interdum vestibulum. Phasellus vel vulputate lectus. Etiam nec dolor nec dolor euismod pretium id eget diam. Curabitur nec dolor vestibulum, condimentum lorem et, accumsan nunc. Sed placerat, sapien ut sodales bibendum, nisi augue venenatis elit, a ornare urna lacus eu urna. Etiam tincidunt varius ex, in lacinia enim commodo eget. Etiam euismod enim ut ultricies tempor. Fusce posuere sodales congue. Vestibulum fermentum a sem interdum porta. Pellentesque at lacinia urna, id dapibus dolor. Vestibulum non vehicula urna.\nMauris eget malesuada nisi, ut blandit ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc viverra tempor diam, eget placerat ipsum viverra et. Vestibulum ac nisi volutpat eros ultrices fringilla nec vel arcu. Suspendisse ultrices non sapien in tempus. Integer vestibulum orci sed tincidunt rhoncus. Praesent molestie, mauris sit amet ornare sagittis, ipsum magna tincidunt ante, sit amet egestas ante massa eget libero. Cras tincidunt fermentum ligula vel pulvinar. Mauris et finibus felis. Vestibulum ut commodo est.\nUt pharetra velit non nisi malesuada interdum. Maecenas non rutrum tellus. Curabitur molestie tortor velit, vel laoreet arcu euismod in. Fusce ut luctus urna, at tempus diam. Proin eu ex pretium, tempor magna ac, malesuada arcu. Mauris convallis tincidunt lacinia. Fusce et tortor sem. In hac habitasse platea dictumst. Sed at leo lobortis, ultricies neque eget, vehicula magna.",
  date_posted: "2/12/2024",
  topics: ["Fullstack development", "Machine Learning"],
  status: "posted",
  date_accepted: null,
};

const projects = [projectDetail, projectDetail, projectDetail];
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#000000",
    },
  },
});
function CompanyPage() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <AppBar>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <Grid container spacing={0}>
                <Grid item>
                  <Typography
                    variant='body1'
                    component='h1'
                    style={{ paddingLeft: "30px", paddingTop: "18px" }}
                  >
                    Logo
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant='body1'
                    component='h1'
                    style={{ padding: "18px" }}
                  >
                    Web Name
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant='body1'
                    component='h1'
                    style={{ paddingLeft: "30px", paddingTop: "18px" }}
                  >
                    Current Projects
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Container style={{ paddingTop: "12px" }}>
                <Button variant='contained' style={{ borderRadius: "24px" }}>
                  Add Project
                </Button>
              </Container>
            </Grid>
          </Grid>
          {/* <Grid container spacing={0}>
            <Grid item>
              <Typography
                variant='body1'
                component='h1'
                style={{ paddingLeft: "30px", paddingTop: "18px" }}
              >
                Logo
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                component='h1'
                style={{ padding: "18px" }}
              >
                Web Name
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                component='h1'
                style={{ paddingLeft: "30px", paddingTop: "18px" }}
              >
                Current Projects
              </Typography>
            </Grid>
            <Grid item>
              <Container style={{ paddingTop: "12px" }}>
                <Button variant='contained' style={{ borderRadius: "24px" }}>
                  Add Project
                </Button>
              </Container>
            </Grid>
          </Grid> */}
        </AppBar>
      </ThemeProvider>
      <div>
        <center>App Bar will be here</center>
      </div>
      {/* <Container> */}
      <Grid container spacing={2} paddingTop='18px'>
        <Grid item xs={12} sm={16}>
          <Container>
            {/* <center>
              <Button variant='contained' style={{ borderRadius: "24px" }}>
                New Project
              </Button>
            </center> */}
            <Stack spacing={2} paddingTop='18px'>
              {projects.map((project) => (
                <ProjectCard key={project.id} projectDetail={project} />
              ))}
            </Stack>
          </Container>
        </Grid>
      </Grid>

      {/* </Container> */}
    </div>
  );
}

export default CompanyPage;
