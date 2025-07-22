import type { TagValue } from './tag';

interface MetadataOptions<T = unknown> {
    name?: string;
    description?: string;
    annotations?: Record<string, TagValue>;
    labels?: string[];
    tags?: Array<TagValue>;
    timestamps?: Record<string, number>;
    data?: T;
}

class Metadata<T = unknown> {
    public name?: string;
    public description?: string;
    public annotations: Record<string, TagValue>;
    public labels: string[];
    public tags: Array<TagValue>;
    public timestamps: Record<string, number>;
    public data?: T;

    constructor(options: MetadataOptions<T> = {}) {
        if (options.name !== undefined) {
            this.name = options.name;
        }
        if (options.description !== undefined) {
            this.description = options.description;
        }
        this.annotations = options.annotations || {};
        this.labels = options.labels || [];
        this.tags = options.tags || [];
        this.timestamps = options.timestamps || {};
        if (options.data !== undefined) {
            this.data = options.data;
        }

        // Always set created timestamp
        this.setTimestamp('created', Date.now());
    }

    // Annotation methods
    public setAnnotation(
        key: string,
        value: TagValue
    ): void {
        this.annotations[key] = value;
        this.setTimestamp('updated', Date.now());
    }

    public getAnnotation(key: string): TagValue | undefined {
        return this.annotations[key];
    }

    public removeAnnotation(key: string): boolean {
        if (key in this.annotations) {
            delete this.annotations[key];
            this.setTimestamp('updated', Date.now());
            return true;
        }
        return false;
    }

    public hasAnnotation(key: string): boolean {
        return key in this.annotations;
    }

    // Label methods
    public addLabel(label: string): void {
        if (!this.labels.includes(label)) {
            this.labels.push(label);
            this.setTimestamp('updated', Date.now());
        }
    }

    public removeLabel(label: string): boolean {
        const index = this.labels.indexOf(label);
        if (index > -1) {
            this.labels.splice(index, 1);
            this.setTimestamp('updated', Date.now());
            return true;
        }
        return false;
    }

    public hasLabel(label: string): boolean {
        return this.labels.includes(label);
    }

    // Tag methods
    public addTag(tag: TagValue): void {
        if (!this.tags.includes(tag)) {
            this.tags.push(tag);
            this.setTimestamp('updated', Date.now());
        }
    }

    public removeTag(tag: TagValue): boolean {
        const index = this.tags.indexOf(tag);
        if (index > -1) {
            this.tags.splice(index, 1);
            this.setTimestamp('updated', Date.now());
            return true;
        }
        return false;
    }

    public hasTag(tag: TagValue): boolean {
        return this.tags.includes(tag);
    }

    // Timestamp methods
    public setTimestamp(
        key: string,
        timestamp: number = Date.now()
    ): void {
        this.timestamps[key] = timestamp;
    }

    public getTimestamp(key: string): number | undefined {
        return this.timestamps[key];
    }

    public removeTimestamp(key: string): boolean {
        if (key in this.timestamps) {
            delete this.timestamps[key];
            return true;
        }
        return false;
    }

    // Data methods
    public setData(data: T): void {
        this.data = data;
        this.setTimestamp('updated', Date.now());
    }

    public getData(): T | undefined {
        return this.data;
    }

    public clearData(): void {
        delete this.data;
        this.setTimestamp('updated', Date.now());
    }

    // Utility methods
    public clone(): Metadata<T> {
        const options: MetadataOptions<T> = {
            annotations: { ...this.annotations },
            labels: [...this.labels],
            tags: [...this.tags],
            timestamps: { ...this.timestamps },
        };
        
        if (this.name !== undefined) {
            options.name = this.name;
        }
        if (this.description !== undefined) {
            options.description = this.description;
        }
        if (this.data !== undefined) {
            options.data = this.data;
        }
        
        return new Metadata<T>(options);
    }

    public merge(other: Metadata<T>): Metadata<T> {
        const merged = this.clone();
        
        if (other.name) merged.name = other.name;
        if (other.description) merged.description = other.description;
        
        Object.assign(merged.annotations, other.annotations);
        merged.labels.push(...other.labels.filter(label => !merged.hasLabel(label)));
        merged.tags.push(...other.tags.filter(tag => !merged.hasTag(tag)));
        Object.assign(merged.timestamps, other.timestamps);
        
        if (other.data !== undefined) {
            merged.data = other.data;
        }

        merged.setTimestamp('updated', Date.now());
        return merged;
    }

    public toJSON(): Record<string, unknown> {
        return {
            name: this.name,
            description: this.description,
            annotations: this.annotations,
            labels: this.labels,
            tags: this.tags,
            timestamps: this.timestamps,
            data: this.data,
        };
    }

    public static fromJSON<T = unknown>(
        json: Record<string, unknown>
    ): Metadata<T> {
        return new Metadata<T>({
            name: json['name'] as string,
            description: json['description'] as string,
            annotations: json['annotations'] as Record<string, TagValue>,
            labels: json['labels'] as string[],
            tags: json['tags'] as Array<TagValue>,
            timestamps: json['timestamps'] as Record<string, number>,
            data: json['data'] as T,
        });
    }

    // Search and filter methods
    public matchesLabels(labels: string[]): boolean {
        return labels.every(label => this.hasLabel(label));
    }

    public matchesTags(tags: TagValue[]): boolean {
        return tags.every(tag => this.hasTag(tag));
    }

    public matchesAnnotations(
        annotations: Record<string, TagValue>
    ): boolean {
        return Object.entries(annotations).every(
            ([key, value]) => this.getAnnotation(key) === value
        );
    }
}

export {
    type MetadataOptions,
    Metadata,
};
