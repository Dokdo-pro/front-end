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
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin: 20px;
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
    width: 30px;
    height: 30px;
`;
