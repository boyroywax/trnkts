import type { WidgetProps } from '../types';

export function Widget({ title, children, className }: WidgetProps) {
  return (
    <div
      className={`widget ${className || ''}`}
      style={{
        padding: 'var(--dashboard-spacing-md)',
        borderColor: 'var(--dashboard-border)',
        backgroundColor: 'var(--dashboard-surface)',
      }}
    >
      <div
        className="widget-header"
        style={{
          color: 'var(--dashboard-text)',
          fontSize: 'var(--dashboard-font-lg)',
        }}
      >
        {title}
      </div>
      <div>{children}</div>
    </div>
  );
}
