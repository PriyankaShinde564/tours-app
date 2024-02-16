import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import PinDropIcon from '@mui/icons-material/PinDrop';
import styles from "./Contact.module.scss";
import Quotetion from '@/component/Quotetion/Quotetion'

function Contact() {
  return (
    <>
    <Grid container>
      <Grid item className={styles.formContianer}>
      <Typography variant="h4" className={styles.headline}>
          GET IN TOUCH
        </Typography>

      </Grid>
    </Grid>
    <Quotetion /></>
  );
}

export default Contact;
