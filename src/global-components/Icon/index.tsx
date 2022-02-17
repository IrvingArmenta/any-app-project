import React from 'react';
import { FaArrowDown, FaArrowUp, FaPaperPlane } from 'react-icons/fa';

export const iconsMapping = {
  paperplane: <FaPaperPlane />,
  arrowUp: <FaArrowUp />,
  arrowDown: <FaArrowDown />
};

export const Icon = (props: { iconName: keyof typeof iconsMapping }) => {
  const { iconName } = props;
  return iconsMapping[iconName];
};

export default Icon;
