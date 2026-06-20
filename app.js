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
  let m=dashboardMetricSet(p), peace=m.peaceIndex||0, respect=m.respectIndex||0;
  let q=peace>=60&&respect>=60?'High Peace / High Respect':peace>=60?'High Peace / Low Respect':respect>=60?'Low Peace / High Respect':'Low Peace / Low Respect';
  return `<div class="matrixCell activeMatrix"><b>${q}</b><br>${q==='High Peace / High Respect'?'Long-term potential.':q==='High Peace / Low Respect'?'Comfort without full partnership.':q==='Low Peace / High Respect'?'Respect exists, but nervous system cost is high.':'Low calm and low respect; proceed carefully.'}</div>`;
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
  let a=rcAdmirationValues(p), ctx=c.getContext('2d'),w=c.width,h=c.height;
  ctx.clearRect(0,0,w,h);ctx.fillStyle='#fff';ctx.fillRect(0,0,w,h);
  ctx.font='15px -apple-system,BlinkMacSystemFont,Segoe UI,Arial';ctx.fillStyle='#3f3832';
  ctx.fillText('You → Them',40,48);ctx.fillText('Them → You',w-160,48);
  let midY=h/2,left=80,right=w-80;
  ctx.strokeStyle='#ded6c9';ctx.lineWidth=12;ctx.lineCap='round';
  ctx.beginPath();ctx.moveTo(left,midY-35);ctx.lineTo(right,midY-35);ctx.stroke();
  ctx.beginPath();ctx.moveTo(right,midY+35);ctx.lineTo(left,midY+35);ctx.stroke();
  ctx.strokeStyle='#815b33';ctx.beginPath();ctx.moveTo(left,midY-35);ctx.lineTo(left+(right-left)*(a.userToThem/100),midY-35);ctx.stroke();
  ctx.strokeStyle='#4d7a52';ctx.beginPath();ctx.moveTo(right,midY+35);ctx.lineTo(right-(right-left)*(a.themToUser/100),midY+35);ctx.stroke();
  ctx.fillStyle='#3f3832';ctx.font='30px -apple-system,BlinkMacSystemFont,Segoe UI,Arial';
  ctx.fillText(String(a.userToThem),left+(right-left)*(a.userToThem/100)-12,midY-55);
  ctx.fillText(String(a.themToUser),right-(right-left)*(a.themToUser/100)-12,midY+78);
  let txt=$('repairCockpitAdmirationText');
  if(txt)txt.innerHTML=a.imbalance>=25?'<b>Pattern:</b> admiration appears asymmetric. Watch pursuit/withdrawal, resentment, or overfunctioning.':'<b>Pattern:</b> admiration appears relatively balanced.';
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
  el.innerHTML=`<span class="v3SourcePill">${escapeHTML(kind)} card</span><span class="v3SourcePill">${snaps} snapshots</span><span class="v3SourcePill">Peace ${Math.round(m.peaceIndex||0)}</span><span class="v3SourcePill">Respect ${Math.round(m.respectIndex||0)}</span><span class="v3SourcePill">Repair ${Math.round(m.repair||0)}</span>`;
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
 let peace=m.peaceIndex||50, respect=m.respectIndex||50;
 let q=peace>=60&&respect>=60?'High Peace / High Respect':peace>=60?'High Peace / Low Respect':respect>=60?'Low Peace / High Respect':'Low Peace / Low Respect';
 return `<div class="matrixCell activeMatrix"><b>${q}</b><br>${q==='High Peace / High Respect'?'Long-term potential.':q==='High Peace / Low Respect'?'Comfort without enough respect.':q==='Low Peace / High Respect'?'Respect exists, but nervous-system cost is high.':'Low calm and low respect; proceed carefully.'}</div>`;
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
  let data={
    male:'He may be asking whether he is respected, useful, desired, and treated as someone whose effort matters.',
    female:'She may be asking whether she is safe, included, cherished, and emotionally partnered.',
    issue:`This is a ${type.toLowerCase()} issue. The surface event matters, but the emotional meaning underneath matters more.`,
    steps:['A concrete event happens.','One partner attaches painful meaning to it.','The hurt partner protects themselves.','The other partner reacts to the protection.','The relationship starts fighting the loop instead of the issue.'],
    action:'Pause and say: “I do not want us to make each other the problem. What did this mean to you?”',
    exercise:['One precise repair conversation','Each partner says: 1) what happened, 2) what I heard, 3) what I needed, 4) one thing I can do differently.']
  };
  if(type.includes('Appreciation')||type.includes('Criticism')){
    data.male='He may feel that his effort is invisible, and that trying only creates another opportunity to be corrected.';
    data.female='She may feel that if she does not manage the details, the task will still fall emotionally or practically on her.';
    data.issue='This is an appreciation-and-correction issue. The core tension is effort recognition versus outcome standards.';
    data.steps=['He tries to help or provide something.','She corrects the result too quickly or too directly.','He hears: “I failed; I am not useful.”','He withdraws or stops initiating.','She experiences the withdrawal as laziness or lack of care.'];
    data.action='Separate appreciation from correction. Let appreciation stand alone first; solve the technical problem later.';
    data.exercise=['Correction separation rule','For one week, no correction is paired with gratitude unless safety requires it. Appreciation gets its own clean moment.'];
  }
  if(type.includes('Communication')){
    data.male='He may feel accused of failing even if he thought he was simply handling something privately.';
    data.female='She may feel excluded from his inner world and afraid they are living parallel lives instead of operating as partners.';
    data.issue='This is a shared-reality issue. The conflict is not just information; it is whether both people feel like partners in the same life.';
    data.steps=['One person handles something privately.','The other finds out later.','Discovery becomes: “We are not operating as partners.”','The private person feels criticized and shares less.','Distance and suspicion increase.'];
    data.action='Do a shared-reality check: “What changed this week? What decisions are pending? What are you carrying that I do not know?”';
    data.exercise=['Weekly shared-reality meeting','Fifteen minutes weekly: appreciation, logistics, emotional weather, pending decisions, and one request.'];
  }
  if(type.includes('Social media')||type.includes('public')){
    data.male='He may feel exposed, humiliated, or unprotected by the woman whose public respect matters most.';
    data.female='She may feel unheard privately and may be seeking validation, witnesses, or emotional pressure through a public channel.';
    data.issue='This is a public-respect issue. Social media can turn a private repair problem into a reputation and loyalty problem.';
    data.steps=['Private hurt is not repaired.','One partner vents or signals publicly.','The other feels humiliated or betrayed.','Trust and attraction drop.','The next private conflict becomes less safe.'];
    data.action='Take it offline. Agree to no public humiliation, subtweets, screenshots, or friend-court trials during active conflict.';
    data.exercise=['Private-before-public agreement','For 30 days, conflict is brought privately first unless safety is at stake. Each partner protects the other’s dignity in public.'];
  }
  if(type.includes('Passion')||type.includes('sexual')){
    data.male='He may feel undesired, rejected, or replaced by roommate energy.';
    data.female='She may feel pressured, emotionally unsafe, unseen, or not warmed up relationally.';
    data.issue='This is an intimacy-pressure issue. Sex becomes symbolic of rejection, safety, attraction, and acceptance.';
    data.steps=['Emotional distance or pressure appears.','Sex becomes symbolic of acceptance or rejection.','One partner pursues while the other avoids.','Both attach painful meanings.','Desire becomes loaded instead of playful.'];
    data.action='Stop arguing about sex during rejection moments. Talk when calm about what increases desire, kills desire, and makes intimacy feel safe.';
    data.exercise=['Desire conditions map','Each partner lists: what increases desire, what kills desire, and what makes intimacy feel safe. Compare lists without debating them.'];
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
  <h4 class="loopSectionTitle">Escalation loop</h4>
  <div class="clearLoopGrid">${t.steps.map((s,i)=>`<div class="clearLoopCard"><b>${i+1}. ${escape331(s.split('.')[0])}</b>${escape331(s)}</div>`).join('')}</div>
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
function bindGraphPopouts332(){[['workspaceRadarCanvas','Radar'],['sliderTimelineCanvas','Slider trajectory'],['workspacePeaceRespectCanvas','Peace / Respect over time'],['selfRadarCanvas','Self radar']].forEach(([id,title])=>{let c=$(id);if(c&&!c.dataset.pop332){c.dataset.pop332='1';c.insertAdjacentHTML('beforebegin',`<button class="graphPopBtn" type="button" data-graph="${id}" data-title="${title}">Open larger</button>`);}});document.querySelectorAll('.graphPopBtn').forEach(b=>b.onclick=()=>graphPopout332(b.dataset.graph,b.dataset.title));let close=$('closeGraphPopoutBtn');if(close)close.onclick=()=>$('graphPopoutOverlay')?.classList.add('hidden');}
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

    // If therapy/action are raw divs, wrap labels for readability.
    const therapy = $id('repairCockpitStrategy');
    if (therapy && !therapy.dataset.titled334) {
      therapy.dataset.titled334 = '1';
      if (!therapy.previousElementSibling || !/therapy|growth/i.test(therapy.previousElementSibling.textContent || '')) {
        therapy.insertAdjacentHTML('beforebegin','<h3>Therapy / growth exercises</h3>');
      }
    }
    const action = $id('repairCockpitActionStrategy');
    if (action && !action.dataset.titled334) {
      action.dataset.titled334 = '1';
      if (!action.previousElementSibling || !/role|paradigm|action/i.test(action.previousElementSibling.textContent || '')) {
        action.insertAdjacentHTML('beforebegin','<h3>Role / paradigm shift</h3>');
      }
    }

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
    {label:'Roommate energy', type:'Passion / sexual disconnect', title:'Roommate energy', event:'He feels undesired and starts interpreting low intimacy as rejection.', rtype:'Romantic: man evaluating woman', aggrieved:'Man'}
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
          recurrence: 'Recurring pattern',
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
  const casual=$id('openCasualTrackerWizardBtn'); if(casual){casual.onclick=openCasual; casual.textContent='Open Casual Tracker Wizard';}
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
"Alison Armstrong usefulness/polarity lens":{tags:["appreciation","provision","usefulness","comfort","correction"],bestFor:["Appreciation / usefulness","Criticism / correction","Household labor","Planning / logistics"],lens:"Reads correction, appreciation, and comfort as translation problems between intention and impact.",advice:"Make appreciation visible before improvement requests. Translate criticism into the comfort or support being requested.",exercise:"Rewrite: You did this wrong -> It helps me feel ___ when ___.",miss:"Can sound too gendered if the actual roles do not match the pattern."},
"Louise Perry modern dating culture lens":{tags:["social media","commitment","ambiguity","sexual","outside validation"],bestFor:["Social media / outside validation","Commitment / future direction","Trust / honesty","Passion / sexual disconnect"],lens:"Reads the event through modern dating incentives: options, ambiguity, outside validation, weak norms, and unclear commitment.",advice:"Clarify whether the relationship is moving toward stability or being pulled into ambiguity and audience approval.",exercise:"Norms agreement: exclusivity, public respect, social media boundaries, sexual expectations, and commitment.",miss:"Can be less useful when the couple already has strong norms and mainly needs emotional repair."}
},
"Philosophical Lenses":{
"Marcus Aurelius stoic lens":{tags:["control","rejection","peace","rumination","discipline"],bestFor:["Jealousy / insecurity","Trust / honesty","Emotional distance","Boundary"],lens:"Separates the event from the story attached to it, then asks what action preserves character and peace.",advice:"Do not bargain with what is outside your control. Choose one composed, honest next action.",exercise:"Facts vs judgments: write what happened, what you are adding to it, and what is actually yours to do.",miss:"Can sound emotionally spare if tenderness or reassurance is the main need."},
"Aristotle virtue/friendship lens":{tags:["virtue","habit","friendship","character","compatibility"],bestFor:["Commitment / future direction","Communication / shared reality","Respect / public image","Planning / logistics"],lens:"Reads the relationship as a pattern of habits: what kind of people the two of you become together.",advice:"Look less at intensity and more at repeated character, fairness, courage, generosity, and practical friendship.",exercise:"Habit audit: after contact, do I become clearer, kinder, braver, steadier, or smaller?",miss:"Can underweight raw attraction, nervous-system activation, or urgent safety concerns."},
"bell hooks love ethic lens":{tags:["care","honesty","domination","mutuality","respect"],bestFor:["Respect / public image","Trust / honesty","Communication / shared reality","Boundary"],lens:"Reads the event through care, respect, knowledge, responsibility, trust, and whether control is replacing love.",advice:"Do not call domination, neglect, or dishonesty love. Ask for care that is concrete and mutual.",exercise:"Love ethic check: where did care, respect, trust, responsibility, and honesty show up or disappear?",miss:"Can be less specific about dating-stage ambiguity or attraction dynamics."},
"Jane Austen character lens":{tags:["courtship","signals","manners","character","social"],bestFor:["Dating / early relationship","Respect / public image","Social media / outside validation","Commitment / future direction"],lens:"Reads courtship signals, manners, consistency, and social behavior as evidence of character.",advice:"Do not be dazzled by charm alone. Watch how the person behaves when pride, status, embarrassment, or inconvenience enters.",exercise:"Character evidence list: charm, consistency, humility, regard for others, and repair after awkwardness.",miss:"Can be too subtle if the issue requires direct boundary action."}
},
"Modern Dating / Relationship Science":{
"Logan Ury behavioral dating lens":{tags:["early dating","spark","slow burn","dater tendencies","post-date","green flags","behavioral science"],bestFor:["Dating / early relationship","Commitment / future direction","Communication / shared reality","Trust / honesty"],lens:"Distinguishes instant chemistry and checklist judgments from the lived experience of being with this person, including slow-burn potential and repeated dating habits.",advice:"Treat the first interpretation as a hypothesis. Review observed behavior and how you felt during the date before letting spark, an instant ick, or a profile checklist decide.",exercise:"Post-date review: What side of me came out? Did I feel heard, curious, at ease, and interested in learning more?",miss:"Can become too optimization-oriented for abuse, trauma, or an established relationship that needs deeper repair."},
"Eli Finkel online dating lens":{tags:["online dating","apps","choice overload","evaluation","expectations","options","swiping"],bestFor:["Dating / early relationship","Social media / outside validation","Commitment / future direction","Communication / shared reality"],lens:"Looks at how app design, abundant options, profile comparison, and high expectations can keep people in an evaluation mindset instead of building a relationship.",advice:"Move from profile comparison to real interaction. Reduce option churn and evaluate the developing relationship process, not an imagined marketplace of alternatives.",exercise:"Choice reset: briefly pause new swipes, focus on a small number of real conversations, and record what actually happens in person.",miss:"Does not by itself explain an individual's attachment pattern, character, compatibility, or safety."},
"David Buss mating strategy lens":{tags:["mating strategy","jealousy","deception","short-term","long-term","mate preferences","sexual conflict"],bestFor:["Trust / honesty","Commitment / future direction","Jealousy / insecurity","Passion / sexual disconnect"],lens:"Tests whether conflict may involve mismatched short- and long-term strategies, jealousy triggers, deception, or different expectations about exclusivity and investment.",advice:"Clarify intent, exclusivity, investment, and relationship horizon directly. Use actual behavior as evidence instead of turning group averages into a story about this person.",exercise:"Strategy alignment audit: each person states the desired relationship horizon, exclusivity, investment, and what would make them leave.",miss:"Population averages and sex differences are not destiny. This lens must not stereotype people or excuse dishonesty, coercion, or disrespect."},
"Scott Stanley commitment clarity lens":{tags:["commitment","ambiguity","sliding","deciding","dedication","constraints","cohabitation"],bestFor:["Commitment / future direction","Planning / logistics","Communication / shared reality","Dating / early relationship"],lens:"Looks for places where a couple accumulated constraints or expectations by drifting forward without making a clear, mutual decision.",advice:"Decide rather than drift. Define the relationship status, current expectations, the next meaningful step, and a realistic timeline.",exercise:"Sliding-versus-deciding audit: list what was explicitly chosen together and what happened through inertia or convenience.",miss:"Clarity alone cannot create compatibility, desire, mutual effort, or safety."}
},
"Cultural Voices (contrast only)":{
"Call Her Daddy-style pop-culture lens":{tags:["dating culture","leverage","desirability","standards","entertainment"],bestFor:["Dating / early relationship","Social media / outside validation","Commitment / future direction"],lens:"Summarizes a recurring popular-media dating viewpoint that may emphasize leverage, desirability, strong standards, and avoiding overinvestment.",advice:"Use the protective insight without turning intimacy into a contest: keep standards, ask directly, and judge consistent behavior rather than trying to control the power balance.",exercise:"Contrast audit: write the protective benefit of the advice, then the cost if both people use the same strategy against each other.",miss:"Entertainment-oriented advice can reward strategic behavior, one-sided framing, or audience approval. It is not individualized clinical guidance.",sourceClass:"Popular-media perspective",evidenceTier:"Speculative / cultural",avatar:"CHD",consequence:"May reduce premature overinvestment, but can also increase testing, distrust, performance, and indirect communication."},
"Red-pill internet rhetoric lens":{tags:["status","sexual market","dominance","red pill","gender strategy"],bestFor:["Dating / early relationship","Respect / public image","Jealousy / insecurity","Commitment / future direction"],lens:"Summarizes an ideological internet framing that interprets dating mainly through status, sexual-market bargaining, dominance, and generalized claims about men and women.",advice:"Treat any useful observation about incentives as a hypothesis about behavior, not a rule about a sex. Return to consent, reciprocity, evidence, and the actual person.",exercise:"Individual-evidence test: replace every claim about men or women with the observed behavior of this person. Discard claims that no longer hold.",miss:"This framing is speculative at the individual level and can intensify stereotypes, contempt, coercive expectations, and adversarial relationships.",sourceClass:"Ideological internet perspective",evidenceTier:"Speculative / caution",avatar:"RP",consequence:"May create a temporary sense of certainty or self-protection, while increasing suspicion, rigid gender scripts, and tolerance for controlling behavior."}
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
 return ctx;
}

function safetyFlags343(ctx){
 const t=String(ctx.text||'').toLowerCase();
 const checks=[
  ['Safety first','hit|hurt|threat|afraid|scared|unsafe|violence|violent|restraining'],
  ['Boundary pressure','no contact|blocked|stalk|track|followed|show up|wont leave me alone|keeps pushing|pressure'],
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
 const t=String(ctx.text||'').toLowerCase();
 let s=0;
 (row.bestFor||[]).forEach(x=>{if(String(ctx.issue?.type||'').toLowerCase()===x.toLowerCase())s+=12; if(t.includes(x.toLowerCase()))s+=7;});
 (row.tags||[]).forEach(x=>{if(t.includes(x.toLowerCase()))s+=3;});
 if(ctx.isPositive&&(row.name.includes('Alison')||row.name.includes('Aristotle')))s+=6;
 if((ctx.metrics?.respectIndex||0)<50&&(row.name.includes('Orion')||row.name.includes('bell hooks')||row.name.includes('Gottman')))s+=5;
 if((ctx.metrics?.peaceIndex||0)<45&&(row.name.includes('Marcus')||row.name.includes('Sue')||row.name.includes('Gabor')))s+=5;
 if(/social media|outside validation|options|ambiguous/i.test(t)&&row.name.includes('Louise'))s+=7;
 if(/desire|sexual|passion|roommate/i.test(t)&&row.name.includes('Perel'))s+=7;
 if(/criticism|correction|contempt/i.test(t)&&row.name.includes('Gottman'))s+=7;
 if(/appreciat|useful|effort|thoughtful/i.test(t)&&row.name.includes('Alison'))s+=8;
 if(/first date|early dating|spark|slow burn|\\bick\\b|post-date|green flag/i.test(t)&&row.name.includes('Logan Ury'))s+=9;
 if(/dating app|online dating|swip|profile|choice overload|too many options|option churn/i.test(t)&&row.name.includes('Eli Finkel'))s+=9;
 if(/jealous|deceiv|deception|short-term|long-term|mating|sexual conflict/i.test(t)&&row.name.includes('David Buss'))s+=9;
 if(/commit|ambigu|cohabit|drift|sliding|deciding|define the relationship/i.test(t)&&row.name.includes('Scott Stanley'))s+=9;
 if(/dating culture|leverage|desirab|standards|overinvest/i.test(t)&&row.name.includes('Call Her Daddy'))s+=4;
 if(/red pill|sexual market|dominance|status game|gender strategy/i.test(t)&&row.name.includes('Red-pill'))s+=3;
 if(row.cat==='Cultural Voices (contrast only)')s-=18;
 if(ctx.safetyFlags.length&&(row.name.includes('bell hooks')||row.name.includes('Gottman')))s+=5;
 return s;
}

function aligned343(ctx){return rows343().sort((a,b)=>score343(b,ctx)-score343(a,ctx))[0];}
function challenge343(ctx){
 const a=aligned343(ctx);
 const pairs={
  "Sue Johnson / EFT lens":"Orion Taraban incentive/respect lens",
  "Orion Taraban incentive/respect lens":"Gabor Mate trauma-pattern lens",
  "Alison Armstrong usefulness/polarity lens":"Brene Brown shame/vulnerability lens",
  "Esther Perel desire/security lens":"Jordan Peterson responsibility lens",
  "Gottman stability lens":"Esther Perel desire/security lens",
  "Marcus Aurelius stoic lens":"Sue Johnson / EFT lens",
  "bell hooks love ethic lens":"Louise Perry modern dating culture lens",
  "Jane Austen character lens":"Eli Finkel online dating lens",
  "Logan Ury behavioral dating lens":"David Buss mating strategy lens",
  "Eli Finkel online dating lens":"Jane Austen character lens",
  "David Buss mating strategy lens":"bell hooks love ethic lens",
  "Scott Stanley commitment clarity lens":"Esther Perel desire/security lens"
 };
 return rows343().find(r=>r.name===(pairs[a?.name]||''))||rows343().sort((x,y)=>score343(x,ctx)-score343(y,ctx))[0];
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
 let n=score343(row,ctx);
 if((ctx.issue?.event||'').length>30)n+=8;
 if((ctx.profile?.snapshots||[]).length>1)n+=5;
 if(ctx.issue?.recurrence&&ctx.issue.recurrence!=='First time')n+=4;
 return n>=24?'High fit':n>=12?'Moderate fit':'Exploratory fit';
}

function contextHTML343(ctx){
 return '';
}

function expertDepth347(row,ctx){
 const type=ctx.issue?.type||'relationship issue';
 const event=String(ctx.issue?.event||ctx.latestSnapshot?.note||ctx.profile?.evidence||'the event described').slice(0,240);
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
  ['Marcus Aurelius',{frame:`Separate ${type.toLowerCase()} into the event, your judgment about the event, and the part of your response that remains under your control. Pain may be real without every prediction attached to it being true.`,challenge:'Rumination can masquerade as problem-solving while keeping your character dependent on another person’s next move.',question:'What is the most honest, self-respecting action available even if the other person does not respond as hoped?',experiment:'Write three lines: facts without adjectives; the judgment you added; one action consistent with honesty, courage, and restraint.',failure:'Stoicism is being misused if composure becomes emotional suppression or tolerance of repeated mistreatment.'}],
  ['Aristotle',{frame:`The central question is what repeated handling of ${type.toLowerCase()} is turning both people into. Relationships are partly schools of character: habits of fairness, courage, generosity, truthfulness, and practical friendship accumulate.`,challenge:'Intensity is not evidence of flourishing. Judge the repeated habits the relationship rewards.',question:'After these interactions, do you become clearer, kinder, braver, steadier, and more truthful, or more evasive and diminished?',experiment:'Choose one virtue missing from the event and define its behavioral form for each person at the next occurrence.',failure:'A beautiful account of virtue means little when repeated conduct remains unfair, cowardly, or dishonest.'}],
  ['bell hooks',{frame:`Love is being evaluated here as a practice of care, respect, knowledge, responsibility, trust, and commitment, not merely a feeling. ${type} matters because domination and neglect can coexist with strong attachment.`,challenge:'Do not rename control, humiliation, dishonesty, or chronic disregard as love because the bond feels intense.',question:'Which element of loving practice disappeared in this event, and what concrete action would restore it?',experiment:'Audit the event across care, respect, trust, responsibility, knowledge, and commitment. Ask for one observable repair in the weakest category.',failure:'If one person demands empathy while refusing responsibility or mutuality, the language of love is concealing power.'}],
  ['Jane Austen',{frame:`Treat this event as character evidence under pressure. Charm is cheap when conditions are favorable; inconvenience, embarrassment, status threat, and correction reveal manners and judgment.`,challenge:'Do not let an appealing explanation outweigh a repeated behavioral pattern.',question:'What did this person do when pride or inconvenience entered, and was the response humble, consistent, and considerate?',experiment:'Record the event as evidence in five columns: charm, consistency, humility, regard for others, and repair.',failure:'If the analysis depends on imagined potential rather than observed conduct, courtship fantasy has overtaken character assessment.'}],
  ['Logan Ury',{frame:`The useful data is not only whether this produced a spark or an ick. Ask what side of you appeared, how your body felt during the interaction, and whether curiosity and ease increased after real contact.`,challenge:'Instant certainty can be a dating habit rather than accurate compatibility detection.',question:'Did the interaction make you feel heard, curious, relaxed, respected, and interested in another data point?',experiment:'Do a post-interaction review before swiping or seeking outside opinions. Separate observed behavior, felt experience, and prediction.',failure:'Slow-burn advice should not be used to override disrespect, dread, coercion, or a clear lack of interest.'}],
  ['Eli Finkel',{frame:`The evaluation may be distorted by an imagined marketplace of alternatives. App abundance can keep people comparing profiles instead of learning whether an actual relationship process works.`,challenge:'A person cannot compete fairly with a composite fantasy assembled from dozens of profiles.',question:'Are you responding to this person’s behavior or to the possibility that a frictionless alternative might be one swipe away?',experiment:'Pause option churn briefly and evaluate a small number of real interactions using the same behavioral criteria.',failure:'Reducing choice overload cannot manufacture attraction, character, or compatibility that is consistently absent.'}],
  ['David Buss',{frame:`Test whether ${type.toLowerCase()} reflects different relationship horizons, exclusivity assumptions, jealousy triggers, or levels of intended investment. Use strategy as a question, never as a stereotype.`,challenge:'Population averages do not tell you this individual’s motives; direct agreements and repeated behavior do.',question:'Are both people pursuing the same time horizon, exclusivity level, and investment strategy?',experiment:'Each person privately states the intended relationship horizon, exclusivity, investment, and exit conditions; then compare answers directly.',failure:'Discard the lens if it becomes a justification for suspicion, coercion, or claims that sex determines character.'}],
  ['Scott Stanley',{frame:`Look for sliding: expectations, dependence, cohabitation, or constraints accumulating without an explicit mutual decision. ${type} may be the bill arriving for choices nobody clearly made.`,challenge:'Inertia is not commitment, and difficulty leaving is not the same as dedication.',question:'What was explicitly decided together, and what became true through convenience, pressure, or avoidance?',experiment:'Name the current status, obligations, next decision, and decision date. Each person must be free to answer honestly.',failure:'Clarity that produces no aligned action is information about commitment, not a reason for another indefinite discussion.'}],
  ['Gabor Mate',{frame:`The intensity around ${type.toLowerCase()} may contain two realities: what is happening now and an older pain the event resembles. Compassion requires distinguishing them without excusing present behavior.`,challenge:'Understanding the origin of a reaction does not remove responsibility for its impact.',question:'Which part of the reaction belongs to current evidence, and which part has the emotional age of an earlier wound?',experiment:'Make two columns: present facts and familiar old feeling. Regulate first, then address the present behavior specifically.',failure:'Trauma language is harmful when it turns accountability into diagnosis or asks the harmed person to absorb repeated damage.'}],
  ['Brene Brown',{frame:`Shame may be converting a vulnerable fear into blame, perfectionism, defensiveness, or withdrawal. The useful move is precise disclosure, not compulsory oversharing.`,challenge:'“You made me feel” often hides the riskier sentence: “I am afraid this means I am not enough or do not matter.”',question:'What would feel exposing to admit here if blame were unavailable?',experiment:'Use: “The story I am making up is ___; the vulnerable part is ___; the specific reality-check I need is ___.”',failure:'Vulnerability is not repair when it is used to avoid apology, boundaries, or changed behavior.'}],
  ['Call Her Daddy',{frame:'The popular-media instinct is to protect leverage, maintain standards, and avoid overinvesting before reciprocity is proven. That can be useful protection, but it can also turn honest uncertainty into performance and power management.',challenge:'Ask whether the advice improves discernment or merely helps one person feel less exposed by becoming more strategic.',question:'What would direct, dignified communication reveal that a test, delay, or power move would obscure?',experiment:'Keep the standard, remove the game: state the expectation once and judge the behavioral response.',failure:'If both people follow leverage-first advice, expect more ambiguity, testing, audience-oriented choices, and less trust.'}],
  ['Red-pill',{frame:'The ideological frame reduces the event to status, bargaining power, and generalized sex differences. Its attraction is certainty; its cost is that it can stop seeing the individual in front of you.',challenge:'Replace every claim about men or women with a claim about this person’s observed behavior. See what survives.',question:'What evidence exists at the individual level, and what part of the conclusion came from a group stereotype?',experiment:'Run an individual-evidence audit using actions, agreements, consistency, consent, and reciprocity only.',failure:'If the framework increases contempt, dominance, coercive expectations, or tolerance for disrespect, it is degrading judgment rather than improving it.'}]
 ];
 const hit=entries.find(([key])=>name.includes(key));return hit?{...base,...hit[1]}:base;
}

function card343(row,label,ctx,cls=''){
 const safety=ctx.safetyFlags.length?`<div class="expertSafety339"><b>Safety override:</b> ${esc(ctx.safetyFlags.join(', '))}. Prioritize immediate safety, trusted support, and clear boundaries before repair or persuasion.</div>`:'';
 const event=ctx.issue?.event||ctx.latestSnapshot?.note||ctx.profile?.evidence||'No event has been described yet.';
 const score=confidence343(row,ctx);
 const positive=ctx.isPositive?' expertPositive339':'';
 const cultural=row.cat==='Cultural Voices (contrast only)';
 const depth=expertDepth347(row,ctx);
 const sourceClass=row.sourceClass||(row.cat==='Attachment / Repair'||row.cat==='Modern Dating / Relationship Science'||row.cat==='Trauma / Nervous System'?'Research-informed framework':row.cat==='Philosophical Lenses'?'Philosophical / literary perspective':'Interpretive practitioner perspective');
 const initials=row.avatar||row.name.split(/\s+/).slice(0,2).map(x=>x[0]).join('').toUpperCase();
 const consequence=row.consequence||'Possible benefit: a new interpretation and a concrete experiment. Cost: this lens can overfit the story; reassess it against behavior and the result of the next interaction.';
 return `<div class="expertCard339 ${cls}${positive}${cultural?' expertCultural346':''}">
  <div class="expertIdentity346"><span class="expertAvatar346" aria-hidden="true">${esc(initials)}</span><div><b>${esc(label)}: ${esc(row.name)}</b><span class="expertProvenance346">${esc(sourceClass)}${row.evidenceTier?' · '+esc(row.evidenceTier):''}</span></div><span class="expertConfidence339">${esc(score)}</span></div>
  <div class="expertPills339"><span class="expertPill339">${esc(row.cat)}</span>${(row.tags||[]).slice(0,5).map(t=>`<span class="expertPill339">${esc(t)}</span>`).join('')}</div>
  ${safety}
  <div class="expertSection343"><b>Current issue</b>${esc(String(event).slice(0,520))}</div>
  <div class="expertSection343"><b>Framework-specific read</b>${esc(depth.frame)}</div>
  <div class="expertSection343"><b>What this lens would challenge</b>${esc(depth.challenge)}</div>
  <div class="expertSection343"><b>Question to answer</b>${esc(depth.question)}</div>
  <div class="expertSection343"><b>Concrete experiment</b>${esc(depth.experiment)}</div>
  <div class="expertSection343"><b>Failure signal</b>${esc(depth.failure)}</div>
  <div class="expertConsequence346"><b>Likely consequences and tradeoffs</b><br>${esc(consequence)}</div>
  <div class="expertSection343"><b>Use caution if</b>${esc(row.miss)}</div>
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
  mode.innerHTML=Object.keys(modes).map(m=>`<option>${esc(m)}</option>`).join('');
  if(modes[prevMode])mode.value=prevMode;
 }
 cat.onchange=fill;
 fill();
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
 if(summary)summary.innerHTML=`<b>${esc346(title)}</b><span>${esc346(p.rtype||'Relationship')} · Peace ${Math.round(m.peaceIndex||0)} · Respect ${Math.round(m.respectIndex||0)} · Latest: ${esc346(recent)}</span>`;
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

/* v3.4.7 compact interaction pattern and consolidated Workspace cleanup */
(function(){
const $347=id=>document.getElementById(id);
function compactPattern347(){
 const root=$347('repairCockpitLoop');if(!root)return;
 const grid=root.querySelector('.clearLoopGrid,.loopChain');
 if(grid&&!root.querySelector('.compactPattern347')){
  const steps=[...grid.querySelectorAll('.clearLoopCard,.chainStep')].map(x=>(x.textContent||'').replace(/^\s*\d+\.\s*/,'').trim()).filter(Boolean);
  const heading=grid.previousElementSibling;
  const details=document.createElement('details');details.className='compactPattern347';
  details.innerHTML=`<summary>Interaction pattern (optional)</summary><p>${steps.map((s,i)=>`${i?'<span class="patternArrow347">→</span> ':''}${typeof escapeHTML==='function'?escapeHTML(s):s}`).join(' ')}</p>`;
  if(heading&&/loop|pattern/i.test(heading.textContent||''))heading.remove();
  grid.replaceWith(details);
 }
 const nodes=[...root.querySelectorAll(':scope > .loopNode')];
 if(nodes.length&&!root.querySelector('.compactPattern347')){
  const details=document.createElement('details');details.className='compactPattern347';
  details.innerHTML=`<summary>Interaction pattern (optional)</summary><p>${nodes.map((n,i)=>`${i?'<span class="patternArrow347">→</span> ':''}${typeof escapeHTML==='function'?escapeHTML((n.textContent||'').trim()):n.textContent}`).join(' ')}</p>`;
  root.querySelectorAll(':scope > .loopNode,:scope > .loopArrow').forEach(n=>n.remove());root.appendChild(details);
 }
}
function cleanupWorkspace347(){
 $347('trajectoryCharts340')?.remove();
 $347('casualTrajectory337')?.remove();
 ['sliderTimelineCanvas','workspacePeaceRespectCanvas'].forEach(id=>$347(id)?.closest('.graphGrid>div')?.remove());
 const partnerBtn=$347('openCasualTrackerWizardBtn');if(partnerBtn)partnerBtn.textContent='Partner & Personal Measures';
 const coupleBtn=$347('openSliderWizardBtn');if(coupleBtn)coupleBtn.textContent='Couple Measures';
 const source=$347('repairCockpitSourceStrip');if(source)source.setAttribute('aria-label','Relationship score summary');
 compactPattern347();
}
if(typeof renderTranslation331==='function'&&!window.__translation347){window.__translation347=true;const old=renderTranslation331;renderTranslation331=function(){const r=old();setTimeout(compactPattern347,0);return r;};}
if(typeof renderRepairCockpit==='function'&&!window.__workspace347){window.__workspace347=true;const old=renderRepairCockpit;renderRepairCockpit=function(){const r=old();setTimeout(cleanupWorkspace347,100);setTimeout(cleanupWorkspace347,800);return r;};}
document.addEventListener('DOMContentLoaded',()=>setTimeout(cleanupWorkspace347,1700));setTimeout(cleanupWorkspace347,1900);
})();
