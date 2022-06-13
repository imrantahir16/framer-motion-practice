import { AnimatePresence } from "framer-motion";

const NotificationContainer = (props) => {
  return (
    <div className="container">
      <ul className={props.position}>
        <AnimatePresence initial={false} onExitComplete={() => null}>
          {props.children}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default NotificationContainer;
