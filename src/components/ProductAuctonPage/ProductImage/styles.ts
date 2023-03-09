import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: fit-content;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const Centered = styled.div`
  width: 90%;
  margin-bottom: 15px;
  margin-top: 15px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  justify-content: space-between;
`;

export const TitleDiv = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: flex-start;
`;

export const ImgsContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
`;

export const ImgDiv = styled.div`
  width: 30%;
  height: 90px;
  background-color: var(--grey-7);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const Img = styled.img`
  border-radius: 4px;
  width: 80px;
`;
