import CartIcon from '../cart/CartIcon';
import cllasses from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  return (
    <button>
      <span className={cllasses.button}>
        <CartIcon />
      </span>
      <span className={cllasses.icon}>Your Cart</span>
      <span className={cllasses.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
