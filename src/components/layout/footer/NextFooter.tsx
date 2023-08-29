import React from 'react';
import styled from 'styled-components';

function NextFooter() {
  return (
    <NFWrapper>
      <NFDisplay>
        <NFNextBtn>
          <button>다음</button>
        </NFNextBtn>
      </NFDisplay>
    </NFWrapper>
  );
}

export default NextFooter;

const NFWrapper = styled.div`
  position: fixed;
  bottom: 0;
  height: 70px;
  font-size: 13px;
  background-color: white;
  width: 472px;
  z-index: 9999;
  border-top: 0.5px solid #d7d7d7;
  border-left: 1px solid #ddd;
border-right: 1px solid #ddd;
`;

const NFDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const NFNextBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  background-color: #84614b;
  width: 380px;
  height: 55px;
  border-radius: 20px;

  & button {
    border: none;
    color: white;
    background-color: transparent;
    font-size: 19px;
    font-weight: 700;
    cursor: pointer;

  }
`;
