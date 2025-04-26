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
- add support for `imports`
