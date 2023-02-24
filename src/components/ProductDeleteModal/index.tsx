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
} from "./styles";
import { MdClose } from "react-icons/md";
import { api } from "../../services";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductDeleteModal = ({ announcement }: any) => {
  const handleDelete = async () => {
    const userToken = localStorage.getItem("@motorshop: token");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    };

    await api
      .delete(`/announcements/${announcement.id}`, config)
      .then((res) => {
        //TOAST
        toast.success(" Anúncio deletado!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        //FECHAR MODAL
      })
      .catch((res) => console.log(res));
  };
  const handleCancel = () => {
    //FECHAR MODAL
  };
  return (
    <Container>
      <Centered>
        <UpperDiv>
          <Title>Excluir anúncio</Title>
          <MdClose
            fontSize="20px"
            color="#ADB5BD"
            onClick={() => handleCancel()}
          />
        </UpperDiv>
        <MiddleDiv>
          <Title>Tem certeza que deseja remover este anúncio?</Title>
          <Description>
            Essa ação não pode ser desfeita. Isso excluirá permanentemente sua
            conta e removerá seus dados de nossos servidores.
          </Description>
        </MiddleDiv>
        <BottomDiv>
          <ButtonCancel onClick={() => handleCancel()}>Cancelar</ButtonCancel>
          <ButtonSubmit onClick={() => handleDelete()}>
            Sim, excluir anúncio
          </ButtonSubmit>
        </BottomDiv>
      </Centered>
    </Container>
  );
};
export default ProductDeleteModal;
