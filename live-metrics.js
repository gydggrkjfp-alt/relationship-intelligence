/* Charts and readouts sourced only from saved relationship inputs. */
(() => {
  const $ = id => document.getElementById(id);
  const escape = value => String(value ?? '').replace(/[&<>"']/g, char =>
    ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const scaled = value => value == null || value === '' || !Number.isFinite(Number(value))
    ? null : Math.max(0, Math.min(100, Number(value) * 10));
  const selectedProfile = () => {
    const id = $('repairCockpitProfileSelect')?.value || state.currentId;
    return (state.profiles || []).find(item => item.id === id) || null;
  };
  const when = row => new Date(row.created || 0).getTime() || 0;
  const dated = rows => rows.filter(Boolean).sort((a,b) => when(a)-when(b));
  const has = (row, keys) => keys.some(key => row[key] != null && Number.isFinite(Number(row[key])));

  function isTemplateHistory(rows) {
    if (!Array.isArray(rows) || rows.length < 12) return false;
    return rows.slice(0,12).every((row,index) =>
      row.created?.slice(0,10) === `2025-${String(index+1).padStart(2,'0')}-01`);
  }
  function realHistory(rows) {
    if (!Array.isArray(rows)) return [];
    return isTemplateHistory(rows) ? rows.slice(12) : rows;
  }
  const dateRows = p => dated(p?.normalDates || []);
  const casualRows = p => dated(realHistory(p?.casualHistory));
  const coupleRows = p => dated(p?.coupleQualitiesHistory || []);
  const sliderRows = p => dated(p?.sliderHistory || []);

  function healthRows(p) {
    const fromCouple = coupleRows(p).map(row => ({created:row.created,
      peace:scaled(row.positivityTogether), respect:scaled(row.admirationSymmetry),
      repair:scaled(row.repairCulture), teamwork:scaled(row.teamwork)}));
    const fromSliders = sliderRows(p).map(row => ({created:row.created,
      peace:scaled(row.peace), respect:scaled(row.respect), repair:scaled(row.repair),
      teamwork:scaled(row.reciprocity)}));
    return dated([...fromCouple,...fromSliders]).filter(row => has(row,['peace','respect','repair','teamwork']));
  }
  function experienceRows(p) {
    const fromDates = dateRows(p).map(row => ({created:row.created,
      attraction:scaled(row.attraction), calm:scaled(row.peace), energy:scaled(row.energy)}));
    const fromWizard = casualRows(p).map(row => ({created:row.created,
      attraction:scaled(row.personalExcitement), calm:scaled(row.personalPeace),
      energy:scaled(row.personalEnergyGain)}));
    return dated([...fromDates,...fromWizard]).filter(row => has(row,['attraction','calm','energy']));
  }
  function chemistryRows(p) {
    const fromDates = dateRows(p).filter(row => row.activation != null && row.warmth != null &&
      Number(row.activation) + Number(row.warmth) > 0).map(row => {
      const excitement = Math.round(Number(row.activation) /
        (Number(row.activation) + Number(row.warmth)) * 100);
      return {created:row.created, excitement, bonding:100-excitement};
    });
    const fromWizard = (p?.bondChemistry367?.history || []).map(row => ({created:row.created,
      excitement:Number(row.dopamine), bonding:Number(row.oxytocin ?? 100-Number(row.dopamine))}));
    return dated([...fromDates,...fromWizard]).filter(row => has(row,['excitement','bonding']));
  }
  function admirationRows(p) {
    const fromCouple = coupleRows(p).map(row => ({created:row.created,
      admiration:scaled(row.admirationSymmetry)}));
    const fromSliders = sliderRows(p).map(row => ({created:row.created,
      admiration:scaled(row.admiration)}));
    return dated([...fromCouple,...fromSliders]).filter(row => has(row,['admiration']));
  }
  function partnerRows(p) {
    return casualRows(p).map(row => ({created:row.created,
      warmth:scaled(row.warmth), respect:scaled(row.respect),
      reciprocity:scaled(row.reciprocity), clarity:scaled(row.clarity)}))
      .filter(row => has(row,['warmth','respect','reciprocity','clarity']));
  }
  function optionalRows(p, keys) {
    return casualRows(p).map(row => Object.fromEntries([['created',row.created],
      ...keys.map(key => [key,scaled(row[key])])])).filter(row => has(row,keys));
  }

  const charts = {
    date:{title:'Normal Date',source:'Your saved pacing, mutual-interest, and between-date conversation choices.',action:'Log a date',target:'logNormalDate420'},
    health:{title:'Relationship health',source:'Saved couple measures: positivity, admiration, repair, and teamwork. Earlier relationship-slider check-ins also count.',action:'Rate couple measures',target:'openSliderWizardBtn'},
    experience:{title:'Your experience',source:'Your explicit attraction, calm, and energy ratings from dates or the personal-feeling sliders.',action:'Rate personal feelings',target:'openCasualTrackerWizardBtn'},
    chemistry:{title:'Bond chemistry',source:'Your reported anticipation/activation versus settled warmth. This is a reflection, not a measurement of dopamine or oxytocin.',action:'Rate bond chemistry',target:'openBondChemistryWizardBtn'},
    admiration:{title:'Admiration',source:'Saved admiration-symmetry ratings from couple measures or relationship-slider check-ins.',action:'Rate couple measures',target:'openSliderWizardBtn'},
    partner:{title:'Partner signals',source:'Saved general partner-signal ratings. Unrated signals are omitted.',action:'Rate partner signals',target:'openCasualTrackerWizardBtn'}
  };
  let active = 'date';

  function draw(canvasId, rows, lines, empty) {
    const canvas = $(canvasId);
    if (!canvas) return;
    canvas.width = 1000;
    canvas.height = 400;
    canvas.style.width = '100%';
    canvas.style.height = 'auto';
    const ctx = canvas.getContext('2d'), w=canvas.width, h=canvas.height;
    const left=64,right=30,top=57,bottom=60,plotW=w-left-right,plotH=h-top-bottom;
    ctx.clearRect(0,0,w,h);
    ctx.fillStyle='#fff';ctx.fillRect(0,0,w,h);
    ctx.font='13px sans-serif';ctx.textBaseline='middle';
    [0,25,50,75,100].forEach(value => {
      const y=top+plotH*(1-value/100);
      ctx.strokeStyle='#e1e9e8';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(left,y);ctx.lineTo(w-right,y);ctx.stroke();
      ctx.fillStyle='#627579';ctx.fillText(String(value),left-35,y);
    });
    if (!rows.length) {
      ctx.fillStyle='#5b7074';ctx.font='16px sans-serif';
      ctx.fillText(empty,w/2-ctx.measureText(empty).width/2,h/2);
      return;
    }
    const x = index => left + (rows.length===1 ? plotW/2 : index*plotW/(rows.length-1));
    const y = value => top+plotH*(1-value/100);
    lines.forEach((line,index) => {
      ctx.fillStyle=line.color;ctx.fillRect(left+index*210,18,17,4);
      ctx.font='13px sans-serif';ctx.fillText(line.label,left+index*210+24,20);
      ctx.beginPath();let started=false;
      rows.forEach((row,i) => {
        const value=row[line.key];
        if (value == null) {started=false;return;}
        if (!started) {ctx.moveTo(x(i),y(value));started=true;}
        else ctx.lineTo(x(i),y(value));
      });
      ctx.strokeStyle=line.color;ctx.lineWidth=3;ctx.stroke();
      rows.forEach((row,i) => {
        if (row[line.key] == null) return;
        ctx.beginPath();ctx.arc(x(i),y(row[line.key]),5,0,Math.PI*2);
        ctx.fillStyle=line.color;ctx.fill();
      });
    });
    ctx.font='12px sans-serif';ctx.fillStyle='#627579';
    rows.forEach((row,index) => {
      if (rows.length>8 && index%Math.ceil(rows.length/7)!==0 && index!==rows.length-1) return;
      const date = new Date(row.created);
      const label = Number.isNaN(date.getTime()) ? `Check-in ${index+1}` :
        date.toLocaleDateString(undefined,{month:'short',day:'numeric'});
      ctx.textAlign='center';ctx.fillText(label,x(index),h-27);
    });
    ctx.textAlign='left';
  }

  function drawAll(p) {
    draw('coupleTrajectoryCanvas342',healthRows(p),[
      {key:'peace',label:'Positivity / peace',color:'#087f70'},
      {key:'respect',label:'Admiration',color:'#bb6b48'},
      {key:'repair',label:'Repair',color:'#5075a7'},
      {key:'teamwork',label:'Teamwork',color:'#8b6f9b'}],
      'No relationship-health ratings yet. Rate couple measures to begin.');
    draw('personalTrajectoryCanvas342',experienceRows(p),[
      {key:'attraction',label:'Attraction',color:'#bb6b48'},
      {key:'calm',label:'Calm / trust',color:'#087f70'},
      {key:'energy',label:'Energy after contact',color:'#5075a7'}],
      'No personal-feeling ratings yet. Add them to a date or the slider wizard.');
    draw('bondChemistryTrajectoryCanvas367',chemistryRows(p),[
      {key:'excitement',label:'Excitement / activation',color:'#bb6b48'},
      {key:'bonding',label:'Settled warmth',color:'#087f70'}],
      'No chemistry ratings yet. Rate activation and warmth for an interaction.');
    draw('admirationTrajectoryCanvas367',admirationRows(p),[
      {key:'admiration',label:'Admiration symmetry',color:'#5075a7'}],
      'No admiration ratings yet. Save a couple-measures check-in.');
    draw('partnerTrajectoryCanvas421',partnerRows(p),[
      {key:'warmth',label:'Warmth',color:'#087f70'},
      {key:'respect',label:'Respect',color:'#bb6b48'},
      {key:'reciprocity',label:'Reciprocity',color:'#5075a7'},
      {key:'clarity',label:'Clarity',color:'#8b6f9b'}],
      'No partner-signal ratings yet. Save a general-signal check-in.');
    draw('femaleTraitTrajectoryCanvas342',optionalRows(p,['femaleEmotionalMaturity','femaleBuildsUp','femaleGatekeeping']),[
      {key:'femaleEmotionalMaturity',label:'Emotional maturity',color:'#087f70'},
      {key:'femaleBuildsUp',label:'Builds up',color:'#bb6b48'},
      {key:'femaleGatekeeping',label:'Privacy / dignity',color:'#5075a7'}],
      'No optional signal ratings yet.');
    draw('maleTraitTrajectoryCanvas342',optionalRows(p,['malePlansDates','maleFollowThrough','maleCommitmentClarity']),[
      {key:'malePlansDates',label:'Plans dates',color:'#087f70'},
      {key:'maleFollowThrough',label:'Follow-through',color:'#bb6b48'},
      {key:'maleCommitmentClarity',label:'Commitment clarity',color:'#5075a7'}],
      'No optional signal ratings yet.');
  }

  function bar(title,key,source) {
    const value = source?.[key];
    if (value == null) return '<div class="liveBar421"><b>' + escape(title) + '</b><span>Not rated</span></div>';
    const percent = scaled(value);
    return '<div class="liveBar421"><b>' + escape(title) + '</b><div><i style="width:' + percent + '%"></i></div><strong>' + value + ' / 10</strong></div>';
  }
  function renderBars(p) {
    const target=$('casualTrackerBars');if(!target)return;
    const history=casualRows(p);
    const source={};
    history.forEach(row => Object.entries(row).forEach(([key,value]) => {
      if(value != null && key!=='created') source[key]=value;
    }));
    const dims=[['warmth','Warmth'],['respect','Respect'],['peace','Peace after contact'],
      ['reciprocity','Reciprocity'],['attraction','Attraction'],['clarity','Clarity'],
      ['followThrough','Follow-through'],['socialFit','Social fit']];
    target.innerHTML='<div class="liveBarGroup421"><h4>General partner signals</h4><p>Most recent saved rating for each signal. Blank means it has not been rated.</p>'+
      dims.map(([key,title]) => bar(title,key,source[key+'_na'] ? null : source)).join('') + '</div>';
    const couple=$('profileBarDashboard');
    if(couple){const latest={};coupleRows(p).forEach(row => Object.entries(row).forEach(([key,value]) => {
      if(value != null && key!=='created') latest[key]=value;
    }));
      couple.innerHTML='<div class="liveBarGroup421"><h4>Couple measures</h4><p>Most recent saved rating for each measure.</p>'+
        [['positivityTogether','Positivity'],['admirationSymmetry','Admiration'],
          ['repairCulture','Repair'],['teamwork','Teamwork']].map(([key,title]) => bar(title,key,latest)).join('')+'</div>';
    }
  }

  function setupLayout() {
    const view=$('repairCockpitView'), top=view?.querySelector('.workspaceTop346');
    const trends=$('relationshipTrends347');
    if (!top || !trends) return;
    top.after(trends);
    $('workspaceGraphicalOutputs')?.classList.add('legacyGaugesHidden421');
    $('bondChemistryPanel367')?.classList.add('legacyGaugesHidden421');
    $('repairCockpitSourceStrip')?.classList.add('legacyGaugesHidden421');
    $('workspaceRelationshipSummary')?.classList.add('legacyGaugesHidden421');
    $('admirationPanel335')?.classList.add('legacyGaugesHidden421');
    if ($('liveTrendTabs421')) return;
    const group=$('trajectoryCharts342');
    group.insertAdjacentHTML('beforebegin','<div id="liveTrendTabs421" class="liveTrendTabs421" role="tablist" aria-label="Relationship trends"></div>'+
      '<div class="liveTrendTools421"><p id="liveTrendSource421"></p><button type="button" id="liveTrendAction421" class="secondary"></button></div>');
    group.insertAdjacentHTML('afterbegin','<div id="liveDateChart421" class="liveDateChart421"></div>');
    group.querySelector(':scope > .dualTrajectory342')?.insertAdjacentHTML('beforeend',
      '<div class="outputCanvas" id="livePartnerChart421"><h4>Partner signals</h4><canvas id="partnerTrajectoryCanvas421" width="1000" height="400"></canvas></div>');
    trends.querySelector('p.small')?.remove();
    const timeline=$('snapshotTimeline336');if(timeline)trends.appendChild(timeline);
  }
  function renderTabs(p) {
    const tabs=$('liveTrendTabs421');if(!tabs)return;
    tabs.innerHTML=Object.entries(charts).map(([key,chart]) =>
      '<button type="button" role="tab" aria-selected="' + (key===active) + '" data-live-tab="' + key + '">' +
      escape(chart.title) + '</button>').join('');
    tabs.querySelectorAll('button').forEach(button => button.onclick=() => {active=button.dataset.liveTab;renderTabs(p);});
    const chart=charts[active];
    $('liveTrendSource421').textContent=chart.source;
    const action=$('liveTrendAction421');action.textContent=chart.action;
    action.onclick=() => $(chart.target)?.click();
    const date=$('liveDateChart421');
    date.innerHTML=window.riDateChartSvg420 ? window.riDateChartSvg420(p) +
      '<button type="button" class="secondary" id="openDateGallery421">View chart</button>' : '';
    $('openDateGallery421')?.addEventListener('click',() => window.riOpenChartGallery420?.('normal-date'));
    date.hidden=active!=='date';
    const mapping={health:'coupleTrajectoryCanvas342',experience:'personalTrajectoryCanvas342',
      chemistry:'bondChemistryTrajectoryCanvas367',admiration:'admirationTrajectoryCanvas367',
      partner:'partnerTrajectoryCanvas421'};
    const optional=trendsOptional();
    document.querySelectorAll('#trajectoryCharts342 .outputCanvas').forEach(node => {
      if(node.closest('.trendDetails347')) {node.hidden=false;return;}
      const id=node.querySelector('canvas')?.id;
      node.hidden=mapping[active]!==id;
    });
    optional.hidden=active!=='partner';
    optional.open=active==='partner';
    $('liveTrendCount421')?.remove();
    const count={date:dateRows(p).length,health:healthRows(p).length,
      experience:experienceRows(p).length,chemistry:chemistryRows(p).length,
      admiration:admirationRows(p).length,partner:partnerRows(p).length}[active];
    const selectedCanvas=mapping[active] && $(mapping[active]);
    if(selectedCanvas){
      selectedCanvas.hidden=count===0;
      const panel=selectedCanvas.closest('.outputCanvas');
      panel.querySelector('.liveEmpty421')?.remove();
      if(!count)panel.insertAdjacentHTML('beforeend','<p class="liveEmpty421">No ' +
        escape(chart.title.toLowerCase()) + ' check-ins yet. ' + escape(chart.source) + '</p>');
      const open=panel.querySelector('.chartOpen420');if(open)open.hidden=count===0;
    }
    $('liveTrendSource421').insertAdjacentHTML('afterend','<span id="liveTrendCount421">' + count +
      ' saved check-in' + (count===1?'':'s') + '</span>');
  }
  function trendsOptional() {return $('relationshipTrends347').querySelector('.trendDetails347:not(#snapshotTimeline336)');}
  function renderLive() {
    setupLayout();
    const p=selectedProfile();if(!p)return;
    const placeholderOnly=(p.issues || []).every(issue =>
      ['Current relationship issue','Untitled issue'].includes(issue.title));
    const header=$('workspaceCompactSummary346')?.querySelector('span');
    const lastDate=dateRows(p).at(-1);
    if(header && lastDate && placeholderOnly) header.textContent='Latest date: '+
      new Date(lastDate.created).toLocaleDateString();
    drawAll(p);
    renderBars(p);
    renderTabs(p);
  }
  function later() {setTimeout(renderLive,680);}
  function init() {
    renderLive();later();setTimeout(renderLive,4300);
    document.addEventListener('change',event => {
      if(event.target?.id==='repairCockpitProfileSelect') later();
    });
    document.addEventListener('click',event => {
      if(event.target?.closest?.('#saveRelationshipSnapshotBtn,#saveCasualTrackerWizardBtn,#saveBondChemistryWizardBtn367,#sliderWizardSaveBtn')) later();
    });
    const prior=window.renderRepairCockpit;
    if(typeof prior==='function') window.renderRepairCockpit=function(...args){const result=prior.apply(this,args);later();return result;};
    const oldSafe=window.safeUpdate;
    if(typeof oldSafe==='function') window.safeUpdate=function(...args){const result=oldSafe.apply(this,args);later();return result;};
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);
  else init();
})();
