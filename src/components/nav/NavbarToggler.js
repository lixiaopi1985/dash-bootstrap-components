import React from 'react';
import PropTypes from 'prop-types';
import {NavbarToggler as RSNavbarToggler} from 'reactstrap';

const NavbarToggler = props => {
  const {children, ...otherProps} = props;
  return (
    <RSNavbarToggler
      onClick={() => {
        if (props.setProps) {
          props.setProps({
            n_clicks: props.n_clicks + 1,
            n_clicks_timestamp: Date.now()
          });
        }
      }}
      {...otherProps}
    >
      {children}
    </RSNavbarToggler>
  );
};

NavbarToggler.defaultProps = {
  n_clicks: 0,
  n_clicks_timestamp: -1
};

NavbarToggler.propTypes = {
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
   * Toggle type, default: button.
   */
  type: PropTypes.string,

  /**
   * An integer that represents the number of times
   * that this element has been clicked on.
   */
  n_clicks: PropTypes.number,

  /**
   * An integer that represents the time (in ms since 1970)
   * at which n_clicks changed. This can be used to tell
   * which button was changed most recently.
   */
  n_clicks_timestamp: PropTypes.number
};

export default NavbarToggler;
