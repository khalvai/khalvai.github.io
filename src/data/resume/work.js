/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Promptfoo',
    position: 'Co-founder & CTO',
    url: 'https://promptfoo.dev',
    startDate: '2024-07-01',
    summary:
      'Promptfoo builds open-source tools to evaluate, find, and fix vulnerabilities in large language models (LLMs). Our open-source tools are used by over 35,000 developers and researchers worldwide.',
    highlights: [
      'Built and scaled engineering team, emphasizing diversity and open-source contribution',
      'Established key partnerships with AI research institutions and tech companies',
    ],
  },
];

export default work;
