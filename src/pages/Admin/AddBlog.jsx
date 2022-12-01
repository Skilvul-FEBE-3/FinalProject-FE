import React, { useState } from 'react';
import GetDataBlog from "./componentBlog/GetDataBlog";
import { PickerOverlay } from 'filestack-react';

const AddBlog = () => {
  const [isPicker, setIsPicker] = useState(false);
  const [image, setImage] = useState("");

  return (
    <div className="bg-blue-50 px-4 flex justify-center items-center flex-col sm:px-0">
      <form className="bg-blue-100 shadow-md rounded lg:w-2/5 md:w-3/5 w-full flex-colo py-12 px-4">
        
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
          placeholder="Title"
          className="w-full my-4 bg-white py-2 px-2 rounded border border-blue-800 text-blue-800 font-semibold"
        />

        <input
          type="text"
          required
          placeholder="subTitle"
          className="w-full my-2 bg-white py-2 px-2 rounded border border-blue-800 text-blue-800 font-semibold"
        />

        <input
          type="text"
          required
          placeholder="Description"
          className="w-full my-2 bg-white py-2 px-2 rounded border border-blue-800 text-blue-800 font-semibold"
        />

        <button
          type="submit"
          className="w-full my-1 bg-blue-800 py-4 rounded text-white font-bold"
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

      <GetDataBlog />
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

export default AddBlog;
