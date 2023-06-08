import { prisma } from "~/server/db";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";

export const postRouter = createTRPCRouter({
  index: publicProcedure.query(async () => {
    return await prisma.posts.findMany({
      include: {
        posts_category_links: {
          include: {
            categories: true,
          },
        },
        posts_tags_links: true,
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
      return await prisma.posts.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
});
