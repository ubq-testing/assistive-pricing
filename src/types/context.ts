import { EmitterWebhookEvent as WebhookEvent } from "@octokit/webhooks";
import { Octokit } from "@octokit/rest";
import { AssistivePricingSettings } from "./plugin-input";
import { createAdapters } from "../adapters";
import { Env } from "./env";
import { Logs } from "@ubiquity-os/ubiquity-os-logger";

export type SupportedEvents = "issues.labeled" | "issues.unlabeled" | "label.edited" | "issue_comment.created" | "push";

export interface Context<T extends SupportedEvents | "issue_comment" = SupportedEvents> {
  eventName: T;
  payload: WebhookEvent<T>["payload"];
  octokit: InstanceType<typeof Octokit>;
  adapters: ReturnType<typeof createAdapters>;
  config: AssistivePricingSettings;
  logger: Logs;
  env: Env;
}
