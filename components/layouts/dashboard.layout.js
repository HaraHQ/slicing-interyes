import useAuth from "@/stores/useAuth";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { Button } from "../default.component";
import FooterComponent from "../footer.component";
import NavbarComponent from "../navbar.component";
import fonts from "@/libs/font";

const DashboardLayout = ({ children, activeKey }) => {
  const [show, setShow] = React.useState(false);
  const router = useRouter();
  const auth = useAuth();
  React.useEffect(() => {
    if (!auth.token) {
      router.replace("/");
    } else {
      setShow(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.token]);

  const handleLogout = () => {
    auth.removeToken();
  }

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
        <title>Interyes not Interno - Dashboard</title>
      </Head>
      <section className="max-md:mx-4 mx-28">
        <NavbarComponent activeKey={activeKey} />
      </section>
      <section>
        <NavbarComponent activeKey={activeKey} mobile />
      </section>
      <div className="w-full min-h-[70vh] p-6 border-t-2">
        <div className={`${fonts.dmserif} text-2xl`}>If you authorized, then welcome...</div>
        <Button title="Logout" handler={handleLogout} />
        <div className="p-4">
          {children}
        </div>
      </div>
      <FooterComponent />
    </div>
  )
}

export default DashboardLayout