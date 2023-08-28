import React,{useState} from "react";
import axios from 'axios';
import * as A from './Admin.styled';

interface AdminUserData {
    name: string;
    email: string;
    user_id: string;    
}

interface AdminUserProps {
data?:AdminUserData

}

function UserData({data}: AdminUserProps) {

    const [deleted, setDeleted] = useState(false);
    
    async function handleDeleteUser() {
        try{
            await axios.delete(`http://localhost:3001/api/v1/admin/users/${data?.user_id}`);
            setDeleted(true);
        } catch (error) {
            throw error;
        }
    }

    if (!data) {
        return null;
    }

    const {name, email} = data;

    return (
        <tr>
            {data && (
                <td>{name}</td>
                )}
            {data && (
                <td>{email}</td>
                )}
            {data && (
                <td>
                    <A.AdminButton>수정</A.AdminButton>
                    <A.AdminButton type="submit" onClick={handleDeleteUser}>삭제</A.AdminButton>
                    {deleted && <p>유저가 삭제되었습니다.</p>}
                </td>
                )}
        </tr>
    );
}

export default UserData;