import ModalButton from "./ModalButton";

const ModalContent = (props) => {
  return (
    <>
      <div className="modal-text">
        <h3>{props.title}</h3>
        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          laboriosam labore, totam expedita voluptates tempore asperiores sequi,
          alias cum veritatis, minima dolor iste similique eos id. Porro, culpa?
          Officiis, placeat?
        </h5>
      </div>
      <ModalButton onClick={props.onClose} label={props.label} />
    </>
  );
};

export default ModalContent;
