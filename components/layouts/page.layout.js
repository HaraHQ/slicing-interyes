const { default: Head } = require("next/head")
import PageHeaderComponent from "../page-header.component";
import NavbarComponent from "../navbar.component";
import FooterComponent, { FooterMenuComponent } from "../footer.component";
import React from "react";
import useAuth from "@/stores/useAuth";

const PageLayout = ({ children, activeKey = 1, title, header }) => {
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
        <title>Page: {title}</title>
      </Head>
      <section className="max-md:mx-4 mx-28">
        <NavbarComponent activeKey={activeKey} />
      </section>
      <section>
        <NavbarComponent activeKey={activeKey} mobile />
      </section>
      <PageHeaderComponent data={header} />
      {children}
      <section className="max-md:mx-4 mx-28 my-20 p-2">
        <FooterMenuComponent />
      </section>
      <FooterComponent />
    </div>
  )
}

export default PageLayout