import React from "react";
import axios from "axios";
import {
  Button,
  Container,
  Card,
  CardHeader,
  CardContent,
  // CardActions,
  // Box,
  Typography,
} from "@mui/material";
import Icon from "../Icon";

export function Weather() {

  const load = () => {
    if (!data && !loading){
      console.log("load please");

      // Make a request for a user with a given ID
      axios.get('https://api.listingslab.com/weather')
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });


    }
    return false;
  };

  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  // React.useEffect(() => {
  //   console.log("render once. no redux")
  // }, []);

  return (
    <>
      <Container maxWidth="sm">
        <Card>
          <CardHeader 
            avatar={<Icon icon="rocket" />}
            title="Weather"
            subheader="time now"
          />
          
          <CardContent>
            <Typography variant="body1">
              Load latest weather data from https://api.listingslab.com/weather. This weather forecast is updated every day at 5am Malta time. Each update is a five day forecast 
            </Typography>

            <Typography variant="h6">
              Data
            </Typography>

            <pre>{JSON.stringify(data, null, 2)}</pre>

            <Button sx={{my:2}}
              variant="contained"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                load();
              }}>
              <Icon icon="save" />
              <span style={{marginLeft:8, marginRight:8}}>
                Load weather
              </span>
            </Button>


          </CardContent>
          
        </Card>
      </Container>
    </>
  )
}
