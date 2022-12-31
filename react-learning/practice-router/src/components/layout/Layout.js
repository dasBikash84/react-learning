import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';

const Layout = (props) => {
  return (
    <div className={classes.main}>
      <MainNavigation />
      {props.children}
    </div>
  );
};

export default Layout;
