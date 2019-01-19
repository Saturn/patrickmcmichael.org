(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{142:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return p});var r=a(7),n=a.n(r),i=a(0),o=a.n(i),s=a(145),l=a(154),d=a(149),c=a(150),u=a(146),f=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return o.a.createElement(d.a,{location:this.props.location,title:t},o.a.createElement(c.a,{title:"All posts",keywords:["blog","developer","javascript","python"]}),o.a.createElement(l.a,null),a.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return o.a.createElement("div",{key:t.fields.slug},o.a.createElement("h3",{style:{marginBottom:Object(u.a)(.25)}},o.a.createElement(s.Link,{style:{boxShadow:"none"},to:t.fields.slug},a)),o.a.createElement("small",null,t.frontmatter.date),o.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))}))},t}(o.a.Component);t.default=f;var p="1623555389"},145:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});var r=a(0),n=a.n(r),i=a(4),o=a.n(i),s=a(144),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var d=a(147),c=a.n(d);a.d(t,"PageRenderer",function(){return c.a});var u=a(33);a.d(t,"parsePath",function(){return u.a});var f=n.a.createContext({}),p=function(e){return n.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},146:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d});var r=a(156),n=a.n(r),i=a(157),o=a.n(i);o.a.bodyFontFamily=["Georgia","serif"];var s=new n.a(o.a);var l=s.rhythm,d=s.scale},147:function(e,t,a){var r;e.exports=(r=a(148))&&r.default||r},148:function(e,t,a){"use strict";a.r(t);a(32);var r=a(0),n=a.n(r),i=a(4),o=a.n(i),s=a(52),l=a(2),d=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=d},149:function(e,t,a){"use strict";a(32);var r=a(7),n=a.n(r),i=a(0),o=a.n(i),s=a(145),l=a(146),d=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,r=t.title,n=t.children;return e="/"===a.pathname?o.a.createElement("h1",{style:Object.assign({},Object(l.b)(1),{marginBottom:Object(l.a)(1.5),marginTop:0})},o.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):o.a.createElement("h3",{style:{marginTop:0}},o.a.createElement(s.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},e,n,o.a.createElement("footer",null,"© ",(new Date).getFullYear()," Patrick McMichael"))},t}(o.a.Component);t.a=d},150:function(e,t,a){"use strict";var r=a(151),n=a(0),i=a.n(n),o=a(4),s=a.n(o),l=a(158),d=a.n(l),c=a(145);function u(e){var t=e.description,a=e.lang,n=e.meta,o=e.keywords,s=e.title;return i.a.createElement(c.StaticQuery,{query:f,render:function(e){var r=t||e.site.siteMetadata.description;return i.a.createElement(d.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:s},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:r}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(n)})},data:r})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u;var f="1025518380"},151:function(e){e.exports={data:{site:{siteMetadata:{title:"patrickmcmichael.org",description:"This is my blog.",author:"Patrick McMichael"}}}}},154:function(e,t,a){"use strict";var r=a(7),n=a.n(r),i=a(0),o=a.n(i),s=(a(145),a(155),a(146)),l=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){return o.a.createElement("div",{style:{display:"flex",marginBottom:Object(s.a)(1)}},o.a.createElement("p",null,"Written by ",o.a.createElement("strong",null,"Patrick McMichael"),". Find me on"," ",o.a.createElement("a",{href:"https://github.com/Saturn",target:"_blank"},"Github"),"."))},t}(o.a.Component);t.a=l},155:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var n,i=r(a(7)),o=r(a(51)),s=r(a(152)),l=r(a(153)),d=r(a(0)),c=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=[];var m=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),h.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1";return"<picture>"+r+n+"<img "+s+l+t+o+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=d.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,n=e.onError,i=(0,s.default)(e,["style","onLoad","onError"]);return d.default.createElement("img",(0,l.default)({},i,{onLoad:r,onError:n,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,n=!1,i=t.fadeIn,s=p(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,n=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,n=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:n,fadeIn:i,hasNoScript:l,seenBefore:s},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:p(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,v=e.Tag,w="boolean"==typeof b?"lightgray":b,S=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),E=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),L={title:t,alt:this.state.isVisible?"":a,style:S,className:p};if(h){var R=h;return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(R.srcSet)},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/R.aspectRatio+"%"}}),R.base64&&d.default.createElement(y,(0,l.default)({src:R.base64},L)),R.tracedSVG&&d.default.createElement(y,(0,l.default)({src:R.tracedSVG},L)),w&&d.default.createElement(v,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&d.default.createElement("picture",null,R.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),d.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),d.default.createElement(y,{alt:a,title:t,src:R.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},R))}}))}if(m){var k=m,I=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},i);return"inherit"===i.display&&delete I.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:I,ref:this.handleRef,key:"fixed-"+JSON.stringify(k.srcSet)},k.base64&&d.default.createElement(y,(0,l.default)({src:k.base64},L)),k.tracedSVG&&d.default.createElement(y,(0,l.default)({src:k.tracedSVG},L)),w&&d.default.createElement(v,{title:t,style:{backgroundColor:w,width:k.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:k.height}}),this.state.isVisible&&d.default.createElement("picture",null,k.srcSetWebp&&d.default.createElement("source",{type:"image/webp",srcSet:k.srcSetWebp,sizes:k.sizes}),d.default.createElement("source",{srcSet:k.srcSet,sizes:k.sizes}),d.default.createElement(y,{alt:a,title:t,width:k.width,height:k.height,src:k.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:k.width,height:k.height},k))}}))}return null},t}(d.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),w=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});b.propTypes={resolutions:v,sizes:w,fixed:v,fluid:w,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string};var S=b;t.default=S}}]);
//# sourceMappingURL=component---src-pages-index-js-baca2a63b81d5a95037b.js.map