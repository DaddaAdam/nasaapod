import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import StarIcon from "@material-ui/icons/Star";
import { Grid, Container, Paper } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Toolbar from "@material-ui/core/Toolbar";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

const useStyles = makeStyles((theme) => ({
  img: {
    position: "relative",
    width: "100%",
    height: "auto",
    display: "inline",
  },
  date: {
    position: "relative",
    flexGrow: 1,
    bottom: theme.spacing(2),
  },
  favIcon: {
    position: "relative",
  },
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

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
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

const defaultProps = {
  bgcolor: "background.paper",
  m: 1,
  border: 1,
};

const removeFromFavorites = (photoDataParameter) => {
  let favoritesArray = [];

  /* 
    On utilise JSON.parse par ce que la clé est stockée sous forme de string
  et on a besoin de la convertir on objet JSON 
  */
  let previousData = JSON.parse(localStorage.getItem("favorites"));

  /*
    Si previousData est différent de null, c'est qu'on a des objets en favoris
  On les rajoute donc à la liste 
  */
  if (previousData) favoritesArray = previousData;

  function alreadyExists(arrayElement) {
    return arrayElement.url === photoDataParameter.url;
  }

  favoritesArray.splice(favoritesArray.findIndex(alreadyExists), 1);

  localStorage.setItem("favorites", JSON.stringify(favoritesArray));
};

export default function Favorites(props) {
  const [isFavorite, setIsFavorite] = useState(true);
  const classes = useStyles();

  let isDarkTheme = window.localStorage.getItem("isDarkTheme") === String(true);
  const [darkMode, setDarkMode] = useState(isDarkTheme);

  const theme = createMuiTheme({
    palette: {
      type: darkMode ? "dark" : "light",
    },
  });

  let favoritesArray = [];
  let previousData = JSON.parse(localStorage.getItem("favorites"));
  if (previousData) favoritesArray = previousData;

  if (!favoritesArray)
    return (
      <Typography variant="h1" align="center" color="textPrimary">
        Aucun favoris pour le moment...
      </Typography>
    );

  return (
    <div>
      <React.Fragment className={classes.nphoto}>
        <CssBaseline />
        <ThemeProvider theme={theme} className={classes.root}>
          <Paper elevation={3} className={classes.root}>
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
              </Toolbar>
            </AppBar>
            <Toolbar id="back-to-top-anchor">
              <div className={classes.buttonGroup}>
                <ButtonGroup
                  variant="text"
                  color="primary"
                  aria-label="text primary button group"
                >
                  <Button component={Link} to="/nasaapod">
                    <Typography variant="h5">HomePage</Typography>
                  </Button>
                  <Button>
                    <Typography variant="h5">Favorites</Typography>
                  </Button>
                </ButtonGroup>
              </div>
            </Toolbar>
            <div className={classes.root}>
              {/* Je crée un tableau de taille 10 et je boucle à travers
          afin de faire le rendu de ce composant 10 fois */}

              {/* Les favoris iront ici */}
              {favoritesArray.map((photoData) => {
                return (
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
                        <div className={classes.root}>
                          <div className={classes.root}>
                            {/* Titre et date de la photo */}
                            <Typography
                              variant="h2"
                              align="center"
                              color="textPrimary"
                            >
                              {photoData.title}
                            </Typography>
                            {/* Bouton favoris */}
                            <IconButton
                              edge="end"
                              color="inherit"
                              size="medium"
                              className={classes.favIcon}
                              onClick={() => {
                                if (isFavorite) {
                                  removeFromFavorites(photoData);
                                  setIsFavorite(!isFavorite); //Pour forcer à re-render la page
                                }
                              }}
                            >
                              {photoData.isFavorite ? (
                                <StarIcon />
                              ) : (
                                <StarBorderOutlinedIcon />
                              )}
                            </IconButton>
                            <Typography
                              variant="body1"
                              align="center"
                              className={classes.date}
                            >
                              {photoData.date}
                            </Typography>
                          </div>
                          {/*Parfois l'API peut nous retourner une vidéo au lieu d'une photo
                      On rajoute donc une condition pour gérer les cas où on reçoit une vidéo */}
                          {photoData.media_type === "image" ? (
                            <img
                              src={photoData.url}
                              alt={photoData.title}
                              className={classes.img}
                            />
                          ) : (
                            <iframe
                              title={photoData.title}
                              src={photoData.url}
                              frameBorder="0"
                              gesture="media"
                              allow="encrypted-media"
                              allowFullScreen
                              className={classes.img}
                            />
                          )}
                          <div>
                            {/* Description de la photo */}
                            <Typography
                              variant="h5"
                              align="center"
                              color="textSecondary"
                              paragraph
                            >
                              {photoData.explanation}
                            </Typography>
                          </div>
                        </div>
                      </Box>
                    </Grid>
                  </Container>
                );
              })}
            </div>
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
    </div>
  );
}
