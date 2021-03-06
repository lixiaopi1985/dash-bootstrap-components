import React from 'react';
import PropTypes from 'prop-types';
import {CardSubtitle as RSCardSubtitle} from 'reactstrap';
import classNames from 'classnames';

const CardSubtitle = props => {
  const {children, className, color, ...otherProps} = props;
  const classes = classNames(className, color && `text-${color}`);
  return (
    <RSCardSubtitle className={classes} {...otherProps}>
      {children}
    </RSCardSubtitle>
  );
};

CardSubtitle.propTypes = {
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
   * HTML tag to use for the card subtitle, default: h6
   */
  tag: PropTypes.string,

  /**
   * Text color, options: primary, secondary, success, warning, danger, info,
   * muted, light, dark, body, white, black-50, white-50.
   */
  color: PropTypes.string
};

export default CardSubtitle;
