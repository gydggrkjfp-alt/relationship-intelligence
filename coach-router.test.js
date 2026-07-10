const assert=require('assert');
const router=require('./coach-router.js');

function check(name,raw,expected){
 const got=router.classify({raw,chosenStage:'auto'});
 Object.entries(expected).forEach(([key,value])=>assert.strictEqual(got[key],value,`${name}: expected ${key}=${value}, got ${got[key]} (${JSON.stringify(got.reasons)})`));
}

check('early man asking out','I am a man asking a girl I just met out and I am worried I will over pursue.',{stage:'early',crux:'early_signal'});
check('moving too fast','I am worried we are moving too fast and I need to slow down without killing the connection.',{stage:'early',crux:'early_signal'});
check('sex pacing early dating','I have been dating a girl for a month or two and things are going really well. I am worried that if we have sex too soon I will lose interest.',{stage:'early',crux:'early_signal'});
check('wife material life plan','I am dating someone and trying to decide if she is serious wife material. I care about marriage, kids, family, career choices, money, and whether we want the same life plan.',{stage:'early',crux:'commitment'});
check('phone monitoring','My partner is monitoring my phone and location and gets angry if I say no.',{crux:'safety'});
check('dating market discouragement','I have been on lots of dates with Hinge and Instagram girls and cannot find women who are warm, do not have kids, and do not hate men.',{stage:'early',crux:'grounding_values'});
check('shared kids mature','My wife and I have kids and years together, and we need better routines.',{stage:'mature',crux:'behavior_change'});

console.log('coach-router tests passed');
