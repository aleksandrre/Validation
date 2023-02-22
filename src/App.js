import { useState } from "react";
import { useForm } from "react-hook-form";
import "./app.css";
function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userInfo, setUserInfo] = useState();
  const onSubmit = (data) => {
    setUserInfo(data);
    console.log(data);
  };
  console.log(errors);

  return (
    <div className="container">
      <pre>{JSON.stringify(userInfo, undefined, 2)}</pre>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Registartion Form</h1>
        <div className="ui divider"></div>
        <div className="div1">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              {...register("username", { required: "Username is required" })}
            />
          </div>
          <p>{errors.username?.message}</p>

          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
            />
          </div>
          <p>{errors.email?.message}</p>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 4,
                  message: "Password must be more than 4 characters",
                },
                maxLength: {
                  value: 12,
                  message: "Password must be less than 12 characters",
                },
              })}
            />
          </div>
          <p>{errors.password?.message}</p>

          <button className="button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
