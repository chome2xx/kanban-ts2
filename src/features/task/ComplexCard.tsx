import React, { useState, useEffect } from "react";
import { db, storage } from "../../firebase";
import { useDispatch } from "react-redux";
import { edit } from "../Modal/modalSlice";

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
import EditIcon from "@material-ui/icons/Edit";
import { TypeDocument } from "../../interface/Types";
import DeleteIcon from "@material-ui/icons/Delete";

const ComplexCard: React.FC<TypeDocument> = (doc) => {
  const [expanded, setExpanded] = useState(false);
  const dispatch = useDispatch();
  const project_id = "test";
  const ref = storage.ref().child("images/3.jpeg");

  const [url, setUrl] = useState("");

  useEffect(() => {
    ref.getDownloadURL().then(function (url) {
      setUrl(url);
      console.log(url);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const deleteTask = () => {
    db.collection("project")
      .doc(project_id)
      .collection("tasks")
      .doc(doc.id)
      .delete();
  };

  const setStatus = (): string => {
    const today = formatDate(new Date());
    const dueDate = formatDate(new Date(doc.task.dueDate));
    if (doc.task.phase === "Done") {
      return "";
    } else if (doc.task.dueDate === "") {
      return styles.status_white;
    } else if (dueDate > today) {
      return styles.status_green;
    } else if (dueDate === today) {
      return styles.status_orange;
    } else {
      return styles.status_red;
    }
  };

  const formatDate = (date: Date): string => {
    // let formatDate: string;
    const year: number = date.getFullYear();
    const month: number = date.getMonth() + 1;
    const day: number = date.getDate();
    const formatDate: string =
      year + ("0" + month).slice(-2) + ("0" + day).slice(-2);
    return formatDate;
  };

  return (
    <Card className={styles.root}>
      <CardHeader
        className={styles.cardHeader}
        avatar={<Avatar />}
        // avatar={<Avatar src={url} />}
        action={
          <IconButton onClick={() => dispatch(edit(doc))} aria-label="settings">
            <EditIcon className={styles.editIcon} fontSize="small" />
          </IconButton>
        }
        title={doc.task.title}
        subheader={doc.task.update}
      />
      <div className={setStatus()}></div>
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
            Due date : {doc.task.dueDate}
          </Typography>
          <Typography paragraph variant="body2">
            Estimation : {doc.task.estimation}
          </Typography>
          <Typography paragraph variant="body2">
            Actual Time : {doc.task.actualTime}
          </Typography>
          <Typography paragraph variant="body2">
            Priority : {doc.task.priority}
          </Typography>
          <Typography paragraph variant="body2">
            {doc.task.memo}
          </Typography>
          <DeleteIcon onClick={deleteTask} className={styles.deleteIcon} />
        </CardContent>
      </Collapse>
    </Card>
  );
};
export default ComplexCard;
