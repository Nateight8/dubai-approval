import React from "react";
import { MenuItem, Link } from "@mui/material";

type Props = { link: string; linkText: string };

const NavLink = ({ link, linkText }: Props) => {
  return (
    <MenuItem>
      <Link href={link} underline="none" sx={{ textTransform: "uppercase" }}>
        {linkText}
      </Link>
    </MenuItem>
  );
};

export default NavLink;
