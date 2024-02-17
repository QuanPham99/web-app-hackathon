import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";
import Link from "next/link";

function NavBar({ navOptions = [], optionComponents = [] }) {
  return (
    <AppBar position='static' color='transparent' elevation={0}>
      <Container maxWidth='xl'>
        <Toolbar>
          <Typography variant='body2' fontWeight='bold'>
            Logo
          </Typography>
          <Typography sx={{ marginLeft: "8px" }} fontWeight='bold' variant='h6'>
            Web Name
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-evenly",
            }}
          >
            {navOptions.map((option, index) => (
              <Link
                key={index}
                href={option.url}
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <Typography variant='subtitle'>{option.name}</Typography>
              </Link>
            ))}
          </Box>
          {optionComponents}
          <Avatar alt='Professor Avatar' sx={{ bgcolor: " black" }}>
            P
          </Avatar>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
