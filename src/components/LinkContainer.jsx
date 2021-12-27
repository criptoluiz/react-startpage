import "./LinkContainer.css";
import LinkCard from "./LinkCard";
// LINKS
const dev = [
  {
    nome: "Intranet",
    link: "https://novaintranet.senacrs.com.br/senac/",
    tag: "senac",
  },
  {
    nome: "Outlook",
    link: "https://outlook.office.com/mail/",
    tag: "senac",
  },
  {
    nome: "Bb Collab",
    link: "https://ca.bbcollab.com/collab/ui/session/guest/722a23069dcc4822be5229649d6b2dce",
    tag: "senac",
  },
  {
    nome: "udemy",
    link: "https://udemy.com/",
    tag: "estudos",
  },
  {
    nome: "linkedIn",
    link: "https://www.linkedin.com/feed/",
  },
  {
    nome: "github",
    link: "https://github.com/",
  },
  {
    nome: "dev.to",
    link: "https://dev.to/",
  },
];

const person = [
  {
    nome: "e-mail",
    link: "https://autistici.org",
  },
  {
    nome: "moodle",
    link: "https://moodle.ufrgs.br/login/login.php",
    tag: "estudos",
  },
];

const whatever = [
  {
    nome: "reddit",
    link: "https://reddit.com",
  },
  {
    nome: "YouTube",
    link: "https://www.youtube.com/",
  },
  {
    nome: "SoundCloud",
    link: "https://soundcloud.com",
  },
];

function LinkContainer() {
  return (
    <div className="link-container">
      <LinkCard titulo="dev" links={dev} />
      <LinkCard titulo="personal" links={person} />
      <LinkCard titulo="w/e" links={whatever} />
    </div>
  );
}

export default LinkContainer;
