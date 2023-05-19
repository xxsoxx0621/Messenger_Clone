import prisma from "@/app/libs/prismadb";

import getSession from "./getSession";

const getUser = async () => {
  const session = await getSession();

  if (!session?.user?.email) {
    return [];
  }

  try {
    const user = await prisma.user.findMany({
      orderBy: {
        createAt: "desc",
      },
      where: {
        NOT: {
          email: session.user.email,
        },
      },
    });
  } catch (error: any) {
    return [];
  }
};
