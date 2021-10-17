import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { FcMenu } from "react-icons/fc";
import { Offcanvas } from "react-bootstrap";
import OffCanvasMenu from "./OffCanvasMenu";
import NavMenu from "./NavMenu";
import useFirebase from "../../firebase/useFirebase";

const Navigation = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const activeStyle = {
    color: "#3bb77e",
    fontWeight: "bold",
  };

  const { currentUser } = useFirebase();
  return (
    <div className="py-3 ">
      <div className="w-9/12 mx-auto flex justify-between">
        <div className="logo  md:block hidden">
          <img
            src="https://i.ibb.co/Wf02m74/99f38e70989637-5bb5d1bdf021c.jpg"
            alt="super market logo"
            style={{ height: "60px" }}
          />
        </div>
        <div
          className="search border border-green-200  items-center rounded justify-between px-3 lg:flex hidden"
          style={{ width: "500px" }}
        >
          <input
            type="text"
            className="focus:outline-none "
            placeholder="search for items.."
          />
          <button>
            <FiSearch className="text-3xl text-gray-500" />
          </button>
        </div>

        <div className="responsive-icon md:hidden block ">
          <button onClick={handleShow}>
            <FcMenu className="text-4xl" />
          </button>
        </div>

        {/* responsive mobile menu starts */}

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton className="border-bottom">
            <Offcanvas.Title>
              <Link to="/" className="logo mt-3">
                <img
                  src="https://i.ibb.co/Wf02m74/99f38e70989637-5bb5d1bdf021c.jpg"
                  alt="super market logo"
                  style={{ height: "60px" }}
                />
              </Link>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="px-4">
            <div className="search border border-green-200  items-center rounded justify-between px-3 py-2 my-3 flex ">
              <input
                type="text"
                className="focus:outline-none "
                placeholder="search for items.."
              />
              <button>
                <FiSearch className="text-xl text-gray-500" />
              </button>
            </div>
            <OffCanvasMenu />
          </Offcanvas.Body>
        </Offcanvas>

        {/* off canvas // responsive mobile menu ends */}

        <div className="nav-items space-x-5 flex ">
          <NavLink
            activeStyle={activeStyle}
            to="/cart"
            className="flex text-gray-500 space-x-1 items-center"
          >
            <BsCart2 className="text-2xl font-bold" />{" "}
            <span className="xl:block hidden relative">Cart</span>
          </NavLink>
          <NavLink
            activeStyle={activeStyle}
            to="/withlist"
            className="flex text-gray-500 space-x-1 items-center"
          >
            <MdFavoriteBorder className="text-2xl font-bold" />
            <span className="xl:block hidden">Wishlist</span>
          </NavLink>
          {currentUser ? (
            <NavLink
              activeStyle={activeStyle}
              to="/profile"
              className="flex text-gray-500 space-x-1 items-center"
            >
              <AiOutlineUser className="text-2xl font-bold" />
              <span className="xl:block hidden">My Profile</span>
            </NavLink>
          ) : (
            <NavLink
              activeStyle={activeStyle}
              to="/signup"
              className="flex text-gray-500 space-x-1 items-center"
            >
              <AiOutlineUser className="text-2xl font-bold" />
              <span className="xl:block hidden">Account</span>
            </NavLink>
          )}
        </div>
      </div>
      <div className="w-9/12 mx-auto">
        {/* navigation menu */}
        <NavMenu />
      </div>
    </div>
  );
};

export default Navigation;
