import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Alert = ({ children, color, closable, className }) => {
  const classes = classnames(className, {
    alert: true,
    [`alert-${color}`]: true,
    ['alert-dismissible']: closable,
    fade: closable,
    show: closable,
  })

  return (
    <div className={classes} role='alert'>
      {children}
      {closable && (
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
  closable: PropTypes.bool,
  className: PropTypes.string,
}

Alert.defaultProps = {
  color: 'primary',
  closable: false,
  className: '',
}

export default Alert
