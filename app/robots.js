// Search engines and AI answer engines (ChatGPT, Perplexity, Claude, Gemini, Copilot) may read the public site.
const AI_BOTS = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'PerplexityBot', 'Perplexity-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'Google-Extended', 'Applebot-Extended', 'Bingbot', 'Googlebot'];

export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bm-classes.com';
  const rule = { allow: '/', disallow: ['/admin', '/api/'] };

  return {
    rules: [{ userAgent: '*', ...rule }, { userAgent: AI_BOTS, ...rule }],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
