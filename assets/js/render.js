/* ==========================================================================
   Renders the page from PORTFOLIO (assets/js/data.js).
   You should not need to edit this file.
   ========================================================================== */
(function () {
  'use strict';
  var D = window.PORTFOLIO || PORTFOLIO;
  /* meta.hideEmpty: true leaves out any picture whose file is missing.
     false shows a labelled slot instead, so you can see where photos go. */
  var HIDE_EMPTY = !!(D && D.meta && D.meta.hideEmpty);
  var L = Object.assign({ problem: 'The ask', system: 'What I did', outcome: 'What came out of it' }, D.labels || {});

  /* ---------------- helpers ---------------- */
  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function link(href, text, cls) {
    var a = el('a', cls || null, text); a.href = href;
    if (/^https?:/.test(href)) { a.target = '_blank'; a.rel = 'noopener'; }
    return a;
  }

  /* Filename forgiveness: "images/hero-1.jpg" also finds .jpeg/.png/.webp, any case. */
  function candidates(src) {
    var out = [src];
    var m = src.match(/^(.*)\.([A-Za-z0-9]+)$/);
    if (!m) return out;
    var stem = m[1], exts = ['jpg','jpeg','png','webp','JPG','JPEG','PNG','WEBP'];
    var stems = [stem];
    var lead = stem.replace(/[-_]([a1])$/, '');
    if (lead !== stem) stems.push(lead);
    stems.slice().forEach(function (st) {
      var bare = st.replace(/(^|\/)\d{1,2}[-_]\s*/, '$1');
      if (stems.indexOf(bare) < 0) stems.push(bare);
    });
    stems.forEach(function (st) {
      exts.forEach(function (e) { var c = st + '.' + e; if (out.indexOf(c) < 0) out.push(c); });
    });
    return out;
  }
  /* Loads an image, trying each candidate name; calls fail() if none exist. */
  function loadImg(src, alt, fail) {
    var img = el('img'), list = candidates(src), i = 0;
    img.alt = alt || '';
    img.onerror = function () { i++; if (i < list.length) { img.src = list[i]; } else if (fail) { fail(img); } };
    img.src = list[0];
    return img;
  }
  function slot(item) {
    var s = el('div', 'slot');
    s.appendChild(el('span', 'slot-tag', 'image slot'));
    s.appendChild(el('span', 'slot-txt', esc((item && item.alt) || 'Add an image here')));
    return s;
  }
  function dropFigure(fig) {
    var box = fig.parentNode;
    if (!box) return;
    box.removeChild(fig);
    box.classList.remove('pair');
    if (!box.querySelector('figure')) {
      var grid = box.closest ? box.closest('.hero-grid') : null;
      if (grid) grid.classList.add('no-photo');
      if (box.parentNode) box.parentNode.removeChild(box);
    }
  }
  function figure(item, zoomable) {
    var fig = el('figure');
    if (item && item.fit === 'contain') fig.classList.add('fit-contain');  /* documents: show the whole page, no cropping */
    if (item && item.src) {
      var wrap = el('div', 'fig-wrap');
      var img = loadImg(item.src, item.alt, function () {
        if (HIDE_EMPTY) dropFigure(fig);
        else if (wrap.parentNode === fig) fig.replaceChild(slot(item), wrap);
      });
      if (zoomable !== false) {
        img.classList.add('zoomable');
        img.addEventListener('click', function () { openBox(img.currentSrc || img.src, item.caption || item.alt); });
      }
      wrap.appendChild(img); fig.appendChild(wrap);
    } else if (HIDE_EMPTY) { fig.dataset.empty = '1'; }
    else { fig.appendChild(slot(item)); }
    if (item && item.caption) fig.appendChild(el('figcaption', null, item.caption));
    return fig;
  }

  /* Lightbox: click any work, journey or certificate picture to see it full size. */
  var box = el('div', 'lightbox'), boxImg = el('img'), boxCap = el('p', 'lb-cap');
  box.appendChild(boxImg); box.appendChild(boxCap);
  box.setAttribute('role', 'dialog'); box.setAttribute('aria-modal', 'true'); box.hidden = true;
  function openBox(src, cap) { boxImg.src = src; boxCap.innerHTML = cap || ''; box.hidden = false; document.body.classList.add('lb-open'); }
  function closeBox() { box.hidden = true; document.body.classList.remove('lb-open'); }
  box.addEventListener('click', closeBox);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeBox(); });

  var secNo = 0;
  function section(id, title, build) {
    secNo++;
    var sec = el('section'); sec.id = id;
    var head = el('div', 'sec-head');
    head.appendChild(el('span', 'n', String(secNo).padStart(2, '0')));
    head.appendChild(el('h2', 'sec', esc(title)));
    var spine = el('div', 'spine');
    spine.appendChild(head);
    build(spine);
    sec.appendChild(spine);
    return sec;
  }

  var root = document.getElementById('app');
  var m = D.meta;
  document.title = m.name;

  /* ======================= NAV ======================= */
  var NAV = [
    { id: 'about',   label: 'About' },
    { id: 'impact',  label: 'Impact' },
    { id: 'work',    label: 'Work' },
    { id: 'ai',      label: 'AI' },
    { id: 'skills',  label: 'Skills' },
    { id: 'journey', label: 'Journey' },
    { id: 'credentials', label: 'Credentials' },
    { id: 'contact', label: 'Contact' }
  ].filter(function (s) { return s.id !== 'ai' || D.ai; });
  var nav = el('nav', 'nav');
  var navIn = el('div', 'nav-in');
  var mark = el('div', 'nav-mark');
  mark.innerHTML = esc(m.name) + '<span>.</span>';
  navIn.appendChild(mark);
  var navLinks = el('div', 'nav-links');
  NAV.forEach(function (s) {
    var a = el('a', null, s.label); a.href = '#' + s.id; a.dataset.target = s.id;
    navLinks.appendChild(a);
  });
  navIn.appendChild(navLinks);
  var btn = el('button', 'theme-btn', 'Theme');
  btn.type = 'button';
  btn.setAttribute('aria-label', 'Toggle colour theme');
  btn.onclick = function () {
    var cur = document.documentElement.getAttribute('data-theme');
    var next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
  };
  try { var sv = localStorage.getItem('theme'); if (sv) document.documentElement.setAttribute('data-theme', sv); } catch (e) {}
  navIn.appendChild(btn);
  nav.appendChild(navIn);
  root.appendChild(nav);

  var page = el('div', 'page');
  root.appendChild(page);
  root.appendChild(box);

  /* ======================= HERO ======================= */
  var hero = el('header', 'hero'); hero.id = 'about';
  var hg = el('div', 'hero-grid');
  var left = el('div');
  if (m.available) left.appendChild(el('div', 'avail', esc(m.available)));
  left.appendChild(el('p', 'label', m.eyebrow));
  left.appendChild(el('h1', null, esc(m.name)));
  left.appendChild(el('p', 'role', m.tagline));
  var about = el('div', 'hero-block');
  about.appendChild(el('h4', null, 'About me'));
  (Array.isArray(m.about) ? m.about : [m.about]).forEach(function (p) { about.appendChild(el('p', null, p)); });
  left.appendChild(about);
  if (D.doing && D.doing.length) {
    var wd = el('div', 'hero-block');
    wd.appendChild(el('h4', null, 'What I do'));
    var grid = el('div', 'doing');
    D.doing.forEach(function (d) {
      var c = el('div');
      c.appendChild(el('b', null, esc(d.title)));
      c.appendChild(el('span', null, esc(d.body)));
      grid.appendChild(c);
    });
    wd.appendChild(grid);
    left.appendChild(wd);
  }
  var cts = el('div', 'contact');
  if (m.email) cts.appendChild(link('mailto:' + m.email, esc(m.email), 'primary'));
  if (m.phone) cts.appendChild(link('tel:' + m.phone.replace(/\s/g, ''), esc(m.phone)));
  if (m.linkedin) cts.appendChild(link(m.linkedin, 'LinkedIn'));
  if (m.github) cts.appendChild(link(m.github, 'GitHub'));
  if (m.caseStudies) cts.appendChild(link(m.caseStudies, 'Case studies'));
  if (m.cv) cts.appendChild(link(m.cv, 'Download CV'));
  if (m.location) cts.appendChild(el('span', null, esc(m.location)));
  left.appendChild(cts);
  hg.appendChild(left);

  /* Hero photos rotate every few seconds. Missing files are skipped. */
  var right = el('div', 'hero-photo');
  var photos = m.heroPhotos || (m.heroPhoto ? [m.heroPhoto] : []);
  var hfig = el('figure', 'carousel');
  var stage = el('div', 'fig-wrap stage');
  hfig.appendChild(stage);
  var live = [], all = [], pending = photos.length;
  function settle() {
    pending--;
    if (pending > 0) return;
    if (!live.length) {
      if (HIDE_EMPTY) { hg.classList.add('no-photo'); if (right.parentNode) right.parentNode.removeChild(right); }
      else { stage.appendChild(slot({ alt: 'Hero photos go in images/hero-1.jpg, hero-2.jpg ...' })); }
      return;
    }
    live.sort(function (x, y) { return all.indexOf(x) - all.indexOf(y); });  /* keep the order set in data.js */
    live[0].classList.add('on');
    if (live.length > 1) {
      var dots = el('div', 'dots'), k = 0;
      live.forEach(function (im, i) {
        var d = el('button', i === 0 ? 'on' : null); d.type = 'button'; d.setAttribute('aria-label', 'Photo ' + (i + 1));
        d.onclick = function () { show(i); };
        dots.appendChild(d);
      });
      hfig.appendChild(dots);
      function show(i) {
        live[k].classList.remove('on'); dots.children[k].classList.remove('on');
        k = i; live[k].classList.add('on'); dots.children[k].classList.add('on');
      }
      var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!reduce) setInterval(function () { show((k + 1) % live.length); }, m.heroInterval || 4500);
    }
  }
  photos.forEach(function (p) {
    var img = loadImg(p.src, p.alt, function (im) { if (im.parentNode) im.parentNode.removeChild(im); settle(); });
    img.addEventListener('load', function () { if (live.indexOf(img) < 0) { live.push(img); } settle(); }, { once: true });
    all.push(img);
    stage.appendChild(img);
  });
  if (!photos.length) { pending = 1; settle(); }
  right.appendChild(hfig);
  hg.appendChild(right);
  hero.appendChild(hg);
  page.appendChild(hero);

  /* ======================= IMPACT ======================= */
  if (D.metrics && D.metrics.length) {
    page.appendChild(section('impact', D.metricsTitle || 'Measured impact', function (spine) {
      if (D.metricsIntro) spine.appendChild(el('p', 'lede', D.metricsIntro));
      var wrap = el('div', 'metrics');
      D.metrics.forEach(function (r) {
        var c = el('div', 'metric');
        if (r.tag) c.appendChild(el('span', 'tag', esc(r.tag)));
        c.appendChild(el('span', 'fig', r.figure));
        c.appendChild(el('span', 'what', esc(r.what)));
        c.appendChild(el('span', 'cap', esc(r.caption)));
        wrap.appendChild(c);
      });
      spine.appendChild(wrap);
    }));
  }

  /* ======================= METHOD ======================= */
  if (D.method) {
    page.appendChild(section('method', 'How I work', function (spine) {
      spine.appendChild(el('p', 'lede', D.method.intro));
      var fig = el('figure');
      var loop = el('div', 'loop');
      D.method.steps.forEach(function (s, i) {
        var n = el('div', 'node');
        n.appendChild(el('span', 'step', String(i + 1).padStart(2, '0')));
        n.appendChild(el('strong', null, esc(s.title)));
        n.appendChild(el('span', null, esc(s.sub)));
        loop.appendChild(n);
      });
      fig.appendChild(loop);
      fig.appendChild(el('p', 'loop-note', '↻ next question, cheaper than the last'));
      if (D.method.caption) fig.appendChild(el('figcaption', null, D.method.caption));
      spine.appendChild(fig);
      if (D.method.note) spine.appendChild(el('p', null, D.method.note));
    }));
  }

  /* ======================= WORK ======================= */
  if (D.work && D.work.length) {
    page.appendChild(section('work', 'Selected work', function (spine) {
      if (D.workIntro) spine.appendChild(el('p', 'lede', D.workIntro));
      var cards = [];
      var bar = el('div', 'filters');
      function setFilter(key, buttons) {
        buttons.forEach(function (b) { b.classList.toggle('on', b.dataset.k === key); });
        cards.forEach(function (o) { o.node.hidden = !(key === 'all' || o.pillar === key); });
      }
      var counts = {};
      D.work.forEach(function (w) { counts[w.pillar] = (counts[w.pillar] || 0) + 1; });
      var buttons = [];
      var allBtn = el('button', 'on', 'All work <span class="ct">' + D.work.length + '</span>');
      allBtn.type = 'button'; allBtn.dataset.k = 'all';
      buttons.push(allBtn); bar.appendChild(allBtn);
      (D.pillars || []).forEach(function (p) {
        if (!counts[p.key]) return;
        var b = el('button', null, esc(p.name) + ' <span class="ct">' + counts[p.key] + '</span>');
        b.type = 'button'; b.dataset.k = p.key;
        buttons.push(b); bar.appendChild(b);
      });
      buttons.forEach(function (b) { b.onclick = function () { setFilter(b.dataset.k, buttons); }; });
      spine.appendChild(bar);

      D.work.forEach(function (w) {
        var art = el('article', 'case');
        if (w.id) art.id = w.id;
        var head = el('div', 'case-head');
        var where = el('div', 'where');
        where.appendChild(el('span', 'proj', esc(w.org)));
        if (w.discipline) where.appendChild(el('span', 'disc-chip', esc(w.discipline)));
        head.appendChild(where);
        var ctx = [w.context, w.when].filter(Boolean).join(' · ');
        if (ctx) head.appendChild(el('span', 'ctx', esc(ctx)));
        head.appendChild(el('h3', null, esc(w.title)));
        if (w.summary) head.appendChild(el('p', 'summary', w.summary));
        art.appendChild(head);

        var dl = el('dl');
        function pair(term, body, cls) {
          var d = el('div');
          d.appendChild(el('dt', null, esc(term)));
          var dd = el('dd', cls || null);
          (Array.isArray(body) ? body : [body]).forEach(function (p, i) {
            if (typeof p === 'string') { var para = el(i === 0 && !Array.isArray(body) ? 'span' : 'p', null, p); dd.appendChild(para); }
          });
          d.appendChild(dd);
          dl.appendChild(d);
          return dd;
        }
        if (w.problem) pair(L.problem, w.problem);
        if (w.system || w.steps) {
          var sys = pair(L.system, w.system || []);
          if (w.steps && w.steps.length) {
            var ol = el('ol', 'steps');
            w.steps.forEach(function (s) {
              var li = el('li');
              li.appendChild(el('b', null, esc(s.t)));
              li.appendChild(el('span', null, s.d));
              ol.appendChild(li);
            });
            sys.appendChild(ol);
          }
        }
        if (w.highlight) pair(w.highlight.label, w.highlight.body);
        if (w.outcome) pair(L.outcome, w.outcome, 'out');
        art.appendChild(dl);

        if (w.evidence && w.evidence.length) {
          var figs = el('div', 'figs');
          w.evidence.forEach(function (e) { figs.appendChild(figure(e)); });
          art.appendChild(figs);
        }
        if (w.caseStudy || (w.links && w.links.length)) {
          var acts = el('div', 'actions');
          if (w.caseStudy) acts.appendChild(link(w.caseStudy, 'Read the full case study on GitHub <span aria-hidden="true">↗</span>', 'cs-btn'));
          (w.links || []).forEach(function (l) { acts.appendChild(link(l.href, esc(l.label) + ' <span aria-hidden="true">↗</span>', 'link-btn')); });
          art.appendChild(acts);
        }
        if (w.stack && w.stack.length) {
          var st = el('div', 'stack');
          w.stack.forEach(function (s) { st.appendChild(el('span', 'chip', esc(s))); });
          art.appendChild(st);
        }
        cards.push({ node: art, pillar: w.pillar });
        spine.appendChild(art);
      });
      if (D.workNote) spine.appendChild(el('p', 'work-note', D.workNote));
    }));
  }

  /* ======================= AI ======================= */
  if (D.ai) {
    page.appendChild(section('ai', D.ai.title || 'How I work with AI', function (spine) {
      if (D.ai.intro) spine.appendChild(el('p', 'lede', D.ai.intro));
      var g = el('div', 'ai-grid');
      (D.ai.items || []).forEach(function (it, i) {
        var c = el('div', 'ai-card');
        c.appendChild(el('span', 'ai-n', String(i + 1).padStart(2, '0')));
        c.appendChild(el('b', null, esc(it.title)));
        c.appendChild(el('p', null, it.body));
        if (it.proof) c.appendChild(el('span', 'ai-proof', it.proof));
        g.appendChild(c);
      });
      spine.appendChild(g);
      if (D.ai.note) spine.appendChild(el('p', 'ai-note', D.ai.note));
    }));
  }

  /* ======================= SKILLS ======================= */
  if (D.skills) {
    page.appendChild(section('skills', 'What I bring', function (spine) {
      if (D.skills.intro) spine.appendChild(el('p', 'lede', D.skills.intro));
      if (D.skills.technical) {
        var g = el('div', 'skill-grid');
        D.skills.technical.forEach(function (c) {
          var card = el('div', 'skill-card');
          card.appendChild(el('h4', null, esc(c.title)));
          var tags = el('div', 'skill-tags');
          c.items.forEach(function (i) { tags.appendChild(el('span', null, esc(i))); });
          card.appendChild(tags);
          g.appendChild(card);
        });
        spine.appendChild(g);
      }
      if (D.skills.soft) {
        spine.appendChild(el('p', 'label', 'How I work with people'));
        var sg = el('div', 'softs');
        D.skills.soft.forEach(function (s) {
          var d = el('div', 'soft');
          d.appendChild(el('b', null, esc(s.title)));
          d.appendChild(el('span', null, s.body));
          sg.appendChild(d);
        });
        spine.appendChild(sg);
      }
      if (D.skills.values) {
        spine.appendChild(el('p', 'label', 'What I hold to'));
        var vg = el('div', 'values');
        D.skills.values.forEach(function (v) {
          var d = el('div', 'value');
          d.appendChild(el('b', null, esc(v.title)));
          d.appendChild(el('span', null, v.body));
          vg.appendChild(d);
        });
        spine.appendChild(vg);
      }
    }));
  }

  /* ======================= JOURNEY ======================= */
  if (D.timeline && D.timeline.length) {
    page.appendChild(section('journey', 'Built in sequence', function (spine) {
      if (D.timelineIntro) spine.appendChild(el('p', 'lede', D.timelineIntro));
      var tl = el('div', 'tl');
      D.timeline.forEach(function (t) {
        var row = el('div', 'tl-row');
        row.appendChild(el('div', 'tl-when', esc(t.when)));
        var what = el('div', 'tl-what');
        what.appendChild(el('strong', null, esc(t.role)));
        what.appendChild(el('span', 'tl-org', esc(t.org)));
        if (t.detail) what.appendChild(el('span', 'org', esc(t.detail)));
        var pics = t.photos || (t.photo ? [t.photo] : []);
        if (pics.length) {
          var pw = el('div', 'tl-photos' + (pics.length > 1 ? ' strip' : ''));
          pics.forEach(function (ph) { pw.appendChild(figure(ph)); });
          what.appendChild(pw);
        }
        row.appendChild(what);
        tl.appendChild(row);
      });
      spine.appendChild(tl);
      if (D.timelineNote) {
        var note = el('p', null, D.timelineNote);
        note.style.cssText = 'color:var(--muted);font-size:15.5px;max-width:68ch;';
        spine.appendChild(note);
      }
    }));
  }

  /* ======================= CREDENTIALS =======================
     Hover (or tap) a credential with an image to preview the certificate;
     click to open its verification link, or the image if there is no link. */
  if (D.credentials && D.credentials.length) {
    page.appendChild(section('credentials', 'Certifications & awards', function (spine) {
      var wrap = el('div', 'creds');
      D.credentials.forEach(function (c) {
        var d = el('div', 'cred');
        var nm = el('div', 'nm');
        var target = c.url || null;
        if (target) { nm.appendChild(link(target, esc(c.name) + ' <span aria-hidden="true">↗</span>')); } else { nm.textContent = c.name; }
        d.appendChild(nm);
        d.appendChild(el('div', 'mt', esc(c.issuer) + (c.date ? ' · ' + esc(c.date) : '')));
        if (c.img) {
          var pv = el('div', 'cred-preview');
          var im = loadImg(c.img, c.name, function () { if (pv.parentNode) pv.parentNode.removeChild(pv); d.classList.remove('has-img'); });
          pv.appendChild(im);
          d.appendChild(pv);
          d.classList.add('has-img');
          d.tabIndex = 0;
          if (!target) d.addEventListener('click', function () { openBox(im.currentSrc || im.src, esc(c.name)); });
        }
        wrap.appendChild(d);
      });
      spine.appendChild(wrap);
    }));
  }

  /* ======================= CLOSE ======================= */
  if (D.closing) {
    var close = el('div', 'close'); close.id = 'contact';
    var cbox = el('div', 'box');
    cbox.appendChild(el('p', 'label', 'Open to'));
    cbox.appendChild(el('h2', null, D.closing.heading));
    var bp = el('p', null, D.closing.body); bp.style.maxWidth = '64ch';
    cbox.appendChild(bp);
    var links = el('div', 'contact'); links.style.marginTop = '4px';
    if (m.email) links.appendChild(link('mailto:' + m.email, esc(m.email), 'primary'));
    if (m.phone) links.appendChild(link('tel:' + m.phone.replace(/\s/g, ''), esc(m.phone)));
    if (m.linkedin) links.appendChild(link(m.linkedin, 'LinkedIn'));
    if (m.github) links.appendChild(link(m.github, 'GitHub'));
    if (m.caseStudies) links.appendChild(link(m.caseStudies, 'Case studies'));
    cbox.appendChild(links);
    close.appendChild(cbox);
    close.appendChild(el('p', 'foot', esc(m.name) + ' · ' + esc(m.location) + ' · Updated ' + esc(m.updated)));
    page.appendChild(close);
  }

  /* ======================= SCROLL SPY ======================= */
  var linkFor = {};
  navLinks.querySelectorAll('a').forEach(function (a) { linkFor[a.dataset.target] = a; });
  var targets = NAV.map(function (s) { return document.getElementById(s.id); }).filter(Boolean);
  function spy() {
    var best = null, line = (window.innerHeight * 0.3);
    targets.forEach(function (t) { if (t.getBoundingClientRect().top <= line) best = t; });
    if (!best && targets.length) best = targets[0];
    Object.keys(linkFor).forEach(function (k) { linkFor[k].classList.toggle('on', best && k === best.id); });
  }
  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () { spy(); ticking = false; });
  }, { passive: true });
  window.addEventListener('resize', spy, { passive: true });
  spy();
})();
