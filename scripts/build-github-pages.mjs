import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { schedule } from "../app/fall-2026/schedule-data.ts";
import { course, courseDescription, originalCourseDeveloper, presentations } from "../app/fall-2026/course-content.ts";

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

const readingLinks = (readings = []) => readings.length ? `<div class="week-readings"><h4>Readings</h4>${readings.map(r => `<a href="${pathFor(r.href)}">${r.title}${r.optional ? " (Optional)" : ""}</a>`).join("")}</div>` : "";

const activityList = (activity = []) => `<ul class="activity-list">${activity.map(step => `<li>${step}</li>`).join("")}</ul>`;

const home = layout("Open Call — NYU IMA, Fall 2026", `<main class="site-shell">${header("Interactive Media Arts")}<section class="home-grid"><div><h1>Open Call</h1><p>New York University<br>Tisch School of the Arts<br>Interactive Media Arts</p></div><nav class="term-list"><a href="${base}/fall-2026/">Fall 2026 <span>→</span></a></nav></section></main>`);

const rows = schedule.map(item => `<article class="schedule-row"><div class="week-label"><strong>Week ${item.week}</strong><span>${item.date}</span></div><div><h3>${item.theme}</h3>${item.question ? `<p>${item.question}</p>` : ""}</div><div><h4>In-class activity</h4>${activityList(item.activity)}</div><div><h4>Due on this day</h4><p>${item.due}</p>${readingLinks(item.readings)}</div></article>`).join("");

const presentationHtml = `<section id="presentations"><h2>Presentations</h2><div class="presentation-grid">${presentations.map(presentation => `<article><h3>${presentation.title}</h3><p><strong>${presentation.timing}</strong></p>${presentation.paragraphs.map(paragraph => `<p>${paragraph}</p>`).join("")}${presentation.bullets.length ? `<ul>${presentation.bullets.map(item => `<li>${item}</li>`).join("")}</ul>` : ""}</article>`).join("")}</div></section>`;

const descriptionHtml = `<section id="course-description"><h2>Course Description</h2>${courseDescription.map(paragraph => `<p>${paragraph}</p>`).join("")}<p>${originalCourseDeveloper.text} <a href="${originalCourseDeveloper.href}">${originalCourseDeveloper.name}</a> - ${originalCourseDeveloper.affiliation}</p></section>`;
const fall = layout(`${course.term} — Open Call`, `<main class="site-shell">${header(course.term)}<div class="course-layout"><aside class="course-nav"><h1>${course.term}</h1><p>${course.time}<br>${course.credits}<br>Instructor: <a href="${course.instructor.href}">${course.instructor.name}</a><br>GA: ${course.ga}</p><nav><a href="#course-description">Course Description</a><a href="#presentations">Presentations</a><a href="#course-schedule">Course Schedule</a><a href="${base}/fall-2026/readings/">Readings</a><a href="${course.syllabusHref}">Course Syllabus</a></nav></aside><div class="course-content">${descriptionHtml}${presentationHtml}<section id="course-schedule"><h2>Course Schedule</h2><p>${course.scheduleSummary}</p><div class="schedule-table">${rows}</div></section></div></div></main>`);

const readingGroups = schedule.filter(item => item.readings?.length).map(item => `<section class="reading-group"><h2>Week ${item.week}</h2><ol class="reading-list">${item.readings.map(r => `<li><a href="${pathFor(r.href)}">${r.title}${r.optional ? " (Optional)" : ""}</a><span>${r.type}${r.optional ? " · OPTIONAL" : ""}</span></li>`).join("")}</ol></section>`).join("");
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
