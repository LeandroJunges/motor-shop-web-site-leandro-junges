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

export const Centered = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`;

export const UserDiv = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  align-items: center;
  gap: 15px;
`;

export const Img = styled.img`
  border-radius: 100%;
  height: 32px;
  width: 32px;
`;

export const DescriptionWeighted = styled.p`
  font-family: "Inter";
  font-weight: 500;
  font-size: 16px;
  color: var(--grey-1);
`;

export const Input = styled.textarea`
  width: 90%;
  height: 128px;
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

export const InputAndButtonDiv = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  border-radius: 4px;
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

export const ButtonGray = styled.button`
  cursor: pointer;
  background-color: var(--grey-5);
  height: 38px;
  width: 100px;
  border-radius: 4px;
  font-size: 14px;
  color: white;
  border: 0;
  font-family: "Inter";
`;

export const SugestionsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 15px;
  /* justify-content: space-between; */
`;

export const ASugestionDiv = styled.div`
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  padding: 0px 10px;
  background-color: var(--grey-7);
  height: fit-content;
`;

export const Text = styled.p`
  font-family: "Inter";
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  cursor: pointer;
  color: var(--grey-3);
`;
