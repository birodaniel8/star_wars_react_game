import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import Character from "./cards/Character";
import Planet from "./cards/Planet";
import Movie from "./cards/Movie";
import Species from "./cards/Species";
import Spaceship from "./cards/Spaceship";
import Vehicle from "./cards/Vehicle";

const CardSelector = ({ selectedCard, data }) => {
  if (!selectedCard.propertyCard) {
    switch (selectedCard.type) {
      case "character":
        return <Character name={selectedCard.name} />;
      case "planet":
        return <Planet name={selectedCard.name} />;
      case "movie":
        return <Movie name={selectedCard.name} />;
      case "species":
        return <Species name={selectedCard.name} />;
      case "spaceship":
        return <Spaceship name={selectedCard.name} />;
      case "vehicle":
        return <Vehicle name={selectedCard.name} />;
      default:
        return <div>Nothing has been selected</div>;
    }
  } else {
    return <div>This is a property card</div>;
  }
};

// PropTypes:
CardSelector.propTypes = {
  selectedCard: PropTypes.object.isRequired,
};

// mapStateToProps:
const mapStateToProps = (state) => ({
  selectedCard: state.card.selectedCard,
  data: state.data.data,
});

export default connect(mapStateToProps, {})(CardSelector);
