const weeks = [
  { week: "1", date: "9/14", theme: "What is Curating?", question: "What does a curator do? What are the traditions in exhibition making?", activity: "Go over syllabus, assignments, and responsibility. Sign up for Media object. Journal Entry Sharing. Concept workshop.", due: "Journal Entry", readings: [
    ["What are the Different Types of Art Exhibitions? — CAI", "/readings/What%20are%20the%20Different%20Types%20of%20Art%20Exhibitions_%20%E2%80%94%20CAI.pdf"],
    ["Open Call: Portals at The Shed | ARTnews On View, 2025", "https://www.theshed.org/program/447-open-call-portals"],
    ["What Is It Like To Be an Open Call Artist?", "https://cdn.filepicker.io/api/file/oW5IGOQGQu2zNtHnikdp?fit=max"],
  ] },
  { week: "2", date: "9/21", theme: "Exhibition Concepts & Metaconcepts", question: "How do exhibitions produce meaning through relationships rather than simply topics?", activity: "Media Object Presentation. Share your idea. Collaboratively develop open call description. Naming activity.", due: "Reading notations. Start ideating for your piece.", readings: [
    ["Thinking Contemporary Curating", "/readings/Thinking%20Contemporary%20Curating.pdf"],
    ["Medium Design - Journal #106", "/readings/Medium%20Design%20-%20Journal%20%23106.pdf"],
    ["A crash course in creativity: Tina Seelig at TEDxStanford", "https://www.youtube.com/watch?v=gyM6rx69iqg"],
  ] },
  { week: "3", date: "9/28", theme: "Curating Collaborations", question: "How do curators work with artists, designers, technicians, institutions, and communities to realize exhibitions?", activity: "Media Object Presentation.", due: "Reading notations. Start working on your piece.", readings: [
    ["Sarah Cook's essay in New Media in the White Cube and Beyond: Curatorial Models for Digital Art", "/readings/New%20Media%20in%20the%20White%20Cube%20and%20Beyond%20Curatorial%20Models%20for%20Digital%20Art%20(Christiane%20Paul).pdf"],
    ["Making Exhibitions as We Research Through Art: The Exhibition Operations Kit", "/readings/26CC_PictorialsCameraReady.pdf"],
  ] },
  { week: "4", date: "10/5", theme: "Experience Building & Alternative Curating", question: "What happens when the exhibition itself becomes an experience rather than a container for objects?", activity: "Media Object Presentation. Experience workshop.", due: "Reading notations. Work on your piece.", readings: [
    ["Art as Experience — John Dewey", "/readings/DEWEY%20John%2C%20Art%20as%20an%20Experience_.pdf"],
    ["Opening up the Museum: Nina Simon @ TEDxSantaCruz", "https://www.youtube.com/watch?v=aIcwIH1vZ9w"],
    ["A Meat-Summer Night's Dream: A Tangible Design Fiction Exploration of Eating Biohybrid Flying Robots", "/readings/3772318.3790678.pdf"],
  ] },
  { week: "5", date: "10/14", theme: "Care and Maintenance", question: "Care and maintenance of things in exhibitions. Show piece/work-in-progress.", activity: "Media Object Presentation. Guest Speaker: Leia Chang (Pending confirmation).", due: "Reading notations.", readings: [["Rethinking Repair — Steven J. Jackson", "/readings/Jackson_RethinkingRepairMITPress2014.pdf"]] },
  { week: "6", date: "10/19", theme: "Exhibition Design: Space, Sequence, and Situation", question: "How do architecture, layout, lighting, graphics, and movement shape interpretation?", activity: "Media Object Presentation. Maintenance Plan sharing. Guest Speaker: Ian/Phil. Submit to our open call Google Form.", due: "No readings this week. Maintenance Plan for your piece." },
  { week: "7", date: "10/26", theme: "Interpretation & Mediation", question: "How do wall texts, catalogs, websites, labels, guides, and AI shape how audiences understand work?", activity: "Guest Speaker: Mingna. Label making workshop.", due: "No readings this week. Installation plan for your piece." },
  { week: "8", date: "11/2", theme: "Programming & Public Engagement", question: "How can talks, workshops, performances, screenings, and other events extend an exhibition?", activity: "Media Object Presentation. Share Installation plan and Maintenance Plan. Finalize equipment list.", due: "No readings this week. Sprint on piece making." },
  { week: "9", date: "11/9", theme: "Planning", question: "", activity: "Piece presentation. Guest Critic: pending.", due: "No readings this week. Piece presentation 12 min/person." },
  { week: "10", date: "11/16", theme: "Install Day", question: "Meet at Clive Davis.", activity: "INSTALL!!!! Class meets in Clive Davis.", due: "No readings due this day. Make adjustments." },
  { week: "11", date: "11/23", theme: "Documentation", question: "Ways of documentation.", activity: "Short Lecture. Post-Install Reflection Show-n-Tell.", due: "Short reading. Post-Install Reflection 5 min/person." },
  { week: "12", date: "11/30", theme: "The Politics of Curating", question: "Who gets shown, who is excluded, and how do exhibitions produce power and representation?", activity: "Media Object. Pending.", due: "Reading notations.", readings: [["Curating: Politics of Display, Politics of Site, Politics of Transfer and Translation, Politics of Knowledge Production — Dorothee Richter", "/readings/DR_Curating_WEB.pdf"]] },
  { week: "13", date: "12/7", theme: "Reflection and career development", question: "", activity: "Final Presentation. Discussion.", due: "No readings due this day. Update artist website/bio. Submit to an open call." },
  { week: "14", date: "12/14", theme: "Deisntallation", question: "-", activity: "Class meeting at the gallery.", due: "Artists Statement" },
];

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
          <div className="schedule-table">{weeks.map(item=><article className="schedule-row" key={item.week}><div className="week-label"><strong>Week {item.week}</strong><span>{item.date}</span></div><div><h3>{item.theme}</h3>{item.question && <p>{item.question}</p>}</div><div><h4>In-class activity</h4><p>{item.activity}</p></div><div><h4>Due on this day</h4><p>{item.due}</p>{item.readings && <div className="week-readings"><h4>Readings</h4>{item.readings.map(([title, href])=><a key={title} href={href}>{title}</a>)}</div>}</div></article>)}</div>
        </section>
      </div>
    </div>
  </main>;
}
