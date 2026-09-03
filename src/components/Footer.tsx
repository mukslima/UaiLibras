import Link from "next/link";
import { footerCourses } from "@/data/site";
import packageJson from "../../package.json";

export function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h4>UaiLibras</h4>
          <p>Comunicar, Aprender & Incluir</p>
        </div>
        <div className="footer-column">
          <h4>Cursos</h4>
          <ul>
            {footerCourses.map((course) => (
              <li key={course}>
                <Link href="/cursos">{course}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-column">
          <h4>Links úteis</h4>
          <ul>
            <li>
              <Link href="/noticia">Notícias</Link>
            </li>
            <li>
              <Link href="/contato">Contato</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Redes Sociais</h4>
          <p className="footer-muted">Em breve.</p>
        </div>
      </div>
      <div className="footer-bottom">&copy; 2026 UaiLibras &middot; v{packageJson.version}</div>
    </footer>
  );
}
