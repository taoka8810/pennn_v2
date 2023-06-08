import { prisma } from "~/server/db";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const userRouter = createTRPCRouter({
  getMe: publicProcedure.query(async () => {
    return await prisma.admin_users.findMany();
  }),
});
