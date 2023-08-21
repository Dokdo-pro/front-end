import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 474px;
`;

export const FreeBoardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 100%;
`;

export const Region = styled.div`
  display: flex;
  align-items: center;
  height: 50px;

  & li {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;
export const FreeBoardSelectBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export const FreeBoardSelect = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
