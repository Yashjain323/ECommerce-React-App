import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const { shopId } = useParams();
  const fetchProducts = () => {
    fetch(`http://65.0.185.12:3000/Product/GetAllProductsByShopId/${shopId}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      });
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {products.length > 0 && (
        <ul>
          {products.map((product) => (
            <List sx={{ width: "100%" }} className="reqList">
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={<NavLink to={product._id}>{product.name}</NavLink>}
                  secondary={product.desc}
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </List>
          ))}
        </ul>
      )}
    </>
  );
}
