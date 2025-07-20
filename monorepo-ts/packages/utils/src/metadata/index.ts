import type { TagValue } from './tag';

export class Metadata<T = unknown> {
    public name?: string;
    public description?: string;
    public annotations?: Record<string, TagValue>;
    public labels?: string[];
    public tags?: Array<TagValue>;
    public timestamps?: Record<string, number>;
    public data?: T;
}
