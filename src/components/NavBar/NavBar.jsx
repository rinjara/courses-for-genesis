import { AppBar, Button, Toolbar } from '@mui/material';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <header>
        <AppBar position="relative">
          <Toolbar>
            <svg
              preserveAspectRatio="xMidYMid meet"
              data-bbox="0 0 800.001 336.042"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800.001 336.042"
              height="37"
              width="80"
              data-type="color"
              role="presentation"
              aria-hidden="true"
              aria-labelledby="svgcid-iikb0m-e5ch3r"
            >
              <title id="svgcid-iikb0m-e5ch3r"></title>
              <g>
                <path
                  fill="#433298"
                  d="M205.42 293.958c-10.433-7.674-25.162-5.503-32.897 4.85-7.734 10.353-5.546 24.968 4.888 32.643 10.434 7.675 25.163 5.504 32.898-4.85 7.734-10.353 5.546-24.968-4.889-32.643Z"
                  data-color="1"
                ></path>
                <path
                  fill="#FFBC0F"
                  d="M164.905 245.651c-21.877-16.092-52.76-11.539-68.978 10.169-16.218 21.709-11.63 52.353 10.249 68.445 21.877 16.092 52.76 11.539 68.978-10.169 16.218-21.709 11.629-52.353-10.249-68.445Z"
                  data-color="2"
                ></path>
                <path
                  fill="#FE803C"
                  d="M29.757 225.509c32.636 24.006 78.703 17.214 102.896-15.169 24.192-32.382 17.348-78.094-15.288-102.1C84.73 84.236 38.662 91.027 14.47 123.41c-24.192 32.383-17.348 78.094 15.287 102.099Z"
                  data-color="3"
                ></path>
                <path
                  fill="#EA5F47"
                  d="M84.969 111.678c22.096 16.252 53.287 11.654 69.667-10.271 16.38-21.925 11.745-52.875-10.351-69.128S90.998 20.625 74.619 42.55c-16.38 21.926-11.746 52.876 10.35 69.129Z"
                  data-color="4"
                ></path>
                <path
                  fill="#4EA99C"
                  d="M176.509 42.08c10.433 7.674 25.16 5.503 32.895-4.85 7.734-10.352 5.546-24.966-4.887-32.64-10.434-7.674-25.161-5.503-32.895 4.85-7.734 10.352-5.546 24.965 4.887 32.64Z"
                  data-color="5"
                ></path>
                <path
                  fill="#000000"
                  d="M311.057 165.07v6.819c0 13.638-4.498 24.813-13.496 33.526-8.997 8.619-20.74 12.928-35.231 12.928-15.342 0-28.033-4.972-38.072-14.917-9.944-9.944-14.916-22.161-14.916-36.651 0-14.396 4.972-26.566 14.916-36.51 10.039-10.039 22.446-15.058 37.22-15.058 9.281 0 17.758 2.131 25.429 6.393 7.671 4.261 13.638 9.991 17.899 17.189l-14.064 8.097c-2.651-4.735-6.582-8.523-11.791-11.365-5.208-2.935-11.033-4.403-17.473-4.403-10.418 0-18.989 3.409-25.713 10.228s-10.086 15.342-10.086 25.571c0 10.228 3.362 18.704 10.086 25.429 6.819 6.724 15.721 10.086 26.707 10.086 8.808 0 15.959-2.036 21.452-6.109 5.587-4.167 9.139-9.707 10.654-16.621h-33.242V165.07h49.721Z"
                  data-color="6"
                ></path>
                <path
                  fill="#000000"
                  d="M349.432 200.869h44.039v15.627h-60.376v-99.442h59.666v15.626h-43.329v25.855h39.777v15.485h-39.777v26.849Z"
                  data-color="6"
                ></path>
                <path
                  fill="#000000"
                  d="M475.195 117.054h16.337v99.442h-12.786l-46.88-67.479v67.479h-16.337v-99.442h12.786l46.88 67.478v-67.478Z"
                  data-color="6"
                ></path>
                <path
                  fill="#000000"
                  d="M534.832 200.869h44.039v15.627h-60.375v-99.442h59.665v15.626h-43.329v25.855h39.777v15.485h-39.777v26.849Z"
                  data-color="6"
                ></path>
                <path
                  fill="#000000"
                  d="M634.03 218.343c-9.566 0-17.711-2.178-24.435-6.535-6.629-4.357-11.27-10.323-13.922-17.9l14.064-8.239c3.978 11.175 12.217 16.763 24.719 16.763 6.156 0 10.749-1.184 13.78-3.552 3.125-2.462 4.688-5.635 4.688-9.518 0-4.072-1.658-7.15-4.973-9.234-3.314-2.178-9.186-4.545-17.615-7.103-4.735-1.42-8.571-2.746-11.507-3.977-2.936-1.231-6.061-2.936-9.376-5.114-3.22-2.273-5.635-5.067-7.245-8.382-1.61-3.315-2.415-7.198-2.415-11.649 0-8.808 3.125-15.769 9.376-20.883 6.251-5.209 13.78-7.813 22.588-7.813 7.955 0 14.916 1.941 20.882 5.824 5.967 3.883 10.56 9.234 13.78 16.053l-13.78 7.956c-4.167-9.282-11.128-13.922-20.882-13.922-4.736 0-8.524 1.136-11.365 3.409-2.841 2.178-4.262 5.162-4.262 8.95 0 3.693 1.421 6.629 4.262 8.808 2.936 2.083 8.192 4.309 15.768 6.676 3.789 1.232 6.535 2.179 8.24 2.842 1.799.568 4.262 1.515 7.387 2.841 3.22 1.326 5.635 2.652 7.245 3.978 1.61 1.325 3.315 2.983 5.114 4.972 1.895 1.989 3.22 4.261 3.978 6.819.758 2.557 1.137 5.445 1.137 8.665 0 8.997-3.268 16.148-9.803 21.451-6.44 5.209-14.916 7.814-25.428 7.814Z"
                  data-color="6"
                ></path>
                <path
                  fill="#000000"
                  d="M689.745 117.054h16.337v99.442h-16.337v-99.442Z"
                  data-color="6"
                ></path>
                <path
                  fill="#000000"
                  d="M764.77 218.343c-9.566 0-17.711-2.178-24.435-6.535-6.629-4.357-11.27-10.323-13.922-17.9l14.064-8.239c3.978 11.175 12.218 16.763 24.719 16.763 6.156 0 10.749-1.184 13.78-3.552 3.125-2.462 4.688-5.635 4.688-9.518 0-4.072-1.658-7.15-4.972-9.234-3.315-2.178-9.187-4.545-17.616-7.103-4.735-1.42-8.571-2.746-11.507-3.977-2.936-1.231-6.061-2.936-9.376-5.114-3.22-2.273-5.635-5.067-7.245-8.382-1.61-3.315-2.415-7.198-2.415-11.649 0-8.808 3.125-15.769 9.376-20.883 6.251-5.209 13.78-7.813 22.588-7.813 7.955 0 14.916 1.941 20.883 5.824 5.966 3.883 10.559 9.234 13.779 16.053l-13.779 7.956c-4.168-9.282-11.128-13.922-20.883-13.922-4.736 0-8.524 1.136-11.365 3.409-2.841 2.178-4.262 5.162-4.262 8.95 0 3.693 1.421 6.629 4.262 8.808 2.936 2.083 8.192 4.309 15.769 6.676 3.788 1.232 6.534 2.179 8.239 2.842 1.8.568 4.262 1.515 7.387 2.841 3.22 1.326 5.635 2.652 7.245 3.978 1.61 1.325 3.315 2.983 5.115 4.972 1.894 1.989 3.22 4.261 3.977 6.819.758 2.557 1.137 5.445 1.137 8.665 0 8.997-3.268 16.148-9.802 21.451-6.441 5.209-14.917 7.814-25.429 7.814Z"
                  data-color="6"
                ></path>
              </g>
            </svg>

            <Button
              variant="undefined"
              component={NavLink}
              to="courses"
              //   color="secondary"
            >
              Courses
            </Button>
            <Button
              variant="undefined"
              component={NavLink}
              to={`course/:courseId`}
              //   color="secondary"
            >
              Course
            </Button>
          </Toolbar>
        </AppBar>
      </header>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default NavBar;
