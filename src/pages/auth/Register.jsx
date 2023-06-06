import {
  Box,
  Button,
  IconButton,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";

function Register() {
  return (
    <div>
      <form>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          maxWidth={400}
          margin={"auto"}
          marginTop={5}
          borderRadius={5}
          boxShadow={"5px 5px 5px"}
          padding={4}
        >
          <Typography variant="h4" textAlign={"center"}>
            Create New Account
          </Typography>

          <TextField
            placeholder="Username"
            id="outlined-password-input"
            name="name"
            type="text"
            margin="normal"
           
          ></TextField>

          <TextField
            placeholder="Email"
            id="outlined-password-input"
            name="email"
            type="email"
            margin="normal"
           
          ></TextField>

          <TextField
            placeholder="Password"
            name="password"
            type="password"
            margin="normal"
           
          ></TextField>

          <Button
            variant="contained"
            type="submit"
            color="success"
            sx={{marginTop:2}}
           
          >
            Submit
          </Button>
          <Box margin={1} textAlign="center"></Box>
          <Button variant="outlined" size="small" sx={{ marginTop: 1 }} onClick="/login">
            <IconButton >
              <ArrowBackIcon />
            </IconButton>
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default Register;
