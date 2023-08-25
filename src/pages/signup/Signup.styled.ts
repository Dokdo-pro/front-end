import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;

  box-sizing: border-box;
  width: 474px;
  margin: 30px auto 0 auto;
`;

export const TitleWrap = styled.div`
  width: 420px;
  text-align: left;
`;
export const Title = styled.p`
  display: flex;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Description = styled.p`
  font-size: 25px;
  font-weight: bold;
`;

export const Wrapper = styled.form`
  width: 420px;
  margin: 15px 27px 16px 27px;
  justify-content: center;
`;
export const FormTag = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 7px;
`;
export const Tag = styled.div`
  display: flex;
  justify-items: left;
`;

export const FormInput = styled.div`
  display: flex;
`;

export const Input = styled.input`
  display: flex;
  font-size: 16px;
  width: 100%;
  height: 50px;
  border-radius: 8px;
`;

export const Alert = styled.div`
  display: flex;
  justify-content: left;
  margin-top: 10px;
  margin-left: 5px;
  font-size: 14px;
  color: #848484;
`;

export const EmailInput = styled(Input)`
  width: 100%;
`;

export const InputButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
  font-size: 18px;
  border-radius: 8px;
  cursor: pointer;
`;


export const Wrapper2 = styled(Wrapper)`
  margin: 10px 27px 16px 27px;
`;

export const CheckWrapper = styled.div`
  box-sizing: border-box;
  border-radius: 4px;
  background-color: lightgray;
  padding: 10px 10px 15px 10px;
`;
export const CheckLabel = styled.label`
  display: flex;
  font-size: 15px;
  padding: 0 10px 10px 10px;
  color: #484848;
  align-items: center;
`;
export const CheckInput = styled.input`
  margin-right: 8px;
`;

export const AllCheckLabel = styled(CheckLabel)`
  font-size: 16px;
font-weight: bold;
 
  padding: 10px 10px;
  color: black;
`;

export const CheckBox = styled.div`
  margin-top: 10px;
`;

export const SubmitButton = styled(InputButton)`
  width: 100%;
  height: 50px;
  display: flex;
  margin: 80px auto 10px auto;
  background-color: #84614b;
  border: none;
  text-decoration: none;
  color: white;
`;

