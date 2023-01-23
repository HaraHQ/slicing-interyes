import DashboardLayout from "@/components/layouts/dashboard.layout"
import useAuth from "@/stores/useAuth";
import Image from "next/image";
import React from "react";
import fonts from "@/libs/font";

const DashboardPage = () => {
  const auth = useAuth();
  const [user, setUser] = React.useState({
    data: {
      id: 0,
      email: "",
      first_name: "",
      last_name: "",
      avatar: ""
    }
  })
  const getUserDetail = async () => {
    const user = await fetch("/api/profile");
    const json = await user.json();

    setUser(json);
  }
  React.useEffect(() => {
    getUserDetail();
  }, [auth.token]);
  return (
    <DashboardLayout>
      <div className="flex items-center">
        <div className="h-24 w-24 rounded-full bg-white relative my-4 mr-4">
          <Image src={user.data.avatar} alt="Photo" fill className="rounded-full" />
        </div>
        <div>
          <div className={`text-3xl ${fonts.dmserif}`}>{user.data.first_name} {user.data.last_name}</div>
          <div className={`text-lg ${fonts.jost}`}>{user.data.email}</div>
        </div>
      </div>
      <div>
        <div>API Used:</div>
        <div>
          <div>1. /api/login - https://reqres.in/api/login</div>
          <div>2. /api/users/4 - https://reqres.in/api/users/4</div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default DashboardPage