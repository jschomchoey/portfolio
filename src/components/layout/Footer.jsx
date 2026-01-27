import Image from "next/image";

const socialMedia = [
  // {
  //   name: "Facebook",
  //   url: " https://www.facebook.com/tpcc.general",
  //   icon: "/images/social/facebook.svg",
  // },
  {
    name: "GitHub",
    url: " https://github.com/jschomchoey",
    icon: "/images/social/github.svg",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/teerapat-chomchoei-4b2363396",
    icon: "/images/social/linkedin.svg",
  },
];

const navItems = [
  ["/", "Home"],
  ["/projects", "Experience"],
  ["/about", "About"],
  ["/blog", "Blog"],
  ["/contact", "Contact"],
];

export default function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="flex justify-between gap-3">
          <div>
            <a href="/">
              <p className="logo-text mb-7">T1ramisu.dev</p>
            </a>
            <p className="max-w-[200px] sm:max-w-[400px] mb-7 text-gray">
              Bridging beautiful design and powerful performance to create
              websites that truly matter.
            </p>
            <div className="flex gap-4">
              {socialMedia.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={platform.icon}
                    alt={platform.name}
                    width={30}
                    height={30}
                    className={platform.name}
                  />
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="flex flex-col text-gray">
              {navItems.map(([path, label]) => (
                <a key={path} href={path} className="mb-2">
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <hr className="foot-hr my-10" />
        <div>
          <p className="text-gray">© 2026 T1ramisu.dev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
