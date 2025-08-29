import { setupWorker } from "msw/browser";
import { handlers } from "@rp-mocks";

export const worker = setupWorker(...handlers);
