import { contactHref, siteContent as c } from '../data/siteContent';
export function Footer() {
  return <footer className="footer dark"><div className="container"><div className="footer-top"><div><a className="wordmark" href="#inicio">{c.name}</a><p>{c.title}</p></div><nav aria-label={c.footer.navigationLabel}>{c.navigation.map(link => <a href={link.href} key={link.href}>{link.label}</a>)}<a href={contactHref('linkedin') ?? '#contato'}>{c.ui.linkedin}</a></nav></div><div className="footer-bottom"><span>{c.footer.copyright}</span><span>{c.footer.credit}</span></div></div></footer>;
}
