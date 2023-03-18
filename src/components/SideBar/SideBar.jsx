import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Lesson from '../Lesson/Lesson';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

function SideBar({ usedData, course, handleLessonsChange }) {
  return (
    <>
      <Toolbar style={{ position: 'absolute', right: 8, top: 0, gap: 16 }}>
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
          Lessons
        </Typography>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={usedData.handleDrawerOpen}
          sx={{ ...(usedData.isOpen && { display: 'none' }) }}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer
        sx={{
          width: usedData.drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: usedData.drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={usedData.isOpen}
      >
        <DrawerHeader>
          <IconButton onClick={usedData.handleDrawerClose}>
            {usedData.theme.direction === 'rtl' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {course.lessons.map((lesson, index) => (
            <ListItem
              key={lesson.id}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <Lesson
                index={index}
                lessonData={lesson}
                handleLessonsChange={handleLessonsChange}
              />
            </ListItem>
          ))}
        </List>

        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
    </>
  );
}

export default SideBar;
