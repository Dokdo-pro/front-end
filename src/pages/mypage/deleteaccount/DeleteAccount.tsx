import React, { useState } from 'react';
import * as DeleteStyle from './DeleteAccount.styled';

import { removeCookie } from '../../../helper/Cookie';
import { useNavigate } from 'react-router-dom';
import AxiosC from '../../../helper/AxiosC';


function DeleteAccountComponent() {
  const [Password, setPassword] = useState('');
  const navigate = useNavigate();

    const onPasswordHanlder = (e: {
      target: { value: React.SetStateAction<string> };
    }) => {
      setPassword(e.target.value);
    };


  // 탈퇴하기 버튼의 onClick Event
  // 이 함수에서 AxiosC를 axios로 바꾸면 탈퇴가 안된다
  const handleWithDrawal = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      const response = await AxiosC.put(
        'http://localhost:3001/api/v1/auth/withdrawal',
        {
          password: Password,
        },
        { withCredentials: true },
      );
      console.log(response);
      if (response.status === 200) {
        // 액세스 토큰 쿠키 삭제 ?? 해야하는가..
  
        alert('회원 탈퇴 되셨습니다.');
        navigate('/');
      } else {
        return alert('response 코드가 200이 아님');
      }
    } catch (e) {
      console.error('회원 탈퇴 에러:', e);
      alert('서버 오류: 다시 시도해주세요.');
    }
  };

  return (
    <DeleteStyle.Container>
      <DeleteStyle.Wrapper>
        <DeleteStyle.TitleWrap>
          <DeleteStyle.Title>회원 탈퇴하기</DeleteStyle.Title>
          <DeleteStyle.Description>
            정말 떠나시는 건가요?
          </DeleteStyle.Description>
          <DeleteStyle.Description>
            한 번 더 생각해 보지 않으시겠어요?
          </DeleteStyle.Description>
        </DeleteStyle.TitleWrap>

        <DeleteStyle.Form>
          <DeleteStyle.FormWrapper>
            <DeleteStyle.ReasonSelect
              id="deletereason_val"
              name="is_DeleteReason"
              className="select_deletereason"
            >
              <option value="">탈퇴 사유</option>
              <option value="흥미가 떨어짐">흥미가 떨어짐</option>
              <option value="내가 원한 문해력의 성장을 이룸">
                내가 원한 문해력의 성장을 이룸
              </option>
              <option value="다른 회원과의 불화">다른 회원과의 불화</option>
              <option value="기타">기타</option>
            </DeleteStyle.ReasonSelect>
            <DeleteStyle.Input
              type="password"
              placeholder="사용 중인 비밀번호를 입력해주세요."
              onChange={onPasswordHanlder}
              value={Password}
            />
          </DeleteStyle.FormWrapper>
          <DeleteStyle.LastDescription>
            회원님! 탈퇴 후 3개월 동안은 회원가입이 불가능합니다.
          </DeleteStyle.LastDescription>
          <DeleteStyle.LastDescription>
            탈퇴한 아이디는 본인과 타인 모두 재사용 및
          </DeleteStyle.LastDescription>
          <DeleteStyle.LastDescription>
            복구가 불가하오니 신중하게 선택해 주시길 바랍니다.
          </DeleteStyle.LastDescription>
          <DeleteStyle.ButtonWrap>
            <DeleteStyle.BackButton>
              <DeleteStyle.BackLink to="/">취소하기</DeleteStyle.BackLink>
            </DeleteStyle.BackButton>
            <DeleteStyle.RemoveButton onClick={handleWithDrawal}>
              회원 탈퇴하기
            </DeleteStyle.RemoveButton>
          </DeleteStyle.ButtonWrap>
        </DeleteStyle.Form>
      </DeleteStyle.Wrapper>
    </DeleteStyle.Container>
  );
}

export default DeleteAccountComponent;
