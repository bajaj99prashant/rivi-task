import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { addCity } from "./actionCreators";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { searchBoxStyles } from "./cssObjects";
import Tag from "./Tag";

const useStyles = makeStyles(searchBoxStyles);

function SearchBox(props) {
  const classes = useStyles();
  // eslint-disable-next-line
  const [searchFunctions, setSearchFunctions] = useState({
    activeOption: 0,
    filteredOptions: [],
    userInput: "",
    showBorderColor: false,
    addTag: "",
  });

  useEffect(() => {
    if (searchFunctions.addTag !== "") {
      props.addCity(searchFunctions.addTag);
      setSearchFunctions({
        ...searchFunctions,
        showBorderColor: false,
        addTag: "",
      });
    }
  }, [searchFunctions.addTag]);

  const handleInputChange = (e) => {
    if (e.target.value !== "") {
      const inputValue = e.target.value;
      const filteredOptions = props.cities.filter(
        (option) =>
          option.name.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
      );
      setSearchFunctions({
        ...searchFunctions,
        userInput: inputValue,
        filteredOptions: filteredOptions,
        showBorderColor: true,
        activeOption: 0,
      });
    } else if (e.target.value === "") {
      setSearchFunctions({
        ...searchFunctions,
        userInput: "",
        filteredOptions: [],
        showBorderColor: false,
        activeOption: 0,
      });
    }
  };

  const handleKeyChanges = (e) => {
    if (e.keyCode === 13 && searchFunctions.userInput !== "") {
      setSearchFunctions({
        ...searchFunctions,
        addTag: searchFunctions.filteredOptions[
          searchFunctions.activeOption - 1
        ]
          ? searchFunctions.filteredOptions[searchFunctions.activeOption - 1]
              .name
          : searchFunctions.userInput,
        filteredOptions: [],
        activeOption: 0,
        userInput: "",
      });
    } else if (e.keyCode === 38) {
      if (searchFunctions.activeOption === 0) {
        return;
      }
      setSearchFunctions({
        ...searchFunctions,
        activeOption: searchFunctions.activeOption - 1,
      });
    } else if (e.keyCode === 40) {
      if (
        searchFunctions.activeOption === searchFunctions.filteredOptions.length
      ) {
        return;
      }
      setSearchFunctions({
        ...searchFunctions,
        activeOption: searchFunctions.activeOption + 1,
      });
    }
  };

  // omitting the rest of the render function for brevity
  return (
    <div className={classes.root}>
      <div
        className={`${classes.box} ${
          searchFunctions.showBorderColor
            ? classes.boxWithBorder
            : classes.boxWithoutBorder
        }`}
      >
        {props.selectedCities.length > 0
          ? props.selectedCities.map((city) => (
              <Tag key={city.toLowerCase().split(" ").join("")} label={city} />
            ))
          : null}
        <TextField
          className={classes.textfield}
          placeholder="search city"
          value={searchFunctions.userInput}
          onChange={(e) => handleInputChange(e)}
          onKeyDown={(e) => handleKeyChanges(e)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon color="primary" />
              </InputAdornment>
            ),
            disableUnderline: true,
          }}
        />
      </div>
      <div className={classes.searchOptions}>
        {searchFunctions.filteredOptions.length > 0
          ? searchFunctions.filteredOptions.map((obj, index) => (
              <div
                key={obj.id}
                className={`${classes.option} ${
                  searchFunctions.activeOption - 1 === index
                    ? classes.optionFocus
                    : ""
                }`}
              >
                {obj.name}
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

const mapStateToProps = ({ city }) => ({
  selectedCities: city,
});

const mapDispatchToProps = (dispatch) => ({
  addCity: (city) => dispatch(addCity(city)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
