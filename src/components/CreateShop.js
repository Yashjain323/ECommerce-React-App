import React from 'react'
import Box from "@mui/material/Box";
import { TextField, Button } from "@mui/material";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import { Form } from 'react-bootstrap';
import { useState,useEffect } from 'react';
import axios from "axios"

export default function CreateShop() {
//     const [state, setState] = useState({
//         name: "",
//         kartaName: ""
//       });
//       const handleChange = (e) => {
//         const value = e.target.value;
//         setState({
//           ...state,
//           [e.target.name]: value
//         });
//       };
const handleSubmit = (event) => {
    event.preventDefault();
    const shopData = new FormData(event.currentTarget);
    let shopName = shopData.get('shopName');
    let kartaName =  shopData.get('kartaName');
  
    console.log({
        shopName,kartaName
    });
  };
    axios.post("http://65.0.185.12:3000/Shop/CreateShop", {})
  .then((response) => {
    console.log(response);
  });
  
    // useEffect(() => {
    //   fetchData();
    // }, []);
  return (
    <>
   <Form>
        <CssBaseline />
        <Container>
          <Box style={{padding:"100px"}} component="form" onSubmit={handleSubmit}
            sx={{
              bgcolor: "#fce2d4",
              height: "150vh",
              width: "100%",
              "& .MuiTextField-root": { m: 1, width: "65ch" },
            }}
          >
            <TextField
              id="shopName"
              label="Shop Name"
              variant="outlined"
            //   value={state.name}
            //   onChange={handleChange}
            />
            <TextField
              id="kartaName"
              label="Karta Name"
              variant="outlined"
            //   value={state.kartaName}
            //   onChange={handleChange}
            />

            <TextField
              id="filled-basic"
              label="Aadhar Number"
              variant="outlined"
            />

            <TextField
              id="filled-basic"
              label="PAN Number"
              variant="outlined"
            />
            <TextField
              id="gstNo"
              label="GST Number"
              variant="outlined"
            />
            <TextField
              id="phoneNo"
              label="Mobile Number"
              variant="outlined"
            />
            <TextField
              id="address"
              label="Address"
              variant="outlined"
            />
            <TextField
          id="state"
          label="State"
          variant="outlined"
        />
         <TextField
          id="city"
          label="City"
          variant="outlined"
        />
         <TextField
          id="pinCode"
          label="Pin Code"
          variant="outlined"
          type="Number"
        />
            <Box className="Pbuttons" sx={{ "& .MuiButton-root": { m: 1 } }}>
              <Button className="buttonCss"
                variant="contained"
                color="success"
              >
                Create
              </Button>
            </Box>
          </Box>
        </Container>
      </Form>

    </>
  )
}
