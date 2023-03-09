import styled from "styled-components";

export const Container = styled.div`
  padding-top: 20px;
  padding-bottom: 15px;
  background-color: white;
  width: 90%;
  height: fit-content;
  display: flex;
  border-radius: 4px;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const ContainerComment = styled.div`
  height: fit-content;
  width: 90%;
  display: flex;
  gap: 5px;
  flex-direction: column;
`;
export const NameAndDate = styled.div`
  height: 32px;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
`;

export const Img = styled.img`
  border-radius: 100%;
  height: 32px;
  width: 32px;
`;

export const Input = styled.textarea`
  width: 90%;
  height: 70px;
  border: 1.5px solid #e9ecef;
  border-radius: 4px;
  background-color: white;
  padding-left: 15px;
  font-weight: 400;
  font-size: 16px;
  padding-top: 8px;
  font-family: "Inter";
  :focus {
    background-color: white;
    outline: none;
  }
  ::placeholder {
    padding-top: 5px;
    color: var(--grey-3);
    font-weight: 400;
    font-size: 16px;
    font-family: "Inter";
  }
`;
export const ButtonDiv = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  gap: 15px;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: var(--brand-1);
  height: 38px;
  width: 100px;
  border-radius: 4px;
  font-size: 14px;
  color: white;
  border: 0;
  font-family: "Inter";
`;

export const ButtonC = styled.button`
  cursor: pointer;
  background-color: white;

  height: 38px;
  width: 100px;
  border-radius: 4px;
  font-size: 14px;
  color: var(--brand-1);
  border: 1.5px solid var(--brand-1);
  font-family: "Inter";
`;

export const EditAndDeleteDiv = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 15px;
`;

export const TitleDiv = styled.div`
  width: 90%;
  display: flex;
  align-items: flex-start;
`;

export const Title = styled.p`
  font-family: "Lexend";
  font-weight: 600;
  font-size: 20px;
`;

export const Description = styled.p`
  font-family: "Inter";
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${(props: any) => props.color};
`;

export const DescriptionWeighted = styled.p`
  font-family: "Inter";
  font-weight: 500;
  font-size: 16px;
  color: ${(props: any) => props.color};
`;
