/**
 * Sanity Schema Index
 *
 * Central export for all VisionPlanet blog schemas.
 * Import this array into your sanity.config.ts schema types.
 */

import { categorySchema } from "./category";
import { postSchema } from "./post";
import { aiPersonaSchema } from "./aiPersona";

export const schemaTypes = [categorySchema, postSchema, aiPersonaSchema];
