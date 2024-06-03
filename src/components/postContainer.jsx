import React, { useEffect, useState, useContext } from "react";
import PostContent from "./postContent";
import MainContext from "../context/mainContext";



export default function PostContainer() {

    // const [data, setData] = useState("`School Details`")

    const MainContextData = useContext(MainContext);


    return (

        <div>

            <PostContent  />

            <div>

                <br />

                {MainContextData.location}

            </div>

        </div>

    )

}