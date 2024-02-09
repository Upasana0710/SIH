import React, { useState, useEffect } from 'react';
import styles from './SearchBar.module.css';
import { getTeachers } from '../../../api/api';

import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom';

const SearchBar = () => {
  const [searched, setSearched] = useState('');
  const [array, setArray] = useState([]);

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const searchResults = [];

  useEffect(() => {
    console.log(array);
  }, [array]);
  const handleSearch = async () => {
    const token = localStorage.getItem('user_info');
    const response = await getTeachers(searched, token);
    setArray(response.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    handleSearch();
  };

  return (
    <>
      <div className={styles.container}>
        <div
          className={`${styles.background_overlay} ${
            isFocused ? styles.search_form_focused : ''
          }`}
        ></div>
        <form
          className={
            isFocused
              ? `${styles.search_form_focused}`
              : `${styles.search_form}`
          }
          onSubmit={handleSubmit}
          onFocus={handleFocus}
        >
          <input
            type="text"
            placeholder="Search away..."
            className={styles.search_bar}
            value={searched}
            onChange={(e) => setSearched(e.target.value)}
          ></input>

          {isFocused && (
            <div className={styles.advanced_filters}>
              <div className={styles.search_bar_controls}>
                <CloseIcon
                  className={styles.close_icon_search}
                  onClick={() => setIsFocused(false)}
                />
              </div>
              <div className={styles.display_results}>
              <div className={styles.user_display}>USERS</div>
                {array.length !== 0 &&
                  array.map((ar) => (
                    <div key={ar._id} className={styles.results_container}>
                      
                      <NavLink
                        to={`profile?uid=${ar._id}`}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          textDecoration:'none'
                        }}
                      >
                      <div className={styles.search_name}> {ar.name}</div>
                      </NavLink>
                      <div className={styles.search_rating}>Rating:{ar.teachRating}⭐</div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </form>
      </div>
    </>
  );
};

export default SearchBar;
