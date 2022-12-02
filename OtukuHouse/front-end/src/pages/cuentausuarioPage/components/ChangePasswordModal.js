import React, { useEffect } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import ChangePasswordResolver from "../../../validaciones/ChangePasswordResolver";

export default function ChangePasswordModal({ isOpen, close }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: ChangePasswordResolver });
  const onSubmit = (formData) => {
    alert("cambiando contraseña");
  };

  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  return (
    <Modal show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Cambiar Contraseña</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Nueva Contraseña</Form.Label>
            <Form.Control
              placeholder="Escribe una nueva Contraseña"
              {...register("password")}
              type="password"
            />
            {errors?.password && (
              <Form.Text>
                <Alert variant="danger">{errors.password.message}</Alert>
              </Form.Text>
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Cancelar
        </Button>
        <Button variant="Primary" onClick={handleSubmit(onSubmit)}>
          Actualizar Contraseña
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
