const STORAGE_KEY='relationship_intelligence_pwa_v16';
const greenDefs=[['warmth','Warmth','Emotional warmth, ease, affection.'],['kindness','Kindness','Basic goodness toward you and others.'],['respect','Baseline respect','General respect signal from the core profile.'],['reciprocity','Reciprocity','Interest and effort move both directions.'],['curiosity','Curiosity','They actually want to know you.'],['stability','Emotional stability','Grounded enough to build with.'],['peace','Peace after contact','Afterward you feel peaceful, not anxious or humiliated.'],['attraction','Attraction','Physical / romantic pull.']];
const riskDefs=[['chaos','Chaos / drama','Volatility, crisis, or confusing energy.'],['trauma','Early trauma dumping','Heavy disclosure before trust exists.'],['entitlement','Entitlement','Expects without appreciating.'],['family','Family disrespect','Contempt toward family/parents.'],['social','Social-media validation','Attention-seeking or comparison energy.'],['inconsistent','Inconsistent communication','Words and effort fluctuate in a destabilizing way.']];
const respectDefs=[['opinion','Values your opinions','Does this person take your perspective seriously?'],['appreciation','Expresses appreciation','Does this person notice and value your effort?'],['commitments','Keeps commitments','Does they follow through reliably?'],['proud','Proud to be associated','Would this person speak well of you to others?'],['time','Respects your time','Is this person considerate with scheduling and effort?'],['boundaries','Respects boundaries','Does this person honor limits without punishment?']];
const socialDefs=[['contextFit','Context fit','The surrounding context supports the desired relationship.','Poor fit','Strong fit',true]];
const adaptiveRiskDefs={
  romanticWoman:[
    ['menRespect','How this person talks about men','Respectful, fair, non-contemptuous talk about men.','Contemptuous','Respectful',true],
    ['friendsSupport','Friend group supports stable love','Their close group rewards commitment, respect, and healthy relationships.','Undermining','Supportive',true],
    ['statusPressure','Status / social comparison pressure','How much status, prestige, and social comparison seem to drive partner selection.','Low pressure','High pressure',false],
    ['peerPolicing','In-group policing pressure','How much the group enforces norms through shame, gossip, or status games.','Low pressure','High pressure',false],
    ['longTermOrientation','Long-term orientation','Evidence of commitment-minded, stable, future-oriented choices.','Low','High',true],
    ['maleFemaleEase','Ease with men','This person seems able to talk with men as people, not as opponents, providers, or status objects.','Low ease','High ease',true]
  ],
  romanticMan:[
    ['commitmentInterest','Commitment interest','Evidence he is oriented toward real commitment rather than casual access.','Low','High',true],
    ['respectWomen','Respect toward women','Does he speak and act respectfully toward women?','Low','High',true],
    ['followThrough','Follow-through','Does he do what he says and show reliable effort?','Low','High',true],
    ['sexualImpulsivity','Sexual impulsivity / promiscuity risk','Evidence of novelty-seeking, cheating risk, or casual-sex orientation.','Low concern','High concern',false],
    ['motivation','Motivation / direction','Does he show purpose, work ethic, or life direction?','Low','High',true],
    ['emotionalRegulation','Emotional regulation','Can he handle frustration without intimidation, withdrawal, or volatility?','Low','High',true]
  ],
  work:[
    ['reliabilityRisk','Reliability risk','Missed commitments, unclear expectations, or inconsistent follow-through.','Low concern','High concern',false],
    ['politicsRisk','Workplace politics risk','Gossip, status games, credit-taking, or triangulation.','Low concern','High concern',false],
    ['clarity','Communication clarity','Expectations and communication are clear and direct.','Low','High',true],
    ['fairness','Fairness','This person treats you and others fairly.','Low','High',true],
    ['competenceFit','Competence fit','Their work competence reduces friction rather than creating it.','Low','High',true],
    ['boundaryRespectWork','Professional boundaries','They respect time, scope, and role boundaries.','Low','High',true]
  ],
  friend:[
    ['mutuality','Mutuality','Effort, invitations, and interest flow both ways.','Low','High',true],
    ['confidentiality','Trust with personal information','They can be trusted with sensitive information.','Low','High',true],
    ['dramaRisk','Drama risk','Needless turbulence, gossip, or emotional chaos.','Low concern','High concern',false],
    ['supportiveness','Supportiveness','They celebrate wins and show up when appropriate.','Low','High',true],
    ['funEase','Ease and enjoyment','You enjoy time together without high emotional cost.','Low','High',true],
    ['valuesFitFriend','Values fit','The friendship fits your life and values.','Low','High',true]
  ],
  family:[
    ['boundaryRespectFamily','Boundary respect','They can respect reasonable limits.','Low','High',true],
    ['guiltPressure','Guilt / obligation pressure','They use guilt, duty, or pressure to control access.','Low concern','High concern',false],
    ['repairFamily','Repair capacity','Conflict can be repaired without endless punishment.','Low','High',true],
    ['predictability','Predictability','Interactions are predictable enough to plan around.','Low','High',true],
    ['exposureCost','Exposure cost','Time with them creates major emotional cost.','Low concern','High concern',false],
    ['familyWarmth','Family warmth','There is some warmth, care, or goodwill.','Low','High',true]
  ],
  boundary:[
    ['manipulation','Manipulation pressure','Guilt, pressure, pull, or coercive dynamics.','Low concern','High concern',false],
    ['safety','Emotional safety','Interaction does not destabilize you.','Low','High',true],
    ['distanceClarity','Distance clarity','The right distance is clear and maintainable.','Low','High',true],
    ['exitEase','Ease of disengagement','You can disengage cleanly.','Low','High',true],
    ['boundaryTesting','Boundary testing','They push or punish limits.','Low concern','High concern',false],
    ['necessity','Necessity of contact','How unavoidable this relationship is.','Low','High',false]
  ],
  general:[
    ['contextFit','Context fit','The context supports the desired relationship.','Poor fit','Strong fit',true],
    ['trust','Trust','This person is basically trustworthy.','Low','High',true],
    ['cost','Emotional cost','This relationship creates emotional cost.','Low concern','High concern',false],
    ['clarityGeneral','Clarity','The relationship is understandable and not confusing.','Low','High',true],
    ['reciprocalGeneral','Reciprocity','Effort and care move both ways.','Low','High',true],
    ['boundariesGeneral','Boundary respect','Reasonable limits are respected.','Low','High',true]
  ]
};

const needDefs=[['needWarmth','Warmth','How much you need emotional warmth.'],['needRespect','Respect','How non-negotiable respect is.'],['needAppreciation','Appreciation','How much you need gratitude and admiration.'],['needIntellect','Intellectual connection','How much depth matters.'],['needAdventure','Adventure / activity','How much shared activity matters.'],['needStability','Stability','How much groundedness matters.'],['needFaith','Faith / values','How much shared values matter.'],['needFamily','Family orientation','How much family respect matters.'],['needAffection','Physical affection','How much touch and affection matter.'],['needIndependence','Independence','How much autonomy matters.']];

const deficiencyDefs=[
 ['isolation','Isolation / low recurring social contact'],
 ['mentorDeficit','Mentorship deficit'],
 ['brotherhoodDeficit','Weak male friendship / brotherhood'],
 ['admirationDeficit','Low admiration / recognition'],
 ['touchStarvation','Touch / affection starvation'],
 ['validationDependence','Validation dependence'],
 ['romanticOverreliance','Romantic overdependence'],
 ['purposeDeficit','Low mission / purpose'],
 ['weakAccountability','Weak accountability structures'],
 ['communityDeficit','Weak community integration'],
 ['supportDeficit','Low emotional support'],
 ['challengeDeficit','Low challenge / growth pressure']
];
const blindSpotDefs=[
 ['poorCommunication','Poor communication habits'],
 ['insecurity','Insecurity / self-consciousness'],
 ['conflictAvoidance','Conflict avoidance'],
 ['unreliability','Unreliability / inconsistency'],
 ['socialWithdrawal','Isolation habits / withdrawal'],
 ['peoplePleaser','People pleasing'],
 ['pedestalization','Pedestalization'],
 ['anxiousAttachment','Anxious attachment tendencies'],
 ['avoidantAttachment','Avoidant tendencies'],
 ['resentment','Resentment / bitterness'],
 ['workObsession','Excessive work focus'],
 ['dopamineHabits','Dopamine addiction / overstimulation'],
 ['lowConfidence','Low confidence'],
 ['poorPresentation','Poor hygiene / presentation']
];
const patternDefs=[
 ['overPursuit','Overpursuit after attraction'],
 ['withdrawal','Withdrawal after disappointment'],
 ['chaosAttraction','Attraction to chaos or uncertainty'],
 ['validationSeeking','Validation seeking'],
 ['overInvestment','Overinvesting too early'],
 ['conflictSuppression','Suppressing conflict too long'],
 ['rescuer','Rescuing / fixing tendencies'],
 ['fearOfLoss','Fear of abandonment / loss'],
 ['noveltyDependence','Novelty dependence'],
 ['intermittentHook','Intermittent reinforcement sensitivity']
];

const roleDefs=[['needed','Being needed','Feeling useful and meaningfully relied upon.'],['admired','Being admired','Feeling admired or looked up to.'],['respectedRole','Being respected','Feeling treated as competent and worthy.'],['appreciatedRole','Being appreciated','Having effort noticed and valued.'],['trustedRole','Being trusted','Being given responsibility or confidence.'],['challenged','Being challenged','Having people who push you toward growth.'],['protective','Being protective','Having appropriate opportunities to protect or provide.'],['autonomy','Autonomy','Feeling free rather than controlled.']];
const tendencyDefs=[['movesFast','Move too quickly','You may escalate before enough evidence exists.'],['scarcity','Scarcity mindset','You may overvalue attention because opportunities feel rare.'],['peoplePleaser','People pleasing','You may avoid speaking up or tolerate too much.'],['rescuer','Rescuer pattern','You may mistake being needed for being loved.'],['idealizer','Over-romanticize potential','You may fall for possibility instead of evidence.'],['conflictAvoidant','Conflict avoidant','You may avoid hard conversations.'],['attractionOverride','Attraction override','You may let attraction outrank peace.'],['fearRejection','Fear rejection','You may accept poor fit to avoid losing connection.']];
let state=loadState();let currentFilter='All';function $(id){return document.getElementById(id)}
function defaultMe(){let needs={};needDefs.forEach(([k])=>needs[k]=5);let roles={};roleDefs.forEach(([k])=>roles[k]=5);return{name:'',datingLens:'Man evaluating women',needs,roles,deficiencies:{},blindSpots:{},patterns:{},tendencies:{},philosophy:''}}
function loadState(){try{let raw=localStorage.getItem(STORAGE_KEY);if(raw)return JSON.parse(raw);for(let key of ['relationship_intelligence_pwa_v15','relationship_intelligence_pwa_v14','relationship_intelligence_pwa_v13','relationship_intelligence_pwa_v12','relationship_intelligence_pwa_v11_2','relationship_intelligence_pwa_v11','relationship_intelligence_pwa_v10','relationship_intelligence_pwa_v8','relationship_intelligence_pwa_v7','relationship_intelligence_pwa_v6','relationship_intelligence_pwa_v5','relationship_intelligence_pwa_v4','relationship_intelligence_pwa_v3','relationship_intelligence_pwa_v2','relationship_intelligence_pwa_v1']){let old=localStorage.getItem(key);if(old)return migrate(JSON.parse(old));}}catch(e){}return{currentId:null,profiles:[],me:defaultMe()}}
function migrate(s){s.me=s.me||defaultMe();s.me.roles=s.me.roles||{};roleDefs.forEach(([k])=>{if(s.me.roles[k]===undefined)s.me.roles[k]=5});s.me.deficiencies=s.me.deficiencies||{};s.me.blindSpots=s.me.blindSpots||{};s.me.patterns=s.me.patterns||{};s.profiles=(s.profiles||[]).map(p=>{p={...p,evidence:p.evidence||'',interpretation:p.interpretation||'',hesitation:p.hesitation||'',socialNotes:p.socialNotes||'',pronounContext:p.pronounContext||'Neutral / person',desiredOutcome:p.desiredOutcome||'Explore slowly',rtype:p.rtype==='Potential romantic partner'?'Romantic prospect':(p.rtype||'Romantic prospect')};p.social=p.social||{};p.respect=p.respect||{};Object.values(adaptiveRiskDefs).flat().forEach(([k,,,,good])=>{if(p.social[k]===undefined)p.social[k]=good?5:3});respectDefs.forEach(([k])=>{if(p.respect[k]===undefined)p.respect[k]=5});p.snapshots=p.snapshots||[];p.quick=p.quick||{};return p});return s}
function saveState(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state));$('status').textContent='Autosaved locally'}
function uid(){return'p_'+Date.now()+'_'+Math.random().toString(16).slice(2)}
function blankProfile(){let p={id:uid(),name:'',pronounContext:'Neutral / person',rtype:'Romantic prospect',met:'Soccer',desiredOutcome:'Explore slowly',socialNotes:'',impression:'',evidence:'',interpretation:'',hesitation:'',notes:'',green:{},risk:{},respect:{},social:{},snapshots:[],quick:{}};greenDefs.forEach(([k])=>p.green[k]=5);riskDefs.forEach(([k])=>p.risk[k]=3);respectDefs.forEach(([k])=>p.respect[k]=5);Object.values(adaptiveRiskDefs).flat().forEach(([k,,,,good])=>{if(p.social[k]===undefined)p.social[k]=good?5:3});return p}
function currentProfile(){if(!state.profiles.length){let p=blankProfile();state.profiles.push(p);state.currentId=p.id}return state.profiles.find(p=>p.id===state.currentId)||state.profiles[0]}
function renderSliders(){$('greenSliders').innerHTML=greenDefs.map(([k,l,h])=>sliderHTML('green',k,l,h,5,'Low','High',true)).join('');$('riskSliders').innerHTML=riskDefs.map(([k,l,h])=>sliderHTML('risk',k,l,h,3,'Low concern','High concern',false)).join('');$('respectSliders').innerHTML=respectDefs.map(([k,l,h])=>sliderHTML('respect',k,l,h,5,'Low','High',true)).join('');renderAdaptiveRiskSliders();$('needSliders').innerHTML=needDefs.map(([k,l,h])=>sliderHTML('need',k,l,h,5,'Low need','High need',true)).join('');if($('roleSliders'))$('roleSliders').innerHTML=roleDefs.map(([k,l,h])=>sliderHTML('role',k,l,h,5,'Low','High',true)).join('');
if($('deficiencyChecks'))$('deficiencyChecks').innerHTML='<div class="checkGrid">'+deficiencyDefs.map(([k,l])=>`<div class="checkItem"><input type="checkbox" id="def_${k}"><span>${l}</span></div>`).join('')+'</div>';
if($('patternChecks'))$('patternChecks').innerHTML='<div class="checkGrid">'+patternDefs.map(([k,l])=>`<div class="checkItem"><input type="checkbox" id="pattern_${k}"><span>${l}</span></div>`).join('')+'</div>';
if($('tendencyChecks'))$('tendencyChecks').innerHTML='<div class="checkGrid">'+blindSpotDefs.map(([k,l])=>`<div class="checkItem"><input type="checkbox" id="blind_${k}"><span>${l}</span></div>`).join('')+'</div>';
$('tendencyChecks').innerHTML=tendencyDefs.map(([k,l,h])=>`<label class='check'><input type='checkbox' id='t_${k}'><span><b>${l}</b><span class='small'>${h}</span></span></label>`).join('')}
function sliderHTML(g,k,l,h,d,left,right,good){return`<div class='slider'><div class='sliderTop'><b>${l}</b><span class='bubble' id='${g}_${k}_value'>${d}</span></div><div class='small'>${h}</div><input type='range' min='0' max='10' value='${d}' id='${g}_${k}'><div class='scaleLabels'><span>${left}</span><span class='${good?'goodSide':'riskSide'}'>${right}</span></div></div>`}
function fillForm(){let p=currentProfile();$('profileTitle').textContent='Profile: '+(p.name||'Untitled');['name','pronounContext','rtype','met','desiredOutcome','socialNotes','impression','evidence','interpretation','hesitation','notes'].forEach(id=>$(id).value=p[id]||'');if(!p.rtype)$('rtype').value='Romantic prospect';if(!p.met)$('met').value='Soccer';greenDefs.forEach(([k])=>{let v=p.green?.[k]??5;$(`green_${k}`).value=v;$(`green_${k}_value`).textContent=v});riskDefs.forEach(([k])=>{let v=p.risk?.[k]??3;$(`risk_${k}`).value=v;$(`risk_${k}_value`).textContent=v});respectDefs.forEach(([k])=>{let v=p.respect?.[k]??5;$(`respect_${k}`).value=v;$(`respect_${k}_value`).textContent=v});renderAdaptiveRiskSliders();bindAdaptiveRiskInputs()}
function fillMe(){let me=state.me||defaultMe();$('myName').value=me.name||'';if($('myDatingLens'))$('myDatingLens').value=me.datingLens||'Man evaluating women';$('myPhilosophy').value=me.philosophy||'';needDefs.forEach(([k])=>{let v=me.needs?.[k]??5;$(`need_${k}`).value=v;$(`need_${k}_value`).textContent=v});roleDefs.forEach(([k])=>{let el=$(`role_${k}`);if(el){let v=me.roles?.[k]??5;el.value=v;$(`role_${k}_value`).textContent=v}});
deficiencyDefs.forEach(([k])=>{let el=$(`def_${k}`);if(el)el.checked=!!me.deficiencies?.[k]});
blindSpotDefs.forEach(([k])=>{let el=$(`blind_${k}`);if(el)el.checked=!!me.blindSpots?.[k]});
patternDefs.forEach(([k])=>{let el=$(`pattern_${k}`);if(el)el.checked=!!me.patterns?.[k]});
tendencyDefs.forEach(([k])=>$(`t_${k}`).checked=!!me.tendencies?.[k]);updateMyReadout()}
function collectForm(){let p=currentProfile();['name','pronounContext','rtype','met','desiredOutcome','socialNotes','impression','evidence','interpretation','hesitation','notes'].forEach(id=>p[id]=$(id).value);greenDefs.forEach(([k])=>p.green[k]=Number($(`green_${k}`).value));riskDefs.forEach(([k])=>p.risk[k]=Number($(`risk_${k}`).value));respectDefs.forEach(([k])=>p.respect[k]=Number($(`respect_${k}`).value));socialDefs.forEach(([k])=>p.social[k]=Number($(`social_${k}`).value))}
function collectMe(){let me=state.me||defaultMe();me.name=$('myName').value;if($('myDatingLens'))me.datingLens=$('myDatingLens').value;me.philosophy=$('myPhilosophy').value;needDefs.forEach(([k])=>me.needs[k]=Number($(`need_${k}`).value));me.roles=me.roles||{};roleDefs.forEach(([k])=>{let el=$(`role_${k}`);if(el)me.roles[k]=Number(el.value)});
me.deficiencies=me.deficiencies||{};deficiencyDefs.forEach(([k])=>{let el=$(`def_${k}`);if(el)me.deficiencies[k]=el.checked});
me.blindSpots=me.blindSpots||{};blindSpotDefs.forEach(([k])=>{let el=$(`blind_${k}`);if(el)me.blindSpots[k]=el.checked});
me.patterns=me.patterns||{};patternDefs.forEach(([k])=>{let el=$(`pattern_${k}`);if(el)me.patterns[k]=el.checked});
tendencyDefs.forEach(([k])=>me.tendencies[k]=$(`t_${k}`).checked);state.me=me}
function avg(obj,defs){return defs.reduce((s,[k])=>s+Number(obj?.[k]||0),0)/defs.length}
function need(k){return Number((state.me?.needs||{})[k]??5)}function tendency(k){return !!(state.me?.tendencies||{})[k]}
function respectIndex(p){return Math.round(Math.max(0,Math.min(100,avg(p.respect,respectDefs)*10)))}

function socialHealth(p){
  let defs=currentRiskDefs(p);
  let total=0, weight=0;
  defs.forEach(([k,,,,good])=>{
    let v=Number(p.social?.[k]??(good?5:3));
    total += good ? v : (10-v);
    weight += 1;
  });
  return Math.round(Math.max(0,Math.min(100,(total/Math.max(1,weight))*10)));
}


function repairScore(p){let v=avg(p.repair,repairDefs);let resent=Number(p.repair?.resentmentRisk??3);return Math.round(Math.max(0,Math.min(100,(v*10)-(resent*4))))}
function reciprocityScore(p){return Math.round(Math.max(0,Math.min(100,avg(p.reciprocityDyn,reciprocityDefs)*10)))}
function embeddedScore(p){return Math.round(Math.max(0,Math.min(100,avg(p.embedded,embeddedDefs)*10)))}
function vectorAlignment(p){
  let self=[
    need('needWarmth'),need('needRespect'),need('needAppreciation'),need('needIntellect'),need('needStability'),need('needAffection'),need('needIndependence'),7
  ];
  let other=[
    p.green.warmth||5,(respectIndex(p)/10)||5,p.green.reciprocity||5,p.green.curiosity||5,p.green.stability||5,p.green.attraction||5,10-(p.risk.chaos||0),embeddedScore(p)/10
  ];
  let dot=0,as=0,bs=0;
  for(let i=0;i<self.length;i++){dot+=self[i]*other[i];as+=self[i]*self[i];bs+=other[i]*other[i]}
  let cos=dot/(Math.sqrt(as)*Math.sqrt(bs)||1);
  return Math.round(Math.max(0,Math.min(100,cos*100)));
}
function attachmentLoopType(p,m){
  let anxious=(p.energy?.rumination||0)+(p.green?.attraction||0)+(p.risk?.inconsistent||0);
  let avoidant=(10-(p.green?.reciprocity||5))+(10-(p.repair?.repairAbility||5))+(p.risk?.inconsistent||0);
  let secure=(m.peaceIndex/10)+(m.respectIndex/10)+(repairScore(p)/10)+(embeddedScore(p)/10);
  if(secure>=28)return 'Secure / stabilizing';
  if(anxious>avoidant+3)return 'Anxious pursuit risk';
  if(avoidant>anxious+3)return 'Avoidant distance risk';
  if(anxious>=18&&avoidant>=18)return 'Pursuit-withdraw loop';
  return 'Mixed / unclear';
}
function dynamicArchetype(p,m){
  if(m.peaceIndex>=70&&m.respectIndex>=70&&repairScore(p)>=65&&reciprocityScore(p)>=65)return 'Stable Builder';
  if((p.green.attraction||0)>=8&&m.peaceIndex<55)return 'Intermittent Flame';
  if(repairScore(p)<45)return 'Unrepaired Conflict Pattern';
  if(reciprocityScore(p)<45)return 'One-Sided Effort Dynamic';
  if(embeddedScore(p)>=75&&m.peaceIndex>=60)return 'Grounded Community Tie';
  if((p.risk.chaos||0)>=7)return 'Warm But Chaotic';
  return 'Mixed / Still Learning';
}

function metrics(p){let g=avg(p.green,greenDefs),r=avg(p.risk,riskDefs),respect=respectIndex(p);let base=Math.max(0,Math.min(100,g*10-r*4));let personalized=base;personalized+=(respect-50)*.22;personalized+=(p.green.warmth-5)*(need('needWarmth')-5)*.7;personalized+=(p.green.respect-5)*(need('needRespect')-5)*.9;personalized+=(p.green.reciprocity-5)*(need('needAppreciation')-5)*.55;personalized+=(p.green.stability-5)*(need('needStability')-5)*.8;personalized+=(p.green.curiosity-5)*(need('needIntellect')-5)*.55;personalized-=p.risk.chaos*(need('needStability')/10)*2.2;personalized-=p.risk.family*(need('needFamily')/10)*1.4;personalized+=(socialHealth(p)-50)*.22;if(tendency('scarcity')&&p.green.attraction>=7)personalized-=6;if(tendency('attractionOverride')&&p.green.attraction>=8&&p.green.peace<=5)personalized-=10;if(tendency('rescuer')&&p.risk.trauma>=7)personalized-=9;if(tendency('peoplePleaser')&&(p.risk.entitlement>=6||respect<55))personalized-=8;if(tendency('movesFast')&&p.green.attraction>=7&&p.risk.chaos>=6)personalized-=8;personalized=Math.round(Math.max(0,Math.min(100,personalized)));let peaceIndex=Math.round(Math.max(0,Math.min(100,p.green.peace*3.5+p.green.respect*1.2+p.green.warmth*1.3+p.green.reciprocity*1.4+p.green.stability*1.4+respect*.012-p.risk.chaos*1.5-p.risk.inconsistent-p.risk.trauma*.8)));return{greenAvg:g,riskAvg:r,base:Math.round(base),personalized,peaceIndex,respectIndex:respect,social:socialHealth(p)}}
function safeUpdate(){try{updateReadout()}catch(e){$('status').textContent='Calculation error: '+e.message;console.error(e)}}
function updateReadout(){let p=currentProfile(),m=metrics(p);$('meterFill').style.width=m.personalized+'%';$('peaceIndex').textContent=m.peaceIndex;$('respectIndex').textContent=m.respectIndex;$('peacePhrase').textContent=m.peaceIndex>=75?'Calming, respectful, emotionally low-cost.':m.peaceIndex>=55?'Worth exploring, but watch whether calm increases.':m.peaceIndex>=35?'Exciting but not yet peaceful. Slow down.':'Low peace signal. Attraction may be masking emotional cost.';$('respectPhrase').textContent=m.respectIndex>=80?'Strong respect signal: appreciation, reliability, and boundaries look healthy.':m.respectIndex>=60?'Moderate respect signal. Watch consistency over time.':m.respectIndex>=40?'Respect is uncertain. Do not let warmth or attraction compensate too much.':'Low respect signal. This is a major long-term risk.';updateMatrix(m);updateSocialReadout(p,m);updateAttachmentOutput(p,m);updateAdmirationOutput(p,m);updateIntegrationOutput(p,m);updateTranslationEngine(p,m);updateAccuracyOutput(p,m);updateRepairPlanOutput(p,m);updateResponseMode(p,m);updateStrategy(p,m);updateAvatar(p,m);let title='Proceed carefully',cls='',text='Keep learning without outrunning the evidence.';if(m.personalized>=70&&m.peaceIndex>=65&&m.respectIndex>=65){title='Worth continuing to explore';cls='good';text='For your profile, this currently aligns with peace, respect, and low emotional cost.'}else if(m.personalized<=40||m.peaceIndex<40||m.respectIndex<40){title='Likely mismatch or boundaries needed';cls='bad';text='For your profile, this may cost too much peace or respect.'}if((p.rtype||'').includes('Do not date')){title='Boundaries-first relationship';cls='';text='This is not for romance escalation. Organize around clarity and boundaries.'}$('readout').className='readout '+cls;$('readout').innerHTML=`<b>${title}</b><br>Personalized Score: <b>${m.personalized}/100</b><br><span class='small'>General: ${m.base}/100 · Repair: ${m.repair}/100 · Reciprocity: ${m.reciprocityDyn}/100 · Grounding: ${m.embedded}/100 · Alignment: ${m.alignment}/100</span><br>${text}`;updateBiasWarnings(p,m);updateGuidance(p,m);updateAI(p,m);drawRadar(p,m);renderTimeline(p);renderCards();$('status').textContent='App loaded. Autosave active.'}
function updateMatrix(m){let hiP=m.peaceIndex>=60,hiR=m.respectIndex>=60;let active=hiP&&hiR?'exceptional':hiP&&!hiR?'comfort':!hiP&&hiR?'work':'risk';$('matrix').innerHTML=`<div class='quad ${active==='comfort'?'active':''}'><b>High Peace / Low Respect</b><span class='small'>Comfort without full partnership.</span></div><div class='quad ${active==='exceptional'?'active':''}'><b>High Peace / High Respect</b><span class='small'>Long-term potential.</span></div><div class='quad ${active==='risk'?'active':''}'><b>Low Peace / Low Respect</b><span class='small'>Proceed carefully.</span></div><div class='quad ${active==='work'?'active':''}'><b>Low Peace / High Respect</b><span class='small'>Foundation exists, but emotional cost is high.</span></div>`}
function updateSocialReadout(p,m){let line=m.social>=75?'The surrounding social environment looks supportive.':m.social>=55?'The social environment is mixed; observe her friends and norms.':m.social>=35?'The social environment may create pressure, comparison, or instability.':'High social-environment risk: contempt, status pressure, or peer policing may affect compatibility.';$('socialReadout').innerHTML=`<p><b>Social Environment Score:</b> ${m.social}/100</p><p>${line}</p><p class='small'>This tracks whether her close social world seems to reward respect, commitment, and stable partnership versus comparison, contempt, and status games.</p>`}
function updateBiasWarnings(p,m){let w=[];if(tendency('scarcity')&&p.green.attraction>=7)w.push(['Scarcity warning','Interest is meaningful, but not evidence they is good for you.']);if(tendency('attractionOverride')&&p.green.attraction>=8&&m.peaceIndex<=55)w.push(['Attraction override','Attraction is outrunning peace/respect.']);if(tendency('rescuer')&&p.risk.trauma>=7)w.push(['Rescuer warning','Do not confuse being needed with being loved.']);if(tendency('peoplePleaser')&&m.respectIndex<60)w.push(['People-pleasing warning','Low respect requires earlier boundary-setting.']);if(p.social.statusPressure>=7)w.push(['Status-pressure warning','Status comparison may affect expectations.']);if(p.hesitation&&p.hesitation.trim().length>20)w.push(['Hesitation note present','Your written hesitation may contain signal that sliders miss. Re-read it before escalating.']);if(!w.length)w.push(['No major blind spot triggered','Current inputs do not strongly trigger selected warnings.']);$('biasWarnings').innerHTML=w.map(([a,b],i)=>`<div class='warning ${i===0&&w.length>1?'dangerWarn':''}'><b>${a}:</b> ${b}</div>`).join('')}
function updateGuidance(p,m){let tips=[];if(m.respectIndex<55)tips.push('Respect is not optional. Warmth without respect often becomes confusing or humiliating.');if(m.peaceIndex<45)tips.push('Low peace after contact matters. Your body may be noticing emotional cost.');if(p.risk.trauma>=7)tips.push('Early heavy disclosure can create false intimacy. Compassion is fine; pacing still matters.');if(p.social.friendsSupport<=3)tips.push('Watch how her close friends talk about committed relationships.');if(!tips.length)tips.push('Keep collecting concrete observations. One interaction is evidence, not a verdict.');$('guidance').innerHTML=tips.map(t=>`<div class='guide'>${t}</div>`).join('')}
function updateAI(p,m){let archetype='Mixed / unclear';if(p.green.attraction>=7&&m.peaceIndex<45)archetype='High attraction, low peace';else if(m.peaceIndex>=70&&m.respectIndex>=70)archetype='Peaceful and respectful';else if(m.respectIndex<45)archetype='Respect caution';else if(p.social.statusPressure>=7||p.social.peerPolicing>=7)archetype='Social-pressure caution';let interp=m.respectIndex<45?'Respect is the central warning. Attraction, warmth, or novelty should not override low appreciation, unreliable commitment, or boundary pressure.':m.peaceIndex>=75&&m.respectIndex>=75?'This profile suggests low emotional cost and strong respect for your stated needs.':p.hesitation?'Your hesitation note may be important. Compare it against the scores before escalating.':'The profile is not decisive yet. Watch whether more contact increases peace, respect, and clarity.';let next=m.peaceIndex<40||m.respectIndex<45?'Slow down. Look for concrete evidence of respect and stability before investing more.':'Continue with a low-pressure interaction and log how you feel afterward.';$('aiInterpretation').innerHTML=`<p><b>Current pattern:</b> ${archetype}.</p><p><b>Respect analysis:</b> ${respectText(m)}</p><p><b>Personalized interpretation:</b> ${interp}</p><p><b>Best next move:</b> ${next}</p><p><b>Hesitation:</b> ${p.hesitation?escapeHTML(p.hesitation).slice(0,500):'none entered.'}</p><p><b>Evidence entered:</b> ${p.evidence?escapeHTML(p.evidence).slice(0,500):'none yet. Add facts to make this less vibes-based.'}</p>`}
function respectText(m){return m.respectIndex>=80?'Respect appears strong: appreciation, reliability, time, and boundaries are scoring well.':m.respectIndex>=60?'Respect appears moderate. It is not a dealbreaker, but consistency matters.':m.respectIndex>=40?'Respect is uncertain and should be watched closely.':'Respect appears weak. This is one of the strongest long-term caution signals.'}
function shortLabel(label){return String(label).replace('Reciprocity','Recip.').replace('Attraction','Attract.').replace('Low Chaos','Low\nChaos').replace('Social Health','Social').replace('Respect','Respect').slice(0,12)}
function drawRadar(p,m){let c=$('radar'),ctx=c.getContext('2d'),w=c.width,h=c.height,cx=w/2,cy=h/2,R=150;ctx.clearRect(0,0,w,h);let axes=[['Warmth',p.green.warmth,need('needWarmth')],['Respect',m.respectIndex/10,need('needRespect')],['Reciprocity',p.green.reciprocity,need('needAppreciation')],['Stability',p.green.stability,need('needStability')],['Peace',m.peaceIndex/10,need('needStability')],['Attraction',p.green.attraction,need('needAffection')],['Low Chaos',10-p.risk.chaos,need('needStability')],['Social Health',m.social/10,7]],n=axes.length;ctx.font='12px -apple-system,BlinkMacSystemFont,Segoe UI,Arial';ctx.textAlign='center';ctx.textBaseline='middle';for(let ring=1;ring<=5;ring++){ctx.beginPath();for(let i=0;i<n;i++){let a=-Math.PI/2+i*2*Math.PI/n,r=R*ring/5,x=cx+Math.cos(a)*r,y=cy+Math.sin(a)*r;i?ctx.lineTo(x,y):ctx.moveTo(x,y)}ctx.closePath();ctx.strokeStyle='#ded6c9';ctx.stroke()}axes.forEach(([label],i)=>{let a=-Math.PI/2+i*2*Math.PI/n;ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+Math.cos(a)*R,cy+Math.sin(a)*R);ctx.strokeStyle='#e8dfd2';ctx.stroke();ctx.fillStyle='#5f574e';ctx.fillText(shortLabel(label),cx+Math.cos(a)*(R+24),cy+Math.sin(a)*(R+22))});drawPoly(ctx,axes.map(a=>a[2]),R,cx,cy,n,'rgba(90,120,160,.16)','#5a78a0',2);drawPoly(ctx,axes.map(a=>a[1]),R,cx,cy,n,'rgba(129,91,51,.24)','#815b33',3);ctx.textAlign='left';ctx.fillStyle='#815b33';ctx.fillText('This person',18,24);ctx.fillStyle='#5a78a0';ctx.fillText('Your needs',18,42)}
function drawPoly(ctx,vals,R,cx,cy,n,fill,stroke,lw){ctx.beginPath();vals.forEach((val,i)=>{let a=-Math.PI/2+i*2*Math.PI/n,r=R*Math.max(0,Math.min(10,val))/10,x=cx+Math.cos(a)*r,y=cy+Math.sin(a)*r;i?ctx.lineTo(x,y):ctx.moveTo(x,y)});ctx.closePath();ctx.fillStyle=fill;ctx.fill();ctx.strokeStyle=stroke;ctx.lineWidth=lw;ctx.stroke();ctx.lineWidth=1}




const nutrientList=['Warmth','Respect','Appreciation','Understanding','Fun','Mentorship','Accountability','Stability','Shared activity','Challenge'];
function quickVal(id){let el=$(id);return el?Number(el.value):0}
function updateQuickCardLabels(){['qcWarmth','qcRespect','qcTrust','qcEnergy'].forEach(id=>{let el=$(id),lab=$(id+'Val');if(el&&lab)lab.textContent=el.value})}
function addQuickCard(){
  let name=($('quickName')?.value||'').trim();
  if(!name){alert('Add a name first.');return;}
  let category=$('quickCategory').value;
  let p=blankProfile();
  p.name=name;
  p.rtype=category==='Romantic'?'Romantic prospect':category==='Work'?'Coworker / professional peer':category==='Family'?'Family / long-term obligation':category==='Boundary'?'Boundary-only relationship':category==='Friend'?'Friend / social connection':'Team / sports / social group';
  p.desiredOutcome=category==='Boundary'?'Boundary management':category==='Work'?'Professional cooperation':category==='Family'?'Peaceful family coexistence':category==='Romantic'?'Explore slowly':'Casual friendship';
  p.quick={category:category,frequency:$('quickFrequency').value,nutrient:$('quickNutrient').value,warmth:quickVal('qcWarmth'),respect:quickVal('qcRespect'),trust:quickVal('qcTrust'),energy:quickVal('qcEnergy'),note:$('quickCardNote').value||''};
  p.green.warmth=p.quick.warmth;p.green.respect=p.quick.respect;p.green.peace=Math.max(0,Math.min(10,5+p.quick.energy/2));
  p.respect.opinion=p.quick.respect;p.respect.boundaries=p.quick.respect;p.respect.commitments=p.quick.trust;
  p.evidence='Quick card entry.';p.notes=p.quick.note;
  state.profiles.push(p);state.currentId=p.id;saveState();
  if($('quickName'))$('quickName').value='';if($('quickCardNote'))$('quickCardNote').value='';
  renderProfiles();renderCards();renderEcosystem();fillForm();safeUpdate();$('status').textContent='Quick card added.';
}
function quickCategory(p){
  if(p.quick?.category)return p.quick.category;
  let c=profileCategory(p);
  if(c==='Romantic')return 'Romantic'; if(c==='Friend')return 'Friend'; if(c==='Work')return 'Work'; if(c==='Family')return 'Family'; if(c==='Boundary')return 'Boundary';
  return 'Other';
}
function cardNutrient(p){return p.quick?.nutrient || (quickCategory(p)==='Work'?'Accountability':quickCategory(p)==='Family'?'Stability':quickCategory(p)==='Romantic'?'Warmth':'Fun')}
function cardEnergy(p){if(p.quick&&p.quick.energy!==undefined)return Number(p.quick.energy);let old=state.currentId;state.currentId=p.id;let m=metrics(p);state.currentId=old;return Math.round((m.personalized-50)/10)}
function nutrientScores(){
  let scores={};nutrientList.forEach(n=>scores[n]=0);
  (state.profiles||[]).forEach(p=>{
    let n=cardNutrient(p), energy=cardEnergy(p), warmth=p.quick?.warmth ?? p.green?.warmth ?? 5, respect=p.quick?.respect ?? p.green?.respect ?? 5, trust=p.quick?.trust ?? 5;
    let val=Math.max(0,Math.min(10,(warmth+respect+trust)/3 + energy/3));
    if(scores[n]!==undefined)scores[n]+=val;
    if(warmth>=7)scores['Warmth']+=1.8;
    if(respect>=7)scores['Respect']+=1.8;
    if(trust>=7)scores['Stability']+=1.2;
    if((p.quick?.category||'')==='Mentor')scores['Mentorship']+=2.5;
  });
  let out={};nutrientList.forEach(n=>out[n]=Math.round(Math.max(0,Math.min(100,scores[n]*10))));return out;
}
function renderEcosystem(){
  if(!$('ecosystemSummary'))return;
  let profiles=state.profiles||[], counts={};profiles.forEach(p=>{let c=quickCategory(p);counts[c]=(counts[c]||0)+1});
  $('ecosystemSummary').innerHTML=`<p><b>Total cards:</b> ${profiles.length}</p><p>${Object.entries(counts).map(([k,v])=>`<span class="ecoPill">${k}: ${v}</span>`).join('')}</p>`;
  renderNutrients();renderDeficiencies();renderCultivation();renderRoleOutput();renderGrowthTargets();drawEcosystemCanvas();
}
function renderNutrients(){
  if(!$('nutrientBars'))return;let scores=nutrientScores();
  $('nutrientBars').innerHTML=nutrientList.map(n=>`<div class="nutrientRow"><div>${n}</div><div class="nutrientTrack"><div class="nutrientFill" style="width:${scores[n]}%"></div></div><div class="small">${scores[n]}</div></div>`).join('');
}
function renderDeficiencies(){
  if(!$('deficiencyOutput'))return;let scores=nutrientScores(), low=Object.entries(scores).filter(([k,v])=>v<35).sort((a,b)=>a[1]-b[1]);
  if(!low.length){$('deficiencyOutput').innerHTML='<p><b>No severe deficiency detected.</b> Your ecosystem has at least some supply across the main nutrients.</p>';return;}
  $('deficiencyOutput').innerHTML='<p><b>Underfed nutrients:</b> '+low.map(([k,v])=>`${k} (${v})`).join(', ')+'</p><p><b>Supplement idea:</b> do not demand this from one overloaded relationship. Add one low-pressure source targeted to the missing nutrient.</p>';
}
function renderCultivation(){
  if(!$('cultivationOutput'))return;let scores=nutrientScores(), lowest=Object.entries(scores).sort((a,b)=>a[1]-b[1])[0]?.[0]||'Warmth';
  let advice={
    'Warmth':'Cultivate low-pressure repeated contact: dog park regulars, casual dinners, church/community groups, or a friend you can text without performing.',
    'Respect':'Seek competent, reciprocal people. Build through shared projects, sports teams, volunteering, or professional peers who follow through.',
    'Appreciation':'Practice offering appreciation first to safe people, then notice who returns it naturally.',
    'Understanding':'Find one confidant context: men’s group, therapist/coach, older mentor, or a thoughtful friend who can handle depth.',
    'Fun':'Add playful recurring activity: soccer, trivia, pickleball, hiking group, board games, or a low-stakes class.',
    'Mentorship':'Pursue an older or more experienced person by asking for specific advice, not emotional rescue.',
    'Accountability':'Join a group with standards: training group, project group, church service team, or professional cohort.',
    'Stability':'Prioritize consistent people over exciting people. Repeated small reliability beats intensity.',
    'Shared activity':'Choose a recurring activity where conversation is optional and repetition builds familiarity.',
    'Challenge':'Seek people who are kind but not indulgent: coaches, mentors, serious teammates, or skilled peers.'
  };
  $('cultivationOutput').innerHTML=`<p><b>Most useful relationship to cultivate next:</b> ${lowest}</p><p>${advice[lowest]||advice.Warmth}</p>`;
}
function drawEcosystemCanvas(){
  let c=$('ecosystemCanvas'); if(!c)return;let ctx=c.getContext('2d'),w=c.width,h=c.height,cx=w/2,cy=h/2;
  ctx.clearRect(0,0,w,h);ctx.fillStyle='#fbf7ef';ctx.fillRect(0,0,w,h);
  ctx.textAlign='center';ctx.textBaseline='middle';ctx.font='18px -apple-system,BlinkMacSystemFont,Segoe UI,Arial';ctx.fillStyle='#25221d';ctx.fillText('You',cx,cy);
  ctx.beginPath();ctx.arc(cx,cy,36,0,Math.PI*2);ctx.strokeStyle='#815b33';ctx.lineWidth=2;ctx.stroke();ctx.lineWidth=1;
  let profiles=state.profiles||[], n=Math.max(profiles.length,1);
  profiles.forEach((p,i)=>{
    let cat=quickCategory(p), energy=cardEnergy(p), closeness=p.quick?.frequency==='Daily'?105:p.quick?.frequency==='Weekly'?155:p.quick?.frequency==='Monthly'?215:270;
    let angle=-Math.PI/2+i*2*Math.PI/n, x=cx+Math.cos(angle)*closeness, y=cy+Math.sin(angle)*closeness;
    let radius=14+Math.max(0,Math.min(10,(p.quick?.trust??5)));
    ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(x,y);ctx.strokeStyle=energy>=0?'rgba(129,91,51,.35)':'rgba(158,59,49,.35)';ctx.stroke();
    ctx.beginPath();ctx.arc(x,y,radius,0,Math.PI*2);ctx.fillStyle=energy>=4?'#e8f4e8':energy<0?'#fae5e2':'#fff3d8';ctx.fill();ctx.strokeStyle='#ded6c9';ctx.stroke();
    ctx.fillStyle='#25221d';ctx.font='11px -apple-system,BlinkMacSystemFont,Segoe UI,Arial';ctx.fillText((p.name||'Untitled').slice(0,12),x,y+radius+12);
    ctx.fillStyle='#6e675d';ctx.fillText(cat,x,y+radius+25);
  });
}

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
    return `<div class=\"cardTile\" data-card-id=\"${p.id}\" onclick=\"openCard('${p.id}')\"><div class="cardTop"><div class="cardGlyph">${cardGlyphFor(p,m)}</div><div><div class="cardName">${escapeHTML(p.name||'Untitled')}</div><div class="cardType">${escapeHTML(p.rtype||'Unclear')} · ${profileCategory(p)}</div></div></div><div class="miniMetrics"><div class="miniMetric"><b>${m.peaceIndex}</b><span>Peace</span></div><div class="miniMetric"><b>${m.respectIndex}</b><span>Respect</span></div><div class="miniMetric"><b>${m.personalized}</b><span>Fit</span></div></div></div>`;
  }).join('');
  bindCardTileClicks();
}

function bindCardTileClicks(){
  document.querySelectorAll('.cardTile[data-card-id]').forEach(tile=>{
    if(tile.dataset.bound==='1')return;
    tile.dataset.bound='1';
    tile.addEventListener('click',()=>openCard(tile.dataset.cardId));
  });
}

function openCard(id){
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
  p.snapshots.push({id:uid(),label:new Date().toLocaleDateString()+' quick update',created:new Date().toISOString(),peace:m.peaceIndex,respect:m.respectIndex,compat:m.personalized,repair:m.repair,reciprocity:m.reciprocityDyn,embedded:m.embedded,alignment:m.alignment,energy:m.energy,note:note,hesitation:p.hesitation||'',emotion:emotion,evidenceConfidence:($('evidenceConfidence')?$('evidenceConfidence').value:''),interpretationChecked:($('interpretationChecked')?$('interpretationChecked').value:''),quick:true});
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



function adaptiveRiskLens(p){
  let cat=profileCategory(p);
  let pc=p?.pronounContext||'Neutral / person';
  if(cat==='Romantic'){
    if(pc.includes('Man'))return 'romanticMan';
    if(pc.includes('Woman'))return 'romanticWoman';
    let lens=state.me?.datingLens||'Man evaluating women';
    if(lens.includes('Woman evaluating men'))return 'romanticMan';
    if(lens.includes('Man evaluating women'))return 'romanticWoman';
    return 'general';
  }
  if(cat==='Work')return 'work';
  if(cat==='Friend')return 'friend';
  if(cat==='Family')return 'family';
  if(cat==='Boundary')return 'boundary';
  return 'general';
}
function currentRiskDefs(p){return adaptiveRiskDefs[adaptiveRiskLens(p)]||adaptiveRiskDefs.general}
function renderAdaptiveRiskSliders(){
  if(!$('socialSliders'))return;
  let p=currentProfile(), lens=adaptiveRiskLens(p), defs=currentRiskDefs(p);
  $('socialSliders').innerHTML=`<div class="adaptiveNote"><b>${lens.replace(/([A-Z])/g,' $1')} lens</b><div class="small">Risk questions adapt to card type and pronoun/context.</div></div>`+defs.map(([k,l,h,left,right,good])=>sliderHTML('social',k,l,h,p.social?.[k]??(good?5:3),left,right,good)).join('');
}
function bindAdaptiveRiskInputs(){
  let p=currentProfile();
  currentRiskDefs(p).forEach(([k])=>{
    let el=$(`social_${k}`);
    if(el&&!el.dataset.bound){el.dataset.bound='1';el.addEventListener('input',()=>{$(`social_${k}_value`).textContent=el.value;onAnyChange()})}
  });
}

function personWords(p){
  let c=p?.pronounContext||'Neutral / person';
  if(c.includes('Woman'))return {sub:'she', obj:'her', poss:'her', label:'woman'};
  if(c.includes('Man'))return {sub:'he', obj:'him', poss:'his', label:'man'};
  if(c.includes('They'))return {sub:'they', obj:'them', poss:'their', label:'person'};
  return {sub:'they', obj:'them', poss:'their', label:'person'};
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


function latestEmotionState(p){
  let snaps=p.snapshots||[];
  let last=snaps[snaps.length-1]||{};
  return last.emotion || ($('emotionalState')?$('emotionalState').value:'Calm / reflective');
}
function accuracyRisk(p,m){
  let emotion=latestEmotionState(p);
  let evidence=($('evidenceConfidence')?$('evidenceConfidence').value:'') || (p.snapshots?.slice(-1)[0]?.evidenceConfidence||'');
  let checked=($('interpretationChecked')?$('interpretationChecked').value:'') || (p.snapshots?.slice(-1)[0]?.interpretationChecked||'');
  let risk=0;
  if(emotion && !emotion.includes('Calm'))risk+=30;
  if(String(evidence).includes('Low'))risk+=30;
  if(String(evidence).includes('Medium'))risk+=15;
  if(String(checked).includes('No'))risk+=25;
  if((p.evidence||'').trim().length<20 && (p.interpretation||p.story||'').trim().length>30)risk+=20;
  return Math.max(0,Math.min(100,risk));
}

function translationScore(p){
  let t=p.translation||{};
  let mismatch=(Number(t.competenceThreat||5)+Number(t.invisibleLaborSensitivity||5)+Number(t.reassuranceNeed||5)+(10-Number(t.emotionalTranslation||5)))/4;
  return Math.round(Math.max(0,Math.min(100,mismatch*10)));
}
function mainFrictionDomain(p){
  let t=p.translation||{};
  let scores={
    chores:(t.utilityIdentity||5)+(t.taskLove||5)+(t.competenceThreat||5)+(t.invisibleLaborSensitivity||5),
    planning:(t.missionPriority||5)+(t.invisibleLaborSensitivity||5)+(10-(t.emotionalTranslation||5)),
    criticism:(t.competenceThreat||5)+(t.appreciationNeed||5),
    work:(t.missionPriority||5)+(t.reassuranceNeed||5),
    affection:(t.reassuranceNeed||5)+(10-(t.emotionalTranslation||5)),
    sex:(t.reassuranceNeed||5)+(t.competenceThreat||5),
    money:(t.utilityIdentity||5)+(t.missionPriority||5),
    family:(t.invisibleLaborSensitivity||5)+(t.reassuranceNeed||5)
  };
  return Object.entries(scores).sort((a,b)=>b[1]-a[1])[0][0];
}
function updateTranslationOutput(p,m){
  if(!$('translationOutput'))return;
  let score=translationScore(p), domain=mainFrictionDomain(p);
  let t=p.translation||{};
  let likely = score>=65 ? 'High meaning-mismatch risk' : score>=40 ? 'Moderate meaning-mismatch risk' : 'Lower meaning-mismatch risk';
  let interpretation = 'This conflict may be less about bad intent and more about how behavior is being translated.';
  if((t.competenceThreat||0)>=7)interpretation='Correction may be landing as competence threat, not simple preference feedback.';
  if((t.invisibleLaborSensitivity||0)>=7)interpretation='The other side may experience the issue as invisible labor or emotional invisibility.';
  if((t.missionPriority||0)>=7)interpretation='Mission/work bandwidth may be competing with relational maintenance.';
  $('translationOutput').innerHTML=`<p><span class="translationBadge">${likely}</span><span class="translationBadge">Main domain: ${domain}</span></p><p>${interpretation}</p>`;
}
function drawTranslationCanvas(p){
  let c=$('translationCanvas'); if(!c)return;
  let ctx=c.getContext('2d'),w=c.width,h=c.height;
  ctx.clearRect(0,0,w,h);ctx.fillStyle='#fff';ctx.fillRect(0,0,w,h);
  let domain=mainFrictionDomain(p), t=p.translation||{};
  let boxes=[
    ['Observed behavior', domain==='chores'?'Task not done / task corrected':'Friction event'],
    ['Intended meaning', (t.invisibleLaborSensitivity||0)>=7?'Need for comfort, help, or being seen':'Preference, request, or stress signal'],
    ['Received meaning', (t.competenceThreat||0)>=7?'Failure / not useful / lost points':'Possible criticism or lack of appreciation'],
    ['Repair path', (t.playfulRepair||0)>=7?'Playful redirection + preserve dignity':'Clarify meaning without blame']
  ];
  ctx.font='13px -apple-system,BlinkMacSystemFont,Segoe UI,Arial';ctx.textAlign='center';ctx.textBaseline='middle';
  boxes.forEach((b,i)=>{
    let x=95+i*185,y=120;
    ctx.fillStyle='#fbf7ef';ctx.strokeStyle='#ded6c9';ctx.lineWidth=1;
    roundRect(ctx,x-70,y-45,140,90,14,true,true);
    ctx.fillStyle='#25221d';ctx.font='12px -apple-system,BlinkMacSystemFont,Segoe UI,Arial';ctx.fillText(b[0],x,y-18);
    ctx.fillStyle='#6e675d';wrapText(ctx,b[1],x,y+10,120,15);
    if(i<boxes.length-1){ctx.strokeStyle='#815b33';ctx.beginPath();ctx.moveTo(x+75,y);ctx.lineTo(x+110,y);ctx.stroke();ctx.fillText('→',x+92,y-10);}
  });
  ctx.fillStyle='#815b33';ctx.font='15px -apple-system,BlinkMacSystemFont,Segoe UI,Arial';ctx.fillText('Meaning Translation Flow',w/2,30);
}
function roundRect(ctx,x,y,w,h,r,fill,stroke){ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath();if(fill)ctx.fill();if(stroke)ctx.stroke();}
function wrapText(ctx,text,x,y,maxWidth,lineHeight){let words=String(text).split(' '),line='';for(let n=0;n<words.length;n++){let test=line+words[n]+' ';if(ctx.measureText(test).width>maxWidth&&n>0){ctx.fillText(line,x,y);line=words[n]+' ';y+=lineHeight}else line=test}ctx.fillText(line,x,y)}
function updateFrictionHeatmap(p){
  if(!$('frictionHeatmap'))return;
  let t=p.translation||{};
  let vals={
    'Chores / tasks':Math.min(100,((t.utilityIdentity||5)+(t.taskLove||5)+(t.competenceThreat||5)+(t.invisibleLaborSensitivity||5))*2.5),
    'Planning / logistics':Math.min(100,((t.missionPriority||5)+(t.invisibleLaborSensitivity||5)+(10-(t.emotionalTranslation||5)))*3.3),
    'Correction / criticism':Math.min(100,((t.competenceThreat||5)+(t.appreciationNeed||5))*5),
    'Work / mission':Math.min(100,((t.missionPriority||5)+(t.reassuranceNeed||5))*5),
    'Affection / reassurance':Math.min(100,((t.reassuranceNeed||5)+(10-(t.emotionalTranslation||5)))*5),
    'Sex / desire':Math.min(100,((t.reassuranceNeed||5)+(t.competenceThreat||5))*5),
    'Money / provision':Math.min(100,((t.utilityIdentity||5)+(t.missionPriority||5))*5),
    'Family / roles':Math.min(100,((t.invisibleLaborSensitivity||5)+(t.reassuranceNeed||5))*5)
  };
  $('frictionHeatmap').innerHTML=Object.entries(vals).sort((a,b)=>b[1]-a[1]).map(([k,v])=>`<div class="heatCell"><div class="heatTop"><span>${k}</span><span>${Math.round(v)}</span></div><div class="heatTrack"><div class="heatFill" style="width:${Math.round(v)}%"></div></div></div>`).join('');
}
function updateRepairLanguage(p){
  if(!$('repairLanguageOutput'))return;
  let t=p.translation||{}, domain=mainFrictionDomain(p);
  let options=[];
  if((t.competenceThreat||0)>=7){
    options.push(['Avoid fake praise sandwich','Do not make appreciation feel like a setup for correction. Focus on the larger pattern of what is working before bringing up preferences.']);
    options.push(['Playful redirection','Use humor/self-awareness to keep closeness: “I know I’m weirdly specific about this, but this version makes my brain relax.”']);
    options.push(['Meaning explanation','Explain the comfort gained rather than the defect: “When this is handled, I feel calmer and more taken care of.”']);
  }
  if((t.invisibleLaborSensitivity||0)>=7){
    options.push(['Make invisible load visible','Translate the task into emotional load: “When I keep tracking this alone, I start feeling like the manager instead of a partner.”']);
  }
  if((t.missionPriority||0)>=7){
    options.push(['Respect bandwidth, increase salience','Tie the request to priority and timing: “Can we pick exactly when this gets handled so I can stop carrying it mentally?”']);
  }
  if(!options.length){
    options.push(['Clarify before judging','Ask one non-accusatory question and state the impact clearly.']);
  }
  $('repairLanguageOutput').innerHTML=options.map(([h,b])=>`<div class="languageOption"><b>${h}</b><br>${b}</div>`).join('');
}
function updateTranslationEngine(p,m){
  updateTranslationOutput(p,m);drawTranslationCanvas(p);updateFrictionHeatmap(p);updateRepairLanguage(p);
}

function updateAccuracyOutput(p,m){
  if(!$('accuracyOutput'))return;
  let risk=accuracyRisk(p,m);
  let msg=risk>=65?'High distortion risk: slow down before drawing a conclusion. Convert the concern into observable facts and clarify once if safe.':risk>=35?'Moderate distortion risk: your read may be partly correct, but needs more evidence or clarification.':'Lower distortion risk: assessment appears more grounded in observable evidence.';
  $('accuracyOutput').innerHTML=`<div class="accuracyBox"><b>Assessment accuracy risk:</b> ${risk}/100<br>${msg}</div>`;
}
function repairFirstPlan(p,m){
  let cat=profileCategory(p);
  let repair=m.repair||50, respect=m.respectIndex||50, peace=m.peaceIndex||50;
  let steps=[];
  let mode='Clarify First';
  if(cat==='Work'){
    mode='Workplace Clarification';
    steps=[
      'Write down the observable behavior without interpretation.',
      'Identify the work impact: deadline, role clarity, priority, respect, or communication.',
      'Ask one neutral clarification question: “Can you clarify what you want prioritized?”',
      'Reflect back expectations in writing after the conversation.',
      'If hostility persists after clarification, then shift toward containment and documentation.'
    ];
  } else if(cat==='Family'){
    mode='Boundary + Repair';
    steps=[
      'Separate the old family pattern from the current event.',
      'Name one specific behavior and one specific request.',
      'Use a short boundary rather than a long debate.',
      'Watch whether they respect the limit without punishment.'
    ];
  } else if(cat==='Romantic'){
    mode='Repair Attempt';
    steps=[
      'State the feeling without accusation.',
      'Ask for their interpretation before assuming motive.',
      'Make one concrete request.',
      'Watch for accountability, warmth, and repair behavior.'
    ];
  } else {
    mode='Low-Drama Clarification';
    steps=[
      'Assume miscommunication first if there is no repeated pattern.',
      'Ask one direct but non-accusatory question.',
      'Watch behavior after the clarification.',
      'Escalate to boundaries only if the pattern repeats.'
    ];
  }
  if(repair<40||respect<35)steps.push('If repair attempts repeatedly fail, stop over-explaining and shift to containment.');
  return {mode,steps};
}
function updateRepairPlanOutput(p,m){
  if(!$('repairPlanOutput'))return;
  let plan=repairFirstPlan(p,m);
  $('repairPlanOutput').innerHTML=`<div class="modeCard"><div class="modeTag">Repair-first protocol</div><div class="modeTitle">${plan.mode}</div><ol class="repairSteps">${plan.steps.map(s=>`<li>${s}</li>`).join('')}</ol></div>`;
}

function responseMode(p,m){
  let cat=profileCategory(p);
  let constraint=(cat==='Work'||cat==='Family'||cat==='Child')?'high':(cat==='Friend'?'medium':'low');
  let repair=m.repair||50,peace=m.peaceIndex||50,respect=m.respectIndex||50,recip=m.reciprocityDyn||50;
  let chaos=p.risk?.chaos||0;

  if(constraint==='high' && (respect<35 || peace<35) && repair<45){
    return {
      mode:'Containment Mode',
      tag:'High-constraint relationship',
      actions:[
        'Reduce unnecessary emotional exposure',
        'Use procedural communication',
        'Increase predictability and documentation',
        'Strengthen support elsewhere in your ecosystem',
        'Avoid reactive escalation'
      ]
    };
  }

  if(translationScore(p)>=55 && repair>35){
    return {mode:'Translation Mode',tag:'Meaning mismatch likely',actions:['Assume translation mismatch before bad intent','Separate observed behavior from received meaning','Use comfort/impact language rather than correction language','Preserve dignity before requesting change','Create one clear behavioral agreement']};
  }

  if(repair>60 && peace<65){
    return {
      mode:'Repair Mode',
      tag:'Potentially improvable',
      actions:[
        'Increase direct communication',
        'Test accountability and repair',
        'Address recurring friction earlier'
      ]
    };
  }

  if(recip<45){
    return {
      mode:'Detachment Mode',
      tag:'Asymmetry detected',
      actions:[
        'Reduce overinvestment',
        'Diversify emotional supports',
        'Track behavior over time'
      ]
    };
  }

  if(chaos>=7){
    return {
      mode:'Observation Mode',
      tag:'Volatility present',
      actions:[
        'Slow emotional investment',
        'Gather more longitudinal evidence',
        'Watch consistency over intensity'
      ]
    };
  }

  return {
    mode:'Growth Mode',
    tag:'Generally constructive',
    actions:[
      'Continue healthy investment',
      'Maintain reciprocity and boundaries',
      'Strengthen recurring real-world interaction'
    ]
  };
}

function updateResponseMode(p,m){
  if(!$('responseModeOutput'))return;
  let r=responseMode(p,m);
  $('responseModeOutput').innerHTML=
  `<div class="modeCard">
    <div class="modeTag">${r.tag}</div>
    <div class="modeTitle">${r.mode}</div>
    <ul>${r.actions.map(x=>`<li>${x}</li>`).join('')}</ul>
  </div>`;
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
    p.snapshots.push({id:uid(),label:label||new Date().toLocaleDateString(),created:new Date().toISOString(),peace:m.peaceIndex,respect:m.respectIndex,compat:m.personalized,repair:m.repair,reciprocity:m.reciprocityDyn,embedded:m.embedded,alignment:m.alignment,energy:m.energy,note:p.notes||'',hesitation:p.hesitation||''});
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



function saveCurrentCard(){
  collectForm();
  saveState();
  renderProfiles();
  renderCards();
  if(typeof renderEcosystem==='function')renderEcosystem();
  safeUpdate();
  $('status').textContent='Card saved.';
}

function deleteCurrentCard(){
  let p=currentProfile();
  if(!p)return;
  let name=p.name||'Untitled';
  if(!confirm(`Delete card "${name}"? This cannot be undone unless you have an export backup.`))return;
  state.profiles=(state.profiles||[]).filter(x=>x.id!==p.id);
  if(!state.profiles.length){let np=blankProfile();state.profiles.push(np);state.currentId=np.id}else{state.currentId=state.profiles[0].id}
  saveState();fillForm();renderProfiles();renderCards();renderEcosystem();safeUpdate();showTab('cards');$('status').textContent='Card deleted.';
}
function attachmentStability(p,m){
  let snaps=p.snapshots||[];
  let stability=m.peaceIndex*.35+m.respectIndex*.35+(100-Math.min(100,(p.risk.chaos||0)*10))*.15+(100-Math.min(100,(p.risk.inconsistent||0)*10))*.15;
  if(snaps.length>=2){let last=snaps[snaps.length-1],first=snaps[0];stability+=(last.peace-first.peace)*.15+(last.respect-first.respect)*.15}
  return Math.round(Math.max(0,Math.min(100,stability)));
}
function updateAttachmentOutput(p,m){
  if(!$('attachmentOutput'))return;
  let asi=attachmentStability(p,m);
  let text=asi>=75?'Secure/stabilizing pattern.':asi>=55?'Mixed but workable; watch repair and consistency.':asi>=35?'Attachment activation risk: volatility or uncertainty may be driving the bond.':'High instability risk: possible anxious pursuit, withdrawal, or intermittent reinforcement.';
  $('attachmentOutput').innerHTML=`<p><b>Attachment Stability Index:</b> ${asi}/100</p><p>${text}</p>`;
}
function updateAdmirationOutput(p,m){
  if(!$('admirationOutput'))return;
  let youToThem=Math.round(((p.green.attraction||5)+(p.green.respect||5)+(p.green.warmth||5)+(p.green.curiosity||5))*2.5);
  let themToYou=Math.round((m.respectIndex*.45+(p.green.reciprocity||5)*10*.35+(p.respect.appreciation||5)*10*.20));
  let gap=Math.abs(youToThem-themToYou);
  let text=gap<15?'Admiration looks fairly balanced.':youToThem>themToYou?'You may be admiring/investing more than you are receiving.':'They may be showing more investment than you currently feel.';
  $('admirationOutput').innerHTML=`<div class="symmetryBars"><div class="symmetryRow"><div>You → Them</div><div class="symTrack"><div class="symFill" style="width:${youToThem}%"></div></div><div>${youToThem}</div></div><div class="symmetryRow"><div>Them → You</div><div class="symTrack"><div class="symFill" style="width:${themToYou}%"></div></div><div>${themToYou}</div></div></div><p class="small">${text}</p>`;
}

function specialRelationshipContext(p){
  let cat=profileCategory(p);
  if(cat==='Child'){
    return {
      nutrients:['purpose','warmth','love','meaning','bonding'],
      costs:['sleep disruption','financial pressure','stress'],
      note:'Children often provide very high meaning, warmth, attachment, and purpose while also increasing structural load.'
    };
  }
  if(cat==='Pet'){
    return {
      nutrients:['comfort','companionship','routine','touch','stability'],
      costs:['expense','care burden','schedule restriction'],
      note:'Pets can significantly improve warmth, grounding, and emotional stability.'
    };
  }
  return null;
}

function updateIntegrationOutput(p,m){
  if(!$('integrationOutput'))return;
  let cat=quickCategory(p), energy=cardEnergy(p), nutrient=cardNutrient(p);
  let text=energy>=4?'This card appears to add positive energy to the ecosystem.':energy<0?'This card may drain the ecosystem; compensate with stabilizing people or reduce exposure.':'This card is neutral or mixed in the ecosystem.';
  let special=specialRelationshipContext(p);$('integrationOutput').innerHTML=`<p><b>Ecosystem role:</b> ${cat} · ${nutrient}</p><p>${text}</p>${special?`<p><b>Typical nutrients:</b> ${special.nutrients.join(', ')}<br><b>Typical costs:</b> ${special.costs.join(', ')}<br>${special.note}</p>`:''}`;
}
function roleReinforcementScores(){
  let roles=state.me?.roles||{}, profiles=state.profiles||[], supply={};
  roleDefs.forEach(([k])=>supply[k]=0);
  profiles.forEach(p=>{
    let energy=cardEnergy(p), respect=p.quick?.respect ?? p.green?.respect ?? 5, trust=p.quick?.trust ?? 5, warmth=p.quick?.warmth ?? p.green?.warmth ?? 5, cat=quickCategory(p);
    supply.respectedRole+=respect;supply.appreciatedRole+=(p.respect?.appreciation ?? respect);supply.trustedRole+=trust;
    supply.needed+=cat==='Work'||cat==='Family'?trust*.8:energy>0?energy:0;supply.admired+=(p.respect?.proud ?? respect);
    supply.challenged+=cat==='Mentor'||cat==='Work'?trust:0;supply.protective+=cat==='Family'||cat==='Romantic'?warmth*.7:0;supply.autonomy+=energy>=0?5:0;
  });
  let gaps=[];roleDefs.forEach(([k,label])=>{let need=roles[k]??5,have=Math.min(10,(supply[k]||0)/2);if(need>=7&&have<5)gaps.push(label)});
  return gaps;
}

function ecosystemGrowthTargets(){
  let me=state.me||{}, out=[];
  let d=me.deficiencies||{}, b=me.blindSpots||{}, p=me.patterns||{};
  if(d.mentorDeficit)out.push('Cultivate one mentor or respected older peer through recurring activity or direct advice-seeking.');
  if(d.brotherhoodDeficit)out.push('Increase recurring male social contact through sports, projects, church, volunteering, or team environments.');
  if(d.romanticOverreliance)out.push('Reduce romantic emotional load by strengthening friendship, mentorship, and community structures.');
  if(d.isolation)out.push('Add recurring in-person social exposure rather than waiting for high-intensity events.');
  if(b.poorCommunication)out.push('Practice clearer, lower-friction communication and follow-through.');
  if(b.lowConfidence)out.push('Build confidence through competence, health, grooming, and repeated exposure rather than reassurance-seeking.');
  if(b.dopamineHabits)out.push('Reduce overstimulation/social media overload to improve emotional regulation and relationship clarity.');
  if(p.chaosAttraction)out.push('Learn to distinguish excitement and uncertainty from peace and compatibility.');
  if(p.overInvestment)out.push('Slow emotional investment and gather more longitudinal evidence before idealizing.');
  if(!out.length)out.push('Your ecosystem currently appears relatively balanced. Continue strengthening recurring, stabilizing relationships.');
  return out;
}
function renderGrowthTargets(){
  if(!$('growthOutput'))return;
  $('growthOutput').innerHTML='<ul>'+ecosystemGrowthTargets().map(x=>`<li>${x}</li>`).join('')+'</ul>';
}

function renderRoleOutput(){
  if(!$('roleOutput'))return;
  let gaps=roleReinforcementScores();
  if(!gaps.length){$('roleOutput').innerHTML='<p><b>No severe role-reinforcement gap detected.</b> Your current cards provide at least some support for your high-importance roles.</p>';return;}
  $('roleOutput').innerHTML=`<p><b>Underfed roles:</b> ${gaps.map(g=>`<span class="roleTag">${g}</span>`).join('')}</p><p>Consider cultivating relationships that provide these roles without overloading romance or work.</p>`;
}

function renderProfiles(){let list=$('profileList');list.innerHTML='<h3>Saved profiles</h3>';state.profiles.forEach(p=>{let b=document.createElement('button');b.className='profile'+(p.id===state.currentId?' active':'');b.innerHTML=`<b>${p.name||'Untitled'}</b><br><span class='small'>${p.rtype||''} · ${p.met||''}</span>`;b.onclick=()=>{collectForm();state.currentId=p.id;saveState();fillForm();renderProfiles();safeUpdate()};list.appendChild(b)})}
function updateMyReadout(){let me=state.me||defaultMe();let checked=tendencyDefs.filter(([k])=>me.tendencies?.[k]).map(([_,l])=>l);let high=needDefs.filter(([k])=>(me.needs?.[k]??5)>=8).map(([_,l])=>l);$('myReadout').innerHTML=`<p><b>High-importance needs:</b> ${high.length?high.join(', '):'none marked 8+ yet.'}</p><p><b>Selected blind spots:</b> ${checked.length?checked.join(', '):'none selected yet.'}</p><p><b>How this changes scoring:</b> profiles are penalized more when they conflict with your high-importance needs or trigger selected tendencies.</p>`}
function onAnyChange(){collectForm();saveState();renderProfiles();safeUpdate()}function onMeChange(){collectMe();saveState();updateMyReadout();safeUpdate()}
function bindEvents(){['name','pronounContext','rtype','met','desiredOutcome','socialNotes','impression','evidence','interpretation','hesitation','notes'].forEach(id=>{$(id).addEventListener('input',onAnyChange);$(id).addEventListener('change',onAnyChange)});greenDefs.forEach(([k])=>$(`green_${k}`).addEventListener('input',()=>{$(`green_${k}_value`).textContent=$(`green_${k}`).value;onAnyChange()}));riskDefs.forEach(([k])=>$(`risk_${k}`).addEventListener('input',()=>{$(`risk_${k}_value`).textContent=$(`risk_${k}`).value;onAnyChange()}));respectDefs.forEach(([k])=>$(`respect_${k}`).addEventListener('input',()=>{$(`respect_${k}_value`).textContent=$(`respect_${k}`).value;onAnyChange()}));bindAdaptiveRiskInputs();needDefs.forEach(([k])=>$(`need_${k}`).addEventListener('input',()=>{$(`need_${k}_value`).textContent=$(`need_${k}`).value;onMeChange()}));roleDefs.forEach(([k])=>{let el=$(`role_${k}`);if(el)el.addEventListener('input',()=>{$(`role_${k}_value`).textContent=el.value;onMeChange()})});
deficiencyDefs.forEach(([k])=>{let el=$(`def_${k}`);if(el)el.addEventListener('change',onMeChange)});
blindSpotDefs.forEach(([k])=>{let el=$(`blind_${k}`);if(el)el.addEventListener('change',onMeChange)});
patternDefs.forEach(([k])=>{let el=$(`pattern_${k}`);if(el)el.addEventListener('change',onMeChange)});
tendencyDefs.forEach(([k])=>$(`t_${k}`).addEventListener('change',onMeChange));['myName','myPhilosophy','myDatingLens'].forEach(id=>{let el=$(id);if(el){el.addEventListener('input',onMeChange);el.addEventListener('change',onMeChange)}});$('tabCards').onclick=()=>showTab('cards');$('tabEcosystem').onclick=()=>showTab('ecosystem');$('tabPerson').onclick=()=>showTab('person');$('tabMe').onclick=()=>showTab('me');document.querySelectorAll('.filter').forEach(b=>b.onclick=()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');currentFilter=b.dataset.filter;renderCards();});['quickPeace','quickRespect','quickCost'].forEach(id=>$(id).addEventListener('input',updateQuickLabels));$('quickSnapshotBtn').onclick=quickUpdate;['qcWarmth','qcRespect','qcTrust','qcEnergy'].forEach(id=>{if($(id))$(id).addEventListener('input',updateQuickCardLabels)});if($('addQuickCardBtn'))$('addQuickCardBtn').onclick=addQuickCard;if($('saveCardBtn'))$('saveCardBtn').onclick=saveCurrentCard;if($('deleteCardBtn'))$('deleteCardBtn').onclick=deleteCurrentCard;$('newBtn').onclick=()=>{collectForm();let p=blankProfile();state.profiles.push(p);state.currentId=p.id;saveState();fillForm();renderProfiles();safeUpdate()};$('addSnapshotBtn').onclick=addSnapshot;$('exportBtn').onclick=()=>{collectForm();collectMe();saveState();let blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='relationship-intelligence-backup.json';a.click()};$('importFile').onchange=e=>{let file=e.target.files[0];if(!file)return;let reader=new FileReader();reader.onload=()=>{try{let imported=JSON.parse(reader.result);if(!Array.isArray(imported.profiles))throw new Error();state=migrate(imported);if(!state.currentId&&state.profiles[0])state.currentId=state.profiles[0].id;saveState();fillForm();fillMe();renderProfiles();safeUpdate()}catch(err){alert('Could not import that backup file.')}};reader.readAsText(file)}}
function showTab(t){$('cardsView').classList.toggle('hidden',t!=='cards');$('ecosystemView').classList.toggle('hidden',t!=='ecosystem');$('personView').classList.toggle('hidden',t!=='person');$('meView').classList.toggle('hidden',t!=='me');$('tabCards').classList.toggle('active',t==='cards');$('tabEcosystem').classList.toggle('active',t==='ecosystem');$('tabPerson').classList.toggle('active',t==='person');$('tabMe').classList.toggle('active',t==='me');if(t==='cards')renderCards();if(t==='ecosystem')renderEcosystem();}
function escapeHTML(s){return String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]))}
function init(){try{renderSliders();currentProfile();bindEvents();fillForm();fillMe();renderProfiles();updateQuickLabels();updateQuickCardLabels();safeUpdate();renderCards();renderEcosystem();renderGrowthTargets();saveState();$('status').textContent='App loaded. Autosave active.'}catch(e){$('status').textContent='Startup error: '+e.message;console.error(e)}}
if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));init();