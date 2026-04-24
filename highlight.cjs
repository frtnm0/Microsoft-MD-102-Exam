const fs = require('fs');

const files = [
  'src/data/domain-1-dataset.ts',
  'src/data/domain-2-dataset.ts',
  'src/data/domain-3-dataset.ts'
];

const keyTerms = [
  "Microsoft Copilot", "Microsoft 365 Copilot", "Generative AI", "Large Language Models", "LLMs", "LLM", 
  "Microsoft Graph", "Semantic Index", "Grounding", "Prompt Injection", "Prompt", 
  "Natural Language Processing", "NLP", "Responsible AI", "Actionable Agents", "Declarative Agents", "Actionable Agent", "Declarative Agent", "AI Agent", "AI Agents",
  "Plugins", "Zero Trust", "Data Oversharing", "Tenant Boundary", "Hallucinations", "Hallucination",
  "Microsoft Purview", "Role-Based Access Control", "RBAC", "Copilot Studio",
  "Data Residency", "Microsoft Entra ID", "Information Barriers", "Sensitivity Labels", "Vector Index",
  "Just-In-Time", "JIT", "Commercial Data Protection", "Azure OpenAI Service",
  "Data Loss Prevention", "DLP", "Oversharing", "Conditional Access", "Single Sign-On", "SSO",
  "eDiscovery"
];

// sort by length descending to match longest first
keyTerms.sort((a, b) => b.length - a.length);

function highlightString(str) {
  let res = str;
  // keep track of replaced regions using placeholders to avoid nested replacing
  let replacements = [];
  
  // first remove existing <b> and </b> just to normalize
  res = res.replace(/<b>/gi, '').replace(/<\/b>/gi, '');
  
  keyTerms.forEach(term => {
    // Only match whole words if possible, case insensitive
    const regex = new RegExp(`\\b(${term})\\b`, 'gi');
    res = res.replace(regex, (match) => {
        let ph = `__PH_${replacements.length}__`;
        replacements.push(`<b>${match}</b>`);
        return ph;
    });
  });

  // Restore placeholders
  replacements.forEach((rep, idx) => {
      res = res.replace(new RegExp(`__PH_${idx}__`, 'g'), rep);
  });
  
  return res;
}

// match question: "...", explanation: "...", moreDetails: "..."
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  content = content.replace(/(question|explanation|moreDetails):\s*"(.*?)"/g, (match, prefix, str) => {
    return `${prefix}: "${highlightString(str)}"`;
  });
  fs.writeFileSync(file, content, 'utf-8');
});

console.log("Done highlighting text in all domain files.");
