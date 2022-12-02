import { Container, Row, Col, Card, Button } from "react-bootstrap";
import useAuth from "../../autentificarUser/useAuth";
import useModal from "../../hooks/useModal";
import ChangePasswordModal from "./components/ChangePasswordModal";
import DeleteModal from "./components/DeleteModal";
import EditModal from "./components/EditModal";
import ProfileimagenModal from "./components/ProfileimagenModal";

export default function AccounPage() {
  const { user } = useAuth();

  const [isOpenDeleteModal, openDeleteModal, closeDeleteModal] = useModal();
  const [
    isOpenChangePasswordModal,
    openChangePasswordModal,
    closeChangePasswordModal,
  ] = useModal();
  const [isOpenEditModal, openEditModal, closeEditModal] = useModal();
  const [isOpenProfileimgModal, openProfileimgModal, closeProfileimgModal] =
    useModal();
  return (
    <>
      <Container>
        <Row className="mt-4">
          <Col xs={12} className="text-center">
            <img
              src={user?.ProfilePic || "/img/male_avatar.svg"}
              alt="perfil"
              onClick={openProfileimgModal}
              style={{
                width: "200px",
                height: "200px",
                borderRadius: "50%",
                objectFit: "cover",
                cursor: "pointer",
              }}
            />
          </Col>
          <Col className="mt-4">
            <Card style={{ maxWidth: "360px" }} className="mx-auto p-4">
              <p className="text-center">
                <b>Nombre: </b>
                {user.name}
              </p>
              <p className="text-center">
                <b>Correo: </b>
                {user.email}
              </p>
              <p className="text-center">
                <b>rol: </b>
                {user.role}
              </p>
              <Button variant="warning" onClick={openEditModal}>
                Editar Cuenta
              </Button>
              <Button
                variant="link"
                className="mt-1"
                onClick={openChangePasswordModal}
              >
                Cambiar Contraseña
              </Button>
              <Button
                variant="link"
                className="mt-3 text-danger"
                onClick={openDeleteModal}
              >
                Eliminar Cuenta
              </Button>
              <h6>click en la imagen para cambiar la foto de perfil</h6>
            </Card>
          </Col>
        </Row>
      </Container>
      <DeleteModal isOpen={isOpenDeleteModal} close={closeDeleteModal} />
      <ChangePasswordModal
        isOpen={isOpenChangePasswordModal}
        close={closeChangePasswordModal}
      />
      <EditModal isOpen={isOpenEditModal} close={closeEditModal} user={user} />
      <ProfileimagenModal
        isOpen={isOpenProfileimgModal}
        close={closeProfileimgModal}
        user={user}
      />
    </>
  );
}
