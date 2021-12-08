import React from 'react';
import PropTypes from 'prop-types';

const Comida = ({ match: { params: { id } } }) => {
  console.log(id);
  return (
    <div>oi</div>
  );
};

export default Comida;

Comida.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string }),
  }).isRequired,
};
