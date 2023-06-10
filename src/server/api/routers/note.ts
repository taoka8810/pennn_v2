import { prisma } from "~/server/db";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";

export const noteRouter = createTRPCRouter({
  index: publicProcedure.query(async () => {
    return await prisma.note.findMany({
      include: {
        category: true,
        TagsOnNotes: {
          include: {
            tag: true,
          },
        },
      },
    });
  }),
  show: publicProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(async ({ input }) => {
      return await prisma.note.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
});
