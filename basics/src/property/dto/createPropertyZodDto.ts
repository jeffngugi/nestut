import { z } from 'zod';

// export const createPropertySchema = z
//   .object({
//     name: z.string(),
//     description: z.string().min(5),
//     area: z.number().positive(),
//   })
//   .required();

export const createPropertySchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  area: z.number().positive(),
});

export type CreatePropertyZodDto = z.infer<typeof createPropertySchema>;
