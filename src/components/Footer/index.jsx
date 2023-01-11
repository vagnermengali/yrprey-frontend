import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import logo from "../../assets/image/logos/logo-letter.svg";
import { formSchema } from "../../validators/drop";
import { StyledFooter, DivOne, DivTwo, DivTree } from "./style";

import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Footer() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  return (
    <StyledFooter>
      <DivOne>
        <div className="container">
          <div className="content-left">
            <p className="title">Never miss a drop.</p>
            <p className="paragrafh">
              Sign up for the latest news, drops and collectibles.
            </p>
          </div>
          <form className="content-right" onSubmit={handleSubmit()}>
            <label className={errors.email ? "error" : "no-error"}>
              {errors.email?.message}
            </label>{" "}
            <div>
              {" "}
              <input
                type="text"
                placeholder="Email Address"
                {...register("email")}
              />{" "}
              <button type="submit">
                Subscribe Nowﾠ
                <FaExternalLinkAlt />
              </button>
            </div>
          </form>
        </div>
      </DivOne>
      <DivTwo>
        <div className="content-left">
          <img src={logo} alt="logo-prey" />
          <p>
            We provide the best vulnerability and security experiences on the
            market.
          </p>
          <ul>
            <button>
              <FaFacebookF />
            </button>
            <button>
              <FaTwitter />
            </button>
            <button>
              <FaInstagram />
            </button>
            <button>
              <FaLinkedinIn />
            </button>
          </ul>
        </div>
        <div className="content-right">
          <div>
            <p>Company</p>
            <Link to="" className="link">
              About Us
            </Link>
            <Link to="" className="link">
              Carrer
            </Link>
            <Link to="" className="link">
              Business Contacts
            </Link>
            <Link to="" className="link">
              Our Blog
            </Link>
            <Link to="" className="link">
              Terms & Conditions
            </Link>
          </div>
          <div>
            <p>Page Links</p>
            <Link to="" className="link">
              Home
            </Link>
            <Link to="" className="link">
              About Us
            </Link>
            <Link to="" className="link">
              Shop
            </Link>
            <Link to="" className="link">
              Blog
            </Link>
          </div>
          <div>
            <p>Solution</p>
            <Link to="" className="link">
              Application Security
            </Link>
            <Link to="" className="link">
              Could Security
            </Link>
            <Link to="" className="link">
              Infrastruture
            </Link>
            <Link to="" className="link">
              Threat Hunter
            </Link>
            <Link to="" className="link">
              Disaster Planning
            </Link>
            <Link to="" className="link">
              Cyber Security
            </Link>
          </div>
        </div>
      </DivTwo>
      <DivTree>
        <p>Copyright © 2022 YRPrey. All rights reserved.</p>
      </DivTree>
    </StyledFooter>
  );
}

export default Footer;
