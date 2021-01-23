import styled from "styled-components";
import FormInput from "../form-input/form-input.component";

export const DisplayContainer = styled.div`
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const DisplaySwitchButtons = styled.div`
    margin-top: 20px;
`;

export const DisplaySearchTitle = styled(FormInput)`
    width: 50%;
    margin-top: 20px;
`;
