import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import styles from "./TaskCard.module.scss";

const TaskCard: React.FC = () => {
  return (
    <Card className={styles.taskCard__root}>
      <div className={styles.green}></div>
      <CardContent>
        <Typography className={styles.title} variant="h6">
          This is a test data
        </Typography>
        <Typography className={styles.items} variant="body1">
          {/* <table>
            <tr>
              <th>● Due Date</th>
              <td>: 2021/12/31</td>
              <th>● Priority</th>
              <td>: High</td>
            </tr>
            <tr>
              <th>● Estimation</th>
              <td>: 1.0</td>
              <th>● Actual Time</th>
              <td>: 1.0</td>
            </tr>
          </table> */}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TaskCard;
