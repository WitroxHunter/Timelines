export default function SignUp() {
  return (
    <>
      <div className="sign-up">
        Sign up
        <form>
          <label>Nickname</label>
          <input type="text" />
          <br />
          <label>Email</label>
          <input type="email" />
          <br />
          <label>Password</label>
          <input type="password" />
          <br />
          <label>Repeat password</label>
          <input type="password" />
          <br />
          <input type="submit" value={"Submit"} />
        </form>
      </div>
    </>
  );
}
