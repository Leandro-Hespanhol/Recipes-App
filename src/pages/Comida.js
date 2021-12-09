/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getItemById } from '../services/funcs';

const Comida = ({ match: { params: { id } } }) => {
  const [info, setInfo] = useState([]);
  console.log(info);

  const getInfo = async () => {
    const item = await getItemById('food', id);
    setInfo(item);
  };

  useEffect(() => {
    getInfo();
  }, []);

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
