const { default: Head } = require("next/head")
import React from "react";
import NavbarComponent from "../navbar.component";
import useAuth from "@/stores/useAuth";

const ErrorLayout = ({ children }) => {
  const auth = useAuth();
  const [show,setShow] = React.useState(false);
  React.useEffect(() => {
    setShow(true);
  }, [auth.token]);
  if (!show) {
    return (
      <div>Loading</div>
    )
  }
  return (
    <div className="bg-white m-h-full bg-center bg-auto bg-repeat-y" 
    style={{ backgroundImage: "url(interno-bg.png)" }}
    >
      <Head>
        <title>Interyes Error</title>
      </Head>
      <section className="max-md:mx-4 mx-28">
        <NavbarComponent />
      </section>
      <section>
        <NavbarComponent mobile />
      </section>
      {children}
    </div>
  )
}

export default ErrorLayout