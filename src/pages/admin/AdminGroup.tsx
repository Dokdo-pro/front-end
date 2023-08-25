import React,{useState, useEffect} from "react";
import * as A from "./Admin.styled";
import axios from 'axios';
import GroupData from './GroupData';

async function fetchAllGroup() {
    try{
        const response = await axios.get('http://localhost:3001/api/v1/admin/groups')
        return response.data.data; 
    } catch (error) {
        throw error;
    }
}

function AdminGroup (){
    const [groupData, setGroupData] = useState([]);

    useEffect(()=>{
        async function fetchData() {
            try {
                const data = await fetchAllGroup(); // API 요청 호출
                // 데이터 가공 및 저장
                setGroupData(data);
            } catch(error) {
                console.error('데이터를 가져오는 중 에러 발생:', error);
            }
        }
        fetchData();
    },[]);
    return (
        <A.Wrapper>
            <A.Menu>
            <A.Top>
            <A.Headline>토론 모임 관리</A.Headline>
            <A.Select>
                <option value="popularity">좋아요</option>
                <option value="조회">최신순</option>
            </A.Select>
            </A.Top>
            <A.Layout> 
                <A.Table>
                <tr>
                    <th>번호</th>
                    <th>모임명</th>
                    <th>모임장</th>
                    <th>인원</th>
                    <th>관리</th>
                </tr>
                {groupData.map((name, group_id) => ( 
            <GroupData key={group_id} data={name} /> 
            ))}  
               </A.Table>
            </A.Layout>
            </A.Menu>       
        </A.Wrapper>
    )
}

export default AdminGroup;