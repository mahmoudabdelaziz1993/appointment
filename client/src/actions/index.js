import axios from 'axios';
import {FETCH_USER ,FETCH_APPOINTMENT , FETCH_USER_LIST } from './types';
export const fetchUser = ()=>async dispatch =>{
    const res = await axios.get('/api/current_user');
    dispatch({type:FETCH_USER,payload:res.data});
};
export const fetchUserList  = ()=>async dispatch =>{
    const res = await axios.get('/api/user-list');
    dispatch({type:FETCH_USER_LIST,payload:res.data});
}
export const cancelRequest = (id)=>async dispatch =>{
    await axios.get(`/api/cancel_request/${id}`);
    const res = await axios.get('/api/current_user');
    dispatch({type:FETCH_USER,payload:res.data});
}
export const sendRequest = (id)=> async dispatch =>{
    await axios.get(`/api/send_request/${id}`);
    const res = await axios.get('/api/current_user');
    dispatch({type:FETCH_USER,payload:res.data});
}

export const rejectRequest = (id)=> async dispatch =>{
    await axios.get(`/api/reject_request/${id}`);
    const res = await axios.get('/api/current_user');
    dispatch({type:FETCH_USER,payload:res.data});
}

export const apCreate = (id)=> async dispatch =>{
    await axios.get(`/api/appointment/create/${id}`);
    const res = await axios.get('/api/current_user');
    dispatch({type:FETCH_USER,payload:res.data});

}
export const apCancle = (id)=> async dispatch =>{
    await axios.get(`/api/appointment/cancel/${id}`);
    const res = await axios.get('/api/current_user');
    dispatch({type:FETCH_USER,payload:res.data});

}