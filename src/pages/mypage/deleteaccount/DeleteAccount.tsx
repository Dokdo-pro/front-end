import React from 'react';
import * as DeleteStyle from './DeleteAccount.styled';

function DeleteAccountComponent() {
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
            <DeleteStyle.RemoveButton>
              <DeleteStyle.RemoveLink to="/">
                회원 탈퇴하기
              </DeleteStyle.RemoveLink>
            </DeleteStyle.RemoveButton>
          </DeleteStyle.ButtonWrap>
        </DeleteStyle.Form>
      </DeleteStyle.Wrapper>
    </DeleteStyle.Container>
  );
}

export default DeleteAccountComponent;
