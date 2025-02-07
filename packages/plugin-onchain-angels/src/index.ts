import { Plugin } from "@elizaos/core";
import { getUserPortfolioAction } from "./actions/getUserPortfolio";

export const onchainAngelsPlugin: Plugin = {
    name: "onchain-angels",
    description: "Onchain Angels plugin for Eliza",
    actions: [getUserPortfolioAction],
    // evaluators analyze the situations and actions taken by the agent. they run after each agent action
    // allowing the agent to reflect on what happened and potentially trigger additional actions or modifications
    evaluators: [],
    // providers supply information and state to the agent's context, help agent access necessary data
    providers: [],
};
export default onchainAngelsPlugin;