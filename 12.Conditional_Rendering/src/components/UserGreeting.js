import React, { Component } from "react";

export class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLockedIn: true,
    };
  }

  render() {
    return this.state.isLockedIn ? (
      <div>Welome Vimaljeet</div>
    ) : (
      <div>Welcome Guest</div>
    );
    //Element Variable Method
    // let message;
    // if (this.state.isLockedIn) {
    //   message = <div>Welcome Vimaljeet</div>;
    // } else {
    //   message = <div>Welcome Guest</div>;
    // }
    //return <div>{message}</div>;
    //Direct Method
    // if (this.state.isLockedIn) {
    //   return <div>Welcome Vimaljeet</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
    // return (
    //   <div>
    //     <div>Welcome Vimaljeet</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
