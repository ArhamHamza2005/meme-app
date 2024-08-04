"use client"

import React , {useState} from 'react'
import './card.css'

function createMeme({searchParams}) {
  console.log(searchParams)
 const [text1, setText1] = useState("");
 const [text2, setText2] = useState("");
 const [fetchApi, setFetchApi] = useState(null);
 const genrateImg = () => {
   if (!text1 || !text2) {
     return alert("enter text");
   }
   fetch(
     `https://api.imgflip.com/caption_image?template_id=${searchParams.id}&username=mrjunaid&password=junaid123&text0=${text1}&text1=${text2}`
   )
     .then((res) => res.json())
     .then((response) => setFetchApi(response.data.url ));
 };

  return (
    <div className="containerMeme container-fluid h-full">
      {!fetchApi ? (
        <div className='main-card'>
          <img src={searchParams.imgUrl} width={300} />
          <div className="inputField">
            <input
              type="text"
              placeholder="enter text1"
              onChange={(e) => setText1(e.target.value)}
            />
            <input
            className='input2'
              type="text"
              placeholder="enter text2"
              onChange={(e) => setText2(e.target.value)}
            />
          </div>
          <div className="btnDev">
            <button className="gen-btn" onClick={genrateImg}>
              Genrate Meme
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="user-Img">
            <div className="">
            </div>
            <img src={fetchApi} />
          </div>
        </>
      )}
    </div>
  );
}

export default createMeme
