import * as z from "zod";

export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Prompt is required. Use paragraph spaces to break up larger messages when logical.",
  }),
});
