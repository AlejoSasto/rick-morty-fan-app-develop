//!librerias

import React,{FC} from "react";

//!components

import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

//!hooks
//!styles
//!css

import "./Footer.css";

//!firebase-
//!funciones

import { useStyles } from "./Footer.services";

//!variables u otros
//!types

export const Footer: FC = ({ ...props }) => {
  const { rootBox, footerNav, footerLink } = useStyles();

  const content = {
    copy: "© 2022 rick-morty all rights reserved.",
    link1: <GoogleIcon />,
    link2: <GitHubIcon />,
    link3: <InstagramIcon />,
    link4: <LinkedInIcon />,
    ...props,
  };

  return (
    <footer>
      <Container maxWidth="xl">
        <Box
          py={6}
          display="flex"
          flexWrap="wrap"
          alignItems="center"
          className={rootBox}
        >
          <Box component="nav" className={footerNav}>
            <Link
              href="https://es.wikipedia.org/wiki/Rick_y_Morty"
              variant="body1"
              className={footerLink}
              target="_blank"
            >
              {content["link1"]}
            </Link>
            <Link
              href="https://github.com/AlejoSasto"
              variant="body1"
              className={footerLink}
              target="_blank"
            >
              {content["link2"]}
            </Link>
            <Link
              href="https://www.instagram.com/"
              variant="body1"
              className={footerLink}
              target="_blank"
            >
              {content["link3"]}
            </Link>
            <Link
              href="linkedin.com/in/fabio-alejandro-sastoque-rincon/"
              variant="body1"
              className={footerLink}
              target="_blank"
            >
              {content["link4"]}
            </Link>
          </Box>
          <Box mt={{ xs: 4, md: 0 }} ml="auto">
            <Typography
              variant="body1"
              color="inherit"
              style={{
                margin: "15px auto 10px 15px",
              }}
            >
              {content["copy"]}
            </Typography>
          </Box>
        </Box>
      </Container>
    </footer>
  );
};
