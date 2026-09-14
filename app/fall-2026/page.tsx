import { schedule } from "./schedule-data";
import { course, courseDescription, originalCourseDeveloper, presentations } from "./course-content";

export default function Fall2026() {
  return <main className="site-shell">
    <header className="site-header"><a href="/">Open Call</a><span>{course.term}</span></header>
    <div className="course-layout">
      <aside className="course-nav">
        <h1>{course.term}</h1>
        <p>{course.time}<br />{course.credits}<br />Instructor: <a href={course.instructor.href}>{course.instructor.name}</a><br />GA: {course.ga}</p>
        <nav aria-label={course.term}><a href="#course-description">Course Description</a><a href="#presentations">Presentations</a><a href="#course-schedule">Course Schedule</a><a href="/fall-2026/readings">Readings</a><a href={course.syllabusHref}>Course Syllabus</a></nav>
      </aside>
      <div className="course-content">
        <section id="course-description"><h2>Course Description</h2>{courseDescription.map(paragraph => <p key={paragraph}>{paragraph}</p>)}<p>{originalCourseDeveloper.text} <a href={originalCourseDeveloper.href}>{originalCourseDeveloper.name}</a> - {originalCourseDeveloper.affiliation}</p></section>
        <section id="presentations"><h2>Presentations</h2><div className="presentation-grid">{presentations.map(presentation => <article key={presentation.title}><h3>{presentation.title}</h3><p><strong>{presentation.timing}</strong></p>{presentation.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{presentation.bullets.length > 0 && <ul>{presentation.bullets.map(item => <li key={item}>{item}</li>)}</ul>}</article>)}</div></section>
        <section id="course-schedule"><h2>Course Schedule</h2><p>{course.scheduleSummary}</p>
          <div className="schedule-table">{schedule.map(item=><article className="schedule-row" key={item.week}><div className="week-label"><strong>Week {item.week}</strong><span>{item.date}</span></div><div><h3>{item.theme}</h3>{item.question && <p>{item.question}</p>}</div><div><h4>In-class activity</h4><ul className="activity-list">{item.activity.map(step => <li key={step}>{step}</li>)}</ul></div><div><h4>Due on this day</h4><p>{item.due}</p>{item.readings && <div className="week-readings"><h4>Readings</h4>{item.readings.map(reading=><a key={reading.title} href={reading.href}>{reading.title}{reading.optional ? " (Optional)" : ""}</a>)}</div>}</div></article>)}</div>
        </section>
      </div>
    </div>
  </main>;
}
