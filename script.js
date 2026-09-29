:root{--navy:#152c45;--ink:#24374a;--muted:#586674;--red:#a63140;--line:#dce2e7;--paper:#f4f7fa;--white:#fff}
*{box-sizing:border-box}
html{scroll-behavior:smooth;scroll-padding-top:2rem}
body{margin:0;background:var(--white);color:var(--ink);font-family:Arial,Helvetica,sans-serif;font-size:1rem;line-height:1.75}
a{color:inherit;text-underline-offset:5px}
a:focus-visible{outline:3px solid var(--red);outline-offset:6px}
a:hover{color:var(--red)}
.site-header,main,footer{width:min(1100px,calc(100% - 64px));margin-inline:auto}
.site-header{display:flex;justify-content:space-between;align-items:center;gap:24px;padding:25px 0;border-bottom:1px solid var(--line)}
.wordmark{font-size:1.65rem;font-weight:800;letter-spacing:-.06em;text-decoration:none}
.wordmark span,h1 span{color:var(--red)}
nav{display:flex;flex-wrap:wrap;gap:25px;font-size:.9rem}
nav a{text-decoration:none}
.hero{display:grid;grid-template-columns:1.35fr 1fr;gap:75px;align-items:center;padding:80px 0}
.eyebrow{font-size:.75rem;line-height:1.5;letter-spacing:.13em;text-transform:uppercase;font-weight:700;color:var(--red);margin:0 0 23px}
h1,h2,h3{color:var(--navy);line-height:1.15}
h1{font-family:Georgia,'Times New Roman',serif;font-size:clamp(4rem,8vw,6.75rem);font-weight:400;letter-spacing:-.055em;margin:0 0 25px}
h2{font-family:Georgia,'Times New Roman',serif;font-weight:400;font-size:clamp(2rem,4vw,2.8rem);letter-spacing:-.03em;margin:0 0 30px}
h3{font-size:1.15rem;margin:0 0 8px}
p{margin:0 0 20px}
.intro{font-size:1.35rem;line-height:1.5;max-width:470px}
.hero-description{color:var(--muted);max-width:470px}
.actions{display:flex;gap:14px;flex-wrap:wrap;align-items:center;margin-top:28px}
.button{display:inline-block;background:var(--navy);color:white;text-decoration:none;padding:11px 23px;border:1px solid var(--navy);font-weight:700;font-size:.9rem;transition:background .2s,color .2s}
.button:hover{background:var(--red);border-color:var(--red);color:white}
.button.secondary{background:white;color:var(--navy)}
.button.secondary:hover{background:var(--paper)}
.portrait{margin:0;border-bottom:4px solid var(--red);background:var(--paper)}
.portrait img{display:block;width:100%;height:auto;aspect-ratio:5/6;object-fit:cover;object-position:center 30%}
.portrait figcaption{font-size:.8rem;padding:14px 18px;color:var(--muted)}
.photo-fallback{aspect-ratio:5/6;background:var(--navy);color:white;align-items:center;justify-content:center;font-family:Georgia,serif;font-size:6rem}
.photo-fallback:not([hidden]){display:flex}
.section{padding:65px 0;border-top:1px solid var(--line)}
.split{display:grid;grid-template-columns:1fr 1.6fr;gap:65px}
.entry{display:grid;grid-template-columns:1fr 2.5fr;gap:40px;padding:30px 0;border-top:1px solid var(--line)}
.entry:last-child{padding-bottom:0}
.entry-meta{color:var(--muted);font-size:.875rem}
.role{color:var(--red);font-size:.95rem;margin-bottom:15px}
ul{padding-left:20px;margin:0}
li{padding-left:4px;margin:7px 0}
.school+.school{margin-top:32px}
.school p:last-child{margin-bottom:0}
.project{background:var(--paper);padding:45px;margin-bottom:55px;border-top:3px solid var(--navy)}
.project p{max-width:720px}
.project p:last-child{margin-bottom:0}
.contact{padding-bottom:75px}
.contact p:not(.eyebrow){max-width:590px}
.text-link{font-weight:700;font-size:.9rem;margin-left:10px}
.email{display:inline-block;margin-top:25px;overflow-wrap:anywhere;color:var(--muted)}
footer{display:flex;justify-content:space-between;gap:20px;border-top:1px solid var(--line);padding-block:25px;font-size:.8rem;color:var(--muted)}
.skip-link{position:absolute;left:15px;top:-100px;padding:10px;background:white;z-index:10}
.skip-link:focus{top:10px}
@media(max-width:760px){.site-header,main,footer{width:calc(100% - 40px)}.site-header{align-items:flex-start}nav{gap:10px 18px;justify-content:flex-end;max-width:270px}.hero{grid-template-columns:1fr;gap:35px;padding:45px 0}.portrait{max-width:400px}.split,.entry{grid-template-columns:1fr;gap:18px}.section{padding:40px 0}.project{padding:28px;margin-bottom:35px}h2{margin-bottom:20px}.entry-meta br{display:none}.entry-meta br:after{content:' · '}.entry-meta{display:flex;flex-wrap:wrap;gap:8px}}
@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*{transition:none!important}}
