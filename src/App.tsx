import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Park from "./pages/Park";
import parks from "./data";
import IPark from "./interfaces/park";

const App = () => {
  return (
    <Router>
      <Container maxWidth="sm">
        <Switch>
          <Route path="/park/:id">
            <Park />
          </Route>
          <Route path="/" exact>
            {parks.map((park: IPark) => {
              return (
                <Box my={4} key={park.id}>
                  <Typography variant="h4" component="h1" gutterBottom>
                    {park.name}
                  </Typography>
                  <Link to={`/park/${park.id}`}>Go</Link>
                </Box>
              );
            })}
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
