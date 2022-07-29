import React from 'react'
import { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

export default function VerifiedShopsList() {
  const [verify, setVerify] = useState([]);

  const fetchData = () => {
    fetch("http://65.0.185.12:3000/Shop/GetAllVerifiedShops")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setVerify(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
      <div>
        {verify.length > 0 && (
          <ul>
            {verify.map((verifieduser) => (
              <List
                sx={{ width: "100%", maxWidth: 800, bgcolor: "background.paper" }}
                className="reqList"
              >
                <ListItem alignItems="flex-start">
                  <ListItemText
                    primary={<NavLink to={verifieduser._id}>{verifieduser.name}</NavLink>}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {verifieduser.kartaName}
                        </Typography>{" "}
                        <div></div>
                        {verifieduser.mobile}
                        <div className="ShowProducts">
                        <Button className ="buttonCss"
                          variant="contained" 
                          color="primary"
                          href={`showProducts/${verifieduser._id}`}
                        >
                          Show All Products
                          </Button>
                        </div>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </List>
            ))}
          </ul>
        )}
      </div>
    );
}
