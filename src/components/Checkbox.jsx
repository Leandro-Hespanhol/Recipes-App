import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Checkbox({ testid, inputValue, content, numberChecked, setNumberChecked }) {
  const [checked, setChecked] = useState(false);

  const onCheck = ({ target }) => {
    setChecked(target.checked);
    if (target.checked) {
      setNumberChecked(numberChecked + 1);
    } else {
      setNumberChecked(numberChecked - 1);
    }
  };

  return (
    <label htmlFor={ inputValue } data-testid={ testid }>
      <input
        type="checkbox"
        id={ inputValue }
        name={ inputValue }
        checked={ checked }
        onChange={ onCheck }
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
  inputValue: PropTypes.number.isRequired,
  numberChecked: PropTypes.number.isRequired,
  setNumberChecked: PropTypes.func.isRequired,
  testid: PropTypes.string.isRequired,
};

export default Checkbox;
