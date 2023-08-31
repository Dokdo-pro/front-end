import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 474px;
`;

export const BoxTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 10px 0;
  width: 90%;
  height: 100%;
`;

export const BoxTitle = styled.div`
  padding: 15px;
  font-size: 20px;
  font-weight: bold;
`;

export const List = styled.div`
  display: flex;
`;

export const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 8px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const Img = styled.div`
  width: 180px;
  height: 280px;
  background-color: #fff7ec;
  box-sizing: border-box;
  border: 1px solid #ddd;
  & img {
    width: 100%;
    height: 100%;
  }
`;

export const Info = styled.div`
  margin: 15px 0 25px 0;
  width: 100%;
  text-decoration: none;

  & div {
    padding: 3px;
    text-align: start;
    font-size: 14px;
  }
`;

export const SliederBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
