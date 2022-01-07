import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { concludeItem } from '../services/funcs';
import { restoreItem } from '../services/funcs2';

function Checkbox({
  testid,
  inputValue,
  content,
  type,
  id,
  name,
  numberChecked,
  setNumberChecked,
  isChecked }) {
  const [checked, setChecked] = useState(isChecked);

  const onCheck = async ({ target }) => {
    setChecked(target.checked);
    if (target.checked) {
      concludeItem(type, id, name);
      setNumberChecked(numberChecked + 1);
    } else {
      setNumberChecked(numberChecked - 1);
      restoreItem(type, id, name);
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
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  inputValue: PropTypes.number.isRequired,
  numberChecked: PropTypes.number.isRequired,
  setNumberChecked: PropTypes.func.isRequired,
  testid: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
};

export default Checkbox;
