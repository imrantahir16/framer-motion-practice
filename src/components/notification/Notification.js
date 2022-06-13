import React from "react";
import { motion } from "framer-motion";
import CloseButton from "./CloseButton";
import { remove } from "../../Utility/arrays-utility";

const notificationVariants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.2,
    transition: { duration: 0.1 },
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  exit: {
    opacity: 0,
    scale: 0.2,
    transition: { ease: "easeOut", duration: 0.15 },
  },
  hover: { scale: 1.05, transition: { duration: 0.1 } },
};
const Notification = (props) => {
  const notificationCloseHandler = () => {
    props.setNotifications(remove(props.notifications, props.notification));
  };
  const { text, style } = props.notification;
  const styleType = () => {
    // Controlled by selection menu
    switch (props.notification.style) {
      case "success":
        return {
          background:
            "linear-gradient(15deg, 	hsl(91, 100%, 50%),hsl(91,100%, 40%))",
        };
      case "error":
        return {
          background:
            "linear-gradient(15deg, 	hsl(353, 100%, 67%), hsl(353, 100%, 60%))",
        };
      case "warning":
        return {
          background:
            "linear-gradient(15deg, 	hsl(35, 100%, 61%), hsl(35, 100%, 55%))",
        };
      case "light":
        return {
          background: "linear-gradient(15deg, hsl(0, 0%, 91%), hsl(0,0%,71%))",
        };
      default:
        return {
          background:
            "linear-gradient(15deg, hsl(180, 2%, 20%), hsl(180, 2%, 13%))",
        };
    }
  };

  // const closeOnDrag = (event, info) => {
  //   console.log(info);
  //   if (info.velocity.x > 0) {
  //     notificationCloseHandler();
  //   }
  // };

  return (
    <motion.li
      layout="position"
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      // dragElastic={0.9}
      // dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
      // onDragEnd={closeOnDrag}
      style={styleType()} // Change the style based on style selection
      variants={notificationVariants} // Defined animation states
      whileHover="hover" // Animation on hover gesture
      initial="initial" // Starting animation
      animate="animate" // Values to animate to
      exit="exit" // Target to animate to when removed from the tree
    >
      <h3
        style={{ color: style ? "hsl(0, 0%, 1%)" : "	hsl(0, 0%, 57%)" }}
        className="notification-text"
      >
        {text}
      </h3>
      <CloseButton
        color={style ? "hsl(0, 0%, 1%)" : "hsl(0, 0%, 60%)"}
        onClose={notificationCloseHandler}
      />
    </motion.li>
  );
};

export default Notification;
