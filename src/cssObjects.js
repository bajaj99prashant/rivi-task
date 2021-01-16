export const boxStyles = {
  box: {
    background: "#e8e8e8",
    height: "100%",
    padding: "0.5rem 1rem",
    overflowY: "scroll",
    scrollbarWidth: "thin",
    scrollbarColor: "#a8a8a8 transparent",
  },
  text: {},
};

export const searchBoxStyles = {
  root: {
    width: "100%",
    position: "relative",
  },
  box: {
    width: "100%",
    padding: "0.5rem",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    transition: "border 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;",
  },
  boxWithoutBorder: {
    border: "4px solid #e8e8e8",
  },
  boxWithBorder: {
    border: "4px solid #edf6ff",
  },
  textfield: {
    color: "#585858",
    flexGrow: 1,
    padding: "0 4px",
  },
  searchOptions: {
    backgroundColor: "#edf6ff",
    maxHeight: "30vh",
    overflowY: "scroll",
    zIndex: "1",
    position: "absolute",
    width: "100%",
    scrollbarWidth: "thin",
    scrollbarColor: "#a8a8a8 #edf6ff",
    "& > div": {
      borderBottom: "2px solid #fff",
    },
    "& :last-child": {
      borderBottom: "0px solid #fff",
    },
  },
  option: {
    width: "calc(100% - 3px)",
    padding: "1rem",
    backgroundColor: "#edf6ff",
    color: "#585858",
    fontSize: "1.5rem",
    marginLeft: "3px",
    cursor: "pointer",
  },
  optionFocus: {
    backgroundColor: "#e8e8e8",
  },
};

export const tagStyles = {
  root: {
    display: "flex",
    alignItems: "center",
    margin: "2px 0.5rem",
    lineHeight: "22px",
    backgroundColor: "#edf6ff",
    border: "1px solid #e8e8e8",
    borderRadius: "2px",
    padding: "0.2rem 0 0.2rem 0.3rem",
    color: "#585858",
    "& span": {
      fontSize: "1.3rem",
      marginRight: "1rem",
    },
    "& svg": {
      fontSize: "32px",
      cursor: "pointer",
      padding: "4px",
    },
  },
};
