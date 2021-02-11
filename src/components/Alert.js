import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Alert = ({ children, color, toggle, isOpen, className }) => {
  const classes = classnames(className, {
    alert: true,
    [`alert-${color}`]: true,
    ['alert-dismissible']: toggle,
    fade: toggle,
    show: isOpen,
  })

  return (
    <div className={classes} role='alert'>
      {children}
      {toggle && (
        <button
          type='button'
          className='btn-close'
          data-bs-dismiss='alert'
          aria-label='Close'
        />
      )}
    </div>
  )
}

Alert.propTypes = {
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
  toggle: PropTypes.bool,
  isOpen: PropTypes.bool,
  className: PropTypes.string,
}

Alert.defaultProps = {
  color: 'primary',
  toggle: true,
  isOpen: true,
  className: '',
}

export default Alert
