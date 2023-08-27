import React from 'react';
import * as PA from './PhotoAlbum.styled';
import SearchInput from '../../../components/common/searchinput/SearchInput';
import PenFooter from '../../../components/layout/footer/PenFooter';
import GroupHeader from '../../../components/layout/header/GroupHeader';

const PhotoAlbum = () => {
  return (
    <PA.Wrapper>
      <GroupHeader />

      <PenFooter />
      <SearchInput />
      <PA.GroupPhotoTitle>모임 사진첩</PA.GroupPhotoTitle>

      <PA.PhotoList>
        <ul>
          <li>
            {Array(5)
              .fill('')
              .map((v, i) => (
                <PA.PhotoBoardBox key={i}>
                  <PA.PhotoImg>
                    <img src="" alt="업로드사진" />
                  </PA.PhotoImg>
                  <PA.PhotoBoxBottom>
                    <PA.PhotoBoardTitle>
                      8/15 이수역 독서토론 모임 사진입니다!!
                    </PA.PhotoBoardTitle>
                    <PA.Profile>
                      <PA.ProfileImg>
                        <img src="" alt="프로필" />
                      </PA.ProfileImg>
                      <div>최형욱</div>
                    </PA.Profile>
                  </PA.PhotoBoxBottom>
                </PA.PhotoBoardBox>
              ))}
          </li>
          <PA.PhotoBoardBox>
            <PA.PhotoImg>
              <img src="" alt="업로드사진" />
            </PA.PhotoImg>
            <PA.PhotoBoxBottom>
              <PA.PhotoBoardTitle>
                8/15 이수역 독서토론 모임 사진입니다!!
              </PA.PhotoBoardTitle>
              <PA.Profile>
                <PA.ProfileImg>
                  <img src="" alt="프로필" />
                </PA.ProfileImg>
                <div>최형욱</div>
              </PA.Profile>
            </PA.PhotoBoxBottom>
          </PA.PhotoBoardBox>
        </ul>
      </PA.PhotoList>
    </PA.Wrapper>
  );
};

export default PhotoAlbum;
