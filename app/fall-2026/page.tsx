import { schedule } from "./schedule-data";

export default function Fall2026() {
  return <main className="site-shell">
    <header className="site-header"><a href="/">Open Call</a><span>Fall 2026</span></header>
    <div className="course-layout">
      <aside className="course-nav">
        <h1>Fall 2026</h1>
        <p>Mon 9–12<br />4 Credits<br />Instructor: <a href="https://shuangcai.cargo.site/">shuang cai</a><br />GA: Jisoo Kim</p>
        <nav aria-label="Fall 2026"><a href="#course-description">Course Description</a><a href="#presentations">Presentations</a><a href="#course-schedule">Course Schedule</a><a href="/fall-2026/readings">Readings</a><a href="https://docs.google.com/document/d/1hI8jLldc1hYKk_lHXp42A9DLrX_FZLUBdjsx1WyKek0/edit?usp=sharing">Course Syllabus</a></nav>
      </aside>
      <div className="course-content">
        <section id="course-description"><h2>Course Description</h2>
        <p>This class is for students interested in making, displaying, and installing art for interactive media art exhibitions. This class will prepare you to apply for and develop work for open calls and everything else that happens after you are selected. The class will have an opportunity to exhibit a group show in a real NYC gallery towards the end of the semester. The students will collaborate to title, describe, and document the works in the show. They will also have an opportunity to do a public talk back about their work, organize a reception, and add a piece to their portfolio.</p>
         <p>Original Course Development by <a href="https://blairsimmons.com/">Blair Simmons</a> - NYU Tisch School of the Arts</p></section>
        <section id="presentations"><h2>Presentations</h2><div className="presentation-grid">
          <article>
            <h3>Reading Presentation / Discussion Leader</h3>
            <p><strong>20 mins presentation, 20 mins discussion</strong></p>
            <p>For five weeks of the semester, three students will be responsible for leading the class’s engagement with the assigned readings. Each student will sign up for one reading week.</p>
            <p>The team may decide how to organize the presentation portion. You may work together on one integrated presentation, or divide the readings, concepts, or perspectives among yourselves and present separately. There is no required format as long as the presentation collectively gives the class useful ways into the week’s material.</p>
            <p>A successful reading presentation should leave the class with something to think with (~25mins). </p>
            <p>After presenting, you (and your co-presenters) will collaborate to lead the class on a discussion of the reading (~25 mins). Your discussion should build from the readings but does not need to remain confined to them. </p>
            
          </article>
          <article><h3>Media Object Presentation / Discussion Leader</h3><p><strong>20 mins</strong></p><p>All students will sign up to present on a media object, reading, event, or phenomenon related to the concepts we are exploring—either something referenced (but not developed) that speaks to its themes.</p><ul><li>Summarize</li><li>Perhaps an intriguing intro / a hook (optional)</li><li>Who wrote it/made it and when (include the historical context)</li><li>List questions you have (and maybe your speculative answers)</li><li>What resonated? What did you take issue with/disagree with?</li><li>Terms that need to be defined</li><li>Images with citation (if relevant)</li><li>Relevant methodologies or processes (if relevant)</li><li>Consider leading a short group activity (optional but encouraged)</li><li>Fun theme and transitional animations (optional)</li></ul></article>
        </div></section>
        <section id="course-schedule"><h2>Course Schedule</h2><p>The course will be 1 time per week for 3 hours for a total of 14 weeks.</p>
          <div className="schedule-table">{schedule.map(item=><article className="schedule-row" key={item.week}><div className="week-label"><strong>Week {item.week}</strong><span>{item.date}</span></div><div><h3>{item.theme}</h3>{item.question && <p>{item.question}</p>}</div><div><h4>In-class activity</h4><ul className="activity-list">{item.activity.map(step => <li key={step}>{step}</li>)}</ul></div><div><h4>Due on this day</h4><p>{item.due}</p>{item.readings && <div className="week-readings"><h4>Readings</h4>{item.readings.map(reading=><a key={reading.title} href={reading.href}>{reading.title}</a>)}</div>}</div></article>)}</div>
        </section>
      </div>
    </div>
  </main>;
}
