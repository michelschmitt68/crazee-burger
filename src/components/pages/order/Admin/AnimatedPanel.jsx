import { motion } from "framer-motion";

const AnimatedPanel = ({ children, variants, initial, animate, exit }) => {
  return (
    <motion.div variants={variants} initial={initial} animate={animate} exit={exit}>
      {children}
    </motion.div>
  );
};

export default AnimatedPanel;