// Compiled by ClojureScript 1.9.946 {:target :nodejs}
goog.provide('clojure.string');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
clojure.string.seq_reverse = (function clojure$string$seq_reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
clojure.string.re_surrogate_pair = (new RegExp("([\\uD800-\\uDBFF])([\\uDC00-\\uDFFF])","g"));
/**
 * Returns s with its characters reversed.
 */
clojure.string.reverse = (function clojure$string$reverse(s){
return s.replace(clojure.string.re_surrogate_pair,"$2$1").split("").reverse().join("");
});
clojure.string.replace_all = (function clojure$string$replace_all(s,re,replacement){
var r = (new RegExp(re.source,(function (){var G__32 = "g";
var G__32__$1 = (cljs.core.truth_(re.ignoreCase)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32),"i"].join(''):G__32);
var G__32__$2 = (cljs.core.truth_(re.multiline)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32__$1),"m"].join(''):G__32__$1);
if(cljs.core.truth_(re.unicode)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32__$2),"u"].join('');
} else {
return G__32__$2;
}
})()));
return s.replace(r,replacement);
});
clojure.string.replace_with = (function clojure$string$replace_with(f){
return (function() { 
var G__33__delegate = function (args){
var matches = cljs.core.drop_last.call(null,(2),args);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches),(1))){
return f.call(null,cljs.core.first.call(null,matches));
} else {
return f.call(null,cljs.core.vec.call(null,matches));
}
};
var G__33 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34__i = 0, G__34__a = new Array(arguments.length -  0);
while (G__34__i < G__34__a.length) {G__34__a[G__34__i] = arguments[G__34__i + 0]; ++G__34__i;}
  args = new cljs.core.IndexedSeq(G__34__a,0,null);
} 
return G__33__delegate.call(this,args);};
G__33.cljs$lang$maxFixedArity = 0;
G__33.cljs$lang$applyTo = (function (arglist__35){
var args = cljs.core.seq(arglist__35);
return G__33__delegate(args);
});
G__33.cljs$core$IFn$_invoke$arity$variadic = G__33__delegate;
return G__33;
})()
;
});
/**
 * Replaces all instance of match with replacement in s.
 * match/replacement can be:
 * 
 * string / string
 * pattern / (string or function of match).
 */
clojure.string.replace = (function clojure$string$replace(s,match,replacement){
if(typeof match === 'string'){
return s.replace((new RegExp(goog.string.regExpEscape(match),"g")),replacement);
} else {
if((match instanceof RegExp)){
if(typeof replacement === 'string'){
return clojure.string.replace_all.call(null,s,match,replacement);
} else {
return clojure.string.replace_all.call(null,s,match,clojure.string.replace_with.call(null,replacement));
}
} else {
throw ["Invalid match arg: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(match)].join('');

}
}
});
/**
 * Replaces the first instance of match with replacement in s.
 * match/replacement can be:
 * 
 * string / string
 * pattern / (string or function of match).
 */
clojure.string.replace_first = (function clojure$string$replace_first(s,match,replacement){
return s.replace(match,replacement);
});
/**
 * Returns a string of all elements in coll, as returned by (seq coll),
 *   separated by an optional separator.
 */
clojure.string.join = (function clojure$string$join(var_args){
var G__37 = arguments.length;
switch (G__37) {
case (1):
return clojure.string.join.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case (2):
return clojure.string.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.string.join.cljs$core$IFn$_invoke$arity$1 = (function (coll){
var sb = (new goog.string.StringBuffer());
var coll__$1 = cljs.core.seq.call(null,coll);
while(true){
if(!((coll__$1 == null))){
var G__39 = sb.append([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,coll__$1))].join(''));
var G__40 = cljs.core.next.call(null,coll__$1);
sb = G__39;
coll__$1 = G__40;
continue;
} else {
return sb.toString();
}
break;
}
});

clojure.string.join.cljs$core$IFn$_invoke$arity$2 = (function (separator,coll){
var sb = (new goog.string.StringBuffer());
var coll__$1 = cljs.core.seq.call(null,coll);
while(true){
if(!((coll__$1 == null))){
sb.append([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,coll__$1))].join(''));

var coll__$2 = cljs.core.next.call(null,coll__$1);
if((coll__$2 == null)){
} else {
sb.append(separator);
}

var G__41 = sb;
var G__42 = coll__$2;
sb = G__41;
coll__$1 = G__42;
continue;
} else {
return sb.toString();
}
break;
}
});

clojure.string.join.cljs$lang$maxFixedArity = (2);

/**
 * Converts string to all upper-case.
 */
clojure.string.upper_case = (function clojure$string$upper_case(s){
return s.toUpperCase();
});
/**
 * Converts string to all lower-case.
 */
clojure.string.lower_case = (function clojure$string$lower_case(s){
return s.toLowerCase();
});
/**
 * Converts first character of the string to upper-case, all other
 *   characters to lower-case.
 */
clojure.string.capitalize = (function clojure$string$capitalize(s){
return goog.string.capitalize(s);
});
clojure.string.pop_last_while_empty = (function clojure$string$pop_last_while_empty(v){
var v__$1 = v;
while(true){
if(("" === cljs.core.peek.call(null,v__$1))){
var G__43 = cljs.core.pop.call(null,v__$1);
v__$1 = G__43;
continue;
} else {
return v__$1;
}
break;
}
});
clojure.string.discard_trailing_if_needed = (function clojure$string$discard_trailing_if_needed(limit,v){
if((((0) === limit)) && (((1) < cljs.core.count.call(null,v)))){
return clojure.string.pop_last_while_empty.call(null,v);
} else {
return v;
}
});
clojure.string.split_with_empty_regex = (function clojure$string$split_with_empty_regex(s,limit){
if(((limit <= (0))) || ((limit >= ((2) + cljs.core.count.call(null,s))))){
return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,"",cljs.core.map.call(null,cljs.core.str,cljs.core.seq.call(null,s)))),"");
} else {
var pred__44 = cljs.core._EQ__EQ_;
var expr__45 = limit;
if(cljs.core.truth_(pred__44.call(null,(1),expr__45))){
return (new cljs.core.PersistentVector(null,(1),(5),cljs.core.PersistentVector.EMPTY_NODE,[s],null));
} else {
if(cljs.core.truth_(pred__44.call(null,(2),expr__45))){
return (new cljs.core.PersistentVector(null,(2),(5),cljs.core.PersistentVector.EMPTY_NODE,["",s],null));
} else {
var c = (limit - (2));
return cljs.core.conj.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,"",cljs.core.subvec.call(null,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.str,cljs.core.seq.call(null,s))),(0),c))),cljs.core.subs.call(null,s,c));
}
}
}
});
/**
 * Splits string on a regular expression. Optional argument limit is
 *   the maximum number of splits. Not lazy. Returns vector of the splits.
 */
clojure.string.split = (function clojure$string$split(var_args){
var G__48 = arguments.length;
switch (G__48) {
case (2):
return clojure.string.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return clojure.string.split.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.string.split.cljs$core$IFn$_invoke$arity$2 = (function (s,re){
return clojure.string.split.call(null,s,re,(0));
});

clojure.string.split.cljs$core$IFn$_invoke$arity$3 = (function (s,re,limit){
return clojure.string.discard_trailing_if_needed.call(null,limit,((("/(?:)/" === [cljs.core.str.cljs$core$IFn$_invoke$arity$1(re)].join('')))?clojure.string.split_with_empty_regex.call(null,s,limit):(((limit < (1)))?cljs.core.vec.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('').split(re)):(function (){var s__$1 = s;
var limit__$1 = limit;
var parts = cljs.core.PersistentVector.EMPTY;
while(true){
if(((1) === limit__$1)){
return cljs.core.conj.call(null,parts,s__$1);
} else {
var m = cljs.core.re_find.call(null,re,s__$1);
if(!((m == null))){
var index = s__$1.indexOf(m);
var G__50 = s__$1.substring((index + cljs.core.count.call(null,m)));
var G__51 = (limit__$1 - (1));
var G__52 = cljs.core.conj.call(null,parts,s__$1.substring((0),index));
s__$1 = G__50;
limit__$1 = G__51;
parts = G__52;
continue;
} else {
return cljs.core.conj.call(null,parts,s__$1);
}
}
break;
}
})())));
});

clojure.string.split.cljs$lang$maxFixedArity = (3);

/**
 * Splits s on 
 *  or 
 * .
 */
clojure.string.split_lines = (function clojure$string$split_lines(s){
return clojure.string.split.call(null,s,/\n|\r\n/);
});
/**
 * Removes whitespace from both ends of string.
 */
clojure.string.trim = (function clojure$string$trim(s){
return goog.string.trim(s);
});
/**
 * Removes whitespace from the left side of string.
 */
clojure.string.triml = (function clojure$string$triml(s){
return goog.string.trimLeft(s);
});
/**
 * Removes whitespace from the right side of string.
 */
clojure.string.trimr = (function clojure$string$trimr(s){
return goog.string.trimRight(s);
});
/**
 * Removes all trailing newline \n or return \r characters from
 *   string.  Similar to Perl's chomp.
 */
clojure.string.trim_newline = (function clojure$string$trim_newline(s){
var index = s.length;
while(true){
if((index === (0))){
return "";
} else {
var ch = cljs.core.get.call(null,s,(index - (1)));
if((("\n" === ch)) || (("\r" === ch))){
var G__53 = (index - (1));
index = G__53;
continue;
} else {
return s.substring((0),index);
}
}
break;
}
});
/**
 * True is s is nil, empty, or contains only whitespace.
 */
clojure.string.blank_QMARK_ = (function clojure$string$blank_QMARK_(s){
return goog.string.isEmptySafe(s);
});
/**
 * Return a new string, using cmap to escape each character ch
 * from s as follows:
 * 
 * If (cmap ch) is nil, append ch to the new string.
 * If (cmap ch) is non-nil, append (str (cmap ch)) instead.
 */
clojure.string.escape = (function clojure$string$escape(s,cmap){
var buffer = (new goog.string.StringBuffer());
var length = s.length;
var index = (0);
while(true){
if((length === index)){
return buffer.toString();
} else {
var ch = s.charAt(index);
var replacement = cljs.core.get.call(null,cmap,ch);
if(!((replacement == null))){
buffer.append([cljs.core.str.cljs$core$IFn$_invoke$arity$1(replacement)].join(''));
} else {
buffer.append(ch);
}

var G__54 = (index + (1));
index = G__54;
continue;
}
break;
}
});
/**
 * Return index of value (string or char) in s, optionally searching
 *   forward from from-index or nil if not found.
 */
clojure.string.index_of = (function clojure$string$index_of(var_args){
var G__56 = arguments.length;
switch (G__56) {
case (2):
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return clojure.string.index_of.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.string.index_of.cljs$core$IFn$_invoke$arity$2 = (function (s,value){
var result = s.indexOf(value);
if((result < (0))){
return null;
} else {
return result;
}
});

clojure.string.index_of.cljs$core$IFn$_invoke$arity$3 = (function (s,value,from_index){
var result = s.indexOf(value,from_index);
if((result < (0))){
return null;
} else {
return result;
}
});

clojure.string.index_of.cljs$lang$maxFixedArity = (3);

/**
 * Return last index of value (string or char) in s, optionally
 *   searching backward from from-index or nil if not found.
 */
clojure.string.last_index_of = (function clojure$string$last_index_of(var_args){
var G__59 = arguments.length;
switch (G__59) {
case (2):
return clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case (3):
return clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2 = (function (s,value){
var result = s.lastIndexOf(value);
if((result < (0))){
return null;
} else {
return result;
}
});

clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$3 = (function (s,value,from_index){
var result = s.lastIndexOf(value,from_index);
if((result < (0))){
return null;
} else {
return result;
}
});

clojure.string.last_index_of.cljs$lang$maxFixedArity = (3);

/**
 * True if s starts with substr.
 */
clojure.string.starts_with_QMARK_ = (function clojure$string$starts_with_QMARK_(s,substr){
return goog.string.startsWith(s,substr);
});
/**
 * True if s ends with substr.
 */
clojure.string.ends_with_QMARK_ = (function clojure$string$ends_with_QMARK_(s,substr){
return goog.string.endsWith(s,substr);
});
/**
 * True if s includes substr.
 */
clojure.string.includes_QMARK_ = (function clojure$string$includes_QMARK_(s,substr){
return goog.string.contains(s,substr);
});

//# sourceURL=out/clojure/string.js?rel=1520304836542
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0L2Nsb2p1cmUvc3RyaW5nLmpzP3JlbD0xNTIwMzA0ODM2NTQyIiwic291cmNlcyI6WyJzdHJpbmcuY2xqcz9yZWw9MTUyMDMwNDgzNjU0MiJdLCJsaW5lQ291bnQiOjQ1MCwibWFwcGluZ3MiOiJBQVFBOzs7O0FBS0EsNkJBQUEsN0JBQU9BLGtFQUNKQztBQURILEFBRUUsaURBQUEsMUNBQUNDLDJCQUFPQyxvQ0FBUUY7O0FBRWxCLEFBQWVHLG1DQUNiLEtBQUFDLE9BQUEseUNBQUE7QUFFRjs7O3lCQUFBLHpCQUFNQywwREFFSEM7QUFGSCxPQUdNLDJDQUFBLDNDQUFVQSxVQUFFSCxqQkFDWixPQUFBLEFBQUEseURBQUEsbUJBQUE7O0FBRU4sNkJBQUEsN0JBQU9JLGtFQUNKRCxFQUFFRSxHQUFHQztBQURSLEFBRUUsSUFBTUMsSUFBRSxLQUFBTixPQUFZLEFBQVVJLFVBQ1YsaUJBQUFHLFFBQUE7SUFBQUEsWUFBQSxtR0FBQUEsakZBQ0UsQUFBY0gsZUFBSSw2Q0FBQUcsT0FBQTtJQURwQkEsWUFBQSxzR0FBQUEscEZBRUUsQUFBYUgsY0FBSSw2Q0FBQUcsV0FBQTtBQUZuQixBQUFBLG9CQUdFLEFBQVdIO0FBQUksb0RBQUFHLFdBQUE7O0FBSGpCQTs7O0FBRHBCLEFBS0UsT0FBVUwsVUFBRUksRUFBRUQ7O0FBRWxCLDhCQUFBLDlCQUFPRyxvRUFDSkM7QUFESCxBQUVFO2dDQUFPQztBQUFQLEFBQ0UsSUFBTUMsVUFBUSw4QkFBQSw5QkFBQ0Msa0NBQVlGO0FBQTNCLEFBQ0UsR0FBSSw0REFBQSw1REFBQ0cseUJBQUUsQUFBQ0MsMEJBQU1IO0FBQ1osT0FBQ0YsWUFBRSxBQUFDTSwwQkFBTUo7O0FBQ1YsT0FBQ0YsWUFBRSxBQUFDTyx3QkFBSUw7Ozs7SUFKUEQ7Ozs7RUFBQUE7O2lDQUFBQTs7O0lBQUFBO3VCQUFBQTs7Ozs7OztBQU1UOzs7Ozs7O3lCQUFBLHpCQUFNTywwREFNSGYsRUFBRWdCLE1BQU1iO0FBTlgsQUFPRSxHQUNFLE9BQVNhO0FBQ1Qs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QTs7Ozs7QUFBQSxBQUFBLDZEQUFBLDdEQUFNdUQsd0VBR0Y3RSxFQUFFeUU7QUFITixBQUlHLElBQU1DLFNBQU8sQUFBYzFFLGNBQUV5RTtBQUE3QixBQUNFLEdBQUksVUFBQSxUQUFNQztBQUFWOztBQUVFQTs7OztBQVBQLEFBQUEsNkRBQUEsN0RBQU1HLHdFQVFGN0UsRUFBRXlFLE1BQU1FO0FBUlosQUFTRyxJQUFNRCxTQUFPLEFBQWMxRSxjQUFFeUUsTUFBTUU7QUFBbkMsQUFDRSxHQUFJLFVBQUEsVEFBTUQ7QUFBVjs7QUFFRUE7Ozs7QUFaUCxBQUFBLHVEQUFBLHZEQUFNRzs7QUFBTixBQWNBOzs7b0NBQUEscENBQWVDLGdGQUVaOUUsRUFBRStFO0FBRkwsQUFHRSxPQUFDQyx1QkFBbUJoRixFQUFFK0U7O0FBRXhCOzs7a0NBQUEsbENBQWVFLDRFQUVaakYsRUFBRStFO0FBRkwsQUFHRSxPQUFDRyxxQkFBaUJsRixFQUFFK0U7O0FBRXRCOzs7aUNBQUEsakNBQWVJLDBFQUVabkYsRUFBRStFO0FBRkwsQUFHRSxPQUFDSyxxQkFBaUJwRixFQUFFK0UiLCJuYW1lcyI6WyJjbG9qdXJlLnN0cmluZy9zZXEtcmV2ZXJzZSIsImNvbGwiLCJjbGpzLmNvcmUvcmVkdWNlIiwiY2xqcy5jb3JlL2NvbmoiLCJjbG9qdXJlLnN0cmluZy9yZS1zdXJyb2dhdGUtcGFpciIsImpzL1JlZ0V4cCIsImNsb2p1cmUuc3RyaW5nL3JldmVyc2UiLCJzIiwiY2xvanVyZS5zdHJpbmcvcmVwbGFjZS1hbGwiLCJyZSIsInJlcGxhY2VtZW50IiwiciIsIkdfXzMyIiwiY2xvanVyZS5zdHJpbmcvcmVwbGFjZS13aXRoIiwiZiIsImFyZ3MiLCJtYXRjaGVzIiwiY2xqcy5jb3JlL2Ryb3AtbGFzdCIsImNsanMuY29yZS89IiwiY2xqcy5jb3JlL2NvdW50IiwiY2xqcy5jb3JlL2ZpcnN0IiwiY2xqcy5jb3JlL3ZlYyIsImNsb2p1cmUuc3RyaW5nL3JlcGxhY2UiLCJtYXRjaCIsImdvb2cuc3RyaW5nL3JlZ0V4cEVzY2FwZSIsImNsb2p1cmUuc3RyaW5nL3JlcGxhY2UtZmlyc3QiLCJ2YXJfYXJncyIsIkdfXzM3IiwiY2xvanVyZS5zdHJpbmcvam9pbiIsImpzL0Vycm9yIiwic2IiLCJnb29nL3N0cmluZy5TdHJpbmdCdWZmZXIiLCJjbGpzLmNvcmUvc2VxIiwiY2xqcy5jb3JlL25leHQiLCJzZXBhcmF0b3IiLCJjbG9qdXJlLnN0cmluZy91cHBlci1jYXNlIiwiY2xvanVyZS5zdHJpbmcvbG93ZXItY2FzZSIsImNsb2p1cmUuc3RyaW5nL2NhcGl0YWxpemUiLCJnb29nLnN0cmluZy9jYXBpdGFsaXplIiwiY2xvanVyZS5zdHJpbmcvcG9wLWxhc3Qtd2hpbGUtZW1wdHkiLCJ2IiwiY2xqcy5jb3JlL3BlZWsiLCJjbGpzLmNvcmUvcG9wIiwiY2xvanVyZS5zdHJpbmcvZGlzY2FyZC10cmFpbGluZy1pZi1uZWVkZWQiLCJsaW1pdCIsImNsb2p1cmUuc3RyaW5nL3NwbGl0LXdpdGgtZW1wdHktcmVnZXgiLCJjbGpzLmNvcmUvY29ucyIsImNsanMuY29yZS9tYXAiLCJjbGpzLmNvcmUvc3RyIiwicHJlZF9fNDQiLCJleHByX180NSIsImNsanMuY29yZS89PSIsImNsanMuY29yZS9QZXJzaXN0ZW50VmVjdG9yIiwiYyIsImNsanMuY29yZS9zdWJ2ZWMiLCJjbGpzLmNvcmUvc3VicyIsIkdfXzQ4IiwiY2xvanVyZS5zdHJpbmcvc3BsaXQiLCJwYXJ0cyIsIm0iLCJjbGpzLmNvcmUvcmUtZmluZCIsImluZGV4IiwiY2xvanVyZS5zdHJpbmcvc3BsaXQtbGluZXMiLCJjbG9qdXJlLnN0cmluZy90cmltIiwiZ29vZy5zdHJpbmcvdHJpbSIsImNsb2p1cmUuc3RyaW5nL3RyaW1sIiwiZ29vZy5zdHJpbmcvdHJpbUxlZnQiLCJjbG9qdXJlLnN0cmluZy90cmltciIsImdvb2cuc3RyaW5nL3RyaW1SaWdodCIsImNsb2p1cmUuc3RyaW5nL3RyaW0tbmV3bGluZSIsImNoIiwiY2xqcy5jb3JlL2dldCIsImNsb2p1cmUuc3RyaW5nL2JsYW5rPyIsImdvb2cuc3RyaW5nL2lzRW1wdHlTYWZlIiwiY2xvanVyZS5zdHJpbmcvZXNjYXBlIiwiY21hcCIsImJ1ZmZlciIsImxlbmd0aCIsIkdfXzU2IiwiY2xvanVyZS5zdHJpbmcvaW5kZXgtb2YiLCJ2YWx1ZSIsInJlc3VsdCIsImZyb20taW5kZXgiLCJHX181OSIsImNsb2p1cmUuc3RyaW5nL2xhc3QtaW5kZXgtb2YiLCJjbG9qdXJlLnN0cmluZy9zdGFydHMtd2l0aD8iLCJzdWJzdHIiLCJnb29nLnN0cmluZy9zdGFydHNXaXRoIiwiY2xvanVyZS5zdHJpbmcvZW5kcy13aXRoPyIsImdvb2cuc3RyaW5nL2VuZHNXaXRoIiwiY2xvanVyZS5zdHJpbmcvaW5jbHVkZXM/IiwiZ29vZy5zdHJpbmcvY29udGFpbnMiXSwic291cmNlc0NvbnRlbnQiOlsiOyAgIENvcHlyaWdodCAoYykgUmljaCBIaWNrZXkuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG47ICAgVGhlIHVzZSBhbmQgZGlzdHJpYnV0aW9uIHRlcm1zIGZvciB0aGlzIHNvZnR3YXJlIGFyZSBjb3ZlcmVkIGJ5IHRoZVxuOyAgIEVjbGlwc2UgUHVibGljIExpY2Vuc2UgMS4wIChodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvZWNsaXBzZS0xLjAucGhwKVxuOyAgIHdoaWNoIGNhbiBiZSBmb3VuZCBpbiB0aGUgZmlsZSBlcGwtdjEwLmh0bWwgYXQgdGhlIHJvb3Qgb2YgdGhpcyBkaXN0cmlidXRpb24uXG47ICAgQnkgdXNpbmcgdGhpcyBzb2Z0d2FyZSBpbiBhbnkgZmFzaGlvbiwgeW91IGFyZSBhZ3JlZWluZyB0byBiZSBib3VuZCBieVxuOyAgIHRoZSB0ZXJtcyBvZiB0aGlzIGxpY2Vuc2UuXG47ICAgWW91IG11c3Qgbm90IHJlbW92ZSB0aGlzIG5vdGljZSwgb3IgYW55IG90aGVyLCBmcm9tIHRoaXMgc29mdHdhcmUuXG5cbihucyBjbG9qdXJlLnN0cmluZ1xuICAoOnJlZmVyLWNsb2p1cmUgOmV4Y2x1ZGUgW3JlcGxhY2UgcmV2ZXJzZV0pXG4gICg6cmVxdWlyZSBbZ29vZy5zdHJpbmcgOmFzIGdzdHJpbmddKVxuICAoOmltcG9ydCBbZ29vZy5zdHJpbmcgU3RyaW5nQnVmZmVyXSkpXG5cbihkZWZuLSBzZXEtcmV2ZXJzZVxuICBbY29sbF1cbiAgKHJlZHVjZSBjb25qICgpIGNvbGwpKVxuXG4oZGVmIF46cHJpdmF0ZSByZS1zdXJyb2dhdGUtcGFpclxuICAoanMvUmVnRXhwLiBcIihbXFxcXHVEODAwLVxcXFx1REJGRl0pKFtcXFxcdURDMDAtXFxcXHVERkZGXSlcIiBcImdcIikpXG5cbihkZWZuIHJldmVyc2VcbiAgXCJSZXR1cm5zIHMgd2l0aCBpdHMgY2hhcmFjdGVycyByZXZlcnNlZC5cIlxuICBbc11cbiAgKC0+ICgucmVwbGFjZSBzIHJlLXN1cnJvZ2F0ZS1wYWlyIFwiJDIkMVwiKVxuICAgICAgKC4uIChzcGxpdCBcIlwiKSAocmV2ZXJzZSkgKGpvaW4gXCJcIikpKSlcblxuKGRlZm4tIHJlcGxhY2UtYWxsXG4gIFtzIHJlIHJlcGxhY2VtZW50XVxuICAobGV0IFtyIChqcy9SZWdFeHAuICguLXNvdXJjZSByZSlcbiAgICAgICAgICAgICAgICAgICAgICAoY29uZC0+IFwiZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAoLi1pZ25vcmVDYXNlIHJlKSAoc3RyIFwiaVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgKC4tbXVsdGlsaW5lIHJlKSAoc3RyIFwibVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgKC4tdW5pY29kZSByZSkgKHN0ciBcInVcIikpKV1cbiAgICAoLnJlcGxhY2UgcyByIHJlcGxhY2VtZW50KSkpXG5cbihkZWZuLSByZXBsYWNlLXdpdGhcbiAgW2ZdXG4gIChmbiBbJiBhcmdzXVxuICAgIChsZXQgW21hdGNoZXMgKGRyb3AtbGFzdCAyIGFyZ3MpXVxuICAgICAgKGlmICg9IChjb3VudCBtYXRjaGVzKSAxKVxuICAgICAgICAoZiAoZmlyc3QgbWF0Y2hlcykpXG4gICAgICAgIChmICh2ZWMgbWF0Y2hlcykpKSkpKVxuXG4oZGVmbiByZXBsYWNlXG4gIFwiUmVwbGFjZXMgYWxsIGluc3RhbmNlIG9mIG1hdGNoIHdpdGggcmVwbGFjZW1lbnQgaW4gcy5cbiAgIG1hdGNoL3JlcGxhY2VtZW50IGNhbiBiZTpcblxuICAgc3RyaW5nIC8gc3RyaW5nXG4gICBwYXR0ZXJuIC8gKHN0cmluZyBvciBmdW5jdGlvbiBvZiBtYXRjaCkuXCJcbiAgW3MgbWF0Y2ggcmVwbGFjZW1lbnRdXG4gIChjb25kXG4gICAgKHN0cmluZz8gbWF0Y2gpXG4gICAgKC5yZXBsYWNlIHMgKGpzL1JlZ0V4cC4gKGdzdHJpbmcvcmVnRXhwRXNjYXBlIG1hdGNoKSBcImdcIikgcmVwbGFjZW1lbnQpXG5cbiAgICAoaW5zdGFuY2U/IGpzL1JlZ0V4cCBtYXRjaClcbiAgICAoaWYgKHN0cmluZz8gcmVwbGFjZW1lbnQpXG4gICAgICAocmVwbGFjZS1hbGwgcyBtYXRjaCByZXBsYWNlbWVudClcbiAgICAgIChyZXBsYWNlLWFsbCBzIG1hdGNoIChyZXBsYWNlLXdpdGggcmVwbGFjZW1lbnQpKSlcblxuICAgIDplbHNlICh0aHJvdyAoc3RyIFwiSW52YWxpZCBtYXRjaCBhcmc6IFwiIG1hdGNoKSkpKVxuXG4oZGVmbiByZXBsYWNlLWZpcnN0XG4gIFwiUmVwbGFjZXMgdGhlIGZpcnN0IGluc3RhbmNlIG9mIG1hdGNoIHdpdGggcmVwbGFjZW1lbnQgaW4gcy5cbiAgIG1hdGNoL3JlcGxhY2VtZW50IGNhbiBiZTpcblxuICAgc3RyaW5nIC8gc3RyaW5nXG4gICBwYXR0ZXJuIC8gKHN0cmluZyBvciBmdW5jdGlvbiBvZiBtYXRjaCkuXCJcbiAgW3MgbWF0Y2ggcmVwbGFjZW1lbnRdXG4gICgucmVwbGFjZSBzIG1hdGNoIHJlcGxhY2VtZW50KSlcblxuKGRlZm4gam9pblxuICBcIlJldHVybnMgYSBzdHJpbmcgb2YgYWxsIGVsZW1lbnRzIGluIGNvbGwsIGFzIHJldHVybmVkIGJ5IChzZXEgY29sbCksXG4gIHNlcGFyYXRlZCBieSBhbiBvcHRpb25hbCBzZXBhcmF0b3IuXCJcbiAgKFtjb2xsXVxuICAgKGxvb3AgW3NiIChTdHJpbmdCdWZmZXIuKSBjb2xsIChzZXEgY29sbCldXG4gICAgIChpZi1ub3QgKG5pbD8gY29sbClcbiAgICAgICAocmVjdXIgKC4gc2IgKGFwcGVuZCAoc3RyIChmaXJzdCBjb2xsKSkpKSAobmV4dCBjb2xsKSlcbiAgICAgICAoLnRvU3RyaW5nIHNiKSkpKVxuICAoW3NlcGFyYXRvciBjb2xsXVxuICAgKGxvb3AgW3NiIChTdHJpbmdCdWZmZXIuKSBjb2xsIChzZXEgY29sbCldXG4gICAgIChpZi1ub3QgKG5pbD8gY29sbClcbiAgICAgICAoZG9cbiAgICAgICAgICguIHNiIChhcHBlbmQgKHN0ciAoZmlyc3QgY29sbCkpKSlcbiAgICAgICAgIChsZXQgW2NvbGwgKG5leHQgY29sbCldXG4gICAgICAgICAgICh3aGVuLW5vdCAobmlsPyBjb2xsKVxuICAgICAgICAgICAgICguIHNiIChhcHBlbmQgc2VwYXJhdG9yKSkpXG4gICAgICAgICAgIChyZWN1ciBzYiBjb2xsKSkpXG4gICAgICAgKC50b1N0cmluZyBzYikpKSkpXG5cbihkZWZuIHVwcGVyLWNhc2VcbiAgXCJDb252ZXJ0cyBzdHJpbmcgdG8gYWxsIHVwcGVyLWNhc2UuXCJcbiAgW3NdXG4gICgudG9VcHBlckNhc2UgcykpXG5cbihkZWZuIGxvd2VyLWNhc2VcbiAgXCJDb252ZXJ0cyBzdHJpbmcgdG8gYWxsIGxvd2VyLWNhc2UuXCJcbiAgW3NdXG4gICgudG9Mb3dlckNhc2UgcykpXG5cbihkZWZuIGNhcGl0YWxpemVcbiAgXCJDb252ZXJ0cyBmaXJzdCBjaGFyYWN0ZXIgb2YgdGhlIHN0cmluZyB0byB1cHBlci1jYXNlLCBhbGwgb3RoZXJcbiAgY2hhcmFjdGVycyB0byBsb3dlci1jYXNlLlwiXG4gIFtzXVxuICAoZ3N0cmluZy9jYXBpdGFsaXplIHMpKVxuXG47OyBUaGUgSmF2YVNjcmlwdCBzcGxpdCBmdW5jdGlvbiB0YWtlcyBhIGxpbWl0IGFyZ3VtZW50IGJ1dCB0aGUgcmV0dXJuXG47OyB2YWx1ZSBpcyBub3QgdGhlIHNhbWUgYXMgdGhlIEphdmEgc3BsaXQgZnVuY3Rpb24uXG47O1xuOzsgSmF2YTogKC5zcGxpdCBcImEtYi1jXCIgI1wiLVwiIDIpID0+IFtcImFcIiBcImItY1wiXVxuOzsgSmF2YVNjcmlwdDogKC5zcGxpdCBcImEtYi1jXCIgI1wiLVwiIDIpID0+IFtcImFcIiBcImJcIl1cbjs7XG47OyBGb3IgY29uc2lzdGVuY3ksIHRoZSB0aHJlZSBhcmcgdmVyc2lvbiBoYXMgYmVlbiBpbXBsZW1lbnRlZCB0b1xuOzsgbWltaWMgSmF2YSdzIGJlaGF2aW9yLlxuXG4oZGVmbi0gcG9wLWxhc3Qtd2hpbGUtZW1wdHlcbiAgW3ZdXG4gIChsb29wIFt2IHZdXG4gICAgKGlmIChpZGVudGljYWw/IFwiXCIgKHBlZWsgdikpXG4gICAgICAocmVjdXIgKHBvcCB2KSlcbiAgICAgIHYpKSlcblxuKGRlZm4tIGRpc2NhcmQtdHJhaWxpbmctaWYtbmVlZGVkXG4gIFtsaW1pdCB2XVxuICAoaWYgKGFuZCAoPT0gMCBsaW1pdCkgKDwgMSAoY291bnQgdikpKVxuICAgIChwb3AtbGFzdC13aGlsZS1lbXB0eSB2KVxuICAgIHYpKVxuXG4oZGVmbi0gc3BsaXQtd2l0aC1lbXB0eS1yZWdleFxuICBbcyBsaW1pdF1cbiAgKGlmIChvciAoPD0gbGltaXQgMCkgKD49IGxpbWl0ICgrIDIgKGNvdW50IHMpKSkpXG4gICAgKGNvbmogKHZlYyAoY29ucyBcIlwiIChtYXAgc3RyIChzZXEgcykpKSkgXCJcIilcbiAgICAoY29uZHAgPT0gbGltaXRcbiAgICAgIDEgKHZlY3RvciBzKVxuICAgICAgMiAodmVjdG9yIFwiXCIgcylcbiAgICAgIChsZXQgW2MgKC0gbGltaXQgMildXG4gICAgICAgIChjb25qICh2ZWMgKGNvbnMgXCJcIiAoc3VidmVjICh2ZWMgKG1hcCBzdHIgKHNlcSBzKSkpIDAgYykpKSAoc3VicyBzIGMpKSkpKSlcblxuKGRlZm4gc3BsaXRcbiAgXCJTcGxpdHMgc3RyaW5nIG9uIGEgcmVndWxhciBleHByZXNzaW9uLiBPcHRpb25hbCBhcmd1bWVudCBsaW1pdCBpc1xuICB0aGUgbWF4aW11bSBudW1iZXIgb2Ygc3BsaXRzLiBOb3QgbGF6eS4gUmV0dXJucyB2ZWN0b3Igb2YgdGhlIHNwbGl0cy5cIlxuICAoW3MgcmVdXG4gICAgIChzcGxpdCBzIHJlIDApKVxuICAgIChbcyByZSBsaW1pdF1cbiAgICAgKGRpc2NhcmQtdHJhaWxpbmctaWYtbmVlZGVkIGxpbWl0XG4gICAgICAgKGlmIChpZGVudGljYWw/IFwiLyg/OikvXCIgKHN0ciByZSkpXG4gICAgICAgICAoc3BsaXQtd2l0aC1lbXB0eS1yZWdleCBzIGxpbWl0KVxuICAgICAgICAgKGlmICg8IGxpbWl0IDEpXG4gICAgICAgICAgICh2ZWMgKC5zcGxpdCAoc3RyIHMpIHJlKSlcbiAgICAgICAgICAgKGxvb3AgW3Mgc1xuICAgICAgICAgICAgICAgICAgbGltaXQgbGltaXRcbiAgICAgICAgICAgICAgICAgIHBhcnRzIFtdXVxuICAgICAgICAgICAgIChpZiAoPT0gMSBsaW1pdClcbiAgICAgICAgICAgICAgIChjb25qIHBhcnRzIHMpXG4gICAgICAgICAgICAgICAobGV0IFttIChyZS1maW5kIHJlIHMpXVxuICAgICAgICAgICAgICAgICAoaWYtbm90IChuaWw/IG0pXG4gICAgICAgICAgICAgICAgICAgKGxldCBbaW5kZXggKC5pbmRleE9mIHMgbSldXG4gICAgICAgICAgICAgICAgICAgICAocmVjdXIgKC5zdWJzdHJpbmcgcyAoKyBpbmRleCAoY291bnQgbSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAoZGVjIGxpbWl0KVxuICAgICAgICAgICAgICAgICAgICAgICAoY29uaiBwYXJ0cyAoLnN1YnN0cmluZyBzIDAgaW5kZXgpKSkpXG4gICAgICAgICAgICAgICAgICAgKGNvbmogcGFydHMgcykpKSkpKSkpKSlcblxuKGRlZm4gc3BsaXQtbGluZXNcbiAgXCJTcGxpdHMgcyBvbiBcXG4gb3IgXFxyXFxuLlwiXG4gIFtzXVxuICAoc3BsaXQgcyAjXCJcXG58XFxyXFxuXCIpKVxuXG4oZGVmbiB0cmltXG4gIFwiUmVtb3ZlcyB3aGl0ZXNwYWNlIGZyb20gYm90aCBlbmRzIG9mIHN0cmluZy5cIlxuICBbc11cbiAgKGdzdHJpbmcvdHJpbSBzKSlcblxuKGRlZm4gdHJpbWxcbiAgXCJSZW1vdmVzIHdoaXRlc3BhY2UgZnJvbSB0aGUgbGVmdCBzaWRlIG9mIHN0cmluZy5cIlxuICBbc11cbiAgKGdzdHJpbmcvdHJpbUxlZnQgcykpXG5cbihkZWZuIHRyaW1yXG4gIFwiUmVtb3ZlcyB3aGl0ZXNwYWNlIGZyb20gdGhlIHJpZ2h0IHNpZGUgb2Ygc3RyaW5nLlwiXG4gIFtzXVxuICAoZ3N0cmluZy90cmltUmlnaHQgcykpXG5cbihkZWZuIHRyaW0tbmV3bGluZVxuICBcIlJlbW92ZXMgYWxsIHRyYWlsaW5nIG5ld2xpbmUgXFxcXG4gb3IgcmV0dXJuIFxcXFxyIGNoYXJhY3RlcnMgZnJvbVxuICBzdHJpbmcuICBTaW1pbGFyIHRvIFBlcmwncyBjaG9tcC5cIlxuICBbc11cbiAgKGxvb3AgW2luZGV4ICguLWxlbmd0aCBzKV1cbiAgICAoaWYgKHplcm8/IGluZGV4KVxuICAgICAgXCJcIlxuICAgICAgKGxldCBbY2ggKGdldCBzIChkZWMgaW5kZXgpKV1cbiAgICAgICAgKGlmIChvciAoaWRlbnRpY2FsPyBcXG5ld2xpbmUgY2gpXG4gICAgICAgICAgICAgICAgKGlkZW50aWNhbD8gXFxyZXR1cm4gY2gpKVxuICAgICAgICAgIChyZWN1ciAoZGVjIGluZGV4KSlcbiAgICAgICAgICAoLnN1YnN0cmluZyBzIDAgaW5kZXgpKSkpKSlcblxuKGRlZm4gXmJvb2xlYW4gYmxhbms/XG4gIFwiVHJ1ZSBpcyBzIGlzIG5pbCwgZW1wdHksIG9yIGNvbnRhaW5zIG9ubHkgd2hpdGVzcGFjZS5cIlxuICBbc11cbiAgKGdzdHJpbmcvaXNFbXB0eVNhZmUgcykpXG5cbihkZWZuIGVzY2FwZVxuICBcIlJldHVybiBhIG5ldyBzdHJpbmcsIHVzaW5nIGNtYXAgdG8gZXNjYXBlIGVhY2ggY2hhcmFjdGVyIGNoXG4gICBmcm9tIHMgYXMgZm9sbG93czpcblxuICAgSWYgKGNtYXAgY2gpIGlzIG5pbCwgYXBwZW5kIGNoIHRvIHRoZSBuZXcgc3RyaW5nLlxuICAgSWYgKGNtYXAgY2gpIGlzIG5vbi1uaWwsIGFwcGVuZCAoc3RyIChjbWFwIGNoKSkgaW5zdGVhZC5cIlxuICBbcyBjbWFwXVxuICAobGV0IFtidWZmZXIgKFN0cmluZ0J1ZmZlci4pXG4gICAgICAgIGxlbmd0aCAoLi1sZW5ndGggcyldXG4gICAgKGxvb3AgW2luZGV4IDBdXG4gICAgICAoaWYgKD09IGxlbmd0aCBpbmRleClcbiAgICAgICAgKC4gYnVmZmVyICh0b1N0cmluZykpXG4gICAgICAgIChsZXQgW2NoICguY2hhckF0IHMgaW5kZXgpXG4gICAgICAgICAgICAgIHJlcGxhY2VtZW50IChnZXQgY21hcCBjaCldXG4gICAgICAgICAgKGlmLW5vdCAobmlsPyByZXBsYWNlbWVudClcbiAgICAgICAgICAgICguYXBwZW5kIGJ1ZmZlciAoc3RyIHJlcGxhY2VtZW50KSlcbiAgICAgICAgICAgICguYXBwZW5kIGJ1ZmZlciBjaCkpXG4gICAgICAgICAgKHJlY3VyIChpbmMgaW5kZXgpKSkpKSkpXG5cbihkZWZuIGluZGV4LW9mXG4gIFwiUmV0dXJuIGluZGV4IG9mIHZhbHVlIChzdHJpbmcgb3IgY2hhcikgaW4gcywgb3B0aW9uYWxseSBzZWFyY2hpbmdcbiAgZm9yd2FyZCBmcm9tIGZyb20taW5kZXggb3IgbmlsIGlmIG5vdCBmb3VuZC5cIlxuICAoW3MgdmFsdWVdXG4gICAobGV0IFtyZXN1bHQgKC5pbmRleE9mIHMgdmFsdWUpXVxuICAgICAoaWYgKG5lZz8gcmVzdWx0KVxuICAgICAgIG5pbFxuICAgICAgIHJlc3VsdCkpKVxuICAoW3MgdmFsdWUgZnJvbS1pbmRleF1cbiAgIChsZXQgW3Jlc3VsdCAoLmluZGV4T2YgcyB2YWx1ZSBmcm9tLWluZGV4KV1cbiAgICAgKGlmIChuZWc/IHJlc3VsdClcbiAgICAgICBuaWxcbiAgICAgICByZXN1bHQpKSkpXG5cbihkZWZuIGxhc3QtaW5kZXgtb2ZcbiAgXCJSZXR1cm4gbGFzdCBpbmRleCBvZiB2YWx1ZSAoc3RyaW5nIG9yIGNoYXIpIGluIHMsIG9wdGlvbmFsbHlcbiAgc2VhcmNoaW5nIGJhY2t3YXJkIGZyb20gZnJvbS1pbmRleCBvciBuaWwgaWYgbm90IGZvdW5kLlwiXG4gIChbcyB2YWx1ZV1cbiAgIChsZXQgW3Jlc3VsdCAoLmxhc3RJbmRleE9mIHMgdmFsdWUpXVxuICAgICAoaWYgKG5lZz8gcmVzdWx0KVxuICAgICAgIG5pbFxuICAgICAgIHJlc3VsdCkpKVxuICAoW3MgdmFsdWUgZnJvbS1pbmRleF1cbiAgIChsZXQgW3Jlc3VsdCAoLmxhc3RJbmRleE9mIHMgdmFsdWUgZnJvbS1pbmRleCldXG4gICAgIChpZiAobmVnPyByZXN1bHQpXG4gICAgICAgbmlsXG4gICAgICAgcmVzdWx0KSkpKVxuXG4oZGVmbiBeYm9vbGVhbiBzdGFydHMtd2l0aD9cbiAgXCJUcnVlIGlmIHMgc3RhcnRzIHdpdGggc3Vic3RyLlwiXG4gIFtzIHN1YnN0cl1cbiAgKGdzdHJpbmcvc3RhcnRzV2l0aCBzIHN1YnN0cikpXG5cbihkZWZuIF5ib29sZWFuIGVuZHMtd2l0aD9cbiAgXCJUcnVlIGlmIHMgZW5kcyB3aXRoIHN1YnN0ci5cIlxuICBbcyBzdWJzdHJdXG4gIChnc3RyaW5nL2VuZHNXaXRoIHMgc3Vic3RyKSlcblxuKGRlZm4gXmJvb2xlYW4gaW5jbHVkZXM/XG4gIFwiVHJ1ZSBpZiBzIGluY2x1ZGVzIHN1YnN0ci5cIlxuICBbcyBzdWJzdHJdXG4gIChnc3RyaW5nL2NvbnRhaW5zIHMgc3Vic3RyKSlcbiJdfQ==