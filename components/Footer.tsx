const socialLinks = [
  { label: "[instagram]", href: "https://www.instagram.com/saraknggg", primary: true },
  { label: "[x]", href: "https://x.com/saraknggg", primary: false },
  { label: "[linkedin]", href: "https://www.linkedin.com/in/sara-kong0/", primary: false },
  { label: "[youtube]", href: "https://www.youtube.com/@saraknggg", primary: false },
];

const infoLines = [
  { text: "made in: new york city", primary: true },
  { text: "currently in: san francisco", primary: false },
  { text: "contact me: sk11347@nyu.edu", primary: false },
  { text: "built by sara kong, 2026.", primary: false },
];

export default function Footer() {
  return (
    <footer className="border-t border-black px-20 py-12">
      <div className="flex justify-between items-start">
        {/* Left column */}
        <div>
          <p className="text-base font-medium text-black mb-10">sara kong</p>
          <div className="flex flex-col gap-5">
            {socialLinks.map(({ label, href, primary }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-base font-medium hover:opacity-60 transition-opacity ${
                  primary ? "text-black" : "text-[#444]"
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-5 text-right">
          {infoLines.map(({ text, primary }) => (
            <p
              key={text}
              className={`text-base font-medium ${
                primary ? "text-black" : "text-[#444]"
              }`}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </footer>
  );
}
