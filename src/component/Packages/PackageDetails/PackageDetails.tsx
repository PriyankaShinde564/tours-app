import React from 'react';
import { Parallax, Background } from 'react-parallax';
import styles from "./PackageDetails.module.scss"
import { Grid } from '@mui/material';



interface packageIdProps {
    packageId:string;
}
interface Package {
  image: string;
  id: string;
  name: string;
  path: string;
}

function PackageDetails({packageId}: packageIdProps) {
  const packagesData: { [key: string]: Package }[] = [
    {"goa": { image: "/assets/goa1.jpeg", id: "0", name: "Goa", path: "packages/goa" }},
    {"rajastan": { image: "/assets/rajastan.jpg", id: "1", name: "Rajastan", path: "packages/rajastan" }},
    {"leh-ladakh": { image: "/assets/lehladakh.jpeg", id: "2", name: "Leh Ladakh", path: "packages/leh-ladakh" }},
    {"nainital": { image: "/assets/nainital.jpeg", id: "3", name: "Nainital", path: "packages/nainital" }},
    {"andaman": { image: "/assets/andaman.jpeg", id: "4", name: "Andaman", path: "packages/andaman" }},
    {"kashmir": { image: "/assets/kashmir.jpeg", id: "5", name: "Kashmir", path: "packages/kashmir" }},
    {"ruofkutch": { image: "/assets/ruofkutch.jpeg", id: "6", name: "Ru of kutch", path: "packages/ruofkutch" }},
    {"shimla-manali": { image: "/assets/shimla-manali.jpeg", id: "7", name: "Shimla Manali", path: "packages/shimla-manali" }}
];
 
const packageData = packagesData.find(packageObj => packageObj.hasOwnProperty(packageId));
if (!packageData) {
    return <div>Package not found</div>;
}

const { image, id, name, path } = packageData[packageId] as Package;

    

  return (
    <>
    <Parallax 
    bgImage={image}
    bgImageAlt="packages" strength={500} className={styles.headOuter}>
          <Grid item xs={12} className={styles.headInner}>
            {name}
            </Grid>
    </Parallax>
    <Grid container className={styles.detailsWrapper}><Grid item >About</Grid></Grid>
   </>
  )
}

export default PackageDetails