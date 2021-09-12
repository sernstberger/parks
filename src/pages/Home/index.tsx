import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
// import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import IPark from "../../interfaces/park";
// import { initializeApp } from 'firebase/app';
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Link } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyDMnFtyneRpOV57L1TOKgdsa_dnv1Bw97M",
  authDomain: "parks-d86d7.firebaseapp.com",
  projectId: "parks-d86d7",
  storageBucket: "parks-d86d7.appspot.com",
  messagingSenderId: "777604440094",
  appId: "1:777604440094:web:c08d5255d9032794744e0f",
};

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const db: any = getFirestore(app);

const Home = () => {
  // const [parks, setParks] = useState<any[]>([]);

  // useEffect(async() => {
  //   // const foo = getParks(db);

  //   // async function getParks(what: any) {
  //     const parksCol = collection(db, "parks");
  //     const parkSnapshot = await getDocs(parksCol);
  //     const parkList = parkSnapshot.docs.map((doc) => doc.data());
  //     console.log(parkList);

  //   // }

  //   setParks(parkList);
  // }, []);



  const firestore = firebase.firestore();
  const parksRec = firestore.collection("parks");
  const query = parksRec.orderBy("name", "desc").limit(25);

  const [parks] = useCollectionData(query, { idField: "id" });

  return (
    <div>
      {parks &&
        // @ts-ignore
        parks.map((park: IPark) => {
          return (
            <Box my={4} key={park.id}>
              <Typography variant="h4" component="h1" gutterBottom>
                {park.name}
              </Typography>
              <Link to={`/park/${park.id}`}>Go</Link>
            </Box>
          );
        })}
    </div>
  );
};

export default Home;
