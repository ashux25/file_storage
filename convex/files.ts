import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createTask = mutation({
  args: { name: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.insert("files", { name: args.name });
  },
});

export const getTask = query({
  args: {},
  handler: async (ctx, args) => {
    const task = await ctx.db.query("files").collect();
    return task;
  },
});
