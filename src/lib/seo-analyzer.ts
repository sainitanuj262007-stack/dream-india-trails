// Pure, isomorphic on-page SEO analyzer for meta title, meta description and
// headings. No network access, no framework code — safe to unit-test.

export type FindingStatus = "passed" | "needs_improvement" | "issue" | "not_checked";

export interface Heading {
  level: number; // 1–6
  text: string;
}

export interface AnalyzerInput {
  title: string | null;
  metaDescription: string | null;
  headings: Heading[];
  url: string;
  primaryKeyword: string | null;
  /** URLs on the same website whose latest snapshot has the exact same title. */
  duplicateTitleUrls: string[];
}

export interface AuditFinding {
  check_key: string;
  category: "title" | "description" | "headings" | "keywords";
  status: FindingStatus;
  weight: number;
  title: string;
  explanation: string;
  evidence?: Record<string, unknown>;
  recommendation: string;
}

export interface AuditResult {
  findings: AuditFinding[];
  score: number; // 0–100
}

const TITLE_MIN = 30;
const TITLE_MAX = 60;
const DESC_MIN = 120;
const DESC_MAX = 160;

export function keywordMatches(text: string | null | undefined, keyword: string | null): boolean {
  if (!text || !keyword) return false;
  const hay = text.toLowerCase();
  const kw = keyword.toLowerCase().trim();
  if (!kw) return false;
  if (hay.includes(kw)) return true;
  const words = kw.split(/\s+/).filter(Boolean);
  if (words.length < 2) return false;
  return words.every((w) => hay.includes(w));
}

export function slugKeywordMatch(url: string, keyword: string | null): boolean {
  if (!keyword) return false;
  let path = "";
  try {
    path = new URL(url).pathname.toLowerCase();
  } catch {
    return false;
  }
  const kw = keyword.toLowerCase().trim();
  const words = kw.split(/\s+/).filter((w) => w.length > 2);
  if (words.length === 0) return false;
  const matched = words.filter((w) => path.includes(w)).length;
  return matched / words.length >= 0.6;
}

export function runSeoAudit(input: AnalyzerInput): AuditResult {
  const findings: AuditFinding[] = [];
  const kw = input.primaryKeyword?.trim() || null;

  // --- Title -------------------------------------------------------------
  const title = input.title?.trim() || "";
  if (!title) {
    findings.push({
      check_key: "title_exists",
      category: "title",
      status: "issue",
      weight: 12,
      title: "Title tag is missing",
      explanation: "The page has no <title> tag, so search engines will pick their own text to show.",
      recommendation: "Add a descriptive 50–60 character title with the page's main topic.",
    });
  } else {
    const len = title.length;
    findings.push({
      check_key: "title_exists",
      category: "title",
      status: "passed",
      weight: 12,
      title: "Title tag exists",
      explanation: "A title tag is present.",
      evidence: { title },
      recommendation: "Keep it descriptive and unique.",
    });

    let titleLenStatus: FindingStatus;
    let titleLenExplanation: string;
    if (len < TITLE_MIN) {
      titleLenStatus = "needs_improvement";
      titleLenExplanation = `The title is only ${len} characters — there is unused space to describe the page (guideline: ${TITLE_MIN}–${TITLE_MAX}).`;
    } else if (len > TITLE_MAX + 15) {
      titleLenStatus = "needs_improvement";
      titleLenExplanation = `The title is ${len} characters and will likely be cut off in search results (guideline: ${TITLE_MIN}–${TITLE_MAX}).`;
    } else if (len > TITLE_MAX) {
      titleLenStatus = "needs_improvement";
      titleLenExplanation = `The title is ${len} characters — slightly over the ${TITLE_MAX}-character guideline and may be truncated.`;
    } else {
      titleLenStatus = "passed";
      titleLenExplanation = `Title length (${len} characters) is within the ${TITLE_MIN}–${TITLE_MAX} guideline.`;
    }
    findings.push({
      check_key: "title_length",
      category: "title",
      status: titleLenStatus,
      weight: 12,
      title: "Title length",
      explanation: titleLenExplanation,
      evidence: { length: len },
      recommendation: "Aim for roughly 50–60 characters so the full title shows in search results.",
    });

    if (input.duplicateTitleUrls.length > 0) {
      findings.push({
        check_key: "title_duplicate",
        category: "title",
        status: "needs_improvement",
        weight: 5,
        title: "Duplicate title on other pages",
        explanation: `The exact same title is also used on ${input.duplicateTitleUrls.length} other page(s) on this website. Search engines may struggle to pick the right page.`,
        evidence: { duplicate_urls: input.duplicateTitleUrls.slice(0, 10) },
        recommendation: "Give each page a unique title that reflects its specific content.",
      });
    } else {
      findings.push({
        check_key: "title_duplicate",
        category: "title",
        status: "passed",
        weight: 5,
        title: "Title is unique on this website",
        explanation: "No other analyzed page on this website uses the exact same title.",
        recommendation: "Keep titles unique as you add pages.",
      });
    }
  }

  if (kw) {
    findings.push({
      check_key: "title_keyword",
      category: "keywords",
      status: keywordMatches(title, kw) ? "passed" : "needs_improvement",
      weight: 12,
      title: "Primary keyword in title",
      explanation: keywordMatches(title, kw)
        ? `The primary keyword "${kw}" appears in the title.`
        : `The primary keyword "${kw}" does not appear in the title.`,
      recommendation: `Work the primary keyword naturally into the title.`,
    });
  } else {
    findings.push({
      check_key: "title_keyword",
      category: "keywords",
      status: "not_checked" as FindingStatus,
      weight: 12,
      title: "Primary keyword in title",
      explanation: "No primary keyword is assigned to this page yet.",
      recommendation: "Assign a primary keyword so keyword checks can run.",
    });
  }

  // --- Meta description ----------------------------------------------------
  const desc = input.metaDescription?.trim() || "";
  if (!desc) {
    findings.push({
      check_key: "description_exists",
      category: "description",
      status: "issue",
      weight: 12,
      title: "Meta description is missing",
      explanation: "Without a meta description, search engines will cut a random snippet from the page.",
      recommendation: `Write a clear 140–160 character summary that tells the searcher what the page offers.`,
    });
  } else {
    findings.push({
      check_key: "description_exists",
      category: "description",
      status: "passed",
      weight: 12,
      title: "Meta description exists",
      explanation: "A meta description is present.",
      evidence: { description: desc },
      recommendation: "Keep it accurate and compelling.",
    });

    const dlen = desc.length;
    findings.push({
      check_key: "description_length",
      category: "description",
      status: dlen >= DESC_MIN && dlen <= DESC_MAX ? "passed" : "needs_improvement",
      weight: 12,
      title: "Meta description length",
      explanation:
        dlen < DESC_MIN
          ? `The description is ${dlen} characters — shorter than the ${DESC_MIN}–${DESC_MAX} guideline, leaving useful space unused.`
          : dlen > DESC_MAX
            ? `The description is ${dlen} characters — over the ${DESC_MAX}-character guideline and may be cut off.`
            : `Description length (${dlen} characters) is within the ${DESC_MIN}–${DESC_MAX} guideline.`,
      evidence: { length: dlen },
      recommendation: "Aim for roughly 140–160 characters.",
    });
  }

  if (kw) {
    findings.push({
      check_key: "description_keyword",
      category: "keywords",
      status: keywordMatches(desc, kw) ? "passed" : "needs_improvement",
      weight: 8,
      title: "Primary keyword in meta description",
      explanation: keywordMatches(desc, kw)
        ? `The primary keyword "${kw}" appears in the meta description.`
        : `The primary keyword "${kw}" does not appear in the meta description.`,
      recommendation: "Mention the keyword naturally — search results often bold matching words.",
    });
  } else {
    findings.push({
      check_key: "description_keyword",
      category: "keywords",
      status: "not_checked" as FindingStatus,
      weight: 8,
      title: "Primary keyword in meta description",
      explanation: "No primary keyword is assigned to this page yet.",
      recommendation: "Assign a primary keyword so keyword checks can run.",
    });
  }

  // --- Headings ------------------------------------------------------------
  const h1s = input.headings.filter((h) => h.level === 1 && h.text.trim().length > 0);
  const emptyHeadings = input.headings.filter((h) => h.text.trim().length === 0);

  if (h1s.length === 0) {
    findings.push({
      check_key: "h1_exists",
      category: "headings",
      status: "issue",
      weight: 12,
      title: "No H1 heading found",
      explanation:
        input.headings.some((h) => h.level === 1)
          ? "There is an H1 tag but it is empty."
          : "The page has no H1 heading, so search engines and readers miss the page's main topic.",
      recommendation: "Add one clear H1 that states what the page is about.",
    });
  } else if (h1s.length > 1) {
    findings.push({
      check_key: "h1_exists",
      category: "headings",
      status: "needs_improvement",
      weight: 12,
      title: `Multiple H1 headings (${h1s.length})`,
      explanation:
        "There is more than one H1 heading. This is not automatically a penalty, but a single clear H1 is usually better for structure.",
      evidence: { h1s: h1s.slice(0, 5).map((h) => h.text) },
      recommendation: "Review whether all H1s are needed; consider demoting extra ones to H2.",
    });
  } else {
    findings.push({
      check_key: "h1_exists",
      category: "headings",
      status: "passed",
      weight: 12,
      title: "Single H1 heading",
      explanation: `The page has one H1: "${h1s[0].text}".`,
      recommendation: "Keep the main topic in the H1.",
    });
  }

  // Heading structure: level skips and empty headings.
  const structureIssues: string[] = [];
  let prev = 0;
  for (const h of input.headings) {
    if (h.text.trim().length === 0) continue;
    if (prev > 0 && h.level > prev + 1) {
      structureIssues.push(`H${prev} jumps to H${h.level}`);
    }
    prev = h.level;
  }
  if (emptyHeadings.length > 0) {
    structureIssues.push(`${emptyHeadings.length} empty heading tag(s)`);
  }
  findings.push({
    check_key: "headings_structure",
    category: "headings",
    status: structureIssues.length === 0 ? "passed" : structureIssues.length <= 2 ? "needs_improvement" : "issue",
    weight: 9,
    title: "Heading structure",
    explanation:
      structureIssues.length === 0
        ? "Headings follow a logical order without skipped levels."
        : `Structure issues found: ${structureIssues.join("; ")}.`,
    evidence: structureIssues.length > 0 ? { issues: structureIssues } : undefined,
    recommendation: "Keep headings in order (H1 → H2 → H3) and avoid empty heading tags.",
  });

  // --- URL slug ------------------------------------------------------------
  if (kw) {
    const slugOk = slugKeywordMatch(input.url, kw);
    findings.push({
      check_key: "url_keyword",
      category: "keywords",
      status: slugOk ? "passed" : "needs_improvement",
      weight: 6,
      title: "Keyword in URL slug",
      explanation: slugOk
        ? "The URL slug contains words from the primary keyword."
        : "The URL slug does not clearly contain the primary keyword.",
      recommendation:
        "Readable URLs help users; if you change a URL, set up a redirect and update internal links first.",
    });
  } else {
    findings.push({
      check_key: "url_keyword",
      category: "keywords",
      status: "not_checked" as FindingStatus,
      weight: 6,
      title: "Keyword in URL slug",
      explanation: "No primary keyword is assigned to this page yet.",
      recommendation: "Assign a primary keyword so keyword checks can run.",
    });
  }

  // --- Score ----------------------------------------------------------------
  let earned = 0;
  let total = 0;
  for (const f of findings) {
    if (f.status === "not_checked") continue; // optional checks don't penalize
    total += f.weight;
    if (f.status === "passed") earned += f.weight;
    else if (f.status === "needs_improvement") earned += f.weight * 0.5;
  }
  const score = total === 0 ? 0 : Math.round((earned / total) * 100);

  return { findings, score };
}
