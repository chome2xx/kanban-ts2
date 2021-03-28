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
// import image from "../../media/3.jpeg";
import EditIcon from "@material-ui/icons/Edit";
import { TypeTask } from "../../interface/Types";

const ComplexCard: React.FC<TypeTask> = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className={styles.root}>
      <CardHeader
        className={styles.cardHeader}
        avatar={<Avatar />}
        // avatar={<Avatar src={image} />}
        action={
          <IconButton aria-label="settings">
            <EditIcon fontSize="small" />
          </IconButton>
        }
        title={props.title}
        subheader={props.id}
      />
      <div className={styles.icon}></div>
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
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
export default ComplexCard;
