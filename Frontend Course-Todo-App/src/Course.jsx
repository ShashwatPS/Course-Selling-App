import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Container, createTheme, CssBaseline, Grid, Link,
    TextField, ThemeProvider,
    Typography
} from "@mui/material";
import Button from "@mui/material/Button";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();

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
        <div style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "20vh"
        }}>
            <CourseTable course={course}></CourseTable>
            <div style={{
                paddingBottom: 40
            }}>
            <UpdateCard courses={courses} course={course} setCourses={setCourses}></UpdateCard>
            </div>
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
            <ThemeProvider theme={defaultTheme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5">
                            Update Course
                        </Typography>
                        <Box component="form" sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="Title"
                                        name="Name"
                                        onChange={(e)=>{
                                            setTitle(e.target.value);
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="Description"
                                        name="Description"
                                        onChange={(e)=>{
                                            setdescription(e.target.value);
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="imageLink"
                                        label="Image Link"
                                        onChange={(e)=>{
                                            setImage(e.target.value);
                                        }}
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
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
                                    }).then(callback1)}}
                            >
                                UPDATE
                            </Button>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 5 }} />
                </Container>
            </ThemeProvider>
        </div>
    )
}
function CourseTable(props){
    const course = props.course;
    return(
        <Card style={{
            margin: 30,
            width: 600,
            minHeight: 300,
            marginTop: 45
        }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="280"
                    image={course.imageLink}
                    alt="Course Image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {course.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {course.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
export default Course;