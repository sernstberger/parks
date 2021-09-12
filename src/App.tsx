import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Yosemite National Park
        </Typography>
        <Typography>
          Yosemite National Park (/joʊˈsɛm.ɪ.ti/ yoh-SEM-ih-tee)[4][5] is an
          American national park in Northern California,[6][7] surrounded on the
          southeast by Sierra National Forest and on the northwest by Stanislaus
          National Forest. The park is managed by the National Park Service and
          covers an area of 759,620 acres (1,187 sq mi; 3,074 km2)[2] and sits
          in four counties: centered in Tuolumne and Mariposa, extending north
          and east to Mono and south to Madera County. Designated a World
          Heritage Site in 1984, Yosemite is internationally recognized for its
          granite cliffs, waterfalls, clear streams, giant sequoia groves,
          lakes, mountains, meadows, glaciers, and biological diversity.[8]
          Almost 95% of the park is designated wilderness.[9]
        </Typography>
      </Box>
    </Container>
  );
}
