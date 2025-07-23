/**
 * Annotations for metadata in the utils package.
 * An annotation is a key-value pair that can be used to store additional information about an entity.
 * Annotations are indexed by their keys and can be used to filter or sort entities based on their metadata.
 * Annottations can be used to store information such as creation date, author, version, or any other relevant metadata.
 */

interface Annotation<T = string> {
  key: string; // Unique identifier for the annotation
  value: T; // Value of the annotation
}

interface Annotations {
  [key: string]: Annotation | Annotation[];
}

export { type Annotation, type Annotations };
