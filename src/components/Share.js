import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Toast } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton
} from "react-share";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaTelegramPlane,
  FaLink
} from "react-icons/fa";

const styles = {
  root: {
    display: "flex",
    justifyContent: "center"
  },
  svg: {
    margin: "10px",
    fontSize: "30px",
    color: "white"
  }
};

export default props => {
  const [showToast, setShowToast] = useState(false);
  const toggleToast = () => setShowToast(v => !v);

  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteURL
          }
        }
      }
    `
  );

  const url = site.siteMetadata.siteURL;
  //   const size = 30;
  //   const round = true;

  return (
    <>
      <div style={styles.root}>
        <FacebookShareButton url={url}>
          <FaFacebookF style={styles.svg} />
        </FacebookShareButton>
        <TwitterShareButton url={url}>
          <FaTwitter style={styles.svg} />
          {/* <TwitterIcon size={size} round={round} style={styles.buttons} /> */}
        </TwitterShareButton>
        <WhatsappShareButton url={url}>
          <FaWhatsapp style={styles.svg} />
          {/* <WhatsappIcon size={size} round={round} style={styles.buttons} /> */}
        </WhatsappShareButton>
        <TelegramShareButton url={url}>
          <FaTelegramPlane style={styles.svg} />
          {/* <TelegramIcon size={size} round={round} style={styles.buttons} /> */}
        </TelegramShareButton>
        <CopyToClipboard text={url} onCopy={() => setShowToast(true)}>
          <FaLink style={{ ...styles.svg, cursor: "pointer" }} />
        </CopyToClipboard>
      </div>
      <Toast
        className="mx-auto mt-4"
        style={{ maxWidth: "200px" }}
        show={showToast}
        onClose={toggleToast}
      >
        <Toast.Header>
          <strong className="mr-auto">Copied to clipboard!</strong>
        </Toast.Header>
      </Toast>
    </>
  );
};
