import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import LoginComponent from '@/pages/login/Login';
import SignupComponent from '@/pages/signup/Signup';
import SignupSuccessComponent from '@/pages/signupsuccess/Signupsuccess';
import EditProfileComponent from '@/pages/mypage/editprofile/EditProfile';
import InquiredSuccessComponent from '@/pages/mypage/inquiredsuccess/InquiredSuccess';
import InquiryComponent from '@/pages/mypage/inquiry/Inquiry';
import LikedGroupsComponent from '@/pages/mypage/likedgroups/LikedGroups';
import MyGroupsComponent from '@/pages/mypage/mygroups/MyGroups';
import MyPageComponent from '@/pages/mypage/mainmypage/MyPage';
import MyPostsComponent from '@/pages/mypage/myposts/MyPosts';
import DeleteAccountComponent from '@/pages/mypage/deleteaccount/DeleteAccount';
import Layout1 from '@/components/layout/layout1/Layout1';
import Layout3 from '@/components/layout/layout1/Layout3';
import AxiosC from '@/helper/AxiosC';

const MypageRoutes = () => {
  const [isLogin, setIsLogin] = useState(false);

  const checkUserPermission = async () => {
    try {
      const response = await AxiosC.post('/api/v1/auth/login');

      const userData = response.data;

      // 사용자의 권한에 따라 isAdmin 값을 설정한다.
      setIsLogin(userData.isLogin);
    } catch (error) {
      console.error('권한 확인 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때 사용자의 권한을 확인한다.
    checkUserPermission();
  }, []);

  return (
    <Routes>
      {/* 로그인 */}
      <Route
        path="/login"
        element={
          <Layout3>
            <LoginComponent />
          </Layout3>
        }
      />
      {/* 회원가입 */}
      <Route
        path="/signup"
        element={
          <Layout3>
            <SignupComponent />
          </Layout3>
        }
      />
      {/* 회원가입 성공 */}
      <Route
        path="/signupsuccess"
        element={
          <Layout1>
            <SignupSuccessComponent />
          </Layout1>
        }
      />
      {/* 마이페이지/회원탈퇴 */}
      <Route
        path="/user/deleteaccount"
        element={
          <Layout3>
            <DeleteAccountComponent />
          </Layout3>
        }
      />
      {/* 마이페이지/내모임 */}
      <Route
        path="/user/mypage/mygroups"
        element={
          <Layout3>
            <MyGroupsComponent />
          </Layout3>
        }
      />
      {/* 마이페이지/내가좋아요한모임 */}
      <Route
        path="/user/mypage/likedgroups"
        element={
          <Layout3>
            <LikedGroupsComponent />
          </Layout3>
        }
      />
      {/* 마이페이지/나의글목록 */}
      <Route
        path="/user/mypage/myposts"
        element={
          <Layout3>
            <MyPostsComponent />
          </Layout3>
        }
      />
      {/* 마이페이지/나의정보수정 */}
      <Route
        path="/user/mypage/editprofile"
        element={
          <Layout3>
            <EditProfileComponent />
          </Layout3>
        }
      />

      {/* 마이페이지/문의하기성공페이지 */}
      <Route
        path="/user/mypage/inquiredsuccess"
        element={
          <Layout1>
            <InquiredSuccessComponent />
          </Layout1>
        }
      />
      {/* 마이페이지/문의하기 */}
      <Route
        path="/user/mypage/inquiry"
        element={
          <Layout1>
            <InquiryComponent />
          </Layout1>
        }
      />
      {/* 마이페이지 */}
      <Route
        path="/user/mypage"
        element={
          <Layout3>
            <MyPageComponent />
          </Layout3>
        }
      />
    </Routes>
  );
};
export default MypageRoutes;
