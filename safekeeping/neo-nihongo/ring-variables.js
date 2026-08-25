// onionring.js is made up of four files - onionring-widget.js, onionring-index.js, onionring-variables.js (this one!), and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24

// === ONIONRING-VARIABLES ===
//this file contains the stuff you edit to set up your specific webring

//the full URLs of all the sites in the ring
var sites = [
'https://cerealandchoccymilk.neocities.org/',
'https://tyoki.neocities.org/',
'https://juuyondaime.net/',
'https://3599.neocities.org/',
'https://sanjirops.neocities.org/',
'https://benitengu.neocities.org/',
'https://pastel-skies.nekoweb.org/',
'https://jsaniken.neocities.org/',
'https://renyoi.neocities.org/',
'https://baqqure2.neocities.org',
'https://yuinoid.neocities.org/',
// 'https://agoworld.neocities.org/',
// 'https://fuwafuwablogging.neocities.org/', 閉鎖
'https://twotriplezero.nekoweb.org/',
'https://ogaratsu.neocities.org/',
'https://sakusya.neocities.org/',
'https://mimineko12.neocities.org/',
'https://stillnessgraveyard.neocities.org/',
'https://www.milk-tea.email/',
// 'https://www.bluepuffin.net/', 旧コード+移転+閉鎖
'https://smokoswebzone.gay/',
'https://bokuwatetsuo.net/',
'https://scrapsite.nekoweb.org/',
// 'https://yuzukiiio.neocities.org/', コードなし
'https://sweetcherries.neocities.org/',
'https://slashdiv.neocities.org/',
'https://imbirowe.neocities.org/',
'https://karasushima.neocities.org/',
'https://claranguyen.me/',
'https://demgoze.nya.je/',
// 'https://takotako.neocities.org/', コードなし
'https://watakoii-chiquitoblog.neocities.org/',
'https://mynekosworld.neocities.org/',
'https://angeleyesprings.neocities.org/',
// 'https://likematches.neocities.org/', コードなし
'https://kwaamfan.haliya.net/',
'https://indietsushin.net/',
'https://arriana.nekoweb.org/',
'https://kaede010.neocities.org/',
'https://thenamelessarchiv3.neocities.org',
'https://ponzu-ra-yu.neocities.org/',
'https://horse.jp.net/',
'https://skyrocket.neocities.org/',
// 'https://imepixds.neocities.org', コードなし
'https://gikaayumi.nekoweb.org/',
'https://millennium-whoop.github.io/aetherway/',
'https://sepelathons.neocities.org/',
'https://straylove.nekoweb.org/'
];

//the name of the ring
var ringName = 'ネオ日本語ウェブリング';

/* the unique ID of the widget. two things to note:
 1) make sure there are no spaces in it - use dashes or underscores if you must
 2) remember to change 'webringid' in the widget code you give out and all instances of '#webringid' in the css file to match this value!*/
var ringID = 'neo-nihongo';

//should the widget include a link to an index page?
var useIndex = true;
//the full URL of the index page. if you're not using one, you don't have to specify anything here
var indexPage = 'https://cerealandchoccymilk.neocities.org/webrings/neo-nihongo.html';

//should the widget include a random button?
var useRandom = true;
