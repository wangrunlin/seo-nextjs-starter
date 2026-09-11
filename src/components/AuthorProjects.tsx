import Image from "next/image";
import { ArrowUpRight, Clapperboard } from "lucide-react";
export default function AuthorProjects() {
  return (
    <section className="author-section shell">
      <div>
        <span className="eyebrow">FROM THE MAKER</span>
        <h2>Also building.</h2>
        <p>A few other tools and creative experiments by Leo Wang.</p>
      </div>
      <div className="author-grid">
        <a href="https://h3run.com" target="_blank" rel="noopener noreferrer">
          <span className="product-mark">
            <Image src="/brands/h3run.png" alt="" width={32} height={32} />
          </span>
          <span>
            <strong>H3Run</strong>
            <small>AI video creation</small>
          </span>
          <ArrowUpRight size={17} />
        </a>
        <a
          href="https://h3maxlive.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="product-mark amber">
            <Clapperboard size={25} />
          </span>
          <span>
            <strong>H3MaxLive</strong>
            <small>Interactive AI video</small>
          </span>
          <ArrowUpRight size={17} />
        </a>
        <a
          href="https://image-2-5.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="product-mark">
            <Image src="/brands/image25.svg" alt="" width={32} height={32} />
          </span>
          <span>
            <strong>Image 2.5</strong>
            <small>AI image creation & editing</small>
          </span>
          <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  );
}
