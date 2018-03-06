// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('packcljs.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('clojure.string');
packcljs.core.process = cljs.nodejs.require.call(null,"process");
packcljs.core.exec_sync = cljs.nodejs.require.call(null,"child_process").execSync;
packcljs.core.string_decoder = cljs.nodejs.require.call(null,"string_decoder").StringDecoder;
packcljs.core.decoder = (new packcljs.core.string_decoder("utf8"));
packcljs.core.release_type = clojure.string.trim.call(null,clojure.string.lower_case.call(null,cljs.core.last.call(null,packcljs.core.process.argv)));
packcljs.core.cmds = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [["npm version ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(packcljs.core.release_type)].join(''),"git push origin master --tags","npm publish"], null);
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__1_SHARP_){
return cljs.core._EQ_.call(null,p1__1_SHARP_,packcljs.core.release_type);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["patch","minor","major"], null)))){
} else {
throw "Wrong type of release provided. You must specify a patch, minor, or major release.";

packcljs.core.process.exit((1));
}
var seq__63_67 = cljs.core.seq.call(null,packcljs.core.cmds);
var chunk__64_68 = null;
var count__65_69 = (0);
var i__66_70 = (0);
while(true){
if((i__66_70 < count__65_69)){
var cmd_71 = cljs.core._nth.call(null,chunk__64_68,i__66_70);
console.log(packcljs.core.decoder.write(packcljs.core.exec_sync.call(null,cmd_71)));

var G__72 = seq__63_67;
var G__73 = chunk__64_68;
var G__74 = count__65_69;
var G__75 = (i__66_70 + (1));
seq__63_67 = G__72;
chunk__64_68 = G__73;
count__65_69 = G__74;
i__66_70 = G__75;
continue;
} else {
var temp__22039__auto___76 = cljs.core.seq.call(null,seq__63_67);
if(temp__22039__auto___76){
var seq__63_77__$1 = temp__22039__auto___76;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__63_77__$1)){
var c__22996__auto___78 = cljs.core.chunk_first.call(null,seq__63_77__$1);
var G__79 = cljs.core.chunk_rest.call(null,seq__63_77__$1);
var G__80 = c__22996__auto___78;
var G__81 = cljs.core.count.call(null,c__22996__auto___78);
var G__82 = (0);
seq__63_67 = G__79;
chunk__64_68 = G__80;
count__65_69 = G__81;
i__66_70 = G__82;
continue;
} else {
var cmd_83 = cljs.core.first.call(null,seq__63_77__$1);
console.log(packcljs.core.decoder.write(packcljs.core.exec_sync.call(null,cmd_83)));

var G__84 = cljs.core.next.call(null,seq__63_77__$1);
var G__85 = null;
var G__86 = (0);
var G__87 = (0);
seq__63_67 = G__84;
chunk__64_68 = G__85;
count__65_69 = G__86;
i__66_70 = G__87;
continue;
}
} else {
}
}
break;
}

//# sourceURL=out/packcljs/core.js?rel=1520304836853
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0L3BhY2tjbGpzL2NvcmUuanM/cmVsPTE1MjAzMDQ4MzY4NTMiLCJzb3VyY2VzIjpbImNvcmUuY2xqcz9yZWw9MTUyMDMwNDgzNjg1MyJdLCJsaW5lQ291bnQiOjczLCJtYXBwaW5ncyI6IkFBQ0E7Ozs7QUFHQSxBQUFLQSx3QkFBUSw4QkFBQSw5QkFBQ0M7QUFDZCxBQUFLQywwQkFBVSxBQUFJLDhCQUFBLDlCQUFDRDtBQUNwQixBQUFLRSwrQkFBZSxBQUFJLDhCQUFBLDlCQUFDRjtBQUV6QixBQUFLRyx3QkFBUSxLQUFBRCw2QkFBQTtBQUNiLEFBQUtFLDZCQUFhLDhCQUFBLG9DQUFBLHlCQUFJLEFBQUlMLHpCQUFlTSxwQ0FBS0MsOUJBQWtCQztBQUNoRSxxQkFBQSxxTEFBQSxnQ0FBQSwxT0FBS0Msd0dBQU0sQ0FBQSwyREFBb0JKO0FBRS9CLG9CQUFVLHlCQUFBLFdBQUFLLHBDQUFDQztBQUFELEFBQU8sZ0NBQUFELHpCQUFDRSxzQ0FBSVA7R0FBWixtRkFBQSxRQUFBLFFBQUE7QUFBVjtBQUFBLEFBQ0UsTUFBQTs7QUFDQSwyQkFBQSwzQkFBT0w7O0FBRVQsSUFBQWEsYUFBQSxBQUFBQyx3QkFBWUw7SUFBWk0sZUFBQTtJQUFBQyxlQUFBO0lBQUFDLFdBQUE7O0FBQUEsQUFBQSxHQUFBLEFBQUEsQ0FBQUEsV0FBQUQ7QUFBQSxhQUFBLEFBQUFFLHlCQUFBSCxhQUFBRSwvQ0FBUVU7QUFBUixBQUFBLEFBQWtCLEFBQUNDLFlBQWUsQUFBUXhCLDRCQUFRLEFBQUNGLGtDQUFVeUI7O0FBQTdELFlBQUFkO1lBQUFFO1lBQUFDO1lBQUEsQ0FBQUMsV0FBQTs7Ozs7OztBQUFBLElBQUFFLHlCQUFBLEFBQUFMLHdCQUFBRDtBQUFBLEFBQUEsR0FBQU07QUFBQSxBQUFBLElBQUFOLGlCQUFBTTtBQUFBLEFBQUEsR0FBQSxBQUFBQyx1Q0FBQVA7QUFBQSxJQUFBUSxzQkFBQSxBQUFBQyxnQ0FBQVQ7QUFBQSxBQUFBLFlBQUEsQUFBQVUsK0JBQUFWO1lBQUFRO1lBQUEsQUFBQUcsMEJBQUFIO1lBQUE7Ozs7Ozs7QUFBQSxhQUFBLEFBQUFJLDBCQUFBWixuQ0FBUWM7QUFBUixBQUFBLEFBQWtCLEFBQUNDLFlBQWUsQUFBUXhCLDRCQUFRLEFBQUNGLGtDQUFVeUI7O0FBQTdELFlBQUEsQUFBQUQseUJBQUFiO1lBQUE7WUFBQTtZQUFBOzs7Ozs7OztBQUFBIiwibmFtZXMiOlsicGFja2NsanMuY29yZS9wcm9jZXNzIiwiY2xqcy5ub2RlanMvcmVxdWlyZSIsInBhY2tjbGpzLmNvcmUvZXhlYy1zeW5jIiwicGFja2NsanMuY29yZS9zdHJpbmctZGVjb2RlciIsInBhY2tjbGpzLmNvcmUvZGVjb2RlciIsInBhY2tjbGpzLmNvcmUvcmVsZWFzZS10eXBlIiwiY2xqcy5jb3JlL2xhc3QiLCJjbG9qdXJlLnN0cmluZy9sb3dlci1jYXNlIiwiY2xvanVyZS5zdHJpbmcvdHJpbSIsInBhY2tjbGpzLmNvcmUvY21kcyIsInAxX18xIyIsImNsanMuY29yZS9zb21lIiwiY2xqcy5jb3JlLz0iLCJzZXFfXzYzIiwiY2xqcy5jb3JlL3NlcSIsImNodW5rX182NCIsImNvdW50X182NSIsImlfXzY2IiwiY2xqcy5jb3JlLy1udGgiLCJ0ZW1wX18yMjAzOV9fYXV0b19fIiwiY2xqcy5jb3JlL2NodW5rZWQtc2VxPyIsImNfXzIyOTk2X19hdXRvX18iLCJjbGpzLmNvcmUvY2h1bmstZmlyc3QiLCJjbGpzLmNvcmUvY2h1bmstcmVzdCIsImNsanMuY29yZS9jb3VudCIsImNsanMuY29yZS9maXJzdCIsImNsanMuY29yZS9uZXh0IiwiY21kIiwianMvY29uc29sZS5sb2ciXSwic291cmNlc0NvbnRlbnQiOlsiIyEgL3Vzci9iaW4vZW52IGx1bW9cbihucyBwYWNrY2xqcy5jb3JlXG4gICg6cmVxdWlyZSBbY2xqcy5ub2RlanMgOmFzIG5vZGVdIFtjbG9qdXJlLnN0cmluZyA6YXMgc3RyaW5nXSkpXG5cbihkZWYgcHJvY2VzcyAobm9kZS9yZXF1aXJlIFwicHJvY2Vzc1wiKSlcbihkZWYgZXhlYy1zeW5jICguLiAobm9kZS9yZXF1aXJlIFwiY2hpbGRfcHJvY2Vzc1wiKSAtZXhlY1N5bmMpKVxuKGRlZiBzdHJpbmctZGVjb2RlciAoLi4gKG5vZGUvcmVxdWlyZSBcInN0cmluZ19kZWNvZGVyXCIpIC1TdHJpbmdEZWNvZGVyKSlcblxuKGRlZiBkZWNvZGVyIChzdHJpbmctZGVjb2Rlci4gXCJ1dGY4XCIpKVxuKGRlZiByZWxlYXNlLXR5cGUgKC0+ICguLiBwcm9jZXNzIC1hcmd2KSBsYXN0IHN0cmluZy9sb3dlci1jYXNlIHN0cmluZy90cmltKSlcbihkZWYgY21kcyBbKHN0ciBcIm5wbSB2ZXJzaW9uIFwiIHJlbGVhc2UtdHlwZSkgXCJnaXQgcHVzaCBvcmlnaW4gbWFzdGVyIC0tdGFnc1wiIFwibnBtIHB1Ymxpc2hcIl0pXG5cbih3aGVuLW5vdCAoc29tZSAjKD0gJSByZWxlYXNlLXR5cGUpIFtcInBhdGNoXCIgXCJtaW5vclwiIFwibWFqb3JcIl0pXG4gICh0aHJvdyBcIldyb25nIHR5cGUgb2YgcmVsZWFzZSBwcm92aWRlZC4gWW91IG11c3Qgc3BlY2lmeSBhIHBhdGNoLCBtaW5vciwgb3IgbWFqb3IgcmVsZWFzZS5cIilcbiAgKC5leGl0IHByb2Nlc3MgMSkpXG5cbihkb3NlcSBbY21kIGNtZHNdIChqcy9jb25zb2xlLmxvZyAoLndyaXRlIGRlY29kZXIgKGV4ZWMtc3luYyBjbWQpKSkpXG4iXX0=