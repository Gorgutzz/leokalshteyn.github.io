import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
    }
}

export default Contact;
