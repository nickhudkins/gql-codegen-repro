# It's Broken! :(

### How to Reproduce

- Install all dependencies (`yarn`)
- Attempt to generate types (`yarn generate`)
- Be sad, but glad you could reproduce in isolation

#### Notes from Nick™

This problem appears to be related to ordering within `schema.graphql`.

- The error received is: `Type Error: Could not find field type. {{TypeName}}.{{fieldName}}`
- You can "invert" the error by changing the order that `TypeOneComplex` and `TypeTwoComplex` are defined.
- The error will change from: `TypeError: Could not find field type. TypeTwoComplex.foo` -> `TypeError: Could not find field type. TypeOneComplex.bar`
- The error is thrown from: `@graphql-codegen/visitor-plugin-common/src/selection-set-to-object.ts:382:19`
