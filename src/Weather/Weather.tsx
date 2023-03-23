import {forecastMetaShape} from "./types";
import React from "react";
import axios from "axios";
import moment from "moment";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Container,
  Card,
  CardHeader,
  CardContent,
  LinearProgress,
  Typography,
} from "@mui/material";
import Icon from "../Icon";

export function Weather() {

  const load = () => {
    if (!data && !loading){
      setLoading(true);
      axios.get('https://api.listingslab.com/weather')
        .then(function (response) {
          setData(response.data);
          setLoading(false);
        })
        .catch(function (error) {
          setData(error);
        })
    }
    return false;
  };

  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if(!data && !loading) load();
  }, [data, loading]);
  let forecastMeta: forecastMetaShape | null = null;
  if(data){
    forecastMeta = data.app;
  }

  return (
    <>
      <Container maxWidth="sm">
        <Card>
          {loading ? <LinearProgress /> : <Box sx={{height:4}}/> }
          <CardHeader 
            avatar={<Icon icon="rocket" />}
            title="Weather"
            subheader={moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}
          />
          { data ? null : null }
          <CardContent>
            
            <Typography variant="body1">
             
            </Typography>
          </CardContent>
          {data ? <Accordion>
            <AccordionSummary
              expandIcon={<Icon icon="expand" />}
              aria-controls="data"
            >
              <Typography>forecastMeta</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <pre>{JSON.stringify(forecastMeta, null, 2)}</pre>
            </AccordionDetails>
          </Accordion> : null }
          

        </Card>
      </Container>
    </>
  )
}

/*

<Typography variant="h6">
              Data
            </Typography>


{!loading && !data ? <Button sx={{my:2}}
              variant="contained"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                load();
              }}>
              <Icon icon="save" />
              <span style={{marginLeft:8, marginRight:8}}>
                Load weather
              </span>
            </Button> : null }
*/