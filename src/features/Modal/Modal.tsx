// React modules
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectModalState } from "../Modal/modalSlice";
import { close } from "../Modal/modalSlice";
import { TypeTask } from "../../interface/Types";
// Firestore module
import { db } from "../../firebase";
// CSS module
import styles from "./Modal.module.scss";
// Material UI componets
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";
// React Hooks Form
import { useForm } from "react-hook-form";

interface FormFields {
  title: string;
  dueDate: string;
  startDate: string;
  estimation: number;
  actualTime: number;
  priority: string;
  completed: boolean;
  memo: string;
}

const Modal: React.FC = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const modalState = useSelector(selectModalState);
  const [completed, setCompleted] = useState(false);

  // Set default value to completed field
  useEffect(() => {
    setCompleted(modalState.document.task.completed);
  }, [modalState.document.task.completed]);

  // Set changed value to completed field
  const handleCompletedChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCompleted(event.target.checked);
  };

  // Post new document to cloud firestore
  const onSubmit = (data: FormFields) => {
    const today: string = new Date().getFullYear().toString();
    console.log(today);
    if (modalState.mode === "create") {
      let newTask: TypeTask;
      newTask = {
        title: data.title,
        memo: data.memo,
        estimation: data.estimation,
        actualTime: data.actualTime,
        dueDate: data.dueDate,
        completed: data.completed,
        priority: data.priority,
        phase: "Backlog",
        update: today,
      };
      db.collection("tasks").add(newTask);
    } else {
      let edit: TypeTask;
      edit = {
        title: data.title,
        memo: data.memo,
        estimation: data.estimation,
        actualTime: data.actualTime,
        dueDate: data.dueDate,
        completed: data.completed,
        priority: data.priority,
        phase: modalState.document.task.phase,
        update: today,
      };
      db.collection("tasks").doc(modalState.document.id).set(edit);
    }
    dispatch(close());
  };

  console.log(errors);
  return (
    <>
      <div id={styles.modal__overlay}></div>
      <div id={styles.modal__root}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>{modalState.mode === "create" ? "New Task" : "Edit Task"}</h1>
          <TextField
            inputRef={register()}
            required
            name="title"
            type="text"
            id="standard-full-width"
            label="Title"
            className={styles.longField}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            defaultValue={modalState.document.task.title}
          />

          <TextField
            error={false}
            inputRef={register({ min: 0, maxLength: 3 })}
            id="estimation"
            label="Estimation"
            name="estimation"
            type="decimal"
            className={styles.harfField}
            InputLabelProps={{
              shrink: true,
            }}
            defaultValue={modalState.document.task.estimation}
          />
          <TextField
            error={false}
            inputRef={register({ min: 0, maxLength: 3 })}
            name="actualTime"
            id="Actual"
            label="Actual"
            type="decimal"
            className={styles.harfField}
            InputLabelProps={{
              shrink: true,
            }}
            defaultValue={modalState.document.task.actualTime}
          />

          <TextField
            id="startDate"
            label="Start date"
            inputRef={register()}
            name="startDate"
            type="date"
            className={styles.harfField}
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="dueDate"
            label="Due date"
            inputRef={register()}
            name="dueDate"
            type="date"
            className={styles.harfField}
            InputLabelProps={{
              shrink: true,
            }}
            defaultValue={modalState.document.task.dueDate}
          />
          <FormControl component="fieldset" className={styles.longField}>
            <FormLabel className={styles.label} component="legend">
              {" "}
              Select priority level
            </FormLabel>
            <RadioGroup
              row
              aria-label="position"
              defaultValue={modalState.document.task.priority}
              className={styles.radioGroup}
            >
              <FormControlLabel
                value="High"
                name="priority"
                inputRef={register()}
                control={<Radio color="primary" />}
                label="High"
                labelPlacement="end"
              />
              <FormControlLabel
                value="Middle"
                name="priority"
                inputRef={register()}
                control={<Radio color="primary" />}
                label="Middle"
                labelPlacement="end"
              />
              <FormControlLabel
                value="Low"
                name="priority"
                inputRef={register()}
                control={<Radio color="primary" />}
                label="Low"
                labelPlacement="end"
              />
            </RadioGroup>
          </FormControl>

          <TextField
            inputRef={register()}
            name="memo"
            type="text"
            id="memo"
            label="Memo"
            className={styles.longField}
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            multiline
            rows={3}
            defaultValue={modalState.document.task.memo}
          />
          <FormControlLabel
            control={
              <Switch
                inputRef={register()}
                checked={completed}
                onChange={handleCompletedChange}
                name="completed"
                color="primary"
              />
            }
            label="Completed"
          />

          <br />
          <div className={styles.buttonGroup}>
            <Button
              className={styles.button}
              onClick={() => dispatch(close())}
              variant="contained"
            >
              Cancel
            </Button>
            <Button
              className={styles.button}
              type="submit"
              variant="contained"
              color="primary"
            >
              {modalState.mode === "create" ? "Add" : "Update"}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Modal;
