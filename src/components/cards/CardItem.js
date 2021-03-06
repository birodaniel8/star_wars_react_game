import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { Button, Grid } from "@material-ui/core";

import { useStyles } from "../../styles";
import sampleWithoutReplacement from "../SampleWithoutReplacement";
import { setCard } from "../../actions/card";

const getByURL = (propertyItemList, url, fieldName = "name") => {
  // returns the item's fieldName value given by the url
  return propertyItemList.filter((item) => item.url === url)[0][fieldName];
};

const CardItem = ({ item, property, propertyName, propertyItemList, fieldName, setCard, setCardType }) => {
  const classes = useStyles();

  // propertyName formatting:
  if (!propertyName) {
    propertyName = property.charAt(0).toUpperCase() + property.slice(1);
  }
  propertyName = propertyName.replace(/_/g, " ");

  const renderButton = () => {
    if (propertyItemList) {
      if (Array.isArray(item[property])) {
        // if the property is an array of urls (eg. list of movie urls):
        const sampledItems = sampleWithoutReplacement(item[property], 5);
        return sampledItems.map((i, idx) => {
          const name = getByURL(propertyItemList, i, fieldName);
          return (
            <Button
              key={`${property}_${idx}`}
              className={classes.itemButton}
              variant="contained"
              onClick={() => setCard(setCardType, name)}
            >
              {name}
            </Button>
          );
        });
      }
      // if the property is a single url:
      const name = getByURL(propertyItemList, item[property], fieldName);
      return (
        <Button
          key={property}
          className={classes.itemButton}
          variant="contained"
          onClick={() => setCard(setCardType, name)}
        >
          {name}
        </Button>
      );
    }
    // if the property is a string with a list of comma separated characteristics:
    const splittetProperty = item[property].split(", ");
    if (splittetProperty.length > 1) {
      return splittetProperty.map((sp, idx) => (
        <Button
          key={`${property}_${idx}`}
          className={classes.itemButton}
          variant="contained"
          onClick={() => setCard(setCardType, sp, { property: property, fieldName: fieldName })}
        >
          {sp}
        </Button>
      ));
    }

    // if the property is a single value:
    return (
      <Button
        key={property}
        className={classes.itemButton}
        variant="contained"
        onClick={() => setCard(setCardType, item[property], { property: property, fieldName: fieldName })}
      >
        {item[property]}
      </Button>
    );
  };

  // rendering the item if the item[property] is available:
  if (item[property] && item[property] !== "unknown" && item[property] !== "n/a" && item[property].length > 0) {
    return (
      <Grid container spacing={1} style={{ marginBottom: "3px" }}>
        <Grid item xs={5} align="right" style={{ paddingTop: "10px" }}>
          <b>{propertyName}:</b>
        </Grid>
        <Grid item xs={7} align="left">
          {renderButton()}
        </Grid>
      </Grid>
    );
  }
  return <div></div>;
};

// PropTypes:
CardItem.propTypes = {
  item: PropTypes.object.isRequired,
  property: PropTypes.string.isRequired,
  propertyName: PropTypes.string,
  propertyItemList: PropTypes.array,
  fieldName: PropTypes.string,
  setCard: PropTypes.func.isRequired,
  setCardType: PropTypes.string,
};

CardItem.defaultProps = {
  propertyName: null,
  propertyItemList: null,
  fieldName: "name",
  setCardType: "property",
};

export default connect(null, { setCard })(CardItem);
