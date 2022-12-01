import axios from "axios";

export const getData = async(setResult) =>{
    try {
      const res = await axios.get("https://finalproject-be-production.up.railway.app/blog")
      console.log(res);
      setResult(res.data)
    } catch (error) {
      alert(error.response.data.msg);
    }
 }

export const postData = async({setPostDatas, image, title, subTitle, description}) =>{
    try {
      const dataPost ={image: image.filesUploaded[0].url, title, subTitle, description}
      const res = await axios.post("https://finalproject-be-production.up.railway.app/blog", dataPost)
      console.log("test");
      console.log(res);
      if (res){
        setPostDatas(res.data)
      }
    } catch (error) {
      alert(error.response.data.msg);
    }
}