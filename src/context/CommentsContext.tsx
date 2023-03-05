import { createContext, useState } from "react";
import { IChildren } from "../interfaces";
import { api } from "../services";
import { toast } from "react-toastify";

interface IComment {
  id: string;
  description: string;
  createdAt: Date;
  user: IUser;
}

interface IUser {
  id: string;
  name: string;
  img: string;
}

interface ICommentsContextProps {
  announcementComments: IComment[] | undefined;
  createComment: (announcementId: string, description: string) => Promise<void>;
  editComment: (
    commentId: string,
    description: string,
    announcementId: string
  ) => Promise<void>;
  deleteComment: (commentId: string, announcementId: string) => Promise<void>;
  showAnnouncementComments: (announcementId: string) => Promise<void>;
}

export const CommentsContext = createContext<ICommentsContextProps>(
  {} as ICommentsContextProps
);
export const CommentsProvider = ({ children }: IChildren) => {
  const [announcementComments, setAnnouncementsComments] = useState();
  const showAnnouncementComments = async (announcementId: string) => {
    await api
      .get(`/comments/${announcementId}`)
      .then((res) => {
        setAnnouncementsComments(res.data);
      })
      .catch((err) => console.error(err));
  };

  const createComment = async (announcementId: string, description: string) => {
    const userToken: string | null =
      localStorage.getItem("@motorshop: token") || null;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    };

    await api
      .post(`/comments/${announcementId}`, { description }, config)
      .then((res) => {
        showAnnouncementComments(announcementId);
        toast.success(" Comentário criado com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => console.error(err));
  };

  const deleteComment = async (commentId: string, announcementId: string) => {
    const userToken: string | null =
      localStorage.getItem("@motorshop: token") || null;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    };

    await api
      .delete(`/comments/${commentId}`, config)
      .then(() => {
        showAnnouncementComments(announcementId!);
        toast.success(" Comentário deletado com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => console.error(err));
  };

  const editComment = async (
    commentId: string,
    description: string,
    announcementId: string
  ) => {
    const userToken: string | null =
      localStorage.getItem("@motorshop: token") || null;
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    };

    await api
      .patch(`/comments/${commentId}`, { description }, config)
      .then((res) => {
        showAnnouncementComments(announcementId);
        toast.success(" Comentário editado com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((err) => console.error(err));
  };

  return (
    <CommentsContext.Provider
      value={{
        createComment,
        showAnnouncementComments,
        editComment,
        deleteComment,
        announcementComments,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};
