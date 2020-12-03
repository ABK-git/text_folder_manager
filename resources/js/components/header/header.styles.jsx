import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between
`;

export const OptionsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  font-weight: bold;
  font-size: 20px;
  color: red;
  cursor: pointer;
  white-space: nowrap
`;

export const OptionDiv = styled.div`
  padding: 10px 15px;
`