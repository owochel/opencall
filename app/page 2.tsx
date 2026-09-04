const weeks = [
  ["01", "Sep 14", "What is Curating?", "What does a curator do—and what traditions shape exhibition making?", "Journal entry"],
  ["02", "Sep 21", "Exhibition Concepts & Metaconcepts", "How do exhibitions produce meaning through relationships rather than topics?", "Reading notations · Start ideating"],
  ["03", "Sep 28", "Curating Collaborations", "How do people, disciplines, and institutions work together to realize exhibitions?", "Reading notations · Begin your piece"],
  ["04", "Oct 05", "Experience Building & Alternative Curating", "What happens when the exhibition becomes an experience rather than a container?", "Reading notations · Work on your piece"],
  ["05", "Oct 14", "Care & Maintenance", "What does it mean to care for a work over time?", "Reading notations · Work-in-progress"],
  ["06", "Oct 19", "Space, Sequence & Situation", "How do layout, lighting, graphics, and movement shape interpretation?", "Maintenance plan · Open call submission"],
  ["07", "Oct 26", "Interpretation & Mediation", "How do labels, guides, websites, and AI shape understanding?", "Installation plan"],
  ["08", "Nov 02", "Programming & Public Engagement", "How can events extend an exhibition through participation?", "Production sprint · Equipment list"],
  ["09", "Nov 09", "Planning", "Present the piece, test the premise, and sharpen the plan.", "12-minute piece presentation"],
  ["10", "Nov 16", "Install Day", "Meet at Clive Davis and turn plans into a public encounter.", "Install · Test · Adjust"],
  ["11", "Nov 23", "Documentation", "How can documentation carry an experience beyond the gallery?", "Post-install reflection"],
  ["12", "Nov 30", "The Politics of Curating", "Who gets shown, who is excluded, and how do exhibitions produce power?", "Reading notations"],
  ["13", "Dec 07", "Why Exhibit?", "What can public exhibition do that other media cannot?", "Reading notations"],
  ["14", "Dec 14", "Reflection & Career Development", "Translate the exhibition into a professional practice.", "Final presentation · Artist website · External open call"],
];

const outcomes = [
  "Develop an artwork from first concept to public exhibition.",
  "Make informed spatial, technical, interpretive, and experiential decisions.",
  "Build an installation plan and a practical maintenance document.",
  "Collaborate on the planning, production, care, and deinstallation of a group show.",
  "Document your project for a portfolio, artist bio, and external open-call submission.",
];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Open Call home">OPEN<br/>CALL</a>
      <nav aria-label="Primary navigation"><a href="#about">About</a><a href="#schedule">Schedule</a><a href="#assignments">Assignments</a><a href="#policies">Policies</a></nav>
      <a className="pill dark" href="mailto:sc8803@nyu.edu">Contact</a>
    </header>

    <section className="hero" id="top">
      <div className="hero-kicker">NYU Tisch · Interactive Media Arts · Fall 2026</div>
      <div className="hero-title-wrap"><h1><span>OPEN</span><span>CALL</span></h1><div className="orbit" aria-hidden="true"><span>14</span><small>WEEKS</small></div></div>
      <div className="hero-bottom">
        <p>From an unfinished idea<br/>to a real NYC gallery.</p>
        <div className="course-meta"><div><small>WHEN</small><strong>Mondays<br/>9 AM–12 PM</strong></div><div><small>INSTRUCTOR</small><strong>Shuang Cai<br/>Jisoo Kim, GA</strong></div><div><small>FORMAT</small><strong>4 credits<br/>Studio seminar</strong></div></div>
      </div>
      <a className="scroll-cue" href="#about">Explore the course <span>↓</span></a>
    </section>

    <section className="marquee" aria-label="Course themes"><div>MAKE <i>◆</i> EXHIBIT <i>◆</i> MAINTAIN <i>◆</i> DOCUMENT <i>◆</i> MAKE <i>◆</i> EXHIBIT</div></section>

    <section className="intro section" id="about">
      <div className="eyebrow">01 / The course</div>
      <div className="intro-grid"><h2>Art doesn’t end<br/>when it <em>works.</em></h2><div className="intro-copy"><p className="lead">This class is about everything that happens when a media artwork meets a public.</p><p>You’ll answer an open call, develop a work, install it in a real NYC gallery, keep it running, speak about it, document it, and translate the experience into professional materials.</p><p>We’ll learn through readings, critiques, field work, guest conversations, workshops, and the collective production of a group exhibition.</p></div></div>
      <div className="outcomes">{outcomes.map((outcome,index)=><article key={outcome}><span>0{index+1}</span><p>{outcome}</p></article>)}</div>
    </section>

    <section className="schedule section" id="schedule">
      <div className="section-heading"><div className="eyebrow">02 / The semester</div><h2>Fourteen weeks.<br/><em>One exhibition.</em></h2><p>The schedule is tentative and will evolve with the work.</p></div>
      <div className="week-list">{weeks.map(([number,date,title,question,due])=><details className="week" key={number} open={number==="01"}><summary><span className="week-no">{number}</span><span className="week-date">{date}</span><span className="week-title">{title}</span><span className="plus" aria-hidden="true">+</span></summary><div className="week-body"><p>{question}</p><div><small>DUE / IN MOTION</small><strong>{due}</strong></div></div></details>)}</div>
    </section>

    <section className="assignments section" id="assignments">
      <div className="eyebrow">03 / What you’ll make</div>
      <div className="assignment-grid"><article className="assignment-feature"><span>THE THROUGH-LINE</span><h2>Your work,<br/>in the world.</h2><p>Develop one media artwork across the semester—from proposal and critique through installation, care, documentation, and an external open-call submission.</p><div className="asterisk">✳</div></article>
      <div className="assignment-cards">
        <article><span>01</span><h3>Journal entries</h3><p>Draw, describe, animate, or build a machine in response to presentations. Share the following week.</p></article>
        <article><span>02</span><h3>Reading annotations</h3><p>Add at least two thoughtful annotations per assigned material in Perusall before class.</p></article>
        <article><span>03</span><h3>Media object presentation</h3><p>Lead a 5–15 minute conversation around an object, event, exhibition, or phenomenon.</p></article>
        <article><span>04</span><h3>Installation plan</h3><p>Make the spatial, technical, interaction, accessibility, and setup needs legible to someone else.</p></article>
        <article><span>05</span><h3>Maintenance document</h3><p>Create a 1–2 page field guide for startup, shutdown, troubleshooting, safety, and reset.</p></article>
        <article><span>06</span><h3>Final presentation</h3><p>Reflect on the work, its references and process, and where it goes next—in five focused minutes.</p></article>
      </div></div>
    </section>

    <section className="grading section" id="policies">
      <div className="eyebrow">04 / How the class works</div>
      <div className="grading-grid"><div><h2>Grading,<br/><em>without mystery.</em></h2><p>Assignments are evaluated as complete, partially complete, or incomplete. Documentation is part of the work.</p></div><div className="grade-bars"><div><span>Participation</span><strong>30%</strong><i style={{width:"30%"}}/></div><div><span>Assignments</span><strong>30%</strong><i style={{width:"30%"}}/></div><div><span>Projects / final production</span><strong>40%</strong><i style={{width:"40%"}}/></div></div></div>
      <div className="policy-grid"><article><span>ATTENDANCE</span><h3>Show up for the collective.</h3><p>Two absences do not affect your grade. Each additional absence lowers the highest possible final grade by one letter. Three late arrivals count as one absence.</p></article><article><span>EXTENSIONS</span><h3>Ask at least 24 hours ahead.</h3><p>Extensions requested at least 24 hours before the deadline are granted without a grade penalty.</p></article><article><span>AI & AUTHORSHIP</span><h3>Disclose the tools you use.</h3><p>Journal and reading responses should be fully your own. For other work, disclose AI assistance, name the system, and be ready to explain your process in your own words.</p></article></div>
    </section>

    <section className="support section"><div><div className="eyebrow light">05 / You belong here</div><h2>Bring your questions.<br/>Bring your whole self.</h2></div><div className="support-copy"><p>Office hours are an extension of the classroom. There is no incorrect way to use them, and appointments can be formal or informal.</p><a href="mailto:sc8803@nyu.edu">Email Shuang Cai ↗</a><a href="mailto:jk9077@nyu.edu">Email Jisoo Kim ↗</a><a href="https://www.nyu.edu/students/communities-and-groups/student-accessibility.html">Moses Center resources ↗</a></div></section>

    <footer><div className="footer-mark">OPEN<br/>CALL</div><div><small>NEW YORK UNIVERSITY</small><p>Tisch School of the Arts<br/>Interactive Media Arts</p></div><div><small>STUDENT HOURS</small><p>Mon 12–1 PM, in person<br/>Zoom by appointment</p></div><a href="#top">Back to top ↑</a></footer>
  </main>;
}
