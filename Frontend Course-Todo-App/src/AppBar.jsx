import {AppBar, Typography} from "@mui/material";
import Button from "@mui/material/Button";

function Appbar(){
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