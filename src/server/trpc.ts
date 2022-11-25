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
