// https://www.ilograph.com/docs/spec/

import { z } from "zod";

const arrowDirectionSchema = z
  .enum(["forward", "backward", "bidirectional"])
  .describe(
    "The arrow direction for this relation. The direction specified is relative to the perspective’s orientation. Accepted values are forward, backward, and bidirectional. Defaults to forward."
  )
  .optional()
  .default("forward");

const importSchema = z
  .object({
    from: z.string().describe("The diagram to import"),
    namespace: z
      .string()
      .describe(
        "Namespace prefix for imported resources and perspectives. Cannot contain restricted characters (/, ^, *, [, ], or ,)"
      ),
  })
  .strict();

const layoutSchema = z
  .object({
    compactness: z
      .number()
      .describe(
        "A number from 0.1 to 1 indicating how compactly child resources are rendered. Affects only context resources with more than one child. Defaults to 1"
      )
      .optional(),
    // .default(1),
    sizes: z
      .enum(["proportional", "uniform", "auto"])
      .describe(
        "If set to proportional, child resource sizes are always proportional to the number of resources they are related to. If set to uniform, all children always have the same size. If set to auto, the layout engine automatically chooses on a per-perspective basis. Defaults to auto"
      )
      .optional(),
    // .default("auto"),
  })
  .strict();

const contextEntryBaseSchema = z
  .object({
    resourceId: z
      .string()
      .describe(
        "The identifier (or comma-separated identifiers) for this entry"
      ),
  })
  .strict();

type ContextEntry = z.infer<typeof contextEntryBaseSchema> & {
  children?: ContextEntry[];
};

const contextEntrySchema: z.ZodType<ContextEntry> = contextEntryBaseSchema
  .extend({
    children: z
      .lazy(() => contextEntrySchema.array())
      .describe(
        "An array of child context entries. Cannot be defined if more than one resource is specified in resourceId"
      )
      .optional(),
  })
  .strict();

const contextSchema = z
  .object({
    name: z
      .string()
      .describe(
        "The name of the context. Must be unique and cannot be “Default”"
      ),
    roots: z.array(contextEntrySchema).optional(),
    extends: z
      .string()
      .describe(
        "The previously-defined context (or comma-separated contexts) that this context extends"
      )
      .optional(),
    hidden: z
      .boolean()
      .describe("If true, the context is not shown in the context dropdown")
      .optional()
      .default(false),
  })
  .strict();

const slideSchema = z
  .object({
    text: z
      .string()
      .describe(
        "The text accompanying the slide. If not present, the previous slide’s text is used. Has support for markdown, and can contain multiple lines."
      )
      .optional(),
    select: z
      .string()
      .describe(
        "The resource identifier (or comma-separated identifiers) to select. Selected resource(s) are displayed more prominently, and unrelated resource are hidden. If not present, the previous slide’s select value is used. Use ^ to not select any resource"
      )
      .optional(),
    expand: z
      .string()
      .describe(
        "The resource identifier to expand (make full-screen). If not present, the previous slide’s expand value is used. Use ^ to not expand any resource."
      )
      .optional(),
    highlight: z
      .string()
      .describe(
        "The resource identifier (or comma-separated identifiers) to highlight. Highlighted resource(s) have an animated border, and unrelated resource are faded out"
      )
      .optional(),
    detail: z
      .number()
      .describe(
        "The level of detail used during the slide. Can be between 0.001 (very low detail) and 1 (full detail). Defaults to 1 if not present"
      )
      .optional()
      .default(1),
  })
  .strict();

const overrideSchema = z
  .object({
    resourceId: z
      .string()
      .describe(
        "The resource identifier (or comma-separated identifiers) to override"
      ),
    parentId: z
      .string()
      .describe(
        "Specify to assign a different parent to this resource for the perspective, or none to assign no parent"
      )
      .optional(),
    scale: z
      .number()
      .describe(
        "Specify to scale the size of this resource for the perspective. https://www.ilograph.com/docs/editing/perspectives/resource-sizes-and-positions/#adjusting-resource-sizes"
      )
      .optional(),
  })
  .strict()
  .describe(
    "Perspective overrides are used to override parent of resources in a perspective. This is handy for showing resources in different contexts."
  );

const aliasSchema = z
  .object({
    alias: z
      .string()
      .describe(
        "The identifier for this alias. Can be used to override an existing resource id. Cannot contain /, ^, *, [, ], or , characters"
      ),
    for: z
      .string()
      .describe(
        "The value of this alias. Typically is a comma-seperated list of identifiers"
      ),
  })
  .strict()
  .describe(
    "https://www.ilograph.com/docs/editing/perspectives/references/#aliases"
  );

const stepSchema = z
  .object({
    start: z
      .string()
      .describe(
        "The identifier of the resource this step of the sequence is to"
      )
      .optional(),
    toAndBack: z
      .string()
      .describe(
        "The identifier of the resource this step of the sequence is to. A second step back to the previous resource is automatically added"
      )
      .optional(),
    toAsync: z
      .string()
      .describe(
        "The identifier of the resource this step of the sequence is to. Unlike with to, however, control is not passed to the new step. Async steps are drawn with dashed arrows"
      )
      .optional(),
    restartAt: z
      .string()
      .describe(
        "The identifier of the resource to pass control to without drawing an arrow. The next step will originate from this resource"
      )
      .optional(),
    label: z
      .string()
      .describe("The label that appears above the arrow of this step")
      .optional(),
    description: z
      .string()
      .describe(
        "The extended description that appears when the user’s mouse hovers over the arrow of this step. Has support for markdown, and can contain multiple lines."
      )
      .optional(),
    bidirectional: z
      .boolean()
      .describe(
        "If true, arrow(s) for this step are show with arrowheads on both ends. Defaults to false."
      )
      .default(false),
    color: z
      .string()
      .describe(
        "The arrow and text color of the step. Can be any X11 color name or hex (e.g. #FF00FF). Defaults to #303030. This color is inverted when dark mode is enabled by the user"
      )
      .optional()
      .default("#303030"),
  })
  .strict();

const sequenceSchema = z
  .object({
    start: z
      .string()
      .describe("The identifier of the starting resource in the sequence"),
    steps: z.array(stepSchema).optional(),
  })
  .strict()
  .describe(
    "When sequence is set in a perspective, the sequence defines how resources are related in a sequence of steps in the perspective. Perspectives with sequence defined are sequence perspectives."
  );

const relationSchema = z
  .object({
    from: z
      .string()
      .describe(
        "The identifier (or comma-separated identifiers) of the dependent (left-side) resource(s) in this relation. Can refer to resource ids or alias ids"
      )
      .optional(),
    to: z
      .string()
      .describe(
        "The identifier (or comma-separated identifiers) of the independent (right-side) resource(s) in this relation. Can refer to resource ids or alias ids"
      )
      .optional(),
    label: z
      .string()
      .describe("The label that appears above the arrow(s) in this relation")
      .optional(),
    description: arrowDirectionSchema,
    color: z
      .string()
      .describe(
        "The arrow and text color of the relation. Can be any X11 color name or hex (e.g. #FF00FF). Defaults to #303030. This color is inverted when dark mode is enabled by the user"
      )
      .default("#303030"),
    secondary: z
      .boolean()
      .describe(
        "If true, the relation will not affect the perspective’s layout. Does not affect ring perspectives. Defaults to false."
      )
      .default(false),
  })
  .strict();

const perspectiveSchema = z
  .object({
    id: z
      .string()
      .describe(
        "A unique identifier for the perspective. If not provided, the name property is used as the perspective identifer"
      )
      .optional(),
    name: z
      .string()
      .describe(
        "The name of the perspective. Used as the unique identifer of the perspective if id is not provided"
      ),
    notes: z
      .string()
      .describe(
        "Notes that appear in the notes panel when viewing the perspective, and in the overview page. Should be used to describe the perspective. Has support for markdown, and can contain multiple lines."
      )
      .optional(),
    color: z
      .string()
      .describe(
        "The color of the perspective. Can be any X11 color name or hex (e.g. “#FF00FF”). Defaults to royalblue"
      )
      .optional()
      .default("royalblue"),
    extends: z
      .string()
      .describe(
        "The previously-defined perspective (or comma-separated perspectives) that this perspective extends. When specifying multiple perspectives to extend, they are applied in the order they are specified. Values from perspectives listed later take precedence."
      )
      .optional(),
    relations: z.array(relationSchema).optional(),
    sequence: sequenceSchema,
    aliases: z.array(aliasSchema).optional(),
    overrides: z.array(overrideSchema).optional(),
    walkthrough: z.array(slideSchema).optional(),
    defaultArrowLabel: z
      .string()
      .describe(
        "The default label for relation/step arrows that don’t have a label specified"
      )
      .optional(),
    defaultArrowColor: z
      .string()
      .describe(
        "The default color for relation/step arrows that don’t have a color specified"
      )
      .optional(),
    arrowDirection: arrowDirectionSchema.describe(
      "The default arrow direction for relations. The direction specified is relative to the perspective’s orientation. Individual relations can override this value by specifying their own relation value. Accepted values are forward, backward, and bidirectional. Defaults to forward. Does not affect sequence perspectives"
    ),
    orientation: z
      .enum(["leftToRight", "topToBottom", "ring"])
      .describe(
        "Which direction the perspective is oriented. Accepted values are leftToRight, topToBottom, and ring. Defaults to leftToRight. Does not affect sequence perspectives"
      )
      .optional()
      .default("leftToRight"),
    additionalContext: z
      .enum(["all", "none", "super-only", "sub-only"])
      .describe(
        "What additional context, if any, to show in this perspective. Accepted values are all, none, super-only and sub-only. Defaults to super-only. Read more about controlling context https://www.ilograph.com/docs/editing/perspectives/other-properties/"
      )
      .optional()
      .default("super-only"),
    unwrapContext: z
      .boolean()
      .describe(
        "If true, context resources may be ommited to ensure that relation arrows always flow in the specified arrowDirection. If false, resources always appear in their parent context resource, and arrow directions will automatically reverse to accomodate this. Defaults to false. Does not affect sequence or ring perspectives"
      )
      .optional()
      .default(false),
    deduplicateImportedResources: z
      .boolean()
      .describe(
        "If true, resources that are imported multiple times will be de-duplicated in this perspective. If false, every imported instance of a resource will appear as a unique resource. Defaults to true."
      )
      .optional()
      .default(true),
    hidden: z
      .boolean()
      .describe(
        "If true, resources that are imported multiple times will be de-duplicated in this perspective. If false, every imported instance of a resource will appear as a unique resource. Defaults to true."
      )
      .optional()
      .default(false),
  })
  .strict();

const resourceBaseSchema = z
  .object({
    name: z
      .string()
      .describe(
        "The name of the resource. Used as the identifer of the resource if id is not provided. If name contains a restricted character (/, ^, *, [, ], or ,), id must be defined."
      ),
    subtitle: z
      .string()
      .describe(
        "The subtitle of the resource (appears below the resource name)"
      )
      .optional(),
    description: z
      .union([z.string(), z.record(z.string(), z.string())])
      .describe(
        "The description of the resource (appears below the resource subtitle when focused). Has support for markdown. Descriptions can contain multiple lines or be defined as key-value pairs."
      )
      .optional(),
    color: z
      .string()
      .describe(
        "The text color of the resource. Can be any X11 color name or hex (e.g. #FF00FF). Defaults to dimgray. This color is inverted when dark mode is enabled by the user"
      )
      .optional(),
    // .default("dimgray"),
    backgroundColor: z
      .string()
      .describe(
        "The background color of the resource. Can be any X11 color name or hex (e.g. #FF00FF). Defaults to white. This color is inverted when dark mode is enabled by the user"
      )
      .optional(),
    // .default("white"),
    style: z
      .enum(["default", "plural", "dashed", "outline", "flat"])
      .describe(
        "The resource border style. When set to plural, the resource is rendered as multiple boxes. When set to dashed, the resource border is rendered as a dashed line. When set to outline, the resource border is rendered as a solid line. When set to flat, no border is rendered. Accepted values are default, plural, dashed, outline, and flat. Defaults to default"
      )
      .optional(),
    // .default("default"),
    abstract: z
      .boolean()
      .describe(
        "When set to true, other resources may inherit from this resource using instanceOf (see below). Abstract resources cannot be referenced directly in perspectives"
      )
      .optional(),
    instanceOf: z
      .string()
      .describe(
        "When specified, this resource inherits all properties (other than id/name) and child resources of the specified abstract resource. Any additional properties specified, including children, will override the inherited property value"
      )
      .optional(),

    icon: z.string().describe("An icon path").optional(),
    iconStyle: z
      .enum(["default", "silhouette"])
      .describe(
        "Controls how the icon is rendered. If set to default the icon is rendered normally. If set to silhouette, the icon is rendered as an outline in the same color as the resource text. Defaults to default"
      )
      .optional(),
    url: z
      .string()
      .describe(
        "A URL for the resource. If defined, a “link” icon linking to the URL appears in the resource when it is selected"
      )
      .optional(),
    layout: layoutSchema,
    id: z
      .string()
      .describe(
        "An substitute identifier for the resource. Cannot contain /, ^, *, [, ], or , characters"
      )
      .optional(),
  })
  .strict();

type Resource = z.infer<typeof resourceBaseSchema> & {
  children?: Resource[];
};

// Note: defaults do not work with recursive types
const resourceSchema: z.ZodType<Resource> = resourceBaseSchema
  .extend({
    children: z.lazy(() => resourceSchema.array()).optional(),
  })
  .strict();

export const ilographSchema = z
  .object({
    resources: z.array(resourceSchema).optional(),
    perspectives: z.array(perspectiveSchema).optional(),
    imports: z.array(importSchema).optional(),
    contexts: z.array(contextSchema).optional(),
    description: z
      .string()
      .describe(
        "A description of the diagram that appears at the top of the overview page. Has support for markdown, and can contain multiple lines."
      )
      .optional(),
    defaultContextDisplayName: z
      .string()
      .describe("The display name of the default context")
      .optional(),
  })
  .strict();

export type Ilograph = z.infer<typeof ilographSchema>;
