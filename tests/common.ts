import request from "supertest";

export const deviceIP = (global as any).deviceIp;
export const uuidRegex = /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

export const req = request.agent("http://localhost:3050");
