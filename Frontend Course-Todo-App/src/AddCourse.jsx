import {Card, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useState} from "react";

function AddCourse(){
    const[title,setTitle] = useState("");
    const[description,setdescription] = useState("");

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
            <Button
                onClick={()=>{
                    function callback2(data){
                        localStorage.setItem("token",data.token);
                    }

                    function callback1(res){
                        res.json().then(callback2);
                    }

                    fetch("http://localhost:3000/admin/courses",{
                        method: "POST",
                        body: JSON.stringify({
                            title: title,
                            description: description,
                            imageLink: "",
                            published: true
                        }),
                        headers: {
                            "Content-type": "application/json",
                            "Authorization": "Bearer "+ localStorage.getItem("token")
                        }
                    }).then(callback1)
                }}
                variant="contained">Add Course</Button>
            </Card>
                </center>
        </div>
    )
 }

 export default AddCourse;