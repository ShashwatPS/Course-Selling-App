import Button from '@mui/material/Button';
import {
    Avatar,
    Box,
    Container, createTheme,
    CssBaseline,
    Grid,
    Link,
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
                            Sign in
                        </Typography>
                        <Box component="form" noValidate sx={{ mt: 1 }}>
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
                                    setEmail(e.target.value);}}
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
                                        window.location= "/"
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
                                    }).then(callback1)
                                }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Already have a account ? SignIn"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
            </ThemeProvider>
    </div>
    )
}
export default Signup;