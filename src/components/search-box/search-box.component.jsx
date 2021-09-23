import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
  <input 
      type='search' 
      placeholder= {placeholder} // make placeholder dynamic 
      onChange={handleChange}
  />
);
