import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center; // 수평 중앙 정렬
  justify-content: center; // 수직 중앙 정렬
  width: 474px;
  height: 100vh; // 화면의 높이만큼 설정
`;

export const ResultText = styled.div`
  font-size: 24px; // 원하는 글꼴 크기로 설정
  font-weight: bold; // 원하는 글꼴 두께로 설정
  color: #333; // 원하는 색상으로 설정
  margin: 20px; // 원하는 마진으로 설정
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const SocialIcon = styled.a`
  margin: 0 10px;
`;

export const SocialIconImage = styled.img`
  width: 30px; // 원하는 크기로 설정
  height: 30px; // 원하는 크기로 설정
`;

export const ResultImage = styled.img`
  width: 200px; // 너비 조정
  height: auto; // 비율 유지
  margin: 20px 0; // 여백 추가
`;
