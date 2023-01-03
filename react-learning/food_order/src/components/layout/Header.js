import { Fragment } from 'react';

import mealsImage from '../../assets/meals.jpg';
import cllasses from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment className={cllasses.header}>
      <header>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={cllasses['main-image']}>
        <img src={mealsImage} alt="Good image" />
      </div>
    </Fragment>
  );
};

export default Header;
