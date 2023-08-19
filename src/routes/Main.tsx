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
import BookRecommendation from '../pages/bookrecommendation/BookRecommendation';
import Contest from '../pages/contest/Contest';
import Notifications from '../pages/notifications/Notifications';
import Likes from '../pages/likes/Likes';

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/search" element={<Search />} />
      <Route path="/group" element={<Group />} />
      <Route path="/group/list" element={<GroupList />} />
      <Route path="/group/detail/:id" element={<GroupDetail />} />
      <Route path="/group/board" element={<GroupBoard />} />
      <Route path="/group/board/detail/:id" element={<GroupBoardDetail />} />
      <Route path="/group/board/write/:id" element={<GroupBoardWrite />} />
      <Route path="/group/photo" element={<PhotoAlbum />} />
      <Route path="/group/photo/detail/:id" element={<PhotoAlbumDetail />} />
      <Route path="/group/photo/write/:id" element={<PhotoAlbumWrite />} />
      <Route path="/freeboard/list" element={<FreeBoardList />} />
      <Route path="/freeboard/detail" element={<FreeBoardDetail />} />
      <Route path="/freeboard/write/:id" element={<FreeBoardWrite />} />
      <Route path="/books" element={<BookRecommendation />} />
      <Route path="/contest" element={<Contest />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/likes" element={<Likes />} />
    </Routes>
  );
};

export default MainRoutes;
