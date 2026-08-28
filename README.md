# Open Call

Course website for **Open Call**, taught by Shuang Cai in NYU Tisch School of the Arts’ Interactive Media Arts program.

**Live site:** [owochel.github.io/opencall](https://owochel.github.io/opencall/)

## Fall 2026

The Fall 2026 site contains:

- the weekly course schedule;
- assigned readings and videos;
- reading and media object presentation guidelines;
- the course syllabus.

[View Fall 2026](https://owochel.github.io/opencall/fall-2026/)

## Update the schedule

All weekly information is kept in one file:

[`app/fall-2026/schedule-data.ts`](app/fall-2026/schedule-data.ts)

Each entry is one week. Edit its date, theme, question, in-class activity, due work, or readings, then commit and push the change to `main`. GitHub Pages will update automatically.

```ts
{
  week: "1",
  date: "9/14",
  theme: "What is Curating?",
  question: "...",
  activity: "...",
  due: "...",
  readings: [
    { title: "Reading title", href: "/readings/file.pdf", type: "PDF" },
  ],
}
```

## Add or replace a reading

1. Put the PDF in [`public/readings`](public/readings).
2. Open [`app/fall-2026/schedule-data.ts`](app/fall-2026/schedule-data.ts).
3. Add the reading to the appropriate week using its title—not its filename—as the visible `title`.
4. Commit and push to `main`.

Videos and articles can use a complete web address and the type `VIDEO` or `LINK`.

## Other course content

- Semester page and presentation guidelines: [`app/fall-2026/page.tsx`](app/fall-2026/page.tsx)
- Readings page: [`app/fall-2026/readings/page.tsx`](app/fall-2026/readings/page.tsx)
- Site styles: [`app/globals.css`](app/globals.css)
- Course syllabus: [`public/Open-Call-Syllabus-Fall-2026.pdf`](public/Open-Call-Syllabus-Fall-2026.pdf)

## Publishing

Every push to `main` runs the GitHub Pages workflow in [`.github/workflows/pages.yml`](.github/workflows/pages.yml). The generated `docs` folder is local output and should not be edited or committed.
