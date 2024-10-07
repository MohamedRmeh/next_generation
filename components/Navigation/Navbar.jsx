import { SiGithub, SiWhatsapp, SiGmail } from "react-icons/si";
import Link from "next/link";

export default function Navbar() {
  const social = [
    {
      link: "https://github.com/MohamedRmeh",
      label: "github",
      Icon: SiGithub,
    },
    {
      link: "mailto:mrme02891@gmail.com",
      label: "gmail",
      Icon: SiGmail,
    },
    {
      link: "https://wa.me/+963995871868",
      label: "whatsapp",
      Icon: SiWhatsapp,
    },
  ];
  return (
    <nav className="py-12 lg:px-44 md:px-28 px-4 common-background border-b">
      <div className="flex justify-between items-center">
        <Link href="/">
          <h1 className="gradient-text sm:text-2xl text-lg Italicized-word">
            NexGen
          </h1>
        </Link>
        <div className="flex gap-5">
          {social.map((social, index) => {
            const Icon = social.Icon;
            return (
              <Link href={social.link} key={index} aria-label={social.label}>
                <Icon className="sm:w-6 sm:h-6 w-5 h-5 hover:scale-125 transition-all" />
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
