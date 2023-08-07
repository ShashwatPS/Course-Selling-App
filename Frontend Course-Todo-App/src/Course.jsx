import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Card, TextField, Typography} from "@mui/material";
import Button from "@mui/material/Button";

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
            <CourseTable course={course}></CourseTable>
            <UpdateCard courses={courses} course={course} setCourses={setCourses}></UpdateCard>
        </div>
    )
}

function UpdateCard(props){
    const[title,setTitle] = useState("");
    const[description,setdescription] = useState("");
    const[image,setImage]= useState("");
    const course = props.course;

    return(
        <div>
            <center>
                <Card variant="outlined" style={{width: 400,padding: 20}}>
                    <TextField
                        onChange={(e)=>{
                            setTitle(e.target.value);
                        }}
                        id="outlined-basic" label="Title" variant="outlined" fullWidth={true}/>
                    <TextField
                        onChange={(e)=>{
                            setdescription(e.target.value);
                        }}
                        id="outlined-basic" label="Description" variant="outlined" fullWidth={true}/>
                    <TextField
                        onChange={(e)=>{
                            setImage(e.target.value);
                        }}
                        id="outlined-basic" label="Image Link" variant="outlined" fullWidth={true}/>
                    <Button
                        onClick={()=>{
                            function callback2(data){
                                alert("Course Updated!");
                                let updatedCourses = [];
                                for(let i=0;i<props.courses.length;i++){
                                    if (props.courses[i].id == course.id){
                                        updatedCourses.push({
                                            id: course.id,
                                            title: title,
                                            description: description,
                                            imageLink: image
                                        })
                                    }
                                    else{
                                        updatedCourses.push(props.courses[i]);
                                }
                                    props.setCourses(updatedCourses);
                            }}

                            function callback1(res){
                                res.json().then(callback2);
                            }

                            fetch("http://localhost:3000/admin/courses/"+ course.id,{
                                method: "PUT",
                                body: JSON.stringify({
                                    title: title,
                                    description: description,
                                    imageLink: image,
                                    published: true
                                }),
                                headers: {
                                    "Content-type": "application/json",
                                    "Authorization": "Bearer "+ localStorage.getItem("token"),
                                }
                            }).then(callback1)
                        }}
                        variant="contained">Update Course</Button>
                </Card>
            </center>
        </div>
    )
}
function CourseTable(props){
    const course = props.course;
    return(
            <Card style={{
                margin: 10,
                width: 300,
                minHeight: 200
            }}>
                <Typography textAlign={"center"} variant={"h5"}>{course.title}</Typography>
                <Typography textAlign={"center"} variant={"subtitle1"}>{course.description}</Typography>
                <img src={course.imageLink} style={{width:300}} alt={"ImageLink"}></img>
            </Card>
    )
}
export default Course;