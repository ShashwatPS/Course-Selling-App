import {Typography} from "@mui/material";
import './App.css';
function LandingPage(){
    return(
        <div>
            <div className={"welcome"}
                style={{
                height: "30vh",
                textAlign: "center",
                paddingTop: 170
            }}>
                WELCOME TO COURSERA
            </div>
            <div className={"wtext"} style={{
                marginLeft: 190,
                marginRight:190,
                textAlign: "center",
                marginTop: 75,
            }}>
                ❝ Welcome to Coursera Embark on a journey of knowledge and growth with our carefully crafted courses.
                Whether you're looking to enhance your skills, explore new subjects, or embrace lifelong learning, Coursera offers a
                diverse selection of courses to suit your interests. Explore our comprehensive range of courses designed to empower you on
                your educational path. From cutting-edge technology to timeless classics, we've curated a collection that caters to learners
                of all backgrounds and aspirations. Join our vibrant community of learners, where curiosity knows no bounds and learning knows
                no limits. As you navigate through our platform, you'll discover a seamless experience that's user-friendly and inspiring.
                Thank you for choosing Coursera for your learning journey. Here's to unlocking new horizons together ❞
            </div>
        </div>
    )
}

export default LandingPage;