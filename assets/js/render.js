/* ==========================================================================
   Renders the page from PORTFOLIO (assets/js/data.js).
   You should not need to edit this file.
   ========================================================================== */
(function () {
  'use strict';
  var D = window.PORTFOLIO || PORTFOLIO;

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

  /* Filename forgiveness, one wired path, many accepted files.
     "images/01-graduation-a.jpg" also finds .jpeg/.png/.webp/any case,
     the un-numbered name, underscores, and (for -a/-1 only) the plain stem. */
  function candidates(src) {
    var out = [src];
    var m = src.match(/^(.*)\.([A-Za-z0-9]+)$/);
    if (!m) return out;
    var stem = m[1], exts = ['jpg','jpeg','png','webp','JPG','JPEG','PNG','WEBP'];
    var stems = [stem];
    var lead = stem.replace(/[-_]([a1])$/, '');          /* -a / -1 falls back to plain */
    if (lead !== stem) stems.push(lead);
    stems.slice().forEach(function (st) {
      var bare = st.replace(/(^|\/)\d{1,2}[-_]\s*/, '$1');
      if (stems.indexOf(bare) < 0) stems.push(bare);
      var alt = st.replace(/(^|\/)(\d{1,2})-/, '$1$2_');
      if (stems.indexOf(alt) < 0) stems.push(alt);
    });
    stems.forEach(function (st) {
      exts.forEach(function (e) { var c = st + '.' + e; if (out.indexOf(c) < 0) out.push(c); });
    });
    return out;
  }
  function slot(item) {
    var s = el('div', 'slot');
    s.appendChild(el('span', 'slot-tag', 'image slot'));
    s.appendChild(el('span', 'slot-txt', esc((item && item.alt) || 'Add an image here')));
    return s;
  }
  function figure(item) {
    var fig = el('figure');
    if (item && item.src) {
      var wrap = el('div', 'fig-wrap'), img = el('img');
      var list = candidates(item.src), i = 0;
      img.alt = item.alt || '';
      img.onerror = function () {
        i++;
        if (i < list.length) { img.src = list[i]; }
        else if (wrap.parentNode === fig) { fig.replaceChild(slot(item), wrap); }
      };
      img.src = list[0];
      wrap.appendChild(img); fig.appendChild(wrap);
    } else { fig.appendChild(slot(item)); }
    if (item && item.caption) fig.appendChild(el('figcaption', null, item.caption));
    return fig;
  }
  function section(id, num, title, build) {
    var sec = el('section'); sec.id = id;
    var head = el('div', 'sec-head');
    head.appendChild(el('span', 'n', num));
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
    { id: 'method',  label: 'Method' },
    { id: 'work',    label: 'Work' },
    { id: 'skills',  label: 'Skills' },
    { id: 'journey', label: 'Journey' },
    { id: 'credentials', label: 'Credentials' },
    { id: 'contact', label: 'Contact' }
  ];
  var nav = el('nav', 'nav');
  var navIn = el('div', 'nav-in');
  var mark = el('div', 'nav-mark');
  mark.innerHTML = 'Ade Adelaja<span>.</span>';
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
  about.appendChild(el('p', null, m.about));
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
  if (m.cv) cts.appendChild(link(m.cv, 'Download CV'));
  if (m.location) cts.appendChild(el('span', null, esc(m.location)));
  left.appendChild(cts);

  hg.appendChild(left);
  var right = el('div', 'hero-photo');
  right.appendChild(figure(m.heroPhoto || { src: 'images/00-hero.jpg', alt: 'Ade Adelaja', caption: '' }));
  hg.appendChild(right);
  hero.appendChild(hg);
  page.appendChild(hero);

  /* ======================= IMPACT ======================= */
  if (D.metrics && D.metrics.length) {
    page.appendChild(section('impact', '01', D.metricsTitle || 'Measured impact', function (spine) {
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
    page.appendChild(section('method', '02', 'How I work', function (spine) {
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
    page.appendChild(section('work', '03', 'Selected work', function (spine) {
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
        var head = el('div', 'case-head');
        var where = el('div', 'where');
        where.appendChild(el('span', 'label', esc(w.org)));
        if (w.discipline) where.appendChild(el('span', 'label disc', esc(w.discipline)));
        head.appendChild(where);
        head.appendChild(el('h3', null, esc(w.title)));
        art.appendChild(head);

        var dl = el('dl');
        function pair(term, body, cls) {
          var d = el('div');
          d.appendChild(el('dt', null, esc(term)));
          d.appendChild(el('dd', cls || null, body));
          dl.appendChild(d);
        }
        if (w.problem) pair('Problem', w.problem);
        if (w.system) pair('System', w.system);
        if (w.highlight) pair(w.highlight.label, w.highlight.body);
        if (w.outcome) pair('Outcome', w.outcome, 'out');
        art.appendChild(dl);

        if (w.code) {
          var cw = el('div', 'code-wrap'), hdr = el('div', 'code-head');
          hdr.appendChild(el('span', 'code-file', esc(w.code.file || '')));
          if (w.code.lang) hdr.appendChild(el('span', 'code-lang', esc(w.code.lang)));
          cw.appendChild(hdr);
          var pre = el('pre'), code = el('code');
          code.textContent = w.code.body; pre.appendChild(code); cw.appendChild(pre);
          art.appendChild(cw);
          if (w.code.caption) art.appendChild(el('p', 'code-cap', w.code.caption));
        }
        if (w.tree) {
          var tw = el('div', 'code-wrap'), th = el('div', 'code-head');
          th.appendChild(el('span', 'code-file', esc(w.tree.label || 'Structure')));
          tw.appendChild(th);
          var tp = el('pre'), tc = el('code');
          tc.textContent = w.tree.body; tp.appendChild(tc); tw.appendChild(tp);
          art.appendChild(tw);
        }
        if (w.evidence && w.evidence.length) {
          var figs = el('div', 'figs');
          w.evidence.forEach(function (e) { figs.appendChild(figure(e)); });
          art.appendChild(figs);
        }
        if (w.stack && w.stack.length) {
          var st = el('div', 'stack');
          w.stack.forEach(function (s) { st.appendChild(el('span', 'chip', esc(s))); });
          art.appendChild(st);
        }
        cards.push({ node: art, pillar: w.pillar });
        spine.appendChild(art);
      });
    }));
  }

  /* ======================= SKILLS ======================= */
  if (D.skills) {
    page.appendChild(section('skills', '04', 'What I bring', function (spine) {
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
    page.appendChild(section('journey', '05', 'Built in sequence', function (spine) {
      if (D.timelineIntro) spine.appendChild(el('p', 'lede', D.timelineIntro));
      var tl = el('div', 'tl');
      D.timeline.forEach(function (t) {
        var row = el('div', 'tl-row');
        row.appendChild(el('div', 'tl-when', esc(t.when)));
        var what = el('div', 'tl-what');
        what.appendChild(el('strong', null, esc(t.role)));
        what.appendChild(el('span', 'org', esc(t.org) + (t.detail ? ', ' + esc(t.detail) : '')));
        var pics = t.photos || (t.photo ? [t.photo] : []);
        if (pics.length) {
          var pw = el('div', pics.length > 1 ? 'tl-photos pair' : 'tl-photos');
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

  /* ======================= CREDENTIALS ======================= */
  if (D.credentials && D.credentials.length) {
    page.appendChild(section('credentials', '06', 'Certifications & awards', function (spine) {
      var wrap = el('div', 'creds');
      D.credentials.forEach(function (c) {
        var d = el('div', 'cred'), nm = el('div', 'nm');
        if (c.url) { nm.appendChild(link(c.url, esc(c.name))); } else { nm.textContent = c.name; }
        d.appendChild(nm);
        d.appendChild(el('div', 'mt', esc(c.issuer) + (c.date ? ' · ' + esc(c.date) : '')));
        wrap.appendChild(d);
      });
      spine.appendChild(wrap);
    }));
  }

  /* ======================= CLOSE ======================= */
  if (D.closing) {
    var close = el('div', 'close'); close.id = 'contact';
    var box = el('div', 'box');
    box.appendChild(el('p', 'label', 'Open to'));
    box.appendChild(el('h2', null, D.closing.heading));
    var bp = el('p', null, D.closing.body); bp.style.maxWidth = '64ch';
    box.appendChild(bp);
    var links = el('div', 'contact'); links.style.marginTop = '4px';
    if (m.email) links.appendChild(link('mailto:' + m.email, esc(m.email), 'primary'));
    if (m.phone) links.appendChild(link('tel:' + m.phone.replace(/\s/g, ''), esc(m.phone)));
    if (m.linkedin) links.appendChild(link(m.linkedin, 'LinkedIn'));
    if (m.github) links.appendChild(link(m.github, 'GitHub'));
    box.appendChild(links);
    close.appendChild(box);
    close.appendChild(el('p', 'foot', esc(m.name) + ' · ' + esc(m.location) + ' · Updated ' + esc(m.updated)));
    page.appendChild(close);
  }

  /* ======================= SCROLL SPY ======================= */
  var linkFor = {};
  navLinks.querySelectorAll('a').forEach(function (a) { linkFor[a.dataset.target] = a; });
  var targets = NAV.map(function (s) { return document.getElementById(s.id); }).filter(Boolean);

  function spy() {
    var best = null, line = (window.innerHeight * 0.3);
    targets.forEach(function (t) {
      var top = t.getBoundingClientRect().top;
      if (top <= line) best = t;
    });
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
