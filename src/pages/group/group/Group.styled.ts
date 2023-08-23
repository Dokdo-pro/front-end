import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 474px;
`;

export const GroupImage = styled.div`
  width: 100%;
  height: 100%;
  margin: 10px 0;
  border-top: 1px soild #ddd;
  border-bottom: 1px soild #ddd;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SectionLink = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 30px;
  border-bottom: solid 1px #ddd;
  padding-bottom: 10px;
`;

export const BookContest = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BookContestTitle = styled.div`
  width: 55%;
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
`;

export const HotGroupTitle = styled.div`
  width: 90%;
  padding: 20px 0 20px 20px;
  font-size: 20px;
  font-weight: bold;
`;

export const HotGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
