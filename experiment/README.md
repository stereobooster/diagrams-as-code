# Experiment

## ilograph

- Need specify `perspective`
- If `depth` provided
  - if depth is low - need to collapse duplicated relations
    - One way to do it is to use deterministic serializer for all params to detect unique ones
  - if depth is high, some branches may not have nodes at give depth. Then use highest available node insted
- if `depth` not provided, it can be calculated based on relations (max depth)
  - Need to select all anchestors of all nodes mentioned in relations
- icons
  - ignore `icon` field with path
  - instead use `instanceOf`. Maybe use `resourceTypeSchema` (`aws.storage.S3` instead of `AWS::S3`)
- add support for `import`
- add validation for `Cannot contain restricted characters (/, ^, *, [, ], or ,)` etc.

## other

- Show only first error (`e.errors[0].message`) or all?
  - Do I need `line:col`. Maybe make it configurable?
- https://github.com/redhat-developer/yaml-language-server
- https://adr.github.io/adr-tooling/#tooling-related-to-architecture-management
- https://c4model.com/introduction

## structurizr

- [scope of IDs](https://docs.structurizr.com/dsl/identifiers)
- [include](https://docs.structurizr.com/dsl/includes) (aka `import`)

## general idea

- enitity
  - nested enitities / sub-components
  - scope for ids / separators `::`, `.`, `/`
    - https://yomguithereal.github.io/mnemonist/trie-map for scope
  - inheritance / archetype / instanceOf
    - special types, such as E from ERD, user
  - id / label
- relationships
  - grouping / tagging / view / context / perspective / subgraph / cluster
    - https://jsoncanvas.org/
    - https://heptabase.com/
- styles
  - color, font, border, icon etc.
- import
  - file resolution, detect cycles
- render
  - renders specific "view"
