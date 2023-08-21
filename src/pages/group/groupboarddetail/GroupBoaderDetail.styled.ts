import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const User = styled.div`
  display: grid;
  grid-template-columns: 75px auto;
  margin: 20px 10px;
`;

export const ProfileImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ddd;
  overflow: hidden;
  margin: auto;
`;

export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const UserWriteBox = styled.div`
  box-sizing: border-box;
  border-top: solid 1px #ddd;
  border-bottom: solid 1px #ddd;
  padding: 20px;
  height: 100%;
`;

export const Button = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 40px;

  & button {
    width: 150px;
    height: 40px;
    border: none;
    background-color: grey;
    border-radius: 10px;
  }
`;

export const Comment = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  border-top: solid 1px #ddd;
`;

export const CommentProfileImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ddd;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  flex-shrink: 0;
`;

export const UserReply = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
  overflow: hidden;
  word-wrap: break-word;
`;

export const UserCommentBox = styled.div`
  display: grid;
  grid-template-columns: 75px auto;
  margin: 20px 10px;
  justify-items: end;
`;
