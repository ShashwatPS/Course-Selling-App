import {
    Avatar, Box,
    Container, createTheme, CssBaseline, Grid, Link,
    TextField, ThemeProvider, Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import {useState} from "react";

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

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

function AddCourse(){
    const[title,setTitle] = useState("");
    const[description,setdescription] = useState("");
    const[image,setImage]= useState("");

    return(
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
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        {/*<LockOutlinedIcon />*/}
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Add a Course
                    </Typography>
                    <Box component="form" sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    label="Name"
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
                                    alert("Course Added!");
                                }

                                function callback1(res){
                                    res.json().then(callback2);
                                }

                                fetch("http://localhost:3000/admin/courses",{
                                    method: "POST",
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
                            Add Course
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    )
 }

 export default AddCourse;