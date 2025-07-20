import clsx from 'clsx';

/**
 * Utility function for conditionally joining class names
 * A lightweight alternative to the popular classnames library
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return clsx(classes);
}
