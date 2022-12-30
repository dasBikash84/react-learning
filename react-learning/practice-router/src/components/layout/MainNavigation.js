import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  const linkDetails = useSelector((state) => state.linkDetails.links.nav);

  return (
    <header className={classes.header}>
      <h1>Great Quotes</h1>
      <nav className={classes.nav}>
        <ul>
          {Object.values(linkDetails).map((link) => (
            <li key={link.id}>
              <NavLink activeClassName={classes.active} to={link.url} exact>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
