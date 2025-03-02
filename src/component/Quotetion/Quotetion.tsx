import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./Quotetion.module.scss";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

function Quotetion() {
  const router = useRouter();
  let packageId;
  if(router.pathname.includes("packages")){
     packageId = router.query;
  }else{
    packageId = {package: ""};
  }
  const [successScreen, setSuccessScreen] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phNo: "",
    noOfppl: "",
    destination: typeof packageId?.package === "string"
    ? packageId?.package.charAt(0).toUpperCase() +
      packageId?.package.slice(1)
    : packageId?.package,
    departureDate: "",
  });
  const handleChange = (e: any) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    console.log(userDetails);
    setSuccessScreen(true);
  };
  return (
    <Grid container>
      <Grid item className={styles.formContianer}>
        {!successScreen ? (
          <>
            {" "}
            <Typography variant="h4" className={styles.headline}>
              Enquiry Box
            </Typography>
            <Grid sm={12}>
              <TextField
                variant="outlined"
                placeholder="Name"
                value={userDetails.name}
                className={styles.textField}
                name="name"
                onChange={(e) => handleChange(e)}
                required
              />
            </Grid>
            <Grid sm={12}>
              <TextField
                variant="outlined"
                placeholder="Email"
                value={userDetails.email}
                className={styles.textField}
                name="email"
                onChange={(e) => handleChange(e)}
                required
              />
            </Grid>
            <Grid className={styles.numberWrapper}>
              <Grid sm={6}>
                <TextField
                  variant="outlined"
                  placeholder="Phone Number"
                  value={userDetails.phNo}
                  className={styles.numberField}
                  name="phNo"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </Grid>
              <Grid sm={6}>
                <TextField
                  variant="outlined"
                  placeholder="No of People"
                  value={userDetails.noOfppl}
                  type="number"
                  className={styles.numberField}
                  name="noOfppl"
                  onChange={(e) => handleChange(e)}
                  required
                />
              </Grid>
            </Grid>
            <Grid sm={12}>
              <TextField
                variant="outlined"
                placeholder="Tour Destination"
                value={userDetails.destination}
                className={styles.textField}
                name="destination"
                onChange={(e) => handleChange(e)}
                required
              />
            </Grid>
            <Grid sm={12}>
              <TextField
                variant="outlined"
                placeholder="Departure Date"
                value={userDetails.departureDate}
                className={styles.textField}
                name="departureDate"
                onChange={(e) => handleChange(e)}
                required
              />
            </Grid>
          </>
        ) : (
          <Grid item sm={12}>
            <Typography className={styles.successMsg} variant="h3">
              Thank you {" "}
              {userDetails.name.charAt(0).toUpperCase() +
                userDetails.name.slice(1)}
              ! <br /> our team will reach out to you on <br />
              {userDetails.phNo + "/" + userDetails.email}
            </Typography>
          </Grid>
        )}
      </Grid>
      <Box className={styles.btnBox}>
        <Button
          size="large"
          className={styles.btnQuote}
          onClick={() => {
            handleClick();
          }}
          hidden={successScreen}
          disabled={userDetails?.name?.length <= 0 || userDetails?.departureDate?.length <= 0 || userDetails?.email?.length <= 0 || userDetails?.noOfppl?.length <= 0 || userDetails?.phNo?.length <= 0}
        >
          Submit
        </Button>
      </Box>
    </Grid>
  );
}

export default Quotetion;
