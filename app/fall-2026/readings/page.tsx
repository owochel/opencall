import { schedule } from "../schedule-data";

export default function Readings() {
  const weeksWithReadings = schedule.filter(item => item.readings?.length);
  return <main className="site-shell">
    <header className="site-header"><a href="/">Open Call</a><a href="/fall-2026">Fall 2026</a></header>
    <div className="reading-layout">
      <div><h1>Readings</h1><p>Course materials on BrightSpace consist of 5–30 pages of readings per week and are available via BrightSpace on Perusall.</p></div>
      <div>{weeksWithReadings.map(item=><section className="reading-group" key={item.week}><h2>Week {item.week}</h2><ol className="reading-list">{item.readings!.map(reading=><li key={reading.title}><a href={reading.href}>{reading.title}</a><span>{reading.type}</span></li>)}</ol></section>)}</div>
    </div>
  </main>;
}
