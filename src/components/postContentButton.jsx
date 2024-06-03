import React, { useEffect, useState, useContext } from "react";
import MainContext from "../context/mainContext";



export default function PostContentButton() {

    const MainContextData = useContext(MainContext);

    return (

        <div>

            <br />

            {MainContextData.displayName}

        </div>



    )


}