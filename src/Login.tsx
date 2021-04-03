import React, { useState, useEffect } from "react";
import styles from "./Login.module.scss";
import { auth } from "./firebase";
import { useForm } from "react-hook-form";
import { withRouter } from "react-router";

const Login: React.FC = (props: any) => {
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const unSub = auth.onAuthStateChanged((user) => {
      console.log(user);
      user && props.history.push("/");
    });
    return () => unSub();
  }, [props.history]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  const onSubmit = async (data: any): Promise<void> => {
    try {
      console.log(data);
      await auth.signInWithEmailAndPassword(data.email, data.password);
      console.log("success");
      props.history.push("/");
    } catch (error) {
      console.log(error.message);
      setMessage(error.message);
      setCode(error.code);
    }
  };

  return (
    <div className={styles.login__root}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email" className={styles.login__label}>
          Email:
        </label>
        <input
          type="text"
          id="email"
          name="email"
          ref={register({ required: true, pattern: /^\S+@\S+$/i })}
        />

        <br />
        <label htmlFor="password" className={styles.login__label}>
          Password:
        </label>
        <input type="password" name="password" id="password" ref={register()} />
        <br />

        <input className={styles.login__submit} type="submit" />
      </form>
    </div>
  );
};

export default withRouter(Login);
