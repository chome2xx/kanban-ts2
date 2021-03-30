import React from "react";
import styles from "./Modal.module.scss";
import { useDispatch } from "react-redux";
import { close } from "../Modal/modalSlice";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Button from "@material-ui/core/Button";

import { useForm } from "react-hook-form";

const Modal: React.FC = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: any) => console.log(data);

  console.log(errors);
  return (
    <>
      <div id={styles.modal__overlay}></div>
      <div id={styles.modal__root}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>New Task</h1>
          <TextField
            inputRef={register()}
            required
            name="Title"
            type="text"
            id="standard-full-width"
            label="Title"
            // style={{ margin: 8 }}
            className={styles.longField}
            // placeholder="Placeholder"
            // helperText="Full width!"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            error={false}
            inputRef={register({ min: 0, maxLength: 3 })}
            id="estimation"
            label="Estimation"
            name="Estimation"
            type="number"
            className={styles.harfField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            error={false}
            inputRef={register({ min: 0, maxLength: 3 })}
            name="Actual"
            id="Actual"
            label="Actual"
            type="number"
            className={styles.harfField}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            id="Startdate"
            label="Start date"
            inputRef={register()}
            name="Start date"
            type="date"
            className={styles.harfField}
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="DueDate"
            label="Due date"
            inputRef={register()}
            name="Due"
            type="date"
            className={styles.harfField}
            defaultValue=""
            InputLabelProps={{
              shrink: true,
            }}
          />
          <FormControl component="fieldset" className={styles.longField}>
            <FormLabel className={styles.label} component="legend">
              {" "}
              Select priority level
            </FormLabel>
            <RadioGroup
              row
              aria-label="position"
              defaultValue="Low"
              className={styles.radioGroup}
            >
              <FormControlLabel
                value="High"
                name="Priority"
                inputRef={register()}
                control={<Radio color="primary" />}
                label="High"
                labelPlacement="end"
              />
              <FormControlLabel
                value="Middle"
                name="Priority"
                inputRef={register()}
                control={<Radio color="primary" />}
                label="Middle"
                labelPlacement="end"
              />
              <FormControlLabel
                value="Low"
                name="Priority"
                inputRef={register()}
                control={<Radio color="primary" />}
                label="Low"
                labelPlacement="end"
              />
            </RadioGroup>
          </FormControl>

          <TextField
            inputRef={register()}
            name="Memo"
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
          />
          <FormControlLabel
            control={
              <Switch
                inputRef={register()}
                // checked={state.checkedB}
                // onChange={handleChange}
                name="Completed"
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
              Add
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Modal;
