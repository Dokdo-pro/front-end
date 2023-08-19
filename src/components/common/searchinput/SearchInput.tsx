import React from 'react';
import * as SI from './SearchInput.styled';
import searchIcon from '../../../assets/image/Search.png'; 

// props -> { placeholder }
function SearchInput() {
  return (
    <SI.Wrapper>
    {/*placeholder={placeholder} 입력해야 함 */}
      <SI.Input type="text" placeholder="검색어를 입력하세요" />
      <SI.Button>
        <SI.Icon src={searchIcon} alt="돋보기 아이콘" />
      </SI.Button>
    </SI.Wrapper>
  );
}



export default SearchInput;
