import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke={props.color}
    strokeLinecap="square"
    {...props}
  />
);

const CloseButton = (props) => (
  <motion.div
    whileHover={{ scale: 1.2 }}
    onClick={props.onClose}
    className="close"
  >
    <svg width="18" height="18" viewBox="0 0 23 23">
      <Path color={props.color} d="M 3 16.5 L 17 2.5" />
      <Path color={props.color} d="M 3 2.5 L 17 16.346" />
    </svg>
  </motion.div>
);

export default CloseButton;
