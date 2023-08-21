import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Main from '../pages/main/Main';
import Search from '../pages/search/Search';
import Group from '../pages/group/group/Group';
import GroupList from '../pages/group/grouplist/GroupList';
import GroupDetail from '../pages/group/groupdetail/GroupDetail';
import GroupBoard from '../pages/group/groupboard/GroupBoard';
import GroupBoardDetail from '../pages/group/groupboarddetail/GroupBoardDetail';
import GroupBoardWrite from '../pages/group/groupboardwrite/GroupBoardWrite';
import PhotoAlbum from '../pages/group/photoalbum/PhotoAlbum';
import PhotoAlbumDetail from '../pages/group/photoalbumdetail/PhotoAlbumDetail';
import PhotoAlbumWrite from '../pages/group/photoalbumwrite/PhotoAlbumWrite';
import FreeBoardList from '../pages/freeboard/freeboardlist/FreeBoardList';
import FreeBoardDetail from '../pages/freeboard/freeboardDetail/FreeBoardDetail';
import FreeBoardWrite from '../pages/freeboard/freeboardwrite/FreeBoardWrite';
import BookRec from '../pages/bookrec/BookRec';
import Contest from '../pages/contest/Contest';
import Notifications from '../pages/notifications/Notifications';
import Likes from '../pages/likes/Likes';
import Layout1 from '../components/layout/layout1/Layout1';
import ContestDetail from '../pages/contestdetail/ContestDetail';
import BookRecDetail from '../pages/bookrecdetail/BookRecDetail';

const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout1>
            <Main />
          </Layout1>
        }
      />
      <Route
        path="/search"
        element={
          <Layout1>
            <Search />
          </Layout1>
        }
      />
      <Route
        path="/group"
        element={
          <Layout1>
            <Group />
          </Layout1>
        }
      />
      <Route
        path="/group/list"
        element={
          <Layout1>
            <GroupList />
          </Layout1>
        }
      />
      <Route
        path="/group/detail/:id"
        element={
          <Layout1>
            <GroupDetail />
          </Layout1>
        }
      />
      <Route
        path="/group/board"
        element={
          <Layout1>
            <GroupBoard />
          </Layout1>
        }
      />
      <Route
        path="/group/board/detail/:id"
        element={
          <Layout1>
            <GroupBoardDetail />
          </Layout1>
        }
      />
      <Route
        path="/group/board/write/:id"
        element={
          <Layout1>
            <GroupBoardWrite />
          </Layout1>
        }
      />
      <Route
        path="/group/photo"
        element={
          <Layout1>
            <PhotoAlbum />
          </Layout1>
        }
      />
      <Route
        path="/group/photo/detail/:id"
        element={
          <Layout1>
            <PhotoAlbumDetail />
          </Layout1>
        }
      />
      <Route
        path="/group/photo/write/:id"
        element={
          <Layout1>
            <PhotoAlbumWrite />
          </Layout1>
        }
      />
      <Route
        path="/freeboard/list"
        element={
          <Layout1>
            <FreeBoardList />
          </Layout1>
        }
      />
      <Route
        path="/freeboard/detail"
        element={
          <Layout1>
            <FreeBoardDetail />
          </Layout1>
        }
      />
      <Route
        path="/freeboard/write/:id"
        element={
          <Layout1>
            <FreeBoardWrite />
          </Layout1>
        }
      />
      <Route
        path="/bookrec"
        element={
          <Layout1>
            <BookRec />
          </Layout1>
        }
      />
        <Route
        path="/bookrec/detail"
        element={
          <Layout1>
            <BookRecDetail />
          </Layout1>
        }
      />
      
      <Route
        path="/contest"
        element={
          <Layout1>
            <Contest />
          </Layout1>
        }
      />
        <Route
        path="/contest/detail"
        element={
          <Layout1>
           <ContestDetail />
          </Layout1>
        }
      />
      <Route
        path="/notifications"
        element={
          <Layout1>
            <Notifications />
          </Layout1>
        }
      />
      <Route
        path="/likes"
        element={
          <Layout1>
            <Likes />
          </Layout1>
        }
      />
      
    </Routes>
  );
};

export default MainRoutes;
