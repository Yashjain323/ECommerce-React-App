import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import { TextField, Button } from "@mui/material";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import CheckIcon from "@mui/icons-material/Check";
import BlockIcon from "@mui/icons-material/Block";
import axios from "axios";

export default function ShopTemplate() {
  const [user, setUser] = useState([]);
  const { id } = useParams();
  const fetchData = () => {
    fetch(`http://65.0.185.12:3000/Shop/GetShopById/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUser(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const verified = () => {
    axios
      .put(`http://65.0.185.12:3000/Shop/ChangeVerifiedStatus/${id}`)
      .then((response) => {
        return response.json();
      });
  };


  const blocked = () => {
    axios
      .put(`http://65.0.185.12:3000/Shop/ChangeBlockedStatus/${id}`)
      .then((response) => {
        return response.json();
      });
  };
  
  const url = `http://65.0.185.12:3000/images/${user.shopImg}`;

  return (
    <>
      <React.Fragment>
        <CssBaseline />
        <Container>
          <Box
            sx={{
              bgcolor: "#fce2d4",
              height: "150vh",
              width: "100%",
              "& .MuiTextField-root": { m: 1, width: "65ch" },
            }}
          >
            <h1 className="PHeading">{user.name}</h1>
            <div className="Simage">
              <img src={url} alt="ShopImage" className="Pimage" />
            </div>
            <TextField
              id="shopName"
              label="Shop Name"
              value={user.name}
              defaultValue="Name"
            />
            <TextField
              id="kartaName"
              label="Karta Name"
              value={user.kartaName}
              defaultValue="Karta"
            />

            <TextField
              id="filled-basic"
              label="Aadhar Number"
              value={user.aadharNo}
              defaultValue="0"
            />

            <TextField
              id="filled-basic"
              label="PAN Number"
              defaultValue="00"
              value={user.panNo}
            />
            <TextField
              id="gstNo"
              defaultValue="00"
              label="GST Number"
              value={user.gstNo}
            />
            <TextField
              id="phoneNo"
              defaultValue="00"
              label="Mobile Number"
              value={user.mobile}
            />
            <TextField
              id="address"
              label="Address"
              value={user && user.address ? user.address.address : null}
              defaultValue="No Address"
            />
            <TextField
          id="state"
          label="State"
         defaultValue="UP"
          value={user && user.address ? user.address.state : null}
        />
         <TextField
          id="city"
          label="City"
          defaultValue="Agra"
          value={user && user.address ? user.address.city : null}
        />
         <TextField
          id="pinCode"
          label="Pin Code"
          defaultValue="282005"
          value={user && user.address ? user.address.pincode : null}
        />
            <Box className="Pbuttons" sx={{ "& .MuiButton-root": { m: 1 } }}>
              <Button className="buttonCss"
                variant="contained"
                color="success"
                startIcon={<CheckIcon />}
                href="/admin/verifiedShopsList"
                onClick={verified}
              >
                Verify
              </Button>
              <Button className="buttonCss"
                variant="contained"
                color="error"
                startIcon={<BlockIcon />}
                href="/admin/blockedShops"
                onClick={blocked}
              >
                Block
              </Button>
            </Box>
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
}
