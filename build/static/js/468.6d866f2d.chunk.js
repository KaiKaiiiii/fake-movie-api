"use strict";(self.webpackChunksimple_movie=self.webpackChunksimple_movie||[]).push([[468],{884:function(e,t,a){a(791);var l=a(871),s=a(184);t.Z=function(e){var t=e.item,a=(0,l.s0)();return(0,s.jsxs)("div",{className:"movie-card rounded-lg p-3 bg-slate-800 text-white flex flex-col",children:[(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),alt:"",className:"w-full h-[250px] object-cover rounded-lg mb-5"}),(0,s.jsx)("h3",{className:"text-xl mb-3 font-bold",children:t.title}),(0,s.jsxs)("div",{className:"flex flex-col flex-1",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between text-sm opacity-50 mb-10 ",children:[(0,s.jsx)("span",{children:new Date(t.release_date).getFullYear()}),(0,s.jsx)("span",{children:t.vote_average})]}),(0,s.jsx)("button",{onClick:function(){return a("/movie/".concat(t.id))},className:"py-4 px-6 bg-pink-500 rounded-lg w-full mt-auto",children:"Watch now"})]})]})}},468:function(e,t,a){a.r(t);a(791);var l=a(871),s=a(707),i=a(419),r=a(884),n=a(197),c=a(184);function o(){var e=(0,l.UO)().movieId,t=(0,i.ZP)("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=9dd902b52756efb64c1970b9c817d931&language=en-US"),n._).data;if(!t)return null;var a=t.cast;return!a||a.length<=0?null:(0,c.jsx)("div",{className:"flex justify-center items-center gap-x-5 mb-20",children:a.slice(0,4).map((function(e){return(0,c.jsxs)("div",{className:"flex flex-col gap-y-3 w-1/4 h-[500px]",children:[(0,c.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(e.profile_path),alt:"",className:"w-full h-full object-cover"}),(0,c.jsx)("p",{className:"text-xl text-pink-500 font-semibold",children:e.original_name}),(0,c.jsx)("span",{className:"text-sm opacity-50",children:e.character})]},e.id)}))})}function d(){var e=(0,l.UO)().movieId,t=(0,i.ZP)("https://api.themoviedb.org/3/movie/".concat(e,"/videos?api_key=9dd902b52756efb64c1970b9c817d931&language=en-US"),n._).data;if(!t)return null;var a=t.results;return!a||a.length<=0?null:(0,c.jsx)("div",{className:"py-10",children:a.slice(0,2).map((function(e){return(0,c.jsxs)("div",{className:"mb-10",children:[(0,c.jsx)("h4",{className:"text-orange-500 border-2 border-orange-500 inline-block px-4 py-2 mb-5",children:e.name}),(0,c.jsx)("iframe",{width:"753",height:"1000",src:"https://www.youtube.com/embed/".concat(e.key),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,className:"w-full "})]},e.id)}))})}function m(){var e=(0,l.UO)().movieId,t=(0,i.ZP)("https://api.themoviedb.org/3/movie/".concat(e,"/similar?api_key=9dd902b52756efb64c1970b9c817d931&language=en-US"),n._).data;if(!t)return null;var a=t.results;return(0,c.jsxs)("div",{className:"movie-list ",children:[(0,c.jsx)("h2",{className:"text-2xl font-semibold mb-5",children:"Similar movies"}),(0,c.jsx)(s.tq,{spaceBetween:30,slidesPerView:3,grabCursor:!0,children:a&&a.length>0&&a.map((function(e){return(0,c.jsx)(s.o5,{children:(0,c.jsx)(r.Z,{item:e})},e.id)}))})]})}t.default=function(){var e=(0,l.UO)().movieId,t=(0,i.ZP)("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=9dd902b52756efb64c1970b9c817d931&language=en-US"),n._).data;if(!t)return null;var a=t.backdrop_path,s=t.poster_path,r=t.title,u=t.overview,x=t.genres;return(0,c.jsxs)("div",{className:"py-10 text-white",children:[(0,c.jsxs)("div",{className:"relative w-full h-[600px] mb-60",children:[(0,c.jsx)("div",{className:"absolute inset-0 opacity-70 bg-black"}),(0,c.jsx)("div",{className:"w-full h-full bg-no-repeat bg-cover ",style:{backgroundImage:"url(https://image.tmdb.org/t/p/original/".concat(a,")")}}),(0,c.jsx)("div",{className:"w-3/4 h-[400px] rounded-md  absolute mx-auto -translate-y-2/4 left-2/4 -translate-x-2/4",children:(0,c.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(s),alt:"",className:"w-full h-full object-cover"})})]}),(0,c.jsx)("h1",{className:"text-center text-4xl font-bold  mb-10",children:r}),(0,c.jsx)("p",{className:"text-center text-xl max-w-[700px] mx-auto font-semibold mb-10",children:u}),(0,c.jsx)("div",{className:"flex items-center justify-center gap-x-10 mb-10",children:x.length>0&&x.map((function(e){return(0,c.jsx)("span",{className:"py-2 px-4  border-pink-500 border-2 rounded-md text-pink-500",children:e.name},e.id)}))}),(0,c.jsx)(o,{}),(0,c.jsx)(d,{}),(0,c.jsx)(m,{})]})}}}]);
//# sourceMappingURL=468.6d866f2d.chunk.js.map