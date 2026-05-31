const STORAGE_KEY = "relationship_intelligence_pwa_v1";

const greenDefs = [
  ["warmth","Warmth","Emotional warmth, ease, affection."],
  ["kindness","Kindness","Basic goodness toward you and others."],
  ["respect","Respect","You feel respected rather than mocked, managed, or tested."],
  ["reciprocity","Reciprocity","Interest and effort move both directions."],
  ["curiosity","Curiosity","They actually want to know you."],
  ["stability","Emotional stability","Grounded enough to build with."],
  ["peace","Peace after contact","Afterward you feel peaceful, not anxious or humiliated."],
  ["attraction","Attraction","Physical / romantic pull."]
];

const riskDefs = [
  ["chaos","Chaos / drama","Volatility, crisis, or confusing energy."],
  ["trauma","Early trauma dumping","Heavy disclosure before trust exists."],
  ["entitlement","Entitlement","Expects without appreciating."],
  ["family","Family disrespect","Contempt toward family/parents that may signal broader contempt."],
  ["social","Social-media validation","Attention-seeking or comparison energy."],
  ["inconsistent","Inconsistent communication","Words and effort fluctuate in a destabilizing way."]
];

let state = loadState();

function $(id){ return document.getElementById(id); }

function loadState(){
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch(e) {}
  return { currentId: null, profiles: [] };
}

function saveState(){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  $("status").textContent = "Autosaved locally";
}

function uid(){ return "p_" + Date.now() + "_" + Math.random().toString(16).slice(2); }

function blankProfile(){
  const p = {id: uid(), name:"", rtype:"Potential romantic partner", met:"Soccer", impression:"", notes:"", green:{}, risk:{}};
  greenDefs.forEach(([k]) => p.green[k] = 5);
  riskDefs.forEach(([k]) => p.risk[k] = 3);
  return p;
}

function currentProfile(){
  if (!state.profiles.length) {
    const p = blankProfile();
    state.profiles.push(p);
    state.currentId = p.id;
  }
  return state.profiles.find(p => p.id === state.currentId) || state.profiles[0];
}

function renderSliders(){
  $("greenSliders").innerHTML = greenDefs.map(([k,label,help]) => sliderHTML("green", k, label, help, 5)).join("");
  $("riskSliders").innerHTML = riskDefs.map(([k,label,help]) => sliderHTML("risk", k, label, help, 3)).join("");
}

function sliderHTML(group, key, label, help, defaultValue){
  return `<div class="slider">
    <div class="sliderTop"><b>${label}</b><span class="bubble" id="${group}_${key}_value">${defaultValue}</span></div>
    <div class="small">${help}</div>
    <input type="range" min="0" max="10" value="${defaultValue}" id="${group}_${key}">
  </div>`;
}

function fillForm(){
  const p = currentProfile();
  $("profileTitle").textContent = "Profile: " + (p.name || "Untitled");
  $("name").value = p.name || "";
  $("rtype").value = p.rtype || "Potential romantic partner";
  $("met").value = p.met || "Soccer";
  $("impression").value = p.impression || "";
  $("notes").value = p.notes || "";

  greenDefs.forEach(([k]) => {
    const v = p.green?.[k] ?? 5;
    $(`green_${k}`).value = v;
    $(`green_${k}_value`).textContent = v;
  });
  riskDefs.forEach(([k]) => {
    const v = p.risk?.[k] ?? 3;
    $(`risk_${k}`).value = v;
    $(`risk_${k}_value`).textContent = v;
  });
}

function collectForm(){
  const p = currentProfile();
  p.name = $("name").value;
  p.rtype = $("rtype").value;
  p.met = $("met").value;
  p.impression = $("impression").value;
  p.notes = $("notes").value;
  greenDefs.forEach(([k]) => p.green[k] = Number($(`green_${k}`).value));
  riskDefs.forEach(([k]) => p.risk[k] = Number($(`risk_${k}`).value));
}

function avg(obj, defs){
  return defs.reduce((s,[k]) => s + Number(obj[k] || 0), 0) / defs.length;
}

function updateReadout(){
  const p = currentProfile();
  const g = avg(p.green, greenDefs);
  const r = avg(p.risk, riskDefs);
  const score = Math.round(Math.max(0, Math.min(100, g*10 - r*4)));
  $("meterFill").style.width = `${score}%`;

  let title = "Proceed carefully";
  let cls = "";
  let text = "Keep learning without outrunning the evidence. Watch whether peace, respect, warmth, and reciprocity increase over time.";

  if (score >= 70 && p.green.peace >= 7 && p.green.respect >= 7 && r <= 4) {
    title = "Worth continuing to explore";
    cls = "good";
    text = "The current pattern shows warmth, respect, and relatively low chaos. Keep observing slowly instead of forcing a conclusion.";
  } else if (score <= 40 || p.risk.chaos >= 8 || p.risk.inconsistent >= 8) {
    title = "Likely mismatch or boundaries needed";
    cls = "bad";
    text = "The current pattern may cost too much peace. Attraction should not override chaos, disrespect, or instability.";
  }

  if ((p.rtype || "").includes("Do not date")) {
    title = "Boundaries-first relationship";
    cls = "";
    text = "This is categorized as someone you probably should not date. The goal is organization, respect, and clear boundaries, not romantic escalation.";
  }

  $("readout").className = `readout ${cls}`;
  $("readout").innerHTML = `<b>${title}</b><br>Score: <b>${score}/100</b><br>${text}<div class="small">Green avg: ${g.toFixed(1)} / Risk avg: ${r.toFixed(1)}</div>`;

  const tips = [];
  if (p.green.warmth >= 7) tips.push("Warmth is a positive signal: connection may be nourishing, not just exciting.");
  if (p.green.peace <= 4) tips.push("Low peace after contact matters. Your body may be noticing emotional cost.");
  if (p.risk.trauma >= 7) tips.push("Early heavy disclosure can create false intimacy. Compassion is fine; pacing still matters.");
  if (p.risk.chaos >= 7) tips.push("Chaos matters because trust requires stability, repair, and predictability.");
  if (p.green.reciprocity <= 4) tips.push("Low reciprocity means you may be carrying the interaction.");
  if (p.green.respect >= 7) tips.push("Respect is foundational. Attraction without respect often becomes destabilizing.");
  if (!tips.length) tips.push("Keep collecting concrete observations. One interaction is evidence, not a verdict.");

  $("guidance").innerHTML = tips.map(t => `<div class="guide">${t}</div>`).join("");
}

function renderProfiles(){
  const list = $("profileList");
  list.innerHTML = "<h3>Saved profiles</h3>";
  state.profiles.forEach(p => {
    const b = document.createElement("button");
    b.className = "profile" + (p.id === state.currentId ? " active" : "");
    b.innerHTML = `<b>${p.name || "Untitled"}</b><br><span class="small">${p.rtype || ""} · ${p.met || ""}</span>`;
    b.addEventListener("click", () => {
      collectForm();
      state.currentId = p.id;
      saveState();
      fillForm();
      renderProfiles();
      updateReadout();
    });
    list.appendChild(b);
  });
}

function onAnyChange(){
  collectForm();
  saveState();
  renderProfiles();
  updateReadout();
}

function bindEvents(){
  ["name","rtype","met","impression","notes"].forEach(id => {
    $(id).addEventListener("input", onAnyChange);
    $(id).addEventListener("change", onAnyChange);
  });

  greenDefs.forEach(([k]) => {
    $(`green_${k}`).addEventListener("input", () => {
      $(`green_${k}_value`).textContent = $(`green_${k}`).value;
      onAnyChange();
    });
  });

  riskDefs.forEach(([k]) => {
    $(`risk_${k}`).addEventListener("input", () => {
      $(`risk_${k}_value`).textContent = $(`risk_${k}`).value;
      onAnyChange();
    });
  });

  $("newBtn").addEventListener("click", () => {
    collectForm();
    const p = blankProfile();
    state.profiles.push(p);
    state.currentId = p.id;
    saveState();
    fillForm();
    renderProfiles();
    updateReadout();
  });

  $("exportBtn").addEventListener("click", () => {
    collectForm();
    saveState();
    const blob = new Blob([JSON.stringify(state, null, 2)], {type:"application/json"});
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "relationship-intelligence-backup.json";
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  });

  $("importFile").addEventListener("change", e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const imported = JSON.parse(reader.result);
        if (!Array.isArray(imported.profiles)) throw new Error("Invalid backup");
        state = imported;
        if (!state.currentId && state.profiles[0]) state.currentId = state.profiles[0].id;
        saveState();
        fillForm();
        renderProfiles();
        updateReadout();
      } catch(err) {
        alert("Could not import that backup file.");
      }
    };
    reader.readAsText(file);
  });
}

function init(){
  renderSliders();
  currentProfile();
  bindEvents();
  fillForm();
  renderProfiles();
  updateReadout();
  saveState();
  $("status").textContent = "App loaded. Autosave active.";
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}

init();
