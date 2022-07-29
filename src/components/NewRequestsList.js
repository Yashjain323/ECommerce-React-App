import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
export default function NewRequestList() {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch("http://65.0.185.12:3000/Shop/GetAllShops")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map((user) => (
            <List
              sx={{ width: "100%", maxWidth: 800, bgcolor: "background.paper" }}
              className="reqList"
            >
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={<NavLink to={user._id}>{user.name}</NavLink>}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {user.kartaName}
                      </Typography>{" "}
                      <div></div>
                      {user.mobile}
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
