import { schedule } from "./schedule-data";

export default function Fall2026() {
  return <main className="site-shell">
    <header className="site-header"><a href="/">Open Call</a><span>Fall 2026</span></header>
    <div className="course-layout">
      <aside className="course-nav">
        <h1>Fall 2026</h1>
        <p>Mon 9–12<br />4 Credits<br />Instructor: shuang cai<br />GA: Jisoo Kim</p>
        <nav aria-label="Fall 2026"><a href="#course-description">Course Description</a><a href="#course-schedule">Course Schedule</a><a href="/fall-2026/readings">Readings</a><a href="/Open-Call-Syllabus-Fall-2026.pdf">Course Syllabus</a></nav>
      </aside>
      <div className="course-content">
        <section id="course-description"><h2>Course Description</h2><p>This class is for students interested in making, displaying, and installing art for interactive media art exhibitions. This class will prepare you to apply for and develop work for open calls and everything else that happens after you are selected. The class will have an opportunity to exhibit a group show in a real NYC gallery towards the end of the semester. The students will collaborate to title, describe, and document the works in the show. They will also have an opportunity to do a public talk back about their work, organize a reception, and add a piece to their portfolio.</p></section>
        <section id="course-schedule"><h2>Course Schedule</h2><p>The course will be 1 time per week for 3 hours for a total of 14 weeks.</p>
          <div className="schedule-table">{schedule.map(item=><article className="schedule-row" key={item.week}><div className="week-label"><strong>Week {item.week}</strong><span>{item.date}</span></div><div><h3>{item.theme}</h3>{item.question && <p>{item.question}</p>}</div><div><h4>In-class activity</h4><p>{item.activity}</p></div><div><h4>Due on this day</h4><p>{item.due}</p>{item.readings && <div className="week-readings"><h4>Readings</h4>{item.readings.map(reading=><a key={reading.title} href={reading.href}>{reading.title}</a>)}</div>}</div></article>)}</div>
        </section>
      </div>
    </div>
  </main>;
}
