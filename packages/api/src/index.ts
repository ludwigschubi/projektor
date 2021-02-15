import { Request } from "express";

export interface SessionRequest extends Request {
  session?: { sessionId: string };
}
