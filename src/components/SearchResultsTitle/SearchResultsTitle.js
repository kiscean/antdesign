import React from 'react';
import './SearchResultsTitle.css';

const SearchResultsTitle = () => {
  return (
    <section className="search-title">
      <h2>Результаты поиска</h2>{' '}
      <p className="search-title__text">
        по запросу "<span className="search-title__result">diod</span>" найдено:{' '}
        <span className="search-title__result">10</span>
      </p>
    </section>
  );
};

export default SearchResultsTitle;
