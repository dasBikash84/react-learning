import Modal from './Modal';

const ErrorModal = (props) => {
  const okPressHandler = () => {
    // props.onOkPress();
    props.onClose();
  };
  return (
    <Modal onClose={props.onClose}>
      <p className="centered">{props.message}</p>
      <button className="btn centered" onClick={okPressHandler}>
        Okay
      </button>
    </Modal>
  );
};

export default ErrorModal;
