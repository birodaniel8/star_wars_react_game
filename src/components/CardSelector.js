import React from "react";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import Character from "./cards/Character"

const CardSelector = ({selectedCard, data}) => {
  console.log(selectedCard.type)
  switch (selectedCard.type) {
    case "character":
      return <Character data={data} selected={selectedCard.id}/>;
    case "planet":
      return <div>This is a planet</div>
    default:
      return <div>Nothing has been selected</div>;
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
