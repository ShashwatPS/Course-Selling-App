import {Card, TextField} from "@mui/material";
import Button from "@mui/material/Button";

function AddCourse(){
    return(
        <div>
            <Card variant="outlined" style={{width: 400,padding: 20}}>
            <TextField
                onChange={()=>{
                }}
                id="outlined-basic" label="Course Name" variant="outlined" fullWidth={true}/>
            <TextField
                onChange={()=>{
                }}
                id="outlined-basic" label="Course Description" variant="outlined" fullWidth={true}/>
            <Button
                onClick={()=>{
                }}
                variant="contained">Add Course</Button>
            </Card>
        </div>
    )
 }

 export default AddCourse;