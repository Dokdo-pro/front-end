import React from 'react';
import styled from 'styled-components';
import LikeIcon from '@/assets/icon/Favorite.png';

function GroupApplyFooter() {
  return (
    <Wrapper>
      <Display>
        <LikeBtn>
          <button>
            <img src={LikeIcon} alt="" />
          </button>
        </LikeBtn>
        <ApplyBtn>
          <button>가입 신청하기</button>
        </ApplyBtn>
      </Display>
    </Wrapper>
  );
}

export default GroupApplyFooter;

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  height: 70px;
  font-size: 13px;
  background-color: white;
  width: 472px;
  z-index: 9999;
  border-top: 0.5px solid #d7d7d7;
  display: flex;
  align-items: center;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
`;

const Display = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
`;

const LikeBtn = styled.div`
  width: 15%;
  display: flex;
  justify-content: center;
  align-items: center;

  & button {
    width: 40px;
    height: 40px;
    border: none;
    background-color: transparent;
  }
`;

const ApplyBtn = styled.div`
  width: 380px;
  height: 50px;
  border-radius: 20px;
  background-color: #84614b;
  display: flex;
  justify-content: center;
  align-items: center;

  & button {
    border: none;
    color: white;
    background-color: transparent;
    font-size: 21px;
    font-weight: 700;
    cursor: pointer;
  }
`;
