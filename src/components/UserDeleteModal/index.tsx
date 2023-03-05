import {
  BottomDiv,
  ButtonCancel,
  ButtonSubmit,
  Centered,
  Container,
  Description,
  MiddleDiv,
  Title,
  UpperDiv,
  Backdrop,
} from "./styles";
import { MdClose } from "react-icons/md";
import { api } from "../../services";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AnnouncementContext } from "../../context/AnnouncementContext";
import { UserContext } from "../../context/userContext";

const UserDeleteModal = () => {
  const { setOpenModalDeleteUser } = useContext(UserContext);

  const nav = useNavigate();

  const person = localStorage.getItem("@motorshop: userId");

  const handleDelete = async () => {
    const userToken = localStorage.getItem("@motorshop: token");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    };

    await api
      .delete(`/users/${person}`, config)
      .then((res) => {
        //TOAST
        nav("/");
        localStorage.clear();
        toast.success(" Conta deletada!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setOpenModalDeleteUser(false);
        //FECHAR MODAL
      })
      .catch((err) => console.error(err));
  };

  const handleCancel = () => {
    //FECHAR MODAL
    setOpenModalDeleteUser(false);
  };

  return (
    <Backdrop>
      <Container>
        <Centered>
          <UpperDiv>
            <Title>Excluir conta</Title>
            <MdClose
              fontSize="20px"
              color="#ADB5BD"
              onClick={() => handleCancel()}
            />
          </UpperDiv>
          <MiddleDiv>
            <Title>Tem certeza que deseja excluir sua conta?</Title>
            <Description>
              Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
              conta e removerá seus dados de nossos servidores.
            </Description>
          </MiddleDiv>
          <BottomDiv>
            <ButtonCancel onClick={() => handleCancel()}>Cancelar</ButtonCancel>
            <ButtonSubmit onClick={() => handleDelete()}>
              Sim, excluir conta
            </ButtonSubmit>
          </BottomDiv>
        </Centered>
      </Container>
    </Backdrop>
  );
};
export default UserDeleteModal;
