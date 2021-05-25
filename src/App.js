import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import NasaPhoto from "./components/NasaPhotoComponent";
import Favorites from "./components/Favorites";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={Home} path="/" exact />
        <Route component={NasaPhoto} path="/nasaphotocomponent" />
        <Route component={Favorites} path="/favorites" />
      </div>
    </BrowserRouter>
  );
}

export default App;
