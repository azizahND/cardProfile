import background from "../assets/background.jpg";
import sangkar from "../assets/sangkar.svg";
import Card from "../components/Card";
import poto from "../assets/poto.jpg"
import { Linkedin, Mail, Instagram } from "lucide-react";

function Profile() {
  return (
    <div
      className="w-full h-screen flex items-center justify-center text-blue-500"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative">
        <img src={sangkar} alt="sangkar" className="z-0" />

        <div className="absolute top-0 left-0 w-full mt-6 h-full flex items-center  justify-center z-10">
          <Card
            src = {poto}
            judul={
                <>
                  <span className="text-blue-900 bg-purple-300 pl-2 pr-2 font-extrabold shadow-md animate-bounce"> Azizah</span>Novi Delfianti
                </>
              }
            deskripsi="Mahasiswa Sistem Informasi yang memiliki minat besar di bidang front-end development, khususnya dalam membangun antarmuka web yang menarik dan responsif."
            label="Lihat Detail"
            buttons={[
                {  icon: Linkedin, href: "https://www.linkedin.com/in/azizah-novi-delfianti-232369293/" },
                {  icon: Mail, href: "mailto:azizahnovidelfianti@gmail.com" },
                {  icon: Instagram, href: "https://www.instagram.com/zizahsdoc/" },
              ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
