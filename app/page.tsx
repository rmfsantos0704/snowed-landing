"use client";

import { useEffect, useState } from "react";

const ICON_IMAGE_PATH = "/icon.png";
const APK_LINK = "#download";

type IconName = "home" | "calendar" | "book" | "bell" | "note" | "search" | "arrow" | "download" | "lock" | "offline" | "bolt";

type Feature = { icon: IconName; title: string; summary: string; detail: string; screenshot: string };

const FEATURES: Feature[] = [
  { icon: "home", title: "Today", summary: "A clear view of what matters now.", detail: "See your schedule, next event, and urgent reminders in one focused view.", screenshot: "/today.jpeg" },
  { icon: "calendar", title: "Calendar", summary: "Plan the month without the clutter.", detail: "Color-coded subjects and quick task updates make every day easy to scan.", screenshot: "/calendar.jpeg" },
  { icon: "book", title: "Courses", summary: "Keep every subject in one place.", detail: "Store instructors, rooms, schedules, and course tasks with less admin.", screenshot: "/Courses.jpeg" },
  { icon: "bell", title: "Reminders", summary: "Know what is coming up next.", detail: "Set practical lead times so deadlines reach you before they become urgent.", screenshot: "/Reminders.jpeg" },
  { icon: "note", title: "Notes", summary: "Capture ideas while they are fresh.", detail: "Write, format, attach photos, and search your notes without leaving the app.", screenshot: "/Notes.jpeg" },
  { icon: "search", title: "Research", summary: "Go from question to understanding.", detail: "Read Wikipedia articles and save useful research directly to your notes.", screenshot: "/research.jpeg" },
];
function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, React.ReactNode> = {
    home: <><path d="m3 10 9-7 9 7" /><path d="M5 9v11h14V9" /><path d="M9 20v-6h6v6" /></>,
    calendar: <><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /><path d="M8 14h.01M12 14h.01M16 14h.01" /></>,
    book: <><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v17H6.5A2.5 2.5 0 0 0 4 21.5z" /><path d="M4 4.5v17M8 6h8M8 10h8" /></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" /></>,
    note: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M8 13h8M8 17h5" /></>,
    search: <><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 5 5" /></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    download: <><path d="M12 3v12M7 10l5 5 5-5M4 21h16" /></>,
    lock: <><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
    offline: <><path d="M3 8a14 14 0 0 1 18 0M6 12a9 9 0 0 1 12 0M9 16a4 4 0 0 1 6 0M12 20h.01" /><path d="m3 3 18 18" /></>,
    bolt: <path d="m13 2-9 12h7l-1 8 9-12h-7z" />,
  };
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const active = FEATURES[activeFeature];

  return (
    <main>
      <nav className={`nav ${scrolled ? "navScrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="SnowEd home"><span className="brandMark"><img src={ICON_IMAGE_PATH} alt="" /></span><span>SnowEd</span></a>
        <button className="menuButton" type="button" aria-label="Toggle navigation" aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}><span /><span /></button>
        <div className={`navLinks ${mobileMenuOpen ? "navLinksOpen" : ""}`}>
          <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a><a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a><a className="navCta" href={APK_LINK}><Icon name="download" size={16} /> Get SnowEd</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="heroGrid" />
        <div className="heroCopy reveal"><p className="eyebrow"><span className="eyebrowDot" /> Student life, made lighter</p><h1>A quieter way to<br /><em>stay on track.</em></h1><p className="heroText">SnowEd brings your schedule, notes, and research together in one calm, offline-first space.</p><div className="heroActions"><a className="button buttonPrimary" href={APK_LINK}>Download for Android <Icon name="arrow" size={18} /></a><a className="textLink" href="#features">Explore features <Icon name="arrow" size={16} /></a></div><div className="trustLine"><Icon name="offline" size={17} /> Works offline <span /> <Icon name="lock" size={17} /> Your data stays yours</div></div>
        <div className="heroVisual reveal revealDelay"><div className="heroScreen"><img src="/today.jpeg" alt="SnowEd Today screen showing the day's schedule and progress" /></div><div className="visualPill"><span>6</span> tools, one clear head</div></div>
      </section>

      <section className="introBand"><p>Everything you need for the semester, thoughtfully put in one place.</p><div className="line" /><span>01 / 03</span></section>

      <section className="features section" id="features"><div className="sectionHeading reveal"><p className="eyebrow">The essentials</p><h2>Less juggling.<br /><em>More doing.</em></h2><p>Designed around the way students actually move through a day.</p></div><div className="featureLayout"><div className="featureList reveal">{FEATURES.map((feature, index) => <button className={`featureItem ${activeFeature === index ? "featureItemActive" : ""}`} key={feature.title} onClick={() => setActiveFeature(index)}><span className="featureIcon"><Icon name={feature.icon} size={19} /></span><span><b>{feature.title}</b><small>{feature.summary}</small></span><Icon name="arrow" size={17} /></button>)}</div><div className="featureDetail reveal revealDelay" key={active.title}><div className="featureScreenshot"><img src={active.screenshot} alt={`SnowEd ${active.title} screen`} /><span className="detailNumber">0{activeFeature + 1}</span></div><div className="featureDetailCopy"><div className="detailIcon"><Icon name={active.icon} size={30} /></div><h3>{active.title}</h3><p>{active.detail}</p><a className="textLink" href={APK_LINK}>Make it yours <Icon name="arrow" size={16} /></a></div></div></div></section>

      <section className="about section" id="about"><div className="aboutMark"><img src={ICON_IMAGE_PATH} alt="SnowEd" /></div><div className="aboutCopy reveal"><p className="eyebrow">Why SnowEd</p><h2>Technology should<br /><em>give you room.</em></h2><p>No account. No noisy feeds. No subscription waiting around the corner. SnowEd is a focused toolkit for students who want their plans and ideas close, private, and available anywhere.</p><div className="aboutFacts"><div><Icon name="offline" size={21} /><b>Offline first</b><span>Ready without Wi-Fi</span></div><div><Icon name="lock" size={21} /><b>Private by design</b><span>Stored on your device</span></div><div><Icon name="bolt" size={21} /><b>Free to use</b><span>No hidden limits</span></div></div></div></section>

      <section className="download section" id="download"><div className="downloadInner reveal"><p className="eyebrow">Start simply</p><h2>Make space for<br /><em>what matters.</em></h2><p>Download SnowEd and make your next semester feel a little more manageable.</p><a className="button buttonLight" href={APK_LINK}>Download the APK <Icon name="download" size={18} /></a><small>Android 8.0 or later · Free forever</small></div></section>

      <footer><a className="brand" href="#top"><span className="brandMark"><img src={ICON_IMAGE_PATH} alt="" /></span><span>SnowEd</span></a><span>Made for focused study.</span><a href="mailto:hello@snowed.app">Contact</a><span>© {new Date().getFullYear()} SnowEd</span></footer>
    </main>
  );
}
