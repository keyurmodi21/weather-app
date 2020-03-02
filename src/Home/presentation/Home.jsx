import React from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import image from "../../images/perth.jpg";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import {
  WiSunrise,
  WiSunset,
  WiHumidity,
  WiWindy,
  WiHot,
  WiStars
} from "react-icons/wi";

import Forecast from "./Forecast";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 1200,
    margin: "0 auto",
    position: "relative",
    borderRadius: 20
  },
  title: {
    fontSize: 20
  },
  subTitle: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  media: {
    height: 350,
    width: 1200,
    margin: "0 auto"
  },
  list: {
    boxShadow: "0px 0px 10px -2px rgba(0,0,0,0.1)",
    borderRadius: 50,
    margin: "30px"
  },
  content: {
    textAlign: "left",
    position: "absolute",
    top: "50px",
    left: "40px",
    color: "black",
    backgroundColor: "white",
    borderRadius: 20,
    padding: "35px 45px",
    boxShadow: "0px 0px 26px 0 rgba(0,0,0,0.2)"
  },
  content1: {
    textAlign: "center"
  },
  nexthour: {
    background: "#fff",
    borderRadius: "20px",
    marginTop: "-100px",
    boxShadow: "0px 0px 10px -2px rgba(0,0,0,0.1)",
    padding: "20px 30px 30px"
  }
});

export default function Home(props) {
  const classes = useStyles();

  return (
    <div>
      {props.weatherData.cod === 200 ? (
        <Card
          className={classes.root}
          style={{ boxShadow: "0px 0px 10px -2px rgba(0,0,0,0.1)" }}
        >
          <CardMedia className={classes.media} image={image} title="Perth" />
          <CardContent className={classes.content}>
            <Typography
              className={classes.title}
              color="textPrimary"
              gutterBottom
            >
              {props.weatherData.name}, {props.weatherData.sys.country}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {new Date().toDateString()},
              <b> {props.weatherData.weather[0].main}</b>
            </Typography>
            <Typography variant="h3" component="p">
              {props.roundUpTemperature(props.weatherData.main.temp)}&#8451;
              <br />
            </Typography>

            <Typography
              className={classes.subTitle}
              color="textSecondary"
              gutterBottom
            >
              Feels Like:{" "}
              {props.roundUpTemperature(props.weatherData.main.temp_max)}&#8451;
            </Typography>
          </CardContent>
          <CardContent className={classes.content1}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <List className={classes.root}>
                  <ListItem className={classes.list}>
                    <ListItemAvatar>
                      <WiWindy
                        style={{
                          width: "60px",
                          height: "60px",
                          color: "#49aaa0"
                        }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography>
                          Winds: {props.weatherData.wind.speed} m/s
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem className={classes.list}>
                    <ListItemAvatar>
                      <WiHot
                        style={{
                          width: "60px",
                          height: "60px",
                          color: "#49aaa0"
                        }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography>
                          High:{" "}
                          {props.roundUpTemperature(
                            props.weatherData.main.temp_max
                          )}
                          &#8451;
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem className={classes.list}>
                    <ListItemAvatar>
                      <WiSunrise
                        style={{
                          width: "60px",
                          height: "60px",
                          color: "#49aaa0"
                        }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography>
                          Sunrise:{" "}
                          {props.timestampToTime(props.weatherData.sys.sunrise)}
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={3}>
                <List className={classes.root}>
                  <ListItem className={classes.list}>
                    <ListItemAvatar>
                      <WiHumidity
                        style={{
                          width: "60px",
                          height: "60px",
                          color: "#49aaa0"
                        }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography>
                          Humidity: {props.weatherData.main.humidity}%
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem className={classes.list}>
                    <ListItemAvatar>
                      <WiStars
                        style={{
                          width: "60px",
                          height: "60px",
                          color: "#49aaa0"
                        }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography>
                          Low:{" "}
                          {props.roundUpTemperature(
                            props.weatherData.main.temp_min
                          )}
                          &#8451;
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem className={classes.list}>
                    <ListItemAvatar>
                      <WiSunset
                        style={{
                          width: "60px",
                          height: "60px",
                          color: "#49aaa0"
                        }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography>
                          Sunset:{" "}
                          {props.timestampToTime(props.weatherData.sys.sunset)}
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={1}></Grid>
              <Grid
                item
                xs={4}
                style={{ marginLeft: "30px", marginBottom: "30px" }}
              >
                <Paper className={classes.nexthour}>
                  <Forecast
                    forecastData={props.forecastData}
                    timestampToTime={props.timestampToTime}
                    roundUpTemperature={props.roundUpTemperature}
                  />
                </Paper>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}

Home.propTypes = {
  weatherData: PropTypes.object.isRequired,
  forecastData: PropTypes.object.isRequired,
  timestampToTime: PropTypes.func.isRequired,
  roundUpTemperature: PropTypes.func.isRequired
};
