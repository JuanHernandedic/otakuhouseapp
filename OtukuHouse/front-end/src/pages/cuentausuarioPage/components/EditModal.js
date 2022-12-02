import React, { useEffect } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../autentificarUser/useAuth";
import roles from "../../../helpers/roles";
import editAccountResolver from "../../../validaciones/editAccountResolver";

export default function EditModal({ isOpen, close, user }) {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    reset,
  } = useForm({ resolver: editAccountResolver });

  const { updateUser, hasRole } = useAuth();
  const isDirty = !!Object.keys(dirtyFields).length;
  const onSubmit = (formData) => {
    if (!isDirty) return;

    let newUserData;
    if (formData.role) {
      newUserData = formData;
    } else {
      const { role, ...resformData } = formData;
      newUserData = resformData;
    }
    updateUser(newUserData);
    close();
  };

  useEffect(() => {
    if (!isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  useEffect(() => {
    if (user)
      reset({
        name: user.name,
        email: user.email,
        role: user.role,
      });
  }, [user, reset]);

  return (
    <Modal show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Editar mi cuenta</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              placeholder="Escribe un Nombre"
              {...register("name")}
              type="text"
            />
            {errors?.name && (
              <Form.Text>
                <Alert variant="danger">{errors.name.message}</Alert>
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              placeholder="Escribe un Correo Electronico"
              {...register("email")}
              type="email"
            />
            {errors?.email && (
              <Form.Text>
                <Alert variant="danger">{errors.email.message}</Alert>
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Rol-Click para selecionar mas opciones :P</Form.Label>
            <Form.Control
              as="select"
              disabled={!hasRole("admin")}
              {...register("role")}
            >
              {Object.keys(roles).map((role) => (
                <option key={role}>{role}</option>
              ))}
              <option>No existe</option>
            </Form.Control>
            {errors?.role && (
              <Form.Text>
                <Alert variant="danger">{errors.role.message}</Alert>
              </Form.Text>
            )}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Cancelar
        </Button>
        <Button
          variant="primary"
          onClick={handleSubmit(onSubmit)}
          disabled={!isDirty}
        >
          Actualizar Mi Cuenta
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
