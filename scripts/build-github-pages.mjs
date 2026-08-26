import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { schedule } from "../app/fall-2026/schedule-data.ts";

const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] || "";
const base = repo ? `/${repo}` : "";
const out = new URL("../docs/", import.meta.url);

const pathFor = (href) => {
  if (/^https?:/.test(href)) return href;
  return `${base}${href}`;
};

const layout = (title, body) => `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><link rel="stylesheet" href="${base}/styles.css"></head><body>${body}</body></html>`;

const header = (right, rightHref = "") => `<header class="site-header"><a href="${base}/">Open Call</a>${rightHref ? `<a href="${base}${rightHref}">${right}</a>` : `<span>${right}</span>`}</header>`;

const readingLinks = (readings = []) => readings.length ? `<div class="week-readings"><h4>Readings</h4>${readings.map(r => `<a href="${pathFor(r.href)}">${r.title}</a>`).join("")}</div>` : "";

const home = layout("Open Call — NYU IMA, Fall 2026", `<main class="site-shell">${header("Interactive Media Arts")}<section class="home-grid"><div><h1>Open Call</h1><p>New York University<br>Tisch School of the Arts<br>Interactive Media Arts</p></div><nav class="term-list"><a href="${base}/fall-2026/">Fall 2026 <span>→</span></a></nav></section></main>`);

const rows = schedule.map(item => `<article class="schedule-row"><div class="week-label"><strong>Week ${item.week}</strong><span>${item.date}</span></div><div><h3>${item.theme}</h3>${item.question ? `<p>${item.question}</p>` : ""}</div><div><h4>In-class activity</h4><p>${item.activity}</p></div><div><h4>Due on this day</h4><p>${item.due}</p>${readingLinks(item.readings)}</div></article>`).join("");

const presentations = `<section id="presentations"><h2>Presentations</h2><div class="presentation-grid"><article><h3>Reading Presentation / Discussion Leader</h3><p><strong>20 mins</strong></p><p>All students will sign up to present one reading over the semester that fits the theme of that day (~10 mins). After presenting, you will lead the class in a discussion of the reading (~10 mins). One to two students will be assigned for each class this semester, so you may want to coordinate your presentations and discussion questions with each other (or not). The topics and dates can be found in the syllabus.</p></article><article><h3>Media Object Presentation / Discussion Leader</h3><p><strong>5–15 mins</strong></p><p>All students will sign up to present on a media object, reading, event, or phenomenon related to the concepts we are exploring—either something referenced (but not developed) that speaks to its themes.</p><ul><li>Summarize</li><li>Perhaps an intriguing intro / a hook (optional)</li><li>Who wrote it/made it and when (include the historical context)</li><li>List questions you have (and maybe your speculative answers)</li><li>What resonated? What did you take issue with/disagree with?</li><li>Terms that need to be defined</li><li>Images with citation (if relevant)</li><li>Relevant methodologies or processes (if relevant)</li><li>Consider leading a short group activity (optional but encouraged)</li><li>Fun theme and transitional animations (optional)</li></ul></article></div></section>`;

const fall = layout("Fall 2026 — Open Call", `<main class="site-shell">${header("Fall 2026")}<div class="course-layout"><aside class="course-nav"><h1>Fall 2026</h1><p>Mon 9–12<br>4 Credits<br>Instructor: shuang cai<br>GA: Jisoo Kim</p><nav><a href="#course-description">Course Description</a><a href="#presentations">Presentations</a><a href="#course-schedule">Course Schedule</a><a href="${base}/fall-2026/readings/">Readings</a><a href="${base}/Open-Call-Syllabus-Fall-2026.pdf">Course Syllabus</a></nav></aside><div class="course-content"><section id="course-description"><h2>Course Description</h2><p>This class is for students interested in making, displaying, and installing art for interactive media art exhibitions. This class will prepare you to apply for and develop work for open calls and everything else that happens after you are selected. The class will have an opportunity to exhibit a group show in a real NYC gallery towards the end of the semester. The students will collaborate to title, describe, and document the works in the show. They will also have an opportunity to do a public talk back about their work, organize a reception, and add a piece to their portfolio.</p></section>${presentations}<section id="course-schedule"><h2>Course Schedule</h2><p>The course will be 1 time per week for 3 hours for a total of 14 weeks.</p><div class="schedule-table">${rows}</div></section></div></div></main>`);

const readingGroups = schedule.filter(item => item.readings?.length).map(item => `<section class="reading-group"><h2>Week ${item.week}</h2><ol class="reading-list">${item.readings.map(r => `<li><a href="${pathFor(r.href)}">${r.title}</a><span>${r.type}</span></li>`).join("")}</ol></section>`).join("");
const readings = layout("Readings — Open Call", `<main class="site-shell">${header("Fall 2026", "/fall-2026/")}<div class="reading-layout"><div><h1>Readings</h1><p>Course materials on BrightSpace consist of 5–30 pages of readings per week and are available via BrightSpace on Perusall.</p></div><div>${readingGroups}</div></div></main>`);

await rm(out, { recursive: true, force: true });
await mkdir(new URL("fall-2026/readings/", out), { recursive: true });
await cp(new URL("../public/", import.meta.url), out, { recursive: true });
const css = (await readFile(new URL("../app/globals.css", import.meta.url), "utf8")).replace('@import "tailwindcss";', "");
await Promise.all([
  writeFile(new URL("index.html", out), home),
  writeFile(new URL("fall-2026/index.html", out), fall),
  writeFile(new URL("fall-2026/readings/index.html", out), readings),
  writeFile(new URL("styles.css", out), css),
  writeFile(new URL(".nojekyll", out), ""),
]);
