import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import useAuth from "../../../autentificarUser/useAuth";

export default function ProfileimagenModal({ isOpen, close }) {
  const { updateUser } = useAuth();
  const [fileName, setFileName] = useState("iagen subida");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    const isValidSize = file.size < 50 * 1024 * 1024;
    const isNameOfOneImageRegEx = /.(jpe?g|gif|png|)$/i;
    const isValidType = isNameOfOneImageRegEx.test(file.name);

    if (!isValidSize) return alert("imagen muy pesada maximo 50mb");
    if (!isValidType) return alert("solo puedes subir imagnes");

    setFileName(file.name);

    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedFile(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleUpdateProfilePic = () => {
    if (!selectedFile) return alert("debes selecionar una nueva imagen");
    updateUser({
      ProfilePic: selectedFile,
    });
    close();
    //bavkedend
  };

  return (
    <Modal show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Cambiar Mi Foto De Perfil</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form>
            <p>
              Seleccionar la imagen:
              <input
                type="file"
                name={fileName}
                onChange={handleFileChange}
                accept=".jpg,.jpeg,.git,.png"
              />
            </p>
          </Form>
        </Form>
        <h2>Previzualizacion de la imagen</h2>
        <img
          className="img-fluid mt-2"
          src={selectedFile}
          alt="imagen-por-seleccionar"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={close}>
          Cancelar
        </Button>
        <Button variant="primary" onClick={handleUpdateProfilePic}>
          Actualizar Imagen
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
