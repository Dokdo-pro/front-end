import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  box-sizing: border-box;
  width: 474px;
  margin: 120px auto;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto 40px auto;
  box-sizing: border-box;
  width: 420px;
  justify-content: space-between;
`;
export const TitleWrap = styled.div`
  width: 100%;
  text-align: left;
  margin-bottom: 27px;
`;
export const Title = styled.div`
  display: flex;

  font-size: 25px;
  font-weight: bold;
  margin-bottom: 13px;
`;

export const Description = styled.p`
  font-size: 15px;
  margin-bottom: 3px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export const FormWrapper = styled.div`
  width: 420px;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;

 

`;



export const ReasonSelect = styled.select`
  height: 67px;
  border-radius: 8px;
  border: none;
  font-size: 18px;
  background-color: #a8a8a8;
`;

export const Input = styled.input`
  height: 67px;
  margin-top: 10px;
  border-radius: 8px;
border: none;
  font-size: 18px;
  background-color: #a8a8a8;
`;

export const LastDescription = styled.p`
  font-size: 15px;
  margin: 0 auto 5px auto;

`;

export const ButtonWrap = styled.div`
display: flex;
width: 100%;
height: 67px;
margin-top: 40px;
justify-content: center;


`;
export const BackButton = styled.button`
  width: 45%;
  border-radius: 8px;
  font-size: 17px;
  font-weight: bold;
  background-color: white;
  border: 1px solid #595959;
`;

export const BackLink = styled(Link)`
    text-decoration: none;
    color: #595959;
    
`;

export const RemoveButton = styled.button`
  width: 45%;
  border-radius: 8px;
  font-size: 17px;
  font-weight: bold;
  background-color: #84614b;
  border: none;
  margin-left: 10px;
`;

export const RemoveLink = styled(Link)`
  text-decoration: none;
  color: #FFFFFF;
  

`;

export const BtnSelect = styled.button`
  border: none;
width: 250px;
    height: 50px;
    padding: 15px;
    background: darkred;
    margin-left: 30px;
    color: #fff;
    text-align-last: left;
  line-height: 1;
&:active+.ListMem {
    display: block;
}
`

export const ListMem = styled.ul`

    margin-left: 30px;
    width: 250px;
    height: 30px;
    


`