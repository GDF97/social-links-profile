import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 425px;
  min-height: 625px;
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  background-color: hsl(0, 0%, 12%);

  @media (max-width: 500px) {
    padding: 1.5rem;
    height: fit-content;
  }
`;
