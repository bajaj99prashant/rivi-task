import {
  Box,
  Container,
  createMuiTheme,
  Grid,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import store from "./store";
import { Provider as ReduxProvider } from "react-redux";
import Activities from "./Activities";
import ListView from "./ListView";
import SearchBox from "./SearchBox";
import MontserratRegular from "./fonts/Montserrat-Regular.ttf";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  searchBox: {
    marginBottom: "2rem",
  },
  list: {
    height: "40vh",
    "@media (max-width: 568px)": {
      height: "40vh",
    },
  },
});

const monReg = {
  fontFamily: "MontserratRegular",
  fontWeight: 400,
  src: `url(${MontserratRegular})`,
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#585858",
    },
  },
  typography: {
    fontFamily: "MontserratRegular",
    fontSize: 18,
    h4: {
      fontSize: 24,
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [monReg],
        "*::-webkit-scrollbar": {
          padding: "1px",
        },
      },
    },
  },
});

function App() {
  const classes = useStyles();
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch("city.json")
      .then((res) => res.json())
      .then((data) => {
        if (data.cities.length > 0) {
          setCities(data.cities);
        }
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ReduxProvider store={store}>
        <Container maxWidth="md" className={classes.container}>
          <Box className={classes.searchBox}>
            <SearchBox cities={cities} />
          </Box>
          <Grid container spacing={4} justify="center">
            <Grid item sm={6} xs={12} className={classes.list}>
              <ListView cities={cities} />
            </Grid>
            <Grid item sm={6} xs={12} className={classes.list}>
              <Activities />
            </Grid>
          </Grid>
        </Container>
      </ReduxProvider>
    </ThemeProvider>
  );
}

export default App;
