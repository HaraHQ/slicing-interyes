import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineMenu } from "react-icons/md";
import { motion } from "framer-motion"
import fonts from "@/libs/font";

import useNavbar from "@/stores/useNavbar";
import useAuth from "@/stores/useAuth";

import Logo from "../public/interyes-logo.png";
import { useRouter } from "next/router";

const menus = [
  {
    key: 1,
    title: "Home",
    url: "/",
    child: false,
  },
  {
    key: 2,
    title: "About",
    url: "/about",
    child: false,
  },
  {
    key: 3,
    title: "Services",
    url: "/services",
    child: false,
  },
  {
    key: 4,
    title: "Pages",
    url: "/service",
    child: [
      {
        key: 10,
        title: "Our Projects",
        url: "/projects"
      },
      {
        key: 11,
        title: "Professionals",
        url: "/professional"
      },
      {
        key: 12,
        title: "Login",
        url: "/auth",
        hideAuth: true
      },
      {
        key: 13,
        title: "Dashboard",
        url: "/dashboard",
        auth: true
      }

    ],
  }
]

const NavbarComponent = ({ mobile, activeKey = 1 }) => {
  const auth = useAuth();
  const router = useRouter();
  const [menu,setMenu] = React.useState(false);
  const [activeChild,setActiveChild] = React.useState(false);
  const navBar = useNavbar();
  const handleMenu = () => {
    if (!menu) {
      navBar.show();
    } else {
      navBar.hide();
    }
    setMenu(!menu);
  }

  const handleSideEffect = () => {
    navBar.hide();
  }

  const createSubMenu = (menuKey, child) => {
    return (
      <div className="hidden p-4" id={`mobile_sub_${menuKey} z-50`}>
        {child.map(ch => {
          if (ch?.hideAuth && auth.token) {
            //
          } else {
            if (ch?.auth && auth.token) {
              return (
                <div key={ch.key}>
                  <Link href={ch.url} onClick={handleSideEffect} className="hover:text-[#cda274] bg-green-200">{ch.title}</Link>
                </div>
              )
            }
            if (!ch?.auth) {
              return (
                <div key={ch.key}>
                  <Link href={ch.url} onClick={handleSideEffect} className="hover:text-[#cda274]">{ch.title}</Link>
                </div>
              )
            }
          }
        })}
      </div>
    )
  }

  const handleChildMenu = (childId = false) => {
    if (document.getElementById(`mobile_sub_${childId}`))
      document.getElementById(`mobile_sub_${childId}`).classList.toggle('hidden');
  }

  if (mobile) {
    if (navBar.active)
    {
      return (
        <motion.div className="absolute w-full bg-[#f4f0ec] p-8">
          {menus.map(menuData => {
            return (
              <>
                <div
                  key={menuData.key}
                  onClick={() => handleChildMenu(menuData.key)}
                  className={`cursor-pointer text-lg p-6 ${menuData.key === activeKey ? `text-[#cda274]` : ``} ${fonts.jost}`}>
                  <Link href={menuData.url} onClick={handleSideEffect} className="hover:text-[#cda274]">{menuData.title}</Link>
                  {menuData.child ? (createSubMenu(menuData.key, menuData.child)) : ``}
                </div>
              </>
            )
          })}
        </motion.div>
      )
    } else {
      return false;
    }
  }
  return (
    <div className="max-md:flex max-md:justify-between md:grid md:grid-cols-2 py-4 px-2">
      <div className="md:col-span-1">
        <Image src={Logo} alt="Logo" width={165} height={55} className="cursor-pointer" onClick={() => router.replace("/")} />
      </div>
      <div className="md:col-span-1 hidden md:flex md:flex-row justify-end text-xl items-center">
        {menus.map(menu => {
          return (
            <div key={menu.key} className="relative">
              <div
                id={`menu_${menu.key}`}
                className={`peer/navbar ml-10 ${menu.key === activeKey ? `text-[#cda274]` : ``} ${fonts.jost}`}>
                <Link href={menu.url} onClick={handleSideEffect} className="hover:text-[#cda274]">{menu.title}</Link>
              </div>
              {menu.child ? (
                <div
                  className="hidden peer-hover/navbar:flex hover:flex flex-col absolute min-w-[160px] text-left left-0 z-50">
                  {menu.child.map(ch => {
                    if (ch?.hideAuth === true && auth.token) {
                      // not created
                    } else {
                      if (ch?.auth && auth.token) {
                        return (
                          <div key={ch.key} className="p-4 text-lg bg-white z-50">
                            <Link href={ch.url} onClick={handleSideEffect} className="hover:text-[#cda274]">{ch.title}</Link>
                          </div>
                        )
                      }
                      if (!ch?.auth) {
                        return (
                          <div key={ch.key} className="p-4 text-lg bg-white z-50">
                            <Link href={ch.url} onClick={handleSideEffect} className="hover:text-[#cda274]">{ch.title}</Link>
                          </div>
                        )
                      }
                    }
                  })}
                </div>
              ) : false}
              
            </div>
          )
        })}
      </div>
      <div className="max-md:flex md:hidden">
        <button
          onClick={handleMenu}
          className={`px-4 ${menu ? `bg-black` : `bg-[#cda274]` } rounded-xl text-2xl`}>
          <MdOutlineMenu className="text-white" />
        </button>
      </div>
    </div>
  )
}

export default NavbarComponent;