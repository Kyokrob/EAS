import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Fab } from "@material-ui/core";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const useStyles = makeStyles((theme) => ({
  scrollTop: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: "999",
    
    
  },
}));

const ScrollTopButton = () => {
  const classes = useStyles();
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 90) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={classes.scrollTop}>
      {showButton && (
        <Fab style={{ backgroundColor: "#042B3B" }} size="large" onClick={handleClick}>
          <KeyboardArrowUpIcon style={{fontSize:"32px", color:"#E6AF4B"}}/>
        </Fab>
      )}
    </div>
  );
};

export default ScrollTopButton;
