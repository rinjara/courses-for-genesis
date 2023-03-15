import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Course from './pages/Course/Course';
import Courses from './pages/Courses/Courses';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const theme = createTheme();

function App() {
  // const [courses, setCourses] = useState([]);

  // useEffect(() => {
  //   getCoursesList().then(response => setCourses(response));
  // }, []);
  // console.log(courses);

  // useEffect(() => {
  //   // async function fetchData() {
  //   //   const token = await getToken();
  //   //   console.log(token);
  //   // }
  //   // fetchData();
  //   getToken();
  // }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<NavBar />}>
              <Route path="courses" element={<Courses />} />
              <Route path="course/:courseId" element={<Course />} />
              {/* <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route> */}
              <Route path="*" element={<Navigate to="/courses" />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;
