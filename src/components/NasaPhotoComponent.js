import React from "react";
import { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },
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
}));

const removeDuplicates = (favoritesArray) => {
  let q = [
    ...new Map(
      favoritesArray.map((obj) => [JSON.stringify(obj), obj])
    ).values(),
  ];

  return q;
};

const addToFavorites = (photoDataParameter) => {
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

  /* On stocke les propriétés du nouveau favoris dans le tableau */
  favoritesArray.push({
    title: photoDataParameter.title,
    date: photoDataParameter.date,
    media_type: photoDataParameter.media_type,
    url: photoDataParameter.url,
    explanation: photoDataParameter.explanation,
    isFavorite: true,
  });

  favoritesArray = removeDuplicates(favoritesArray);

  /* 
      On enregistre les modifications dans le cache

      On utilise la méthode JSON.stringify() par ce que le cache
    fonctionne par un système de key: value, on doit donc donner
    à la clé "favorites" une seule et unique valeur sous forme de string
  */
  localStorage.setItem("favorites", JSON.stringify(favoritesArray));
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

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);
  const api_key = "rxtd7YyfZkoVoCorbjbuOnWptyDoP7alg8ULJxG4";
  const [isFavorite, setIsFavorite] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    fetchPhoto();

    /*
        On utilise async await ici puisque la fonction fetch() nous retourne une promesse
        Ça permet donc de raccourcir le code
     */
    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=1`
      );

      const data = await res.json();
      setPhotoData(data);
    }
  }, []);

  if (!photoData) return <div />;

  return (
    <>
      <div className={classes.root}>
        <div className={classes.root}>
          {/* Titre et date de la photo */}
          <Typography variant="h2" align="center" color="textPrimary">
            {photoData[0].title}
          </Typography>
          {/* Bouton favoris */}
          <IconButton
            edge="end"
            color="inherit"
            size="medium"
            className={classes.favIcon}
            onClick={() => {
              if (isFavorite === false) addToFavorites(photoData[0]);
              else removeFromFavorites(photoData[0]);

              setIsFavorite(!isFavorite);
            }}
          >
            {isFavorite ? <StarIcon /> : <StarBorderOutlinedIcon />}
          </IconButton>
          <Typography variant="body1" align="center" className={classes.date}>
            {photoData[0].date}
          </Typography>
        </div>
        {/*Parfois l'API peut nous retourner une vidéo au lieu d'une photo
      On rajoute donc une condition pour gérer les cas où on reçoit une vidéo */}
        {photoData[0].media_type === "image" ? (
          <img
            src={photoData[0].url}
            alt={photoData[0].title}
            className={classes.img}
          />
        ) : (
          <iframe
            title={photoData[0].title}
            src={photoData[0].url}
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
            {photoData[0].explanation}
          </Typography>
        </div>
      </div>
    </>
  );
}
