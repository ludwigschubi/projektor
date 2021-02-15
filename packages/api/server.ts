import express from "express";
import { SessionRequest } from "./lib";
import {
  getSessionFromStorage,
  getSessionIdFromStorageAll,
  Session,
} from "@inrupt/solid-client-authn-node";

const cookieSession = require("cookie-session");

const app = express();
const port = 3000;

app.use(
  cookieSession({
    name: "session",
    // These keys are required by cookie-session to sign the cookies.
    keys: [
      "Required, but value not relevant for this demo - key1",
      "Required, but value not relevant for this demo - key2",
    ],
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);

app.get("/login", async (req: SessionRequest, res, next) => {
  const session = new Session();
  req.session = { sessionId: session.info.sessionId };
  const redirectHandler = (url: string) => {
    res.redirect(url);
  };

  await session.login({
    redirectUrl: `http://localhost:${port}/handle-redirect`,
    oidcIssuer: req.params?.idp ?? "https://broker.pod.inrupt.com",
    clientName: "Demo app",
    handleRedirect: redirectHandler,
  });
});

app.get("/handle-redirect", async (req: SessionRequest, res) => {
  const session = await getSessionFromStorage(req.session?.sessionId as string);

  await session?.handleIncomingRedirect(`http://localhost:${port}${req.url}`);

  if (session?.info.isLoggedIn) {
    return res.redirect("projektor://login/" + session.info.webId);
  }
});

app.get("/fetch", async (req: SessionRequest, res, next) => {
  const session = await getSessionFromStorage(req.session?.sessionId as string);
  res.send(
    `<pre>${await (await session?.fetch(req.query["resource"] as string))?.text()}</pre>`
  );
});

app.get("/logout", async (req: SessionRequest, res, next) => {
  const session = await getSessionFromStorage(req.session?.sessionId as string);
  session?.logout();
  res.send(`<p>Logged out.</p>`);
});

app.get("/", async (req: SessionRequest, res, next) => {
  const sessionIds = await getSessionIdFromStorageAll();
  res.send(`<p>There are currently [${sessionIds.length}] visitors.</p>`);
});

app.listen(port, () => {
  console.log(
    `Server running on port [${port}]. ` +
      `Visit [http://localhost:${port}/login] to log in to [broker.pod.inrupt.com].`
  );
});
