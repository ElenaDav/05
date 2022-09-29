import './App.css';
import React from 'react';
import {
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemButton,
} from '@mui/material';

const Chats = ({ name }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar></Avatar>
        </ListItemAvatar>
        <ListItemText primary={name}></ListItemText>
      </ListItemButton>
    </ListItem>
  );
};

export default Chats;
