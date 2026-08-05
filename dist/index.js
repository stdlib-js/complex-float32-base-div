"use strict";var p=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw r=0,e}}};var c=p(function(L,y){"use strict";var t=require("@stdlib/math-base-assert-is-infinite"),N=require("@stdlib/math-base-assert-is-finite"),g=require("@stdlib/math-base-special-signumf"),w=require("@stdlib/number-float64-base-to-float32");function j(i,r,e,n,a,v,s){var q,u,l;return t(e)||t(n)?!N(i)||!N(r)?(a[s]=NaN,a[s+v]=NaN,a):(a[s]=0*g(i)*g(e),a[s+v]=-0*g(r)*g(n),a):(q=1/(e*e+n*n),u=(i*e+r*n)*q,l=(r*e-i*n)*q,a[s]=w(u),a[s+v]=w(l),a)}y.exports=j});var I=p(function(M,F){"use strict";var A=require("@stdlib/complex-float32-real"),C=require("@stdlib/complex-float32-imag"),k=require("@stdlib/array-float32"),m=require("@stdlib/complex-float32-ctor"),B=c(),d=new k(2);function D(i,r){var e,n,a,v;return e=A(i),n=A(r),a=C(i),v=C(r),d=B(e,a,n,v,d,1,0),new m(d[0],d[1])}F.exports=D});var b=p(function(P,R){"use strict";var E=c();function G(i,r,e,n,a,v,s,q,u){return E(i[e],i[e+r],n[v],n[v+a],s,q,u)}R.exports=G});var h=require("@stdlib/utils-define-nonenumerable-read-only-property"),x=I(),H=c(),J=b();h(x,"assign",H);h(x,"strided",J);module.exports=x;
/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
