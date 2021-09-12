import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import IPark from "../../interfaces/park";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";

const Home = () => {
  const firestore = firebase.firestore();
  const parksRec = firestore.collection("parks");
  const query = parksRec.orderBy("name", "desc").limit(25);

  const [parks] = useCollectionData(query, { idField: "id" });

  return (
    <div>
      <Container maxWidth="sm">
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
      </Container>
    </div>
  );
};

export default Home;
