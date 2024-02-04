import styled from "styled-components";

export const Link = styled.a`
  width: 100%;
  height: 48px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: hsl(0, 0%, 20%);
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: hsl(75, 94%, 57%);
    color: hsl(0, 0%, 8%);
  }
`;
