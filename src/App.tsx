import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

interface Park {
  name: string;
  body: string;
}

const parks: Park[] = [
  {
    name: "Yosemite National Park",
    body: "Yosemite National Park (/joʊˈsɛm.ɪ.ti/ yoh-SEM-ih-tee)[4][5] is an American national park in Northern California,[6][7] surrounded on the southeast by Sierra National Forest and on the northwest by Stanislaus National Forest.",
  },
];

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          {parks[0].name}
        </Typography>
        <Typography>{parks[0].body}</Typography>
      </Box>
    </Container>
  );
}
