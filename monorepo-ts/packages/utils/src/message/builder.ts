import {
    MessageStatuses,
    type ReturnMessage,
    type MessageOptions,
} from './types';

export class MessageBuilder<T = unknown> {
    private message: ReturnMessage<T>;

    constructor(
        status: MessageStatuses,
        options: MessageOptions<T>
    ) {
        this.message = {
            status,
            body: options.body,
            timestamp: options.timestamp ?? Date.now(),
        };

        if (options.metadata !== undefined) {
            this.message.metadata = options.metadata;
        }
        if (options.id !== undefined) {
            this.message.id = options.id;
        }
        if (options.correlationId !== undefined) {
            this.message.correlationId = options.correlationId;
        }
        if (options.source !== undefined) {
            this.message.source = options.source;
        }
        if (options.category !== undefined) {
            this.message.category = options.category;
        }
    }

    public setMetadata(
        key: string,
        value: unknown
    ): MessageBuilder<T> {
        if (!this.message.metadata) {
            this.message.metadata = {};
        }
        this.message.metadata[key] = value;
        return this;
    }

    public addMetadata(
        metadata: Record<string, unknown>
    ): MessageBuilder<T> {
        this.message.metadata = {
            ...this.message.metadata,
            ...metadata,
        };
        return this;
    }

    public setId(id: string): MessageBuilder<T> {
        this.message.id = id;
        return this;
    }

    public setCorrelationId(
        correlationId: string
    ): MessageBuilder<T> {
        this.message.correlationId = correlationId;
        return this;
    }

    public setSource(source: string): MessageBuilder<T> {
        this.message.source = source;
        return this;
    }

    public setCategory(category: string): MessageBuilder<T> {
        this.message.category = category;
        return this;
    }

    public build(): ReturnMessage<T> {
        return { ...this.message };
    }

    // Static factory methods
    public static success<T>(
        options: MessageOptions<T>
    ): MessageBuilder<T> {
        return new MessageBuilder(
            MessageStatuses.SUCCESS,
            options
        );
    }

    public static error<T>(
        options: MessageOptions<T>
    ): MessageBuilder<T> {
        return new MessageBuilder(
            MessageStatuses.ERROR,
            options
        );
    }

    public static warning<T>(
        options: MessageOptions<T>
    ): MessageBuilder<T> {
        return new MessageBuilder(
            MessageStatuses.WARNING,
            options
        );
    }

    public static info<T>(
        options: MessageOptions<T>
    ): MessageBuilder<T> {
        return new MessageBuilder(
            MessageStatuses.INFO,
            options
        );
    }

    public static debug<T>(
        options: MessageOptions<T>
    ): MessageBuilder<T> {
        return new MessageBuilder(
            MessageStatuses.DEBUG,
            options
        );
    }

    public static critical<T>(
        options: MessageOptions<T>
    ): MessageBuilder<T> {
        return new MessageBuilder(
            MessageStatuses.CRITICAL,
            options
        );
    }

    public static unknown<T>(
        options: MessageOptions<T>
    ): MessageBuilder<T> {
        return new MessageBuilder(
            MessageStatuses.UNKNOWN,
            options
        );
    }
}
