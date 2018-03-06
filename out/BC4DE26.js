goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__90__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__90 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__91__i = 0, G__91__a = new Array(arguments.length -  0);
while (G__91__i < G__91__a.length) {G__91__a[G__91__i] = arguments[G__91__i + 0]; ++G__91__i;}
  args = new cljs.core.IndexedSeq(G__91__a,0,null);
} 
return G__90__delegate.call(this,args);};
G__90.cljs$lang$maxFixedArity = 0;
G__90.cljs$lang$applyTo = (function (arglist__92){
var args = cljs.core.seq(arglist__92);
return G__90__delegate(args);
});
G__90.cljs$core$IFn$_invoke$arity$variadic = G__90__delegate;
return G__90;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__93__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__93 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__94__i = 0, G__94__a = new Array(arguments.length -  0);
while (G__94__i < G__94__a.length) {G__94__a[G__94__i] = arguments[G__94__i + 0]; ++G__94__i;}
  args = new cljs.core.IndexedSeq(G__94__a,0,null);
} 
return G__93__delegate.call(this,args);};
G__93.cljs$lang$maxFixedArity = 0;
G__93.cljs$lang$applyTo = (function (arglist__95){
var args = cljs.core.seq(arglist__95);
return G__93__delegate(args);
});
G__93.cljs$core$IFn$_invoke$arity$variadic = G__93__delegate;
return G__93;
})()
;

return null;
});
