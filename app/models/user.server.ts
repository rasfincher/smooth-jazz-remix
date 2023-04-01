import type { User } from "@prisma/client";

import { prisma } from "~/db.server";

export type { User } from "@prisma/client";

export async function getUserByAuthUserId(authUserId: User["authUserId"]) {
  return prisma.user.findUnique({ where: { authUserId } });
}

export async function getUserByEmail(email: User["email"]) {
  return prisma.user.findUnique({ where: { email } });
}

export async function createUser(email: User["email"], authUserId: User["authUserId"], name: User["name"]) {
  return prisma.user.create({
    data: {
      email,
      authUserId,
      name,
    },
  });
}

export async function deleteUserByEmail(email: User["email"]) {
  return prisma.user.delete({ where: { email } });
}
