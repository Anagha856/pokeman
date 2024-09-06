import { useState } from "react";
import axios from "axios";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Pokecard = () => {
  const [cards, setCards] = useState([]);
  axios
    .get("https://dummyapi.online/api/pokemon")
    .then((res) => setCards(res.data));

  return (
    <div style={{ padding: "1.25rem" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} columns={10}>
          {cards.map((val) => {
            return (
              <Grid xs={4} key={val.id}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="pokemon img"
                    height="125"
                    image={val.image_url}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {val.pokemon}
                    </Typography>
                    <div>
                      <Typography
                        gutterBottom
                        variant="h6"
                        component="p"
                        sx={{ color: "text.secondary" }}
                      >
                        {val.type}
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default Pokecard;
