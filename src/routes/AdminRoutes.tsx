import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Admin from '@/pages/admin/Admin';
import AdminPost from '@/pages/admin/AdminPost';
import AdminGroup from '@/pages/admin/AdminGroup';
import InquiryList from '@/pages/admin/InquiryList';
import InquiryReply from '@/pages/admin/InquiryReply';
import AdminUser from '@/pages/admin/AdminUser';

function AdminRoutes() {
  return (
    <Routes>
      <Route
        path="/admin/user"
        element={
          <Admin>
            <AdminUser />
          </Admin>
        }
      />
      <Route
        path="/admin/post"
        element={
          <Admin>
            <AdminPost />
          </Admin>
        }
      />
      <Route
        path="/admin/group"
        element={
          <Admin>
            <AdminGroup />
          </Admin>
        }
      />
      <Route
        path="/admin/inquirylist"
        element={
          <Admin>
            <InquiryList />
          </Admin>
        }
      />
      <Route path="/admin/inquiryreply" element={<InquiryReply />} />
      <Route
        path="/admin"
        element={
          <Admin>
            <></>
          </Admin>
        }
      />
    </Routes>
  );
}
export default AdminRoutes;
