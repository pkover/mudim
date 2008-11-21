﻿
/*----------------------------------------------------------------------------
 CHIM - CHuoi's Input Method
----------------------------------------------------------------------------
 copyright         : (C) 2005, 2006, 2007 by Dao Hai Lam
 http:/xvnkb.sf.net/chim
 email             : daohailam<at>yahoo<dot>com
 last modify       : Thu, 05 Jul 2007 23:07:22 +0700
 version           : 0.9.3
----------------------------------------------------------------------------
 Mudim - Mudzot's Input Method
 (c)2008 by Mudzot
 http:/code.google.com/p/mudim
 email: mudzot<at>gmail.com
 version: 0.8
 date: 29.05.08
----------------------------------------------------------------------------
 This program is free software; you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation; either version 2 of the License, or
 (at your option) any later version.
-------------------------------------------------------------------------------
 Packed with Dean Edwards' Packer ported to Python by Florian Schulze
----------------------------------------------------------------------------*/
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?"":e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp("\\b"+e(c)+"\\b","g"),k[c]);return p}('J(2J(aF)==\'2I\'){}D=P(){L 4G};F=P(){L 4G};F.3G=[\'1c-15\',\'1c-6X\',\'1c-6W\',\'1c-6V\',\'1c-6U\',\'1c-6T\'];F.6c=\'1c-6S\';F.6b=\'1c-6R\';D.52=\'A\';D.53=\'a\';D.77=\'E\';D.78=\'e\';D.57=\'U\';D.58=\'u\';D.55=\'G\';D.56=\'g\';D.1O=\'Q\';D.1P=\'q\';D.7a=\'y\';D.7b=\'Y\';D.aE=\'i\';D.aD=\'I\';D.3S=5W.5V(aC);D.2e="8N";D.1T=" !@#$%^&*()8M+=-{}[]|\\\\:\\";\'<>?,./~`\\r\\n\\t";D.15=0;D.1g=[];D.1S=V;D.3R=P(u){K n,2D=D.2D;u=u.1l(0);1k(n=0;2D[n]!=0&&2D[n]!=u;n++){}L 2D[n]!=0?n:-1};D.54=P(u){K n,O=D.O;u=u.1l(0);1k(n=0;O[n]!=0&&O[n]!=u;n++){}L O[n]!=0?n:-1};D.7c=P(8P,8O){K 1H=D.1H;K n,i=-1,j=-1,u;1k(n=0,u=8P.1l(0);1H[n]!=0&&1H[n]!=u;n++){}J(1H[n]!=0){i=n}1k(n=0,u=8O.1l(0);1H[n]!=0&&1H[n]!=u;n++){}J(1H[n]){j=n}L i-j};D.2Q=P(n,c){D.1g[n]=5W.5V(c)};D.W=P(){L 4G};D.W.1Z=Z;D.W.1r=0;D.W.1f=0;D.W.2e=[];D.W.6i=[];D.W.1Y=P(){D.W.1Z=!D.W.1Z;F.1X()};D.W.4J=P(1r,11){D.W.2e[D.W.1f]=D.W.1r;D.W.6i[D.W.1f++]=11;D.W.1r=1r};D.W.6d=P(){D.W.1r=-1;D.W.1f=0};D.W.8I=P(){L D.W.6i[D.W.1f-1]};F.6f="aB";F.8K="8N|aA|\'`~?.^*+=";F.8H="|az|ax|aw|av|at|as|ar|aq|ai|ap|an|au|am|al|ak|aj|ao|ah|ay|ag|af|ae|";F.8J="ad";F.1T="!@#$%^&*()8M+=-{}[]|\\\\:\\";\'<>?,./~`";F.8L=\'|c|ac|p|t|m|n|4L|6l|\';F.2K=P(11,3I){K b=D.1g;K 14=b.X;K n=11.1Q();J(D.W.1Z&&!F.3L){J(3I>0&&D.15==0){J(F.1V.X>0){K 6h=F.8L.1i(\'|\'+F.1V+\'|\');J(6h<0){D.15=14;F.1V=\'\';L Z}S J(6h<9&&3I==2){K 4K=F.1w(n,2);J(4K!=0&&4K!=1&&4K!=5){D.15=14;F.1V=\'\';L Z}}}J(14==2&&(b[1]==D.58||b[1]==D.57)&&(b[0]==D.1P||b[0]==D.1O)&&(3I==2||(3I==1&&F.1w(n,1)==1))){D.15=14;L D.1U(14,c,11)}}S J(!D.15){K 1J=F.8K.1i(11);J(14>0){K 1n=b[14-1].1Q()}J(14==0){J(F.8J.1i(11)>=0){D.15=-1}S J(1J>=0&&1J<12){D.W.4J(0,11)}S J(1J==12||1J>37){L}S{D.W.6d()}}S J(1J==12||1J>37){D.1I();L}S J(1J>12){D.15=14}S J(1J>=0){K i=0;1p(F.6f.1i(b[i])>=0){i++}J(i>0){F.1L=b.7d(0,i).2S().2R(/,/g,\'\').1Q()}J(D.W.1r<0){J(F.1L==\'q\'){J(14==1&&n!=\'u\'){D.15=14}S J(b[1]==\'u\'&&n==\'u\'){D.15=14}}S J(1n==\'p\'&&n!=\'h\'){D.15=14}S J(1n==\'k\'&&n!=\'i\'&&n!=\'e\'&&n!=\'y\'){D.15=14}S J(F.1L==\'ab\'&&n!=\'i\'&&n!=\'e\'){D.15=14}S{D.W.4J(14,11);J(n==\'y\'){J(\'aa\'.1i(1n)<0){D.15=14}}S J(n==\'e\'||n==\'i\'){J(14>1&&(1n==\'g\')){D.15=14}J(1n==\'c\'){D.15=1}}}}S J(14-D.W.1r>1){D.15=14}S{K w="|"+D.W.8I().1Q()+11.1Q()+"|";K 6g=F.8H.1i(w);J(6g<0){D.15=14}S J(6g<18&&(F.1L==\'c\'||F.1L==\'C\')){D.15=14}S J(1n==\'y\'&&F.1L==\'\'&&n!=\'e\'){D.15=14}S{D.W.4J(14,11)}}}S{2d(11){19\'h\':19\'H\':J(1n>=D.3S||"a9".1i(1n)<0){D.15=14}1e;19\'g\':19\'G\':J(1n!=\'n\'&&1n!=\'N\'){D.15=14}1e;19\'r\':19\'R\':J(1n!=\'t\'&&1n!=\'T\'){D.15=14}1e;7e:J(F.6f.1i(1n)>=0){D.15=14}1e}}}J(D.15!=0){L Z}}L V};D.1U=P(1f,a8,11){J(F.1T.1i(11)>=0){D.1I();L}F.a7=\'a6\';D.1g.8G(11);L F.4Z(D.1v[F.1d-1][2].1F(0))};D.8i=P(11){K p=-1;K i,j=-1;K b,c=0,a5,l;K 1f=D.1g.X;K m=D.1v[F.1d-1],n;K v=1m;K 1B=V;J(!1f||D.15!=0||F.3M){J(F.2K(11,l)){L D.1U(1f,c,11)}L D.1U(0,0,11)}b=D.1g;c=b[p=1f-1];n=11.1Q();1k(l=1;l<m.X;l++)J(m[l].1i(n)>=0){1e}J(l>=m.X){F.2K(11,0);L D.1U(1f,c,11)}J(F.1d==5){F.1d=F.72(n);1B=Z}J((p=F.4Y(n))<0){J(1B){F.1d=5;1B=V}F.2K(11,0);L D.1U(1f,c,11)}F.a4=\'a3\';J(F.2K(11,l)){J(1B){F.1d=5;1B=V}L D.1U(1f,c,11)}c=b[p];K x=c.1l(0);K 3H=V;J(l==1){m=m[0];1k(i=0;!3H&&i<m.X;i++){K k=m[i];J(k[0]==n){1k(i=1;i<k.X;i++){v=D.7E[k[i]];F.4Z(n);x=b[p].1l(0);J(F.1w(n,1)==3){p=0;c=b[p];x=c.1l(0)}J(F.1E(p,x,1,v,n,Z)){J(p>0&&F.1w(n,1)==1&&p<1f-1&&D.54(b[p])>=0&&D.3R(b[p-1])>=0&&b[0]!=D.1P&&b[0]!=D.1O){F.1E(p-1,b[p-1].1l(0),1,D.1G,n,V)}3H=Z;1e}}1e}}}S{1k(i=0;i<D.2P.X;i++){v=D.2P[i];J(F.1E(p,x,2,v,n,Z)){3H=Z;1e}}}J(!3H){F.2K(11,0);J(1B){F.1d=5}1B=V;L D.1U(1f,c,11)}S{J(1B){D.2c()}1B=V}J(D.15!=0){D.1g.8G(11)}L p>=0};D.8A=P(){K 1f=D.1g.X;J(1f<=0){D.1S=Z}S{J(F.2M[0]==1f-1)F.3Q();K i=D.21.X-1;K 6e=D.1g[1f-1].1l(0);1p(i>=0&&D.21[i]!=6e){i--}J(i<0){i=D.1G.X-1;1p(i>=0&&D.1G[i]!=6e){i--}}J(i>=0&&(i%2)==1){F.w--}--1f;D.1g.a2();J(1f==D.W.1r){D.W.1r=D.W.2e[--D.W.1f]}J((D.15<0&&!1f)||(1f<=D.15)){D.15=0}}};D.1I=P(){D.15=0;F.w=0;D.W.6d();F.3Q();F.1V=\'\';F.1L=\'\';F.29=0;F.28=0;J(D.1g.X>0){F.3M=V;F.3L=V}D.1g=[]};D.2c=P(){J(2J(F.3G)!="2I"&&F.1d<F.3G.X){K r;1k(K i=0;i<5;i++){r=1h.4I(F.3G[i]);J(r){r.4H=V}}r=1h.4I(F.3G[F.1d]);J(r){r.4H=Z}}J(2J(F.6c)!="2I"){K r=1h.4I(F.6c);J(r){r.4H=D.W.1Z}}J(2J(F.6b)!="2I"){K r=1h.4I(F.6b);J(r){r.4H=F.1D}}};D.4T=P(){D.1I();F.1d=(++F.1d%6);D.2c();F.1X()};D.1t=P(m){D.1I();F.1d=m;D.2c();F.1X()};D.1Y=P(){K p;J(!(p=F.1M)){F.4R()}J(F.1d==0){D.1t(F.4O)}S{F.4O=F.1d;D.1t(0)}F.1X()};D.5P=P(e){K r;J(e==1m){e=1A.4A}J(e==1m){L 1m}J(e.8F!=1m){r=e.8F}S{r=e.M;1p(r&&r.a1!=1)r=r.4F}J(r.2g==\'a0\'){r=r.4F}D.5O=r.2g==\'59\'||r.1z==\'9Z\'||r.1z==\'1y\';L r};D.2U=P(M){J(M==1m||M.1b==1m||M.1b.X==0){L-1}J(2J(M.3F)!=\'2I\'){J(M.3F<0||M.3F>M.X||M.6a<0||M.6a>M.X||M.6a<M.3F){L-1}L M.3F}J(1h.1x){K 1x=1h.1x.62();K 26=M.63();J(26==1m||1x==1m||((1x.1y!="")&&26.9Y(1x)==V)){L-1}J(1x.1y==""){K 1o=1;J(M.2g=="9X"){K 67=26.1y;1p(1o<67.X){26.9W(67.2T(1o));J(26.8E==1x.8E){1e}1o++}}S J(M.2g=="9V"){K 66=1h.1x.62().9U();1o=M.1b.X+1;1p(66.9T()==M&&66.9S("25",1)==1){--1o;J(M.1b.1l(1o)==10){1o-=1}}J(1o==M.1b.X+1){1o=-1}}L 1o}L 26.1y.1i(1x.1y)}};D.7h=P(M,p){J(p<0){L}J(M.8D){M.8D(p,p)}S J(M.63){K 1j=M.63();1j.9R(Z);1j.8o(\'25\',p);1j.4D(\'25\',p);1j.9Q()}};D.8j=P(M){D.1I();J(M.2g!=\'59\'){K 1T=D.1T;K c=D.2U(M)-1;J(c>0){1p(c>=0&&1T.1i(M.1b.1F(c))<0){D.1g.9P(M.1b.1F(c));c=c-1}}F.27=c+1}S{D.1g=D.1R.8p(M).4X(\'\')}D.1S=V};D.8C=9;D.5Z=8;D.5U=13;D.8z=46;D.5T=32;D.8k=9O;D.5Y=37;D.5X=39;D.8y=36;D.8x=35;D.8w=33;D.8v=34;D.8u=38;D.8t=40;D.8r=9N;D.8q=5l;D.8s=9M;D.5Q=17;D.5S=16;D.9L=18;D.5M=P(1a,8B){2d(1a){19 D.8C:19 D.5U:D.1I();1e;19 D.5Z:J(!8B){D.8A()}1e;19 D.8z:19 D.5Y:19 D.5X:19 D.8y:19 D.8x:19 D.8w:19 D.8v:19 D.8u:19 D.8t:D.1S=Z;1e}};D.8f=P(e,k){J(k==D.8s){F.4W();L Z}S J(k==D.8r||k==D.8q){D.1Y();L Z}L V};D.1R=P(){L 4G};D.1R.60=P(M){J(!M.4F.3D){L}K 61=M.4F.3D.5L;L(!1A.2G&&1h.2F)?61.1h.1x.62():61.9K().9J(0)};D.1R.8p=P(M){K 1j=D.1R.60(M);J(!1j){L\'\'}J(!1A.2G&&1h.2F){1p(1j.4D(\'25\',-1)==-1){J(D.1T.1i(1j.1y.1F(0))>=0){1j.4D(\'25\',1);1e}}L 1j.1y}K 4E=\'\';K s;J(!(s=1j.8n.4C)){L\'\'}K c=1j.8m-1;J(c>0){1p(c>=0&&D.1T.1i(s.1F(c))<0&&s.1l(c)!=9I){4E=s.1F(c)+4E;c=c-1}}L 4E};D.1R.7j=P(M,l){K 1j=D.1R.60(M);J(2J(1j)==\'2I\'){L}K b=D.1g;J(!1A.2G&&1h.2F){K x=-l;1j.4D(\'25\',x);1j.8o(\'25\',x+b.X);1j.9H(b.2S().2R(/,/g,\'\'));L}K 2H=1j.8n;K 3E=1j.8m;K 2f=3E-l;2H.4C=2H.4C.2T(0,2f)+b.2S().2R(/,/g,\'\')+2H.4C.2T(2f+l);J(l<b.X){3E++}1j.9G(2H,3E);1j.9F(2H,3E)};D.5N=P(M){K 4B=F.6k;J(4B.X>0){1k(K i=0;i<4B.X;i++){J(M.1u==4B[i]){L Z}}}L V};D.4u=P(e){J(e==1m){e=1A.4A}J(e.8l==Z){L}e.8l=Z;K 1a=e.1a;J(1a==0){1a=e.4z}J(1a==0){1a=e.8c}J(F.1d==0){L}K M=1m;J(!(M=D.5P(e))||!D.5O||D.5N(M)){L}J(e.8e||e.8d||e.5R){J(1a==D.5Z||1a==D.5Y||1a==D.5X){D.1S=Z}L}J(e.4z==1m||e.4z!=0){K 11=5W.5V(1a);J(1a==D.5T||1a==D.5U){D.1I()}S J(1a>D.5T&&1a<D.8k){J(D.1S){D.8j(M)}K l=D.1g.X;J(l==0){F.27=D.2U(M)}J(F.3K){D.1I();F.27=D.2U(M);F.3K=V}J(D.8i(11)){J(e.8h){e.8h()}J(e.8g){e.8g()}e.9E=Z;e.9D=V;F.7k(M,l)}}S{D.1S=Z}}S{D.5M(1a,Z)}};D.4v=P(e){J(e==1m){e=1A.4A}J(e.1a==D.5S){J(F.28==1){F.3M=Z;F.28=0}}J(e.1a==D.5Q){J(F.29==1){F.3L=Z;F.29=0;F.3K=Z}}};D.4w=P(e){K M=1m;J(e==1m){e=1A.4A}J(D.8f(e,e.1a)){L}J(e.9C||e.9B){L}J(e.9A||e.9z||e.5R){F.28|=1;J(e.1a!=D.5S){F.28|=2}L}J(e.8e||e.8d||e.5R){F.29|=1;J(e.1a!=D.5Q){F.29|=2}L}J(!(M=D.5P(e))||!D.5O||D.5N(M)){L}K 1a=e.1a;J(1a==0){1a=e.4z}J(1a==0){1a=e.8c}D.5M(1a,V)};D.4t=P(e){D.4Q();D.1S=Z};D.4s=P(e,r){J(!e){L}J(!e.86){J(!r){J(!1A.2G&&1h.2F){e.4y(\'8b\',D.4w);e.4y(\'8a\',D.4v);e.4y(\'88\',D.4u);e.4y(\'87\',D.4t)}S{e.4x(\'9y\',D.4w,V);e.4x(\'9x\',D.4v,V);e.4x(\'9w\',D.4u,V);e.4x(\'9v\',D.4t,V)}}S{e.8b=D.4w;e.8a=D.4v;e.88=D.4u;e.87=D.4t}e.86=Z}K f=e.84(\'3D\');1k(K i=0;i<f.X;i++){K 2E=(!1A.2G&&1h.2F)?f[i].5L.1h:f[i].83;5K{2E.3D=f[i];D.4s(2E,V)}5J(e){}}K f=e.84(\'9u\');1k(K i=0;i<f.X;i++){K 2E=(!1A.2G&&1h.2F)?f[i].5L.1h:f[i].83;5K{2E.3D=f[i];D.4s(2E,V)}5J(e){}}};D.4Q=P(){5K{D.4s(1h,Z);D.2c()}5J(9t){}};D.82=[65,4q,4o,4m,4k,4i];D.81=[97,4r,4p,4n,4l,4j];D.80=[3B,3z,3x,3v,3t,3r];D.7Z=[3C,3A,3y,3w,3u,3s];D.7Y=[3p,3n,3l,3j,3h,3f];D.7X=[3q,3o,3m,3k,3i,3g];D.7W=[79,3c,3a,30,2Y,2W];D.7V=[3e,3d,3b,31,2Z,2X];D.7U=[2B,2z,2V,2w,2u,2s];D.7T=[2C,2A,2y,2x,2v,2t];D.7S=[2q,2o,23,2l,2j,2h];D.7R=[2r,2p,2n,2m,2k,2i];D.7Q=[85,4f,4d,4b,49,47];D.7P=[4h,4g,4e,4c,4a,48];D.7O=[44,42,3Z,3X,3V,3T];D.7N=[45,43,41,3Y,3W,3U];D.7M=[69,5G,5E,5C,5A,5y];D.7L=[5I,5H,5F,5D,5B,5z];D.7K=[5w,5u,5s,5q,5o,5m];D.7J=[5x,5v,5t,5r,5p,5n];D.7I=[73,5i,5g,5e,5c,5a];D.7H=[5k,5j,5h,5f,5d,5b];D.7G=[89,7v,7t,7r,7p,7n];D.7F=[5l,7w,7u,7s,7q,7o];D.2P=[D.82,D.81,D.80,D.7Z,D.7Y,D.7X,D.7W,D.7V,D.7U,D.7T,D.7S,D.7R,D.7Q,D.7P,D.7O,D.7N,D.7M,D.7L,D.7K,D.7J,D.7I,D.7H,D.7G,D.7F];D.7D=[65,3B,4q,3z,4o,3x,4m,3v,4k,3t,4i,3r,3p,3B,3n,3z,3l,3x,3j,3v,3h,3t,3f,3r,97,3C,4r,3A,4p,3y,4n,3w,4l,3u,4j,3s,3q,3C,3o,3A,3m,3y,3k,3w,3i,3u,3g,3s];D.7A=[65,3p,4q,3n,4o,3l,4m,3j,4k,3h,4i,3f,3B,3p,3z,3n,3x,3l,3v,3j,3t,3h,3r,3f,97,3q,4r,3o,4p,3m,4n,3k,4l,3i,4j,3g,3C,3q,3A,3o,3y,3m,3w,3k,3u,3i,3s,3g];D.7B=[79,2B,3c,2z,3a,2V,30,2w,2Y,2u,2W,2s,2q,2B,2o,2z,23,23,2l,2w,2j,2u,2h,2s,3e,2C,3d,2A,3b,2y,31,2x,2Z,2v,2X,2t,2r,2C,2p,2A,2n,2y,2m,2x,2k,2v,2i,2t];D.21=[79,2q,3c,2o,3a,23,30,2l,2Y,2j,2W,2h,2B,2q,2z,2o,2V,23,2w,2l,2u,2j,2s,2h,3e,2r,3d,2p,3b,2n,31,2m,2Z,2k,2X,2i,2C,2r,2A,2p,2y,2n,2x,2m,2v,2k,2t,2i];D.1G=[85,44,4f,42,4d,3Z,4b,3X,49,3V,47,3T,4h,45,4g,43,4e,41,4c,3Y,4a,3W,48,3U];D.7C=[69,5w,5G,5u,5E,5s,5C,5q,5A,5o,5y,5m,5I,5x,5H,5v,5F,5t,5D,5r,5B,5p,5z,5n];D.7z=[68,7l,2L,7m];D.7E=[D.7D,D.7C,D.7B,D.7A,D.21,D.1G,D.7z];D.1v=[[[[\'6\',0,1,2],[\'7\',4,5],[\'8\',3],[\'9\',6]],\'9s\',\'9r\'],[[[\'a\',0],[\'e\',1],[\'o\',2],[\'w\',3,4,5],[\'d\',6]],\'9q\',\'9p\'],[[[\'^\',0,1,2],[\'+\',4,5],[\'(\',3],[\'d\',6]],\'^+(d\',"=\'`?~."],[[[\'6\',0,1,2],[\'7\',4,5],[\'8\',3],[\'9\',6],[\'a\',0],[\'e\',1],[\'o\',2],[\'w\',3,4,5],[\'d\',6]],\'7y\',"7x"],[[[\'6\',0,1,2],[\'7\',4,5],[\'8\',3],[\'9\',6],[\'a\',0],[\'e\',1],[\'o\',2],[\'w\',3,4,5],[\'d\',6],[\'^\',0,1,2],[\'+\',4,5],[\'(\',3],[\'d\',6]],\'7y^+(d\',"7x=\'`?~."]];D.2D=[85,4f,4d,4b,49,47,4h,4g,4e,4c,4a,48,44,42,3Z,3X,3V,3T,45,43,41,3Y,3W,3U,73,5i,5g,5e,5c,5a,5k,5j,5h,5f,5d,5b,0];D.O=[79,3c,3a,30,2Y,2W,3e,3d,3b,31,2Z,2X,2B,2z,2V,2w,2u,2s,2C,2A,2y,2x,2v,2t,2q,2o,23,2l,2j,2h,2r,2p,2n,2m,2k,2i,0];D.1H=[97,65,4r,4q,4p,4o,4n,4m,4l,4k,4j,4i,3C,3B,3A,3z,3y,3x,3w,3v,3u,3t,3s,3r,3q,3p,3o,3n,3m,3l,3k,3j,3i,3h,3g,3f,5I,69,5H,5G,5F,5E,5D,5C,5B,5A,5z,5y,5x,5w,5v,5u,5t,5s,5r,5q,5p,5o,5n,5m,3e,79,3d,3c,3b,3a,31,30,2Z,2Y,2X,2W,2C,2B,2A,2z,2y,2V,2x,2w,2v,2u,2t,2s,2r,2q,2p,2o,2n,23,2m,2l,2k,2j,2i,2h,5l,89,7w,7v,7u,7t,7s,7r,7q,7p,7o,7n,4h,85,4g,4f,4e,4d,4c,4b,4a,49,48,47,45,44,43,42,41,3Z,3Y,3X,3W,3V,3U,3T,5k,73,5j,5i,5h,5g,5f,5e,5d,5c,5b,5a,7m,7l,0];F.7k=P(M,l){K b=D.1g;J(M.2g==\'59\'){D.1R.7j(M,l);J(l<D.1g.X){L}L V}K 2f=F.27<0?0:F.27;K 7i=D.2U(M);K t=M.7g;M.1b=M.1b.2T(0,2f)+b.2S().2R(/,/g,\'\')+M.1b.2T(7i);D.7h(M,2f+b.X);M.7g=t};F.4Y=P(7f){K k=7f.1Q();K m=D.1v[F.1d-1];K b=D.1g;K 14=b.X;K i,j,l,p,c;J(!14||D.15!=0){L-1}1k(i=1;i<m.X;i++)J(m[i].1i(k)>=0){1e}p=14-1;F.9o=\'9n\';2d(l=i){19 1:J(F.1w(k,1)==3){1e}19 2:7e:i=p;1p(i>=0&&b[i]<D.3S&&D.2e.1i(b[i])<0)i--;J(i<0){L-1}J(i<14-1){F.1V=b.7d(i+1,14).2S().2R(/,/g,\'\').1Q()}1p(i-1>=0&&(D.2e.1i(b[i-1])>=0||b[i-1]>D.3S)&&D.7c(b[i-1],b[i])<0)i--;J(i==14-1&&i-1>=0&&(j=D.3R(b[i-1]))>0){2d(b[i]){19 D.53:19 D.52:J((i-2<0||(j<24&&b[i-2]!=D.1P&&b[i-2]!=D.1O)||(j>=24&&b[i-2]!=D.56&&b[i-2]!=D.55))&&(l==2||(l==1&&F.1w(k,1)==1)))i--;1e;19 D.58:19 D.57:J(i-2<0||(b[i-2]!=D.56&&b[i-2]!=D.55))i--;1e;19 D.7b:19 D.7a:J((!F.1D)&&i-2>=0&&b[i-2]!=D.1P&&b[i-2]!=D.1O){i--}1e}}J(i==14-1&&i-1>=0&&D.54(b[i-1])>0){2d(b[i]){19 D.53:19 D.52:J(!F.1D&&(l==2||(l==1&&F.1w(k,1)!=1)))i--;1e;19 D.78:19 D.77:J(!F.1D)i--;1e}}J(i==14-2&&i-1>=0){K 51=D.3R(b[i]);J(51>=0&&51<24&(b[i-1]==D.1P||b[i-1]==D.1O)){i++}}p=i;1e};J(F.1w(k,1)==3&&b[0]==\'d\'){L 0}L p};F.1E=P(22,75,2O,76,11,50){K v=76;K i;1k(i=0;i<v.X;i++){J(v[i]==75){2d(2O){19 1:J(F.1w(11,1)==1){F.w++}J(i%2==0){D.2Q(22,v[i+1])}S{D.2Q(22,v[i-1]);J(50){D.15=D.1g.X+1}}1e;19 2:K j=F.1w(11,2);J(j>=0){J(j!=i){D.2Q(22,v[j]);F.2M=[22,(D.1g[22]).1l(0),v,11]}S{D.2Q(22,v[0]);F.3Q();J(50){D.15=D.1g.X+1}}}1e}L Z}}L V};F.3Q=P(){F.2M=[-1,0,1m,\'z\']};F.4Z=P(74){J(D.15!=0){L V}K p=F.4Y(74);K a=F.2M;K b=D.1g;K v,i,j,c;J(p<0){L V}i=D.21.X-1;c=b[p].1l(0);1p(i>=0&&D.21[i]!=c){i--}j=D.1G.X-1;J(p>0){c=b[p-1].1l(0);1p(j>=0&&D.1G[j]!=c){j--}}S{j=-1}J(p<b.X-1&&p>0&&i>=0&&j>=0){J(F.w==1){J(i%2==0){F.1E(p,b[p].1l(0),1,D.21,D.1v[F.1d-1][1].1F(1),V);J(b[0]==D.1P||b[0]==D.1O){F.1E(p-1,b[p-1].1l(0),1,D.1G,D.1v[F.1d-1][1].1F(1),V)}}S{J(b[0]!=D.1P&&b[0]!=D.1O){F.1E(p-1,b[p-1].1l(0),1,D.1G,D.1v[F.1d-1][1].1F(1),V)}}L Z}}J(a[0]>=0&&p>0&&a[0]!=p){F.1E(a[0],a[1],2,a[2],a[3],V);1k(i=0;i<D.2P.X;i++){v=D.2P[i];J(F.1E(p,b[p].1l(0),2,v,a[3],Z)){1e}}L Z}L V};F.1w=P(11,2O){K m=D.1v[F.1d-1];J(F.1d!=4){L m[2O].1i(11)}S{K j=-1;1k(K i=0;i<2;i++){j=D.1v[i][2O].1i(11);J(j>=0){L j}}L j}};F.72=P(c){K 20;J((20=D.1v[4][1].1i(c))>=0){J(20<4){L 1}S J(20<9){L 2}S{L 3}}S J((20=D.1v[4][2].1i(c))>=0){J(20<6){L 1}S J(20<12){L 2}S{L 3}}S{L 0}};F.1X=P(){K d=9m 9l();d.9k(d.9j()+9i);K 71=\';9h=\'+d.9g()+\';9f=/\';K 1b=F.1d;K 1b=D.W.1Z?1b+8:1b;1b=F.1D?1b+16:1b;1b=F.1C?1b+32:1b;1b+=F.1K*64;1h.70=\'|1c-6Z=\'+1b+71};F.6Y=P(){K c=1h.70.4X(\';\');1k(K i=0;i<c.X&&c[i].1i(\'|1c-6Z\')<0;i++);J(i==c.X){D.2c()}S{K 1b=9e(c[i].4X(\'=\')[1],10);F.1d=1b&7;D.W.1Z=(1b&8)?Z:V;D.1D=(1b&16)?Z:V;F.1C=(1b&32)?Z:V;F.1K=(1b&64)>>6}};F.6P=P(){F.1D=!F.1D};F.4W=P(){F.1C=!F.1C;F.1M.1W.3N=F.1C?\'\':\'4V\';F.1X()};F.6p=P(){F.1C=Z;F.1M.1W.3N=\'\'};F.6o=P(){F.1C=V;F.1M.1W.3N=\'4V\'};F.4R=P(){J(!F.1M){F.6Y();F.3J=[\'<2N 1u="6N" 1W="1r: 6M; 6L: 0; 6K:0; 9d:0; 6J: 2L%; 6I: 3P 6H 6G; 6F: 3P; 6E: \'+F.4M+\'; 6D:\'+F.4N+\'; z-1o:2L; 1y-6C: 6B; 6A-6z: 6y;"><a 3O="6x://1c.6w.6v" 6u="6t\\\'s 6s 6r" 1q="F.4U();L V;">F</a> 9c.8 <1N 2b="1c" 1u="1c-15" 1q="F.1t(0);" 1z="2a">\'+F.1s[0]+\'<1N 2b="1c" 1u="1c-6X" 1q="F.1t(1);" 1z="2a"> \'+F.1s[1]+\' <1N 2b="1c" 1u="1c-6W" 1q="F.1t(2);" 1z="2a"> \'+F.1s[2]+\' <1N 2b="1c" 1u="1c-6V" 1q="F.1t(3);" 1z="2a"> \'+F.1s[3]+\' <1N 2b="1c" 1u="1c-6U" 1q="F.1t(4);" 1z="2a"> \'+F.1s[4]+\' <1N 2b="1c" 1u="1c-6T" 1q="F.1t(5);" 1z="2a"> \'+F.1s[5]+\' <1N 1u="1c-6S" 1q="6Q:F.6n();" 1z="6O">\'+F.1s[6]+\'<1N 1u="1c-6R" 1q="6Q:F.6P();" 1z="6O">\'+F.1s[7]+\' [&9b;<a 3O="#" 1q="F.1Y();L V;">\'+F.1s[8]+\'</a> (9a) <a 3O="#" 1q="F.4W();L V;">\'+F.1s[9]+\'</a> (99) ]</2N>\',\'<2N 1u="6N" 1W="1r: 6M; 6L: 0; 6K: 0; 6J: 98; 6I: 3P 6H 6G; 6F: 3P; 6E: \'+F.4M+\'; 6D:\'+F.4N+\'; z-1o:2L; 1y-6C: 6B; 6A-6z: 6y;"><a 3O="6x://1c.6w.6v" 6u="6t\\\'s 6s 6r" 1q="F.4U();L V;">F</a></2N>\'];K f=1h.96(\'2N\');f.6m=F.3J[F.1K];f.1W.3N=\'4V\';1h.6q.95(f,1h.6q.94);F.1M=f;J(F.1C){F.6p()}S{F.6o()}}};F.6n=P(){D.W.1Y()};F.1Y=P(){D.1Y()};F.4U=P(){J(F.1K){F.1K=0}S{F.1K=1}F.4S();F.1M.6m=F.3J[F.1K];F.4P();F.1X()};F.1t=P(m){D.1t(m)};F.4T=P(){D.4T()};F.4S=P(){};F.4P=P(){};F.6j=P(){F.4S();F.4R();D.4Q();F.4P()};F.93=P(){L F.1M.92.1W};F.1d=4;F.1D=Z;F.4O=4;F.1C=Z;F.2M=[-1,0,1m,-1];F.w=0;F.3M=V;F.3L=V;F.3K=V;F.29=0;F.28=0;F.1L=\'\';F.1V=\'\';F.27=0;F.4N=\'91\';F.4M=\'90\';F.1s=[\'Tắt\',\'8Z\',\'8Y\',\'8X\',\'Tổ4L hợp\',\'Tự độ4L\',\'8Wí6l tả\',\'Bỏ dấu 8Vểu mới\',\'Bật/Tắt\',\'Ẩn/8Uện\'];F.6k=[];F.1K=0;F.3J=[\'\',\'\'];F.8T=8S;1k(K i=1;i<2L;i++){8R("F.6j()",8Q*i)}',62,662,'|||||||||||||||||||||||||||||||||||||||CHIM||Mudim||||if|var|return|target|||function|||else|||false|Speller|length||true||key|||len|off||||case|keyCode|value|mudim|method|break|count|buffer|document|indexOf|range|for|charCodeAt|null|lkey|index|while|onclick|position|LANG|SetMethod|id|modes|GetMarkTypeID|selection|text|type|window|autoModeProbe|showPanel|newAccentRule|PutMark|charAt|vn_UW|VN|ClearBuffer|kp|displayMode|headConsonants|Panel|input|CHAR_Q|CHAR_q|toLowerCase|HTMLEditor|dirty|separators|Append|tailConsonants|style|SetPreference|Toggle|enabled|gi|vn_OW|pos|7900||character|textRange|startWordOffset|shiftSerie|ctrlSerie|radio|name|SetDisplay|switch|vowels|start|tagName|7906|7907|7904|7905|7902|7903|7901|7898|7899|416|417|7896|7897|7894|7895|7892|7893|7891|7888|7889|212|244|UI|doc|all|opera|container|undefined|typeof|CheckSpell|100|accent|div|group|vncode_2|SetCharAt|replace|toString|substring|GetCursorPosition|7890|7884|7885|213|245|7886|7887|||||||||210|242|211|243|111|7862|7863|7860|7861|7858|7859|7856|7857|7854|7855|258|259|7852|7853|7850|7851|7848|7849|7846|7847|7844|7845|194|226|iframe|offset|selectionStart|DISPLAY_ID|found|grp|panels|newTempDisableSpellCheckRequest|tempDisableSpellCheck|tempOff|display|href|1px|ResetAccentInfo|CharIsUI|CHAR_0x80|7920|7921|7918|7919|7916|7917|7914||7915|7912|7913|431|432||7908|7909|360|361|7910|7911|217|249|218|250|117|7840|7841|195|227|7842|7843|192|224|193|225|Attach|MouseDown|KeyHandler|KeyUp|KeyDown|addEventListener|attachEvent|charCode|event|ign|nodeValue|moveStart|word|parentNode|this|checked|getElementById|Set|typeid|ng|PANEL_BACKGROUND|COLOR|oldMethod|AfterInit|Activate|InitPanel|BeforeInit|SwitchMethod|ToggleDisplayMode|None|TogglePanel|split|FindAccentPos|AdjustAccent|checkDouble|uipos|CHAR_A|CHAR_a|CharIsO|CHAR_G|CHAR_g|CHAR_U|CHAR_u|HTML|7882|7883|296|297|7880|7881|204|236|205|237|105|121|7878|7879|7876|7877|7874|7875|7872|7873|7870|7871|202|234|7864|7865|7868|7869|7866|7867|200|232|201|233|101|catch|try|contentWindow|ProcessControlKey|Freeze|peckable|GetTarget|VK_CTRL|metaKey|VK_SHIFT|VK_SPACE|VK_ENTER|fromCharCode|String|VK_RIGHT_ARROW|VK_LEFT_ARROW|VK_BACKSPACE|GetRange|win|createRange|createTextRange|||caret|contents|||selectionEnd|ACCENTRULE_ID|SPELLCHECK_ID|Clear|code|consonants|idx|ecIdx|lasts|Init|IGNORE_ID|nh|innerHTML|ToggleSpeller|HidePanel|ShowPanel|body|Method|Input|Mudzot|title|com|googlecode|http|10pt|size|font|center|align|color|background|padding|black|solid|border|width|right|bottom|fixed|mudimPanel|checkbox|ToggleAccentRule|javascript|accentrule|checkspell|auto|mix|viqr|telex|vni|GetPreference|settings|cookie|tail|AutoDetectMode||vk|charCodeAtPos|subsTab|CHAR_E|CHAR_e||CHAR_y|CHAR_Y|CharPriorityCompare|slice|default|nKey|scrollTop|SetCursorPosition|end|Process|UpdateUI|272|273|7924|7925|7928|7929|7926|7927|7922|7923|221|253|012345zsfrxj|6789ewoda|vn_DD|vn_AW|vn_OO|vn_EE|vn_AA|vncode_1|vn_y0|vn_Y0|vn_i0|vn_I0|vn_e6|vn_E6|vn_e0|vn_E0|vn_u7|vn_U7|vn_u0|vn_U0|vn_o7|vn_O7|vn_o6|vn_O6|vn_o0|vn_O0|vn_a8|vn_A8|vn_a6|vn_A6|vn_a0|vn_A0|contentDocument|getElementsByTagName||chim|onmousedown|onkeypress||onkeyup|onkeydown|which|ctrlLeft|ctrlKey|IsHotkey|preventDefault|stopPropagation|AddKey|UpdateBuffer|VK_LIMIT|isHandled|startOffset|startContainer|moveEnd|GetCurrentWord|VK_ONOFF2|VK_ONOFF|VK_PANELTOGGLE|VK_DOWN_ARROW|VK_UP_ARROW|VK_PAGE_DOWN|VK_PAGE_UP|VK_END|VK_HOME|VK_DELETE|BackSpace|release|VK_TAB|setSelectionRange|boundingLeft|srcElement|push|vwchk|Last|nvchk|spchk|tailConsonantsPattern|_|AIUEOYaiueoy|u2|u1|2000|setTimeout|142|REV|Hi|ki|Ch|Viqr|Telex|VNI|lightYellow|Black|firstChild|GetPanelStyle|lastChild|insertBefore|createElement||50px|F8|F9|nbsp|v0|left|parseInt|path|toGMTString|expires|604800000|getTime|setTime|Date|new|ot|is|zsfrxj|ewoda|012345|6789|exc|frame|mousedown|keypress|keyup|keydown|shiftLeft|shiftKey|altLeft|altKey|returnValue|cancelBubble|setStart|setEnd|pasteHTML|160|getRangeAt|getSelection|VK_ALT|119|120|128|unshift|select|collapse|move|parentElement|duplicate|TEXTAREA|findText|INPUT|inRange|textarea|BODY|nodeType|pop|dz|lord|cc|mu|my|lastkey|CGKNPTcgknpt|hklmst|ngh|ch|FfJjWwZz|yu|io|uu|eo||ie|eu|ia|iu|oi||ui|uo|ua|ye|ou||oe|ue|uy||oa|BDFJKLQSVWXZbdfjklqsvwxz|BCDFGHJKLMNPQRSTVWXZbcdfghjklmnpqrstvwxz|0x80|CHAR_I|CHAR_i|console'.split('|'),0,{}))
Mudim.BeforeInit = function() {
	//Mudim.COLOR='Black';
	//Mudim.PANEL_BACKGROUND='lightBlue';
	//Mudim.LANG=['Tắt','VNI','Telex','Viqr','Tổng hợp','Chính tả','Bỏ dấu kiểu mới','Bật/Tắt','Ẩn/Hiện bảng điều khiển'];
	Mudim.IGNORE_ID = ['email'];
};
Mudim.AfterInit = function() {
	//s = Mudim.GetPanelStyle();
	//s.fontSize = '14pt';
	//s.fontFamily = 'Serif';
};
