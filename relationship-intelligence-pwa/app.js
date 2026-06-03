const STORAGE_KEY='relationship_intelligence_pwa_v8';
const greenDefs=[['warmth','Warmth','Emotional warmth, ease, affection.'],['kindness','Kindness','Basic goodness toward you and others.'],['respect','Baseline respect','General respect signal from the core profile.'],['reciprocity','Reciprocity','Interest and effort move both directions.'],['curiosity','Curiosity','They actually want to know you.'],['stability','Emotional stability','Grounded enough to build with.'],['peace','Peace after contact','Afterward you feel peaceful, not anxious or humiliated.'],['attraction','Attraction','Physical / romantic pull.']];
const riskDefs=[['chaos','Chaos / drama','Volatility, crisis, or confusing energy.'],['trauma','Early trauma dumping','Heavy disclosure before trust exists.'],['entitlement','Entitlement','Expects without appreciating.'],['family','Family disrespect','Contempt toward family/parents.'],['social','Social-media validation','Attention-seeking or comparison energy.'],['inconsistent','Inconsistent communication','Words and effort fluctuate in a destabilizing way.']];
const respectDefs=[['opinion','Values your opinions','Does she take your perspective seriously?'],['appreciation','Expresses appreciation','Does she notice and value your effort?'],['commitments','Keeps commitments','Does she follow through reliably?'],['proud','Proud to be associated','Would she speak well of you to others?'],['time','Respects your time','Is she considerate with scheduling and effort?'],['boundaries','Respects boundaries','Does she honor limits without punishment?']];
const socialDefs=[['menRespect','How she talks about men','Respectful, fair, non-contemptuous talk about men.','Contemptuous','Respectful',true],['friendsSupport','Friend group supports stable love','Her close group seems to reward commitment, respect, and healthy relationships.','Undermining','Supportive',true],['statusPressure','Status / hypergamy pressure','How much status, prestige, and social comparison seem to drive mate choice.','Low pressure','High pressure',false],['peerPolicing','In-group policing pressure','How much her group seems to enforce norms through shame, gossip, or status games.','Low pressure','High pressure',false],['occupationNorms','Occupation/social-world fit','Her social/occupational world seems compatible with your values and lifestyle.','Poor fit','Strong fit',true],['maleFemaleEase','Ease with men','She seems able to talk with men as people, not as opponents, providers, or status objects.','Low ease','High ease',true]];
const needDefs=[['needWarmth','Warmth','How much you need emotional warmth.'],['needRespect','Respect','How non-negotiable respect is.'],['needAppreciation','Appreciation','How much you need gratitude and admiration.'],['needIntellect','Intellectual connection','How much depth matters.'],['needAdventure','Adventure / activity','How much shared activity matters.'],['needStability','Stability','How much groundedness matters.'],['needFaith','Faith / values','How much shared values matter.'],['needFamily','Family orientation','How much family respect matters.'],['needAffection','Physical affection','How much touch and affection matter.'],['needIndependence','Independence','How much autonomy matters.']];
const tendencyDefs=[['movesFast','Move too quickly','You may escalate before enough evidence exists.'],['scarcity','Scarcity mindset','You may overvalue attention because opportunities feel rare.'],['peoplePleaser','People pleasing','You may avoid speaking up or tolerate too much.'],['rescuer','Rescuer pattern','You may mistake being needed for being loved.'],['idealizer','Over-romanticize potential','You may fall for possibility instead of evidence.'],['conflictAvoidant','Conflict avoidant','You may avoid hard conversations.'],['attractionOverride','Attraction override','You may let attraction outrank peace.'],['fearRejection','Fear rejection','You may accept poor fit to avoid losing connection.']];
let state=loadState();let currentFilter='All';function $(id){return document.getElementById(id)}
function defaultMe(){let needs={};needDefs.forEach(([k])=>needs[k]=5);return{name:'',needs,tendencies:{},philosophy:''}}
function loadState(){try{let raw=localStorage.getItem(STORAGE_KEY);if(raw)return JSON.parse(raw);for(let key of ['relationship_intelligence_pwa_v7','relationship_intelligence_pwa_v6','relationship_intelligence_pwa_v5','relationship_intelligence_pwa_v4','relationship_intelligence_pwa_v3','relationship_intelligence_pwa_v2','relationship_intelligence_pwa_v1']){let old=localStorage.getItem(key);if(old)return migrate(JSON.parse(old));}}catch(e){}return{currentId:null,profiles:[],me:defaultMe()}}
function migrate(s){s.me=s.me||defaultMe();s.profiles=(s.profiles||[]).map(p=>{p={...p,evidence:p.evidence||'',interpretation:p.interpretation||'',hesitation:p.hesitation||'',socialNotes:p.socialNotes||'',desiredOutcome:p.desiredOutcome||'Explore slowly',rtype:p.rtype==='Potential romantic partner'?'Romantic prospect':(p.rtype||'Romantic prospect')};p.social=p.social||{};p.respect=p.respect||{};socialDefs.forEach(([k,,,,good])=>{if(p.social[k]===undefined)p.social[k]=good?5:3});respectDefs.forEach(([k])=>{if(p.respect[k]===undefined)p.respect[k]=5});p.snapshots=p.snapshots||[];return p});return s}
function saveState(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state));$('status').textContent='Autosaved locally'}
function uid(){return'p_'+Date.now()+'_'+Math.random().toString(16).slice(2)}
function blankProfile(){let p={id:uid(),name:'',rtype:'Romantic prospect',met:'Soccer',desiredOutcome:'Explore slowly',socialNotes:'',impression:'',evidence:'',interpretation:'',hesitation:'',notes:'',green:{},risk:{},respect:{},social:{},snapshots:[]};greenDefs.forEach(([k])=>p.green[k]=5);riskDefs.forEach(([k])=>p.risk[k]=3);respectDefs.forEach(([k])=>p.respect[k]=5);socialDefs.forEach(([k,,,,good])=>p.social[k]=good?5:3);return p}
function currentProfile(){if(!state.profiles.length){let p=blankProfile();state.profiles.push(p);state.currentId=p.id}return state.profiles.find(p=>p.id===state.currentId)||state.profiles[0]}
function renderSliders(){$('greenSliders').innerHTML=greenDefs.map(([k,l,h])=>sliderHTML('green',k,l,h,5,'Low','High',true)).join('');$('riskSliders').innerHTML=riskDefs.map(([k,l,h])=>sliderHTML('risk',k,l,h,3,'Low concern','High concern',false)).join('');$('respectSliders').innerHTML=respectDefs.map(([k,l,h])=>sliderHTML('respect',k,l,h,5,'Low','High',true)).join('');$('socialSliders').innerHTML=socialDefs.map(([k,l,h,left,right,good])=>sliderHTML('social',k,l,h,good?5:3,left,right,good)).join('');$('needSliders').innerHTML=needDefs.map(([k,l,h])=>sliderHTML('need',k,l,h,5,'Low need','High need',true)).join('');$('tendencyChecks').innerHTML=tendencyDefs.map(([k,l,h])=>`<label class='check'><input type='checkbox' id='t_${k}'><span><b>${l}</b><span class='small'>${h}</span></span></label>`).join('')}
function sliderHTML(g,k,l,h,d,left,right,good){return`<div class='slider'><div class='sliderTop'><b>${l}</b><span class='bubble' id='${g}_${k}_value'>${d}</span></div><div class='small'>${h}</div><input type='range' min='0' max='10' value='${d}' id='${g}_${k}'><div class='scaleLabels'><span>${left}</span><span class='${good?'goodSide':'riskSide'}'>${right}</span></div></div>`}
function fillForm(){let p=currentProfile();$('profileTitle').textContent='Profile: '+(p.name||'Untitled');['name','rtype','met','desiredOutcome','socialNotes','impression','evidence','interpretation','hesitation','notes'].forEach(id=>$(id).value=p[id]||'');if(!p.rtype)$('rtype').value='Romantic prospect';if(!p.met)$('met').value='Soccer';greenDefs.forEach(([k])=>{let v=p.green?.[k]??5;$(`green_${k}`).value=v;$(`green_${k}_value`).textContent=v});riskDefs.forEach(([k])=>{let v=p.risk?.[k]??3;$(`risk_${k}`).value=v;$(`risk_${k}_value`).textContent=v});respectDefs.forEach(([k])=>{let v=p.respect?.[k]??5;$(`respect_${k}`).value=v;$(`respect_${k}_value`).textContent=v});socialDefs.forEach(([k,,,,good])=>{let v=p.social?.[k]??(good?5:3);$(`social_${k}`).value=v;$(`social_${k}_value`).textContent=v})}
function fillMe(){let me=state.me||defaultMe();$('myName').value=me.name||'';$('myPhilosophy').value=me.philosophy||'';needDefs.forEach(([k])=>{let v=me.needs?.[k]??5;$(`need_${k}`).value=v;$(`need_${k}_value`).textContent=v});tendencyDefs.forEach(([k])=>$(`t_${k}`).checked=!!me.tendencies?.[k]);updateMyReadout()}
function collectForm(){let p=currentProfile();['name','rtype','met','desiredOutcome','socialNotes','impression','evidence','interpretation','hesitation','notes'].forEach(id=>p[id]=$(id).value);greenDefs.forEach(([k])=>p.green[k]=Number($(`green_${k}`).value));riskDefs.forEach(([k])=>p.risk[k]=Number($(`risk_${k}`).value));respectDefs.forEach(([k])=>p.respect[k]=Number($(`respect_${k}`).value));socialDefs.forEach(([k])=>p.social[k]=Number($(`social_${k}`).value))}
function collectMe(){let me=state.me||defaultMe();me.name=$('myName').value;me.philosophy=$('myPhilosophy').value;needDefs.forEach(([k])=>me.needs[k]=Number($(`need_${k}`).value));tendencyDefs.forEach(([k])=>me.tendencies[k]=$(`t_${k}`).checked);state.me=me}
function avg(obj,defs){return defs.reduce((s,[k])=>s+Number(obj?.[k]||0),0)/defs.length}
function need(k){return Number((state.me?.needs||{})[k]??5)}function tendency(k){return !!(state.me?.tendencies||{})[k]}
function respectIndex(p){return Math.round(Math.max(0,Math.min(100,avg(p.respect,respectDefs)*10)))}
function socialHealth(p){return Math.round(Math.max(0,Math.min(100,(p.social.menRespect*1.8+p.social.friendsSupport*1.6+p.social.occupationNorms*1.2+p.social.maleFemaleEase*1.4+(10-p.social.statusPressure)*1.5+(10-p.social.peerPolicing)*1.3)*10/8.8)))}
function metrics(p){let g=avg(p.green,greenDefs),r=avg(p.risk,riskDefs),respect=respectIndex(p);let base=Math.max(0,Math.min(100,g*10-r*4));let personalized=base;personalized+=(respect-50)*.22;personalized+=(p.green.warmth-5)*(need('needWarmth')-5)*.7;personalized+=(p.green.respect-5)*(need('needRespect')-5)*.9;personalized+=(p.green.reciprocity-5)*(need('needAppreciation')-5)*.55;personalized+=(p.green.stability-5)*(need('needStability')-5)*.8;personalized+=(p.green.curiosity-5)*(need('needIntellect')-5)*.55;personalized-=p.risk.chaos*(need('needStability')/10)*2.2;personalized-=p.risk.family*(need('needFamily')/10)*1.4;personalized+=(socialHealth(p)-50)*.22;if(tendency('scarcity')&&p.green.attraction>=7)personalized-=6;if(tendency('attractionOverride')&&p.green.attraction>=8&&p.green.peace<=5)personalized-=10;if(tendency('rescuer')&&p.risk.trauma>=7)personalized-=9;if(tendency('peoplePleaser')&&(p.risk.entitlement>=6||respect<55))personalized-=8;if(tendency('movesFast')&&p.green.attraction>=7&&p.risk.chaos>=6)personalized-=8;personalized=Math.round(Math.max(0,Math.min(100,personalized)));let peaceIndex=Math.round(Math.max(0,Math.min(100,p.green.peace*3.5+p.green.respect*1.2+p.green.warmth*1.3+p.green.reciprocity*1.4+p.green.stability*1.4+respect*.012-p.risk.chaos*1.5-p.risk.inconsistent-p.risk.trauma*.8)));return{greenAvg:g,riskAvg:r,base:Math.round(base),personalized,peaceIndex,respectIndex:respect,social:socialHealth(p)}}
function safeUpdate(){try{updateReadout()}catch(e){$('status').textContent='Calculation error: '+e.message;console.error(e)}}
function updateReadout(){let p=currentProfile(),m=metrics(p);$('meterFill').style.width=m.personalized+'%';$('peaceIndex').textContent=m.peaceIndex;$('respectIndex').textContent=m.respectIndex;$('peacePhrase').textContent=m.peaceIndex>=75?'Calming, respectful, emotionally low-cost.':m.peaceIndex>=55?'Worth exploring, but watch whether calm increases.':m.peaceIndex>=35?'Exciting but not yet peaceful. Slow down.':'Low peace signal. Attraction may be masking emotional cost.';$('respectPhrase').textContent=m.respectIndex>=80?'Strong respect signal: appreciation, reliability, and boundaries look healthy.':m.respectIndex>=60?'Moderate respect signal. Watch consistency over time.':m.respectIndex>=40?'Respect is uncertain. Do not let warmth or attraction compensate too much.':'Low respect signal. This is a major long-term risk.';updateMatrix(m);updateSocialReadout(p,m);updateStrategy(p,m);updateAvatar(p,m);let title='Proceed carefully',cls='',text='Keep learning without outrunning the evidence.';if(m.personalized>=70&&m.peaceIndex>=65&&m.respectIndex>=65){title='Worth continuing to explore';cls='good';text='For your profile, this currently aligns with peace, respect, and low emotional cost.'}else if(m.personalized<=40||m.peaceIndex<40||m.respectIndex<40){title='Likely mismatch or boundaries needed';cls='bad';text='For your profile, this may cost too much peace or respect.'}if((p.rtype||'').includes('Do not date')){title='Boundaries-first relationship';cls='';text='This is not for romance escalation. Organize around clarity and boundaries.'}$('readout').className='readout '+cls;$('readout').innerHTML=`<b>${title}</b><br>Personalized Score: <b>${m.personalized}/100</b><br><span class='small'>General score: ${m.base}/100 · Social: ${m.social}/100 · Respect: ${m.respectIndex}/100</span><br>${text}`;updateBiasWarnings(p,m);updateGuidance(p,m);updateAI(p,m);drawRadar(p,m);renderTimeline(p);renderCards();$('status').textContent='App loaded. Autosave active.'}
function updateMatrix(m){let hiP=m.peaceIndex>=60,hiR=m.respectIndex>=60;let active=hiP&&hiR?'exceptional':hiP&&!hiR?'comfort':!hiP&&hiR?'work':'risk';$('matrix').innerHTML=`<div class='quad ${active==='comfort'?'active':''}'><b>High Peace / Low Respect</b><span class='small'>Comfort without full partnership.</span></div><div class='quad ${active==='exceptional'?'active':''}'><b>High Peace / High Respect</b><span class='small'>Long-term potential.</span></div><div class='quad ${active==='risk'?'active':''}'><b>Low Peace / Low Respect</b><span class='small'>Proceed carefully.</span></div><div class='quad ${active==='work'?'active':''}'><b>Low Peace / High Respect</b><span class='small'>Foundation exists, but emotional cost is high.</span></div>`}
function updateSocialReadout(p,m){let line=m.social>=75?'The surrounding social environment looks supportive.':m.social>=55?'The social environment is mixed; observe her friends and norms.':m.social>=35?'The social environment may create pressure, comparison, or instability.':'High social-environment risk: contempt, status pressure, or peer policing may affect compatibility.';$('socialReadout').innerHTML=`<p><b>Social Environment Score:</b> ${m.social}/100</p><p>${line}</p><p class='small'>This tracks whether her close social world seems to reward respect, commitment, and stable partnership versus comparison, contempt, and status games.</p>`}
function updateBiasWarnings(p,m){let w=[];if(tendency('scarcity')&&p.green.attraction>=7)w.push(['Scarcity warning','Interest is meaningful, but not evidence she is good for you.']);if(tendency('attractionOverride')&&p.green.attraction>=8&&m.peaceIndex<=55)w.push(['Attraction override','Attraction is outrunning peace/respect.']);if(tendency('rescuer')&&p.risk.trauma>=7)w.push(['Rescuer warning','Do not confuse being needed with being loved.']);if(tendency('peoplePleaser')&&m.respectIndex<60)w.push(['People-pleasing warning','Low respect requires earlier boundary-setting.']);if(p.social.statusPressure>=7)w.push(['Status-pressure warning','Status comparison may affect expectations.']);if(p.hesitation&&p.hesitation.trim().length>20)w.push(['Hesitation note present','Your written hesitation may contain signal that sliders miss. Re-read it before escalating.']);if(!w.length)w.push(['No major blind spot triggered','Current inputs do not strongly trigger selected warnings.']);$('biasWarnings').innerHTML=w.map(([a,b],i)=>`<div class='warning ${i===0&&w.length>1?'dangerWarn':''}'><b>${a}:</b> ${b}</div>`).join('')}
function updateGuidance(p,m){let tips=[];if(m.respectIndex<55)tips.push('Respect is not optional. Warmth without respect often becomes confusing or humiliating.');if(m.peaceIndex<45)tips.push('Low peace after contact matters. Your body may be noticing emotional cost.');if(p.risk.trauma>=7)tips.push('Early heavy disclosure can create false intimacy. Compassion is fine; pacing still matters.');if(p.social.friendsSupport<=3)tips.push('Watch how her close friends talk about committed relationships.');if(!tips.length)tips.push('Keep collecting concrete observations. One interaction is evidence, not a verdict.');$('guidance').innerHTML=tips.map(t=>`<div class='guide'>${t}</div>`).join('')}
function updateAI(p,m){let archetype='Mixed / unclear';if(p.green.attraction>=7&&m.peaceIndex<45)archetype='High attraction, low peace';else if(m.peaceIndex>=70&&m.respectIndex>=70)archetype='Peaceful and respectful';else if(m.respectIndex<45)archetype='Respect caution';else if(p.social.statusPressure>=7||p.social.peerPolicing>=7)archetype='Social-pressure caution';let interp=m.respectIndex<45?'Respect is the central warning. Attraction, warmth, or novelty should not override low appreciation, unreliable commitment, or boundary pressure.':m.peaceIndex>=75&&m.respectIndex>=75?'This profile suggests low emotional cost and strong respect for your stated needs.':p.hesitation?'Your hesitation note may be important. Compare it against the scores before escalating.':'The profile is not decisive yet. Watch whether more contact increases peace, respect, and clarity.';let next=m.peaceIndex<40||m.respectIndex<45?'Slow down. Look for concrete evidence of respect and stability before investing more.':'Continue with a low-pressure interaction and log how you feel afterward.';$('aiInterpretation').innerHTML=`<p><b>Current pattern:</b> ${archetype}.</p><p><b>Respect analysis:</b> ${respectText(m)}</p><p><b>Personalized interpretation:</b> ${interp}</p><p><b>Best next move:</b> ${next}</p><p><b>Hesitation:</b> ${p.hesitation?escapeHTML(p.hesitation).slice(0,500):'none entered.'}</p><p><b>Evidence entered:</b> ${p.evidence?escapeHTML(p.evidence).slice(0,500):'none yet. Add facts to make this less vibes-based.'}</p>`}
function respectText(m){return m.respectIndex>=80?'Respect appears strong: appreciation, reliability, time, and boundaries are scoring well.':m.respectIndex>=60?'Respect appears moderate. It is not a dealbreaker, but consistency matters.':m.respectIndex>=40?'Respect is uncertain and should be watched closely.':'Respect appears weak. This is one of the strongest long-term caution signals.'}
function drawRadar(p,m){let c=$('radar'),ctx=c.getContext('2d'),w=c.width,h=c.height,cx=w/2,cy=h/2,R=150;ctx.clearRect(0,0,w,h);let axes=[['Warmth',p.green.warmth,need('needWarmth')],['Respect',m.respectIndex/10,need('needRespect')],['Reciprocity',p.green.reciprocity,need('needAppreciation')],['Stability',p.green.stability,need('needStability')],['Peace',m.peaceIndex/10,need('needStability')],['Attraction',p.green.attraction,need('needAffection')],['Low Chaos',10-p.risk.chaos,need('needStability')],['Social Health',m.social/10,7]],n=axes.length;ctx.font='12px -apple-system,BlinkMacSystemFont,Segoe UI,Arial';ctx.textAlign='center';ctx.textBaseline='middle';for(let ring=1;ring<=5;ring++){ctx.beginPath();for(let i=0;i<n;i++){let a=-Math.PI/2+i*2*Math.PI/n,r=R*ring/5,x=cx+Math.cos(a)*r,y=cy+Math.sin(a)*r;i?ctx.lineTo(x,y):ctx.moveTo(x,y)}ctx.closePath();ctx.strokeStyle='#ded6c9';ctx.stroke()}axes.forEach(([label],i)=>{let a=-Math.PI/2+i*2*Math.PI/n;ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+Math.cos(a)*R,cy+Math.sin(a)*R);ctx.strokeStyle='#e8dfd2';ctx.stroke();ctx.fillStyle='#5f574e';ctx.fillText(label,cx+Math.cos(a)*(R+36),cy+Math.sin(a)*(R+30))});drawPoly(ctx,axes.map(a=>a[2]),R,cx,cy,n,'rgba(90,120,160,.16)','#5a78a0',2);drawPoly(ctx,axes.map(a=>a[1]),R,cx,cy,n,'rgba(129,91,51,.24)','#815b33',3);ctx.textAlign='left';ctx.fillStyle='#815b33';ctx.fillText('This person',18,24);ctx.fillStyle='#5a78a0';ctx.fillText('Your needs',18,42)}
function drawPoly(ctx,vals,R,cx,cy,n,fill,stroke,lw){ctx.beginPath();vals.forEach((val,i)=>{let a=-Math.PI/2+i*2*Math.PI/n,r=R*Math.max(0,Math.min(10,val))/10,x=cx+Math.cos(a)*r,y=cy+Math.sin(a)*r;i?ctx.lineTo(x,y):ctx.moveTo(x,y)});ctx.closePath();ctx.fillStyle=fill;ctx.fill();ctx.strokeStyle=stroke;ctx.lineWidth=lw;ctx.stroke();ctx.lineWidth=1}



function profileCategory(p){
  let t=p.rtype||'';
  if(t.includes('Romantic')||t.includes('dating'))return 'Romantic';
  if(t.includes('Friend'))return 'Friend';
  if(t.includes('Coworker')||t.includes('Boss')||t.includes('professional'))return 'Work';
  if(t.includes('Family'))return 'Family';
  if(t.includes('Boundary')||t.includes('Do not date'))return 'Boundary';
  return 'Other';
}
function cardGlyphFor(p,m){
  if((p.rtype||'').includes('Family'))return '⌂';
  if((p.rtype||'').includes('Coworker')||(p.rtype||'').includes('Boss'))return '▣';
  if(m.peaceIndex>=70&&m.respectIndex>=70)return '◎';
  if(p.green?.attraction>=8&&m.peaceIndex<50)return '◇';
  if(p.risk?.chaos>=7)return '⚡';
  if(m.respectIndex<45)return '△';
  return '◯';
}
function renderCards(){
  if(!$('cardsGrid'))return;
  let profiles=state.profiles||[];
  let shown=profiles.filter(p=>currentFilter==='All'||profileCategory(p)===currentFilter);
  if(!shown.length){$('cardsGrid').innerHTML='<div class="small">No cards in this category yet.</div>';return;}
  $('cardsGrid').innerHTML=shown.map(p=>{
    let oldId=state.currentId; state.currentId=p.id; let m=metrics(p); state.currentId=oldId;
    return `<div class="cardTile" onclick="openCard('${p.id}')"><div class="cardTop"><div class="cardGlyph">${cardGlyphFor(p,m)}</div><div><div class="cardName">${escapeHTML(p.name||'Untitled')}</div><div class="cardType">${escapeHTML(p.rtype||'Unclear')} · ${profileCategory(p)}</div></div></div><div class="miniMetrics"><div class="miniMetric"><b>${m.peaceIndex}</b><span>Peace</span></div><div class="miniMetric"><b>${m.respectIndex}</b><span>Respect</span></div><div class="miniMetric"><b>${m.personalized}</b><span>Fit</span></div></div></div>`;
  }).join('');
}
function openCard(id){
  collectForm();
  state.currentId=id;
  saveState();
  fillForm();
  renderProfiles();
  safeUpdate();
  showTab('person');
}
function quickUpdate(){
  collectForm();
  let p=currentProfile();
  let emotion=$('emotionalState').value;
  let note=$('quickNote').value||'';
  let peace=Number($('quickPeace').value), respect=Number($('quickRespect').value), cost=Number($('quickCost').value);
  p.green.peace=peace;
  p.respect.opinion=respect;
  p.respect.boundaries=respect;
  p.risk.chaos=Math.max(0,Math.min(10,cost));
  let m=metrics(p);
  p.snapshots=p.snapshots||[];
  p.snapshots.push({id:uid(),label:new Date().toLocaleDateString()+' quick update',created:new Date().toISOString(),peace:m.peaceIndex,respect:m.respectIndex,compat:m.personalized,note:note,hesitation:p.hesitation||'',emotion:emotion,quick:true});
  saveState();fillForm();renderCards();renderProfiles();safeUpdate();
  if(emotion!=='Calm / reflective')$('status').textContent='Quick update saved. Re-evaluate when calm.';
  else $('status').textContent='Quick update saved.';
}
function updateQuickLabels(){
  if(!$('quickPeace'))return;
  $('quickPeaceVal').textContent=$('quickPeace').value;
  $('quickRespectVal').textContent=$('quickRespect').value;
  $('quickCostVal').textContent=$('quickCost').value;
}

function updateAvatar(p,m){
  if(!$('avatarCard'))return;
  let glyph='◯', label='Mixed / still learning', detail='Not enough signal yet.';
  if(m.peaceIndex>=70&&m.respectIndex>=70){glyph='◎';label='Grounded signal';detail='Peace and respect are both strong.'}
  else if(p.green.attraction>=8&&m.peaceIndex<50){glyph='◇';label='High pull / low peace';detail='Attraction is stronger than calm.'}
  else if(p.risk.chaos>=7){glyph='⚡';label='Chaotic signal';detail='Warmth may come with volatility.'}
  else if(m.respectIndex<45){glyph='△';label='Respect caution';detail='Respect is not strong enough yet.'}
  else if((p.rtype||'').includes('Family')){glyph='⌂';label='Family system';detail='Optimize boundaries and peace, not closeness at all costs.'}
  else if((p.rtype||'').includes('Coworker')||(p.rtype||'').includes('Boss')){glyph='▣';label='Professional dynamic';detail='Optimize reliability, clarity, and exposure management.'}
  $('avatarCard').innerHTML=`<div class="avatarGlyph">${glyph}</div><div><b>${label}</b><div class="small">${detail}</div><div class="typeNote">${p.rtype||'Relationship'} · desired outcome: ${p.desiredOutcome||'unsure'}</div></div>`;
}
function strategyEngine(p,m){
  let actions=[], badges=[];
  let type=p.rtype||'Unclear', outcome=p.desiredOutcome||'Unsure';
  if(type.includes('Romantic')||type.includes('dating')){
    badges.push('Romantic discernment');
    if(m.peaceIndex>=70&&m.respectIndex>=70) actions.push('Continue exploring with low-pressure consistency. Do not force certainty too early.');
    if(p.green.attraction>=8&&m.peaceIndex<55) actions.push('Slow escalation. Attraction is high, but peace is not yet strong enough to justify heavy investment.');
    if(m.respectIndex<55) actions.push('Look for concrete evidence of appreciation, reliability, and boundary respect before investing more.');
  } else if(type.includes('Friend')){
    badges.push('Friendship management');
    if(m.peaceIndex<50) actions.push('Keep contact lighter and activity-based until the relationship feels less costly.');
    if(m.respectIndex>=65&&m.peaceIndex>=55) actions.push('This may be worth maintaining as a stable friendship even if it is not emotionally central.');
  } else if(type.includes('Coworker')||type.includes('Boss')||type.includes('professional')){
    badges.push('Professional strategy');
    actions.push('Keep communication specific, documented, and low-drama.');
    if(m.respectIndex<55) actions.push('Avoid seeking validation from this person. Optimize clarity and deliverables.');
    if(p.risk.chaos>=6) actions.push('Reduce ambiguity: confirm expectations in writing and avoid emotional interpretation loops.');
  } else if(type.includes('Family')){
    badges.push('Family boundary strategy');
    actions.push('Optimize for sustainable exposure, not perfect closeness.');
    if(m.peaceIndex<50) actions.push('Use shorter visits, clearer exits, and decompression time afterward.');
    if(m.respectIndex<55) actions.push('Do not argue for basic respect repeatedly. Set limits and change exposure level.');
  } else if(type.includes('Boundary')||type.includes('Do not date')){
    badges.push('Boundary-first');
    actions.push('Do not escalate intimacy. Keep the relationship organized around clarity, distance, and predictable limits.');
  } else {
    badges.push('General discernment');
    actions.push('Collect more evidence. Pay attention to whether peace and respect rise or fall after contact.');
  }
  if(outcome.includes('Reduce exposure')) actions.push('Make the main goal reduced contact and lower emotional load, not mutual understanding.');
  if(outcome.includes('Boundary')) actions.push('State one concrete boundary and watch whether it is respected without punishment.');
  if(outcome.includes('Repair')) actions.push('Test repair capacity: make one calm, specific request and observe accountability.');
  if(outcome.includes('Shared activity')) actions.push('Keep the relationship context-specific. Enjoy the activity without expanding emotional expectations.');
  if(p.hesitation&&p.hesitation.trim().length>20) actions.push('Before taking the next step, reread your hesitation note and convert it into one observable question.');
  if(!actions.length) actions.push('Have one more grounded interaction and create a snapshot afterward.');
  return {badges:[...new Set(badges)],actions:[...new Set(actions)]};
}
function updateStrategy(p,m){
  if(!$('strategyOutput'))return;
  let s=strategyEngine(p,m);
  $('strategyOutput').innerHTML=`<div>${s.badges.map(b=>`<span class="strategyBadge">${b}</span>`).join('')}</div><ul class="actionList">${s.actions.map(a=>`<li>${a}</li>`).join('')}</ul>`;
}

function addSnapshot(){
  try{
    collectForm();
    let p=currentProfile(),m=metrics(p);
    p.snapshots=p.snapshots||[];
    let label=prompt('Snapshot label/date:', new Date().toLocaleDateString());
    if(label===null)return;
    p.snapshots.push({id:uid(),label:label||new Date().toLocaleDateString(),created:new Date().toISOString(),peace:m.peaceIndex,respect:m.respectIndex,compat:m.personalized,note:p.notes||'',hesitation:p.hesitation||''});
    saveState();renderTimeline(p);$('status').textContent='Snapshot added.';
  }catch(e){$('status').textContent='Snapshot error: '+e.message;console.error(e)}
}
function deleteSnapshot(id){
  let p=currentProfile();
  p.snapshots=(p.snapshots||[]).filter(s=>s.id!==id);
  saveState();renderTimeline(p);
}
function renderTimeline(p){
  p=p||currentProfile();
  let snaps=p.snapshots||[];
  if(!$('timelineChart')||!$('timelineList'))return;
  if(!snaps.length){
    $('timelineChart').innerHTML='<div class="small">No snapshots yet. Add one after an interaction to start tracking movement over time.</div>';
    $('timelineList').innerHTML='';
    return;
  }
  let latest=snaps[snaps.length-1];
  $('timelineChart').innerHTML=[
    ['Peace', latest.peace, 'barPeace'],
    ['Respect', latest.respect, 'barRespect'],
    ['Compatibility', latest.compat, 'barCompat']
  ].map(([label,val,cls])=>`<div class="timelineRow"><div><b>${label}</b><br><span class="small">${val}/100</span></div><div class="barTrack"><div class="${cls}" style="width:${val}%"></div></div></div>`).join('');
  $('timelineList').innerHTML=snaps.slice().reverse().map(s=>`<div class="snapshot"><b>${escapeHTML(s.label)}</b><div class="snapshotMeta">Peace ${s.peace}/100 · Respect ${s.respect}/100 · Compatibility ${s.compat}/100</div>${s.hesitation?`<div class="small"><b>Hesitation:</b> ${escapeHTML(s.hesitation).slice(0,250)}</div>`:''}<button class="deleteSnap" type="button" onclick="deleteSnapshot('${s.id}')">Delete snapshot</button></div>`).join('');
}

function renderProfiles(){let list=$('profileList');list.innerHTML='<h3>Saved profiles</h3>';state.profiles.forEach(p=>{let b=document.createElement('button');b.className='profile'+(p.id===state.currentId?' active':'');b.innerHTML=`<b>${p.name||'Untitled'}</b><br><span class='small'>${p.rtype||''} · ${p.met||''}</span>`;b.onclick=()=>{collectForm();state.currentId=p.id;saveState();fillForm();renderProfiles();safeUpdate()};list.appendChild(b)})}
function updateMyReadout(){let me=state.me||defaultMe();let checked=tendencyDefs.filter(([k])=>me.tendencies?.[k]).map(([_,l])=>l);let high=needDefs.filter(([k])=>(me.needs?.[k]??5)>=8).map(([_,l])=>l);$('myReadout').innerHTML=`<p><b>High-importance needs:</b> ${high.length?high.join(', '):'none marked 8+ yet.'}</p><p><b>Selected blind spots:</b> ${checked.length?checked.join(', '):'none selected yet.'}</p><p><b>How this changes scoring:</b> profiles are penalized more when they conflict with your high-importance needs or trigger selected tendencies.</p>`}
function onAnyChange(){collectForm();saveState();renderProfiles();safeUpdate()}function onMeChange(){collectMe();saveState();updateMyReadout();safeUpdate()}
function bindEvents(){['name','rtype','met','desiredOutcome','socialNotes','impression','evidence','interpretation','hesitation','notes'].forEach(id=>{$(id).addEventListener('input',onAnyChange);$(id).addEventListener('change',onAnyChange)});greenDefs.forEach(([k])=>$(`green_${k}`).addEventListener('input',()=>{$(`green_${k}_value`).textContent=$(`green_${k}`).value;onAnyChange()}));riskDefs.forEach(([k])=>$(`risk_${k}`).addEventListener('input',()=>{$(`risk_${k}_value`).textContent=$(`risk_${k}`).value;onAnyChange()}));respectDefs.forEach(([k])=>$(`respect_${k}`).addEventListener('input',()=>{$(`respect_${k}_value`).textContent=$(`respect_${k}`).value;onAnyChange()}));socialDefs.forEach(([k])=>$(`social_${k}`).addEventListener('input',()=>{$(`social_${k}_value`).textContent=$(`social_${k}`).value;onAnyChange()}));needDefs.forEach(([k])=>$(`need_${k}`).addEventListener('input',()=>{$(`need_${k}_value`).textContent=$(`need_${k}`).value;onMeChange()}));tendencyDefs.forEach(([k])=>$(`t_${k}`).addEventListener('change',onMeChange));['myName','myPhilosophy'].forEach(id=>$(id).addEventListener('input',onMeChange));$('tabCards').onclick=()=>showTab('cards');$('tabPerson').onclick=()=>showTab('person');$('tabMe').onclick=()=>showTab('me');document.querySelectorAll('.filter').forEach(b=>b.onclick=()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');currentFilter=b.dataset.filter;renderCards();});['quickPeace','quickRespect','quickCost'].forEach(id=>$(id).addEventListener('input',updateQuickLabels));$('quickSnapshotBtn').onclick=quickUpdate;$('newBtn').onclick=()=>{collectForm();let p=blankProfile();state.profiles.push(p);state.currentId=p.id;saveState();fillForm();renderProfiles();safeUpdate()};$('addSnapshotBtn').onclick=addSnapshot;$('exportBtn').onclick=()=>{collectForm();collectMe();saveState();let blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='relationship-intelligence-backup.json';a.click()};$('importFile').onchange=e=>{let file=e.target.files[0];if(!file)return;let reader=new FileReader();reader.onload=()=>{try{let imported=JSON.parse(reader.result);if(!Array.isArray(imported.profiles))throw new Error();state=migrate(imported);if(!state.currentId&&state.profiles[0])state.currentId=state.profiles[0].id;saveState();fillForm();fillMe();renderProfiles();safeUpdate()}catch(err){alert('Could not import that backup file.')}};reader.readAsText(file)}}
function showTab(t){$('cardsView').classList.toggle('hidden',t!=='cards');$('personView').classList.toggle('hidden',t!=='person');$('meView').classList.toggle('hidden',t!=='me');$('tabCards').classList.toggle('active',t==='cards');$('tabPerson').classList.toggle('active',t==='person');$('tabMe').classList.toggle('active',t==='me');if(t==='cards')renderCards();}
function escapeHTML(s){return String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]))}
function init(){try{renderSliders();currentProfile();bindEvents();fillForm();fillMe();renderProfiles();updateQuickLabels();safeUpdate();renderCards();saveState();$('status').textContent='App loaded. Autosave active.'}catch(e){$('status').textContent='Startup error: '+e.message;console.error(e)}}
if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));init();