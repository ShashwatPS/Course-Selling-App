import {TextField} from "@mui/material";
import Button from "@mui/material/Button";

function AddCourse(){
    return(
        <div>
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
        </div>
    )
 }

 export default AddCourse;