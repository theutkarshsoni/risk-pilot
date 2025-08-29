import { http } from "msw";
import type { OnboardingPayload } from "@rp-types";

export const handlers = [
  // Mock sanctions/PEP screening
  http.post("/api/screening/search", async ({ request }) => {
    const { name } = (await request.json()) as { name: string };
    return Response.json({
      query: name,
      matches: [
        {
          id: "pep-1",
          name: name.toUpperCase(),
          type: "PEP",
          confidence: 0.87,
          source: "Mock Global PEP List",
        },
      ],
    });
  }),

  // Mock case creation
  http.post("/api/cases", async ({ request }) => {
    const payload = (await request.json()) as OnboardingPayload;
    return Response.json({
      id: "case-123",
      status: "Open",
      createdAt: new Date().toISOString(),
      client: payload.client,
    }, { status: 201 });
  }),

  // Mock risk computation
  http.post("/api/risk/compute", async ({ request }) => {
    const { pepHit, highRiskCountry, missingDocs } = (await request.json()) as {
      pepHit: boolean;
      highRiskCountry: boolean;
      missingDocs: number;
    };
    let score = 0;
    if (pepHit) score += 50;
    if (highRiskCountry) score += 30;
    score += missingDocs * 10;

    const level = score >= 60 ? "High" : score >= 30 ? "Medium" : "Low";
    return Response.json({ score, level });
  }),
];

