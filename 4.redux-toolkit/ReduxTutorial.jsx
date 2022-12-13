import React, { Component } from "react";
import { connect } from "react-redux";
const { logIn, logOut } = require("./action/user");

class ReduxTutorial extends Component {
  onClickLogin = () => {
    this.props.dispatchLogIn({
      id: "zerocho",
      password: "pwd",
    });
  };

  onClickLogout = () => {
    this.props.dispatchLogOut();
  };

  render() {
    const { user } = this.props;
    console.log(user?.data?.id);
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
          <button onClick={this.onClickLogin}>로그인</button>
        ) : (
          <button onClick={this.onClickLogout}>로그아웃</button>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  posts: state.posts,
}); // reselect

const mapDispatchToProps = (dispatch) => ({
  dispatchLogIn: (data) => dispatch(logIn(data)),
  dispatchLogOut: () => dispatch(logOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxTutorial);
