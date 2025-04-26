// ported from https://github.com/structurizr/json/blob/master/structurizr.yaml

import { z } from "zod";

const userSchema = z
  .object({
    username: z
      .string()
      .describe("The username of the user (e.g. e-mail address).")
      .optional(),
    role: z
      .enum(["ReadWrite", "ReadOnly"])
      .describe("The user's role.")
      .optional(),
  })
  .describe("Represents a user who should have access to a workspace.")
  .strict();

const workspaceConfigurationSchema = z
  .object({
    users: z.array(userSchema).optional(),
    visibility: z
      .enum(["Public", "Private"])
      .describe("The visibility of the workspace")
      .optional(),
    scope: z
      .enum(["Landscape", "SoftwareSystem"])
      .describe("The scope of the workspace (can be unset for unscoped).")
      .optional(),
  })
  .describe(
    "The workspace configuration (for Structurizr cloud service and on-premises installation)."
  )
  .strict();

const terminologySchema = z
  .object({
    enterprise: z
      .string()
      .describe("The terminology used when rendering the enterprise boundary.")
      .optional(),
    person: z
      .string()
      .describe("The terminology used when rendering people.")
      .optional(),
    softwareSystem: z
      .string()
      .describe("The terminology used when rendering software systems.")
      .optional(),
    container: z
      .string()
      .describe("The terminology used when rendering containers.")
      .optional(),
    component: z
      .string()
      .describe("The terminology used when rendering components.")
      .optional(),
    code: z
      .string()
      .describe("The terminology used when rendering code elements.")
      .optional(),
    deploymentNode: z
      .string()
      .describe("The terminology used when rendering deployment nodes.")
      .optional(),
    relationship: z
      .string()
      .describe("The terminology used when rendering relationships.")
      .optional(),
  })
  .describe(
    "Provides a way for the terminology on diagrams, etc to be modified (e.g. language translations)."
  )
  .strict();

const imageSchema = z
  .object({
    name: z.string().describe("The name of the image.").optional(),
    content: z
      .string()
      .describe("The (base64 encoded) content of the image.")
      .optional(),
    type: z
      .string()
      .describe('The image MIME type (e.g. "image/png").')
      .optional(),
  })
  .describe("Represents a base64 encoded image (png/jpg/gif).")
  .strict();

const contentFormatSchema = z
  .enum(["Markdown", "AsciiDoc"])
  .describe("The content format type.");

const decisionSchema = z
  .object({
    id: z.string().describe("The ID of the decision.").optional(),
    date: z
      .string()
      .describe("The date that the decision was made (ISO 8601 format).")
      .optional(),
    status: z
      .enum(["Proposed", "Accepted", "Superseded", "Deprecated", "Rejected"])
      .describe("The status of the decision.")
      .optional(),
    title: z.string().describe("The title of the decision.").optional(),
    content: z
      .string()
      .describe("The Markdown or AsciiDoc content of the section.")
      .optional(),
    format: contentFormatSchema.optional(),
    elementId: z
      .string()
      .describe(
        "The ID of the element (in the model) that this decision applies to (optional)."
      )
      .optional(),
  })
  .describe("A decision record (e.g. architecture decision record).")
  .strict();

const documentationSectionSchema = z
  .object({
    content: z
      .string()
      .describe("The Markdown or AsciiDoc content of the section.")
      .optional(),
    format: contentFormatSchema.optional(),
    order: z
      .number()
      .describe("The order (index) of the section in the document.")
      .optional(),
  })
  .describe("A documentation section.")
  .strict();

const documentationSchema = z
  .object({
    sections: z.array(documentationSectionSchema).optional(),
    decisions: z.array(decisionSchema).optional(),
    images: z.array(imageSchema).optional(),
  })
  .describe("A wrapper for documentation.")
  .strict();

const relationshipStyleSchema = z
  .object({
    tag: z
      .string()
      .describe("The tag to which this relationship style applies.")
      .optional(),
    thickness: z
      .number()
      .describe("The thickness of the line, in pixels.")
      .optional(),
    color: z
      .string()
      .describe(
        "The colour of the line, as a HTML RGB hex string (e.g. '#ffffff')."
      )
      .optional(),
    fontSize: z
      .number()
      .describe(
        "The standard font size used to render the relationship annotation, in pixels."
      )
      .optional(),
    width: z
      .number()
      .describe("The width of the relationship annotation, in pixels.")
      .optional(),
    dashed: z
      .boolean()
      .describe(
        "A flag to indicate whether the line is rendered as dashed or not."
      )
      .optional(),
    routing: z
      .enum(["Direct", "Curved", "Orthogonal"])
      .describe("The routing algorithm used when rendering lines.")
      .optional(),
    position: z
      .number()
      .describe(
        "The position of the annotation along the line; 0 (start) to 100 (end)."
      )
      .optional(),
    opacity: z
      .number()
      .describe("The opacity used when rendering the line; 0-100.")
      .optional(),
  })
  .describe("A definition of a relationship style.")
  .strict();

const elementStyleSchema = z
  .object({
    tag: z
      .string()
      .describe("The tag to which this element style applies.")
      .optional(),
    width: z
      .number()
      .describe("The width of the element, in pixels.")
      .optional(),
    height: z
      .number()
      .describe("The height of the element, in pixels.")
      .optional(),
    background: z
      .string()
      .describe(
        "The background colour of the element, as a HTML RGB hex string (e.g. '#ffffff')."
      )
      .optional(),
    stroke: z
      .string()
      .describe(
        "The stroke colour of the element, as a HTML RGB hex string (e.g. '#000000')."
      )
      .optional(),
    strokeWidth: z
      .number()
      .describe("The width of the stroke, in pixels.")
      .optional(),
    color: z
      .string()
      .describe(
        "The foreground (text) colour of the element, as a HTML RGB hex string (e.g. '#ffffff')."
      )
      .optional(),
    fontSize: z
      .number()
      .describe("The standard font size used to render text, in pixels.")
      .optional(),
    shape: z
      .enum([
        "Box",
        "RoundedBox",
        "Component",
        "Circle",
        "Ellipse",
        "Hexagon",
        "Diamond",
        "Folder",
        "Cylinder",
        "Pipe",
        "WebBrowser",
        "Window",
        "MobileDevicePortrait",
        "MobileDeviceLandscape",
        "Person",
        "Robot",
      ])
      .describe("The shape used to render the element.")
      .optional(),
    icon: z
      .string()
      .describe("A Base64 data URI representation of a PNG/JPG/GIF file.")
      .optional(),
    border: z
      .enum(["Solid", "Dashed", "Dotted"])
      .describe("The type of border used to render the element.")
      .optional(),
    opacity: z
      .number()
      .describe("The opacity used when rendering the element; 0-100.")
      .optional(),
    metadata: z
      .boolean()
      .describe("Whether the element metadata should be shown or not.")
      .optional(),
    description: z
      .boolean()
      .describe("Whether the element description should be shown or not.")
      .optional(),
  })
  .describe("A definition of an element style.")
  .strict();

const brandingSchema = z
  .object({
    logo: z
      .string()
      .describe("A Base64 data URI representation of a PNG/JPG/GIF file.")
      .optional(),
    font: z
      .object({
        name: z
          .string()
          .describe('The font name (e.g. "Times New Roman", "Open Sans", etc).')
          .optional(),
        url: z
          .string()
          .describe("For web fonts, the URL where the font can be found.")
          .optional(),
      })
      .describe(
        "Represents a font, including a name and an optional URL for web fonts."
      )
      .optional(),
  })
  .describe(
    "A wrapper for the font and logo for diagram/documentation branding purposes."
  )
  .strict();

const configurationSchema = z
  .object({
    styles: z
      .object({
        elements: z
          .array(elementStyleSchema)
          .describe("The set of element styles.")
          .optional(),
        relationships: z
          .array(relationshipStyleSchema)
          .describe("The set of relationship styles.")
          .optional(),
      })
      .describe("The styles associated with this set of views.")
      .optional(),
    lastSavedView: z
      .string()
      .describe("The key of the view that was saved most recently.")
      .optional(),
    defaultView: z
      .string()
      .describe("The key of the view that should be shown by default.")
      .optional(),
    themes: z
      .array(z.string())
      .describe(
        "The URL(s) of the theme(s) to be used when rendering diagrams."
      )
      .optional(),
    branding: brandingSchema.optional(),
    terminology: terminologySchema.optional(),
    metadataSymbols: z
      .enum([
        "SquareBrackets,",
        "RoundBrackets,",
        "CurlyBrackets,",
        "AngleBrackets,",
        "DoubleAngleBrackets,",
        "None",
      ])
      .describe("The type of symbols to use when rendering metadata.")
      .optional(),
    properties: z
      .record(z.any())
      .describe("A set of arbitrary name-value properties.")
      .optional(),
  })
  .describe("The configuration associated with a set of views.")
  .strict();

const automaticLayoutSchema = z
  .object({
    implementation: z
      .enum(["Graphviz", "Dagre"])
      .describe("The automatic layout implementation.")
      .optional(),
    rankDirection: z
      .enum(["TopBottom", "BottomTop", "LeftRight", "RightLeft"])
      .describe("The algorithm rank direction.")
      .optional(),
    rankSeparation: z
      .number()
      .describe("The separation between ranks (pixels).")
      .optional(),
    nodeSeparation: z
      .number()
      .describe("The separation between nodes in the same rank (pixels).")
      .optional(),
    edgeSeparation: z
      .number()
      .describe("The separation between edges (pixels).")
      .optional(),
    vertices: z
      .boolean()
      .describe("Whether vertices should be created during automatic layout.")
      .optional(),
  })
  .describe("Represents the auto-layout configuration for a given view.")
  .strict();

const dimensionsSchema = z
  .object({
    width: z.number().describe("The width (pixels).").optional(),
    height: z.number().describe("The height (pixels).").optional(),
  })
  .describe("Represents a width and height pair.")
  .strict();

const animationStepSchema = z
  .object({
    order: z.number().describe("The order of this animation step.").optional(),
    elements: z
      .array(z.string())
      .describe(
        "The set of element IDs that should be included in this animation step."
      )
      .optional(),
    relationships: z
      .array(z.string())
      .describe(
        "The set of relationship IDs that should be included in this animation step."
      )
      .optional(),
  })
  .describe("An animation step")
  .strict();

const vertexSchema = z
  .object({
    x: z
      .number()
      .describe("The horizontal position of the vertex when rendered.")
      .optional(),
    y: z
      .number()
      .describe("The vertical position of the vertex when rendered.")
      .optional(),
  })
  .describe("The X, Y coordinate of a bend in a line.")
  .strict();

const relationshipViewSchema = z
  .object({
    id: z.string().describe("The ID of the relationship.").optional(),
    description: z
      .string()
      .describe(
        "The description of this relationship (used in dynamic views only)."
      )
      .optional(),
    response: z
      .boolean()
      .describe(
        "Signifies whether this relationship represents a return/response message (used in dynamic views only)."
      )
      .optional(),
    order: z
      .string()
      .describe(
        "Gets the order of this relationship (used in dynamic views only; e.g. 1.0, 1.1, 2.0, etc)."
      )
      .optional(),
    vertices: z
      .array(vertexSchema)
      .describe("The set of vertices used to render the relationship.")
      .optional(),
    routing: z
      .enum(["Direct", "Curved", "Orthogonal"])
      .describe(
        "The routing algorithm used when rendering this individual relationship."
      )
      .optional(),
    position: z
      .number()
      .describe(
        "The position of the annotation along the line; 0 (start) to 100 (end)."
      )
      .optional(),
  })
  .describe("An instance of a model relationship in a View.")
  .strict();

const elementViewSchema = z
  .object({
    id: z.string().describe("The ID of the element.").optional(),
    x: z
      .number()
      .describe("The horizontal position of the element when rendered.")
      .optional(),
    y: z
      .number()
      .describe("The vertical position of the element when rendered.")
      .optional(),
  })
  .describe(
    "An instance of a model element (Person, Software System, Container or Component) in a View."
  )
  .strict();

const baseViewSchema = z.object({
  key: z.string().describe("A unique identifier for this view.").optional(),
  order: z
    .number()
    .describe("An integer representing the creation order of this view.")
    .optional(),
  title: z.string().describe("The title of this view (optional).").optional(),
  description: z.string().describe("The description of this view.").optional(),
  properties: z
    .record(z.any())
    .describe("A set of arbitrary name-value properties.")
    .optional(),
});

const imageViewSchema = baseViewSchema
  .extend({
    elementId: z
      .string()
      .describe(
        "The ID of the element this view is associated with (optional)."
      )
      .optional(),
    content: z
      .string()
      .describe(
        "The content of this image view, which needs to be a URL or a data URI."
      )
      .optional(),
    contentType: z
      .string()
      .describe('The content type of this view (e.g. "image/png").')
      .optional(),
  })
  .describe(
    "A view that has been rendered elsewhere (e.g. PlantUML, Mermaid, Kroki, etc) as a image (e.g. PNG)."
  )
  .strict();

const paperSizeSchema = z
  .enum([
    "A6_Portrait",
    "A6_Landscape",
    "A5_Portrait",
    "A5_Landscape",
    "A4_Portrait",
    "A4_Landscape",
    "A3_Portrait",
    "A3_Landscape",
    "A2_Portrait",
    "A2_Landscape",
    "A1_Portrait",
    "A1_Landscape",
    "A0_Portrait",
    "A0_Landscape",
    "Letter_Portrait",
    "Letter_Landscape",
    "Legal_Portrait",
    "Legal_Landscape",
    "Slide_4_3",
    "Slide_16_9",
    "Slide_16_10",
  ])
  .describe("The paper size that should be used to render this view.");

const filteredViewSchema = baseViewSchema
  .extend({
    baseViewKey: z
      .string()
      .describe("The key of the view on which this filtered view is based.")
      .optional(),
    mode: z
      .enum(["Include", "Exclude"])
      .describe(
        "Whether elements/relationships are being included or excluded based upon the set of tags."
      )
      .optional(),
    tags: z
      .array(z.string())
      .describe(
        "The set of tags to include/exclude elements/relationships when rendering this filtered view."
      )
      .optional(),
  })
  .describe(
    "Represents a view on top of a view, which can be used to include or exclude specific elements."
  )
  .strict();

const baseViewSchema_2 = baseViewSchema.extend({
  paperSize: paperSizeSchema.optional(),
  dimensions: dimensionsSchema.optional(),
  automaticLayout: automaticLayoutSchema.optional(),
  elements: z
    .array(elementViewSchema)
    .describe("The set of elements in this views.")
    .optional(),
  relationships: z
    .array(relationshipViewSchema)
    .describe("The set of relationships in this views.")
    .optional(),
  animations: z
    .array(animationStepSchema)
    .describe("The set of animation steps (optional).")
    .optional(),
});

const deploymentViewSchema = baseViewSchema_2
  .extend({
    softwareSystemId: z
      .string()
      .describe(
        "The ID of the software system this view is associated with (optional)."
      )
      .optional(),
    environment: z
      .string()
      .describe(
        'The name of the environment that this deployment view is for (e.g. "Development", "Live", etc).'
      )
      .optional(),
  })
  .describe("A deployment view.")
  .strict();

const dynamicViewSchema = baseViewSchema_2
  .extend({
    elementId: z
      .string()
      .describe(
        "The ID of the element this view is associated with (optional)."
      )
      .optional(),

    externalBoundariesVisible: z
      .boolean()
      .describe(
        'Specifies software system/container boundaries should be visible for "external" containers/components (those outside the element in scope)'
      )
      .optional(),
  })
  .describe("A dynamic view.")
  .strict();

const componentViewSchema = baseViewSchema_2
  .extend({
    containerId: z
      .string()
      .describe("The ID of the container this view is associated with.")
      .optional(),
    externalContainerBoundariesVisible: z
      .boolean()
      .describe(
        'Specifies whether container boundaries should be visible for "external" components (those outside the container in scope).'
      )
      .optional(),
  })
  .describe("A component view.")
  .strict();

const containerViewSchema = baseViewSchema_2
  .extend({
    softwareSystemId: z
      .string()
      .describe("The ID of the software system this view is associated with.")
      .optional(),

    externalSoftwareSystemBoundariesVisible: z
      .boolean()
      .describe(
        'Specifies whether software system boundaries should be visible for "external" containers (those outside the software system in scope).'
      )
      .optional(),
  })
  .describe("A container view.")
  .strict();

const systemContextViewSchema = baseViewSchema_2
  .extend({
    softwareSystemId: z
      .string()
      .describe("The ID of the software system this view is associated with.")
      .optional(),
    enterpriseBoundaryVisible: z
      .boolean()
      .describe(
        'Specifies whether the enterprise boundary (to differentiate internal elements from external elements") should be visible on the resulting diagram.'
      )
      .optional(),
  })
  .describe("A system context view.")
  .strict();

const systemLandscapeViewSchema = baseViewSchema_2
  .extend({
    enterpriseBoundaryVisible: z
      .boolean()
      .describe(
        "Specifies whether the enterprise boundary (to differentiate internal elements from external elements) should be visible on the resulting diagram."
      )
      .optional(),
  })
  .describe("A system landscape view.")
  .strict();

const viewsSchema = z
  .object({
    systemLandscapeViews: z
      .array(systemLandscapeViewSchema)
      .describe("The set of system landscape views.")
      .optional(),
    systemContextViews: z
      .array(systemContextViewSchema)
      .describe("The set of system context views.")
      .optional(),
    containerViews: z
      .array(containerViewSchema)
      .describe("The set of container views.")
      .optional(),
    componentViews: z
      .array(componentViewSchema)
      .describe("The set of component views.")
      .optional(),
    dynamicViews: z
      .array(dynamicViewSchema)
      .describe("The set of dynamic views.")
      .optional(),
    deploymentViews: z
      .array(deploymentViewSchema)
      .describe("The set of deployment views.")
      .optional(),
    filteredViews: z
      .array(filteredViewSchema)
      .describe("The set of filtered views.")
      .optional(),
    imageViews: z
      .array(imageViewSchema)
      .describe("The set of image views.")
      .optional(),
    configuration: configurationSchema.optional(),
  })
  .describe("The set of views onto a software architecture model.")
  .strict();

const perspectiveSchema = z
  .object({
    name: z
      .string()
      .describe('The name of this perspective (e.g. "Security").')
      .optional(),
    description: z
      .string()
      .describe("The description of this perspective.")
      .optional(),
    value: z
      .string()
      .describe("The value of this perspective (optional).")
      .optional(),
  })
  .describe(
    "Represents an architectural perspective, that can be applied to elements and relationships."
  )
  .strict();

type getObjectBaseSchemaOptions = {
  relationships?: boolean;
  instanceId?: boolean;
  environment?: boolean;
  healthChecks?: boolean;
  name?: boolean;
  description?: boolean;
  technology?: string;
  url?: boolean;
  group?: boolean;
  documentation?: boolean;
};
function getObjectBaseSchema(
  name: string,
  options?: getObjectBaseSchemaOptions
) {
  let t = z.object({
    id: z.string().describe(`The ID of this ${name} in the model.`).optional(),
    tags: z
      .string()
      .describe(`A comma separated list of tags associated with this ${name}.`)
      .optional(),
    properties: z
      .record(z.any())
      .describe("A set of arbitrary name-value properties.")
      .optional(),
    perspectives: z
      .array(perspectiveSchema)
      .describe(`The set of perspectives associated with this ${name}.`)
      .optional(),
  });

  if (options?.relationships) {
    t = t.extend({
      relationships: z
        .array(relationshipSchema)
        .describe(
          `The set of relationships from this element to other elements.`
        )
        .optional(),
    });
  }
  if (options?.instanceId) {
    t = t.extend({
      instanceId: z
        .number()
        .describe("The number/index of this instance.")
        .optional(),
    });
  }
  if (options?.environment) {
    t = t.extend({
      environment: z
        .string()
        .describe(
          `The deployment environment in which this ${name} resides (e.g. "Development", "Live", etc).`
        )
        .optional(),
    });
  }
  if (options?.healthChecks) {
    t = t.extend({
      healthChecks: z
        .array(httpHealthCheckSchema)
        .describe(`The set of HTTP-based health checks for this ${name}.`)
        .optional(),
    });
  }
  if (options?.name) {
    t = t.extend({
      name: z.string().describe(`The name of this ${name}.`).optional(),
    });
  }
  if (options?.description) {
    t = t.extend({
      description: z
        .string()
        .describe(`A short description of this ${name}.`)
        .optional(),
    });
  }
  if (options?.technology) {
    t = t.extend({
      technology: z
        .string()
        .describe(
          `The technology associated with this ${name} (e.g. ${options?.technology}).`
        )
        .optional(),
    });
  }
  if (options?.url) {
    t = t.extend({
      url: z
        .string()
        .describe(
          "The URL where more information about this element can be found."
        )
        .optional(),
    });
  }
  if (options?.group) {
    t = t.extend({
      group: z
        .string()
        .describe(
          `The name of the group in which this ${name} should be included in.`
        )
        .optional(),
    });
  }
  if (options?.documentation) {
    t = t.extend({
      documentation: documentationSchema.optional(),
    });
  }

  return t;
}

const relationshipSchema = getObjectBaseSchema("relationship", {
  description: true,
  url: true,
  technology: "HTTPS, JDBC, etc",
})
  .extend({
    sourceId: z.string().describe("The ID of the source element.").optional(),
    destinationId: z
      .string()
      .describe("The ID of the destination element.")
      .optional(),
    interactionStyle: z
      .enum(["Synchronous", "Asynchronous"])
      .describe("The interaction style (synchronous or asynchronous).")
      .optional(),
    linkedRelationshipId: z
      .string()
      .describe(
        "The ID of the container-container relationship upon which this container instance-container instance relationship is based."
      )
      .optional(),
  })
  .describe("A relationship between two elements.")
  .strict();

const httpHealthCheckSchema = z
  .object({
    name: z.string().describe("The name of the health check.").optional(),
    url: z.string().describe("The health check URL/endpoint.").optional(),
    interval: z
      .number()
      .describe("The polling interval, in seconds.")
      .optional(),
    timeout: z
      .number()
      .describe(
        "The timeout after which a health check is deemed as failed, in milliseconds."
      )
      .optional(),
    headers: z
      .record(z.any())
      .describe(
        "A set of name-value pairs corresponding to HTTP headers that should be sent with the request."
      )
      .optional(),
  })
  .describe("Describes a HTTP based health check.")
  .strict();

const containerInstanceSchema = getObjectBaseSchema("container instance", {
  relationships: true,
  instanceId: true,
  environment: true,
  healthChecks: true,
})
  .extend({
    containerId: z
      .string()
      .describe("The ID of the container this is an instance of.")
      .optional(),
  })
  .describe("An instance of a container, running on a deployment node.")
  .strict();

const softwareSystemInstanceSchema = getObjectBaseSchema(
  "software system instance",
  {
    relationships: true,
    instanceId: true,
    environment: true,
    healthChecks: true,
  }
)
  .extend({
    softwareSystemId: z
      .string()
      .describe("The ID of the software system this is an instance of.")
      .optional(),
  })
  .describe("An instance of a software system, running on a deployment node.")
  .strict();

const infrastructureNodeSchema = getObjectBaseSchema("infrastructure node", {
  relationships: true,
  name: true,
  description: true,
  environment: true,
  technology: '"Route 53"',
  url: true,
})
  .describe("An infrastructure node.")
  .strict();

const deploymentNodeBaseSchema = getObjectBaseSchema("deployment node", {
  relationships: true,
  name: true,
  description: true,
  environment: true,
  technology: "Apache Tomcat",
  url: true,
})
  .extend({
    instances: z
      .string()
      .describe(
        "The number of instances; either a number (e.g. 1, 2, etc) or a range (e.g. 0..N, 0..*, 1..3, etc)."
      )
      .optional(),
    infrastructureNodes: z.array(infrastructureNodeSchema).optional(),
    softwareSystemInstances: z
      .array(softwareSystemInstanceSchema)
      .describe(
        "The set of software systems instances running in this deployment node.."
      )
      .optional(),
    containerInstances: z
      .array(containerInstanceSchema)
      .describe(
        "The set of container instances running in this deployment node.."
      )
      .optional(),
  })
  .describe("A deployment node.");

type DeploymentNode = z.infer<typeof deploymentNodeBaseSchema> & {
  children?: DeploymentNode[];
};

const deploymentNodeSchema: z.ZodType<DeploymentNode> = deploymentNodeBaseSchema
  .extend({
    children: z
      .lazy(() => deploymentNodeSchema.array())
      .describe("The set of child/nested deployment nodes.")
      .optional(),
  })
  .strict();

const componentSchema = getObjectBaseSchema("component", {
  relationships: true,
  name: true,
  description: true,
  technology: "Spring Bean",
  url: true,
  group: true,
  documentation: true,
})
  .describe(
    "A component (a grouping of related functionality behind an interface that runs inside a container)."
  )
  .strict();

const containerSchema = getObjectBaseSchema("container", {
  relationships: true,
  name: true,
  description: true,
  technology: "Apache Tomcat",
  url: true,
  group: true,
  documentation: true,
})
  .extend({
    components: z
      .array(componentSchema)
      .describe("The set of components within this container.")
      .optional(),
  })
  .describe("A container (something that can execute code or host data).")
  .strict();

const softwareSystemSchema = getObjectBaseSchema("software system", {
  relationships: true,
  name: true,
  description: true,
  url: true,
  group: true,
  documentation: true,
})
  .extend({
    location: z
      .enum(["External", "Internal", "Unspecified"])
      .describe("The location of this software system.")
      .optional(),
    containers: z
      .array(containerSchema)
      .describe("The set of containers within this software system.")
      .optional(),
  })
  .describe("A software system.")
  .strict();

const personSchema = getObjectBaseSchema("person", {
  relationships: true,
  name: true,
  description: true,
  url: true,
  group: true,
})
  .extend({
    location: z
      .enum(["External", "Internal", "Unspecified"])
      .describe("The location of this person.")
      .optional(),
  })
  .describe("A person who uses a software system.")
  .strict();

const modelSchema = z
  .object({
    enterprise: z
      .object({
        name: z.string().describe("The name of the enterprise.").optional(),
      })
      .describe("The enterprise associated with this model.")
      .optional(),
    people: z.array(personSchema).optional(),
    softwareSystems: z.array(softwareSystemSchema).optional(),
    deploymentNodes: z.array(deploymentNodeSchema).optional(),
    properties: z
      .record(z.any())
      .describe("A set of arbitrary name-value properties.")
      .optional(),
  })
  .describe("A software architecture model.")
  .strict();

export const workspaceSchema = z
  .object({
    id: z.number().describe("The workspace ID.").optional(),
    name: z.string().describe("The name of the workspace.").optional(),
    description: z
      .string()
      .describe("A short description of the workspace.")
      .optional(),
    version: z
      .string()
      .describe("A version number for the workspace.")
      .optional(),
    thumbnail: z
      .string()
      .describe(
        "The thumbnail associated with the workspace; a Base64 encoded PNG file as a data URI (data:image/png;base64)."
      )
      .optional(),
    lastModifiedDate: z
      .string()
      .describe(
        'The last modified date, in ISO 8601 format (e.g. "2018-09-08T12:40:03Z").'
      )
      .optional(),
    lastModifiedUser: z
      .string()
      .describe(
        "A string identifying the user who last modified the workspace (e.g. an e-mail address or username)."
      )
      .optional(),
    lastModifiedAgent: z
      .string()
      .describe(
        'A string identifying the agent that was last used to modify the workspace (e.g. "structurizr-java/1.2.0").'
      )
      .optional(),
    model: modelSchema.optional(),
    views: viewsSchema.optional(),
    documentation: documentationSchema.optional(),
    configuration: workspaceConfigurationSchema.optional(),
    properties: z
      .record(z.any())
      .describe("A set of arbitrary name-value properties.")
      .optional(),
  })
  .describe(
    "Represents a Structurizr workspace, which is a wrapper for a software architecture model, views, and documentation."
  );
