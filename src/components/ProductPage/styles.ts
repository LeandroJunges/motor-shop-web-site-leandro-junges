import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    180deg,
    var(--brand-1) 31.25%,
    var(--grey-8) 31.26%,
    var(--grey-8) 100%
  );
  gap: 16px;
  /* justify-content: space-around; */
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 15px;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1065px) {
    width: 70%;
  }
  @media (min-width: 1500px) {
    width: 60%;
  }
`;

export const UpperMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  /* justify-content: center; */
  height: fit-content;
  @media (min-width: 769px) {
    flex-direction: row;
    /* justify-content: center; */
  }
`;

export const UpperUpper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 769px) {
    width: 55%;
    /* justify-content: center; */
  }
`;
export const UpperBottom = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  justify-content: center;
  @media (min-width: 769px) {
    height: 100%;
    width: 45%;
    justify-content: flex-start;
    /* align-items: flex-end; */

    /* justify-content: center; */
  }
`;

export const BottomMain = styled.div`
  width: 100%;
  height: fit-content;
  align-items: center;
  display: flex;
  justify-content: flex-start;
  @media (min-width: 769px) {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const SubBottomMain = styled.div`
  width: 100%;
  height: fit-content;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media (min-width: 769px) {
    width: 54%;
    /* justify-content: flex-start; */
  }
  @media (min-width: 1065px) {
    width: 55%;
    /* justify-content: flex-start; */
  }
  @media (min-width: 1110px) {
    width: 54%;
    /* justify-content: flex-start; */
  }
  @media (min-width: 1500px) {
    width: 54.2%;
    /* justify-content: flex-start; */
  }
`;
