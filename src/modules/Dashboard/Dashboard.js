import React, { Component } from "react";
import axios from "axios";
import { getUsersApi } from "../../assets/services";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default class Dashboard extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios
      .get(getUsersApi)
      .then((res) => {
        console.log(res);
        this.setState({
          users: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const usersList = this.state.users.length ? (
      this.state.users.map((user) => {
        return (
          <React.Fragment key={user.id}>
            <Grid item xs={12} sm={12} md={4}>
              <Item>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
              </Item>
            </Grid>
          </React.Fragment>
        );
      })
    ) : (
      <p>No Post Yet!</p>
    );
    return (
      <div>
        <Box sx={{ flexGrow: 1, margin: "20px" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {usersList}
          </Grid>
        </Box>
      </div>
    );
  }
}
