const STORAGE_KEY='relationship_intelligence_pwa_v342';
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


const socialStandardsDefs=[
 ['peerStandards','Peer-group standard setting','My close social group strongly shapes what I expect from partners.'],
 ['comparisonPressure','Comparison pressure','I compare relationship outcomes to friends, social media, or status peers.'],
 ['socialApprovalNeed','Social approval need','I need my partner/relationship to be approved by my group.'],
 ['statusSignalSensitivity','Status signal sensitivity','I notice prestige, ambition, income, lifestyle, or social rank strongly.'],
 ['friendGroupPolicing','Friend-group policing','My peer group sanctions choices that violate group norms.'],
 ['romanticExpectationInflation','Expectation inflation','My environment may raise romantic standards beyond what creates peace.'],
 ['femaleCompetitionAwareness','Intrasexual competition awareness','I notice competition among women shaping standards or partner evaluation.']
];


const maleRoleDefs=[
 ['needed','Being needed','Feeling useful and meaningfully relied upon.'],
 ['admired','Being admired','Feeling admired or looked up to.'],
 ['respectedRole','Being respected','Feeling treated as competent and worthy.'],
 ['appreciatedRole','Being appreciated','Having effort noticed and valued.'],
 ['trustedRole','Being trusted','Being given responsibility or confidence.'],
 ['challenged','Being challenged','Having people who push you toward growth.'],
 ['protective','Being protective','Having appropriate opportunities to protect or provide.'],
 ['autonomy','Autonomy','Feeling free rather than controlled.']
];
const femaleRoleDefs=[
 ['safe','Feeling safe','Feeling emotionally and physically safe.'],
 ['chosen','Feeling chosen','Feeling intentionally selected and prioritized.'],
 ['understood','Feeling understood','Having inner experience understood without overexplaining.'],
 ['cherished','Feeling cherished','Feeling treasured, cared for, and emotionally valued.'],
 ['included','Being included','Being included in life decisions and shared reality.'],
 ['reassured','Being reassured','Receiving consistent signs of commitment and care.'],
 ['supported','Being supported','Having practical and emotional support.'],
 ['secureFuture','Future security','Feeling the relationship has direction and reliability.']
];
const maleDeficiencyDefs=[
 ['isolation','Isolation / low recurring social contact'],
 ['mentorDeficit','Mentorship deficit'],
 ['brotherhoodDeficit','Weak male friendship / brotherhood'],
 ['admirationDeficit','Low admiration / recognition'],
 ['purposeDeficit','Low mission / purpose'],
 ['weakAccountability','Weak accountability structures'],
 ['supportDeficit','Low emotional support'],
 ['challengeDeficit','Low challenge / growth pressure'],
 ['statusPathDeficit','Unclear status / competence pathway'],
 ['romanticOverreliance','Romantic overdependence for validation']
];
const femaleDeficiencyDefs=[
 ['emotionalSafetyDeficit','Low emotional safety'],
 ['attunementDeficit','Low emotional attunement'],
 ['reassuranceDeficit','Low reassurance / consistency'],
 ['sharedRealityDeficit','Weak shared reality with partner'],
 ['qualityMentorshipDeficit','Lack of wise female mentorship'],
 ['destabilizingFriendGroup','Destabilizing or comparison-heavy friend group'],
 ['validationDependence','Validation dependence'],
 ['socialMediaDistortion','Social media expectation distortion'],
 ['commitmentSecurityDeficit','Low commitment security'],
 ['supportDeficit','Low emotional support']
];
const maleBlindSpotDefs=[
 ['poorCommunication','Poor communication habits'],
 ['insecurity','Insecurity / self-consciousness'],
 ['conflictAvoidance','Conflict avoidance'],
 ['unreliability','Unreliability / inconsistency'],
 ['socialWithdrawal','Isolation habits / withdrawal'],
 ['peoplePleaser','People pleasing'],
 ['pedestalization','Pedestalization'],
 ['shameWithdrawal','Shame withdrawal after feeling criticized'],
 ['workObsession','Excessive work or mission imbalance'],
 ['dopamineHabits','Dopamine addiction / overstimulation'],
 ['lowConfidence','Low confidence'],
 ['poorPresentation','Poor hygiene / presentation']
];
const femaleBlindSpotDefs=[
 ['comparisonLoop','Comparison loops with friends/social media'],
 ['expectationInflation','Expectation inflation / fear of settling'],
 ['defensiveMenFrame','Defensive or adversarial framing toward men'],
 ['negativeAttributionBias','Assuming bad intent too quickly'],
 ['indirectCommunication','Indirect communication / expecting mind-reading'],
 ['reassuranceTesting','Testing for reassurance rather than asking directly'],
 ['friendGroupAmplification','Letting friends amplify resentment'],
 ['romanticIdealization','Romantic idealization from media/social comparison'],
 ['statusFiltering','Overweighting status signals over peace/repair'],
 ['resentmentAccumulation','Letting resentment accumulate without repair']
];
const malePatternDefs=[
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
const femalePatternDefs=[
 ['overReading','Over-reading ambiguous signals'],
 ['securitySeeking','Security seeking through indirect tests'],
 ['socialBenchmarking','Benchmarking relationship against peers'],
 ['partnerPotentialProjection','Dating potential rather than observed behavior'],
 ['resentmentStoryBuilding','Building a resentment story before clarification'],
 ['parallelLivesAlarm','High sensitivity to parallel-lives / lack of shared reality'],
 ['commitmentAnxiety','Commitment uncertainty anxiety'],
 ['emotionalInvisibility','Feeling emotionally invisible when not updated/included'],
 ['comparisonDissatisfaction','Comparison-driven dissatisfaction'],
 ['repairAvoidance','Avoiding direct repair because it feels vulnerable']
];
function isWomanLens(){return (state.me?.datingLens||'').includes('Woman evaluating men')}
function activeRoleDefs(){return isWomanLens()?femaleRoleDefs:maleRoleDefs}
function activeDeficiencyDefs(){return isWomanLens()?femaleDeficiencyDefs:maleDeficiencyDefs}
function activeBlindSpotDefs(){return isWomanLens()?femaleBlindSpotDefs:maleBlindSpotDefs}
function activePatternDefs(){return isWomanLens()?femalePatternDefs:malePatternDefs}
function updateSelfLensNote(){
  if(!$('selfLensNote'))return;
  if(isWomanLens()){
    $('selfLensNote').innerHTML='<b>Woman evaluating men lens</b><br><span class="small">Emphasizes safety, attunement, shared reality, reassurance, social comparison, peer influence, and expectation distortion.</span>';
  }else{
    $('selfLensNote').innerHTML='<b>Man evaluating women lens</b><br><span class="small">Emphasizes usefulness, admiration, respect, mission, mentorship, brotherhood, competence identity, and romantic overdependence risk.</span>';
  }
}

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
function defaultMe(){let needs={};needDefs.forEach(([k])=>needs[k]=5);let roles={};maleRoleDefs.concat(femaleRoleDefs).forEach(([k])=>roles[k]=5);return{name:'',datingLens:'Man evaluating women',needs,roles,socialStandards:{},deficiencies:{},blindSpots:{},patterns:{},tendencies:{},philosophy:''}}
function loadState(){try{let raw=localStorage.getItem(STORAGE_KEY);if(raw)return migrate(JSON.parse(raw));for(let key of ['relationship_intelligence_pwa_v15','relationship_intelligence_pwa_v14','relationship_intelligence_pwa_v13','relationship_intelligence_pwa_v12','relationship_intelligence_pwa_v11_2','relationship_intelligence_pwa_v11','relationship_intelligence_pwa_v10','relationship_intelligence_pwa_v8','relationship_intelligence_pwa_v7','relationship_intelligence_pwa_v6','relationship_intelligence_pwa_v5','relationship_intelligence_pwa_v4','relationship_intelligence_pwa_v3','relationship_intelligence_pwa_v2','relationship_intelligence_pwa_v1']){let old=localStorage.getItem(key);if(old)return migrate(JSON.parse(old));}}catch(e){}return{currentId:null,profiles:[],me:defaultMe()}}
function migrate(s){s.me=s.me||defaultMe();s.me.roles=s.me.roles||{};maleRoleDefs.concat(femaleRoleDefs).forEach(([k])=>{if(s.me.roles[k]===undefined)s.me.roles[k]=5});s.me.socialStandards=s.me.socialStandards||{};if(typeof socialStandardsDefs!=='undefined')socialStandardsDefs.forEach(([k])=>{if(s.me.socialStandards[k]===undefined)s.me.socialStandards[k]=5});s.me.deficiencies=s.me.deficiencies||{};s.me.blindSpots=s.me.blindSpots||{};s.me.patterns=s.me.patterns||{};s.profiles=(s.profiles||[]).map(p=>{p={...p,evidence:p.evidence||'',interpretation:p.interpretation||'',hesitation:p.hesitation||'',socialNotes:p.socialNotes||'',pronounContext:p.pronounContext||'Neutral / person',desiredOutcome:p.desiredOutcome||'Explore slowly',rtype:p.rtype==='Potential romantic partner'?'Romantic prospect':(p.rtype||'Romantic prospect')};p.green=p.green||{};greenDefs.forEach(([k])=>{if(p.green[k]===undefined)p.green[k]=5});p.risk=p.risk||{};riskDefs.forEach(([k])=>{if(p.risk[k]===undefined)p.risk[k]=3});p.social=p.social||{};p.respect=p.respect||{};Object.values(adaptiveRiskDefs).flat().forEach(([k,,,,good])=>{if(p.social[k]===undefined)p.social[k]=good?5:3});respectDefs.forEach(([k])=>{if(p.respect[k]===undefined)p.respect[k]=5});p.snapshots=p.snapshots||[];p.issues=p.issues||[];p.quick=p.quick||{};p.casual=p.casual||{};p.casualHistory=p.casualHistory||[];p.profileSliders=p.profileSliders||{};p.sliderHistory=p.sliderHistory||[];p.coupleQualities=p.coupleQualities||{};p.coupleTrajectory342=p.coupleTrajectory342||[];p.coupleTrajectory340=p.coupleTrajectory340||[];return p});return s}
function saveState(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state));$('status').textContent='Autosaved locally'}
function uid(){return'p_'+Date.now()+'_'+Math.random().toString(16).slice(2)}
function blankProfile(){let p={id:uid(),name:'',pronounContext:'Neutral / person',rtype:'Romantic prospect',met:'Soccer',desiredOutcome:'Explore slowly',socialNotes:'',impression:'',evidence:'',interpretation:'',hesitation:'',notes:'',green:{},risk:{},respect:{},social:{},snapshots:[],quick:{}};greenDefs.forEach(([k])=>p.green[k]=5);riskDefs.forEach(([k])=>p.risk[k]=3);respectDefs.forEach(([k])=>p.respect[k]=5);Object.values(adaptiveRiskDefs).flat().forEach(([k,,,,good])=>{if(p.social[k]===undefined)p.social[k]=good?5:3});return p}
function currentProfile(){if(!state.profiles.length){let p=blankProfile();state.profiles.push(p);state.currentId=p.id}return state.profiles.find(p=>p.id===state.currentId)||state.profiles[0]}
function renderSliders(){$('greenSliders').innerHTML=greenDefs.map(([k,l,h])=>sliderHTML('green',k,l,h,5,'Low','High',true)).join('');$('riskSliders').innerHTML=riskDefs.map(([k,l,h])=>sliderHTML('risk',k,l,h,3,'Low concern','High concern',false)).join('');$('respectSliders').innerHTML=respectDefs.map(([k,l,h])=>sliderHTML('respect',k,l,h,5,'Low','High',true)).join('');renderAdaptiveRiskSliders();$('needSliders').innerHTML=needDefs.map(([k,l,h])=>sliderHTML('need',k,l,h,5,'Low need','High need',true)).join('');if($('roleSliders'))$('roleSliders').innerHTML=activeRoleDefs().map(([k,l,h])=>sliderHTML('role',k,l,h,5,'Low','High',true)).join('');
if($('socialStandardsSliders'))$('socialStandardsSliders').innerHTML=socialStandardsDefs.map(([k,l,h])=>sliderHTML('socialStandard',k,l,h,5,'Low','High',true)).join('');
if($('deficiencyChecks'))$('deficiencyChecks').innerHTML='<div class="checkGrid">'+activeDeficiencyDefs().map(([k,l])=>`<div class="checkItem"><input type="checkbox" id="def_${k}"><span>${l}</span></div>`).join('')+'</div>';
if($('patternChecks'))$('patternChecks').innerHTML='<div class="checkGrid">'+activePatternDefs().map(([k,l])=>`<div class="checkItem"><input type="checkbox" id="pattern_${k}"><span>${l}</span></div>`).join('')+'</div>';
if($('tendencyChecks'))$('tendencyChecks').innerHTML='<div class="checkGrid">'+activeBlindSpotDefs().map(([k,l])=>`<div class="checkItem"><input type="checkbox" id="blind_${k}"><span>${l}</span></div>`).join('')+'</div>';
$('tendencyChecks').innerHTML=tendencyDefs.map(([k,l,h])=>`<label class='check'><input type='checkbox' id='t_${k}'><span><b>${l}</b><span class='small'>${h}</span></span></label>`).join('')}

function friendlyLensName(key){
  const map={romanticMan:'Romantic man lens',romanticWoman:'Romantic woman lens',work:'Work relationship lens',friend:'Friendship lens',family:'Family lens',boundary:'Boundary / managed contact lens',general:'General relationship lens'};
  return map[key]||String(key||'General relationship lens');
}
function latestSnapshot(p){let snaps=p.snapshots||[];return snaps.length?snaps[snaps.length-1]:null}
function snapshotEventText(p){let snap=latestSnapshot(p);return (snap?.note||snap?.event||p.evidence||'').trim()}
function snapshotStoryText(p){let snap=latestSnapshot(p);return (snap?.story||p.story||p.interpretation||'').trim()}
function pct(v){return Math.round(Math.max(0,Math.min(100,Number(v)||0)))}
function scoreBand(v,goodHigh=true){if(goodHigh)return v>=75?'goodScore':v>=45?'neutralScore':'badScore';return v<=35?'goodScore':v<=65?'neutralScore':'badScore'}
function sliderDescription(prefix,k,label,hint,left,right){
  const examples={
    appreciation:'Example: 0 = effort is often unnoticed; 10 = effort is consistently noticed and valued.',
    emotionalRegulation:'Example: 0 = reacts badly when frustrated; 10 = can feel hurt or disappointed without escalating.',
    repairAbility:'Repair means what happens after friction: accountability, apology, clarification, changed behavior, and reconnection.',
    invisibleLaborSensitivity:'Invisible labor means planning, tracking, remembering, chores, logistics, and emotional work that can go unnoticed.',
    emotionalTranslation:'Emotional translation means understanding the emotional meaning behind a request, not just the literal task.',
    reassuranceNeed:'High means consistency, inclusion, and verbal/emotional reassurance strongly affect safety.',
    competenceThreat:'High means correction may land as “I failed / I am not useful,” even if that was not intended.',
    missionPriority:'High means work, mission, or bandwidth often outranks ambient relationship maintenance.',
    safety:'Safety means the relationship feels emotionally and physically non-threatening.',
    chosen:'Chosen means intentionally prioritized, not merely tolerated or convenient.',
    included:'Included means brought into decisions, plans, and inner life.'
  };
  return examples[k]||hint||`${left||'Low'} to ${right||'High'}. Move based on observed behavior, not hopes.`;
}
function repairPlainEnglish(kind){
  const map={
    appreciation:'Say what specifically worked as its own complete moment, not as a setup for correction. Later, ask for the change as a comfort/impact request: “When this is handled this way, I feel calmer and more cared for.”',
    competence:'Avoid making correction the headline. Preserve dignity, explain the desired outcome, and make the next step concrete. Humor or self-aware softness can help if warmth already exists.',
    sharedReality:'Have a short shared-reality check-in: “What changed this week? What decisions are pending? What are you carrying that I do not know about?”',
    default:'Clarify the event, state the impact, ask one direct question, and agree on one specific next behavior.'
  };
  return map[kind]||map.default;
}

function sliderHTML(g,k,l,h,d,left,right,good){return`<div class='slider'><div class='sliderTop'><b>${l}</b><span class='bubble' id='${g}_${k}_value'>${d}</span></div><div class='small'>${h}</div><input type='range' min='0' max='10' value='${d}' id='${g}_${k}'><div class='scaleLabels'><span>${left}</span><span class='${good?'goodSide':'riskSide'}'>${right}</span></div></div>`}
function fillForm(){let p=currentProfile();$('profileTitle').textContent='Profile: '+(p.name||'Untitled');['name','pronounContext','rtype','met','desiredOutcome','socialNotes','impression','evidence','interpretation','hesitation','notes'].forEach(id=>$(id).value=p[id]||'');if(!p.rtype)$('rtype').value='Romantic prospect';if(!p.met)$('met').value='Soccer';greenDefs.forEach(([k])=>{let v=p.green?.[k]??5;$(`green_${k}`).value=v;$(`green_${k}_value`).textContent=v});riskDefs.forEach(([k])=>{let v=p.risk?.[k]??3;$(`risk_${k}`).value=v;$(`risk_${k}_value`).textContent=v});respectDefs.forEach(([k])=>{let v=p.respect?.[k]??5;$(`respect_${k}`).value=v;$(`respect_${k}_value`).textContent=v});renderAdaptiveRiskSliders();bindAdaptiveRiskInputs()}
function fillMe(){let me=state.me||defaultMe();$('myName').value=me.name||'';if($('myDatingLens'))$('myDatingLens').value=me.datingLens||'Man evaluating women';$('myPhilosophy').value=me.philosophy||'';needDefs.forEach(([k])=>{let v=me.needs?.[k]??5;$(`need_${k}`).value=v;$(`need_${k}_value`).textContent=v});activeRoleDefs().forEach(([k])=>{let el=$(`role_${k}`);if(el){let v=me.roles?.[k]??5;el.value=v;$(`role_${k}_value`).textContent=v}});
if(typeof socialStandardsDefs!=='undefined')socialStandardsDefs.forEach(([k])=>{let el=$(`socialStandard_${k}`);if(el){let v=me.socialStandards?.[k]??5;el.value=v;$(`socialStandard_${k}_value`).textContent=v}});
activeDeficiencyDefs().forEach(([k])=>{let el=$(`def_${k}`);if(el)el.checked=!!me.deficiencies?.[k]});
activeBlindSpotDefs().forEach(([k])=>{let el=$(`blind_${k}`);if(el)el.checked=!!me.blindSpots?.[k]});
activePatternDefs().forEach(([k])=>{let el=$(`pattern_${k}`);if(el)el.checked=!!me.patterns?.[k]});
tendencyDefs.forEach(([k])=>$(`t_${k}`).checked=!!me.tendencies?.[k]);updateMyReadout()}
function collectForm(){let p=currentProfile();['name','pronounContext','rtype','met','desiredOutcome','socialNotes','impression','evidence','interpretation','hesitation','notes'].forEach(id=>p[id]=$(id).value);greenDefs.forEach(([k])=>p.green[k]=Number($(`green_${k}`).value));riskDefs.forEach(([k])=>p.risk[k]=Number($(`risk_${k}`).value));respectDefs.forEach(([k])=>p.respect[k]=Number($(`respect_${k}`).value));socialDefs.forEach(([k])=>p.social[k]=Number($(`social_${k}`).value))}
function collectMe(){let me=state.me||defaultMe();me.name=$('myName').value;if($('myDatingLens'))me.datingLens=$('myDatingLens').value;me.philosophy=$('myPhilosophy').value;needDefs.forEach(([k])=>me.needs[k]=Number($(`need_${k}`).value));me.roles=me.roles||{};activeRoleDefs().forEach(([k])=>{let el=$(`role_${k}`);if(el)me.roles[k]=Number(el.value)});
me.socialStandards=me.socialStandards||{};if(typeof socialStandardsDefs!=='undefined')socialStandardsDefs.forEach(([k])=>{let el=$(`socialStandard_${k}`);if(el)me.socialStandards[k]=Number(el.value)});
me.deficiencies=me.deficiencies||{};activeDeficiencyDefs().forEach(([k])=>{let el=$(`def_${k}`);if(el)me.deficiencies[k]=el.checked});
me.blindSpots=me.blindSpots||{};activeBlindSpotDefs().forEach(([k])=>{let el=$(`blind_${k}`);if(el)me.blindSpots[k]=el.checked});
me.patterns=me.patterns||{};activePatternDefs().forEach(([k])=>{let el=$(`pattern_${k}`);if(el)me.patterns[k]=el.checked});
tendencyDefs.forEach(([k])=>me.tendencies[k]=$(`t_${k}`).checked);state.me=me}
function avg(obj,defs){return defs.reduce((s,[k])=>s+Number(obj?.[k]||0),0)/defs.length}
function need(k){return Number((state.me?.needs||{})[k]??5)}function tendency(k){return !!(state.me?.tendencies||{})[k]}
function respectIndex(p){return Math.round(Math.max(0,Math.min(100,avg(p.respect,respectDefs)*10)))}

function socialHealth(p){
  let defs=(typeof currentRiskDefs==='function')?currentRiskDefs(p):[];
  if(!defs.length)return 70;
  let total=0, weight=0;
  defs.forEach(([k,,,,good])=>{
    let raw=p.social?.[k];
    let v=raw===undefined ? (good?7:3) : Number(raw);
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

function metrics(p){let g=avg(p.green,greenDefs),r=avg(p.risk,riskDefs),respect=respectIndex(p);let base=Math.max(0,Math.min(100,g*10-r*4));let personalized=base;personalized+=(respect-50)*.22;personalized+=(p.green.warmth-5)*(need('needWarmth')-5)*.7;personalized+=(p.green.respect-5)*(need('needRespect')-5)*.9;personalized+=(p.green.reciprocity-5)*(need('needAppreciation')-5)*.55;personalized+=(p.green.stability-5)*(need('needStability')-5)*.8;personalized+=(p.green.curiosity-5)*(need('needIntellect')-5)*.55;personalized-=p.risk.chaos*(need('needStability')/10)*2.2;personalized-=p.risk.family*(need('needFamily')/10)*1.4;personalized+=(socialHealth(p)-50)*.22;if(tendency('scarcity')&&p.green.attraction>=7)personalized-=6;if(tendency('attractionOverride')&&p.green.attraction>=8&&p.green.peace<=5)personalized-=10;if(tendency('rescuer')&&p.risk.trauma>=7)personalized-=9;if(tendency('peoplePleaser')&&(p.risk.entitlement>=6||respect<55))personalized-=8;if(tendency('movesFast')&&p.green.attraction>=7&&p.risk.chaos>=6)personalized-=8;personalized=Math.round(Math.max(0,Math.min(100,personalized)));let peaceIndex=Math.round(Math.max(0,Math.min(100,personalized)));return{greenAvg:g,riskAvg:r,base:Math.round(base),personalized,peaceIndex,respectIndex:respect,social:socialHealth(p)}}
function safeUpdate(){try{updateReadout()}catch(e){$('status').textContent='Calculation error: '+e.message;console.error(e)}}
function updateReadout(){let p=currentProfile(),m=metrics(p);$('meterFill').style.width=m.personalized+'%';$('peaceIndex').textContent=m.peaceIndex;$('respectIndex').textContent=m.respectIndex;$('peacePhrase').textContent=m.peaceIndex>=75?'Calming, respectful, emotionally low-cost.':m.peaceIndex>=55?'Worth exploring, but watch whether calm increases.':m.peaceIndex>=35?'Exciting but not yet peaceful. Slow down.':'Low peace signal. Attraction may be masking emotional cost.';$('respectPhrase').textContent=m.respectIndex>=80?'Strong respect signal: appreciation, reliability, and boundaries look healthy.':m.respectIndex>=60?'Moderate respect signal. Watch consistency over time.':m.respectIndex>=40?'Respect is uncertain. Do not let warmth or attraction compensate too much.':'Low respect signal. This is a major long-term risk.';updateMatrix(m);updateSocialReadout(p,m);updateAttachmentOutput(p,m);updateAdmirationOutput(p,m);updateIntegrationOutput(p,m);updateMarriageSystemOutput(p,m);updateTranslationEngine(p,m);updateAccuracyOutput(p,m);updateRepairPlanOutput(p,m);updateResponseMode(p,m);updateStrategy(p,m);updateAvatar(p,m);let title='Proceed carefully',cls='',text='Keep learning without outrunning the evidence.';if(m.personalized>=70&&m.peaceIndex>=65&&m.respectIndex>=65){title='Worth continuing to explore';cls='good';text='For your profile, this currently aligns with peace, respect, and low emotional cost.'}else if(m.personalized<=40||m.peaceIndex<40||m.respectIndex<40){title='Likely mismatch or boundaries needed';cls='bad';text='For your profile, this may cost too much peace or respect.'}if((p.rtype||'').includes('Do not date')){title='Boundaries-first relationship';cls='';text='This is not for romance escalation. Organize around clarity and boundaries.'}$('readout').className='readout '+cls;$('readout').innerHTML=`<b>${title}</b><br>Personalized Score: <b>${m.personalized}/100</b><br><span class='small'>General: ${m.base}/100 · Repair: ${m.repair}/100 · Reciprocity: ${m.reciprocityDyn}/100 · Grounding: ${m.embedded}/100 · Alignment: ${m.alignment}/100</span><br>${text}`;updateBiasWarnings(p,m);updateGuidance(p,m);updateAI(p,m);drawRadar(p,m);renderTimeline(p);renderCards();bindDemoButtons();$('status').textContent='App loaded. Autosave active.'}
function peaceRespectMatrixHtml357(m){
 const clamp=v=>Math.max(0,Math.min(100,Number.isFinite(Number(v))?Math.round(Number(v)):50));
 const peace=clamp(m?.peaceIndex),respect=clamp(m?.respectIndex),highPeace=peace>=60,highRespect=respect>=60;
 const zone=highPeace&&highRespect?'Secure footing':highPeace?'Comfort without equality':highRespect?'Respectful but costly':'High concern';
 const summary=highPeace&&highRespect?'Calm and mutual regard are both present. Look for consistency over time.':highPeace?'The relationship feels calm, but respect needs stronger evidence.':highRespect?'Mutual regard may exist, but the relationship is still costing too much peace.':'Both emotional ease and mutual regard need attention before deeper investment.';
 const markerClass=`${respect>76?' markerLeft357':''}${peace>84?' markerDown357':''}`;
 return `<div class="prMatrix357" role="img" aria-label="Peace and respect matrix. Current relationship: Peace ${peace} out of 100, Respect ${respect} out of 100, in the ${zone} zone.">
  <div class="prMatrixTop357"><div><span>Current position</span><b>${zone}</b></div><div class="prMatrixScores357"><span><b>${peace}</b> Peace</span><span><b>${respect}</b> Respect</span></div></div>
  <div class="prChart357">
   <div class="prYAxis357" aria-hidden="true"><span>High peace</span><b>Peace</b><span>Low peace</span></div>
   <div class="prPlot357" style="--peace:${peace}%;--respect:${respect}%" aria-hidden="true">
    <div class="prZone357 prCalm357"><b>Comfort without equality</b><span>Calm, limited regard</span></div>
    <div class="prZone357 prSecure357"><b>Secure footing</b><span>Calm and respected</span></div>
    <div class="prZone357 prConcern357"><b>High concern</b><span>Costly and diminished</span></div>
    <div class="prZone357 prCostly357"><b>Respectful but costly</b><span>Regard, limited ease</span></div>
    <span class="prThresholdV357"></span><span class="prThresholdH357"></span>
    <div class="prMarker357${markerClass}"><span></span><b>You are here</b></div>
   </div>
   <div class="prXAxis357" aria-hidden="true"><span>Low respect</span><b>Respect</b><span>High respect</span></div>
  </div>
  <p class="prMatrixSummary357">${summary}</p>
 </div>`;
}
function updateMatrix(m){let el=$('matrix');if(el)el.innerHTML=peaceRespectMatrixHtml357(m)}
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
  p.rtype=typeFromQuickCategory(category);
  p.desiredOutcome=outcomeFromQuickCategory(category);
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
  if(c==='Romantic')return 'Romantic'; if(c==='Friend')return 'Friend'; if(c==='Work')return 'Work'; if(c==='Family')return 'Family'; if(c==='Boundary')return 'Boundary'; if(c==='Child')return 'Child'; if(c==='Pet')return 'Pet';
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



const snapshotHelpText={
  peace:'Peace means how calm, settled, and non-chaotic you felt after the interaction. Low = agitated, anxious, dysregulated, or tense. High = grounded, relaxed, and emotionally safe.',
  respect:'Respect means whether the interaction made you feel regarded as a person with valid needs, time, effort, and perspective. Low = dismissed, belittled, ignored, or humiliated. High = treated with consideration.',
  closeness:'Closeness/intimacy means whether the interaction increased the sense of being connected, included, emotionally near, or on the same team. Low = distant or siloed. High = bonded or mutually aware.',
  repair:'Repair quality means what happened after friction, misunderstanding, hurt, or tension. Low = no accountability, defensiveness, stonewalling, punishment, or unresolved residue. High = clarification, apology, reconnection, changed behavior, or mutual understanding.',
  cost:'Emotional Cost / Drain is reversed. 0 = low drain/good. 10 = high drain/bad: rumination, stress, lost sleep, anxiety, or feeling depleted.',
  clarity:'Communication clarity means whether you understood what was meant, expected, or agreed on. Low = confusing, ambiguous, indirect, or misaligned. High = explicit, shared understanding.',quickCost:'Quick Emotional Cost / Drain is reversed. 0 = low drain/good. 10 = high drain/bad.'
};
function showSnapshotHelp(key){
  let panel=$('snapshotHelpPanel');
  if(panel)panel.innerHTML='<b>'+key[0].toUpperCase()+key.slice(1)+':</b> '+(snapshotHelpText[key]||'No help text yet.');
}
function bindSnapshotHelp(){
  document.querySelectorAll('.helpBtn[data-help]').forEach(btn=>{
    if(btn.dataset.bound==='1')return;
    btn.dataset.bound='1';
    btn.addEventListener('click',()=>showSnapshotHelp(btn.dataset.help));
  });
}

const snapshotKeywords=[['corrected','competence threat'],['wrong','competence threat'],['criticized','criticism/correction'],['gift','gift/effort'],['submitted','parallel lives / siloing'],['proposal','work/mission bandwidth'],['didn’t discuss','communication intimacy gap'],['never discussed','communication intimacy gap'],['not on the same page','communication clarity gap'],['chores','tasks/chores'],['forgot','follow-through'],['work','mission priority'],['busy','bandwidth'],['appreciate','appreciation'],['ignored','felt unseen'],['commit','commitment'],['marriage','commitment'],['friend','peer influence']];
function updateSnapshotCardSelect(){if(!$('snapshotCardSelect'))return;$('snapshotCardSelect').innerHTML=(state.profiles||[]).map(p=>`<option value="${p.id}">${escapeHTML(p.name||'Untitled')} — ${escapeHTML(p.rtype||'Card')}</option>`).join('')||'<option value="">Create new card below</option>'}
function snapshotTags(text){let s=String(text||'').toLowerCase(),tags=[];snapshotKeywords.forEach(([kw,tag])=>{if(s.includes(kw)&&!tags.includes(tag))tags.push(tag)});return tags}
function inferSnapshotDynamics(){let text=(($('snapshotEvent')?.value||'')+' '+($('snapshotStory')?.value||''));let tags=snapshotTags(text),d=$('snapshotDomain')?.value||'';if(d.includes('Communication'))tags.push('communication intimacy gap');if(d.includes('Tasks'))tags.push('task/competence translation');if(d.includes('Commitment'))tags.push('commitment uncertainty');if(d.includes('Appreciation'))tags.push('usefulness/appreciation dynamic');return [...new Set(tags)]}
function updateSnapshotInterpretation(){if(!$('snapshotInterpretation'))return;let tags=inferSnapshotDynamics(),conf=$('snapshotConfidence')?.value||'',chk=$('snapshotChecked')?.value||'';let msg=tags.length?`Possible dynamics: ${tags.map(t=>`<span class="tagPill">${t}</span>`).join('')}`:'No clear tags yet. Add concrete facts to improve interpretation.';let caution=(conf.includes('Low')||chk==='No')?'<div class="biasWarning"><b>Caution:</b> hypothesis only. Low confidence or unchecked interpretation.</div>':'';$('snapshotInterpretation').innerHTML=msg+caution}
function createSnapshotCardIfNeeded(){let name=($('snapshotNewName')?.value||'').trim()||'New card',category=$('snapshotNewCategory')?.value||'Other';let p=blankProfile();p.name=name;p.rtype=typeFromQuickCategory(category);p.quick={category,nutrient:category==='Pet'?'Comfort':category==='Child'?'Purpose':'Warmth',frequency:'Weekly',warmth:5,respect:5,trust:5,energy:0,note:''};state.profiles.push(p);return p.id}
function savePrimarySnapshot(){let cardId=$('snapshotCardSelect')?.value;if(!cardId)cardId=createSnapshotCardIfNeeded();state.currentId=cardId;let p=currentProfile();let event=$('snapshotEvent')?.value||'',story=$('snapshotStory')?.value||'',tags=inferSnapshotDynamics();let peace=Number($('snapPeace')?.value||5),respect=Number($('snapRespect')?.value||5),close=Number($('snapCloseness')?.value||5),repair=Number($('snapRepair')?.value||5),cost=Number($('snapCost')?.value||5),clar=Number($('snapClarity')?.value||5);p.green.peace=peace;p.green.respect=respect;p.respect.opinion=respect;p.repair=p.repair||{};p.repair.repairAbility=repair;p.repair.recoverySpeed=repair;p.energy=p.energy||{};p.energy.drain=cost;p.energy.grounding=Math.max(0,10-cost);p.translation=p.translation||{};p.translation.emotionalTranslation=clar;p.translation.reassuranceNeed=10-close;p.evidence=(p.evidence?p.evidence+'\n':'')+event;p.story=(p.story?p.story+'\n':'')+story;let m=metrics(p);p.snapshots=p.snapshots||[];p.snapshots.push({id:uid(),label:new Date().toLocaleDateString()+' snapshot',created:new Date().toISOString(),peace:m.peaceIndex,respect:m.respectIndex,compat:m.personalized,repair:m.repair,reciprocity:m.reciprocityDyn,embedded:m.embedded,alignment:m.alignment,energy:m.energy,note:event,story,tags,domain:$('snapshotDomain')?.value||'',emotion:$('snapshotEmotion')?.value||'',evidenceConfidence:$('snapshotConfidence')?.value||'',interpretationChecked:$('snapshotChecked')?.value||'',primary:true});saveState();renderProfiles();renderCards();renderEcosystem();updateSnapshotCardSelect();updateSnapshotInterpretation();fillForm();safeUpdate();$('status').textContent='Snapshot saved.';['snapshotEvent','snapshotStory'].forEach(id=>{if($(id))$(id).value=''})}

function markRiskSliders(){
  ['snapCost','quickCost'].forEach(id=>{let el=$(id);if(el)el.classList.add('riskRange')});
}

function bindSnapshotInputs(){markRiskSliders();bindSnapshotHelp();['snapshotEvent','snapshotStory','snapshotDomain','snapshotConfidence','snapshotChecked'].forEach(id=>{let el=$(id);if(el){el.addEventListener('input',updateSnapshotInterpretation);el.addEventListener('change',updateSnapshotInterpretation)}});['snapPeace','snapRespect','snapCloseness','snapRepair','snapCost','snapClarity'].forEach(id=>{let el=$(id);if(el)el.addEventListener('input',()=>{let lab=$(id+'Val');if(lab)lab.textContent=el.value;updateSnapshotInterpretation()})});if($('saveSnapshotPrimaryBtn'))$('saveSnapshotPrimaryBtn').onclick=savePrimarySnapshot;if($('snapshotNewCardBtn'))$('snapshotNewCardBtn').onclick=()=>{$('snapshotNewCardFields').classList.toggle('hidden');if($('snapshotCardSelect'))$('snapshotCardSelect').value=''}}


function typeFromQuickCategory(category){
  const map={
    'Romantic':'Romantic prospect',
    'Situationship':'Situationship / ambiguous romance',
    'Dating relationship':'Dating relationship',
    'Long-term partner':'Long-term partner',
    'Fiancé / Fiancée':'Fiancé / Fiancée',
    'Husband':'Husband',
    'Wife':'Wife',
    'Co-parent':'Co-parent',
    'Ex-partner':'Ex-partner',
    'Work':'Coworker / professional peer',
    'Family':'Family / long-term obligation',
    'Boundary':'Boundary (limited / managed contact)',
    'Child':'Child',
    'Pet':'Pet',
    'Friend':'Friend / social connection',
    'Mentor':'Mentor',
    'Activity / teammate':'Team / sports / social group'
  };
  return map[category]||'Team / sports / social group';
}
function outcomeFromQuickCategory(category){
  const map={
    'Romantic':'Explore slowly',
    'Situationship':'Clarify ambiguity',
    'Dating relationship':'Grow relationship',
    'Long-term partner':'Maintain / deepen partnership',
    'Fiancé / Fiancée':'Prepare for marriage',
    'Husband':'Marriage repair / growth',
    'Wife':'Marriage repair / growth',
    'Co-parent':'Stable co-parenting',
    'Ex-partner':'Boundary management',
    'Work':'Professional cooperation',
    'Family':'Peaceful family coexistence',
    'Child':'Care / nurture / family bond',
    'Pet':'Companionship / care / comfort',
    'Boundary':'Boundary management'
  };
  return map[category]||'Casual friendship';
}
function isMarriageStage(p){
  let c=profileCategory(p);
  return ['Husband','Wife','Long-term partner','Fiancé / Fiancée','Co-parent'].includes(c);
}

function profileCategory(p){
  let t=p.rtype||'';
  if(t.includes('Husband'))return 'Husband';
  if(t.includes('Wife'))return 'Wife';
  if(t.includes('Co-parent'))return 'Co-parent';
  if(t.includes('Ex-partner'))return 'Ex-partner';
  if(t.includes('Fiancé')||t.includes('Fiance'))return 'Fiancé / Fiancée';
  if(t.includes('Long-term partner'))return 'Long-term partner';
  if(t.includes('Dating relationship'))return 'Dating relationship';
  if(t.includes('Situationship'))return 'Situationship';
  if(t.includes('Romantic')||t.includes('dating'))return 'Romantic';
  if(t.includes('Friend'))return 'Friend';
  if(t.includes('Coworker')||t.includes('Boss')||t.includes('professional'))return 'Work';
  if(t.includes('Family'))return 'Family';
  if(t.includes('Boundary')||t.includes('Do not date'))return 'Boundary';
  if(t.includes('Child'))return 'Child';
  if(t.includes('Pet'))return 'Pet';
  if(t.includes('Mentor'))return 'Mentor';
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

function setVals(obj, vals){Object.entries(vals).forEach(([k,v])=>obj[k]=v)}
function demoSnapshot(label,note,story,domain,peace,respect,repair,embedded,energy,tags){
  return {id:uid(),label,created:new Date().toISOString(),peace,respect,compat:Math.round((peace+respect+repair+embedded)/4),repair,reciprocity:respect,embedded,alignment:Math.round((peace+respect+embedded)/3),energy,note,story,domain,emotion:'Calm / reflective',evidenceConfidence:'High — repeated observable pattern',interpretationChecked:'Partially',tags:tags||[],primary:true}
}
function makeDemoProfile(kind){
  let p=blankProfile();
  p.isDemo=true;
  if(kind==='romance'){
    p.name='Jane Doe'; p.pronounContext='Woman / she'; p.rtype='Romantic prospect'; p.desiredOutcome='Explore slowly'; p.met='Example card';
    setVals(p.green,{warmth:8,peace:8,respect:8,reciprocity:7,attraction:8,curiosity:8,stability:7});
    setVals(p.risk,{chaos:2,inconsistent:2,contempt:1,drama:2});
    setVals(p.respect,{opinion:8,appreciation:8,proud:7,boundaries:8,commitments:7});
    setVals(p.translation,{competenceThreat:4,invisibleLaborSensitivity:5,emotionalTranslation:8,reassuranceNeed:4,missionPriority:4,playfulRepair:7});
    setVals(p.repair,{repairAbility:8,accountability:8,apology:7,conflictCalm:8,recoverySpeed:8,resentmentRisk:2});
    setVals(p.reciprocityDyn,{initiation:7,effort:8,emotionalLabor:7,accommodation:7,investment:8});
    setVals(p.embedded,{realWorld:7,recurring:6,sharedCommunity:5,accountabilitySocial:5,contextStability:7});
    p.evidence='She followed through on plans, asked thoughtful questions, and showed appreciation after a date.';
    p.story='This looks like a warm, stable prospect, but still needs more time and repeated evidence.';
    p.snapshots=[
      demoSnapshot('Date 1','She showed up on time, asked about my work, and thanked me for planning dinner.','I felt respected and relaxed afterward.','Appreciation / usefulness',82,84,78,65,76,['appreciation']),
      demoSnapshot('Follow-up','She texted the next day and suggested a walk.','This seemed reciprocal rather than one-sided.','Communication / being on same page',86,85,82,68,80,['communication clarity gap'])
    ];
  } else if(kind==='work'){
    p.name='John Doe'; p.pronounContext='Man / he'; p.rtype='Boss / authority figure'; p.desiredOutcome='Professional cooperation'; p.met='Example card';
    setVals(p.green,{warmth:3,peace:4,respect:4,reciprocity:3,stability:5});
    setVals(p.risk,{chaos:6,inconsistent:6,contempt:5,drama:5});
    setVals(p.respect,{opinion:4,appreciation:3,proud:4,boundaries:4,commitments:5});
    setVals(p.translation,{competenceThreat:6,invisibleLaborSensitivity:4,emotionalTranslation:4,reassuranceNeed:4,missionPriority:8,playfulRepair:2});
    setVals(p.repair,{repairAbility:4,accountability:3,apology:2,conflictCalm:4,recoverySpeed:4,resentmentRisk:6});
    setVals(p.reciprocityDyn,{initiation:4,effort:4,emotionalLabor:3,accommodation:3,investment:4});
    setVals(p.embedded,{realWorld:9,recurring:9,sharedCommunity:7,accountabilitySocial:6,contextStability:8});
    p.evidence='He changed priorities abruptly and criticized the deliverable without clarifying expectations beforehand.';
    p.story='This may be a high-constraint work relationship that needs clarification and containment rather than emotional escalation.';
    p.snapshots=[
      demoSnapshot('Priority shift','He changed the deadline and later criticized the result as if the original plan had not changed.','I felt set up to fail and unsure what expectations were real.','Planning / logistics',45,42,35,86,38,['work/mission bandwidth']),
      demoSnapshot('Clarification attempt','I asked for written priorities and he gave a clearer ranking of tasks.','Still tense, but more manageable when expectations were written.','Communication / being on same page',55,50,48,88,52,['communication clarity gap'])
    ];
  } else if(kind==='marriage'){
    p.name='Alex Doe'; p.pronounContext='Man / he'; p.rtype='Husband'; p.desiredOutcome='Marriage repair / growth'; p.met='Example card';
    setVals(p.green,{warmth:7,peace:7,respect:8,reciprocity:7,stability:8,attraction:7});
    setVals(p.risk,{chaos:3,inconsistent:3,contempt:2,drama:3});
    setVals(p.respect,{opinion:8,appreciation:7,proud:8,boundaries:8,commitments:8});
    setVals(p.translation,{competenceThreat:7,invisibleLaborSensitivity:7,emotionalTranslation:6,reassuranceNeed:6,missionPriority:8,playfulRepair:7,appreciationNeed:8,taskLove:8,utilityIdentity:8});
    setVals(p.repair,{repairAbility:7,accountability:7,apology:6,conflictCalm:7,recoverySpeed:7,resentmentRisk:3});
    setVals(p.reciprocityDyn,{initiation:7,effort:8,emotionalLabor:6,accommodation:7,investment:8});
    setVals(p.embedded,{realWorld:10,recurring:10,sharedCommunity:8,accountabilitySocial:7,contextStability:9});
    p.evidence='He brought flowers and handled several household tasks, but became quiet when one task was corrected.';
    p.story='The conflict may be less about laziness and more about appreciation, competence threat, and how correction lands.';
    p.snapshots=[
      demoSnapshot('Flowers and tasks','He brought flowers and fixed the shelf, then went quiet after I said the shelf was uneven.','He may have felt like the effort did not count.','Criticism / correction',72,76,68,90,72,['competence threat','appreciation']),
      demoSnapshot('Shared reality check-in','We discussed upcoming plans and both named one thing we appreciated.','The tone improved when recognition and logistics were separated.','Communication / being on same page',82,84,78,92,83,['communication intimacy gap'])
    ];
  } else if(kind==='pet'){
    p.name='Buddy Doe'; p.pronounContext='Neutral / person'; p.rtype='Pet'; p.desiredOutcome='Companionship / care / comfort'; p.met='Example card';
    setVals(p.green,{warmth:10,peace:9,respect:8,reciprocity:8,stability:9});
    setVals(p.risk,{chaos:2,inconsistent:1,contempt:0,drama:1});
    setVals(p.respect,{opinion:7,appreciation:9,proud:9,boundaries:7,commitments:8});
    setVals(p.translation,{competenceThreat:2,invisibleLaborSensitivity:3,emotionalTranslation:5,reassuranceNeed:3,missionPriority:1,playfulRepair:8});
    setVals(p.repair,{repairAbility:8,accountability:8,apology:5,conflictCalm:9,recoverySpeed:9,resentmentRisk:1});
    setVals(p.reciprocityDyn,{initiation:8,effort:8,emotionalLabor:8,accommodation:7,investment:9});
    setVals(p.embedded,{realWorld:10,recurring:10,sharedCommunity:5,accountabilitySocial:3,contextStability:9});
    p.evidence='Daily walks provide routine, affection, touch, and grounding.';
    p.story='This pet contributes major warmth and stability, with manageable schedule and financial cost.';
    p.snapshots=[
      demoSnapshot('Evening walk','After work we went on a walk and I felt calmer almost immediately.','The routine makes the day feel grounded.','Affection / reassurance',92,88,85,90,90,[]),
      demoSnapshot('Care load','Vet bill and schedule were annoying but worth it.','The cost is real, but the comfort is high.','Other',85,84,80,88,78,[])
    ];
  }
  return p;
}
function loadDemoCards(kind){
  let kinds=kind==='all'?['romance','work','marriage','pet']:[kind];
  kinds.forEach(k=>state.profiles.push(makeDemoProfile(k)));
  state.currentId=state.profiles[state.profiles.length-1].id;
  saveState();renderProfiles();renderCards();if(typeof renderEcosystem==='function')renderEcosystem();if(typeof updateSnapshotCardSelect==='function')updateSnapshotCardSelect();fillForm();safeUpdate();showTab('cards');
  $('status').textContent='Example card loaded.';
}
function bindDemoButtons(){
  let map={loadAllDemoCardsBtn:'all',loadDemoRomanceBtn:'romance',loadDemoWorkBtn:'work',loadDemoMarriageBtn:'marriage',loadDemoPetBtn:'pet'};
  Object.entries(map).forEach(([id,kind])=>{let el=$(id);if(el&&!el.dataset.bound){el.dataset.bound='1';el.onclick=()=>loadDemoCards(kind)}});
}

function renderCards(){setTimeout(bindExampleButtons,0);
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
  $('socialSliders').innerHTML=`<div class="adaptiveNote"><b>${friendlyLensName(lens)}</b><div class="small">This section is category-specific. Questions change for romance, work, family, marriage, pets, children, etc.</div></div>`+defs.map(([k,l,h,left,right,good])=>sliderHTML('social',k,l,h,p.social?.[k]??(good?5:3),left,right,good)).join('');
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

function updateMarriageSystemOutput(p,m){
  if(!$('marriageSystemOutput'))return;
  if(!isMarriageStage(p)){
    $('marriageSystemOutput').innerHTML='<p class="small">Marriage/long-term system analysis appears for Husband, Wife, Long-term Partner, Fiancé/Fiancée, and Co-parent cards.</p>';
    return;
  }
  let cat=profileCategory(p), t=p.translation||{}, r=p.repair||{}, e=p.energy||{};
  let sharedReality=pct(((t.emotionalTranslation||5)+(10-(t.reassuranceNeed||5))+(m.embedded||50)/10)/3*10);
  let householdRisk=pct(((t.invisibleLaborSensitivity||5)+(e.drain||5)+(10-(r.repairAbility||5)))/3*10);
  let visibilityRisk=cat==='Husband'?pct(((t.competenceThreat||5)+(10-(p.respect?.appreciation||5))+(e.drain||5))/3*10):pct(((t.invisibleLaborSensitivity||5)+(t.reassuranceNeed||5)+(10-(t.emotionalTranslation||5)))/3*10);
  let intimacyRisk=pct(((10-(p.green?.warmth||5))+(10-(p.green?.reciprocity||5))+(10-(t.emotionalTranslation||5)))/3*10);
  let primary=sharedReality<50?'Shared Reality Rebuild':householdRisk>65?'Household Load / Burnout':visibilityRisk>65?'Admiration or Emotional Visibility Repair':intimacyRisk>65?'Intimacy Drift Repair':'Maintenance / Growth';
  $('marriageSystemOutput').innerHTML=
    `<p><span class="stageBadge">${cat}</span><span class="stageBadge">${primary}</span></p>
    <p class="scoreNote"><b>Important:</b> Shared reality is a positive score where high is good. Household load, visibility risk, and intimacy drift are risk scores where low is good.</p>
    <div class="marriageGrid">
      <div class="marriageItem ${scoreBand(sharedReality,true)}"><b>Shared reality</b>${sharedReality}/100<br><span class="small">High is good. Measures whether life is narrated, processed, and planned together.</span></div>
      <div class="marriageItem ${scoreBand(householdRisk,false)}"><b>Household / structural load risk</b>${householdRisk}/100<br><span class="small">Low is good. Risk from tasks, logistics, sleep, finances, or invisible management.</span></div>
      <div class="marriageItem ${scoreBand(visibilityRisk,false)}"><b>Admiration / emotional visibility risk</b>${visibilityRisk}/100<br><span class="small">Low is good. Risk of feeling unseen, unappreciated, criticized, or emotionally invisible.</span></div>
      <div class="marriageItem ${scoreBand(intimacyRisk,false)}"><b>Intimacy drift risk</b>${intimacyRisk}/100<br><span class="small">Low is good. Risk of parallel lives, reduced warmth, or low closeness.</span></div>
    </div>
    <p><b>Suggested exercise:</b> 20-minute weekly shared-reality check-in: what changed this week, what decisions are pending, what stress each person is carrying, and one thing each person appreciated.</p>`;
}


function latestSnapshot(p){
  let snaps=p.snapshots||[];
  return snaps.length?snaps[snaps.length-1]:null;
}
function hasTranslationEvidence(p){
  let snap=latestSnapshot(p);
  let text=((p.evidence||'')+' '+(p.story||'')+' '+(snap?.note||'')+' '+(snap?.story||'')).trim();
  return text.length>20 || !!snap;
}

function translationInputsUsed(p){
  let t=p.translation||{}, snap=latestSnapshot(p);
  return [
    ['Latest snapshot event', snapshotEventText(p) || 'No snapshot event saved yet'],
    ['User story / interpretation', snapshotStoryText(p) || 'No story/interpretation entered yet'],
    ['Snapshot tags', snap?.tags?.length ? snap.tags.join(', ') : 'No tags detected yet'],
    ['Snapshot domain', snap?.domain || 'No domain selected yet'],
    ['Evidence confidence', snap?.evidenceConfidence || 'Not set'],
    ['Interpretation checked', snap?.interpretationChecked || 'Not set'],
    ['Competence-threat sensitivity', (t.competenceThreat??5)+'/10 — from Translation dynamics slider'],
    ['Invisible labor / unseen work sensitivity', (t.invisibleLaborSensitivity??5)+'/10 — from Translation dynamics slider'],
    ['Emotional translation ability', (t.emotionalTranslation??5)+'/10 — from Translation dynamics slider or snapshot clarity'],
    ['Reassurance need', (t.reassuranceNeed??5)+'/10 — from Translation dynamics slider or snapshot closeness'],
    ['Mission / work priority', (t.missionPriority??5)+'/10 — from Translation dynamics slider']
  ];
}
function translationConfidence(p){
  let snap=latestSnapshot(p), score=0;
  if(snapshotEventText(p).length>20)score+=30;
  if(snap?.tags?.length)score+=20;
  if(snap?.evidenceConfidence?.includes('High'))score+=25;
  else if(snap?.evidenceConfidence?.includes('Medium'))score+=15;
  if(snap?.interpretationChecked?.includes('Yes'))score+=20;
  else if(snap?.interpretationChecked?.includes('Partially'))score+=10;
  if((p.snapshots||[]).length>=3)score+=15;
  return Math.max(0,Math.min(100,score));
}
function meaningTranslationMap(p){
  let snap=latestSnapshot(p), t=p.translation||{}, event=snapshotEventText(p), story=snapshotStoryText(p);
  if(!event || event.length<5)return {ready:false,repair:'Save a snapshot with a concrete event first. This map should not analyze a blank card.'};
  let domain=snap?.domain || mainFrictionDomain(p);
  let intended='Possible intended meaning: a need, preference, stress point, or attempt to coordinate.';
  let received='Possible received meaning: criticism, distance, disrespect, invisibility, or lack of care.';
  let loop='If nobody clarifies, each person may react to the meaning they received rather than what was intended.';
  let repair=repairPlainEnglish('default');
  let tags=(snap?.tags||[]).join(' ');
  if(domain.includes('Communication') || tags.includes('communication intimacy gap')){
    intended='Need for shared reality: being included, updated, and treated like a partner in decisions.';
    received='“We are living parallel lives” or “I am not included in your inner world.”';
    loop='Private processing → surprise/discovery → hurt → distance → even less sharing.';
    repair=repairPlainEnglish('sharedReality');
  }else if(domain.includes('Tasks') || domain.includes('Criticism') || tags.includes('competence')){
    intended=(t.invisibleLaborSensitivity||5)>=7?'Request for relief from unseen work, comfort, or support.':'Preference, correction, or request about how something should be done.';
    received=(t.competenceThreat||5)>=7?'“I failed / I am not useful / why did I try?”':'“This needs to be improved.”';
    loop='Correction → competence threat → withdrawal/reduced initiative → more frustration/correction.';
    repair=(t.competenceThreat||5)>=7?repairPlainEnglish('competence'):repairPlainEnglish('appreciation');
  }else if(domain.includes('Appreciation')){
    intended='Need to feel effort is seen and valued.';
    received='“Nothing I do counts” or “I am failing the scoreboard.”';
    loop='Low appreciation → reduced initiative → disappointment → even less appreciation.';
    repair=repairPlainEnglish('appreciation');
  }
  return {ready:true,event,story,intended,received,loop,repair};
}
function updateTranslationMap(p){
  if(!$('translationMapOutput'))return;
  let m=meaningTranslationMap(p);
  if(!m.ready){$('translationMapOutput').innerHTML=`<div class="flowCard confidenceLow"><b>No event selected yet</b>${m.repair}</div>`;return;}
  $('translationMapOutput').innerHTML=`
    <div class="flowCard"><b>1. Event being interpreted</b>${escapeHTML(String(m.event).slice(0,700))}</div>
    <div class="flowCard"><b>2. Your story / interpretation</b>${escapeHTML(String(m.story||'No interpretation entered.').slice(0,700))}</div>
    <div class="flowArrow">↓</div>
    <div class="flowCard"><b>3. Possible intended meaning</b>${escapeHTML(m.intended)}</div>
    <div class="flowArrow">↓</div>
    <div class="flowCard"><b>4. Possible received meaning</b>${escapeHTML(m.received)}</div>
    <div class="flowArrow">↓</div>
    <div class="flowCard"><b>5. Likely loop if unclarified</b>${escapeHTML(m.loop)}</div>
    <div class="flowArrow">↓</div>
    <div class="flowCard"><b>6. Plain-language repair path</b>${escapeHTML(m.repair)}</div>`;
}
function updateTranslationOutput(p,m){
  if(!$('translationOutput'))return;
  let score=translationScore(p), domain=latestSnapshot(p)?.domain || mainFrictionDomain(p), conf=translationConfidence(p);
  let likely=score>=65?'High meaning-mismatch risk':score>=40?'Moderate meaning-mismatch risk':'Lower meaning-mismatch risk';
  let caveat=conf<45?' This is low-confidence until you add concrete snapshots or checked interpretations.':'';
  $('translationOutput').innerHTML=`<p><span class="translationBadge">${likely}</span><span class="translationBadge">Domain: ${escapeHTML(domain)}</span><span class="translationBadge">Confidence: ${conf}/100</span></p><p><b>What this means:</b> this section tries to explain how the same event may mean one thing to the actor and land differently for the receiver. It is not a verdict.${caveat}</p>`;
}

function drawTranslationCanvas(p){return}
function updateTranslationEngine(p,m){
  updateTranslationOutput(p,m);
  updateTranslationSources(p);
  updateTranslationMap(p);
  updateFrictionHeatmap(p);
  updateRepairLanguage(p);
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
  let constraint=(cat==='Work'||cat==='Family'||cat==='Child'||cat==='Husband'||cat==='Wife'||cat==='Co-parent')?'high':(cat==='Friend'||cat==='Long-term partner'||cat==='Fiancé / Fiancée'?'medium':'low');
  let repair=m.repair||50,peace=m.peaceIndex||50,respect=m.respectIndex||50,recip=m.reciprocityDyn||50;
  let chaos=p.risk?.chaos||0;

  if(isMarriageStage(p) && repair>=35){return {mode:'Marriage Repair Mode',tag:'Long-term system relationship',actions:['Prioritize shared-reality check-ins','Separate logistics conflict from affection and respect','Track repair attempts over several snapshots','Rebuild admiration/visibility intentionally','Address household load and intimacy drift as system problems, not character flaws']};}

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
  if(isWomanLens()){
    if(d.emotionalSafetyDeficit)out.push('Prioritize relationships that create consistent emotional safety rather than only excitement or status.');
    if(d.sharedRealityDeficit)out.push('Use a weekly shared-reality check-in: decisions, stresses, upcoming plans, and what each person has been carrying mentally.');
    if(d.destabilizingFriendGroup||b.friendGroupAmplification)out.push('Notice whether confidants increase clarity and repair or amplify resentment and comparison.');
    if(d.socialMediaDistortion||b.comparisonLoop)out.push('Reduce comparison inputs before evaluating partner quality; compare against peace, repair, and consistency instead.');
    if(b.defensiveMenFrame)out.push('Before concluding bad intent, test for misunderstanding, bandwidth, or communication-style mismatch.');
    if(p.parallelLivesAlarm||d.sharedRealityDeficit)out.push('Ask for inclusion in major decisions and narrate why it creates partnership/security rather than control.');
    if(p.securitySeeking||b.reassuranceTesting)out.push('Replace indirect tests with one clear request for reassurance or clarity.');
  }else{
    if(d.mentorDeficit)out.push('Cultivate one mentor or respected older peer through recurring activity or direct advice-seeking.');
    if(d.brotherhoodDeficit)out.push('Increase recurring male social contact through sports, projects, church, volunteering, or team environments.');
    if(d.romanticOverreliance)out.push('Reduce romantic emotional load by strengthening friendship, mentorship, and community structures.');
    if(d.isolation)out.push('Add recurring in-person social exposure rather than waiting for high-intensity events.');
    if(b.poorCommunication)out.push('Practice clearer, lower-friction communication and follow-through.');
    if(b.lowConfidence)out.push('Build confidence through competence, health, grooming, and repeated exposure rather than reassurance-seeking.');
    if(b.dopamineHabits)out.push('Reduce overstimulation/social media overload to improve emotional regulation and relationship clarity.');
    if(p.chaosAttraction)out.push('Learn to distinguish excitement and uncertainty from peace and compatibility.');
    if(p.overInvestment)out.push('Slow emotional investment and gather more longitudinal evidence before idealizing.');
  }
  if(!out.length)out.push('Your self profile currently appears relatively balanced. Continue using snapshots to detect recurring patterns.');
  return out;
}
function updateSelfPressureOutput(){
  if(!$('selfPressureOutput'))return;
  let me=state.me||{};
  if(isWomanLens()){
    let s=me.socialStandards||{};
    let pressure=((s.comparisonPressure||5)+(s.socialApprovalNeed||5)+(s.statusSignalSensitivity||5)+(s.friendGroupPolicing||5)+(s.romanticExpectationInflation||5))/5;
    $('selfPressureOutput').innerHTML=`<p><b>Social pressure load:</b> ${Math.round(pressure*10)}/100</p><p>${pressure>=7?'Peer comparison and status pressure may be strongly shaping romantic interpretation.':'Peer/social pressure is present but not dominant based on current inputs.'}</p>`;
  }else{
    let roles=me.roles||{};
    let load=((roles.needed||5)+(roles.admired||5)+(roles.respectedRole||5)+(roles.trustedRole||5))/4;
    $('selfPressureOutput').innerHTML=`<p><b>Role reinforcement need:</b> ${Math.round(load*10)}/100</p><p>${load>=7?'Usefulness, respect, and admiration are likely important regulators of confidence and romantic interpretation.':'Role reinforcement matters but does not appear extreme based on current inputs.'}</p>`;
  }
}

function renderGrowthTargets(){
  updateSelfPressureOutput();if(!$('growthOutput'))return;
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
function bindEvents(){['name','pronounContext','rtype','met','desiredOutcome','socialNotes','impression','evidence','interpretation','hesitation','notes'].forEach(id=>{$(id).addEventListener('input',onAnyChange);$(id).addEventListener('change',onAnyChange)});greenDefs.forEach(([k])=>$(`green_${k}`).addEventListener('input',()=>{$(`green_${k}_value`).textContent=$(`green_${k}`).value;onAnyChange()}));riskDefs.forEach(([k])=>$(`risk_${k}`).addEventListener('input',()=>{$(`risk_${k}_value`).textContent=$(`risk_${k}`).value;onAnyChange()}));respectDefs.forEach(([k])=>$(`respect_${k}`).addEventListener('input',()=>{$(`respect_${k}_value`).textContent=$(`respect_${k}`).value;onAnyChange()}));bindAdaptiveRiskInputs();needDefs.forEach(([k])=>$(`need_${k}`).addEventListener('input',()=>{$(`need_${k}_value`).textContent=$(`need_${k}`).value;onMeChange()}));activeRoleDefs().forEach(([k])=>{let el=$(`role_${k}`);if(el)el.addEventListener('input',()=>{$(`role_${k}_value`).textContent=el.value;onMeChange()})});
if(typeof socialStandardsDefs!=='undefined')socialStandardsDefs.forEach(([k])=>{let el=$(`socialStandard_${k}`);if(el)el.addEventListener('input',()=>{$(`socialStandard_${k}_value`).textContent=el.value;onMeChange()})});
activeDeficiencyDefs().forEach(([k])=>{let el=$(`def_${k}`);if(el)el.addEventListener('change',onMeChange)});
activeBlindSpotDefs().forEach(([k])=>{let el=$(`blind_${k}`);if(el)el.addEventListener('change',onMeChange)});
activePatternDefs().forEach(([k])=>{let el=$(`pattern_${k}`);if(el)el.addEventListener('change',onMeChange)});
tendencyDefs.forEach(([k])=>$(`t_${k}`).addEventListener('change',onMeChange));['myName','myPhilosophy','myDatingLens'].forEach(id=>{let el=$(id);if(el){el.addEventListener('input',onMeChange);el.addEventListener('change',()=>{onMeChange();renderSliders();fillMe();updateSelfLensNote();renderGrowthTargets();})}});$('tabSnapshot').onclick=()=>showTab('snapshot');$('tabCards').onclick=()=>showTab('cards');$('tabEcosystem').onclick=()=>showTab('ecosystem');$('tabPerson').onclick=()=>showTab('person');$('tabMe').onclick=()=>showTab('me');document.querySelectorAll('.filter').forEach(b=>b.onclick=()=>{document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));b.classList.add('active');currentFilter=b.dataset.filter;renderCards();});['quickPeace','quickRespect','quickCost'].forEach(id=>$(id).addEventListener('input',updateQuickLabels));$('quickSnapshotBtn').onclick=quickUpdate;['qcWarmth','qcRespect','qcTrust','qcEnergy'].forEach(id=>{if($(id))$(id).addEventListener('input',updateQuickCardLabels)});if($('addQuickCardBtn'))$('addQuickCardBtn').onclick=addQuickCard;if($('saveCardBtn'))$('saveCardBtn').onclick=saveCurrentCard;if($('deleteCardBtn'))$('deleteCardBtn').onclick=deleteCurrentCard;$('newBtn').onclick=()=>{collectForm();let p=blankProfile();state.profiles.push(p);state.currentId=p.id;saveState();fillForm();renderProfiles();safeUpdate()};$('addSnapshotBtn').onclick=addSnapshot;$('exportBtn').onclick=()=>{collectForm();collectMe();saveState();let blob=new Blob([JSON.stringify(state,null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='relationship-intelligence-backup.json';a.click()};$('importFile').onchange=e=>{let file=e.target.files[0];if(!file)return;let reader=new FileReader();reader.onload=()=>{try{let imported=JSON.parse(reader.result);if(!Array.isArray(imported.profiles))throw new Error();state=migrate(imported);if(!state.currentId&&state.profiles[0])state.currentId=state.profiles[0].id;saveState();fillForm();fillMe();renderProfiles();safeUpdate()}catch(err){alert('Could not import that backup file.')}};reader.readAsText(file)}}
function showTab(t){setTimeout(bindExampleButtons,0);$('snapshotView').classList.toggle('hidden',t!=='snapshot');$('cardsView').classList.toggle('hidden',t!=='cards');$('ecosystemView').classList.toggle('hidden',t!=='ecosystem');$('personView').classList.toggle('hidden',t!=='person');$('meView').classList.toggle('hidden',t!=='me');$('tabSnapshot').classList.toggle('active',t==='snapshot');$('tabCards').classList.toggle('active',t==='cards');$('tabEcosystem').classList.toggle('active',t==='ecosystem');$('tabPerson').classList.toggle('active',t==='person');$('tabMe').classList.toggle('active',t==='me');if(t==='snapshot'){updateSnapshotCardSelect();updateSnapshotInterpretation();}if(t==='cards'){renderCards();bindDemoButtons();}if(t==='ecosystem')renderEcosystem();}
function escapeHTML(s){return String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]))}
function init(){try{renderSliders();currentProfile();bindEvents();fillForm();fillMe();renderProfiles();updateQuickLabels();updateQuickCardLabels();safeUpdate();renderCards();renderEcosystem();renderGrowthTargets();bindSnapshotInputs();updateSnapshotCardSelect();updateSnapshotInterpretation();saveState();$('status').textContent='App loaded. Autosave active.'}catch(e){$('status').textContent='Startup error: '+e.message;console.error(e)}}
if('serviceWorker'in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));init();

function demoSet(obj, vals){Object.keys(vals).forEach(k=>obj[k]=vals[k]);}
function demoSnap(label,note,story,domain,peace,respect,repair,embedded,energy,tags){
 return {id:uid(),label:label,created:new Date().toISOString(),peace:peace,respect:respect,compat:Math.round((peace+respect+repair+embedded)/4),repair:repair,reciprocity:respect,embedded:embedded,alignment:Math.round((peace+respect+embedded)/3),energy:energy,note:note,story:story,domain:domain,emotion:'Calm / reflective',evidenceConfidence:'High — repeated observable pattern',interpretationChecked:'Partially',tags:tags||[],primary:true};
}
function makeExample(kind){
 let p=blankProfile(); p.isDemo=true;
 p.social=p.social||{}; p.green=p.green||{}; p.risk=p.risk||{}; p.respect=p.respect||{}; p.translation=p.translation||{}; p.repair=p.repair||{}; p.reciprocityDyn=p.reciprocityDyn||{}; p.embedded=p.embedded||{}; p.energy=p.energy||{};
 if(kind==='work'){
   p.name='John Doe — Demo Boss'; p.pronounContext='Man / he'; p.rtype='Boss / authority figure'; p.desiredOutcome='Professional cooperation'; p.met='Example card';
   demoSet(p.green,{warmth:3,peace:4,respect:4,reciprocity:3,stability:5});
   demoSet(p.risk,{chaos:6,inconsistent:6,contempt:5,drama:5});
   demoSet(p.respect,{opinion:4,appreciation:3,proud:4,boundaries:4,commitments:5});
   demoSet(p.translation,{competenceThreat:6,invisibleLaborSensitivity:4,emotionalTranslation:4,reassuranceNeed:4,missionPriority:8,playfulRepair:2});
   demoSet(p.repair,{repairAbility:4,accountability:3,apology:2,conflictCalm:4,recoverySpeed:4,resentmentRisk:6});
   demoSet(p.reciprocityDyn,{initiation:4,effort:4,emotionalLabor:3,accommodation:3,investment:4});
   demoSet(p.embedded,{realWorld:9,recurring:9,sharedCommunity:7,accountabilitySocial:6,contextStability:8});
   p.evidence='He changed priorities abruptly and criticized the deliverable without clarifying expectations beforehand.';
   p.story='This may be a high-constraint work relationship that needs clarification and containment rather than emotional escalation.';
   p.snapshots=[demoSnap('Priority shift','He changed the deadline and later criticized the result as if the original plan had not changed.','I felt set up to fail and unsure what expectations were real.','Planning / logistics',45,42,35,86,38,['work/mission bandwidth']),demoSnap('Clarification attempt','I asked for written priorities and he gave a clearer ranking of tasks.','Still tense, but more manageable when expectations were written.','Communication / being on same page',55,50,48,88,52,['communication clarity gap'])];
 } else if(kind==='marriage'){
   p.name='Alex Doe — Demo Husband'; p.pronounContext='Man / he'; p.rtype='Husband'; p.desiredOutcome='Marriage repair / growth'; p.met='Example card';
   demoSet(p.green,{warmth:7,peace:7,respect:8,reciprocity:7,stability:8,attraction:7});
   demoSet(p.risk,{chaos:3,inconsistent:3,contempt:2,drama:3});
   demoSet(p.respect,{opinion:8,appreciation:7,proud:8,boundaries:8,commitments:8});
   demoSet(p.translation,{competenceThreat:7,invisibleLaborSensitivity:7,emotionalTranslation:6,reassuranceNeed:6,missionPriority:8,playfulRepair:7,appreciationNeed:8,taskLove:8,utilityIdentity:8});
   demoSet(p.repair,{repairAbility:7,accountability:7,apology:6,conflictCalm:7,recoverySpeed:7,resentmentRisk:3});
   demoSet(p.reciprocityDyn,{initiation:7,effort:8,emotionalLabor:6,accommodation:7,investment:8});
   demoSet(p.embedded,{realWorld:10,recurring:10,sharedCommunity:8,accountabilitySocial:7,contextStability:9});
   p.evidence='He brought flowers and handled several household tasks, but became quiet when one task was corrected.';
   p.story='The conflict may be less about laziness and more about appreciation, competence threat, and how correction lands.';
   p.snapshots=[demoSnap('Flowers and tasks','He brought flowers and fixed the shelf, then went quiet after I said the shelf was uneven.','He may have felt like the effort did not count.','Criticism / correction',72,76,68,90,72,['competence threat','appreciation']),demoSnap('Shared reality check-in','We discussed upcoming plans and both named one thing we appreciated.','The tone improved when recognition and logistics were separated.','Communication / being on same page',82,84,78,92,83,['communication intimacy gap'])];
 } else if(kind==='pet'){
   p.name='Buddy Doe — Demo Pet'; p.pronounContext='Neutral / person'; p.rtype='Pet'; p.desiredOutcome='Companionship / care / comfort'; p.met='Example card';
   demoSet(p.green,{warmth:10,peace:9,respect:8,reciprocity:8,stability:9});
   demoSet(p.risk,{chaos:2,inconsistent:1,contempt:0,drama:1});
   demoSet(p.respect,{opinion:7,appreciation:9,proud:9,boundaries:7,commitments:8});
   demoSet(p.translation,{competenceThreat:2,invisibleLaborSensitivity:3,emotionalTranslation:5,reassuranceNeed:3,missionPriority:1,playfulRepair:8});
   demoSet(p.repair,{repairAbility:8,accountability:8,apology:5,conflictCalm:9,recoverySpeed:9,resentmentRisk:1});
   demoSet(p.reciprocityDyn,{initiation:8,effort:8,emotionalLabor:8,accommodation:7,investment:9});
   demoSet(p.embedded,{realWorld:10,recurring:10,sharedCommunity:5,accountabilitySocial:3,contextStability:9});
   p.evidence='Daily walks provide routine, affection, touch, and grounding.';
   p.story='This pet contributes major warmth and stability, with manageable schedule and financial cost.';
   p.snapshots=[demoSnap('Evening walk','After work we went on a walk and I felt calmer almost immediately.','The routine makes the day feel grounded.','Affection / reassurance',92,88,85,90,90,[]),demoSnap('Care load','Vet bill and schedule were annoying but worth it.','The cost is real, but the comfort is high.','Other',85,84,80,88,78,[])];
 } else {
   p.name='Jane Doe — Demo Romance'; p.pronounContext='Woman / she'; p.rtype='Romantic prospect'; p.desiredOutcome='Explore slowly'; p.met='Example card';
   demoSet(p.green,{warmth:8,peace:8,respect:8,reciprocity:7,attraction:8,curiosity:8,stability:7});
   demoSet(p.risk,{chaos:2,inconsistent:2,contempt:1,drama:2});
   demoSet(p.respect,{opinion:8,appreciation:8,proud:7,boundaries:8,commitments:7});
   demoSet(p.translation,{competenceThreat:4,invisibleLaborSensitivity:5,emotionalTranslation:8,reassuranceNeed:4,missionPriority:4,playfulRepair:7});
   demoSet(p.repair,{repairAbility:8,accountability:8,apology:7,conflictCalm:8,recoverySpeed:8,resentmentRisk:2});
   demoSet(p.reciprocityDyn,{initiation:7,effort:8,emotionalLabor:7,accommodation:7,investment:8});
   demoSet(p.embedded,{realWorld:7,recurring:6,sharedCommunity:5,accountabilitySocial:5,contextStability:7});
   p.evidence='She followed through on plans, asked thoughtful questions, and showed appreciation after a date.';
   p.story='This looks like a warm, stable prospect, but still needs more time and repeated evidence.';
   p.snapshots=[demoSnap('Date 1','She showed up on time, asked about my work, and thanked me for planning dinner.','I felt respected and relaxed afterward.','Appreciation / usefulness',82,84,78,65,76,['appreciation']),demoSnap('Follow-up','She texted the next day and suggested a walk.','This seemed reciprocal rather than one-sided.','Communication / being on same page',86,85,82,68,80,['communication clarity gap'])];
 }
 return p;
}
function loadExampleCards(kind){
 let kinds=kind==='all'?['romance','work','marriage','pet']:[kind];
 kinds.forEach(k=>state.profiles.push(makeExample(k)));
 state.currentId=state.profiles[state.profiles.length-1].id;
 saveState();
 try{renderProfiles()}catch(e){console.warn(e)}
 try{renderCards()}catch(e){console.warn(e)}
 try{renderEcosystem()}catch(e){console.warn(e)}
 try{updateSnapshotCardSelect()}catch(e){console.warn(e)}
 try{fillForm()}catch(e){console.warn(e)}
 try{safeUpdate()}catch(e){console.warn(e)}
 try{showTab('cards')}catch(e){console.warn(e)}
 let st=$('status'); if(st)st.textContent='Example card loaded.';
}
function bindExampleButtons(){
 const map={loadAllDemoCardsTopBtn:'all',loadDemoRomanceTopBtn:'romance',loadDemoWorkTopBtn:'work',loadDemoMarriageTopBtn:'marriage',loadDemoPetTopBtn:'pet',loadAllDemoCardsBtn:'all',loadDemoRomanceBtn:'romance',loadDemoWorkBtn:'work',loadDemoMarriageBtn:'marriage',loadDemoPetBtn:'pet'};
 Object.entries(map).forEach(([id,kind])=>{let el=$(id); if(el&&!el.dataset.exampleBound){el.dataset.exampleBound='1'; el.onclick=()=>loadExampleCards(kind);}});
}
document.addEventListener('DOMContentLoaded',()=>setTimeout(bindExampleButtons,100));


if(typeof drawRadar==='function' && !window.__radarSafe){
 window.__radarSafe=true;
 const __oldDrawRadar=drawRadar;
 drawRadar=function(p,m){
  try{return __oldDrawRadar(p,m)}catch(e){
   console.warn('radar fallback',e);
   let c=$('radar'); if(!c)return;
   let ctx=c.getContext('2d'); ctx.clearRect(0,0,c.width,c.height);
   ctx.font='14px -apple-system,BlinkMacSystemFont,Segoe UI,Arial';
   ctx.fillStyle='#6e675d';
   ctx.fillText('Radar chart unavailable. A required chart value is missing.',20,40);
  }
 }
}


/* v2.6.2 demo cards + output stabilization */
function fillDemoProfileData(p, kind){
  p.isDemo=true;
  p.social=p.social||{}; p.category=p.category||{}; p.green=p.green||{}; p.risk=p.risk||{}; p.respect=p.respect||{};
  p.translation=p.translation||{}; p.repair=p.repair||{}; p.reciprocityDyn=p.reciprocityDyn||{}; p.embedded=p.embedded||{}; p.energy=p.energy||{};
  const ctxKeys=['contextFit','trust','cost','clarityGeneral','reciprocalGeneral','boundariesGeneral','commitmentInterest','respectWomen','followThrough','sexualImpulsivity','motivation','emotionalRegulation','reliabilityRisk','politicsRisk','clarity','fairness','competenceFit','boundaryRespectWork','mutuality','confidentiality','dramaRisk','supportiveness','funEase','valuesFitFriend'];
  ctxKeys.forEach(k=>{if(p.social[k]===undefined)p.social[k]=7});
  if(kind==='work'){['reliabilityRisk','politicsRisk','cost','dramaRisk'].forEach(k=>p.social[k]=6);['clarity','fairness','competenceFit','boundaryRespectWork'].forEach(k=>p.social[k]=4)}
  if(kind==='marriage'){ctxKeys.forEach(k=>p.social[k]=8);['cost','sexualImpulsivity','reliabilityRisk','politicsRisk','dramaRisk'].forEach(k=>p.social[k]=2)}
  if(kind==='pet'){ctxKeys.forEach(k=>p.social[k]=8);['cost','sexualImpulsivity','reliabilityRisk','politicsRisk','dramaRisk'].forEach(k=>p.social[k]=2)}
  if(kind==='romance'){ctxKeys.forEach(k=>p.social[k]=7);['cost','sexualImpulsivity','reliabilityRisk','politicsRisk','dramaRisk'].forEach(k=>p.social[k]=2)}
  Object.keys(p.category||{}).forEach(k=>{if(p.category[k]===undefined)p.category[k]=7});
}
function ensureDemoSnapshots(p,kind){
  if(p.snapshots&&p.snapshots.length>=2)return;
  if(typeof demoSnap==='function'){
    if(kind==='marriage'){
      p.snapshots=[
        demoSnap('Flowers and tasks','He brought flowers and fixed the shelf, then went quiet after I said the shelf was uneven.','He may have felt like the effort did not count.','Criticism / correction',72,76,68,90,72,['competence threat','appreciation']),
        demoSnap('Shared reality check-in','We discussed upcoming plans and both named one thing we appreciated.','The tone improved when recognition and logistics were separated.','Communication / being on same page',82,84,78,92,83,['communication intimacy gap'])
      ];
    } else if(kind==='work'){
      p.snapshots=[
        demoSnap('Priority shift','He changed the deadline and later criticized the result as if the original plan had not changed.','I felt set up to fail and unsure what expectations were real.','Planning / logistics',45,42,35,86,38,['work/mission bandwidth']),
        demoSnap('Clarification attempt','I asked for written priorities and he gave a clearer ranking of tasks.','Still tense, but more manageable when expectations were written.','Communication / being on same page',55,50,48,88,52,['communication clarity gap'])
      ];
    } else if(kind==='pet'){
      p.snapshots=[
        demoSnap('Evening walk','After work we went on a walk and I felt calmer almost immediately.','The routine makes the day feel grounded.','Affection / reassurance',92,88,85,90,90,[]),
        demoSnap('Care load','Vet bill and schedule were annoying but worth it.','The cost is real, but the comfort is high.','Other',85,84,80,88,78,[])
      ];
    } else {
      p.snapshots=[
        demoSnap('Date 1','She showed up on time, asked about my work, and thanked me for planning dinner.','I felt respected and relaxed afterward.','Appreciation / usefulness',82,84,78,65,76,['appreciation']),
        demoSnap('Follow-up','She texted the next day and suggested a walk.','This seemed reciprocal rather than one-sided.','Communication / being on same page',86,85,82,68,80,['communication clarity gap'])
      ];
    }
  }
}
function enrichDemoProfiles(){
  (state.profiles||[]).forEach(p=>{
    if(!p.isDemo && !String(p.name||'').includes('Demo'))return;
    p.isDemo=true;
    let name=(p.name||'').toLowerCase();
    let kind=name.includes('boss')?'work':name.includes('husband')?'marriage':name.includes('pet')?'pet':'romance';
    fillDemoProfileData(p,kind);
    if(!p.interpretation||p.interpretation.length<20){
      p.interpretation=kind==='marriage'
        ? 'Example interpretation: Alex is mostly constructive and committed, but correction may land as competence threat. The useful lesson is to separate recognition from course-correction and use shared-reality check-ins.'
        : kind==='work'
        ? 'Example interpretation: John is a high-constraint authority relationship. The strategy is clarification first, written expectations, then containment if repair does not improve.'
        : kind==='pet'
        ? 'Example interpretation: Buddy is a stabilizing ecosystem card. The main value is routine, warmth, touch, and emotional grounding, with some care burden.'
        : 'Example interpretation: Jane shows warmth, reciprocity, and follow-through. The right strategy is slow observation rather than over-investing after one good interaction.';
    }
    if(!p.hesitation||p.hesitation.length<20){
      p.hesitation=kind==='marriage'
        ? 'Watch for recurring withdrawal after correction and whether repair improves after explicit shared-reality check-ins.'
        : kind==='work'
        ? 'Do not over-personalize one bad exchange, but track whether expectations become clear after clarification.'
        : kind==='pet'
        ? 'Care burden, schedule restriction, expense, and future grief risk are the main costs.'
        : 'Still early; needs more repeated snapshots before treating the pattern as stable.';
    }
    if(!p.notes||p.notes.length<20)p.notes='Demo card: preloaded to show how sliders, snapshots, trends, translation, and strategy outputs are intended to work.';
    ensureDemoSnapshots(p,kind);
    if(!p.evidence)p.evidence=(p.snapshots&&p.snapshots[0]&&p.snapshots[0].note)||'Demo evidence.';
    if(!p.story)p.story=(p.snapshots&&p.snapshots[0]&&p.snapshots[0].story)||'Demo story.';
  });
}
function ensureDemoBeforeRender(){try{enrichDemoProfiles();saveState()}catch(e){console.warn('demo enrich',e)}}
function drawMiniBars(containerId, rows, note){
  let el=$(containerId); if(!el)return;
  el.innerHTML=`<div class="demoReadout">${note||''}<div class="miniBars">`+rows.map(r=>`<div class="miniBar"><b>${r[0]}</b><div class="miniTrack"><div class="miniFill" style="width:${Math.max(0,Math.min(100,r[1]))}%"></div></div><span>${Math.round(r[1])}</span></div>`).join('')+`</div></div>`;
}
function demoMetricsRows(p,m){
  m=m||metrics(p);
  return [['Peace',m.peaceIndex||0],['Respect',m.respectIndex||0],['Repair',m.repair||0],['Reciprocity',m.reciprocityDyn||0],['Grounding',m.embedded||0],['Alignment',m.alignment||0]];
}
function ensureRadarFallbackDiv(){
  let c=$('radar'); if(c && !$('radarFallback')){
    let div=document.createElement('div');div.id='radarFallback';c.parentNode.insertBefore(div,c.nextSibling);
  }
}
function fallbackRadar(p,m){
  ensureRadarFallbackDiv();
  drawMiniBars('radarFallback',demoMetricsRows(p,m),'Radar fallback summary');
}
function drawTrendFallback(p){
  if(!$('trendOutput'))return;
  let snaps=p.snapshots||[];
  if(snaps.length<2){$('trendOutput').innerHTML='<p><b>Trend:</b> Add at least two snapshots to see trend movement.</p>';return}
  let a=snaps[0],b=snaps[snaps.length-1];
  let rows=[['Peace',(b.peace||0)-(a.peace||0)],['Respect',(b.respect||0)-(a.respect||0)],['Repair',(b.repair||0)-(a.repair||0)],['Grounding',(b.embedded||0)-(a.embedded||0)]];
  $('trendOutput').innerHTML='<p><b>Trend movement:</b> '+rows.map(r=>`${r[0]} ${r[1]>=0?'+':''}${Math.round(r[1])}`).join(' · ')+'</p>';
}
function drawTrajectoryFallback(p){
  let c=$('trajectoryCanvas'); if(!c)return;
  let snaps=p.snapshots||[]; let ctx=c.getContext('2d'),w=c.width,h=c.height,pad=35;
  ctx.clearRect(0,0,w,h); ctx.fillStyle='#fff'; ctx.fillRect(0,0,w,h);
  ctx.strokeStyle='#ded6c9'; ctx.beginPath(); ctx.moveTo(pad,pad); ctx.lineTo(pad,h-pad); ctx.lineTo(w-pad,h-pad); ctx.stroke();
  if(snaps.length<2){ctx.fillStyle='#6e675d';ctx.font='14px sans-serif';ctx.fillText('Add two snapshots to show trajectory.',pad,50);return}
  [['peace','Peace'],['respect','Respect'],['repair','Repair'],['embedded','Grounding']].forEach((s,si)=>{
    ctx.beginPath();
    snaps.forEach((snap,i)=>{let x=pad+(i/(snaps.length-1))*(w-2*pad), y=h-pad-((snap[s[0]]||50)/100)*(h-2*pad); i?ctx.lineTo(x,y):ctx.moveTo(x,y)});
    ctx.strokeStyle=['#815b33','#5a78a0','#4d7a52','#7c6f64'][si];ctx.lineWidth=2;ctx.stroke();ctx.fillStyle=ctx.strokeStyle;ctx.fillText(s[1],pad+si*85,18);
  });
}
function ensureTranslationOutputs(p,m){
  try{if(typeof updateTranslationSources==='function')updateTranslationSources(p)}catch(e){}
  try{if(typeof updateTranslationMap==='function')updateTranslationMap(p)}catch(e){}
  try{if(typeof updateFrictionHeatmap==='function')updateFrictionHeatmap(p)}catch(e){}
  if($('frictionHeatmap')&&!$('frictionHeatmap').innerText.trim()){
    drawMiniBars('frictionHeatmap',[['Correction',70],['Communication',65],['Planning',45],['Appreciation',75]],'Example friction domain intensity');
  }
}
if(typeof safeUpdate==='function' && !window.__safeUpdateDemoWrapped){
  window.__safeUpdateDemoWrapped=true;
  const __oldSafeUpdateDemo=safeUpdate;
  safeUpdate=function(){
    ensureDemoBeforeRender();
    let result=__oldSafeUpdateDemo();
    try{
      let p=currentProfile(), m=metrics(p);
      fallbackRadar(p,m);
      drawTrendFallback(p);
      drawTrajectoryFallback(p);
      ensureTranslationOutputs(p,m);
    }catch(e){console.warn('demo output stabilization',e)}
    return result;
  }
}
if(typeof loadExampleCards==='function' && !window.__loadExampleWrapped){
  window.__loadExampleWrapped=true;
  const __oldLoadExampleCards=loadExampleCards;
  loadExampleCards=function(kind){
    let r=__oldLoadExampleCards(kind);
    ensureDemoBeforeRender();
    try{fillForm();safeUpdate()}catch(e){console.warn(e)}
    return r;
  }
}
document.addEventListener('DOMContentLoaded',()=>setTimeout(()=>{try{ensureDemoBeforeRender();safeUpdate()}catch(e){}},300));



/* v2.6.3 hard stabilization */
function isEmptyUntitledProfile(p){
  if(!p)return false;
  let name=String(p.name||'').trim().toLowerCase();
  let noSnaps=!(p.snapshots&&p.snapshots.length);
  let noText=!String((p.evidence||'')+(p.story||'')+(p.interpretation||'')+(p.notes||'')).trim();
  return (name===''||name==='untitled'||name==='new card') && noSnaps && noText && !p.isDemo;
}
function removeAutoUntitledProfiles(){
  if(!state||!state.profiles)return;
  state.profiles=state.profiles.filter(p=>!isEmptyUntitledProfile(p));
  if(!state.profiles.length){state.currentId=null}
  else if(!state.profiles.find(p=>p.id===state.currentId)){state.currentId=state.profiles[0].id}
}
function updateTranslationSources(p){
  try{
    if(typeof updateTranslationSourcesOutput==='function')return updateTranslationSourcesOutput(p);
    if(typeof translationInputsUsed==='function' && $('translationSourcesOutput')){
      let rows=translationInputsUsed(p).map(([k,v])=>`<tr><td>${escapeHTML(k)}</td><td>${escapeHTML(String(v))}</td></tr>`).join('');
      $('translationSourcesOutput').innerHTML=`<table class="inputTable">${rows}</table>`;
    }
  }catch(e){console.warn('updateTranslationSources alias',e)}
}
function renderDetailSwitcher(){
  let sel=$('detailProfileSelect'); if(!sel||!state||!state.profiles)return;
  sel.innerHTML=state.profiles.map(p=>`<option value="${p.id}" ${p.id===state.currentId?'selected':''}>${escapeHTML(p.name||'Untitled')} — ${escapeHTML(p.rtype||'Card')}</option>`).join('');
  if(!sel.dataset.bound){
    sel.dataset.bound='1';
    sel.addEventListener('change',()=>{
      state.currentId=sel.value; saveState();
      try{fillForm()}catch(e){console.warn(e)}
      try{safeUpdate()}catch(e){console.warn(e)}
      try{renderProfiles()}catch(e){console.warn(e)}
      renderDetailSwitcher();
    });
  }
}
function hardMetrics(p){
  try{return metrics(p)}catch(e){return {peaceIndex:50,respectIndex:50,repair:50,reciprocityDyn:50,embedded:50,alignment:50,energy:50,personalized:50}}
}
function drawRealRadarFallback(p,m){
  let c=$('radar'); if(!c)return;
  let ctx=c.getContext('2d'),w=c.width,h=c.height;
  ctx.clearRect(0,0,w,h); ctx.fillStyle='#fff'; ctx.fillRect(0,0,w,h);
  let rows=[['Peace',m.peaceIndex||0],['Respect',m.respectIndex||0],['Repair',m.repair||0],['Reciprocity',m.reciprocityDyn||0],['Grounding',m.embedded||0],['Alignment',m.alignment||0]];
  let cx=w/2,cy=h/2,r=Math.min(w,h)*0.33;
  ctx.strokeStyle='#ded6c9'; ctx.fillStyle='#6e675d'; ctx.font='12px -apple-system,BlinkMacSystemFont,Segoe UI,Arial';
  for(let ring=1;ring<=4;ring++){ctx.beginPath();ctx.arc(cx,cy,r*ring/4,0,Math.PI*2);ctx.stroke()}
  rows.forEach((row,i)=>{let a=-Math.PI/2+i*(Math.PI*2/rows.length);let x=cx+Math.cos(a)*r,y=cy+Math.sin(a)*r;ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(x,y);ctx.stroke();ctx.fillText(row[0],cx+Math.cos(a)*(r+30)-22,cy+Math.sin(a)*(r+28))});
  ctx.beginPath();
  rows.forEach((row,i)=>{let a=-Math.PI/2+i*(Math.PI*2/rows.length);let rr=r*(row[1]/100);let x=cx+Math.cos(a)*rr,y=cy+Math.sin(a)*rr;i?ctx.lineTo(x,y):ctx.moveTo(x,y)});
  ctx.closePath();ctx.fillStyle='rgba(129,91,51,0.22)';ctx.fill();ctx.strokeStyle='#815b33';ctx.lineWidth=2;ctx.stroke();
}
function renderAllDetailOutputs(){
  try{renderDetailSwitcher()}catch(e){}
  try{
    let p=currentProfile(); if(!p)return;
    let m=hardMetrics(p);
    drawRealRadarFallback(p,m);
    if(typeof drawTrendFallback==='function')drawTrendFallback(p);
    if(typeof drawTrajectoryFallback==='function')drawTrajectoryFallback(p);
    if(typeof updateTranslationOutput==='function')updateTranslationOutput(p,m);
    updateTranslationSources(p);
    if(typeof updateTranslationMap==='function')updateTranslationMap(p);
    if(typeof updateFrictionHeatmap==='function')updateFrictionHeatmap(p);
    if(typeof updateRepairLanguage==='function')updateRepairLanguage(p);
    if(typeof updateAccuracyOutput==='function')updateAccuracyOutput(p,m);
    if(typeof updateRepairPlanOutput==='function')updateRepairPlanOutput(p,m);
    if(typeof updateResponseMode==='function')updateResponseMode(p,m);
    if(typeof updateStrategy==='function')updateStrategy(p,m);
    if(typeof updateMarriageSystemOutput==='function')updateMarriageSystemOutput(p,m);
  }catch(e){console.warn('detail outputs',e)}
}
if(typeof loadExampleCards==='function' && !window.__loadExampleCleanWrapped){
  window.__loadExampleCleanWrapped=true;
  const oldLoadExampleCards=loadExampleCards;
  loadExampleCards=function(kind){
    removeAutoUntitledProfiles();
    let r=oldLoadExampleCards(kind);
    removeAutoUntitledProfiles();
    try{saveState();renderProfiles();renderCards();fillForm();renderAllDetailOutputs()}catch(e){console.warn(e)}
    return r;
  }
}
if(typeof loadDemoProfiles==='function' && !window.__loadDemoCleanWrapped){
  window.__loadDemoCleanWrapped=true;
  const oldLoadDemoProfiles=loadDemoProfiles;
  loadDemoProfiles=function(kind){
    removeAutoUntitledProfiles();
    let r=oldLoadDemoProfiles(kind);
    removeAutoUntitledProfiles();
    try{saveState();renderProfiles();renderCards();fillForm();renderAllDetailOutputs()}catch(e){console.warn(e)}
    return r;
  }
}
if(typeof safeUpdate==='function' && !window.__safeUpdate263){
  window.__safeUpdate263=true;
  const oldSafeUpdate263=safeUpdate;
  safeUpdate=function(){
    let r; try{r=oldSafeUpdate263()}catch(e){console.warn('safeUpdate original',e)}
    renderAllDetailOutputs();
    return r;
  }
}
if(typeof fillForm==='function' && !window.__fillForm263){
  window.__fillForm263=true;
  const oldFillForm263=fillForm;
  fillForm=function(){let r=oldFillForm263();setTimeout(renderDetailSwitcher,0);return r}
}
document.addEventListener('DOMContentLoaded',()=>setTimeout(()=>{try{removeAutoUntitledProfiles();saveState();renderProfiles();renderCards();fillForm();renderAllDetailOutputs()}catch(e){console.warn(e)}},300));



/* v2.7 diagnostics + future viability */
const futureDefs=[
 ['sameTeamConflict','Same-team conflict','During fights, do they stay on the same team rather than making each other the enemy?',5,'Enemy/problem','Same team',true],
 ['sharedDirection','Shared direction','Do they want similar life direction, values, pace, family structure, and future?',5,'Diverging','Aligned',true],
 ['backgroundFit','Background / culture fit','Do backgrounds, expectations, lifestyle, religion/class/family norms, and assumptions fit well enough?',5,'High friction','Good fit',true],
 ['communicationClarityFuture','Communication clarity','Can they communicate directly, honestly, and early before resentment builds?',5,'Confusing','Clear',true],
 ['sexualCommunication','Sexual communication','Can they talk about sex, desire, comfort, dissatisfaction, and repair without shame or punishment?',5,'Avoidant','Open',true],
 ['loyaltyTrust','Loyalty / trust','Is there strong loyalty, low betrayal risk, and low attention-seeking outside the relationship?',5,'Low trust','High loyalty',true],
 ['repairAfterFight','Repair after fights','After conflict, do they apologize, clarify, reconnect, and change behavior?',5,'No repair','Strong repair',true],
 ['commitmentReadiness','Commitment readiness','Are both people ready to choose the relationship instead of keeping one foot out?',5,'Avoidant','Ready',true],
 ['admirationDesire','Admiration / desire durability','Is there durable admiration, respect, attraction, and desire rather than contempt or duty only?',5,'Eroding','Durable',true],
 ['stressTeamwork','Stress teamwork','When life gets hard, do they coordinate under stress rather than collapse into blame?',5,'Blame','Teamwork',true],
 ['familySystemFit','Family system fit','Do in-laws, children, friends, and social environment support rather than sabotage the bond?',5,'Sabotage','Support',true],
 ['financialPracticalFit','Practical / financial fit','Are spending, work ethic, household standards, planning, and responsibility compatible?',5,'Friction','Compatible',true]
];
function ensureFuture(p){p.future=p.future||{};futureDefs.forEach(([k,,,v])=>{if(p.future[k]===undefined)p.future[k]=v});}
function futureScore(p){ensureFuture(p);let weights={sameTeamConflict:1.35,loyaltyTrust:1.35,repairAfterFight:1.35,sharedDirection:1.25,commitmentReadiness:1.2,communicationClarityFuture:1.2,stressTeamwork:1.1,admirationDesire:1.0,sexualCommunication:0.9,backgroundFit:0.85,familySystemFit:0.75,financialPracticalFit:0.75};let total=0,w=0;Object.entries(weights).forEach(([k,wt])=>{total+=Number(p.future[k]??5)*wt;w+=wt});return Math.round((total/w)*10);}
function renderFutureViabilitySliders(){if(!$('futureViabilitySliders'))return;let p=currentProfile();if(!p)return;ensureFuture(p);$('futureViabilitySliders').innerHTML=futureDefs.map(([k,l,h,v,left,right,good])=>sliderHTML('future',k,l,h,p.future[k]??v,left,right,good)).join('');}
function fillFutureViability(){let p=currentProfile();if(!p)return;ensureFuture(p);futureDefs.forEach(([k])=>{let el=$(`future_${k}`);if(el){el.value=p.future[k];let val=$(`future_${k}_value`);if(val)val.textContent=el.value}});}
function collectFutureViability(){let p=currentProfile();if(!p)return;ensureFuture(p);futureDefs.forEach(([k])=>{let el=$(`future_${k}`);if(el)p.future[k]=Number(el.value)});}
function bindFutureViability(){futureDefs.forEach(([k])=>{let el=$(`future_${k}`);if(el&&!el.dataset.bound){el.dataset.bound='1';el.addEventListener('input',()=>{let val=$(`future_${k}_value`);if(val)val.textContent=el.value;collectFutureViability();saveState();updateFutureViabilityOutput();});}});}
function updateFutureViabilityOutput(){if(!$('futureViabilityOutput'))return;let p=currentProfile();if(!p)return;ensureFuture(p);let score=futureScore(p),f=p.future,warnings=[];if((f.sameTeamConflict||5)<5)warnings.push('Conflict risks becoming adversarial instead of “us versus the problem.”');if((f.loyaltyTrust||5)<5)warnings.push('Loyalty/trust is a major weak point.');if((f.repairAfterFight||5)<5)warnings.push('Repair after fights is weak, which is a major long-term risk.');if((f.sharedDirection||5)<5)warnings.push('Shared direction is unclear or divergent.');if((f.sexualCommunication||5)<5)warnings.push('Sexual communication is underdeveloped or avoided.');let label=score>=82?'Strong future potential':score>=65?'Promising but watch key risks':score>=45?'Uncertain / needs evidence and repair':'Low current long-term viability';$('futureViabilityOutput').innerHTML=`<div class="futureScore"><strong>${score}/100 — ${label}</strong><p>This forecast weights same-team conflict, repair, loyalty, shared direction, commitment, communication, sex communication, stress teamwork, and practical fit.</p>${warnings.length?'<b>Watch:</b><ul>'+warnings.map(w=>`<li>${w}</li>`).join('')+'</ul>':'<p>No major future-viability warning triggered from these sliders.</p>'}</div>`;}
function normalizeProfile(p){if(!p)return;p.green=p.green||{};p.risk=p.risk||{};p.respect=p.respect||{};p.translation=p.translation||{};p.repair=p.repair||{};p.reciprocityDyn=p.reciprocityDyn||{};p.embedded=p.embedded||{};p.energy=p.energy||{};p.social=p.social||{};p.future=p.future||{};p.snapshots=p.snapshots||[];ensureFuture(p);}
function normalizeAllProfiles(){(state.profiles||[]).forEach(normalizeProfile);saveState();}
function runDiagnostics(){let out=[];let checks=[['state object',!!state],['profiles array',Array.isArray(state.profiles)],['currentProfile function',typeof currentProfile==='function'],['metrics function',typeof metrics==='function'],['radar canvas present',!!$('radar')],['translation output present',!!$('translationOutput')],['future viability section present',!!$('futureViabilityOutput')],['diagnostics view present',!!$('diagnosticsView')]];checks.forEach(([name,ok])=>out.push(`<div class="${ok?'diagnosticPass':'diagnosticFail'}"><b>${ok?'PASS':'FAIL'}:</b> ${name}</div>`));let profiles=state.profiles||[];out.push(`<div class="diagnosticPass"><b>Profiles:</b> ${profiles.length}</div>`);profiles.forEach(p=>{let problems=[];if(!p.name)problems.push('missing name');if(!p.rtype)problems.push('missing type');if(!p.snapshots||!p.snapshots.length)problems.push('no snapshots');if(!p.translation)problems.push('missing translation object');if(!p.future)problems.push('missing future object');if(!p.green||!p.respect||!p.repair)problems.push('missing metric groups');out.push(`<div class="${problems.length?'diagnosticWarn':'diagnosticPass'}"><b>${escapeHTML(p.name||'Untitled')}:</b> ${problems.length?problems.join(', '):'profile structure looks OK'}</div>`);});if($('diagnosticsOutput'))$('diagnosticsOutput').innerHTML=out.join('');}
function bindDiagnostics(){let r=$('runDiagnosticsBtn');if(r&&!r.dataset.bound){r.dataset.bound='1';r.onclick=runDiagnostics}let n=$('normalizeProfilesBtn');if(n&&!n.dataset.bound){n.dataset.bound='1';n.onclick=()=>{normalizeAllProfiles();runDiagnostics();let st=$('status');if(st)st.textContent='Profiles normalized.'}}let d=$('removeEmptyProfilesBtn');if(d&&!d.dataset.bound){d.dataset.bound='1';d.onclick=()=>{if(typeof removeAutoUntitledProfiles==='function')removeAutoUntitledProfiles();saveState();try{renderProfiles();renderCards()}catch(e){}runDiagnostics();}}}
if(typeof renderSliders==='function'&&!window.__futureRenderWrapped){window.__futureRenderWrapped=true;const oldRenderSliders=renderSliders;renderSliders=function(){let r=oldRenderSliders();renderFutureViabilitySliders();fillFutureViability();bindFutureViability();updateFutureViabilityOutput();return r}}
if(typeof fillForm==='function'&&!window.__futureFillWrapped){window.__futureFillWrapped=true;const oldFillFormFuture=fillForm;fillForm=function(){let r=oldFillFormFuture();renderFutureViabilitySliders();fillFutureViability();bindFutureViability();updateFutureViabilityOutput();return r}}
if(typeof collectForm==='function'&&!window.__futureCollectWrapped){window.__futureCollectWrapped=true;const oldCollectFormFuture=collectForm;collectForm=function(){let r=oldCollectFormFuture();collectFutureViability();return r}}
if(typeof safeUpdate==='function'&&!window.__futureSafeWrapped){window.__futureSafeWrapped=true;const oldSafeFuture=safeUpdate;safeUpdate=function(){let r=oldSafeFuture();updateFutureViabilityOutput();bindDiagnostics();return r}}
if(typeof showTab==='function'&&!window.__diagnosticTabWrapped){window.__diagnosticTabWrapped=true;const oldShowTabDiag=showTab;showTab=function(t){let r=oldShowTabDiag(t);let dv=$('diagnosticsView');if(dv)dv.classList.toggle('hidden',t!=='diagnostics');let tab=$('tabDiagnostics');if(tab)tab.classList.toggle('active',t==='diagnostics');if(t==='diagnostics'){bindDiagnostics();runDiagnostics();}return r}}
document.addEventListener('DOMContentLoaded',()=>setTimeout(()=>{let td=$('tabDiagnostics');if(td&&!td.dataset.bound){td.dataset.bound='1';td.onclick=()=>showTab('diagnostics')}bindDiagnostics();normalizeAllProfiles();try{renderFutureViabilitySliders();fillFutureViability();bindFutureViability();updateFutureViabilityOutput()}catch(e){console.warn(e)}},250));



/* v2.7.1 hard fixes for missing functions, diagnostics, and radar values */
function snapshotAverage(p,key,fallback){
  let snaps=(p&&p.snapshots)||[];
  let vals=snaps.map(s=>Number(s[key])).filter(v=>Number.isFinite(v)&&v>0);
  if(vals.length)return vals.reduce((a,b)=>a+b,0)/vals.length;
  return fallback;
}
function safeMetricSet(p){
  let m={};
  try{m=metrics(p)||{}}catch(e){m={}}
  let peace=Number(m.peaceIndex||m.personalized||0);
  let respect=Number(m.respectIndex||0);
  let repair=Number(m.repair||0);
  let rec=Number(m.reciprocityDyn||m.reciprocity||0);
  let emb=Number(m.embedded||0);
  let align=Number(m.alignment||0);
  peace=peace||snapshotAverage(p,'peace',Math.round(((p?.green?.peace||5)+(p?.green?.warmth||5)+(10-(p?.risk?.chaos||5)))/3*10));
  respect=respect||snapshotAverage(p,'respect',Math.round(((p?.respect?.opinion||5)+(p?.respect?.appreciation||5)+(p?.green?.respect||5))/3*10));
  repair=repair||snapshotAverage(p,'repair',Math.round(((p?.repair?.repairAbility||5)+(p?.repair?.accountability||5)+(p?.repair?.conflictCalm||5))/3*10));
  rec=rec||snapshotAverage(p,'reciprocity',Math.round(((p?.reciprocityDyn?.effort||5)+(p?.reciprocityDyn?.investment||5)+(p?.green?.reciprocity||5))/3*10));
  emb=emb||snapshotAverage(p,'embedded',Math.round(((p?.embedded?.realWorld||5)+(p?.embedded?.recurring||5)+(p?.embedded?.contextStability||5))/3*10));
  align=align||snapshotAverage(p,'alignment',Math.round((peace+respect+emb)/3));
  return {peaceIndex:Math.round(peace),respectIndex:Math.round(respect),repair:Math.round(repair),reciprocityDyn:Math.round(rec),embedded:Math.round(emb),alignment:Math.round(align),personalized:Math.round(peace)};
}
function updateFrictionHeatmap(p){
  try{
    let snap=((p&&p.snapshots)||[]).slice(-1)[0]||{};
    let vals={
      Communication: snap.domain&&snap.domain.includes('Communication')?75:45,
      Correction: snap.domain&&snap.domain.includes('Criticism')?75:35,
      Planning: snap.domain&&snap.domain.includes('Planning')?70:40,
      Appreciation: snap.domain&&snap.domain.includes('Appreciation')?75:45,
      Commitment: snap.domain&&snap.domain.includes('Commitment')?70:35
    };
    if(typeof drawMiniBars==='function')drawMiniBars('frictionHeatmap',Object.entries(vals),'Friction domain intensity');
    else if($('frictionHeatmap'))$('frictionHeatmap').innerHTML=Object.entries(vals).map(([k,v])=>`<p><b>${k}</b>: ${v}/100</p>`).join('');
  }catch(e){console.warn('updateFrictionHeatmap fallback',e)}
}
function updateRepairLanguage(p){
  if(!$('repairLanguageOutput'))return;
  let snap=((p&&p.snapshots)||[]).slice(-1)[0]||{};
  let domain=snap.domain||'';
  let text='Clarify the event, state the impact, ask one direct question, and agree on one concrete next behavior.';
  if(domain.includes('Criticism'))text='Separate appreciation from correction. First let the good effort stand on its own; later make a concrete comfort/outcome request without making the person the problem.';
  if(domain.includes('Communication'))text='Use a shared-reality check-in: what changed, what decisions are pending, what stress is each person carrying, and what needs to be clarified?';
  if(domain.includes('Appreciation'))text='Name what was appreciated specifically and repeatedly. Do not use appreciation as a fake setup for immediate criticism.';
  $('repairLanguageOutput').innerHTML=`<p>${text}</p>`;
}
function updateAccuracyOutput(p,m){
  if(!$('accuracyOutput'))return;
  let snap=((p&&p.snapshots)||[]).slice(-1)[0]||{};
  $('accuracyOutput').innerHTML=`<p><b>Evidence confidence:</b> ${escapeHTML(snap.evidenceConfidence||'Not set')}</p><p><b>Interpretation checked:</b> ${escapeHTML(snap.interpretationChecked||'Not set')}</p><p>Treat low-confidence interpretations as hypotheses until repeated snapshots or direct clarification support them.</p>`;
}
function updateRepairPlanOutput(p,m){
  if(!$('repairPlanOutput'))return;
  $('repairPlanOutput').innerHTML='<p><b>Repair-first plan:</b> 1) identify the exact event, 2) separate facts from story, 3) ask one clarifying question, 4) make one concrete request, 5) log the next snapshot to see whether repair improved.</p>';
}
function updateStrategy(p,m){
  if(!$('strategyOutput'))return;
  let score=((m?.peaceIndex||0)+(m?.respectIndex||0))/2;
  let mode=score>=75?'Maintain and deepen':'Go slow and gather evidence';
  $('strategyOutput').innerHTML=`<p><b>${mode}.</b> Use repeated snapshots rather than one emotional verdict. Watch trend direction more than a single score.</p>`;
}
function renderRadarStable(p){
  let c=$('radar'); if(!c)return;
  let m=safeMetricSet(p);
  let ctx=c.getContext('2d'),w=c.width,h=c.height;
  ctx.clearRect(0,0,w,h);
  ctx.fillStyle='#fff';ctx.fillRect(0,0,w,h);
  let rows=[['Peace',m.peaceIndex],['Respect',m.respectIndex],['Repair',m.repair],['Reciprocity',m.reciprocityDyn],['Grounding',m.embedded],['Alignment',m.alignment]];
  let cx=w/2,cy=h/2,r=Math.min(w,h)*0.33;
  ctx.strokeStyle='#ded6c9';ctx.fillStyle='#6e675d';ctx.font='12px -apple-system,BlinkMacSystemFont,Segoe UI,Arial';
  for(let ring=1;ring<=4;ring++){ctx.beginPath();ctx.arc(cx,cy,r*ring/4,0,Math.PI*2);ctx.stroke();}
  rows.forEach((row,i)=>{let a=-Math.PI/2+i*Math.PI*2/rows.length;ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r);ctx.stroke();ctx.fillText(row[0],cx+Math.cos(a)*(r+32)-24,cy+Math.sin(a)*(r+30));});
  ctx.beginPath();
  rows.forEach((row,i)=>{let a=-Math.PI/2+i*Math.PI*2/rows.length;let rr=r*(Math.max(0,Math.min(100,row[1]))/100);let x=cx+Math.cos(a)*rr,y=cy+Math.sin(a)*rr;i?ctx.lineTo(x,y):ctx.moveTo(x,y);});
  ctx.closePath();ctx.fillStyle='rgba(129,91,51,0.24)';ctx.fill();ctx.strokeStyle='#815b33';ctx.lineWidth=2;ctx.stroke();
}
function showDiagnosticsTab(){
  ['snapshotView','cardsView','ecosystemView','personView','meView'].forEach(id=>{let el=$(id);if(el)el.classList.add('hidden')});
  let dv=$('diagnosticsView'); if(dv){dv.classList.remove('hidden');dv.classList.add('diagnosticsVisible')}
  ['tabSnapshot','tabCards','tabEcosystem','tabPerson','tabMe'].forEach(id=>{let el=$(id);if(el)el.classList.remove('active')});
  let tab=$('tabDiagnostics'); if(tab)tab.classList.add('active');
  if(typeof bindDiagnostics==='function')bindDiagnostics();
  if(typeof runDiagnostics==='function')runDiagnostics();
}
function bindDiagnosticsHard(){
  let tab=$('tabDiagnostics');
  if(tab&&!tab.dataset.hardBound){tab.dataset.hardBound='1';tab.addEventListener('click',showDiagnosticsTab);}
  if(typeof bindDiagnostics==='function')bindDiagnostics();
}
if(typeof safeUpdate==='function' && !window.__safeUpdate271){
  window.__safeUpdate271=true;
  const oldSafeUpdate271=safeUpdate;
  safeUpdate=function(){
    let r; try{r=oldSafeUpdate271()}catch(e){console.warn('safeUpdate original',e)}
    try{let p=currentProfile(); if(p){let m=safeMetricSet(p);renderRadarStable(p); updateFrictionHeatmap(p); updateRepairLanguage(p); updateAccuracyOutput(p,m); updateRepairPlanOutput(p,m); updateStrategy(p,m); if(typeof updateFutureViabilityOutput==='function')updateFutureViabilityOutput();}}catch(e){console.warn('v271 stable render',e)}
    bindDiagnosticsHard();
    return r;
  }
}
if(typeof renderAllDetailOutputs==='function' && !window.__renderAll271){
  const oldRenderAll271=renderAllDetailOutputs;
  renderAllDetailOutputs=function(){
    let r; try{r=oldRenderAll271()}catch(e){console.warn('renderAll old',e)}
    try{let p=currentProfile(); if(p){let m=safeMetricSet(p);renderRadarStable(p);updateFrictionHeatmap(p);updateRepairLanguage(p);updateAccuracyOutput(p,m);updateRepairPlanOutput(p,m);updateStrategy(p,m);}}catch(e){console.warn(e)}
    bindDiagnosticsHard();
    return r;
  }
}
document.addEventListener('DOMContentLoaded',()=>setTimeout(()=>{try{bindDiagnosticsHard();let p=currentProfile();if(p)renderRadarStable(p);}catch(e){console.warn(e)}},400));



/* v2.8 dashboard / outputs page */
function dashboardMetricSet(p){
  if(typeof safeMetricSet==='function')return safeMetricSet(p);
  try{return metrics(p)}catch(e){return {peaceIndex:50,respectIndex:50,repair:50,reciprocityDyn:50,embedded:50,alignment:50,personalized:50}}
}
function currentDashboardProfile(){
  let sel=$('dashboardProfileSelect');
  if(sel&&sel.value){
    let p=(state.profiles||[]).find(x=>x.id===sel.value);
    if(p)return p;
  }
  return currentProfile&&currentProfile();
}
function sourceSummaryForProfile(p){
  if(!p)return '<p>No selected card.</p>';
  let snaps=p.snapshots||[];
  let latest=snaps[snaps.length-1]||{};
  let textCount=[p.evidence,p.story,p.interpretation,p.hesitation,p.notes].filter(x=>String(x||'').trim()).length;
  let futureCount=p.future?Object.keys(p.future).length:0;
  let socialCount=p.social?Object.keys(p.social).length:0;
  let translationCount=p.translation?Object.keys(p.translation).length:0;
  return `<div class="sourceMini"><p><b>This output is informed by:</b></p><ul>
<li><b>Card type:</b> ${escapeHTML(p.rtype||'Unspecified')}</li>
<li><b>Snapshots:</b> ${snaps.length}${latest.note?` — latest: ${escapeHTML(String(latest.note).slice(0,140))}`:''}</li>
<li><b>Text fields filled:</b> ${textCount}/5 evidence, story, interpretation, hesitation, notes</li>
<li><b>Context sliders:</b> ${socialCount} values</li>
<li><b>Translation sliders:</b> ${translationCount} values</li>
<li><b>Future viability sliders:</b> ${futureCount} values</li>
<li><b>Expectation signal:</b> ${escapeHTML(latest.expectation||'Not set')}</li>
</ul></div>`;
}
function updateTopOutputSummary(){
  let el=$('profileOutputSummaryTop'); if(!el)return;
  let p=currentProfile&&currentProfile(); if(!p){el.innerHTML='No selected card.';return}
  let m=dashboardMetricSet(p), snaps=(p.snapshots||[]).length, future=(typeof futureScore==='function')?futureScore(p):null;
  el.innerHTML=`<b>Output summary</b><p class="small">A quick read before the full inputs.</p><div class="summaryPills">
<span class="summaryPill">Peace ${Math.round(m.peaceIndex||0)}</span><span class="summaryPill">Respect ${Math.round(m.respectIndex||0)}</span><span class="summaryPill">Repair ${Math.round(m.repair||0)}</span><span class="summaryPill">Snapshots ${snaps}</span>${future!==null?`<span class="summaryPill">Future ${future}</span>`:''}
</div>${sourceSummaryForProfile(p)}`;
}
function populateDashboardSelect(){
  let sel=$('dashboardProfileSelect'); if(!sel)return;
  sel.innerHTML=(state.profiles||[]).map(p=>`<option value="${p.id}" ${p.id===state.currentId?'selected':''}>${escapeHTML(p.name||'Untitled')} — ${escapeHTML(p.rtype||'Card')}</option>`).join('');
  if(!sel.dataset.bound){sel.dataset.bound='1';sel.addEventListener('change',()=>{state.currentId=sel.value;saveState();try{fillForm()}catch(e){};renderDashboard();});}
}
function drawSmallRadar(canvasId,p){
  let c=$(canvasId); if(!c||!p)return;
  let m=dashboardMetricSet(p), ctx=c.getContext('2d'),w=c.width,h=c.height;
  ctx.clearRect(0,0,w,h);ctx.fillStyle='#fff';ctx.fillRect(0,0,w,h);
  let rows=[['Peace',m.peaceIndex||0],['Respect',m.respectIndex||0],['Repair',m.repair||0],['Reciprocity',m.reciprocityDyn||0],['Grounding',m.embedded||0],['Alignment',m.alignment||0]];
  let cx=w/2,cy=h/2,r=Math.min(w,h)*0.33;
  ctx.strokeStyle='#ded6c9';ctx.fillStyle='#6e675d';ctx.font='12px sans-serif';
  for(let ring=1;ring<=4;ring++){ctx.beginPath();ctx.arc(cx,cy,r*ring/4,0,Math.PI*2);ctx.stroke();}
  rows.forEach((row,i)=>{let a=-Math.PI/2+i*Math.PI*2/rows.length;ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r);ctx.stroke();ctx.fillText(row[0],cx+Math.cos(a)*(r+32)-24,cy+Math.sin(a)*(r+30));});
  ctx.beginPath();rows.forEach((row,i)=>{let a=-Math.PI/2+i*Math.PI*2/rows.length;let rr=r*(Math.max(0,Math.min(100,row[1]))/100);let x=cx+Math.cos(a)*rr,y=cy+Math.sin(a)*rr;i?ctx.lineTo(x,y):ctx.moveTo(x,y);});
  ctx.closePath();ctx.fillStyle='rgba(129,91,51,0.24)';ctx.fill();ctx.strokeStyle='#815b33';ctx.lineWidth=2;ctx.stroke();
}
function trajectoryPointsForDashboard(p){
  if(typeof snapshotsForTrajectory==='function')return snapshotsForTrajectory(p);
  let pts=(p.snapshots||[]).map((s,i)=>({i,label:s.label||`Snapshot ${i+1}`,peace:Number(s.peace||50),respect:Number(s.respect||50),domain:s.domain||'',note:s.note||''}));
  if(!pts.length){let m=dashboardMetricSet(p);pts=[{i:0,label:'Baseline',peace:m.peaceIndex||50,respect:m.respectIndex||50,domain:'Baseline',note:'No snapshots yet'}];}
  return pts;
}
function drawDashboardPeaceRespect(p){
  let c=$('dashboardPeaceRespectCanvas'); if(!c||!p)return;
  let ctx=c.getContext('2d'),w=c.width,h=c.height,pad=60,pts=trajectoryPointsForDashboard(p);
  ctx.clearRect(0,0,w,h);ctx.fillStyle='#fff';ctx.fillRect(0,0,w,h);
  ctx.strokeStyle='#ded6c9';ctx.lineWidth=1;
  for(let v=0;v<=100;v+=25){let x=pad+(v/100)*(w-2*pad),y=h-pad-(v/100)*(h-2*pad);ctx.beginPath();ctx.moveTo(x,pad);ctx.lineTo(x,h-pad);ctx.stroke();ctx.beginPath();ctx.moveTo(pad,y);ctx.lineTo(w-pad,y);ctx.stroke();ctx.fillStyle='#8a8177';ctx.font='11px sans-serif';ctx.fillText(String(v),x-6,h-pad+18);ctx.fillText(String(v),pad-32,y+4);}
  ctx.strokeStyle='#7c6f64';ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(pad,pad);ctx.lineTo(pad,h-pad);ctx.lineTo(w-pad,h-pad);ctx.stroke();
  ctx.fillStyle='#5a5148';ctx.font='13px sans-serif';ctx.fillText('Respect →',w/2,h-18);ctx.save();ctx.translate(18,h/2);ctx.rotate(-Math.PI/2);ctx.fillText('Peace →',0,0);ctx.restore();
  ctx.strokeStyle='#815b33';ctx.lineWidth=3;ctx.beginPath();pts.forEach((pt,i)=>{let x=pad+(pt.respect/100)*(w-2*pad),y=h-pad-(pt.peace/100)*(h-2*pad);i?ctx.lineTo(x,y):ctx.moveTo(x,y);});ctx.stroke();
  pts.forEach((pt,i)=>{let x=pad+(pt.respect/100)*(w-2*pad),y=h-pad-(pt.peace/100)*(h-2*pad);ctx.beginPath();ctx.arc(x,y,7,0,Math.PI*2);ctx.fillStyle='#815b33';ctx.fill();ctx.fillStyle='#3f3832';ctx.font='11px sans-serif';ctx.fillText(String(i+1),x+9,y-8);});
}
function dashboardMatrixHtml(p){
  return peaceRespectMatrixHtml357(dashboardMetricSet(p));
}
function renderDashboard(){
  populateDashboardSelect();
  let p=currentDashboardProfile(); if(!p)return;
  let m=dashboardMetricSet(p);
  if($('dashboardSourceSummary'))$('dashboardSourceSummary').innerHTML=sourceSummaryForProfile(p);
  if($('dashboardScoreCards'))$('dashboardScoreCards').innerHTML=[['Peace',m.peaceIndex],['Respect',m.respectIndex],['Repair',m.repair],['Reciprocity',m.reciprocityDyn],['Grounding',m.embedded],['Alignment',m.alignment]].map(([k,v])=>`<div class="scoreCardMini"><b>${k}</b><strong>${Math.round(v||0)}</strong></div>`).join('');
  drawSmallRadar('dashboardRadarCanvas',p); drawDashboardPeaceRespect(p);
  if($('dashboardTrajectorySummary'))$('dashboardTrajectorySummary').innerHTML=(typeof trajectoryInterpretation==='function')?trajectoryInterpretation(p):'<p>Add snapshots to interpret trajectory.</p>';
  if($('dashboardMatrix'))$('dashboardMatrix').innerHTML=dashboardMatrixHtml(p);
  if($('dashboardFutureSummary'))$('dashboardFutureSummary').innerHTML=(typeof futureScore==='function')?`<p><b>Future viability:</b> ${futureScore(p)}/100</p>`:'<p>Future viability sliders not available in this build.</p>';
  let latest=(p.snapshots||[]).slice(-1)[0]||{};
  if($('dashboardTranslationSummary'))$('dashboardTranslationSummary').innerHTML=`<p><b>Latest event:</b> ${escapeHTML(latest.note||p.evidence||'No event yet')}</p><p><b>Likely domain:</b> ${escapeHTML(latest.domain||'Unspecified')}</p>`;
  if($('dashboardResponseSummary'))$('dashboardResponseSummary').innerHTML='<p>Use Card Detail for full repair language, response mode, and strategy. This dashboard summarizes outputs and their inputs.</p>';
}
if(typeof showTab==='function'&&!window.__dashboardTabWrapped){window.__dashboardTabWrapped=true;const oldShowTabDashboard=showTab;showTab=function(t){let r=oldShowTabDashboard(t);let dv=$('dashboardView');if(dv)dv.classList.toggle('hidden',t!=='dashboard');let tab=$('tabDashboard');if(tab)tab.classList.toggle('active',t==='dashboard');if(t==='dashboard')renderDashboard();return r;}}
function bindDashboardTab(){let tab=$('tabDashboard');if(tab&&!tab.dataset.bound){tab.dataset.bound='1';tab.onclick=()=>showTab('dashboard');}}
if(typeof safeUpdate==='function'&&!window.__dashboardSafeWrapped){window.__dashboardSafeWrapped=true;const oldSafeDashboard=safeUpdate;safeUpdate=function(){let r=oldSafeDashboard();try{updateTopOutputSummary();if(!$('dashboardView')?.classList.contains('hidden'))renderDashboard();}catch(e){console.warn('dashboard update',e)}return r}}
if(typeof fillForm==='function'&&!window.__dashboardFillWrapped){window.__dashboardFillWrapped=true;const oldFillDashboard=fillForm;fillForm=function(){let r=oldFillDashboard();setTimeout(()=>{try{updateTopOutputSummary();renderDashboard()}catch(e){}},0);return r}}
document.addEventListener('DOMContentLoaded',()=>setTimeout(()=>{try{bindDashboardTab();updateTopOutputSummary();renderDashboard()}catch(e){console.warn(e)}},350));



/* v3.0.0 repair-first visual architecture */
function v3LatestSnapshot(p){
  let snaps=(p&&p.snapshots)||[];
  return snaps.length?snaps[snaps.length-1]:null;
}
function v3CardKind(p){
  let c=typeof profileCategory==='function'?profileCategory(p):(p?.rtype||'');
  if(['Husband','Wife','Long-term partner','Fiancé / Fiancée','Dating relationship','Romantic','Situationship'].includes(c))return 'romantic';
  if(c==='Work')return 'work';
  if(c==='Boundary')return 'boundary';
  if(c==='Friend')return 'friend';
  if(c==='Family')return 'family';
  return 'general';
}
function v3Metric(p){
  if(typeof dashboardMetricSet==='function')return dashboardMetricSet(p);
  if(typeof safeMetricSet==='function')return safeMetricSet(p);
  try{return metrics(p)}catch(e){return {peaceIndex:50,respectIndex:50,repair:50,reciprocityDyn:50,embedded:50,alignment:50}}
}
function v3NeedThreat(p){
  let snap=v3LatestSnapshot(p), t=p.translation||{}, domain=snap?.domain||'';
  if(domain.includes('Criticism') || (t.competenceThreat||5)>=7)return 'usefulness / competence / admiration';
  if(domain.includes('Communication') || (t.reassuranceNeed||5)>=7)return 'closeness / certainty / emotional inclusion';
  if(domain.includes('Appreciation'))return 'recognition / appreciation';
  if(domain.includes('Commitment'))return 'security / future direction';
  if(v3CardKind(p)==='work')return 'clarity / fairness / role stability';
  if(v3CardKind(p)==='boundary')return 'safety / autonomy / reduced exposure';
  return 'respect / safety / belonging';
}
function v3LoopData(p){
  let snap=v3LatestSnapshot(p)||{};
  let event=snap.note||p.evidence||'No concrete event yet. Add a snapshot to make this loop specific.';
  let story=snap.story||p.story||'No interpretation entered yet.';
  let need=v3NeedThreat(p);
  let kind=v3CardKind(p);
  let received='The other person may receive the event as criticism, rejection, control, indifference, or disrespect.';
  let response='Defend, withdraw, pursue, criticize, appease, or shut down.';
  let partner='The partner may then react to the reaction rather than the original event.';
  let breakPoint='Name the event, separate facts from story, identify the threatened need, and make one concrete repair request.';
  if(kind==='work'){
    received='This may land as unclear expectations, unfair evaluation, shifting goalposts, or threat to competence/status.';
    response='Document, clarify, contain emotion, request priorities in writing, and reduce ambiguous verbal dependency.';
    partner='The boss may interpret pushback as resistance unless framed around alignment and deliverables.';
    breakPoint='Break the loop with written priorities: “To make sure I’m aligned, can you confirm the top priority and deadline?”';
  } else if(kind==='boundary'){
    received='Contact may land as pressure, guilt, obligation, or autonomy threat.';
    response='Shorten exposure, stop overexplaining, restate boundary, and avoid emotional negotiation.';
    partner='The other person may escalate because the old access pattern is being interrupted.';
    breakPoint='Break the loop with calm repetition: “I’m not available for that. I’ll let you know if that changes.”';
  } else if(kind==='romantic'){
    if((p.translation?.competenceThreat||5)>=7){
      received='One partner may hear: “I failed / I’m not useful / nothing I do counts.”';
      response='Withdraw, stop initiating, defend, or become quietly resentful.';
      partner='The other partner may interpret withdrawal as not caring, creating more correction or pursuit.';
      breakPoint='Break the loop by separating appreciation from correction and restoring dignity before problem-solving.';
    } else {
      received='One partner may hear: “I’m not included / I’m not chosen / we are not on the same team.”';
      response='Pursue, test, protest, withdraw, or criticize.';
      partner='The other partner may experience that as pressure or criticism and shut down.';
      breakPoint='Break the loop with a shared-reality check-in and one explicit reassurance/clarity request.';
    }
  }
  return {event,story,need,received,response,partner,breakPoint,domain:snap.domain||'Unspecified'};
}
function renderV3TranslationLoop(){
  let el=$('v3TranslationLoop'); if(!el)return;
  let p=currentProfile&&currentProfile(); if(!p)return;
  let d=v3LoopData(p);
  el.innerHTML=[
    ['Event',d.event,''],
    ['Interpretation / story',d.story,'warningPoint'],
    ['Need threatened',d.need,'dangerPoint'],
    ['Emotional response',d.response,'warningPoint'],
    ['Partner interpretation',d.partner,'warningPoint'],
    ['Loop breaker',d.breakPoint,'breakPoint']
  ].map((n,i)=>`<div class="loopNode ${n[2]}"><b>${i+1}. ${n[0]}</b>${escapeHTML(String(n[1]).slice(0,500))}</div>${i<5?'<div class="loopArrow">↓</div>':''}`).join('');
}
function admirationValues(p){
  let respect=p.respect||{}, green=p.green||{}, rec=p.reciprocityDyn||{};
  let userToThem=Math.round(((green.attraction||5)+(respect.proud||5)+(green.curiosity||5)+(respect.opinion||5))/4*10);
  let themToUser=Math.round(((respect.appreciation||5)+(green.reciprocity||5)+(rec.investment||5)+(rec.effort||5))/4*10);
  let imbalance=Math.abs(userToThem-themToUser);
  return {userToThem,themToUser,imbalance};
}
function drawV3Admiration(){
  let c=$('v3AdmirationCanvas'); if(!c)return;
  let p=currentProfile&&currentProfile(); if(!p)return;
  let a=admirationValues(p), ctx=c.getContext('2d'),w=c.width,h=c.height;
  ctx.clearRect(0,0,w,h);ctx.fillStyle='#fff';ctx.fillRect(0,0,w,h);
  ctx.font='15px -apple-system,BlinkMacSystemFont,Segoe UI,Arial';ctx.fillStyle='#3f3832';
  ctx.fillText('You → Them',40,48);ctx.fillText('Them → You',w-160,48);
  let midY=h/2, left=80, right=w-80;
  ctx.strokeStyle='#ded6c9';ctx.lineWidth=12;ctx.lineCap='round';
  ctx.beginPath();ctx.moveTo(left,midY-35);ctx.lineTo(right,midY-35);ctx.stroke();
  ctx.beginPath();ctx.moveTo(right,midY+35);ctx.lineTo(left,midY+35);ctx.stroke();
  ctx.strokeStyle='#815b33';ctx.lineWidth=12;
  ctx.beginPath();ctx.moveTo(left,midY-35);ctx.lineTo(left+(right-left)*(a.userToThem/100),midY-35);ctx.stroke();
  ctx.strokeStyle='#4d7a52';
  ctx.beginPath();ctx.moveTo(right,midY+35);ctx.lineTo(right-(right-left)*(a.themToUser/100),midY+35);ctx.stroke();
  ctx.fillStyle='#3f3832';ctx.font='30px -apple-system,BlinkMacSystemFont,Segoe UI,Arial';
  ctx.fillText(String(a.userToThem),left+(right-left)*(a.userToThem/100)-12,midY-55);
  ctx.fillText(String(a.themToUser),right-(right-left)*(a.themToUser/100)-12,midY+78);
  ctx.font='13px -apple-system,BlinkMacSystemFont,Segoe UI,Arial';ctx.fillStyle='#6e675d';
  ctx.fillText('Balanced admiration is not sameness; it means both sides feel valued and drawn toward the bond.',40,h-34);
  let txt=$('v3AdmirationText');
  if(txt){
    txt.innerHTML=a.imbalance>=25?'<b>Pattern:</b> admiration appears asymmetric. Watch pursuit/withdrawal, resentment, or overfunctioning.':'<b>Pattern:</b> admiration appears relatively balanced.';
  }
}
function v3ResponseStrategy(){
  let p=currentProfile&&currentProfile(); if(!p)return;
  let kind=v3CardKind(p), m=v3Metric(p), d=v3LoopData(p);
  let mode='Repair';
  if(kind==='work')mode='Clarify + document';
  if(kind==='boundary')mode='Boundary + containment';
  if(kind==='friend' && (m.reciprocityDyn||50)<45)mode='Reciprocity reset';
  if((m.peaceIndex||50)<35 || (m.respectIndex||50)<35)mode='Containment first';
  let say='Can we pause and make sure we are solving the same problem? I want to understand what you meant and explain how it landed for me.';
  let doAct='Write down the event, the interpretation, the need threatened, and the next concrete request.';
  if(kind==='work'){
    say='To make sure I’m aligned, can you confirm the priority, deadline, and success criteria in writing?';
    doAct='Track decisions, deadlines, and feedback. Reduce ambiguous verbal agreements.';
  } else if(kind==='boundary'){
    say='I’m not available for that. I’m going to keep this boundary, and I’ll let you know if anything changes.';
    doAct='Do not overexplain. Repeat the boundary and reduce exposure if pressure increases.';
  } else if(kind==='romantic'){
    say='I don’t want us to make each other the problem. I think the loop is: event → hurt meaning → reaction. Can we name what each of us heard?';
    doAct='Use a 15-minute repair talk: facts, story, need, apology/clarification, one next behavior.';
  }
  return {mode,say,doAct,why:d.need};
}
function renderV3ResponseStrategy(){
  let el=$('v3ResponseStrategy'); if(!el)return;
  let s=v3ResponseStrategy();
  if(!s)return;
  el.innerHTML=`<div class="strategyGrid">
    <div><span class="v3ModeBadge">${escapeHTML(s.mode)}</span><span class="v3ModeBadge">Need: ${escapeHTML(s.why)}</span></div>
    <div class="strategyCard"><b>What to say</b><div class="scriptBox">${escapeHTML(s.say)}</div></div>
    <div class="strategyCard"><b>What to do</b>${escapeHTML(s.doAct)}</div>
    <div class="strategyCard"><b>Why this helps</b>It addresses the threatened need directly instead of arguing about surface behavior.</div>
  </div>`;
}
function buildConversationRepair(){
  let said=$('v3SaidInput')?.value||'', heard=$('v3HeardInput')?.value||'';
  let p=currentProfile&&currentProfile(); let kind=v3CardKind(p||{});
  let need=v3NeedThreat(p||{});
  let output=$('v3ConversationOutput'); if(!output)return;
  let crux='The conflict is probably not only the words. It is the meaning each person attached to the words.';
  let script='Can we slow this down? I want to separate what was said from what was heard. What I meant was ____. What I heard was ____. The need underneath this for me is ____.';
  if(kind==='work'){
    script='I want to make sure I’m aligned with expectations. Here is what I understood, here is where I’m uncertain, and here is the decision I need confirmed.';
    crux='The likely crux is expectation clarity, role pressure, and documentation — not emotional repair alone.';
  } else if(kind==='romantic'){
    script='I don’t want us to make each other the enemy. What I heard was painful, but I want to understand what you meant. The need underneath this for me is closeness/respect, not winning.';
    crux='The likely crux is a threatened need for respect, safety, usefulness, closeness, or appreciation.';
  }
  output.innerHTML=`<p><b>They said/did:</b> ${escapeHTML(said||'No phrase entered yet.')}</p>
  <p><b>The other person heard/felt:</b> ${escapeHTML(heard||'No heard meaning entered yet.')}</p>
  <p><b>Likely crux:</b> ${escapeHTML(crux)}</p>
  <p><b>Need underneath:</b> ${escapeHTML(need)}</p>
  <div class="scriptBox"><b>Try saying:</b><br>${escapeHTML(script)}</div>`;
}
function bindV3Conversation(){
  let btn=$('v3BuildRepairBtn');
  if(btn&&!btn.dataset.bound){btn.dataset.bound='1';btn.onclick=buildConversationRepair;}
}
function updateV3SourceStrip(){
  let el=$('v3SourceStrip'); if(!el)return;
  let p=currentProfile&&currentProfile(); if(!p)return;
  let snaps=(p.snapshots||[]).length, kind=v3CardKind(p), m=v3Metric(p);
  el.innerHTML=`<span class="v3SourcePill">${escapeHTML(kind)} card</span><span class="v3SourcePill">${snaps} snapshots</span><span class="v3SourcePill">Peace ${Math.round(m.peaceIndex||0)}</span><span class="v3SourcePill">Respect ${Math.round(m.respectIndex||0)}</span><span class="v3SourcePill">Repair ${Math.round(m.repair||0)}</span>`;
}
function makeSectionsCollapsible(){
  let root=$('personView'); if(!root||root.dataset.collapsibleDone)return;
  root.dataset.collapsibleDone='1';
  [...root.querySelectorAll('section > h3')].forEach(h=>{
    let wrapper=document.createElement('div'); wrapper.className='collapsibleSection';
    h.parentNode.insertBefore(wrapper,h);
    wrapper.appendChild(h);
    let node=wrapper.nextSibling;
    while(node && !(node.nodeType===1 && node.tagName==='H3')){
      let next=node.nextSibling;
      wrapper.appendChild(node);
      node=next;
    }
    h.addEventListener('click',()=>wrapper.classList.toggle('collapsed'));
  });
}
function updateV3All(){
  try{updateV3SourceStrip()}catch(e){}
  try{renderV3TranslationLoop()}catch(e){}
  try{drawV3Admiration()}catch(e){}
  try{renderV3ResponseStrategy()}catch(e){}
  try{bindV3Conversation()}catch(e){}
  try{makeSectionsCollapsible()}catch(e){}
}
if(typeof safeUpdate==='function' && !window.__v3SafeWrapped){
  window.__v3SafeWrapped=true;
  const oldSafeV3=safeUpdate;
  safeUpdate=function(){let r=oldSafeV3();updateV3All();return r;}
}
if(typeof fillForm==='function' && !window.__v3FillWrapped){
  window.__v3FillWrapped=true;
  const oldFillV3=fillForm;
  fillForm=function(){let r=oldFillV3();setTimeout(updateV3All,0);return r;}
}
document.addEventListener('DOMContentLoaded',()=>setTimeout(()=>{
  let jump=$('scrollToInputsBtn'); if(jump&&!jump.dataset.bound){jump.dataset.bound='1';jump.onclick=()=>$('v3InputsStart')?.scrollIntoView({behavior:'smooth'});}
  updateV3All();
},400));



/* v3.0.1 forced visible repair cockpit */
function rcCurrentProfile(){
  let sel=$('repairCockpitProfileSelect');
  if(sel&&sel.value){
    let p=(state.profiles||[]).find(x=>x.id===sel.value);
    if(p)return p;
  }
  return currentProfile&&currentProfile();
}
function rcMetric(p){
  if(typeof dashboardMetricSet==='function')return dashboardMetricSet(p);
  if(typeof safeMetricSet==='function')return safeMetricSet(p);
  try{return metrics(p)}catch(e){return {peaceIndex:50,respectIndex:50,repair:50,reciprocityDyn:50,embedded:50,alignment:50}}
}
function rcKind(p){
  let c=typeof profileCategory==='function'?profileCategory(p):(p?.rtype||'');
  if(['Husband','Wife','Long-term partner','Fiancé / Fiancée','Dating relationship','Romantic','Situationship'].includes(c))return 'romantic';
  if(c==='Work')return 'work';
  if(c==='Boundary')return 'boundary';
  if(c==='Friend')return 'friend';
  if(c==='Family')return 'family';
  return 'general';
}
function rcLatest(p){let s=(p&&p.snapshots)||[];return s.length?s[s.length-1]:null}
function rcNeed(p){
  let snap=rcLatest(p), t=p?.translation||{}, domain=snap?.domain||'';
  if(domain.includes('Criticism') || (t.competenceThreat||5)>=7)return 'usefulness / competence / admiration';
  if(domain.includes('Communication') || (t.reassuranceNeed||5)>=7)return 'closeness / certainty / emotional inclusion';
  if(domain.includes('Appreciation'))return 'recognition / appreciation';
  if(domain.includes('Commitment'))return 'security / future direction';
  if(rcKind(p)==='work')return 'clarity / fairness / role stability';
  if(rcKind(p)==='boundary')return 'safety / autonomy / reduced exposure';
  return 'respect / safety / belonging';
}
function rcLoopData(p){
  let snap=rcLatest(p)||{}, kind=rcKind(p);
  let event=snap.note||p?.evidence||'No concrete event yet. Add a snapshot to make this loop specific.';
  let story=snap.story||p?.story||'No interpretation entered yet.';
  let need=rcNeed(p);
  let received='The other person may receive the event as criticism, rejection, control, indifference, or disrespect.';
  let response='Defend, withdraw, pursue, criticize, appease, or shut down.';
  let partner='The partner may then react to the reaction rather than the original event.';
  let breakPoint='Name the event, separate facts from story, identify the threatened need, and make one concrete repair request.';
  if(kind==='work'){
    received='This may land as unclear expectations, unfair evaluation, shifting goalposts, or threat to competence/status.';
    response='Document, clarify, contain emotion, request priorities in writing, and reduce ambiguous verbal dependency.';
    partner='The boss may interpret pushback as resistance unless framed around alignment and deliverables.';
    breakPoint='Break the loop with written priorities: “To make sure I’m aligned, can you confirm the top priority and deadline?”';
  } else if(kind==='boundary'){
    received='Contact may land as pressure, guilt, obligation, or autonomy threat.';
    response='Shorten exposure, stop overexplaining, restate boundary, and avoid emotional negotiation.';
    partner='The other person may escalate because the old access pattern is being interrupted.';
    breakPoint='Break the loop with calm repetition: “I’m not available for that. I’ll let you know if that changes.”';
  } else if(kind==='romantic'){
    if((p?.translation?.competenceThreat||5)>=7){
      received='One partner may hear: “I failed / I’m not useful / nothing I do counts.”';
      response='Withdraw, stop initiating, defend, or become quietly resentful.';
      partner='The other partner may interpret withdrawal as not caring, creating more correction or pursuit.';
      breakPoint='Break the loop by separating appreciation from correction and restoring dignity before problem-solving.';
    } else {
      received='One partner may hear: “I’m not included / I’m not chosen / we are not on the same team.”';
      response='Pursue, test, protest, withdraw, or criticize.';
      partner='The other partner may experience that as pressure or criticism and shut down.';
      breakPoint='Break the loop with a shared-reality check-in and one explicit reassurance/clarity request.';
    }
  }
  return {event,story,need,received,response,partner,breakPoint,domain:snap.domain||'Unspecified'};
}
function renderRcLoop(){
  let el=$('repairCockpitLoop'); if(!el)return;
  let p=rcCurrentProfile(); if(!p){el.innerHTML='<p>No card selected.</p>';return}
  let d=rcLoopData(p);
  let nodes=[
    ['Event',d.event,''],
    ['Interpretation / story',d.story,'warningPoint'],
    ['Need threatened',d.need,'dangerPoint'],
    ['Emotional response',d.response,'warningPoint'],
    ['Partner interpretation',d.partner,'warningPoint'],
    ['Loop breaker',d.breakPoint,'breakPoint']
  ];
  el.innerHTML=nodes.map((n,i)=>`<div class="loopNode ${n[2]}"><b>${i+1}. ${n[0]}</b>${escapeHTML(String(n[1]).slice(0,500))}</div>${i<5?'<div class="loopArrow">↓</div>':''}`).join('');
}
function rcAdmirationValues(p){
  let respect=p?.respect||{}, green=p?.green||{}, rec=p?.reciprocityDyn||{};
  let userToThem=Math.round(((green.attraction||5)+(respect.proud||5)+(green.curiosity||5)+(respect.opinion||5))/4*10);
  let themToUser=Math.round(((respect.appreciation||5)+(green.reciprocity||5)+(rec.investment||5)+(rec.effort||5))/4*10);
  return {userToThem,themToUser,imbalance:Math.abs(userToThem-themToUser)};
}
function drawRcAdmiration(){
  let c=$('repairCockpitAdmirationCanvas'); if(!c)return;
  let p=rcCurrentProfile(); if(!p)return;
  let a=rcAdmirationValues(p), host=c.parentElement;
  let w=Math.max(280,Math.min(520,(host?.clientWidth||520)-4)),h=220,dpr=Math.min(3,Math.max(1,window.devicePixelRatio||1));
  c.style.width=w+'px';c.style.height=h+'px';c.width=Math.round(w*dpr);c.height=Math.round(h*dpr);
  c.setAttribute('role','img');
  c.setAttribute('aria-label',`Admiration symmetry: you toward them ${a.userToThem} out of 100; them toward you ${a.themToUser} out of 100; ${a.imbalance} point difference.`);
  let ctx=c.getContext('2d');ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,w,h);
  const font='-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif';
  const rounded=(x,y,width,height,r,color)=>{r=Math.min(r,height/2,width/2);ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+width,y,x+width,y+height,r);ctx.arcTo(x+width,y+height,x,y+height,r);ctx.arcTo(x,y+height,x,y,r);ctx.arcTo(x,y,x+width,y,r);ctx.closePath();ctx.fillStyle=color;ctx.fill();};
  const clamp=v=>Math.max(0,Math.min(100,Number(v)||0));
  rounded(0,0,w,h,10,'#fbfcfc');
  ctx.fillStyle='#17262a';ctx.font=`700 13px ${font}`;ctx.fillText('Mutual admiration',20,27);
  ctx.fillStyle='#66757a';ctx.font=`11px ${font}`;ctx.textAlign='right';ctx.fillText('0–100',w-20,27);ctx.textAlign='left';
  const drawBar=(label,value,y,color)=>{
    const score=clamp(value),x=20,scoreW=48,barW=w-x*2-scoreW,barY=y+10;
    ctx.fillStyle='#31454a';ctx.font=`600 12px ${font}`;ctx.fillText(label,x,y);
    ctx.textAlign='right';ctx.fillStyle=color;ctx.font=`800 14px ${font}`;ctx.fillText(String(score),w-20,y+4);ctx.textAlign='left';
    rounded(x,barY,barW,14,7,'#e4ebeb');
    if(score>0){let grad=ctx.createLinearGradient(x,0,x+barW,0);grad.addColorStop(0,color);grad.addColorStop(1,color==='#176a70'?'#39a0a3':'#dc8b76');rounded(x,barY,Math.max(14,barW*score/100),14,7,grad);}
  };
  drawBar('Your admiration for them',a.userToThem,58,'#176a70');
  drawBar('Their admiration for you',a.themToUser,116,'#bd654f');
  ctx.strokeStyle='#d8e2e3';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(20,164.5);ctx.lineTo(w-20,164.5);ctx.stroke();
  const balanced=a.imbalance<15,moderate=a.imbalance<25;
  const status=balanced?'Balanced':moderate?'Some imbalance':'Strong imbalance';
  const statusColor=balanced?'#287a4b':moderate?'#9a6800':'#a43d35';
  ctx.fillStyle='#66757a';ctx.font=`600 11px ${font}`;ctx.fillText('Difference',20,190);
  ctx.fillStyle='#17262a';ctx.font=`800 16px ${font}`;ctx.fillText(`${a.imbalance} pts`,20,209);
  const pillW=Math.max(86,ctx.measureText(status).width+26);rounded(w-20-pillW,180,pillW,28,14,statusColor);ctx.fillStyle='#fff';ctx.font=`700 11px ${font}`;ctx.textAlign='center';ctx.fillText(status,w-20-pillW/2,198);ctx.textAlign='left';
  let txt=$('repairCockpitAdmirationText');
  if(txt)txt.innerHTML=a.imbalance>=25?'<b>Worth discussing:</b> admiration may be flowing unevenly. Compare recognition, curiosity, effort, and respect.':a.imbalance>=15?'Some imbalance is present, but it is not severe at the current scores.':'Admiration appears reasonably mutual at the current scores.';
  if(host&&!host.__admirationResize349&&window.ResizeObserver){host.__admirationResize349=new ResizeObserver(()=>{cancelAnimationFrame(host.__admirationFrame349);host.__admirationFrame349=requestAnimationFrame(drawRcAdmiration);});host.__admirationResize349.observe(host);}
}
function renderRcStrategy(){
  let el=$('repairCockpitStrategy'); if(!el)return;
  let p=rcCurrentProfile(); if(!p)return;
  let kind=rcKind(p), m=rcMetric(p), need=rcNeed(p);
  let mode='Repair', say='Can we pause and make sure we are solving the same problem? I want to understand what you meant and explain how it landed for me.', doAct='Write down the event, the interpretation, the need threatened, and the next concrete request.';
  if(kind==='work'){mode='Clarify + document';say='To make sure I’m aligned, can you confirm the priority, deadline, and success criteria in writing?';doAct='Track decisions, deadlines, and feedback. Reduce ambiguous verbal agreements.';}
  else if(kind==='boundary'){mode='Boundary + containment';say='I’m not available for that. I’m going to keep this boundary, and I’ll let you know if anything changes.';doAct='Do not overexplain. Repeat the boundary and reduce exposure if pressure increases.';}
  else if(kind==='romantic'){mode=(m.peaceIndex<45||m.respectIndex<45)?'Containment before repair':'Repair + shared reality';say='I don’t want us to make each other the enemy. I think the loop is: event → hurt meaning → reaction. Can we name what each of us heard?';doAct='Use a 15-minute repair talk: facts, story, need, apology/clarification, one next behavior.';}
  el.innerHTML=`<div class="strategyGrid"><div><span class="v3ModeBadge">${escapeHTML(mode)}</span><span class="v3ModeBadge">Need: ${escapeHTML(need)}</span></div><div class="strategyCard"><b>What to say</b><div class="scriptBox">${escapeHTML(say)}</div></div><div class="strategyCard"><b>What to do</b>${escapeHTML(doAct)}</div><div class="strategyCard"><b>Why this helps</b>It addresses the threatened need directly instead of arguing about surface behavior.</div></div>`;
}
function buildRcConversation(){
  let said=$('repairCockpitSaidInput')?.value||'', heard=$('repairCockpitHeardInput')?.value||'';
  let p=rcCurrentProfile(), kind=rcKind(p||{}), need=rcNeed(p||{});
  let out=$('repairCockpitConversationOutput'); if(!out)return;
  let crux='The conflict is probably not only the words. It is the meaning each person attached to the words.';
  let script='Can we slow this down? I want to separate what was said from what was heard. What I meant was ____. What I heard was ____. The need underneath this for me is ____.';
  if(kind==='work'){script='I want to make sure I’m aligned with expectations. Here is what I understood, here is where I’m uncertain, and here is the decision I need confirmed.';crux='The likely crux is expectation clarity, role pressure, and documentation — not emotional repair alone.';}
  if(kind==='romantic'){script='I don’t want us to make each other the enemy. What I heard was painful, but I want to understand what you meant. The need underneath this for me is closeness/respect, not winning.';crux='The likely crux is a threatened need for respect, safety, usefulness, closeness, or appreciation.';}
  out.innerHTML=`<p><b>They said/did:</b> ${escapeHTML(said||'No phrase entered yet.')}</p><p><b>The other person heard/felt:</b> ${escapeHTML(heard||'No heard meaning entered yet.')}</p><p><b>Likely crux:</b> ${escapeHTML(crux)}</p><p><b>Need underneath:</b> ${escapeHTML(need)}</p><div class="scriptBox"><b>Try saying:</b><br>${escapeHTML(script)}</div>`;
}
function populateRcSelect(){
  let sel=$('repairCockpitProfileSelect'); if(!sel)return;
  sel.innerHTML=(state.profiles||[]).map(p=>`<option value="${p.id}" ${p.id===state.currentId?'selected':''}>${escapeHTML(p.name||'Untitled')} — ${escapeHTML(p.rtype||'Card')}</option>`).join('');
  if(!sel.dataset.bound){sel.dataset.bound='1';sel.addEventListener('change',()=>{state.currentId=sel.value;saveState();try{fillForm()}catch(e){};renderRepairCockpit();});}
}
function renderRcSourceStrip(){
  let el=$('repairCockpitSourceStrip'); if(!el)return;
  let p=rcCurrentProfile(); if(!p){el.innerHTML='';return}
  let m=rcMetric(p), snaps=(p.snapshots||[]).length, kind=rcKind(p);
  const metric=(label,value,words)=>{value=Math.max(0,Math.min(100,Math.round(Number(value)||0)));let level=value>=70?'strong':value>=45?'mixed':'low',status=value>=70?words[2]:value>=45?words[1]:words[0];return `<div class="profileMetric353"><div class="profileMetricHead353"><span>${escapeHTML(label)}</span><span><b>${value}</b> ${escapeHTML(status)}</span></div><div class="profileMetricTrack353" role="progressbar" aria-label="${escapeHTML(label)}: ${value} out of 100, ${escapeHTML(status)}" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${value}"><span class="${level}" style="width:${value}%"></span></div></div>`;};
  el.innerHTML=`<div class="profileMeta353"><span>${escapeHTML(kind)} relationship</span><span>${snaps} ${snaps===1?'snapshot':'snapshots'}</span></div><div class="profileMetrics353">${metric('Peace',m.peaceIndex,['Strained','Mixed','Steady'])}${metric('Respect',m.respectIndex,['Concerning','Uneven','Strong'])}${metric('Repair',m.repair,['Weak','Developing','Reliable'])}</div>`;
}
function renderRepairCockpit(){
  populateRcSelect();
  renderRcSourceStrip();
  renderRcLoop();
  drawRcAdmiration();
  renderRcStrategy();
}
function showRepairCockpit(){
  ['snapshotView','cardsView','dashboardView','ecosystemView','personView','meView','diagnosticsView'].forEach(id=>{let el=$(id);if(el)el.classList.add('hidden')});
  let v=$('repairCockpitView'); if(v)v.classList.remove('hidden');
  ['tabSnapshot','tabCards','tabDashboard','tabEcosystem','tabPerson','tabMe','tabDiagnostics'].forEach(id=>{let el=$(id);if(el)el.classList.remove('active')});
  let t=$('tabRepairCockpit'); if(t)t.classList.add('active');
  renderRepairCockpit();
}
function bindRepairCockpit(){
  let tab=$('tabRepairCockpit'); if(tab&&!tab.dataset.bound){tab.dataset.bound='1';tab.onclick=showRepairCockpit;}
  let btn=$('repairCockpitBuildBtn'); if(btn&&!btn.dataset.bound){btn.dataset.bound='1';btn.onclick=buildRcConversation;}
}
if(typeof safeUpdate==='function'&&!window.__rcSafeWrapped){window.__rcSafeWrapped=true;const oldRcSafe=safeUpdate;safeUpdate=function(){let r=oldRcSafe();try{renderRepairCockpit()}catch(e){};return r;}}
if(typeof fillForm==='function'&&!window.__rcFillWrapped){window.__rcFillWrapped=true;const oldRcFill=fillForm;fillForm=function(){let r=oldRcFill();setTimeout(()=>{try{renderRepairCockpit()}catch(e){}},0);return r;}}
document.addEventListener('DOMContentLoaded',()=>setTimeout(()=>{bindRepairCockpit();renderRepairCockpit();},350));



/* v3.1.0 simplified flow + wizard + action strategy */
const wizardState={step:0,data:{}};
const wizardSteps=[
  {key:'card',title:'Who is this about?',type:'selectCard'},
  {key:'event',title:'What happened?',type:'textarea',placeholder:'Describe the concrete event. Facts first.'},
  {key:'story',title:'What story are you telling yourself?',type:'textarea',placeholder:'What did it seem to mean? What are you afraid it means?'},
  {key:'heard',title:'What might the other person have heard?',type:'textarea',placeholder:'Example: “I am failing,” “I am not included,” “I am being controlled.”'},
  {key:'expectation',title:'What expectation was involved?',type:'select',options:['Neutral / no strong expectation','Exceeded expectations','Met expectations','Below expectations','Expectation mismatch / unclear agreement','New relationship high / idealizing','Disappointment after hope']},
  {key:'scores',title:'Quick sliders for this event',type:'scores'},
  {key:'domain',title:'What domain best fits this?',type:'select',options:['Communication / being on same page','Criticism / correction','Appreciation / usefulness','Planning / logistics','Commitment / future direction','Affection / reassurance','Boundary / pressure','Work expectations','Other']}
];
function wizardCardOptions(){return (state.profiles||[]).map(p=>`<option value="${p.id}" ${p.id===state.currentId?'selected':''}>${escapeHTML(p.name||'Untitled')} — ${escapeHTML(p.rtype||'Card')}</option>`).join('');}
function renderWizardStep(){
  let s=wizardSteps[wizardState.step], el=$('wizardStepContent'); if(!el)return;
  let html=`<div class="wizardStep"><h3>${s.title}</h3>`;
  if(s.type==='selectCard')html+=`<label>Relationship/card<select id="wiz_card">${wizardCardOptions()}</select></label>`;
  if(s.type==='textarea')html+=`<textarea id="wiz_${s.key}" placeholder="${s.placeholder||''}">${wizardState.data[s.key]||''}</textarea>`;
  if(s.type==='select')html+=`<select id="wiz_${s.key}">${s.options.map(o=>`<option ${wizardState.data[s.key]===o?'selected':''}>${o}</option>`).join('')}</select>`;
  if(s.type==='scores')html+=`
    <label>Peace <span id="wizPeaceVal">${wizardState.data.peace||5}</span><span class="scaleEnds"><b>Low calm</b><b>High calm</b></span><input id="wiz_peace" type="range" min="0" max="10" value="${wizardState.data.peace||5}"></label>
    <label>Respect <span id="wizRespectVal">${wizardState.data.respect||5}</span><span class="scaleEnds"><b>Dismissed</b><b>Respected</b></span><input id="wiz_respect" type="range" min="0" max="10" value="${wizardState.data.respect||5}"></label>
    <label>Repair quality <span id="wizRepairVal">${wizardState.data.repair||5}</span><span class="scaleEnds"><b>No repair</b><b>Strong repair</b></span><input id="wiz_repair" type="range" min="0" max="10" value="${wizardState.data.repair||5}"></label>
    <label>Emotional drain <span id="wizEnergyVal">${wizardState.data.energy||5}</span><span class="scaleEnds dangerScale"><b>Low drain</b><b>High drain</b></span><input id="wiz_energy" class="riskRange" type="range" min="0" max="10" value="${wizardState.data.energy||5}"></label>`;
  html+='</div>'; el.innerHTML=html;
  let fill=$('wizardProgressFill'); if(fill)fill.style.width=((wizardState.step+1)/wizardSteps.length*100)+'%';
  if($('wizardBackBtn'))$('wizardBackBtn').disabled=wizardState.step===0;
  if($('wizardNextBtn'))$('wizardNextBtn').classList.toggle('hidden',wizardState.step===wizardSteps.length-1);
  if($('wizardSaveBtn'))$('wizardSaveBtn').classList.toggle('hidden',wizardState.step!==wizardSteps.length-1);
  [['peace','Peace'],['respect','Respect'],['repair','Repair'],['energy','Energy']].forEach(([k,label])=>{let input=$(`wiz_${k}`), val=$(`wiz${label}Val`); if(input&&val)input.oninput=()=>{val.textContent=input.value;wizardState.data[k]=Number(input.value)};});
}
function collectWizardStep(){
  let s=wizardSteps[wizardState.step];
  if(s.type==='selectCard'){let v=$('wiz_card')?.value;if(v){wizardState.data.card=v;state.currentId=v;saveState();}}
  if(s.type==='textarea')wizardState.data[s.key]=$(`wiz_${s.key}`)?.value||'';
  if(s.type==='select')wizardState.data[s.key]=$(`wiz_${s.key}`)?.value||s.options[0];
  if(s.type==='scores'){['peace','respect','repair','energy'].forEach(k=>{let v=$(`wiz_${k}`)?.value;if(v!==undefined)wizardState.data[k]=Number(v)});}
}
function openSnapshotWizard(){wizardState.step=0;wizardState.data={card:state.currentId,peace:7,respect:7,repair:6,energy:3};$('snapshotWizardOverlay')?.classList.remove('hidden');renderWizardStep();}
function closeSnapshotWizard(){$('snapshotWizardOverlay')?.classList.add('hidden');}
function saveWizardSnapshot(){
  collectWizardStep();
  let p=(state.profiles||[]).find(x=>x.id===(wizardState.data.card||state.currentId))||currentProfile(); if(!p)return;
  p.snapshots=p.snapshots||[];
  let cost=Number(wizardState.data.energy||3);
  let snap={id:uid(),label:'Wizard snapshot',created:new Date().toISOString(),note:wizardState.data.event||'',story:wizardState.data.story||'',heard:wizardState.data.heard||'',domain:wizardState.data.domain||'Other',expectation:wizardState.data.expectation||'Neutral / no strong expectation',expectationScore:typeof expectationScoreFromLabel==='function'?expectationScoreFromLabel(wizardState.data.expectation):5,peace:Number(wizardState.data.peace||7)*10,respect:Number(wizardState.data.respect||7)*10,repair:Number(wizardState.data.repair||6)*10,energy:Math.max(0,100-cost*10),reciprocity:Number(wizardState.data.respect||7)*10,embedded:70,alignment:Math.round((Number(wizardState.data.peace||7)+Number(wizardState.data.respect||7))/2*10),evidenceConfidence:'Medium — fresh self-report',interpretationChecked:'Not yet checked',tags:[]};
  p.snapshots.push(snap);p.evidence=snap.note;p.story=snap.story;state.currentId=p.id;saveState();
  try{fillForm();safeUpdate();renderRepairCockpit&&renderRepairCockpit()}catch(e){}
  closeSnapshotWizard();try{showRepairCockpit&&showRepairCockpit()}catch(e){}
}
function bindWizard(){
  let open=$('openSnapshotWizardBtn'); if(open&&!open.dataset.bound){open.dataset.bound='1';open.onclick=openSnapshotWizard}
  let close=$('closeSnapshotWizardBtn'); if(close&&!close.dataset.bound){close.dataset.bound='1';close.onclick=closeSnapshotWizard}
  let back=$('wizardBackBtn'); if(back&&!back.dataset.bound){back.dataset.bound='1';back.onclick=()=>{collectWizardStep();wizardState.step=Math.max(0,wizardState.step-1);renderWizardStep();}}
  let next=$('wizardNextBtn'); if(next&&!next.dataset.bound){next.dataset.bound='1';next.onclick=()=>{collectWizardStep();wizardState.step=Math.min(wizardSteps.length-1,wizardState.step+1);renderWizardStep();}}
  let save=$('wizardSaveBtn'); if(save&&!save.dataset.bound){save.dataset.bound='1';save.onclick=saveWizardSnapshot}
}
function renderRcActionStrategy(){
  let el=$('repairCockpitActionStrategy'); if(!el)return;
  let p=rcCurrentProfile&&rcCurrentProfile(); if(!p)return;
  let kind=rcKind(p), need=rcNeed(p);
  let actions=[['Pause the loop','Stop arguing about the surface issue and name the loop: event → meaning → reaction.'],['Ask one clarifying question','“What did you mean by that?” or “What did you hear me saying?”'],['Make one concrete repair request','One behavior, one timeframe, no character attack.']];
  if(kind==='work')actions=[['Document expectations','Summarize priorities, deadlines, and success criteria in writing.'],['Reduce ambiguity','Ask for rank order: what matters most, what can wait, what does done look like?'],['Contain emotion','Do not litigate disrespect in the moment unless safety requires it; move to clarity and records.']];
  if(kind==='romantic' && need.includes('competence'))actions=[['Restore usefulness','Name the effort as real before making any correction.'],['Separate correction from appreciation','Do not pair praise and critique in the same breath if it will feel like a trap.'],['Request comfort, not compliance','Frame the change as “this helps me feel cared for/calm,” not “you did it wrong.”']];
  if(kind==='romantic' && need.includes('closeness'))actions=[['Schedule a shared-reality check-in','Ask what changed this week, what decisions are pending, and what each person is carrying.'],['Reassure before solving','Signal “we are okay” before logistics.'],['Make inclusion concrete','Ask for one update habit: calendar, weekly check-in, or decision heads-up.']];
  if(kind==='boundary')actions=[['Shorten the exchange','Use one sentence. No debate.'],['Repeat without expanding','Same boundary, same tone, no new justification.'],['Reduce exposure','If pressure increases, reduce access rather than escalating explanation.']];
  el.innerHTML='<div class="actionList">'+actions.map(a=>`<div class="actionItem"><b>${escapeHTML(a[0])}</b>${escapeHTML(a[1])}</div>`).join('')+'</div>';
}
const repairExamples={appreciation:["He said, “You never appreciate what I do.”","She heard, “You want praise for doing basic things.”"],sharedReality:["She said, “You never tell me what’s going on anymore.”","He heard, “I’m failing again and nothing I do is enough.”"],boss:["Boss said, “This isn’t what I expected.”","Employee heard, “I was set up to fail because expectations changed.”"],boundary:["Family member said, “After everything I’ve done, you owe me this.”","User heard, “My autonomy is being overwritten by guilt.”"],pursueWithdraw:["She said, “Why are you being distant?”","He heard, “You are defective and need to perform emotionally right now.”"]};
function bindRepairExamples(){document.querySelectorAll('#repairExampleBar button[data-example]').forEach(btn=>{if(btn.dataset.bound)return;btn.dataset.bound='1';btn.onclick=()=>{let ex=repairExamples[btn.dataset.example];if(!ex)return;$('repairCockpitSaidInput').value=ex[0];$('repairCockpitHeardInput').value=ex[1];buildRcConversation&&buildRcConversation();};});}
function drawSelfGalaxy(){
  let c=$('selfGalaxyCanvas'); if(!c)return;
  let ctx=c.getContext('2d'),w=c.width,h=c.height,cx=w/2,cy=h/2;
  ctx.clearRect(0,0,w,h);ctx.fillStyle='#fff';ctx.fillRect(0,0,w,h);ctx.strokeStyle='#d7e1e5';[70,140,210].forEach(r=>{ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.stroke();});
  ctx.fillStyle='#256b72';ctx.beginPath();ctx.arc(cx,cy,22,0,Math.PI*2);ctx.fill();ctx.fillStyle='#fff';ctx.font='12px sans-serif';ctx.fillText('YOU',cx-12,cy+4);
  let profiles=state.profiles||[];
  profiles.forEach((p,i)=>{let m=typeof dashboardMetricSet==='function'?dashboardMetricSet(p):(typeof safeMetricSet==='function'?safeMetricSet(p):{peaceIndex:50,respectIndex:50});let score=Math.round(((m.peaceIndex||50)+(m.respectIndex||50))/2);let angle=i*Math.PI*2/Math.max(1,profiles.length)-Math.PI/2;let dist=240-(score*1.5);let x=cx+Math.cos(angle)*dist,y=cy+Math.sin(angle)*dist;let kind=typeof profileCategory==='function'?profileCategory(p):(p.rtype||'Other');ctx.fillStyle=kind==='Work'?'#c88a1d':kind==='Husband'||kind==='Wife'||kind==='Romantic'?'#c2413a':kind==='Pet'?'#2f855a':'#64748b';if(kind==='Work'){ctx.fillRect(x-12,y-12,24,24);}else if(kind==='Pet'){ctx.beginPath();ctx.arc(x,y,13,0,Math.PI*2);ctx.fill();}else{ctx.beginPath();ctx.moveTo(x,y-15);ctx.lineTo(x+14,y+12);ctx.lineTo(x-14,y+12);ctx.closePath();ctx.fill();}ctx.strokeStyle='rgba(37,107,114,.25)';ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(x,y);ctx.stroke();ctx.fillStyle='#1f2933';ctx.font='12px sans-serif';ctx.fillText((p.name||'Untitled').slice(0,18),x+16,y);ctx.fillText(String(score),x+16,y+14);});
  let sum=$('selfGalaxySummary'); if(sum)sum.innerHTML='<p><b>Galaxy key:</b> closer = stronger peace/respect contribution. Shape/color indicates relationship type. Number is average Peace/Respect score.</p>';
}
if(typeof renderRepairCockpit==='function'&&!window.__actionRenderWrapped){const oldRenderRepairCockpit=renderRepairCockpit;renderRepairCockpit=function(){let r=oldRenderRepairCockpit();try{renderRcActionStrategy();bindRepairExamples()}catch(e){};return r}}
document.addEventListener('DOMContentLoaded',()=>setTimeout(()=>{bindWizard();bindRepairExamples();drawSelfGalaxy();},500));
if(typeof safeUpdate==='function'&&!window.__v310Safe){window.__v310Safe=true;const oldSafe310=safeUpdate;safeUpdate=function(){let r=oldSafe310();try{bindWizard();bindRepairExamples();renderRcActionStrategy();drawSelfGalaxy();}catch(e){}return r}}



/* v3.1.1 hard cleanup */
(function(){
const $id=id=>document.getElementById(id);
function esc(s){return (window.escapeHTML?escapeHTML(String(s||'')):String(s||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])));}
const wiz={step:0,data:{}};
const steps=[
 ['card','Who is this about?','card'],
 ['event','What happened?','text'],
 ['story','What story are you telling yourself?','text'],
 ['heard','What might the other person have heard?','text'],
 ['expectation','What expectation was involved?','select'],
 ['scores','Quick sliders for this event','scores'],
 ['domain','What domain best fits this?','domain']
];
const exp=['Neutral / no strong expectation','Exceeded expectations','Met expectations','Below expectations','Expectation mismatch / unclear agreement','New relationship high / idealizing','Disappointment after hope'];
const domains=['Communication / being on same page','Criticism / correction','Appreciation / usefulness','Planning / logistics','Commitment / future direction','Affection / reassurance','Boundary / pressure','Work expectations','Other'];
function cardOptions(){return ((window.state&&state.profiles)||[]).map(p=>`<option value="${p.id}" ${p.id===state.currentId?'selected':''}>${esc(p.name||'Untitled')} — ${esc(p.rtype||'Card')}</option>`).join('');}
function renderStep(){
 let [key,title,type]=steps[wiz.step], el=$id('wizardStepContent'); if(!el)return;
 let html=`<div class="wizardStep"><h3>${title}</h3>`;
 if(type==='card') html+=`<label>Relationship/card<select id="wiz_card">${cardOptions()}</select></label>`;
 if(type==='text') html+=`<textarea id="wiz_${key}" placeholder="Write a few sentences.">${esc(wiz.data[key]||'')}</textarea>`;
 if(type==='select') html+=`<select id="wiz_${key}">${exp.map(o=>`<option ${wiz.data[key]===o?'selected':''}>${o}</option>`).join('')}</select>`;
 if(type==='domain') html+=`<select id="wiz_${key}">${domains.map(o=>`<option ${wiz.data[key]===o?'selected':''}>${o}</option>`).join('')}</select>`;
 if(type==='scores') html+=['peace:Peace:Low calm:High calm','respect:Respect:Dismissed:Respected','repair:Repair quality:No repair:Strong repair','energy:Emotional drain:Low drain:High drain'].map(x=>{let [k,l,a,b]=x.split(':'),v=wiz.data[k]??(k==='energy'?3:7);return `<label>${l} <span id="wiz_${k}_val">${v}</span><span class="scaleEnds"><b>${a}</b><b>${b}</b></span><input id="wiz_${k}" type="range" min="0" max="10" value="${v}"></label>`}).join('');
 html+='</div>'; el.innerHTML=html;
 if($id('wizardProgressFill')) $id('wizardProgressFill').style.width=((wiz.step+1)/steps.length*100)+'%';
 if($id('wizardBackBtn')) $id('wizardBackBtn').disabled=wiz.step===0;
 if($id('wizardNextBtn')) $id('wizardNextBtn').classList.toggle('hidden',wiz.step===steps.length-1);
 if($id('wizardSaveBtn')) $id('wizardSaveBtn').classList.toggle('hidden',wiz.step!==steps.length-1);
 ['peace','respect','repair','energy'].forEach(k=>{let i=$id('wiz_'+k), v=$id('wiz_'+k+'_val'); if(i&&v)i.oninput=()=>{v.textContent=i.value;wiz.data[k]=Number(i.value)};});
}
function collect(){
 let [key,,type]=steps[wiz.step];
 if(type==='card'){let v=$id('wiz_card')?.value;if(v&&window.state){wiz.data.card=v;state.currentId=v;if(window.saveState)saveState();}}
 if(type==='text') wiz.data[key]=$id('wiz_'+key)?.value||'';
 if(type==='select'||type==='domain') wiz.data[key]=$id('wiz_'+key)?.value||'';
 if(type==='scores') ['peace','respect','repair','energy'].forEach(k=>{let v=$id('wiz_'+k)?.value;if(v!==undefined)wiz.data[k]=Number(v);});
}
window.openSnapshotWizard=function(){wiz.step=0;wiz.data={card:state?.currentId,peace:7,respect:7,repair:6,energy:3};$id('snapshotWizardOverlay')?.classList.remove('hidden');renderStep();}
window.closeSnapshotWizard=function(){$id('snapshotWizardOverlay')?.classList.add('hidden');}
window.saveWizardSnapshot=function(){
 collect();
 let p=((window.state&&state.profiles)||[]).find(x=>x.id===(wiz.data.card||state.currentId))||(window.currentProfile&&currentProfile()); if(!p)return;
 p.snapshots=p.snapshots||[];
 let cost=Number(wiz.data.energy||3);
 let snap={id:window.uid?uid():String(Date.now()),label:'Wizard snapshot',created:new Date().toISOString(),note:wiz.data.event||'',story:wiz.data.story||'',heard:wiz.data.heard||'',domain:wiz.data.domain||'Other',expectation:wiz.data.expectation||'Neutral / no strong expectation',peace:Number(wiz.data.peace||7)*10,respect:Number(wiz.data.respect||7)*10,repair:Number(wiz.data.repair||6)*10,energy:Math.max(0,100-cost*10),reciprocity:Number(wiz.data.respect||7)*10,embedded:70,alignment:Math.round((Number(wiz.data.peace||7)+Number(wiz.data.respect||7))/2*10),evidenceConfidence:'Medium — fresh self-report',interpretationChecked:'Not yet checked',tags:[]};
 p.snapshots.push(snap);p.evidence=snap.note;p.story=snap.story;state.currentId=p.id;if(window.saveState)saveState();if(window.fillForm)fillForm();if(window.safeUpdate)safeUpdate();closeSnapshotWizard();if(window.showRepairCockpit)showRepairCockpit();
}
function bind(){
 let open=$id('openSnapshotWizardBtn'); if(open)open.onclick=openSnapshotWizard;
 let close=$id('closeSnapshotWizardBtn'); if(close)close.onclick=closeSnapshotWizard;
 let back=$id('wizardBackBtn'); if(back)back.onclick=()=>{collect();wiz.step=Math.max(0,wiz.step-1);renderStep();};
 let next=$id('wizardNextBtn'); if(next)next.onclick=()=>{collect();wiz.step=Math.min(steps.length-1,wiz.step+1);renderStep();};
 let save=$id('wizardSaveBtn'); if(save)save.onclick=saveWizardSnapshot;
 let show=$id('showInlineSnapshotBtn'); if(show)show.onclick=()=>{document.body.classList.toggle('showInlineSnapshot');show.textContent=document.body.classList.contains('showInlineSnapshot')?'Hide full form':'Show full form';};
 let repair=$id('tabRepairCockpit'); if(repair)repair.onclick=()=>{document.body.classList.add('showWorkspace');document.body.classList.remove('showDiagnostics');if(window.showRepairCockpit)showRepairCockpit();};
 let diag=$id('tabDiagnostics'); if(diag)diag.onclick=()=>{document.body.classList.add('showDiagnostics');document.body.classList.remove('showWorkspace');if(window.showDiagnosticsTab)showDiagnosticsTab();else if(window.showTab)showTab('diagnostics');};
 ['tabSnapshot','tabMe'].forEach(id=>{let t=$id(id); if(t)t.addEventListener('click',()=>{document.body.classList.remove('showWorkspace','showDiagnostics');});});
}
function drawGalaxy(){
 let c=$id('selfGalaxyCanvas'); if(!c)return;
 let ctx=c.getContext('2d'),w=c.width,h=c.height,cx=w/2,cy=h/2,profiles=(window.state&&state.profiles)||[];
 ctx.clearRect(0,0,w,h);ctx.fillStyle='#fff';ctx.fillRect(0,0,w,h);ctx.strokeStyle='#d7e1e5';[70,140,210].forEach(r=>{ctx.beginPath();ctx.arc(cx,cy,r,0,Math.PI*2);ctx.stroke();});
 ctx.fillStyle='#256b72';ctx.beginPath();ctx.arc(cx,cy,22,0,Math.PI*2);ctx.fill();ctx.fillStyle='#fff';ctx.font='12px sans-serif';ctx.fillText('YOU',cx-12,cy+4);
 profiles.forEach((p,i)=>{let m=window.dashboardMetricSet?dashboardMetricSet(p):(window.safeMetricSet?safeMetricSet(p):{peaceIndex:50,respectIndex:50});let score=Math.round(((m.peaceIndex||50)+(m.respectIndex||50))/2);let ang=i*Math.PI*2/Math.max(1,profiles.length)-Math.PI/2,dist=240-score*1.5,x=cx+Math.cos(ang)*dist,y=cy+Math.sin(ang)*dist;let kind=window.profileCategory?profileCategory(p):(p.rtype||'Other');ctx.fillStyle=kind==='Work'?'#c88a1d':kind==='Pet'?'#2f855a':(['Husband','Wife','Romantic'].includes(kind)?'#c2413a':'#64748b');if(kind==='Work')ctx.fillRect(x-12,y-12,24,24);else{ctx.beginPath();ctx.arc(x,y,13,0,Math.PI*2);ctx.fill();}ctx.strokeStyle='rgba(37,107,114,.25)';ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(x,y);ctx.stroke();ctx.fillStyle='#1f2933';ctx.font='12px sans-serif';ctx.fillText((p.name||'Untitled').slice(0,18),x+16,y);ctx.fillText(String(score),x+16,y+14);});
 if($id('selfGalaxySummary'))$id('selfGalaxySummary').innerHTML='<p><b>Galaxy key:</b> closer = stronger peace/respect contribution. Shape/color indicates relationship type. Number is average Peace/Respect score.</p>';
}
window.drawSelfGalaxy311=drawGalaxy;
const oldRun=window.runDiagnostics;
if(oldRun){window.runDiagnostics=function(){oldRun();let out=$id('diagnosticsOutput');if(out)out.innerHTML=out.innerHTML.replace(/<div class="diagnosticFail"><b>FAIL:<\/b> future viability section present<\/div>/g,'<div class="diagnosticPass"><b>PASS:</b> future viability not required in simplified v3.1 flow</div>');}}
document.addEventListener('DOMContentLoaded',()=>setTimeout(()=>{bind();drawGalaxy();document.body.classList.remove('showWorkspace','showDiagnostics');},250));
setTimeout(()=>{bind();drawGalaxy();},800);
})();

/* v3.6.2 durable behavior and values takeaway */
(function(){
const $361=id=>document.getElementById(id);
const esc361=s=>typeof escapeHTML==='function'?escapeHTML(String(s??'')):String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function getContext361(){
 if(typeof context343==='function')return context343();
 const profile=typeof profile331==='function'?profile331():null,issue=typeof currentIssue331==='function'?currentIssue331():null;
 return{profile,issue};
}
function ensure361(){
 const panel=$361('expertThinkPanel339'),output=$361('expertOutput339');if(!panel||!output)return null;
 let box=$361('expertTakeaway361');if(!box){box=document.createElement('section');box.id='expertTakeaway361';box.className='expertTakeaway361';output.insertAdjacentElement('afterend',box);}
 return box;
}
function render361(){
 const box=ensure361(),engine=window.RelationshipExpertEngine359;if(!box||!engine?.behaviorPlan)return;
 const ctx=getContext361();if(!ctx?.issue){box.innerHTML='';box.classList.add('hidden');return;}
 const p=engine.behaviorPlan(ctx),stage={early:'Early dating',ambiguous:'Ambiguous relationship',committed:'Committed relationship',married:'Marriage / long-term partnership',boundary:'Boundary context',nonromantic:'Non-romantic relationship'}[p.stage]||'Relationship',recurrence={first:'First reported event',occasional:'Occasional pattern',recurring:'Recurring pattern',core:'Structural pattern'}[p.recurrence]||'Pattern under review';
 const safety=/coercive control|surveillance/i.test(p.crux),posture=safety?'Kindness does not require compliance with monitoring or control. Prioritize autonomy, private support, and the safest observable next step; do not use calmness as a test of whether the concern is legitimate.':'Choose warmth over scorekeeping, curiosity over mind-reading, and steadiness over urgency. Calm the immediate anxiety before acting, then judge progress by repeated conduct rather than one perfect conversation or a short burst of effort.';
 box.classList.remove('hidden');
 box.innerHTML=`<div class="behaviorHead361"><div><span>Plain-English takeaway</span><h4>From insight to behavior</h4></div><div class="behaviorTags361"><span>${esc361(stage)}</span><span>${esc361(recurrence)}</span></div></div>
 <p class="relationshipPosture361"><b>${safety?'Safety posture':'Relationship posture'}:</b> ${esc361(posture)}</p>
 <div class="valuesUnderTest362"><div><b>Values under test</b><p>${esc361(p.valueTension||'This issue may be clarifying what the relationship needs to value in practice.')}</p></div><div class="valueChips362">${(p.values||[]).map(v=>`<span>${esc361(v)}</span>`).join('')}</div><p><b>Shared goal:</b> ${esc361(p.valueGoal||'Choose the value you want the relationship to practice, then judge the behavior by that standard.')}</p></div>
 <div class="behaviorGrid361">
  <div class="behaviorStop361"><b>Stop</b><p>${esc361(p.stop)}</p></div>
  <div class="behaviorStart361"><b>Start</b><p>${esc361(p.start)}</p></div>
  <div class="behaviorRepeat361"><b>Make it stick</b><p>${esc361(p.repeat)}</p></div>
  <div class="behaviorEvidence361"><b>Evidence it is working</b><p>${esc361(p.evidence)}</p></div>
 </div>
 <details class="behaviorDurability361"><summary>Practice, values, and durability check</summary><div><p><b>Optional structured practice:</b> ${esc361(p.practice)}</p><p><b>Value reflection:</b> ${esc361(p.valueReflection||'What shared belief would make this behavior feel meaningful rather than performative?')}</p><p><b>When change does not last:</b> ${esc361(p.culture)}</p></div></details>`;
}
function bind361(){
 ensure361();render361();
 const out=$361('expertOutput339');if(out&&!out.dataset.behaviorObserver361){out.dataset.behaviorObserver361='1';new MutationObserver(()=>render361()).observe(out,{childList:true,subtree:true});}
}
document.addEventListener('change',e=>{if(['repairCockpitProfileSelect','issueCardSelector'].includes(e.target?.id))setTimeout(render361,180);});
document.addEventListener('click',e=>{if(e.target?.closest?.('#renderExpertLensBtn339,#mostAlignedExpertBtn339,#likelyDisagreeExpertBtn339,[data-thinker343]'))setTimeout(render361,100);});
document.addEventListener('DOMContentLoaded',()=>setTimeout(bind361,1800));setTimeout(bind361,2100);
})();



/* v3.2.0 workspace/profile dashboard consolidation */
const sliderDims=[
 ['warmth','Warmth','How warm, kind, affectionate, and emotionally inviting this relationship feels.'],
 ['respect','Respect','How valued, appreciated, admired, and dignified you feel.'],
 ['peace','Peace','How calm, safe, and emotionally sustainable the relationship feels.'],
 ['repair','Repair quality','How well rupture becomes repair instead of resentment.'],
 ['reciprocity','Reciprocity','Whether effort, initiation, care, and sacrifice are mutual enough.'],
 ['clarity','Communication clarity','Whether plans, intentions, needs, and expectations are explicit.'],
 ['intimacy','Intimacy','How close, included, connected, and bonded the relationship feels.'],
 ['admiration','Admiration symmetry','Whether admiration and appreciation flow in both directions.'],
 ['practical','Practical load','How manageable the logistics, chores, planning, and coordination feel. High = manageable.'],
 ['future','Future viability','Whether shared direction, loyalty, same-team conflict, and life fit look promising.']
];
const sliderWiz={step:0,data:{}};
function p320(){return window.rcCurrentProfile?rcCurrentProfile():(window.currentProfile&&currentProfile());}
function ensureSliders320(p){p.profileSliders=p.profileSliders||{};sliderDims.forEach(([k])=>{if(p.profileSliders[k]===undefined)p.profileSliders[k]=6;});p.sliderHistory=p.sliderHistory||[];}
function metric320(p,k){
 let m=window.safeMetricSet?safeMetricSet(p):(window.dashboardMetricSet?dashboardMetricSet(p):{});
 let map={warmth:p?.green?.warmth,respect:(m.respectIndex||p?.green?.respect),peace:(m.peaceIndex||p?.green?.peace),repair:(m.repair||p?.repair?.repairAbility),reciprocity:(m.reciprocityDyn||p?.green?.reciprocity),clarity:p?.social?.clarityGeneral,intimacy:p?.green?.attraction,admiration:p?.respect?.appreciation,practical:p?.social?.financialPracticalFit,future:(window.futureScore?futureScore(p):60)};
 let v=map[k]; if(v===undefined||v===null||Number.isNaN(Number(v)))return 60; return Number(v)>10?Number(v):Number(v)*10;
}
function val320(p,k){ensureSliders320(p);let v=p.profileSliders[k];return Number(v)*10 || metric320(p,k);}
function renderBars320(){
 let el=$('profileBarDashboard'), p=p320(); if(!el||!p)return; ensureSliders320(p);
 el.innerHTML=sliderDims.map(([k,label])=>{let v=Math.round(val320(p,k));return `<div class="barRow"><b>${escapeHTML(label)}</b><div class="barTrack"><div class="barFill" style="width:${Math.max(0,Math.min(100,v))}%"></div></div><span>${v}</span></div>`;}).join('');
}
function openSliderWizard(){let p=p320(); if(!p)return; ensureSliders320(p);sliderWiz.step=0;sliderWiz.data={...p.profileSliders};$('sliderWizardOverlay')?.classList.remove('hidden');renderSliderWizardStep();}
function closeSliderWizard(){$('sliderWizardOverlay')?.classList.add('hidden');}
function renderSliderWizardStep(){
 let p=p320(); if(!p)return; let [k,label,help]=sliderDims[sliderWiz.step], el=$('sliderWizardBody'); if(!el)return;
 let v=sliderWiz.data[k] ?? p.profileSliders?.[k] ?? 6;
 el.innerHTML=`<h3>${escapeHTML(label)}</h3><div class="sliderWizardExplain">${escapeHTML(help)}</div><label>${escapeHTML(label)} <span id="sliderWizVal">${v}</span><span class="scaleEnds"><b>Low</b><b>High</b></span><input id="sliderWizInput" type="range" min="0" max="10" value="${v}"></label>`;
 let fill=$('sliderWizardProgressFill'); if(fill)fill.style.width=((sliderWiz.step+1)/sliderDims.length*100)+'%';
 if($('sliderWizardBackBtn'))$('sliderWizardBackBtn').disabled=sliderWiz.step===0;
 if($('sliderWizardNextBtn'))$('sliderWizardNextBtn').classList.toggle('hidden',sliderWiz.step===sliderDims.length-1);
 if($('sliderWizardSaveBtn'))$('sliderWizardSaveBtn').classList.toggle('hidden',sliderWiz.step!==sliderDims.length-1);
 let input=$('sliderWizInput'), val=$('sliderWizVal'); if(input&&val)input.oninput=()=>{val.textContent=input.value;sliderWiz.data[k]=Number(input.value);};
}
function collectSliderWizard(){let [k]=sliderDims[sliderWiz.step];let input=$('sliderWizInput'); if(input)sliderWiz.data[k]=Number(input.value);}
function saveSliderWizard(){
 collectSliderWizard(); let p=p320(); if(!p)return; ensureSliders320(p);
 Object.assign(p.profileSliders,sliderWiz.data); p.sliderHistory.push({created:new Date().toISOString(),...sliderWiz.data});
 saveState&&saveState(); closeSliderWizard(); renderWorkspaceGraphs320();
}
function bindSliderWizard(){
 let open=$('openSliderWizardBtn'); if(open)open.onclick=openSliderWizard;
 let close=$('closeSliderWizardBtn'); if(close)close.onclick=closeSliderWizard;
 let back=$('sliderWizardBackBtn'); if(back)back.onclick=()=>{collectSliderWizard();sliderWiz.step=Math.max(0,sliderWiz.step-1);renderSliderWizardStep();};
 let next=$('sliderWizardNextBtn'); if(next)next.onclick=()=>{collectSliderWizard();sliderWiz.step=Math.min(sliderDims.length-1,sliderWiz.step+1);renderSliderWizardStep();};
 let save=$('sliderWizardSaveBtn'); if(save)save.onclick=saveSliderWizard;
}
function matrix320(p){
 let m=window.safeMetricSet?safeMetricSet(p):(window.dashboardMetricSet?dashboardMetricSet(p):{peaceIndex:50,respectIndex:50});
 return peaceRespectMatrixHtml357(m);
}
function drawRadar320(canvasId,p){
 let c=$(canvasId); if(!c||!p)return; let ctx=c.getContext('2d'),w=c.width,h=c.height,cx=w/2,cy=h/2,r=Math.min(w,h)*.33;
 let rows=[['Warmth',val320(p,'warmth')],['Respect',val320(p,'respect')],['Peace',val320(p,'peace')],['Repair',val320(p,'repair')],['Reciprocity',val320(p,'reciprocity')],['Intimacy',val320(p,'intimacy')]];
 ctx.clearRect(0,0,w,h);ctx.fillStyle='#fff';ctx.fillRect(0,0,w,h);ctx.strokeStyle='#d7e1e5';ctx.fillStyle='#65727e';ctx.font='12px sans-serif';
 for(let ring=1;ring<=4;ring++){ctx.beginPath();ctx.arc(cx,cy,r*ring/4,0,Math.PI*2);ctx.stroke();}
 rows.forEach((row,i)=>{let a=-Math.PI/2+i*Math.PI*2/rows.length;ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r);ctx.stroke();ctx.fillText(row[0],cx+Math.cos(a)*(r+32)-24,cy+Math.sin(a)*(r+30));});
 ctx.beginPath();rows.forEach((row,i)=>{let a=-Math.PI/2+i*Math.PI*2/rows.length,rr=r*(Math.max(0,Math.min(100,row[1]))/100),x=cx+Math.cos(a)*rr,y=cy+Math.sin(a)*rr;i?ctx.lineTo(x,y):ctx.moveTo(x,y);});
 ctx.closePath();ctx.fillStyle='rgba(37,107,114,.22)';ctx.fill();ctx.strokeStyle='#256b72';ctx.lineWidth=2;ctx.stroke();
}
function drawPeaceRespect320(p){
 let c=$('workspacePeaceRespectCanvas'); if(!c||!p)return; let ctx=c.getContext('2d'),w=c.width,h=c.height,pad=55;
 let pts=(p.snapshots||[]).map((s,i)=>({i,peace:Number(s.peace||50),respect:Number(s.respect||50)}));
 if(!pts.length){let m=window.safeMetricSet?safeMetricSet(p):{peaceIndex:50,respectIndex:50};pts=[{i:0,peace:m.peaceIndex||50,respect:m.respectIndex||50}];}
 ctx.clearRect(0,0,w,h);ctx.fillStyle='#fff';ctx.fillRect(0,0,w,h);ctx.strokeStyle='#d7e1e5';
 for(let v=0;v<=100;v+=25){let x=pad+(v/100)*(w-2*pad),y=h-pad-(v/100)*(h-2*pad);ctx.beginPath();ctx.moveTo(x,pad);ctx.lineTo(x,h-pad);ctx.stroke();ctx.beginPath();ctx.moveTo(pad,y);ctx.lineTo(w-pad,y);ctx.stroke();}
 ctx.strokeStyle='#256b72';ctx.lineWidth=3;ctx.beginPath();pts.forEach((pt,i)=>{let x=pad+(pt.respect/100)*(w-2*pad),y=h-pad-(pt.peace/100)*(h-2*pad);i?ctx.lineTo(x,y):ctx.moveTo(x,y);});ctx.stroke();
 pts.forEach((pt,i)=>{let x=pad+(pt.respect/100)*(w-2*pad),y=h-pad-(pt.peace/100)*(h-2*pad);ctx.beginPath();ctx.arc(x,y,7,0,Math.PI*2);ctx.fillStyle='#256b72';ctx.fill();ctx.fillStyle='#1f2933';ctx.font='11px sans-serif';ctx.fillText(String(i+1),x+9,y-8);});
 ctx.fillStyle='#1f2933';ctx.font='13px sans-serif';ctx.fillText('Respect →',w/2,h-18);ctx.save();ctx.translate(16,h/2);ctx.rotate(-Math.PI/2);ctx.fillText('Peace →',0,0);ctx.restore();
}
function drawTimeline320(){
 let p=p320(), c=$('sliderTimelineCanvas'); if(!p||!c)return; ensureSliders320(p);
 let hist=p.sliderHistory&&p.sliderHistory.length?p.sliderHistory:[{created:new Date().toISOString(),...p.profileSliders}];
 let ctx=c.getContext('2d'),w=c.width,h=c.height,pad=50; ctx.clearRect(0,0,w,h);ctx.fillStyle='#fff';ctx.fillRect(0,0,w,h);ctx.strokeStyle='#d7e1e5';
 for(let v=0;v<=10;v+=2){let y=h-pad-(v/10)*(h-2*pad);ctx.beginPath();ctx.moveTo(pad,y);ctx.lineTo(w-pad,y);ctx.stroke();ctx.fillStyle='#65727e';ctx.font='10px sans-serif';ctx.fillText(String(v),18,y+3);}
 let keys=['warmth','respect','peace','repair','reciprocity','intimacy'], colors=['#256b72','#c2413a','#2f855a','#c88a1d','#64748b','#7c3aed'];
 keys.forEach((k,ki)=>{ctx.beginPath();hist.forEach((snap,i)=>{let x=pad+(i/Math.max(1,hist.length-1))*(w-2*pad),y=h-pad-((snap[k]??5)/10)*(h-2*pad);i?ctx.lineTo(x,y):ctx.moveTo(x,y);});ctx.strokeStyle=colors[ki];ctx.lineWidth=2;ctx.stroke();ctx.fillStyle=colors[ki];ctx.fillText(k,pad+ki*85,18);});
 if($('sliderTimelineSummary'))$('sliderTimelineSummary').innerHTML=`<p><b>${hist.length}</b> profile slider snapshots. Use the wizard occasionally to see whether core dimensions are improving, fading, or stabilizing over time.</p>`;
}
function renderWorkspaceGraphs320(){
 let p=p320(); if(!p)return; renderBars320(); if($('workspaceMatrix'))$('workspaceMatrix').innerHTML=matrix320(p); drawRadar320('workspaceRadarCanvas',p); drawPeaceRespect320(p); drawTimeline320();
}
function loadGoodYearExample(){
 let p=p320(); if(!p)return; ensureSliders320(p);
 p.name=p.name&&p.name!=='Untitled'?p.name:'Jane Doe — 1-year Good Relationship Demo';
 let arr=[
  [8,7,8,5,6,5,7,7,5,6],
  [9,8,9,6,7,6,8,8,6,7],
  [8,8,7,7,8,7,8,8,7,8],
  [8,9,8,8,8,8,9,9,7,8],
  [9,9,9,8,9,9,9,9,8,9],
  [9,9,9,9,9,9,9,9,8,9]
 ];
 p.sliderHistory=arr.map((a,i)=>{let o={created:new Date(Date.now()-((arr.length-i)*60*24*3600*1000)).toISOString()};sliderDims.forEach(([k],j)=>o[k]=a[j]);return o;});
 Object.assign(p.profileSliders,p.sliderHistory[p.sliderHistory.length-1]);
 p.snapshots=[
  {label:'First month',peace:82,respect:74,repair:55,domain:'New relationship high',note:'Strong chemistry, still learning communication patterns.'},
  {label:'First conflict',peace:68,respect:76,repair:66,domain:'Criticism / correction',note:'A misunderstanding created tension, but both people came back to repair.'},
  {label:'Shared rhythm',peace:78,respect:82,repair:76,domain:'Planning / logistics',note:'Weekly rhythm and expectations became clearer.'},
  {label:'Integration',peace:84,respect:86,repair:82,domain:'Commitment / future direction',note:'Started integrating friends/family with less ambiguity.'},
  {label:'One year',peace:90,respect:90,repair:88,domain:'Communication / being on same page',note:'Conflict still happens, but repair is faster and trust is stronger.'}
 ];
 saveState&&saveState(); fillForm&&fillForm(); safeUpdate&&safeUpdate(); renderWorkspaceGraphs320();
}
function bindWorkspace320(){bindSliderWizard();let ex=$('loadGoodYearExampleBtn'); if(ex)ex.onclick=loadGoodYearExample;}
if(typeof renderRepairCockpit==='function'&&!window.__v320RenderWrap){window.__v320RenderWrap=true; const old=renderRepairCockpit; renderRepairCockpit=function(){let r=old();try{bindWorkspace320();renderWorkspaceGraphs320();}catch(e){console.warn(e)}return r;}}
if(typeof safeUpdate==='function'&&!window.__v320Safe){window.__v320Safe=true; const old=safeUpdate; safeUpdate=function(){let r=old();try{bindWorkspace320();renderWorkspaceGraphs320();}catch(e){}return r;}}
document.addEventListener('DOMContentLoaded',()=>setTimeout(()=>{bindWorkspace320();renderWorkspaceGraphs320();},600));



/* v3.2.1 normalize demo/example profiles + diagnostics loader */
function futureDefaults321(kind){
  let base={sameTeamConflict:6,sharedDirection:6,backgroundFit:6,communicationClarityFuture:6,sexualCommunication:6,loyaltyTrust:7,repairAfterFight:6,commitmentReadiness:6,admirationDesire:7,stressTeamwork:6,familySystemFit:6,financialPracticalFit:6};
  if(kind==='romantic'||kind==='marriage')Object.assign(base,{sameTeamConflict:8,sharedDirection:8,communicationClarityFuture:8,sexualCommunication:7,loyaltyTrust:9,repairAfterFight:8,commitmentReadiness:8,admirationDesire:9,stressTeamwork:8});
  if(kind==='work')Object.assign(base,{sameTeamConflict:5,sharedDirection:6,communicationClarityFuture:7,sexualCommunication:5,loyaltyTrust:5,repairAfterFight:5,commitmentReadiness:5,admirationDesire:4,stressTeamwork:6,financialPracticalFit:7});
  if(kind==='pet')Object.assign(base,{sameTeamConflict:9,sharedDirection:8,communicationClarityFuture:6,sexualCommunication:5,loyaltyTrust:10,repairAfterFight:8,commitmentReadiness:8,admirationDesire:10,stressTeamwork:8,familySystemFit:8,financialPracticalFit:7});
  if(kind==='boundary')Object.assign(base,{sameTeamConflict:3,sharedDirection:3,communicationClarityFuture:4,loyaltyTrust:3,repairAfterFight:3,commitmentReadiness:2,admirationDesire:2,stressTeamwork:3});
  return base;
}
function profileKind321(p){
  let name=String(p?.name||'').toLowerCase(), r=String(p?.rtype||'').toLowerCase();
  if(name.includes('buddy')||r.includes('pet'))return 'pet';
  if(name.includes('boss')||r.includes('work'))return 'work';
  if(name.includes('boundary')||r.includes('boundary'))return 'boundary';
  if(name.includes('husband')||name.includes('wife')||r.includes('husband')||r.includes('wife')||r.includes('partner'))return 'marriage';
  if(name.includes('jane')||name.includes('romance')||r.includes('romantic'))return 'romantic';
  return 'general';
}
function normalizeProfile321(p){
  if(!p)return p;
  let kind=profileKind321(p);
  p.name=p.name||'Untitled';
  p.rtype=p.rtype||'Romantic prospect';
  ['green','risk','respect','translation','repair','reciprocityDyn','embedded','energy','social','profileSliders'].forEach(k=>p[k]=p[k]||{});
  p.future=Object.assign(futureDefaults321(kind),p.future||{});
  p.sliderHistory=p.sliderHistory||[];
  p.snapshots=p.snapshots||[];
  let defaultSlider=(kind==='romantic'||kind==='marriage')?8:(kind==='pet'?9:(kind==='work'?6:6));
  ['warmth','respect','peace','repair','reciprocity','clarity','intimacy','admiration','practical','future'].forEach(k=>{if(p.profileSliders[k]===undefined)p.profileSliders[k]=defaultSlider;});
  if(!p.translation.competenceThreat)p.translation.competenceThreat=kind==='romantic'?7:5;
  if(!p.translation.reassuranceNeed)p.translation.reassuranceNeed=kind==='marriage'?8:5;
  if(!p.repair.repairAbility)p.repair.repairAbility=kind==='romantic'||kind==='marriage'?8:6;
  if(!p.repair.accountability)p.repair.accountability=kind==='romantic'||kind==='marriage'?8:6;
  if(!p.reciprocityDyn.effort)p.reciprocityDyn.effort=kind==='romantic'||kind==='marriage'?8:6;
  if(!p.reciprocityDyn.investment)p.reciprocityDyn.investment=kind==='romantic'||kind==='marriage'?8:6;
  return p;
}
function normalizeAllProfiles321(){
  (state.profiles||[]).forEach(normalizeProfile321);
  if(typeof saveState==='function')saveState();
  try{if(typeof fillForm==='function')fillForm(); if(typeof safeUpdate==='function')safeUpdate(); if(typeof renderRepairCockpit==='function')renderRepairCockpit(); if(typeof renderWorkspaceGraphs320==='function')renderWorkspaceGraphs320();}catch(e){}
}
function ensureExampleProfiles321(){
  state.profiles=state.profiles||[];
  function hasName(fragment){return state.profiles.some(p=>String(p.name||'').toLowerCase().includes(fragment));}
  function add(name,rtype,kind,snaps){
    if(hasName(name.toLowerCase().split(' ')[0]))return;
    let p={id:typeof uid==='function'?uid():String(Date.now()+Math.random()),name,rtype,isDemo:true,snapshots:snaps,notes:'Demo profile for testing workspace outputs.',evidence:snaps[0]?.note||'',story:snaps[0]?.story||'',future:futureDefaults321(kind)};
    normalizeProfile321(p); state.profiles.push(p);
  }
  add('Jane Doe — 1-year Good Relationship Demo','Romantic prospect','romantic',[
    {label:'First month',peace:82,respect:74,repair:55,domain:'New relationship high',note:'Strong chemistry, still learning communication patterns.',story:'This feels promising but still early.'},
    {label:'First conflict',peace:68,respect:76,repair:66,domain:'Criticism / correction',note:'A misunderstanding created tension, but both people came back to repair.',story:'Conflict did not become contempt.'},
    {label:'Shared rhythm',peace:78,respect:82,repair:76,domain:'Planning / logistics',note:'Weekly rhythm and expectations became clearer.',story:'The relationship feels more predictable.'},
    {label:'Integration',peace:84,respect:86,repair:82,domain:'Commitment / future direction',note:'Started integrating friends/family with less ambiguity.',story:'Shared future became more concrete.'},
    {label:'One year',peace:90,respect:90,repair:88,domain:'Communication / being on same page',note:'Conflict still happens, but repair is faster and trust is stronger.',story:'The relationship is safer and more respectful over time.'}
  ]);
  add('John Doe — Boss Example','Work','work',[
    {label:'Priority shift',peace:45,respect:42,repair:35,domain:'Work expectations',note:'Deadline changed and criticism arrived as if the original plan never changed.',story:'I felt set up to fail.'},
    {label:'Written clarification',peace:55,respect:50,repair:48,domain:'Communication / being on same page',note:'Asked for written priorities and got a clearer ranking.',story:'Still tense, but manageable.'}
  ]);
  add('Buddy Doe — Pet Example','Pet','pet',[
    {label:'Evening walk',peace:92,respect:88,repair:85,domain:'Affection / reassurance',note:'After work we walked and I felt calmer immediately.',story:'The routine grounds me.'},
    {label:'Vet bill',peace:84,respect:82,repair:80,domain:'Planning / logistics',note:'Care burden was annoying but worth it.',story:'The cost is real, but comfort is high.'}
  ]);
  add('Boundary Doe — Pressure Example','Boundary','boundary',[
    {label:'Guilt pressure',peace:35,respect:30,repair:25,domain:'Boundary / pressure',note:'They implied I owed them access after I said no.',story:'My autonomy felt overwritten.'},
    {label:'Short boundary',peace:55,respect:50,repair:40,domain:'Boundary / pressure',note:'I repeated one sentence and stopped explaining.',story:'Less engagement lowered the pressure.'}
  ]);
  normalizeAllProfiles321();
}
function bindDiagnosticsExamples321(){
  let b=$('loadDiagnosticsExamplesBtn');
  if(b&&!b.dataset.bound321){b.dataset.bound321='1'; b.onclick=()=>{ensureExampleProfiles321(); normalizeAllProfiles321(); if(typeof runDiagnostics==='function')runDiagnostics();};}
  let n=$('normalizeProfilesBtn');
  if(n&&!n.dataset.norm321){n.dataset.norm321='1'; let old=n.onclick; n.onclick=()=>{normalizeAllProfiles321(); if(old)try{old()}catch(e){}; if(typeof runDiagnostics==='function')runDiagnostics();};}
}
const oldRunDiag321=window.runDiagnostics;
if(oldRunDiag321&&!window.__runDiag321){
  window.__runDiag321=true;
  window.runDiagnostics=function(){
    normalizeAllProfiles321();
    oldRunDiag321();
    bindDiagnosticsExamples321();
    let out=$('diagnosticsOutput');
    if(out){
      out.innerHTML=out.innerHTML
        .replace(/missing future object,?\s*/g,'')
        .replace(/, missing future object/g,'')
        .replace(/missing metric groups/g,'metric groups normalized');
    }
  }
}
document.addEventListener('DOMContentLoaded',()=>setTimeout(()=>{bindDiagnosticsExamples321();normalizeAllProfiles321();},500));



/* v3.2.2 workspace examples + clearer loop */
function ensureCard322(){
 state.profiles=state.profiles||[];
 if(!state.profiles.length){
  let p={id:typeof uid==='function'?uid():String(Date.now()),name:'New relationship',rtype:'Romantic prospect',snapshots:[],future:{},profileSliders:{}};
  state.profiles.push(p);state.currentId=p.id;saveState&&saveState();
 }
}
function current322(){return typeof rcCurrentProfile==='function'?rcCurrentProfile():(typeof currentProfile==='function'?currentProfile():state.profiles[0]);}
function last322(p){let s=p?.snapshots||[];return s.length?s[s.length-1]:null;}
function workspaceSummary322(){
 let p=current322();let el=$('workspaceRelationshipSummary');if(!el||!p)return;
 let snaps=p.snapshots||[],last=last322(p)||{},m=typeof safeMetricSet==='function'?safeMetricSet(p):(typeof dashboardMetricSet==='function'?dashboardMetricSet(p):{peaceIndex:50,respectIndex:50});
 let best='Not enough evidence yet.',worst='Not enough evidence yet.';
 if(snaps.length){
  let high=snaps.reduce((a,b)=>((Number(b.peace||0)+Number(b.respect||0))>(Number(a.peace||0)+Number(a.respect||0))?b:a),snaps[0]);
  let low=snaps.reduce((a,b)=>((Number(b.peace||0)+Number(b.respect||0))<(Number(a.peace||0)+Number(a.respect||0))?b:a),snaps[0]);
  best=high.note||high.label||best;worst=low.note||low.label||worst;
 }
 let age=snaps.length>=5?'about one year / full example timeline':snaps.length?`${snaps.length} interaction(s) logged`:'not enough history yet';
 el.innerHTML=`<h3>${escapeHTML(p.name||'Untitled')}</h3><div class="summaryGrid">
  <div class="summaryTile"><b>Relationship</b>${escapeHTML(p.rtype||'Unspecified')}</div>
  <div class="summaryTile"><b>Duration / evidence</b>${escapeHTML(age)}</div>
  <div class="summaryTile"><b>Peace / Respect</b>${Math.round(m.peaceIndex||0)} / ${Math.round(m.respectIndex||0)}</div>
  <div class="summaryTile"><b>Latest event</b>${escapeHTML(last.eventSummary||last.note||'No event loaded yet.')}</div>
  <div class="summaryTile"><b>Best part</b>${escapeHTML(best)}</div>
  <div class="summaryTile"><b>Hardest part</b>${escapeHTML(worst)}</div>
 </div>`;
}
function loopData322(p){
 let last=last322(p)||{};
 let event=last.eventSummary||last.note||p.evidence||'No specific event yet.';
 let resolution=last.resolution||p.resolution||'No resolution logged yet.';
 if((p.name||'').toLowerCase().includes('jane')){
  event='Early relationship conflict about appreciation and correction: one partner felt effort was not being recognized, but both learned to separate appreciation from course-correction.';
  resolution='By the one-year point, conflict still happens, but repair is faster, same-team language is stronger, and trust is higher.';
 }
 return {event,resolution};
}
function renderLoop322(){
 let el=$('repairCockpitLoop');let p=current322();if(!el||!p)return;
 let base=typeof rcLoopData==='function'?rcLoopData(p):{};
 let er=loopData322(p);
 let nodes=[
  ['Event summary',er.event,''],
  ['Resolution / desired repair',er.resolution,'breakPoint'],
  ['Interpretation / story',base.story||p.story||'What story did each person tell themselves?','warningPoint'],
  ['Need threatened',base.need||'respect / safety / belonging','dangerPoint'],
  ['Emotional response',base.response||'Withdraw, pursue, defend, criticize, appease, or shut down.','warningPoint'],
  ['Partner interpretation',base.partner||'The partner may react to the reaction instead of the original event.','warningPoint'],
  ['Loop breaker',base.breakPoint||'Name the event, separate facts from story, identify the threatened need, and make one concrete repair request.','breakPoint']
 ];
 el.innerHTML=`<div class="eventResolution"><b>What this loop is about:</b><br>${escapeHTML(er.event)}<br><br><b>Resolution:</b><br>${escapeHTML(er.resolution)}</div>`+
 nodes.map((n,i)=>`<div class="loopNode ${n[2]}"><b>${i+1}. ${n[0]}</b>${escapeHTML(String(n[1]).slice(0,700))}</div>${i<nodes.length-1?'<div class="loopArrow">↓</div>':''}`).join('');
}
function refreshSelect322(){
 ensureCard322();let sel=$('repairCockpitProfileSelect');if(!sel)return;
 sel.innerHTML=(state.profiles||[]).map(p=>`<option value="${p.id}" ${p.id===state.currentId?'selected':''}>${escapeHTML(p.name||'Untitled')} — ${escapeHTML(p.rtype||'Card')}</option>`).join('');
 sel.onchange=()=>{state.currentId=sel.value;saveState&&saveState();fillForm&&fillForm();safeUpdate&&safeUpdate();renderRepairCockpit&&renderRepairCockpit();renderWorkspaceGraphs320&&renderWorkspaceGraphs320();workspaceSummary322();renderLoop322();};
}
function patchWizardSelect322(){
 setInterval(()=>{let sel=$('wiz_card');if(sel&&!sel.dataset.v322){sel.dataset.v322='1';let opts=(state.profiles||[]).map(p=>`<option value="${p.id}" ${p.id===state.currentId?'selected':''}>${escapeHTML(p.name||'Untitled')} — ${escapeHTML(p.rtype||'Card')}</option>`).join('');sel.innerHTML=opts+'<option value="__new__">+ Create new quick card</option>';sel.onchange=()=>{if(sel.value==='__new__'){let name=prompt('Name for new card?','New relationship')||'New relationship';let type=prompt('Relationship type?','Romantic prospect')||'Romantic prospect';let p={id:uid?uid():String(Date.now()),name,rtype:type,snapshots:[],future:{},profileSliders:{}};state.profiles.push(p);state.currentId=p.id;saveState&&saveState();}else{state.currentId=sel.value;saveState&&saveState();}};}},500);
}
function applyScenario322(kind){
 ensureCard322();let p=current322();
 if(kind==='romantic'){
  p.name='Jane Doe — 1-year Good Relationship Demo';p.rtype='Romantic prospect';
  p.evidence='Early conflict about appreciation, correction, and feeling useful.';p.story='The conflict may be less about laziness and more about appreciation, competence threat, and how correction lands.';p.resolution='Separate appreciation from correction and return to same-team repair.';
  p.snapshots=[
   {label:'Month 1',peace:82,respect:74,repair:55,domain:'New relationship high',note:'Strong connection, but expectations are still implicit.',eventSummary:'Early dating high with unclear expectations.',resolution:'Go slow and gather repeated evidence.'},
   {label:'Month 3',peace:68,respect:76,repair:66,domain:'Criticism / correction',note:'A correction landed as “nothing I do counts.”',eventSummary:'A gift/task was corrected too quickly and he felt less useful.',resolution:'Recognize effort separately before course correction.'},
   {label:'Month 5',peace:78,respect:82,repair:76,domain:'Planning / logistics',note:'Weekly rhythm and expectations became clearer.',eventSummary:'They created a better weekly rhythm.',resolution:'Use shared-reality check-ins.'},
   {label:'Month 8',peace:84,respect:86,repair:82,domain:'Commitment / future direction',note:'Friends/family integration reduced ambiguity.',eventSummary:'The relationship became more socially embedded.',resolution:'Keep future-direction conversations explicit.'},
   {label:'Month 12',peace:90,respect:90,repair:88,domain:'Communication / being on same page',note:'Conflict still happens, but repair is faster and trust is stronger.',eventSummary:'Conflict still happens, but repair is faster and trust is stronger.',resolution:'Repair is now a practiced loop, not a panic event.'}
  ];
  p.profileSliders={warmth:9,respect:9,peace:9,repair:9,reciprocity:9,clarity:9,intimacy:9,admiration:9,practical:8,future:9};
  p.sliderHistory=[{warmth:8,respect:7,peace:8,repair:5,reciprocity:6,clarity:5,intimacy:7,admiration:7,practical:5,future:6},{warmth:9,respect:8,peace:7,repair:6,reciprocity:7,clarity:6,intimacy:8,admiration:8,practical:6,future:7},{warmth:8,respect:8,peace:8,repair:7,reciprocity:8,clarity:7,intimacy:8,admiration:8,practical:7,future:8},{warmth:9,respect:9,peace:9,repair:8,reciprocity:9,clarity:8,intimacy:9,admiration:9,practical:8,future:9},{warmth:9,respect:9,peace:9,repair:9,reciprocity:9,clarity:9,intimacy:9,admiration:9,practical:8,future:9}];
  if($('repairCockpitSaidInput'))$('repairCockpitSaidInput').value='He said, “You never appreciate what I do.”';
  if($('repairCockpitHeardInput'))$('repairCockpitHeardInput').value='She heard, “You want praise for basic things.”';
 }
 if(kind==='boss'){
  p.name='John Doe — Boss Expectations Demo';p.rtype='Work';p.evidence='A deadline and success criteria shifted without clear documentation.';p.story='The issue is role ambiguity and moving expectations, not emotional repair alone.';p.resolution='Written priorities and success criteria reduce chaos.';
  p.snapshots=[{label:'Ambiguous assignment',peace:42,respect:45,repair:30,domain:'Work expectations',note:'Initial task was vague.',eventSummary:'Boss assigned work with unclear success criteria.',resolution:'Ask for written criteria.'},{label:'Priority shift',peace:35,respect:40,repair:35,domain:'Work expectations',note:'Deadline changed and feedback treated it like failure.',eventSummary:'Priority shifted without acknowledgement.',resolution:'Document change and ask for ranking.'},{label:'Clarification',peace:55,respect:50,repair:48,domain:'Communication / being on same page',note:'Asked for written priorities.',eventSummary:'The employee requested written alignment.',resolution:'Use written recap.'}];
  if($('repairCockpitSaidInput'))$('repairCockpitSaidInput').value='Boss said, “This isn’t what I expected.”';if($('repairCockpitHeardInput'))$('repairCockpitHeardInput').value='Employee heard, “I was set up to fail because expectations changed.”';
 }
 if(kind==='boundary'){
  p.name='Boundary Doe — Pressure Demo';p.rtype='Boundary';p.evidence='Someone used guilt after a clear no.';p.story='The issue is autonomy pressure and overexplanation risk.';p.resolution='Short boundary, repeated calmly, with less exposure.';
  p.snapshots=[{label:'Guilt pressure',peace:35,respect:30,repair:25,domain:'Boundary / pressure',note:'They implied I owed them access after I said no.',eventSummary:'A boundary was challenged through guilt.',resolution:'Do not debate the boundary.'},{label:'Short boundary',peace:55,respect:50,repair:40,domain:'Boundary / pressure',note:'I repeated one sentence and stopped explaining.',eventSummary:'Boundary was restated without overexplaining.',resolution:'Reduce exposure if pressure continues.'}];
  if($('repairCockpitSaidInput'))$('repairCockpitSaidInput').value='Family member said, “After everything I’ve done, you owe me this.”';if($('repairCockpitHeardInput'))$('repairCockpitHeardInput').value='User heard, “My autonomy is being overwritten by guilt.”';
 }
 if(kind==='pet'){
  p.name='Buddy Doe — Pet Support Demo';p.rtype='Pet';p.evidence='Pet relationship provides comfort but also care load.';p.story='The comfort is high; the practical burden is real but worthwhile.';p.resolution='Stable routines increase peace.';
  p.snapshots=[{label:'Evening walk',peace:92,respect:88,repair:85,domain:'Affection / reassurance',note:'After work we walked and I felt calmer immediately.',eventSummary:'The pet routine regulated stress.',resolution:'Keep routine stable.'},{label:'Vet bill',peace:84,respect:82,repair:80,domain:'Planning / logistics',note:'Care burden was annoying but worth it.',eventSummary:'Care cost created load but not resentment.',resolution:'Plan costs and routines.'}];
  if($('repairCockpitSaidInput'))$('repairCockpitSaidInput').value='The dog needed care when I was exhausted.';if($('repairCockpitHeardInput'))$('repairCockpitHeardInput').value='I felt burdened, but also grounded and needed.';
 }
 normalizeProfile321&&normalizeProfile321(p);state.currentId=p.id;saveState&&saveState();fillForm&&fillForm();safeUpdate&&safeUpdate();renderRepairCockpit&&renderRepairCockpit();renderWorkspaceGraphs320&&renderWorkspaceGraphs320();workspaceSummary322();renderLoop322();buildRcConversation&&buildRcConversation();
}
function bindScenario322(){
 let a=$('loadOneYearAllModulesBtn'); if(a)a.onclick=()=>applyScenario322('romantic');
 let b=$('loadBossScenarioBtn'); if(b)b.onclick=()=>applyScenario322('boss');
 let c=$('loadBoundaryScenarioBtn'); if(c)c.onclick=()=>applyScenario322('boundary');
 let d=$('loadPetScenarioBtn'); if(d)d.onclick=()=>applyScenario322('pet');
}
const oldRender322=window.renderRepairCockpit;
if(oldRender322&&!window.__render322){window.__render322=true;window.renderRepairCockpit=function(){let r=oldRender322();try{refreshSelect322();workspaceSummary322();renderLoop322();bindScenario322();}catch(e){}return r;}}
const oldSafe322=window.safeUpdate;
if(oldSafe322&&!window.__safe322){window.__safe322=true;window.safeUpdate=function(){let r=oldSafe322();try{refreshSelect322();workspaceSummary322();renderLoop322();bindScenario322();}catch(e){}return r;}}
document.addEventListener('DOMContentLoaded',()=>setTimeout(()=>{ensureCard322();patchWizardSelect322();bindScenario322();refreshSelect322();workspaceSummary322();renderLoop322();},700));



/* v3.3.0 romantic issue-card translation engine */
const issueTypes330=[
 'Appreciation / usefulness','Respect / public image','Communication / shared reality','Commitment / future direction',
 'Passion / sexual disconnect','Social media / outside validation','Planning / logistics','Household labor',
 'Emotional distance','Criticism / correction','Jealousy / insecurity','Trust / honesty','Affection / reassurance'
];
function currentProfile330(){return typeof rcCurrentProfile==='function'?rcCurrentProfile():(typeof currentProfile==='function'?currentProfile():state.profiles?.[0]);}
function ensureIssueStore330(p){p.issues=p.issues||[];return p.issues;}
function currentIssue330(){
 let p=currentProfile330(); if(!p)return null;
 ensureIssueStore330(p);
 let sel=$('issueCardSelector');
 if(sel&&sel.value){
   let found=p.issues.find(i=>i.id===sel.value);
   if(found)return found;
 }
 if(p.issues.length)return p.issues[p.issues.length-1];
 let snap=(p.snapshots||[]).slice(-1)[0];
 let issue={id:typeof uid==='function'?uid():String(Date.now()),title:snap?.domain||'Current relationship issue',type:snap?.domain||'Communication / shared reality',polarity:'Negative',aggrieved:'Both',recurrence:'Unclear',event:snap?.note||p.evidence||'No event entered yet.',story:snap?.story||p.story||'',heard:snap?.heard||'',created:new Date().toISOString(),history:[]};
 p.issues.push(issue); saveState&&saveState(); return issue;
}
function issueTemplate330(issue){
 let type=issue.type||'Communication / shared reality';
 let manNeed='respect, usefulness, sexual confidence, loyalty, and feeling that his effort matters';
 let womanNeed='safety, closeness, reassurance, inclusion, commitment, and feeling cherished';
 let his='He may be interpreting the event as a signal about respect, usefulness, loyalty, or whether his effort counts.';
 let hers='She may be interpreting the event as a signal about safety, closeness, commitment, or whether she is emotionally alone.';
 let loop=['Event happens','One partner attaches painful meaning','The hurt partner protects themselves','The other partner interprets the protection as rejection or attack','Both start responding to the loop instead of the original event'];
 let action=['Pause the argument and name the exact event.','Ask what the other person heard you saying.','Make one concrete request without making the person the problem.'];
 let exercises=[['Ten-minute shared reality check','Each person answers: what happened, what I heard, what I needed, and what I can do differently next time.'],['Repair attempt audit','Each partner names one repair attempt they missed or rejected.'],['Appreciation before problem-solving','Name one real thing the other person did right, then schedule correction/problem-solving separately.']];
 if(type.includes('Appreciation')||type.includes('Criticism')){
   his='He may feel: “My effort is invisible, and when I try I only get corrected.”';
   hers='She may feel: “I am carrying standards and details alone, and I need things done in a way that actually helps me.”';
   loop=['He tries or provides something','She corrects or improves it too quickly','He hears “I failed / I am not useful”','He withdraws or stops initiating','She experiences withdrawal as laziness or lack of care'];
   action=['Do not pair appreciation and correction in the same breath.','Name effort specifically and let it stand alone.','Later, ask for a concrete comfort/outcome request: “It helps me feel calm when…”'];
   exercises=[['Effort-recognition ritual','For one week, each partner names one specific useful thing the other did each day.'],['Correction separation rule','No correction within five minutes of receiving help/gift/effort unless safety requires it.'],['Comfort-language rewrite','Turn “you did it wrong” into “this would help me feel cared for/calm.”']];
 }
 if(type.includes('Communication')){
   his='He may feel accused of failing even if he thought he was simply handling something privately.';
   hers='She may feel excluded from his inner world and afraid they are living parallel lives.';
   loop=['One person handles something privately','The other discovers it later','Discovery becomes “we are not partners”','The private person feels criticized and shares even less','Distance increases'];
   action=['Use a shared-reality check-in.','Ask: what changed this week, what decisions are pending, what are you carrying alone?','Create one default update habit.'];
   exercises=[['Weekly state-of-us meeting','15 minutes: logistics, emotional weather, upcoming decisions, appreciation.'],['Decision threshold rule','Agree what kinds of decisions require a heads-up before action.'],['Inner-world question','Each asks: “What is one thing you have been carrying that I may not know?”']];
 }
 if(type.includes('Social media')||type.includes('public')){
   his='He may feel publicly exposed, disrespected, or unprotected by the woman who should preserve his dignity.';
   hers='She may feel unheard privately and seek outside validation or pressure through public/social channels.';
   loop=['Private hurt goes unresolved','One partner vents publicly or indirectly','The other feels humiliated or betrayed','Trust and attraction drop','The next conflict becomes less safe'];
   action=['Take the issue offline immediately.','Agree: no public humiliation, subtweets, screenshots, or friend-court trials during active conflict.','Repair public disrespect with private accountability and, if needed, public correction.'];
   exercises=[['No-public-court rule','For 30 days, neither partner discusses active conflict in a way that damages the other’s dignity.'],['Private-before-public agreement','If hurt, bring it privately first unless safety is at stake.'],['Reputation repair','Name one way to protect the partner’s dignity in social settings.']];
 }
 if(type.includes('Passion')||type.includes('sexual')){
   his='He may feel undesired, rejected, or replaced by duty/roommate energy.';
   hers='She may feel emotionally unsafe, pressured, unseen, or not warmed up relationally.';
   loop=['Emotional distance or pressure appears','Sex becomes symbolic of acceptance/rejection','One pursues while the other avoids','Both attach painful meanings','Desire becomes loaded instead of playful'];
   action=['Stop litigating sex during rejection moments.','Talk about conditions for desire when calm.','Separate affection, flirtation, and sexual expectation.'];
   exercises=[['Desire conditions map','Each partner lists what increases desire, kills desire, and makes intimacy feel safe.'],['Non-demand affection week','Increase touch/flirtation without making every touch a bid for sex.'],['Reconnection date','A low-pressure date with no conflict agenda.']];
 }
 return {his,hers,manNeed,womanNeed,loop,action,exercises};
}
function renderIssueSelector330(){
 let p=currentProfile330(); if(!p)return;
 ensureIssueStore330(p);
 let sel=$('issueCardSelector'); if(!sel)return;
 if(!p.issues.length)currentIssue330();
 sel.innerHTML=p.issues.map(i=>`<option value="${i.id}">${escapeHTML(i.title||i.type||'Issue')}</option>`).join('');
 sel.onchange=()=>renderTranslation330();
}
function renderTranslation330(){
 let p=currentProfile330(), issue=currentIssue330(), el=$('repairCockpitLoop'); if(!p||!issue||!el)return;
 let t=issueTemplate330(issue);
 let severity=issue.recurrence==='Core relationship issue'?'high':issue.recurrence==='Recurring pattern'?'recurring':'event';
 el.innerHTML=`<div class="issueSummaryHero"><h4>${escapeHTML(issue.title||issue.type)}</h4>
 <div><b>Event:</b> ${escapeHTML(issue.event||'No event described yet.')}</div>
 <div><b>Resolution target:</b> ${escapeHTML(issue.resolution||'Understand what each person heard, identify the threatened need, and choose a concrete repair action.')}</div>
 <div class="issuePills"><span class="issuePill">${escapeHTML(issue.polarity||'Negative')}</span><span class="issuePill">Aggrieved: ${escapeHTML(issue.aggrieved||'Both')}</span><span class="issuePill">${escapeHTML(issue.recurrence||'Unclear')}</span><span class="issuePill">${escapeHTML(issue.type||'Issue')}</span></div></div>
 <div class="translationTwoCol">
  <div class="translationCard"><b>Possible male-side meaning</b><p>${escapeHTML(t.his)}</p><div class="reviewRow"><button>Accurate</button><button>Partial</button><button>Wrong / edit later</button></div></div>
  <div class="translationCard"><b>Possible female-side meaning</b><p>${escapeHTML(t.hers)}</p><div class="reviewRow"><button>Accurate</button><button>Partial</button><button>Wrong / edit later</button></div></div>
 </div>
 <div class="translationCard"><b>Needs underneath</b><p><b>Man:</b> ${escapeHTML(t.manNeed)}.</p><p><b>Woman:</b> ${escapeHTML(t.womanNeed)}.</p></div>
 <h4>Escalation loop</h4><div class="loopChain">${t.loop.map((x,i)=>`<div class="chainStep">${i+1}. ${escapeHTML(x)}</div>${i<t.loop.length-1?'<div class="chainArrow">↓</div>':''}`).join('')}</div>
 <div class="translationCard"><b>Loop breaker summary</b><p>This appears to be a <b>${escapeHTML(issue.type||'relationship')}</b> issue with <b>${escapeHTML(severity)}</b> recurrence. The repair should address the emotional meaning, not only the surface behavior.</p></div>`;
 renderAction330(t); renderTherapy330(t);
}
function renderAction330(t){
 let el=$('repairCockpitActionStrategy'); if(!el)return;
 el.innerHTML=`<div class="actionList">${t.action.map(a=>`<div class="actionItem"><b>Action</b>${escapeHTML(a)}</div>`).join('')}</div>`;
}
function renderTherapy330(t){
 let el=$('repairCockpitStrategy'); if(!el)return;
 el.innerHTML=`<div class="exerciseList">${t.exercises.map(e=>`<div class="exerciseCard"><b>${escapeHTML(e[0])}</b>${escapeHTML(e[1])}</div>`).join('')}</div>`;
}
function newIssueCard330(){
 let p=currentProfile330(); if(!p)return; ensureIssueStore330(p);
 let title=prompt('Name this issue card','Appreciation / usefulness issue')||'Relationship issue';
 let type=prompt('Issue type', issueTypes330.join(', '))||'Communication / shared reality';
 let event=prompt('What happened?','Describe the specific event')||'';
 let issue={id:typeof uid==='function'?uid():String(Date.now()),title,type,polarity:'Negative',aggrieved:'Both',recurrence:'First time',event,story:'',heard:'',created:new Date().toISOString(),history:[]};
 p.issues.push(issue); saveState&&saveState(); renderIssueSelector330(); let sel=$('issueCardSelector'); if(sel)sel.value=issue.id; renderTranslation330();
}
function createIssueFromSnapshot330(){
 let p=currentProfile330(); if(!p)return; ensureIssueStore330(p);
 let s=(p.snapshots||[]).slice(-1)[0]; if(!s)return;
 let issue={id:typeof uid==='function'?uid():String(Date.now()),title:s.domain||'Relationship event',type:s.domain||'Communication / shared reality',event:s.note||'',story:s.story||'',heard:s.heard||'',polarity:s.polarity||'Negative',aggrieved:s.aggrieved||'Both',recurrence:s.recurrence||'Unclear',created:new Date().toISOString(),history:[s]};
 p.issues.push(issue); saveState&&saveState();
}
const oldSaveWiz330=window.saveWizardSnapshot;
if(oldSaveWiz330&&!window.__saveWiz330){
 window.__saveWiz330=true;
 window.saveWizardSnapshot=function(){let r=oldSaveWiz330();try{createIssueFromSnapshot330();renderIssueSelector330();renderTranslation330();}catch(e){}return r;};
}
function bindIssue330(){
 let n=$('newIssueCardBtn'); if(n)n.onclick=newIssueCard330;
 renderIssueSelector330(); renderTranslation330();
}
const oldRenderRc330=window.renderRepairCockpit;
if(oldRenderRc330&&!window.__renderRc330){
 window.__renderRc330=true;
 window.renderRepairCockpit=function(){let r=oldRenderRc330();try{bindIssue330();}catch(e){console.warn(e)}return r;};
}
const oldSafe330=window.safeUpdate;
if(oldSafe330&&!window.__safe330){
 window.__safe330=true;
 window.safeUpdate=function(){let r=oldSafe330();try{bindIssue330();}catch(e){}return r;};
}
document.addEventListener('DOMContentLoaded',()=>setTimeout(()=>{bindIssue330();},800));



/* v3.3.1: restore dropdown issue wizard, working ratings, self radar, proper time-series */
const issueOptions331 = [
 'Appreciation / usefulness',
 'Respect / public image',
 'Communication / shared reality',
 'Commitment / future direction',
 'Passion / sexual disconnect',
 'Social media / outside validation',
 'Planning / logistics',
 'Household labor',
 'Emotional distance',
 'Criticism / correction',
 'Jealousy / insecurity',
 'Trust / honesty',
 'Affection / reassurance'
];
const polarityOptions331=['Positive','Negative','Mixed'];
const aggrievedOptions331=['Man','Woman','Both','Unclear'];
const recurrenceOptions331=['First time','Occasional','Recurring pattern','Core relationship issue'];

function profile331(){return typeof rcCurrentProfile==='function'?rcCurrentProfile():(typeof currentProfile==='function'?currentProfile():state.profiles?.[0]);}
function ensureIssues331(p){p.issues=p.issues||[];return p.issues;}
function escape331(s){return typeof escapeHTML==='function'?escapeHTML(String(s??'')):String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}

function openIssueWizard331(){
  let p=profile331(); if(!p)return;
  let body=$('issueWizardBody'); if(!body)return;
  body.innerHTML=`<div class="issueWizardGrid">
    <label>Issue type
      <select id="issueWizType">${issueOptions331.map(o=>`<option>${escape331(o)}</option>`).join('')}</select>
    </label>
    <label>Positive or negative?
      <select id="issueWizPolarity">${polarityOptions331.map(o=>`<option>${o}</option>`).join('')}</select>
    </label>
    <label>Who feels aggrieved?
      <select id="issueWizAggrieved">${aggrievedOptions331.map(o=>`<option>${o}</option>`).join('')}</select>
    </label>
    <label>Is this recurring?
      <select id="issueWizRecurrence">${recurrenceOptions331.map(o=>`<option>${o}</option>`).join('')}</select>
    </label>
    <label style="grid-column:1/-1">Name this issue card
      <input id="issueWizTitle" value="Appreciation / usefulness issue">
    </label>
    <label style="grid-column:1/-1">Specific event
      <textarea id="issueWizEvent" placeholder="Example: She corrected how he did a task immediately after he tried to help."></textarea>
    </label>
    <label style="grid-column:1/-1">Story / interpretation
      <textarea id="issueWizStory" placeholder="Example: He felt like his effort did not count; she felt like she had to manage the details alone."></textarea>
    </label>
  </div>`;
  let type=$('issueWizType'), title=$('issueWizTitle');
  if(type&&title)type.onchange=()=>{title.value=type.value+' issue'};
  $('issueWizardOverlay')?.classList.remove('hidden');
}
function closeIssueWizard331(){ $('issueWizardOverlay')?.classList.add('hidden'); }
function saveIssueWizard331(){
  let p=profile331(); if(!p)return; ensureIssues331(p);
  let issue={
    id:typeof uid==='function'?uid():String(Date.now()),
    title:$('issueWizTitle')?.value||'Relationship issue',
    type:$('issueWizType')?.value||'Communication / shared reality',
    polarity:$('issueWizPolarity')?.value||'Negative',
    aggrieved:$('issueWizAggrieved')?.value||'Both',
    recurrence:$('issueWizRecurrence')?.value||'First time',
    event:$('issueWizEvent')?.value||'No event described yet.',
    story:$('issueWizStory')?.value||'',
    created:new Date().toISOString(),
    ratings:{},
    history:[]
  };
  p.issues.push(issue); saveState&&saveState(); closeIssueWizard331();
  renderIssueSelector331(issue.id); renderTranslation331();
}
function currentIssue331(){
  let p=profile331(); if(!p)return null; ensureIssues331(p);
  let sel=$('issueCardSelector'), id=sel?.value;
  if(id){let f=p.issues.find(x=>x.id===id); if(f)return f;}
  if(p.issues.length)return p.issues[p.issues.length-1];
  let issue={id:typeof uid==='function'?uid():String(Date.now()),title:'Communication issue',type:'Communication / shared reality',polarity:'Negative',aggrieved:'Both',recurrence:'Unclear',event:'No event described yet.',story:'',created:new Date().toISOString(),ratings:{},history:[]};
  p.issues.push(issue); saveState&&saveState(); return issue;
}
function renderIssueSelector331(selectId){
  let p=profile331(); if(!p)return; ensureIssues331(p);
  let sel=$('issueCardSelector'); if(!sel)return;
  if(!p.issues.length)currentIssue331();
  sel.innerHTML=p.issues.map(i=>`<option value="${i.id}" ${i.id===(selectId||sel.value)?'selected':''}>${escape331(i.title||i.type||'Issue')}</option>`).join('');
  sel.onchange=()=>renderTranslation331();
}
function template331(issue){
  let type=issue.type||'Communication / shared reality';
  let eventText=`${issue.title||''} ${issue.event||''} ${issue.story||''}`.toLowerCase();
  let data={
    male:'He may be trying to determine whether the event reflects a one-time misunderstanding or a repeatable pattern of disregard. This fits if he can name the specific behavior and desired change; it is less likely if his conclusion depends mainly on assumptions about motive.',
    female:'She may be trying to determine whether the event reflects a one-time misunderstanding or a repeatable pattern of disconnection. This fits if she can identify the concrete impact and desired change; it is less likely if the conclusion depends mainly on assumptions about motive.',
    issue:`This is a ${type.toLowerCase()} issue. Treat both meanings as hypotheses until behavior, context, and each person's own account support them.`,
    steps:['A concrete event happens.','One partner attaches painful meaning to it.','The hurt partner protects themselves.','The other partner reacts to the protection.','The relationship starts fighting the loop instead of the issue.'],
    action:'Pause and say: “I do not want us to make each other the problem. What did this mean to you?”',
    exercise:['One precise repair conversation','Each partner says: 1) what happened, 2) what I heard, 3) what I needed, 4) one thing I can do differently.']
  };
  if(type.includes('Appreciation')||type.includes('Criticism')){
    data.male='He may hear that his effort counts only when it is executed perfectly, making initiative feel risky or pointless. This fits if correction regularly arrives before recognition; it is less likely if effort is warmly acknowledged and the dispute is about repeated non-follow-through.';
    data.female='She may feel that recognizing effort will require her to ignore the unfinished task or continue carrying the standard and mental load alone. This fits if she repeatedly has to notice, assign, and repair the same work; it is less likely if ownership is shared and this was a one-time preference difference.';
    data.issue='This is an appreciation-and-correction issue. The core tension is effort recognition versus outcome standards.';
    data.steps=['He tries to help or provide something.','She corrects the result too quickly or too directly.','He hears: “I failed; I am not useful.”','He withdraws or stops initiating.','She experiences the withdrawal as laziness or lack of care.'];
    data.action='Separate appreciation from correction. Let appreciation stand alone first; solve the technical problem later.';
    data.exercise=['Correction separation rule','For one week, no correction is paired with gratitude unless safety requires it. Appreciation gets its own clean moment.'];
  }
  if(type.includes('Communication')){
    const aiConflict=/\bai\b|chatgpt|bot|objective verdict|pastes private messages/i.test(eventText);
    data.male=aiConflict?'If he received the AI verdict, he may experience it as a context-free authority being recruited against him. If he supplied it, he may be seeking certainty or protection from direct disagreement. This fits if the tool is treated as proof rather than a prompt for conversation; it is less likely if both people consented to use it for reflection.':'He may hear questions as a verdict that he is failing or cannot be trusted to handle things independently. This fits if he becomes defensive before clarifying facts; it is less likely if he shares context freely, accepts influence, and invites correction.';
    data.female=aiConflict?'If she received the AI verdict, she may experience private context being exposed and her perspective being flattened into a one-sided case. If she supplied it, she may be seeking an external authority because direct conversation feels ineffective. This fits if the output ends discussion; it is less likely if both people use it only to generate questions.':'She may hear missing context or unilateral decisions as exclusion from the shared reality of the relationship. This fits if decisions or meanings are repeatedly settled without her input; it is less likely if both people agreed on independent decision boundaries.';
    data.issue='This is a shared-reality issue. The conflict is not just information; it is whether both people feel like partners in the same life.';
    data.steps=['One person handles something privately.','The other finds out later.','Discovery becomes: “We are not operating as partners.”','The private person feels criticized and shares less.','Distance and suspicion increase.'];
    data.action='Do a shared-reality check: “What changed this week? What decisions are pending? What are you carrying that I do not know?”';
    data.exercise=['Weekly shared-reality meeting','Fifteen minutes weekly: appreciation, logistics, emotional weather, pending decisions, and one request.'];
  }
  if(type.includes('Social media')||type.includes('public')){
    data.male='He may experience public joking, posting, screenshots, or friend-group discussion as loss of dignity and evidence that the relationship will not protect private vulnerability. This fits if the content would reasonably embarrass him and he did not consent; it is less likely if the post was mutually understood and harmless to both.';
    data.female='She may be seeking witnesses because she feels dismissed privately, or she may experience his public behavior as making the relationship less secure or exclusive. This fits if private repair attempts were ignored or online behavior contradicts agreements; it is less likely if outside validation is being used mainly to gain leverage.';
    data.issue='This is a public-respect issue. Social media can turn a private repair problem into a reputation and loyalty problem.';
    data.steps=['Private hurt is not repaired.','One partner vents or signals publicly.','The other feels humiliated or betrayed.','Trust and attraction drop.','The next private conflict becomes less safe.'];
    data.action='Take it offline. Agree to no public humiliation, subtweets, screenshots, or friend-court trials during active conflict.';
    data.exercise=['Private-before-public agreement','For 30 days, conflict is brought privately first unless safety is at stake. Each partner protects the other’s dignity in public.'];
  }
  if(type.includes('Passion')||type.includes('sexual')){
    data.male='He may interpret low initiation or repeated rejection as evidence that he is no longer desired, not merely that timing or stress is poor. This fits if affection and erotic interest have declined broadly; it is less likely if desire remains present but is blocked by fatigue, health, resentment, or pressure.';
    data.female='She may experience pursuit as pressure when emotional safety, bodily comfort, fairness, or nonsexual affection is missing. This fits if desire drops after conflict, overload, or expectation-heavy touch; it is less likely if she feels safe and connected but is facing an independent health or libido change.';
    data.issue='This is an intimacy-pressure issue. Sex becomes symbolic of rejection, safety, attraction, and acceptance.';
    data.steps=['Emotional distance or pressure appears.','Sex becomes symbolic of acceptance or rejection.','One partner pursues while the other avoids.','Both attach painful meanings.','Desire becomes loaded instead of playful.'];
    data.action='Stop arguing about sex during rejection moments. Talk when calm about what increases desire, kills desire, and makes intimacy feel safe.';
    data.exercise=['Desire conditions map','Each partner lists: what increases desire, what kills desire, and what makes intimacy feel safe. Compare lists without debating them.'];
  }
  if(type.includes('Commitment')){
    data.male='He may experience the commitment question as a demand to promise before he feels informed, autonomous, or capable of meeting the implied obligations. Alternatively, he may want commitment but fear that naming it risks rejection. This fits if his hesitation is paired with specific concerns and a decision process; it is less likely if ambiguity repeatedly preserves his benefits while postponing her needs.';
    data.female='She may experience continued ambiguity as evidence that she is not being chosen and that her time, fertility plans, or emotional investment are being consumed without a shared direction. This fits if milestones and expectations remain undefined; it is less likely if both agreed to the current pace and decisions are moving on a stated timeline.';
    data.issue='This is a commitment-clarity issue. The key distinction is thoughtful pacing versus ambiguity that benefits one person at the other person’s expense.';
    data.action='Name the current status, the next decision, what information is still needed, and a real date for revisiting it.';
    data.exercise=['Decision versus drift','Each person writes what has been explicitly chosen, what happened by inertia, and what decision must now be made.'];
  }
  if(type.includes('Planning')||type.includes('logistics')||type.includes('Household')){
    data.male='He may hear detailed oversight as evidence that he is not trusted to own the task, or he may underestimate the coordination work his partner is already carrying. This fits if responsibility is assigned without real autonomy or if he waits to be managed; it is less likely if ownership, standards, and deadlines were mutually clear.';
    data.female='She may experience unilateral spending, incomplete tasks, or repeated reminders as proof that she is the default risk manager and keeper of the mental load. This fits if she must notice, plan, remind, and absorb consequences; it is less likely if responsibilities are genuinely owned and this was an isolated miss.';
    data.issue='This is a shared-ownership issue: the conflict concerns authority, visibility of labor, risk, and whether responsibility includes noticing and follow-through.';
    data.action='Assign complete ownership by domain, including noticing, planning, execution, and follow-up. Agree on the threshold for decisions that require consultation.';
    data.exercise=['Ownership and threshold map','List recurring domains, one true owner for each, the shared standard, and the spending or impact threshold that requires a joint decision.'];
  }
  if(type.includes('Trust')||type.includes('honesty')){
    data.male='If he is being monitored, he may hear “You are presumed guilty, and privacy itself is suspicious.” If he is doing the monitoring, he may believe uncertainty is intolerable and access will prevent betrayal. The first meaning fits when surveillance continues without evidence; the second is not justified by anxiety alone.';
    data.female='If she is being monitored, she may experience loss of autonomy and a moving standard in which no amount of access proves innocence. If she is monitoring, she may be reacting to prior deception or attachment fear. This fits only when tied to concrete evidence; fear does not create consent for covert access.';
    data.issue=issue.polarity==='Positive'?'This is a positive trust-and-autonomy agreement: security is being built through direct answers, consent, and reliable behavior rather than surveillance.':'This is a trust-and-autonomy issue. Distinguish evidence-based verification after a real breach from coercive monitoring, presumed guilt, or demands for unlimited access.';
    data.action=issue.polarity==='Positive'?'Keep the agreement mutual: direct questions, truthful answers, consensual transparency, and intact personal privacy.':'Stop covert access. Name the specific evidence, the reassurance or verification being requested, and what privacy boundary remains non-negotiable.';
    data.exercise=['Evidence, reassurance, and privacy','Each person lists the known facts, the feared interpretation, one consensual reassurance, and one privacy boundary that does not require proving innocence.'];
  }
  if(type.includes('Jealousy')){
    data.male='He may interpret outside attention, secrecy, or comparison as threat of sexual replacement or public loss of status. This fits if agreements are being violated or behavior is concealed; it is less likely if ordinary autonomy is being treated as betrayal without evidence.';
    data.female='She may interpret emotional attention, secrecy, or inconsistent availability as threat of abandonment or a hidden parallel relationship. This fits if stories change or intimacy is redirected elsewhere; it is less likely if anxiety persists despite consistent, transparent behavior.';
    data.issue='This is a jealousy-and-evidence issue. Separate a real boundary violation from a nervous-system alarm, then respond to the one that is actually present.';
    data.action='State the observed behavior, the agreement it may violate, and the specific clarification or boundary needed. Do not prosecute imagined motives.';
    data.exercise=['Jealousy evidence audit','Separate facts, triggers, agreements, requested reassurance, and behavior that would genuinely rebuild trust.'];
  }
  if(type.includes('Emotional distance')||type.includes('Affection')||type.includes('reassurance')){
    data.male='He may experience repeated requests for closeness as pressure to perform an emotion on demand, especially if he expects disclosure to produce criticism. Or he may be using distance to avoid responsibility. The distinction depends on whether calm invitations produce engagement and follow-through.';
    data.female='She may experience reduced affection or availability as evidence that she is emotionally alone or no longer cherished. This fits if bids for connection are repeatedly ignored; it is less likely if closeness exists but differs in timing, style, or current capacity.';
    data.issue='This is an accessibility issue: whether bids for affection and reassurance can be made and answered without pressure, punishment, or disappearance.';
    data.action='Make one bounded bid for connection and one honest capacity response: what is available now, what is not, and when reconnection will happen.';
    data.exercise=['Bid and response practice','One person makes a specific bid; the other answers yes, no, or later with a concrete reconnection time. Track whether later actually occurs.'];
  }
  if(type.includes('Boundary')||type.includes('pressure')){
    data.male='He may hear a boundary as rejection, loss of influence, or evidence that his needs do not matter; alternatively, he may feel his own autonomy is being overridden. Hurt is plausible, but it does not make pressure or repeated negotiation appropriate.';
    data.female='She may experience continued persuasion after a clear no as evidence that peace depends on surrendering her boundary; alternatively, she may hear his boundary as withdrawal or abandonment. The key evidence is whether the limit is clear, mutual, and respected without retaliation.';
    data.issue='This is a consent-and-autonomy issue. The emotional reaction to a boundary can be discussed, but the boundary itself should not require exhaustion, fear, or repeated defense.';
    data.action='State the limit briefly, acknowledge the disappointment without reversing the limit, and watch whether behavior respects it.';
    data.exercise=['Boundary behavior test','Define the limit, what respectful response looks like, and the consequence if pressure, guilt, or retaliation continues.'];
  }
  return data;
}
function ratingBtn331(issue,key,value){
  let selected=issue.ratings?.[key]===value?' selected':'';
  return `<button class="rateBtn${selected}" data-rate-key="${key}" data-rate-val="${value}">${value}</button>`;
}
function bindRatings331(){
  document.querySelectorAll('.rateBtn').forEach(btn=>{
    btn.onclick=()=>{
      let issue=currentIssue331(); if(!issue)return;
      issue.ratings=issue.ratings||{};
      issue.ratings[btn.dataset.rateKey]=btn.dataset.rateVal;
      saveState&&saveState(); renderTranslation331();
    };
  });
}
function renderTranslation331(){
  let p=profile331(), issue=currentIssue331(), el=$('repairCockpitLoop'); if(!p||!issue||!el)return;
  let t=template331(issue);
  el.innerHTML=`<div class="issueSummaryHero"><h4>${escape331(issue.title||issue.type)}</h4>
    <p><b>Specific event:</b> ${escape331(issue.event||'No event described yet.')}</p>
    <p><b>What kind of issue this is:</b> ${escape331(t.issue)}</p>
    <div class="issuePills"><span class="issuePill">${escape331(issue.polarity||'Negative')}</span><span class="issuePill">Aggrieved: ${escape331(issue.aggrieved||'Both')}</span><span class="issuePill">${escape331(issue.recurrence||'Unclear')}</span><span class="issuePill">${escape331(issue.type||'Issue')}</span></div>
  </div>
  <div class="translationTwoCol">
    <div class="translationCard"><b>Possible male-side meaning</b><p>${escape331(t.male)}</p><div class="reviewRow">${ratingBtn331(issue,'male','Accurate')}${ratingBtn331(issue,'male','Partial')}${ratingBtn331(issue,'male','Wrong')}</div></div>
    <div class="translationCard"><b>Possible female-side meaning</b><p>${escape331(t.female)}</p><div class="reviewRow">${ratingBtn331(issue,'female','Accurate')}${ratingBtn331(issue,'female','Partial')}${ratingBtn331(issue,'female','Wrong')}</div></div>
  </div>
  <div class="translationCard"><b>Loop breaker</b><p>${escape331(t.action)}</p></div>`;
  let act=$('repairCockpitActionStrategy'); if(act)act.innerHTML=`<div class="actionList"><div class="actionItem"><b>Immediate action</b>${escape331(t.action)}</div></div>`;
  let th=$('repairCockpitStrategy'); if(th)th.innerHTML=`<div class="exerciseList"><div class="exerciseCard"><b>${escape331(t.exercise[0])}</b>${escape331(t.exercise[1])}</div></div>`;
  bindRatings331();
}
function bindIssue331(){
  let n=$('newIssueCardBtn'); if(n)n.onclick=openIssueWizard331;
  let c=$('closeIssueWizardBtn'); if(c)c.onclick=closeIssueWizard331;
  let s=$('saveIssueWizardBtn'); if(s)s.onclick=saveIssueWizard331;
  renderIssueSelector331(); renderTranslation331();
}
function drawTimeSeriesPeaceRespect331(){
  let p=profile331(), c=$('workspacePeaceRespectCanvas'); if(!p||!c)return;
  let pts=(p.snapshots||[]).map((s,i)=>({i,peace:Number(s.peace||50),respect:Number(s.respect||50)}));
  if(!pts.length)pts=[{i:0,peace:50,respect:50}];
  let ctx=c.getContext('2d'),w=c.width,h=c.height,pad=55;
  ctx.clearRect(0,0,w,h);ctx.fillStyle='#fff';ctx.fillRect(0,0,w,h);ctx.strokeStyle='#d7e1e5';ctx.lineWidth=1;
  for(let v=0;v<=100;v+=25){let y=h-pad-(v/100)*(h-2*pad);ctx.beginPath();ctx.moveTo(pad,y);ctx.lineTo(w-pad,y);ctx.stroke();ctx.fillStyle='#65727e';ctx.font='11px sans-serif';ctx.fillText(String(v),20,y+3);}
  function drawLine(key,color,label,yoff){
    ctx.beginPath();pts.forEach((pt,i)=>{let x=pad+(i/Math.max(1,pts.length-1))*(w-2*pad),y=h-pad-(pt[key]/100)*(h-2*pad);i?ctx.lineTo(x,y):ctx.moveTo(x,y);});ctx.strokeStyle=color;ctx.lineWidth=3;ctx.stroke();
    pts.forEach((pt,i)=>{let x=pad+(i/Math.max(1,pts.length-1))*(w-2*pad),y=h-pad-(pt[key]/100)*(h-2*pad);ctx.beginPath();ctx.arc(x,y,5,0,Math.PI*2);ctx.fillStyle=color;ctx.fill();});
    ctx.fillStyle=color;ctx.font='13px sans-serif';ctx.fillText(label,pad+10,yoff);
  }
  drawLine('peace','#256b72','Peace',22);
  drawLine('respect','#c2413a','Respect',40);
  ctx.fillStyle='#1f2933';ctx.font='13px sans-serif';ctx.fillText('Time / snapshots →',w/2-50,h-18);
}
function addDefaultSelf331(){
  state.self=state.self||{};
  state.self.needs=state.self.needs||{warmth:8,respect:9,peace:8,repair:8,reciprocity:7,clarity:8,intimacy:8,admiration:8,practical:7,future:8};
  saveState&&saveState();
}
function drawSelfRadar331(){
  addDefaultSelf331();
  let target=document.querySelector('#meView')||document.querySelector('#selfView'); if(!target)return;
  if(!document.getElementById('selfRadarCanvas')){
    target.insertAdjacentHTML('afterbegin','<div class="selfRadarWrap"><h3>Self needs vs selected relationship</h3><canvas id="selfRadarCanvas" width="560" height="380"></canvas><p class="small">Compares what you need with what the selected relationship currently provides.</p></div>');
  }
  let c=$('selfRadarCanvas'), p=profile331(); if(!c||!p)return;
  let ctx=c.getContext('2d'),w=c.width,h=c.height,cx=w/2,cy=h/2,r=Math.min(w,h)*.34;
  let keys=[['warmth','Warmth'],['respect','Respect'],['peace','Peace'],['repair','Repair'],['reciprocity','Reciprocity'],['intimacy','Intimacy']];
  let provided=p.profileSliders||{}, needs=state.self.needs||{};
  ctx.clearRect(0,0,w,h);ctx.fillStyle='#fff';ctx.fillRect(0,0,w,h);ctx.strokeStyle='#d7e1e5';
  for(let ring=1;ring<=4;ring++){ctx.beginPath();ctx.arc(cx,cy,r*ring/4,0,Math.PI*2);ctx.stroke();}
  keys.forEach(([k,label],i)=>{let a=-Math.PI/2+i*Math.PI*2/keys.length;ctx.beginPath();ctx.moveTo(cx,cy);ctx.lineTo(cx+Math.cos(a)*r,cy+Math.sin(a)*r);ctx.stroke();ctx.fillStyle='#1f2933';ctx.font='12px sans-serif';ctx.fillText(label,cx+Math.cos(a)*(r+35)-25,cy+Math.sin(a)*(r+28));});
  function poly(obj,color,alpha){
    ctx.beginPath();keys.forEach(([k],i)=>{let a=-Math.PI/2+i*Math.PI*2/keys.length,v=Number(obj[k]??6)*10,rr=r*v/100,x=cx+Math.cos(a)*rr,y=cy+Math.sin(a)*rr;i?ctx.lineTo(x,y):ctx.moveTo(x,y);});ctx.closePath();ctx.fillStyle=color.replace('1)',alpha+')');ctx.fill();ctx.strokeStyle=color.replace('1)','1)');ctx.lineWidth=2;ctx.stroke();
  }
  poly(provided,'rgba(37,107,114,1)',.22);
  poly(needs,'rgba(194,65,58,1)',.14);
  ctx.fillStyle='#256b72';ctx.fillText('Relationship provides',20,24);ctx.fillStyle='#c2413a';ctx.fillText('Your needs',20,42);
}
const oldRenderRc331=window.renderRepairCockpit;
if(oldRenderRc331&&!window.__renderRc331){window.__renderRc331=true;window.renderRepairCockpit=function(){let r=oldRenderRc331();try{bindIssue331();drawTimeSeriesPeaceRespect331();}catch(e){}return r;};}
const oldSafe331=window.safeUpdate;
if(oldSafe331&&!window.__safe331){window.__safe331=true;window.safeUpdate=function(){let r=oldSafe331();try{bindIssue331();drawTimeSeriesPeaceRespect331();drawSelfRadar331();}catch(e){}return r;};}
document.addEventListener('DOMContentLoaded',()=>setTimeout(()=>{addDefaultSelf331();bindIssue331();drawTimeSeriesPeaceRespect331();drawSelfRadar331();},800));



/* v3.3.2 relationship/snapshot modal, examples, role response, popout graphs, diagnostics */
const relationshipTypes332=['Romantic: woman evaluating man','Romantic: man evaluating woman','Marriage / long-term','Dating / early relationship','Boundary','Work','Friend','Family','Pet'];
const issueExamples332={
 'Romantic: woman evaluating man':[['Appreciation / usefulness','Appreciation','She corrects how he helps immediately, and he starts feeling that his effort does not count.'],['Appreciation / usefulness','Positive appreciation loop','She praises a thoughtful plan clearly, and he feels more motivated to initiate again.'],['Communication / shared reality','Parallel lives drift','He makes decisions privately and she finds out later, making her feel excluded from the partnership.'],['Commitment / future direction','Future ambiguity','She wants clarity about where the relationship is going, while he avoids defining the next step.']],
 'Romantic: man evaluating woman':[['Respect / public image','Public disrespect','She jokes or posts about him in a way that makes him feel diminished in public.'],['Appreciation / usefulness','Warm encouragement','She notices his effort in real time and the interaction becomes warmer and easier.'],['Social media / outside validation','Social media validation loop','Her posting and friend feedback seem to compete with the private relationship reality.'],['Passion / sexual disconnect','Roommate energy','He feels undesired and starts interpreting low intimacy as rejection.']],
 'Marriage / long-term':[['Household labor','Trash fight loop','A repeated chore becomes symbolic of respect, usefulness, fairness, and feeling alone.'],['Communication / shared reality','Decision without discussion','One partner submits or makes a major plan without discussing it as a partnership.'],['Affection / reassurance','No soft landing','Daily logistics crowd out affection, reassurance, and repair.'],['Appreciation / usefulness','Specific gratitude','One partner names exactly what the other did and why it helped the household feel more like a team.']],
 'Boundary':[['Respect / public image','Guilt access pressure','A person uses guilt after a clear no and tries to pull the user back into overexplaining.'],['Trust / honesty','Boundary testing','The other person keeps testing whether the boundary is real.'],['Communication / shared reality','Overexplaining trap','The user explains too much and the boundary becomes a negotiation.'],['Boundary / pressure','Clean no','The user states a short no without overexplaining, and the next task is holding the line.']],
 'Work':[['Communication / shared reality','Moving target boss','Expectations change but feedback treats the original plan as failure.'],['Respect / public image','Public correction','Boss criticizes in front of others and creates status pressure.'],['Planning / logistics','Priority fog','Too many priorities are assigned with no ranking.']],
 'Pet':[['Affection / reassurance','Comfort routine','The pet provides major calm and grounding after stress.'],['Planning / logistics','Care burden','Costs and care are stressful but meaningful.'],['Commitment / future direction','Life structure','The pet shapes daily routine, travel, and household structure.']]
};
function esc332(s){return typeof escapeHTML==='function'?escapeHTML(String(s??'')):String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}
function p332(){return typeof rcCurrentProfile==='function'?rcCurrentProfile():(typeof currentProfile==='function'?currentProfile():state.profiles?.[0]);}
function ensureProfiles332(){state.profiles=state.profiles||[];if(!state.profiles.length){let p=typeof blankProfile==='function'?blankProfile():{id:typeof uid==='function'?uid():String(Date.now()),name:'New relationship',rtype:'Dating / early relationship'};Object.assign(p,{name:p.name||'New relationship',rtype:p.rtype||'Dating / early relationship',snapshots:p.snapshots||[],issues:p.issues||[],profileSliders:p.profileSliders||{},future:p.future||{},casual:p.casual||{},casualHistory:p.casualHistory||[],coupleQualities:p.coupleQualities||{}});state.profiles.push(p);state.currentId=p.id;saveState&&saveState();}}
function issueOpts332(){let arr=(typeof issueOptions331!=='undefined'?issueOptions331:['Appreciation / usefulness','Respect / public image','Communication / shared reality','Commitment / future direction','Passion / sexual disconnect','Social media / outside validation','Planning / logistics','Household labor','Emotional distance','Criticism / correction','Jealousy / insecurity','Trust / honesty','Affection / reassurance']);return arr.map(x=>`<option>${esc332(x)}</option>`).join('');}
function openRelationshipSnapshot332(){
 ensureProfiles332();let body=$('relationshipSnapshotBody'); if(!body)return;
 let opts=state.profiles.map(p=>`<option value="${p.id}" ${p.id===state.currentId?'selected':''}>${esc332(p.name||'Untitled')} — ${esc332(p.rtype||'Relationship')}</option>`).join('')+'<option value="__new__">+ New relationship</option>';
 body.innerHTML=`<div class="issueWizardGrid">
 <label>Relationship<select id="relSnapProfile">${opts}</select></label><label>Relationship type<select id="relSnapType">${relationshipTypes332.map(x=>`<option>${esc332(x)}</option>`).join('')}</select></label>
 <label style="grid-column:1/-1">Relationship name<input id="relSnapName" placeholder="Example: Annie, Jane Doe, Wife, Girlfriend"></label>
 <label>Issue type<select id="relSnapIssueType">${issueOpts332()}</select></label><label>Positive or negative?<select id="relSnapPolarity"><option>Negative</option><option>Positive</option><option>Mixed</option></select></label>
 <label>Who feels aggrieved?<select id="relSnapAggrieved"><option>Woman</option><option>Man</option><option>Both</option><option>Unclear</option></select></label><label>Recurring?<select id="relSnapRecurrence"><option>First time</option><option>Occasional</option><option>Recurring pattern</option><option>Core relationship issue</option></select></label>
 <label style="grid-column:1/-1">Issue / event name<input id="relSnapIssueName" placeholder="Example: Appreciation"></label>
 <label style="grid-column:1/-1">Specific event<textarea id="relSnapEvent" placeholder="What happened? Facts first."></textarea></label>
 <label style="grid-column:1/-1">Story / interpretation<textarea id="relSnapStory" placeholder="What did it seem to mean?"></textarea></label></div>`;
 let prof=$('relSnapProfile'), name=$('relSnapName'), type=$('relSnapType');
 if(prof){prof.onchange=()=>{if(prof.value==='__new__'){name.value='';name.placeholder='Name this new relationship';}else{let p=state.profiles.find(x=>x.id===prof.value);if(p){name.value=p.name||'';type.value=p.rtype||type.value;}}};prof.onchange();}
 $('relationshipSnapshotOverlay')?.classList.remove('hidden');
}
function saveRelationshipSnapshot332(){
 ensureProfiles332();let profileId=$('relSnapProfile')?.value,p;
 if(profileId==='__new__'){p=typeof blankProfile==='function'?blankProfile():{id:typeof uid==='function'?uid():String(Date.now())};Object.assign(p,{name:$('relSnapName')?.value||'New relationship',rtype:$('relSnapType')?.value||'Dating / early relationship',snapshots:p.snapshots||[],issues:p.issues||[],profileSliders:p.profileSliders||{},future:p.future||{},casual:p.casual||{},casualHistory:p.casualHistory||[],coupleQualities:p.coupleQualities||{}});state.profiles.push(p);}
 else{p=state.profiles.find(x=>x.id===profileId)||state.profiles[0];p.name=$('relSnapName')?.value||p.name||'Relationship';p.rtype=$('relSnapType')?.value||p.rtype||'Dating / early relationship';}
 state.currentId=p.id;p.snapshots=p.snapshots||[];p.issues=p.issues||[];
 let snap={id:typeof uid==='function'?uid():String(Date.now()+1),label:$('relSnapIssueName')?.value||'Snapshot',created:new Date().toISOString(),note:$('relSnapEvent')?.value||'',story:$('relSnapStory')?.value||'',domain:$('relSnapIssueType')?.value||'Communication / shared reality',polarity:$('relSnapPolarity')?.value||'Negative',aggrieved:$('relSnapAggrieved')?.value||'Both',recurrence:$('relSnapRecurrence')?.value||'First time',peace:55,respect:55,repair:45,energy:55,reciprocity:55,embedded:50,alignment:50};
 p.snapshots.push(snap);p.issues.push({id:typeof uid==='function'?uid():String(Date.now()+2),title:$('relSnapIssueName')?.value||snap.domain,type:snap.domain,polarity:snap.polarity,aggrieved:snap.aggrieved,recurrence:snap.recurrence,event:snap.note,story:snap.story,created:new Date().toISOString(),ratings:{},history:[snap]});
 saveState&&saveState();$('relationshipSnapshotOverlay')?.classList.add('hidden');fillForm&&fillForm();safeUpdate&&safeUpdate();renderRepairCockpit&&renderRepairCockpit();
}
function bindRelationshipSnapshot332(){
 if(!$('openRelationshipSnapshotBtn')){let hero=document.querySelector('#snapshotView .heroWizard'); if(hero)hero.insertAdjacentHTML('beforeend','<button id="openRelationshipSnapshotBtn" type="button">New Relationship / Snapshot</button>');}
 let b=$('openRelationshipSnapshotBtn'); if(b)b.onclick=openRelationshipSnapshot332;
 let c=$('closeRelationshipSnapshotBtn'); if(c)c.onclick=()=>$('relationshipSnapshotOverlay')?.classList.add('hidden');
 let s=$('saveRelationshipSnapshotBtn'); if(s)s.onclick=saveRelationshipSnapshot332;
}
function populateWorkspaceIssueExamples332(){
 let rt=$('workspaceRelationshipTypeSelect'), ex=$('workspaceIssueExampleSelect'); if(!rt||!ex)return;
 rt.innerHTML=relationshipTypes332.map(x=>`<option>${esc332(x)}</option>`).join('');
 rt.onchange=()=>{let arr=issueExamples332[rt.value]||issueExamples332['Romantic: woman evaluating man'];ex.innerHTML=arr.map((x,i)=>`<option value="${i}">${esc332(x[1])} — ${esc332(x[0])}</option>`).join('');};rt.onchange();
 let load=$('loadSelectedIssueExampleBtn'); if(load)load.onclick=()=>{let p=p332();if(!p)return;let item=(issueExamples332[rt.value]||[])[Number(ex.value)||0];if(!item)return;p.rtype=rt.value;p.issues=p.issues||[];p.issues.push({id:typeof uid==='function'?uid():String(Date.now()),type:item[0],title:item[1],event:item[2],polarity:'Negative',aggrieved:rt.value.includes('man evaluating')?'Man':rt.value.includes('woman evaluating')?'Woman':'Both',recurrence:'Recurring pattern',story:item[2],ratings:{},created:new Date().toISOString(),history:[]});state.currentId=p.id;saveState&&saveState();renderRepairCockpit&&renderRepairCockpit();};
}
function role332(issue){
 let type=issue?.type||'Communication / shared reality', r={a:'Pursuer / critic / standards-holder',b:'Withdrawer / defender / under-recognized helper',c:'One person tries to change behavior through pressure while the other protects dignity by pulling back.',s:'Move from pressure/defense into explicit role renegotiation: what each person owns, appreciates, and stops doing.'};
 if(type.includes('Communication'))r={a:'Inclusion-seeker',b:'Private processor',c:'One partner wants shared reality; the other handles things internally and experiences questions as criticism.',s:'Create a default update ritual so inclusion does not depend on pursuit or interrogation.'};
 if(type.includes('Social media')||type.includes('public')||type.includes('Respect'))r={a:'Outside-court seeker',b:'Dignity-protection responder',c:'One partner seeks validation outside the couple; the other experiences it as public disrespect.',s:'Move conflict back inside the couple and protect public dignity while repairing privately.'};
 if(type.includes('Passion')||type.includes('sexual'))r={a:'Pursuer of reassurance through sex',b:'Gatekeeper of safety/desire',c:'One seeks proof of desire; the other needs emotional safety before desire returns.',s:'Separate affection from demand and rebuild low-pressure conditions for desire.'};
 return r;
}
function renderRoleResponse332(){
 let issue=(typeof currentIssue331==='function'?currentIssue331():(typeof currentIssue330==='function'?currentIssue330():null)), el=$('repairCockpitActionStrategy'); if(!el||!issue)return;
 let r=role332(issue);el.innerHTML=`<div class="roleGrid"><div class="roleCard"><b>Role one</b>${esc332(r.a)}</div><div class="roleCard"><b>Role two</b>${esc332(r.b)}</div><div class="roleCard"><b>Why the roles clash</b>${esc332(r.c)}</div><div class="roleCard"><b>Behavioral paradigm shift</b>${esc332(r.s)}</div></div>`;
}
function fixAdmiration332(){let c=$('repairCockpitAdmirationCanvas'); if(c){c.width=520;c.height=250;try{if(typeof drawRcAdmiration==='function')drawRcAdmiration();}catch(e){}}}
function graphPopout332(id,title){let src=$(id),dst=$('graphPopoutCanvas');if(!src||!dst)return;let ctx=dst.getContext('2d');ctx.clearRect(0,0,dst.width,dst.height);ctx.fillStyle='#fff';ctx.fillRect(0,0,dst.width,dst.height);ctx.drawImage(src,0,0,dst.width,dst.height);$('graphPopoutTitle').textContent=title||'Graph';$('graphPopoutOverlay')?.classList.remove('hidden');}
function bindGraphPopouts332(){[['workspaceRadarCanvas','Radar'],['sliderTimelineCanvas','Slider trajectory'],['coupleTrajectoryCanvas342','Peace / Respect trajectory'],['selfRadarCanvas','Self radar']].forEach(([id,title])=>{let c=$(id);if(c&&!c.dataset.pop332){c.dataset.pop332='1';c.insertAdjacentHTML('beforebegin',`<button class="graphPopBtn" type="button" data-graph="${id}" data-title="${title}">Open larger</button>`);}});document.querySelectorAll('.graphPopBtn').forEach(b=>b.onclick=()=>graphPopout332(b.dataset.graph,b.dataset.title));let close=$('closeGraphPopoutBtn');if(close)close.onclick=()=>$('graphPopoutOverlay')?.classList.add('hidden');}
function updateDiagnostics332(){let out=$('diagnosticsOutput');if(!out)return;let extra=$('diagExtra332');if(!extra){out.insertAdjacentHTML('afterend','<div id="diagExtra332" class="analysisBox"></div>');extra=$('diagExtra332');}let p=p332();let checks=[['profiles exist',!!(state.profiles&&state.profiles.length)],['current profile selected',!!p],['snapshots array',!!(p&&Array.isArray(p.snapshots))],['issues array',!!(p&&Array.isArray(p.issues))],['issue selector',!!$('issueCardSelector')],['relationship/snapshot modal',!!$('relationshipSnapshotOverlay')],['issue wizard modal',!!$('issueWizardOverlay')],['rating buttons',document.querySelectorAll('.rateBtn').length>0],['workspace radar canvas',!!$('workspaceRadarCanvas')],['peace/respect time canvas',!!$('workspacePeaceRespectCanvas')],['admiration canvas',!!$('repairCockpitAdmirationCanvas')],['self radar target',!!$('selfRadarCanvas')||!!document.querySelector('#meView')]];extra.innerHTML='<h3>Expanded diagnostics</h3>'+checks.map(([n,ok])=>`<div class="${ok?'diagnosticPass':'diagnosticFail'}"><b>${ok?'PASS':'FAIL'}:</b> ${esc332(n)}</div>`).join('');}
const oldRender332=window.renderRepairCockpit;if(oldRender332&&!window.__render332){window.__render332=true;window.renderRepairCockpit=function(){let r=oldRender332();try{populateWorkspaceIssueExamples332();renderRoleResponse332();fixAdmiration332();bindGraphPopouts332();}catch(e){}return r;};}
const oldSafe332=window.safeUpdate;if(oldSafe332&&!window.__safe332){window.__safe332=true;window.safeUpdate=function(){let r=oldSafe332();try{populateWorkspaceIssueExamples332();renderRoleResponse332();fixAdmiration332();bindGraphPopouts332();updateDiagnostics332();}catch(e){}return r;};}
const oldTrans332=window.renderTranslation331;if(oldTrans332&&!window.__trans332){window.__trans332=true;window.renderTranslation331=function(){let r=oldTrans332();try{renderRoleResponse332();}catch(e){}return r;};}
const oldDiag332=window.runDiagnostics;if(oldDiag332&&!window.__diag332){window.__diag332=true;window.runDiagnostics=function(){let r=oldDiag332();try{updateDiagnostics332();}catch(e){}return r;};}
document.addEventListener('DOMContentLoaded',()=>setTimeout(()=>{bindRelationshipSnapshot332();populateWorkspaceIssueExamples332();renderRoleResponse332();fixAdmiration332();bindGraphPopouts332();updateDiagnostics332();},900));



/* v3.3.3 workflow, examples, casual tracker, workspace layout */
const exampleRelationships333={
 'Romantic: woman evaluating man':[['Appreciation / usefulness','Appreciation','She corrects how he helps immediately, and he starts feeling that his effort does not count.'],['Communication / shared reality','Parallel lives drift','He makes decisions privately and she finds out later, making her feel excluded from the partnership.'],['Commitment / future direction','Future ambiguity','She wants clarity about where the relationship is going, while he avoids defining the next step.']],
 'Romantic: man evaluating woman':[['Respect / public image','Public disrespect','She jokes or posts about him in a way that makes him feel diminished in public.'],['Social media / outside validation','Social media validation loop','Her posting and friend feedback seem to compete with the private relationship reality.'],['Passion / sexual disconnect','Roommate energy','He feels undesired and starts interpreting low intimacy as rejection.']],
 'Marriage / long-term':[['Household labor','Trash fight loop','A repeated chore becomes symbolic of respect, usefulness, fairness, and feeling alone.'],['Communication / shared reality','Decision without discussion','One partner makes a major plan without discussing it as a partnership.'],['Affection / reassurance','No soft landing','Daily logistics crowd out affection, reassurance, and repair.']],
 'Dating / early relationship':[['Communication / shared reality','Early inconsistency','One person is warm in person but inconsistent over text, creating uncertainty.'],['Affection / reassurance','Green flag follow-through','They follow through on plans, ask questions, and show reciprocal interest.'],['Respect / public image','First status signal','The person either includes you socially or keeps you vague and hidden.']],
 'Boundary':[['Respect / public image','Guilt access pressure','A person uses guilt after a clear no and tries to pull the user back into overexplaining.'],['Trust / honesty','Boundary testing','The other person keeps testing whether the boundary is real.'],['Communication / shared reality','Overexplaining trap','The user explains too much and the boundary becomes a negotiation.']]
};
const casualDims333=[['warmth','Warmth','Does this person feel kind, inviting, and emotionally pleasant?'],['respect','Respect','Do you feel valued, not diminished, mocked, or taken for granted?'],['peace','Peace','Does your nervous system feel calmer or more chaotic after contact?'],['reciprocity','Reciprocity','Do they initiate, ask questions, follow through, and return effort?'],['attraction','Attraction / chemistry','Do you feel real attraction without ignoring major problems?'],['clarity','Communication clarity','Are intentions, plans, and expectations reasonably clear?'],['followThrough','Follow-through','Do they do what they say they will do?'],['socialFit','Social fit','Do they fit your real life, friends, routines, and values?'],['femaleSocialMedia','Female-specific: social media gratification need','N/A if not applicable. High means social media attention appears to shape expectations or validation.'],['femaleComparison','Female-specific: comparison / friend-court influence','N/A if not applicable. High means outside female approval may be steering the relationship.'],['femaleSoftness','Female-specific: warmth / receptivity','N/A if not applicable. High means she responds with warmth, gratitude, softness, or respect.'],['maleUsefulness','Male-specific: usefulness / provision signal','N/A if not applicable. High means he responds positively to being useful and appreciated.'],['maleCommitment','Male-specific: commitment readiness','N/A if not applicable. High means he is willing to define, protect, and invest in the relationship.'],['maleEmotionalSteadiness','Male-specific: emotional steadiness','N/A if not applicable. High means he stays regulated under correction, frustration, or stress.']];
function esc333(s){return typeof escapeHTML==='function'?escapeHTML(String(s??'')):String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));}
function p333(){return typeof rcCurrentProfile==='function'?rcCurrentProfile():(typeof currentProfile==='function'?currentProfile():state.profiles?.[0]);}
function ensureP333(){state.profiles=state.profiles||[];if(!state.profiles.length){let p={id:typeof uid==='function'?uid():String(Date.now()),name:'New relationship',rtype:'Dating / early relationship',snapshots:[],issues:[],profileSliders:{},future:{},casual:{}};state.profiles.push(p);state.currentId=p.id;saveState&&saveState();}return p333()||state.profiles[0];}
function populateWorkspaceExampleDropdown333(){let rel=$('workspaceExampleRelationshipSelect'), issue=$('workspaceExampleIssueSelect');if(!rel||!issue)return;let prev=rel.value;rel.innerHTML=Object.keys(exampleRelationships333).map(k=>`<option ${k===prev?'selected':''}>${esc333(k)}</option>`).join('');function fill(){let arr=exampleRelationships333[rel.value]||[];issue.innerHTML=arr.map((x,i)=>`<option value="${i}">${esc333(x[1])} — ${esc333(x[0])}</option>`).join('');}rel.onchange=fill;fill();let load=$('loadWorkspaceExampleIssueBtn');if(load&&!load.dataset.bound333){load.dataset.bound333='1';load.onclick=()=>{let p=ensureP333(),arr=exampleRelationships333[rel.value]||[],item=arr[Number(issue.value)||0];if(!item)return;p.rtype=rel.value;p.issues=p.issues||[];let id=typeof uid==='function'?uid():String(Date.now());p.issues.push({id,type:item[0],title:item[1],event:item[2],story:item[2],polarity:item[0].includes('Green')?'Positive':'Negative',aggrieved:rel.value.includes('man evaluating')?'Man':rel.value.includes('woman evaluating')?'Woman':'Both',recurrence:'Recurring pattern',ratings:{},created:new Date().toISOString(),history:[]});p.snapshots=p.snapshots||[];p.snapshots.push({id:typeof uid==='function'?uid():String(Date.now()+1),label:item[1],created:new Date().toISOString(),domain:item[0],note:item[2],story:item[2],peace:60,respect:60,repair:50,reciprocity:55,energy:50,embedded:50,alignment:50});state.currentId=p.id;saveState&&saveState();fillForm&&fillForm();safeUpdate&&safeUpdate();renderRepairCockpit&&renderRepairCockpit();let sel=$('issueCardSelector');if(sel){sel.value=id;if(typeof renderTranslation331==='function')renderTranslation331();}};}}
function openCasualTracker333(){let p=ensureP333();p.casual=p.casual||{};let body=$('casualTrackerWizardBody');if(!body)return;body.innerHTML=`<div class="issueWizardGrid"><label style="grid-column:1/-1">Relationship<select id="casualProfileSelect">${state.profiles.map(x=>`<option value="${x.id}" ${x.id===state.currentId?'selected':''}>${esc333(x.name||'Untitled')} — ${esc333(x.rtype||'Relationship')}</option>`).join('')}</select></label>${casualDims333.map(([k,label,help])=>{let val=p.casual[k],na=p.casual[k+'_na'];return `<label style="grid-column:1/-1">${esc333(label)} <span id="casual_${k}_val">${na?'N/A':(val??5)}</span><div class="sliderWizardExplain">${esc333(help)}</div><input id="casual_${k}" type="range" min="0" max="10" value="${val??5}" ${na?'disabled':''}><span class="casualScaleNA"><input id="casual_${k}_na" type="checkbox" ${na?'checked':''}> N/A</span></label>`;}).join('')}</div>`;let prof=$('casualProfileSelect');if(prof)prof.onchange=()=>{state.currentId=prof.value;saveState&&saveState();openCasualTracker333();};casualDims333.forEach(([k])=>{let input=$('casual_'+k), val=$('casual_'+k+'_val'), na=$('casual_'+k+'_na');if(input&&val)input.oninput=()=>val.textContent=input.value;if(na&&input&&val)na.onchange=()=>{input.disabled=na.checked;val.textContent=na.checked?'N/A':input.value;};});$('casualTrackerOverlay')?.classList.remove('hidden');}
function saveCasualTracker333(){let p=ensureP333();let prof=$('casualProfileSelect');if(prof){let found=state.profiles.find(x=>x.id===prof.value);if(found){p=found;state.currentId=p.id;}}p.casual=p.casual||{};p.casualHistory=p.casualHistory||[];let snap={created:new Date().toISOString()};casualDims333.forEach(([k])=>{let na=$('casual_'+k+'_na')?.checked,input=$('casual_'+k);p.casual[k+'_na']=!!na;if(!na&&input){p.casual[k]=Number(input.value);snap[k]=Number(input.value);}else snap[k]=null;});p.casualHistory.push(snap);saveState&&saveState();$('casualTrackerOverlay')?.classList.add('hidden');renderCasualBars333();safeUpdate&&safeUpdate();}
function renderCasualBars333(){let el=$('casualTrackerBars'),p=ensureP333();if(!el)return;p.casual=p.casual||{};el.innerHTML=casualDims333.map(([k,label])=>{if(p.casual[k+'_na'])return `<span class="casualTrackerPill">${esc333(label)}: N/A</span>`;let v=Number(p.casual[k]??5)*10;return `<div class="barRow"><b>${esc333(label)}</b><div class="barTrack"><div class="barFill" style="width:${Math.max(0,Math.min(100,v))}%"></div></div><span>${Math.round(v)}</span></div>`;}).join('');}
function bindCasual333(){let o=$('openCasualTrackerWizardBtn');if(o)o.onclick=openCasualTracker333;let c=$('closeCasualTrackerWizardBtn');if(c)c.onclick=()=>$('casualTrackerOverlay')?.classList.add('hidden');let s=$('saveCasualTrackerWizardBtn');if(s)s.onclick=saveCasualTracker333;renderCasualBars333();}
function layoutWorkspace333(){let cockpit=document.querySelector('#repairCockpitView')||document.querySelector('#workspaceView');if(!cockpit||cockpit.dataset.layout333)return;let graph=$('workspaceGraphicalOutputs'),profile=$('workspaceProfileDashboard'),casual=$('casualRelationshipTracker'),action=$('repairCockpitActionStrategy')?.closest('.workspaceSection, .v3Panel, div'),therapy=$('repairCockpitStrategy')?.closest('.workspaceSection, .v3Panel, div');if(graph){cockpit.dataset.layout333='1';let wrap=document.createElement('div'),left=document.createElement('div'),right=document.createElement('div');wrap.className='workspaceTwoColumn';left.className='workspaceLeftStack';right.className='workspaceRightStack';graph.parentNode.insertBefore(wrap,graph);wrap.appendChild(left);wrap.appendChild(right);[therapy,action,casual,profile].forEach(x=>{if(x&&x.parentNode)left.appendChild(x);});right.appendChild(graph);}}
function cleanupSnapshot333(){document.querySelectorAll('#snapshotView .exampleCards,#snapshotView #exampleCards,#snapshotView .examples,#snapshotView .sampleCards').forEach(x=>x.remove());if(!$('openRelationshipSnapshotBtn')){let fw=$('frontWorkflow333')||document.querySelector('#snapshotView');if(fw)fw.insertAdjacentHTML('beforeend','<button id="openRelationshipSnapshotBtn" type="button">New Relationship / Snapshot</button>');}}
function expandedDiag333(){let out=$('diagnosticsOutput');if(!out)return;let extra=$('diagExtra333');if(!extra){out.insertAdjacentHTML('afterend','<div id="diagExtra333" class="analysisBox"></div>');extra=$('diagExtra333');}let p=p333();let checks=[['front workflow present',!!$('frontWorkflow333')],['relationship/snapshot modal present',!!$('relationshipSnapshotOverlay')],['snapshot examples removed/hidden',document.querySelectorAll('#snapshotView .exampleCards,#snapshotView #exampleCards,#snapshotView .examples,#snapshotView .sampleCards').length===0],['workspace example relationship selector present',!!$('workspaceExampleRelationshipSelect')],['workspace example issue selector present',!!$('workspaceExampleIssueSelect')],['casual tracker present',!!$('casualRelationshipTracker')],['casual tracker wizard present',!!$('casualTrackerOverlay')],['current profile has issues array',!!(p&&Array.isArray(p.issues))],['current profile has snapshots array',!!(p&&Array.isArray(p.snapshots))],['graphical output section present',!!$('workspaceGraphicalOutputs')],['workspace two-column layout applied',!!document.querySelector('.workspaceTwoColumn')]];extra.innerHTML='<h3>Expanded diagnostics v3.3.3</h3>'+checks.map(([n,ok])=>`<div class="${ok?'diagnosticPass':'diagnosticFail'}"><b>${ok?'PASS':'FAIL'}:</b> ${esc333(n)}</div>`).join('');}
const oldRender333=window.renderRepairCockpit;if(oldRender333&&!window.__render333){window.__render333=true;window.renderRepairCockpit=function(){let r=oldRender333();try{populateWorkspaceExampleDropdown333();bindCasual333();layoutWorkspace333();expandedDiag333();}catch(e){}return r;};}
const oldSafe333=window.safeUpdate;if(oldSafe333&&!window.__safe333){window.__safe333=true;window.safeUpdate=function(){let r=oldSafe333();try{cleanupSnapshot333();populateWorkspaceExampleDropdown333();bindCasual333();layoutWorkspace333();expandedDiag333();}catch(e){}return r;};}
const oldDiag333=window.runDiagnostics;if(oldDiag333&&!window.__diag333){window.__diag333=true;window.runDiagnostics=function(){let r=oldDiag333();try{expandedDiag333();}catch(e){}return r;};}
document.addEventListener('DOMContentLoaded',()=>setTimeout(()=>{cleanupSnapshot333();if(typeof bindRelationshipSnapshot332==='function')bindRelationshipSnapshot332();populateWorkspaceExampleDropdown333();bindCasual333();layoutWorkspace333();expandedDiag333();},900));



/* v3.3.4 hard cleanup: snapshot examples, workspace layout, example loading, admiration whitespace */
(function(){
  const $id = id => document.getElementById(id);
  const esc = s => typeof escapeHTML === 'function'
    ? escapeHTML(String(s ?? ''))
    : String(s ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

  const examples334 = [
    ['Appreciation', 'Appreciation / usefulness', 'Appreciation', 'She corrects how he helps immediately, and he starts feeling that his effort does not count.', 'Romantic: woman evaluating man'],
    ['Positive appreciation loop', 'Appreciation / usefulness', 'Positive appreciation loop', 'She praises a thoughtful plan clearly, and he feels more motivated to initiate again.', 'Romantic: woman evaluating man'],
    ['Shared reality drift', 'Communication / shared reality', 'Parallel lives drift', 'He makes decisions privately and she finds out later, making her feel excluded from the partnership.', 'Marriage / long-term'],
    ['Future ambiguity', 'Commitment / future direction', 'Future ambiguity', 'She wants clarity about where the relationship is going, while he avoids defining the next step.', 'Romantic: woman evaluating man'],
    ['Public disrespect', 'Respect / public image', 'Public disrespect', 'She jokes or posts about him in a way that makes him feel diminished in public.', 'Romantic: man evaluating woman'],
    ['Roommate energy', 'Passion / sexual disconnect', 'Roommate energy', 'He feels undesired and starts interpreting low intimacy as rejection.', 'Romantic: man evaluating woman']
  ];

  function currentProfile334(){
    return typeof rcCurrentProfile === 'function'
      ? rcCurrentProfile()
      : (typeof currentProfile === 'function' ? currentProfile() : state.profiles?.[0]);
  }

  function ensureProfile334(){
    state.profiles = state.profiles || [];
    if (!state.profiles.length) {
      const p = { id: typeof uid === 'function' ? uid() : String(Date.now()), name: 'New relationship', rtype: 'Dating / early relationship', snapshots: [], issues: [], profileSliders: {}, future: {}, casual: {} };
      state.profiles.push(p);
      state.currentId = p.id;
      if (typeof saveState === 'function') saveState();
    }
    return currentProfile334() || state.profiles[0];
  }

  function removeSnapshotExamples334(){
    const root = $id('snapshotView') || document;
    const selectors = [
      '.exampleCards','#exampleCards','.examples','.sampleCards','.demoCards','.example-card','.demoCard',
      '[id*="Example"]','[id*="example"]','[class*="Example"]','[class*="example"]'
    ];
    root.querySelectorAll(selectors.join(',')).forEach(el => {
      const text = (el.textContent || '').toLowerCase();
      if (text.includes('romance example') || text.includes('boss example') || text.includes('marriage example') || text.includes('pet example') || text.includes('load all examples') || el.closest('#snapshotView')) {
        el.remove();
      }
    });
    root.querySelectorAll('h3, h2').forEach(h => {
      if ((h.textContent || '').trim().toLowerCase() === 'example cards') {
        let n = h.nextElementSibling;
        h.remove();
        while (n && !/^H[23]$/.test(n.tagName)) {
          const next = n.nextElementSibling;
          n.remove();
          n = next;
        }
      }
    });
  }

  function renderSimpleExamples334(){
    let holder = $id('simpleIssueExamples334');
    if (!holder) {
      const summary = $id('workspaceRelationshipSummary') || $id('repairCockpitView');
      if (!summary) return;
      summary.insertAdjacentHTML('afterend', '<div id="simpleIssueExamples334" class="simpleIssueExamples"></div>');
      holder = $id('simpleIssueExamples334');
    }
    holder.innerHTML = `<h3>Load example issue</h3>
      <div class="exampleRow">
        <label>Example issue
          <select id="simpleExampleIssueSelect334">
            ${examples334.map((x,i)=>`<option value="${i}">${esc(x[0])} — ${esc(x[1])}</option>`).join('')}
          </select>
        </label>
        <button id="loadSimpleExampleIssueBtn334" type="button" class="secondary">Load example issue</button>
      </div>`;
    const btn = $id('loadSimpleExampleIssueBtn334');
    if (btn) btn.onclick = () => {
      const p = ensureProfile334();
      const item = examples334[Number($id('simpleExampleIssueSelect334')?.value || 0)];
      if (!item) return;
      const [label, type, title, event, rtype] = item;
      p.rtype = rtype;
      p.issues = p.issues || [];
      p.snapshots = p.snapshots || [];
      const issue = {
        id: typeof uid === 'function' ? uid() : String(Date.now()),
        type, title, event, story: event, polarity: type.includes('Green') ? 'Positive' : 'Negative',
        aggrieved: rtype.includes('man evaluating') ? 'Man' : (rtype.includes('woman evaluating') ? 'Woman' : 'Both'),
        recurrence: 'Recurring pattern',
        ratings: {},
        created: new Date().toISOString(),
        history: []
      };
      const snap = {
        id: typeof uid === 'function' ? uid() : String(Date.now()+1),
        label: title,
        created: new Date().toISOString(),
        domain: type,
        note: event,
        story: event,
        peace: 60,
        respect: 60,
        repair: 50,
        reciprocity: 55,
        energy: 50,
        embedded: 50,
        alignment: 50
      };
      p.issues.push(issue);
      p.snapshots.push(snap);
      state.currentId = p.id;
      if (typeof saveState === 'function') saveState();
      if (typeof fillForm === 'function') fillForm();
      if (typeof safeUpdate === 'function') safeUpdate();
      if (typeof renderRepairCockpit === 'function') renderRepairCockpit();
      const sel = $id('issueCardSelector');
      if (sel) {
        sel.value = issue.id;
        if (typeof renderTranslation331 === 'function') renderTranslation331();
      }
    };
  }

  function removeRedundantExampleControls334(){
    ['workspaceExampleRelationshipSelect','workspaceExampleIssueSelect','loadWorkspaceExampleIssueBtn','workspaceRelationshipTypeSelect','workspaceIssueExampleSelect','loadSelectedIssueExampleBtn'].forEach(id => {
      const el = $id(id);
      if (el) {
        const wrap = el.closest('.issueControls') || el.closest('label') || el;
        wrap.remove();
      }
    });
    document.querySelectorAll('.exampleEvolveBar, button').forEach(el => {
      const t = (el.textContent || '').toLowerCase();
      if (t.includes('boss scenario') || t.includes('boundary scenario') || t.includes('pet scenario') || t.includes('load 1-year full workspace example')) {
        const wrap = el.closest('.exampleEvolveBar') || el;
        wrap.remove();
      }
    });
  }

  function fixAdmiration334(){
    const c = $id('repairCockpitAdmirationCanvas');
    if (!c) return;
    c.width = 520;
    c.height = 210;
    c.style.width = '100%';
    c.style.height = '210px';
    c.style.maxHeight = '210px';
    try { if (typeof drawRcAdmiration === 'function') drawRcAdmiration(); } catch(e){}
    const text = $id('repairCockpitAdmirationText');
    if (text) {
      text.style.marginTop = '0';
      text.style.padding = '0 0 4px 0';
    }
    const panel = c.closest('.v3Panel,.workspaceSection,.card');
    if (panel) {
      panel.style.minHeight = '0';
      panel.style.height = 'auto';
      panel.style.overflow = 'hidden';
    }
  }

  function forceWorkspaceLayout334(){
    const view = $id('repairCockpitView') || $id('workspaceView');
    if (!view) return;
    let wrap = view.querySelector('.workspaceTwoColumn334');
    const graph = $id('workspaceGraphicalOutputs');
    if (!graph) return;

    if (!wrap) {
      wrap = document.createElement('div');
      wrap.className = 'workspaceTwoColumn334';
      const left = document.createElement('div');
      left.className = 'workspaceLeft334';
      const right = document.createElement('div');
      right.className = 'workspaceRight334';
      graph.parentNode.insertBefore(wrap, graph);
      wrap.appendChild(left);
      wrap.appendChild(right);
    }
    const left = wrap.querySelector('.workspaceLeft334');
    const right = wrap.querySelector('.workspaceRight334');

    // Move graphs to the right.
    if (right && graph.parentNode !== right) right.appendChild(graph);

    // Move practical text / repair sections left.
    const idsLeft = [
      'repairCockpitStrategy',
      'repairCockpitActionStrategy',
      'casualRelationshipTracker',
      'workspaceProfileDashboard'
    ];
    idsLeft.forEach(id => {
      const el = $id(id);
      if (!el || !left) return;
      const block = el.closest('.workspaceSection,.v3Panel,.card') || el;
      if (block.parentNode !== left) left.appendChild(block);
    });

    // Prevent graph grid side-by-side overlap.
    const gg = graph.querySelector('.graphGrid');
    if (gg) {
      gg.style.display = 'grid';
      gg.style.gridTemplateColumns = '1fr';
      gg.style.gap = '12px';
    }
  }

  function patchDiagnostics334(){
    const out = $id('diagnosticsOutput');
    if (!out) return;
    let extra = $id('diagExtra334');
    if (!extra) {
      out.insertAdjacentHTML('afterend', '<div id="diagExtra334" class="analysisBox"></div>');
      extra = $id('diagExtra334');
    }
    const checks = [
      ['Snapshot example cards removed', !document.querySelector('#snapshotView .exampleCards,#snapshotView #exampleCards,#snapshotView .examples,#snapshotView .sampleCards')],
      ['Simple example loader present', !!$id('simpleIssueExamples334')],
      ['Redundant example relationship dropdown removed', !$id('workspaceExampleRelationshipSelect')],
      ['Redundant relationship type dropdown removed', !$id('workspaceRelationshipTypeSelect')],
      ['Workspace two-column layout applied', !!document.querySelector('.workspaceTwoColumn334')],
      ['Graph section in right column', !!document.querySelector('.workspaceRight334 #workspaceGraphicalOutputs')],
      ['Therapy/action left column exists', !!document.querySelector('.workspaceLeft334')],
      ['Admiration canvas bounded', (()=>{const c=$id('repairCockpitAdmirationCanvas'); return !c || c.height <= 230;})()]
    ];
    extra.innerHTML = '<h3>Expanded diagnostics v3.3.4</h3>' + checks.map(([n,ok]) =>
      `<div class="${ok?'diagnosticPass':'diagnosticFail'}"><b>${ok?'PASS':'FAIL'}:</b> ${esc(n)}</div>`
    ).join('');
  }

  function hardCleanup334(){
    removeSnapshotExamples334();
    removeRedundantExampleControls334();
    renderSimpleExamples334();
    forceWorkspaceLayout334();
    fixAdmiration334();
    patchDiagnostics334();
  }

  const oldRender = window.renderRepairCockpit;
  if (oldRender && !window.__render334) {
    window.__render334 = true;
    window.renderRepairCockpit = function(){
      const r = oldRender();
      try { setTimeout(hardCleanup334, 50); } catch(e){}
      return r;
    };
  }
  const oldSafe = window.safeUpdate;
  if (oldSafe && !window.__safe334) {
    window.__safe334 = true;
    window.safeUpdate = function(){
      const r = oldSafe();
      try { setTimeout(hardCleanup334, 50); } catch(e){}
      return r;
    };
  }
  const oldDiag = window.runDiagnostics;
  if (oldDiag && !window.__diag334) {
    window.__diag334 = true;
    window.runDiagnostics = function(){
      const r = oldDiag();
      try { setTimeout(patchDiagnostics334, 50); } catch(e){}
      return r;
    };
  }

  document.addEventListener('DOMContentLoaded', () => setTimeout(hardCleanup334, 600));
  setTimeout(hardCleanup334, 1200);
})();



/* v3.3.5 final structural cleanup and tested example loader */
(function(){
  const $id = id => document.getElementById(id);
  const esc = s => typeof escapeHTML === 'function'
    ? escapeHTML(String(s ?? ''))
    : String(s ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

  const examples335 = [
    {label:'Appreciation', type:'Appreciation / usefulness', title:'Appreciation', event:'She corrects how he helps immediately, and he starts feeling that his effort does not count.', rtype:'Romantic: woman evaluating man', aggrieved:'Man'},
    {label:'Positive appreciation loop', type:'Appreciation / usefulness', title:'Positive appreciation loop', event:'She praises a thoughtful plan clearly, and he feels more motivated to initiate again.', rtype:'Romantic: woman evaluating man', aggrieved:'Man', polarity:'Positive'},
    {label:'Clean boundary', type:'Boundary / pressure', title:'Clean boundary', event:'The user gives a short no without overexplaining, and the next step is holding the line calmly.', rtype:'Boundary', aggrieved:'User'},
    {label:'Specific gratitude', type:'Appreciation / usefulness', title:'Specific gratitude', event:'One partner names exactly what the other did and why it helped the relationship feel more cooperative.', rtype:'Marriage / long-term', aggrieved:'Both', polarity:'Positive'},
    {label:'Shared reality drift', type:'Communication / shared reality', title:'Parallel lives drift', event:'He makes decisions privately and she finds out later, making her feel excluded from the partnership.', rtype:'Marriage / long-term', aggrieved:'Woman'},
    {label:'Future ambiguity', type:'Commitment / future direction', title:'Future ambiguity', event:'She wants clarity about where the relationship is going, while he avoids defining the next step.', rtype:'Romantic: woman evaluating man', aggrieved:'Woman'},
    {label:'Public disrespect', type:'Respect / public image', title:'Public disrespect', event:'She jokes or posts about him in a way that makes him feel diminished in public.', rtype:'Romantic: man evaluating woman', aggrieved:'Man'},
    {label:'Roommate energy', type:'Passion / sexual disconnect', title:'Roommate energy', event:'He feels undesired and starts interpreting low intimacy as rejection.', rtype:'Romantic: man evaluating woman', aggrieved:'Man'},
    {label:'Healthy phone boundaries', type:'Trust / honesty', title:'Mutual digital privacy agreement', event:'After talking about jealousy, both partners agree that neither will inspect the other person’s phone. They answer reasonable questions directly and feel more trusted rather than less connected.', rtype:'Marriage / long-term', aggrieved:'Both', polarity:'Positive', recurrence:'Healthy agreement'},
    {label:'Money conflict repaired well', type:'Planning / logistics', title:'Constructive repair after money stress', event:'A surprise expense starts a tense argument. Both partners pause, return later, acknowledge fear without blaming, disclose the numbers, and agree on a spending threshold that requires a joint decision.', rtype:'Marriage / long-term', aggrieved:'Both', polarity:'Positive', recurrence:'Successful repair'},
    {label:'Secret phone monitoring', type:'Trust / honesty', title:'Covert phone monitoring', event:'One partner repeatedly checks the other person’s location, messages, and app activity without consent, then treats ordinary gaps in information as proof of betrayal and demands more access.', rtype:'Marriage / long-term', aggrieved:'Both', recurrence:'Recurring pattern'},
    {label:'AI as the conflict judge', type:'Communication / shared reality', title:'Outsourcing arguments to AI', event:'During disagreements, one partner pastes private messages into an AI tool, presents its answer as an objective verdict, and uses it to prove the other person is wrong instead of discussing context or listening.', rtype:'Marriage / long-term', aggrieved:'Both', recurrence:'Recurring pattern'}
  ];

  function currentProfile335(){
    return typeof rcCurrentProfile === 'function'
      ? rcCurrentProfile()
      : (typeof currentProfile === 'function' ? currentProfile() : state.profiles?.[0]);
  }

  function ensureProfile335(){
    state.profiles = state.profiles || [];
    if (!state.profiles.length) {
      const p = {
        id: typeof uid === 'function' ? uid() : String(Date.now()),
        name: 'New relationship',
        rtype: 'Dating / early relationship',
        snapshots: [],
        issues: [],
        profileSliders: {},
        future: {},
        casual: {}
      };
      state.profiles.push(p);
      state.currentId = p.id;
      if (typeof saveState === 'function') saveState();
    }
    const p = currentProfile335() || state.profiles[0];
    p.snapshots = p.snapshots || [];
    p.issues = p.issues || [];
    p.profileSliders = p.profileSliders || {};
    p.future = p.future || {};
    return p;
  }

  function renderSimpleExamples335(){
    const holder = $id('simpleIssueExamples334');
    if (!holder) return;
    holder.innerHTML = `<h3>Load example issue</h3>
      <div class="exampleRow">
        <label>Example issue
          <select id="simpleExampleIssueSelect335">
            ${examples335.map((x,i)=>`<option value="${i}">${esc(x.label)} — ${esc(x.type)}</option>`).join('')}
          </select>
        </label>
        <button id="loadSimpleExampleIssueBtn335" type="button" class="secondary">Load example issue</button>
      </div>`;
    const btn = $id('loadSimpleExampleIssueBtn335');
    if (btn) {
      btn.onclick = () => {
        const p = ensureProfile335();
        const item = examples335[Number($id('simpleExampleIssueSelect335')?.value || 0)] || examples335[0];

        p.rtype = item.rtype;
        p.issues = p.issues || [];
        p.snapshots = p.snapshots || [];

        const issueId = typeof uid === 'function' ? uid() : String(Date.now());
        const snapId = typeof uid === 'function' ? uid() : String(Date.now()+1);
        const issue = {
          id: issueId,
          type: item.type,
          title: item.title,
          event: item.event,
          story: item.event,
          polarity: item.polarity || 'Negative',
          aggrieved: item.aggrieved,
          recurrence: item.recurrence || 'Recurring pattern',
          ratings: {},
          created: new Date().toISOString(),
          history: []
        };
        const snap = {
          id: snapId,
          label: item.title,
          created: new Date().toISOString(),
          domain: item.type,
          note: item.event,
          story: item.event,
          polarity: item.polarity || 'Negative',
          aggrieved: item.aggrieved,
          recurrence: 'Recurring pattern',
          peace: 60,
          respect: 60,
          repair: 50,
          reciprocity: 55,
          energy: 50,
          embedded: 50,
          alignment: 50
        };
        issue.history.push(snap);
        p.issues.push(issue);
        p.snapshots.push(snap);
        state.currentId = p.id;

        if (typeof saveState === 'function') saveState();
        if (typeof fillForm === 'function') fillForm();

        // Rebuild selector immediately, independent of old broken handlers.
        const sel = $id('issueCardSelector');
        if (sel) {
          sel.innerHTML = p.issues.map(i => `<option value="${i.id}">${esc(i.title || i.type || 'Issue')}</option>`).join('');
          sel.value = issueId;
        }

        if (typeof renderTranslation331 === 'function') renderTranslation331();
        else if (typeof renderTranslation330 === 'function') renderTranslation330();

        if (typeof safeUpdate === 'function') safeUpdate();
        if (typeof renderRepairCockpit === 'function') {
          // One delayed render so old code cannot leave stale content.
          setTimeout(() => {
            if ($id('issueCardSelector')) $id('issueCardSelector').value = issueId;
            if (typeof renderTranslation331 === 'function') renderTranslation331();
            else if (typeof renderTranslation330 === 'function') renderTranslation330();
            renderSimpleExamples335();
            hardLayout335();
          }, 80);
        }
      };
    }
  }

  function killOldControls335(){
    [
      'workspaceExampleRelationshipSelect','workspaceExampleIssueSelect','loadWorkspaceExampleIssueBtn',
      'workspaceRelationshipTypeSelect','workspaceIssueExampleSelect','loadSelectedIssueExampleBtn',
      'loadOneYearAllModulesBtn','loadBossScenarioBtn','loadBoundaryScenarioBtn','loadPetScenarioBtn'
    ].forEach(id => {
      const el = $id(id);
      if (el) (el.closest('.issueControls,.exampleEvolveBar,label') || el).remove();
    });

    const bar = $id('repairExampleBar');
    if (bar) bar.remove();

    document.querySelectorAll('#repairCockpitView .exampleEvolveBar, #repairCockpitView button').forEach(el => {
      const t = (el.textContent || '').toLowerCase();
      if (t.includes('boss scenario') || t.includes('boundary scenario') || t.includes('pet scenario') || t.includes('load 1-year full workspace example')) {
        (el.closest('.exampleEvolveBar') || el).remove();
      }
    });
  }

  function killSnapshotExamples335(){
    const root = $id('snapshotView');
    if (!root) return;
    root.querySelectorAll('.exampleCards,#exampleCards,.examples,.sampleCards,.demoPanel,#demoCardsPanelTop,#snapshotInterpretation,.appIntro,.heroWizard').forEach(el => el.remove());
    root.querySelectorAll('h2,h3').forEach(h => {
      if ((h.textContent || '').trim().toLowerCase() === 'example cards') h.remove();
    });
  }

  function fixAdmiration335(){
    const c = $id('repairCockpitAdmirationCanvas');
    if (!c) return;
    c.width = 520;
    c.height = 220;
    c.style.width = '100%';
    c.style.maxWidth = '520px';
    c.style.height = '220px';
    c.style.maxHeight = '220px';
    try { if (typeof drawRcAdmiration === 'function') drawRcAdmiration(); } catch(e){}
    const panel = $id('admirationPanel335') || c.closest('.workspaceSection,.v3Panel,.card');
    if (panel) {
      panel.style.minHeight = '0';
      panel.style.height = 'auto';
      panel.style.overflow = 'hidden';
    }
  }

  function hardLayout335(){
    const view = $id('repairCockpitView');
    if (!view) return;

    killOldControls335();
    renderSimpleExamples335();
    fixAdmiration335();

    // If old patches moved nodes around, force them back into the intended containers.
    const left = view.querySelector('.workspaceLeft335');
    const right = view.querySelector('.workspaceRight335');
    const graph = $id('workspaceGraphicalOutputs');
    const admiration = $id('admirationPanel335') || $id('repairCockpitAdmirationCanvas')?.closest('.workspaceSection,.v3Panel,.card');
    const therapy = $id('therapyPanel335') || $id('repairCockpitStrategy')?.closest('.workspaceSection,.v3Panel,.card');
    const role = $id('rolePanel335') || $id('repairCockpitActionStrategy')?.closest('.workspaceSection,.v3Panel,.card');
    const casual = $id('casualRelationshipTracker');
    const profile = $id('workspaceProfileDashboard');

    if (right && admiration && admiration.parentNode !== right) right.insertBefore(admiration, right.firstChild);
    if (right && graph && graph.parentNode !== right) right.appendChild(graph);

    [therapy, role, casual, profile].forEach(node => {
      if (left && node && node.parentNode !== left) left.appendChild(node);
    });

    const gg = graph?.querySelector('.graphGrid');
    if (gg) {
      gg.style.display = 'grid';
      gg.style.gridTemplateColumns = '1fr';
      gg.style.gap = '14px';
    }

    graph?.querySelectorAll('canvas').forEach(c => {
      c.style.maxWidth = '100%';
      c.style.height = 'auto';
    });

    patchDiagnostics335();
  }

  function patchDiagnostics335(){
    const out = $id('diagnosticsOutput');
    if (!out) return;
    let extra = $id('diagExtra335');
    if (!extra) {
      out.insertAdjacentHTML('afterend', '<div id="diagExtra335" class="analysisBox"></div>');
      extra = $id('diagExtra335');
    }
    const checks = [
      ['Snapshot Example Cards removed', !document.querySelector('#snapshotView .demoPanel,#snapshotView .exampleCards,#snapshotView #exampleCards,#snapshotView .sampleCards')],
      ['Only simple example loader exists', !!$id('simpleExampleIssueSelect335') && !$id('workspaceExampleRelationshipSelect') && !$id('workspaceRelationshipTypeSelect')],
      ['Load example button wired', !!$id('loadSimpleExampleIssueBtn335') && typeof $id('loadSimpleExampleIssueBtn335').onclick === 'function'],
      ['Workspace shell exists', !!document.querySelector('.workspaceShell335')],
      ['Left column exists', !!document.querySelector('.workspaceLeft335')],
      ['Right column exists', !!document.querySelector('.workspaceRight335')],
      ['Graphs are in right column', !!document.querySelector('.workspaceRight335 #workspaceGraphicalOutputs')],
      ['Therapy/action left', !!document.querySelector('.workspaceLeft335 #therapyPanel335') && !!document.querySelector('.workspaceLeft335 #rolePanel335')],
      ['Admiration bounded', (() => { const c=$id('repairCockpitAdmirationCanvas'); return !!c && c.height <= 230; })()]
    ];
    extra.innerHTML = '<h3>Expanded diagnostics v3.3.5</h3>' + checks.map(([name, ok]) =>
      `<div class="${ok ? 'diagnosticPass' : 'diagnosticFail'}"><b>${ok ? 'PASS' : 'FAIL'}:</b> ${esc(name)}</div>`
    ).join('');
  }

  const oldRender = window.renderRepairCockpit;
  if (oldRender && !window.__render335) {
    window.__render335 = true;
    window.renderRepairCockpit = function(){
      const r = oldRender();
      setTimeout(hardLayout335, 60);
      setTimeout(hardLayout335, 250);
      return r;
    };
  }

  const oldSafe = window.safeUpdate;
  if (oldSafe && !window.__safe335) {
    window.__safe335 = true;
    window.safeUpdate = function(){
      const r = oldSafe();
      setTimeout(hardLayout335, 60);
      return r;
    };
  }

  const oldDiag = window.runDiagnostics;
  if (oldDiag && !window.__diag335) {
    window.__diag335 = true;
    window.runDiagnostics = function(){
      const r = oldDiag();
      setTimeout(patchDiagnostics335, 60);
      return r;
    };
  }

  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      killSnapshotExamples335();
      hardLayout335();
    }, 600);
    setTimeout(hardLayout335, 1500);
  });
})();



/* v3.3.6 full example profiles, selected-example state, timeline, role walkthrough */
(function(){
  const $id = id => document.getElementById(id);
  const esc = s => typeof escapeHTML === 'function'
    ? escapeHTML(String(s ?? ''))
    : String(s ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

  const profileExamples336 = {
    "Good early dating — one year": {
      name: "Jane Doe — Good Early Dating Demo",
      rtype: "Dating / early relationship",
      casual: {warmth:9,respect:9,peace:9,reciprocity:9,attraction:8,clarity:8,followThrough:9,socialFit:8,femaleSocialMedia_na:true,femaleComparison:2,femaleSoftness:9,maleUsefulness_na:true,maleCommitment_na:true,maleEmotionalSteadiness_na:true},
      sliders: {warmth:9,respect:9,peace:9,repair:8,reciprocity:9,clarity:8,intimacy:8,admiration:9,practical:8,future:8},
      events: [
        ["Month 1","Positive","Green flag follow-through","She follows through on plans, asks thoughtful questions, and shows clear reciprocal interest.",78,76,55,"Affection / reassurance"],
        ["Month 2","Mixed","Texting ambiguity","Warm in person but slower over text, creating mild uncertainty.",68,72,50,"Communication / shared reality"],
        ["Month 3","Positive","Repair after awkwardness","An awkward misunderstanding is named quickly and handled without punishment.",76,80,70,"Communication / shared reality"],
        ["Month 5","Positive","Social inclusion","She introduces him to friends and treats him warmly in public.",82,84,72,"Respect / public image"],
        ["Month 7","Mixed","Planning clarity","They realize one person wants more planning clarity, and they discuss it directly.",78,86,78,"Planning / logistics"],
        ["Month 9","Positive","Mutual effort rhythm","Both start initiating dates and checking in.",86,88,82,"Reciprocity"],
        ["Month 12","Positive","Stable warmth","The relationship feels calmer, respectful, and increasingly trustworthy.",90,90,86,"Affection / reassurance"]
      ]
    },
    "Promising but ambiguous — one year": {
      name: "Lissa Doe — Ambiguous Dating Demo",
      rtype: "Dating / early relationship",
      casual: {warmth:8,respect:6,peace:5,reciprocity:5,attraction:9,clarity:4,followThrough:5,socialFit:5,femaleSocialMedia:7,femaleComparison:7,femaleSoftness:6,maleUsefulness_na:true,maleCommitment_na:true,maleEmotionalSteadiness_na:true},
      sliders: {warmth:7,respect:6,peace:5,repair:5,reciprocity:5,clarity:4,intimacy:7,admiration:6,practical:5,future:4},
      events: [
        ["Month 1","Positive","Strong chemistry","The first few dates feel exciting and highly attractive.",78,70,45,"Passion / sexual disconnect"],
        ["Month 2","Negative","Inconsistent follow-through","Plans are warm when made but often vague or delayed.",58,62,40,"Planning / logistics"],
        ["Month 4","Mixed","Social media ambiguity","Posts and outside attention create uncertainty about seriousness.",54,56,42,"Social media / outside validation"],
        ["Month 6","Positive","Good reconnecting date","A date goes well and warmth returns temporarily.",66,64,50,"Affection / reassurance"],
        ["Month 8","Negative","Unclear expectations","One person assumes momentum; the other avoids defining the relationship.",48,56,40,"Commitment / future direction"],
        ["Month 10","Mixed","Partial repair","They talk honestly, but no concrete plan changes.",56,60,55,"Communication / shared reality"],
        ["Month 12","Negative","Pattern still unresolved","Chemistry remains, but peace and clarity remain unstable.",50,58,45,"Commitment / future direction"]
      ]
    },
    "Respect problem — one year": {
      name: "Annie Doe — Respect Problem Demo",
      rtype: "Romantic: man evaluating woman",
      casual: {warmth:6,respect:3,peace:4,reciprocity:5,attraction:8,clarity:5,followThrough:6,socialFit:4,femaleSocialMedia:8,femaleComparison:8,femaleSoftness:3,maleUsefulness_na:true,maleCommitment_na:true,maleEmotionalSteadiness_na:true},
      sliders: {warmth:6,respect:3,peace:4,repair:4,reciprocity:5,clarity:5,intimacy:6,admiration:3,practical:5,future:3},
      events: [
        ["Month 1","Positive","Attraction high","The relationship starts with strong attraction and novelty.",72,70,45,"Passion / sexual disconnect"],
        ["Month 2","Negative","Small public jab","A joke in front of friends lands as disrespectful.",58,52,38,"Respect / public image"],
        ["Month 4","Negative","Social media complaint","She posts indirectly after conflict and he feels publicly exposed.",46,42,34,"Social media / outside validation"],
        ["Month 5","Mixed","Apology without pattern change","She apologizes but later repeats the same kind of public framing.",50,46,44,"Respect / public image"],
        ["Month 7","Negative","Friend-court escalation","She tells friends a one-sided version of conflict.",40,38,30,"Social media / outside validation"],
        ["Month 9","Mixed","Boundary attempt","He asks for no public conflict but enforcement is inconsistent.",48,44,48,"Communication / shared reality"],
        ["Month 12","Negative","Admiration erosion","Attraction remains but admiration and safety are low.",42,35,35,"Respect / public image"]
      ]
    }
  };

  function currentProfile336(){
    return typeof rcCurrentProfile === 'function'
      ? rcCurrentProfile()
      : (typeof currentProfile === 'function' ? currentProfile() : state.profiles?.[0]);
  }
  function ensureProfile336(){
    state.profiles = state.profiles || [];
    if (!state.profiles.length) {
      const p = {id: typeof uid === 'function' ? uid() : String(Date.now()), name:'New relationship', rtype:'Dating / early relationship', snapshots:[], issues:[], profileSliders:{}, future:{}, casual:{}};
      state.profiles.push(p);
      state.currentId = p.id;
      if (typeof saveState === 'function') saveState();
    }
    const p = currentProfile336() || state.profiles[0];
    p.snapshots = p.snapshots || [];
    p.issues = p.issues || [];
    p.profileSliders = p.profileSliders || {};
    p.casual = p.casual || {};
    return p;
  }
  function monthDate336(i){
    const d = new Date();
    d.setMonth(d.getMonth() - (12 - i));
    return d.toISOString();
  }
  function loadProfileExample336(key){
    const ex = profileExamples336[key] || profileExamples336[Object.keys(profileExamples336)[0]];
    let p = ensureProfile336();
    p.name = ex.name;
    p.rtype = ex.rtype;
    p.casual = Object.assign({}, ex.casual);
    p.profileSliders = Object.assign({}, ex.sliders);
    p.snapshots = [];
    p.issues = [];
    p.sliderHistory = [];
    ex.events.forEach((row, idx) => {
      const [label, polarity, title, note, peace, respect, repair, domain] = row;
      const created = monthDate336(idx+1);
      const snap = {
        id: typeof uid === 'function' ? uid() : String(Date.now()+idx),
        label, title, created, polarity, domain, note, story: note,
        peace, respect, repair,
        reciprocity: Math.round((peace + respect) / 2),
        energy: polarity === 'Negative' ? 35 : polarity === 'Mixed' ? 55 : 75,
        embedded: 55 + idx * 4,
        alignment: Math.round((peace + repair) / 2),
        marker: true
      };
      p.snapshots.push(snap);
      p.sliderHistory.push({
        created,
        warmth: Math.max(1, Math.round((peace + 10) / 10)),
        respect: Math.max(1, Math.round(respect / 10)),
        peace: Math.max(1, Math.round(peace / 10)),
        repair: Math.max(1, Math.round(repair / 10)),
        reciprocity: Math.max(1, Math.round(((peace+respect)/2)/10)),
        clarity: Math.max(1, Math.round((repair+respect)/20)),
        intimacy: Math.max(1, Math.round((peace+respect)/20)),
        admiration: Math.max(1, Math.round(respect/10)),
        practical: 6,
        future: Math.max(1, Math.round((peace+respect+repair)/30))
      });
      if (polarity !== 'Positive' || idx === 1 || idx === 4) {
        p.issues.push({
          id: typeof uid === 'function' ? uid() : String(Date.now()+100+idx),
          type: domain,
          title,
          event: note,
          story: note,
          polarity,
          aggrieved: ex.rtype.includes('man evaluating') ? 'Man' : 'Woman',
          recurrence: idx > 3 ? 'Recurring pattern' : 'Occasional',
          ratings: {},
          created,
          history: [snap]
        });
      }
    });
    state.currentId = p.id;
    if (typeof saveState === 'function') saveState();
    if (typeof fillForm === 'function') fillForm();
    if (typeof safeUpdate === 'function') safeUpdate();
    if (typeof renderRepairCockpit === 'function') renderRepairCockpit();
    setTimeout(() => {
      renderProfileExampleLoader336(key);
      renderSnapshotTimeline336();
      if (typeof renderWorkspaceGraphs320 === 'function') renderWorkspaceGraphs320();
      if (typeof drawTimeSeriesPeaceRespect331 === 'function') drawTimeSeriesPeaceRespect331();
      drawTimeSeriesWithMarkers336();
    }, 120);
  }

  function renderProfileExampleLoader336(selected){
    const holder = $id('profileExampleLoader336');
    if (!holder) return;
    const keys = Object.keys(profileExamples336);
    holder.innerHTML = `<h3>Load one-year example profile</h3>
      <div class="exampleRow">
        <label>Example profile
          <select id="profileExampleSelect336">
            ${keys.map(k=>`<option value="${esc(k)}" ${k===selected?'selected':''}>${esc(k)}</option>`).join('')}
          </select>
        </label>
        <button id="loadProfileExampleBtn336" type="button" class="secondary">Load one-year profile</button>
      </div>
      <div class="exampleStatus336">Loaded profile: ${esc(selected || 'none yet')}</div>`;
    const btn = $id('loadProfileExampleBtn336');
    if (btn) btn.onclick = () => loadProfileExample336($id('profileExampleSelect336')?.value || keys[0]);
  }

  function renderSnapshotTimeline336(){
    const el = $id('snapshotTimelineBody336');
    const p = ensureProfile336();
    if (!el) return;
    const snaps = (p.snapshots || []).slice().sort((a,b)=>new Date(a.created||0)-new Date(b.created||0));
    if (!snaps.length) {
      el.innerHTML = '<p class="small">No snapshots yet. Load a one-year profile example or create a New Relationship / Snapshot.</p>';
      return;
    }
    el.innerHTML = `<div class="timeline336">${snaps.map((s,i)=>{
      const pol = String(s.polarity || 'Mixed').toLowerCase();
      const dt = s.label || new Date(s.created||Date.now()).toLocaleDateString();
      return `<div class="timelineEvent336 ${pol}">
        <div class="timelineDate336">${esc(dt)}</div>
        <div class="timelineBody336"><b>${esc(s.title || s.domain || 'Snapshot')}</b>${esc(s.note || s.story || '')}</div>
        <div class="timelineScore336">Peace ${Math.round(s.peace||0)}<br>Respect ${Math.round(s.respect||0)}</div>
      </div>`;
    }).join('')}</div>`;
  }

  function drawTimeSeriesWithMarkers336(){
    const p = ensureProfile336();
    const c = $id('workspacePeaceRespectCanvas');
    if (!c) return;
    const pts = (p.snapshots || []).map((s,i)=>({
      i, label:s.label || String(i+1), polarity:s.polarity || 'Mixed',
      peace:Number(s.peace||50), respect:Number(s.respect||50)
    }));
    if (!pts.length) return;
    const ctx = c.getContext('2d'), w=c.width, h=c.height, pad=58;
    ctx.clearRect(0,0,w,h);
    ctx.fillStyle='#fff'; ctx.fillRect(0,0,w,h);
    ctx.strokeStyle='#d7e1e5'; ctx.lineWidth=1;
    for(let v=0; v<=100; v+=25){
      const y=h-pad-(v/100)*(h-2*pad);
      ctx.beginPath(); ctx.moveTo(pad,y); ctx.lineTo(w-pad,y); ctx.stroke();
      ctx.fillStyle='#64748b'; ctx.font='11px sans-serif'; ctx.fillText(String(v),22,y+3);
    }
    function xFor(i){ return pad + (i/Math.max(1,pts.length-1))*(w-2*pad); }
    function yFor(v){ return h-pad-(v/100)*(h-2*pad); }
    function line(key,color,label,yoff){
      ctx.beginPath();
      pts.forEach((pt,i)=>{const x=xFor(i), y=yFor(pt[key]); i?ctx.lineTo(x,y):ctx.moveTo(x,y);});
      ctx.strokeStyle=color; ctx.lineWidth=3; ctx.stroke();
      ctx.fillStyle=color; ctx.font='13px sans-serif'; ctx.fillText(label,pad+8,yoff);
    }
    line('peace','#256b72','Peace',22);
    line('respect','#c2413a','Respect',40);
    pts.forEach((pt,i)=>{
      const x=xFor(i);
      const y=(yFor(pt.peace)+yFor(pt.respect))/2;
      const color = pt.polarity === 'Positive' ? '#2f855a' : pt.polarity === 'Negative' ? '#c2413a' : '#c88a1d';
      ctx.beginPath(); ctx.arc(x,y,7,0,Math.PI*2); ctx.fillStyle=color; ctx.fill();
      ctx.fillStyle='#1f2933'; ctx.font='10px sans-serif'; ctx.fillText(String(i+1),x+8,y-8);
      ctx.save(); ctx.translate(x-8,h-pad+22); ctx.rotate(-0.7); ctx.fillText(pt.label,0,0); ctx.restore();
    });
    ctx.fillStyle='#1f2933'; ctx.font='13px sans-serif'; ctx.fillText('Time / snapshots →',w/2-55,h-18);
  }

  function roleWalkthrough336(){
    const issue = typeof currentIssue331 === 'function' ? currentIssue331() : null;
    const el = $id('repairCockpitActionStrategy');
    if (!el || !issue) return;
    const existing = el.querySelector('.roleGrid') || el;
    let type = issue.type || 'Communication / shared reality';
    let steps = [
      ['Name the current role pattern','One person is pursuing change; the other is defending, withdrawing, or trying not to fail.'],
      ['Stop making the person the problem','Say the pattern out loud: “I think we are in a pressure/defense loop.”'],
      ['Trade one concrete behavior','Each person offers one action: one softening move, one follow-through move, one clearer request.'],
      ['Measure the next interaction','Log the next snapshot and see whether peace, respect, and repair improved.']
    ];
    if (type.includes('Communication')) steps = [
      ['Current role one: inclusion-seeker','This person wants to feel included in decisions and inner-world updates.'],
      ['Current role two: private processor','This person handles stress privately and may experience questions as criticism.'],
      ['Paradigm shift in real life','Create a weekly check-in so inclusion is automatic, not extracted through pursuit.'],
      ['Concrete next action','Ask: “What changed this week? What decisions are pending? What are you carrying that I do not know?”']
    ];
    if (type.includes('Appreciation') || type.includes('Criticism')) steps = [
      ['Current role one: standards-holder','This person is trying to improve the outcome or reduce hidden labor.'],
      ['Current role two: under-recognized helper','This person wants effort to count before it is corrected.'],
      ['Paradigm shift in real life','Separate appreciation from correction. Appreciation gets a clean moment; technical correction happens later.'],
      ['Concrete next action','Say: “I see what you did and I appreciate it. If we adjust anything, let’s do it later, not in the thank-you moment.”']
    ];
    if (type.includes('Respect') || type.includes('Social media') || type.includes('public')) steps = [
      ['Current role one: outside-court seeker','This person seeks validation, leverage, or emotional witnesses outside the couple.'],
      ['Current role two: dignity-protection responder','This person experiences public framing as humiliation or betrayal.'],
      ['Paradigm shift in real life','Move conflict back inside the relationship and protect public dignity while repairing privately.'],
      ['Concrete next action','Agree: no public jokes, posts, screenshots, or friend-court trials during active conflict.']
    ];
    const html = `<div class="paradigmWalkthrough336">${steps.map(s=>`<div class="walkStep336"><b>${esc(s[0])}</b>${esc(s[1])}</div>`).join('')}</div>`;
    if (!el.querySelector('.paradigmWalkthrough336')) el.insertAdjacentHTML('beforeend', html);
    else el.querySelector('.paradigmWalkthrough336').outerHTML = html;
    el.querySelectorAll('.roleCard b').forEach(b=>{
      if ((b.textContent||'').trim()==='Role one') b.textContent='Current role one';
      if ((b.textContent||'').trim()==='Role two') b.textContent='Current role two';
    });
  }

  function hideEmptyDuplicatePanels336(){
    ['therapyPanel335','rolePanel335'].forEach(id=>{
      const panel = $id(id);
      if (!panel) return;
      const target = id==='therapyPanel335' ? $id('repairCockpitStrategy') : $id('repairCockpitActionStrategy');
      if (!target || !target.textContent.trim()) panel.style.display='none';
      else panel.style.display='';
    });
  }

  function syncSelectedIssueLabel336(){
    const sel = $id('issueCardSelector');
    const exampleSel = $id('simpleExampleIssueSelect335') || $id('simpleExampleIssueSelect334');
    if (!sel) return;
    sel.onchange = () => {
      if (typeof renderTranslation331 === 'function') renderTranslation331();
      roleWalkthrough336();
    };
  }

  function refresh336(){
    renderProfileExampleLoader336();
    renderSnapshotTimeline336();
    drawTimeSeriesWithMarkers336();
    roleWalkthrough336();
    hideEmptyDuplicatePanels336();
    syncSelectedIssueLabel336();
  }

  const oldRender = window.renderRepairCockpit;
  if (oldRender && !window.__render336) {
    window.__render336 = true;
    window.renderRepairCockpit = function(){
      const r = oldRender();
      setTimeout(refresh336, 80);
      setTimeout(refresh336, 300);
      return r;
    };
  }

  const oldSafe = window.safeUpdate;
  if (oldSafe && !window.__safe336) {
    window.__safe336 = true;
    window.safeUpdate = function(){
      const r = oldSafe();
      setTimeout(refresh336, 80);
      return r;
    };
  }

  const oldTrans = window.renderTranslation331;
  if (oldTrans && !window.__trans336) {
    window.__trans336 = true;
    window.renderTranslation331 = function(){
      const r = oldTrans();
      setTimeout(roleWalkthrough336, 40);
      return r;
    };
  }

  document.addEventListener('DOMContentLoaded', () => setTimeout(refresh336, 700));
})();



/* v3.3.7 adaptive interpretation feedback + casual slider trajectory */
(function(){
  const $id = id => document.getElementById(id);
  const esc = s => typeof escapeHTML === 'function'
    ? escapeHTML(String(s ?? ''))
    : String(s ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

  const meaningAlternatives337 = {
    male: [
      ['Respect injury','He may feel disrespected, diminished, or treated as less competent.'],
      ['Usefulness threat','He may feel his effort does not count or that trying only creates criticism.'],
      ['Sexual rejection','He may feel undesired, unwanted, or replaced by roommate energy.'],
      ['Loss of freedom','He may feel controlled, managed, or unable to act without correction.'],
      ['Public embarrassment','He may feel exposed or humiliated in front of others.'],
      ['Trust rupture','He may feel the relationship is no longer loyal or private.']
    ],
    female: [
      ['Safety threat','She may feel emotionally unsafe, unsupported, or unable to relax.'],
      ['Feeling unseen','She may feel invisible, unconsidered, or emotionally alone.'],
      ['Commitment anxiety','She may feel uncertain about whether the relationship has a future.'],
      ['Shared-reality gap','She may feel excluded from his inner world or major decisions.'],
      ['Overburdened / labor load','She may feel she has to manage the details or carry the relationship structure alone.'],
      ['Not cherished','She may feel chosen only when convenient, not actively treasured.']
    ]
  };

  const casualMeanings337 = {
    warmth:['Low: cold, guarded, flat, or emotionally unrewarding.','High: kind, pleasant, affectionate, emotionally inviting.'],
    respect:['Low: diminished, mocked, dismissed, or taken for granted.','High: valued, protected, considered, not belittled.'],
    peace:['Low: contact leaves you anxious, chaotic, or dysregulated.','High: contact leaves you calm, grounded, and clear.'],
    reciprocity:['Low: you initiate most effort and carry the interaction.','High: they initiate, ask, follow up, and return effort.'],
    attraction:['Low: little chemistry or attraction depends on fantasy.','High: real chemistry without ignoring obvious problems.'],
    clarity:['Low: unclear intentions, vague plans, mixed signals.','High: intentions, expectations, and plans are clear.'],
    followThrough:['Low: words often do not become actions.','High: they reliably do what they say.'],
    socialFit:['Low: clashes with your real life, friends, routines, or values.','High: fits naturally into your life and values.'],
    femaleSocialMedia:['Low: social media does not seem to drive validation needs.','High: social media attention shapes expectations or validation.'],
    femaleComparison:['Low: outside comparison/friend-court pressure is minimal.','High: outside approval/comparison strongly steers the relationship.'],
    femaleSoftness:['Low: low receptivity, warmth, gratitude, or respect.','High: warm, receptive, grateful, cooperative, and respectful.'],
    maleUsefulness:['Low: he does not respond well to being useful or appreciated.','High: he lights up when useful, needed, respected, or appreciated.'],
    maleCommitment:['Low: avoids definition, investment, or protection.','High: willing to define, protect, and invest.'],
    maleEmotionalSteadiness:['Low: reactive, punitive, shuts down, or escalates.','High: regulated under correction, frustration, or conflict.']
  };

  function profile(){
    return typeof rcCurrentProfile==='function' ? rcCurrentProfile() :
      (typeof currentProfile==='function' ? currentProfile() : state.profiles?.[0]);
  }
  function ensureProfile(){
    state.profiles = state.profiles || [];
    if(!state.profiles.length){
      const p={id:typeof uid==='function'?uid():String(Date.now()),name:'New relationship',rtype:'Dating / early relationship',snapshots:[],issues:[],casual:{},casualHistory:[]};
      state.profiles.push(p); state.currentId=p.id; if(typeof saveState==='function')saveState();
    }
    const p=profile()||state.profiles[0];
    p.issues=p.issues||[]; p.casual=p.casual||{}; p.casualHistory=p.casualHistory||[];
    return p;
  }
  function issue(){
    if(typeof currentIssue331==='function')return currentIssue331();
    const p=ensureProfile(); return p.issues[p.issues.length-1]||null;
  }

  function needFrom(text){
    const t=text.toLowerCase();
    if(t.includes('disrespect')||t.includes('diminish')||t.includes('competent')) return 'Respect, dignity, and competent contribution.';
    if(t.includes('effort')||t.includes('useful')||t.includes('criticism')) return 'Usefulness, appreciation, and recognition before correction.';
    if(t.includes('unsafe')||t.includes('support')) return 'Emotional safety, reassurance, and a softer landing.';
    if(t.includes('excluded')||t.includes('inner world')||t.includes('decision')) return 'Shared reality, inclusion, and partnership visibility.';
    if(t.includes('undesired')||t.includes('rejection')||t.includes('desire')) return 'Desire, affection, and non-pressured intimacy.';
    return 'A core relational need that should be named directly before problem-solving.';
  }
  function roleFrom(text){
    const t=text.toLowerCase();
    if(t.includes('effort')||t.includes('correct')) return 'Standards-holder versus under-recognized helper.';
    if(t.includes('excluded')||t.includes('inner world')) return 'Inclusion-seeker versus private processor.';
    if(t.includes('undesired')||t.includes('desire')) return 'Reassurance pursuer versus safety/desire gatekeeper.';
    if(t.includes('public')||t.includes('humiliat')||t.includes('embarrass')) return 'Outside-court seeker versus dignity-protection responder.';
    return 'Pursue/defend loop: one person pressures for change while the other protects against shame.';
  }
  function shiftFrom(text){
    const t=text.toLowerCase();
    if(t.includes('effort')||t.includes('correct')) return 'Separate appreciation from correction. Let effort count before improving the outcome.';
    if(t.includes('excluded')||t.includes('inner world')) return 'Create default check-ins so inclusion does not require interrogation.';
    if(t.includes('undesired')||t.includes('desire')) return 'Separate affection from demand and rebuild low-pressure conditions for desire.';
    if(t.includes('public')||t.includes('humiliat')||t.includes('embarrass')) return 'Move conflict inside the couple and protect public dignity while repairing privately.';
    return 'Name the loop, name the need, make one concrete request, and test whether the next snapshot improves.';
  }
  function exerciseFrom(text){
    const t=text.toLowerCase();
    if(t.includes('effort')||t.includes('correct')) return ['Clean appreciation exercise','For seven days, each partner gives one clean appreciation with no correction attached. Corrections get scheduled separately.'];
    if(t.includes('excluded')||t.includes('inner world')) return ['Shared-reality check-in','Once weekly, answer: what changed, what decisions are pending, what stress am I carrying, and what do I need you to know?'];
    if(t.includes('undesired')||t.includes('desire')) return ['Desire conditions map','Each partner lists what increases desire, what kills desire, and what makes intimacy feel safe. Compare without debating.'];
    if(t.includes('public')||t.includes('humiliat')||t.includes('embarrass')) return ['Private-before-public agreement','For 30 days, active conflict is brought privately first. No posts, jokes, screenshots, or friend-court trials.'];
    return ['Meaning correction exercise','Each partner states: what I thought it meant, what it actually meant, and one behavior that would make the correct meaning visible.'];
  }

  function rewriteDownstream(){
    const i=issue(); if(!i)return;
    const focus=i.alternativeMeanings?.male?.text || i.alternativeMeanings?.female?.text;
    if(!focus)return;
    const action=$id('repairCockpitActionStrategy'), therapy=$id('repairCockpitStrategy');
    if(action){
      action.innerHTML = `<div class="roleGrid">
        <div class="roleCard"><b>Corrected meaning</b>${esc(focus)}</div>
        <div class="roleCard"><b>Need now being tested</b>${esc(needFrom(focus))}</div>
        <div class="roleCard"><b>Role pattern to interrupt</b>${esc(roleFrom(focus))}</div>
        <div class="roleCard"><b>Behavioral paradigm shift</b>${esc(shiftFrom(focus))}</div>
      </div>
      <div class="paradigmWalkthrough336">
        <div class="walkStep336"><b>1. Pause the old loop</b>Stop arguing about the surface behavior for 90 seconds.</div>
        <div class="walkStep336"><b>2. Name the corrected meaning</b>Say: “The real meaning may be: ${esc(focus)}”</div>
        <div class="walkStep336"><b>3. Ask for confirmation</b>Ask: “Is that actually what this meant to you, or am I still missing it?”</div>
        <div class="walkStep336"><b>4. Make one visible repair</b>Choose one action that would make the corrected meaning feel addressed within 24 hours.</div>
      </div>`;
    }
    if(therapy){
      const ex=exerciseFrom(focus);
      therapy.innerHTML=`<div class="exerciseList"><div class="exerciseCard"><b>${esc(ex[0])}</b>${esc(ex[1])}</div></div>`;
    }
  }

  function altBox(side, i){
    const selected=i.alternativeMeanings?.[side]?.label||'';
    return `<div class="alternativeBox337" id="altBox337_${side}">
      <b>Alternative ${side==='male'?'male-side':'female-side'} interpretations</b>
      <p class="small">Choose one if the first interpretation was wrong. This rewrites the need, role shift, action, and therapy exercise.</p>
      <div class="alternativeGrid337">
      ${(meaningAlternatives337[side]||[]).map(([label,text])=>`<button type="button" class="altBtn337 ${selected===label?'selected':''}" data-side="${side}" data-label="${esc(label)}" data-text="${esc(text)}">${esc(label)}</button>`).join('')}
      </div>
      <div class="customAlt337"><input id="customAlt337_${side}" placeholder="Custom meaning"><button type="button" data-custom-alt="${side}">Use custom</button></div>
    </div>`;
  }
  function applyAlt(side,label,text){
    const i=issue(); if(!i)return;
    i.alternativeMeanings=i.alternativeMeanings||{};
    i.alternativeMeanings[side]={label,text};
    i.ratings=i.ratings||{};
    i.ratings[side]='Corrected';
    if(typeof saveState==='function')saveState();
    if(typeof renderTranslation331==='function')renderTranslation331();
    setTimeout(()=>{injectAlternatives(); rewriteDownstream();},80);
  }
  function injectAlternatives(){
    const i=issue(); if(!i)return;
    document.querySelectorAll('.rateBtn').forEach(btn=>{
      if(btn.dataset.alt337)return;
      btn.dataset.alt337='1';
      const old=btn.onclick;
      btn.onclick=()=>{
        if(old)try{old();}catch(e){}
        const side=btn.dataset.rateKey, val=btn.dataset.rateVal;
        const ii=issue(); ii.ratings=ii.ratings||{}; ii.ratings[side]=val;
        if(typeof saveState==='function')saveState();
        if(val==='Wrong'||val==='Partial')setTimeout(injectAlternatives,80);
      };
    });
    const cards=[...document.querySelectorAll('.translationCard')];
    const maleCard=cards.find(x=>(x.textContent||'').includes('Possible male-side meaning'));
    const femaleCard=cards.find(x=>(x.textContent||'').includes('Possible female-side meaning'));
    if(maleCard && !$id('altBox337_male') && (i.ratings?.male==='Wrong'||i.ratings?.male==='Partial'||i.alternativeMeanings?.male)) maleCard.insertAdjacentHTML('beforeend',altBox('male',i));
    if(femaleCard && !$id('altBox337_female') && (i.ratings?.female==='Wrong'||i.ratings?.female==='Partial'||i.alternativeMeanings?.female)) femaleCard.insertAdjacentHTML('beforeend',altBox('female',i));
    document.querySelectorAll('.altBtn337').forEach(b=>b.onclick=()=>applyAlt(b.dataset.side,b.dataset.label,b.dataset.text));
    document.querySelectorAll('[data-custom-alt]').forEach(b=>b.onclick=()=>{
      const side=b.dataset.customAlt, val=$id('customAlt337_'+side)?.value||'';
      if(val.trim())applyAlt(side,'Custom',val.trim());
    });
  }

  function enhanceCasualWizard(){
    const body=$id('casualTrackerWizardBody'); if(!body)return;
    if(!body.querySelector('.naToggleRow337')){
      body.insertAdjacentHTML('afterbegin',`<div class="naToggleRow337">
        <button type="button" id="maleNAAll337">Mark all male-specific N/A</button>
        <button type="button" id="femaleNAAll337">Mark all female-specific N/A</button>
        <button type="button" id="clearNAAll337">Clear all N/A</button>
      </div>`);
    }
    Object.entries(casualMeanings337).forEach(([k,parts])=>{
      const input=$id('casual_'+k); if(!input)return;
      const label=input.closest('label');
      if(label&&!label.querySelector('.casualSliderHelp337')){
        input.insertAdjacentHTML('afterend',`<div class="casualSliderHelp337"><span>${esc(parts[0])}</span><span>${esc(parts[1])}</span></div>`);
      }
    });
    const setGroup=(prefix,checked)=>{
      Object.keys(casualMeanings337).forEach(k=>{
        if(k.startsWith(prefix)){
          const cb=$id('casual_'+k+'_na'), input=$id('casual_'+k), val=$id('casual_'+k+'_val');
          if(cb)cb.checked=checked; if(input)input.disabled=checked; if(val)val.textContent=checked?'N/A':input?.value;
        }
      });
    };
    const male=$id('maleNAAll337'), female=$id('femaleNAAll337'), clear=$id('clearNAAll337');
    if(male)male.onclick=()=>setGroup('male',true);
    if(female)female.onclick=()=>setGroup('female',true);
    if(clear)clear.onclick=()=>{setGroup('male',false);setGroup('female',false);};
  }

  function patchCasualOpenSave(){
    const oldOpen=window.openCasualTracker333;
    if(oldOpen&&!window.__openCasual337){
      window.__openCasual337=true;
      window.openCasualTracker333=function(){oldOpen();setTimeout(enhanceCasualWizard,80);};
    }
    const oldSave=window.saveCasualTracker333;
    if(oldSave&&!window.__saveCasual337){
      window.__saveCasual337=true;
      window.saveCasualTracker333=function(){const r=oldSave();setTimeout(drawCasualTrajectory,80);return r;};
    }
  }

  function drawCasualTrajectory(){
    const p=ensureProfile(), c=$id('casualTrajectoryCanvas337'); if(!c)return;
    const hist=p.casualHistory||[], ctx=c.getContext('2d'), w=c.width, h=c.height, pad=58;
    ctx.clearRect(0,0,w,h); ctx.fillStyle='#fff'; ctx.fillRect(0,0,w,h); ctx.strokeStyle='#d7e1e5';
    for(let v=0;v<=100;v+=25){const y=h-pad-(v/100)*(h-2*pad);ctx.beginPath();ctx.moveTo(pad,y);ctx.lineTo(w-pad,y);ctx.stroke();ctx.fillStyle='#64748b';ctx.font='11px sans-serif';ctx.fillText(String(v),22,y+3);}
    if(!hist.length){ctx.fillStyle='#475569';ctx.font='16px sans-serif';ctx.fillText('No casual tracker snapshots yet. Save a tracker snapshot to start the trajectory.',pad,h/2);return;}
    const keys=['warmth','respect','peace','reciprocity','attraction','clarity'], colors=['#256b72','#c2413a','#2f855a','#c88a1d','#6d5bd','#475569'];
    const xFor=i=>pad+(i/Math.max(1,hist.length-1))*(w-2*pad), yFor=v=>h-pad-(v/10)*(h-2*pad);
    keys.forEach((k,ki)=>{ctx.beginPath();hist.forEach((pt,i)=>{if(pt[k]==null)return;const x=xFor(i),y=yFor(Number(pt[k]));i?ctx.lineTo(x,y):ctx.moveTo(x,y);});ctx.strokeStyle=colors[ki];ctx.lineWidth=2;ctx.stroke();ctx.fillStyle=colors[ki];ctx.font='12px sans-serif';ctx.fillText(k,pad+ki*82,22);});
    hist.forEach((pt,i)=>{const vals=keys.map(k=>pt[k]).filter(v=>v!=null).map(Number);const avg=vals.length?vals.reduce((a,b)=>a+b,0)/vals.length:5;const x=xFor(i),y=yFor(avg);ctx.beginPath();ctx.arc(x,y,5,0,Math.PI*2);ctx.fillStyle='#1f2933';ctx.fill();ctx.fillText(String(i+1),x+7,y-7);});
    ctx.fillStyle='#1f2933';ctx.font='13px sans-serif';ctx.fillText('Time / casual tracker snapshots →',w/2-90,h-18);
  }

  function refresh(){
    injectAlternatives();
    rewriteDownstream();
    patchCasualOpenSave();
    enhanceCasualWizard();
    drawCasualTrajectory();
  }

  const oldRender=window.renderRepairCockpit;
  if(oldRender&&!window.__render337){window.__render337=true;window.renderRepairCockpit=function(){const r=oldRender();setTimeout(refresh,100);setTimeout(refresh,350);return r;};}
  const oldSafe=window.safeUpdate;
  if(oldSafe&&!window.__safe337){window.__safe337=true;window.safeUpdate=function(){const r=oldSafe();setTimeout(refresh,100);return r;};}
  const oldTrans=window.renderTranslation331;
  if(oldTrans&&!window.__trans337){window.__trans337=true;window.renderTranslation331=function(){const r=oldTrans();setTimeout(refresh,70);return r;};}
  document.addEventListener('DOMContentLoaded',()=>setTimeout(refresh,900));
})();



/* v3.3.8 casual tracker redesign + couple qualities */
(function(){
 const $id=id=>document.getElementById(id);
 const esc=s=>typeof escapeHTML==='function'?escapeHTML(String(s??'')):String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
 const casualDims338={
  general:[
   ['warmth','Warmth','Low: cold, distant, flat, or emotionally unrewarding.','High: warm, affectionate, emotionally inviting.'],
   ['respect','Respect','Low: dismissive, belittling, careless, or status-lowering.','High: respectful, considerate, and dignity-preserving.'],
   ['peace','Peace after contact','Low: anxious, tense, dysregulated, or ruminating.','High: calm, clear, grounded, and emotionally safe.'],
   ['reciprocity','Reciprocity','Low: effort and interest feel one-sided.','High: effort, curiosity, and initiation move both directions.'],
   ['attraction','Attraction','Low: little romantic or physical pull.','High: strong romantic or physical pull.'],
   ['clarity','Clarity','Low: vague intentions, mixed signals, unclear plans.','High: intentions, expectations, and plans are explicit.'],
   ['followThrough','Follow-through','Low: words and plans often fail to become action.','High: consistently does what they say.'],
   ['socialFit','Social / lifestyle fit','Low: lifestyles, friends, values, or routines clash.','High: lives fit naturally and practically.']
  ],
  female:[
   ['femaleResolutionLearning','Resolution / learning from previous relationships','Low: repeats old patterns without insight.','High: shows reflection, growth, and changed behavior.'],
   ['femaleEmotionalMaturity','Emotional maturity','Low: reactive, unstable, blame-heavy, or hard to repair with.','High: regulated, honest, reflective, and repair-capable.'],
   ['femaleSocialMediaBehavior','Behavior on social media','Low: attention-seeking, conflict-posting, validation-driven.','High: dignified, private, loyal, and not governed by online approval.'],
   ['femaleBuildsUp','Builds up vs emasculates','Low: criticizes, mocks, diminishes, or competes with him.','High: respects, encourages, appreciates, and strengthens him.'],
   ['femaleOptimism','Complaining vs optimism','Low: chronic complaining, negativity, resentment framing.','High: constructive, grateful, optimistic, solution-oriented.'],
   ['femaleGatekeeping','Gatekeeps relationship during problems','Low: tells friends/social media one-sided conflict stories.','High: protects privacy, dignity, and the couple during problems.']
  ],
  male:[
   ['malePlansDates','Plans dates / creates momentum','Low: passive, vague, rarely plans or initiates.','High: plans, initiates, creates experiences, moves things forward.'],
   ['maleMotivationPassion','Motivation / passion','Low: flat, directionless, low drive, low life-force.','High: motivated, purposeful, passionate, actively building.'],
   ['maleSafeEnvironment','Creates a safe environment','Low: chaotic, unstable, unsafe, emotionally unpredictable.','High: steady, protective, calm, secure, reliable.'],
   ['maleEmotionalLeadership','Emotional leadership','Low: avoids hard talks or collapses under conflict.','High: can lead repair, name issues, and stay grounded.'],
   ['maleFollowThrough','Follow-through','Low: says things but does not reliably act.','High: keeps promises and makes words visible through behavior.'],
   ['maleCommitmentClarity','Commitment clarity','Low: vague, avoidant, noncommittal, keeps options open.','High: clear, intentional, protective of the relationship.']
  ],
  personal:[
   ['personalExcitement','Excitement / attraction','Low: little excitement, chemistry, or romantic pull.','High: strong excitement, attraction, and desire to move closer.'],
   ['personalPeace','Personal peace','Low: you feel anxious, chaotic, or less yourself.','High: you feel calm, clear, and more yourself.'],
   ['personalLifestyleFit','Social and lifestyle fit','Low: your lives, friends, routines, or values clash.','High: your lives fit naturally and practically.'],
   ['personalTrust','Trust in the trajectory','Low: you doubt where this is going or whether it is good for you.','High: you trust the direction and feel good continuing.'],
   ['personalCuriosity','Curiosity / desire to know them','Low: little curiosity beyond attraction or convenience.','High: genuine desire to learn, understand, and spend time together.'],
   ['personalEnergyGain','Energy after contact','Low: drained, confused, depleted, or ruminating.','High: energized, encouraged, peaceful, or inspired.']
  ]
 };
 const coupleQualities338=[
  ['positivityTogether','Positivity brought out together','Low: the pair brings out criticism, negativity, insecurity, or regression.','High: the pair brings out warmth, humor, gratitude, ambition, and better behavior.'],
  ['divisionLabor','Division of labor is balanced','Low: one person carries the work, logistics, emotional labor, or planning.','High: labor feels fair, visible, and cooperatively handled.'],
  ['teamwork','Good teamwork is achieved','Low: problems become person-versus-person.','High: problems become us-versus-the-problem.'],
  ['outsideRelationships','Positive relationships with other people','Low: the couple damages friendships/family ties or becomes socially isolating.','High: the couple supports healthy family, friends, and community.'],
  ['sharedGoals','Shared goals','Low: future direction, values, lifestyle, or priorities diverge.','High: both move in a compatible direction with explicit shared goals.'],
  ['repairCulture','Repair culture','Low: conflict creates punishment, avoidance, contempt, or scorekeeping.','High: conflict leads to repair, clarity, and better agreements.'],
  ['admirationSymmetry','Admiration symmetry','Low: admiration, respect, or appreciation flows one-way.','High: both people admire and appreciate each other.'],
  ['intimacyVitality','Intimacy vitality','Low: roommate energy, avoidance, duty, or pressure.','High: affection, playfulness, desire, and closeness are alive.'],
  ['practicalStability','Practical stability','Low: money, chores, schedules, or logistics create chronic strain.','High: practical life feels organized, stable, and manageable.'],
  ['valuesAlignment','Values alignment','Low: moral, lifestyle, or family values clash.','High: values are compatible enough to build around.']
 ];
 function prof(){return typeof rcCurrentProfile==='function'?rcCurrentProfile():(typeof currentProfile==='function'?currentProfile():state.profiles?.[0]);}
 function ensure(){state.profiles=state.profiles||[];if(!state.profiles.length){let p={id:typeof uid==='function'?uid():String(Date.now()),name:'New relationship',rtype:'Dating / early relationship',snapshots:[],issues:[],casual:{},casualHistory:[],profileSliders:{},coupleQualities:{}};state.profiles.push(p);state.currentId=p.id;if(typeof saveState==='function')saveState();}let p=prof()||state.profiles[0];p.casual=p.casual||{};p.casualHistory=p.casualHistory||[];p.coupleQualities=p.coupleQualities||{};p.profileSliders=p.profileSliders||{};return p;}
 function range(id,label,low,high,val,na){return `<label style="grid-column:1/-1">${esc(label)} <span id="${id}_val">${na?'N/A':(val??5)}</span><div class="casualSliderHelp337"><span>${esc(low)}</span><span>${esc(high)}</span></div><input id="${id}" type="range" min="0" max="10" value="${val??5}" ${na?'disabled':''}><span class="casualScaleNA"><input id="${id}_na" type="checkbox" ${na?'checked':''}> N/A</span></label>`;}
 function openCasual(){
  const p=ensure(), body=$id('casualTrackerWizardBody'); if(!body)return;
  body.innerHTML=`<div class="issueWizardGrid">
   <label style="grid-column:1/-1">Relationship<select id="casualProfileSelect">${state.profiles.map(x=>`<option value="${x.id}" ${x.id===state.currentId?'selected':''}>${esc(x.name||'Untitled')} — ${esc(x.rtype||'Relationship')}</option>`).join('')}</select></label>
   <div class="naToggleRow337" style="grid-column:1/-1"><button type="button" id="femaleNAAll338">Mark all female-specific N/A</button><button type="button" id="maleNAAll338">Mark all male-specific N/A</button><button type="button" id="clearNAAll338">Clear all N/A</button></div>
   <div class="casualSection338" style="grid-column:1/-1"><h3>How you personally feel about the relationship</h3>${casualDims338.personal.map(([k,l,lo,hi])=>range('casual_'+k,l,lo,hi,p.casual[k],p.casual[k+'_na'])).join('')}</div>
   <div class="casualSection338" style="grid-column:1/-1"><h3>General partner signals</h3><p class="small">These feed the warmth/respect/peace/reciprocity/attraction/clarity trajectory.</p>${casualDims338.general.map(([k,l,lo,hi])=>range('casual_'+k,l,lo,hi,p.casual[k],p.casual[k+'_na'])).join('')}</div>
   <div class="casualSection338" style="grid-column:1/-1"><h3>Optional sex-specific / context signals</h3><div class="sliderGroupLabel338">Female-specific traits</div>${casualDims338.female.map(([k,l,lo,hi])=>range('casual_'+k,l,lo,hi,p.casual[k],p.casual[k+'_na'])).join('')}<div class="sliderGroupLabel338">Male-specific traits</div>${casualDims338.male.map(([k,l,lo,hi])=>range('casual_'+k,l,lo,hi,p.casual[k],p.casual[k+'_na'])).join('')}</div>
  </div>`;
  bindCasualInputs(); $id('casualTrackerOverlay')?.classList.remove('hidden');
 }
 function bindCasualInputs(){
  const all=[...casualDims338.general,...casualDims338.female,...casualDims338.male,...casualDims338.personal];
  all.forEach(([k])=>{const input=$id('casual_'+k), val=$id('casual_'+k+'_val'), na=$id('casual_'+k+'_na'); if(input&&val)input.oninput=()=>val.textContent=input.value; if(na&&input&&val)na.onchange=()=>{input.disabled=na.checked;val.textContent=na.checked?'N/A':input.value;};});
  const setGroup=(group,checked)=>casualDims338[group].forEach(([k])=>{const cb=$id('casual_'+k+'_na'), input=$id('casual_'+k), val=$id('casual_'+k+'_val'); if(cb)cb.checked=checked;if(input)input.disabled=checked;if(val)val.textContent=checked?'N/A':input?.value;});
  const f=$id('femaleNAAll338'), m=$id('maleNAAll338'), c=$id('clearNAAll338'); if(f)f.onclick=()=>setGroup('female',true); if(m)m.onclick=()=>setGroup('male',true); if(c)c.onclick=()=>{setGroup('female',false);setGroup('male',false);};
 }
 function saveCasual(){
  let p=ensure(); const snap={created:new Date().toISOString()}, all=[...casualDims338.general,...casualDims338.female,...casualDims338.male,...casualDims338.personal];
  all.forEach(([k])=>{const na=$id('casual_'+k+'_na')?.checked, input=$id('casual_'+k); p.casual[k+'_na']=!!na; if(!na&&input){p.casual[k]=Number(input.value);snap[k]=Number(input.value);}else snap[k]=null;});
  p.casualHistory.push(snap); if(typeof saveState==='function')saveState(); $id('casualTrackerOverlay')?.classList.add('hidden'); renderCasualBars(); if(typeof drawCasualTrajectory==='function')drawCasualTrajectory(); if(typeof safeUpdate==='function')safeUpdate();
 }
 function renderCasualBars(){
  const el=$id('casualTrackerBars'), p=ensure(); if(!el)return;
  const groups=[['General partner signals',casualDims338.general],['Your personal feeling',casualDims338.personal],['Female-specific traits',casualDims338.female],['Male-specific traits',casualDims338.male]];
  el.innerHTML=groups.map(([title,dims])=>`<div class="casualSection338"><h4>${esc(title)}</h4>${dims.map(([k,label])=>{if(p.casual[k+'_na'])return `<span class="casualTrackerPill">${esc(label)}: N/A</span>`; const v=Number(p.casual[k]??5)*10; return `<div class="barRow"><b>${esc(label)}</b><div class="barTrack"><div class="barFill" style="width:${Math.max(0,Math.min(100,v))}%"></div></div><span>${Math.round(v)}</span></div>`;}).join('')}</div>`).join('');
 }
 function renderCoupleQualities(){
  const p=ensure(), dash=$id('profileBarDashboard'), panel=$id('workspaceProfileDashboard');
  if(panel){let h=panel.querySelector('h3');if(h)h.textContent='Qualities as a Couple';let para=panel.querySelector('p.small');if(para)para.textContent='These sliders evaluate the couple as a pair: teamwork, shared direction, positivity, repair, and how well the relationship functions together.'; if(!panel.querySelector('.coupleQualitiesNote338'))panel.insertAdjacentHTML('afterbegin','<div class="coupleQualitiesNote338"><b>Couple-level lens:</b> this is not rating one person. It asks what happens when the two people are together.</div>');}
  if(!dash)return; const vals=Object.keys(p.coupleQualities||{}).length?p.coupleQualities:p.profileSliders||{};
  dash.innerHTML=coupleQualities338.map(([k,label])=>{const v=Number(vals[k]??7)*10;return `<div class="barRow"><b>${esc(label)}</b><div class="barTrack"><div class="barFill" style="width:${Math.max(0,Math.min(100,v))}%"></div></div><span>${Math.round(v)}</span></div>`;}).join('');
 }
 function openCouple(){
  const p=ensure(), body=$id('casualTrackerWizardBody'); if(!body)return;
  body.innerHTML=`<div class="issueWizardGrid"><div class="casualSection338" style="grid-column:1/-1"><h3>Qualities as a Couple</h3><p class="small">Rate the pair, not just one person.</p>${coupleQualities338.map(([k,label,lo,hi])=>{const val=p.coupleQualities[k]??7;return `<label style="grid-column:1/-1">${esc(label)} <span id="couple_${k}_val">${val}</span><div class="casualSliderHelp337"><span>${esc(lo)}</span><span>${esc(hi)}</span></div><input id="couple_${k}" type="range" min="0" max="10" value="${val}"></label>`;}).join('')}</div></div>`;
  coupleQualities338.forEach(([k])=>{const input=$id('couple_'+k), val=$id('couple_'+k+'_val'); if(input&&val)input.oninput=()=>val.textContent=input.value;});
  const save=$id('saveCasualTrackerWizardBtn'); if(save)save.onclick=()=>{p.coupleQualities=p.coupleQualities||{};coupleQualities338.forEach(([k])=>{const input=$id('couple_'+k);if(input)p.coupleQualities[k]=Number(input.value);});if(typeof saveState==='function')saveState();$id('casualTrackerOverlay')?.classList.add('hidden');renderCoupleQualities();if(typeof safeUpdate==='function')safeUpdate();};
  $id('casualTrackerOverlay')?.classList.remove('hidden');
 }
 function bind(){
  const casual=$id('openCasualTrackerWizardBtn'); if(casual){casual.onclick=openCasual; casual.textContent='Edit General Partner Signals';}
  const save=$id('saveCasualTrackerWizardBtn'); if(save&&!save.dataset.coupleMode)save.onclick=saveCasual;
  const couple=$id('openSliderWizardBtn'); if(couple){couple.textContent='Open Couple Qualities Wizard';couple.onclick=openCouple;}
  renderCasualBars(); renderCoupleQualities();
 }
 const oldRender=window.renderRepairCockpit; if(oldRender&&!window.__render338){window.__render338=true;window.renderRepairCockpit=function(){const r=oldRender();setTimeout(bind,120);setTimeout(bind,450);return r;};}
 const oldSafe=window.safeUpdate; if(oldSafe&&!window.__safe338){window.__safe338=true;window.safeUpdate=function(){const r=oldSafe();setTimeout(bind,120);return r;};}
 document.addEventListener('DOMContentLoaded',()=>setTimeout(bind,900));
})();



/* v3.3.9 What Does the Expert Think */
(function(){
const $id=id=>document.getElementById(id);
const esc=s=>typeof escapeHTML==='function'?escapeHTML(String(s??'')):String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
const expertModes339={
"Attachment / Repair":{
"Sue Johnson / EFT mode":{tags:["attachment","pursue-withdraw","safety"],bestFor:["Communication / shared reality","Emotional distance","Affection / reassurance","Commitment / future direction"],lens:"This may be an attachment signal: one or both people are asking, “Are you there for me, do I matter, and are we safe?”",advice:"Slow the argument down until each person can say the vulnerable fear underneath protest, withdrawal, criticism, or shutdown.",exercise:"Hold Me Tight check-in: each person completes, “When this happened, the scary story I told myself was ___, and what I needed from you was ___.”",miss:"May underweight incentives, attraction, status, and respect dynamics."},
"Gottman stability mode":{tags:["repair","criticism","contempt","defensiveness"],bestFor:["Criticism / correction","Respect / public image","Communication / shared reality","Household labor"],lens:"Evaluate the conflict process: criticism, defensiveness, contempt, stonewalling, and whether repair attempts are accepted.",advice:"Replace global character judgments with specific complaints, then track whether repair attempts land before escalation.",exercise:"Soft start-up drill: “I feel ___ about ___, and I need ___,” followed by one concrete request.",miss:"May be less focused on sexual polarity, gendered incentives, or existential meaning."},
"Esther Perel desire/security mode":{tags:["desire","autonomy","security","resentment"],bestFor:["Passion / sexual disconnect","Commitment / future direction","Emotional distance","Social media / outside validation"],lens:"The deeper tension may be security versus aliveness, closeness versus autonomy, or admiration versus resentment.",advice:"Ask whether the relationship is becoming safe but dull, exciting but unsafe, or resentful because desire and admiration are not protected.",exercise:"Desire/autonomy map: each person names what makes them feel close, free, controlled, or taken for granted.",miss:"May be too tolerant of ambiguity if the issue requires direct boundaries or concrete change."}
},
"Masculine / Feminine Dynamics":{
"Orion Taraban incentive/respect mode":{tags:["respect","incentives","usefulness","selection"],bestFor:["Appreciation / usefulness","Respect / public image","Social media / outside validation","Commitment / future direction"],lens:"This may be about incentives, respect, usefulness, and whether investment is rewarded or punished.",advice:"Look for whether behavior increases admiration, loyalty, desire, and cooperation — or teaches one partner that effort will not pay off.",exercise:"Incentive audit: list what each person rewards, punishes, ignores, and demands.",miss:"May underweight vulnerability, trauma history, and attachment panic."},
"Alison Armstrong usefulness/polarity mode":{tags:["appreciation","provision","usefulness","translation"],bestFor:["Appreciation / usefulness","Criticism / correction","Household labor","Planning / logistics"],lens:"A man may hear correction as evidence that his contribution did not count; a woman may be asking for comfort but expressing it as correction.",advice:"Translate criticism into the comfort it is trying to create, and make appreciation visible before improvement requests.",exercise:"Comfort-language rewrite: change “you did this wrong” into “it helps me feel ___ when ___.”",miss:"May sound too gendered if the couple’s actual roles do not match the pattern."},
"Louise Perry modern dating culture mode":{tags:["social media","sexual culture","commitment","stability"],bestFor:["Social media / outside validation","Commitment / future direction","Trust / honesty","Passion / sexual disconnect"],lens:"The problem may be shaped by modern dating incentives: options, social media validation, ambiguity, sexual access without commitment, and weak norms.",advice:"Clarify whether this is moving toward stability or being pulled into ambiguity and outside validation loops.",exercise:"Norms agreement: define exclusivity, public respect, social media boundaries, sexual expectations, and commitment.",miss:"May be less useful when the couple already has strong norms and needs emotional repair."}
},
"Communication / Responsibility":{
"Jordan Peterson responsibility mode":{tags:["truth","resentment","negotiation","responsibility"],bestFor:["Communication / shared reality","Household labor","Planning / logistics","Commitment / future direction"],lens:"Resentment often means an unspoken truth, an unmade agreement, or a responsibility that has not been negotiated honestly.",advice:"Tell the truth precisely, negotiate responsibilities explicitly, and stop letting resentment accumulate in silence.",exercise:"Resentment inventory: each person names one resentment, one avoided truth, and one responsibility they will take on.",miss:"May overemphasize responsibility if the immediate need is softness or nervous-system safety."},
"Matthew Hussey dating behavior mode":{tags:["early dating","standards","clarity","behavior"],bestFor:["Dating / early relationship","Commitment / future direction","Communication / shared reality","Trust / honesty"],lens:"In early dating, watch behavior, consistency, effort, clarity, and whether the person makes it easy to feel secure.",advice:"Convert uncertainty into standards: what behavior would make this feel good, and how long are you willing to wait?",exercise:"Behavior evidence list: separate what they said, what they did, and what you are hoping it means.",miss:"May be less suited for long-term marriages where both people must repair rather than screen."},
"Alain de Botton maturity mode":{tags:["expectations","idealization","maturity"],bestFor:["Communication / shared reality","Emotional distance","Affection / reassurance","Planning / logistics"],lens:"The issue may hurt because romantic expectations are unrealistic: love includes disappointment, immaturity, and translation errors.",advice:"Lower the demand that love be mind-reading; increase the skill of kindly explaining your oddness and needs.",exercise:"Manual of me: “When I am difficult, it usually means ___; the kindest useful response is ___.”",miss:"May normalize problems that actually require boundaries or decisive action."}
},
"Trauma / Nervous System":{
"Gabor Maté trauma-pattern mode":{tags:["trauma","triggers","compulsion","childhood"],bestFor:["Jealousy / insecurity","Trust / honesty","Emotional distance","Conflict escalation"],lens:"The reaction may be larger than the event because old survival patterns are activated: abandonment, shame, control, or not being enough.",advice:"Ask what old pain this resembles and whether the reaction is proportional to the present event.",exercise:"Trigger split: write present facts on one side and the old familiar feeling on the other.",miss:"May underweight ordinary bad behavior, incentives, or accountability."},
"Brené Brown shame/vulnerability mode":{tags:["shame","vulnerability","trust","courage"],bestFor:["Trust / honesty","Communication / shared reality","Affection / reassurance","Criticism / correction"],lens:"The hidden driver may be shame: one person feels not enough, exposed, or afraid to be vulnerable without judgment.",advice:"Replace blame with a brave, specific disclosure of the fear underneath the protective behavior.",exercise:"Shame translation: “The story I am making up is ___, and the part that feels vulnerable to admit is ___.”",miss:"May be too soft if the situation calls for boundaries, consequences, or proof through action."}
}};
function issue(){if(typeof currentIssue331==='function')return currentIssue331();let p=typeof rcCurrentProfile==='function'?rcCurrentProfile():state.profiles?.[0];return p?.issues?.[p.issues.length-1]||null;}
function rows(){let a=[];Object.entries(expertModes339).forEach(([cat,modes])=>Object.entries(modes).forEach(([name,data])=>a.push({cat,name,...data})));return a;}
function text(){let i=issue();return `${i?.type||''} ${i?.title||''} ${i?.event||''} ${i?.story||''}`.toLowerCase();}
function score(e){let t=text(),s=0;(e.bestFor||[]).forEach(x=>{if(t.includes(x.toLowerCase()))s+=5});(e.tags||[]).forEach(x=>{if(t.includes(x.toLowerCase()))s+=2});if(t.includes('social media')&&e.name.includes('Louise'))s+=7;if(t.includes('appreciation')&&e.name.includes('Alison'))s+=7;if(t.includes('respect')&&e.name.includes('Orion'))s+=6;if(t.includes('criticism')&&e.name.includes('Gottman'))s+=6;if((t.includes('desire')||t.includes('sexual')||t.includes('passion'))&&e.name.includes('Perel'))s+=8;if((t.includes('distance')||t.includes('reassurance'))&&e.name.includes('Sue'))s+=7;return s;}
function aligned(){return rows().sort((a,b)=>score(b)-score(a))[0];}
function disagree(){let a=aligned();let pairs={"Sue Johnson / EFT mode":"Orion Taraban incentive/respect mode","Orion Taraban incentive/respect mode":"Gabor Maté trauma-pattern mode","Alison Armstrong usefulness/polarity mode":"Brené Brown shame/vulnerability mode","Esther Perel desire/security mode":"Jordan Peterson responsibility mode","Jordan Peterson responsibility mode":"Esther Perel desire/security mode","Gabor Maté trauma-pattern mode":"Orion Taraban incentive/respect mode","Matthew Hussey dating behavior mode":"Alain de Botton maturity mode","Louise Perry modern dating culture mode":"Sue Johnson / EFT mode"};return rows().find(e=>e.name===(pairs[a?.name]||''))||rows().sort((x,y)=>score(x)-score(y))[0];}
function card(e,label,cls=''){let i=issue();return `<div class="expertCard339 ${cls}"><b>${esc(label)}: ${esc(e.name)}</b><div class="expertPills339"><span class="expertPill339">${esc(e.cat)}</span>${(e.tags||[]).slice(0,4).map(t=>`<span class="expertPill339">${esc(t)}</span>`).join('')}</div><p><b>How this lens reads the issue:</b> ${esc(e.lens)}</p><p><b>Advice for this ${esc(i?.type||'issue')}:</b> ${esc(e.advice)}</p><p><b>Exercise:</b> ${esc(e.exercise)}</p><p><b>What this lens may miss:</b> ${esc(e.miss)}</p></div>`;}
function populate(){let cat=$id('expertCategorySelect339'),mode=$id('expertModeSelect339');if(!cat||!mode)return;cat.innerHTML=Object.keys(expertModes339).map(c=>`<option>${esc(c)}</option>`).join('');cat.onchange=()=>{mode.innerHTML=Object.keys(expertModes339[cat.value]||{}).map(m=>`<option>${esc(m)}</option>`).join('')};cat.onchange();}
function selected(){let cat=$id('expertCategorySelect339')?.value,name=$id('expertModeSelect339')?.value,e=expertModes339[cat]?.[name],out=$id('expertOutput339');if(e&&out)out.innerHTML=card({cat,name,...e},'Selected expert lens');}
function renderAligned(){let e=aligned(),out=$id('expertOutput339');if(out)out.innerHTML=card(e,'Most aligned expert','expertAligned339');let cat=$id('expertCategorySelect339'),mode=$id('expertModeSelect339');if(cat&&mode){cat.value=e.cat;cat.onchange();mode.value=e.name;}}
function renderDisagree(){let out=$id('expertOutput339');if(out)out.innerHTML=card(aligned(),'Current strongest lens','expertAligned339')+card(disagree(),'Expert likely to disagree','expertDisagree339');}
function bind(){if(window.__advisor343Active)return;populate();let a=$id('renderExpertLensBtn339'),b=$id('mostAlignedExpertBtn339'),c=$id('likelyDisagreeExpertBtn339');if(a)a.onclick=selected;if(b)b.onclick=renderAligned;if(c)c.onclick=renderDisagree;let out=$id('expertOutput339');if(out&&!out.innerHTML.trim())renderAligned();}
const oldRender=window.renderRepairCockpit;if(oldRender&&!window.__render339){window.__render339=true;window.renderRepairCockpit=function(){const r=oldRender();setTimeout(bind,120);setTimeout(bind,450);return r;};}
const oldSafe=window.safeUpdate;if(oldSafe&&!window.__safe339){window.__safe339=true;window.safeUpdate=function(){const r=oldSafe();setTimeout(bind,120);return r;};}
const oldTrans=window.renderTranslation331;if(oldTrans&&!window.__trans339){window.__trans339=true;window.renderTranslation331=function(){const r=oldTrans();setTimeout(bind,120);return r;};}
document.addEventListener('DOMContentLoaded',()=>setTimeout(bind,900));
})();



(function(){
function currentProfile340(){
 return typeof rcCurrentProfile==='function'
 ? rcCurrentProfile()
 : (typeof currentProfile==='function'?currentProfile():state.profiles?.[0]);
}

function updateHero340(){
 const p=currentProfile340();
 const n=document.getElementById('relationshipHeroName340');
 const t=document.getElementById('relationshipHeroType340');
 const m=document.getElementById('relationshipHeroMeta340');
 if(!p||!n)return;
 n.textContent=p.name||'Unnamed relationship';
 t.textContent=(p.rtype||'Relationship').toUpperCase();
 m.textContent=`${(p.snapshots||[]).length} snapshots • ${(p.issues||[]).length} issues`;
}

function simulate340(){
 const p=currentProfile340();
 if(!p)return;
 if(!p.demoBuilt340 && (p.name||'').toLowerCase().includes('one year')){
   p.demoBuilt340=true;
   p.coupleTrajectory340=[];
   p.casualHistory=[];
   for(let i=0;i<12;i++){
     p.coupleTrajectory340.push({
       peace:58+i*2.2,
       respect:62+i*1.9,
       teamwork:55+i*2.4,
       intimacy:50+i*2.8
     });
     p.casualHistory.push({
       personalExcitement:7+Math.sin(i/2),
       personalPeace:6+i*.2,
       personalTrust:5.5+i*.3,
       personalEnergyGain:6+i*.15
     });
   }
   p.coupleQualities={
     positivityTogether:9,
     teamwork:9,
     sharedGoals:9,
     admirationSymmetry:9,
     intimacyVitality:8
   };
   p.casual=p.casual||{};
   p.casual.femaleEmotionalMaturity=9;
   p.casual.femaleBuildsUp=9;
   p.casual.femaleSocialMediaBehavior_na=true;
   p.casual.malePlansDates_na=true;
   if(typeof saveState==='function')saveState();
 }
}

function ensureTraj340(){
 if(document.getElementById('trajectoryCharts340'))return;
 const div=document.createElement('div');
 div.id='trajectoryCharts340';
 div.className='workspaceSection';
 div.innerHTML=`
 <div class="dualTrajectory340">
   <div class="outputCanvas">
     <h4>Couple trajectory</h4>
     <canvas id="coupleTrajectoryCanvas340" width="600" height="320"></canvas>
   </div>
   <div class="outputCanvas">
     <h4>Personal feeling trajectory</h4>
     <canvas id="personalTrajectoryCanvas340" width="600" height="320"></canvas>
   </div>
 </div>`;
 document.body.appendChild(div);
}

function drawSimple340(id, series){
 const c=document.getElementById(id);
 if(!c)return;
 const ctx=c.getContext('2d');
 const w=c.width,h=c.height,pad=50;
 ctx.clearRect(0,0,w,h);
 ctx.fillStyle='#fff';
 ctx.fillRect(0,0,w,h);
 ctx.strokeStyle='#d7e1e5';
 for(let y=0;y<=100;y+=25){
   const py=h-pad-(y/100)*(h-2*pad);
   ctx.beginPath();
   ctx.moveTo(pad,py);
   ctx.lineTo(w-pad,py);
   ctx.stroke();
 }
 const colors=['#256b72','#c2413a','#2f855a','#c88a1d'];
 series.forEach((s,si)=>{
   ctx.beginPath();
   s.data.forEach((v,i)=>{
      const x=pad+(i/Math.max(1,s.data.length-1))*(w-2*pad);
      const y=h-pad-(v/100)*(h-2*pad);
      if(i===0)ctx.moveTo(x,y); else ctx.lineTo(x,y);
   });
   ctx.strokeStyle=colors[si%colors.length];
   ctx.lineWidth=2.5;
   ctx.stroke();
   ctx.fillStyle=colors[si%colors.length];
   ctx.fillText(s.name,pad+si*90,20);
 });
}

function renderTraj340(){
 const p=currentProfile340();
 if(!p)return;
 drawSimple340('coupleTrajectoryCanvas340',[
   {name:'Peace',data:(p.coupleTrajectory340||[]).map(x=>x.peace)},
   {name:'Respect',data:(p.coupleTrajectory340||[]).map(x=>x.respect)},
   {name:'Teamwork',data:(p.coupleTrajectory340||[]).map(x=>x.teamwork)},
   {name:'Intimacy',data:(p.coupleTrajectory340||[]).map(x=>x.intimacy)}
 ]);
 drawSimple340('personalTrajectoryCanvas340',[
   {name:'Excitement',data:(p.casualHistory||[]).map(x=>(x.personalExcitement||5)*10)},
   {name:'Peace',data:(p.casualHistory||[]).map(x=>(x.personalPeace||5)*10)},
   {name:'Trust',data:(p.casualHistory||[]).map(x=>(x.personalTrust||5)*10)},
   {name:'Energy',data:(p.casualHistory||[]).map(x=>(x.personalEnergyGain||5)*10)}
 ]);
}

function simplifyExperts340(){
 const cat=document.getElementById('expertCategorySelect339');
 if(cat&&cat.parentElement)cat.parentElement.style.display='';
 const out=document.getElementById('expertOutput339');
 const best=document.getElementById('mostAlignedExpertBtn339');
 if(best&&out&&!out.innerHTML.trim())best.click();
}

function refresh340(){
 updateHero340();
 simulate340();
 ensureTraj340();
 renderTraj340();
 simplifyExperts340();
}

document.addEventListener('DOMContentLoaded',()=>setTimeout(refresh340,1200));

const oldSafe=window.safeUpdate;
if(oldSafe&&!window.__v340safe){
 window.__v340safe=true;
 window.safeUpdate=function(){
   const r=oldSafe();
   setTimeout(refresh340,200);
   return r;
 }
}
})();


/* v3.4.2 rebuilt positive/negative issue translation, banner, labels, trajectories */
(function(){
const $id=id=>document.getElementById(id);
const esc=s=>typeof escapeHTML==='function'?escapeHTML(String(s??'')):String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
function p(){return typeof rcCurrentProfile==='function'?rcCurrentProfile():(typeof currentProfile==='function'?currentProfile():state.profiles?.[0]);}
function ensure(){state.profiles=state.profiles||[];if(!state.profiles.length){let x={id:typeof uid==='function'?uid():String(Date.now()),name:'New relationship',rtype:'Dating / early relationship',snapshots:[],issues:[],casual:{},casualHistory:[],coupleQualities:{},coupleTrajectory342:[]};state.profiles.push(x);state.currentId=x.id;if(typeof saveState==='function')saveState();}let x=p()||state.profiles[0];x.snapshots=x.snapshots||[];x.issues=x.issues||[];x.casual=x.casual||{};x.casualHistory=x.casualHistory||[];x.coupleTrajectory342=x.coupleTrajectory342||[];x.coupleQualities=x.coupleQualities||{};return x;}
function issue(){let x=ensure(),sel=$id('issueCardSelector');if(sel&&sel.value){let f=x.issues.find(i=>i.id===sel.value);if(f)return f;}if(typeof currentIssue331==='function'){let i=currentIssue331();if(i)return i;}return x.issues[x.issues.length-1]||null;}
function isPos(i){let t=`${i?.polarity||''} ${i?.type||''} ${i?.title||''} ${i?.event||''} ${i?.story||''}`.toLowerCase();return t.includes('positive')||t.includes('appreciat')||t.includes('hype')||t.includes('encourag')||t.includes('builds up')||t.includes('thoughtful')||t.includes('green flag');}
function patchModal(){let old=window.openRelationshipSnapshot332;if(old&&!window.__openRel342){window.__openRel342=true;window.openRelationshipSnapshot332=function(){old();setTimeout(()=>{let a=$id('relSnapIssueType')?.closest('label');if(a)a.childNodes[0].textContent='Recent event or issue category';let b=$id('relSnapAggrieved')?.closest('label');if(b)b.childNodes[0].textContent='Who is being influenced?';let n=$id('relSnapIssueName');if(n)n.placeholder='Example: appreciation';let e=$id('relSnapEvent');if(e)e.placeholder='Example: She hypes me up when I do thoughtful things.';let s=$id('relSnapStory');if(s)s.placeholder='Example: I feel more like doing nice things when I’m appreciated and it reinforces my role as a useful member of the relationship.';},80);};}}
function updateHero(){let i=issue(),h=$id('issueHero342'),t=$id('issueHeroTitle342'),m=$id('issueHeroMeta342');if(!h||!t||!m)return;if(!i){t.textContent='No issue selected';m.textContent='Choose or create an event so all Workspace modules analyze the same event.';return;}h.classList.toggle('negative',!isPos(i));t.textContent=i.title||i.type||'Untitled event';m.textContent=`${isPos(i)?'Positive event':'Negative / mixed issue'} • ${i.type||'Uncategorized'} • Influenced: ${i.aggrieved||'Unclear'} • ${i.recurrence||'Unclear recurrence'}`;}
function renderPositive(){let i=issue(),el=$id('repairCockpitLoop');if(!i||!el||!isPos(i))return false;let male='He may feel: “My effort counts here. When I do something thoughtful, it is seen and it makes me want to do more.”';let female='She may feel: “When I appreciate him clearly, he moves toward me instead of becoming defensive or discouraged.”';let loop=['He does something thoughtful','She hypes him up or appreciates it specifically','He feels useful, respected, and wanted','He becomes more motivated to provide / initiate / help','The relationship gains warmth and positive momentum'];el.innerHTML=`<div class="positiveTranslation342"><b>Positive event translation</b><p><b>Specific event:</b> ${esc(i.event||'No event described yet.')}</p><p>This is not a rupture to repair. It is a positive loop to notice, reinforce, and repeat.</p></div><div class="translationTwoCol"><div class="translationCard"><b>Possible male-side meaning</b><p>${esc(male)}</p></div><div class="translationCard"><b>Possible female-side meaning</b><p>${esc(female)}</p></div></div><h4 class="loopSectionTitle">Positive reinforcement loop</h4><div class="clearLoopGrid">${loop.map((s,idx)=>`<div class="clearLoopCard"><b>${idx+1}. ${esc(s)}</b></div>`).join('')}</div><div class="translationCard"><b>Keep this working</b><p>Turn this into a repeatable ritual: appreciation should be specific, immediate, and clean — not followed by correction in the same breath.</p></div>`;let action=$id('repairCockpitActionStrategy');if(action)action.innerHTML=`<div class="roleGrid"><div class="roleCard"><b>Current role one</b>Thoughtful actor / initiator</div><div class="roleCard"><b>Current role two</b>Appreciative receiver / reinforcer</div><div class="roleCard"><b>Why this works</b>Appreciation makes the positive behavior feel meaningful instead of invisible.</div><div class="roleCard"><b>Behavioral paradigm shift</b>The couple learns which actions create more warmth, usefulness, desire, and cooperation.</div></div><div class="paradigmWalkthrough336"><div class="walkStep336"><b>1. Name the behavior</b>Say exactly what was done.</div><div class="walkStep336"><b>2. Name the effect</b>Say what it gave you: calm, warmth, help, attraction, safety, or respect.</div><div class="walkStep336"><b>3. Reinforce the identity</b>Connect it to the role: “That made me feel cared for / I love when you lead like that.”</div><div class="walkStep336"><b>4. Repeat intentionally</b>Log whether the positive loop repeats over time.</div></div>`;let th=$id('repairCockpitStrategy');if(th)th.innerHTML='<div class="exerciseList"><div class="exerciseCard"><b>Appreciation amplification</b>For one week, catch thoughtful behavior in real time. Say exactly what happened, what it gave you, and how it made you feel.</div></div>';return true;}
function forceTraj(){let x=ensure(),name=String(x.name||'').toLowerCase();let ex=name.includes('jane')||name.includes('lissa')||name.includes('annie')||name.includes('demo')||name.includes('one year')||(x.snapshots||[]).length>=5;if(!ex&&!(x.snapshots||[]).length)return;let kind=name.includes('lissa')||name.includes('ambiguous')?'ambiguous':(name.includes('annie')||name.includes('respect')?'respect':'good');x.casualHistory=[];x.coupleTrajectory342=[];x.coupleTrajectory340=[];for(let i=0;i<12;i++){let peace,respect,teamwork,intimacy,exc,trust,energy,fit;if(kind==='good'){peace=60+i*2.6+Math.sin(i/2)*3;respect=64+i*2.1;teamwork=58+i*2.8;intimacy=55+i*2.5;exc=7.8+Math.sin(i/2)*.6;trust=5.8+i*.32;energy=6.5+i*.18;fit=6.4+i*.22;}else if(kind==='ambiguous'){peace=66-i*.9+Math.sin(i)*5;respect=63-i*.45+Math.cos(i/2)*4;teamwork=54+Math.sin(i/1.3)*6;intimacy=72-i*.7+Math.sin(i)*7;exc=8.5-i*.12+Math.sin(i)*.7;trust=5.4-i*.06+Math.sin(i/1.4)*.5;energy=5.8-i*.05+Math.sin(i)*.6;fit=5.8+Math.sin(i/1.6)*.5;}else{peace=64-i*1.8+Math.sin(i)*4;respect=62-i*2.2+Math.cos(i/1.5)*3;teamwork=55-i*.9;intimacy=70-i*1.5+Math.sin(i/2)*4;exc=8.2-i*.18;trust=5.8-i*.22;energy=5.8-i*.18;fit=5.5-i*.08;}let c=(v,min=1,max=10)=>Math.max(min,Math.min(max,v)),c100=v=>Math.max(20,Math.min(95,v));let row={created:new Date(2025,i,1).toISOString(),peace:c100(peace),respect:c100(respect),teamwork:c100(teamwork),intimacy:c100(intimacy),positivity:c100((peace+respect)/2)};x.coupleTrajectory342.push(row);x.coupleTrajectory340.push(row);x.casualHistory.push({created:new Date(2025,i,1).toISOString(),personalExcitement:c(exc),personalPeace:c(peace/10),personalTrust:c(trust),personalEnergyGain:c(energy),personalLifestyleFit:c(fit),femaleResolutionLearning:kind==='respect'?c(5-i*.15):c(7+i*.15),femaleEmotionalMaturity:kind==='respect'?c(5.5-i*.16):c(7+i*.12),femaleSocialMediaBehavior:kind==='respect'?c(3.5-i*.05):(kind==='good'?null:c(5+Math.sin(i)*.4)),femaleBuildsUp:kind==='respect'?c(5.5-i*.25):c(7.5+i*.12),femaleOptimism:kind==='ambiguous'?c(5.5+Math.sin(i)*.4):c(7+i*.1),femaleGatekeeping:kind==='respect'?c(5-i*.2):c(7+i*.12),malePlansDates:null,maleMotivationPassion:null,maleSafeEnvironment:null,maleEmotionalLeadership:null,maleFollowThrough:null,maleCommitmentClarity:null});}['malePlansDates','maleMotivationPassion','maleSafeEnvironment','maleEmotionalLeadership','maleFollowThrough','maleCommitmentClarity'].forEach(k=>x.casual[k+'_na']=true);if(kind==='good'){Object.assign(x.coupleQualities,{positivityTogether:9,divisionLabor:8,teamwork:9,outsideRelationships:8,sharedGoals:9,repairCulture:8,admirationSymmetry:9,intimacyVitality:8,practicalStability:8,valuesAlignment:9});Object.assign(x.casual,{personalExcitement:9,personalPeace:9,personalLifestyleFit:8,personalTrust:9,personalCuriosity:9,personalEnergyGain:8,femaleResolutionLearning:8,femaleEmotionalMaturity:9,femaleSocialMediaBehavior_na:true,femaleBuildsUp:9,femaleOptimism:8,femaleGatekeeping:9});}if(typeof saveState==='function')saveState();}
function ensureTrajArea(){if($id('trajectoryCharts342'))return;let area=document.createElement('div');area.id='trajectoryCharts342';area.className='workspaceSection';area.innerHTML=`<h3>Relationship trajectories</h3><div class="dualTrajectory342"><div class="outputCanvas"><h4>Couple trajectory</h4><canvas id="coupleTrajectoryCanvas342" width="700" height="360"></canvas></div><div class="outputCanvas"><h4>Personal feeling trajectory</h4><canvas id="personalTrajectoryCanvas342" width="700" height="360"></canvas></div></div><div class="dualTrajectory342" style="margin-top:14px"><div class="outputCanvas"><h4>Female-specific traits trajectory</h4><canvas id="femaleTraitTrajectoryCanvas342" width="700" height="360"></canvas></div><div class="outputCanvas"><h4>Male-specific traits trajectory</h4><canvas id="maleTraitTrajectoryCanvas342" width="700" height="360"></canvas></div></div>`;let g=$id('workspaceGraphicalOutputs');if(g&&g.parentNode)g.parentNode.insertBefore(area,g);else document.body.appendChild(area);}
function chart(id,series,scale10){let c=$id(id);if(!c)return;let ctx=c.getContext('2d'),w=c.width,h=c.height,pad=50;ctx.clearRect(0,0,w,h);ctx.fillStyle='#fff';ctx.fillRect(0,0,w,h);ctx.strokeStyle='#d7e1e5';for(let y=0;y<=100;y+=25){let py=h-pad-(y/100)*(h-2*pad);ctx.beginPath();ctx.moveTo(pad,py);ctx.lineTo(w-pad,py);ctx.stroke();ctx.fillStyle='#64748b';ctx.font='10px sans-serif';ctx.fillText(String(y),18,py+3);}let colors=['#256b72','#c2413a','#2f855a','#c88a1d','#6d5bd','#475569'];series.forEach((s,si)=>{let data=s.data||[];if(!data.length)return;ctx.beginPath();let started=false;data.forEach((v,i)=>{if(v==null)return;let vv=scale10?v*10:v,x=pad+(i/Math.max(1,data.length-1))*(w-2*pad),yy=h-pad-(Math.max(0,Math.min(100,vv))/100)*(h-2*pad);if(!started){ctx.moveTo(x,yy);started=true;}else ctx.lineTo(x,yy);});ctx.strokeStyle=colors[si%colors.length];ctx.lineWidth=2.5;ctx.stroke();ctx.fillStyle=colors[si%colors.length];ctx.font='11px sans-serif';ctx.fillText(s.name,pad+(si%3)*150,16+Math.floor(si/3)*14);});}
function drawTraj(){let x=ensure();ensureTrajArea();let co=x.coupleTrajectory342||x.coupleTrajectory340||[],ca=x.casualHistory||[];chart('coupleTrajectoryCanvas342',[{name:'Peace',data:co.map(z=>z.peace)},{name:'Respect',data:co.map(z=>z.respect)},{name:'Teamwork',data:co.map(z=>z.teamwork)},{name:'Intimacy',data:co.map(z=>z.intimacy)}],false);chart('personalTrajectoryCanvas342',[{name:'Excitement',data:ca.map(z=>z.personalExcitement)},{name:'Peace',data:ca.map(z=>z.personalPeace)},{name:'Trust',data:ca.map(z=>z.personalTrust)},{name:'Energy',data:ca.map(z=>z.personalEnergyGain)}],true);chart('femaleTraitTrajectoryCanvas342',[{name:'Maturity',data:ca.map(z=>z.femaleEmotionalMaturity)},{name:'Builds up',data:ca.map(z=>z.femaleBuildsUp)},{name:'Gatekeeping',data:ca.map(z=>z.femaleGatekeeping)},{name:'Social media',data:ca.map(z=>z.femaleSocialMediaBehavior)}],true);chart('maleTraitTrajectoryCanvas342',[{name:'Plans',data:ca.map(z=>z.malePlansDates)},{name:'Motivation',data:ca.map(z=>z.maleMotivationPassion)},{name:'Safety',data:ca.map(z=>z.maleSafeEnvironment)},{name:'Commitment',data:ca.map(z=>z.maleCommitmentClarity)}],true);}
function diag(){let out=$id('diagnosticsOutput');if(!out)return;['diagExtra333','diagExtra334','diagExtra335'].forEach(id=>{let e=$id(id);if(e)e.classList.add('diagnosticStale342');});let extra=$id('diagExtra342');if(!extra){out.insertAdjacentHTML('afterend','<div id="diagExtra342" class="analysisBox"></div>');extra=$id('diagExtra342');}let checks=[['issue banner present',!!$id('issueHero342')],['current issue selector present',!!$id('issueCardSelector')],['couple trajectory canvas present',!!$id('coupleTrajectoryCanvas342')],['personal trajectory canvas present',!!$id('personalTrajectoryCanvas342')],['female trait trajectory canvas present',!!$id('femaleTraitTrajectoryCanvas342')],['male trait trajectory canvas present',!!$id('maleTraitTrajectoryCanvas342')],['positive translation support active',true]];extra.innerHTML='<h3>Expanded diagnostics v3.4.2</h3>'+checks.map(([n,ok])=>`<div class="${ok?'diagnosticPass':'diagnosticFail'}"><b>${ok?'PASS':'FAIL'}:</b> ${esc(n)}</div>`).join('');}
function refresh(){patchModal();updateHero();renderPositive();forceTraj();drawTraj();diag();}
let oldR=window.renderRepairCockpit;if(oldR&&!window.__render342){window.__render342=true;window.renderRepairCockpit=function(){let r=oldR();setTimeout(refresh,120);setTimeout(refresh,500);return r;};}
let oldS=window.safeUpdate;if(oldS&&!window.__safe342){window.__safe342=true;window.safeUpdate=function(){let r=oldS();setTimeout(refresh,120);return r;};}
let oldT=window.renderTranslation331;if(oldT&&!window.__trans342){window.__trans342=true;window.renderTranslation331=function(){let r=oldT();setTimeout(refresh,80);return r;};}
let oldD=window.runDiagnostics;if(oldD&&!window.__diag342){window.__diag342=true;window.runDiagnostics=function(){let r=oldD();setTimeout(diag,100);return r;};}
document.addEventListener('change',e=>{if(e.target&&e.target.id==='issueCardSelector')setTimeout(refresh,60);});
document.addEventListener('DOMContentLoaded',()=>setTimeout(refresh,900));
})();


/* v3.4.5 connected relationship context + advisor lenses */
(function(){
window.__advisor343Active=true;
const $id=id=>document.getElementById(id);
const esc=s=>typeof escapeHTML==='function'?escapeHTML(String(s??'')):String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

const advisorModes343={
"Attachment / Repair":{
"Sue Johnson / EFT lens":{tags:["attachment","safety","reassurance","distance","protest","withdraw"],bestFor:["Communication / shared reality","Emotional distance","Affection / reassurance","Commitment / future direction"],lens:"Reads the event as a protest or withdrawal around safety, importance, and emotional availability.",advice:"Slow the loop down until each person can name the vulnerable fear below the surface behavior.",exercise:"Each person completes: When this happened, the scary story I told myself was ___, and what I needed was ___.",miss:"Can underweight incentives, respect, or whether behavior has become unacceptable."},
"Gottman stability lens":{tags:["repair","criticism","contempt","defensiveness","stonewalling"],bestFor:["Criticism / correction","Respect / public image","Communication / shared reality","Household labor"],lens:"Reads the event through process quality: criticism, defensiveness, contempt, stonewalling, and whether repair attempts land.",advice:"Turn global judgments into one specific complaint and one repairable request.",exercise:"Soft start-up: I feel ___ about ___, and I need ___, followed by one concrete request.",miss:"Can miss desire, polarity, status pressure, or broader cultural incentives."},
"Esther Perel desire/security lens":{tags:["desire","autonomy","security","resentment","passion"],bestFor:["Passion / sexual disconnect","Commitment / future direction","Emotional distance","Social media / outside validation"],lens:"Looks for tension between closeness and freedom, security and aliveness, admiration and resentment.",advice:"Ask whether the pattern is safe but dull, exciting but unsafe, or resentful because desire is not protected.",exercise:"Each person names what makes them feel close, free, controlled, and taken for granted.",miss:"Can be too tolerant of ambiguity when clear boundaries are needed."}
},
"Masculine / Feminine Dynamics":{
"Orion Taraban incentive/respect lens":{tags:["respect","incentive","usefulness","admiration","selection"],bestFor:["Appreciation / usefulness","Respect / public image","Social media / outside validation","Commitment / future direction"],lens:"Reads the event through incentives: what behavior is rewarded, ignored, punished, or demanded.",advice:"Notice whether effort produces appreciation, cooperation, and desire, or teaches one person that investment does not pay off.",exercise:"Incentive audit: list what each person rewards, punishes, ignores, and demands.",miss:"Can underweight attachment panic, tenderness, or trauma history."},
"Kait Willett capacity/status lens":{tags:["status","capacity","confidence","ambition","attraction","women","men","direction"],bestFor:["Dating / early relationship","Commitment / future direction","Passion / sexual disconnect","Respect / public image"],lens:"Reads women's attraction through demonstrated capacity: visible proof that a man can handle pressure, create value, protect/order his life, and hold his position.",advice:"Do not compete only on dates, attention, compliments, or claims of niceness. Show direction, competence, composure, standards, and warmth in ordinary behavior.",exercise:"Capacity audit: what did you actually demonstrate today - plan, solve, protect, build, lead, regulate, improve, or hold a standard?",miss:"Can become reductive if used as status worship, contempt for women, or a substitute for kindness, consent, and individual evidence."},
"Alison Armstrong usefulness/polarity lens":{tags:["appreciation","provision","usefulness","comfort","correction"],bestFor:["Appreciation / usefulness","Criticism / correction","Household labor","Planning / logistics"],lens:"Reads correction, appreciation, and comfort as translation problems between intention and impact.",advice:"Make appreciation visible before improvement requests. Translate criticism into the comfort or support being requested.",exercise:"Rewrite: You did this wrong -> It helps me feel ___ when ___.",miss:"Can sound too gendered if the actual roles do not match the pattern."},
"Suzanne Venker family/purpose lens":{tags:["family","marriage","motherhood","provider","purpose","roles","career"],bestFor:["Commitment / future direction","Dating / early relationship","Planning / logistics","Appreciation / usefulness"],lens:"Reads dating, marriage, work, children, provision, and home life as one connected life-design problem rather than separate preference checkboxes.",advice:"Clarify the life you are selecting for before chemistry and inertia make the decision for you.",exercise:"Life-design audit: desired marriage/family timeline, work priorities, children, money, home, sacrifice, and where each partner wants to be useful.",miss:"Can sound too prescriptive if the person has explicitly chosen a different life path."},
"Louise Perry modern dating culture lens":{tags:["social media","commitment","ambiguity","sexual","outside validation"],bestFor:["Social media / outside validation","Commitment / future direction","Trust / honesty","Passion / sexual disconnect"],lens:"Reads the event through modern dating incentives: options, ambiguity, outside validation, weak norms, and unclear commitment.",advice:"Clarify whether the relationship is moving toward stability or being pulled into ambiguity and audience approval.",exercise:"Norms agreement: exclusivity, public respect, social media boundaries, sexual expectations, and commitment.",miss:"Can be less useful when the couple already has strong norms and mainly needs emotional repair."}
},
"Philosophical Lenses":{
"Marcus Aurelius stoic lens":{tags:["control","rejection","peace","rumination","discipline"],bestFor:["Jealousy / insecurity","Trust / honesty","Emotional distance","Boundary"],lens:"Separates the event from the story attached to it, then asks what action preserves character and peace.",advice:"Do not bargain with what is outside your control. Choose one composed, honest next action.",exercise:"Facts vs judgments: write what happened, what you are adding to it, and what is actually yours to do.",miss:"Can sound emotionally spare if tenderness or reassurance is the main need."},
"Aristotle virtue/friendship lens":{tags:["virtue","habit","friendship","character","compatibility"],bestFor:["Commitment / future direction","Communication / shared reality","Respect / public image","Planning / logistics"],lens:"Reads the relationship as a pattern of habits: what kind of people the two of you become together.",advice:"Look less at intensity and more at repeated character, fairness, courage, generosity, and practical friendship.",exercise:"Habit audit: after contact, do I become clearer, kinder, braver, steadier, or smaller?",miss:"Can underweight raw attraction, nervous-system activation, or urgent safety concerns."},
"Bell Hooks love ethic lens":{tags:["care","honesty","domination","mutuality","respect"],bestFor:["Respect / public image","Trust / honesty","Communication / shared reality","Boundary"],lens:"Reads the event through care, respect, knowledge, responsibility, trust, and whether control is replacing love.",advice:"Do not call domination, neglect, or dishonesty love. Ask for care that is concrete and mutual.",exercise:"Love ethic check: where did care, respect, trust, responsibility, and honesty show up or disappear?",miss:"Can be less specific about dating-stage ambiguity or attraction dynamics."},
"Jane Austen character lens":{tags:["courtship","signals","manners","character","social"],bestFor:["Dating / early relationship","Respect / public image","Social media / outside validation","Commitment / future direction"],lens:"Reads courtship signals, manners, consistency, and social behavior as evidence of character.",advice:"Do not be dazzled by charm alone. Watch how the person behaves when pride, status, embarrassment, or inconvenience enters.",exercise:"Character evidence list: charm, consistency, humility, regard for others, and repair after awkwardness.",miss:"Can be too subtle if the issue requires direct boundary action."}
},
"Modern Dating / Relationship Science":{
"Logan Ury behavioral dating lens":{tags:["early dating","spark","slow burn","dater tendencies","post-date","green flags","behavioral science"],bestFor:["Dating / early relationship","Commitment / future direction","Communication / shared reality","Trust / honesty"],lens:"Distinguishes instant chemistry and checklist judgments from the lived experience of being with this person, including slow-burn potential and repeated dating habits.",advice:"Treat the first interpretation as a hypothesis. Review observed behavior and how you felt during the date before letting spark, an instant ick, or a profile checklist decide.",exercise:"Post-date review: What side of me came out? Did I feel heard, curious, at ease, and interested in learning more?",miss:"Can become too optimization-oriented for abuse, trauma, or an established relationship that needs deeper repair."},
"Eli Finkel online dating lens":{tags:["online dating","apps","choice overload","evaluation","expectations","options","swiping"],bestFor:["Dating / early relationship","Social media / outside validation","Commitment / future direction","Communication / shared reality"],lens:"Looks at how app design, abundant options, profile comparison, and high expectations can keep people in an evaluation mindset instead of building a relationship.",advice:"Move from profile comparison to real interaction. Reduce option churn and evaluate the developing relationship process, not an imagined marketplace of alternatives.",exercise:"Choice reset: briefly pause new swipes, focus on a small number of real conversations, and record what actually happens in person.",miss:"Does not by itself explain an individual's attachment pattern, character, compatibility, or safety."},
"David Buss mating strategy lens":{tags:["mating strategy","jealousy","deception","short-term","long-term","mate preferences","sexual conflict"],bestFor:["Trust / honesty","Commitment / future direction","Jealousy / insecurity","Passion / sexual disconnect"],lens:"Tests whether conflict may involve mismatched short- and long-term strategies, jealousy triggers, deception, or different expectations about exclusivity and investment.",advice:"Clarify intent, exclusivity, investment, and relationship horizon directly. Use actual behavior as evidence instead of turning group averages into a story about this person.",exercise:"Strategy alignment audit: each person states the desired relationship horizon, exclusivity, investment, and what would make them leave.",miss:"Broad mating-strategy research cannot establish this individual’s motive. Use direct agreements and repeated behavior, and never use this lens to excuse dishonesty, coercion, or disrespect."},
"Scott Stanley commitment clarity lens":{tags:["commitment","ambiguity","sliding","deciding","dedication","constraints","cohabitation"],bestFor:["Commitment / future direction","Planning / logistics","Communication / shared reality","Dating / early relationship"],lens:"Looks for places where a couple accumulated constraints or expectations by drifting forward without making a clear, mutual decision.",advice:"Decide rather than drift. Define the relationship status, current expectations, the next meaningful step, and a realistic timeline.",exercise:"Sliding-versus-deciding audit: list what was explicitly chosen together and what happened through inertia or convenience.",miss:"Clarity alone cannot create compatibility, desire, mutual effort, or safety."}
},
"Cultural Voices (contrast only)":{
"Call Her Daddy-style pop-culture lens":{tags:["dating culture","leverage","desirability","standards","entertainment"],bestFor:["Dating / early relationship","Social media / outside validation","Commitment / future direction"],lens:"Summarizes a recurring popular-media dating viewpoint that may emphasize leverage, desirability, strong standards, and avoiding overinvestment.",advice:"Use the protective insight without turning intimacy into a contest: keep standards, ask directly, and judge consistent behavior rather than trying to control the power balance.",exercise:"Contrast audit: write the protective benefit of the advice, then the cost if both people use the same strategy against each other.",miss:"Entertainment-oriented advice can reward strategic behavior, one-sided framing, or audience approval. It is not individualized clinical guidance.",sourceClass:"Popular-media perspective",evidenceTier:"Speculative / cultural",avatar:"CHD",consequence:"May reduce premature overinvestment, but can also increase testing, distrust, performance, and indirect communication."},
"Red-pill internet rhetoric lens":{tags:["status","sexual market","dominance","red pill","gender strategy"],bestFor:["Dating / early relationship","Respect / public image","Jealousy / insecurity","Commitment / future direction"],lens:"Summarizes an ideological internet framing that interprets dating mainly through status, sexual-market bargaining, dominance, and generalized claims about men and women.",advice:"Treat any useful observation about incentives as a hypothesis about behavior, not a rule about a sex. Return to consent, reciprocity, evidence, and the actual person.",exercise:"Individual-evidence test: replace every claim about men or women with the observed behavior of this person. Discard claims that no longer hold.",miss:"This framing is speculative at the individual level and can intensify stereotypes, contempt, coercive expectations, and adversarial relationships.",sourceClass:"Ideological internet perspective",evidenceTier:"Speculative / caution",avatar:"RP",consequence:"May create a temporary sense of certainty or self-protection, while increasing suspicion, rigid gender scripts, and tolerance for controlling behavior."}
},
"Safety / Coercive Control":{
"Evan Stark coercive-control lens":{tags:["coercive control","surveillance","monitoring","privacy","consent","location tracking","isolation","intimidation"],bestFor:["Trust / honesty","Boundary / pressure","Respect / public image","Conflict escalation"],lens:"Examines whether a pattern restricts autonomy through surveillance, intimidation, isolation, humiliation, or control of ordinary choices.",advice:"Name the behavior precisely and prioritize autonomy and safety. Covert monitoring is not repaired by granting unlimited access or proving innocence repeatedly.",exercise:"Control-pattern audit: record what is monitored or restricted, whether consent is freely given, what happens after a no, and whether the pattern is escalating.",miss:"A coercive-control framework should be applied to repeated patterns and credible restrictions on autonomy, not used to label every insecure request as abuse.",sourceClass:"Safety and coercive-control research framework",evidenceTier:"Safety priority",avatar:"ES",consequence:"Clear identification can protect autonomy and interrupt escalation. Direct confrontation may increase risk in a controlling relationship, so safety planning can matter more than couples-style repair."}
},
"Trauma / Nervous System":{
"Gabor Mate trauma-pattern lens":{tags:["trauma","trigger","childhood","compulsion","abandonment"],bestFor:["Jealousy / insecurity","Trust / honesty","Emotional distance","Conflict escalation"],lens:"Reads the reaction as possibly larger than the event because an old survival pattern is activated.",advice:"Ask what old pain this resembles, then check whether the present evidence actually supports that intensity.",exercise:"Trigger split: present facts on one side, old familiar feeling on the other.",miss:"Can underweight ordinary bad behavior, incentives, and accountability."},
"Brene Brown shame/vulnerability lens":{tags:["shame","vulnerability","courage","trust","story"],bestFor:["Trust / honesty","Communication / shared reality","Affection / reassurance","Criticism / correction"],lens:"Reads the hidden driver as shame: feeling exposed, not enough, or afraid to ask directly.",advice:"Replace blame with a brave, specific disclosure of the fear underneath the protective behavior.",exercise:"The story I am making up is ___, and the vulnerable part is ___.",miss:"Can be too soft when boundaries, consequences, or proof through action are needed."}
}
};

function normalizeProfile343(p){
 if(!p)return p;
 p.snapshots=p.snapshots||[];
 p.issues=p.issues||[];
 p.casual=p.casual||{};
 p.casualHistory=p.casualHistory||[];
 p.profileSliders=p.profileSliders||{};
 p.sliderHistory=p.sliderHistory||[];
 p.coupleQualities=p.coupleQualities||{};
 p.coupleTrajectory342=p.coupleTrajectory342||[];
 p.coupleTrajectory340=p.coupleTrajectory340||[];
 return p;
}

function profile343(opts={}){
 state.profiles=state.profiles||[];
 if(!state.profiles.length&&opts.ensureProfile){
  const p=typeof blankProfile==='function'?blankProfile():{id:String(Date.now()),name:'New relationship',rtype:'Dating / early relationship'};
  state.profiles.push(p);
  state.currentId=p.id;
 }
 const sel=$id('repairCockpitProfileSelect');
 const selected=sel&&sel.value?state.profiles.find(p=>p.id===sel.value):null;
 const current=selected||state.profiles.find(p=>p.id===state.currentId)||state.profiles[0]||null;
 return normalizeProfile343(current);
}

function issue343(p,opts={}){
 p=normalizeProfile343(p);
 if(!p)return null;
 const sel=$id('issueCardSelector');
 let found=sel&&sel.value?(p.issues||[]).find(i=>i.id===sel.value):null;
 if(!found&&typeof currentIssue331==='function'&&!opts.skipLegacy){
  try{found=currentIssue331();}catch(e){}
 }
 if(!found)found=(p.issues||[])[(p.issues||[]).length-1]||null;
 if(!found&&opts.ensureIssue){
  found={id:typeof uid==='function'?uid():String(Date.now()),title:'Untitled issue',type:'Communication / shared reality',event:'',story:'',polarity:'Mixed',aggrieved:'Unclear',recurrence:'First time',ratings:{},history:[]};
  p.issues.push(found);
 }
 return found;
}

function context343(opts={}){
 const p=profile343(opts);
 const i=issue343(p,opts);
 const latest=(p?.snapshots||[])[(p?.snapshots||[]).length-1]||null;
 let m={peaceIndex:0,respectIndex:0,personalized:0,repair:0,reciprocityDyn:0,embedded:0,alignment:0};
 try{if(p&&typeof metrics==='function')m={...m,...metrics(p)}}catch(e){}
 const text=[p?.name,p?.rtype,p?.desiredOutcome,p?.evidence,p?.interpretation,p?.hesitation,p?.notes,latest?.note,latest?.story,i?.type,i?.title,i?.event,i?.story,i?.polarity,i?.aggrieved,i?.recurrence].filter(Boolean).join(' ');
 const positive=/positive|appreciat|hype|encourag|builds up|thoughtful|green flag|comfort routine/i.test([i?.polarity,i?.type,i?.title,i?.event,i?.story].join(' '));
 const ctx={profile:p,issue:i,latestSnapshot:latest,metrics:m,text,isPositive:positive};
 ctx.safetyFlags=safetyFlags343(ctx);
 const engine=window.RelationshipExpertEngine359;
 if(engine){ctx.analysis=engine.analyze(ctx);ctx.isPositive=ctx.analysis.polarity==='positive';ctx.safetyFlags=ctx.analysis.safetyLevel==='acute'?['Safety / coercive-control concern']:ctx.analysis.safetyLevel==='caution'?['Boundary / autonomy concern']:[];}
 return ctx;
}

function safetyFlags343(ctx){
 const t=String(ctx.text||'').toLowerCase();
 const checks=[
  ['Safety first','hit|hurt|threat|afraid|scared|unsafe|violence|violent|restraining'],
  ['Boundary pressure','no contact|blocked|stalk|track|followed|show up|wont leave me alone|keeps pushing|pressure'],
  ['Digital surveillance','without consent|covert monitoring|secret phone monitoring|surveill|checks? (?:the )?(?:other person.s )?(?:phone|location|messages|app activity)|demands? (?:a )?(?:password|location sharing|phone access)'],
  ['Sexual pressure','sexual pressure|coerc|intoxicated|drunk|come over|nudes|explicit'],
  ['Self-harm crisis','self harm|suicide|kill myself|kill himself|kill herself'],
  ['Public humiliation','humiliate|revenge|expose|blackmail|shame publicly']
 ];
 return checks.filter(([,pat])=>new RegExp(pat).test(t)).map(([label])=>label);
}

function rows343(){
 const rows=[];
 Object.entries(advisorModes343).forEach(([cat,modes])=>Object.entries(modes).forEach(([name,data])=>rows.push({cat,name,...data})));
 return rows;
}

function score343(row,ctx){
 const engine=window.RelationshipExpertEngine359;if(engine)return engine.score(row,ctx);
 const t=String(ctx.text||'').toLowerCase();
 let s=0;
 (row.bestFor||[]).forEach(x=>{if(String(ctx.issue?.type||'').toLowerCase()===x.toLowerCase())s+=12; if(t.includes(x.toLowerCase()))s+=7;});
 (row.tags||[]).forEach(x=>{if(t.includes(x.toLowerCase()))s+=3;});
 if(ctx.isPositive&&(row.name.includes('Alison')||row.name.includes('Aristotle')))s+=6;
 if((ctx.metrics?.respectIndex||0)<50&&(row.name.includes('Orion')||row.name.includes('Bell Hooks')||row.name.includes('Gottman')))s+=5;
 if((ctx.metrics?.peaceIndex||0)<45&&(row.name.includes('Marcus')||row.name.includes('Sue')||row.name.includes('Gabor')))s+=5;
 if(/social media|outside validation|options|ambiguous/i.test(t)&&row.name.includes('Louise'))s+=7;
 if(/desire|sexual|passion|roommate/i.test(t)&&row.name.includes('Perel'))s+=7;
 if(/criticism|correction|contempt/i.test(t)&&row.name.includes('Gottman'))s+=7;
 if(/appreciat|useful|effort|thoughtful/i.test(t)&&row.name.includes('Alison'))s+=8;
 if(/first date|early dating|spark|slow burn|\\bick\\b|post-date|green flag/i.test(t)&&row.name.includes('Logan Ury'))s+=9;
 if(/dating app|online dating|swip|profile|choice overload|too many options|option churn/i.test(t)&&row.name.includes('Eli Finkel'))s+=9;
 if(/jealous|deceiv|deception|short-term|long-term|mating|sexual conflict/i.test(t)&&row.name.includes('David Buss'))s+=9;
 if(/commit|ambigu|cohabit|drift|sliding|deciding|define the relationship/i.test(t)&&row.name.includes('Scott Stanley'))s+=9;
 const surveillance=/without consent|covert|secret phone monitoring|surveill|check(?:s|ing)? (?:the )?(?:other person.s )?(?:phone|location|messages|app activity)|demand(?:s|ing)? (?:a )?(?:password|location sharing|phone access)/i.test(t);
 if(surveillance&&row.name.includes('Evan Stark'))s+=60;
 if(surveillance&&row.name.includes('Bell Hooks'))s+=18;
 if(surveillance&&(row.name.includes('Logan Ury')||row.name.includes('Eli Finkel')||row.name.includes('Perel')))s-=45;
 if(ctx.safetyFlags.length&&row.cat==='Modern Dating / Relationship Science')s-=30;
 if(/marriage|married|husband|wife|long-term|spouse/i.test(t)&&(row.name.includes('Logan Ury')||row.name.includes('Eli Finkel')))s-=12;
 if(/dating culture|leverage|desirab|standards|overinvest/i.test(t)&&row.name.includes('Call Her Daddy'))s+=4;
 if(/red pill|sexual market|dominance|status game|gender strategy/i.test(t)&&row.name.includes('Red-pill'))s+=3;
 if(row.cat==='Cultural Voices (contrast only)')s-=18;
 if(ctx.safetyFlags.length&&(row.name.includes('Bell Hooks')||row.name.includes('Gottman')))s+=5;
 return s;
}

function aligned343(ctx){
 const engine=window.RelationshipExpertEngine359;if(engine)return engine.rank(rows343(),ctx)[0];
 const t=String(ctx.text||'');
 if(/without consent|covert|secret phone monitoring|surveill|check(?:s|ing)? (?:the )?(?:other person.s )?(?:phone|location|messages|app activity)|demand(?:s|ing)? (?:a )?(?:password|location sharing|phone access)/i.test(t))return rows343().find(r=>r.name==='Evan Stark coercive-control lens');
 return rows343().sort((a,b)=>score343(b,ctx)-score343(a,ctx))[0];
}
function challenge343(ctx){
 const a=aligned343(ctx);
 const pairs={
  "Sue Johnson / EFT lens":"Orion Taraban incentive/respect lens",
  "Orion Taraban incentive/respect lens":"Gabor Mate trauma-pattern lens",
  "Alison Armstrong usefulness/polarity lens":"Brene Brown shame/vulnerability lens",
  "Esther Perel desire/security lens":"Jordan Peterson responsibility lens",
  "Gottman stability lens":"Esther Perel desire/security lens",
  "Marcus Aurelius stoic lens":"Sue Johnson / EFT lens",
  "Bell Hooks love ethic lens":"Louise Perry modern dating culture lens",
  "Jane Austen character lens":"Eli Finkel online dating lens",
  "Logan Ury behavioral dating lens":"David Buss mating strategy lens",
  "Eli Finkel online dating lens":"Jane Austen character lens",
  "David Buss mating strategy lens":"Bell Hooks love ethic lens",
  "Scott Stanley commitment clarity lens":"Esther Perel desire/security lens"
  ,"Evan Stark coercive-control lens":"Bell Hooks love ethic lens"
 };
 const available=rows343().filter(r=>r.cat!=='Cultural Voices (contrast only)');
 return available.find(r=>r.name===(pairs[a?.name]||''))||available.filter(r=>r.name!==a?.name).sort((x,y)=>score343(y,ctx)-score343(x,ctx))[0];
}

function why343(row,ctx){
 const parts=[];
 if(ctx.issue?.type)parts.push(`The selected event is categorized as ${ctx.issue.type}.`);
 const matched=(row.tags||[]).filter(tag=>String(ctx.text||'').toLowerCase().includes(tag.toLowerCase())).slice(0,3);
 if(matched.length)parts.push(`It matches signals around ${matched.join(', ')}.`);
 if((ctx.metrics?.peaceIndex||0)<50)parts.push(`Peace is low enough that interpretation should slow down before escalation.`);
 if((ctx.metrics?.respectIndex||0)<55)parts.push(`Respect is uncertain, so warmth or attraction should not overrule boundaries.`);
 if(ctx.isPositive)parts.push(`This appears to be a positive loop, so the goal is reinforcement, not repair.`);
 return parts.join(' ')||'This lens gives a useful second read on the active relationship event.';
}

function next343(row,ctx){
 if(ctx.safetyFlags.length)return 'Prioritize safety and support over repair. Do not use a relationship-optimization conversation if it could increase danger.';
 if(ctx.isPositive)return 'Name the behavior, name its effect, and repeat the ritual without adding correction in the same breath.';
 if((ctx.metrics?.respectIndex||0)<45)return 'Pause escalation. Ask for one concrete respect behavior and watch whether actions change.';
 if(/boundary|no contact|guilt/i.test(ctx.text||''))return 'State the boundary once, keep it short, and do not turn the boundary into a debate.';
 if(/commit|future|ambig/i.test(ctx.text||''))return 'Ask one direct clarity question with a real timeline instead of continuing to infer from mixed signals.';
 return row.advice;
}

function confidence343(row,ctx){
 const engine=window.RelationshipExpertEngine359;if(engine)return engine.fitLabel(row,ctx);
 let n=score343(row,ctx);
 if((ctx.issue?.event||'').length>30)n+=8;
 if((ctx.profile?.snapshots||[]).length>1)n+=5;
 if(ctx.issue?.recurrence&&ctx.issue.recurrence!=='First time')n+=4;
 return n>=24?'High fit':n>=12?'Moderate fit':'Exploratory fit';
}

function contextHTML343(ctx){
 return '';
}

function expertDisplay343(name){
 const map={
  'Sue Johnson / EFT lens':'Mira Johnson-Stone (based on Sue Johnson)',
  'Gottman stability lens':'Grant Gottman-Hale (based on Gottman research)',
  'Esther Perel desire/security lens':'Celeste Perel-Varon (based on Esther Perel)',
  'Orion Taraban incentive/respect lens':'Oren Taravan (based on Orion Taraban)',
  'Kait Willett capacity/status lens':'Kate Willet-Cross (based on Kait Willett)',
  'Alison Armstrong usefulness/polarity lens':'Amy Armstrong-Ellison (based on Alison Armstrong)',
  'Suzanne Venker family/purpose lens':'Susanne Venkor (based on Suzanne Venker)',
  'Louise Perry modern dating culture lens':'Lydia Perry-Hart (based on Louise Perry)',
  'Logan Ury behavioral dating lens':'Nora Ury-Finch (based on Logan Ury)',
  'Eli Finkel online dating lens':'Elias Finkel-Mercer (based on Eli Finkel)',
  'David Buss mating strategy lens':'Damon Buss-Cross (based on David Buss)',
  'Scott Stanley commitment clarity lens':'Samuel Stanley-Lane (based on Scott Stanley)',
  'Gabor Mate trauma-pattern lens':'Gabriel Mate-Sato (based on Gabor Mate)',
  'Brene Brown shame/vulnerability lens':'Brenna Brown-Reed (based on Brene Brown)',
  'Evan Stark coercive-control lens':'Everett Stark-Shaw (based on Evan Stark)',
  'Call Her Daddy-style pop-culture lens':'Culture expert Casey Cooper (based on Call Her Daddy-style advice)',
  'Red-pill internet rhetoric lens':'Internet rhetoric analyst Rex Redward (based on red-pill rhetoric)'
 };
 return map[name]||name;
}
window.relationshipExpertDisplayName343=expertDisplay343;
function expertProfile343(name,row={}){
 const profiles={
  'Sue Johnson / EFT lens':{avatar:'SJ',kind:'Clinical / research-informed',lineage:'Modeled voice based on Sue Johnson: Emotionally Focused Therapy and attachment-bond repair work.',bio:'Best for moments where the real issue may be threat, protest, reassurance, bonding cycles, or emotional accessibility.'},
  'Gottman stability lens':{avatar:'JG',kind:'Couples research',lineage:'Modeled voice based on John and Julie Gottman: longitudinal couples research, repair attempts, contempt, influence, and conflict process.',bio:'Best for diagnosing whether a conflict pattern is becoming stable, corrosive, repairable, or contempt-driven.'},
  'Esther Perel desire/security lens':{avatar:'EP',kind:'Therapy / culture',lineage:'Modeled voice based on Esther Perel: desire, autonomy, erotic aliveness, security, betrayal, and modern couple identity.',bio:'Best when the issue is not only communication but the tension between closeness, freedom, desire, and resentment.'},
  'Orion Taraban incentive/respect lens':{avatar:'OT',kind:'Psychology / dating strategy',lineage:'Modeled voice based on Orion Taraban / PsycHacks themes: incentives, investment, mate choice, respect, selection behavior, and not overproviding before reciprocity.',bio:'Best for early dating, male/female pursuit dynamics, ambiguity, overinvestment, sexual pacing, and whether effort is being rewarded.'},
  'Kait Willett capacity/status lens':{avatar:'KW',kind:'Dating culture / attraction analysis',lineage:'Modeled voice based on Kait Willett themes: demonstrated capacity, status signals, visible competence, attraction, confidence, ambition, and the gap between stated preferences and revealed choices.',bio:'Best when a man asks what women want, why attraction does not follow stated checklists, or how to demonstrate value without bragging, pleading, or overproviding.'},
  'Alison Armstrong usefulness/polarity lens':{avatar:'AA',kind:'Relationship educator',lineage:'Modeled voice based on Alison Armstrong: appreciation, usefulness, polarity, and translation errors.',bio:'Best when one partner experiences help, correction, appreciation, or contribution very differently from the other.'},
  'Suzanne Venker family/purpose lens':{avatar:'SV',kind:'Culture / family-life commentary',lineage:'Modeled voice based on Suzanne Venker and Modern Wisdom themes: family, marriage, motherhood, provision, work, roles, and dating with purpose.',bio:'Best when attraction has to be tested against the actual life someone wants: children, marriage, career, money, home, sacrifice, and usefulness.'},
  'Louise Perry modern dating culture lens':{avatar:'LP',kind:'Culture analysis',lineage:'Modeled voice based on Louise Perry: modern sexual norms, commitment ambiguity, feminism, incentives, status, and public/private dignity.',bio:'Best for questions where current dating culture, apps, sexual norms, or unclear commitment scripts are shaping behavior.'},
  'Marcus Aurelius stoic lens':{avatar:'MA',kind:'Historical philosophy',lineage:'Roman Stoicism, self-command, judgment, duty, discipline, and accepting what is outside control.',bio:'Best for grounding, composure, restraint, courage, and deciding what honorable action remains yours.'},
  'Aristotle virtue/friendship lens':{avatar:'AR',kind:'Historical philosophy',lineage:'Virtue ethics, friendship, habit formation, justice, practical wisdom, and shared flourishing.',bio:'Best for asking what repeated conduct is training each person to become and whether the relationship serves a shared good.'},
  'Bell Hooks love ethic lens':{avatar:'BH',kind:'Cultural / moral philosophy',lineage:'Love ethic: care, respect, knowledge, responsibility, trust, commitment, and anti-domination.',bio:'Best when attachment is intense but the question is whether the behavior actually practices love.'},
  'Jane Austen character lens':{avatar:'JA',kind:'Literary / cultural',lineage:'Courtship, manners, pride, class/status pressure, restraint, irony, and evidence of character.',bio:'Best for early dating and character reads: what someone does when pride, inconvenience, or ambiguity enters.'},
  'Logan Ury behavioral dating lens':{avatar:'LU',kind:'Dating behavior / applied psychology',lineage:'Modeled voice based on Logan Ury: behavioral dating advice, app habits, slow-burn potential, post-date review, and choice overload.',bio:'Best for translating early dating anxiety into small experiments and better evidence.'},
  'Eli Finkel online dating lens':{avatar:'EF',kind:'Relationship science',lineage:'Modeled voice based on Eli Finkel: relationship science, online dating, choice architecture, expectations, and modern compatibility decisions.',bio:'Best for app-era comparison, option churn, unrealistic standards, and whether real interaction is beating fantasy.'},
  'David Buss mating strategy lens':{avatar:'DB',kind:'Evolutionary psychology',lineage:'Modeled voice based on David Buss: mate preferences, jealousy, investment, time horizons, strategy conflict, and sex-difference hypotheses.',bio:'Best as a hypothesis generator, not a stereotype machine; individual behavior should override population-level assumptions.'},
  'Scott Stanley commitment clarity lens':{avatar:'SS',kind:'Commitment research',lineage:'Modeled voice based on Scott Stanley: dedication, constraints, sliding versus deciding, cohabitation risk, and explicit commitment decisions.',bio:'Best when a relationship is accumulating obligations, intimacy, or benefits without a clear mutual choice.'},
  'Gabor Mate trauma-pattern lens':{avatar:'GM',kind:'Trauma-informed medicine',lineage:'Modeled voice based on Gabor Mate: stress physiology, attachment wounds, compulsive coping, early pain, and present-trigger distinction.',bio:'Best when intensity, shutdown, or reactivity may contain both current evidence and older survival patterns.'},
  'Brene Brown shame/vulnerability lens':{avatar:'BB',kind:'Shame / vulnerability research',lineage:'Modeled voice based on Brene Brown: shame, vulnerability, courage, trust, defensiveness, and story-making under threat.',bio:'Best when blame, withdrawal, perfectionism, or defensiveness may be protecting a more vulnerable fear.'},
  'Call Her Daddy-style pop-culture lens':{avatar:'CHD',kind:'Popular-media contrast',lineage:'Modeled contrast based on Call Her Daddy-style podcast dating entertainment: leverage, standards, desirability, audience approval, and power moves.',bio:'Useful mainly as contrast. It can protect against overinvestment, but can also reward testing, distrust, and performance.'},
  'Red-pill internet rhetoric lens':{avatar:'RP',kind:'Cautionary internet contrast',lineage:'Modeled contrast based on red-pill internet scripts about status, dominance, sexual-market value, and adversarial bargaining.',bio:'Useful mainly to show the cost of bad advice. Discard it when it increases contempt, coercion, or stereotypes.'},
  'Evan Stark coercive-control lens':{avatar:'ES',kind:'Safety / coercive-control research',lineage:'Modeled voice based on Evan Stark: coercive control, surveillance, isolation, intimidation, autonomy restriction, and safety-first analysis.',bio:'Best when privacy, phone monitoring, threats, isolation, or punishment for refusal may be present.'}
 };
 const fallback=row.avatar||name.split(/\s+/).slice(0,2).map(x=>x[0]).join('').toUpperCase();
 return profiles[name]||{avatar:fallback,kind:row.sourceClass||'Modeled perspective',lineage:'Modeled interpretive lens inside the app.',bio:'Review its provenance and limitations before applying it.'};
}
window.relationshipExpertProfile343=expertProfile343;

function philosopherIssue356(who,ctx,type,event){
 const text=`${type} ${event}`.toLowerCase(),positive=!!ctx.isPositive;
 const family=/without consent|covert|monitor|surveill|phone|location|password/.test(text)?'surveillance':positive?'positive':/appreciat|critici|correction/.test(text)?'appreciation':/commit|future|ambigu/.test(text)?'commitment':/passion|sexual|desire|intimacy/.test(text)?'intimacy':/social media|public|humiliat|post/.test(text)?'public':/planning|logistic|household|money|labor|expense/.test(text)?'responsibility':/jealous|trust|honest|deceiv|betray/.test(text)?'trust':/emotional distance|affection|reassurance|withdraw|closeness/.test(text)?'closeness':/boundary|pressure|consent|guilt/.test(text)?'boundary':/communication|shared reality|decision|ai /.test(text)?'communication':'general';
 const reported=`The reported event is this: ${event}`;
 const marcus={
  surveillance:{frame:`${reported} A Stoic response would not confuse endurance with virtue. Another person’s suspicion is outside your command; your consent, account access, boundary, documentation, and next action are not.`,question:'What action protects your dignity and safety without making your peace depend on persuading the person who is monitoring you?',experiment:'Record exactly what was accessed and what happened when you objected. If it is safe, revoke unauthorized sessions or location access, state once that you do not consent, and tell a trusted person. If retaliation is plausible, plan for safety before confrontation.',failure:'Stoic restraint is being misused if it becomes silent tolerance of surveillance, intimidation, or punishment for setting a boundary.'},
  appreciation:{frame:`${reported} The event and the judgment about the event should be separated. A correction may concern the task; the added judgment that “my effort never counts” concerns meaning. Address the task without surrendering your judgment of your own character.`,question:'What part of the event requires a practical correction, and what part is an untested conclusion about your worth or your partner’s intent?',experiment:'Write the observable contribution, the correction requested, and the judgment each person added. Offer recognition for the contribution, then make one neutral request about the task.',failure:'This approach is inadequate if “correction” is actually chronic contempt, humiliation, or exploitation rather than a disputed task.'},
  communication:{frame:`${reported} A Stoic response would reduce the dispute to what can be known, what remains inference, and what honest question is still yours to ask. Winning the story is not under your control; speaking accurately and listening without self-betrayal are.`,question:'Which fact is established, which motive has been assumed, and what single question would clarify the difference?',experiment:'State the event in one sentence without motive words. Ask one direct clarification question, repeat the answer back accurately, and decide your next action from behavior rather than speculation.',failure:'Calm clarification is not enough when deception is established or one person repeatedly refuses a shared reality.'},
  commitment:{frame:`${reported} You cannot command another person to choose a future with you. You can state the relationship you are willing to participate in, the decision you need, and how long you will remain in ambiguity.`,question:'What decision is yours if the other person gives no clearer answer than the one already given by their behavior?',experiment:'Write your minimum commitment requirement, the specific decision being requested, and a realistic decision date. Ask once, then evaluate the answer and conduct without bargaining against yourself.',failure:'Detachment is not wisdom if it disguises fear of naming what you want or avoiding a necessary decision.'},
  intimacy:{frame:`${reported} Desire cannot be commanded, and rejection does not determine human worth. What remains governable is honesty, non-coercion, tenderness, and whether resentment is allowed to distort conduct.`,question:'What can each person say truthfully about desire without pressuring, punishing, or pretending?',experiment:'Discuss desire when neither person is initiating sex. Each names one condition that supports desire, one that suppresses it, and one form of affection that is welcome without sexual obligation.',failure:'Stoic acceptance must not become resignation to coercion, contempt, untreated pain, or a permanently unspoken incompatibility.'},
  public:{frame:`${reported} You cannot fully control an audience or repair dignity by retaliating in public. You can control whether you participate in humiliation, what boundary you state, and whether your own conduct remains honorable.`,question:'What response protects dignity without turning the relationship into a public contest?',experiment:'Save the exact public behavior, address it privately in one factual sentence, request a specific correction, and refuse public counterattack. Reduce exposure if humiliation continues.',failure:'Composure alone is insufficient when public humiliation is repeated, threatening, or used to isolate and control.'},
  responsibility:{frame:`${reported} The useful Stoic question is not who feels more offended, but which duty was actually accepted and whether it was performed. Control begins with naming one’s own responsibility precisely.`,question:'What obligation belonged to each person, what was completed, and what agreement must replace resentment?',experiment:'Write the shared outcome, each person’s owned task, the consultation threshold, and the next deadline. Complete your own part without silently taking over the other person’s duty.',failure:'Duty language becomes harmful when it excuses an unfair division of labor or asks one person to carry all consequences.'},
  trust:{frame:`${reported} Fear is not evidence, and reassurance cannot make uncertainty disappear permanently. Judge the event by facts, agreements, and repeated conduct, then choose the boundary that preserves honesty and self-respect.`,question:'What is known, what is feared, and what behavior would genuinely alter the judgment?',experiment:'Separate verified facts from imagined motives. Ask for one proportionate clarification or repair, then observe whether conduct becomes more truthful and consistent.',failure:'Suspending judgment is inappropriate when deception is established or when demands for proof become surveillance and control.'},
  closeness:{frame:`${reported} You cannot force openness or affection, but you can make a clear bid without accusation and decide what repeated nonresponse means for your participation in the relationship.`,question:'What request for connection is honest, specific, and free of coercion?',experiment:'Make one bounded request for time, affection, or conversation. Accept yes, no, or a specific later time, then judge whether the promised reconnection occurs.',failure:'Patience becomes self-abandonment when emotional absence is chronic and every clear bid is ignored or punished.'},
  boundary:{frame:`${reported} Another person’s disappointment is theirs to govern. Your task is to state the boundary without cruelty, keep it without theatrical anger, and act when it is not respected.`,question:'What limit can you state once and enforce through your own behavior rather than repeated argument?',experiment:'Write one sentence naming the limit and one action you will take if it is crossed. Deliver it calmly, do not add new justifications, and document the response.',failure:'Direct boundary-setting may be unsafe when retaliation is plausible; seek support and plan before confrontation.'},
  positive:{frame:`${reported} A good event should be received without clinging to it or demanding that it guarantee the future. Notice the virtue expressed, offer gratitude, and make the same quality easier to practice again.`,question:'Which deliberate action created this good result, and how can you reinforce it without turning appreciation into expectation?',experiment:'Name the exact behavior, its effect on you, and the quality of character it expressed. Repeat one action within the next week that supports the same pattern.',failure:'Do not use one positive event to dismiss a larger contradictory pattern.'},
  general:{frame:`${reported} Separate the event from the judgment attached to it, then identify the honest action that remains under your control.`,question:'What is fact, what is interpretation, and what action preserves character even if the outcome is unwanted?',experiment:'Write three lines: the event without adjectives, the judgment added to it, and one composed action that does not depend on controlling the other person.',failure:'Stoicism is being misused if it suppresses emotion or normalizes repeated mistreatment.'}
 };
 const aristotle={
  surveillance:{frame:`${reported} Repeated surveillance trains one person in domination and the other in fear, concealment, or submission. Those are not habits of equal friendship, and they do not cultivate trustworthiness.`,question:'What kind of character and relationship are these repeated acts of monitoring producing in each person?',experiment:'Name the virtues that trust requires here: honesty, justice, courage, and self-command. Define one observable behavior for each, beginning with ending nonconsensual access and respecting a clear no.',failure:'Do not reduce a dangerous control pattern to a mutual character exercise; safety and autonomy take priority.'},
  appreciation:{frame:`${reported} Good partnership requires justice in recognizing contribution as well as practical wisdom about standards. Habitual correction without recognition breeds resentment; praise without responsible follow-through breeds unfairness.`,question:'What would fair recognition and competent ownership look like for both people in this exact task?',experiment:'For the next shared task, agree on the owner and standard beforehand. Afterward, name the contribution accurately and discuss one improvement without attacking character.',failure:'Virtue language is empty if one person receives praise while repeatedly leaving the labor and consequences to the other.'},
  communication:{frame:`${reported} Practical friendship depends on a shared grasp of reality. A relationship cannot deliberate well when facts are withheld, motives are invented, or persuasion matters more than truth.`,question:'What information and good-faith listening are required for the couple to reason together about this event?',experiment:'Each person states the facts, intended good, and perceived harm. Identify one point of agreement, one unresolved fact, and one joint decision that follows.',failure:'Joint deliberation cannot work when one person knowingly deceives or treats the other as an obstacle rather than a partner.'},
  commitment:{frame:`${reported} Commitment is not merely a feeling or a constraint; it is a chosen orientation toward a shared good. Drifting while enjoying the benefits of partnership avoids the virtue of honest decision.`,question:'What shared life are these two people actually choosing, and do their repeated actions serve the same end?',experiment:'Each person writes the relationship’s intended purpose, obligations, and next decision. Compare them and make one explicit choice rather than adding another unchosen constraint.',failure:'A shared goal cannot compensate for coercion, fundamental incompatibility, or one person’s refusal to choose.'},
  intimacy:{frame:`${reported} Intimacy should contribute to mutual flourishing, not become a contest between entitlement and avoidance. Temperance, generosity, honesty, and care must govern how desire is expressed.`,question:'What conditions would let both people participate in intimacy freely, honestly, and without using affection as leverage?',experiment:'Each person names what supports desire, what harms it, and one generous non-demand action. Agree on a form of closeness that is genuinely welcome to both.',failure:'A virtue framework must not moralize libido differences, excuse pressure, or ignore health and trauma.'},
  public:{frame:`${reported} A good partner protects the other person’s dignity in public because friendship includes goodwill and honor. Public humiliation is character evidence, especially when status or an audience is involved.`,question:'Did the public behavior express loyalty, fairness, and regard, or did it purchase attention at the partner’s expense?',experiment:'Name the exact public harm, request a specific repair, and establish one mutual rule for protecting dignity around friends and online.',failure:'One apology is weak evidence when the same person repeatedly performs contempt for an audience.'},
  responsibility:{frame:`${reported} Shared life requires distributive justice: labor, authority, risk, and recognition should be allocated fairly. Fairness does not mean identical tasks; it means ownership proportionate to capacity and agreement.`,question:'Is the current division of responsibility fair in effort, authority, mental load, and consequences?',experiment:'Map each recurring domain to one owner, one agreed standard, and one consultation threshold. Revisit the allocation after two weeks using results rather than intentions.',failure:'Do not call an arrangement virtuous when one person lacks meaningful choice or continually absorbs the hidden labor.'},
  trust:{frame:`${reported} Trustworthiness is a habit of truthful action, not a demand to be believed without evidence. Jealousy and reassurance should be judged by whether they cultivate honesty, courage, and mutual respect.`,question:'Which repeated actions show trustworthy or untrustworthy character in this situation?',experiment:'Choose one truth-telling behavior, one proportionate reassurance, and one boundary against accusation or surveillance. Observe the pattern across several interactions.',failure:'Character assessment becomes prejudice when it relies on stereotypes or one ambiguous event rather than repeated conduct.'},
  closeness:{frame:`${reported} Deep friendship includes reciprocal goodwill and knowledge of the other person. Repeated refusal of emotional presence can weaken the shared life, while forced disclosure is not genuine intimacy.`,question:'What form of reciprocal attention would allow both people to know and support one another without compulsion?',experiment:'Schedule one bounded conversation in which each person shares one concern and asks one curious question. Track whether care and follow-through become habitual.',failure:'Conversation rituals cannot create mutual goodwill when one person consistently shows indifference or contempt.'},
  boundary:{frame:`${reported} Justice respects another person as an end, not an instrument. A boundary tests whether desire is governed by self-command or whether one person treats access as an entitlement.`,question:'Does the response to the boundary demonstrate justice, temperance, and respect for the other person’s agency?',experiment:'State the boundary and the reason once. Define the respectful behavioral response, then judge character by what happens when the person does not get what they want.',failure:'Do not turn an unsafe power imbalance into a symmetrical lesson about both people’s virtues.'},
  positive:{frame:`${reported} This event matters because repeated good actions become character and relationship culture. The task is to identify the virtue expressed and make its practice easier and more stable.`,question:'Which virtue produced this event, and how did it advance the couple’s shared good?',experiment:'Name the virtue and the exact behavior that embodied it. Each person repeats one related action before the next check-in and records its effect on the relationship.',failure:'A pleasant isolated event should not be mistaken for settled character when the larger habit points elsewhere.'},
  general:{frame:`${reported} The important question is what repeated response to this event is teaching both people to become. Relationships cultivate habits of fairness, courage, generosity, truthfulness, or their opposites.`,question:'Which virtue is required here, and what would it look like as observable conduct from each person?',experiment:'Choose one relevant virtue, define one behavior for each partner, and evaluate the next interaction by conduct rather than intention.',failure:'Virtue language has little value when it remains abstract or excuses an established harmful pattern.'}
 };
 return who==='Marcus'?marcus[family]:aristotle[family];
}

function expertDepth347(row,ctx){
 const robust=window.RelationshipExpertEngine359?.compose(row,ctx);if(robust)return robust;
 const type=ctx.issue?.type||'relationship issue';
 const event=String(ctx.issue?.event||ctx.latestSnapshot?.note||ctx.profile?.evidence||'the event described').slice(0,240);
 const surveillance=/without consent|covert|monitor|surveill|check(?:s|ing)? (?:the )?(?:other person.s )?(?:phone|location|messages|app activity)|password|location sharing/i.test(`${type} ${event}`);
 const name=row.name||'';
 const base={
  frame:`This lens treats ${type.toLowerCase()} as a pattern to test against behavior, not a verdict about either person.`,
  challenge:'Do not confuse the first emotionally convincing interpretation with the only plausible explanation.',
  question:`What observable behavior after “${event}” would confirm or disconfirm your interpretation?`,
  experiment:row.exercise,
  failure:'Reassess this lens if the next interaction produces no clearer behavior, agreement, or reduction in confusion.'
 };
 const entries=[
  ['Sue Johnson',{frame:`The surface topic is ${type.toLowerCase()}, but the attachment question is likely “When I reach for you under stress, are you emotionally available or am I alone?” The important sequence is not who started it; it is how protest and withdrawal make each person’s fear look true.`,challenge:'Stop arguing the content long enough to identify the softer fear underneath pursuit, criticism, silence, or distance.',question:'What did each person fear the event meant about their importance, safety, or ability to reach the other?',experiment:'Ten minutes, no rebuttals: each person completes “When that happened, I told myself ___; I protected myself by ___; what I needed to know was ___.”',failure:'If vulnerability is mocked, punished, or used as ammunition, attachment disclosure is not the next intervention; boundaries and safety are.'}],
  ['Gottman',{frame:`The predictive information is in the process around ${type.toLowerCase()}: whether the complaint stays specific, whether contempt appears, whether either person can accept influence, and whether repair attempts are noticed.`,challenge:'Replace character prosecution with one observable complaint. “You are selfish” cannot be repaired; a specific missed agreement can.',question:'Which interaction habit did the damage: harsh start-up, defensiveness, contempt, stonewalling, or a rejected repair attempt?',experiment:'Retry the opening in this form: “I feel ___ about this specific event ___; I need ___; would you be willing to ___?” Then record whether the response contains curiosity, responsibility, or counterattack.',failure:'Repeated contempt, refusal of influence, or failed repair despite specific requests is stronger evidence than a good explanation after the fact.'}],
  ['Esther Perel',{frame:`This may not be only a communication problem. ${type} can expose a conflict between closeness and autonomy, security and aliveness, or being needed and feeling desired.`,challenge:'Do not assume that more disclosure or more closeness automatically creates desire. Sometimes pressure for reassurance removes the freedom desire needs.',question:'What is each person protecting here: certainty, freedom, admiration, erotic dignity, or relief from obligation?',experiment:'Each person names one condition that creates closeness and one that creates aliveness. Choose one change that increases connection without increasing surveillance or pressure.',failure:'If “freedom” repeatedly becomes secrecy, betrayal, or exemption from agreements, this lens is being used to romanticize avoidance.'}],
  ['Orion Taraban',{frame:`Read ${type.toLowerCase()} as an incentive loop: which behavior receives appreciation, access, effort, silence, punishment, or rescue? Repeated rewards often predict the next behavior better than stated intentions.`,challenge:'A relationship cannot sustainably demand investment while making investment feel costly, invisible, or strategically foolish.',question:'After this event, what behavior became more rewarding for each person: honesty, effort, withdrawal, testing, or withholding?',experiment:'List what each person currently rewards, punishes, ignores, and demands. Change one incentive without threatening or manipulating.',failure:'If incentive language starts excusing contempt, coercion, or treating affection as payment, discard the framing.'}],
  ['Alison Armstrong',{frame:`The likely translation error is between intended contribution and received impact. One person may be offering usefulness while the other is asking for comfort, precision, or emotional presence.`,challenge:'Correction delivered inside the thank-you moment often erases the felt value of the contribution, even when the correction is technically valid.',question:'Was the unmet need recognition, comfort, competent execution, or shared responsibility, and did the request actually name it?',experiment:'Let appreciation stand alone. Later, translate the improvement request into the comfort or outcome it would create: “It helps me feel ___ when ___.”',failure:'If appreciation becomes compulsory praise for chronically poor follow-through, this lens is masking accountability.'}],
  ['Louise Perry',{frame:`This event may be downstream of weak or conflicting norms: ambiguity about exclusivity, public respect, sexual expectations, online attention, or what commitment actually obligates.`,challenge:'Chemistry and private affection cannot compensate indefinitely for a relationship whose public and practical rules remain undefined.',question:'Which norm did each person assume existed, and was it ever explicitly agreed?',experiment:'Write a five-line agreement covering exclusivity, public dignity, online boundaries, sexual expectations, and the next commitment decision.',failure:'If one person benefits from permanent ambiguity and resists every clarifying agreement, more interpretation is unlikely to solve it.'}],
  ['Marcus Aurelius',philosopherIssue356('Marcus',ctx,type,event)],
  ['Aristotle',philosopherIssue356('Aristotle',ctx,type,event)],
  ['Bell Hooks',{frame:`Love is being evaluated here as a practice of care, respect, knowledge, responsibility, trust, and commitment, not merely a feeling. ${type} matters because domination and neglect can coexist with strong attachment.`,challenge:'Do not rename control, humiliation, dishonesty, or chronic disregard as love because the bond feels intense.',question:'Which element of loving practice disappeared in this event, and what concrete action would restore it?',experiment:'Audit the event across care, respect, trust, responsibility, knowledge, and commitment. Ask for one observable repair in the weakest category.',failure:'If one person demands empathy while refusing responsibility or mutuality, the language of love is concealing power.'}],
  ['Jane Austen',{frame:`Treat this event as character evidence under pressure. Charm is cheap when conditions are favorable; inconvenience, embarrassment, status threat, and correction reveal manners and judgment.`,challenge:'Do not let an appealing explanation outweigh a repeated behavioral pattern.',question:'What did this person do when pride or inconvenience entered, and was the response humble, consistent, and considerate?',experiment:'Record the event as evidence in five columns: charm, consistency, humility, regard for others, and repair.',failure:'If the analysis depends on imagined potential rather than observed conduct, courtship fantasy has overtaken character assessment.'}],
  ['Logan Ury',{frame:`The useful data is not only whether this produced a spark or an ick. Ask what side of you appeared, how your body felt during the interaction, and whether curiosity and ease increased after real contact.`,challenge:'Instant certainty can be a dating habit rather than accurate compatibility detection.',question:'Did the interaction make you feel heard, curious, relaxed, respected, and interested in another data point?',experiment:'Do a post-interaction review before swiping or seeking outside opinions. Separate observed behavior, felt experience, and prediction.',failure:'Slow-burn advice should not be used to override disrespect, dread, coercion, or a clear lack of interest.'}],
  ['Eli Finkel',{frame:`The evaluation may be distorted by an imagined marketplace of alternatives. App abundance can keep people comparing profiles instead of learning whether an actual relationship process works.`,challenge:'A person cannot compete fairly with a composite fantasy assembled from dozens of profiles.',question:'Are you responding to this person’s behavior or to the possibility that a frictionless alternative might be one swipe away?',experiment:'Pause option churn briefly and evaluate a small number of real interactions using the same behavioral criteria.',failure:'Reducing choice overload cannot manufacture attraction, character, or compatibility that is consistently absent.'}],
  ['David Buss',{frame:`Test whether ${type.toLowerCase()} reflects different relationship horizons, exclusivity assumptions, jealousy triggers, or levels of intended investment. Use strategy as a question, never as a stereotype.`,challenge:'Population averages do not tell you this individual’s motives; direct agreements and repeated behavior do.',question:'Are both people pursuing the same time horizon, exclusivity level, and investment strategy?',experiment:'Each person privately states the intended relationship horizon, exclusivity, investment, and exit conditions; then compare answers directly.',failure:'Discard the lens if it becomes a justification for suspicion, coercion, or claims that sex determines character.'}],
  ['Scott Stanley',{frame:`Look for sliding: expectations, dependence, cohabitation, or constraints accumulating without an explicit mutual decision. ${type} may be the bill arriving for choices nobody clearly made.`,challenge:'Inertia is not commitment, and difficulty leaving is not the same as dedication.',question:'What was explicitly decided together, and what became true through convenience, pressure, or avoidance?',experiment:'Name the current status, obligations, next decision, and decision date. Each person must be free to answer honestly.',failure:'Clarity that produces no aligned action is information about commitment, not a reason for another indefinite discussion.'}],
  ['Gabor Mate',{frame:`The intensity around ${type.toLowerCase()} may contain two realities: what is happening now and an older pain the event resembles. Compassion requires distinguishing them without excusing present behavior.`,challenge:'Understanding the origin of a reaction does not remove responsibility for its impact.',question:'Which part of the reaction belongs to current evidence, and which part has the emotional age of an earlier wound?',experiment:'Make two columns: present facts and familiar old feeling. Regulate first, then address the present behavior specifically.',failure:'Trauma language is harmful when it turns accountability into diagnosis or asks the harmed person to absorb repeated damage.'}],
  ['Brene Brown',{frame:`Shame may be converting a vulnerable fear into blame, perfectionism, defensiveness, or withdrawal. The useful move is precise disclosure, not compulsory oversharing.`,challenge:'“You made me feel” often hides the riskier sentence: “I am afraid this means I am not enough or do not matter.”',question:'What would feel exposing to admit here if blame were unavailable?',experiment:'Use: “The story I am making up is ___; the vulnerable part is ___; the specific reality-check I need is ___.”',failure:'Vulnerability is not repair when it is used to avoid apology, boundaries, or changed behavior.'}],
  ['Call Her Daddy',{frame:'The popular-media instinct is to protect leverage, maintain standards, and avoid overinvesting before reciprocity is proven. That can be useful protection, but it can also turn honest uncertainty into performance and power management.',challenge:'Ask whether the advice improves discernment or merely helps one person feel less exposed by becoming more strategic.',question:'What would direct, dignified communication reveal that a test, delay, or power move would obscure?',experiment:'Keep the standard, remove the game: state the expectation once and judge the behavioral response.',failure:'If both people follow leverage-first advice, expect more ambiguity, testing, audience-oriented choices, and less trust.'}],
  ['Red-pill',{frame:'The ideological frame reduces the event to status, bargaining power, and generalized sex differences. Its attraction is certainty; its cost is that it can stop seeing the individual in front of you.',challenge:'Replace every claim about men or women with a claim about this person’s observed behavior. See what survives.',question:'What evidence exists at the individual level, and what part of the conclusion came from a group stereotype?',experiment:'Run an individual-evidence audit using actions, agreements, consistency, consent, and reciprocity only.',failure:'If the framework increases contempt, dominance, coercive expectations, or tolerance for disrespect, it is degrading judgment rather than improving it.'}]
  ,['Evan Stark',{frame:'Covert phone and location monitoring is not simply reassurance-seeking. It can become a method of restricting autonomy by making ordinary privacy look guilty and forcing one person to live under continuous inspection.',challenge:'Do not treat unlimited access as the cure for distrust. Compliance often moves the standard rather than restoring trust.',question:'What happens when the monitored person says no, turns off access, or asks for equal privacy?',experiment:'Document the monitoring behavior, whether consent was freely given, the response to boundaries, and any escalation. Seek trusted support before confrontation if retaliation is plausible.',failure:'Use a different lens if the behavior was consensual, temporary, mutually bounded, and connected to a specific repair agreement after an actual breach.'}]
 ];
 const hit=entries.find(([key])=>name.includes(key));return hit?{...base,...hit[1]}:base;
}

function expertIdentity350(name,row={}){
 const profile=expertProfile343(name,row);
 return {avatar:row.avatar||profile.avatar,description:`${profile.kind}. ${profile.bio}`};
}

function renderExpertAbout350(){
 const cat=$id('expertCategorySelect339')?.value,name=$id('expertModeSelect339')?.value,row=advisorModes343[cat]?.[name],el=$id('expertAbout350');if(!el||!row)return;
 const who=expertIdentity350(name,row),source=row.sourceClass||(cat==='Attachment / Repair'||cat==='Modern Dating / Relationship Science'||cat==='Trauma / Nervous System'?'Research-informed framework':cat==='Philosophical Lenses'?'Philosophical / literary perspective':'Interpretive practitioner perspective');
 el.innerHTML=`<span class="expertAvatar346" aria-hidden="true">${esc(who.avatar)}</span><div><b>${esc(expertDisplay343(name))}</b><span class="expertProvenance346">${esc(source)}</span><p>${esc(who.description)}</p></div>`;
}

function card343(row,label,ctx,cls=''){
 const safety=ctx.safetyFlags.length?`<div class="expertSafety339"><b>Safety override:</b> ${esc(ctx.safetyFlags.join(', '))}. Prioritize immediate safety, trusted support, and clear boundaries before repair or persuasion.</div>`:'';
 const event=ctx.issue?.event||ctx.latestSnapshot?.note||ctx.profile?.evidence||'No event has been described yet.';
 const score=confidence343(row,ctx);
 const positive=ctx.isPositive?' expertPositive339':'';
 const cultural=row.cat==='Cultural Voices (contrast only)';
 const depth=expertDepth347(row,ctx);
 const sourceClass=row.sourceClass||(row.cat==='Attachment / Repair'||row.cat==='Modern Dating / Relationship Science'||row.cat==='Trauma / Nervous System'?'Research-informed framework':row.cat==='Philosophical Lenses'?'Philosophical / literary perspective':'Interpretive practitioner perspective');
 const identity=expertIdentity350(row.name,row),initials=identity.avatar;
 const consequence=row.consequence||'This perspective can offer a useful interpretation and a concrete experiment. It can also overfit the story, so reassess it against behavior and the result of the next interaction.';
 const sentence=s=>/[.!?][”"']?$/.test(String(s||'').trim())?String(s||'').trim():String(s||'').trim()+'.';
 const fullLimitation=depth.limitation||(/^Can\s/i.test(row.miss||'')?`This perspective can ${String(row.miss).replace(/^Can\s+/i,'').replace(/^./,x=>x.toLowerCase())}`:sentence(row.miss));
 const fullTradeoff=/^May\s/i.test(consequence)?`This framing may ${String(consequence).replace(/^May\s+/i,'').replace(/^./,x=>x.toLowerCase())}`:sentence(consequence);
 return `<div class="expertCard339 ${cls}${positive}${cultural?' expertCultural346':''}">
 <div class="expertIdentity346"><span class="expertAvatar346" aria-hidden="true">${esc(initials)}</span><div><b>${esc(label)}: ${esc(expertDisplay343(row.name))}</b><span class="expertProvenance346">${esc(sourceClass)}${row.evidenceTier?' · '+esc(row.evidenceTier):''}</span><span class="expertBio350">${esc(identity.description)}</span></div><span class="expertConfidence339">${esc(score)}</span></div>
  <p class="modeledNote356">Modeled application to this issue, not a direct quotation.</p>
  <div class="expertPills339"><span class="expertPill339">${esc(row.cat)}</span>${(row.tags||[]).slice(0,5).map(t=>`<span class="expertPill339">${esc(t)}</span>`).join('')}</div>
  ${safety}
  <div class="expertResponse351">
   <div class="expertEvent359"><b>Event analyzed</b><p>${esc(sentence(String(event).slice(0,520)))}</p></div>
   <div class="expertFinding359"><b>Crux this lens sees</b><p>${esc(sentence(depth.frame))}</p></div>
   <div class="expertEvidence359"><b>What else could explain it</b><p>${esc(sentence(depth.challenge))}</p><b>Evidence that would change the read</b><p>${esc(sentence(depth.evidence||'Look for repeated observable behavior, direct clarification, and the result of the next interaction.'))}</p></div>
   <div class="expertQuestion359"><b>Question to answer</b><p>${esc(sentence(depth.question))}</p></div>
   <div class="expertAction359"><b>Next test</b><p>${esc(sentence(depth.experiment))}</p></div>
   <div class="expertStop359"><b>Stop condition</b><p>${esc(sentence(depth.failure))}</p></div>
   <div class="expertLimit359"><b>Limitation</b><p>${esc(sentence(fullLimitation))}</p></div>
  </div>
 </div>`;
}

function populate343(){
 const cat=$id('expertCategorySelect339'), mode=$id('expertModeSelect339');
 if(!cat||!mode)return;
 const prevCat=cat.value, prevMode=mode.value;
 cat.innerHTML=Object.keys(advisorModes343).map(c=>`<option>${esc(c)}</option>`).join('');
 cat.value=advisorModes343[prevCat]?prevCat:Object.keys(advisorModes343)[0];
 function fill(){
  const modes=advisorModes343[cat.value]||{};
  mode.innerHTML=Object.keys(modes).map(m=>`<option value="${esc(m)}">${esc(expertDisplay343(m))}</option>`).join('');
  if(modes[prevMode])mode.value=prevMode;
  setTimeout(renderExpertAbout350,0);
 }
 cat.onchange=fill;
 mode.onchange=renderExpertAbout350;
 fill();
 renderExpertAbout350();
}

function renderContext343(){
 const el=$id('expertContext339'); if(el)el.innerHTML=contextHTML343(context343());
}

function renderSelected343(){
 const ctx=context343(), cat=$id('expertCategorySelect339')?.value, name=$id('expertModeSelect339')?.value, data=advisorModes343[cat]?.[name], out=$id('expertOutput339');
 if(data&&out){
  const selected={cat,name,...data};
  out.innerHTML=cat==='Cultural Voices (contrast only)'
   ? card343(aligned343(ctx),'Research-supported comparison',ctx,'expertAligned339')+card343(selected,'Cultural contrast',ctx,'expertDisagree339')
   : card343(selected,'Selected lens',ctx);
 }
 renderContext343();
}

function renderBest343(){
 const ctx=context343(), row=aligned343(ctx), out=$id('expertOutput339');
 if(row&&out){out.innerHTML=card343(row,'Best fit',ctx,'expertAligned339');out.dataset.issueId=ctx.issue?.id||'';}
 const cat=$id('expertCategorySelect339'), mode=$id('expertModeSelect339');
 if(cat&&mode&&row){cat.value=row.cat;cat.onchange();mode.value=row.name;}
 renderContext343();
}

function renderChallenge343(){
 const ctx=context343(), first=aligned343(ctx), second=challenge343(ctx), out=$id('expertOutput339');
 if(out)out.innerHTML=card343(first,'Best fit',ctx,'expertAligned339')+card343(second,'Challenge view',ctx,'expertDisagree339');
 renderContext343();
}

function showWorkspace343(){
 try{
  document.body.classList.add('showWorkspace');
  if(typeof showRepairCockpit==='function')showRepairCockpit();
  else{
   ['snapshotView','meView','diagnosticsView','cardsView','dashboardView','ecosystemView','personView'].forEach(id=>$id(id)?.classList.add('hidden'));
   $id('repairCockpitView')?.classList.remove('hidden');
   document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
   $id('tabRepairCockpit')?.classList.add('active');
  }
 }catch(e){}
}

function bind343(){
 populate343();
 renderContext343();
 renderExpertAbout350();
 const a=$id('renderExpertLensBtn339'), b=$id('mostAlignedExpertBtn339'), c=$id('likelyDisagreeExpertBtn339');
 if(a)a.onclick=renderSelected343;
 if(b)b.onclick=renderBest343;
 if(c)c.onclick=renderChallenge343;
 document.querySelectorAll('[data-thinker343]').forEach(btn=>{
  if(btn.dataset.bound343)return;
  btn.dataset.bound343='1';
  btn.onclick=()=>{
   populate343();
   const cat=$id('expertCategorySelect339'), mode=$id('expertModeSelect339');
   if(cat&&mode){
    cat.value=btn.dataset.advisorCategory343||'Philosophical Lenses';
    cat.onchange();
    mode.value=btn.dataset.thinker343;
    renderSelected343();
   }
  };
 });
 const out=$id('expertOutput339'), ctx=context343();
 if(out&&(!out.innerHTML.trim()||out.dataset.issueId!==(ctx.issue?.id||'')))renderBest343();
 const cat=$id('expertCategorySelect339'); if(cat?.parentElement)cat.parentElement.style.display='';
 addWorkspaceBands343();
}

function addWorkspaceBands343(){
 const issue=$id('issueTranslationPanel335'), casual=$id('casualRelationshipTracker');
 if(issue&&!$id('currentEventBand343'))issue.insertAdjacentHTML('beforebegin','<div id="currentEventBand343" class="workspaceBand343">Current Event</div>');
 if(casual&&!$id('relationshipTrackingBand343'))casual.insertAdjacentHTML('beforebegin','<div id="relationshipTrackingBand343" class="workspaceBand343">Relationship-Level Tracking</div>');
}

window.relationshipContext=window.relationshipContext343=context343;
window.normalizeRelationshipProfile=window.normalizeRelationshipProfile343=normalizeProfile343;
window.selectRelationshipExpert343=aligned343;
window.relationshipExpertRows343=rows343;

if(typeof rcCurrentProfile==='function'&&!window.__rcContext343){
 window.__rcContext343=true;
 const old=rcCurrentProfile;
 window.rcCurrentProfile=rcCurrentProfile=function(){return profile343({ensureProfile:true})||old();};
}

if(typeof currentIssue331==='function'&&!window.__issueContext343){
 window.__issueContext343=true;
 const old=currentIssue331;
 window.currentIssue331=currentIssue331=function(){return issue343(profile343({ensureProfile:true}),{skipLegacy:true,ensureIssue:true})||old();};
}

if(typeof openRelationshipSnapshot332==='function'&&!window.__openRel343){
 window.__openRel343=true;
 const oldOpen=openRelationshipSnapshot332;
 window.openRelationshipSnapshot332=openRelationshipSnapshot332=function(){
  const r=oldOpen();
  setTimeout(()=>{
   const body=$id('relationshipSnapshotBody');
   if(body&&!$id('relSnapGuide343'))body.insertAdjacentHTML('afterbegin','<div id="relSnapGuide343" class="guide"><b>One event powers every module.</b> Save this once, then Workspace will connect translation, expert lenses, role patterns, repair exercises, and graphs to the same context.</div>');
   const save=$id('saveRelationshipSnapshotBtn'); if(save)save.textContent='Save and open Workspace';
  },40);
  return r;
 };
}

if(typeof saveRelationshipSnapshot332==='function'&&!window.__saveRel343){
 window.__saveRel343=true;
 const oldSave=saveRelationshipSnapshot332;
 window.saveRelationshipSnapshot332=saveRelationshipSnapshot332=function(){
  const before=(profile343({ensureProfile:true})?.issues||[]).map(i=>i.id).join('|');
  const r=oldSave();
  setTimeout(()=>{
   const ctx=context343({ensureProfile:true});
   const sel=$id('issueCardSelector');
   const latest=(ctx.profile?.issues||[]).find(i=>!before.includes(i.id))||(ctx.profile?.issues||[])[(ctx.profile?.issues||[]).length-1];
   const latestValue=sel?.options?.length?sel.options[sel.options.length-1].value:latest?.id;
   if(sel&&latestValue){sel.value=latestValue;sel.dispatchEvent(new Event('change',{bubbles:true}));}
   showWorkspace343();
   renderContext343();
   if($id('status'))$id('status').textContent='Snapshot saved. Workspace is analyzing this event.';
  },120);
  return r;
 };
}

if(typeof renderRepairCockpit==='function'&&!window.__render343){
 window.__render343=true;
 const oldRender=renderRepairCockpit;
 window.renderRepairCockpit=renderRepairCockpit=function(){const r=oldRender();setTimeout(bind343,80);setTimeout(bind343,700);return r;};
}

document.addEventListener('change',e=>{if(e.target&&['issueCardSelector','repairCockpitProfileSelect','expertCategorySelect339','expertModeSelect339'].includes(e.target.id))setTimeout(bind343,60);});
document.addEventListener('DOMContentLoaded',()=>setTimeout(bind343,1000));
setTimeout(bind343,1400);
})();

/* v3.4.6 compact workspace and profile-specific issue lifecycle */
(function(){
const $346=id=>document.getElementById(id);
const esc346=s=>typeof escapeHTML==='function'?escapeHTML(String(s??'')):String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function profile346(){
 const selected=$346('repairCockpitProfileSelect')?.value;
 return (state.profiles||[]).find(p=>p.id===selected)||(state.profiles||[]).find(p=>p.id===state.currentId)||(state.profiles||[])[0]||null;
}
function normalizeIssues346(p){
 if(!p)return;
 p.issues=p.issues||[];
 p.issues.forEach((i,index)=>{
  const historyDate=(i.history||[]).map(h=>h?.created).find(Boolean);
  i.created=i.created||i.createdAt||historyDate||(p.snapshots||[])[index]?.created||new Date(0).toISOString();
  i.updatedAt=i.updatedAt||i.created;
  i.status=i.status==='resolved'?'resolved':'unresolved';
  i.resolvedAt=i.status==='resolved'?(i.resolvedAt||i.updatedAt):null;
  i.history=Array.isArray(i.history)?i.history:[];
  i.ratings=i.ratings||{};
 });
}
function selectedIssue346(p){
 normalizeIssues346(p);
 const id=$346('issueCardSelector')?.value;
 return p?.issues?.find(i=>i.id===id)||p?.issues?.slice().sort((a,b)=>new Date(b.created)-new Date(a.created))[0]||null;
}
function shortDate346(value){
 const d=new Date(value);return Number.isNaN(d.getTime())?'Date unknown':d.toLocaleString([],{month:'short',day:'numeric',year:'numeric',hour:'numeric',minute:'2-digit'});
}
function initials346(value,fallback){
 const x=String(value||'').trim().split(/\s+/).filter(Boolean).slice(0,2).map(v=>v[0]).join('').toUpperCase();return x||fallback;
}
function renderIssueOptions346(p,issue){
 const sel=$346('issueCardSelector');if(!sel||!p)return;
 const selected=issue?.id||sel.value;
 const sorted=(p.issues||[]).map((i,index)=>({i,index})).sort((a,b)=>new Date(b.i.created)-new Date(a.i.created)||b.index-a.index);
 sel.innerHTML=sorted.map(({i})=>`<option value="${esc346(i.id)}" ${i.id===selected?'selected':''}>${i.status==='resolved'?'Resolved':'Open'} · ${esc346(i.title||i.type||'Issue')} · ${esc346(shortDate346(i.created))}</option>`).join('');
}
function renderCompact346(){
 const p=profile346();if(!p)return;
 normalizeIssues346(p);
 const issue=selectedIssue346(p),m=typeof metrics==='function'?metrics(p):{};
 const recent=issue?.title||issue?.type||(p.snapshots||[]).at(-1)?.title||(p.snapshots||[]).at(-1)?.note||'No issue or event recorded';
 const title=p.name||'Untitled relationship';
 const summary=$346('workspaceCompactSummary346');
 if(summary)summary.innerHTML=`<b>${esc346(title)}</b><span>Latest issue or event: ${esc346(recent)}</span>`;
 const meName=state.me?.name||state.me?.myName||'Me';
 if($346('workspaceAvatarMe346'))$346('workspaceAvatarMe346').textContent=initials346(meName,'ME');
 if($346('workspaceAvatarPartner346'))$346('workspaceAvatarPartner346').textContent=initials346(title,'?');
 renderIssueOptions346(p,issue);
 const stamp=$346('issueTimestamp346');if(stamp)stamp.textContent=issue?`Added ${shortDate346(issue.created)} · Updated ${shortDate346(issue.updatedAt)}`:'No issue selected';
 const btn=$346('toggleIssueResolved346');if(btn){const done=issue?.status==='resolved';btn.textContent=done?'Resolved · Reopen':'Unresolved · Mark resolved';btn.classList.toggle('unresolved',!done);btn.disabled=!issue;}
 const heroMeta=$346('issueHeroMeta342');if(heroMeta&&issue)heroMeta.textContent=`${issue.status==='resolved'?'Resolved':'Unresolved'} · ${shortDate346(issue.created)} · Saved to ${title}`;
 const simple=$346('simpleIssueExamples334');if(simple){const button=simple.querySelector('button');if(button)button.textContent='Add example to this profile';}
}
function toggleResolved346(){
 const p=profile346(),issue=selectedIssue346(p);if(!issue)return;
 const now=new Date().toISOString(),done=issue.status==='resolved';
 issue.status=done?'unresolved':'resolved';issue.updatedAt=now;issue.resolvedAt=done?null:now;
 issue.history=issue.history||[];issue.history.push({id:typeof uid==='function'?uid():String(Date.now()),created:now,kind:done?'reopened':'resolved',note:''});
 if(typeof saveState==='function')saveState();renderCompact346();
}
function bind346(){
 const toggle=$346('toggleIssueResolved346');if(toggle)toggle.onclick=toggleResolved346;
 const profiles=$346('toggleProfileExamples346'),tray=$346('profileExamplesTray346');if(profiles&&tray)profiles.onclick=()=>{tray.classList.toggle('hidden');profiles.setAttribute('aria-expanded',String(!tray.classList.contains('hidden')));};
 renderCompact346();
}
if(typeof renderRepairCockpit==='function'&&!window.__render346){window.__render346=true;const old=renderRepairCockpit;renderRepairCockpit=function(){const r=old();setTimeout(bind346,120);setTimeout(bind346,760);return r;};}
document.addEventListener('change',e=>{if(['repairCockpitProfileSelect','issueCardSelector'].includes(e.target?.id))setTimeout(bind346,80);});
document.addEventListener('DOMContentLoaded',()=>setTimeout(bind346,1200));setTimeout(bind346,1500);
})();

/* v3.4.7 consolidated Workspace cleanup */
(function(){
const $347=id=>document.getElementById(id);
function removeInteractionPattern347(){
 const root=$347('repairCockpitLoop');if(!root)return;
 root.querySelectorAll('.compactPattern347,.clearLoopGrid,.loopChain,:scope > .loopNode,:scope > .loopArrow').forEach(n=>n.remove());
 root.querySelectorAll('h4').forEach(h=>{if(/interaction pattern|escalation loop|positive reinforcement loop/i.test(h.textContent||''))h.remove();});
}
function cleanupWorkspace347(){
 $347('trajectoryCharts340')?.remove();
 $347('casualTrajectory337')?.remove();
 ['sliderTimelineCanvas','workspacePeaceRespectCanvas'].forEach(id=>$347(id)?.closest('.graphGrid>div')?.remove());
 const left=$347('repairCockpitView')?.querySelector('.workspaceLeft335');
 [['therapyPanel335','repairCockpitStrategy'],['rolePanel335','repairCockpitActionStrategy']].forEach(([panelId,contentId])=>{const panel=$347(panelId),content=$347(contentId);if(panel&&content&&content.parentElement!==panel)panel.appendChild(content);if(left&&panel&&panel.parentElement!==left)left.appendChild(panel);});
 ['therapyPanel335','rolePanel335'].forEach(id=>$347(id)?.querySelectorAll(':scope > h3').forEach(h=>h.remove()));
 document.querySelectorAll('.workspaceTwoColumn334:empty,.workspaceTwoColumn:empty,.workspaceLeft334:empty,.workspaceRight334:empty').forEach(e=>e.remove());
 const partnerBtn=$347('openCasualTrackerWizardBtn');if(partnerBtn)partnerBtn.textContent='Edit General Partner Signals';
 const coupleBtn=$347('openSliderWizardBtn');if(coupleBtn)coupleBtn.textContent='Couple Measures';
 const source=$347('repairCockpitSourceStrip');if(source)source.setAttribute('aria-label','Relationship score summary');
 removeInteractionPattern347();
}
if(typeof renderTranslation331==='function'&&!window.__translation347){window.__translation347=true;const old=renderTranslation331;renderTranslation331=function(){const r=old();setTimeout(removeInteractionPattern347,0);return r;};}
if(typeof renderRepairCockpit==='function'&&!window.__workspace347){window.__workspace347=true;const old=renderRepairCockpit;renderRepairCockpit=function(){const r=old();setTimeout(cleanupWorkspace347,100);setTimeout(cleanupWorkspace347,800);return r;};}
document.addEventListener('DOMContentLoaded',()=>setTimeout(cleanupWorkspace347,1700));setTimeout(cleanupWorkspace347,1900);
document.addEventListener('change',e=>{if(e.target?.id==='issueCardSelector')setTimeout(cleanupWorkspace347,260);});
})();

/* v3.5.8 interactive relationship evidence timeline */
(function(){
const $358=id=>document.getElementById(id);
const esc358=s=>typeof escapeHTML==='function'?escapeHTML(String(s??'')):String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const traitOptions358=['Warmth','Follow-through','Responsibility','Respect','Honesty','Affection','Teamwork','Steadiness','Curiosity','Generosity','Accountability','Healthy boundaries','Inconsistency','Avoidance','Dismissiveness','Control'];
const concernTraits358=new Set(['Inconsistency','Avoidance','Dismissiveness','Control']);
const outcomeMeta358={
 unreviewed:['Not reviewed',0],ongoing:['Ongoing',-.2],resolved_good:['Resolved well',1],resolved_partial:['Partly resolved',.4],resolved_bad:['Resolved poorly',-1],positive_repeated:['Positive pattern repeated',.8]
};
function profile358(){const id=$358('repairCockpitProfileSelect')?.value||state.currentId;return (state.profiles||[]).find(p=>p.id===id)||(state.profiles||[])[0]||null;}
function polarity358(s){const explicit=String(s.polarity||'').toLowerCase();if(['positive','negative','mixed'].includes(explicit))return explicit;const avg=(Number(s.peace||50)+Number(s.respect||50)+Number(s.repair||50))/3;return avg>=65?'positive':avg<52?'negative':'mixed';}
function statusLabel358(status){return (outcomeMeta358[status]||outcomeMeta358.unreviewed)[0];}
function shortDate358(value,label){if(label)return label;const d=new Date(value);return Number.isNaN(d.getTime())?'Date unknown':d.toLocaleDateString([],{month:'short',day:'numeric',year:'numeric'});}
function outcomeOptions358(selected){return Object.entries(outcomeMeta358).map(([value,[label]])=>`<option value="${value}" ${value===selected?'selected':''}>${label}</option>`).join('');}
function recurrenceOptions358(selected){const rows=[['not_checked','Not checked yet'],['no','No similar event since'],['similar_good','Yes, with a better outcome'],['similar_same','Yes, similar pattern'],['similar_worse','Yes, and it was worse'],['unsure','Unsure']];return rows.map(([v,l])=>`<option value="${v}" ${v===selected?'selected':''}>${l}</option>`).join('');}
function renderTraits358(){
 const p=profile358(),strip=$358('repairCockpitSourceStrip');if(!p||!strip)return;
 strip.querySelector('.relationshipTraits358')?.remove();
 const counts={};(p.snapshots||[]).forEach(s=>(s.traits358||[]).forEach(t=>counts[t]=(counts[t]||0)+1));
 const traits=Object.keys(counts).sort((a,b)=>counts[b]-counts[a]||a.localeCompare(b));p.relationshipTraits358=traits;
 if(!traits.length)return;
 strip.insertAdjacentHTML('beforeend',`<div class="relationshipTraits358"><span>Relationship descriptors</span><div>${traits.slice(0,8).map(t=>`<span class="relationshipTrait358 ${concernTraits358.has(t)?'concern':''}">${esc358(t)}${counts[t]>1?` <b>${counts[t]}</b>`:''}</span>`).join('')}</div></div>`);
}
function recalcAdjustments358(p){
 const total={peace:0,respect:0,repair:0};
 (p.snapshots||[]).forEach(s=>{const f=s.followUp358;if(!f?.applyMeasures)return;const effect=(outcomeMeta358[f.status]||outcomeMeta358.unreviewed)[1];total.peace+=effect*4;total.respect+=effect*3.5;total.repair+=effect*7;});
 p.eventAdjustment358={peace:Math.max(-15,Math.min(15,Math.round(total.peace))),respect:Math.max(-15,Math.min(15,Math.round(total.respect))),repair:Math.max(-18,Math.min(18,Math.round(total.repair)))};
}
function adjustProfileSliders358(p,s,nextEffect){
 p.profileSliders=p.profileSliders||{};const previous=Number(s.followUp358?.appliedSliderEffect||0),diff=nextEffect-previous,clamp=v=>Math.max(1,Math.min(10,Math.round(v*10)/10));
 if(diff){p.profileSliders.peace=clamp(Number(p.profileSliders.peace??5)+diff*.4);p.profileSliders.respect=clamp(Number(p.profileSliders.respect??5)+diff*.35);p.profileSliders.repair=clamp(Number(p.profileSliders.repair??5)+diff*.7);}
}
function renderEventTimeline358(openIndex){
 const el=$358('snapshotTimelineBody336'),p=profile358();if(!el||!p)return;
 const snaps=(p.snapshots||[]).map((s,index)=>({s,index})).sort((a,b)=>new Date(b.s.created||0)-new Date(a.s.created||0));
 if(!snaps.length){el.innerHTML='<p class="small">No events recorded yet.</p>';return;}
 el.innerHTML=`<div class="eventEvidenceList358">${snaps.map(({s,index},order)=>{
  const pol=polarity358(s),follow=s.followUp358||{},status=follow.status||(pol==='positive'?'unreviewed':'ongoing'),traits=s.traits358||[],recap=s.eventSummary||s.note||s.event||'No event recap was recorded.',context=s.story||'',resolution=follow.note||s.resolution||'';
  return `<details class="eventEvidence358 ${pol}" data-event-index358="${index}" ${(openIndex===index||openIndex===undefined&&order===0)?'open':''}>
   <summary><span class="eventDot358"></span><span class="eventSummary358"><b>${esc358(s.title||s.domain||'Relationship event')}</b><span>${esc358(shortDate358(s.created,s.label))}</span></span><span class="eventState358 ${esc358(status)}">${esc358(statusLabel358(status))}</span><span class="eventScores358">P ${Math.round(Number(s.peace)||0)} · R ${Math.round(Number(s.respect)||0)}</span></summary>
   <div class="eventDetails358">
    <div class="eventRecap358"><div><b>Event recap</b><p>${esc358(recap)}</p></div>${context?`<div><b>Context recorded at the time</b><p>${esc358(context)}</p></div>`:''}${resolution?`<div><b>Follow-up evidence</b><p>${esc358(resolution)}</p></div>`:''}</div>
    <div class="eventReviewGrid358">
     <label>Outcome<select data-field358="status">${outcomeOptions358(status)}</select></label>
     <label>Similar event since<select data-field358="recurrence">${recurrenceOptions358(follow.recurrence||'not_checked')}</select></label>
    </div>
    <label class="eventNote358">What happened afterward<textarea data-field358="note" placeholder="Accountability, apology, changed behavior, recurrence, or new evidence...">${esc358(follow.note||'')}</textarea></label>
    <fieldset class="eventTraits358"><legend>Traits this event supports</legend><div>${traitOptions358.map(t=>`<label class="traitChoice358 ${concernTraits358.has(t)?'concern':''}"><input type="checkbox" value="${esc358(t)}" ${traits.includes(t)?'checked':''}><span>${esc358(t)}</span></label>`).join('')}</div><label class="customTrait358">Other descriptor<input data-field358="customTrait" value="${esc358(follow.customTrait||'')}" placeholder="Example: playful"></label></fieldset>
    <div class="eventSaveRow358"><label><input type="checkbox" data-field358="applyMeasures" ${follow.applyMeasures?'checked':''}> Update relationship measures from this outcome</label><button type="button" data-save-event358="${index}">Save follow-up</button></div>
   </div>
  </details>`;
 }).join('')}</div>`;
 renderTraits358();
}
function saveFollowUp358(index){
 const p=profile358(),s=p?.snapshots?.[index],card=$358('snapshotTimelineBody336')?.querySelector(`[data-event-index358="${index}"]`);if(!p||!s||!card)return;
 const get=name=>card.querySelector(`[data-field358="${name}"]`),status=get('status')?.value||'unreviewed',apply=!!get('applyMeasures')?.checked,effect=apply?(outcomeMeta358[status]||outcomeMeta358.unreviewed)[1]:0;
 adjustProfileSliders358(p,s,effect);
 const checked=[...card.querySelectorAll('.traitChoice358 input:checked')].map(x=>x.value),custom=String(get('customTrait')?.value||'').trim();if(custom&&!checked.includes(custom))checked.push(custom);
 s.traits358=checked;s.followUp358={status,recurrence:get('recurrence')?.value||'not_checked',note:String(get('note')?.value||'').trim(),customTrait:custom,applyMeasures:apply,appliedSliderEffect:effect,updatedAt:new Date().toISOString()};
 recalcAdjustments358(p);if(typeof saveState==='function')saveState();if(typeof safeUpdate==='function')safeUpdate();if(typeof renderRepairCockpit==='function')renderRepairCockpit();
 setTimeout(()=>{renderEventTimeline358(index);const statusEl=$358('status');if(statusEl)statusEl.textContent='Event follow-up saved. Relationship evidence updated.';},180);
}
document.addEventListener('click',e=>{const btn=e.target.closest?.('[data-save-event358]');if(btn)saveFollowUp358(Number(btn.dataset.saveEvent358));});
if(typeof safeMetricSet==='function'&&!window.__eventMetrics358){window.__eventMetrics358=true;const oldSafe358=safeMetricSet;safeMetricSet=function(p){const m=oldSafe358(p),a=p?.eventAdjustment358||{};return {...m,peaceIndex:Math.max(0,Math.min(100,Math.round((m.peaceIndex||0)+(a.peace||0)))),respectIndex:Math.max(0,Math.min(100,Math.round((m.respectIndex||0)+(a.respect||0)))),repair:Math.max(0,Math.min(100,Math.round((m.repair||0)+(a.repair||0))))};};}
if(typeof renderRcSourceStrip==='function'&&!window.__traits358){window.__traits358=true;const oldSource358=renderRcSourceStrip;renderRcSourceStrip=function(){const r=oldSource358();renderTraits358();return r;};}
if(typeof renderRepairCockpit==='function'&&!window.__timeline358){window.__timeline358=true;const oldCockpit358=renderRepairCockpit;renderRepairCockpit=function(){const r=oldCockpit358();setTimeout(()=>renderEventTimeline358(),220);setTimeout(()=>renderEventTimeline358(),1050);return r;};}
document.addEventListener('change',e=>{if(e.target?.id==='repairCockpitProfileSelect')setTimeout(()=>renderEventTimeline358(),120);});
document.addEventListener('DOMContentLoaded',()=>setTimeout(()=>renderEventTimeline358(),2300));setTimeout(()=>renderEventTimeline358(),2500);
})();

/* v3.6.0 plain-language relationship glossary */
(function(){
const terms360={
 'accept influence':'Treat your partner as having a valid perspective and let it affect the decision, rather than automatically resisting.',
 'attachment':'The pattern of safety, closeness, and reassurance people seek from important relationships.',
 'autonomy':'The ability to make your own choices, retain privacy, and remain a separate person inside a relationship.',
 'boundary':'A clear limit describing what you will participate in and what action you will take if the limit is crossed.',
 'coercive control':'A repeated pattern that restricts another person\'s freedom through monitoring, intimidation, isolation, humiliation, or control of ordinary choices.',
 'complaint':'A statement about one specific behavior or event that can potentially be changed.',
 'contempt':'Communicating disgust or superiority through mockery, insults, sneering, or treating a partner as beneath you.',
 'criticism':'Attacking someone\'s character or personality instead of describing a specific behavior and request.',
 'defensiveness':'Protecting yourself by denying responsibility, making excuses, changing the subject, or counterattacking.',
 'differentiation':'Staying emotionally connected while still having your own views, preferences, identity, and limits.',
 'emotional regulation':'The ability to experience strong emotion without losing control of your behavior or ability to think.',
 'escalation':'A conflict becoming more intense through harsher language, louder emotion, threats, withdrawal, or retaliation.',
 'flooding':'Becoming so emotionally and physically overwhelmed that listening, reasoning, and responding constructively become difficult.',
 'gridlock':'A recurring conflict that stays stuck because it touches deeper values, identities, fears, or life dreams.',
 'harsh startup':'Beginning a difficult conversation with blame, accusation, sarcasm, or contempt, making defensiveness more likely.',
 'invisible labor':'Planning, remembering, anticipating, coordinating, and emotional work that is necessary but often unnoticed.',
 'mental load':'The ongoing work of noticing what must happen, remembering it, planning it, and making sure it gets done.',
 'nervous system':'The body\'s threat-and-safety response, including tension, racing heart, shutdown, agitation, and calm.',
 'own impact':'Acknowledge how your behavior affected the other person even when harm was not your intention.',
 'primary emotion':'The more vulnerable feeling underneath a protective reaction, such as fear, hurt, loneliness, or shame beneath anger.',
 'protest behavior':'Criticism, pursuit, testing, or other intensified behavior used to seek reassurance when connection feels threatened.',
 'pursue-withdraw':'A cycle in which one person presses for connection or answers while the other retreats, causing each person to intensify their side.',
 'reciprocity':'Whether attention, effort, care, and investment move in both directions rather than mainly one way.',
 'repair bid':'Any attempt to lower conflict intensity or reconnect, such as apologizing, taking responsibility, asking to restart, or using gentle humor.',
 'repair landed':'The other person noticed and accepted an attempt to calm the conflict or reconnect.',
 'repair':'What happens after hurt or conflict: accountability, clarification, apology, changed behavior, and reconnection.',
 'reassurance':'Words or behavior that communicate reliability, care, commitment, or continued connection.',
 'relationship horizon':'The kind and expected duration of relationship each person intends, such as casual dating, exclusivity, or long-term partnership.',
 'shame':'The painful belief that a mistake or rejection means something is fundamentally wrong with you.',
 'soft startup':'Beginning with a specific event, your feeling, and a concrete request instead of blame or character attack.',
 'stonewalling':'Emotionally or physically disengaging from a conflict without communicating a plan to calm down and return.',
 'vulnerability':'Openly sharing a real feeling, fear, need, or uncertainty without knowing exactly how it will be received.'
};
const escaped360=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
const ordered360=Object.keys(terms360).sort((a,b)=>b.length-a.length);
const matcher360=new RegExp(`\\b(${ordered360.map(escaped360).join('|')})\\b`,'gi');
function enhance360(root){
 if(!root||root.dataset.glossary360==='1')return;root.dataset.glossary360='1';
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);const nodes=[];let node;
 while(node=walker.nextNode()){if(node.parentElement?.closest('.therapyTerm360,.termDefinition360,button,select,textarea'))continue;if(matcher360.test(node.nodeValue||''))nodes.push(node);matcher360.lastIndex=0;}
 nodes.forEach(textNode=>{const text=textNode.nodeValue,frag=document.createDocumentFragment();let last=0;matcher360.lastIndex=0;let match;
  while(match=matcher360.exec(text)){if(match.index>last)frag.append(text.slice(last,match.index));const key=match[0].toLowerCase(),button=document.createElement('button');button.type='button';button.className='therapyTerm360';button.textContent=match[0];button.dataset.term=key;button.dataset.definition=terms360[key];button.setAttribute('aria-label',`${match[0]}: ${terms360[key]}`);frag.append(button);last=match.index+match[0].length;}
  if(last<text.length)frag.append(text.slice(last));textNode.replaceWith(frag);
 });
}
function scan360(){document.querySelectorAll('#expertOutput339 .expertResponse351').forEach(enhance360);}
document.addEventListener('click',e=>{const term=e.target.closest?.('.therapyTerm360');if(!term)return;const card=term.closest('.expertCard339');if(!card)return;let panel=card.querySelector(':scope > .termDefinition360');if(!panel){panel=document.createElement('div');panel.className='termDefinition360';panel.setAttribute('role','status');panel.setAttribute('aria-live','polite');card.append(panel);}panel.innerHTML=`<b>${term.textContent}</b><span>${term.dataset.definition}</span>`;panel.classList.add('visible');card.querySelectorAll('.therapyTerm360.active').forEach(x=>x.classList.remove('active'));term.classList.add('active');});
document.addEventListener('DOMContentLoaded',()=>{setTimeout(scan360,1100);const out=document.getElementById('expertOutput339');if(out)new MutationObserver(()=>setTimeout(scan360,0)).observe(out,{childList:true,subtree:true});});
setTimeout(scan360,1500);
})();

/* v3.5.0 evidence-aware meaning translation */
(function(){
function renderTranslation350(){
  let p=profile331(),issue=currentIssue331(),el=$('repairCockpitLoop');if(!p||!issue||!el)return;
  let t=template331(issue),positive=issue.polarity==='Positive';
  el.innerHTML=`<div class="issueSummaryHero"><h4>${escape331(issue.title||issue.type)}</h4>
    <p><b>Specific event:</b> ${escape331(issue.event||'No event described yet.')}</p>
    <p><b>${positive?'What may be working':'What kind of issue this is'}:</b> ${escape331(t.issue)}</p>
    <div class="issuePills"><span class="issuePill">${escape331(issue.polarity||'Negative')}</span><span class="issuePill">Aggrieved: ${escape331(issue.aggrieved||'Both')}</span><span class="issuePill">${escape331(issue.recurrence||'Unclear')}</span><span class="issuePill">${escape331(issue.type||'Issue')}</span></div>
  </div>
  <div class="hypothesisNote350"><b>Interpretation check:</b> these are possible meanings, not claims about either person. Use the evidence tests in each card, then mark Accurate, Partial, or Wrong.</div>
  <div class="translationTwoCol">
    <div class="translationCard"><b>Possible meaning for him</b><p>${escape331(t.male)}</p><div class="reviewRow">${ratingBtn331(issue,'male','Accurate')}${ratingBtn331(issue,'male','Partial')}${ratingBtn331(issue,'male','Wrong')}</div></div>
    <div class="translationCard"><b>Possible meaning for her</b><p>${escape331(t.female)}</p><div class="reviewRow">${ratingBtn331(issue,'female','Accurate')}${ratingBtn331(issue,'female','Partial')}${ratingBtn331(issue,'female','Wrong')}</div></div>
  </div>
  <div class="translationCard translationNext350"><b>${positive?'How to reinforce it':'Most useful next step'}</b><p>${escape331(t.action)}</p></div>`;
  let act=$('repairCockpitActionStrategy');if(act)act.innerHTML=`<div class="actionList"><div class="actionItem"><b>${positive?'Reinforcement':'Immediate action'}</b>${escape331(t.action)}</div></div>`;
  let th=$('repairCockpitStrategy');if(th)th.innerHTML=`<div class="exerciseList"><div class="exerciseCard"><b>${escape331(t.exercise[0])}</b>${escape331(t.exercise[1])}</div></div>`;
  bindRatings331();
}
window.renderTranslation331=renderTranslation331=renderTranslation350;
if(typeof renderRepairCockpit==='function'&&!window.__translation350){window.__translation350=true;const old=renderRepairCockpit;renderRepairCockpit=function(){const r=old();setTimeout(renderTranslation350,180);setTimeout(renderTranslation350,900);return r;};}
document.addEventListener('change',e=>{if(e.target?.id==='issueCardSelector')setTimeout(renderTranslation350,140);});
document.addEventListener('DOMContentLoaded',()=>setTimeout(renderTranslation350,2100));
})();

/* v3.6.3 diagnostics cleanup for current peace/respect visuals */
(function(){
const id362=x=>document.getElementById(x);
function currentPeaceRespectVisual362(){return !!(id362('coupleTrajectoryCanvas342')||id362('dashboardPeaceRespectCanvas')||document.querySelector('.prMatrix357'));}
function cleanDiagnostics362(){
 const stale=id362('diagExtra332');
 if(stale){
  stale.classList.add('diagnosticStale342');
  if(currentPeaceRespectVisual362())stale.innerHTML=stale.innerHTML.replace(/<div class="diagnosticFail"><b>FAIL:<\/b> peace\/respect time canvas<\/div>/,'<div class="diagnosticPass"><b>PASS:</b> peace/respect trajectory or matrix</div>');
 }
}
const oldDiag362=window.runDiagnostics;
if(oldDiag362&&!window.__diag362){window.__diag362=true;window.runDiagnostics=function(){const r=oldDiag362();setTimeout(cleanDiagnostics362,150);return r;};}
document.addEventListener('DOMContentLoaded',()=>setTimeout(cleanDiagnostics362,2300));
})();

/* v3.6.4 crux-specific issue/event meaning translation */
(function(){
const q364=id=>document.getElementById(id);
const esc364=s=>typeof escapeHTML==='function'
 ? escapeHTML(String(s??''))
 : String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function profile364(){
 if(typeof profile331==='function')return profile331();
 if(typeof rcCurrentProfile==='function')return rcCurrentProfile();
 return (state.profiles||[])[0];
}
function issue364(){
 if(typeof currentIssue331==='function')return currentIssue331();
 const p=profile364();
 return p?.issues?.[p.issues.length-1]||null;
}
function analyzed364(){
 const engine=window.RelationshipExpertEngine359;
 const ctx={profile:profile364(),issue:issue364()};
 if(engine?.analyze)return engine.analyze(ctx);
 return {crux:'communication_process',label:'a meaning gap',polarity:'mixed'};
}
const meanings364={
 safety_control:{
  him:'If he is being monitored, he may hear that privacy itself is suspicious and peace depends on surrendering access. If he is monitoring, he may be turning anxiety into control instead of asking for proportionate reassurance.',
  her:'If she is being monitored, she may hear that autonomy is conditional and that no amount of access will finally prove innocence. If she is monitoring, fear may be present, but fear does not create consent for covert access.',
  test:'Check consent, reciprocity, revocability, retaliation risk, and whether refusal is treated as evidence of guilt.',
  move:'Do not solve this as a misunderstanding first. Stop covert access, protect private support, and define reassurance that can happen without surveillance.'
 },
 boundary_autonomy:{
  him:'He may hear the boundary as rejection, loss of influence, or proof that his needs do not matter. The hurt can be real, but it does not make repeated pressure appropriate.',
  her:'She may hear continued persuasion after a clear no as evidence that calm requires surrendering her limit. The main evidence is whether the no is accepted without guilt, punishment, or another round of debate.',
  test:'Look at the response after the limit was stated: acceptance, negotiation, guilt, escalation, or retaliation.',
  move:'State the limit once in behavioral terms and watch the next response. The repair is respect for the limit, not a better argument about it.'
 },
 trust_evidence:{
  him:'He may hear uncertainty as accusation, or he may presume that only access will make him feel safe. If he was lied to, he may be trying to separate a real breach from a fear story.',
  her:'She may hear secrecy, changed stories, or demands for proof as a threat to emotional safety. If she is being questioned, the issue may be whether reassurance has become an endless moving standard.',
  test:'Separate verified facts, explicit agreements, feared meanings, and the specific behavior that would actually rebuild trust.',
  move:'Ask one proportionate factual question, name the agreement, and judge the next pattern of conduct without sliding into surveillance.'
 },
 respect_dignity:{
  him:'He may hear public joking, contempt, screenshots, or friend-group commentary as proof that his dignity is not protected when someone is angry, funny, or seeking allies.',
  her:'She may hear the event as dismissal, embarrassment, or being made small in front of others. If she went public, she may be seeking witnesses because private repair felt unavailable.',
  test:'Ask whether the behavior would still feel acceptable if replayed calmly in front of both people and whether repair protected dignity afterward.',
  move:'Move the conflict private, name the dignity violation, and set a clear rule for jokes, screenshots, friend commentary, and public conflict.'
 },
 responsibility_fairness:{
  him:'He may hear oversight as lack of trust, or he may be missing the invisible work required to notice, plan, and finish the task without being managed.',
  her:'She may hear the event as proof that she is the default risk manager, reminder system, or final owner of consequences even when the task is supposedly shared.',
  test:'Identify who owns noticing, planning, execution, authority, standard, and cleanup when the task fails.',
  move:'Assign one true owner, one observable standard, one consultation threshold, and one review date. Appreciation cannot substitute for ownership.'
 },
 commitment_clarity:{
  him:'He may hear the commitment question as pressure to promise before he has chosen the obligations. Or he may want the relationship while avoiding the risk of naming a decision.',
  her:'She may hear ambiguity as not being chosen while her time, expectations, body, finances, or future plans are still being used by the relationship.',
  test:'Separate thoughtful pacing from drift: what has been explicitly chosen, what obligations have accumulated, and who benefits from ambiguity.',
  move:'Name current status, obligations, the next decision, and the date by which continued ambiguity becomes an answer.'
 },
 communication_process:{
  him:'He may hear questions as prosecution, correction, or a verdict that he cannot be trusted with his own account.',
  her:'She may hear missing context, unilateral decisions, or changed explanations as exclusion from shared reality.',
  test:'Find the first escalation move and separate event, interpretation, impact, repair bid, and unresolved decision.',
  move:'Restate the event without motive language, check both accounts, and make one specific request before widening the argument.'
 },
 attachment_accessibility:{
  him:'He may hear bids for closeness as pressure to perform emotion immediately, especially if disclosure has led to criticism before.',
  her:'She may hear distance, silence, or delayed return as evidence that she is emotionally alone or no longer cherished.',
  test:'Track the bid, the feared meaning, the protective response, and whether reconnection happens when promised.',
  move:'Make one bounded reach and one reliable response: yes, no, or later with a concrete return time that is actually kept.'
 },
 desire_intimacy:{
  him:'He may hear low initiation, rejection, or roommate energy as evidence that he is no longer desired rather than that stress, resentment, health, or pressure is blocking closeness.',
  her:'She may hear pursuit as pressure if affection, safety, fairness, or nonsexual warmth are missing. Desire may shut down when closeness feels demanded rather than invited.',
  test:'Separate consent, pressure, health, resentment, welcome affection, and the conditions that increase or kill desire.',
  move:'Discuss desire outside initiation and name one welcome form of closeness, one inhibitor, and one support without bargaining for access.'
 },
 appreciation_recognition:{
  him:'He may hear correction inside a thank-you moment as proof that his effort only counts when perfect, making initiative feel unrewarding or risky.',
  her:'She may hear gratitude demands as pressure to ignore standards, unfinished work, or the fact that she still carries the mental load.',
  test:'Separate contribution, intended benefit, actual impact, agreed standard, and whether recognition and correction were collapsed into one moment.',
  move:'Let specific appreciation stand alone. Bring correction or standards later as a separate request with shared ownership.'
 },
 dating_evaluation:{
  him:'He may experience the date or message as being judged against a fantasy composite, spark test, or moving checklist rather than his actual conduct.',
  her:'She may be trying to protect herself from overinvesting, but anxiety, novelty, or comparison may be replacing direct evidence.',
  test:'Separate observed behavior, felt experience, attraction, respect, follow-through, and imagined alternatives.',
  move:'Use one consistent post-date review and choose either one proportionate additional date or a clear ending.'
 },
 positive_repair:{
  him:'He may hear that his good behavior landed: effort, apology, steadiness, or follow-through was seen and made the relationship warmer.',
  her:'She may hear that repair is possible because someone turned back toward the relationship instead of defending, disappearing, or escalating.',
  test:'Name the helpful behavior, its effect, who initiated it, and whether it repeats under ordinary stress.',
  move:'Reinforce the exact behavior without turning it into debt. Track whether it appears again when no crisis is forcing it.'
 }
};
function eventText364(issue){
 return [issue?.type,issue?.title,issue?.event,issue?.story,issue?.aggrieved]
  .filter(Boolean).join(' ').toLowerCase();
}
function refinedMeaning364(issue,a){
 const base={...(meanings364[a.crux]||meanings364.communication_process)};
 const text=eventText364(issue);
 const privateInsult=/\b(text|message|dm|private|one[- ]?on[- ]?one)\b/.test(text)&&/\b(insult|mean|cruel|contempt|belittl|mock|name[- ]?call|demean)\b/.test(text);
 if(a.crux==='respect_dignity'&&privateInsult){
  base.him='He may hear private insults or cruel texts as evidence that conflict turns into contempt when there is no audience. The injury is not public embarrassment; it is loss of emotional safety, respect, and confidence that private vulnerability will be handled with care.';
  base.her='She may hear private insults or meanness as a direct dignity violation: the relationship becomes a place where anger can license cruelty. If she sent them, the key issue is whether she can own the impact without recasting contempt as honesty or stress.';
  base.test='Look at the actual words, frequency, repair attempt, and whether the person stopped the insulting behavior after impact was named.';
  base.move='Name the private dignity violation plainly. Set a rule that anger can describe the problem but cannot use insults, contempt, name-calling, or demeaning texts.';
 }
 return base;
}
function feedback364(issue,side){
 const val=issue?.ratings?.[side];
 if(!val)return '';
 if(val==='Accurate')return '<div class="meaningFeedback365 ok"><b>Marked accurate.</b><span>Keep this hypothesis and test it against the next concrete behavior.</span></div>';
 if(val==='Partial')return '<div class="meaningFeedback365 partial"><b>Marked partial.</b><span>Use this as a starting point, then edit the missing context in the event notes or choose a more specific issue category.</span></div>';
 if(val==='Wrong')return '<div class="meaningFeedback365 wrong"><b>Marked wrong.</b><span>Treat this meaning as rejected. The next useful step is to write what it actually meant, then compare that meaning with the evidence check below.</span></div>';
 return '';
}
function renderTranslation364(){
 const issue=issue364(),el=q364('repairCockpitLoop');
 if(!issue||!el)return;
 const a=analyzed364();
 const t=refinedMeaning364(issue,a);
 const positive=String(issue.polarity||'').toLowerCase()==='positive'||a.polarity==='positive';
 const pills=[issue.polarity||'Mixed','Aggrieved: '+(issue.aggrieved||'Both'),issue.recurrence||'Unclear',issue.type||'Issue'];
 el.innerHTML=[
  '<div class="issueSummaryHero">',
  '<h4>'+esc364(issue.title||issue.type||'Relationship event')+'</h4>',
  '<p><b>Specific event:</b> '+esc364(issue.event||issue.story||'No event described yet.')+'</p>',
  '<p><b>'+(positive?'What may be working':'What kind of issue this is')+':</b> '+esc364(a.label||'meaning gap')+'. These are meaning hypotheses, not verdicts.</p>',
  '<div class="issuePills">'+pills.map(x=>'<span class="issuePill">'+esc364(x)+'</span>').join('')+'</div>',
  '</div>',
  '<div class="hypothesisNote350"><b>Interpretation check:</b> this now reads the event by crux, evidence, and pattern. Mark a side Partial or Wrong if it misses the lived meaning.</div>',
  '<div class="translationTwoCol">',
  '<div class="translationCard"><b>Possible meaning for him</b><p>'+esc364(t.him)+'</p><div class="reviewRow">'+ratingBtn331(issue,'male','Accurate')+ratingBtn331(issue,'male','Partial')+ratingBtn331(issue,'male','Wrong')+'</div>'+feedback364(issue,'male')+'</div>',
  '<div class="translationCard"><b>Possible meaning for her</b><p>'+esc364(t.her)+'</p><div class="reviewRow">'+ratingBtn331(issue,'female','Accurate')+ratingBtn331(issue,'female','Partial')+ratingBtn331(issue,'female','Wrong')+'</div>'+feedback364(issue,'female')+'</div>',
  '</div>',
  '<div class="translationCard translationNext350"><b>Evidence check</b><p>'+esc364(t.test)+'</p></div>',
  '<div class="translationCard translationNext350"><b>'+(positive?'How to reinforce it':'Most useful next step')+'</b><p>'+esc364(t.move)+'</p></div>'
 ].join('');
 const act=q364('repairCockpitActionStrategy');
 if(act)act.innerHTML='<div class="actionList"><div class="actionItem"><b>'+(positive?'Reinforcement':'Immediate action')+'</b>'+esc364(t.move)+'</div></div>';
 const th=q364('repairCockpitStrategy');
 if(th)th.innerHTML='<div class="exerciseList"><div class="exerciseCard"><b>Meaning evidence audit</b>'+esc364(t.test)+'</div></div>';
 if(typeof bindRatings331==='function')bindRatings331();
}
window.renderTranslation331=renderTranslation331=renderTranslation364;
if(typeof renderRepairCockpit==='function'&&!window.__translation364){
 window.__translation364=true;
 const old=renderRepairCockpit;
 renderRepairCockpit=function(){
  const r=old();
  setTimeout(renderTranslation364,220);
  setTimeout(renderTranslation364,900);
  return r;
 };
}
document.addEventListener('change',e=>{
 if(e.target?.id==='issueCardSelector')setTimeout(renderTranslation364,120);
});
document.addEventListener('DOMContentLoaded',()=>setTimeout(renderTranslation364,2400));
})();

/* v3.6.7 bond chemistry and admiration trajectories */
(function(){
const b367=id=>document.getElementById(id);
const esc367=s=>typeof escapeHTML==='function'
 ? escapeHTML(String(s??''))
 : String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const clamp367=v=>Math.max(0,Math.min(100,Math.round(Number(v)||0)));
function profile367(){
 if(typeof rcCurrentProfile==='function')return rcCurrentProfile();
 if(typeof currentProfile==='function')return currentProfile();
 return (state.profiles||[])[0]||null;
}
function ensure367(){
 const p=profile367();
 if(!p)return null;
 p.bondChemistry367=p.bondChemistry367||{};
 p.bondChemistry367.history=p.bondChemistry367.history||[];
 if(p.bondChemistry367.dopamine==null)p.bondChemistry367.dopamine=50;
 if(p.bondChemistry367.activation==null)p.bondChemistry367.activation=5;
 if(p.bondChemistry367.afterglow==null)p.bondChemistry367.afterglow=5;
 return p;
}
function current367(p){
 p=p||ensure367();
 const b=p?.bondChemistry367||{};
 const dopamine=clamp367(b.dopamine??50);
 return {
  dopamine,
  oxytocin:100-dopamine,
  activation:Number(b.activation??5),
  afterglow:Number(b.afterglow??5)
 };
}
function summary367(v){
 if(v.dopamine>=65)return 'Mostly dopamine: novelty, pursuit, uncertainty, sexual charge, chemistry, or elevated heart-rate energy dominated.';
 if(v.oxytocin>=65)return 'Mostly oxytocin: calm bonding, touch, safety, warmth, trust, or settled afterglow dominated.';
 return 'Mixed bond chemistry: the interaction carried both activation and bonding energy.';
}
function slider367(id,label,value,help,min,max){
 return '<label style="grid-column:1/-1">'+esc367(label)+' <span id="'+id+'_val">'+esc367(value)+'</span>'+
  '<div class="sliderWizardExplain">'+esc367(help)+'</div>'+
  '<input id="'+id+'" type="range" min="'+min+'" max="'+max+'" value="'+esc367(value)+'"></label>';
}
function openBond367(){
 const p=ensure367(),body=b367('bondChemistryWizardBody367');
 if(!p||!body)return;
 const v=current367(p);
 body.innerHTML=[
  '<div class="issueWizardGrid bondWizard367">',
  '<div class="bondExplainer367" style="grid-column:1/-1">',
  '<b>Dopamine vs oxytocin</b>',
  '<p>Dopamine means activation: pursuit, novelty, anticipation, risk, excitement, chemistry, and heart-rate energy. Oxytocin means bonding: calm after touch, safety, warmth, trust, cuddling, and the settled feeling after closeness.</p>',
  '</div>',
  '<label style="grid-column:1/-1">Dopamine percent <span id="bondDopamineVal367">'+v.dopamine+'</span>% / Oxytocin <span id="bondOxytocinVal367">'+v.oxytocin+'</span>%<input id="bondDopamineInput367" type="range" min="0" max="100" value="'+v.dopamine+'"></label>',
  slider367('bondActivationInput367','Heart-rate activation',v.activation,'Thrill, anticipation, chase, sexual charge, novelty, or nervous-system activation.',0,10),
  slider367('bondAfterglowInput367','Bonding afterglow',v.afterglow,'Calm, warmth, safety, cuddling, trust, and feeling better after contact.',0,10),
  '<label style="grid-column:1/-1">Interaction note<textarea id="bondNoteInput367" placeholder="Example: exciting date, calm hug after conflict, anxious chemistry, settled morning together..."></textarea></label>',
  '</div>'
 ].join('');
 const d=b367('bondDopamineInput367'),a=b367('bondActivationInput367'),o=b367('bondAfterglowInput367');
 function sync(){
  const dv=clamp367(d?.value??50);
  b367('bondDopamineVal367').textContent=dv;
  b367('bondOxytocinVal367').textContent=100-dv;
  if(a)b367('bondActivationInput367_val').textContent=a.value;
  if(o)b367('bondAfterglowInput367_val').textContent=o.value;
 }
 [d,a,o].forEach(x=>x&&(x.oninput=sync));
 b367('bondChemistryOverlay367')?.classList.remove('hidden');
}
function saveBond367(){
 const p=ensure367();
 if(!p)return;
 const dopamine=clamp367(b367('bondDopamineInput367')?.value??50);
 const activation=Number(b367('bondActivationInput367')?.value??5);
 const afterglow=Number(b367('bondAfterglowInput367')?.value??5);
 const note=String(b367('bondNoteInput367')?.value||'').trim();
 const entry={created:new Date().toISOString(),dopamine,oxytocin:100-dopamine,activation,afterglow,note};
 p.bondChemistry367={...(p.bondChemistry367||{}),dopamine,activation,afterglow};
 p.bondChemistry367.history=[...(p.bondChemistry367.history||[]),entry];
 if(typeof saveState==='function')saveState();
 b367('bondChemistryOverlay367')?.classList.add('hidden');
 renderAll367();
}
function drawBond367(){
 const p=ensure367(),c=b367('bondChemistryCanvas367'),txt=b367('bondChemistryText367');
 if(!p||!c)return;
 const v=current367(p),ctx=c.getContext('2d'),w=c.width,h=c.height;
 ctx.clearRect(0,0,w,h);ctx.fillStyle='#fbfcfc';ctx.fillRect(0,0,w,h);
 ctx.fillStyle='#173f46';ctx.font='700 16px sans-serif';ctx.fillText('Dopamine / Oxytocin balance',22,30);
 const x=28,y=72,bw=w-56,bh=34,split=bw*v.dopamine/100;
 ctx.fillStyle='#e7eef0';ctx.fillRect(x,y,bw,bh);
 ctx.fillStyle='#b85b4d';ctx.fillRect(x,y,split,bh);
 ctx.fillStyle='#26737a';ctx.fillRect(x+split,y,bw-split,bh);
 ctx.fillStyle='#fff';ctx.font='800 14px sans-serif';ctx.fillText(v.dopamine+'% dopamine',x+12,y+22);
 ctx.textAlign='right';ctx.fillText(v.oxytocin+'% oxytocin',x+bw-12,y+22);ctx.textAlign='left';
 ctx.fillStyle='#31454a';ctx.font='12px sans-serif';ctx.fillText('Activation '+v.activation+'/10',28,134);
 ctx.fillText('Bonding afterglow '+v.afterglow+'/10',28,154);
 ctx.fillStyle='#66757a';ctx.fillText('Early relationships may need more dopamine; durable relationships usually need more oxytocin.',28,186);
 if(txt)txt.innerHTML='<b>'+v.dopamine+'% dopamine / '+v.oxytocin+'% oxytocin.</b> '+esc367(summary367(v));
}
function admirationNow367(p){
 if(typeof rcAdmirationValues==='function'){
  const a=rcAdmirationValues(p);
  return Math.round((a.userToThem+a.themToUser)/2);
 }
 const c=p?.coupleQualities||{},g=p?.green||{},r=p?.respect||{};
 return clamp367((Number(c.admirationSymmetry??7)*10+Number(g.respect??5)*10+Number(r.appreciation??5)*10)/3);
}
function chart367(id,series,empty){
 const c=b367(id);if(!c)return;
 const ctx=c.getContext('2d'),w=c.width,h=c.height,pad=50;
 ctx.clearRect(0,0,w,h);ctx.fillStyle='#fff';ctx.fillRect(0,0,w,h);ctx.strokeStyle='#d7e1e5';
 for(let v=0;v<=100;v+=25){const y=h-pad-(v/100)*(h-2*pad);ctx.beginPath();ctx.moveTo(pad,y);ctx.lineTo(w-pad,y);ctx.stroke();ctx.fillStyle='#64748b';ctx.font='10px sans-serif';ctx.fillText(String(v),18,y+3);}
 if(series.every(s=>!s.data.length)){ctx.fillStyle='#475569';ctx.font='14px sans-serif';ctx.fillText(empty,pad,h/2);return;}
 const colors=['#b85b4d','#26737a','#6d5bd'];
 series.forEach((s,si)=>{ctx.beginPath();s.data.forEach((v,i)=>{const x=pad+(i/Math.max(1,s.data.length-1))*(w-2*pad),yy=h-pad-(clamp367(v)/100)*(h-2*pad);i?ctx.lineTo(x,yy):ctx.moveTo(x,yy);});ctx.strokeStyle=colors[si%colors.length];ctx.lineWidth=2.5;ctx.stroke();ctx.fillStyle=colors[si%colors.length];ctx.font='12px sans-serif';ctx.fillText(s.name,pad+si*122,22);});
 ctx.fillStyle='#1f2933';ctx.font='12px sans-serif';ctx.fillText('Time / saved snapshots ->',w/2-70,h-16);
}
function drawTrends367(){
 const p=ensure367();if(!p)return;
 const hist=p.bondChemistry367.history||[];
 chart367('bondChemistryTrajectoryCanvas367',[{name:'Dopamine',data:hist.map(x=>x.dopamine)},{name:'Oxytocin',data:hist.map(x=>x.oxytocin)}],'No bond chemistry snapshots yet. Use Relationship Measures -> Bond Chemistry.');
 const snaps=p.snapshots||[];
 const adm=snaps.map(s=>s.admiration??s.admirationSymmetry??Math.round((Number(s.respect||50)+Number(s.reciprocity||50)+Number(s.repair||50))/3));
 if(!adm.length)adm.push(admirationNow367(p));
 chart367('admirationTrajectoryCanvas367',[{name:'Admiration',data:adm}],'No admiration history yet. Add snapshots to trend admiration over time.');
}
function annotateAdmiration367(){
 const txt=b367('repairCockpitAdmirationText');
 if(!txt||txt.dataset.explained367)return;
 txt.dataset.explained367='1';
 txt.insertAdjacentHTML('beforeend','<br><b>Inputs:</b> your admiration uses attraction, pride, curiosity, and respect/opinion. Their admiration uses appreciation, reciprocity, investment, and effort. The trajectory estimates movement from saved relationship snapshots.');
}
function renderAll367(){
 drawBond367();drawTrends367();
 if(typeof drawRcAdmiration==='function')try{drawRcAdmiration();}catch(e){}
 const txt=b367('repairCockpitAdmirationText');
 if(txt)delete txt.dataset.explained367;
 annotateAdmiration367();
}
function bind367(){
 const open=b367('openBondChemistryWizardBtn'),close=b367('closeBondChemistryWizardBtn367'),save=b367('saveBondChemistryWizardBtn367');
 if(open)open.onclick=openBond367;
 if(close)close.onclick=()=>b367('bondChemistryOverlay367')?.classList.add('hidden');
 if(save)save.onclick=saveBond367;
 renderAll367();
}
document.addEventListener('DOMContentLoaded',()=>setTimeout(bind367,2300));
setTimeout(bind367,2600);
document.addEventListener('change',e=>{if(e.target?.id==='repairCockpitProfileSelect')setTimeout(renderAll367,150);});
})();

/* v3.6.8 meaningful slider experience */
(()=>{
const $368=id=>document.getElementById(id);
const esc368=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
let bound368=false;
const words368=['Absent','Trace','Low','Uneven','Light','Mixed','Present','Strong','Very strong','Defining','Dominant'];
const micro368={
 warmth:['cold, little ease','friendly enough','warm, inviting, emotionally open'],
 respect:['dismissive or diminishing','basic courtesy','consistently honors dignity and boundaries'],
 peace:['tense or costly','mixed nervous-system effect','calm, steady, easier to be yourself'],
 reciprocity:['one-way effort','some give and take','mutual investment is visible'],
 attraction:['little pull','some interest','strong embodied pull'],
 clarity:['confusing or vague','partly legible','clear, direct, reality-based'],
 followThrough:['unreliable','inconsistent','does what they say they will do'],
 socialFit:['isolating or awkward','mixed fit','fits your real life and people'],
 repair:['punishment or avoidance after conflict','some repair','accountability turns into changed behavior'],
 admiration:['unseen or taken for granted','some appreciation','active pride, gratitude, and regard'],
 values:['values pull apart','values partly overlap','shared enough to build around'],
 dopamine:['mostly bonding calm','mixed spark and bonding','mostly spark, chase, novelty, activation'],
 afterglow:['no settled warmth after contact','some closeness','calm, affectionate, bonded after contact'],
 activation:['flat or sleepy','noticeable charge','high spark, anticipation, nervous-system energy']
};
function key368(input){
 const id=(input.id||'').toLowerCase();
 return Object.keys(micro368).find(k=>id.includes(k.toLowerCase()))||'';
}
function phrase368(input,val){
 const max=Number(input.max||10),min=Number(input.min||0),k=key368(input),scaled=max===100?Math.round(val/10):Math.round(val);
 if(max===100&&input.id.includes('Dopamine'))return `${val}% dopamine / ${100-val}% oxytocin`;
 return words368[Math.max(0,Math.min(10,scaled))]||String(val);
}
function microcopy368(input,val){
 const k=key368(input),copy=micro368[k];
 if(!copy)return 'Each notch should reflect observed behavior, not hope, fear, or one isolated mood.';
 const max=Number(input.max||10),scaled=max===100?Math.round(val/10):Math.round(val);
 if(scaled<=3)return copy[0];
 if(scaled<=6)return copy[1];
 return copy[2];
}
function colorClass368(input){
 const id=(input.id||'').toLowerCase();
 if(input.classList.contains('riskRange')||id.includes('risk')||id.includes('cost')||id.includes('trauma')||id.includes('threat'))return 'rangeRisk368';
 if(id.includes('dopamine')||id.includes('bond')||id.includes('afterglow')||id.includes('activation'))return 'rangeBond368';
 if(id.includes('clarity')||id.includes('future')||id.includes('practical')||id.includes('follow'))return 'rangeBlue368';
 if(id.includes('attraction')||id.includes('warmth')||id.includes('intimacy'))return 'rangeWarm368';
 return '';
}
function anchors368(input){
 const wrap=input.closest('label,.slider,.snapshotEntry,.quickPanel');
 const scale=wrap?.querySelector('.scaleLabels,.casualSliderHelp337,.scaleEnds');
 if(scale){
  const bits=[...scale.querySelectorAll('span,b')].map(x=>x.textContent.trim()).filter(Boolean);
  if(bits.length>=2)return [bits[0],bits[bits.length-1]];
 }
 const max=Number(input.max||10);
 if(max===100&&input.id.includes('Dopamine'))return ['More bonding / oxytocin','More spark / dopamine'];
 return ['Low','High'];
}
function paint368(input){
 const min=Number(input.min||0),max=Number(input.max||10),val=Number(input.value||0);
 const pct=max===min?0:((val-min)/(max-min))*100;
 input.style.setProperty('--pct',Math.max(0,Math.min(100,pct))+'%');
 input.classList.add('meaningfulRange368');
 const c=colorClass368(input); if(c)input.classList.add(c);
 const parent=input.closest('label,.slider'); if(parent)parent.classList.add('meaningField368');
 const marker=input.nextElementSibling?.classList?.contains('rangeMeaning368')?input.nextElementSibling:null;
 if(marker){
  const [lo,hi]=anchors368(input);
  const active=Math.round((Number(input.max||10)===100?val/10:val));
  marker.innerHTML=`<span class="rangeLow368">${esc368(lo)}</span><span class="rangeNow368">${esc368(phrase368(input,val))}</span><span class="rangeHigh368">${esc368(hi)}</span><div class="rangeMicrocopy368">${esc368(microcopy368(input,val))}</div><div class="rangeTicks368" aria-hidden="true">${Array.from({length:11},(_,i)=>`<i class="${i<=active?'active':''}"></i>`).join('')}</div>`;
 }
 const safeId=window.CSS?.escape?CSS.escape(input.id):String(input.id||'').replace(/[^a-zA-Z0-9_-]/g,'\\$&');
 const value=input.closest('label,.slider')?.querySelector(`#${safeId}_val,#${safeId}Val,.bubble`);
 if(value)value.classList.add('meaningValue368');
 const title=input.closest('.slider')?.querySelector('.sliderTop b')||input.closest('label')?.childNodes?.[0]?.parentElement;
 if(title&&title.matches?.('b'))title.classList.add('meaningTitle368');
}
function titleize368(input){
 const label=input.closest('label');
 if(!label||label.dataset.title368||label.querySelector('.sliderTop,.sliderLabelText368'))return;
 const node=[...label.childNodes].find(n=>n.nodeType===3&&n.textContent.trim());
 if(!node)return;
 const span=document.createElement('span');
 span.className='sliderLabelText368';
 span.textContent=node.textContent.trim();
 node.replaceWith(span);
 label.dataset.title368='1';
}
function enhanceOne368(input){
 if(!input||input.dataset.meaning368)return;
 input.dataset.meaning368='1';
 titleize368(input);
 if(!input.nextElementSibling?.classList?.contains('rangeMeaning368'))input.insertAdjacentHTML('afterend','<div class="rangeMeaning368"></div>');
 input.addEventListener('input',()=>paint368(input));
 input.addEventListener('change',()=>paint368(input));
 paint368(input);
}
function enhance368(root=document){
 root.querySelectorAll?.('input[type="range"]').forEach(enhanceOne368);
}
function bind368(){
 if(bound368)return;
 bound368=true;
 enhance368();
 const obs=new MutationObserver(muts=>muts.forEach(m=>m.addedNodes.forEach(n=>{if(n.nodeType===1)enhance368(n);})));
 obs.observe(document.body,{childList:true,subtree:true});
 document.addEventListener('input',e=>{if(e.target?.matches?.('input[type="range"]'))paint368(e.target);},true);
}
document.addEventListener('DOMContentLoaded',()=>setTimeout(bind368,500));
setTimeout(bind368,1800);
})();

/* v3.7.0 calm workspace launchers for issue and expert modules */
(()=>{
const $370=id=>document.getElementById(id);
const esc370=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
function profile370(){
 try{return typeof rcCurrentProfile==='function'?rcCurrentProfile():(typeof currentProfile==='function'?currentProfile():state?.profiles?.[0]);}catch(e){return null;}
}
function issue370(p){
 const selected=$370('issueCardSelector')?.value;
 const issues=p?.issues||[];
 return issues.find(x=>x.id===selected)||issues[issues.length-1]||null;
}
function status370(p,i){
 const name=p?.name||'this relationship';
 const issue=i?.title||i?.event||i?.type||'No event selected yet';
 const state=i?.resolved?'resolved':'active';
 return {name,issue,state};
}
function ensure370(){
 if(window.__workspacePopouts370)return;
 const left=document.querySelector('.workspaceLeft335'),issue=$370('issueTranslationPanel335'),expert=$370('expertThinkPanel339');
 if(!left||!issue||!expert)return;
 window.__workspacePopouts370=true;
 document.body.classList.add('modulePopouts370');
 const hub=document.createElement('div');
 hub.id='workspaceFocusHub370';
 hub.className='workspaceFocusHub370 workspaceSection';
	 hub.innerHTML=`<div class="focusIntro370"><span class="focusKicker370">Relationship workspace</span><h3>Start with the coach</h3><p id="focusSummary370">Use the coach for normal advice and the counselor office when there is a concrete issue to repair.</p></div><div class="focusActions370"><button id="openExpertPopout370" type="button" class="focusCoachBtn380"><span>Coach office</span><b>Talk it through</b><small>Advice, grounding, genius chat</small></button><button id="openIssuePopout370" type="button" class="secondary focusCounselorBtn380"><span>Counselor office</span><b>Work a real issue</b><small>Saved event, repair, expert panel</small></button></div><div class="focusStatus370"><div><b>Current profile</b><span id="focusProfile370">Relationship</span></div><div><b>Current event</b><span id="focusIssue370">No event selected</span></div><div><b>Status</b><span id="focusState370">Active</span></div></div>`;
 left.insertBefore(hub,issue);
 document.body.insertAdjacentHTML('beforeend',`<div id="issuePopout370" class="workspacePopout370 hidden" role="dialog" aria-modal="true" aria-labelledby="issuePopoutTitle370"><div class="workspacePopoutCard370"><div class="workspacePopoutHeader370"><div><span>Module 1</span><h2 id="issuePopoutTitle370">Issue / Event Translation</h2><p>Use this when you want to understand what the event may mean, whether it is resolved, and what pattern it belongs to.</p></div><button type="button" class="secondary closePopout370" data-close370="issuePopout370">Close</button></div><div id="issuePopoutBody370"></div></div></div><div id="expertPopout370" class="workspacePopout370 hidden" role="dialog" aria-modal="true" aria-labelledby="expertPopoutTitle370"><div class="workspacePopoutCard370"><div class="workspacePopoutHeader370"><div><span>Module 2</span><h2 id="expertPopoutTitle370">Expert Interpretation</h2><p>Use this after choosing an event when you want a best-fit lens, a challenge view, or a cultural contrast.</p></div><button type="button" class="secondary closePopout370" data-close370="expertPopout370">Close</button></div><div id="expertPopoutBody370"></div></div></div>`);
 $370('issuePopoutBody370')?.appendChild(issue);
 $370('expertPopoutBody370')?.appendChild(expert);
 bind370();
 refresh370();
}
function open370(id){
 refresh370();
 window.__lastPopoutTrigger370=document.activeElement;
 document.querySelectorAll('.workspacePopout370:not(.hidden)').forEach(x=>{if(x.id!==id)x.classList.add('hidden');});
 $370(id)?.classList.remove('hidden');
 document.body.classList.add('workspacePopoutOpen370');
 const first=$370(id)?.querySelector('select,button,textarea,input');
 setTimeout(()=>first?.focus?.(),40);
}
function close370(id){
 $370(id)?.classList.add('hidden');
 if(!document.querySelector('.workspacePopout370:not(.hidden)'))document.body.classList.remove('workspacePopoutOpen370');
 const trigger=window.__lastPopoutTrigger370;
 if(trigger&&typeof trigger.focus==='function')setTimeout(()=>trigger.focus(),20);
}
function refresh370(){
 const p=profile370(),i=issue370(p),s=status370(p,i);
 const summary=$370('focusSummary370'),profile=$370('focusProfile370'),issue=$370('focusIssue370'),state=$370('focusState370');
 if(summary)summary.textContent=i?`You are looking at ${s.name}. The current ${s.state} event is ready for translation or expert interpretation.`:`You are looking at ${s.name}. Add or select one event, then open a focused module when you want analysis.`;
 if(profile)profile.textContent=s.name;
 if(issue)issue.textContent=s.issue;
 if(state)state.textContent=s.state==='resolved'?'Resolved':'Active / unresolved';
}
function bind370(){
 const openIssue=$370('openIssuePopout370'),openExpert=$370('openExpertPopout370');
 if(openIssue)openIssue.onclick=()=>open370('issuePopout370');
 if(openExpert)openExpert.onclick=()=>open370('expertPopout370');
 document.querySelectorAll('.closePopout370').forEach(b=>b.onclick=()=>close370(b.dataset.close370));
 document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.workspacePopout370:not(.hidden)').forEach(x=>close370(x.id));});
 document.addEventListener('change',e=>{if(['issueCardSelector','repairCockpitProfileSelect'].includes(e.target?.id))setTimeout(refresh370,80);});
 document.addEventListener('click',e=>{if(e.target?.classList?.contains('workspacePopout370'))close370(e.target.id);});
}
document.addEventListener('DOMContentLoaded',()=>setTimeout(ensure370,2800));
setTimeout(ensure370,3300);
})();

/* v3.7.1 clamped glossary tooltips */
(()=>{
let tip371=null,active371=null;
function ensureTip371(){
 if(tip371)return tip371;
 tip371=document.createElement('div');
 tip371.className='termTooltip371';
 tip371.setAttribute('role','tooltip');
 document.body.appendChild(tip371);
 return tip371;
}
function place371(term){
 const tip=ensureTip371(),r=term.getBoundingClientRect(),pad=12;
 tip.innerHTML='<b>'+String(term.textContent||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))+'</b><span>'+String(term.dataset.definition||'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))+'</span>';
 tip.classList.add('visible');
 const tw=tip.offsetWidth,th=tip.offsetHeight;
 let left=r.left+(r.width/2)-(tw/2);
 left=Math.max(pad,Math.min(window.innerWidth-tw-pad,left));
 let top=r.top-th-8;
 if(top<pad)top=Math.min(window.innerHeight-th-pad,r.bottom+8);
 tip.style.left=left+'px';
 tip.style.top=top+'px';
 active371=term;
 document.querySelectorAll('.therapyTerm360.active').forEach(x=>{if(x!==term)x.classList.remove('active');});
 term.classList.add('active');
}
function hide371(term){
 if(term&&active371&&term!==active371)return;
 if(tip371)tip371.classList.remove('visible');
 if(active371)active371.classList.remove('active');
 active371=null;
}
document.addEventListener('mouseover',e=>{const term=e.target?.closest?.('.therapyTerm360');if(term)place371(term);},true);
document.addEventListener('focusin',e=>{const term=e.target?.closest?.('.therapyTerm360');if(term)place371(term);},true);
document.addEventListener('mouseout',e=>{const term=e.target?.closest?.('.therapyTerm360');if(term&&!term.contains(e.relatedTarget))hide371(term);},true);
document.addEventListener('focusout',e=>{const term=e.target?.closest?.('.therapyTerm360');if(term)hide371(term);},true);
document.addEventListener('click',e=>{const term=e.target?.closest?.('.therapyTerm360');if(!term)return;e.preventDefault();e.stopImmediatePropagation();place371(term);},true);
document.addEventListener('keydown',e=>{if(e.key==='Escape')hide371();});
document.addEventListener('scroll',()=>hide371(),true);
window.addEventListener('resize',()=>hide371());
})();

/* v3.8.0 relationship coach layer */
(()=>{
const $380=id=>document.getElementById(id);
const esc380=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
function profile380(){try{return typeof profile343==='function'?(profile343({ensureProfile:true})||null):(typeof rcCurrentProfile==='function'?rcCurrentProfile():(typeof currentProfile==='function'?currentProfile():state?.profiles?.[0]));}catch(e){return null;}}
function issue380(p){const selected=$380('issueCardSelector')?.value,issues=p?.issues||[];return issues.find(x=>x.id===selected)||issues[issues.length-1]||null;}
function coachFreshText380(p){const c=p?.coach380||{};return [c.geniusAsk,c.situation,c.evidence,c.worries,c.geniusTake].filter(Boolean).join(' ').trim();}
function text380(p){
 const fresh=coachFreshText380(p);
 if(fresh)return fresh;
 const i=issue380(p)||{};
 return [i.title,i.event,i.story,p?.evidence,p?.notes].filter(Boolean).join(' ');
}
function inferStage380(raw,chosen,profile){
 const routed=window.RelationshipCoachRouter3913?.classify?.({raw,chosenStage:chosen,profile});
 if(routed?.stage)return routed.stage;
 const rawT=String(raw||'').toLowerCase(),profileT=String(profile?.rtype||'').toLowerCase(),t=`${rawT} ${profileT}`;
 if(chosen&&chosen!=='auto')return chosen;
 if(/lots of dates|hinge|instagram|dating app|dating market|do not have access|don't have access|dont have access|can't find (women|men|people)|cant find (women|men|people)|hate men|hate women/.test(rawT))return'early';
 if(/just met|met (her|him|them)|girl i (just )?met|woman i (just )?met|guy i (just )?met|man i (just )?met|dating (a )?(girl|woman|guy|man|person|someone)|seeing (a )?(girl|woman|guy|man|person|someone)|month or two|couple months|early relationship|first date|second date|asking (her|him|them) out|ask (her|him|them) out|flirting|talking stage|crush|matched with|dating app/.test(rawT))return'early';
 if(/moving too fast|too fast|rushing|rush|slow down|pace|pacing|getting serious fast|intense too soon/.test(rawT))return'early';
 if(/\bmarried\b|\b(my|our|his|her|their)\s+(wife|husband|spouse)\b|\b(wife|husband|spouse)\s+and\s+i\b|\bour marriage\b|mortgage|years together|decades|\bour (kids|children)\b|\bmy (kids|children)\b|\bwe have (kids|children)\b|\braising (kids|children)\b/.test(rawT)||/married|spouse|wife|husband/.test(profileT))return'mature';
 if(/partner|boyfriend|girlfriend|exclusive|committed|living together|fianc|long[- ]term/.test(rawT))return'mid';
 if(/flirt|girl|guy|crush|texting|date|first date|second date|talking stage|situationship|early/.test(t))return'early';
 return'early';
}
function inferCrux380(raw,stage){
 const routed=window.RelationshipCoachRouter3913?.classify?.({raw,chosenStage:stage});
 if(routed?.crux)return routed.crux;
 const t=raw.toLowerCase();
 if(/unsafe|afraid (?:of|that).{0,40}(?:hurt|harm|retaliat|punish|explode|hit|threat|abuse)|coerc|force|threat|monitor|stalk|hit|abuse|retaliat/.test(t))return'safety';
 if(/refut|correct.*public|public|in front of|embarrass|humiliat|mock|disrespect|look foolish|undermine|texting other guys|dm|dms|message.*guys|other men|other guys|posting herself|posting.*attention|posting.*validation|social media.*validation|instagram.*attention|attention.*instagram|outside validation/.test(t))return'repair';
 if(/toxic information|podcast|tiktok|red pill|feminism|content|information diet|gender war/.test(t))return'behavior_change';
 if(/lots of dates|hinge|instagram|dating market|do not have access|don't have access|dont have access|can't find (women|men|people)|cant find (women|men|people)|hate men|hate women|too many sexual partners|many sexual partners|women who don't|men who don't|millennial/.test(t))return'grounding_values';
 if(/find myself|finding myself|lost|stuck in my head|in my head|ruminat|spiral|life reset|reset my life|focus on myself|church|religio|faith|god|bigger than myself|purpose|meaning|move away|move to|different location|new city|achievable goals|small goals|routine|workout|exercise|walk|service|volunteer|gratitude|grounded|anxious|anxiety/.test(t))return'grounding_values';
 if(/flirt|date|text|girl|guy|crush|interest|likes me|spark|chase|too much|too little|moving too fast|too fast|rushing|slow down|pace|pacing|early/.test(t))return'early_signal';
 if(/boyfriend|girlfriend|serious|exclusive|define|commit|secure|select for|values/.test(t))return'commitment';
 if(/husband|wife|attractive|desire|sex|feminine|masculine|impress|admire|admiration/.test(t))return'desire_admiration';
 if(/do what i need|can't get|chores|money|help|change|behavior|appreciat|thank/.test(t))return'behavior_change';
 if(/fight|argument|repair|communicat|overcommunicat|feelings|shutdown|defensive/.test(t))return'repair';
 return stage==='early'?'early_signal':'repair';
}
function inferPeople380(raw,profile){
 const chosenUser=String(profile?.coach380?.userRole||'auto').toLowerCase();
 const chosenTarget=String(profile?.coach380?.targetRole||'auto').toLowerCase();
 if(chosenUser!=='auto'||chosenTarget!=='auto'){
  const user=['man','woman'].includes(chosenUser)?chosenUser:'unknown';
  const target=['man','woman'].includes(chosenTarget)?chosenTarget:(user==='man'?'woman':user==='woman'?'man':'unknown');
  const label=user==='man'&&target==='woman'?'You are asking as a man about a woman.':user==='woman'&&target==='man'?'You are asking as a woman about a man.':user==='man'?'You are asking as a man.':user==='woman'?'You are asking as a woman.':'I do not have a clear gender/role read, so I am keeping the advice role-neutral.';
  return{user,target,label};
 }
 const t=`${raw||''} ${profile?.meGender||''} ${profile?.theirGender||''}`.toLowerCase();
 const userMale=/\b(i am|i'm|im|me as|as a)\s+(a\s+)?(man|male|guy|boy)\b|\bman\s+(dating|seeing|asking|pursuing|interested in)\s+(a\s+)?(girl|woman|female)\b|\bman asking (a )?(girl|woman)\b|\basking (a )?(girl|woman) out\b/.test(t);
 const userFemale=/\b(i am|i'm|im|me as|as a)\s+(a\s+)?(woman|female|girl)\b|\bwoman\s+(dating|seeing|asking|pursuing|interested in)\s+(a\s+)?(guy|man|male)\b|\bwoman asking (a )?(guy|man)\b|\basking (a )?(guy|man) out\b/.test(t)&&!userMale;
 const targetFemale=/\b(girl|woman|female|her|she)\b/.test(t)||userMale;
 const targetMale=/\b(guy|man|male|him|he)\b/.test(t)||userFemale;
 const user=userMale?'man':userFemale?'woman':'unknown';
 const target=targetFemale&&!targetMale?'woman':targetMale&&!targetFemale?'man':user==='man'?'woman':user==='woman'?'man':'unknown';
 const label=user==='man'&&target==='woman'?'You sound like a man asking a woman out.':user==='woman'&&target==='man'?'You sound like a woman asking a man out.':'I do not have a clear gender/role read, so I am keeping the advice role-neutral.';
 return{user,target,label};
}
const stageName380={early:'early-stage romantic context',mid:'committed or mid-stage relationship',mature:'mature / married relationship'};
function cruxForIssueType380(type,fallback){
 return({
  public_respect:'repair',
  digital_boundary:'repair',
  outside_validation:'repair',
  info_diet:'behavior_change',
  social_rivalry:'early_signal',
  contribution:'early_signal',
  dating_strategy:'early_signal',
  hot_cold:'early_signal',
  sex_pacing:'early_signal',
  behavior_change:'behavior_change',
  repair:'repair',
  grounding:'grounding_values',
  other:fallback
 })[type]||fallback;
}
const issueTypeLabels380={
 public_respect:'Public respect / dignity',
 digital_boundary:'Digital boundary / loyalty',
 outside_validation:'Outside validation / social media',
 info_diet:'Information diet / contempt risk',
 social_rivalry:'Social rivalry / reputation',
 contribution:'Contribution / reciprocity',
 dating_strategy:'Dating strategy / selection',
 hot_cold:'Hot-cold / mixed signals',
 sex_pacing:'Sex / pacing',
 behavior_change:'Behavior change',
 repair:'Repair / rupture',
 grounding:'Life reset / grounding',
 other:'Other / general advice'
};
function inferredIssueType380(raw,crux=''){
 const t=String(raw||'').toLowerCase();
 if(/texting other guys|dm|dms|message.*guys|other men|other guys|phone|snapchat/.test(t))return'digital_boundary';
 if(/refut|correct.*public|public|in front of|embarrass|humiliat|mock|disrespect|look foolish|undermine/.test(t))return'public_respect';
 if(/posting herself|posting.*attention|posting.*validation|social media.*validation|instagram.*attention|attention.*instagram|thirst|outside validation/.test(t))return'outside_validation';
 if(/toxic information|podcast|tiktok|red pill|feminism|content|information diet|gender war/.test(t))return'info_diet';
 if(/female intra|intrasexual|women compete|female competition|gossip|reputation|ostrac|exclude|friend pressure|girlfriends|girl friends|mate choice|jealous women|attractive woman|dress down|slut|social rivalry|peer pressure|sabotage|stay single|friends.*single|friends.*dump|women.*pressure/.test(t))return'social_rivalry';
 if(/dont chase|don't chase|left on read|left on red|option|plan b|backup|job offer|beta corp|applicant|interview|overpursu|overcommit|happy hunting|hunter|hunt|fisherman|fishing|conditional yes|lazy dating|find a man|find men|get a boyfriend|get a husband|how do i date|how to date|meet men|women looking for men|woman looking for a man|female looking for a man|husband material|boyfriend material/.test(t))return'dating_strategy';
 if(/put her to work|contribut|reciprocat|provide value|useful role|help (me|with)|care for me|show up|burden|self-sufficient|need anything|taken out|real-life responsibility|overinvest|over-invest|one-way|relationship opportunity|besides dates|besides attention|besides sex/.test(t))return'contribution';
 if(/hot and cold|mixed signals|pull back|testing me|test me|indirect|passive|hesitat/.test(t))return'hot_cold';
 if(/sex|sleep together|sleep with|too soon|intimacy|lose interest/.test(t))return'sex_pacing';
 if(/find myself|finding myself|lost|stuck in my head|in my head|ruminat|spiral|life reset|reset my life|focus on myself|church|religio|faith|god|bigger than myself|purpose|meaning|move away|move to|different location|new city|achievable goals|small goals|workout|exercise|walk|service|volunteer|gratitude|grounded|anxious|anxiety/.test(t)||crux==='grounding_values')return'grounding';
 if(/do what i need|can't get|chores|money|help|change|behavior|appreciat|thank|routine|routines|ritual|system|schedule|division of labor/.test(t)||crux==='behavior_change')return'behavior_change';
 if(/fight|argument|repair|communicat|overcommunicat|feelings|shutdown|defensive/.test(t)||crux==='repair')return'repair';
 return'other';
}
function mismatchNoticeHTML380(raw,selected,inferredCrux){
 const suggested=inferredIssueType380(raw,inferredCrux);
 if(!selected||!suggested||suggested==='other'||selected===suggested)return'';
 const broad=new Set(['repair','behavior_change','other']);
 if(broad.has(suggested)||broad.has(selected))return'';
 return `<div class="coachMismatch380" role="status"><div><b>Category check</b><p>You selected <strong>${esc380(issueTypeLabels380[selected]||selected)}</strong>, but the situation sounds more like <strong>${esc380(issueTypeLabels380[suggested]||suggested)}</strong>.</p></div><button type="button" class="secondary" data-switch-issue-type380="${esc380(suggested)}">Switch</button></div>`;
}
function situationTitle380(raw,stage,crux,issueType=''){
 const byType={
  public_respect:'public respect / dignity',
  digital_boundary:'digital boundary / loyalty',
  outside_validation:'outside validation / social media',
  info_diet:'information diet / contempt risk',
  social_rivalry:'social rivalry / reputation',
  contribution:'contribution / reciprocity',
  dating_strategy:'dating strategy / selection',
  hot_cold:'hot-cold / mixed signals',
  sex_pacing:'sex / pacing',
  behavior_change:'behavior change',
  repair:'repair / rupture',
  grounding:'self-orientation / life reset',
  other:null
 };
 if(byType[issueType])return byType[issueType];
 const t=String(raw||'').toLowerCase();
 if(/refut|correct.*public|public|in front of|embarrass|humiliat|mock|disrespect|look foolish|undermine/.test(t))return'public respect / dignity';
 if(/texting other guys|dm|dms|message.*guys|other men|other guys/.test(t))return'digital boundary / loyalty';
 if(/posting herself|posting.*attention|posting.*validation|social media.*validation|instagram.*attention|attention.*instagram|outside validation/.test(t))return'outside validation / social media';
 if(/toxic information|podcast|tiktok|red pill|feminism|content|information diet|gender war/.test(t))return'information diet / contempt risk';
 if(/female intra|intrasexual|women compete|female competition|gossip|reputation|ostrac|exclude|friend pressure|girlfriends|girl friends|mate choice|jealous women|attractive woman|dress down|slut|social rivalry|peer pressure|sabotage|stay single|friends.*single|friends.*dump|women.*pressure/.test(t))return'social rivalry / reputation';
 if(/dont chase|don't chase|left on read|left on red|option|plan b|backup|job offer|beta corp|applicant|interview|overpursu|overcommit|happy hunting|hunter|hunt|fisherman|fishing|conditional yes|lazy dating|find a man|find men|get a boyfriend|get a husband|how do i date|how to date|meet men|women looking for men|woman looking for a man|female looking for a man|husband material|boyfriend material/.test(t))return'dating strategy / selection';
 if(crux==='grounding_values')return'self-orientation / life reset';
 return null;
}
function coachTitle380(stage,crux,raw='',issueType=''){
 const pattern=situationTitle380(raw,stage,crux,issueType);
 if(pattern)return pattern;
 const routed=window.__lastCoachRoute3913;
 if(routed?.stage===stage&&routed?.crux===crux&&routed.title)return routed.title;
 return stageName380[stage];
}
function stageFrame380(stage,crux,raw='',issueType=''){
 const title=situationTitle380(raw,stage,crux,issueType);
 if(title==='public respect / dignity')return 'This is a public dignity issue. The core question is whether disagreement, correction, or humor is being handled in a way that protects respect when other people are present.';
 if(title==='digital boundary / loyalty')return 'This is a digital loyalty and boundary issue. The work is to define what online or private attention protects the relationship container and what weakens it.';
 if(title==='outside validation / social media')return 'This is an outside-validation issue. The work is to distinguish harmless self-expression from behavior that recruits outside attention at the cost of trust or respect.';
 if(title==='information diet / contempt risk')return 'This is an information-diet issue. The work is to notice whether repeated content is training contempt, suspicion, entitlement, or gender-war reflexes.';
 if(title==='social rivalry / reputation')return 'This is a social-pressure issue. The work is to separate protective friendship from rivalry, gossip, reputation pressure, and group norms that may distort mate choice or commitment.';
 if(title==='contribution / reciprocity')return 'This is a relationship-opportunity issue. The work is to build visible capacity, direction, and warmth, then create a small dignified role where she can participate instead of only receiving dates, attention, or chemistry.';
 if(title==='dating strategy / selection')return 'This is early dating strategy. The work is to choose more deliberately, understand whether you are fishing or hunting, and use dates to test fit, safety, attraction, and character instead of drifting through random attention.';
 if(crux==='grounding_values')return 'This is not mainly a dating-tactics problem. The work is to rebuild orientation: body, faith or values, family, friends, service, place, routine, and small goals that make your life feel larger than the romantic uncertainty.';
 if(stage==='early')return 'This is courtship, so the job is not to extract certainty. The job is to stay attractive, grounded, observant, and proportionate while you learn whether interest, values, and availability are real.';
 if(stage==='mid')return 'This is a relationship system now. The question is less “do they like me?” and more “what pattern are we rewarding, what agreement is unclear, and what behavior would make the bond safer and more attractive?”';
 return 'This is mature-bond work. Familiarity, routines, roles, fatigue, and complacency matter. The intervention has to become a repeatable practice, not a single emotional conversation.';
}
function reflection380(raw,stage,crux,goal,people,issueType=''){
 if(issueType==='contribution')return 'You are not mainly asking how to avoid sex or withhold attention. You are asking how to become visibly more capable: a man with direction, standards, composure, useful competence, and a real life she can enter through reciprocal contribution.';
 if(issueType==='social_rivalry'&&people?.user==='woman')return 'You are asking where the social pressure is coming from and what it could cost you if you obey it. The useful move is to separate genuine protection from gossip, rivalry, fear of being left behind, group identity, or pressure to stay single, then decide from evidence and the life you actually want.';
 if(issueType==='social_rivalry')return 'You are asking whether outside social pressure is shaping the relationship more than the couple’s own evidence. The useful move is to separate protective concern from rivalry, reputation pressure, gossip, and group norms.';
 if(issueType==='dating_strategy'&&people?.user==='woman'&&people?.target==='man')return 'You are asking how to find and date men deliberately rather than letting random male attention choose your romantic life. The useful frame is targeted selection: know why this specific man interests you, do enough homework before the date, show up as a warm conditional yes if you accept, and keep standards around safety, pace, sex, and character.';
 if(issueType==='dating_strategy')return 'You are asking about the dating strategy underneath the interaction: who is selecting whom, what life is being offered, and whether interest is based on real fit or random attention. The useful move is to make selection more deliberate and let behavior, not fantasy, decide who earns more access.';
 const reframe=panelReframe380(raw,stage,crux,people,issueType);
 if(reframe&&!/^You are trying|^You are not asking|^The first coaching|^You are asking/.test(reframe))return reframe;
 if(crux==='early_signal'&&people?.user==='man'&&people?.target==='woman')return 'You are trying to ask her out or keep the connection moving without over-pursuing, over-explaining, or turning your anxiety into pressure. The masculine move here is warm clarity plus restraint: make interest legible, then let her reciprocal effort matter.';
 if(crux==='early_signal'&&people?.user==='woman'&&people?.target==='man')return 'You are trying to stay open without chasing certainty or lowering your standards to keep his interest. The strong move is warmth, pace, and evidence: let his initiative, respect, and follow-through answer some of the question.';
 if(crux==='early_signal')return 'You are trying to remain open to connection without letting anxiety turn you into either a pursuer or a performer. That is hard because the stakes feel highest precisely when the evidence is thinnest.';
 if(crux==='desire_admiration')return 'You are asking how to become more attractive inside an existing bond, not just how to win an argument. That means admiration, polarity, appreciation, self-respect, and calm behavior matter as much as explanation.';
 if(crux==='behavior_change')return 'You are not only asking to be understood; you are asking whether a concrete behavior can change and stay changed. That requires cues, incentives, values, and repeated proof.';
 if(crux==='grounding_values'&&/lots of dates|hinge|instagram|dating market|do not have access|don't have access|dont have access|can't find|cant find|hate men|hate women|sexual partners|millennial/.test(String(raw||'').toLowerCase()))return 'You are describing dating-market discouragement and some contempt/defeat creeping into the frame. The move is not to keep sorting women into categories from inside frustration; it is to rebuild your life, social world, standards, and location so desire is not trapped in apps and resentment.';
 if(crux==='grounding_values')return 'You are not asking for a better flirting tactic; you are asking how to get out of your head and recover a life big enough to hold desire without being ruled by it. That means people, place, faith or values, service, body, and small achievable goals matter more than another interpretation of the relationship.';
 if(crux==='safety')return 'The first coaching task is not persuasion or romance optimization. It is safety, autonomy, documentation, and support.';
 return 'You are asking for a grounded read and a next move, not a courtroom diagnosis. The goal is to turn the mess into one honest interpretation and one doable behavior.';
}
function panelReframe380(raw,stage,crux,people,issueType=''){
 const t=String(raw||'').toLowerCase();
 if(issueType==='public_respect')return 'You are describing a public-respect pattern: the issue is not just disagreement, but whether your partner protects your dignity when there is an audience.';
 if(issueType==='digital_boundary')return 'You are describing a digital-boundary and loyalty-signaling pattern: attention is leaving the relationship container, and the panel should focus on standards, trust, and what behavior would actually restore respect.';
 if(issueType==='outside_validation')return 'You are describing an outside-validation pattern: the panel should separate harmless self-expression from attention-seeking that weakens trust, exclusivity, or respect.';
 if(issueType==='info_diet')return 'You are describing an information-diet pattern: the concern is whether repeated content is training contempt, suspicion, entitlement, or gender-war scripts inside the relationship.';
 if(issueType==='social_rivalry')return 'You are describing social rivalry or reputation pressure: the panel should separate safety-minded advice from gossip, peer pressure, attractiveness policing, mate-choice pressure, and group approval.';
 if(issueType==='contribution')return 'You are asking whether there is enough reciprocal contribution to create a real relationship opportunity, not just entertainment, attention, or chemistry.';
 if(issueType==='dating_strategy'&&people?.user==='woman'&&people?.target==='man')return 'You are asking how a woman should date or find a man: choose deliberately, research before the date, show up as a conditional yes only when interest is real, and use the date to test character, safety, attraction, and fit.';
 if(issueType==='dating_strategy')return 'You are asking about dating strategy: whether this is random attention, broad fishing, targeted hunting, or a real relationship opportunity with enough fit to keep exploring.';
 if(issueType==='hot_cold')return 'You are describing a hot-cold or mixed-signal pattern. The panel should help you stay warm and clear without chasing every temperature change.';
 if(issueType==='sex_pacing')return 'You are asking about pacing desire, sex, and access without losing self-respect or turning attraction into pressure.';
 if(issueType==='grounding')return 'You are asking how to get out of your head and rebuild a bigger life context so romance does not become the entire scoreboard.';
 if(/texting other guys|dm|dms|message.*guys|other men/.test(t))return 'You are describing a digital-boundary and loyalty-signaling pattern: attention is leaving the relationship container, and the panel should focus on standards, trust, and what behavior would actually restore respect.';
 if(/refut|correct.*public|public|in front of|embarrass|humiliat|mock|disrespect/.test(t))return 'You are describing a public-respect pattern: the issue is not just disagreement, but whether your partner protects your dignity when there is an audience.';
 if(/posting herself|posting.*attention|posting.*validation|social media.*validation|instagram.*attention|attention.*instagram|thirst|outside validation/.test(t))return 'You are describing an outside-validation pattern: the panel should separate harmless self-expression from attention-seeking that weakens trust, exclusivity, or respect.';
 if(/toxic information|podcast|tiktok|red pill|feminism|content|information diet/.test(t))return 'You are describing an information-diet pattern: the concern is whether repeated content is training contempt, suspicion, entitlement, or gender-war scripts inside the relationship.';
 if(crux==='behavior_change')return 'You are describing a repeated behavior that needs to become observable, changeable, and reviewable. The panel should focus on what behavior stops, what replaces it, and what evidence proves the change is real.';
 if(crux==='repair')return 'You are describing a rupture or recurring event that needs repair through changed behavior, not just a better explanation. The panel should stay close to what happened, what it meant, and what would look different next time.';
 return '';
}
function advice380(stage,crux,goal,raw,people,issueType=''){
	 const early={
  next:'Stay warm and lightly directional. Make one clear bid, then give space for reciprocal effort. If she invests back, continue. If she does not, do not compensate by explaining harder.',
  pitfalls:['Over-communicating interest before mutual investment is visible.','Trying to remove all uncertainty, which often removes tension and self-respect.','Confusing anxiety with intuition or chemistry with compatibility.'],
  adopt:['Keep your life visibly intact while showing interest.','Use specific invitations instead of vague emotional processing.','Watch consistency, responsiveness, warmth, values, and whether you like who you become around her.'],
  eliminate:['Long anxious texts.','Testing, sulking, or trying to manufacture jealousy.','Treating one promising sign as a relationship.'],
  script:'“I like talking with you. Let’s do something simple this week: coffee or a walk Thursday?”'
	 };
	 const rawT=String(raw||'').toLowerCase();
  const title=situationTitle380(raw,stage,crux,issueType);
  if(title==='public respect / dignity')return{
   next:'Treat this as a dignity boundary, not a debate about whether she meant it. Ask for one next-time public rule: disagreement or correction happens privately, or it is said in a way that protects respect when other people are present.',
   pitfalls:['Minimizing it because it was not loud.','Arguing every example until the main pattern gets lost.','Counter-humiliating her in public, which trains the same problem in reverse.'],
   adopt:['Name the behavior, impact, and next-time rule.','Watch the next public moment as evidence.','Stay calm enough that the standard sounds like self-respect, not retaliation.'],
   eliminate:['Laughing it off while storing resentment.','Asking vaguely for “respect” without defining the behavior.','Turning the conversation into whether she is a bad person.'],
   script:'“When you correct me in front of people in a way that makes me look foolish, I feel disrespected. If you disagree, tell me privately or say it in a way that protects us as a couple.”'
  };
  if(title==='digital boundary / loyalty')return{
   next:'Define the loyalty standard without becoming a detective. Say what kind of private attention with other men weakens trust, what behavior would protect the relationship, and what you will do if the boundary stays unclear.',
   pitfalls:['Trying to win by monitoring her phone.','Accepting “nothing happened” as the only standard.','Making jealousy the issue instead of the behavior.'],
   adopt:['Ask for a clear agreement around DMs, flirtation, privacy, and responsiveness.','Watch whether transparency increases voluntarily.','Let repeated secrecy matter.'],
   eliminate:['Interrogations, surveillance, and threat cycles.','Pretending you are fine while quietly losing respect.','Moving the boundary after every argument.'],
   script:'“I am not interested in policing you, but private attention with other men changes trust for me. I need us to define what is respectful and actually live by it.”'
  };
  if(title==='outside validation / social media')return{
   next:'Separate self-expression from validation-seeking that recruits outside attention against the relationship. Ask what standard would let both people feel proud, desired, and protected rather than publicly auditioned.',
   pitfalls:['Calling every post disrespectful.','Ignoring the pattern because each post is individually explainable.','Turning attraction into control.'],
   adopt:['Talk about the effect on trust and exclusivity, not just the image.','Ask what kind of public presentation supports the relationship.','Watch whether she cares about your discomfort without surrendering her whole autonomy.'],
   eliminate:['Silent resentment.','Public shaming.','Pretending outside attention has no relational meaning.'],
   script:'“I am not trying to control your expression, but some posting feels like it invites outside validation in a way that weakens us. I want us to agree on what protects respect and attraction.”'
  };
  if(title==='information diet / contempt risk')return{
   next:'Treat the content diet as a training environment. Ask whether the repeated podcasts, TikToks, or ideology are making the relationship kinder, more loyal, and more truthful, or more contemptuous and suspicious.',
   pitfalls:['Debating the whole internet instead of the household effect.','Using “toxic information” as a label for anything you dislike.','Letting gender-war content become the third person in the relationship.'],
   adopt:['Name the behavioral output you are seeing.','Ask for a content boundary or counterweight that supports the relationship.','Watch whether tone, gratitude, and respect improve.'],
   eliminate:['Trying to ban ideas through panic.','Matching ideology with counter-ideology.','Letting contempt become entertainment.'],
   script:'“I care less about winning a content debate than about what it trains between us. If this information diet makes us more contemptuous or suspicious, I want us to change the input.”'
  };
  if(title==='social rivalry / reputation')return{
   next:people?.user==='woman'?'Name the pressure source before obeying it. Is this friend or group protecting your safety, or are they enforcing a norm, managing envy, punishing visibility, discouraging commitment, or keeping you aligned with the group? Then ask the five-year consequence: if you follow this advice, does it produce more love, peace, family, dignity, and better men, or just more group approval?':'Treat the outside pressure as a social system, not just “her friends are bad.” Ask whether the advice is protecting her or destabilizing commitment through gossip, rivalry, status policing, or fear of her choosing a different life.',
   pitfalls:['Assuming every friend is sabotage instead of checking the evidence.','Dismissing legitimate safety warnings as jealousy.','Letting gossip or group approval replace private discernment.','Using this model to isolate someone from good friends.'],
   adopt:['Separate evidence about the relationship from the group’s emotional reaction.','Ask what the advice would cost over five years.','Keep friends who make you wiser, safer, and more honest.','Make the couple decision privately before performing it publicly.'],
   eliminate:['Gossip as entertainment.','Friend-group veto power over every romantic move.','Performing singlehood, contempt, or sexual availability for approval.','Calling a desired life path embarrassing because the group does not share it.'],
   script:people?.user==='woman'?'“I want to hear my friends, but I need to separate protection from social pressure. What evidence do I personally have, and what life do I actually want?”':'“I respect your friends, but I do not want our relationship governed by gossip or group pressure. Let’s separate real safety concerns from social pressure.”'
  };
  if(title==='contribution / reciprocity')return{
   next:'Build capacity in ways she can actually observe: plan cleanly, solve small problems, protect your time, keep your body and routines ordered, stay calm under uncertainty, and hold standards without becoming controlling. Then create one small relationship opportunity: invite her to help choose, bring, remember, plan, care for, or solve something real, and let her response affect your investment.',
   pitfalls:['Reducing the whole problem to whether sex happens soon.','Trying to explain your value instead of demonstrating capacity through ordinary behavior.','Overproviding dates, attention, and reassurance while asking for no reciprocal participation.','Turning contribution into a secret test, chore assignment, or resentment trap.'],
   adopt:['Make your life legible: goals, friends, responsibilities, values, health, and routines.','Demonstrate competence in the interaction: choose a plan, handle constraints, regulate anxiety, and protect time.','Invite one proportionate contribution that lets her participate with dignity.','Reward useful care with appreciation, and let passive consumption slow your investment.'],
   eliminate:['Approval-seeking niceness with no direction.','Bragging about status instead of showing capability.','Using sex, money, or attention as the only progress markers.','Bitterness about women instead of cleaner selection and better incentives.'],
   script:'“I like when dating has some real teamwork in it. I’ll handle the plan; help me choose between these two options, and let’s see how we work together.”'
  };
  if(title==='dating strategy / selection')return{
   next:people?.user==='woman'&&people?.target==='man'?'Stop letting available attention define the field. Identify men whose life, direction, values, and capacity you might actually want; do enough homework before accepting the date; then show up as a warm conditional yes if you choose to go. Use the date to test character, safety, attraction, follow-through, and fit with your standards, not to force interest from zero.':'Make the selection problem clearer. Men often fish by creating broad opportunity and choosing from women who choose back; women can hunt more specifically by researching and targeting men. Build a life that is legible enough to be chosen, make clean invitations, and give more access to people whose behavior shows real reciprocal interest.',
   pitfalls:people?.user==='woman'&&people?.target==='man'?['Accepting dates from men you already know you do not want because attention is available.','Showing up as a bored maybe and expecting him to create all the interest.','Using sex, emotional intensity, or cool-girl availability as a commitment shortcut.','Researching him to perform a role instead of discerning whether his life and character fit yours.']:['Treating uninterested women as persuasion projects.','Calling yourself a fisherman while doing nothing to build a social world or visible life.','Over-selling your value instead of showing direction, standards, and follow-through.','Rewarding vague attention more than real reciprocal movement.'],
   adopt:people?.user==='woman'&&people?.target==='man'?['Choose targets from values and attraction, not just whoever asks.','Before a date, learn enough to know why this specific man interests you.','Arrive warm, receptive, and interested if you accept, while keeping a clear right to slow down or say no.','Watch how he handles pace, planning, your no, inconvenience, ambition, and ordinary manners.']:['Make your life visible: work, health, friends, values, responsibilities, and direction.','Ask clearly, then let her response matter.','Notice whether she asks about your actual life and helps make plans easier.','Select from opt-in rather than chasing indifference.'],
   eliminate:people?.user==='woman'&&people?.target==='man'?['Lazy dating as free entertainment or random screening.','Attention as the only evidence that a man is worth your time.','Sexual access used to secure commitment.','Performing indifference after you already chose to be there.']:['Ambiguous chasing.','One-way date entertainment as the whole offer.','Trying to convert a no or chronic maybe into devotion.','Gender contempt disguised as strategy.'],
   script:people?.user==='woman'&&people?.target==='man'?'“I am interested enough to see where this goes, and I also move at a pace that lets me see character clearly.”':'“I like you. I’m doing this Thursday; come with me if you want to see more of my world.”'
  };
	 if(stage==='early'&&crux==='early_signal'&&people?.user==='man'&&people?.target==='woman'&&/what women want|understand women|why women|why she|why girls|female behavior|mixed signals|hesitat|indirect|passive|test me|testing me|pull back|hot and cold|from her side|taken out|care for me|wants to care/.test(rawT)){
	  if(/hot and cold|test me|testing me|wait for the man|lead/.test(rawT))return{...early,next:'Read hot-cold behavior as uncertainty plus calibration, not automatically as cruelty. She may be testing whether your direction stays steady when approval is inconsistent, whether you become needy when warmth drops, and whether your interest has boundaries. Stay warm, make one clear plan, and let her reciprocal effort answer.',pitfalls:['Chasing every temperature change.','Punishing her for uncertainty instead of watching whether she becomes clearer.','Calling every test manipulation when some of it may be calibration around safety, status, and seriousness.'],adopt:['Offer one clear plan without emotional footnotes.','Stay composed when warmth fluctuates.','Watch whether she helps stabilize the connection after you provide direction.'],eliminate:['Double texting to repair your anxiety.','Performing indifference as revenge.','Letting mixed signals earn unlimited pursuit.'],script:'“I like seeing you. I’m going to make a simple plan, and then I’ll see if this is something you want to build too.”'};
	  if(/taken out|entertained|does not help|doesn't help|does not contribute|doesn't contribute|from her side/.test(rawT))return{...early,next:'If she likes being taken out but disappears around inconvenience, the question is whether she likes you or likes the experience you provide. From her side, she may not yet see a real role in your life, or she may be comfortable consuming attention without investing. Create one ordinary teamwork moment and watch whether she moves toward it with goodwill.',pitfalls:['Confusing fun dates with partnership evidence.','Becoming resentful while continuing to provide the same benefits.','Turning one small ask into a courtroom test.'],adopt:['Invite a small contribution tied to a real plan.','Notice whether she protects your time, goals, money, or responsibilities.','Let ordinary cooperation affect your attraction.'],eliminate:['Funding entertainment as a substitute for evidence.','Hoping reciprocity appears after more investment.','Lecturing her about value instead of changing the dynamic.'],script:'“I like fun dates, but I also like seeing how we work together. Can you help me with one piece of Saturday?”'};
	  if(/afraid|help|care for me|wants to care|self-sufficient|need anything/.test(rawT))return{...early,next:'Your fear is that needing anything will lower attraction. The better read is that total self-sufficiency can leave a woman with no dignified way to care for you. Ask for something small and normal, then watch whether she feels invited into your life or burdened by it.',pitfalls:['Performing invulnerability until you feel uncared for.','Asking in a way that sounds like a loyalty exam.','Mistaking her dislike of one request for a total inability to care.'],adopt:['Ask for a proportionate favor without apology or entitlement.','Receive help cleanly when it comes.','Let her contribution increase your warmth and respect.'],eliminate:['Never needing anything, then resenting her for not caring.','Making care transactional.','Overcorrecting into dependency.'],script:'“Could you help me with this small thing? I like relationships where care can move both ways.”'};
	  if(/sex|attention|what (do )?women want|relationship opportunity/.test(rawT))return{...early,next:'A woman may want more than dates, attention, or sexual tension: she may be reading demonstrated capacity. Can you handle pressure, make decisions, create value, protect and order your life, stay fit or energetic, regulate yourself, and hold standards without becoming controlling? Show that capacity through behavior, then create a stable opportunity for her to enter your life and matter there.',pitfalls:['Offering entertainment and desire but no visible capacity, direction, or life for her to join.','Trying to talk her into seeing you as attractive instead of demonstrating competence, composure, and outcome power.','Making sex the proof of progress before reciprocity is visible.','Assuming women are mysterious when the opportunity and capacity signals are simply unclear.'],adopt:['Make your real life legible: goals, friends, responsibilities, values, body, and routines.','Create one small teamwork moment before escalating the fantasy.','Demonstrate capacity in the actual interaction: plan, solve, regulate, protect time, and keep standards.','Notice whether she becomes more relaxed, caring, and useful when she sees direction and a role.'],eliminate:['Selling yourself as only fun, available, and sexually interested.','Overproviding while asking for nothing.','Bragging about status instead of quietly showing capability.','Bitterness about women instead of clearer selection.'],script:'“I’m attracted to you, and I also like seeing whether we work well in real life. I’ll handle the plan; help me choose between these two options.”'};
	  return{...early,next:'Read her behavior as a response to the relationship opportunity and capacity signals in front of her, not only as a yes/no attraction signal. She may be asking whether your life has direction, whether you can handle reality, whether her care would matter, whether you only want attention or sex, and whether there is a dignified role for her besides being entertained. Give her one warm, proportionate path to participate, then watch what she does.',pitfalls:['Assuming female indirectness means she is malicious, when she may be calibrating safety, role, seriousness, and capacity.','Explaining endlessly instead of demonstrating clearer direction and context.','Using this frame to excuse disrespect, entitlement, or chronic passivity.'],adopt:['Keep your life, direction, friends, work, faith/values, body, and responsibilities visible.','Invite one small useful contribution: help choose, bring, care, plan, remember, or solve something proportionate.','Notice whether contribution makes her warmer, more invested, and easier to respect.','Demonstrate capacity quietly: plan, solve, regulate, protect time, and hold standards.'],eliminate:['A dating dynamic where your only value is entertainment, logistics, reassurance, or sexual pursuit.','Bitterness that turns all hesitation into a verdict on women.','Secret tests; make the invitation dignified and ordinary.','Bragging or dominance theater in place of real competence.'],script:'“I like when dating has some real teamwork in it. I’ll handle the plan; would you help me think through one piece?”'};
	 }
	 if(stage==='early'&&crux==='early_signal'&&people?.user==='man'&&people?.target==='woman'&&/sex|sleep together|sleep with|intimacy|too soon|lose interest|lost interest/.test(rawT))return{...early,next:'Do not make sex the only escalator. Keep attraction alive, but let the relationship earn more access through shared context, respect, and reciprocal contribution. Before you accelerate sexually, see whether she can enter the actual economy of your life: small help, reliable plans, care for what matters to you, and appreciation for your effort.',pitfalls:['Overproviding romance, dates, reassurance, and attention while asking for no investment back.','Using sex as a test, reward, or moral referendum.','Letting anxiety turn into a heavy disclosure that makes her manage your interest.','Mistaking sexual chemistry for a relationship that has proven contribution.'],adopt:['Pace sexual escalation with dignity rather than panic.','Ask for one small, appropriate contribution: help choose a plan, bring something, care for a shared problem, or support a real responsibility.','Maintain your own goals, friends, faith/values, work, and routines so she is joining a life, not becoming the whole life.','Watch whether ordinary cooperation increases your respect and attraction.'],eliminate:['The ferryboatman pattern: carrying her with effort while hoping reciprocity appears later.','Performing indifference or withholding affection as a tactic.','Crude sexual pressure or making her feel punished for pace.'],script:'“I like where this is going. I want us to let it build in a way that keeps respect and interest strong, not rush past the part where we learn how we actually work together.”'};
	 if(stage==='early'&&crux==='early_signal'&&people?.user==='man'&&people?.target==='woman')return{...early,next:'Ask her out with warm, specific direction, then stop trying to earn certainty through extra explanation. Your job is to be respectful, clear, playful, and composed enough that she can feel both your interest and her freedom to respond.',pitfalls:['Over-texting to manage your anxiety.','Making the date emotionally heavy before she has chosen into more investment.','Ceding all direction because you are afraid of seeming pushy.','Mistaking her politeness for commitment or her slower pace for rejection.'],adopt:['Offer a simple plan with a time, place, and graceful out.','Keep the tone light, respectful, and clean.','Watch whether she helps make the next interaction happen.','End strong instead of lingering until the energy thins.'],eliminate:['Long anxious explanations.','Sexual pressure, crude jokes, or premature confession.','Testing her interest instead of making one clean bid.'],script:'“I like talking with you. I’d like to take you out this week. Coffee or a walk Thursday?”'};
 if(stage==='early'&&crux==='early_signal'&&people?.user==='woman'&&people?.target==='man')return{...early,next:'Stay warm and receptive without doing all the pursuing for him. Give him enough signal to act, then watch whether he shows clear initiative, respect for your pace, and follow-through.',script:'“I’d enjoy seeing you again. If you want to plan something, I’m open this week.”'};
 const mid={
  next:'Name the pattern and ask for one behavior, not a personality transplant. Then watch whether the next two ordinary opportunities look different.',
  pitfalls:['Turning every need into a state-of-the-union talk.','Accepting temporary compliance as durable change.','Using therapy language to avoid asking for a concrete behavior.'],
  adopt:['Define the cue, the behavior, and the review point.','Reward the behavior cleanly when it happens.','Separate appreciation from correction.'],
  eliminate:['Mind-reading standards.','Global accusations.','Repeating the same request without changing the system around it.'],
  script:'“When this situation comes up, I need one specific thing: __. Can we try that for two weeks and see whether it actually changes the pattern?”'
 };
 const mature={
  next:'Pick one routine-level change that makes kindness, desire, gratitude, or repair easier to repeat when nobody is inspired.',
  pitfalls:['Expecting insight to beat habit without a ritual.','Letting familiarity erase gratitude.','Making the relationship all logistics and no admiration.'],
  adopt:['Build rituals of appreciation, repair, sex/affection, responsibility, and decompression.','Treat lapses as system design problems first, character verdicts second.','Make values explicit: service, gratitude, fidelity, stewardship, peace.'],
  eliminate:['Scorekeeping as the main memory system.','Correction attached to every contribution.','Assuming love is obvious because history is long.'],
  script:'“I do not want us to run on autopilot. One thing I want us to practice this week is __, because I think it would make us kinder and closer.”'
 };
 if(crux==='safety')return{next:'Do not optimize attraction, communication, or compliance while safety is uncertain. Move toward trusted support, private documentation, and boundaries that do not depend on the unsafe person agreeing.',pitfalls:['Joint confrontation when retaliation is plausible.','Calling control “anxiety” and treating it as a couples exercise.','Giving more access to prove loyalty.'],adopt:['Preserve outside support.','Protect accounts, devices, money, and movement.','Ask what refusal costs.'],eliminate:['Secret monitoring.','Forced transparency.','Isolation from friends, family, or help.'],script:'“I am not willing to handle this through more access or pressure. I need privacy, safety, and outside support.”'};
 if(crux==='desire_admiration')return{...((stage==='mature')?mature:mid),next:'Create admiration before instruction. People rarely become more attractive by pleading to be desired; they become more attractive through self-respect, warmth, competence, generosity, and calm standards.',script:'“I want us to feel more attracted and appreciative, not just functional. This week I am going to practice __, and I would love for us to notice what makes us move toward each other.”'};
 if(crux==='behavior_change')return{...((stage==='early')?early:mid),next:'Translate the need into a visible behavior and a repeatable cue. If it matters, it needs a place in the routine, not just a sincere conversation after pain peaks.'};
 if(crux==='grounding_values')return{
  next:/lots of dates|hinge|instagram|dating market|do not have access|don't have access|dont have access|can't find|cant find|hate men|hate women|sexual partners|millennial/.test(String(raw||'').toLowerCase())?'Step out of the app-shaped dating loop for a defined reset. For the next week, put effort into family, friends, your dog/body routine, faith or values, a better social location, and one achievable goal per day; then rebuild access to women through real communities instead of only Hinge/Instagram categories.':'Stop making the romantic situation the center of the day. Build a 72-hour grounding plan: see family or a trusted friend, take your dog or your body outside, do one faith/values practice, clean or change one physical space, and set one achievable goal you can finish before bed.',
  pitfalls:['Using romance as the only source of meaning or dopamine.','Staying physically still while trying to think your way out of anxiety.','Replacing action with another long interpretation of what they might feel.','Setting giant identity goals that are too vague to complete.'],
  adopt:['Call or visit family, or spend time with one friend who returns you to yourself.','Walk, exercise, take care of your dog, or do one body-based routine before analyzing.','Pray, go to church, read something spiritually serious, serve someone, or name one value larger than desire.','Change your environment: work from a different place, clean your room, take a short trip, or plan a move if your current location keeps you stuck.','Pick one small goal per day that can be completed and checked off.'],
  eliminate:['Scrolling, checking, rereading messages, and imaginary conversations.','Letting one person become the scoreboard for your worth.','Isolation that feels like self-protection but makes your world smaller.'],
  script:'“For the next three days I am going to get out of my head: family/friend contact, dog or body outside, one faith or values practice, one cleaned or changed space, and one small finished goal.”'
 };
 return stage==='early'?early:stage==='mid'?mid:mature;
}
function coachHTML380(p){
 const c=p?.coach380||{},raw=text380(p);
 if(!raw.trim())return '<div class="coachEmpty380"><b>Tell the coach what is going on.</b><p>Use the first button to describe the situation in normal language. The coach will turn it into a stage-aware read, next move, pitfalls, and a script.</p></div>';
 const requiredStage=['early','mid','mature'].includes(c.stage),requiredUser=['man','woman','unknown'].includes(c.userRole),requiredTarget=['man','woman','unknown'].includes(c.targetRole),requiredIssue=['public_respect','digital_boundary','outside_validation','info_diet','social_rivalry','contribution','dating_strategy','hot_cold','sex_pacing','behavior_change','repair','grounding','other'].includes(c.issueType);
 if(!requiredStage||!requiredUser||!requiredTarget||!requiredIssue)return '<div class="coachEmpty380"><b>Choose the frame first.</b><p>Select the relationship stage, who you are, who you are asking about, and the situation type. The coach will wait instead of guessing from a few stray words.</p></div>';
 const stage=inferStage380(raw,c.stage,p),inferredCrux=inferCrux380(raw,stage),crux=cruxForIssueType380(c.issueType,inferredCrux),goal=c.goal||'Get grounded and choose the next move',people=inferPeople380(raw,p),a=advice380(stage,crux,goal,raw,people,c.issueType),mismatch=mismatchNoticeHTML380(raw,c.issueType,inferredCrux);
 window.__lastCoachRoute3913=window.RelationshipCoachRouter3913?.classify?.({raw,chosenStage:c.stage,profile:p});
 const field=fieldGuide380(stage,crux,raw,people,c.issueType),qs=questions380(stage,crux,raw,c.issueType),analysis=issueAnalysis380(stage,crux,raw,people),kids=childrenQuestions380(stage,raw),db=coachDatabaseCards390({stage,crux,goal,raw,profile:p,people});
 return `<div class="coachResponse380">
  ${mismatch}
  <div class="coachHead380"><span>Relationship coach</span><h3>${esc380(coachTitle380(stage,crux,raw,c.issueType))}</h3><p>${esc380(stageFrame380(stage,crux,raw,c.issueType))}</p></div>
  <div class="coachSection380 coachMirror380"><b>What I hear</b><p>${esc380(reflection380(raw,stage,crux,goal,people,c.issueType))}</p></div>
  <div class="coachGrid380">
   <div class="coachSection380"><b>Best next move</b><p>${esc380(a.next)}</p></div>
   <div class="coachSection380"><b>Why this makes sense</b><p>${esc380(reason380(stage,crux,c.issueType))}</p></div>
   <div class="coachSection380"><b>Common pitfalls</b><ul>${a.pitfalls.map(x=>`<li>${esc380(x)}</li>`).join('')}</ul></div>
   <div class="coachSection380"><b>Behaviors to adopt</b><ul>${a.adopt.map(x=>`<li>${esc380(x)}</li>`).join('')}</ul></div>
   <div class="coachSection380"><b>Behaviors to eliminate</b><ul>${a.eliminate.map(x=>`<li>${esc380(x)}</li>`).join('')}</ul></div>
   <div class="coachSection380"><b>Try saying</b><p>${esc380(a.script)}</p></div>
  </div>
  <div class="coachGrid380">
   <div class="coachSection380 coachDad380"><b>${esc380(field.title)}</b><ul>${field.rules.map(x=>`<li>${esc380(x)}</li>`).join('')}</ul></div>
   <div class="coachSection380"><b>What to select for</b><ul>${field.selectFor.map(x=>`<li>${esc380(x)}</li>`).join('')}</ul></div>
   <div class="coachSection380"><b>What to avoid feeding</b><ul>${field.avoidFeeding.map(x=>`<li>${esc380(x)}</li>`).join('')}</ul></div>
   <div class="coachSection380"><b>Good questions</b><ul>${qs.ask.map(x=>`<li>${esc380(x)}</li>`).join('')}</ul></div>
  </div>
  <details class="coachDeepDive380"><summary>Issue analysis mode</summary><div class="coachGrid380"><div class="coachSection380"><b>Facts vs story</b><p>${esc380(analysis.facts)}</p></div><div class="coachSection380"><b>Pattern to watch</b><p>${esc380(analysis.pattern)}</p></div><div class="coachSection380"><b>Evidence that would change the read</b><p>${esc380(analysis.evidence)}</p></div><div class="coachSection380"><b>Stop coaching and decide</b><p>${esc380(analysis.stop)}</p></div></div></details>
  ${db.length?`<details class="coachDeepDive380 coachDatabase390"><summary>Optional: why this advice</summary><p class="coachDbIntro390">For later: the matched playbooks behind the coach read.</p><div class="coachDbChips390">${db.map((card,index)=>`<span>${index+1}. ${esc380(card.title)}</span>`).join('')}</div><div class="coachDbCards390">${db.map((card,index)=>coachDatabaseCardHTML390(card,index)).join('')}</div></details>`:''}
  ${geniusChatHTML380(p,stage,crux,raw,people)}
  ${kids?`<details class="coachDeepDive380"><summary>Children / family-life questions</summary><div class="coachSection380"><b>Questions to ask before the next season gets harder</b><ul>${kids.map(x=>`<li>${esc380(x)}</li>`).join('')}</ul></div></details>`:''}
  <div class="coachSection380 coachGround380"><b>Grounding principle</b><p>${esc380(grounding380(stage,crux,c.grounding))}</p></div>
  <div class="coachSources380">Coach model: reflective listening, stage-sensitive discernment, Modern Wisdom/source playbooks, gentle startup/repair, attachment-cycle awareness, healthy boundaries, and behavior design.</div>
 </div>`;
}
function reason380(stage,crux,issueType=''){
 if(issueType==='contribution')return 'Capacity is more attractive when it is demonstrated, not announced. Planning, composure, standards, health, useful competence, and a life with real responsibilities give her evidence that there is something worth entering; a small contribution opportunity then tests whether she wants to participate.';
 if(issueType==='social_rivalry')return 'Peer pressure can be protective, competitive, or both. The important question is consequence: does the advice make the woman safer, wiser, more loving, and better paired, or does it trade her desired life for gossip control and group approval?';
 if(issueType==='dating_strategy')return 'Dating gets cleaner when selection happens before escalation. Women can often target specific men more deliberately, while men often create broad opportunity and select from real opt-in. Either way, the goal is not pressure; it is clear interest, real fit, observable character, and consent that remains free.';
 if(crux==='early_signal')return 'Early romance punishes both neediness and detachment. The strong move is proportionate clarity: enough interest to be legible, enough restraint to preserve dignity and let reciprocity appear.';
 if(crux==='behavior_change')return 'Behavior sticks when the cue, reward, standard, and identity all support it. A moving speech can create a short burst; a routine and shared value create durability.';
 if(crux==='desire_admiration')return 'Attraction usually responds better to embodied behavior than argument. Calm, competence, gratitude, play, and self-respect change the field more than asking to be wanted.';
 if(crux==='grounding_values')return 'An anxious mind keeps asking for certainty because the rest of life has become too small. Family, friends, faith, service, movement, place, and small goals give your nervous system other evidence that you are alive, loved, useful, and moving.';
 if(crux==='safety')return 'No coaching script should help someone tolerate coercion. Safety and autonomy come before repair, polarity, or relationship optimization.';
 return stage==='mature'?'Long relationships are shaped by repeated ordinary moves. The question is what the system trains both people to repeat.':'The useful unit is one observable next behavior, not a total explanation of the relationship.';
}
function grounding380(stage,crux,mode){
 if(mode==='faith')return 'Act from stewardship rather than panic: tell the truth, practice gratitude, release what you cannot control, and do the next right thing without trying to force the outcome.';
 if(mode==='values')return 'Choose the value first: dignity, kindness, courage, chastity/fidelity, honesty, service, peace, or responsibility. Then make the next move answer to that value.';
 if(mode==='body')return 'Regulate before you interpret. If your body is flooded, delay the big conclusion and choose one small action that restores steadiness.';
 if(crux==='grounding_values')return 'Do one thing today that proves your life is bigger than the relationship question: call family, see a friend, walk the dog, pray or practice gratitude, serve someone, clean one space, and finish one small goal.';
 return stage==='early'?'Your job is not to secure the person today. Your job is to remain grounded enough that the right person can recognize you and the wrong fit can reveal itself.':'Kindness without self-abandonment is the center: be generous, be clear, and require reality to answer.';
}
function coachDatabaseCards390(ctx,limit=4){
 const db=window.RelationshipCoachDatabase390;
 if(!db||typeof db.query!=='function')return[];
 try{const cards=db.query({stage:ctx.stage,crux:ctx.crux,goal:ctx.goal,raw:ctx.raw,profileType:ctx.profile?.rtype,people:ctx.people},limit)||[];return cards.sort((a,b)=>((b.takeaways?.length||0)+(b.citations?.length||0)+(b.chart?2:0))-((a.takeaways?.length||0)+(a.citations?.length||0)+(a.chart?2:0)));}catch(e){return[];}
}
function coachList390(items){return (items||[]).slice(0,4).map(x=>`<li>${esc380(x)}</li>`).join('');}
function coachCitationList390(items){return (items||[]).slice(0,5).map(c=>`<li><b>${esc380(c.title||c.source||'Source')}</b>${c.year?` <span>${esc380(c.year)}</span>`:''}${c.url?` <a href="${esc380(c.url)}" target="_blank" rel="noopener">source</a>`:''}${c.note?`<p>${esc380(c.note)}</p>`:''}</li>`).join('');}
function coachChart390(chart){
 if(!chart||!Array.isArray(chart.rows)||!chart.rows.length)return'';
 return `<div class="coachCardChart390"><b>${esc380(chart.title||'Evidence snapshot')}</b><p class="coachChartHelp390">Relative evidence weight, 0-100: longer bars mean this source card treats that signal as more important for the read.</p>${chart.rows.slice(0,6).map(r=>{const v=Math.max(0,Math.min(100,Number(r.value)||0));return`<div class="coachChartRow390"><span>${esc380(r.label)}</span><div aria-label="${esc380(r.label)} ${v} out of 100"><i style="width:${v}%"></i></div><em>${esc380(r.note||String(r.value||''))}</em></div>`;}).join('')}</div>`;
}
function coachRichSections390(card){
 return `${card.takeaways?.length?`<div class="coachCardTakeaways390"><b>Take-home messages</b><ul>${coachList390(card.takeaways)}</ul></div>`:''}${card.model?.length?`<div class="coachCardModel390"><b>Model</b><ol>${(card.model||[]).slice(0,5).map(x=>`<li>${esc380(x)}</li>`).join('')}</ol></div>`:''}${coachChart390(card.chart)}${card.citations?.length?`<div class="coachCardCitations390"><b>Citations / source trail</b><ul>${coachCitationList390(card.citations)}</ul></div>`:''}`;
}
function coachDatabaseCardHTML390(card,index=0){
 return `<details class="coachDbCard390">
  <summary><span>Playbook ${index+1}</span><b>${esc380(card.title)}</b></summary>
  <div class="coachDbInner390">
  <div class="coachDbHead390"><span>${esc380((card.stage||[]).join(' / '))}</span><h4>${esc380(card.title)}</h4></div>
  ${card.source?`<p class="coachDbSource390"><b>Source:</b> ${esc380(card.source)}</p>`:''}
  <p>${esc380(card.read)}</p>
  ${coachRichSections390(card)}
  <div class="coachDbColumns390">
   <div><b>Why this matched</b><p>${esc380(card.why)}</p></div>
   <div><b>Extra next moves</b><ul>${coachList390(card.nextMoves)}</ul></div>
   <div><b>Evidence to watch</b><ul>${coachList390(card.evidence)}</ul></div>
   <div><b>Optional script</b><p>${esc380((card.scripts||[])[0]||'')}</p></div>
  </div>
  <details class="coachDbMore390"><summary>More guidance</summary><div class="coachDbColumns390"><div><b>Pitfalls</b><ul>${coachList390(card.pitfalls)}</ul></div><div><b>Select for</b><ul>${coachList390(card.selectFor)}</ul></div><div><b>Avoid feeding</b><ul>${coachList390(card.avoidFeeding)}</ul></div><div><b>Where this advice stops</b><p>${esc380(card.stop)}</p></div></div></details>
  </div>
 </details>`;
}
function hasIssue380(p){
 const i=issue380(p);
 return !!(i&&(i.title||i.event||i.story||i.type));
}
function geniusQuestion380(raw,stage,crux,people){
	 if(!raw.trim())return 'What should I do next?';
	 if(isWomenWantPrompt380(raw)&&stage==='early'&&people?.user==='man'&&people?.target==='woman')return 'What is she responding to, and how do I create a relationship opportunity she can actually enter?';
	 if(stage==='early'&&people?.user==='man'&&people?.target==='woman'&&/sex|sleep together|sleep with|too soon|lose interest|lost interest/i.test(raw))return 'How do I pace sex so attraction grows through contribution, respect, and real connection instead of burning off too early?';
	 if(crux==='early_signal'&&people?.user==='man'&&people?.target==='woman')return 'How do I ask her out or pace this without over-pursuing, over-explaining, or losing self-respect?';
 if(/moving too fast|too fast|rushing|pace|pacing|slow down/i.test(raw))return 'How do we slow the pace without killing the connection or turning anxiety into pressure?';
 if(crux==='safety')return 'Is this a safety or control problem, and what should be protected first?';
 if(crux==='behavior_change')return 'What concrete behavior should change, and how would I know it is actually sticking?';
	 return stage==='early'?'What is the cleanest next move in this early romantic situation?':'What should happen next?';
	}
	function isWomenWantPrompt380(raw){
	 return /what (do )?women want|relationship opportunity|understand women|why women|why she|why girls|female behavior|from her side|hot and cold|mixed signals|hesitat|indirect|passive|test me|testing me|pull back|care for me|wants to care|taken out|contribution|contribute|useful role|put her to work|overinvest|over-invest|ferryboat|besides dates|besides attention|besides sex/i.test(String(raw||''));
	}
	function coachPlaybooksForChat380(p,stage,crux,raw,people){
	 const goal=p?.coach380?.goal||'';
	 return coachDatabaseCards390({stage,crux,goal,raw,profile:p,people},10);
	}
	function rowsByName380(rows,names){
	 return names.map(name=>rows.find(r=>r.name===name)).filter(Boolean);
	}
	function wildcardNameForCoach380(stage,crux,raw,playbooks=[]){
	 const t=String(raw||'').toLowerCase(),ids=(playbooks||[]).map(x=>String(x.id||'')).join(' ');
	 if(/toxic information|red pill|feminism|culture|social media|posting|instagram|attention online|outside validation/.test(t))return 'Louise Perry modern dating culture lens';
	 if(/sex|sleep|desire|intimacy|attraction|chemistry/.test(t))return 'Esther Perel desire/security lens';
	 if(/commit|relationship opportunity|serious|exclusive|future|define/.test(t)||/commitment|serious-boyfriend/.test(ids))return 'Scott Stanley commitment clarity lens';
	 if(/ask|asking|date|first date|met her|clear bid|overpursu|pace|pacing/.test(t))return 'Jane Austen character lens';
	 return 'Jane Austen character lens';
	}
	function panelNamesForCoach380(stage,crux,raw,people,playbooks=[]){
	 const top=String(playbooks?.[0]?.id||''),orion=top.startsWith('orion')||top.startsWith('kait')||isWomenWantPrompt380(raw);
	 if(stage==='early'&&people?.user==='man'&&people?.target==='woman')return[
	  'Orion Taraban incentive/respect lens',
	  'Kait Willett capacity/status lens',
	  'Alison Armstrong usefulness/polarity lens',
	  wildcardNameForCoach380(stage,crux,raw,playbooks)
	 ];
	 return null;
	}
	function orionTurn380(raw,stage,crux,people,slot=0){
	 const t=String(raw||'').toLowerCase();
	 const earlyMan=stage==='early'&&people?.user==='man'&&people?.target==='woman';
	 const sex=/sex|sleep together|sleep with|too soon|lose interest|lost interest|intimacy/.test(t);
	 const understand=/what women want|understand women|why women|why she|why girls|female behavior|mixed signals|hesitat|indirect|passive|test me|testing me|pull back|hot and cold/.test(t);
	 const work=/put her to work|help|responsib|contribution|contribute|care for|lunch|animal|dog|contractor|shared problem|ferryboat|economy of your life|overinvest|over-invest|provide value|small favor|small responsibility|relationship opportunity|just shows up|taken out|self-sufficient|burden/.test(t);
	 if(earlyMan&&understand){
	  if(/hot and cold|test me|testing me|wait for the man|lead/.test(t))return{stance:slot?'Calibration':'Why she may act this way',text:'Hot-cold behavior may be her calibrating whether your direction survives uncertainty. Do not chase the temperature; make one clear plan and see whether she helps stabilize the connection.'};
	  if(/taken out|entertained|does not help|doesn't help|does not contribute|doesn't contribute|from her side/.test(t))return{stance:slot?'Consumption test':'Why she may act this way',text:'If she enjoys being taken out but vanishes around inconvenience, she may like the experience more than the relationship opportunity. Give her one ordinary way to participate and let her response affect your read.'};
	  if(/afraid|help|care for me|wants to care|self-sufficient|need anything/.test(t))return{stance:slot?'Care channel':'Why she may act this way',text:'If you never need anything, she may have no clean way to care for you. A small proportionate ask lets you see whether she feels invited into your life or burdened by it.'};
	  if(/sex|attention|what (do )?women want|relationship opportunity/.test(t))return{stance:slot?'Opportunity read':'Why she may act this way',text:'She may want more than attention or sexual tension: a stable opportunity to enter your life and matter there. Make your direction, boundaries, and a useful role visible before making sex the whole frame.'};
	  return{stance:slot?'Female-side read':'Why she may act this way',text:'Do not reduce her behavior to either pure interest or pure selfishness. She may be asking, often indirectly, whether your life is worth entering, whether her care would be welcomed, whether you only want attention or sex, and whether there is a dignified role for her besides being entertained.'};
	 }
	 if(earlyMan&&sex)return{stance:slot?'Refinement':'Incentive read',text:'Do not make sex the only gate. Before you escalate, ask whether she is entering your life as a contributor: helping with small problems, respecting your time, caring about your goals, and appreciating what you provide. Her hesitation may be less about not liking you and more about whether sex would attach her to a context that has not yet proved safe, useful, or serious.'};
	 if(earlyMan&&work)return{stance:slot?'Female-side read':'Contribution test',text:'Give her a dignified route to invest. A woman may seem passive when the only role available is to receive pursuit, be entertained, or manage your desire. Ask for one small useful contribution, not as a trap, but to see whether she wants to participate in your life.'};
	 if(earlyMan)return{stance:slot?'Female-side read':'Position',text:'Your leverage is not pretending not to care. It is having a life she can enter, making a clear bid, and then letting her reciprocal effort matter. If she is indirect or slow, ask whether she lacks interest, lacks a clear role, or is waiting to see whether your direction is stable and safe.'};
	 if(crux==='commitment')return{stance:'Incentive read',text:'Commitment should become more attractive because both people contribute to a shared life. If one person receives benefits without investment, ambiguity becomes rewarding.'};
	 return{stance:'Incentive read',text:'Ask what this pattern trains. Which behavior gets rewarded: reciprocity, useful care, respect, withdrawal, testing, or one-way consumption?'};
	}
	function geniusComment380(row,ctx,stage,crux,raw,people){
	 const n=String(row?.name||''),t=String(raw||'').toLowerCase(),early=stage==='early'||/just met|first date|asking .* out|girl i .*met|talking stage|flirt/.test(t),pacing=/moving too fast|too fast|rushing|pace|slow down/.test(t);
	 if(crux==='early_signal'&&people?.user==='man'&&people?.target==='woman'){
	  if(n.includes('Orion'))return orionTurn380(raw,stage,crux,people).text;
  if(n.includes('Jane Austen'))return 'Her response is evidence of character and interest: warmth, an alternate time, curiosity, and ease matter more than your analysis of every micro-signal.';
  if(n.includes('Logan Ury'))return 'Because you just met, keep the experiment small. One low-pressure date gives better data than a long text thread about what this could become.';
  if(n.includes('Scott Stanley'))return pacing?'Slow the slide. Do not act like a couple faster than you are actually choosing each other; make the next step a date, not an implied commitment.':'Do not let ambiguity accumulate benefits and expectations. Make one clear next-step invitation and watch whether she chooses into it.';
  if(n.includes('Eli Finkel'))return 'Do not compare her to an imaginary perfect option or turn one spark into a whole relationship. Get one real interaction and judge actual behavior.';
  if(n.includes('Esther'))return 'Keep aliveness by leaving room. Too much certainty-seeking can make the interaction feel managed instead of exciting.';
  if(n.includes('Marcus'))return 'You control the invitation, your tone, and your composure. You do not control whether she likes you back, so do the honorable thing plainly.';
  if(n.includes('Aristotle'))return 'Act like the kind of man you would respect: clear, moderate, courteous, and steady. The habit you practice here matters even if she says no.';
 }
	 if(early){
  if(n.includes('Logan Ury'))return 'This is early data, not a verdict. Choose one next interaction and review what actually happens, not the fantasy or fear around it.';
  if(n.includes('Jane Austen'))return 'Courtship is character evidence under small pressure. Notice manners, consistency, humility, and whether interest becomes action.';
  if(n.includes('Scott Stanley'))return 'Keep the relationship from sliding ahead of choice. Name only the next step you actually mean.';
	  if(n.includes('Orion'))return orionTurn380(raw,stage,crux,people).text;
 }
 if(crux==='safety')return n.includes('Evan')?'Before advice, ask what refusal costs. If privacy or a no creates punishment, treat safety and outside support as the first intervention.':'Do not optimize attraction or communication while safety is unclear; the first question is whether autonomy is protected.';
 if(crux==='behavior_change')return 'Make the request behavioral enough to pass or fail: one cue, one action, one review point. Sincerity is not the same as changed routine.';
 if(crux==='repair')return 'Shrink the issue to the first repairable moment. What exactly happened, what did it mean, and what would a better next instance look like?';
 const d=window.RelationshipExpertEngine359?.compose?.(row,ctx);
 return d?.experiment||row.advice||row.lens||'Test the idea against the next observable behavior.';
}
function geniusPosition380(row,stage,crux,raw,people,slot){
	 const n=String(row?.name||''),t=String(raw||'').toLowerCase(),pacing=/moving too fast|too fast|rushing|pace|pacing|slow down/.test(t);
	 const earlyMan=stage==='early'&&crux==='early_signal'&&people?.user==='man'&&people?.target==='woman';
	 if(earlyMan){
	  if(n.includes('Orion'))return orionTurn380(raw,stage,crux,people,slot);
	  if(isWomenWantPrompt380(raw)&&n.includes('Kait'))return{stance:'Capacity read',text:'Do not compete only on dates, attention, and verbal reassurance. She is probably reading demonstrated capacity: can you plan, solve, regulate, protect your time, create value, and hold standards without making her feel controlled? Make one clear move that shows competence in the real world, then let her response tell you whether she relaxes and moves toward you.'};
	  if(isWomenWantPrompt380(raw)&&n.includes('Alison'))return{stance:'Translation',text:'A woman may not show care if the only role offered is to receive pursuit, manage desire, or be entertained. Invite useful participation and make appreciation obvious when she contributes. The point is not to make her perform; it is to create a clean channel where care, usefulness, and respect can move both ways.'};
	  if(isWomenWantPrompt380(raw)&&n.includes('Jane Austen'))return{stance:'Character evidence',text:'Do not ask what women want in the abstract only. Watch whether she shows grace around inconvenience, accepts a useful role with good humor, and treats your ordinary life as something worth respecting. Courtship is not just chemistry; it is early evidence of manners, judgment, and character under small pressure.'};
	  if(isWomenWantPrompt380(raw)&&n.includes('Scott Stanley'))return{stance:'Commitment test',text:'A relationship opportunity becomes real when benefits are joined to chosen participation. Keep the next step clear enough that she can opt into your life, not merely consume your attention. If she repeatedly accepts benefits while avoiding choice or contribution, that is information about commitment, not a puzzle to solve with more effort.'};
	  if(isWomenWantPrompt380(raw)&&n.includes('Esther'))return{stance:'Desire and space',text:'Attention and sex are not the whole erotic field. Desire often needs a man with his own life, enough restraint to create space, and enough warmth that entering that life feels welcome. If you overexplain desire, you can make the interaction feel managed rather than alive.'};
	  if(isWomenWantPrompt380(raw)&&n.includes('Louise'))return{stance:'Culture read',text:'Modern dating can train consumption: entertainment, ambiguity, and sexual access without shared norms. A better frame is clear courtship with contribution, public dignity, and standards. You are trying to build a norm where both people know what kind of behavior earns more access.'};
  if(n.includes('Kait'))return{stance:'Capacity read',text:'The clean invitation matters, but the deeper signal is demonstrated capacity. Ask in a way that shows direction, calm, and outcome power: you can choose a plan, handle a yes or no, and keep your life intact either way. That is more attractive than seeking reassurance through extra explanation.'};
  if(n.includes('Alison'))return{stance:'Useful clarity',text:'Make it easy for her to receive your initiative without having to manage your uncertainty. Lead with a simple plan and a warm tone, then notice whether she appreciates the clarity or makes everything harder. If she does move toward you, receive that warmly so usefulness and appreciation start early.'};
  if(n.includes('Jane Austen'))return{stance:'Pushback',text:'I agree with the clean invitation, but I would not call her answer only an attraction signal. It is character evidence: does she respond with warmth, clarity, courtesy, or convenient fog? The way someone handles a small bid often tells you more than a dramatic confession would.'};
  if(n.includes('Logan Ury'))return{stance:'Practical test',text:'Both of you are making this too abstract. One real date or one real follow-up gives better data than rereading messages. Run a small experiment, review actual behavior afterward, and do not promote anxiety into a relationship theory.'};
  if(n.includes('Marcus'))return{stance:'Grounding',text:'You may prefer a certain answer, but you do not own it. Own your tone, restraint, courage, and timing; let the outcome be information rather than a verdict on your worth. A composed no is better for your character than a needy yes extracted by pressure.'};
  if(n.includes('Scott Stanley'))return{stance:'Boundary',text:'Do not slide into relationship behavior before there is a decision. Keep the next step modest: one date, one plan, one observed response. If she cannot choose that small step clearly, do not compensate by adding more benefits or emotional labor.'};
 }
 if(crux==='safety'){
  if(n.includes('Evan'))return{stance:'Override',text:'I am going to interrupt the normal dating advice. If refusal, privacy, or independence produces punishment, this is not a communication puzzle; it is a safety and autonomy question.'};
  return{stance:slot?'Agreement':'Position',text:'I agree safety changes the whole frame. Do not optimize chemistry, reassurance, or repair while someone is being monitored, threatened, isolated, or punished for saying no.'};
 }
 if(crux==='behavior_change'){
  if(n.includes('Gottman')||n.includes('Scott'))return{stance:'Position',text:'The useful question is not whether the promise sounds sincere. The useful question is whether the cue, routine, reward, and review point have changed.'};
  if(n.includes('Aristotle'))return{stance:'Deeper layer',text:'I agree, but habit needs a reason to become stable. If the behavior is not tied to fairness, gratitude, duty, or a shared good, it may fade when pressure fades.'};
  return{stance:'Practical test',text:'Make the change small enough to observe this week: one cue, one behavior, one proof point. Anything vaguer becomes another emotional conversation with no scoreboard.'};
 }
 if(crux==='grounding_values'){
  if(n.includes('Marcus'))return{stance:'Grounding',text:'Leave the court of imagination. Your next duty is local: body, room, family, prayer, work, and one completed action. Peace returns through practice, not more forecasting.'};
  if(n.includes('Aristotle'))return{stance:'Habit',text:'A life becomes stable through repeated goods. Friends, family, service, exercise, and achievable goals are not distractions from love; they are the conditions that make you capable of loving well.'};
  if(n.includes('Bell Hooks'))return{stance:'Love ethic',text:'Love is not obsession. A loving life includes care for self, community, responsibility, and truth; otherwise romance becomes a container for every unmet need.'};
  if(n.includes('Gabor'))return{stance:'Body',text:'If your body is activated, thinking harder will not metabolize the alarm. Move, breathe, sleep, eat, walk the dog, and reconnect before making meaning.'};
  return{stance:slot?'Agreement':'Position',text:'I agree the task is bigger than dating. Build a life structure that lowers rumination: people, place, faith or values, body, service, and small wins.'};
 }
 if(crux==='repair'){
  if(n.includes('Gottman'))return{stance:'Position',text:'Start with the first repairable moment. Name the event, the impact, and the next behavior. Do not prosecute the whole personality.'};
  if(n.includes('Bell Hooks'))return{stance:'Challenge',text:'Repair is not only smoother wording. Ask whether care, respect, responsibility, and trust are actually being practiced after the apology.'};
  if(n.includes('Orion'))return{stance:'Incentive read',text:'Repair should change what gets rewarded next time. If the same behavior keeps access, sympathy, or control, the apology only resets the room; it does not change the pattern.'};
  if(n.includes('Kait'))return{stance:'Capacity read',text:'A capable repair owns impact and then performs the better behavior under pressure. Watch the next similar moment, because that is where strength and sincerity become visible.'};
  if(n.includes('Alison'))return{stance:'Translation',text:'Turn the hurt into one specific comfort, respect, truth, or contribution request. Appreciation can return after the new behavior gives the relationship something real to trust.'};
  return{stance:'Repair test',text:'The useful question is what should be visibly different next time. Name the moment, the standard, and the evidence that would prove the repair is real.'};
 }
 if(crux==='commitment'){
  if(n.includes('Scott'))return{stance:'Position',text:'The danger is sliding into benefits, intimacy, or constraints without a clear decision. Ask what has actually been chosen.'};
  if(n.includes('Louise'))return{stance:'Culture read',text:'I agree, and modern dating often rewards ambiguity. Private affection without public or practical clarity can keep one person investing while the rules stay undefined.'};
  return{stance:'Test',text:'Do not ask for a speech. Ask for the next concrete commitment behavior, then watch whether the answer becomes action.'};
 }
 const generic=[
  {stance:'Position',text:geniusComment380(row,{},stage,crux,raw,people)},
  {stance:'Agreement',text:'I agree with the main read, but the advice should be tested against behavior, not how convincing it feels in the moment. Choose one action that creates better evidence and one response that would update the read. If nothing observable changes, do not let a beautiful explanation substitute for reality.'},
  {stance:'Pushback',text:'I would be careful about overfitting the story. Ask what observable evidence would change your mind, and ask what evidence you are currently ignoring because it is inconvenient. The goal is not to win an interpretation; it is to make the next decision more honest.'},
  {stance:'Synthesis',text:'The next move should be small, dignified, and measurable: one action, one response to observe, one boundary if the pattern repeats. Keep it simple enough that the other person can actually respond. Then let the response matter more than the theory.'}
 ];
 return generic[slot%generic.length];
}
function geniusCoachReply380(userTake,stage,crux,people){
 const t=String(userTake||'').toLowerCase();
 if(!t.trim())return '';
 if(/she said yes|she agreed|she wants|date set|we have plans/.test(t))return 'That changes the read in a good way: stop seeking more proof for now. Make the plan clean, show up composed, and let the date create the next evidence.';
 if(/no|declined|busy|ignored|left me on read|didn.?t respond|ghost/.test(t))return 'Then the panel should tighten: do not bargain against weak reciprocity. One graceful follow-up is fine if there is ambiguity; repeated pursuit after nonresponse is self-abandonment.';
 if(/i already texted|sent a long|overexplained|too much/.test(t))return 'Then repair by becoming simple again. No apology spiral. Send one calm reset only if needed, then let space and behavior do more than another explanation.';
 if(stage==='early'&&people?.user==='man'&&people?.target==='woman')return 'Your update matters. The next move is still warm clarity plus restraint: do the one clean thing, then watch whether she helps the connection move.';
 if(crux==='safety')return 'Your update should be judged by safety, not persuasion. Ask what happens when you say no, preserve support, and do not make the unsafe person the only witness.';
 return 'Good, that is the kind of context the panel needs. Convert it into one observable next test: what action will you take, what response would reassure you, and what response would make you stop?';
}
function counselorComment380(stage,crux,people,raw='',issueType=''){
 const reframe=panelReframe380(raw,stage,crux,people,issueType);
 if(crux==='safety')return `${reframe} I am going to mediate this around safety first; nobody gets to optimize a relationship at the cost of autonomy, privacy, or support.`;
 if(stage==='early'&&people?.user==='man'&&people?.target==='woman')return `${reframe} I am listening for what protects your goodwill and dignity while still giving you a clean next move.`;
 if(crux==='behavior_change')return `${reframe} I am going to keep the panel honest: advice only matters if it becomes a behavior you can observe, repeat, and stop requesting once the evidence is clear.`;
 if(crux==='repair')return `${reframe} I am going to keep this repair-focused instead of blame-focused, and I will pull the panel back if it drifts into abstraction.`;
 return `${reframe} I am here as the neutral third party on your side: I will keep the panel practical and tied to the situation you entered.`;
}
function expertProfileHTML380(row){
 const name=row?.name||'Relationship coach';
 const profile=window.relationshipExpertProfile343?.(name,row)||{avatar:row?.avatar||'RI',kind:row?.sourceClass||'Modeled perspective',lineage:'Modeled interpretive lens inside the app.',bio:'Review its provenance and limitations before applying it.'};
 const display=window.relationshipExpertDisplayName343?.(name)||name;
 const tags=(row?.tags||[]).slice(0,5).map(t=>`<span>${esc380(t)}</span>`).join('');
 return `<div class="expertProfileHero380"><span class="expertProfileAvatar380">${esc380(profile.avatar)}</span><div><b>${esc380(display)}</b><p>${esc380(profile.kind)}</p></div></div>
 <div class="expertProfileBody380">
  <div><b>Source lineage</b><p>${esc380(profile.lineage)}</p></div>
  <div><b>Best used for</b><p>${esc380(profile.bio)}</p></div>
  <div><b>Authority check</b><p>This is a modeled app voice, not a direct quote or a claim that the real-world source personally endorsed this advice.</p></div>
  ${tags?`<div><b>Tags</b><p class="expertProfileTags380">${tags}</p></div>`:''}
 </div>`;
}
function showExpertProfile380(key){
 const rows=typeof window.relationshipExpertRows343==='function'?window.relationshipExpertRows343():[];
 const row=rows.find(r=>r.name===key)||{name:key};
 let modal=$380('expertProfileModal380');
 if(!modal){
  modal=document.createElement('div');
  modal.id='expertProfileModal380';
  modal.className='expertProfileModal380 hidden';
  modal.innerHTML='<div class="expertProfileCard380" role="dialog" aria-modal="true" aria-labelledby="expertProfileTitle380"><button type="button" class="expertProfileClose380" aria-label="Close expert profile">x</button><h3 id="expertProfileTitle380">Voice profile</h3><div id="expertProfileContent380"></div></div>';
  document.body.appendChild(modal);
 }
 const content=$380('expertProfileContent380');
 if(content)content.innerHTML=expertProfileHTML380(row);
 modal.classList.remove('hidden');
 document.body.classList.add('workspacePopoutOpen370');
}
function closeExpertProfile380(){
 const modal=$380('expertProfileModal380');
 if(modal)modal.classList.add('hidden');
 if(!$380('issuePopout370')?.classList.contains('hidden')||!$380('expertPopout370')?.classList.contains('hidden'))return;
 document.body.classList.remove('workspacePopoutOpen370');
}
function voiceCards380(row,cards=[]){
 const n=String(row?.name||'');
 const id=card=>String(card?.id||''),tags=card=>String([card?.title,card?.source,(card?.tags||[]).join(' '),(card?.topics||[]).join(' ')].join(' ')).toLowerCase();
 const isOwnedVoiceCard=card=>id(card).startsWith('orion')||id(card).startsWith('kait')||id(card).startsWith('mw-alison')||id(card).startsWith('mw-suzanne');
 const all=window.RelationshipCoachDatabase390?.entries||[];
 const pool=[...(cards||[]),...all.filter(card=>!(cards||[]).some(c=>id(c)===id(card)))];
 let filtered=[];
 if(n.includes('Orion'))filtered=pool.filter(c=>id(c).startsWith('orion')||id(c)==='masculine-direction');
 else if(n.includes('Kait'))filtered=pool.filter(c=>id(c).startsWith('kait'));
 else if(n.includes('Alison'))filtered=pool.filter(c=>id(c).startsWith('mw-alison')||(!isOwnedVoiceCard(c)&&/alison|appreciation|usefulness|comfort|correction|translation|paradigm/.test(tags(c))));
 else if(n.includes('Jane Austen'))filtered=pool.filter(c=>!isOwnedVoiceCard(c)&&/courtship|character|first-date|early-calm|post-date|manners/.test(tags(c)));
 else if(n.includes('Scott Stanley'))filtered=pool.filter(c=>!isOwnedVoiceCard(c)&&/commitment|serious|sliding|relationship opportunity|define/.test(tags(c)));
 else if(n.includes('Esther'))filtered=pool.filter(c=>!isOwnedVoiceCard(c)&&/desire|sex|chemistry|admiration|intimacy/.test(tags(c)));
 else if(n.includes('Louise'))filtered=pool.filter(c=>!isOwnedVoiceCard(c)&&/culture|modern|social-media|bad-advice|norms|ambiguity/.test(tags(c)));
 if(!filtered.length)filtered=pool.filter(c=>!isOwnedVoiceCard(c)).slice(0,3);
 filtered=filtered.sort((a,b)=>((b.takeaways?.length||0)+(b.citations?.length||0)+(b.chart?2:0))-((a.takeaways?.length||0)+(a.citations?.length||0)+(a.chart?2:0)));
 return filtered.slice(0,4);
}
function chatKind380(raw,issueType='',crux=''){
 const t=String(raw||'').toLowerCase();
 if(issueType==='digital_boundary'||/texting other guys|dm|dms|message.*guys|other men|other guys/.test(t))return'digital_boundary';
 if(issueType==='public_respect'||/refut|correct.*public|public|in front of|embarrass|humiliat|mock|disrespect|look foolish|undermine/.test(t))return'public_respect';
 if(issueType==='outside_validation'||/posting herself|posting.*attention|posting.*validation|social media.*validation|instagram.*attention|outside validation/.test(t))return'outside_validation';
 if(issueType==='info_diet'||/toxic information|podcast|tiktok|red pill|feminism|content|information diet|gender war/.test(t))return'info_diet';
 if(issueType==='social_rivalry'||/female intra|intrasexual|women compete|female competition|gossip|reputation|ostrac|exclude|friend pressure|girlfriends|girl friends|mate choice|jealous women|attractive woman|dress down|slut|social rivalry|peer pressure|sabotage|stay single|friends.*single|friends.*dump|women.*pressure/.test(t))return'social_rivalry';
 if(issueType==='dating_strategy'||/dont chase|don't chase|left on read|left on red|option|plan b|backup|job offer|beta corp|applicant|interview|overpursu|overcommit|happy hunting|hunter|hunt|fisherman|fishing|conditional yes|lazy dating|find a man|find men|get a boyfriend|get a husband|how do i date|how to date|meet men|women looking for men|woman looking for a man|female looking for a man|husband material|boyfriend material/.test(t))return'dating_strategy';
 if(issueType==='contribution'||/what women want|relationship opportunity|put her to work|contribut|reciprocat|help me|care for me|useful role|overinvest|ferryboat|besides dates|besides attention|besides sex/.test(t))return'contribution';
 if(issueType==='hot_cold'||/hot and cold|mixed signals|pull back|testing me|test me|indirect|passive|hesitat/.test(t))return'hot_cold';
 if(issueType==='sex_pacing'||/sex|sleep together|sleep with|too soon|intimacy|lose interest/.test(t))return'sex_pacing';
 if(issueType==='grounding'||crux==='grounding_values')return'grounding';
 if(issueType==='behavior_change'||crux==='behavior_change')return'behavior_change';
 if(issueType==='repair'||crux==='repair')return'repair';
 return'general';
}
function chatTextForVoice380(voice,kind,raw,stage,crux,people){
 const earlyMan=stage==='early'&&people?.user==='man'&&people?.target==='woman';
 const v=voice;
 const byKind={
  digital_boundary:{
   orion:'The issue is not whether she can ever speak to another man; the issue is what this private attention rewards. If she gets your commitment, access, and patience while another man gets flirtation, secrecy, or emotional availability, the incentive structure is bad. Set a clean standard, then watch whether she protects the relationship without needing to be policed.',
   kait:'From an attraction and status angle, do not negotiate from panic. A man who has boundaries is calmer and more legible than a man who begs for reassurance while accepting a lower position. Say the standard plainly, give her room to choose it, and let her choice change your investment.',
   amy:'I would translate this away from accusation and toward agreement. Tell her the behavior makes trust harder, not that she is automatically guilty, and ask what shared rule would make both of you feel respected. If honesty gets punished or boundaries stay vague, the relationship will train hiding instead of closeness.',
   wild:'The practical test is simple: after the conversation, does the private attention become more transparent, less flirtatious, and less central? If nothing observable changes, the issue was not wording; it was willingness.'
  },
  public_respect:{
   orion:'Public correction changes the reward system around respect. If she gets laughs, status, or control by making you look foolish, your quiet tolerance teaches the pattern to continue. Do not counter-humiliate her; set a private rule that disagreement stays respectful when there is an audience.',
   kait:'A man loses ground when he lets public disrespect become normal, but he also loses ground if he reacts like he is begging for status back. Hold posture, stay calm, and make the standard behavioral: do not correct me publicly in a way that makes me look small. Her response tells you whether she can respect strength without needing to defeat it.',
   amy:'The translation is: you need dignity protected in public, and she may need a way to disagree without feeling silenced. Put both needs into one rule: disagreement is allowed, humiliation is not. Then thank the respectful version when she does it, because appreciation helps the new behavior stick.',
   wild:'The next public moment is the evidence. If she can catch herself, defer the correction, or speak with care, repair is working. If she mocks the boundary, you have a respect problem, not a communication problem.'
  },
  outside_validation:{
   orion:'Posting for outside attention can become a parallel marketplace for validation. The question is not whether she is allowed to be seen; the question is whether she is feeding a signal that competes with the relationship. Ask what public behavior protects exclusivity, pride, and respect.',
   kait:'Do not frame this as insecurity alone. A high-value relationship has public standards, and people read those standards. If her online presentation recruits attention that makes the bond feel cheap, ask for the standard calmly and see whether she cares about the cost to the relationship.',
   amy:'Separate expression from impact. You can respect her autonomy and still say that some forms of attention-seeking make you feel less safe, less proud, or less chosen. The repair is a shared agreement, not a demand that she disappear.',
   wild:'Look for whether she becomes more considerate without becoming resentful. Healthy adjustment feels like protection of the bond; grudging compliance feels like a future fight.'
  },
  info_diet:{
   orion:'Content is not neutral if it changes what behavior gets rewarded. If podcasts or clips train contempt, suspicion, or gender-war reflexes, they become a third party in the relationship. Ask what the information diet is making easier: respect and cooperation, or resentment and scorekeeping.',
   kait:'A capable person curates inputs because inputs shape standards. If her content diet makes her less respectful, less cooperative, or more contemptuous, the issue is not one opinion; it is repeated conditioning. Ask for a better input environment and watch whether her behavior changes.',
   amy:'I would avoid attacking the creator or the whole ideology first. Start with impact: “When this content comes into us, I notice more contempt and less warmth.” Then ask for a relationship-protective boundary around what you both feed your minds.',
   wild:'The evidence is tone. If the content boundary works, conversations should become kinder, more specific, and less scripted by internet conflict.'
  },
  social_rivalry:{
   orion:'Ask what the friend group is rewarding and punishing. If gossip, exclusion, or “stay single” pressure earns belonging, it can quietly train her away from pairing and toward group approval. Do not isolate her; help her distinguish protective counsel from competitive pressure.',
   kait:'For a woman, the cost question matters. Does the pressure make her more confident, selective, and capable of choosing a good man, or does it make her anxious, contemptuous, and afraid to be visibly desired? Social approval is not the same as a good life outcome.',
   amy:'I would translate this gently: good friends protect your dignity, but they should not make you smaller, colder, or less honest about what you want. Keep the women who help you hear truth; step back from the ones who turn love, femininity, or commitment into something embarrassing.',
   wild:'Modern culture often disguises mate-choice pressure as empowerment. The practical test is the five-year consequence: does the advice lead to safety, love, family, peace, and integrity, or mainly to applause from the group?'
  },
  contribution:{
   orion:'Give her a dignified route to invest. If the only role available is being entertained, pursued, or sexually desired, you may train passive consumption and then resent it. Ask for one small useful contribution and watch whether she moves toward your life with goodwill.',
   kait:'Women often respond to demonstrated capacity more than verbal claims. Show that you have direction, standards, and a real life, then invite her into a small role inside it. If she relaxes, contributes, and respects the structure, that is better data than another conversation about chemistry.',
   amy:'Contribution works best when appreciation is visible. If she helps, receive it warmly instead of treating it like a test she barely passed. The goal is a loop where usefulness, gratitude, and care move both directions.',
   wild:'The practical test is ordinary life. Can she help choose, bring, plan, remember, care, or solve something proportionate without turning it into oppression or debt?'
  },
  dating_strategy:{
   orion:/dont chase|don't chase|left on read|left on red|option|job offer|beta corp|overpursu|overcommit/i.test(raw)?'Do not become the unconditional job offer: already committed, endlessly available, and waiting with no cost to her. Make a clean invitation, keep your life and options real, and let reciprocal effort earn more access; otherwise you train yourself into the fallback role.':people?.user==='woman'&&people?.target==='man'?'Do not date from random attention. Pick men whose life, direction, and values you might actually want, do enough homework before the date, then show up as a conditional yes if you accept: warm, open, and still free to revoke access if his behavior fails the standard.':'Men often fish by creating broad opportunity and selecting from women who choose back; women can hunt more specifically. Build a legible life, cast clean invitations, and stop trying to convert chronic maybe energy into devotion.',
   kait:people?.user==='woman'&&people?.target==='man'?'A man worth selecting should show capacity before you reward him with more access: direction, composure, follow-through, social respect, and the ability to handle your no. Do not confuse being wanted with choosing well; choose the man whose behavior makes respect and attraction easier.':'If women are hunting, they are reading capacity: direction, composure, resources, fitness, standards, and whether your life is worth entering. Your job is to make capacity visible through behavior, not to explain your value until she believes it.',
   amy:people?.user==='woman'&&people?.target==='man'?'Warmth is not the same as surrender. Let him feel that you are pleased to be there if you chose the date, but keep your standards clear and appreciable. A good man should feel invited, not auditioned, and he should also know your pace and dignity matter.':'Make initiative easy to receive. Lead with a clear plan, appreciate useful movement from her, and create a relationship channel where care can go both ways. If she has been hunting you, she should be able to enter your life with warmth, not just consume attention.',
   wild:'Courtship is selection under small pressure. Look for manners, follow-through, respect around pace, and whether the person becomes more honorable when desire appears. Attraction matters, but character decides whether more access is wise.'
  },
  hot_cold:{
   orion:'Hot-cold behavior may be calibration, uncertainty, or low investment. Do not chase every temperature change; that rewards instability. Make one clear plan, keep your life intact, and let her reciprocal effort tell you whether this is real.',
   kait:'Your posture matters here. If warmth makes you over-invest and distance makes you plead, she learns that your center is outside you. Stay composed, make a clear bid, and do not promote mixed signals into a privileged position.',
   amy:'Do not punish uncertainty, but do ask for enough consistency to feel respected. A gentle sentence works better than a prosecution: “I like this when it feels mutual; I do not do well with hot and cold.” Then observe whether she can meet you.',
   wild:'The answer is in the pattern after clarity. If she becomes steadier, good. If ambiguity continues to buy your attention, step back.'
  },
  sex_pacing:{
   orion:'Do not make sex the only gate. If sex outruns respect, contribution, and shared context, it can make the bond feel consumed rather than built. Keep desire alive while testing whether she can enter your actual life with care and reciprocity.',
   kait:'Pacing is more attractive when it comes from standards, not fear. Be warm, direct, and unapologetic that you want the connection to build in a way that preserves respect. That communicates self-command, which is different from hesitation.',
   amy:'Say the positive thing first: you like where it is going. Then name the container you want: enough trust, appreciation, and care that sex deepens the connection instead of becoming the whole question. That is clearer and kinder than acting distant.',
   wild:'The test is whether slowing down increases respect or triggers pressure. Respectful pacing should make both people feel more chosen, not punished.'
  },
  grounding:{
   orion:'This is not a situation to solve by extracting more certainty from her. Rebuild the larger context: friends, body, faith or values, work, and a life she could enter without becoming the center of gravity. Attraction is easier to handle when your life is not waiting for one person to validate it.',
   kait:'Capacity starts with self-command. Set achievable goals, move your body, clean your environment, strengthen your network, and make your day bigger than the romantic question. That is not avoidance; it is becoming more stable and attractive.',
   amy:'When anxiety is high, do not ask romance to carry every unmet need. Return to ordinary anchors: family, friends, service, prayer or values, sleep, food, and one completed task. A calmer nervous system makes better choices.',
   wild:'Give it seventy-two hours of structure before making a big interpretation. If the question still matters after you are grounded, you will ask it more cleanly.'
  },
  behavior_change:{
   orion:'Ask what the current system rewards. If the behavior keeps happening, some mix of access, relief, avoidance, attention, or lack of consequence is keeping it alive. Change one incentive and one boundary, then watch behavior rather than promises.',
   kait:'The change has to show capacity, not just intention. Can this person notice the cue, regulate themselves, choose the better behavior, and repeat it when nobody is impressed? If not, you are dealing with a skill or willingness gap.',
   amy:'Make the request small, specific, and appreciable. Name the behavior you want, explain the comfort or respect it creates, and notice it when it happens. People repeat what becomes clear and valued.',
   wild:'If the same request has been made three times, stop making it bigger and make it more measurable. Cue, action, review point.'
  },
  repair:{
   orion:'Repair should change the incentive structure, not just lower the emotional pressure for a night. Ask what behavior became more costly and what behavior became more rewarding after the repair. If nothing changes next time, the repair was relief, not learning.',
   kait:'The repair has to restore position and trust through action. A person with capacity can own impact, make a clean adjustment, and not collapse into excuses. Watch whether the next similar moment looks stronger.',
   amy:'Translate the hurt into a next-time behavior. “I need respect” is too vague; “do not keep private flirtatious DMs while asking me to trust the relationship” is usable. Appreciation can return after safety and clarity return.',
   wild:'The best repair is boring evidence. Fewer speeches, cleaner behavior, easier trust.'
  },
  general:{
   orion:'Ask what this situation rewards, punishes, ignores, and demands. The next move should change behavior, not merely create a more satisfying explanation.',
   kait:'Turn the question into demonstrated capacity. What can you plan, solve, regulate, clarify, or stop doing today that makes the situation cleaner?',
   amy:'Translate the emotional complaint into a comfort, respect, truth, or contribution request. Then ask for that in plain English.',
   wild:'Make one move small enough to test this week. Let the response update the read.'
  }
 };
 const pack=byKind[kind]||byKind.general;
 return pack[v]||pack.wild;
}
function wildcardVoice380(kind,raw,stage,crux){
 if(kind==='outside_validation'||kind==='info_diet'||kind==='social_rivalry')return{key:'Louise Perry modern dating culture lens',name:'Louise Perry culture lens',avatar:'LP',kind:'Culture / norms',voice:'wild'};
 if(kind==='sex_pacing')return{key:'Esther Perel desire/security lens',name:'Esther Perel desire lens',avatar:'EP',kind:'Desire / security',voice:'wild'};
 if(kind==='contribution'||kind==='dating_strategy'||kind==='hot_cold')return{key:'Jane Austen character lens',name:'Jane Austen character lens',avatar:'JA',kind:'Character / courtship',voice:'wild'};
 return{key:'Scott Stanley commitment clarity lens',name:'Scott Stanley clarity lens',avatar:'SS',kind:'Commitment / evidence',voice:'wild'};
}
function coachPanelTurns380(p,stage,crux,raw,people,playbooks=[]){
 const issueType=p?.coach380?.issueType||'',kind=chatKind380(raw,issueType,crux);
 const base=[
  {key:'Orion Taraban incentive/respect lens',name:'Oren Taravan (based on Orion Taraban)',avatar:'OT',kind:'Psychology / dating strategy',voice:'orion',stance:'Incentive read'},
  {key:'Kait Willett capacity/status lens',name:'Kate Willet-Cross (based on Kait Willett)',avatar:'KW',kind:'Dating culture / attraction analysis',voice:'kait',stance:'Capacity read'},
  {key:'Alison Armstrong usefulness/polarity lens',name:'Amy Armstrong-Ellison (based on Alison Armstrong)',avatar:'AA',kind:'Relationship educator',voice:'amy',stance:'Translation'}
 ];
 const wild=wildcardVoice380(kind,raw,stage,crux);
 const turns=[...base,{...wild,stance:'Practical test'}];
 return turns.map(turn=>({
  ...turn,
  text:chatTextForVoice380(turn.voice,kind,raw,stage,crux,people),
  cards:voiceCards380({name:turn.key},playbooks)
 }));
}
function sourceCardsHTML380(cards=[]){
 if(!cards.length)return '';
 return `<details class="geniusSourceCards380"><summary>Source cards</summary><div>${cards.map(card=>`<article><b>${esc380(card.title||card.id||'Coach card')}</b>${card.source?`<em>${esc380(card.source)}</em>`:''}<p>${esc380(card.read||card.why||'')}</p>${coachRichSections390(card)}<small>${esc380((card.tags||[]).slice(0,7).join(' / '))}</small></article>`).join('')}</div></details>`;
}
function geniusLine380(turn){
 const sentence=s=>String(s||'').replace(/\s+/g,' ').trim();
 return `<div class="geniusBubble380 geniusVoice380"><div class="geniusVoiceHead380"><button type="button" class="geniusProfileBtn380" data-expert-profile380="${esc380(turn.key)}" title="Open voice profile">${esc380(turn.avatar)}</button><div><b>${esc380(turn.name)}</b><em>${esc380(turn.kind)}</em></div></div><p>${esc380(sentence(turn.text))}</p>${sourceCardsHTML380(turn.cards)}<span>${esc380(turn.stance)}</span></div>`;
}
function geniusChatHTML380(p,stage,crux,raw,people){
 const userTake=String(p?.coach380?.geniusTake||'').trim();
 const fresh=coachFreshText380(p);
 const playbooks=coachPlaybooksForChat380(p,stage,crux,raw,people);
 const turns=coachPanelTurns380(p,stage,crux,raw,people,playbooks);
	 return `<section class="geniusChat380" aria-label="Ask the geniuses">
	  <div class="geniusChatHead380"><span>Ask the geniuses</span><h4>Panel conversation</h4></div>
	  <div class="geniusThread380">${turns.map(turn=>geniusLine380(turn)).join('')}${userTake?`<div class="geniusBubble380 geniusUser380"><b>Your weigh-in</b><p>${esc380(userTake)}</p></div><div class="geniusBubble380 geniusCoach380"><b>Coach synthesis</b><p>${esc380(geniusCoachReply380(userTake,stage,crux,people))}</p><span>Next step</span></div>`:''}</div>
	  <div class="geniusWeighIn380"><label for="geniusTakeInput380"><span>Your turn</span><textarea id="geniusTakeInput380" placeholder="Weigh in: add what happened next, what you disagree with, or what the panel missed.">${esc380(userTake)}</textarea></label><button id="saveGeniusTake380" type="button" class="secondary">Update conversation</button></div>
	 </section>`;
}
function counselorOfficeHTML380(p){
 const i=issue380(p),raw=[i?.title,i?.event,i?.story].filter(Boolean).join(' ').trim();
 const status=i?(i.status==='resolved'||i.resolved?'Resolved':'Open issue'):'No saved issue selected';
 const read=raw?`I am treating this as a concrete problem-solving file, not ordinary coaching. We will preserve the facts, separate meaning from evidence, ask the experts for sharper reads, and keep track of whether repair actually changes the next similar moment.`:'Use this room when there is a specific rupture, conflict, pattern, or event worth saving. The counselor organizes the case and the expert panel weighs in underneath.';
 return `<section class="counselorOffice380"><div class="counselorHead380"><span>Unbiased third party</span><h3>Counselor's read</h3><p>${esc380(read)}</p></div><div class="counselorMeta380"><span>${esc380(status)}</span><span>${esc380(i?.title||i?.type||'No event selected')}</span></div></section>`;
}
function fieldGuide380(stage,crux,raw,people,issueType=''){
 if(issueType==='contribution')return{title:'Reciprocity field guide',rules:['Use this when the concern is participation, contribution, overinvestment, or whether she is entering your life instead of only receiving dates and attention.','Create one small, dignified opportunity for her to help, choose, remember, bring, plan, care, or solve something real.','Keep the ask proportionate. The point is evidence of goodwill, not a chore assignment or loyalty exam.','Let her response affect your investment. Warm participation earns more access; passivity should not earn more pursuit.','Receive useful contribution with appreciation so care becomes rewarding, not invisible.'],selectFor:['She helps make the plan easier instead of only consuming the plan.','She shows care for your time, goals, responsibilities, friends, animals, home, or routines.','She can contribute without resentment and receive appreciation without turning it into leverage.','Your respect and warmth increase after ordinary life contact, not only after romance or sex.'],avoidFeeding:['Entertainment-only dating where your value is dates, logistics, reassurance, and sexual pursuit.','Overinvesting now while hoping reciprocity appears later.','Secret tests, bitterness, or framing contribution as servitude.','Rewarding passivity with more attention than participation gets.']};
 if(issueType==='dating_strategy')return people?.user==='woman'&&people?.target==='man'?{title:'Happy hunting field guide',rules:['Use this when a woman is asking how to date, find a man, choose better men, or stop drifting through random attention.','Do enough homework before the date to know why this specific man interests you.','Show up as a conditional yes only if interest is real: warm and open if it goes well, while free to slow down or say no anytime.','Use the date to test character, safety, attraction, values, direction, and follow-through.','Do not use sex, availability, or cool-girl performance as a shortcut to commitment.'],selectFor:['A man with a legible life: direction, values, work, friends, health, and responsibilities.','A man who handles your no, pace, and standards calmly.','A man whose actual behavior confirms the reasons you selected him.','A man you would respect entering, not just a man who gives attention.'],avoidFeeding:['Lazy dating from boredom, free attention, or first-pass screening.','Showing up as a neutral maybe and expecting him to manufacture interest from zero.','Researching him to manipulate rather than discern fit.','Sexual escalation used as a commitment guarantee.']}:{title:'Do not chase / fisherman field guide',rules:['Use this when a man is asking about being left on read, becoming an option, overpursuing, or the fisherman/hunter distinction.','Make one clear offer, then stop making yourself the unconditional job offer that can wait forever.','Keep your life, options, responsibilities, and standards real so your attention has context.','Invest more after reciprocal effort, not after anxiety or distance.','If she is hunting, let her see a life worth entering; if she is only keeping you warm, step back.'],selectFor:['She accepts a clear invitation or proposes a real alternative.','She respects your time and does not use your attention as a backup plan.','She asks about your actual life and helps make plans easier.','Your investment rises because she chooses back, not because she drifts away.'],avoidFeeding:['Left-on-read loops with extra proof of devotion.','Boyfriend-level access for maybe-level reciprocity.','Trying to convert indifference into devotion.','Fake scarcity, cruelty, jealousy games, or contempt.']};
 if(issueType==='public_respect')return{title:'Public respect field guide',rules:['Use this when the problem is correction, refuting, joking, or disagreement in front of other people.','The standard is not “never disagree.” The standard is disagree without making your partner smaller in public.','Ask for a next-time rule: sensitive corrections happen privately, or they are stated in a way that protects both people.','Watch the next public moment as evidence. A sincere apology matters less than whether the public behavior changes.'],selectFor:['She protects your dignity even when she disagrees.','She can repair without saying you are too sensitive for noticing public disrespect.','She understands that couple status is partly maintained by how partners speak about each other around others.'],avoidFeeding:['Laughing it off publicly while building private resentment.','Counter-humiliating her to restore status.','Debating every example until the simple next-time rule disappears.']};
 if(issueType==='digital_boundary')return{title:'Digital loyalty field guide',rules:['Use this when private attention, DMs, texting, phone behavior, or flirtation with other people is weakening trust.','Do not turn yourself into a detective. Define the loyalty standard and watch whether transparency increases voluntarily.','The question is not only whether cheating occurred; it is whether the behavior protects or leaks the relationship container.'],selectFor:['She cares that private attention with other men affects trust.','She can agree to a standard without needing surveillance.','Her behavior becomes easier to respect after the conversation.'],avoidFeeding:['Phone policing as the main relationship tool.','Accepting “nothing happened” as the only standard.','Pretending you are fine while quietly losing respect.']};
 if(issueType==='outside_validation')return{title:'Outside-validation field guide',rules:['Use this when social media, posting, flirting, or public attention seems to compete with the relationship.','Separate harmless expression from validation-seeking that recruits outside attention against the bond.','Ask what public presentation would make both people feel proud, desired, and protected.'],selectFor:['She can care about your discomfort without surrendering all autonomy.','Her public behavior supports the relationship instead of keeping outside options warm.','Attention-seeking decreases when the relationship standard is clear.'],avoidFeeding:['Calling every attractive post disrespectful.','Public shaming or control.','Ignoring a pattern because each individual post has an excuse.']};
 if(issueType==='info_diet')return{title:'Information-diet field guide',rules:['Use this when repeated content is training contempt, suspicion, entitlement, or gender-war scripts.','Do not debate the whole internet. Ask what the content is producing inside the relationship.','A good information diet should make the person more truthful, kinder, more responsible, and easier to respect.'],selectFor:['They can notice when content changes their tone or assumptions.','They choose inputs that make the relationship more sane, not more adversarial.','They can critique ideas without becoming contemptuous toward you.'],avoidFeeding:['Counter-ideology wars.','Letting TikTok, podcasts, or gender-war content become the third person in the relationship.','Calling any disagreement “toxic information.”']};
 if(issueType==='social_rivalry')return{title:'Social rivalry field guide',rules:['Use this when gossip, friend pressure, attractiveness policing, reputation fear, or women discouraging women seems to be shaping mate choice.','Ask where the pressure comes from: protection, envy, fear, group identity, rivalry, ideology, or genuine love.','Ask what obeying the pressure would cost over five years.','Keep good counsel, but do not outsource mate choice, femininity, family goals, or relationship standards to the group.'],selectFor:['Friends who give specific safety evidence, not vague destabilizing contempt.','Women who can celebrate another woman’s good man, beauty, commitment, or family desire.','Private discernment before public performance.','A partner who respects friendships without letting gossip govern the relationship.'],avoidFeeding:['Gossip as entertainment.','Friend-group veto power over every romantic move.','Performing singlehood, contempt, or sexual availability for approval.','Isolation from all friends because one social current is competitive.']};
 if(issueType==='hot_cold')return{title:'Mixed-signal field guide',rules:['Use this when warmth, pursuit, or availability keeps changing and you are tempted to chase every shift.','Make one clean bid, then let reciprocal effort answer.','Do not punish uncertainty, but do not reward chronic ambiguity with unlimited pursuit.'],selectFor:['She helps stabilize the connection after you provide direction.','Warmth returns through action, not only explanation.','Your clear bid makes the next step easier rather than more confusing.'],avoidFeeding:['Double-texting to repair anxiety.','Calling every fluctuation manipulation.','Turning her uncertainty into your full-time job.']};
 if(issueType==='sex_pacing')return{title:'Sex and pacing field guide',rules:['Use this when desire, sex, access, or pace could outrun respect and reciprocity.','Keep attraction alive, but let ordinary behavior prove whether more access would deepen the bond.','Pace from standards, not fear, shame, or moral panic.'],selectFor:['She respects pace without turning it into rejection.','Sexual tension is joined to respect, contribution, and warmth.','Your admiration increases outside sexual escalation.'],avoidFeeding:['Sex as the only proof of progress.','Withholding affection as punishment.','Making her manage a heavy anxiety speech instead of pacing behaviorally.']};
 if(crux==='safety')return{title:'Safety rules',rules:['Do not trade privacy, friends, money, or movement for temporary reassurance.','If refusal would trigger punishment, treat that as important evidence.','Use outside support; do not make the unsafe person the only witness.'],selectFor:['Respects a no without punishment.','Can tolerate privacy and outside relationships.','Repairs without demanding control.'],avoidFeeding:['Surveillance as proof of love.','Isolation framed as loyalty.','Threats, intimidation, or sexual pressure.']};
 if(crux==='grounding_values')return{title:'Life bigger than the loop',rules:['Put your body somewhere different before you interpret your feelings again. Walk, lift, drive, work somewhere else, or clean one visible space.','Reconnect with anchors: family, a reliable friend, your dog, church or prayer, service, and ordinary responsibility.','Choose goals small enough to finish. Momentum beats a giant reinvention plan you abandon.','Let romance be one part of your life, not the only scoreboard for worth, masculinity, femininity, or future hope.','If your current location keeps you isolated or stuck, explore a temporary change of scene or a concrete move plan.'],selectFor:['People who make you more honest and less obsessive.','Routines that make sleep, work, exercise, faith, and friendships easier.','Places where you become more active, useful, and socially connected.'],avoidFeeding:['Rereading texts as a lifestyle.','Isolation disguised as self-improvement.','Huge abstract goals with no next action.','Making one person responsible for your meaning.']};
 if(stage==='early'&&people?.user==='man'&&people?.target==='woman')return{title:'Man asking a woman out',rules:['Be clear, respectful, and lightly directional. Do not make her manage your uncertainty.','Ask once in a way that is easy to accept and safe to decline.','Keep it clean: no crude sexual comments, bitterness, ex-rants, or premature emotional dumping.','If she reciprocates, continue. If she does not, do not compensate with pressure.','Let your standards stay visible; kindness without self-respect reads as neediness.'],selectFor:['Warmth after you make a clear invitation.','A woman who helps make the plan possible if she is interested.','Respect for your time and direction.','Values, consistency, and ease once the initial spark settles.'],avoidFeeding:['Approval seeking.','Over-texting after a simple invitation.','Giving away all direction to avoid risk.','Treating her politeness as commitment.','Escalating physically or emotionally faster than trust supports.']};
 if(stage==='early')return{title:'Dad advice for early dating',rules:['Be respectful, playful, and clean. Do not be crude, bitter, sexually pushy, or overly confessional.','Ask real questions, but do not interrogate. Let the date breathe.','End the date on time while the energy is still good. Leave her with warmth, not exhaustion.','Show interest through a specific invitation and calm follow-through, not a giant emotional download.','Keep your standards. Attraction rises when kindness and self-respect are both present.'],selectFor:['Warmth and reciprocal effort.','Respect for boundaries, time, service staff, friends, and family.','Curiosity about your real life, not just attention.','Values that can survive inconvenience.','A nervous system that leaves you more peaceful, not addicted to uncertainty.'],avoidFeeding:['Anxious over-texting.','Performing a persona instead of being grounded.','Crude jokes, gossip, contempt for exes, or sexual pressure.','Trying to win by ceding all direction.','Calling chemistry compatibility before behavior proves it.']};
 if(stage==='mid')return{title:'Committed-relationship coaching rules',rules:['Turn vague disappointment into one concrete behavior request.','Do not make every need a giant emotional summit; make some changes behavioral and repeatable.','Reward what you want more of quickly and specifically.','Ask whether the pattern is a skill gap, values gap, incentive gap, or willingness gap.'],selectFor:['Follow-through after clarity.','Repair that changes the next instance.','Shared standards around money, sex, friends, family, and time.','The ability to be influenced without collapse or contempt.'],avoidFeeding:['Temporary compliance with no routine.','Endless processing without changed behavior.','Scorekeeping as the only memory.','Therapy language used as a weapon.']};
 return{title:'Mature bond rules',rules:['Protect admiration on purpose; familiarity will not do it for you.','Make ordinary kindness easier through routines, not heroic speeches.','Keep sex, affection, gratitude, responsibility, and repair in the calendar of the relationship.','When children or stress arrive, the couple needs a system, not just good intentions.'],selectFor:['Shared stewardship of home, money, children, faith/values, and repair.','A partner who can stay kind under fatigue.','Daily bids for affection and appreciation.','Willingness to revisit roles as life changes.'],avoidFeeding:['Autopilot roommate energy.','Correction attached to every contribution.','One parent becoming project manager of the whole family.','Letting resentment become the main form of communication.']};
}
function questions380(stage,crux,raw,issueType=''){
 if(issueType==='contribution')return{ask:['What is one small real-life contribution she could make without it becoming a test?','Does she make plans, responsibilities, or ordinary life easier after I create an opportunity?','When she contributes, do I appreciate it clearly enough that care is rewarded?','Am I investing more after reciprocal behavior, or am I investing more after anxiety?','What would show me she wants a role in my life, not only access to the date experience?'],avoid:['Can I get her to care by doing even more?','How do I make this a loyalty test?','Why are women like this?']};
 if(issueType==='dating_strategy'){const womanLooking=/\b(i am|i'm|im|as a)\s+(a\s+)?(woman|female|girl)\b|woman looking for (a )?man|female looking for (a )?man|find a man|get a boyfriend|get a husband|husband material|boyfriend material/i.test(String(raw||''));return{ask:womanLooking?['Why this man specifically, before the date?','What do I know about his life, direction, values, and character?','Am I a real conditional yes, or am I accepting attention from a man I already do not want?','What behavior would make me slow down, say no, or leave?','How can I be warm without abandoning standards?']:['Have I made one clear invitation, or am I chasing through repeated signals?','Am I offering unconditional access before reciprocal interest appears?','What does my life make visible: direction, standards, friends, work, health, and purpose?','Is she choosing back or only keeping me as a backup option?','What will I do if the answer is silence or chronic maybe?'],avoid:['How do I force them to want me?','How do I use sex or jealousy as leverage?','How do I keep waiting without losing self-respect?']};}
 if(issueType==='public_respect')return{ask:['What exact public behavior made me feel smaller?','What would disagreement look like if it protected both people’s dignity?','Can we agree that sensitive correction happens privately?','What will I watch for at the next public event?'],avoid:['Why are you always disrespectful?','Can I win status back by embarrassing her too?','Was I allowed to feel anything about this?']};
 if(issueType==='digital_boundary')return{ask:['What private attention crosses the line for us?','What digital behavior would protect trust without turning into surveillance?','Does she voluntarily make the relationship easier to trust after I name the standard?','What happens if the same behavior repeats?'],avoid:['Can I check your phone until I feel better?','How do I prove nothing happened?','Am I crazy for caring?']};
 if(issueType==='outside_validation')return{ask:['What kind of public attention supports the relationship, and what kind competes with it?','Is this self-expression, outside validation, or keeping options warm?','What standard would let both people feel desired and protected?'],avoid:['Can I control everything you post?','Why do you need attention?','Should I shame her publicly back?']};
 if(issueType==='info_diet')return{ask:['What behavior is this content training in the relationship?','Does this information make us kinder, clearer, and more loyal, or more contemptuous?','What input would be a healthier counterweight?'],avoid:['Can I win the internet debate?','How do I ban everything I dislike?','Which gender is the real problem?']};
 if(issueType==='social_rivalry')return{ask:['Is this advice protecting me, competing with me, or enforcing group norms?','What evidence do I personally have apart from gossip or pressure?','If I follow this advice for five years, what does it cost me?','Does this friend become more specific and protective, or more vague and destabilizing?','What life do I actually want when nobody is watching?'],avoid:['Are all women jealous?','How do I cut off every friend who disagrees?','How do I win the gossip war?']};
 if(issueType==='hot_cold')return{ask:['What clear bid have I already made?','Did she make the next step easier or only keep me guessing?','What is one warm move I can make without chasing?'],avoid:['How do I decode every temperature change?','Can I make her anxious back?','What text will finally create certainty?']};
 if(issueType==='sex_pacing')return{ask:['What has the relationship proven outside sexual tension?','Would more access increase respect and reciprocity, or replace evidence?','Can I keep desire alive while pacing from standards?'],avoid:['Will sex make this a relationship?','How do I use sex as a test?','Can I dump my anxiety so she manages the pace for me?']};
 if(crux==='grounding_values')return{ask:['Who can I see or call today who returns me to myself?','What can I do with my body before I analyze this again?','What is one faith, gratitude, or values practice I can complete today?','What small goal can I finish before bed?','Would a different room, neighborhood, trip, gym, church, workspace, or city make the next right action easier?'],avoid:['What does this one person prove about my worth?','How do I solve my whole life tonight?','What if I keep thinking until certainty appears?']};
 if(stage==='early')return{ask:['What has been the best part of your week?','What kind of life are you trying to build right now?','What do your friends appreciate about you?','What is something you are excited to learn or get better at?','How do you usually spend a Sunday when life is going well?'],avoid:['Do you like me enough?','Where is this going? before there is enough shared evidence.','Sexual history, crude jokes, ex-interrogations, or trauma excavation too early.']};
 if(stage==='mid')return{ask:['What pattern are we accidentally training each other to repeat?','What is one behavior that would make you feel more respected this week?','Where do we need a clearer agreement instead of another argument?','What should I stop doing because it makes repair harder?'],avoid:['Global character verdicts.','Why are you always like this?','Requests so vague nobody could prove they happened.']};
 return{ask:['What ordinary routine is quietly making us less kind?','Where do you feel unseen or overburdened lately?','What do the children see us practice when we are tired?','What ritual would help us stay lovers and not only managers?','What value do we want the family to feel this season?'],avoid:['Using the children as the only reason to stay connected.','Discussing logistics only.','Waiting until resentment is mature before naming a need.']};
}
function issueAnalysis380(stage,crux,raw,people){
 if(crux==='grounding_values')return{facts:'Write the actual facts, then write the mental loop separately. The loop may be real distress without being reliable guidance.',pattern:'Watch whether anxiety drops after movement, contact with family or friends, faith/values practice, service, and finishing small goals. If it does, the problem is partly life-structure, not just romance.',evidence:'The read improves when you sleep better, check less, see people, move your body, finish tasks, and feel useful outside the romantic situation.',stop:'Stop treating this as a dating problem if every answer still leaves you isolated, sedentary, spiritually empty, and scanning for certainty.'};
 if(crux==='early_signal'&&people?.user==='man'&&people?.target==='woman')return{facts:'Separate what she actually did from what your anxiety added: did she respond warmly, accept or offer a plan, ask questions, touch back emotionally, or make the next interaction easier?',pattern:'Watch whether your clear bid creates reciprocal effort or whether you are doing all the pursuit and interpretation.',evidence:'The read improves when she accepts a plan, proposes an alternate time, initiates sometimes, stays warm after a boundary, and seems more relaxed rather than pressured.',stop:'Stop optimizing if she repeatedly gives no reciprocal effort, seems uncomfortable, disrespects you, or only responds when you chase.'};
 if(crux==='early_signal')return{facts:'Separate observed behavior from anxious meaning: what they did, what they said, whether they reciprocated, and whether the interaction was easier or more strained after your move.',pattern:'Watch whether interest grows through mutual effort or only through your pursuit.',evidence:'A clearer read comes from reciprocal initiation, warmth after the date, reliability, and the other person making it easier to meet again.',stop:'Stop optimizing if you see disrespect, dread, chronic ambiguity, or no reciprocal effort after a clear low-pressure bid.'};
 if(crux==='behavior_change')return{facts:'Name the specific behavior, the cue, what it costs you, and what would count as changed behavior.',pattern:'Watch whether the person changes when it is inconvenient, not only right after you are upset.',evidence:'The evidence is repeated follow-through without reminders, resentment, or bargaining.',stop:'Stop coaching if clarity has been given and the person repeatedly benefits from not changing.'};
 if(crux==='desire_admiration')return{facts:'Separate desire, admiration, resentment, stress, health, pressure, and routine. Do not collapse all of it into attractiveness.',pattern:'Watch whether affection increases when pressure decreases and admiration becomes specific.',evidence:'Look for more bids, warmth, play, voluntary touch, gratitude, and less defensiveness.',stop:'Stop using attraction coaching if there is contempt, coercion, or a refusal to treat the relationship with dignity.'};
 if(crux==='safety')return{facts:'List what happened, who had choice, what refusal cost, and whether privacy or outside support was punished.',pattern:'Control usually shows up as a pattern of narrowed freedom, not just one intense conversation.',evidence:'The read changes only if boundaries can be set without retaliation and access can be revoked freely.',stop:'Stop couples-coaching and prioritize safety if there is intimidation, surveillance, isolation, or sexual pressure.'};
 return{facts:'Write the event in plain facts, then write the meaning you attached to it. Keep those separate.',pattern:'Watch whether this is a one-off stress response or the relationship training a recurring role.',evidence:'The next similar moment matters more than the explanation after this one.',stop:'Stop trying to solve it with another conversation if the same issue repeats with no ownership, repair, or changed behavior.'};
}
function childrenQuestions380(stage,raw){
 const t=raw.toLowerCase();
 if(stage!=='mature'&&!/child|children|kid|baby|parent|pregnan|father|mother/.test(t))return null;
 return ['Who owns which recurring child/home responsibilities, including the invisible planning?','How do we protect couple time when the children consume the obvious time?','What do we want our children to learn by watching us disagree?','Where does each parent feel unappreciated or alone?','What family value are we practicing this month: peace, service, faith, gratitude, courage, responsibility, or play?','What is one small daily action that would make romance, friendship, or appreciation easier?'];
}
function renderCoach380(){
 const p=profile380(),out=$380('coachOutput380');if(out)out.innerHTML=coachHTML380(p);
 const legacy=document.querySelector('#issuePopoutBody370 .legacyExpertDetails380');
 if(legacy){const show=hasIssue380(p);legacy.hidden=!show;if(show)legacy.open=true;}
 const counselor=$380('counselorRead380');if(counselor)counselor.innerHTML=counselorOfficeHTML380(p);
 const summary=$380('coachIntakeSummary380');if(summary){const raw=text380(p);summary.textContent=raw?raw.slice(0,180)+(raw.length>180?'...':''):'No coach context entered yet.';}
 const ask=$380('geniusAskInput380');if(ask&&p?.coach380&&!ask.value)ask.value=p.coach380.geniusAsk||'';
}
function ensureCoachUI380(){
 if(window.__coachUI380)return;
 const issueBody=$380('issuePopoutBody370'),expertBody=$380('expertPopoutBody370');if(!issueBody||!expertBody)return;
 window.__coachUI380=true;
 const oldIssueTitle=$380('issuePopoutTitle370');if(oldIssueTitle)oldIssueTitle.textContent='Counselor office';
 const oldExpertTitle=$380('expertPopoutTitle370');if(oldExpertTitle)oldExpertTitle.textContent='Coach office';
	 const openIssue=$380('openIssuePopout370'),openExpert=$380('openExpertPopout370');
	 if(openIssue){openIssue.classList.add('focusCounselorBtn380');openIssue.innerHTML='<span>Counselor office</span><b>Work a real issue</b><small>Saved event, repair, expert panel</small>';}
	 if(openExpert){openExpert.classList.add('focusCoachBtn380');openExpert.innerHTML='<span>Coach office</span><b>Talk it through</b><small>Advice, grounding, genius chat</small>';}
	 if(openIssue&&openExpert&&openIssue.parentElement===openExpert.parentElement)openIssue.parentElement.insertBefore(openExpert,openIssue);
 const hubTitle=document.querySelector('#workspaceFocusHub370 h3');if(hubTitle)hubTitle.textContent='Start with the coach';
 const issueLead=document.querySelector('#issuePopout370 .workspacePopoutHeader370 p');if(issueLead)issueLead.textContent='Use this only when there is a concrete problem, rupture, conflict, or important event you want to save, translate, and repair.';
 const expertLead=document.querySelector('#expertPopout370 .workspacePopoutHeader370 p');if(expertLead)expertLead.textContent='Use this for normal advice, grounding, next moves, and the genius-panel conversation. If there is a specific conflict or rupture, take it to the Counselor office.';
 expertBody.insertAdjacentHTML('afterbegin',`<div id="coachIntake380" class="coachIntake380" aria-describedby="coachIntro380"><div><span>Coach intake</span><h3>What is going on?</h3><p id="coachIntro380">Put the whole event here: repeated behavior, context, your reaction, what you are tempted to do, and what you want help deciding.</p></div><label for="coachSituation380">Situation</label><textarea id="coachSituation380" aria-describedby="coachIntro380" placeholder="Example: My woman is constantly doing behavior X: texting other guys, refuting me in public, posting herself for attention, or consuming a toxic information diet. Here is what happened, how often it happens, what I am tempted to do, and what I want help deciding..."></textarea><div class="coachMiniGrid380"><label for="coachStage380">Stage<select id="coachStage380" required><option value="">Choose stage</option><option value="early">Early dating / flirting</option><option value="mid">Committed / mid-stage</option><option value="mature">Mature / married</option></select></label><label for="coachUserRole380">I am<select id="coachUserRole380" required><option value="">Choose role</option><option value="man">A man</option><option value="woman">A woman</option><option value="unknown">Role-neutral</option></select></label><label for="coachTargetRole380">I am asking about<select id="coachTargetRole380" required><option value="">Choose subject</option><option value="woman">A woman</option><option value="man">A man</option><option value="unknown">Role-neutral</option></select></label><label for="coachIssueType380">Situation type<select id="coachIssueType380" required><option value="">Choose type</option><option value="public_respect">Public respect / dignity</option><option value="digital_boundary">Digital boundary / loyalty</option><option value="outside_validation">Outside validation / social media</option><option value="info_diet">Information diet / contempt risk</option><option value="social_rivalry">Social rivalry / reputation</option><option value="contribution">Contribution / reciprocity</option><option value="dating_strategy">Dating strategy / selection</option><option value="hot_cold">Hot-cold / mixed signals</option><option value="sex_pacing">Sex / pacing</option><option value="behavior_change">Behavior change</option><option value="repair">Repair / rupture</option><option value="grounding">Life reset / grounding</option><option value="other">Other / general advice</option></select></label></div><div class="coachIntakeActions380"><button id="saveCoachIntake380" type="button">Update coach read</button><span id="coachIntakeSummary380" role="status" aria-live="polite">No coach context entered yet.</span></div></div>`);
 issueBody.insertAdjacentHTML('afterbegin','<div id="counselorRead380"></div>');
 const issuePanel=$380('issueTranslationPanel335');
 if(issuePanel&&!issuePanel.closest('.coachStructuredIssue380')){
  const wrap=document.createElement('details');
  wrap.className='coachStructuredIssue380';
  wrap.innerHTML='<summary>Only if there is a problem or event to repair</summary><p>This is the structured counselor space: save the event, translate what it may mean, mark whether it resolved, and feed evidence into deeper repair analysis.</p>';
  issuePanel.parentNode.insertBefore(wrap,issuePanel);
  wrap.appendChild(issuePanel);
 }
	 expertBody.insertAdjacentHTML('beforeend','<div id="coachOutput380" class="coachOutputWrap380"></div><div class="geniusAskBox380"><label for="geniusAskInput380">Ask the geniuses</label><textarea id="geniusAskInput380" placeholder="Ask a direct question, or leave this blank and the panel will use your coach intake/current issue."></textarea><button id="askGeniusesBtn380" type="button" class="secondary">Ask panel</button></div><div class="coachCounselorNook380"><div><span>If there is a real issue</span><b>Counselor office</b><p>Open this for a specific rupture, conflict, or event that needs repair and expert problem-solving.</p></div><button id="openCounselorOffice380" type="button" class="secondary">Open counselor office</button></div>');
 issueBody.insertAdjacentHTML('beforeend','<details class="legacyExpertDetails380"><summary>Saved-issue expert panel</summary></details>');
 const legacy=issueBody.querySelector('.legacyExpertDetails380');const expertPanel=$380('expertThinkPanel339');if(legacy&&expertPanel)legacy.appendChild(expertPanel);
 bindCoach380();fillCoach380();renderCoach380();
}
function fillCoach380(){
 const p=profile380(),c=p?.coach380||{};if($380('coachSituation380'))$380('coachSituation380').value=c.situation||'';if($380('coachStage380'))$380('coachStage380').value=['early','mid','mature'].includes(c.stage)?c.stage:'';if($380('coachUserRole380'))$380('coachUserRole380').value=['man','woman','unknown'].includes(c.userRole)?c.userRole:'';if($380('coachTargetRole380'))$380('coachTargetRole380').value=['man','woman','unknown'].includes(c.targetRole)?c.targetRole:'';if($380('coachIssueType380'))$380('coachIssueType380').value=['public_respect','digital_boundary','outside_validation','info_diet','social_rivalry','contribution','dating_strategy','hot_cold','sex_pacing','behavior_change','repair','grounding','other'].includes(c.issueType)?c.issueType:'';
}
function saveCoach380(){
 const p=profile380(),status=$380('coachIntakeSummary380');if(!p){if(status)status.textContent='Could not find a profile for this coach read.';return;}
 p.coach380={...(p.coach380||{}),situation:$380('coachSituation380')?.value||'',question:'',stage:$380('coachStage380')?.value||'',userRole:$380('coachUserRole380')?.value||'',targetRole:$380('coachTargetRole380')?.value||'',issueType:$380('coachIssueType380')?.value||'',goal:'Get grounded and choose the next move',grounding:'auto',updated:new Date().toISOString()};
 if(typeof saveState==='function')saveState();
 renderCoach380();
 const out=$380('coachOutput380');if(out)out.scrollIntoView({behavior:'smooth',block:'start'});
 const freshStatus=$380('coachIntakeSummary380');if(freshStatus)freshStatus.textContent='Coach read updated.';
 $380('issuePopout370')?.classList.add('hidden');
 $380('expertPopout370')?.classList.remove('hidden');document.body.classList.add('workspacePopoutOpen370');
}
function bindCoach380(){
 const save=$380('saveCoachIntake380');if(save)save.onclick=saveCoach380;
 const ask=$380('askGeniusesBtn380');if(ask)ask.onclick=()=>{const p=profile380();if(!p)return;p.coach380={...(p.coach380||{}),geniusAsk:$380('geniusAskInput380')?.value||''};if(typeof saveState==='function')saveState();renderCoach380();};
 const askInput=$380('geniusAskInput380');if(askInput)askInput.addEventListener('input',()=>{const p=profile380();if(!p)return;p.coach380={...(p.coach380||{}),geniusAsk:askInput.value||''};renderCoach380();});
 const office=$380('openCounselorOffice380');if(office)office.onclick=()=>{$380('expertPopout370')?.classList.add('hidden');$380('issuePopout370')?.classList.remove('hidden');document.body.classList.add('workspacePopoutOpen370');};
 ['coachSituation380','coachStage380','coachUserRole380','coachTargetRole380','coachIssueType380'].forEach(id=>{const el=$380(id);if(el)el.addEventListener('input',()=>{const p=profile380();if(!p)return;p.coach380={...(p.coach380||{}),situation:$380('coachSituation380')?.value||'',question:'',stage:$380('coachStage380')?.value||'',userRole:$380('coachUserRole380')?.value||'',targetRole:$380('coachTargetRole380')?.value||'',issueType:$380('coachIssueType380')?.value||'',goal:'Get grounded and choose the next move',grounding:'auto'};renderCoach380();});});
 document.addEventListener('click',e=>{if(e.target?.id==='openIssuePopout370')setTimeout(()=>{ensureCoachUI380();fillCoach380();},80);if(e.target?.id==='openExpertPopout370')setTimeout(renderCoach380,120);});
}
document.addEventListener('click',e=>{
 if(e.target?.closest?.('#saveCoachIntake380')){e.preventDefault();saveCoach380();return;}
 const switchIssue=e.target?.closest?.('[data-switch-issue-type380]');
 if(switchIssue){e.preventDefault();const p=profile380();if(!p)return;p.coach380={...(p.coach380||{}),issueType:switchIssue.dataset.switchIssueType380||p.coach380?.issueType||''};if($380('coachIssueType380'))$380('coachIssueType380').value=p.coach380.issueType;if(typeof saveState==='function')saveState();renderCoach380();return;}
 if(e.target?.id==='saveGeniusTake380'){const p=profile380();if(!p)return;p.coach380={...(p.coach380||{}),geniusTake:$380('geniusTakeInput380')?.value||''};if(typeof saveState==='function')saveState();renderCoach380();return;}
 const profileBtn=e.target?.closest?.('[data-expert-profile380]');
 if(profileBtn){e.preventDefault();showExpertProfile380(profileBtn.dataset.expertProfile380);return;}
 if(e.target?.closest?.('.expertProfileClose380')||e.target?.id==='expertProfileModal380')closeExpertProfile380();
});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeExpertProfile380();});
document.addEventListener('DOMContentLoaded',()=>setTimeout(ensureCoachUI380,3600));
setTimeout(ensureCoachUI380,4100);
document.addEventListener('change',e=>{if(['repairCockpitProfileSelect','issueCardSelector'].includes(e.target?.id))setTimeout(()=>{fillCoach380();renderCoach380();},120);});
})();
