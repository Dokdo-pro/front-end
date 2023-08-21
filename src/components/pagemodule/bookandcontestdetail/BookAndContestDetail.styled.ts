import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 474px;
`;

export const Title = styled.div`
  font-size: 30px;
  margin: 30px;
`;

export const Img = styled.div`
  width: 474px;
  height: 474px;
  background-color: #fff7ec;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 20px;

  & div {
    padding: 10px 0;
  }
`;
