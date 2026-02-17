import { useState } from "react";

const profiles = [
  { id:1, name:"سارا", age:26, city:"تهران", bio:"دوست دارم موسیقی گوش بدم و سفر برم. دنبال یه آدم باحال می‌گردم.", image:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop", vip:true },
  { id:2, name:"نیلوفر", age:24, city:"تهران", bio:"عاشق کتاب و قهوه هستم. بیا باهم حرف بزنیم!", image:"https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=600&fit=crop", vip:false },
  { id:3, name:"مهسا", age:29, city:"تهران", bio:"ورزشکار و عاشق طبیعت. دنبال همراه برای کوهنوردی.", image:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=400&h=600&fit=crop", vip:true },
  { id:4, name:"آیدا", age:27, city:"تهران", bio:"گرافیست و هنردوست. بیا باهم نقاشی بکشیم!", image:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop", vip:false },
];

export default function App() {
  const [tab, setTab] = useState("explore");
  const [profileIdx, setProfileIdx] = useState(0);
  const [swipeDir, setSwipeDir] = useState(null);
  const [showGifts, setShowGifts] = useState(false);
  const [likesTab, setLikesTab] = useState("liked");
  const [likesFilter, setLikesFilter] = useState("all");

  const profile = profiles[profileIdx % profiles.length];

  const swipe = (dir) => {
    setSwipeDir(dir);
    setTimeout(() => { setSwipeDir(null); setProfileIdx(i => i+1); setShowGifts(false); }, 380);
  };

  const gifts = ["↩️ 1💎","➖ 1⚡","❤️ 10⚡","🔞 1💎","✈️ 2💎"];
  const leaderboard = [
    { name:"هومایون", age:25, votes:30, img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop" },
    { name:"آرشیا", age:22, votes:10, img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop" },
    { name:"سامان", age:28, votes:7, img:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop" },
  ];

  const s = {
    app: { width:"100%", maxWidth:400, height:"100vh", maxHeight:780, background:"#0d0d1a", display:"flex", flexDirection:"column", position:"relative", overflow:"hidden", fontFamily:"'Segoe UI',sans-serif" },
    statusBar: { background:"#0d0d1a", padding:"10px 20px 4px", display:"flex", justifyContent:"space-between" },
    appHeader: { padding:"6px 18px 6px", background:"#0d0d1a", borderBottom:"1px solid #1a1a2e", display:"flex", justifyContent:"space-between", alignItems:"center" },
    tabBar: { display:"flex", justifyContent:"space-around", alignItems:"center", background:"#1a1a2e", borderTop:"1px solid #2a2a3e", padding:"10px 0 16px", position:"absolute", bottom:0, left:0, right:0 },
    content: { flex:1, overflow:"hidden", display:"flex", flexDirection:"column", paddingBottom:70 },
  };

  return (
    <div style={{ display:"flex", justifyContent:"center", alignItems:"center", minHeight:"100vh", background:"linear-gradient(135deg,#060612,#0a0a22)", padding:"0" }}>
      <div style={s.app}>

        {/* Status bar */}
        <div style={s.statusBar}>
          <span style={{ color:"#fff", fontSize:13, fontWeight:600 }}>9:41</span>
          <div style={{ display:"flex", gap:5, color:"#fff", fontSize:13 }}><span>📶</span><span>🔋</span></div>
        </div>

        {/* Brand header */}
        <div style={s.appHeader}>
          <span style={{ fontSize:17, fontWeight:800, background:"linear-gradient(90deg,#00c6ff,#0072ff)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent" }}>Dategram</span>
          <div style={{ display:"flex", gap:12 }}>
            <span style={{ color:"#555", fontSize:18, cursor:"pointer" }}>⋯</span>
            <span style={{ color:"#555", fontSize:18, cursor:"pointer" }}>✕</span>
          </div>
        </div>

        {/* Screen content */}
        <div style={s.content}>

          {/* ── EXPLORE ── */}
          {tab === "explore" && (
            <div style={{ flex:1, display:"flex", flexDirection:"column" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"12px 16px 8px" }}>
                <span style={{ color:"#555", fontSize:22 }}>⚙️</span>
                <div style={{ display:"flex", gap:8, alignItems:"center" }}>
                  <span style={{ background:"#1e2a4a", borderRadius:20, padding:"4px 10px", color:"#7eb8ff", fontSize:13 }}>💎 1</span>
                  <span style={{ background:"#1e2a4a", borderRadius:20, padding:"4px 10px", color:"#ffe066", fontSize:13 }}>⚡ 100</span>
                  <button style={{ background:"linear-gradient(135deg,#00c6ff,#0072ff)", border:"none", borderRadius:"50%", width:28, height:28, color:"#fff", fontSize:16, cursor:"pointer" }}>+</button>
                </div>
              </div>
              <div style={{ flex:1, padding:"0 12px", position:"relative", overflow:"hidden" }}>
                <div style={{
                  transform: swipeDir==="left"?"translateX(-130%) rotate(-18deg)":swipeDir==="right"?"translateX(130%) rotate(18deg)":"translateX(0)",
                  transition: swipeDir?"transform 0.38s cubic-bezier(.4,0,.2,1)":"none",
                  borderRadius:20, overflow:"hidden", height:"100%", position:"relative", background:"#111",
                }}>
                  <img src={profile.image} alt="" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                  <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"60%", background:"linear-gradient(transparent,rgba(0,0,0,0.96))" }} />
                  <div style={{ position:"absolute", bottom:showGifts?140:88, left:16, right:60 }}>
                    {profile.vip && <span style={{ background:"linear-gradient(90deg,#ff6b35,#ff8c42)", borderRadius:6, padding:"2px 7px", fontSize:11, color:"#fff", fontWeight:700, display:"inline-block", marginBottom:6 }}>VIP</span>}
                    <div style={{ color:"#fff", fontSize:24, fontWeight:800 }}>{profile.name}, {profile.age}</div>
                    <div style={{ color:"#aaa", fontSize:13, marginTop:2 }}>📍 {profile.city}, ایران</div>
                    <div style={{ color:"#ddd", fontSize:13, marginTop:8, lineHeight:1.5 }}>{profile.bio}</div>
                  </div>
                  <button onClick={() => setShowGifts(v=>!v)} style={{ position:"absolute", bottom:showGifts?136:84, right:14, width:42, height:42, borderRadius:"50%", background:showGifts?"#ff6b35":"linear-gradient(135deg,#00c6ff,#0072ff)", border:"none", color:"#fff", fontSize:20, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 4px 15px rgba(0,114,255,0.4)", transition:"all 0.2s" }}>{showGifts?"✕":"+"}</button>
                  {showGifts && (
                    <div style={{ position:"absolute", bottom:72, left:0, right:0, background:"rgba(10,10,24,0.97)", padding:"12px", borderTop:"1px solid #2a2a4a" }}>
                      <div style={{ color:"#888", fontSize:12, marginBottom:8, textAlign:"center" }}>What would you do with {profile.name}?</div>
                      <div style={{ display:"flex", gap:7, justifyContent:"center", flexWrap:"wrap" }}>
                        {gifts.map((g,i) => <button key={i} onClick={() => swipe("right")} style={{ background:"#1e1e3a", border:"1px solid #3a3a5a", borderRadius:20, color:"#fff", padding:"7px 12px", fontSize:12, cursor:"pointer" }}>{g}</button>)}
                      </div>
                    </div>
                  )}
                  <div style={{ position:"absolute", bottom:14, left:0, right:0, display:"flex", justifyContent:"center", gap:28, alignItems:"center" }}>
                    <button onClick={() => swipe("left")} style={{ width:56, height:56, borderRadius:"50%", border:"2px solid #ff4466", background:"rgba(255,68,102,0.12)", fontSize:22, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 4px 18px rgba(255,68,102,0.25)" }}>✕</button>
                    <button onClick={() => swipe("right")} style={{ width:64, height:64, borderRadius:"50%", border:"2px solid #00e676", background:"rgba(0,230,118,0.12)", fontSize:26, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 4px 18px rgba(0,230,118,0.25)" }}>❤️</button>
                    <button onClick={() => swipe("right")} style={{ width:50, height:50, borderRadius:"50%", border:"2px solid #ffbe00", background:"rgba(255,190,0,0.12)", fontSize:20, cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 4px 18px rgba(255,190,0,0.2)" }}>⭐</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ── LIKES ── */}
          {tab === "likes" && (
            <div style={{ flex:1, display:"flex", flexDirection:"column" }}>
              <div style={{ display:"flex", gap:0, margin:"12px 14px", background:"#1a1a2e", borderRadius:14, padding:4 }}>
                {[["liked","Liked you"],["matches","Matches"]].map(([id,label]) => (
                  <button key={id} onClick={() => setLikesTab(id)} style={{ flex:1, padding:"9px 0", border:"none", borderRadius:11, background:likesTab===id?"#fff":"transparent", color:likesTab===id?"#000":"#888", fontWeight:600, fontSize:14, cursor:"pointer", transition:"all 0.2s" }}>{label}</button>
                ))}
              </div>
              <div style={{ display:"flex", gap:7, padding:"0 14px 12px", overflowX:"auto" }}>
                {[["all","All"],["18","🔞 0"],["heart","❤️ 0"],["wink","😉 0"]].map(([id,label]) => (
                  <button key={id} onClick={() => setLikesFilter(id)} style={{ background:likesFilter===id?"#fff":"#1e1e3a", color:likesFilter===id?"#000":"#ccc", border:"none", borderRadius:20, padding:"7px 14px", fontSize:13, cursor:"pointer", whiteSpace:"nowrap", fontWeight:likesFilter===id?700:400 }}>{label}</button>
                ))}
              </div>
              <div style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
                <div style={{ fontSize:58, opacity:0.25, marginBottom:14 }}>👥</div>
                <div style={{ fontSize:17, color:"#aaa", fontWeight:600 }}>Inbox reactions</div>
                <div style={{ fontSize:13, color:"#666", marginTop:8, textAlign:"center", padding:"0 40px" }}>When someone sends a reaction on your profile we will notify you</div>
              </div>
              <div style={{ padding:"10px 14px", background:"#0d0d1a", borderTop:"1px solid #1e1e3a", display:"flex", gap:8, alignItems:"center" }}>
                <button style={{ background:"#1e2a4a", border:"none", borderRadius:20, padding:"7px 14px", color:"#fff", fontSize:12, cursor:"pointer" }}>Start farming ⚡</button>
                <span style={{ background:"#1e2a4a", borderRadius:20, padding:"7px 12px", color:"#7eb8ff", fontSize:12 }}>💎 1</span>
                <span style={{ background:"#1e2a4a", borderRadius:20, padding:"7px 12px", color:"#ffe066", fontSize:12 }}>⚡ 100</span>
                <button style={{ marginLeft:"auto", background:"linear-gradient(135deg,#00c6ff,#0072ff)", border:"none", borderRadius:20, padding:"7px 14px", color:"#fff", fontSize:12, cursor:"pointer" }}>Buy more</button>
              </div>
            </div>
          )}

          {/* ── CHATS ── */}
          {tab === "chats" && (
            <div style={{ flex:1, display:"flex", flexDirection:"column" }}>
              <div style={{ display:"flex", justifyContent:"space-between", padding:"14px 16px 8px" }}>
                <span style={{ color:"#fff", fontWeight:700, fontSize:17 }}>Chats</span>
              </div>
              <div style={{ padding:"0 14px 10px" }}>
                <div style={{ display:"flex", justifyContent:"space-between", marginBottom:10 }}>
                  <span style={{ color:"#fff", fontWeight:700, fontSize:15 }}>Spotlight</span>
                  <span style={{ color:"#888", fontSize:13 }}>تهران، ایران</span>
                </div>
                <div style={{ display:"flex", gap:10, marginBottom:10 }}>
                  {profiles.slice(0,2).map(p => (
                    <div key={p.id} style={{ position:"relative", borderRadius:14, overflow:"hidden", width:95, height:125, cursor:"pointer", flexShrink:0 }}>
                      <img src={p.image} alt="" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
                      <div style={{ position:"absolute", bottom:0, left:0, right:0, background:"linear-gradient(transparent,rgba(0,0,0,0.85))", padding:"6px 6px 4px" }}>
                        <div style={{ color:"#fff", fontSize:11, fontWeight:600 }}>{p.name}, {p.age}</div>
                      </div>
                      {p.vip && <div style={{ position:"absolute", top:5, left:5, background:"linear-gradient(90deg,#ff6b35,#ff8c42)", borderRadius:4, padding:"1px 5px", fontSize:9, color:"#fff", fontWeight:700 }}>VIP</div>}
                    </div>
                  ))}
                  <div style={{ width:95, height:125, borderRadius:14, border:"2px dashed #2a2a4a", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", color:"#555", fontSize:11, cursor:"pointer", gap:5, flexShrink:0 }}>
                    <span style={{ fontSize:22 }}>+</span><span>Top up</span>
                  </div>
                </div>
                <div style={{ display:"flex", alignItems:"center", gap:8, background:"#111", borderRadius:10, padding:"8px 12px" }}>
                  <button style={{ background:"#1e2a4a", border:"none", borderRadius:16, padding:"5px 10px", color:"#fff", fontSize:11, cursor:"pointer", whiteSpace:"nowrap" }}>Top up 👆</button>
                  <span style={{ color:"#888", fontSize:12 }}>Go to top now and get more likes</span>
                </div>
              </div>
              <div style={{ flex:1, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center" }}>
                <div style={{ fontSize:52, opacity:0.2, marginBottom:10 }}>💬</div>
                <div style={{ fontSize:17, color:"#aaa", fontWeight:600 }}>No chats yet</div>
                <div style={{ fontSize:13, color:"#555", marginTop:6 }}>Send reactions to get matches</div>
              </div>
            </div>
          )}

          {/* ── TOP ── */}
          {tab === "top" && (
            <div style={{ flex:1, display:"flex", flexDirection:"column" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"14px 16px 10px" }}>
                <span style={{ color:"#fff", fontWeight:700, fontSize:17 }}>City Top</span>
                <span style={{ color:"#888", fontSize:12 }}>📍 تهران، ایران <span style={{ color:"#00d4ff" }}>Change</span></span>
              </div>
              <div style={{ flex:1, padding:"0 12px", overflowY:"auto" }}>
                {leaderboard.map((u,i) => (
                  <div key={i} style={{ display:"flex", alignItems:"center", gap:12, background:"#13131f", borderRadius:16, padding:"12px 14px", marginBottom:9, border:i===0?"1px solid #ffd700":"1px solid #1e1e3a", boxShadow:i===0?"0 0 18px rgba(255,215,0,0.12)":"none" }}>
                    <span style={{ fontSize:26 }}>{["🥇","🥈","🥉"][i]}</span>
                    <img src={u.img} alt="" style={{ width:50, height:50, borderRadius:"50%", objectFit:"cover", border:`2px solid ${i===0?"#ffd700":i===1?"#c0c0c0":"#cd7f32"}` }} />
                    <div style={{ flex:1 }}>
                      <div style={{ color:"#fff", fontWeight:600, fontSize:14 }}>{u.name}, {u.age}</div>
                      <div style={{ color:"#888", fontSize:12, marginTop:2 }}>{u.votes} votes</div>
                    </div>
                  </div>
                ))}
                <div style={{ border:"1.5px dashed #ffd700", borderRadius:16, padding:18, display:"flex", flexDirection:"column", alignItems:"center", gap:8 }}>
                  <span style={{ fontSize:32 }}>⭐</span>
                  <span style={{ color:"#fff", fontWeight:600, fontSize:13, textAlign:"center" }}>Get into the top and get more views</span>
                </div>
              </div>
              <div style={{ padding:"10px 14px", background:"#0d0d1a", borderTop:"1px solid #1e1e3a", display:"flex", alignItems:"center", gap:10 }}>
                <img src={profiles[0].image} alt="" style={{ width:42, height:42, borderRadius:"50%", objectFit:"cover" }} />
                <div style={{ flex:1 }}>
                  <div style={{ color:"#fff", fontSize:13 }}>من <span style={{ color:"#00e676", fontSize:12 }}>(you)</span></div>
                  <div style={{ color:"#888", fontSize:11 }}>0 votes</div>
                </div>
                <button style={{ background:"linear-gradient(135deg,#ffd700,#ff8c00)", border:"none", borderRadius:20, padding:"8px 16px", color:"#000", fontWeight:700, fontSize:13, cursor:"pointer" }}>Top up 👆</button>
              </div>
            </div>
          )}

          {/* ── PROFILE ── */}
          {tab === "profile" && (
            <div style={{ flex:1, overflowY:"auto" }}>
              <div style={{ display:"flex", flexDirection:"column", alignItems:"center", padding:"18px 0 12px" }}>
                <div style={{ position:"relative" }}>
                  <img src={profiles[2].image} alt="" style={{ width:86, height:86, borderRadius:"50%", objectFit:"cover", border:"3px solid #0072ff" }} />
                  <div style={{ position:"absolute", bottom:2, right:2, background:"#00e676", width:15, height:15, borderRadius:"50%", border:"2px solid #0d0d1a" }} />
                </div>
                <div style={{ color:"#fff", fontSize:21, fontWeight:700, marginTop:10 }}>مهسا، ۲۹</div>
                <div style={{ color:"#888", fontSize:13, marginTop:3 }}>Tehran, Iran</div>
              </div>
              <div style={{ margin:"0 12px 12px", background:"#13131f", border:"1px solid #2a2a4a", borderRadius:16, padding:"13px 14px", display:"flex", alignItems:"center" }}>
                <div style={{ flex:1 }}>
                  <div style={{ display:"flex", alignItems:"center", gap:7 }}>
                    <span style={{ color:"#ff6b35", fontWeight:800, fontSize:14 }}>Dategram</span>
                    <span style={{ background:"linear-gradient(90deg,#ff6b35,#ff8c42)", color:"#fff", fontSize:9, padding:"1px 6px", borderRadius:4, fontWeight:700 }}>VIP</span>
                  </div>
                  <div style={{ color:"#888", fontSize:12, marginTop:2 }}>Free messages</div>
                </div>
                <button style={{ background:"linear-gradient(135deg,#ff6b35,#ff8c42)", border:"none", borderRadius:20, padding:"9px 18px", color:"#fff", fontWeight:700, fontSize:13, cursor:"pointer" }}>Activate</button>
              </div>
              {[
                [["👤","Edit profile"],["📋","Additional info"],["🤖","AI profile score"],["⭐","VIP sticker"],["🔍","Looking for"]],
                [["📨","Contact support"],["❓","FAQ"],["📄","Privacy policy"]],
              ].map((group, gi) => (
                <div key={gi} style={{ margin:`0 12px ${gi===0?12:10}px`, background:"#13131f", borderRadius:16, overflow:"hidden" }}>
                  {group.map(([icon,label],i) => (
                    <div key={i} style={{ display:"flex", alignItems:"center", padding:"13px 14px", borderBottom:i<group.length-1?"1px solid #1a1a2e":"none", cursor:"pointer" }}>
                      <span style={{ fontSize:18, marginRight:12, width:22, textAlign:"center" }}>{icon}</span>
                      <span style={{ flex:1, color:"#e0e0e0", fontSize:14 }}>{label}</span>
                      <span style={{ color:"#444", fontSize:16 }}>›</span>
                    </div>
                  ))}
                </div>
              ))}
              <div style={{ margin:"0 12px 8px", padding:"9px 14px", background:"#13131f", borderRadius:16, display:"flex", gap:8, alignItems:"center" }}>
                <button style={{ background:"#1e2a4a", border:"none", borderRadius:20, padding:"7px 12px", color:"#fff", fontSize:11, cursor:"pointer" }}>Start farming ⚡</button>
                <span style={{ background:"#1e2a4a", borderRadius:20, padding:"5px 11px", color:"#7eb8ff", fontSize:11 }}>💎 1</span>
                <span style={{ background:"#1e2a4a", borderRadius:20, padding:"5px 11px", color:"#ffe066", fontSize:11 }}>⚡ 100</span>
                <button style={{ marginLeft:"auto", background:"linear-gradient(135deg,#00c6ff,#0072ff)", border:"none", borderRadius:20, padding:"7px 12px", color:"#fff", fontSize:11, cursor:"pointer" }}>Buy more</button>
              </div>
            </div>
          )}

        </div>

        {/* Tab bar */}
        <div style={s.tabBar}>
          {[["explore","🃏"],["likes","❤️"],["chats","💬"],["top","🏆"],["profile","👤"]].map(([id,icon]) => (
            <button key={id} onClick={() => setTab(id)} style={{ background:"none", border:"none", cursor:"pointer", fontSize:22, opacity:tab===id?1:0.35, transform:tab===id?"scale(1.2)":"scale(1)", transition:"all 0.2s", filter:tab===id?"drop-shadow(0 0 6px #00d4ff)":"none" }}>{icon}</button>
          ))}
        </div>

        <div style={{ position:"absolute", bottom:3, left:0, right:0, textAlign:"center", fontSize:10, color:"#2a2a3a" }}>@DategramAppBot</div>
      </div>
    </div>
  );
}