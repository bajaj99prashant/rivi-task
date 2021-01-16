import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { boxStyles } from "./cssObjects";
import { connect } from "react-redux";

const useStyles = makeStyles(boxStyles);

function ListView(props) {
  const classes = useStyles();

  return (
    <Box className={classes.box} m="2" component="div">
      {props.selectedCities.length > 0
        ? props.selectedCities.map((city) => (
            <Typography
              variant="h4"
              color="primary"
              className={classes.text}
              key={city.toLowerCase().split(" ").join("")}
            >
              {city}
            </Typography>
          ))
        : props.cities.map((city) => (
            <Typography
              variant="h4"
              color="primary"
              className={classes.text}
              key={city.id}
            >
              {city.name}
            </Typography>
          ))}
    </Box>
  );
}

const mapStateToProps = ({ city }) => ({
  selectedCities: city,
});

export default connect(mapStateToProps)(ListView);
