import React,{useState} from "react";
import axios from 'axios';
import * as A from '@/pages/admin/Admin.styled';

interface AdminGroupData {
    group_id: number;    
    name: string;
    isRecruit: boolean;
    profile: string;
    introduction: string;
    place: string;
    createdAt: string;
    tags: string;
    search: string;
    location: string;
    day: string;
    genre: string;
    age: string;
}

interface AdminGroupProps {
    data?:AdminGroupData;
}

function GroupData({data}: AdminGroupProps) {
    
    const [deleted, setDeleted] = useState(false);

    async function handleDeleteGroup() {
        try{
            await axios.delete(`http://34.64.149.22:3001/api/v1/groups/${data?.group_id}`);
            setDeleted(true);
        } catch (error) {
            throw error;
        }
    }

    if (!data){
        return null;
    }
    
    const {group_id, name, place, createdAt} = data;
    const utcDate = new Date(createdAt);
    const localDate = utcDate.toLocaleDateString();

    return (
        <tbody>
            <tr>
                {data && (
                    <td>{group_id}</td>
                    )}
                {data && (    
                    <td>{name}</td>
                    )}
                {data && (
                    <td>{place}</td>
                    )}
                {data && (
                    <td>{localDate}</td>
                    )}
                {data && (
                    <td>
                    <A.AdminButton onClick={handleDeleteGroup}>삭제</A.AdminButton>
                        {deleted && <></>}
                    </td>
                )}
            </tr>
        </tbody>
    );
}

export default GroupData;