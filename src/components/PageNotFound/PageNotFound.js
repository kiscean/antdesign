import React from 'react';
import './PageNotFound.css';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="not-found">
      <h2 className="not-found__code">404</h2>
      <div className="not-found__right">
        <p className="not-found__error">
          К сожалению такой страницы не существует
        </p>
        <p className="not-found__paragraph">
          Зато у нас много других интересных страниц. Вернитесь на{' '}
          <Link to="/" className="not-found__link">
            главную
          </Link>
          , чтобы с ними ознакомиться
        </p>
      </div>
    </div>
  );
};

export default PageNotFound;
