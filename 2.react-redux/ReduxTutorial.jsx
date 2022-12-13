import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
const { logIn, logOut } = require("./action/user");

function ReduxTutorial() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onClickLogin = useCallback(() => {
    dispatch(
      logIn({
        id: "zerocho",
        password: "pwd",
      })
    );
  }, []);

  const onClickLogout = useCallback(() => {
    dispatch(logOut());
  }, []);

  return (
    <div>
      {user.isLoggingIn ? (
        <div>로그인 중...</div>
      ) : user.data ? (
        <div>{user.data.id}</div>
      ) : (
        <div>로그인 해주세요!</div>
      )}
      {!user.data ? (
        <button onClick={onClickLogin}>로그인</button>
      ) : (
        <button onClick={onClickLogout}>로그아웃</button>
      )}
    </div>
  );
}

export default ReduxTutorial;
