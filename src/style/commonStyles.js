import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #5b5b5b;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const MapContainer = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
`;

export const Spin = styled.div`
    width: 100px;
    height: 100px;
    border: 4px solid white;
    border-bottom: 4px solid transparent;
    border-radius: 50%;
    animation: ${rotate} 1s linear infinite;
`;

export const FailText = styled.div`
    color: #fff;
    font-size: 50px;
`;

export const SearchContainer = styled.div`
button.xoLGzf-LgbsSe.xo8g7.GLETz-suEOdc {
  background-color: transparent;
  border-radius: 0;
  border-width: 0;
  color: #000;
  cursor: pointer;
  display: block;
  font-family: Roboto,"Noto Sans KR",Arial,sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  list-style: none;
  list-style: none;
  margin: 0;
  opacity: .62;
  outline: 0;
  overflow: visible;
  padding: 12px 16px;
  text-align: center;
  vertical-align: baseline;
}

img.xoLGzf-icon {
  color: #000;
  cursor: pointer;
  font-family: Roboto,"Noto Sans KR",Arial,sans-serif;
  height: 24px;
  list-style: none;
  text-align: center;
  width: 24px;
}
`