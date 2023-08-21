import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LoginComponent from '../pages/login/Login';
import SignupComponent from '../pages/signup/Signup';
import EditProfileComponent from '../pages/mypage/editprofile/EditProfile';
import InquiredSuccessComponent from '../pages/mypage/inquiredsuccess/InquiredSuccess';
import InquiryComponent from '../pages/mypage/inquiry/Inquiry';
import LikedGroupsComponent from '../pages/mypage/likedgroups/LikedGroups';
import MyGroupsComponent from '../pages/mypage/mygroups/MyGroups';
import MyPageComponent from '../pages/mypage/mainmypage/MyPage';
import MyPostsComponent from '../pages/mypage/myposts/MyPosts';
import DeleteAccountComponent from '../pages/mypage/deleteaccount/DeleteAccount';

const MypageRoutes = () => {
  return (
    <Routes>
      {/* 로그인 */}
      <Route path="/user/login" element={<LoginComponent />} />
      {/* 회원가입 */}
      <Route path="/user/signup" element={<SignupComponent />} />
      {/* 마이페이지 */}
      <Route path="/user/mypage" element={<MyPageComponent />} />
      {/* 마이페이지/내모임 */}
      <Route path="/user/mypage/mygroups" element={<MyGroupsComponent />} />
      {/* 마이페이지/내가좋아요한모임 */}
      <Route
        path="/user/mypage/likedgroups"
        element={<LikedGroupsComponent />}
      />
      {/* 마이페이지/나의글목록 */}
      <Route path="/user/mypage/myposts" element={<MyPostsComponent />} />
      {/* 마이페이지/나의정보수정 */}
      <Route
        path="/user/mypage/editprofile"
        element={<EditProfileComponent />}
      />
      {/* 마이페이지/회원탈퇴*/}
      <Route path="/user/deleteaccount" element={<DeleteAccountComponent />} />
      {/* 마이페이지/문의하기 */}
      <Route path="/user/inquiry" element={<InquiryComponent />} />
      {/* 마이페이지/문의하기성공페이지 */}
      <Route
        path="/user/inquiredsuccess"
        element={<InquiredSuccessComponent />}
      />
    </Routes>
  );
};
export default MypageRoutes;
