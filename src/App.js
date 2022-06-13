import { useState } from "react";
import Modal from "./components/modal/Modal";
import { motion, AnimatePresence } from "framer-motion";
import Input from "./components/Input";
import useModal from "./hooks/useModal";
import NotificationContainer from "./components/notification/NotificationContainer";
import Notification from "./components/notification/Notification";
import { add } from "./Utility/arrays-utility";

function App() {
  const { modalOpen, close, open } = useModal();

  // Modal type
  const [modalType, setModalType] = useState("dropIn");
  const handleType = (e) => setModalType(e.target.value);

  // Notifications state
  const [notifications, setNotifications] = useState([]);

  // Notification text
  const [text, setText] = useState("Awesome job! 🚀");
  const handleText = (e) => setText(e.target.value);

  // Notification style
  const [style, setStyle] = useState("success");
  const handleStyle = (e) => setStyle(e.target.value);

  // Notification position
  const [position, setPosition] = useState("bottom");
  const handlePosition = (e) => setPosition(e.target.value);
  // //////////
  // const [isOpen, setIsOpen] = useState(false);

  const Header = () => (
    <motion.h1 className="header-color">
      Framer Motion
      <span className="header-secondary"> ⚛️ React</span>
    </motion.h1>
  );

  const SubHeader = ({ text }) => (
    <motion.h2 className="sub-header">{text}</motion.h2>
  );

  return (
    <>
      <motion.main>
        <Header />
        <SubHeader text="Animated modals" />

        <motion.select className="input" onChange={handleType}>
          <option value="dropIn">🪂 Drop in</option>
          <option value="flip">🛹 Flip</option>
          <option value="newspaper">🗞 Newspaper</option>
          <option value="badSuspension">🔩 Bad Suspension</option>
        </motion.select>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="save-button"
          onClick={open}
        >
          Launch modal
        </motion.button>

        <br />
        <br />

        <SubHeader text="Notification stack" />

        <Input
          placeHolder="Add notification text = Awesome job! 🚀"
          value={text}
          onChange={handleText}
        />

        <br />

        <motion.select className="input" onChange={handleStyle}>
          <option value="success">✅ Success</option>
          <option value="warning">⚠️ Warning</option>
          <option value="error">🛑 Error</option>
          <option value="light">☀️ Light</option>
          <option value="">🌙 Dark</option>
        </motion.select>

        <br />

        <motion.select className="input" onChange={handlePosition}>
          <option value="bottom">👇🏼 Bottom</option>
          <option value="top">☝🏼 Top</option>
        </motion.select>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="add-button"
          onClick={() => setNotifications(add(notifications, text, style))}
        >
          + Stack em up
        </motion.button>
      </motion.main>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {modalOpen && (
          <Modal
            modalOpen={modalOpen}
            title={modalType}
            type={modalType}
            onClose={close}
          />
        )}
      </AnimatePresence>

      <NotificationContainer position={position}>
        {notifications &&
          notifications.map((notification) => (
            <Notification
              key={notification.id}
              notification={notification}
              notifications={notifications}
              setNotifications={setNotifications}
            />
          ))}
      </NotificationContainer>
    </>
  );
}

export default App;
