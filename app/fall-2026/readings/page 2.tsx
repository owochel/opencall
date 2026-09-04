const readings = [
  "What is “Curating” in Art_ — CAI.pdf",
  "What are the Different Types of Art Exhibitions_ — CAI.pdf",
  "Thinking Contemporary Curating.pdf",
  "Curating Care.pdf",
  "DR_Curating_WEB.pdf",
  "New Media in the White Cube and Beyond Curatorial Models for Digital Art (Christiane Paul).pdf",
  "DEWEY John, Art as an Experience_.pdf",
  "Medium Design - Journal #106.pdf",
  "JACKSON-MaterialCare-2019.pdf",
  "Jackson_RethinkingRepairMITPress2014.pdf",
  "Suppoting the Long Now.pdf",
  "TMA_CommunityBasedCuration_Toolkit_FINAL_web.pdf",
  "A Shared Interest in Creating Speculative Scenarios, NYC-based Artist Duo Tong Wu & Yuguang Zhang – Li Tang Community.pdf",
  "Toolish Behavior_ On the Humanity of Tools at New York University’s 370 Jay Street building.pdf",
  "MegMiller.pdf",
  "26CC_PictorialsCameraReady.pdf",
  "3772318.3790678.pdf",
];

export default function Readings() {
  return <main className="site-shell">
    <header className="site-header"><a href="/">Open Call</a><a href="/fall-2026">Fall 2026</a></header>
    <div className="reading-layout">
      <div><h1>Readings</h1><p>Course materials on BrightSpace consist of 5–30 pages of readings per week and are available via BrightSpace on Perusall.</p></div>
      <ol className="reading-list">{readings.map(file=><li key={file}><a href={`/readings/${encodeURIComponent(file)}`}>{file.replace(/\.pdf$/i, "")}</a><span>PDF</span></li>)}</ol>
    </div>
  </main>;
}
