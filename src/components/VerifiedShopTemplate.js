import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import { TextField, Button } from "@mui/material";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";

export default function VerifiedShopTemplate() {
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
            <div className="ImgContainer">
              <h2>Shop Image</h2>
              <img src={url} alt="ShopImage" className="ShopImage" />
              <Button
                className="ShopButton buttonCss"
                variant="contained"
                color="primary"
                href={`/admin/showProducts/${user._id}`}
              >
                Show All Products
              </Button>
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
              {/* <Button
                className="UShopButton"
                variant="contained"
                color="primary"
              >
                Update Shop
              </Button> */}
             
          </Box>
        </Container>
      </React.Fragment>
    </>
  );
}
