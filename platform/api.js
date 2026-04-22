// Glass Energy Platform — API Client
// All platform pages import this for data access.

const API_BASE = 'https://prospector-platform-production.up.railway.app';
const API_KEY = 'pk_iJjeuYsf3vp1PLnGmbxXHd3r-dxU9vij6JwhAsYM5Vg';

async function apiGet(path, params = {}) {
  const url = new URL(path, API_BASE);
  Object.entries(params).forEach(([k, v]) => {
    if (v !== null && v !== undefined && v !== '') url.searchParams.set(k, v);
  });
  const res = await fetch(url, { headers: { 'X-API-Key': API_KEY } });
  if (!res.ok) throw new Error(`API ${res.status}: ${await res.text()}`);
  return res.json();
}

const api = {
  projects: (params) => apiGet('/projects', params),
  project: (id) => apiGet(`/projects/${id}`),
  search: (q, params = {}) => apiGet('/search', { q, ...params }),
  score: (id) => apiGet(`/score/${id}`),
  stats: () => apiGet('/stats'),
  developers: (params) => apiGet('/developers', params),
  developer: (id) => apiGet(`/developers/${id}`),
  developerProjects: (id) => apiGet(`/developers/${id}/projects`),
  developerSearch: (q) => apiGet('/developers/search', { q }),
  taxCredits: (params) => apiGet('/tax-credits/calculate', params),
  exportProjects: (params) => apiGet('/export/projects', params),
  investable: (params) => apiGet('/investable', params),
  investableSummary: () => apiGet('/investable/summary'),
  icCosts: (params) => apiGet('/ic-costs', params),
};
