import React from 'react'
import PropTypes from "prop-types"

const Button = ({ color, lang, meta, text }) => {
  return (
    <>
      <button type="button" className={`btn btn-${color}`}>
        { text }
      </button>
    </>
  )
}

Button.defaultProps = {
  color: `primary`,
  text: `Default`,
}

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
}

export default Button
