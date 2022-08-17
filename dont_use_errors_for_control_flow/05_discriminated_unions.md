# Discriminated unions

* Value can be one of several types - but only one.
* Each of the types may have different data. 

Examples:
```ts
type Optional<T> = T | undefined | null;
type JsonValue = string | number | boolean | null | JsonObject | JsonArray;

interface Dog {
  type: 'dog'
  postmenBitten: number
}
interface Cat {
  type: 'cat'
  miceKilled: number
}
type Pet = Dog | Cat;
```