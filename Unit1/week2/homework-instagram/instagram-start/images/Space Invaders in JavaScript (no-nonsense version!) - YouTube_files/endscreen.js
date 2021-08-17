(function(g){var window=this;'use strict';var ZOa=function(a,b){a.Ma("onAutonavCoundownStarted",b)},w5=function(a,b,c){var d=b.ib();
g.N(a.element,"ytp-suggestion-set",!!d.videoId);var e=b.getPlaylistId();c=b.Re(c?c:"mqdefault.jpg");var f=null,h=null;b instanceof g.aH&&(b.lengthText?(f=b.lengthText||null,h=b.By||null):b.lengthSeconds&&(f=g.gM(b.lengthSeconds),h=g.gM(b.lengthSeconds,!0)));var l=!!e;e=l&&"RD"===(new g.mN(e.substr(0,2),e.substr(2))).type;var m=b instanceof g.aH?b.isLivePlayback:null,n=b instanceof g.aH?b.isUpcoming:null;d={title:b.title,author:b.author,author_and_views:d.shortViewCount?b.author+" \u2022 "+d.shortViewCount:
b.author,aria_label:b.Sq||g.OI("Watch $TITLE",{TITLE:b.title}),duration:f,timestamp:h,url:b.cn(),is_live:m,is_upcoming:n,is_list:l,is_mix:e,background:c?"background-image: url("+c+")":"",views_and_publish_time:d.shortViewCount?d.shortViewCount+" \u2022 "+d.publishedTimeText:d.publishedTimeText,autoplayAlternativeHeader:b.Kt};b instanceof g.nN&&(d.playlist_length=b.length);a.update(d)},x5=function(a){var b=a.T(),c=b.l;
g.V.call(this,{D:"a",K:"ytp-autonav-suggestion-card",U:{href:"{{url}}",target:c?b.G:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},S:[{D:"div",Fa:["ytp-autonav-endscreen-upnext-thumbnail","ytp-autonav-thumbnail-small"],U:{style:"{{background}}"},S:[{D:"div",U:{"aria-label":"{{timestamp}}"},Fa:["ytp-autonav-timestamp"],ra:"{{duration}}"},{D:"div",Fa:["ytp-autonav-live-stamp"],ra:"Live"},{D:"div",
Fa:["ytp-autonav-upcoming-stamp"],ra:"Upcoming"},{D:"div",K:"ytp-autonav-list-overlay",S:[{D:"div",K:"ytp-autonav-mix-text",ra:"Mix"},{D:"div",K:"ytp-autonav-mix-icon"}]}]},{D:"div",Fa:["ytp-autonav-endscreen-upnext-title","ytp-autonav-title-card"],ra:"{{title}}"},{D:"div",Fa:["ytp-autonav-endscreen-upnext-author","ytp-autonav-author-card"],ra:"{{author}}"},{D:"div",Fa:["ytp-autonav-endscreen-upnext-author","ytp-autonav-view-and-date-card"],ra:"{{views_and_publish_time}}"}]});this.I=a;this.suggestion=
null;this.i=c;this.Qa("click",this.onClick);this.Qa("keypress",this.l)},z5=function(a,b){b=void 0===b?!1:b;
g.V.call(this,{D:"div",K:"ytp-autonav-endscreen-countdown-container"});var c=this;this.C=b;this.l=0;b=a.T();var d=b.l;this.I=a;this.suggestion=null;this.i=new g.V({D:"div",K:"ytp-autonav-endscreen-upnext-container",U:{"aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}","data-is-upcoming":"{{is_upcoming}}"},S:[{D:"div",K:"ytp-autonav-endscreen-upnext-header"},{D:"div",K:"ytp-autonav-endscreen-upnext-alternative-header",ra:"{{autoplayAlternativeHeader}}"},
{D:"a",K:"ytp-autonav-endscreen-link-container",U:{href:"{{url}}",target:d?b.G:""},S:[{D:"div",K:"ytp-autonav-endscreen-upnext-thumbnail",U:{style:"{{background}}"},S:[{D:"div",U:{"aria-label":"{{timestamp}}"},Fa:["ytp-autonav-timestamp"],ra:"{{duration}}"},{D:"div",Fa:["ytp-autonav-live-stamp"],ra:"Live"},{D:"div",Fa:["ytp-autonav-upcoming-stamp"],ra:"Upcoming"}]},{D:"div",K:"ytp-autonav-endscreen-video-info",S:[{D:"div",K:"ytp-autonav-endscreen-premium-badge"},{D:"div",K:"ytp-autonav-endscreen-upnext-title",
ra:"{{title}}"},{D:"div",K:"ytp-autonav-endscreen-upnext-author",ra:"{{author}}"},{D:"div",K:"ytp-autonav-view-and-date",ra:"{{views_and_publish_time}}"},{D:"div",K:"ytp-autonav-author-and-view",ra:"{{author_and_views}}"}]}]}]});g.J(this,this.i);this.i.Ba(this.element);d||this.N(this.i.Ca("ytp-autonav-endscreen-link-container"),"click",this.mG);this.I.Yb(this.element,this,115127);this.I.Yb(this.i.Ca("ytp-autonav-endscreen-link-container"),this,115128);this.overlay=new g.V({D:"div",K:"ytp-autonav-overlay"});
g.J(this,this.overlay);this.overlay.Ba(this.element);this.u=new g.V({D:"div",K:"ytp-autonav-endscreen-button-container"});g.J(this,this.u);this.u.Ba(this.element);this.cancelButton=new g.V({D:"button",Fa:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-cancel-button"],U:{"aria-label":"Cancel autoplay"},ra:"Cancel"});g.J(this,this.cancelButton);this.cancelButton.Ba(this.u.element);this.cancelButton.Qa("click",this.rO,this);this.I.Yb(this.cancelButton.element,this,115129);this.playButton=
new g.V({D:"a",Fa:["ytp-autonav-endscreen-upnext-button","ytp-autonav-endscreen-upnext-play-button"],U:{href:"{{url}}",role:"button","aria-label":"Play next video"},ra:"Play Now"});g.J(this,this.playButton);this.playButton.Ba(this.u.element);this.playButton.Qa("click",this.mG,this);this.I.Yb(this.playButton.element,this,115130);this.B=new g.K(function(){y5(c)},500);
g.J(this,this.B);this.lG();this.N(a,"autonavvisibility",this.lG)},C5=function(a){var b=a.I.cj(!0,a.I.isFullscreen());
g.N(a.element,"ytp-autonav-endscreen-small-mode",a.hf(b));g.N(a.element,"ytp-autonav-endscreen-is-premium",!!a.suggestion&&!!a.suggestion.Pz);g.N(a.I.getRootNode(),"ytp-autonav-endscreen-cancelled-state",!a.I.Qd());g.N(a.I.getRootNode(),"countdown-running",a.Eh());g.N(a.element,"ytp-player-content",a.I.Qd());g.Bl(a.overlay.element,{width:b.width+"px"});if(!a.Eh()){a.I.Qd()?A5(a,Math.round(B5(a)/1E3)):A5(a);b=!!a.suggestion&&!!a.suggestion.Kt;var c=a.I.Qd()||!b;g.N(a.element,"ytp-autonav-endscreen-upnext-alternative-header-only",
!c&&b);g.N(a.element,"ytp-autonav-endscreen-upnext-no-alternative-header",c&&!b);g.kL(a.u,a.I.Qd())}},y5=function(a){var b=B5(a),c=Math,d=c.min;
var e=a.l?Date.now()-a.l:0;c=d.call(c,e,b);A5(a,Math.ceil((b-c)/1E3));500>=b-c&&a.Eh()?a.select(!0):a.Eh()&&a.B.start()},B5=function(a){var b=a.I.jp();
return 0<=b?b:g.T(a.I.T().experiments,"autoplay_time")||1E4},A5=function(a,b){b=void 0===b?-1:b;
a=a.i.Ca("ytp-autonav-endscreen-upnext-header");g.sg(a);if(0<=b){b=String(b);var c="Up next in $SECONDS".match(/\$SECONDS/gi)[0],d="Up next in $SECONDS".indexOf(c);if(0<=d){a.appendChild(g.rg("Up next in $SECONDS".slice(0,d)));var e=g.qg("span");g.Lq(e,"ytp-autonav-endscreen-upnext-header-countdown-number");g.xg(e,b);a.appendChild(e);a.appendChild(g.rg("Up next in $SECONDS".slice(d+c.length)));return}}g.xg(a,"Up next")},D5=function(a,b){g.V.call(this,{D:"div",
Fa:["html5-endscreen","ytp-player-content",b||"base-endscreen"]});this.created=!1;this.player=a},F5=function(a){g.V.call(this,{D:"div",
Fa:["ytp-upnext","ytp-player-content"],U:{"aria-label":"{{aria_label}}"},S:[{D:"div",K:"ytp-cued-thumbnail-overlay-image",U:{style:"{{background}}"}},{D:"span",K:"ytp-upnext-top",S:[{D:"span",K:"ytp-upnext-header",ra:"Up Next"},{D:"span",K:"ytp-upnext-title",ra:"{{title}}"},{D:"span",K:"ytp-upnext-author",ra:"{{author}}"}]},{D:"a",K:"ytp-upnext-autoplay-icon",U:{role:"button",href:"{{url}}","aria-label":"Play next video"},S:[{D:"svg",U:{height:"100%",version:"1.1",viewBox:"0 0 72 72",width:"100%"},
S:[{D:"circle",K:"ytp-svg-autoplay-circle",U:{cx:"36",cy:"36",fill:"#fff","fill-opacity":"0.3",r:"31.5"}},{D:"circle",K:"ytp-svg-autoplay-ring",U:{cx:"-36",cy:"36","fill-opacity":"0",r:"33.5",stroke:"#FFFFFF","stroke-dasharray":"211","stroke-dashoffset":"-211","stroke-width":"4",transform:"rotate(-90)"}},{D:"path",K:"ytp-svg-fill",U:{d:"M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"}}]}]},{D:"span",K:"ytp-upnext-bottom",S:[{D:"span",K:"ytp-upnext-cancel"},{D:"span",K:"ytp-upnext-paused",
ra:"Autoplay is paused"}]}]});this.api=a;this.cancelButton=null;this.C=this.Ca("ytp-svg-autoplay-ring");this.u=this.notification=this.i=this.suggestion=null;this.B=new g.K(this.ix,5E3,this);this.l=0;var b=this.Ca("ytp-upnext-cancel");this.cancelButton=new g.V({D:"button",Fa:["ytp-upnext-cancel-button","ytp-button"],U:{tabindex:"0","aria-label":"Cancel autoplay"},ra:"Cancel"});g.J(this,this.cancelButton);this.cancelButton.Qa("click",this.sO,this);this.cancelButton.Ba(b);this.cancelButton&&this.api.Yb(this.cancelButton.element,
this,115129);g.J(this,this.B);this.api.Yb(this.element,this,18788);b=this.Ca("ytp-upnext-autoplay-icon");this.N(b,"click",this.tO);this.api.Yb(b,this,115130);this.nG();this.N(a,"autonavvisibility",this.nG);this.N(a,"mdxnowautoplaying",this.mT);this.N(a,"mdxautoplaycanceled",this.nT);this.N(a,"mdxautoplayupnext",this.DM);E5(this)&&(a=(a=g.dN(this.api.sb()))?a.sQ():null)&&this.DM(a);g.N(this.element,"ytp-upnext-mobile",this.api.T().i)},E5=function(a){return 3===a.api.getPresentingPlayerType()},$Oa=
function(a,b){return b?b:0<=a.api.jp()?a.api.jp():g.T(a.api.T().experiments,"autoplay_time")||1E4},G5=function(a,b){b=$Oa(a,b);
var c=Math,d=c.min;var e=(0,g.P)()-a.l;c=d.call(c,e,b);b=0===b?1:Math.min(c/b,1);a.C.setAttribute("stroke-dashoffset",""+-211*(b+1));1<=b&&a.Eh()&&!E5(a)?a.select(!0):a.Eh()&&a.i.start()},H5=function(a){D5.call(this,a,"autonav-endscreen");
this.overlay=this.videoData=this.suggestions=null;this.table=new g.V({D:"div",K:"ytp-suggestion-panel",S:[{D:"div",Fa:["ytp-autonav-endscreen-upnext-header","ytp-autonav-endscreen-more-videos"],ra:"More videos"}]});this.J=new g.V({D:"div",K:"ytp-suggestions-container"});this.videos=[];this.u=null;this.C=this.G=!1;this.l=new z5(this.player);g.J(this,this.l);this.l.Ba(this.element);a.getVideoData().Zb?this.i=this.l:(this.i=new F5(a),g.hN(this.player,this.i.element,4),g.J(this,this.i));this.overlay=
new g.V({D:"div",K:"ytp-autonav-overlay-cancelled-state"});g.J(this,this.overlay);this.overlay.Ba(this.element);this.B=new g.kN(this);g.J(this,this.B);g.J(this,this.table);this.table.Ba(this.element);this.table.show();g.J(this,this.J);this.J.Ba(this.table.element);this.hide()},aPa=function(a,b){return g.Re(b.suggestions,function(c){c=g.JP(a.player.T(),c);
g.J(a,c);return c})},I5=function(a){var b=a.Qd();
b!==a.C&&(a.C=b,a.player.ea("autonavvisibility"),a.C?(a.l!==a.i&&a.l.hide(),a.table.hide()):(a.l!==a.i&&a.l.show(),a.table.show()))},J5=function(a){D5.call(this,a,"subscribecard-endscreen");
this.i=new g.V({D:"div",K:"ytp-subscribe-card",S:[{D:"img",K:"ytp-author-image",U:{src:"{{profilePicture}}"}},{D:"div",K:"ytp-subscribe-card-right",S:[{D:"div",K:"ytp-author-name",ra:"{{author}}"},{D:"div",K:"html5-subscribe-button-container"}]}]});g.J(this,this.i);this.i.Ba(this.element);var b=a.getVideoData();this.subscribeButton=new g.wO("Subscribe",null,"Unsubscribe",null,!0,!1,b.Nh,b.subscribed,"trailer-endscreen",null,null,a);g.J(this,this.subscribeButton);this.subscribeButton.Ba(this.i.Ca("html5-subscribe-button-container"));
this.N(a,"videodatachange",this.Na);this.Na();this.hide()},K5=function(a){var b=a.T(),c=g.dj||g.Vk?{style:"will-change: opacity"}:void 0,d=b.l,e=["ytp-videowall-still"];
b.i&&e.push("ytp-videowall-show-text");g.V.call(this,{D:"a",Fa:e,U:{href:"{{url}}",target:d?b.G:"","aria-label":"{{aria_label}}","data-is-live":"{{is_live}}","data-is-list":"{{is_list}}","data-is-mix":"{{is_mix}}"},S:[{D:"div",K:"ytp-videowall-still-image",U:{style:"{{background}}"}},{D:"span",K:"ytp-videowall-still-info",S:[{D:"span",K:"ytp-videowall-still-info-bg",S:[{D:"span",K:"ytp-videowall-still-info-content",U:c,S:[{D:"span",K:"ytp-videowall-still-info-title",ra:"{{title}}"},{D:"span",K:"ytp-videowall-still-info-author",
ra:"{{author_and_views}}"},{D:"span",K:"ytp-videowall-still-info-live",ra:"Live"},{D:"span",K:"ytp-videowall-still-info-duration",ra:"{{duration}}"}]}]}]},{D:"span",Fa:["ytp-videowall-still-listlabel-regular","ytp-videowall-still-listlabel"],S:[{D:"span",K:"ytp-videowall-still-listlabel-icon"},"Playlist",{D:"span",K:"ytp-videowall-still-listlabel-length",S:[" (",{D:"span",ra:"{{playlist_length}}"},")"]}]},{D:"span",Fa:["ytp-videowall-still-listlabel-mix","ytp-videowall-still-listlabel"],S:[{D:"span",
K:"ytp-videowall-still-listlabel-mix-icon"},"Mix",{D:"span",K:"ytp-videowall-still-listlabel-length",ra:" (50+)"}]}]});this.suggestion=null;this.l=d;this.api=a;this.i=new g.kN(this);g.J(this,this.i);this.Qa("click",this.onClick);this.Qa("keypress",this.u);this.i.N(a,"videodatachange",this.ob);a.Ig(this.element,this);this.ob()},L5=function(a){D5.call(this,a,"videowall-endscreen");
var b=this;this.I=a;this.u=0;this.stills=[];this.B=this.videoData=this.suggestions=null;this.C=this.J=!1;this.L=null;this.l=new g.kN(this);g.J(this,this.l);this.G=new g.K(function(){g.M(b.element,"ytp-show-tiles")},0);
g.J(this,this.G);var c=new g.V({D:"button",Fa:["ytp-button","ytp-endscreen-previous"],U:{"aria-label":"Previous"},S:[g.pL()]});g.J(this,c);c.Ba(this.element);c.Qa("click",this.xO,this);this.table=new g.hL({D:"div",K:"ytp-endscreen-content"});g.J(this,this.table);this.table.Ba(this.element);c=new g.V({D:"button",Fa:["ytp-button","ytp-endscreen-next"],U:{"aria-label":"Next"},S:[g.qL()]});g.J(this,c);c.Ba(this.element);c.Qa("click",this.wO,this);a.getVideoData().Zb?this.i=new z5(a,!0):this.i=new F5(a);
g.J(this,this.i);g.hN(this.player,this.i.element,4);this.hide()},M5=function(a){return g.iN(a.player)&&a.Jt()&&!a.B},bPa=function(a,b){return g.Re(b.suggestions,function(c){c=g.JP(a.I.T(),c);
g.J(a,c);return c})},N5=function(a){var b=a.Qd();
b!==a.J&&(a.J=b,a.player.ea("autonavvisibility"))},O5=function(a){g.rN.call(this,a);
var b=this;this.endScreen=null;this.i=this.l=this.u=!1;this.listeners=new g.kN(this);g.J(this,this.listeners);this.env=a.T();cPa(a)?(this.u=!0,dPa(this),this.i?this.endScreen=new H5(a):this.endScreen=new L5(this.player)):this.env.Nc?this.endScreen=new J5(this.player):this.endScreen=new D5(this.player);g.J(this,this.endScreen);g.hN(this.player,this.endScreen.element,4);ePa(this);this.listeners.N(a,"videodatachange",this.ob,this);this.listeners.N(a,g.dA("endscreen"),function(c){b.Ad(c)});
this.listeners.N(a,g.eA("endscreen"),function(c){b.lf(c)})},dPa=function(a){var b=a.player.getVideoData();
if(!b||a.i===b.Fh&&a.l===b.Zb)return!1;a.i=b.Fh;a.l=b.Zb;return!0},cPa=function(a){a=a.T();
return a.Bb&&!a.Nc},ePa=function(a){a.player.Te("endscreen");
var b=a.player.getVideoData();b=new g.aA(Math.max(1E3*(b.lengthSeconds-10),0),0x8000000000000,{id:"preload",namespace:"endscreen"});var c=new g.aA(0x8000000000000,0x8000000000000,{id:"load",priority:6,namespace:"endscreen"});a.player.Gd([b,c])};
g.aN.prototype.jp=g.ca(2,function(){return this.app.jp()});
g.RX.prototype.jp=g.ca(1,function(){return this.getVideoData().mH});
g.w(x5,g.V);x5.prototype.select=function(){(this.I.Jj(this.suggestion.ib().videoId,this.suggestion.Vd,this.suggestion.getPlaylistId(),void 0,void 0,this.suggestion.jC||void 0)||this.I.X("web_player_endscreen_double_log_fix_killswitch"))&&this.I.Fb(this.element)};
x5.prototype.onClick=function(a){g.QN(a,this.I,this.i,this.suggestion.Vd||void 0)&&this.select()};
x5.prototype.l=function(a){switch(a.keyCode){case 13:case 32:g.ou(a)||(this.select(),g.nu(a))}};g.w(z5,g.V);g.k=z5.prototype;g.k.ot=function(a){this.suggestion!==a&&(this.suggestion=a,w5(this.i,a),this.playButton.Sa("url",this.suggestion.cn()),C5(this))};
g.k.Eh=function(){return 0<this.l};
g.k.zs=function(){this.Eh()||(this.l=Date.now(),y5(this),ZOa(this.I,B5(this)),g.N(this.I.getRootNode(),"countdown-running",this.Eh()))};
g.k.Tp=function(){this.hm();y5(this);var a=this.i.Ca("ytp-autonav-endscreen-upnext-header");a&&g.xg(a,"Up next")};
g.k.hm=function(){this.Eh()&&(this.B.stop(),this.l=0)};
g.k.select=function(a){this.I.nextVideo(!1,void 0===a?!1:a);this.hm()};
g.k.mG=function(a){g.QN(a,this.I)&&(a.currentTarget===this.playButton.element?this.I.Fb(this.playButton.element):a.currentTarget===this.i.Ca("ytp-autonav-endscreen-link-container")&&(a=this.i.Ca("ytp-autonav-endscreen-link-container"),this.I.kb(a,!0),this.I.Fb(a)),this.select())};
g.k.rO=function(){this.I.Fb(this.cancelButton.element);g.cN(this.I,!0)};
g.k.lG=function(){var a=this.I.Qd();this.C&&this.xb!==a&&g.kL(this,a);C5(this);this.I.kb(this.element,a);this.I.kb(this.cancelButton.element,a);this.I.kb(this.i.Ca("ytp-autonav-endscreen-link-container"),a);this.I.kb(this.playButton.element,a)};
g.k.hf=function(a){return 400>a.width||459>a.height};g.w(D5,g.V);g.k=D5.prototype;g.k.create=function(){this.created=!0};
g.k.destroy=function(){this.created=!1};
g.k.Jt=function(){return!1};
g.k.Qd=function(){return!1};
g.k.yJ=function(){return!1};g.w(F5,g.V);g.k=F5.prototype;g.k.ix=function(){this.notification&&(this.B.stop(),this.jc(this.u),this.u=null,this.notification.close(),this.notification=null)};
g.k.ot=function(a){this.suggestion=a;w5(this,a,"hqdefault.jpg")};
g.k.nG=function(){g.kL(this,this.api.Qd());this.api.kb(this.element,this.api.Qd());this.api.kb(this.Ca("ytp-upnext-autoplay-icon"),this.api.Qd());this.cancelButton&&this.api.kb(this.cancelButton.element,this.api.Qd())};
g.k.wT=function(){window.focus();this.ix()};
g.k.zs=function(a){var b=this;this.Eh()||(g.Su("a11y-announce","Up Next "+this.suggestion.title),this.l=(0,g.P)(),this.i=new g.K(function(){G5(b,a)},25),G5(this,a),ZOa(this.api,$Oa(this,a)));
g.Oq(this.element,"ytp-upnext-autoplay-paused")};
g.k.hide=function(){g.V.prototype.hide.call(this)};
g.k.Eh=function(){return!!this.i};
g.k.Tp=function(){this.hm();this.l=(0,g.P)();G5(this);g.M(this.element,"ytp-upnext-autoplay-paused")};
g.k.hm=function(){this.Eh()&&(this.i.dispose(),this.i=null)};
g.k.select=function(a){a=void 0===a?!1:a;if(g.S(this.api.T().experiments,"autonav_notifications")&&a&&window.Notification&&document.hasFocus){var b=Notification.permission;"default"===b?Notification.requestPermission():"granted"!==b||document.hasFocus()||(b=this.suggestion.ib(),this.ix(),this.notification=new Notification("Up Next",{body:b.title,icon:b.Re()}),this.u=this.N(this.notification,"click",this.wT),this.B.start())}this.hm();this.api.nextVideo(!1,a)};
g.k.tO=function(a){!g.wg(this.cancelButton.element,g.ju(a))&&g.QN(a,this.api)&&(this.api.Qd()&&this.api.Fb(this.Ca("ytp-upnext-autoplay-icon")),this.select())};
g.k.sO=function(){this.api.Qd()&&this.cancelButton&&this.api.Fb(this.cancelButton.element);g.cN(this.api,!0)};
g.k.mT=function(a){E5(this);this.show();this.zs(a)};
g.k.DM=function(a){E5(this);this.suggestion&&this.suggestion.ib().videoId===a.ib().videoId||this.ot(a)};
g.k.nT=function(){E5(this);this.hm();this.hide()};
g.k.va=function(){this.hm();this.ix();g.V.prototype.va.call(this)};g.w(H5,D5);g.k=H5.prototype;g.k.create=function(){D5.prototype.create.call(this);this.B.N(this.player,"appresize",this.nt);this.B.N(this.player,"onVideoAreaChange",this.nt);this.B.N(this.player,"videodatachange",this.ob);this.B.N(this.player,"autonavchange",this.oG);this.B.N(this.player,"autonavcancel",this.uO);this.ob()};
g.k.show=function(){D5.prototype.show.call(this);(this.G||this.u&&this.u!==this.videoData.clientPlaybackNonce)&&g.cN(this.player,!1);g.iN(this.player)&&this.Jt()&&!this.u?(I5(this),2===this.videoData.autonavState?this.player.T().X("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.i.select(!0):this.i.zs():3===this.videoData.autonavState&&this.i.Tp()):(g.cN(this.player,!0),I5(this));this.nt()};
g.k.hide=function(){D5.prototype.hide.call(this);this.i.Tp();I5(this)};
g.k.nt=function(){var a=this.player.cj(!0,this.player.isFullscreen());I5(this);C5(this.l);g.N(this.element,"ytp-autonav-cancelled-small-mode",this.hf(a));g.N(this.element,"ytp-autonav-cancelled-tiny-mode",this.sy(a));g.N(this.element,"ytp-autonav-cancelled-mini-mode",400>=a.width||360>=a.height);this.overlay&&g.Bl(this.overlay.element,{width:a.width+"px"});if(!this.C){a=g.q(this.videos.entries());for(var b=a.next();!b.done;b=a.next()){var c=g.q(b.value);b=c.next().value;c=c.next().value;g.N(c.element,
"ytp-suggestion-card-with-margin",1===b%2)}}};
g.k.ob=function(){var a=this.player.getVideoData();if(this.videoData!==a&&a){this.videoData=a;if((this.suggestions=aPa(this,a))&&this.suggestions.length)for(this.i.ot(this.suggestions[0]),this.i!==this.l&&this.l.ot(this.suggestions[0]),a=0;a<fPa.length;++a){var b=fPa[a];if(this.suggestions&&this.suggestions[b]){this.videos[a]=new x5(this.player);var c=this.videos[a];b=this.suggestions[b];c.suggestion!==b&&(c.suggestion=b,w5(c,b));g.J(this,this.videos[a]);this.videos[a].Ba(this.J.element)}}this.nt()}};
g.k.oG=function(a){1===a?(this.G=!1,this.u=this.videoData.clientPlaybackNonce,this.i.hm(),this.xb&&this.nt()):(this.G=!0,this.Qd()&&(2===a?this.i.zs():3===a&&this.i.Tp()))};
g.k.uO=function(a){a?this.oG(1):(this.u=null,this.G=!1)};
g.k.Jt=function(){return 1!==this.videoData.autonavState};
g.k.hf=function(a){return(910>a.width||459>a.height)&&!this.sy(a)&&!(400>=a.width||360>=a.height)};
g.k.sy=function(a){return 800>a.width&&!(400>=a.width||360>=a.height)};
g.k.Qd=function(){return this.xb&&g.iN(this.player)&&this.Jt()&&!this.u};
var fPa=[1,3,2,4];g.w(J5,D5);J5.prototype.Na=function(){var a=this.player.getVideoData();this.i.update({profilePicture:a.hg,author:a.author});this.subscribeButton.channelId=a.Nh;var b=this.subscribeButton;a.subscribed?b.l():b.u()};g.w(K5,g.V);K5.prototype.select=function(){(this.api.Jj(this.suggestion.ib().videoId,this.suggestion.Vd,this.suggestion.getPlaylistId(),void 0,void 0,this.suggestion.jC||void 0)||this.api.X("web_player_endscreen_double_log_fix_killswitch"))&&this.api.Fb(this.element)};
K5.prototype.onClick=function(a){g.QN(a,this.api,this.l,this.suggestion.Vd||void 0)&&this.select()};
K5.prototype.u=function(a){switch(a.keyCode){case 13:case 32:g.ou(a)||(this.select(),g.nu(a))}};
K5.prototype.ob=function(){var a=this.api.getVideoData(),b=this.api.T();this.l=a.C?!1:b.l};g.w(L5,D5);g.k=L5.prototype;g.k.create=function(){D5.prototype.create.call(this);var a=this.player.getVideoData();a&&(this.suggestions=bPa(this,a),this.videoData=a);this.Uk();this.l.N(this.player,"appresize",this.Uk);this.l.N(this.player,"onVideoAreaChange",this.Uk);this.l.N(this.player,"videodatachange",this.ob);this.l.N(this.player,"autonavchange",this.WA);this.l.N(this.player,"autonavcancel",this.vO);a=this.videoData.autonavState;a!==this.L&&this.WA(a);this.l.N(this.element,"transitionend",this.OU)};
g.k.destroy=function(){g.Ix(this.l);g.gf(this.stills);this.stills=[];this.suggestions=null;D5.prototype.destroy.call(this);g.Oq(this.element,"ytp-show-tiles");this.G.stop();this.L=this.videoData.autonavState};
g.k.Jt=function(){return 1!==this.videoData.autonavState};
g.k.show=function(){D5.prototype.show.call(this);g.Oq(this.element,"ytp-show-tiles");this.player.T().i?g.Hq(this.G):this.G.start();(this.C||this.B&&this.B!==this.videoData.clientPlaybackNonce)&&g.cN(this.player,!1);M5(this)?(N5(this),2===this.videoData.autonavState?this.player.T().X("fast_autonav_in_background")&&3===this.player.getVisibilityState()?this.i.select(!0):this.i.zs():3===this.videoData.autonavState&&this.i.Tp()):(g.cN(this.player,!0),N5(this))};
g.k.hide=function(){D5.prototype.hide.call(this);this.i.Tp();N5(this)};
g.k.OU=function(a){g.ju(a)===this.element&&this.Uk()};
g.k.Uk=function(){if(this.suggestions&&this.suggestions.length){g.M(this.element,"ytp-endscreen-paginate");var a=this.I.cj(!0,this.I.isFullscreen()),b=g.YM(this.I);b&&(b=b.Ke()?48:32,a.width-=2*b);var c=a.width/a.height,d=96/54,e=b=2,f=Math.max(a.width/96,2),h=Math.max(a.height/54,2),l=this.suggestions.length,m=Math.pow(2,2);var n=l*m+(Math.pow(2,2)-m);n+=Math.pow(2,2)-m;for(n-=m;0<n&&(b<f||e<h);){var p=b/2,r=e/2,t=b<=f-2&&n>=r*m,u=e<=h-2&&n>=p*m;if((p+1)/r*d/c>c/(p/(r+1)*d)&&u)n-=p*m,e+=2;else if(t)n-=
r*m,b+=2;else if(u)n-=p*m,e+=2;else break}d=!1;n>=3*m&&6>=l*m-n&&(4<=e||4<=b)&&(d=!0);m=96*b;n=54*e;c=m/n<c?a.height/n:a.width/m;c=Math.min(c,2);m=Math.floor(Math.min(a.width,m*c));n=Math.floor(Math.min(a.height,n*c));a=this.table.element;g.Pl(a,m,n);g.Bl(a,{marginLeft:m/-2+"px",marginTop:n/-2+"px"});this.i.ot(this.suggestions[0]);this.i instanceof z5&&C5(this.i);g.N(this.element,"ytp-endscreen-takeover",M5(this));N5(this);m+=4;n+=4;for(f=c=0;f<b;f++)for(h=0;h<e;h++)if(p=c,r=0,d&&f>=b-2&&h>=e-2?r=
1:0===h%2&&0===f%2&&(2>h&&2>f?0===h&&0===f&&(r=2):r=2),p=g.Pf(p+this.u,l),0!==r){t=this.stills[c];t||(t=new K5(this.player),this.stills[c]=t,a.appendChild(t.element));u=Math.floor(n*h/e);var x=Math.floor(m*f/b),y=Math.floor(n*(h+r)/e)-u-4,z=Math.floor(m*(f+r)/b)-x-4;g.Il(t.element,x,u);g.Pl(t.element,z,y);g.Bl(t.element,"transitionDelay",(h+f)/20+"s");g.N(t.element,"ytp-videowall-still-mini",1===r);g.N(t.element,"ytp-videowall-still-large",2<r);r=t;p=this.suggestions[p];r.suggestion!==p&&(r.suggestion=
p,t=r.api.T(),u=g.Mq(r.element,"ytp-videowall-still-large")?"hqdefault.jpg":"mqdefault.jpg",w5(r,p,u),g.xF(t)&&(t=p.cn(),t=g.vi(t,g.QM("emb_rel_end")),r.Sa("url",t)),(p=(p=p.Vd)&&p.itct)&&r.api.fm(r.element,p));c++}g.N(this.element,"ytp-endscreen-paginate",c<l);for(b=this.stills.length-1;b>=c;b--)e=this.stills[b],g.ug(e.element),g.ff(e);this.stills.length=c}};
g.k.ob=function(){var a=this.player.getVideoData();this.videoData!==a&&(this.u=0,this.suggestions=bPa(this,a),this.videoData=a,this.Uk())};
g.k.wO=function(){this.u+=this.stills.length;this.Uk()};
g.k.xO=function(){this.u-=this.stills.length;this.Uk()};
g.k.yJ=function(){return this.i.Eh()};
g.k.WA=function(a){1===a?(this.C=!1,this.B=this.videoData.clientPlaybackNonce,this.i.hm(),this.xb&&this.Uk()):(this.C=!0,this.xb&&M5(this)&&(2===a?this.i.zs():3===a&&this.i.Tp()))};
g.k.vO=function(a){if(a){for(a=0;a<this.stills.length;a++)this.I.kb(this.stills[a].element,!0);this.WA(1)}else this.B=null,this.C=!1;this.Uk()};
g.k.Qd=function(){return this.xb&&M5(this)};g.w(O5,g.rN);g.k=O5.prototype;g.k.hq=function(){var a=this.player.getVideoData(),b=!!(a&&a.suggestions&&a.suggestions.length);b=!cPa(this.player)||b;var c=a.ze||g.IF(a.B),d=this.player.vu();a=a.mutedAutoplay;return b&&!c&&!d&&!a};
g.k.Qd=function(){return this.endScreen.Qd()};
g.k.eR=function(){return this.Qd()?this.endScreen.yJ():!1};
g.k.va=function(){this.player.Te("endscreen");g.rN.prototype.va.call(this)};
g.k.load=function(){var a=this.player.getVideoData();var b=a.jH;if(b&&b.videoId){var c=this.player.sb().rd.get("heartbeat");a&&a.suggestions&&a.suggestions.length&&b.videoId===a.suggestions[0].id&&!a.MF?a=!1:(this.player.Jj(b.videoId,void 0,void 0,!0,!0,b),c&&c.Ey("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"),a=!0)}else a=!1;a||(g.rN.prototype.load.call(this),this.endScreen.show())};
g.k.unload=function(){g.rN.prototype.unload.call(this);this.endScreen.hide();this.endScreen.destroy()};
g.k.Ad=function(a){this.hq()&&(this.endScreen.created||this.endScreen.create(),"load"===a.getId()&&this.load())};
g.k.lf=function(a){"load"===a.getId()&&this.loaded&&this.unload()};
g.k.ob=function(){ePa(this);this.u&&dPa(this)&&(this.endScreen&&(this.endScreen.hide(),this.endScreen.created&&this.endScreen.destroy(),this.endScreen.dispose()),this.i?this.endScreen=new H5(this.player):this.endScreen=new L5(this.player),g.J(this,this.endScreen),g.hN(this.player,this.endScreen.element,4))};g.CN.endscreen=O5;})(_yt_player);