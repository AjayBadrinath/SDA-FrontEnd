import React, { useState, useEffect, useRef } from "react";
import { Box, TextField, Button, Typography, Container, Paper, CircularProgress, Snackbar, Alert, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { FaPaperPlane, FaCommentDots, FaTimes } from "react-icons/fa";

const MessageContainer = styled(Box)(({ theme, isUser }) => ({
  display: "flex",
  justifyContent: isUser ? "flex-end" : "flex-start",
  marginBottom: theme.spacing(1),
}));

const MessageBubble = styled(Paper)(({ theme, isUser }) => ({
  padding: theme.spacing(1, 2),
  maxWidth: "70%",
  borderRadius: theme.spacing(2),
  backgroundColor: isUser ? theme.palette.primary.main : theme.palette.grey[200],
  color: isUser ? theme.palette.primary.contrastText : theme.palette.success.dark


}));

const Timestamp = styled(Typography)(({ theme }) => ({
  fontSize: "0.75rem",
  color:theme.palette.success.dark,
  marginTop: theme.spacing(0.5),
}));

const TypingIndicator = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputMessage.trim() === "") return;
    const newMessage = {
      id: Date.now(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date().toISOString(),
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInputMessage("");
    try {
      setIsTyping(true);
      // Backend to  Gemini API call for response
      const Gemini_AI = await fetch('https://sda-b3.vercel.app/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input: newMessage.text })
      });
      const data = await Gemini_AI.json();
      console.log(data);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const response = {
        id: Date.now() + 1,
        text: data.response,
        isUser: false,
        timestamp: new Date().toISOString(),
      };
      
      setMessages((prevMessages) => [...prevMessages, response]);
    } catch (error) {
      setError("Failed to send message. Please try again.");
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div>
      {!isOpen && (
        <IconButton
          color="red"
          sx={{ position: "fixed", bottom: 20, right: 20 ,zIndex: 1500}}
          onClick={() => setIsOpen(true)}
        >
          <FaCommentDots size={30} />
        </IconButton>
      )}
      {isOpen && (
        
        <Container maxWidth="sm" sx={{ position: "fixed", bottom: 20, right: 20, width: "300px", height: "400px", boxShadow: 3, borderRadius: 2, overflow: "hidden" }}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              bgcolor: "info.main",
              borderRadius: 2,
              overflow: "hidden",
              boxShadow: 3,
            }}
          >
            <Box
              sx={{
                flex: 1,
                overflowY: "auto",
                p: 2,
              }}
            >
              {messages.map((message) => (
                <MessageContainer key={message.id} isUser={message.isUser}>
                  <MessageBubble isUser={message.isUser}>
                    <Typography variant="body1">{message.text}</Typography>
                    <Timestamp variant="caption">
                      {new Date(message.timestamp).toLocaleTimeString()}
                    </Timestamp>
                  </MessageBubble>
                </MessageContainer>
              ))}
              {isTyping && (
                <TypingIndicator>
                  <CircularProgress size={20} sx={{ mr: 1 }} />
                  <Typography variant="body2">AI is typing...</Typography>
                </TypingIndicator>
              )}
              <div ref={messagesEndRef} />
            </Box>
            <Box
              component="form"
              sx={{
                p: 2,
                backgroundColor: "success.main",
                borderTop: 1,
                borderColor: "divider",
              }}
              onSubmit={(e) => e.preventDefault()}
            >
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Type a message"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                InputProps={{
                  endAdornment: (
                    <Button
                      color="primary"
                      onClick={handleSendMessage}
                      disabled={!inputMessage.trim()}
                    >
                      <FaPaperPlane />
                    </Button>
                  ),
                }}
              />
            </Box>
            <IconButton
              color="secondary"
              sx={{ position: "absolute", top: 10, right: 10 }}
              onClick={() => setIsOpen(false)}
            >
              <FaTimes />
            </IconButton>
          </Box>
          <Snackbar
            open={!!error}
            autoHideDuration={6000}
            onClose={() => setError(null)}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          >
            <Alert onClose={() => setError(null)} severity="error" sx={{ width: "100%" }}>
              {error}
            </Alert>
          </Snackbar>
        </Container>
        
      )}
    </div>
  );
};

export default ChatBot;
