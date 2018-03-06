goog.provide('cljs.nodejs');
goog.require('cljs.core');
goog.require('cljs.core.constants');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__61__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__61 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62__i = 0, G__62__a = new Array(arguments.length -  0);
while (G__62__i < G__62__a.length) {G__62__a[G__62__i] = arguments[G__62__i + 0]; ++G__62__i;}
  args = new cljs.core.IndexedSeq(G__62__a,0,null);
} 
return G__61__delegate.call(this,args);};
G__61.cljs$lang$maxFixedArity = 0;
G__61.cljs$lang$applyTo = (function (arglist__63){
var args = cljs.core.seq(arglist__63);
return G__61__delegate(args);
});
G__61.cljs$core$IFn$_invoke$arity$variadic = G__61__delegate;
return G__61;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__64__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(args));
};
var G__64 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65__i = 0, G__65__a = new Array(arguments.length -  0);
while (G__65__i < G__65__a.length) {G__65__a[G__65__i] = arguments[G__65__i + 0]; ++G__65__i;}
  args = new cljs.core.IndexedSeq(G__65__a,0,null);
} 
return G__64__delegate.call(this,args);};
G__64.cljs$lang$maxFixedArity = 0;
G__64.cljs$lang$applyTo = (function (arglist__66){
var args = cljs.core.seq(arglist__66);
return G__64__delegate(args);
});
G__64.cljs$core$IFn$_invoke$arity$variadic = G__64__delegate;
return G__64;
})()
;

return null;
});
