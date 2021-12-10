import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ item }) => {
  const { strYoutube } = item;

  const youtubeTag = strYoutube.match(/[\d\w-]*$/i)[0];

  return (
    <iframe
      width="600"
      height="350"
      src={ `https://www.youtube.com/embed/${youtubeTag} ` }
      data-testid="video"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer;
      autoplay;
      clipboard-write;
      encrypted-media;
      gyroscope;
      picture-in-picture"
      allowFullScreen
    />
  );
};

export default Video;

Video.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
};
