"use client";
import { useState } from "react";
const items = [
  "Set the production website URL",
  "Give each page a title and canonical",
  "Open the sitemap and robots.txt",
  "Inspect a social image",
  "Test a missing page returns 404",
  "Check the page on a small screen",
];
export default function LaunchChecklist() {
  const [done, setDone] = useState<string[]>([]);
  return (
    <div>
      <p>
        {done.length} of {items.length} checks completed
      </p>
      <div className="checklist">
        {items.map((item) => (
          <label key={item}>
            <input
              type="checkbox"
              checked={done.includes(item)}
              onChange={(e) =>
                setDone(
                  e.target.checked
                    ? [...done, item]
                    : done.filter((x) => x !== item),
                )
              }
            />
            <span>{item}</span>
          </label>
        ))}
      </div>
      <p className="article-meta">
        Interactive example. Checks reset when you leave or reload this page.
      </p>
    </div>
  );
}
