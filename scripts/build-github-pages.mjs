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

const activityList = (activity = []) => `<ul class="activity-list">${activity.map(step => `<li>${step}</li>`).join("")}</ul>`;

const home = layout("Open Call — NYU IMA, Fall 2026", `<main class="site-shell">${header("Interactive Media Arts")}<section class="home-grid"><div><h1>Open Call</h1><p>New York University<br>Tisch School of the Arts<br>Interactive Media Arts</p></div><nav class="term-list"><a href="${base}/fall-2026/">Fall 2026 <span>→</span></a></nav></section></main>`);

const rows = schedule.map(item => `<article class="schedule-row"><div class="week-label"><strong>Week ${item.week}</strong><span>${item.date}</span></div><div><h3>${item.theme}</h3>${item.question ? `<p>${item.question}</p>` : ""}</div><div><h4>In-class activity</h4>${activityList(item.activity)}</div><div><h4>Due on this day</h4><p>${item.due}</p>${readingLinks(item.readings)}</div></article>`).join("");

const presentations = `<section id="presentations"><h2>Presentations</h2><div class="presentation-grid"><article><h3>Reading Presentation / Discussion Leader</h3><p>For five weeks of the semester, three students will be responsible for leading the class’s engagement with the assigned readings. Each student will sign up for one reading week.</p><p>The purpose of the presentation is not to summarize the readings for classmates. Everyone is expected to have completed the readings before class. Instead, presenters should help the class identify what is worth paying attention to: key arguments, tensions between readings, difficult or provocative ideas, and connections to exhibition-making and the theme of the week.</p><p>The three presenters may decide how they want to organize the presentation portion. You may work together on one integrated presentation, or divide the readings, concepts, or perspectives among yourselves and present separately. There is no required format as long as the presentation collectively gives the class useful ways into the week’s material.</p><p>However, the three presenters must work together to plan and lead the discussion portion. Before class, meet as a group to decide what you want the class to discuss and how you will facilitate that conversation. Your discussion should build from the readings but does not need to remain confined to them. You may bring in exhibitions, artworks, personal experiences, disagreements, images, examples, short activities, or questions that help the class test the readings’ ideas.</p><p>Each group should prepare:</p><ul><li><strong>Key ideas:</strong> Identify the arguments or concepts from the readings that you think are most useful for the class to understand or debate.</li><li><strong>Your response:</strong> Take a position. What do you agree with, question, find useful, or find inadequate? Avoid simply reproducing the author’s argument.</li><li><strong>Connections:</strong> Relate the readings to concrete examples of curating, exhibition-making, art, design, technology, or other relevant practices.</li><li><strong>Discussion facilitation:</strong> As a group, develop a small set of strong questions, provocations, or activities that can sustain a class conversation. All three presenters should participate in facilitating this portion.</li></ul><p>A successful reading presentation should leave the class with something to think with, rather than a comprehensive account of everything contained in the readings. You do not need to agree with your co-presenters—or with the authors. Differences in interpretation are welcome and can become productive starting points for discussion.</p></article><article><h3>Media Object Presentation / Discussion Leader</h3><p><strong>20 mins</strong></p><p>All students will sign up to present on a media object, reading, event, or phenomenon related to the concepts we are exploring—either something referenced (but not developed) that speaks to its themes.</p><ul><li>Summarize</li><li>Perhaps an intriguing intro / a hook (optional)</li><li>Who wrote it/made it and when (include the historical context)</li><li>List questions you have (and maybe your speculative answers)</li><li>What resonated? What did you take issue with/disagree with?</li><li>Terms that need to be defined</li><li>Images with citation (if relevant)</li><li>Relevant methodologies or processes (if relevant)</li><li>Consider leading a short group activity (optional but encouraged)</li><li>Fun theme and transitional animations (optional)</li></ul></article></div></section>`;

const fall = layout("Fall 2026 — Open Call", `<main class="site-shell">${header("Fall 2026")}<div class="course-layout"><aside class="course-nav"><h1>Fall 2026</h1><p>Mon 9–12<br>4 Credits<br>Instructor: shuang cai<br>GA: Jisoo Kim</p><nav><a href="#course-description">Course Description</a><a href="#presentations">Presentations</a><a href="#course-schedule">Course Schedule</a><a href="${base}/fall-2026/readings/">Readings</a><a href="https://docs.google.com/document/d/1hI8jLldc1hYKk_lHXp42A9DLrX_FZLUBdjsx1WyKek0/edit?usp=sharing">Course Syllabus</a></nav></aside><div class="course-content"><section id="course-description"><h2>Course Description</h2><p>This class is for students interested in making, displaying, and installing art for interactive media art exhibitions. This class will prepare you to apply for and develop work for open calls and everything else that happens after you are selected. The class will have an opportunity to exhibit a group show in a real NYC gallery towards the end of the semester. The students will collaborate to title, describe, and document the works in the show. They will also have an opportunity to do a public talk back about their work, organize a reception, and add a piece to their portfolio.</p></section>${presentations}<section id="course-schedule"><h2>Course Schedule</h2><p>The course will be 1 time per week for 3 hours for a total of 14 weeks.</p><div class="schedule-table">${rows}</div></section></div></div></main>`);

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
