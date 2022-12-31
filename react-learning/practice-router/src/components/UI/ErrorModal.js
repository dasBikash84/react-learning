import Modal from './Modal';

const ErrorModal = (props) => {
  return (
    <Modal onClose={props.onClose}>
      <p className="centered">{props.message}</p>
      <button className="btn centered" onClick={props.onClose}>
        Okay
      </button>
    </Modal>
  );
};

export default ErrorModal;
