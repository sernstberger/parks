import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import App from "./App";
import theme from "./theme";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDMnFtyneRpOV57L1TOKgdsa_dnv1Bw97M",
  authDomain: "parks-d86d7.firebaseapp.com",
  projectId: "parks-d86d7",
  storageBucket: "parks-d86d7.appspot.com",
  messagingSenderId: "777604440094",
  appId: "1:777604440094:web:c08d5255d9032794744e0f",
};

const app = initializeApp(firebaseConfig);
const db: any = getFirestore(app);

async function getParks(what: any) {
  const parksCol = collection(what, "parks");
  const parkSnapshot = await getDocs(parksCol);
  const parkList = parkSnapshot.docs.map((doc) => doc.data());
  console.log(parkList);
  return parkList;
}

getParks(db);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.querySelector("#root")
);
