import { PrismaClient } from '@prisma/client';

declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient; // Tạo biến global cachedPrisma để lưu trữ kết nối đến database
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient(); // Nếu là production thì tạo mới một kết nối đến database mỗi lần request đến server
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient(); // Nếu là development thì tạo một kết nối đến database và lưu trữ lại để sử dụng lại cho các request tiếp theo (giảm thời gian tạo kết nối)
  }
  prisma = global.cachedPrisma; // Lấy kết nối đã lưu trữ trong biến global cachedPrisma để sử dụng cho request hiện tại (giảm thời gian tạo kết nối)
}

export const db = prisma;
