import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
// import './App.css';
// import NavBar from './components/NavBar/NavBar';
import Course from './pages/Course/Course';
import Courses from './pages/Courses/Courses';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import SharedLayout from './components/SharedLayout/SharedLayout';

const theme = createTheme();

function App() {
  // const [page, setPage] = useState(null);
  // const getCurrentPage = value => {
  //   setPage(value);
  // };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <div> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Courses />} />
            <Route path="course/:courseId" element={<Course />} />
            {/* <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route> */}
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
      {/* </div> */}
    </ThemeProvider>
  );
}

export default App;
