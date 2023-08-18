import React from 'react';
import {
    Container,
    ResultText,
    SocialIcons,
    SocialIcon,
    SocialIconImage,
} from './LiteracytestResult.Style';
import facebookIcon from '../../assets/img/facebook.png';
import twitterIcon from '../../assets/img/twitter.png';
import kakaoIcon from '../../assets/img/카카오톡아이콘.png';

type LiteracyTestResultProps = {
    results: string[]; // 사용자가 선택한 답변 배열
    correctAnswers: number; // 정답 수
};

const LiteracyTestResult: React.FC<LiteracyTestResultProps> = ({
    results,
    correctAnswers,
}) => {
    return (
        <Container>
            <ResultText>{`정답 수: ${correctAnswers} / ${results.length}`}</ResultText>
            <SocialIcons>
                <SocialIcon href="https://facebook.com">
                    <SocialIconImage src={facebookIcon} alt="Facebook" />
                </SocialIcon>
                <SocialIcon href="https://twitter.com">
                    <SocialIconImage src={twitterIcon} alt="Twitter" />
                </SocialIcon>
                <SocialIcon href="https://www.kakaocorp.com">
                    <SocialIconImage src={kakaoIcon} alt="Kakao" />
                </SocialIcon>
                {/* 여기에 더 많은 소셜 아이콘 추가 가능 */}
            </SocialIcons>
        </Container>
    );
};

export default LiteracyTestResult;
