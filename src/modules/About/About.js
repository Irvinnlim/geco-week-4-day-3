import React from "react";
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

const About = () => {
  const teamMembers = [
    {
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
      name: "John Doe",
      designation: "CEO",
      quote: "Leading with vision and determination.",
    },
    {
      img: "https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Jane Smith",
      designation: "Marketing Director",
      quote: "Creating connections through effective storytelling.",
    },
    {
      img: "https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=1600",
      name: "Michael Johnson",
      designation: "Software Engineer",
      quote: "Crafting elegant solutions to complex problems.",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, margin: "20px" }}>
      <div>
        <h2>Get to know about us and relive our journey</h2>
        <p>
          Get acquainted with our team and understand how we work and proceed
          towards success.
        </p>
      </div>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={12} md={4}>
            <Item>
              <img
                style={{ height: "300px" }}
                src={member.img}
                alt={member.name}
              />
              <p>Name: {member.name}</p>
              <p>Designation: {member.designation}</p>
              <p>Quote: {member.quote}</p>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default About;
