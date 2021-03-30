import React, { useState } from "react";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styles from "./ComplexCard.module.scss";
// import img from "../../media/3.jpeg";
import EditIcon from "@material-ui/icons/Edit";
import { TypeTask } from "../../interface/Types";

const ComplexCard: React.FC<TypeTask> = (props) => {
  const [expanded, setExpanded] = useState(false);

  const status = (status_color: string) => {
    switch (status_color) {
      case "red":
        return styles.status_red;
      case "green":
        return styles.status_green;
      case "orange":
        return styles.status_orange;
      default:
        break;
    }
  };
  // const status: string = styles.status_orange;

  return (
    <Card className={styles.root}>
      <CardHeader
        className={styles.cardHeader}
        avatar={<Avatar />}
        // avatar={<Avatar src={img} />}
        action={
          <IconButton aria-label="settings">
            <EditIcon fontSize="small" />
          </IconButton>
        }
        title={props.title}
        subheader="Update: 29 Sep 2021 10:00"
      />
      <div className={status(props.status)}></div>
      <CardActions disableSpacing className={styles.cardActions}>
        {/* <p className={styles.tag}>Issue</p> */}
        <IconButton
          className={clsx(styles.expand, {
            [styles.expandOpen]: expanded,
          })}
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph variant="h5">
            Information
          </Typography>
          <Typography paragraph variant="body2">
            Due date : {props.dueDate}
          </Typography>
          <Typography paragraph variant="body2">
            Estimation : {props.estimation}
          </Typography>
          <Typography paragraph variant="body2">
            Actual Time : {props.actualTime}
          </Typography>
          <Typography paragraph variant="body2">
            Priority : {props.priority}
          </Typography>
          <Typography paragraph variant="body2">
            {props.memo}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
export default ComplexCard;
