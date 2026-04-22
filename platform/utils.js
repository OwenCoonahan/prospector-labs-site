// Glass Energy Platform — Shared Utilities
// All platform pages import this for formatting, theme, URL state.

// ── Date conversion (API returns Excel serial numbers) ──────────────
function excelToDate(serial) {
  if (!serial || serial === 'nan' || serial === 'null') return null;
  const num = parseFloat(serial);
  if (isNaN(num)) return null;
  return new Date((num - 25569) * 86400000);
}

function formatDate(serial) {
  const d = excelToDate(serial);
  if (!d || isNaN(d.getTime())) return '\u2014';
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function formatQuarter(serial) {
  const d = excelToDate(serial);
  if (!d || isNaN(d.getTime())) return '\u2014';
  const q = Math.ceil((d.getMonth() + 1) / 3);
  return `Q${q} ${d.getFullYear()}`;
}

function queueYears(queueDateSerial) {
  const d = excelToDate(queueDateSerial);
  if (!d || isNaN(d.getTime())) return null;
  const years = (Date.now() - d.getTime()) / (365.25 * 86400000);
  return Math.round(years * 10) / 10;
}

// ── Number formatting ───────────────────────────────────────────────
function fmtMW(mw) {
  if (mw === null || mw === undefined) return '\u2014';
  return mw >= 1000 ? `${(mw / 1000).toFixed(1)} GW` : `${Math.round(mw)} MW`;
}

function fmtDollars(val) {
  if (!val) return '\u2014';
  if (val >= 1e9) return `$${(val / 1e9).toFixed(1)}B`;
  if (val >= 1e6) return `$${(val / 1e6).toFixed(0)}M`;
  if (val >= 1e3) return `$${(val / 1e3).toFixed(0)}K`;
  return `$${val.toFixed(0)}`;
}

function fmtPct(val) {
  if (val === null || val === undefined) return '\u2014';
  return `${(val * 100).toFixed(1)}%`;
}

function fmtNum(val) {
  if (val === null || val === undefined) return '\u2014';
  return val.toLocaleString('en-US');
}

// ── Score helpers ───────────────────────────────────────────────────
function scoreClass(score) {
  if (score >= 90) return 'score-excellent';
  if (score >= 70) return 'score-good';
  if (score >= 50) return 'score-fair';
  if (score >= 30) return 'score-poor';
  return 'score-bad';
}

function scoreColor(score) {
  if (score >= 90) return 'var(--green)';
  if (score >= 70) return 'var(--blue)';
  if (score >= 50) return 'var(--amber)';
  if (score >= 30) return 'var(--orange)';
  return 'var(--red)';
}

// ── Tech badge helpers ──────────────────────────────────────────────
function techClass(type) {
  const t = (type || '').toLowerCase();
  if (t.includes('solar') && t.includes('storage')) return 'tech-hybrid';
  if (t.includes('solar')) return 'tech-solar';
  if (t.includes('wind')) return 'tech-wind';
  if (t.includes('storage') || t.includes('batter')) return 'tech-storage';
  if (t.includes('gas')) return 'tech-gas';
  if (t.includes('hybrid')) return 'tech-hybrid';
  if (t.includes('nuclear')) return 'tech-nuclear';
  return 'badge-gray';
}

function techLabel(type) {
  const t = (type || '').toLowerCase();
  if (t.includes('solar') && t.includes('storage')) return 'Solar+Storage';
  if (t.includes('wind') && t.includes('storage')) return 'Wind+Storage';
  if (t.includes('solar')) return 'Solar';
  if (t.includes('wind') && t.includes('offshore')) return 'Offshore Wind';
  if (t.includes('wind')) return 'Wind';
  if (t.includes('storage') || t.includes('batter')) return 'Storage';
  if (t.includes('gas')) return 'Gas';
  if (t.includes('nuclear')) return 'Nuclear';
  if (t.includes('hydro')) return 'Hydro';
  return type || 'Other';
}

// ── Status helpers ──────────────────────────────────────────────────
function statusDotClass(status) {
  const s = (status || '').toLowerCase();
  if (s.includes('operational')) return 'operational';
  if (s.includes('ia executed') || s.includes('executed')) return 'ia-executed';
  if (s.includes('construction') || s.includes('under con')) return 'construction';
  if (s.includes('withdrawn') || s.includes('cancel')) return 'withdrawn';
  if (s.includes('suspended')) return 'suspended';
  return 'active';
}

function statusLabel(status) {
  if (!status) return 'Unknown';
  // Capitalize first letter of each word
  return status.replace(/\b\w/g, c => c.toUpperCase());
}

// ── Credit display ──────────────────────────────────────────────────
function creditDisplay(project) {
  const type = project.recommended_credit;
  const rate = project.effective_credit_rate;
  if (!type && !rate) return '\u2014';
  if (type === 'ptc' || type === 'PTC') {
    return rate ? `PTC $${(rate * 1000).toFixed(1)}/MWh` : 'PTC';
  }
  if (type === 'itc' || type === 'ITC') {
    return rate ? `ITC ${(rate * 100).toFixed(0)}%` : 'ITC';
  }
  if (rate) {
    return rate > 1 ? `$${rate.toFixed(2)}/MWh` : `${(rate * 100).toFixed(0)}%`;
  }
  return type || '\u2014';
}

// ── Tier helpers ────────────────────────────────────────────────────
function tierClass(tier) {
  const t = (tier || '').toLowerCase();
  if (t.includes('a') || t.includes('major')) return 'tier-a';
  if (t.includes('b') || t.includes('mid')) return 'tier-b';
  if (t.includes('c') || t.includes('small') || t.includes('minor')) return 'tier-c';
  return 'tier-unrated';
}

function tierLabel(tier) {
  if (!tier) return 'Unrated';
  const t = tier.toLowerCase();
  if (t.includes('major_utility')) return 'Major Utility';
  if (t.includes('large_ipp')) return 'Large IPP';
  if (t.includes('mid_market')) return 'Mid-Market';
  if (t.includes('small')) return 'Small';
  if (t.includes('emerging')) return 'Emerging';
  return tier.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

// ── Theme ───────────────────────────────────────────────────────────
function initTheme() {
  const saved = localStorage.getItem('glass-theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
    return saved;
  }
  // Detect system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = prefersDark ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
  return theme;
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('glass-theme', next);
  return next;
}

// ── URL state sync ──────────────────────────────────────────────────
function getFiltersFromURL() {
  const params = new URLSearchParams(window.location.search);
  return Object.fromEntries(params.entries());
}

function setFiltersToURL(filters) {
  const params = new URLSearchParams();
  Object.entries(filters).forEach(([k, v]) => {
    if (v !== null && v !== undefined && v !== '') params.set(k, v);
  });
  const qs = params.toString();
  const url = qs ? `${window.location.pathname}?${qs}` : window.location.pathname;
  window.history.replaceState({}, '', url);
}

// ── Debounce ────────────────────────────────────────────────────────
function debounce(fn, ms) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}

// ── HTML escaping ───────────────────────────────────────────────────
function esc(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
