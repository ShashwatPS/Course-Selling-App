import Button from '@mui/material/Button';
import {
    Avatar,
    Box, createTheme,
    CssBaseline,
    Grid,
    Link, Paper,
    TextField, ThemeProvider,
    Typography
} from "@mui/material";
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

const defaultTheme = createTheme();

function Signup(){
    const [email,setEmail] =useState("");
    const [password,setPassword]=useState("");
    return(
        <div>
            <ThemeProvider theme={defaultTheme}>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <CssBaseline />
                    <Grid
                        item
                        xs={false}
                        sm={4}
                        md={7}
                        sx={{
                            backgroundImage: 'url(https://about.coursera.org/static/whiteCoursera-23ec484f7091914430ce19b07d09aedf.svg)',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: (t) =>
                                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                                {/*<LockOutlinedIcon />*/}
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign Up
                            </Typography>
                            <Box component="form" noValidate  sx={{ mt: 1 }}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    onChange={(e)=>{
                                        setEmail(e.target.value);
                                    }}
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={(e)=>{
                                        setPassword(e.target.value);
                                    }}
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    onClick={()=>{
                                        function callback2(data){
                                            localStorage.setItem("token",data.token);
                                            window.location= "/courses"
                                        }

                                        function callback1(res){
                                            res.json().then(callback2);
                                        }

                                        fetch("http://localhost:3000/admin/signup",{
                                            method: "POST",
                                            body: JSON.stringify({
                                                username: email,
                                                password
                                            }),
                                            headers: {
                                                "Content-type": "application/json"
                                            }
                                        }).then(callback1)}}
                                >
                                    Sign Up
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="#" variant="body2" onClick={()=>{
                                            window.location="/signin";
                                        }}>
                                            {"Already have an account ? SignIn"}
                                        </Link>
                                    </Grid>
                                </Grid>
                                <Copyright sx={{ mt: 5 }} />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider>
    </div>
    )
}
export default Signup;