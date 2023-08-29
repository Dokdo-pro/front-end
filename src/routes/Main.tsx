import React, { useState } from 'react';
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
import GroupCreatePage1 from '../pages/group/groupcreate/GroupCreatePage1';
import GroupCreatePage2 from '../pages/group/groupcreate/GroupCreatePage2';
import GroupCreatePage3 from '../pages/group/groupcreate/GroupCreatePage3';
import BookRec from '../pages/bookrec/BookRec';
import Contest from '../pages/contest/Contest';
import Notifications from '../pages/notifications/Notifications';
import Likes from '../pages/likes/Likes';
import Layout1 from '../components/layout/layout1/Layout1';
import ContestDetail from '../pages/contestdetail/ContestDetail';
import BookRecDetail from '../pages/bookrecdetail/BookRecDetail';
import Layout3 from '../components/layout/layout1/Layout3';
import Layout8 from '../components/layout/layout1/Layout8';

const MainRoutes = () => {
  // Group creation data
  const [groupData, setGroupData] = useState({
    name: '',
    introduction: '',
    image: null,
    location: '',
    age: '',
    tag: [],
    genre: '',
    day: '',
    place: '',
  });

  const updateGroupData = (newData: any) => {
    setGroupData(prevData => ({ ...prevData, ...newData }));
  };

  return (
    <Routes>
      <Route
        path="/create-group/step1"
        element={
          <Layout8>
            <GroupCreatePage1
              data={groupData}
              updateData={updateGroupData}
              handleNext={() => {
                /*...some logic...*/
              }}
            />
          </Layout8>
        }
      />
      <Route
        path="/create-group/step2"
        element={
          <Layout8>
            <GroupCreatePage2
              data={groupData}
              updateData={updateGroupData}
              handleNext={() => {
                /*...some logic...*/
              }}
            />
          </Layout8>
        }
      />
      <Route
        path="/create-group/step3"
        element={
          <Layout8>
            <GroupCreatePage3 data={groupData} updateData={updateGroupData} />
          </Layout8>
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
        path="/group/:groupId/detail"
        element={
          <Layout3>
            <GroupDetail />
          </Layout3>
        }
      />

      <Route
        path="/group/:id/boarddetail"
        element={
          <Layout3>
            <GroupBoardDetail />
          </Layout3>
        }
      />
      <Route
        path="/group/:groupId/boardwrite"
        element={
          <Layout3>
            <GroupBoardWrite />
          </Layout3>
        }
      />
      <Route
        path="/group/:groupId/board"
        element={
          <Layout3>
            <GroupBoard />
          </Layout3>
        }
      />
      <Route
        path="/group/:id/photo/:id"
        element={
          <Layout3>
            <PhotoAlbumDetail />
          </Layout3>
        }
      />
      <Route
        path="/group/:groupId/photowrite"
        element={
          <Layout3>
            <PhotoAlbumWrite />
          </Layout3>
        }
      />
      <Route
        path="/group/:groupId/photo"
        element={
          <Layout3>
            <PhotoAlbum />
          </Layout3>
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
        path="/notifications"
        element={
          <Layout1>
            <Notifications />
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
        path="/contest"
        element={
          <Layout1>
            <Contest />
          </Layout1>
        }
      />
      <Route
        path="/likes"
        element={
          <Layout3>
            <Likes />
          </Layout3>
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
        path="/"
        element={
          <Layout1>
            <Main />
          </Layout1>
        }
      />
    </Routes>
  );
};

export default MainRoutes;
