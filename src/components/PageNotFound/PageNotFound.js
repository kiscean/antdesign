import React from 'react';
import './PageNotFound.css';

const PageNotFound = () => {
  return (
    <div className="not-found">
      <h2 className="not-found__code">404</h2>
      <div className="not-found__right">
        <p className="not-found__error">К сожалению этой страницы нет</p>
        <p className="not-found__paragraph">
          Зато у нас много других интересных страниц. Вернитесь на{' '}
          <a className="not-found__link">главную</a>, чтобы с ними ознакомиться
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
