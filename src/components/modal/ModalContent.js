import ModalButton from "./ModalButton";

const ModalContent = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
      <ModalButton
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={props.onClose}
        label={props.label}
      />
    </>
  );
};

export default ModalContent;
