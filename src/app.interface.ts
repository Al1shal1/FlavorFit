import { Request, Response } from "express";

interface IRequeastWithCookies extends Request {
    cookies: Record<string, string | undefined>;
}

export interface IGqlContext {
    req: IRequeastWithCookies;
    res: Response
}