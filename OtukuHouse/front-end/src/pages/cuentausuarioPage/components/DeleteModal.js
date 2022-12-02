import React from "react";
import { Modal, Alert, Button } from "react-bootstrap";
import useAuth from "../../../autentificarUser/useAuth";

export default function DeleteModal({ isOpen, close }) {
  const { logout } = useAuth();

  const handleDelete = () => {
    logout();
  };

  return (
    <Modal show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Eliminar cuenta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Alert variant="danger">
          ¿Estas Seguro Que Deseas Eliminar Tu Cuenta?
          <b>Se Perderan Tus Datos</b>
        </Alert>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Eliminar Cuenta
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
