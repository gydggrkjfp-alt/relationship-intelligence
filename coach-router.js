(function(root){
function norm(value){return String(value||'').toLowerCase();}
function has(text,re){return re.test(text);}
function add(scores,key,n,why){scores[key]=(scores[key]||0)+n;if(why)scores.reasons.push(`${key}: ${why}`);}
function best(scores,keys,fallback){
 const top=keys.map(k=>[k,scores[k]||0]).sort((a,b)=>b[1]-a[1])[0];
 return top&&top[1]>0?top[0]:fallback;
}
function classify(input={}){
 const raw=norm(input.raw),chosen=input.chosenStage,profile=norm(input.profileType||input.profile?.rtype),scores={early:0,mid:0,mature:0,safety:0,grounding_values:0,early_signal:0,commitment:0,desire_admiration:0,behavior_change:0,repair:0,reasons:[]};
 const explicitEarly=/just met|met (her|him|them)|first date|second date|asking (her|him|them) out|ask (her|him|them) out|asking (a )?(girl|woman|guy|man|person|someone) out|ask (a )?(girl|woman|guy|man|person|someone) out|flirting|talking stage|crush|matched with|dating app|hinge|instagram|lots of dates|dating market|dating (a )?(girl|woman|guy|man|person|someone)|seeing (a )?(girl|woman|guy|man|person|someone)|month or two|couple months|early relationship/.test(raw);
 const datingMarket=/lots of dates|hinge|instagram|dating market|do not have access|don't have access|dont have access|can't find (women|men|people)|cant find (women|men|people)|hate men|hate women|too many sexual partners|many sexual partners|millennial/.test(raw);
 const lifeReset=/find myself|finding myself|lost|stuck in my head|in my head|ruminat|spiral|life reset|reset my life|focus on myself|church|religio|faith|god|bigger than myself|purpose|meaning|move away|move to|different location|new city|achievable goals|small goals|workout|exercise|walk|service|volunteer|gratitude|grounded|anxious|anxiety/.test(raw);
 const publicRespect=/refut|correct.*public|public|in front of|embarrass|humiliat|mock|disrespect|look foolish|undermine/.test(raw);
 const digitalBoundary=/texting other guys|dm|dms|message.*guys|other men|other guys|phone|snapchat/.test(raw);
 const outsideValidation=/posting herself|posting.*attention|posting.*validation|social media.*validation|instagram.*attention|attention.*instagram|thirst|outside validation/.test(raw);
 const infoDiet=/toxic information|podcast|tiktok|red pill|feminism|content|information diet|gender war/.test(raw);
 if(chosen&&chosen!=='auto')add(scores,chosen,100,'manual stage');
 if(explicitEarly){add(scores,'early',44,'explicit early/dating-market language');add(scores,'mature',-36,'early dating language overrides mature profile defaults');}
 if(/moving too fast|too fast|rushing|rush|slow down|pace|pacing|get serious fast|intense too soon/.test(raw))add(scores,'early',24,'pacing language usually starts early unless marriage is explicit');
 if(/\bmarried\b|\b(my|our|his|her|their)\s+(wife|husband|spouse)\b|\b(wife|husband|spouse)\s+and\s+i\b|\bour marriage\b|mortgage|years together|decades|\bour (kids|children)\b|\bmy (kids|children)\b|\bwe have (kids|children)\b|\braising (kids|children)\b/.test(raw)||/married|spouse|wife|husband/.test(profile))add(scores,'mature',32,'explicit mature-bond language');
 if(/partner|boyfriend|girlfriend|exclusive|committed|living together|fianc|long[- ]term/.test(raw))add(scores,'mid',20,'committed relationship language');
 if(/\b(no|not|without|do not|don't|dont)\s+(have\s+)?(kids|children)\b/.test(raw))add(scores,'mature',-28,'kids mentioned as exclusion, not shared family life');
 if(has(raw,/unsafe|afraid (?:of|that).{0,40}(?:hurt|harm|retaliat|punish|explode|hit|threat|abuse)|coerc|force|threat|monitor|stalk|hit|abuse|retaliat|surveillance|password|location tracking/))add(scores,'safety',60,'safety/autonomy language');
 if(publicRespect){add(scores,'repair',64,'public respect / dignity pattern');add(scores,'behavior_change',24,'public respect needs a next-time behavior');add(scores,'grounding_values',-80,'not a life-reset prompt');}
 if(digitalBoundary){add(scores,'repair',46,'digital boundary / loyalty pattern');add(scores,'commitment',26,'digital behavior tests relationship norms');add(scores,'grounding_values',-60,'not a life-reset prompt');}
 if(outsideValidation){add(scores,'repair',42,'outside validation / social media pattern');add(scores,'commitment',22,'outside validation tests norms');add(scores,'grounding_values',-60,'not a life-reset prompt');}
 if(infoDiet){add(scores,'behavior_change',44,'information diet behavior pattern');add(scores,'repair',24,'information diet may train contempt');add(scores,'grounding_values',-60,'not a life-reset prompt');}
 if(datingMarket){add(scores,'grounding_values',42,'dating-market discouragement needs life orientation');add(scores,'early_signal',-18,'not a single flirtation to optimize');}
 if(lifeReset)add(scores,'grounding_values',34,'life reset / values / rumination language');
 if(has(raw,/contribut|reciprocat|reciprocal|provide value|useful role|relationship opportunity|small (favor|responsibility)|help (me|with)|care for me|show up|burden|self-sufficient|need anything|taken out|real-life responsibility|overinvest|over-invest|one-way/)){add(scores,'early_signal',24,'contribution/reciprocity dating signal');add(scores,'commitment',12,'contribution reveals relationship intent');}
 if(has(raw,/(help|care|watch|walk|bring).{0,24}(dog|animal|pet)|small responsibility|small favor/)&&scores.grounding_values>0)add(scores,'grounding_values',-22,'dog/help language is contribution test, not life reset');
 if(has(raw,/flirt|date|text|girl|guy|crush|interest|likes me|spark|chase|asking (a )?(girl|woman|guy|man|person|someone) out|ask (a )?(girl|woman|guy|man|person|someone) out|moving too fast|too fast|rushing|slow down|pace|pacing|early/))add(scores,'early_signal',20,'courtship signal language');
 if(has(raw,/what women want|understand women|why women|why she|why girls|female behavior|mixed signals|hesitat|indirect|passive|test me|testing me|pull back|hot and cold/)){add(scores,'early',24,'female-behavior dating language');add(scores,'early_signal',26,'understanding female-side signals');}
 if(has(raw,/boyfriend|girlfriend|serious|exclusive|define|commit|secure|select for|wife material|husband material|marriage|life plan/))add(scores,'commitment',18,'commitment language');
 if(has(raw,/wife material|husband material|marriage,? (kids|children)|kids,? family|children,? family|same life plan|life plan|dating with purpose/))add(scores,'commitment',22,'life-selection commitment language');
 if(has(raw,/attractive|desire|sex|feminine|masculine|impress|admire|admiration|passion|intimacy/))add(scores,'desire_admiration',18,'desire/admirability language');
 if(has(raw,/do what i need|can't get|chores|money|help|change|behavior|appreciat|thank/))add(scores,'behavior_change',18,'behavior-change language');
 if(has(raw,/routine|routines|ritual|system|schedule|division of labor/)&&scores.mature>0)add(scores,'behavior_change',18,'mature routine/system language');
 if(has(raw,/fight|argument|repair|communicat|overcommunicat|feelings|shutdown|defensive/))add(scores,'repair',16,'repair/conflict language');
 const stage=chosen&&chosen!=='auto'?chosen:best(scores,['early','mid','mature'],'early');
 const crux=best(scores,['safety','grounding_values','early_signal','commitment','desire_admiration','behavior_change','repair'],stage==='early'?'early_signal':'repair');
 const confidence=Math.max(scores[crux]||0,scores[stage]||0);
 const title=crux==='grounding_values'?'self-orientation / life reset':stage==='early'?'early-stage romantic context':stage==='mid'?'committed or mid-stage relationship':'mature / married relationship';
 return{stage,crux,title,confidence,reasons:scores.reasons.slice(0,8),scores};
}
const api={classify};
if(typeof module==='object'&&module.exports)module.exports=api;
root.RelationshipCoachRouter3913=api;
})(typeof window!=='undefined'?window:globalThis);
