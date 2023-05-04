import React, { useContext } from "react";
import { HeaderContainer, DivHeader } from "./style";
import { Context } from "@/context/context";
import logo from "@/assets/image/logos/logo-letter.svg";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { router } = useContext(Context);

  return (
    <>
      <HeaderContainer>
        <DivHeader>
          <div className="content">
            <div>
              <Link href="/">
                <Image
                  src={logo}
                  width="100"
                  height="100"
                  alt="logo-letter"
                ></Image>
              </Link>
            </div>
            <nav>
              <Link href="/" className="link">
                Homepage
              </Link>
              <Link href="/about" className="link">
                About us
              </Link>
              <Link href="/shop" className="link">
                Shop
              </Link>
              <Link href="/blog" className="link">
                Blog
              </Link>
            </nav>
            <div className="login-register">
              <button className="login" onClick={() => router.push("/login")}>
                Login
              </button>
              <button className="btn" onClick={() => router.push("/register")}>
                Get started
              </button>
            </div>
          </div>
        </DivHeader>
      </HeaderContainer>
    </>
  );
}

export default Header;