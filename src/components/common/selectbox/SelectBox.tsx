import React from 'react';
import * as SelectStyle from './SelectBox.styled';

function SelectBox() {

return (
<SelectStyle.Select
  id="email2_val"
  name="is_Useremail2"
  className="select_ty1"
>
  <option value="">선택하세요</option>
  <option value="naver.com">naver.com</option>
  <option value="hanmail.net">hanmail.net</option>
  <option value="nate.com">nate.com</option>
  <option value="hotmail.com">hotmail.com</option>
  <option value="gmail.com">gmail.com</option>
  <option value="yahoo.co.kr">yahoo.co.kr</option>
  <option value="yahoo.com">yahoo.com</option>
</SelectStyle.Select>

);
};

export default SelectBox;