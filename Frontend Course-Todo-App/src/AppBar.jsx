import {AppBar, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {useEffect, useState} from "react";

function Appbar(){
    const[userEmail,setUserEmail]=useState(null);

    useEffect(()=>{
        function callback2(data){
            if (data.username)
                setUserEmail(data.username)
        }

        function callback1(res){
            res.json().then(callback2);
        }

        fetch("http://localhost:3000/admin/me",{
            method: "GET",
            headers: {
                "Authorization": "Bearer "+localStorage.getItem("token")
            }
        }).then(callback1)
    },[])

    if(userEmail){
        return(
            <div>
                <AppBar position="static" style={{
                    height: 40,
                }}>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}>
                        <div>
                            <Typography variant={"h6"} style={{
                                paddingLeft: 5
                            }}
                            onClick={()=>{
                                window.location="/";
                            }}
                            >Coursera</Typography>
                        </div>
                        <div style={{
                            display: "flex",
                        }}>
                        <div style={{
                            paddingRight: 15,
                        }}>
                            <Typography variant={"subtitle1"} style={{
                                paddingTop: 5,
                            }}>{userEmail}</Typography>
                        </div>
                            <div>
                                <Button
                                    color="secondary"
                                    disabled={false}
                                    size="medium"
                                    variant="filled"
                                    onClick={()=>{
                                        window.location= "/courses"
                                    }}
                                >SHOW COURSES</Button>
                            </div>
                            <div>
                                <Button
                                    color="secondary"
                                    disabled={false}
                                    size="medium"
                                    variant="filled"
                                    onClick={()=>{
                                        window.location= "/addcourse"
                                    }}
                                >ADD A COURSE</Button>
                            </div>
                        <div>
                            <Button
                                color="secondary"
                                disabled={false}
                                size="medium"
                                variant="filled"
                                onClick={()=>{
                                    localStorage.setItem("token",null);
                                    window.location= "/"
                                }}
                            >Logout</Button>
                        </div>
                        </div>
                    </div>
                </AppBar>
            </div>
        )
    }

    return(
        <div>
            <AppBar position="static" style={{
                height: 40,
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                <div>
                    <Typography variant={"h6"} style={{
                        paddingLeft: 5
                    }}>Coursera</Typography>
                </div>
                <div>
                    <Button
                        color="secondary"
                        disabled={false}
                        size="medium"
                        variant="filled"
                        onClick={()=>{
                            window.location="/signup"
                        }}
                    >Signup</Button>
                    <Button
                        color="secondary"
                        disabled={false}
                        size="medium"
                        variant="filled"
                        onClick={()=>{
                            window.location="/signin"
                    }}
                    >Signin</Button>
                </div>
                </div>
            </AppBar>
        </div>
    )
}

export default Appbar;