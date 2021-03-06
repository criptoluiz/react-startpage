import "./LinkContainer.css";
import LinkCard from "./LinkCard";
// LINKS
const dev = [
  {
    nome: "Outlook",
    link: "https://outlook.office.com/mail/",
    tag: "senac",
  },
  {
    nome: "Bb Collab",
    link: "https://ca.bbcollab.com/collab/ui/session/guest/6a0fe0668b4f4f4ba5925efba6f32347",
    tag: "senac",
  },
  {
    nome: "Sharepoint",
    link: "https://senacrs365.sharepoint.com/sites/FS-GETE-MATERIAIS/Documentos%20Compartilhados/Forms/AllItems.aspx",
    tag: "senac",
  },
  {
    nome: "Intranet",
    link: "https://novaintranet.senacrs.com.br/senac/",
    tag: "senac",
  },
  {
    nome: "upwork",
    link: "https://upwork.com/",
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
    nome: "tw0tter",
    link: "https://twitter.com",
  },
  {
    nome: "novadax",
    link: "https://novadax.com.br",
  },
  {
    nome: "moodle",
    link: "https://moodle.ufrgs.br/login/login.php",
    tag: "estudos",
  },
  {
    nome: "udemy",
    link: "https://udemy.com/",
    tag: "estudos",
  },
];

const whatever = [
  {
    nome: "reddit",
    link: "https://reddit.com",
  },
  {
    nome: "reddit: the_cyber",
    link: "https://old.reddit.com/user/basement_shaman/m/the_cyber/",
  },
  {
    nome: "buff forums",
    link: "https://www.dotabuff.com/forums/general",
  },
  {
    nome: "bugcrowd",
    link: "https://www.bugcrowd.com/",
  },
  {
    nome: "sinister.ly",
    link: "https://sinister.ly/",
  },
  {
    nome: "YouTube",
    link: "https://www.youtube.com/",
  },
  {
    nome: "Netflix",
    link: "https://netflix.com",
  },
];

function LinkContainer() {
  return (
    <div className="link-container">
      <LinkCard titulo="dev" links={dev} />
      <LinkCard titulo="the web" links={whatever} />
      <LinkCard titulo="personal, etc" links={person} />
    </div>
  );
}

export default LinkContainer;
