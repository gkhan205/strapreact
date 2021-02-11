import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Badge = ({ children, color, rounded, className }) => {
  const classes = classnames(className, 'badge', `bg-${color}`, {
    [`text-dark`]: color === 'warning' || color === 'light' || color === 'info',
    [`rounded-pill`]: rounded,
  })

  return <span className={classes}>{children}</span>
}

Badge.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
    'info',
    'light',
    'dark',
  ]),
  children: PropTypes.node,
  className: PropTypes.string,
  rounded: PropTypes.bool,
}

Badge.defaultProps = {
  color: 'primary',
  className: '',
  rounded: false,
}

export default Badge
