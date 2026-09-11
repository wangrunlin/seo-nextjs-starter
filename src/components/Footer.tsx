import Link from "next/link";
import Brand from "./Brand";
import { repository, siteName } from "@/config";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-top">
        <div>
          <Brand />
          <p>Good foundations. Your next idea.</p>
        </div>
        <div className="footer-links">
          <Link href="/docs">Documentation</Link>
          <Link href="/examples">Examples</Link>
          <a href={repository}>Source code ↗</a>
          <a href={`${repository}/issues`}>Feedback ↗</a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>
          © {new Date().getFullYear()} {siteName}
        </span>
        <span>
          Open source ·{" "}
          <a href={`${repository}/blob/main/LICENSE`}>MIT License</a>
        </span>
        <a href="https://alin.run">Made by Leo Wang ↗</a>
      </div>
    </footer>
  );
}
