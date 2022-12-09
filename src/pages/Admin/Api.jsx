// import axios from "axios"
// import { addMe, addToken } from '../../redux/action/authAction';
// import { useDispatch} from 'react-redux';

// export const getData = async(setResult) =>{
//     try {
//       const res = await axios.get("https://finalproject-be-production.up.railway.app/blog")
//       console.log(res);
//       setResult(res.data)
//     } catch (error) {
//       alert(error.response.data.msg);
//     }
//  }

// export const postData = async({setPostDatas, image, title, subTitle, description}) =>{
    // try {
    //   const dispatch = useDispatch();
    //   const dataPost ={
    //     image: image.filesUploaded[0].url, 
    //     title, 
    //     subTitle, 
    //     description}
    //   const res = await axios.post("https://finalproject-be-production.up.railway.app/blog", 
    //   {headers: {origin: true}},{ token: localStorage.getItem('token') },dataPost)
    //   dispatch(addMe(res));
    //   dispatch(addToken(response.data.token));
    //   console.log(res);
    //   if (res){
    //     setPostDatas(res.data)
    //   }
    // } catch (error) {
    //   console.log(error);
    // }
// }