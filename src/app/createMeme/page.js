"use client"

import React, { useState } from 'react';
import './card.css';

function CreateMeme({ searchParams }) {
  console.log(searchParams);
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [fetchApi, setFetchApi] = useState(null);

  const generateImg = () => {
    if (!text1 || !text2) {
      return alert("enter text");
    }
    fetch(
      `https://api.imgflip.com/caption_image?template_id=${searchParams.id}&username=mrjunaid&password=junaid123&text0=${text1}&text1=${text2}`
    )
      .then((res) => res.json())
      .then((response) => setFetchApi(response.data.url));
  };

  return (
    <div className="containerMeme container-fluid h-full">
      {!fetchApi ? (
        <div className='main-card'>
          <img src={searchParams.imgUrl} width={300} alt="Meme Template" />
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
            <button className="gen-btn" onClick={generateImg}>
              Generate Meme
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="user-Img">
            <img src={fetchApi} alt="Generated Meme" />
          </div>
        </>
      )}
    </div>
  );
}

export default CreateMeme;
