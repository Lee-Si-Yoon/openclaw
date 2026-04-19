import type {
  ModelDefinitionConfig,
  ModelProviderConfig,
} from "openclaw/plugin-sdk/provider-model-shared";

export const FRIENDLIAI_BASE_URL = "https://api.friendli.ai/serverless/v1";
export const FRIENDLIAI_DEFAULT_MODEL_ID = "meta-llama/Llama-3.3-70B-Instruct";
export const FRIENDLIAI_DEFAULT_CONTEXT_WINDOW = 128000;
export const FRIENDLIAI_DEFAULT_MAX_TOKENS = 16384;

export function buildFriendliaiCatalogModels(): ModelDefinitionConfig[] {
  return [
    {
      id: "meta-llama/Llama-3.3-70B-Instruct",
      name: "Llama 3.3 70B Instruct",
      reasoning: false,
      input: ["text"],
      cost: { input: 0.6, output: 0.6, cacheRead: 0, cacheWrite: 0 },
      contextWindow: 128000,
      maxTokens: 16384,
    },
    {
      id: "meta-llama/Llama-3.1-8B-Instruct",
      name: "Llama 3.1 8B Instruct",
      reasoning: false,
      input: ["text"],
      cost: { input: 0.1, output: 0.1, cacheRead: 0, cacheWrite: 0 },
      contextWindow: 128000,
      maxTokens: 16384,
    },
    {
      id: "deepseek-ai/DeepSeek-V3.2",
      name: "DeepSeek V3.2",
      reasoning: false,
      input: ["text"],
      cost: { input: 0.5, output: 1.5, cacheRead: 0.25, cacheWrite: 0 },
      contextWindow: 163840,
      maxTokens: 16384,
    },
    {
      id: "deepseek-ai/DeepSeek-V3.1",
      name: "DeepSeek V3.1",
      reasoning: false,
      input: ["text"],
      cost: { input: 0.5, output: 1.5, cacheRead: 0.25, cacheWrite: 0 },
      contextWindow: 163840,
      maxTokens: 16384,
    },
    {
      id: "Qwen/Qwen3-235B-A22B-Instruct-2507",
      name: "Qwen3 235B A22B Instruct",
      reasoning: false,
      input: ["text"],
      cost: { input: 0.2, output: 0.8, cacheRead: 0, cacheWrite: 0 },
      contextWindow: 131072,
      maxTokens: 16384,
    },
    {
      id: "zai-org/GLM-5.1",
      name: "GLM-5.1",
      reasoning: false,
      input: ["text"],
      cost: { input: 1.4, output: 4.4, cacheRead: 0.26, cacheWrite: 0 },
      contextWindow: 128000,
      maxTokens: 16384,
    },
    {
      id: "LGAI-EXAONE/K-EXAONE-236B-A23B",
      name: "K-EXAONE 236B A23B",
      reasoning: false,
      input: ["text"],
      cost: { input: 0.2, output: 0.8, cacheRead: 0.1, cacheWrite: 0 },
      contextWindow: 131072,
      maxTokens: 16384,
    },
  ];
}

export function buildFriendliaiProvider(): ModelProviderConfig {
  return {
    baseUrl: FRIENDLIAI_BASE_URL,
    api: "openai-completions",
    models: buildFriendliaiCatalogModels(),
  };
}
