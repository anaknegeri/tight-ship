/**
 * tight-ship — OpenCode plugin
 *
 * Registers skills/ and injects using-tight-ship bootstrap on the first
 * user message so process skills auto-trigger without manual load.
 */

import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MARKER = 'TIGHT_SHIP_ACTIVE';

const extractAndStripFrontmatter = (content) => {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { content };
  return { content: match[2] };
};

let _bootstrapCache = undefined;

const getBootstrapContent = () => {
  if (_bootstrapCache !== undefined) return _bootstrapCache;

  const skillPath = path.resolve(__dirname, '../../skills/using-tight-ship/SKILL.md');
  if (!fs.existsSync(skillPath)) {
    _bootstrapCache = null;
    return null;
  }

  const fullContent = fs.readFileSync(skillPath, 'utf8');
  const { content } = extractAndStripFrontmatter(fullContent);

  _bootstrapCache = `<${MARKER}>
You have tight-ship.

**IMPORTANT: using-tight-ship is included below and ALREADY LOADED. Do not re-load "using-tight-ship" via the skill tool unless the user asks to refresh it.**

For all other skills, use the host skill tool and follow them exactly.

${content}

**Tool Mapping for OpenCode:**
- Todos → \`todowrite\`
- Subagent → \`task\` (\`subagent_type: "general"\` or \`"explore"\`)
- Load skill → \`skill\`
- Read → \`read\` | Edit → \`edit\`/\`write\` | Shell → \`bash\`
- Search → \`grep\`, \`glob\` | URL → \`webfetch\`
</${MARKER}>`;

  return _bootstrapCache;
};

export const TightShipPlugin = async () => {
  const skillsDir = path.resolve(__dirname, '../../skills');

  return {
    config: async (config) => {
      config.skills = config.skills || {};
      config.skills.paths = config.skills.paths || [];
      if (!config.skills.paths.includes(skillsDir)) {
        config.skills.paths.push(skillsDir);
      }
    },

    'experimental.chat.messages.transform': async (_input, output) => {
      const bootstrap = getBootstrapContent();
      if (!bootstrap || !output.messages.length) return;

      const firstUser = output.messages.find((m) => m.info.role === 'user');
      if (!firstUser || !firstUser.parts.length) return;

      if (firstUser.parts.some((p) => p.type === 'text' && p.text.includes(MARKER))) return;

      const ref = firstUser.parts[0];
      firstUser.parts.unshift({ ...ref, type: 'text', text: bootstrap });
    },
  };
};

export default TightShipPlugin;
