import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 474px;
  margin: 15px auto 0 auto;
`;


export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 10px auto 0 auto;
  box-sizing: border-box;
  width: 420px;
  justify-content: space-between;
`;

export const GroupBoardList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
`;

export const Boardbox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin: 10px 0;
  box-sizing: border-box;
  border: solid 1px #ddd;
`;

export const BoardLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
  width: 285px;
  height: auto;
  overflow: hidden;
  margin-top: 3px;

  & div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 5px;
  }
`;

export const ProfileData = styled.div`
  display: flex;
  
  align-items: center;
`;

export const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;
export const UpdatedProfile = styled.div`
display: flex;
flex-direction: column;
margin-left: 15px;



`
export const Writer = styled.div`
  font-size: 14px;
  color: black;
`;

export const PostedDate = styled.div`
  color: #727272;
  font-size: 12px;
`;

export const Content = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
`;

export const GroupDes = styled.div`
  display: flex;
  font-size: 13px;
  color: gray;
`;
export const ContentLikes = styled.div`
  margin-right: 10px;
`;
export const ContentComment = styled.div`
  font-size: 13px;
  color: gray;
`;

export const BoardImg = styled.img`
  width: 100px;
  height: 100px;
  background-color: #ddd;
  border-radius: 15px;
  overflow: hidden;
`;
