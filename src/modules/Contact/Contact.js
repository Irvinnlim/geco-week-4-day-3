import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Googlemap from "./components/Googlemap";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Contact = () => {
  const data = [
    {
      location: {
        address: "2 Venture Dr, #10-18 Vision Exchange, Singapore 608526",
      },
      contact: 99999999,
      email: "admin@gmail.com",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, margin: "20px" }}>
      <div>
        <h2>Contact Us</h2>
      </div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={12} sm={12} md={6}>
          <Item>
            <h3>Contact Number</h3>
            <p>{data[0].contact}</p>
          </Item>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Item>
            <h3>Email</h3>
            <p>{data[0].email}</p>
          </Item>
        </Grid>

        {/* Row for Location */}
        <Grid item xs={12} sm={12} md={12}>
          <Item>
            <h3>Location</h3>
            <p>{data[0].location.address}</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Googlemap />
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
