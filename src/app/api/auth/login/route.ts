import type { NextApiRequest, NextApiResponse } from "next";
import { WorkOS } from "@workos-inc/node";

const workos = new WorkOS(process.env.WORKOS_API_KEY);
const clientId = process.env.WORKOS_CLIENT_ID!;

export default (_req: NextApiRequest, res: NextApiResponse) => {
  // Use the Test Organization ID to get started. Replace it with
  // the user’s real organization ID when you finish the integration.
  const organization = "org_test_idp";

  // The callback URI WorkOS should redirect to after the authentication
  const redirectUri = "https://localhost:3000";

  const authorizationUrl = workos.sso.getAuthorizationUrl({
    organization,
    redirectUri,
    clientId,
  });

  res.redirect(authorizationUrl);
};
