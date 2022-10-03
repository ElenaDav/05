import './App.css';
import React from 'react';
import Chats from './Chats';
import Message from './Message';
import { useEffect, useState, useRef } from 'react';
import { TextField, Button, List, Box, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffa726',
    },
  },
});

function App() {
  const [author, setAuthor] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [chatList] = useState([
    { id: '1', name: 'text1 for id 1' },
    { id: '2', name: 'text2 for id 2' },
    { id: '3', name: 'text3 for id 3' },
  ]);

  const inputRef = useRef(null);

  const onButtonClick = () => {
    let newId = 1;
    if (messages.length > 0) newId = messages[messages.length - 1].id + 1;
    if (author.length > 0) {
      setMessages((message) => [
        ...messages,
        { id: newId, text: message, author: author },
      ]);
    } else {
      alert('Author name needed');
    }
  };

  useEffect(() => {
    if (messages.length > 0) {
      setTimeout(() => {
        console.log(author + ' your message was sent');
      }, 2000);
    }
    focusTextField(inputRef.current);
  }, [messages, author]);

  function focusTextField(input) {
    if (input) {
      input.focus();
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App main">
        <div className="message-text">
          <Typography
            sx={{
              m: 1,

              gap: '10px',
              width: '300px',
              bgcolor: 'background.paper',
              margin: '10px',
            }}
            variant="h5"
            component="div"
            color="primary"
          >
            Chat List
          </Typography>
          <List
            sx={{
              margin: '18px, 5px, 10px, 10px',
              width: '100%',
              maxWidth: 500,
              bgcolor: 'background.paper',
            }}
          >
            {chatList.map((item) => (
              <Chats name={item.name} key={item.id} />
            ))}
          </List>
        </div>
        <div className="messages">
          <Box
            component="form"
            sx={{
              m: 1,
              borderRadius: '15px',
              gap: '10px',
              width: '300px',
              bgcolor: 'background.paper',
              margin: '10px',
            }}
            noValidate
            autoComplete="on"
          >
            <Typography variant="h5" component="div" color="primary">
              Messages
            </Typography>
            <TextField
              sx={{
                margin: '10px, 0, 10px, 0',
                backgroundColor: '#fff',
              }}
              id="outlined-multiline-flexible"
              fullWidth
              label="Author name"
              multiline
              maxRows={4}
              value={author}
              inputRef={inputRef}
              onChange={(e) => setAuthor(e.target.value)}
            ></TextField>
            <TextField
              sx={{
                margin: '10px, 5px, 10px, 5px',
              }}
              id="outlined-multiline-flexible"
              fullWidth
              label="Message text"
              multiline
              maxRows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></TextField>
            <Button
              sx={{
                margin: '10px, 5px, 10px, 5px',
              }}
              variant="contained"
              color="success"
              size="large"
              fullWidth
              onClick={onButtonClick}
            >
              Send Message
            </Button>
          </Box>{' '}
          {messages.map((item) => {
            return (
              <Message>
                author={item.author} text={item.text} key={item.id}
              </Message>
            );
          })}
        </div>
      </div>
    </ThemeProvider>
  );
}
export default App;
