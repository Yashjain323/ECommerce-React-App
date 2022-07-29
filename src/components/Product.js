import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { TextField, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Product() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  const fetchData = () => {
    fetch(`http://65.0.185.12:3000/Product/GetProduct/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProduct(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  const url = `http://65.0.185.12:3000/images/${product.imageURLs}`;
  return (
    <>
   <React.Fragment>
    <CssBaseline/>
    <Container>
      <Box
        sx={{
          bgcolor: "#fce2d4",
          height: "100vh",
          width: 1,
          "& .MuiTextField-root": { m: 1, width: "65ch" },
        }}
      >
        <h1 className="PHeading">{product.name}</h1>
        <div className="ProductDiv">
        <img className="ProductImage"src={url} alt="FooterImage" />
        </div>
        <div className="Pdetails">
          <TextField
            id="filled-basic"
            label="Product Name"
            fullWidth
            value={product.name}
            defaultValue="Name"
          />
          <TextField
            id="filled-basic"
            label="Category"
            fullWidth
            value={product.category}
            defaultValue="Category"
          />

          <TextField
            id="filled-basic"
            label="Description"
            fullWidth
            value={product.desc}
            defaultValue="Desc"
          />
          <TextField
            id="filled-basic"
            label="Price"
            fullWidth
            value={product.price}
            defaultValue="0"
          />
          <TextField
            id="filled-basic"
            label="Discount"
            fullWidth
            value={product.discount}
            defaultValue="0"
          />
        </div>
        <Box className="Pbuttons" sx={{ "& .MuiButton-root": { m: 1 } }}>
          <Button variant="contained" color="error" startIcon={<DeleteIcon />}>
            Delete
          </Button>
          <Button variant="contained" color="success" startIcon={<CheckIcon />}>
            Accept
          </Button>
        </Box>
      </Box>
      </Container>
      </React.Fragment>
    </>
  );
}
