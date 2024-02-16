import React from "react";
import { useRouter } from "next/router";
import { Parallax, Background } from "react-parallax";
import styles from "./PackageDetails.module.scss";
import { Box, Button, Grid, Typography } from "@mui/material";
import { packagesData } from "@/assets/contants";
import { Check } from "@mui/icons-material";


interface packageIdProps {
  packageId: any;
}
interface Package {
  image: string;
  id: string;
  name: string;
  path: string;
  about: string;
  itinerary: string[];
  thingsToDo: string[];
  price?: string;
}

function PackageDetails({ packageId }: packageIdProps) {
  const router = useRouter();
  const packageData: any = packagesData.find((packageObj) =>
    packageObj.hasOwnProperty(packageId)
  );
  if (!packageData) {
    return <div>Package not found</div>;
  }

  const { image, id, name, path, price,  about, itinerary, thingsToDo } =
    packageData[packageId];

  return (
    <>
      <Parallax
        bgImage={image}
        bgImageAlt="packages"
        strength={500}
        className={styles.headOuter}
      >
        <Grid item xs={12} className={styles.headInner}>
          {name}
        </Grid>
      </Parallax>
      <Grid container className={styles.detailsWrapper}>
        <Grid item>
          <Typography
            gutterBottom
            variant="h2"
            component="div"
            className={styles.headName}
          >
            ABOUT {` ${name.toUpperCase()}`}
          </Typography>
        </Grid>
        <Grid item className={styles.aboutBox}>
          <Typography variant="h6" component="div">
            {about}
          </Typography>
        </Grid>
        <Grid item className={styles.itinerary}>
          <div className={styles.price}>
            <Typography variant="h4"><Typography variant="h6">Rs</Typography>{`${price}/`}<Typography variant="h6">person</Typography></Typography>
          </div>
          <div></div>
          <ul>
            {itinerary.map(
              (
                each:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | React.PromiseLikeOfReactNode
                  | null
                  | undefined
              ) => (
                // eslint-disable-next-line react/jsx-key
                <div className={styles.eachItine}>
                <Check />
                <li>{each}</li>
                </div>
              )
            )}
          </ul>
        </Grid>
        <Grid item className={styles.thingsToDoBox}>
        <div className={styles.price}>
          <Typography variant="h4">Things to do in {name}</Typography>
          </div>
          <ul>
            {thingsToDo.map(
              (
                each:
                  | string
                  | number
                  | boolean
                  | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                  | Iterable<React.ReactNode>
                  | React.ReactPortal
                  | React.PromiseLikeOfReactNode
                  | null
                  | undefined
              ) => (
                // eslint-disable-next-line react/jsx-key
                <div className={styles.eachItine}>
                  <Check />
                <li>{each}</li>
                </div>
              )
            )}
          </ul>
        </Grid>
      </Grid>
      <Box className={styles.btnBox}>
        <Button size="large" className={styles.btnQuote} 
        onClick={() => {
          router.push(`/packages/${name.toLowerCase()}/quotetion`);
        }}
        >
          GET QUOTE
        </Button>
      </Box>
    </>
  );
}

export default PackageDetails;
