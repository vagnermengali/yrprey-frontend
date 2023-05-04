import { motion } from "framer-motion";
import { StyledAboutSection } from "./style";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomeButton from "@/components/HomeButton";

const About = () => {

  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <StyledAboutSection>
        <div className="container">
          <div className="content">
            <h1>Page under development...</h1>
          </div>
        </div>
      </StyledAboutSection>
      <Footer />
      <HomeButton />
    </motion.div>
  );
}

export default About;