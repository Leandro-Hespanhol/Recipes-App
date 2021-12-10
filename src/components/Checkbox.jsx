import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Checkbox({ testid, inputValue, content }) {
  const [checked, setChecked] = useState(false);

  const onCheck = ({ target }) => {
    setChecked(target.checked);
  };

  return (
    <label htmlFor={ inputValue } onChange={ onCheck }>
      <input
        data-testid={ testid }
        type="checkbox"
        id={ inputValue }
        name={ inputValue }
        checked={ checked }
      />
      <span
        style={ checked ? { textDecoration: 'line-through' } : null }
      >
        { content }
      </span>
    </label>
  );
}

Checkbox.propTypes = {
  content: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
};
