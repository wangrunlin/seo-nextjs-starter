"use client";
import { useState } from "react";
import { Check, Code2, Globe2, ImageIcon, Search } from "lucide-react";
const sampleTitle = "Fieldnotes — a journal for curious minds";
export default function SeoStudio() {
  const [tab, setTab] = useState("search");
  const [title, setTitle] = useState(sampleTitle);
  const tabs = [
    { id: "search", label: "Search", icon: Search },
    { id: "social", label: "Social", icon: ImageIcon },
    { id: "code", label: "Metadata", icon: Code2 },
  ];
  return (
    <div className="studio">
      <div className="studio-bar">
        <div className="window-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <span>SEO PREVIEW</span>
        <span className="live-label">
          <i /> Interactive example
        </span>
      </div>
      <div className="studio-tabs" role="tablist" aria-label="Preview format">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            role="tab"
            id={`tab-${id}`}
            aria-selected={tab === id}
            aria-controls="preview-panel"
            tabIndex={tab === id ? 0 : -1}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
                const i = tabs.findIndex((t) => t.id === tab);
                const next =
                  tabs[(i + (e.key === "ArrowRight" ? 1 : 2)) % 3].id;
                setTab(next);
                document.getElementById(`tab-${next}`)?.focus();
              }
            }}
            onClick={() => setTab(id)}
          >
            <Icon size={15} />
            {label}
          </button>
        ))}
      </div>
      <div
        className="studio-content"
        id="preview-panel"
        role="tabpanel"
        aria-labelledby={`tab-${tab}`}
      >
        {tab === "search" && (
          <div className="search-preview">
            <div className="search-origin">
              <span className="search-icon">
                <Globe2 size={17} />
              </span>
              <div>
                <strong>Fieldnotes</strong>
                <span>https://example.com › journal</span>
              </div>
            </div>
            <div className="search-title">{title || sampleTitle}</div>
            <p>
              Stories, ideas, and things worth noticing. A little inspiration
              for your everyday adventures.
            </p>
            <div className="search-sitelinks">
              <span>Latest stories</span>
              <span>About the journal</span>
            </div>
          </div>
        )}
        {tab === "social" && (
          <div className="social-preview">
            <span>FIELDNOTES / JOURNAL</span>
            <strong>{title || sampleTitle}</strong>
            <div>
              Ideas worth sharing. <span>↗</span>
            </div>
          </div>
        )}
        {tab === "code" && (
          <pre className="studio-code">
            <code>{`export const metadata = {\n  title: ${JSON.stringify(title || sampleTitle)},\n  alternates: {\n    canonical: 'https://example.com/journal'\n  },\n  openGraph: {\n    images: ['/api/og?title=Fieldnotes']\n  }\n}`}</code>
          </pre>
        )}
      </div>
      <div className="studio-editor">
        <label htmlFor="preview-title">Try your page title</label>
        <input
          id="preview-title"
          value={title}
          maxLength={90}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="studio-status">
        <span>
          <Check size={13} /> Page metadata
        </span>
        <span>
          <Check size={13} /> Canonical URL
        </span>
        <span>
          <Check size={13} /> Social image
        </span>
      </div>
      <p className="preview-caption">
        Illustrative preview. Search engines may display a different title or
        snippet.
      </p>
    </div>
  );
}
