// Navbar.tsx
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
    name: "",
    role: "Consumer (Standard)",
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
