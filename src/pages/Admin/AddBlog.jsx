import React, { useState, useEffect } from 'react';
import GetDataBlog from "./componentBlog/GetDataBlog";
import { getData, postData } from "./APIBlog/Api"
import { PickerOverlay } from 'filestack-react';

export default function AddBlog(){
  const [isPicker, setIsPicker] = useState(false);
  const [result, setResult] = useState([]);
  const [postDatas, setPostDatas] = useState();
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [description, setDescription] = useState("");

  const submithandler = (e) =>{
    e.preventDefault()
    !image
      ? alert("Image require")
      : postData({ title, image,subTitle, description, setPostDatas}); 
    // console.log(`ImageUrl: ${image.filesUploaded[0].url},Title:${title},subTitle:${subTitle},Description:${description} `);
  }

  useEffect(() => {
    getData(setResult);
    if (postDatas) {
      setImage("");
      setTitle("");
      setSubTitle("");
      setDescription("");
      getData(setResult);
    }
  }, [postDatas]);

  return (
    <div className="bg-blue-50 px-4 flex justify-center items-center flex-col sm:px-0">
      <form onSubmit={submithandler} 
      className="bg-blue-100 shadow-md rounded lg:w-2/5 md:w-3/5 w-full flex-colo py-4 px-4">
        
        {
          image ? (
            <img src={image && image.filesUploaded[0].url} 
            alt='imageUploaded'
            className='w-full h-56 object-cover'/>
          ):(
            <button
            onClick={() => (isPicker ? setIsPicker(false) : setIsPicker(true))}
            type="button"
            className="w-full text-lg font-bold border-dashed h-56 border-4 border-blue-800 text-blue-800"
          >
            Choose Image
          </button>
          )
        }

        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full my-4 bg-white py-2 px-2 rounded border border-blue-800 text-blue-800 font-semibold"
        />

        <input
          type="text"
          required
          value={subTitle}
          onChange={(e) => setSubTitle(e.target.value)}
          placeholder="subTitle"
          className="w-full my-2 bg-white py-2 px-2 rounded border border-blue-800 text-blue-800 font-semibold"
        />

        <input
          type="text"
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full my-2 bg-white py-2 px-2 rounded border border-blue-800 text-blue-800 font-semibold"
        />

        <button
          type="submit"
          className="w-full my-4 bg-blue-800 py-4 rounded text-white font-bold"
        >
            SUBMIT
        </button>
    
    {/* filepicker */}

    <div className="mt-4 relative">
          {isPicker && (
            <PickerOverlay
              apikey= {'AUHknZGYUQqiFEr7JpSH0z'}
              onSuccess={(res) => {
                setImage(res);
                setIsPicker(false);
              }
            }
              onError={(res) => alert(res)}
              pickerOptions={{
                maxFiles: 1,
                accept: ["image/*"],
                errorsTimeout: 2000,
              }}
            />
          )}
        </div>
      </form>
   
      <GetDataBlog result={result}/>
    </div>

    // <div>
    //   <form>
    //     <label>pick image</label>
    //     <button onClick={() => setIsPicker(!isPicker)}>click</button>
    //     {isPicker && (
    //       <PickerOverlay
    //         apikey={'AUHknZGYUQqiFEr7JpSH0z'}
    //         onSuccess={(res) => console.log(res)}
    //         onUploadDone={(res) => console.log(res)}
    //       />
    //     )}
    //   </form>
    // </div>
  );
};
