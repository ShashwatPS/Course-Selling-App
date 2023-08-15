import './App.css';
import {Grid} from "@mui/material";
import "./LandingPageCSS.css"
function LandingPage(){
    return(
        <div>
            <Grid container>
                <Grid item lg={7}>
            <div
                style={{
                height: "30vh",
                textAlign: "center",
                paddingTop: 170
            }}>
                <div className={"title"}>
                WELCOME TO COURSERA
                </div>
            </div>
                <div className={"text"}>
                ❝ Welcome to Coursera Embark on a journey of knowledge and growth with our carefully crafted courses.
                Whether you're looking to enhance your skills, explore new subjects, or embrace lifelong learning, Coursera offers a
                diverse selection of courses to suit your interests.
                </div>
                </Grid>
                <Grid item lg={5}>
                    <div className={"Image"} justifyContent="center" alignItems="center">
                    <img src={"https://wallpapercave.com/wp/wp6596813.jpg"} alt={"Teaching Image"} />
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default LandingPage;