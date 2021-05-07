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
  }
});

export default useStyles