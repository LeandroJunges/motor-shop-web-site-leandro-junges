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
