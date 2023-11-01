import { useState } from "react";
import Form from "../../components/Form/Form";
import Success from "../../components/Success/Success";

const SignUp = () => {
  let [success, setSuccess] = useState(false);
  let [email, setEmail] = useState("");

  return success ? (
    <div className="h-screen lg:flex lg:justify-center items-center">
      <Success success={success} setSuccess={setSuccess} email={email}></Success>
    </div>
  ) : (
    <div className="h-screen lg:flex lg:justify-center items-center">
      <Form success={success} setSuccess={setSuccess} setEmail={setEmail}></Form>
    </div>
  );
};

export default SignUp;
