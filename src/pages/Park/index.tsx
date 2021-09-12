import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import parks from "../../data";
import { useParams } from "react-router-dom";

const Park = () => {
  const { id } = useParams<any>();
  const selectedPark: any = parks.find((bar) => bar.id === id);
  const { name, body } = selectedPark;

  return (
    <Box my={4}>
      <Typography variant="h4" component="h1" gutterBottom>
        {name}
      </Typography>
      <Typography>{body}</Typography>
    </Box>
  );
};

export default Park;
