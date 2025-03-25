// Navbar.tsx (Main Navbar)
import { useState } from "react";
import NavbarAdmin from "./NavbarAdmin";
import NavbarStandard from "./NavbarStandard";

export interface User {
  name: string;
  role: string;
  profileImg: string;
}

const Navbar = () => {
  const [user] = useState<User>({
    name: "Rahman Abdul Quadir",
    role: "Consumer (Standard)", // Change to "Admin" for Admin view
    profileImg: "/user.png",
  });

  return (
    <>
      {user.role === "Admin" ? (
        <NavbarAdmin user={user} />
      ) : (
        <NavbarStandard user={user} />
      )}
    </>
  );
};

export default Navbar;
