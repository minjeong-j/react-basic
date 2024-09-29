import React, { useState } from "react";
import "./App.css";

function App() {
  const [loginInfo, setloginInfo] = useState({
    id: "",
    password: "",
  });

  const [count, setCount] = useState(90);

  const testEvt = () => {
    alert(
      `로그인 정보 아이디 : ${loginInfo.id} 비밀번호 : ${loginInfo.password}`
    );
  };

  return (
    <>
      <div>
        아이디
        <input
          type="text"
          //onBlur={alert("test")}
           onBlur={(e) => {
             setloginInfo({ id: e.target.value, password: loginInfo.password });
           }}
        ></input>
      </div>
      <div>
        비밀번호
        <input
          type="text"
          onBlur={(e) => {
            setloginInfo({ password: e.target.value, id: loginInfo.id });
          }}
        ></input>
      </div>
      <button onClick={testEvt}>Login</button>

      <div>{count}</div>
      <button
        onClick={(e) => {
          setCount(count - 1);
        }}
      >
        {" "}
        -1
      </button>
      <button
        onClick={(e) => {
          setCount(count + 1);
        }}
      >
        +1
      </button>

      <div>
        <br/>
        *숙제
        <div>
          이 값을<input></input>
        </div>
        <div>
          여기 나오게<input></input>
        </div>
        <button>눌러</button>
      </div>
    </>
  );
}

export default App;
