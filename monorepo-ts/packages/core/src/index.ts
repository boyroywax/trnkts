import { generateId, isDefined } from '@trnkts/utils';

/**
 * Represents a user in the system
 */
export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  isActive: boolean;
}

/**
 * Configuration options for creating a user
 */
export interface CreateUserOptions {
  name: string;
  email: string;
  isActive?: boolean;
}

/**
 * User service class for managing users
 */
export class UserService {
  private users: Map<string, User> = new Map();

  /**
   * Create a new user
   * @param options - User creation options
   * @returns Created user
   */
  createUser(options: CreateUserOptions): User {
    if (
      !isDefined(options.name) ||
      !isDefined(options.email) ||
      options.name.trim() === '' ||
      options.email.trim() === ''
    ) {
      throw new Error('Name and email are required');
    }

    const user: User = {
      id: generateId(12),
      name: options.name.trim(),
      email: options.email.toLowerCase().trim(),
      createdAt: new Date(),
      isActive: options.isActive ?? true,
    };

    this.users.set(user.id, user);
    return user;
  }

  /**
   * Get user by ID
   * @param id - User ID
   * @returns User or undefined if not found
   */
  getUserById(id: string): User | undefined {
    return this.users.get(id);
  }

  /**
   * Get all users
   * @returns Array of all users
   */
  getAllUsers(): User[] {
    return Array.from(this.users.values());
  }

  /**
   * Update user
   * @param id - User ID
   * @param updates - Partial user updates
   * @returns Updated user or undefined if not found
   */
  updateUser(
    id: string,
    updates: Partial<Pick<User, 'name' | 'email' | 'isActive'>>
  ): User | undefined {
    const user = this.users.get(id);
    if (!user) {
      return undefined;
    }

    const updatedUser: User = {
      ...user,
      ...updates,
      email: updates.email ? updates.email.toLowerCase().trim() : user.email,
      name: updates.name ? updates.name.trim() : user.name,
    };

    this.users.set(id, updatedUser);
    return updatedUser;
  }

  /**
   * Delete user
   * @param id - User ID
   * @returns True if deleted, false if not found
   */
  deleteUser(id: string): boolean {
    return this.users.delete(id);
  }

  /**
   * Get users by active status
   * @param isActive - Active status filter
   * @returns Array of users matching the filter
   */
  getUsersByStatus(isActive: boolean): User[] {
    return this.getAllUsers().filter(user => user.isActive === isActive);
  }

  /**
   * Get total user count
   * @returns Number of users
   */
  getUserCount(): number {
    return this.users.size;
  }
}
