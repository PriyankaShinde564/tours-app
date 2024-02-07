import React from "react";
import { Parallax, Background } from "react-parallax";
import styles from "./PackageDetails.module.scss";
import { Grid } from "@mui/material";

interface packageIdProps {
  packageId: string;
}
interface Package {
  image: string;
  id: string;
  name: string;
  path: string;
  about: string;
  itinerary: string[];
  thingsToDo: string[];
  price?:string;
}

function PackageDetails({ packageId }: packageIdProps) {
  const packagesData = [
    {
      goa: {
        image: "/assets/goa1.jpeg",
        id: "0",
        name: "Goa",
        path: "packages/goa",
        about:
          "Known for its pristine beaches, vibrant nightlife, and Portuguese heritage, Goa is a popular tourist destination in India. Explore its beautiful coastline, indulge in water sports, and savor delicious seafood.",
        itinerary: [
          "3 Nights & 4 Days",
          "Accommodation",
          "Meals",
          "Sightseeing",
          "Beach Activities",
        ],
        thingsToDo: [
          "Beach Hopping",
          "Water Sports (Jet Skiing, Parasailing, Scuba Diving)",
          "Visit Old Goa Churches",
          "Explore Spice Plantations",
          "Enjoy Nightlife at Beach Shacks and Clubs",
        ],
      },
    },
    {
      rajasthan: {
        image: "/assets/rajastan.jpg",
        id: "1",
        name: "Rajasthan",
        path: "packages/rajasthan",
        about:
          "The land of Maharajas, lakes, grace, emotions, adventure, and vibrancy. Rajasthan with its royal essence welcomes you with all its heart. More and more people are booking their tours to this heavenly destination leading to an increase in Rajasthan Tourism. Be an influential part of this rise, Book your tours now",
        itinerary: [
          "5 Nights & 6 Days",
          "Accommodation",
          "Meals",
          "Sightseeing",
          "Camel Safari in Thar Desert",
        ],
        thingsToDo: [
          "Visit Amber Fort in Jaipur",
          "Explore Mehrangarh Fort in Jodhpur",
          "Enjoy Desert Safari in Jaisalmer",
          "Witness Puppet Shows and Folk Dances",
          "Shop for Handicrafts and Textiles",
        ],
      },
    },
    {
      "leh-ladakh": {
        image: "/assets/lehladakh.jpeg",
        id: "2",
        name: "Leh Ladakh",
        path: "packages/leh-ladakh",
        about:
          "Nestled in the Himalayas, Leh Ladakh is known for its stunning landscapes, Buddhist monasteries, and adventurous activities. Explore its rugged terrain, high-altitude lakes, and picturesque villages.",
        itinerary: [
          "7 Nights & 8 Days",
          "Accommodation",
          "Meals",
          "Sightseeing",
          "Trekking to Pangong Lake",
        ],
        thingsToDo: [
          "Visit Pangong Tso Lake",
          "Explore Nubra Valley and Diskit Monastery",
          "Experience Magnetic Hill and Gurudwara Pathar Sahib",
          "Rafting in Zanskar River",
          "Visit Leh Palace and Shanti Stupa",
        ],
      },
    },
    {
      nainital: {
        image: "/assets/nainital.jpeg",
        id: "3",
        name: "Nainital",
        path: "packages/nainital",
        about:
          "Nainital is a charming hill station in Uttarakhand, known for its scenic beauty, tranquil lakes, and pleasant weather. Explore its lush greenery, take boat rides on Naini Lake, and visit nearby attractions like Naina Devi Temple and Snow View Point.",
        itinerary: [
          "2 Nights & 3 Days",
          "Accommodation",
          "Meals",
          "Sightseeing",
          "Boat Ride on Naini Lake",
        ],
        thingsToDo: [
          "Visit Naina Devi Temple",
          "Trek to Tiffin Top and Snow View Point",
          "Shopping at Mall Road",
          "Cable Car Ride to Snow View Point",
          "Visit Eco Cave Gardens",
        ],
      },
    },
    {
      andaman: {
        image: "/assets/andaman.jpeg",
        id: "4",
        name: "Andaman",
        path: "packages/andaman",
        about:
          "Andaman Islands are renowned for their pristine beaches, coral reefs, and diverse marine life. Explore its turquoise waters, go snorkeling, scuba diving, and relax on its sandy shores.",
        itinerary: [
          "6 Nights & 7 Days",
          "Accommodation",
          "Meals",
          "Sightseeing",
          "Snorkeling and Scuba Diving",
        ],
        thingsToDo: [
          "Visit Cellular Jail in Port Blair",
          "Explore Radhanagar Beach in Havelock Island",
          "Snorkel at Elephant Beach",
          "Visit Neil Island and Ross Island",
          "Witness Light and Sound Show at Cellular Jail",
        ],
      },
    },
    {
      kashmir: {
        image: "/assets/kashmir.jpeg",
        id: "5",
        name: "Kashmir",
        path: "packages/kashmir",
        about:
          "Known as 'Paradise on Earth', Kashmir is famous for its stunning valleys, snow-capped mountains, and serene lakes. Explore its Mughal Gardens, go trekking in the Himalayas, and experience its rich culture.",
        itinerary: [
          "4 Nights & 5 Days",
          "Accommodation",
          "Meals",
          "Sightseeing",
          "Shikara Ride on Dal Lake",
        ],
        thingsToDo: [
          "Visit Mughal Gardens (Shalimar Bagh, Nishat Bagh, Chashme Shahi)",
          "Explore Gulmarg and Pahalgam",
          "Enjoy Gondola Ride in Gulmarg",
          "Trek to Thajiwas Glacier",
          "Visit Shankaracharya Temple",
        ],
      },
    },
    {
      runofkutch: {
        image: "/assets/ruofkutch.jpeg",
        id: "6",
        name: "Ran of Kutch",
        path: "packages/runofkutch",
        about:
          "The Great Rann of Kutch is a vast salt marsh in Gujarat, known for its white desert landscape, colorful festivals, and traditional handicrafts. Explore its unique ecosystem, attend the Rann Utsav, and shop for Kutchi embroidery.",
        itinerary: [
          "3 Nights & 4 Days",
          "Accommodation",
          "Meals",
          "Sightseeing",
          "Cultural Performances",
        ],
        thingsToDo: [
          "Visit White Rann during Sunset",
          "Explore Kutchi Villages",
          "Attend Camel Safari",
          "Shop for Handicrafts at Dhordo Village",
          "Enjoy Traditional Music and Dance Performances",
        ],
      },
    },
    {
      "shimla-manali": {
        image: "/assets/shimla-manali.jpeg",
        id: "7",
        name: "Shimla Manali",
        path: "packages/shimla-manali",
        about:
          "Shimla and Manali are popular hill stations in Himachal Pradesh, known for their scenic beauty, snow-capped mountains, and adventure sports. Explore their lush greenery, go skiing in Solang Valley, and",
        itinerary: [
          "6 Nights & 7 Days",
          "Accommodation in Hill Resorts",
          "Meals",
          "Sightseeing",
          "Adventure Activities (Skiing, Paragliding)",
        ],
        thingsToDo: [
          "Visit The Ridge and Mall Road in Shimla",
          "Explore Kufri and Naldehra",
          "Visit Hadimba Temple and Vashisht Temple in Manali",
          "Trek to Jogini Waterfall",
          "Enjoy River Rafting in Beas River",
        ],
      },
    },
  ];

  const packageData: any= packagesData.find((packageObj) =>
    packageObj.hasOwnProperty(packageId)
  );
  if (!packageData) {
    return <div>Package not found</div>;
  }

  const { image, id, name, path, about, itinerary, thingsToDo } = packageData[packageId] 

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
        <Grid item>About</Grid>
        <Grid item>{about}</Grid>
        <Grid item>{itinerary}</Grid>
        <Grid item>{thingsToDo}</Grid>
      </Grid>
    </>
  );
}

export default PackageDetails;
