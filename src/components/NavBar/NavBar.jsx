import { Button, Toolbar } from '@mui/material';
import { Notify } from 'notiflix';
import { NavLink, useNavigate } from 'react-router-dom';
import { load } from '../../services/localStorage/storage';
import { ReactComponent as Logo } from '../../icons/logo.svg';

const NavBar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    const lastCourse = load('lastCourseId');
    if (!lastCourse) {
      Notify.info('Please, choose your course in the list below!');
      return;
    }
    navigate(`/course/${lastCourse}`);
  };

  return (
    <Toolbar>
      <Logo color="white" />

      <Button
        variant="undefined"
        component={NavLink}
        to="/"
        // color="secondary"
      >
        Courses
      </Button>
      <Button
        onClick={handleClick}
        variant="undefined"
        // component={NavLink}
        // to={lastID()}
        // disabled
        // color="secondary"
      >
        My course
      </Button>
    </Toolbar>
  );
};

export default NavBar;
