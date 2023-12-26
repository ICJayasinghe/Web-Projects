import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AllStudent() {

    const [Students, setStudents] = useState([]);

    useEffect(()=>{
        function getStudents(){
            axios.get("http://localhost:3010/student/").then((res)=>{
                setStudents(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getStudents();
    },[])

    return(
        <div className="container">
            <h3>All Student</h3>
        </div>
    )
}