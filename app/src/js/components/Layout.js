import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {name: "Ben"};
  }

  render(){
    const title = "Welcome Ben";
    return(
      <div>
        <Header title ={title}/>
        <Footer />
      </div>
    );
  }
}
