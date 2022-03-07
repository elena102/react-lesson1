import React from "react";


const Content = ({text,textlet}) =>{
  return (
   <div>
       <h1 style={{textAlign: "center", color:"green"}}>{text}</h1>
       <h2 style={{textAlign: "center", color:"green"}}>{textlet}</h2>
   </div>
  );
}

export default Content;