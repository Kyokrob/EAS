import React, { useState } from "react";
import "./blogShare.css";
import {
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
  WhatsappShareButton,
} from "react-share";

import { FacebookIcon, WhatsappIcon, TwitterIcon, LineIcon } from "react-share";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const BlogShare = ({ url }) => {
  const [openSnackbar, setOpenSnackbar] = useState("");
  const copyLink = () => {
    navigator.clipboard.writeText(url);
    setOpenSnackbar(true);
  };
  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };
  return (
    <div className="blogShare">
      <div className="blogShareIcon">
        <button onClick={copyLink} className="shareIcon">
          <ContentCopyIcon /> Copy Link
        </button>

        <FacebookShareButton
          url={url}
          className="shareIcon"
          quote={"Share us on Facebook!"}
        >
          <FacebookIcon size={32} round={true} />
          {shareCount => <span className="myShareCountWrapper">{shareCount}</span>}
        </FacebookShareButton>

        <TwitterShareButton
          url={url}
          className="shareIcon"
          quote={"Share us on Twitter!"}
        >
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>

        <LineShareButton
          url={url}
          className="shareIcon"
          quote={"Share us on Line!"}
        >
          <LineIcon size={32} round={true} />{" "}
        </LineShareButton>

        <WhatsappShareButton
          url={url}
          className="shareIcon"
          quote={"Share us on Whatsapp!"}
        >
          <WhatsappIcon size={32} round={true} />{" "}
        </WhatsappShareButton>
      </div>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
      >
        <MuiAlert
          onClose={handleCloseSnackbar}
          severity="info"
          variant="standard"
        >
          Link copied to clipboard
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default BlogShare;
