import Container from "@material-ui/core/Container";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Park from "./pages/Park";
import Home from "./pages/Home";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

// import { useAuthState } from "react-firebase-hooks/auth";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDMnFtyneRpOV57L1TOKgdsa_dnv1Bw97M",
    authDomain: "parks-d86d7.firebaseapp.com",
    projectId: "parks-d86d7",
    storageBucket: "parks-d86d7.appspot.com",
    messagingSenderId: "777604440094",
    appId: "1:777604440094:web:c08d5255d9032794744e0f",
  });
} else {
  firebase.app(); // if already initialized, use that one
}

// const auth = firebase.auth();

const App = () => {
  return (
    <Router>
      <Container maxWidth="sm">
        <Switch>
          <Route path="/park/:id">
            <Park />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
