import Button from '@mui/material/Button';
import {Card, TextField, Typography} from "@mui/material";
import {useState} from "react";
function Signup(){
    const [email,setEmail] =useState(" ");
    const [password,setPassword]=useState("");
    return(
        <div>
        <div style={{
            marginTop: 150,
            marginBottom: 10,
            textAlign: "center"
        }}>
            <Typography variant="h6">
            Welcome to Coursera. Sign up Below
            </Typography>
         </div>
            <center>
                <Card variant="outlined" style={{width: 400,padding: 20}}>
                <TextField
                    onChange={(e)=>{
                        setEmail(e.target.value);
                    }}
                    id="outlined-basic" label="Username" variant="outlined" fullWidth={true}/>
            <br/><br/>
                <TextField
                    onChange={(e)=>{
                        setPassword(e.target.value);
                    }}
                    id="outlined-basic" label="Password" variant="outlined" fullWidth={true}/>
            <br/><br/>
                <Button
                    onClick={()=>{
                        function callback2(data){
                            localStorage.setItem("token",data.token);
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
                    variant="contained">Sign up</Button>
                </Card>
            </center>
    </div>
    )
}
export default Signup;