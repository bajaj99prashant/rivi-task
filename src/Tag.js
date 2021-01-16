import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { deleteCity } from "./actionCreators";
import CloseIcon from "@material-ui/icons/Close";
import { tagStyles } from "./cssObjects";

const useStyles = makeStyles(tagStyles);

function Tag(props) {
  const classes = useStyles();
  const onDelete = (city) => {
    props.delCity(city);
  };
  return (
    <div className={classes.root}>
      <span>{props.label}</span>
      <CloseIcon onClick={() => onDelete(props.label)} />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  delCity: (city) => dispatch(deleteCity(city)),
});

export default connect(null, mapDispatchToProps)(Tag);
