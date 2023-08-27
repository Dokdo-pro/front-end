import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  align-items: center;
  margin: 30px 0;
`;
export const Container = styled.div`
  width: 88px;
  height: 88px;
  background-color: #fff7ec;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: flex-end; 
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Genre = styled.div`
  padding: 7px;
  font-size: 14px;
  text-align: center;
  color: black; 
`;
export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;