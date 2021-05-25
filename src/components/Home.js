import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import NasaPhoto from "./NasaPhotoComponent";
import { Grid, Container, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import { Typography } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

/* Avec la fonction makeStyles, on peut créer des objets qui
vont contenir des propriétés css, qu'on peut en suite
appliquer aux composants avec la propriété className */
const useStyles = makeStyles((theme) => ({
  root: {
    position: "sticky",
    maxWidth: "100%",
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    width: "100%",
  },
  scrollBackTop: {
    position: "relative",
    bottom: theme.spacing(6),
  },
  nphoto: {
    width: "100%",
  },
  buttonGroup: {
    display: "flex",
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "center",

    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const defaultProps = {
  bgcolor: "background.paper",
  m: 1,
  border: 1,
};

function ScrollTop(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation">
        {children}
      </div>
    </Zoom>
  );
}

export default function Home(props) {
  /*Le but c'est de stocker une variable dans le cache du navigateur
  pour mémoriser le choix de l'utilisateur en ce qui concerne la couleur du theme*/
  let isDarkTheme = window.localStorage.getItem("isDarkTheme") === String(true);

  const [darkMode, setDarkMode] = useState(isDarkTheme);
  //useState est un Hook d'état qui permet d'initialiser la page au thème sauvegardé dans le cache

  const classes = useStyles();
  /* on instancie l'objet dans lequel nos propriétés css sont stockées */

  /*Material UI permet d'appliquer directement des thèmes sur ses
  composants, il suffit juste de les stocker dans une variable d'état
  et de la passer en attribut d'une balise ThemeProvider*/
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  return (
    <React.Fragment className={classes.nphoto}>
      <CssBaseline />
      {/* ThemeProvider permet d'appliquer des themes sur les balises filles */}
      <ThemeProvider theme={theme} className={classes.root}>
        {/* La balise paper permet d'avoir un arrière plan opaque avec des bordures*/}
        <Paper elevation={3} className={classes.root}>
          {/*elevation représente l'ombre*/}
          <AppBar position="sticky">
            <Toolbar className={classes.appbar}>
              <IconButton
                edge="start"
                color="inherit"
                onClick={() => {
                  setDarkMode(!darkMode);
                  localStorage.setItem("isDarkTheme", String(!darkMode));
                }}
              >
                {darkMode ? <BrightnessHighIcon /> : <Brightness4Icon />}
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                {`Toggle ${darkMode ? "light" : "dark"} mode`}
              </Typography>
              <Button
                color="inherit"
                onClick={() => {
                  window.location.reload();
                }}
              >
                <Typography>Load more</Typography>
              </Button>
            </Toolbar>
          </AppBar>
          <Toolbar id="back-to-top-anchor">
            <div className={classes.buttonGroup}>
              <ButtonGroup
                variant="text"
                color="primary"
                aria-label="text primary button group"
              >
                <Button component={Link}>
                  <Typography variant="h5">HomePage</Typography>
                </Button>
                <Button component={Link} to="/nasaapod/favorites">
                  <Typography variant="h5">Favorites</Typography>
                </Button>
              </ButtonGroup>
            </div>
          </Toolbar>
          <div className={classes.root}>
            {/* Je crée un tableau de taille 10 et je boucle à travers
          afin de faire le rendu de ce composant 10 fois */}
            {[...Array(10)].map((x, i) => (
              <Container maxWidth="md">
                <Grid
                  wrap="noWrap"
                  container
                  spacing={12}
                  className={classes.nphoto}
                >
                  {/* Le composant box est responsable de tout ce qui concerne
                les bordures des cartes, leur taille, angles, couleur... */}
                  <Box
                    mx="auto"
                    border={2}
                    boxShadow={3}
                    borderColor="grey.500"
                    {...defaultProps}
                    borderRadius={16}
                    {...defaultProps}
                  >
                    {/* Le composant qui contient les photos */}
                    <NasaPhoto />
                  </Box>
                </Grid>
              </Container>
            ))}
          </div>
          {/* Bouton rouge en bas de page qui ramène en début de page */}
          <ScrollTop {...props}>
            <Fab
              color="secondary"
              size="medium"
              aria-label="scroll back to top"
              className={classes.scrollBackTop}
            >
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </Paper>
      </ThemeProvider>
    </React.Fragment>
  );
}
