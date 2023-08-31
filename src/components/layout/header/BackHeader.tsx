import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Logo from '@/assets/img/Logo2.png'
function BackHeader() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <Display>
        <BackBtn>
          <button onClick={goBack}>←</button>
        </BackBtn>
        <PropsBox>
          <Props>
            <img src={Logo} alt="로고 이미지" />
          </Props>
        </PropsBox>
      </Display>
    </Wrapper>
  );
}

export default BackHeader;

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50px;
  width: 472px;
  position: fixed;
  z-index: 9999;
  border-bottom: 0.5px solid #d7d7d7;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
`;

const Display = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 100%;
  padding: 0 10px;
`;

const BackBtn = styled.div`
  & button {
    border: none;
    background-color: transparent;
    font-size: 25px;
    cursor: pointer;
  }
`;

const PropsBox = styled.div`
 width: 93%;
 display: flex;
 justify-content: center;
`

const Props = styled.div`
  text-align: center;
  width: 58px;
  height: 32px;
  padding-right: 30px;

  & img {
    width: 100%;
    height: 100%;
    
  }
`;
