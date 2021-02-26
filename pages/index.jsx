import axios from "axios";
import { useState } from "react";
import Link from "next/Link";

export default function index() {
  const [userName, setUserName] = useState("");

  const handleOnChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <div>
      <label htmlFor="input">유저 아이디 : </label>
      <input
        id="input"
        type="text"
        value={userName}
        onChange={handleOnChange}
      />
      <div>
        <Link href={`/user/${userName}`}>
          <a>유저 검색하기</a>
        </Link>
      </div>
    </div>
  );
}

// import React from "react";
// import css from "styled-jsx/css";
// import { useState } from "react";

// const style = css`
//   button {
//     background-color: #ff23ff;
//   }
// `;

// const index = () => {
//   const [isRed, setIsRed] = useState(false);
//   return (
//     <>
//       <div className="title">Hello, World!</div>
//       <button
//         onClick={() => {
//           setIsRed((prev) => !prev);
//         }}
//       >
//         색상 변경
//       </button>
//       <style jsx>{style}</style>
//       <style jsx>
//         {`
//           .title {
//             color: ${isRed ? "red" : "black"};
//           }
//         `}
//       </style>
//     </>
//   );
// };

// export default index;
