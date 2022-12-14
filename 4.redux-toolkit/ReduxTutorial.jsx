import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./action/post";
import userSlice from "./reducers/user";

const { logIn } = require("./action/user");

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
    dispatch(userSlice.actions.logOut());
  }, []);

  const AddPost = useCallback(() => {
    dispatch(addPost());
  }, []);

  return (
    <div>
      {user.isLoggingIn ? (
        <div>로그인 중...</div>
      ) : user.data ? (
        <div>{user.data.nickname}</div>
      ) : (
        <div>로그인 해주세요!</div>
      )}
      {!user.data ? (
        <button onClick={onClickLogin}>로그인</button>
      ) : (
        <button onClick={onClickLogout}>로그아웃</button>
      )}
      <button onClick={AddPost}>게시글 작성</button>
    </div>
  );
}

export default ReduxTutorial;
