import React from "react";
import { Modal, Button } from "react-bootstrap";

export default props => {
  return (
    <Modal
      {...props}
      onHide={() => {}}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Disclaimer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          This countdown page is designed to be a <b>light-hearted site</b> for
          Singaporeans to have something <b>positive to look forward to</b>.
        </p>
        <p>
          In no way does it condone any acts of "beating the system" by
          immediately breaking social distancing measures once the circuit
          breaker ends. That is, we must continue to practice all social
          distancing measures listed out by the government at all times (even
          after this countdown has ended).
        </p>
        <p>
          For anyone that is struggling during this tough period, please remain
          hopeful that the situation will improve. Head over to{" "}
          <a
            href="https://www.gov.sg/article/covid-19-resources"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gov.sg
          </a>{" "}
          to find all the available resources. Together, we can overcome this
          challenge as #SGUnited.
        </p>
        <p>
          If you have any further questions, feel free to contact this{" "}
          <a
            href="mailto:kyle@hjunyuan.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            email
          </a>
          .
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onExit} block>
          I understand
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
