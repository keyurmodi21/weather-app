import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Typography from "@material-ui/core/Typography";

import {
  WiTime1,
  WiTime10,
  WiTime11,
  WiTime12,
  WiTime2,
  WiTime3,
  WiTime4,
  WiTime5,
  WiTime6,
  WiTime7,
  WiTime8,
  WiTime9
} from "react-icons/wi";

const styles = theme => ({
  root: {
    minWidth: 275,
    maxWidth: 1200,
    margin: "0 auto",
    position: "relative",
    alignContent: "center"
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
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "black",
    backgroundColor: "white"
  }
});

class Forecast extends React.PureComponent {
  getCorrectIcon(date) {
    let icon;
    if (this.props.forecastData.cod === "200") {
      switch (this.props.timestampToTime(date).split(":")[0]) {
        case "1":
        case "13":
          return (
            <WiTime1
              style={{
                width: "40px",
                height: "40px",
                color: "#49aaa0"
              }}
            />
          );

        case "2":
        case "14":
          return (
            <WiTime2
              style={{
                width: "40px",
                height: "40px",
                color: "#49aaa0"
              }}
            />
          );

        case "3":
        case "15":
          return (
            <WiTime3
              style={{
                width: "40px",
                height: "40px",
                color: "#49aaa0"
              }}
            />
          );

        case "4":
        case "16":
          return (
            <WiTime4
              style={{
                width: "40px",
                height: "40px",
                color: "#49aaa0"
              }}
            />
          );

        case "5":
        case "17":
          return (
            <WiTime5
              style={{
                width: "40px",
                height: "40px",
                color: "#49aaa0"
              }}
            />
          );

        case "6":
        case "18":
          return (
            <WiTime6
              style={{
                width: "40px",
                height: "40px",
                color: "#49aaa0"
              }}
            />
          );

        case "7":
        case "19":
          return (
            <WiTime7
              style={{
                width: "40px",
                height: "40px",
                color: "#49aaa0"
              }}
            />
          );

        case "8":
        case "20":
          return (
            <WiTime8
              style={{
                width: "40px",
                height: "40px",
                color: "#49aaa0"
              }}
            />
          );

        case "9":
        case "21":
          return (
            <WiTime9
              style={{
                width: "40px",
                height: "40px",
                color: "#49aaa0"
              }}
            />
          );

        case "10":
        case "22":
          return (
            <WiTime10
              style={{
                width: "40px",
                height: "40px",
                color: "#49aaa0"
              }}
            />
          );

        case "11":
        case "23":
          return (
            <WiTime11
              style={{
                width: "40px",
                height: "40px",
                color: "#49aaa0"
              }}
            />
          );

        case "12":
        case "24":
          return (
            <WiTime12
              style={{
                width: "40px",
                height: "40px",
                color: "#49aaa0"
              }}
            />
          );

        default:
          return <div></div>;
      }
    }
    return icon;
  }

  render() {
    const {
      props: { classes, forecastData, timestampToTime, roundUpTemperature }
    } = this;

    return (
      <div>
        <h3>Next 24 Hours forecast</h3>
        {forecastData.cod === "200" ? (
          <div>
            {forecastData.list.map((eachItem, index) => {
              const dt = eachItem.dt;

              return (
                <List className={classes.root} key={index}>
                  <ListItem>
                    <ListItemAvatar>{this.getCorrectIcon(dt)}</ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography>
                          {timestampToTime(dt)}: {"  "}
                          {roundUpTemperature(eachItem.main.temp)} &#8451;
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              );
            })}
          </div>
        ) : null}
      </div>
    );
  }
}

Forecast.propTypes = {
  forecastData: PropTypes.object.isRequired,
  timestampToTime: PropTypes.func.isRequired,
  roundUpTemperature: PropTypes.func.isRequired
};

export default withStyles(styles)(Forecast);
