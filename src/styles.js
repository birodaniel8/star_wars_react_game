import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  itemBtn: {
    width: "90%",
  },
  headerBtn: {
    width: "100%",
  },
  cancelIconBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  cancelIcon: {
    "&:hover": {
      color: "rgba(207, 0, 15, 0.5)",
    },
  },
  gameCard: {
    boxShadow: "0px 0px 3px 3px rgba(250, 250, 250, 0.3)",
    overflow: "hidden",
    backgroundColor: "#f3f3f3",
  },
  gameCardTitle: {
    height: "50px",
    backgroundColor: "#e0bea4",
    marginBottom: "15px",
    marginTop: "-4px",
    paddingTop: "10px",
    fontSize: 20,
  },
  propertyCardTitle: {
    height: "25px",
    backgroundColor: "#F0EBBA",
    marginTop: "-16px",
    marginBottom: "10px",
    fontSize: 15,
  },
  header: {
    backgroundColor: "#f3f3f3",
    boxShadow: "0px 0px 3px 3px rgba(250, 250, 250, 0.3)",
    overflow: "hidden",
  },
  homeCard: {
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
  mainStartButton: {
    fontSize: 30,
    height: "70px",
    width: "350px",
    marginTop: "20px",
  },
  exploreStartButton: {
    width: "100%",
  },
  exploreButton: {
    fontSize: 20,
    height: "40px",
    width: "350px",
  },
  instructions: {
    justifyContent: "center",
    marginTop: "25px",
    color: "white",
    display: "flex",
    width: "60%",
    marginLeft: "20%",
  },
  instructionText: {
    textAlign: "left",
    marginTop: "10px",
    color: "black",
    marginLeft: "7%",
    width: "86%",
    backgroundColor: "rgba(250, 250, 250, 0.95)",
    padding: "10px",
    "& p": {
      lineHeight: 1.2,
      marginBottom: "10px",
    },
  },
});

export default useStyles;
