import React from 'react';

const HeaderTab = ({idx, title, idxHandler}) => {
  return (
    <li onClick={(e) => idxHandler(idx, e)}>{title}</li>
  );
};

export default HeaderTab;