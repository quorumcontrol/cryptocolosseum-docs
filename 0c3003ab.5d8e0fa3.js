(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return A})),n.d(t,"b",(function(){return p}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},A=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},g=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),A=l(n),g=o,p=A["".concat(i,".").concat(g)]||A[g]||b[g]||a;return n?r.a.createElement(p,s(s({ref:t},c),{},{components:n})):r.a.createElement(p,s({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},388:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"},389:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/picktraditional-ad75843066b529fa0582929bf62bf956.png"},390:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/newlobby-2cb3556ab921c540c2a47584f2d89eb4.png"},391:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/tournamentsimple-bbc9f9414ca4615c35f57876be622b07.png"},392:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/firstbetpopup-3fa8933d91b2e40a2bad1f1d06b82fb9.png"},73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var o=n(3),r=n(7),a=(n(0),n(110)),i={title:"Making your first bet in the Crypto Colosseum",sidebar_label:"Getting Started",slug:"/firstbet"},s={unversionedId:"firstbet",id:"firstbet",isDocsHomePage:!1,title:"Making your first bet in the Crypto Colosseum",description:"Crypto Colosseum is (in the beginning) a simple gambling game.",source:"@site/docs/firstbet.md",slug:"/firstbet",permalink:"/firstbet",editUrl:"https://github.com/quorumcontrol/cryptocolosseum-docs/edit/main/docs/firstbet.md",version:"current",sidebar_label:"Getting Started",sidebar:"someSidebar",previous:{title:"Hail. Welcome to the Arena.",permalink:"/"},next:{title:"Collecting Gladiator NFTs",permalink:"/collecting/gladiators"}},u=[],c={toc:u};function l(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Crypto Colosseum is (in the beginning) a simple gambling game."),Object(a.b)("p",null,"Gladiators fight in tournaments.  You place your bet on which of the four gladiators will win the tournament.  You get a share of the prize purse if you are right."),Object(a.b)("p",null,'To get started, the first thing you need to do is sign up.  Click on the orange "Sign in / Sign up" in the upper right hand corner to do so. Its easy, we promise.'),Object(a.b)("p",null,Object(a.b)("img",{alt:"image",src:n(388).default})),Object(a.b)("p",null,"There are two different ways to login, but if you are new to the game and to crypto, the easiest way is to use an existing account (like gmail).  When you do this we are actually creating a special vault or wallet to receive and spend your cryptocurrency(PTG).  It will also hold your in-game NFTs in the future.  You own the wallet and its contents and we cannot access it without your permission."),Object(a.b)("p",null,Object(a.b)("img",{alt:"image",src:n(389).default})),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://tor.us"},"Torus"),' is used to create your wallet and link it to one of your existing accounts.  You don\'t need to worry about it for now, but you can access your Torus wallet through the "T" in a blue circle in the bottom left at any time.'),Object(a.b)("p",null,"After completing the process you will recieve a grant of 6 free 100 PTG bets. This is the ingame currency of Crypto Colosseum.  You can exchange it for other cryptocurrencies or buy more PTG but that will be covered in a later guide."),Object(a.b)("p",null,"The signup is super easy and will take no more than a minute."),Object(a.b)("p",null,"Now you have logged in, have free bets and are ready to place your first bet.  You should see the lobby screen which shows upcoming tournaments,recent battles and a player leaderboard. If you are not in the lobby just click the Crypto Colosseum logo in the upper left to return there at any time.   We want to bet on the ",Object(a.b)("em",{parentName:"p"},"next upcoming tournament"),' so big orange button that says "Go to Tournament" next to the countdown is the one we want.'),Object(a.b)("p",null,Object(a.b)("img",{alt:"image",src:n(390).default})),Object(a.b)("p",null,"We constantly post links to upcoming tournaments in ",Object(a.b)("a",{parentName:"p",href:"https://discord.gg/Z2S3EtQKCn"},"our discord")," so you should join us there to hear about upcoming tournaments, contests and special events."),Object(a.b)("p",null,'Now the last step is to place a bet on the tournament page.  There is a variety of information on the tournament page but all you need to worry about is which gladiator(s) you want to bet on.  Pick one and find the associated orange "Bet Now" button and click it. '),Object(a.b)("p",null,Object(a.b)("img",{alt:"image",src:n(391).default})),Object(a.b)("p",null,"If you want to know what the other info on that page means checkout ",Object(a.b)("a",{parentName:"p",href:"https://docs.cryptocolosseum.com/tournaments"},"tournament basics"),".  It is really not needed to make your first bet though!"),Object(a.b)("p",null,"If you want to know more about how winners are decided before you bet, check out ",Object(a.b)("a",{parentName:"p",href:"https://docs.cryptocolosseum.com/gamemechanics/combatexample"},"combat basics")," to learn more."),Object(a.b)("p",null,"Once you click to place your bet a popup will ask you about your wager and give you the option to use one of your free bets.  "),Object(a.b)("p",null,Object(a.b)("img",{alt:"image",src:n(392).default})),Object(a.b)("p",null,'Once you click on "USE FREE 100 PTG BET", your wallet will check if you are really sure you want to place the bet.  Confirm the transaction and you are off and running!  (Look for popup blockers etc if you dont see the confirmation requests).'),Object(a.b)("p",null,"The game is surprisingly deep considering how simple the basic mechnicisms are.  Before worrying about other aspects of the game, bet a few times and get a feel for the game.  Then when you are ready you can begin to explore the item market (on bonding curves), bid on a gladiator contract (income generating NFT) and get your own share of the crypto factions and share in their profits."),Object(a.b)("p",null,"Don't forget to join us in ",Object(a.b)("a",{parentName:"p",href:"https://discord.gg/Z2S3EtQKCn"},"our discord")," where the gladaitors talk trash (courtesy of our AI) and fans cheer on their favorites."),Object(a.b)("p",null,"Most of all, have fun!  "),Object(a.b)("p",null,"It's whimsical violence.  It's degenerate gambling and The Arena just gave you free money.  "),Object(a.b)("p",null,"Battle time!"))}l.isMDXComponent=!0}}]);