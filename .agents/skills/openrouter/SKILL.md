---
name: openrouter
description: Query OpenRouter free models (openrouter/auto:free, nvidia/nemotron-3.5-lightning:free, apodex/apodex-1.1-mini:free, etc.) for code advice, reviews, or multi-model comparisons at zero cost.
---

# OpenRouter Free Models Skill

This skill allows Antigravity to consult external free AI models on OpenRouter at zero cost.

## Quick CLI Usage
Run the built-in runner script from the workspace root:

```bash
node scripts/openrouter-free.js "Your prompt here"
```

To specify a specific model:
```bash
node scripts/openrouter-free.js "Your prompt here" --model nvidia/nemotron-3.5-lightning:free
```

## Active Free Models
- `openrouter/auto:free` (automatically routes to an active free model)
- `nvidia/nemotron-3.5-lightning:free`
- `apodex/apodex-1.1-mini:free`
- `cohere/north-mini-code:free`
- `google/gemma-4-31b-it:free`

## Integration in Code
Import the client in any module:
```javascript
import { askOpenRouter } from '../scripts/openrouter-free.js';

const result = await askOpenRouter({
  prompt: 'Your question',
  model: 'openrouter/auto:free'
});
console.log(result.content);
```
