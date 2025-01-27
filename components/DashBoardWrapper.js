import DashBoardAside from "./DashBoardAside";
import DashBoardHeader from "./DashBoardHeader";
import { useGlobalContext } from "../context/context";
import classes from "./DashBoardWrapper.module.css";
import MainWrapper from "./MainWrapper";
import { motion } from "framer-motion";
const DashBoardWrapper = ({ children }) => {
  const { isToggled, isToggledMobileNav } = useGlobalContext();
  return (
    <div className={classes.container}>
      <motion.aside
        className={`${classes.side_nav} ${
          isToggled ? classes.shrink_nav : ""
        } ${
          isToggledMobileNav ? classes.showMobileNav : classes.hideMobileNav
        }`}
      >
        <DashBoardAside />
      </motion.aside>
      <main
        className={`${classes.main} ${isToggled ? classes.shrink_main : ""}`}
      >
        <DashBoardHeader />
        <MainWrapper>{children}</MainWrapper>
      </main>
    </div>
  );
};

export default DashBoardWrapper;
