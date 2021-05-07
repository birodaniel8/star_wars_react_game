import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  itemBtn: {
    width: "90%",
  },
  gameCard: {
    boxShadow: '0px 0px 3px 3px rgba(250, 250, 250, 0.3)',
    overflow: 'hidden',
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
  },
  homeCard: {
    backgroundColor: "rgba(255, 255, 255, 0)"
  },
  mainStartButton: {
    fontSize: 30,
    height: "70px",
    width: "350px",
    marginTop: "20px",
  },
  gameTitle: {
  },
  exploreButton: {
    fontSize: 20  ,
    height: "40px",
    width: "350px",
  }
});

export default useStyles