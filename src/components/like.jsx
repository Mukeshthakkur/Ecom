import React, { Component } from 'react'

export default class like extends Component {
  render() {

    let classes = "fa fa-heart";
    if(!this.props.Liked) classes = "fa fa-star";

    return (
      <i onClick={this.props.onClick} style={ { cursor:"pointer"}} className={classes}></i>
    )
  }
}
