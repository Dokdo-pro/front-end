import React from 'react';
import styled from 'styled-components';
import PenIcon from '../../../assets/icon/PenIcon.png';
import { Link, useParams } from 'react-router-dom'; // useParams를 임포트

function PenFooter() {
  const { id: groupId } = useParams<{ id: string }>(); // useParams로 groupId 가져오기

  return (
    <Wrapper>
      <Display>
        <Link to={`/group/${groupId}/boardwrite`}>
          {' '}
          {/* groupId를 동적으로 사용 */}
          <Button>
            <img src={PenIcon} alt="" />
          </Button>
        </Link>
      </Display>
    </Wrapper>
  );
}

export default PenFooter;

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  height: 140px;
  font-size: 13px;
  background-color: transparent;
  width: 472px;
  z-index: 9999;
`;

const Display = styled.div`
  width: 95%;
  display: flex;
  justify-content: end;
`;

const Button = styled.button`
  width: 60px;
  height: 60px;
  background-color: white;
  cursor: pointer;
  border-radius: 50%;
  border: 3px solid black;
  & img {
    width: 40px;
    height: 40px;
  }
`;
