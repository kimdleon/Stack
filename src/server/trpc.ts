import { initTRPC } from '@trpc/server'
import superjson from 'superjson'
import { z } from 'zod'
import { prisma } from './prisma'

const t = initTRPC.create({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape
  },
})

export const appRouter = t.router({
  getChat: t.procedure
    .input(z.object({ userId: z.number() }))
    .query(({ input }) => {
      return prisma.chatMessage.findMany({
        where: {
          user: {
            id: input.userId,
          },
        },
        take: -10,
        select: {
          id: true,
          msg: true,
        },
      })
    }),
  addUser: t.procedure
    .input(z.object({ username: z.string() }))
    .mutation(async ({ input }) => {
      await prisma.chatUser.create({
        data: {
          username: input.username,
        },
      })
    }),
  addChat: t.procedure
    .input(z.object({ userId: z.number(), userMsg: z.string() }))
    .mutation(async ({ input }) => {
      await prisma.chatUser.update({
        where: {
          id: input.userId,
        },
        data: {
          messages: {
            create: [{ msg: input.userMsg }],
          },
        },
      })
    }),
  getNote: t.procedure.input(z.string()).query(({ input }) => {
    return prisma.note.findUnique({
      where: {
        id: input,
      },
    })
  }),
  createNote: t.procedure.input(z.string()).mutation(({ input }) => {
    prisma.note.upsert({
      where: {
        id: 'save',
      },
      create: {
        id: 'save',
        content: input,
      },
      update: {
        content: input,
      },
    })
    return input
  }),
})

export type AppRouter = typeof appRouter
