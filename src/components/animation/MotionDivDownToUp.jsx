import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Children } from "react";
import PropTypes from "prop-types";

export default function MotionDivFade({ children, className }) {
  const { ref, inView } = useInView({ triggerOnce: true });
  const childrenArray = Children.toArray(children);

  MotionDivFade.propTypes = {
    children: PropTypes.any,
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 2 }}
      className={`${className}`}
    >
      {childrenArray}
    </motion.div>
  );
}
