import { useState } from "react";
import Modal from "./components/modal/Modal";
import { motion, AnimatePresence } from "framer-motion";
import Input from "./components/Input";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(true);
  };
  const closeModalHandler = () => {
    setIsOpen(false);
  };
  return (
    <div className="">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={openModalHandler}
      >
        Open modal
      </motion.button>
      <Input />
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {isOpen && <Modal onClose={closeModalHandler} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
