import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 474px;
  margin: 0 auto;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  box-sizing: border-box;
  width: 420px;
  justify-content: space-between;
`;

export const GroupBoardList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

`;
export const BoardWrap = styled.div`
width: 474px;
  border-bottom: solid 1px #ddd;
`;
export const Boardbox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 13px 0 8px 0;

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
  width: 33px;
  height: 33px;
  border-radius: 50%;
  margin-bottom: 5px;
`;
export const UpdatedProfile = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  
`;
export const Writer = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: black;
`;

export const PostedDate = styled.div`
  color: #727272;
  font-size: 12px;
`;
export const Title = styled.div`
  font-weight: 700;
  font-size: 14px;
`;

export const Content = styled.div`
  font-size: 13px;
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
  margin-left: 20px;
`;
