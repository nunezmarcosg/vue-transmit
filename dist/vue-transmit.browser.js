window.VueTransmit=function(e){function t(i){if(a[i])return a[i].exports;var s=a[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var a={};return t.m=e,t.c=a,t.d=function(e,a,i){t.o(e,a)||Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var a=e&&e.__esModule?function(){return e['default']}:function(){return e};return t.d(a,'a',a),a},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p='',t(t.s=0)}([function(e,t,a){'use strict';function i(e){if('string'==typeof e)return e;if($(e))return D(e,i)+'';if(R(e))return Q?Q.call(e):'';var t=e+'';return'0'==t&&1/e==-M?'-0':t}function s(e){var t=-1,a=null==e?0:e.length;for(this.clear();++t<a;){var i=e[t];this.set(i[0],i[1])}}function l(e){var t=-1,a=null==e?0:e.length;for(this.clear();++t<a;){var i=e[t];this.set(i[0],i[1])}}function d(e){var t=-1,a=null==e?0:e.length;for(this.clear();++t<a;){var i=e[t];this.set(i[0],i[1])}}function r(e,t){if('function'!=typeof e||null!=t&&'function'!=typeof t)throw new TypeError(Ue);var a=function(){var i=arguments,s=t?t.apply(this,i):i[0],l=a.cache;if(l.has(s))return l.get(s);var d=e.apply(this,i);return a.cache=l.set(s,d)||l,d};return a.cache=new(r.Cache||we),a}function n(e){var t=++Je;return e+''+t}function o(e){let t={};for(let a in e)'function'!=typeof e[a]&&(t[a]=e[a]);return t}function p(e){let t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:2,a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:'round';const i=Math.pow(10,t);return Math[a](e*i)/i}function u(e){return e/125}function c(e){return e/125000}function g(e,t){return u(e)/t}function h(e,t){return c(e)/t}function m(){let e=0<arguments.length&&arguments[0]!==void 0?arguments[0]:{};return function(t,a){return e[a]===void 0?t:e[a]}}function f(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}function y(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')}function F(){return Array.prototype.concat.apply([],arguments)}Object.defineProperty(t,'__esModule',{value:!0});var _={};a.d(_,'VueTransmit',function(){return rt}),a.d(_,'CheckMark',function(){return ut});var b=a(3),v='object'==typeof self&&self&&self.Object===Object&&self,E=b.a||v||Function('return this')(),x=E,P=x.Symbol,S=P,D=function(e,t){for(var a=-1,i=null==e?0:e.length,s=Array(i);++a<i;)s[a]=t(e[a],a,e);return s},T=Array.isArray,$=T,C=Object.prototype,k=C.hasOwnProperty,w=C.toString,U=S?S.toStringTag:void 0,A=function(e){var t=k.call(e,U),a=e[U];try{e[U]=void 0}catch(t){}var i=w.call(e);return t?e[U]=a:delete e[U],i},O=Object.prototype,I=O.toString,z=function(e){return I.call(e)},H=S?S.toStringTag:void 0,N=function(e){return null==e?void 0===e?'[object Undefined]':'[object Null]':H&&H in Object(e)?A(e):z(e)},W=function(e){return null!=e&&'object'==typeof e},R=function(e){return'symbol'==typeof e||W(e)&&N(e)=='[object Symbol]'},M=1/0,L=S?S.prototype:void 0,Q=L?L.toString:void 0,j=function(e){return null==e?'':i(e)},q=0,B=Object.prototype,G=B.hasOwnProperty,X=function(e,t){return null!=e&&G.call(e,t)},Y=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,V=/^\w*$/,Z=function(e,t){if($(e))return!1;var a=typeof e;return'number'==a||'symbol'==a||'boolean'==a||null==e||R(e)||V.test(e)||!Y.test(e)||null!=t&&e in Object(t)},J=function(e){var t=typeof e;return null!=e&&('object'==t||'function'==t)},K=function(e){if(!J(e))return!1;var t=N(e);return t=='[object Function]'||t=='[object GeneratorFunction]'||t=='[object AsyncFunction]'||t=='[object Proxy]'},ee=x['__core-js_shared__'],te=ee,ae=function(){var e=/[^.]+$/.exec(te&&te.keys&&te.keys.IE_PROTO||'');return e?'Symbol(src)_1.'+e:''}(),ie=function(e){return!!ae&&ae in e},se=Function.prototype,le=se.toString,de=function(e){if(null!=e){try{return le.call(e)}catch(t){}try{return e+''}catch(t){}}return''},re=/[\\^$.*+?()[\]{}|]/g,ne=/^\[object .+?Constructor\]$/,oe=Function.prototype,pe=Object.prototype,ue=oe.toString,ce=pe.hasOwnProperty,ge=RegExp('^'+ue.call(ce).replace(re,'\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$'),he=function(e){if(!J(e)||ie(e))return!1;var t=K(e)?ge:ne;return t.test(de(e))},me=function(e,t){return null==e?void 0:e[t]},fe=function(e,t){var a=me(e,t);return he(a)?a:void 0},ye=fe(Object,'create'),Fe=ye,_e=Object.prototype,be=_e.hasOwnProperty,ve=Object.prototype,Ee=ve.hasOwnProperty;s.prototype.clear=function(){this.__data__=Fe?Fe(null):{},this.size=0},s.prototype['delete']=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},s.prototype.get=function(e){var t=this.__data__;if(Fe){var a=t[e];return a==='__lodash_hash_undefined__'?void 0:a}return be.call(t,e)?t[e]:void 0},s.prototype.has=function(e){var t=this.__data__;return Fe?t[e]!==void 0:Ee.call(t,e)},s.prototype.set=function(e,t){var a=this.__data__;return this.size+=this.has(e)?0:1,a[e]=Fe&&void 0===t?'__lodash_hash_undefined__':t,this};var xe=s,Pe=function(e,t){return e===t||e!==e&&t!==t},Se=function(e,t){for(var a=e.length;a--;)if(Pe(e[a][0],t))return a;return-1},De=Array.prototype,Te=De.splice;l.prototype.clear=function(){this.__data__=[],this.size=0},l.prototype['delete']=function(e){var t=this.__data__,a=Se(t,e);if(0>a)return!1;var i=t.length-1;return a==i?t.pop():Te.call(t,a,1),--this.size,!0},l.prototype.get=function(e){var t=this.__data__,a=Se(t,e);return 0>a?void 0:t[a][1]},l.prototype.has=function(e){return-1<Se(this.__data__,e)},l.prototype.set=function(e,t){var a=this.__data__,i=Se(a,e);return 0>i?(++this.size,a.push([e,t])):a[i][1]=t,this};var $e=fe(x,'Map'),Ce=function(e){var t=typeof e;return'string'==t||'number'==t||'symbol'==t||'boolean'==t?'__proto__'!==e:null===e},ke=function(e,t){var a=e.__data__;return Ce(t)?a['string'==typeof t?'string':'hash']:a.map};d.prototype.clear=function(){this.size=0,this.__data__={hash:new xe,map:new($e||l),string:new xe}},d.prototype['delete']=function(e){var t=ke(this,e)['delete'](e);return this.size-=t?1:0,t},d.prototype.get=function(e){return ke(this,e).get(e)},d.prototype.has=function(e){return ke(this,e).has(e)},d.prototype.set=function(e,t){var a=ke(this,e),i=a.size;return a.set(e,t),this.size+=a.size==i?0:1,this};var we=d,Ue='Expected a function';r.Cache=we;var Ae=/^\./,Oe=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ie=/\\(\\)?/g,ze=function(e){var t=r(e,function(e){return a.size===500&&a.clear(),e}),a=t.cache;return t}(function(e){var t=[];return Ae.test(e)&&t.push(''),e.replace(Oe,function(e,a,i,s){t.push(i?s.replace(Ie,'$1'):a||e)}),t}),He=function(e,t){return $(e)?e:Z(e,t)?[e]:ze(j(e))},Ne=function(e){return W(e)&&N(e)=='[object Arguments]'},We=Object.prototype,Re=We.hasOwnProperty,Me=We.propertyIsEnumerable,Le=Ne(function(){return arguments}())?Ne:function(e){return W(e)&&Re.call(e,'callee')&&!Me.call(e,'callee')},Qe=/^(?:0|[1-9]\d*)$/,je=function(e,t){return t=null==t?9007199254740991:t,!!t&&('number'==typeof e||Qe.test(e))&&-1<e&&0==e%1&&e<t},qe=function(e){return'number'==typeof e&&-1<e&&0==e%1&&e<=9007199254740991},Be=function(e){if('string'==typeof e||R(e))return e;var t=e+'';return'0'==t&&1/e==-(1/0)?'-0':t},Ge=function(e,t,a){t=He(t,e);for(var i,s=-1,l=t.length,d=!1;++s<l&&(i=Be(t[s]),!!(d=null!=e&&a(e,i)));)e=e[i];return d||++s!=l?d:(l=null==e?0:e.length,!!l&&qe(l)&&je(i,l)&&($(e)||Le(e)))},Xe=function(e,t){return null!=e&&Ge(e,t,X)},Ye=function(){},Ve={tag:{type:String,default:'div'},dropZoneClasses:{type:[Array,Object,String],default:null},url:{type:String,required:!0},method:{type:String,default:'post'},withCredentials:{type:Boolean,default:!1},timeout:{type:Number,default:0},maxConcurrentUploads:{type:Number,default:2},uploadMultiple:{type:Boolean,default:!1},maxFileSize:{type:Number,default:256},paramName:{type:String,default:'file'},createImageThumbnails:{type:Boolean,default:!0},maxThumbnailFileSize:{type:Number,default:10},thumbnailWidth:{type:Number,default:120},thumbnailHeight:{type:Number,default:120},fileSizeBase:{type:Number,default:1e3},maxFiles:{type:Number,default:null},params:{type:Object,default:function(){return{}}},headers:{type:Object,default:function(){return{}}},clickable:{type:Boolean,default:!0},ignoreHiddenFiles:{type:Boolean,default:!0},acceptedFileTypes:{type:Array,default:function(){return[]}},autoProcessQueue:{type:Boolean,default:!0},autoQueue:{type:Boolean,default:!0},capture:{type:String,default:null},renameFile:{type:Function,default:function(e){return e}},dictFileTooBig:{type:String,default:'File is too big ({{ fileSize }}MiB). Max file size: {{ maxFileSize }}MiB.'},dictInvalidFileType:{type:String,default:'You can\'t upload files of this type.'},dictResponseError:{type:String,default:'Server responded with {{ statusCode }} code.'},dictMaxFilesExceeded:{type:String,default:'You can not upload any more files.'},accept:{type:Function,default:function(e,t){return t()}},resize:{type:Function,default:function(e){let t=e.width,a=e.height,i={srcX:0,srcY:0,srcWidth:t,srcHeight:a};const s=t/a;i.optWidth=this.thumbnailWidth,i.optHeight=this.thumbnailHeight,null==i.optWidth&&null==i.optHeight?(i.optWidth=i.srcWidth,i.optHeight=i.srcHeight):null==i.optWidth?i.optWidth=s*i.optHeight:null==i.optHeight&&(i.optHeight=1/s*i.optWidth);const l=i.optWidth/i.optHeight;return a<i.optHeight||t<i.optWidth?(i.trgHeight=i.srcHeight,i.trgWidth=i.srcWidth):s>l?(i.srcHeight=a,i.srcWidth=i.srcHeight*l):(i.srcWidth=t,i.srcHeight=i.srcWidth/l),i.srcX=(t-i.srcWidth)/2,i.srcY=(a-i.srcHeight)/2,i}}};const Ze=Object.assign;let Je=0;const Ke=/{{\s*?([a-zA-Z]+)\s*?}}/g,et={UNSENT:0,OPENED:1,HEADERS_RECEIVED:2,LOADING:3,DONE:4};var tt=function(){function e(e,t){for(var a,s=0;s<t.length;s++)a=t[s],a.enumerable=a.enumerable||!1,a.configurable=!0,'value'in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}return function(t,a,i){return a&&e(t.prototype,a),i&&e(t,i),t}}();let at=function(){function e(){y(this,e);for(var t=arguments.length,a=Array(t),i=0;i<t;i++)a[i]=arguments[i];Ze.apply(void 0,[this,this.constructor.defaults()].concat(a))}return tt(e,[{key:'set',value:function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return Ze.apply(void 0,[this].concat(t)),this}},{key:'copyNativeFile',value:function(e){if(!(e instanceof window.File))throw new TypeError('The method \'copyNativeFile\' expects an instance of File (Native).');return this._nativeFile=e,this.set(o(e))}},{key:'copyOwnAndInheritedProps',value:function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return this.set.apply(this,f(t.map(o)))}},{key:'handleProgress',value:function(t){if(!(t instanceof ProgressEvent))throw new TypeError('\''+this.constructor.name+'.prototype.handleProgress\' can only be called with the \'ProgressEvent\' object.');this.startProgress();const e=Math.max(t.total,this.upload.total);this.upload.progress=100*t.loaded/e,this.upload.bytesSent=t.loaded,this.upload.total=e,this.upload.time=(Date.now()-this.upload.start)/1e3,this.upload.speed.kbps=p(g(this.upload.bytesSent,this.upload.time)),this.upload.speed.mbps=p(h(this.upload.bytesSent,this.upload.time)),100===this.upload.progress&&this.endProgress()}},{key:'startProgress',value:function(){'number'!=typeof this.upload.start&&(this.upload.start=Date.now())}},{key:'endProgress',value:function(){'number'!=typeof this.upload.end&&(this.upload.end=Date.now(),this.upload.time=(Date.now()-this.upload.start)/1e3)}},{key:'nativeFile',get:function(){return this._nativeFile}}],[{key:'defaults',value:function(){return{_nativeFile:null,id:e.idFactory(),accepted:void 0,lastModified:void 0,lastModifiedDate:void 0,name:void 0,previewElement:void 0,previewTemplate:void 0,processing:void 0,size:void 0,status:void 0,type:void 0,upload:{bytesSent:0,progress:0,speed:{kbps:void 0,mbps:void 0},start:void 0,end:void 0,time:void 0},webkitRelativePath:void 0,width:void 0,height:void 0,xhr:void 0,dataUrl:void 0,errorMessage:void 0,VERSION:'1.0.11'}}},{key:'fromNativeFile',value:function(t){for(var a=arguments.length,i=Array(1<a?a-1:0),s=1;s<a;s++)i[s-1]=arguments[s];const l=new(Function.prototype.bind.apply(e,[null].concat(i)));return l.copyNativeFile(t),l.upload.total=t.size,l}},{key:'idFactory',value:function(){return n('v-transmit-file-')}}]),e}();const it={ADDED:'added',QUEUED:'queued',ACCEPTED:'queued',UPLOADING:'uploading',PROCESSING:'uploading',CANCELED:'canceled',ERROR:'error',TIMEOUT:'timeout',SUCCESS:'success'};var st={props:Ve,data(){return{dragging:!1,processingThumbnail:!1,thumbnailQueue:[],clickableElements:[],listeners:[],files:[],defaultHeaders:{Accept:'application/json',"Cache-Control":'no-cache',"X-Requested-With":'XMLHttpRequest'}}},computed:{inputEl(){return this.$refs.hiddenFileInput},filesToAccept(){return this.acceptedFileTypes.join(',')},multiple(){return null===this.maxFiles||1<this.maxFiles},acceptedFiles(){return this.files.filter((e)=>e.accepted)},rejectedFiles(){return this.files.filter((e)=>!e.accepted)},addedFiles(){return this.getFilesWithStatus(it.ADDED)},queuedFiles(){return this.getFilesWithStatus(it.QUEUED)},uploadingFiles(){return this.getFilesWithStatus(it.UPLOADING)},activeFiles(){return this.getFilesWithStatus(it.UPLOADING,it.QUEUED)},maxFilesReached(){return null!=this.maxFiles&&this.acceptedFiles.length>=this.maxFiles},maxFilesReachedClass(){return this.maxFilesReached?'v-transmit__max-files--reached':null}},watch:{acceptedFiles(e){null==this.maxFiles||e.length>=this.maxFiles&&this.$emit('max-files-reached',this.files)}},methods:{getFilesWithStatus(...e){return this.files.filter((t)=>e.includes(t.status))},onFileInputChange(){const e=Array.from(this.$refs.hiddenFileInput.files).map(this.addFile);this.$emit('added-files',e)},addFile(e){const t=at.fromNativeFile(e);return t.status=it.ADDED,this.files.push(t),this.$emit('added-file',t),this.enqueueThumbnail(t),this.acceptFile(t,(e)=>(e?(t.accepted=!1,this.errorProcessing([t],e)):(t.accepted=!0,this.autoQueue&&this.enqueueFile(t)),t))},removeFile(e){e.status===it.UPLOADING&&this.cancelUpload(e);const t=this.files.findIndex((t)=>t.id===e.id);if(~t&&(this.files.splice(t,1),this.$emit('removed-file',e),0===this.files.length))return this.$emit('reset')},removeAllFiles(e=!1){this.files.forEach((t)=>{(t.status!==it.UPLOADING||e)&&this.removeFile(t)})},triggerBrowseFiles(){this.inputEl.click()},handleClickUploaderAction(){this.clickable&&this.triggerBrowseFiles()},enqueueFile(e){if(e.status===it.ADDED&&!0===e.accepted)e.status=it.QUEUED,this.autoProcessQueue&&setTimeout(this.processQueue,0);else throw new Error('This file can\'t be queued because it has already been processed or was rejected.')},enqueueThumbnail(e){this.createImageThumbnails&&e.type.match(/image.*/)&&e.size<=1024*(1024*this.maxThumbnailFileSize)&&(this.thumbnailQueue.push(e),setTimeout(this.processThumbnailQueue,0))},processThumbnailQueue(){if(!(this.processingThumbnail||0===this.thumbnailQueue.length))return this.processingThumbnail=!0,this.createThumbnail(this.thumbnailQueue.shift(),()=>(this.processingThumbnail=!1,this.processThumbnailQueue()))},createThumbnail(e,t=Ye){const a=new FileReader;return a.addEventListener('load',()=>'image/svg+xml'===e.type?(e.dataUrl=a.result,this.$emit('thumbnail',e,a.result),t()):this.createThumbnailFromUrl(e,a.result,t),!1),a.readAsDataURL(e.nativeFile)},createThumbnailFromUrl(e,t,a,i){const s=document.createElement('img');return i&&(s.crossOrigin=i),s.addEventListener('load',()=>{e.width=s.width,e.height=s.height;const t=this.resize.call(this,e);t.trgWidth||(t.trgWidth=t.optWidth),t.trgHeight||(t.trgHeight=t.optHeight);const i=document.createElement('canvas'),l=i.getContext('2d');i.width=t.trgWidth,i.height=t.trgHeight,l.drawImage(s,t.srcX||0,t.srcY||0,t.srcWidth,t.srcHeight,t.trgX||0,t.trgY||0,t.trgWidth,t.trgHeight);const d=i.toDataURL('image/png');if(e.dataUrl=d,this.$emit('thumbnail',e,d),a)return a()},!1),a&&s.addEventListener('error',a,!1),s.src=t},processQueue(){const e=this.uploadingFiles.length;if(!(e>=this.maxConcurrentUploads||0===this.queuedFiles.length)){const t=[...this.queuedFiles];if(this.uploadMultiple)return this.processFiles(t.slice(0,this.maxConcurrentUploads-e));for(let a=e;a<this.maxConcurrentUploads;a++)t.length&&this.processFile(t.shift())}},processFile(e){return this.processFiles([e])},processFiles(e){for(const t of e)t.processing=!0,t.status=it.UPLOADING,this.$emit('processing',t);return this.uploadMultiple&&this.$emit('processing-multiple',e),this.uploadFiles(e)},getFilesWithXhr(e){return this.files.filter((t)=>t.xhr===e)},cancelUpload(e){if(e.status===it.UPLOADING){const t=this.getFilesWithXhr(e.xhr);e.xhr.abort();for(const e of t)e.status=it.CANCELED,this.$emit('canceled',e);this.uploadMultiple&&this.$emit('canceled-multiple',t)}else(e.status===it.ADDED||e.status===it.QUEUED)&&(e.status=it.CANCELED,this.$emit('canceled',e),this.uploadMultiple&&this.$emit('canceled-multiple',[e]));return this.autoProcessQueue?this.processQueue():void 0},uploadFile(e){return this.uploadFiles([e])},uploadFiles(t){let a=null;const i=new XMLHttpRequest;i.timeout=this.timeout;for(const e of t)e.xhr=i,e.startProgress();i.open(this.method,this.url,!0),i.withCredentials=!!this.withCredentials;const s=this.handleUploadError(t,i,a),l=this.handleUploadProgress(t);i.addEventListener('error',s),i.addEventListener('progress',l),i.addEventListener('timeout',this.handleTimeout(t,i)),i.addEventListener('load',(d)=>{if(t[0].status!==it.CANCELED&&i.readyState===et.DONE){if(a=i.responseText,'arraybuffer'!==i.responseType&&'blob'!==i.responseType&&i.getResponseHeader('content-type')&&~i.getResponseHeader('content-type').indexOf('application/json'))try{a=JSON.parse(a)}catch(e){a='Invalid JSON response from server.'}return l(),200>i.status||300<=i.status?s():this.uploadFinished(t,a,d)}});const e=Object.assign(Object.create(null),this.defaultHeaders,this.headers);for(const a in e)e[a]&&i.setRequestHeader(a,e[a]);const d=new FormData;for(const e in this.params)d.append(e,this.params[e]);for(const e of t)this.$emit('sending',e,i,d);this.uploadMultiple&&this.$emit('sending-multiple',t,i,d);for(let e=0;e<t.length;e++)d.append(this.getParamName(e),t[e].nativeFile,this.renameFile(t[e].name));return i.send(d)},handleUploadError(e,t,a){const i=this;return function(){e[0].status!==it.CANCELED&&i.errorProcessing(e,a||i.dictResponseError.replace(Ke,m({statusCode:t.status})),t)}},handleTimeout(t,a){const i=this;return function(s){for(const e of t)e.status=it.TIMEOUT,e.endProgress(),i.$emit('timeout',e,s,a);if(i.$emit('timeout-multiple',t,s,a),this.autoProcessQueue)return this.processQueue()}},handleUploadProgress(t){const e=this;return function(a){if(a instanceof ProgressEvent)for(const e of t)e.handleProgress(a);else{let e=!0;for(const a of t)(100!==a.upload.progress||a.upload.bytesSent!==a.upload.total)&&(e=!1),a.upload.progress=100,a.upload.bytesSent=a.upload.total,a.endProgress();if(e)return}for(const i of t)e.$emit('upload-progress',i,i.upload.progress,i.upload.bytesSent)}},updateTotalUploadProgress(){const e=this.activeFiles.reduce((e,t)=>(e.totalBytesSent+=t.upload.bytesSent,e.totalBytes+=t.upload.total,e),{totalBytesSent:0,totalBytes:0,totalProgress:100});this.activeFiles.length&&(e.totalProgress=100*e.totalBytesSent/e.totalBytes),this.$emit('total-upload-progress',e)},getParamName(e){return this.paramName+(this.uploadMultiple?`[${e}]`:'')},uploadFinished(t,a,i){for(const e of t)e.status=it.SUCCESS,e.endProgress(),this.$emit('success',e,a,i),this.$emit('complete',e);if(this.uploadMultiple&&(this.$emit('success-multiple',t,a,i),this.$emit('complete-multiple',t)),this.autoProcessQueue)return this.processQueue()},errorProcessing(e,t,a){for(const i of e)i.status=it.ERROR,i.endProgress(),this.$emit('error',i,t,a),this.$emit('complete',i);if(this.uploadMultiple&&(this.$emit('error-multiple',e,t,a),this.$emit('complete-multiple',e)),this.autoProcessQueue)return this.processQueue()},acceptFile(e,t){return e.size>1024*(1024*this.maxFileSize)?t(this.dictFileTooBig.replace(Ke,m({fileSize:Math.round(e.size/1024/10.24)/100,maxFileSize:this.maxFileSize}))):this.isValidFileType(e,this.acceptedFileTypes)?null!=this.maxFiles&&this.acceptedFiles.length>=this.maxFiles?(t(this.dictMaxFilesExceeded.replace(Ke,m({maxFiles:this.maxFiles}))),this.$emit('max-files-exceeded',e)):this.accept(e,t):t(this.dictInvalidFileType)},isValidFileType(e,t){if(!t.length)return!0;const a=e.type,s=a.replace(/\/.*$/,'');for(let l=0;l<t.length;l++){const i=t[l];if('.'===i.charAt(0)){if(-1!==e.name.toLowerCase().indexOf(i.toLowerCase(),e.name.length-i.length))return!0;}else if(/\/\*$/.test(i)){if(s===i.replace(/\/.*$/,''))return!0;}else if(a===i)return!0}return!1},handleDragOver(t){this.dragging=!0;let e;try{e=t.dataTransfer.effectAllowed}catch(e){}t.dataTransfer.dropEffect='move'===e||'linkMove'===e?'move':'copy',this.$emit('drag-over',t)},handleDragEnter(t){this.dragging=!0,this.$emit('drag-enter',t)},handleDragLeave(t){this.dragging=!1,this.$emit('drag-leave',t)},handleDragEnd(t){this.dragging=!1,this.$emit('drag-end',t)},onDrop(t){if(this.dragging=!1,!!t.dataTransfer){this.$emit('drop',t);const e=Array.from(t.dataTransfer.files);if(this.$emit('added-files',e),e.length){const a=Array.from(t.dataTransfer.items);a&&a.length&&a[0].webkitGetAsEntry?this.addFilesFromItems(a):this.handleFiles(e)}}},paste(t){if(Xe(t,['clipboardData','items'])){this.$emit('paste',t);const e=Array.from(t.clipboardData.items);e.length&&this.addFilesFromItems(e)}},handleFiles(e){return e.map((e)=>this.addFile(e))},addFilesFromItems(e){e.forEach((e)=>{if(e.webkitGetAsEntry){const t=e.webkitGetAsEntry();t.isFile?t.file(this.addFile):t.isDirectory&&this.addFilesFromDirectory(t,t.name)}else e.getAsFile&&'file'===e.kind&&this.addFile(e.getAsFile())})},addFilesFromDirectory(e,t){e.createReader().readEntries((e)=>{e.forEach((e)=>{e.isFile?e.file((e)=>{this.ignoreHiddenFiles&&/^\./.test(e.name)||(e.fullPath=`${t}/${e.name}`,this.addFile(e))},function(){}):e.isDirectory&&this.addFilesFromDirectory(e,`${t}/${e.name}`)})},function(){})}},mounted(){this.$on('upload-progress',this.updateTotalUploadProgress),this.$on('removed-file',this.updateTotalUploadProgress),this.$on('canceled',(e)=>this.$emit('complete',e)),this.$on('complete',(e)=>{0===this.addedFiles.length&&0===this.uploadingFiles.length&&0===this.queuedFiles.length&&setTimeout(()=>this.$emit('queue-complete',e),0)}),this.$emit('initialize',this)}},lt=a(2),dt=lt(st,{render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a(e.tag,{tag:'component'},[a('div',{staticClass:'v-transmit__drop-zone',class:[{"v-transmit__drop-zone--is-dragging":e.dragging},e.dropZoneClasses],attrs:{draggable:'true'},on:{click:e.handleClickUploaderAction,dragstart:function(t){e.$emit('drag-start',t)},dragend:e.handleDragEnd,dragenter:function(t){t.preventDefault(),t.stopPropagation(),e.handleDragEnter(t)},dragover:function(t){t.preventDefault(),t.stopPropagation(),e.handleDragOver(t)},dragleave:e.handleDragLeave,drop:function(t){t.preventDefault(),t.stopPropagation(),e.onDrop(t)}}},[e._t('default')],2),e._v(' '),e._t('files',null,{files:e.files,acceptedFiles:e.acceptedFiles,rejectedFiles:e.rejectedFiles,addedFiles:e.addedFiles,queuedFiles:e.queuedFiles,uploadingFiles:e.uploadingFiles,activeFiles:e.activeFiles}),e._v(' '),a('input',{ref:'hiddenFileInput',staticClass:'v-transmit__input--hidden',class:[e.maxFilesReachedClass],attrs:{type:'file',multiple:e.multiple,accept:e.filesToAccept,capture:e.capture},on:{change:e.onFileInputChange}})],2)},staticRenderFns:[]},function(){a(1)},null,null),rt=dt.exports,nt=Object.assign||function(i){for(var e,a=1,s=arguments.length;a<s;a++)for(var t in e=arguments[a],e)Object.prototype.hasOwnProperty.call(e,t)&&(i[t]=e[t]);return i},ot=Object.keys,pt=function(){for(var i=nt({},arguments[0]),e=1;e<arguments.length;e++)for(var a,l=0,s=ot(arguments[e]);l<s.length;l++)if(a=s[l],void 0!==i[a])switch(a){case'class':case'style':case'directives':i[a]=F(i[a],arguments[e][a]);break;case'staticClass':i[a]&&(i[a]=i[a].trim()+' '),i[a]+=arguments[e][a].trim();break;case'on':case'nativeOn':for(var t,d=0,r=ot(arguments[e][a]);d<r.length;d++)t=r[d],i[a][t]=i[a][t]?F(arguments[e][a][t],i[a][t]):arguments[e][a][t];break;case'attrs':case'props':case'domProps':case'scopedSlots':case'staticStyle':case'hook':case'transition':i[a]=nt({},i[a],arguments[e][a]);break;case'slot':case'key':case'ref':case'tag':case'show':case'keepAlive':default:i[a]=arguments[e][a];}else i[a]=arguments[e][a];return i},ut={functional:!0,props:{color:{type:String,default:'#14C18B'},fill:{type:String,default:'#FFFFFF'}},render:function(e,t){let a=t.props,i=t.data;return e('svg',pt(i,{attrs:{viewBox:'0 0 64 64'}}),[e('circle',{attrs:{cx:'32',cy:'32',r:'32',fill:a.color}}),e('polygon',{attrs:{fill:a.fill,points:'43.266,18.345 27.915,37 21.465,30.725 17.211,35.34 28.413,46.236 47.989,22.449'}})])}},ct=t['default']={install(e){for(const t in _)Object.prototype.hasOwnProperty.call(_,t)&&e.component(t,_[t])},name:'vue-transmit'}},function(){},function(e){e.exports=function(e,t,a,i,s){var l,d=e=e||{},r=typeof e.default;('object'==r||'function'==r)&&(l=e,d=e.default);var n='function'==typeof d?d.options:d;t&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns),i&&(n._scopeId=i);var o;if(s?(o=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||'undefined'==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},n._ssrRegister=o):a&&(o=a),o){var p=n.functional,u=p?n.render:n.beforeCreate;p?n.render=function(e,t){return o.call(t),u(e,t)}:n.beforeCreate=u?[].concat(u,o):[o]}return{esModule:l,exports:d,options:n}}},function(e,t,a){'use strict';(function(e){var a='object'==typeof e&&e&&e.Object===Object&&e;t.a=a}).call(t,a(4))},function(e){var t=function(){return this}();try{t=t||Function('return this')()||(1,eval)('this')}catch(a){'object'==typeof window&&(t=window)}e.exports=t}]);
//# sourceMappingURL=vue-transmit.browser.js.map