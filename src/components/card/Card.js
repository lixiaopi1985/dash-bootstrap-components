import React from 'react';
import PropTypes from 'prop-types';
import {Card as RSCard} from 'reactstrap';

const Card = props => {
  const {children, ...otherProps} = props;
  return <RSCard {...otherProps}>{children}</RSCard>;
};

Card.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: PropTypes.string,

  /**
   * The children of this component
   */
  children: PropTypes.node,

  /**
   * Defines CSS styles which will override styles previously set.
   */
  style: PropTypes.object,

  /**
   * Often used with CSS to style elements with common properties.
   */
  className: PropTypes.string,

  /**
   * A unique identifier for the component, used to improve
   * performance by React.js while rendering components
   * See https://reactjs.org/docs/lists-and-keys.html for more info
   */
  key: PropTypes.string,

  /**
   * Card color, options: primary, secondary, success, info, warning, danger,
   * light, dark. Default is light.
   */
  color: PropTypes.string,

  /**
   * Apply the `card-body` class to the card, so that there is no need to also
   * include a CardBody component in the children of this Card. Default: False
   */
  body: PropTypes.bool,

  /**
   * Apply color styling to just the border of the card.
   */
  outline: PropTypes.bool,

  /**
   * Invert text colours for use with a darker background.
   */
  inverse: PropTypes.bool
};

export default Card;
