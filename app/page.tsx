"use client";

import { useEffect, useMemo, useState } from "react";

const nav = [
  ["⌂", "Tổng quan"],
  ["✦", "Tạo video"],
  ["▧", "Tạo hình ảnh"],
  ["⚡", "Quy trình"],
  ["♙", "Nhân vật"],
  ["◉", "Giọng nói"],
  ["▣", "Kịch bản AI"],
  ["◷", "Lịch sử"],
];

const seedJobs = [
  { id: "VEO-2891", name: "Tokyo Neon — 8s", type: "Video", status: "Đang xử lý", progress: 72, time: "2 phút trước" },
  { id: "IMG-1884", name: "Summer product shot", type: "Hình ảnh", status: "Hoàn tất", progress: 100, time: "18 phút trước" },
  { id: "VEO-2889", name: "Cinematic coffee ad", type: "Video", status: "Đang chờ", progress: 0, time: "24 phút trước" },
  { id: "VOX-0931", name: "Narration — Episode 12", type: "Giọng nói", status: "Hoàn tất", progress: 100, time: "1 giờ trước" },
];

export default function Home() {
  const [active, setActive] = useState("Tổng quan");
  const [jobs, setJobs] = useState(seedJobs);
  const [notice, setNotice] = useState("");
  const [query, setQuery] = useState("");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("creative-veo3-jobs");
      if (saved) setJobs(JSON.parse(saved));
    } catch {
      // Keep the bundled starter jobs if local data is unavailable.
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem("creative-veo3-jobs", JSON.stringify(jobs));
  }, [hydrated, jobs]);

  const filtered = useMemo(
    () => jobs.filter((job) => `${job.name} ${job.id}`.toLowerCase().includes(query.toLowerCase())),
    [jobs, query]
  );

  function createJob() {
    const next = {
      id: `VEO-${2892 + jobs.length}`,
      name: "Untitled AI video",
      type: "Video",
      status: "Đang chờ",
      progress: 0,
      time: "Vừa xong",
    };
    setJobs([next, ...jobs]);
    setNotice("Đã tạo tác vụ mới. Hãy kết nối backend để bắt đầu render.");
    setTimeout(() => setNotice(""), 3600);
  }

  return (
    <main className="shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brandMark">V</div>
          <div><strong>VEO3</strong><span>AI STUDIO</span></div>
        </div>
        <nav>
          <p className="navTitle">KHÔNG GIAN LÀM VIỆC</p>
          {nav.map(([icon, label]) => (
            <button key={label} className={active === label ? "navItem active" : "navItem"} onClick={() => setActive(label)}>
              <i>{icon}</i><span>{label}</span>
            </button>
          ))}
        </nav>
        <div className="sidebarBottom">
          <button className="navItem" onClick={() => setActive("Cài đặt")}><i>⚙</i><span>Cài đặt</span></button>
          <div className="user">
            <div className="avatar">AC</div>
            <div><strong>Alex Creator</strong><span>Pro workspace</span></div>
            <b>•••</b>
          </div>
        </div>
      </aside>

      <section className="workspace">
        <header>
          <div>
            <p className="eyebrow">VEO3 AI STUDIO / {active.toUpperCase()}</p>
            <h1>{active}</h1>
          </div>
          <div className="headerActions">
            <label className="search"><span>⌕</span><input aria-label="Tìm kiếm" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Tìm tác vụ..." /><kbd>⌘ K</kbd></label>
            <button className="iconButton" aria-label="Thông báo">♢<em>3</em></button>
            <button className="primary" onClick={createJob}><span>＋</span>Tạo mới</button>
          </div>
        </header>

        {notice && <div className="toast">{notice}</div>}

        <div className="content">
          <section className="hero">
            <div className="heroCopy">
              <span className="pill">VEO 3.1 • SẴN SÀNG</span>
              <h2>Biến ý tưởng thành<br/><em>video điện ảnh.</em></h2>
              <p>Tạo video AI chất lượng cao với âm thanh đồng bộ, chuyển động tự nhiên và khả năng điều khiển sáng tạo chính xác.</p>
              <div className="heroActions">
                <button className="primary large" onClick={createJob}>✦ Bắt đầu sáng tạo</button>
                <button className="secondary" onClick={() => setActive("Quy trình")}>Xem quy trình <span>→</span></button>
              </div>
            </div>
            <div className="visualCard" aria-label="AI video preview">
              <div className="orb one"/><div className="orb two"/>
              <div className="frame">
                <div className="frameTop"><span>LIVE PREVIEW</span><b>8 SEC</b></div>
                <div className="play">▶</div>
                <div className="prompt">“A cinematic city reflected in rain...”</div>
              </div>
              <div className="floatBadge"><span>✦</span><div><b>VEO 3.1</b><small>Native audio</small></div></div>
            </div>
          </section>

          <section className="stats">
            <article><div><span>TỔNG VIDEO</span><strong>1,284</strong></div><i className="purple">↗</i><small>+12.5% tháng này</small></article>
            <article><div><span>ĐANG XỬ LÝ</span><strong>{jobs.filter(j => j.status !== "Hoàn tất").length}</strong></div><i className="blue">◌</i><small>2 tác vụ ưu tiên</small></article>
            <article><div><span>ĐÃ HOÀN TẤT</span><strong>1,241</strong></div><i className="green">✓</i><small>96.7% thành công</small></article>
            <article><div><span>THỜI GIAN TIẾT KIỆM</span><strong>48.2h</strong></div><i className="orange">◷</i><small>Trong 30 ngày qua</small></article>
          </section>

          <section className="jobsPanel">
            <div className="panelHeader">
              <div><h3>Tác vụ gần đây</h3><p>Theo dõi các tác vụ tạo nội dung của bạn</p></div>
              <button onClick={() => setActive("Lịch sử")}>Xem tất cả <span>→</span></button>
            </div>
            <div className="tableHead"><span>TÁC VỤ</span><span>LOẠI</span><span>TRẠNG THÁI</span><span>TIẾN ĐỘ</span><span>THỜI GIAN</span><span/></div>
            {filtered.map((job) => (
              <div className="jobRow" key={job.id}>
                <div className="jobName"><div className={`thumb ${job.type === "Hình ảnh" ? "warm" : job.type === "Giọng nói" ? "sound" : ""}`}>{job.type === "Giọng nói" ? "≋" : "▶"}</div><div><strong>{job.name}</strong><small>{job.id}</small></div></div>
                <span className="type">{job.type}</span>
                <span className={`status ${job.status === "Hoàn tất" ? "done" : job.status === "Đang chờ" ? "waiting" : ""}`}><i/>{job.status}</span>
                <div className="progress"><div><i style={{width: `${job.progress}%`}}/></div><span>{job.progress}%</span></div>
                <time>{job.time}</time>
                <button className="more" aria-label={`Tùy chọn ${job.name}`}>•••</button>
              </div>
            ))}
            {filtered.length === 0 && <div className="empty">Không tìm thấy tác vụ phù hợp.</div>}
          </section>
        </div>
      </section>
    </main>
  );
}
