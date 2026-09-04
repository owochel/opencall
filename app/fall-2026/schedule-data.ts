export type Reading = {
  title: string;
  href: string;
  type: "PDF" | "VIDEO" | "LINK";
};

export type ScheduleRow = {
  week: string;
  date: string;
  theme: string;
  question: string;
  activity: string[];
  due: string;
  readings?: Reading[];
};

// EDIT THE SCHEDULE HERE.
// Each object is one row in the schedule table.
// Add readings inside the row's `readings` list.
export const schedule: ScheduleRow[] = [
  {
    week: "1", date: "9/14", theme: "What is Curating?",
    question: "What does a curator do? What are the traditions in exhibition making?",
    activity: [
      "Go over syllabus, assignments, and responsibility",
      "Sign up for Media object",
      "Reading Discussion",
      "Journal Entry Sharing",
      "Concept workshop",
    ],
    due: "Journal Entry",
    readings: [
      { title: "What are the Different Types of Art Exhibitions? — CAI", href: "/readings/What%20are%20the%20Different%20Types%20of%20Art%20Exhibitions_%20%E2%80%94%20CAI.pdf", type: "PDF" },
      { title: "Open Call: Portals at The Shed | ARTnews On View, 2025", href: "https://www.theshed.org/program/447-open-call-portals", type: "LINK" },
      { title: "What Is It Like To Be an Open Call Artist?", href: "https://cdn.filepicker.io/api/file/oW5IGOQGQu2zNtHnikdp?fit=max", type: "LINK" },
    ],
  },
  {
    week: "2", date: "9/21", theme: "Exhibition Concepts & Metaconcepts",
    question: "How do exhibitions produce meaning through relationships rather than simply topics?",
    activity: [
      "Media Object Presentation",
      "Reading Discussion",
      "Share your idea",
      "Collaboratively develop open call description",
      "Naming activity",
    ],
    due: "Reading notations. Start ideating for your piece.",
    readings: [
      { title: "Thinking Contemporary Curating", href: "/readings/Thinking%20Contemporary%20Curating.pdf", type: "PDF" },
      { title: "Medium Design - Journal #106", href: "/readings/Medium%20Design%20-%20Journal%20%23106.pdf", type: "PDF" },
      { title: "A crash course in creativity: Tina Seelig at TEDxStanford", href: "https://www.youtube.com/watch?v=gyM6rx69iqg", type: "VIDEO" },
    ],
  },
  {
    week: "3", date: "9/28", theme: "Curating Collaborations",
    question: "How do curators work with artists, designers, technicians, institutions, and communities to realize exhibitions?",
    activity: [
      "Media Object Presentation",
      "Reading Discussion",
    ],
    due: "Reading notations. Start working on your piece.",
    readings: [
      { title: "Making it up as you go along: How I Wrote Art Worlds", href: "https://www.howardsbecker.com/articles/writingaw.html", type: "LINK" },
      { title: "Sarah Cook's essay in New Media in the White Cube and Beyond: Curatorial Models for Digital Art", href: "/readings/New%20Media%20in%20the%20White%20Cube%20and%20Beyond%20Curatorial%20Models%20for%20Digital%20Art%20(Christiane%20Paul).pdf", type: "PDF" },
      { title: "Making Exhibitions as We Research Through Art: The Exhibition Operations Kit", href: "/readings/26CC_PictorialsCameraReady.pdf", type: "PDF" },
    ],
  },
  {
    week: "4", date: "10/5", theme: "Experience Building & Alternative Curating",
    question: "What happens when the exhibition itself becomes an experience rather than a container for objects?",
    activity: [
      "Media Object Presentation",
      "Reading Discussion",
      "Experience workshop",
    ],
    due: "Reading notations. Work on your piece.",
    readings: [
      { title: "Art as Experience — John Dewey", href: "/readings/DEWEY%20John%2C%20Art%20as%20an%20Experience_.pdf", type: "PDF" },
      { title: "Opening up the Museum: Nina Simon @ TEDxSantaCruz", href: "https://www.youtube.com/watch?v=aIcwIH1vZ9w", type: "VIDEO" },
      { title: "A Meat-Summer Night's Dream: A Tangible Design Fiction Exploration of Eating Biohybrid Flying Robots", href: "/readings/3772318.3790678.pdf", type: "PDF" },
    ],
  },
  {
    week: "5", date: "10/14", theme: "Care and Maintenance",
    question: "Care and maintenance of things in exhibitions. Show piece/work-in-progress.",
    activity: [
      "Media Object Presentation",
      "Reading Discussion",
      "Guest Speaker: Leia Chang (Pending confirmation)",
    ],
    due: "Reading notations.",
    readings: [
      { title: "Rethinking Repair — Steven J. Jackson", href: "/readings/Jackson_RethinkingRepairMITPress2014.pdf", type: "PDF" },
      { title: "Jon Ippolito — “Accommodating the Unpredictable (focus on pp. 47–53)", href: "/readings/Permanence.pdf", type: "PDF" },
      {title: "Supporting the Long Now: Building Technology for Tangible Interaction in a Decade-Long Exhibition", href: "/readings/supporting-the-long-now.pdf", type: "PDF"}
    ],
  },
  {
    week: "6", date: "10/19", theme: "Exhibition Design: Space, Sequence, and Situation",
    question: "How do architecture, layout, lighting, graphics, and movement shape interpretation?",
    activity: [
      "Media Object Presentation",
      "Maintenance Plan sharing",
      "Guest Speaker: Ian/Phil",
      "Submit to our open call Google Form",
    ],
    due: "No readings this week. Maintenance Plan for your piece.",
  },
  {
    week: "7", date: "10/26", theme: "Interpretation & Mediation",
    question: "How do wall texts, catalogs, websites, labels, guides, and AI shape how audiences understand work?",
    activity: [
      "Guest Speaker: Mingna",
      "Label making workshop",
    ],
    due: "No readings this week. Installation plan for your piece.",
  },
  {
    week: "8", date: "11/2", theme: "Programming & Public Engagement",
    question: "How can talks, workshops, performances, screenings, and other events extend an exhibition?",
    activity: [
      "Media Object Presentation",
      "Share Installation plan and Maintenance Plan",
      "Finalize equipment list",
    ],
    due: "No readings this week. Sprint on piece making.",
  },
  {
    week: "9", date: "11/9", theme: "Planning",
    question: "",
    activity: [
      "Piece presentation",
      "Guest Critic: pending",
    ],
    due: "No readings this week. Piece presentation 12 min/person.",
  },
  {
    week: "10", date: "11/16", theme: "Install Day",
    question: "Meet at Clive Davis.",
    activity: [
      "INSTALL!!!!",
      "Class meets in Clive Davis",
    ],
    due: "No readings due this day. Make adjustments.",
  },
  {
    week: "11", date: "11/23", theme: "Documentation",
    question: "Ways of documentation.",
    activity: [
      "Short Lecture",
      "Reading Discussion",
      "Post-Install Reflection Show-n-Tell",
    ],
    due: "Short reading. Post-Install Reflection 5 min/person.",
  },
  {
    week: "12", date: "11/30", theme: "The Politics of Curating",
    question: "Who gets shown, who is excluded, and how do exhibitions produce power and representation?",
    activity: [
      "Media Object Presentation",
      "Reading Discussion",
      "Pending",
    ],
    due: "Reading notations.",
    readings: [{ title: "Curating: Politics of Display, Politics of Site, Politics of Transfer and Translation, Politics of Knowledge Production — Dorothee Richter", href: "/readings/DR_Curating_WEB.pdf", type: "PDF" }],
  },
  {
    week: "13", date: "12/7", theme: "Reflection and career development",
    question: "",
    activity: [
      "Final Presentation",
      "Discussion",
    ],
    due: "No readings due this day. Update artist website/bio. Submit to an open call.",
  },
  {
    week: "14", date: "12/14", theme: "Deisntallation",
    question: "-",
    activity: [
      "Class meeting at the gallery",
    ],
    due: "Artists Statement",
  },
];
