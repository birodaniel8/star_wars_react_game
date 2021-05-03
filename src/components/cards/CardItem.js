import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Button, Grid } from "@material-ui/core";

import { setCard } from "../../actions/card";

const getByURL = (itemList, url, fieldName = "name") => {
  return itemList.filter((item) => item.url === url)[0][fieldName];
};

const CardItem = ({ setCard, item, property, propertyName, itemList, fieldName, setCardType }) => {
  if (!propertyName) {
    propertyName = property.charAt(0).toUpperCase() + property.slice(1);
  }
  propertyName = propertyName.replace(/_/g, " ");

  const renderButton = () => {
    if (item[property] !== "unknown" && item[property] !== "n/a") {
      if (itemList) {
        if (Array.isArray(item[property])) {
          // if the property is an empty array for species property then set it to Human:
          if (property === "species" && item[property].length === 0) {
            return (
              <Button variant="contained" onClick={() => setCard(setCardType, "Human")}>
                Human
              </Button>
            );
          }
          // if the property is an array of urls (eg. list of movie urls):
          return item[property].map((i) => {
            const name = getByURL(itemList, i, fieldName);
            return (
              <Button variant="contained" onClick={() => setCard(setCardType, name)}>
                {name}
              </Button>
            );
          });
        }
        // if the property is a single url:
        const name = getByURL(itemList, item[property], fieldName);
        return (
          <Button variant="contained" onClick={() => setCard(setCardType, name)}>
            {name}
          </Button>
        );
      }
      // if the property is a string with a list of comma separated characteristics:
      const splittetProperty = item[property].split(", ");
      if (splittetProperty.length > 1) {
        return splittetProperty.map((sp) => <Button variant="contained">{sp}</Button>);
      }

      // if the property is a single value:
      return <Button variant="contained">{item[property]}</Button>;
    }
    return <div></div>;
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={5} align="right">
        <b>{propertyName}:</b>
      </Grid>
      <Grid item xs={7} align="left">
        {renderButton()}
      </Grid>
    </Grid>
  );
};

// PropTypes:
CardItem.propTypes = {
  item: PropTypes.object.isRequired,
  property: PropTypes.string.isRequired,
  propertyName: PropTypes.string,
  itemList: PropTypes.array,
  fieldName: PropTypes.string,
  setCardType: PropTypes.string,
};

CardItem.defaultProps = {
  propertyName: null,
  itemList: null,
  fieldName: "name",
  setCardType: null,
};

// mapStateToProps:
const mapStateToProps = (state) => ({
  data: state.data.data,
});

export default connect(mapStateToProps, { setCard })(CardItem);
