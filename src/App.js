import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhotoComponent";
import Favorites from "./components/Favorites";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={Home} path="/nasaapod" exact />
        <Route component={NasaPhoto} path="/nasaapod/nasaphotocomponent" />
        <Route component={Favorites} path="/nasaapod/favorites" />
      </div>
    </BrowserRouter>
  );
}

export default App;
