import { TagValue } from "./tag";



class Metadata<T = any> {
    public name?: string;
    public description?: string;
    public annotations?: Record<string, TagValue>;
    public labels?: string[];
    public tags?: Array<TagValue>;
    public timestamps
}
