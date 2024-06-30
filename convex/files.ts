import { log } from "console";
import { mutation, query } from "./_generated/server";
import { ConvexError, v } from "convex/values";

export const createFile = mutation({
  args: { name: v.string(), orgId: v.string() },

  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();
    console.log(user);

    if (!user) {
      throw new ConvexError("You must be logged In");
    }
    const task = await ctx.db.insert("files", {
      name: args.name,
      orgId: args.orgId,
    });
    return task;
  },
});

export const getFile = query({
  args: { orgId: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();
    if (!user) {
      return [];
    }

    const task = await ctx.db
      .query("files")
      .withIndex("by_orgId", (q) => q.eq("orgId", args.orgId))
      .collect();

    return task;
  },
});
