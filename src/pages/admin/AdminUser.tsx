import React, {useState, useEffect} from "react";
import * as A from './Admin.styled';
import axios from 'axios';
import UserData from './UserData';

async function fetchAllUser() {
    try{
        const response = await axios.get('http://localhost:3001/api/v1/admin/users') 
        return response.data.data;
    } catch (error) {
        throw error;
    }
}

function AdminUser() {
    const [userData, setUserData] = useState([]);
    useEffect(()=>{
        async function fetchData() {
            try {
                const data = await fetchAllUser(); 
                setUserData(data);
            } catch(error) {
                console.error('데이터를 가져오는 중 에러 발생:', error);
            }
        }
        fetchData();
    },[]);

    return (
        <A.Wrapper>
            <A.Menu>
            <A.Headline>회원 정보 관리</A.Headline>
            <A.Total>총 {UserData.name.length} 명</A.Total>
            <A.Layout> 
                <A.Table>
                <tr>
                    <th>닉네임</th>
                    <th>이메일</th>
                    <th>관리</th>
                </tr>

                {userData.map((email, name) => ( 
            <UserData key={name} data={email} />   
           ))}
            </A.Table>
            </A.Layout> 
            </A.Menu>    
    </A.Wrapper>
    )
}

export default AdminUser;