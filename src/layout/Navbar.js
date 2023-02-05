
import { Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from "react";
import cx from "classnames";
import { Link } from "react-scroll";


/* import LogoIcon from "./icons/logo.svg";
import LogoDarkIcon from "./icons/logoDark.svg";
import MenuIcon from "./icons/menu.svg";
import MenuDIcon from "./icons/menuD.svg"; */
import ContainerUI from "../components/ContainerUI";
import "./style.scss";
import { links } from "./entries";


const NavbarUI = ({ ...props }) => {
  /* const router = useRouter();
  const pathname = router.pathname; */
  const isMobile = useMediaQuery("(max-width:980px)");
  const [openMobile, setOpenMobile] = useState(false);

  let isWhite = false;
  let withFakeHeader = false;


  useEffect(() => {
    if (isMobile || !openMobile) return;
    setOpenMobile(false);
  }, [isMobile]);


  return (
    <div
      className={cx("NavbarUI", {
        __white: isWhite,
        __fake: withFakeHeader,
        __mobile: isMobile,
      })}
    >
      <ContainerUI>
        <div className="NavbarUI__inner">
          <div className="NavbarUI__logo">
            <Link href="/">
              <a>
                {isWhite &&  <img src="/assets/logoDark.svg" alt="LogoDarkIcon"/>}
                {!isWhite &&  <img src="/assets/logo.svg" alt="LogoIcon "/>}
              </a>
            </Link>
          </div>

          <div className={cx("NavbarUI__links", { __open: openMobile })}>
            <div className="NavbarUI__links__logo">
              <Link href="/">
                <a>
                  <img src="/assets/logoDark.svg" alt="LogoDarkIcon"/>
                </a>
              </Link>
            </div>
            <nav className="NavbarUI__nav">
              {links
                .filter((link) => !!link.isMain)
                .map((link, idx) => (
                  <Link key={idx} className="__link" activeClass="active" smooth spy to={link.id}>
                    <a className={cx("__link", { __active: link.isActive })} onClick={() => setOpenMobile(false)}>
                      {link.label}
                    </a>
                  </Link>
                ))}
            </nav>
            <div
              className="NavbarUI__closeMobile"
              onClick={() => setOpenMobile(false)}
            >
              Close
            </div>
          </div>

          <div
            className="NavbarUI__openMobile"
            onClick={() => setOpenMobile(true)}
          >
            {isWhite && <img src="/assets/menu.svg" alt="MenuIcon"/>}
            {!isWhite && <img src="/assets/menuD.svg" alt="MenuDIcon"/> }
          </div>
        </div>
      </ContainerUI>
    </div>
  );
};

export default NavbarUI;
