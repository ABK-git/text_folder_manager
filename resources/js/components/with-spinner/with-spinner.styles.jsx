import styled from "styled-components";
import { Spinner } from "@styled-icons/evil/Spinner";

export const SpinnerOverlay = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center; 
`;

export const SpinnerAnimation = styled(Spinner)`
    width: 33%;
    margin-bottom: 100px;
    animation: spin 0.8s ease-in-out infinite;
    -webkit-animation: spin 0.8s ease-in-out infinite;
    @keyframes spin {
        to {
            -webkit-transform: rotate(360deg);
        }
    }
    @-webkit-keyframes spin {
        to {
            -webkit-transform: rotate(360deg);
        }
    }
`;
