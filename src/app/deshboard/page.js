import Link from "next/link";
import './mems.css'

export default async function Home() {
  const res = await fetch("https://api.imgflip.com/get_memes");
  const response = await res.json();
const allMemes = response.data.memes
  // console.log("res", response);

  return (
    <div className="  items-center">
     <div className="mainname">
        <h1>MEME GENRATOR WITH NEXT....</h1>
      </div>

      <div className=" grid text-center lg:grid-cols-4  bg-white justify-evenly">
        {allMemes.map((object, index) => {
          return (
            <div
              key={index}
              className="m-5 card-data  rounded-lg shadow-2xl block  bg-white w-100">
              <div className="img">
                <img src={object.url} />
              </div>
              <div className="content">
                <Link
                  className="btn-meme"
                  href={{
                    pathname: "/createMeme",
                    query: {
                      imgUrl: object.url,
                      id: object.id,
                    },
                  }}>
                  create Meme
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
