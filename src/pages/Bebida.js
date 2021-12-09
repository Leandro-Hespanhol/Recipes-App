/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { getItemById } from '../services/funcs';

const Bebida = ({ match: { params: { id } } }) => {
  // precisa importar useState de novo, comentei para passar no lint.
  // const [info, setInfo] = useState([]);

  const getInfo = async () => {
    const item = await getItemById('drinks', id);
    console.log(item);
  };

  useEffect(() => {
    getInfo();
  }, []);

  return (
    <div>oi</div>
  );
};

export default Bebida;

Bebida.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string }),
  }).isRequired,
};
