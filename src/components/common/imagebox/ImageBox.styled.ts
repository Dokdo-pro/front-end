import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  width: 88px;
  height: 88px;
  background-color: #fff7ec;
  border-radius: 20px;
  flex-shrink: 1;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  margin: 10px;
`;

export const Genre = styled.div`
  padding: 7px;
  font-size: 14px;
`;
