import { motion } from "framer-motion";

const ModalButton = (props) => (
  <motion.button
    className="modal-button"
    type="button"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={props.onClick}
  >
    {props.label}
  </motion.button>
);

export default ModalButton;
