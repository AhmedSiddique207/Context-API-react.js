import React, { useState, useEffect } from "react";
import PostContainer from "./components/postContainer";
import MainContext from "./context/mainContext";
import PostContentButton from "./components/postContentButton";


export default function App() {


  return (
<>
    <MainContext.Provider value={{
      displayName: "Ahmed",
      standard: "7b",
      location: "Hyd"
    }}>

      <div>


        <PostContainer />


      </div>

    </MainContext.Provider>
    
  </>

  )



}