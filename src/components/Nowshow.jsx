import React from "react";
import { useState } from "react";
import { uuid } from "uuidv4";

const PosterManager = () => {
  const [movieName, setMovieName] = useState();
  const [count, setCount] = useState();
  const [release, setRelease] = useState();

  const handleMoviename = (e) => {
    setMovieName(e.target.value);
  };

  const handleCount = (e) => {
    setCount(e.target.value);
  };

  const handleRelease = (e) => {
    setRelease(e.target.value)
  }

  const addMovie = ()=> {
    e.preventDefault();
    const newMovie = {
      id : uuid(),
      movieName : movieName,
      count : count,
      release : release
    }
  }
  return (
    <div>
      <div>
        <h1>포스터관리</h1> <br />
        <input
          type="text"
          placeholder="영화명을 입력하세요."
          value={movieName}
          onChange={handleMoviename}
        />
        <input type="number" placeholder="장 수를 입력하세요" value={count}
        onChange={handleCount}/>
        <input type="date" placeholder="개봉일을 입력하세요" value={release}
        onChange={handleRelease}/>
        <br />
        <button>추가하기</button>
      </div>
      <div>
        <div>상영 예정작</div>
        <div>현재 상영작</div>
        <div>종영작</div>
      </div>
    </div>
  );
};

export default PosterManager;
