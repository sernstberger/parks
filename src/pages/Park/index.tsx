import React, { useEffect, useState } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { useParams } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

const Park = () => {
  const { id } = useParams<any>();

  const [selectedItem, setSelectedItem] = useState<any>(undefined);

  // const { data, error, isLoading } = useGetCartItemsByNameQuery("bulbasaur");
  // const { name, id, estimate, image, origin } = props;

  const firestore = firebase.firestore();
  const parkRef = () =>
    firestore
      .collection("parks")
      .doc(id)
      .get()
      .then((docRef) => {
        setSelectedItem(docRef.data());
        // console.log("!!!!***2", docRef.data());
      })
      .catch((error) => {});

  useEffect(() => {
    parkRef();
  }, []);

  return (
    <Box my={4}>
      {selectedItem && (
        <div>
          <Typography variant="h4" component="h1" gutterBottom>
            {selectedItem.name}
          </Typography>
          <Typography>{selectedItem.body}</Typography>
        </div>
      )}
    </Box>
  );
};

export default Park;
