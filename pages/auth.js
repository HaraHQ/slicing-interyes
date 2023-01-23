import React from "react";
import PageLayout from "@/components/layouts/page.layout";
import { Button } from "@/components/default.component";
import useAuth from "@/stores/useAuth";
import { useRouter } from "next/router";
import fonts from "@/libs/font";

const AuthPage = () => {
  const router = useRouter();
  const [show, setShow] = React.useState(false);
  const [error, setError] = React.useState(null);
  const auth = useAuth();
  const handleLogin = async () => {
    setError(null);

    const email = document.getElementById("user-email").value;
    const passw = document.getElementById("user-password").value;

    const login = await fetch("api/login", {
      method: "POST",
      body: JSON.stringify({ email, password: passw }),
      headers: {
        'Content-Type': 'application/json'
      },
    });

    const json = await login.json();

    if (login.ok) {
      // store token
      auth.addToken(json.token);

      // route to dashboard
    } else {
      setError(`Login failed: ${json.error || "Error"}`);
    }
  }
  React.useEffect(() => {
    if (auth.token) {
      router.replace("/dashboard");
    } else {
      setShow(true);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth.token])

  if (!show) {
    return (
      <div>Loading</div>
    )
  }
  return (
    <PageLayout
      activeKey={4}
      title="Login to System"
      header={{ title: "Login", segments: ["Home","Authentication"]}}>
      <section className="max-md:mx-4 mx-28 my-12 p-2">
        <div className={`${fonts.jost} text-lg`}>
          {error ? <div className={`text-red-800 bg-red-200 px-4 py-2 w-full border-2 border-red-900 rounded-lg mb-4 ${fonts.dmserif}`}>{error}</div> : false}
          <div>
            <div>Enter Email: (ex: eve.holt@reqres.in)</div>
            <input type="email" id="user-email" className="p-2 outline-transparent border-2 border-slate-500" />
          </div>
          <div>
            <div>Enter Password: (ex: cityslicka)</div>
            <input type="password" id="user-password" className="p-2 outline-transparent border-2 border-slate-500" />
          </div>
        </div>
        <div>
          <Button title="Login" handler={handleLogin} />
        </div>
      </section>
    </PageLayout>
  )
}

export default AuthPage