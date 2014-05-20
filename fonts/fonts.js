/*

 MyFonts Webfont Build ID 2811663, 2014-05-14T09:23:58-0400

 The fonts listed in this notice are subject to the End User License
 Agreement(s) entered into by the website owner. All other parties are 
 explicitly restricted from using the Licensed Webfonts(s).

 You may obtain a valid license at the URLs below.

 Webfont: Gill Sans Std Italic by Monotype 
 URL: http://www.myfonts.com/fonts/mti/gill-sans/std-italic/
 Copyright: Font software Copyright 2001 Adobe Systems Incorporated. Typeface designs Copyright The Monotype Corporation. All Rights Reserved.

 Webfont: Gill Sans Std Light by Monotype 
 URL: http://www.myfonts.com/fonts/mti/gill-sans/std-light/
 Copyright: Font software Copyright 2001 Adobe Systems Incorporated. Typeface designs Copyright The Monotype Corporation. All Rights Reserved.

 Webfont: Gill Sans Std Light Italic by Monotype 
 URL: http://www.myfonts.com/fonts/mti/gill-sans/std-light-italic/
 Copyright: Font software Copyright 2001 Adobe Systems Incorporated. Typeface designs Copyright The Monotype Corporation. All Rights Reserved.

 Webfont: Gill Sans Std Roman by Monotype 
 URL: http://www.myfonts.com/fonts/mti/gill-sans/std-roman/
 Copyright: Font software Copyright 2001 Adobe Systems Incorporated. Typeface designs Copyright The Monotype Corporation. All Rights Reserved.

 Webfont: Levato Pro by Linotype
 URL: http://www.myfonts.com/fonts/linotype/levato-pro/regular/
 Copyright: Copyright &#x00A9; 2012 Linotype GmbH, www.linotype.com. All rights reserved. This font software may not be reproduced, modified, disclosed or transferred without the express written approval of Linotype GmbH. Levato is a trademark of Linotype Corp. and m


 License: http://www.myfonts.com/viewlicense?type=web&buildid=2811663
 Licensed pageviews: 250,000

 ? 2014 MyFonts Inc
*/
var protocol=document.location.protocol;"https:"!=protocol&&(protocol="http:");var count=document.createElement("script");count.type="text/javascript";count.async=!0;count.src=protocol+"//hello.myfonts.net/count/2ae70f";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(count,s);var browserName,browserVersion,webfontType;if("undefined"==typeof woffEnabled)var woffEnabled=!0;var svgEnabled=1;
if("undefined"!=typeof customPath)var path=customPath;else{var scripts=document.getElementsByTagName("SCRIPT"),script=scripts[scripts.length-1].src;script.match("://")||"/"==script.charAt(0)||(script="./"+script);path=script.replace(/\\/g,"/").replace(/\/[^\/]*\/?$/,"")}
var wfpath=path+"/webfonts/",browsers=[{regex:"MSIE (\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$1)",type:[{version:9,type:"woff"},{version:5,type:"eot"}]},{regex:"Trident/(\\d+\\.\\d+); (.+)?rv:(\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$3)",type:[{version:11,type:"woff"}]},{regex:"Firefox[/s](\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$1)",type:[{version:3.6,type:"woff"},{version:3.5,type:"ttf"}]},{regex:"Chrome/(\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$1)",type:[{version:6,type:"woff"},
{version:4,type:"ttf"}]},{regex:"Mozilla.*Android (\\d+\\.\\d+).*AppleWebKit.*Safari",versionRegex:"new Number(RegExp.$1)",type:[{version:4.1,type:"woff"},{version:3.1,type:"svg#wf"},{version:2.2,type:"ttf"}]},{regex:"Mozilla.*(iPhone|iPad).* OS (\\d+)_(\\d+).* AppleWebKit.*Safari",versionRegex:"new Number(RegExp.$2) + (new Number(RegExp.$3) / 10)",unhinted:!0,type:[{version:5,type:"woff"},{version:4.2,type:"ttf"},{version:1,type:"svg#wf"}]},{regex:"Mozilla.*(iPhone|iPad|BlackBerry).*AppleWebKit.*Safari",
versionRegex:"1.0",type:[{version:1,type:"svg#wf"}]},{regex:"Version/(\\d+\\.\\d+)(\\.\\d+)? Safari/(\\d+\\.\\d+)",versionRegex:"new Number(RegExp.$1)",type:[{version:5.1,type:"woff"},{version:3.1,type:"ttf"}]},{regex:"Opera/(\\d+\\.\\d+)(.+)Version/(\\d+\\.\\d+)(\\.\\d+)?",versionRegex:"new Number(RegExp.$3)",type:[{version:11.1,type:"woff"},{version:10.1,type:"ttf"}]}],browLen=browsers.length,suffix="",i=0;
a:for(;i<browLen;i++){var regex=RegExp(browsers[i].regex);if(regex.test(navigator.userAgent)){browserVersion=eval(browsers[i].versionRegex);var typeLen=browsers[i].type.length;for(j=0;j<typeLen;j++)if(browserVersion>=browsers[i].type[j].version&&(!0==browsers[i].unhinted&&(suffix="_unhinted"),webfontType=browsers[i].type[j].type,"woff"!=webfontType||woffEnabled)&&("svg#wf"!=webfontType||svgEnabled))break a}else webfontType="woff"}
/(Macintosh|Android)/.test(navigator.userAgent)&&"svg#wf"!=webfontType&&(suffix="_unhinted");var head=document.getElementsByTagName("head")[0],stylesheet=document.createElement("style");stylesheet.setAttribute("type","text/css");head.appendChild(stylesheet);
for(var fonts=[{fontFamily:"GillSansMTStd-MediumItalic",url:wfpath+"2AE70F_0"+suffix+"_0."+webfontType},{fontFamily:"GillSans",fontWeight:"normal",fontStyle:"normal",url:wfpath+"2AE70F_1"+suffix+"_0."+webfontType},{fontFamily:"GillSans",fontWeight:"normal",fontStyle:"italic",url:wfpath+"2AE70F_2"+suffix+"_0."+webfontType},{fontFamily:"GillSans",fontWeight:"bold",fontStyle:"normal",url:wfpath+"2AE70F_3"+suffix+"_0."+webfontType},{fontFamily:"LevatoPro-Regular",url:wfpath+"2AE70F_4"+suffix+"_0."+webfontType}],
len=fonts.length,css="",i=0;i<len;i++){var format="svg#wf"==webfontType?'format("svg")':"ttf"==webfontType?'format("truetype")':"eot"==webfontType?"":'format("'+webfontType+'")',css=css+("@font-face{font-family: "+fonts[i].fontFamily+";src:url("+fonts[i].url+")"+format+";");fonts[i].fontWeight&&(css+="font-weight: "+fonts[i].fontWeight+";");fonts[i].fontStyle&&(css+="font-style: "+fonts[i].fontStyle+";");css+="}"}stylesheet.styleSheet?stylesheet.styleSheet.cssText=css:stylesheet.innerHTML=css;
