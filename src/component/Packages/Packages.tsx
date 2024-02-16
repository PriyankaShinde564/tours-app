import React from "react";
import { Parallax, Background } from "react-parallax";
import dashboarimage from "../../assets/images.jpg";
import styles from "./Packages.module.scss";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import { packagesList } from "@/assets/contants";

export default function Packages() {
  const router = useRouter();
  //   const image1 =
  //   "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D";
  // const image2 =
  //   "https://img00.deviantart.net/2bd0/i/2009/276/c/9/magic_forrest_wallpaper_by_goergen.jpg";
  const image3 =
    "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
  // const image4 =
  //   "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";
  // const image5= "../../assets/images.jpg";
  
  return (
    <>
      <Parallax
        bgImage={image3}
        bgImageAlt="packages"
        strength={500}
        className={styles.headOuter}
      >
        <Grid item xs={12} className={styles.headInner}>
          PACKAGES
        </Grid>
      </Parallax>
      <Grid item xs={12} className={styles.domesticHeader}>
        DOMESTIC PACKAGES
      </Grid>
      <Grid item xs={12} className={styles.domesticPara}>
        Explore India in the best possible way with us
      </Grid>
      <Grid container spacing={12} className={styles.cardsContainer}>
        {packagesList.map(data => ( 
        <Grid item xs={12} lg={4} key={data.id}>
          <Card className={styles.eachCard}>
            <figure>
              <Image
                src={data.image}
                width="700"
                height="700"
                alt={data.image}
              />
            </figure>
            <CardContent className={styles.BtnWrapper}>
              <Typography gutterBottom variant="h5" component="div">
              {data.name}
              </Typography>
            </CardContent>
            
          </Card>
          <CardActions className={styles.BtnWrapper}>
              <Button
                size="large"
                onClick={() => {
                  router.push(`${data.path}`);
                }}
                className={styles.exploreBtn}
                variant="contained"
              >
                Explore
              </Button>
            </CardActions>
        </Grid>
        ))}
      </Grid>
      
    </>
  );
}
