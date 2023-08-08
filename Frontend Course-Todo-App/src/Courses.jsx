import {useEffect, useState} from "react";
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import Button from "@mui/material/Button";

function Courses(){
    const [courses, setCourses]=useState([]);

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

    return(
        <div style={{
            display: "flex",
            flexWrap: "wrap"
        }}>
            {courses.map(course=>{
                return <Course course={course} setCourses={setCourses}/>
            })}
        </div>)
}

function Course(props){
    return (
        <Card style={{
            margin: 25,
            width: 300,
            minHeight: 200,
            marginTop: 45
        }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="200"
                    image={props.course.imageLink}
                    alt="Course Image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.course.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.course.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={()=>{
                    window.location=`/course/${props.course.id}`;
                }}>
                    Update
                </Button>
                <Button size="small" color="primary" onClick={()=>{
                    function callback2(data) {
                        function callback2(data){
                            props.setCourses(data.courses)
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
                        console.log(data);
                    }

                    function callback1(res) {
                        res.json().then(callback2);
                    }

                    fetch(`http://localhost:3000/admins/courses/${props.course.id}`, {
                        method: "DELETE",
                        headers: {
                            "Content-type": "application/json",
                            "Authorization": "Bearer " + localStorage.getItem("token")
                        }
                    }).then(callback1);
                }}>
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Courses;