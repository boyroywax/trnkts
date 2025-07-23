import { Metadata } from '../src/metadata/index';

describe('Metadata', () => {
    describe('constructor', () => {
        it('creates metadata with default values', () => {
            const metadata = new Metadata();

            expect(metadata.name).toBeUndefined();
            expect(metadata.description).toBeUndefined();
            expect(metadata.annotations).toEqual({});
            expect(metadata.labels).toEqual([]);
            expect(metadata.tags).toEqual([]);
            expect(metadata.timestamps).toEqual(
                expect.objectContaining({
                    created: expect.any(Number),
                })
            );
            expect(metadata.data).toBeUndefined();
        });

        it('creates metadata with provided options', () => {
            const options = {
                name: 'test-metadata',
                description: 'Test metadata instance',
                annotations: { type: 'test' },
                labels: ['label1', 'label2'],
                tags: ['tag1', 'tag2'],
                timestamps: { custom: 123456789 },
                data: { value: 42 },
            };

            const metadata = new Metadata(options);

            expect(metadata.name).toBe('test-metadata');
            expect(metadata.description).toBe(
                'Test metadata instance'
            );
            expect(metadata.annotations).toEqual({
                type: 'test',
            });
            expect(metadata.labels).toEqual([
                'label1',
                'label2',
            ]);
            expect(metadata.tags).toEqual(['tag1', 'tag2']);
            expect(metadata.timestamps).toEqual(
                expect.objectContaining({
                    custom: 123456789,
                    created: expect.any(Number),
                })
            );
            expect(metadata.data).toEqual({ value: 42 });
        });
    });

    describe('annotation methods', () => {
        let metadata: Metadata;

        beforeEach(() => {
            metadata = new Metadata();
        });

        it('sets and gets annotations', () => {
            metadata.setAnnotation('key1', 'value1');

            expect(metadata.getAnnotation('key1')).toBe(
                'value1'
            );
            expect(metadata.hasAnnotation('key1')).toBe(
                true
            );
        });

        it('removes annotations', () => {
            metadata.setAnnotation('key1', 'value1');

            expect(metadata.removeAnnotation('key1')).toBe(
                true
            );
            expect(metadata.hasAnnotation('key1')).toBe(
                false
            );
            expect(
                metadata.removeAnnotation('nonexistent')
            ).toBe(false);
        });

        it('updates timestamp when annotation is modified', async () => {
            const initialUpdated =
                metadata.getTimestamp('updated');

            await new Promise(resolve =>
                setTimeout(resolve, 1)
            );
            metadata.setAnnotation('key1', 'value1');
            const afterSet =
                metadata.getTimestamp('updated');

            expect(afterSet).toBeGreaterThan(
                initialUpdated || 0
            );

            await new Promise(resolve =>
                setTimeout(resolve, 1)
            );
            metadata.removeAnnotation('key1');
            const afterRemove =
                metadata.getTimestamp('updated');

            expect(afterRemove).toBeGreaterThan(
                afterSet || 0
            );
        });
    });

    describe('label methods', () => {
        let metadata: Metadata;

        beforeEach(() => {
            metadata = new Metadata();
        });

        it('adds labels', () => {
            metadata.addLabel('label1');
            metadata.addLabel('label2');

            expect(metadata.labels).toEqual([
                'label1',
                'label2',
            ]);
            expect(metadata.hasLabel('label1')).toBe(true);
        });

        it('prevents duplicate labels', () => {
            metadata.addLabel('label1');
            metadata.addLabel('label1');

            expect(metadata.labels).toEqual(['label1']);
        });

        it('removes labels', () => {
            metadata.addLabel('label1');
            metadata.addLabel('label2');

            expect(metadata.removeLabel('label1')).toBe(
                true
            );
            expect(metadata.labels).toEqual(['label2']);
            expect(
                metadata.removeLabel('nonexistent')
            ).toBe(false);
        });
    });

    describe('tag methods', () => {
        let metadata: Metadata;

        beforeEach(() => {
            metadata = new Metadata();
        });

        it('adds tags', () => {
            metadata.addTag('tag1');
            metadata.addTag(42);
            metadata.addTag(Symbol('test'));

            expect(metadata.tags).toHaveLength(3);
            expect(metadata.hasTag('tag1')).toBe(true);
            expect(metadata.hasTag(42)).toBe(true);
        });

        it('prevents duplicate tags', () => {
            metadata.addTag('tag1');
            metadata.addTag('tag1');

            expect(metadata.tags).toEqual(['tag1']);
        });

        it('removes tags', () => {
            metadata.addTag('tag1');
            metadata.addTag('tag2');

            expect(metadata.removeTag('tag1')).toBe(true);
            expect(metadata.tags).toEqual(['tag2']);
            expect(metadata.removeTag('nonexistent')).toBe(
                false
            );
        });
    });

    describe('timestamp methods', () => {
        let metadata: Metadata;

        beforeEach(() => {
            metadata = new Metadata();
        });

        it('sets and gets timestamps', () => {
            const timestamp = Date.now();
            metadata.setTimestamp('custom', timestamp);

            expect(metadata.getTimestamp('custom')).toBe(
                timestamp
            );
        });

        it('removes timestamps', () => {
            metadata.setTimestamp('custom', Date.now());

            expect(metadata.removeTimestamp('custom')).toBe(
                true
            );
            expect(
                metadata.getTimestamp('custom')
            ).toBeUndefined();
            expect(
                metadata.removeTimestamp('nonexistent')
            ).toBe(false);
        });
    });

    describe('data methods', () => {
        let metadata: Metadata<{ value: number }>;

        beforeEach(() => {
            metadata = new Metadata<{ value: number }>();
        });

        it('sets and gets data', () => {
            const data = { value: 42 };
            metadata.setData(data);

            expect(metadata.getData()).toEqual(data);
        });

        it('clears data', () => {
            metadata.setData({ value: 42 });
            metadata.clearData();

            expect(metadata.getData()).toBeUndefined();
        });
    });

    describe('utility methods', () => {
        let metadata: Metadata<{ value: number }>;

        beforeEach(() => {
            metadata = new Metadata({
                name: 'test',
                description: 'Test metadata',
                annotations: { type: 'test' },
                labels: ['label1'],
                tags: ['tag1'],
                data: { value: 42 },
            });
        });

        it('clones metadata', () => {
            const clone = metadata.clone();

            expect(clone).not.toBe(metadata);
            expect(clone.name).toBe(metadata.name);
            expect(clone.description).toBe(
                metadata.description
            );
            expect(clone.annotations).toEqual(
                metadata.annotations
            );
            expect(clone.annotations).not.toBe(
                metadata.annotations
            );
            expect(clone.labels).toEqual(metadata.labels);
            expect(clone.labels).not.toBe(metadata.labels);
            expect(clone.tags).toEqual(metadata.tags);
            expect(clone.tags).not.toBe(metadata.tags);
            expect(clone.data).toEqual(metadata.data);
        });

        it('merges metadata', () => {
            const other = new Metadata({
                name: 'other',
                annotations: { category: 'other' },
                labels: ['label2'],
                tags: ['tag2'],
                data: { value: 99 },
            });

            const merged = metadata.merge(other);

            expect(merged.name).toBe('other');
            expect(merged.annotations).toEqual({
                type: 'test',
                category: 'other',
            });
            expect(merged.labels).toEqual([
                'label1',
                'label2',
            ]);
            expect(merged.tags).toEqual(['tag1', 'tag2']);
            expect(merged.data).toEqual({ value: 99 });
        });

        it('converts to JSON', () => {
            const json = metadata.toJSON();

            expect(json).toEqual({
                name: 'test',
                description: 'Test metadata',
                annotations: { type: 'test' },
                labels: ['label1'],
                tags: ['tag1'],
                timestamps: expect.objectContaining({
                    created: expect.any(Number),
                }),
                data: { value: 42 },
            });
        });

        it('creates from JSON', () => {
            const json = metadata.toJSON();
            const restored = Metadata.fromJSON<{
                value: number;
            }>(json);

            expect(restored.name).toBe(metadata.name);
            expect(restored.description).toBe(
                metadata.description
            );
            expect(restored.annotations).toEqual(
                metadata.annotations
            );
            expect(restored.labels).toEqual(
                metadata.labels
            );
            expect(restored.tags).toEqual(metadata.tags);
            expect(restored.data).toEqual(metadata.data);
        });
    });

    describe('search and filter methods', () => {
        let metadata: Metadata;

        beforeEach(() => {
            metadata = new Metadata({
                annotations: {
                    type: 'test',
                    category: 'demo',
                },
                labels: ['label1', 'label2'],
                tags: ['tag1', 'tag2'],
            });
        });

        it('matches labels', () => {
            expect(metadata.matchesLabels(['label1'])).toBe(
                true
            );
            expect(
                metadata.matchesLabels(['label1', 'label2'])
            ).toBe(true);
            expect(
                metadata.matchesLabels([
                    'label1',
                    'missing',
                ])
            ).toBe(false);
        });

        it('matches tags', () => {
            expect(metadata.matchesTags(['tag1'])).toBe(
                true
            );
            expect(
                metadata.matchesTags(['tag1', 'tag2'])
            ).toBe(true);
            expect(
                metadata.matchesTags(['tag1', 'missing'])
            ).toBe(false);
        });

        it('matches annotations', () => {
            expect(
                metadata.matchesAnnotations({
                    type: 'test',
                })
            ).toBe(true);
            expect(
                metadata.matchesAnnotations({
                    type: 'test',
                    category: 'demo',
                })
            ).toBe(true);
            expect(
                metadata.matchesAnnotations({
                    type: 'wrong',
                })
            ).toBe(false);
        });
    });
});
