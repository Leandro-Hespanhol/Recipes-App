import React from 'react';
import PropTypes from 'prop-types';

const Bebida = ({ match: { params: { id } } }) => {
  console.log(id);
  return (
    <div>o</div>
  );
};

export default Bebida;

Bebida.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string }),
  }).isRequired,
};
