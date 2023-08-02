import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from "./Signup.jsx";
import SignIn from "./Signin.jsx";
import Appbar from "./AppBar.jsx";
import AddCourse from "./AddCourse.jsx";
import Courses from "./Courses.jsx";
function App() {
  return (
    <>
        <Router>
            <Appbar></Appbar>
            <Routes>
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/addcourse" element={<AddCourse />}/>
                <Route path="/courses" element={<Courses />}/>
            </Routes>
        </Router>
    </>
  )
}

export default App
