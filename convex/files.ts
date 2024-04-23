import { action, mutation, query } from "./_generated/server";
import { ConvexError, v } from "convex/values";

export const createTask = mutation({
  args: { name: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();
    if (!user) {
      throw new ConvexError("You must be logged In");
    }
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
