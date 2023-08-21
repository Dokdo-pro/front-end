import React from 'react';
import {  Route, Routes } from 'react-router-dom';

import Admin from '../pages/admin/Admin';
import AdminPost from '../pages/admin/AdminPost';
import AdminGroup from '../pages/admin/AdminGroup';
import InquiryList from '../pages/admin/InquiryList';
import InquiryReply from '../pages/admin/InquiryReply';
import AdminUser from '../pages/admin/AdminUser';

function AdminRoutes () {
    return (
        <Routes>
            <Route path="/admin/user" element={<AdminUser />} />
            <Route path="/admin/post" element={<AdminPost />} />
            <Route path="/admin/group" element={<AdminGroup />} />
            <Route path="/admin/inquirylist" element={<InquiryList />} />
            <Route path="/admin/inquiryreply" element={<InquiryReply />} />
            <Route path="/" element={<Admin /> } />
        </Routes>
    )
}
export default AdminRoutes;