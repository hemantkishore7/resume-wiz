
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

function Login() {
  const [isSignup, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  console.log(isSignup);

  function handleClose() {
    setOpen(false);
  }
  return (
    <div>
      <form>
        <Box
          display={"flex"}
          flexDirection={"column"}
           maxWidth={400}
          margin={"auto"}
          alignItems={"center"}
          justifyContent={"center"}
          marginTop={5}
          borderRadius={5}
          boxShadow={"5px 5px 5px"}
          padding={4}
        >
          <Typography variant="h4" textAlign={"center"} padding={3}>
            Login
          </Typography>
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
         
          <Button variant="contained" type="submit" sx={{marginTop:2, borderRadius:3}}>
            login
          </Button>
          <Box margin={1} textAlign="center">
          <Link >
            Forget Password
          </Link>
          </Box>
          <Button variant="outlined" sx={{marginTop:1}}>Create Account</Button>
        </Box>
      </form>

      {/* Using Dialog box */}

      {/* <Dialog open={open}>  
        <DialogTitle sx={{display:"flex",justifyContent:"end"}}>
          <IconButton onClick={handleClose}>
            <CloseIcon
              fontSize="medium"

            />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <Box
            display={"flex"}
            flexDirection={"column"}
            width={380}
            height={400}
            justifyContent={"space-around"}
          >
            <Typography variant="h4" textAlign={"center"}>
            {isSignup? "Create New Account" : "Login"}
            </Typography>

          {isSignup && (  <TextField placeholder="Username"
            name="name"
            type="text"
            required
            >
            </TextField>)}

            <TextField
              placeholder="Email"
              name="email"
              type="email"
              required
            ></TextField>
            <TextField
              placeholder="Password"
              name="password"
              type="password"
              required  
            ></TextField>

            <Button onClick={handleClose} variant="elevated" >
             {isSignup? "Submit":"Login"}
            </Button>
            {isSignup && (<Link textAlign="center">Back to Login</Link>)}
            {!isSignup && (<Link  textAlign={"center"} >Forget Password</Link>)}
            
           {isSignup && (<Button onClick={()=>setIsSignUp(true)}>switch to Create Account</Button>)}
          
          </Box>
        </DialogContent>
      </Dialog> */}
    </div>
  );
}

export default Login;
