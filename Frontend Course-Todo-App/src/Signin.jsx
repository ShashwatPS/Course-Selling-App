import Button from '@mui/material/Button';
import {Card, TextField, Typography} from "@mui/material";
function SignIn(){
    return(
        <div>
            <div style={{
                marginTop: 150,
                marginBottom: 10,
                textAlign: "center"
            }}>
                <Typography variant="h6">
                    Welcome Back
                </Typography>
            </div>
            <center>
                <Card variant="outlined" style={{width: 400,padding: 20}}>
                    <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth={true}/>
                    <br/><br/>
                    <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth={true}/>
                    <br/><br/>
                    <Button variant="contained">SignIn</Button>
                </Card>
            </center>
        </div>
    )
}
export default SignIn;