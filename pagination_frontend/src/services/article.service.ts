import axios, { AxiosResponse } from 'axios';
import { Article } from '../interfaces/article';

const URL: string = "http://localhost:4000";

export const getVideos = ():Promise<AxiosResponse<any[]>> => {
    const res = axios.get(URL);
    return res;
}

export const postVideos = ():void => {
    console.log(axios.post(URL));
}

export const deleteVideos = ():void => {
    axios.delete(URL);
}

export const deleteVideo = (id:string):Promise<AxiosResponse<any>> => {
        const res = axios.delete<Article>(`${URL}/${id}`);
        return res;
    }