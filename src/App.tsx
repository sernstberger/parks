import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

interface Park {
  id: string;
  name: string;
  body: string;
}

const parks: Park[] = [
  {
    id: "yosemite",
    name: "Yosemite National Park",
    body: "Yosemite National Park (/joʊˈsɛm.ɪ.ti/ yoh-SEM-ih-tee)[4][5] is an American national park in Northern California,[6][7] surrounded on the southeast by Sierra National Forest and on the northwest by Stanislaus National Forest.",
  },
  {
    id: "yellowstone",
    name: "Yellowstone National Park",
    body: "Yellowstone National Park is an American national park located in the western United States, largely in the northwest corner of Wyoming and extending into Montana and Idaho.",
  },
];

export default function App() {
  return (
    <Router>
      <Container maxWidth="sm">
        <Switch>
          <Route path="/park/:id">Park</Route>
          <Route path="/">Home</Route>
        </Switch>

        {parks.map((park: Park) => {
          return (
            <Box my={4}>
              <Typography variant="h4" component="h1" gutterBottom>
                {park.name}
              </Typography>
              <Typography>{park.body}</Typography>
              <Link to={`/park/${park.id}`}>Go</Link>
            </Box>
          );
        })}
      </Container>
    </Router>
  );
}
