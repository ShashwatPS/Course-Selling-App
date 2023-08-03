import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Card, Typography} from "@mui/material";

function Course(){
    let {courseId} = useParams();

    const [courses,setCourses]= useState([])

    useEffect(()=>{
        function callback2(data){
            setCourses(data.courses)
        }
        function callback1(res){
            res.json().then(callback2)
        }

        fetch("http://localhost:3000/admin/courses",{
            method: "GET",
            headers: {
                "Authorization": "Bearer "+localStorage.getItem("token")
            }
        }).then(callback1)
    },[])

    let course=null;
    for(let i=0;i<courses.length;i++){
        if(courses[i].id == courseId){
            course = courses[i];
        }
    }

    if(!course){
        return(
            <div>
                Course not found !!
            </div>
        )
    }

    return(
        <div>
            <Card style={{
                margin: 10,
                width: 300,
                minHeight: 200
            }}>
                <Typography textAlign={"center"} variant={"h5"}>{course.title}</Typography>
                <Typography textAlign={"center"} variant={"subtitle1"}>{course.description}</Typography>
                <img src={course.imageLink} style={{width:300}} alt={"ImageLink"}></img>
            </Card>
        </div>
    )
}
export default Course;