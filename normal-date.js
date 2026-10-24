/* Ordinary dating, progressive measures, and proportional chart viewing. */
(() => {
  const $ = id => document.getElementById(id);
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char =>
    ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const fields = [
    {key:'pacing', label:'Pacing', good:'Comfortable', unclear:'Still learning', concern:'Too fast or too slow'},
    {key:'interest', label:'Mutual interest', good:'Both showing up', unclear:'Still learning', concern:'One-sided'},
    {key:'betweenDates', label:'Between-date conversation', good:'Easy and reciprocal', unclear:'Still learning', concern:'Sparse or strained'}
  ];
  const titles = {
    translationCanvas:'Conversation translation',
    bondChemistryCanvas367:'Bond chemistry',
    repairCockpitAdmirationCanvas:'Admiration symmetry',
    coupleTrajectoryCanvas342:'Relationship health',
    personalTrajectoryCanvas342:'Your experience',
    bondChemistryTrajectoryCanvas367:'Bond chemistry over time',
    admirationTrajectoryCanvas367:'Admiration over time',
    femaleTraitTrajectoryCanvas342:'Emotional and social signals',
    maleTraitTrajectoryCanvas342:'Initiative and commitment',
    workspaceRadarCanvas:'Relationship shape',
    workspacePeaceRespectCanvas:'Peace and respect over time',
    sliderTimelineCanvas:'Slider trajectory',
    radar:'Profile radar',
    selfRadarCanvas:'Self needs'
  };
  let galleryItems = [];
  let galleryIndex = 0;
  const profile = () => {
    try {
      return typeof rcCurrentProfile === 'function' ? rcCurrentProfile() : currentProfile();
    } catch (_) { return null; }
  };
  const persist = () => { if (typeof saveState === 'function') saveState(); };
  const latest = p => (p?.normalDates || []).at(-1);
  const label = value => value === 'good' ? 'Looking good' : value === 'concern' ? 'Needs attention' : 'Still learning';
  const score = value => value === 'good' ? 100 : value === 'concern' ? 0 : 50;

  function enhanceSnapshot() {
    const body = $('relationshipSnapshotBody');
    const category = $('relSnapIssueType');
    if (!body || !category || body.querySelector('#normalDateSignals420')) return;
    category.insertAdjacentHTML('afterbegin', '<option value="Normal Date">Normal Date</option>');
    category.value = 'Normal Date';
    const type = $('relSnapType');
    if (type && !type.value) type.value = 'Dating / early relationship';
    category.closest('label')?.insertAdjacentHTML('beforebegin',
      '<div class="snapshotCategoryIntro420"><b>What are you recording?</b><span>Normal Date is for everyday dating. Choose another category when you want to record a specific event or problem.</span></div>');
    category.closest('label')?.insertAdjacentHTML('afterend',
      '<fieldset id="normalDateSignals420" class="normalDateSignals420"><legend>Normal Date check-in</legend><p>Choose what you observed since the last date. "Still learning" does not count as a warning.</p>' +
      fields.map(field => '<div class="dateSignalRow420"><strong>' + field.label + '</strong><div role="group" aria-label="' + field.label + '">' +
        [['good',field.good],['unclear',field.unclear],['concern',field.concern]].map(([value, text]) =>
          '<label><input type="radio" name="normalDate_' + field.key + '" value="' + value + '"' +
          (value === 'unclear' ? ' checked' : '') + '><span>' + text + '</span></label>').join('') +
        '</div></div>').join('') + '</fieldset>');
    const polarity = $('relSnapPolarity')?.closest('label');
    const aggrieved = $('relSnapAggrieved')?.closest('label');
    const recurrence = $('relSnapRecurrence')?.closest('label');
    const title = $('relSnapIssueName');
    const event = $('relSnapEvent');
    const story = $('relSnapStory');
    const save = $('saveRelationshipSnapshotBtn');
    const update = () => {
      const normal = category.value === 'Normal Date';
      $('normalDateSignals420').hidden = !normal;
      [polarity, aggrieved, recurrence].forEach(node => { if (node) node.hidden = normal; });
      if (title) title.closest('label').hidden = normal;
      if (event) {
        event.closest('label').firstChild.textContent = normal ? 'What happened on the date? ' : 'Specific event ';
        event.placeholder = normal ? 'What did you do together? What stood out?' : 'What happened? Facts first.';
      }
      if (story) {
        story.closest('label').firstChild.textContent = normal ? 'How did it feel? ' : 'Story / interpretation ';
        story.placeholder = normal ? 'Optional: anything you want to remember before the next date.' : 'What did it seem to mean?';
      }
      if (save) save.textContent = normal ? 'Save date and open Workspace' : 'Save event and open Workspace';
    };
    category.addEventListener('change', update);
    $('relSnapProfile')?.addEventListener('change', () => {
      if (type && !type.value) type.value = 'Dating / early relationship';
    });
    update();
  }

  function saveNormalDate() {
    const selected = $('relSnapProfile')?.value;
    let p = selected === '__new__' ? null : state.profiles.find(item => item.id === selected);
    if (!p) {
      p = typeof blankProfile === 'function' ? blankProfile() : {id:String(Date.now())};
      p.snapshots ||= [];
      p.issues ||= [];
      state.profiles.push(p);
    }
    p.name = $('relSnapName')?.value.trim() || p.name || 'New relationship';
    p.rtype = $('relSnapType')?.value || p.rtype || 'Dating / early relationship';
    state.currentId = p.id;
    const signals = Object.fromEntries(fields.map(field =>
      [field.key, document.querySelector('input[name="normalDate_' + field.key + '"]:checked')?.value || 'unclear']));
    const entry = {
      id: typeof uid === 'function' ? uid() : String(Date.now()),
      created: new Date().toISOString(),
      event: $('relSnapEvent')?.value.trim() || '',
      story: $('relSnapStory')?.value.trim() || '',
      ...signals
    };
    p.normalDates ||= [];
    p.normalDates.push(entry);
    persist();
    $('relationshipSnapshotOverlay')?.classList.add('hidden');
    if (typeof fillForm === 'function') fillForm();
    if (typeof safeUpdate === 'function') safeUpdate();
    if (typeof renderRepairCockpit === 'function') renderRepairCockpit();
    const selectedProfile = $('repairCockpitProfileSelect');
    if (selectedProfile) selectedProfile.value = p.id;
    const workspace = $('tabRepairCockpit');
    workspace?.click();
    renderDashboard();
  }

  function captureSnapshotButtons(event) {
    const open = event.target.closest?.('#openRelationshipSnapshotBtn');
    if (open) {
      event.preventDefault();
      event.stopImmediatePropagation();
      openRelationshipSnapshot332();
      enhanceSnapshot();
      return;
    }
    const save = event.target.closest?.('#saveRelationshipSnapshotBtn');
    if (save && $('relSnapIssueType')?.value === 'Normal Date') {
      event.preventDefault();
      event.stopImmediatePropagation();
      saveNormalDate();
    }
  }

  function signalRead(entry, field) {
    const value = entry?.[field.key];
    return '<div class="signalRead420 ' + (value || 'empty') + '"><b>' + field.label +
      '</b><strong>' + (value ? label(value) : 'No read yet') + '</strong><span>' +
      (value === 'good' ? field.good : value === 'concern' ? field.concern :
        value === 'unclear' ? field.unclear : 'Log a normal date') + '</span></div>';
  }

  function chartSvg(p) {
    const entries = (p?.normalDates || []).slice(-12);
    if (!entries.length) return '<p class="noData420">Save a Normal Date check-in to start these trajectories.</p>';
    const width = 800, height = 260, left = 48, right = 26, top = 26, bottom = 42;
    const plotWidth = width - left - right, plotHeight = height - top - bottom;
    const colors = ['#087f70','#c56b42','#5175a6'];
    const x = index => left + (entries.length === 1 ? plotWidth / 2 : index * plotWidth / (entries.length - 1));
    const y = value => top + plotHeight * (1 - value / 100);
    const grid = [0,50,100].map(value =>
      '<line x1="' + left + '" y1="' + y(value) + '" x2="' + (width-right) + '" y2="' + y(value) +
      '" stroke="#dbe7e7"/><text x="9" y="' + (y(value)+4) + '" fill="#64777c" font-size="12">' + value + '</text>').join('');
    const lines = fields.map((field, fieldIndex) => {
      const points = entries.map((entry,index) => x(index) + ',' + y(score(entry[field.key]))).join(' ');
      return '<polyline fill="none" stroke="' + colors[fieldIndex] + '" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" points="' + points + '"/>' +
        entries.map((entry,index) => '<circle cx="' + x(index) + '" cy="' + y(score(entry[field.key])) +
          '" r="5" fill="' + colors[fieldIndex] + '"><title>' + escape(field.label + ': ' + label(entry[field.key]) +
            ' · ' + new Date(entry.created).toLocaleDateString()) + '</title></circle>').join('');
    }).join('');
    const labels = entries.map((entry,index) => '<text x="' + x(index) + '" y="245" text-anchor="middle" fill="#64777c" font-size="11">' +
      escape(new Date(entry.created).toLocaleDateString(undefined,{month:'short',day:'numeric'})) + '</text>').join('');
    return '<svg viewBox="0 0 800 260" role="img" aria-label="Normal Date pacing, mutual interest and between-date conversation over time">' +
      grid + lines + labels + '</svg><div class="dateChartLegend420">' +
      fields.map((field,index) => '<span><i style="background:' + colors[index] + '"></i>' + field.label + '</span>').join('') +
      '</div><p class="chartScaleNote420">Top: looking good · middle: still learning · bottom: needs attention</p>';
  }

  function measure(p, key, title) {
    const value = p?.coupleQualities?.[key];
    if (value == null) return '<div class="coupleMeasure420"><b>' + title + '</b><span>Not rated</span></div>';
    const percent = Math.max(0,Math.min(100,Number(value)*10));
    return '<div class="coupleMeasure420"><b>' + title + '</b><div class="coupleTrack420"><i style="width:' +
      percent + '%"></i></div><strong>' + percent + '%</strong></div>';
  }

  function ensureDashboard() {
    const view = $('repairCockpitView');
    const top = view?.querySelector('.workspaceTop346');
    if (!top) return;
    if (!$('datingDashboard420')) top.insertAdjacentHTML('afterend',
      '<div id="datingDashboard420" class="datingDashboard420" aria-live="polite"></div>');
    const hub = $('workspaceFocusHub370');
    if (hub) {
      const title = hub.querySelector('h3');
      if (title) title.textContent = 'Need a second opinion?';
      const description = $('focusSummary370');
      if (description) description.textContent = 'Your measurements are above. Open the coach for questions or the counselor when something needs repair.';
      hub.querySelector('.focusStatus370')?.remove();
      const left = view.querySelector('.workspaceLeft335');
      if (left && hub.parentNode !== left) left.appendChild(hub);
    }
    const builder = $('conversationBuilderPanel335');
    const counselor = $('issuePopoutBody370');
    if (builder && counselor) counselor.appendChild(builder);
  }

  function renderDashboard() {
    ensureDashboard();
    const target = $('datingDashboard420');
    if (!target) return;
    const selectedId = $('repairCockpitProfileSelect')?.value;
    const p = state?.profiles?.find(item => item.id === selectedId) ||
      state?.profiles?.find(item => item.id === state.currentId) || profile();
    const recent = latest(p);
    const count = p?.normalDates?.length || 0;
    const hasCouple = !!(p?.coupleQualities && Object.keys(p.coupleQualities).length);
    const summary = recent ? new Date(recent.created).toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'}) : 'No date logged yet';
    const compact = $('workspaceCompactSummary346')?.querySelector('span');
    const realIssue = (p?.issues || []).some(issue =>
      issue.title !== 'Current relationship issue' || issue.event !== 'No event entered yet.');
    if (compact && recent && !realIssue) compact.textContent = 'Latest date: ' + summary;
    target.innerHTML =
      '<div class="dashboardHeading420"><div><span>Relationship dashboard</span><h2>' + escape(p?.name || 'Your relationship') +
      '</h2><p>Latest date: ' + summary + ' · ' + count + ' check-in' + (count === 1 ? '' : 's') +
      '</p></div><button id="logNormalDate420" type="button">Log a date</button></div>' +
      '<div class="stageLine420"><div class="stageCurrent420"><span>01</span><b>Getting to know each other</b><small>Dates, pacing, interest, conversation</small></div>' +
      '<div class="' + (hasCouple ? 'stageCurrent420' : 'stageLater420') +
      '"><span>02</span><b>Building a relationship</b><small>Peace, respect, repair, shared life</small></div></div>' +
      '<div class="dashboardSignals420">' + fields.map(field => signalRead(recent,field)).join('') + '</div>' +
      '<div class="dashboardChart420"><div><h3>Normal Date trends</h3><button id="openDateChart420" type="button" class="secondary">Explore charts</button></div>' +
      chartSvg(p) + '</div>' +
      '<div class="dashboardLongTerm420"><div><h3>Relationship measures</h3><p>' +
      (hasCouple ? 'Your current couple-level read.' : 'These become useful once you are building a shared life.') +
      '</p></div><div>' +
      measure(p,'positivityTogether','Peace together') +
      measure(p,'admirationSymmetry','Respect and admiration') +
      measure(p,'repairCulture','Repair') +
      measure(p,'teamwork','Teamwork') +
      '</div><button id="editCoupleFromDashboard420" type="button" class="secondary">' +
      (hasCouple ? 'Update couple measures' : 'Start couple measures') + '</button></div>';
    $('logNormalDate420').onclick = () => {
      openRelationshipSnapshot332();
      enhanceSnapshot();
      $('relSnapIssueType').value = 'Normal Date';
      $('relSnapIssueType').dispatchEvent(new Event('change'));
    };
    $('openDateChart420').onclick = () => openGallery('normal-date');
    $('editCoupleFromDashboard420').onclick = () => $('openSliderWizardBtn')?.click();
  }

  function chartList() {
    const canvases = [...document.querySelectorAll('#repairCockpitView canvas, #meView canvas, #personView canvas')];
    const items = [{id:'normal-date',title:'Normal Date trends',kind:'svg'}];
    canvases.forEach(canvas => {
      if (!canvas.id || canvas.width < 150 || canvas.height < 100) return;
      const title = titles[canvas.id] || canvas.closest('.outputCanvas,.workspaceSection')?.querySelector('h3,h4')?.textContent?.trim() || 'Chart';
      items.push({id:canvas.id,title,kind:'canvas'});
      if (!canvas.parentNode.querySelector('.chartOpen420[data-chart-for="' + canvas.id + '"]')) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'chartOpen420 secondary';
        button.dataset.chartFor = canvas.id;
        button.textContent = 'View chart';
        button.setAttribute('aria-label','View ' + title + ' in chart gallery');
        button.onclick = () => openGallery(canvas.id);
        canvas.parentNode.insertBefore(button,canvas);
      }
    });
    return items;
  }

  function ensureGallery() {
    if ($('chartGallery420')) return;
    document.body.insertAdjacentHTML('beforeend',
      '<div id="chartGallery420" class="chartGallery420 hidden" role="dialog" aria-modal="true" aria-labelledby="chartGalleryTitle420">' +
      '<div class="chartGalleryCard420"><header><div><span>Relationship charts</span><h2 id="chartGalleryTitle420">Explore your data</h2></div>' +
      '<button id="closeChartGallery420" type="button" class="secondary">Close</button></header>' +
      '<div class="chartGalleryBody420"><nav id="chartGalleryNav420" aria-label="Charts"></nav>' +
      '<div class="chartGalleryMain420"><div id="chartGalleryFrame420"></div><p id="chartGalleryFoot420"></p></div></div></div></div>');
    $('closeChartGallery420').onclick = closeGallery;
    $('chartGallery420').addEventListener('click',event => {if(event.target.id === 'chartGallery420') closeGallery();});
    document.addEventListener('keydown',event => {if(event.key === 'Escape') closeGallery();});
  }
  function closeGallery() {
    $('chartGallery420')?.classList.add('hidden');
    document.body.classList.remove('chartGalleryOpen420');
  }
  function showGallery(index) {
    galleryIndex = index;
    const item = galleryItems[index], frame = $('chartGalleryFrame420'), nav = $('chartGalleryNav420');
    if (!item || !frame || !nav) return;
    nav.innerHTML = galleryItems.map((entry,i) => '<button type="button" class="' + (i === index ? 'active' : '') +
      '" data-chart-index="' + i + '">' + escape(entry.title) + '</button>').join('');
    nav.querySelectorAll('button').forEach(button => button.onclick = () => showGallery(Number(button.dataset.chartIndex)));
    $('chartGalleryTitle420').textContent = item.title;
    if (item.kind === 'svg') {
      frame.innerHTML = chartSvg(profile());
      $('chartGalleryFoot420').textContent = 'Each point is one saved Normal Date check-in. Hover a point for its date and read.';
      return;
    }
    const source = $(item.id);
    if (!source) return;
    const image = document.createElement('img');
    image.alt = item.title;
    image.width = source.width;
    image.height = source.height;
    image.src = source.toDataURL('image/png');
    frame.replaceChildren(image);
    $('chartGalleryFoot420').textContent = 'Shown at its original resolution and proportions.';
  }
  function openGallery(id) {
    ensureGallery();
    galleryItems = chartList();
    const index = Math.max(0,galleryItems.findIndex(item => item.id === id));
    $('chartGallery420').classList.remove('hidden');
    document.body.classList.add('chartGalleryOpen420');
    showGallery(index);
  }

  function init() {
    document.addEventListener('click',captureSnapshotButtons,true);
    ensureDashboard();
    ensureGallery();
    renderDashboard();
    chartList();
    document.addEventListener('change',event => {
      if (event.target?.id === 'repairCockpitProfileSelect') setTimeout(renderDashboard, 80);
    });
    const originalRender = window.renderRepairCockpit;
    if (typeof originalRender === 'function') {
      window.renderRepairCockpit = function(...args) {
        const result = originalRender.apply(this,args);
        renderDashboard();
        chartList();
        return result;
      };
    }
    setTimeout(() => {ensureDashboard();renderDashboard();chartList();},1600);
    setTimeout(() => {ensureDashboard();renderDashboard();chartList();},4300);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',init);
  else init();
})();
