import { FormLabel, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";


const AddBook = () => {
  const history = useNavigate();
  const [input, setInput] = useState({
    isbn: '',
    userId:'',
  });
  
  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value.trim(),
    }));
    // console.log(e.target.name, "value", e.target.value);
  };

  
  const sendRequest = async () => {
    try {
      const response = await axios.post("http://localhost:5000/books", {
        isbn: String(input.isbn),
        userId:String(input.userId)
      });
      return response.data;
    } catch (error) {
      console.error("Error:", error.message);
      throw error; // Propagate the error for further handling
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    sendRequest().then(() => history("/books"));
  };
  return (
    <>
    <Header/>
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"centre"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf={"center"}
        marginLeft={"auto"}
        marginRight={"auto"}
        marginTop={10}
      >
        <FormLabel>ISBN NUMBER</FormLabel>
        <TextField
          type="text"
          value={input.isbn}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="isbn"
        ></TextField>
        <FormLabel>UserId</FormLabel>
      <TextField
      type="text"
      value={input.userId}
      onChange={handleChange}
        margin="normal"
        fullWidth
        variant="outlined"
        name="userId"
      ></TextField>
      {/*<formLabel>Publisher</formLabel>
      <TextField
        margin="normal"
        fullWidth
        variant="outlined"
        name="publisher"
      ></TextField> */}

        <Button variant="contained" type="submit">
          Add Book
        </Button>
      </Box>
    </form>
    </>
  );
};

export default AddBook;
