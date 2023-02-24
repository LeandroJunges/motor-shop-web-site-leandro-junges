import styled from "styled-components";

interface IProps {
  textarea?: boolean;
}

export const Main = styled.div<IProps>`
  width: 100%;

  h3 {
    margin-bottom: 8px;
  }

  input,
  textarea {
    width: 100%;
    height: ${(props) => (props.textarea ? "80px" : "48px")};

    padding: 0 16px 0 16px;
    box-sizing: border-box;

    border: 1.5px solid var(--grey-7);
    border-radius: 4px;

    transition: all 200ms;

    resize: none;

    &:focus {
      border-color: var(--brand-2);
      outline: none;
    }

    &:hover {
      background-color: var(--grey-8);
    }
  }

  textarea {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;
