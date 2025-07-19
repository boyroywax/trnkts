import type { CreateUserOptions } from '../src/index';
import { UserService } from '../src/index';

describe('UserService', () => {
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService();
  });

  describe('createUser', () => {
    it('should create a user with valid options', () => {
      const options: CreateUserOptions = {
        name: 'John Doe',
        email: 'john@example.com',
      };

      const user = userService.createUser(options);

      expect(user.id).toBeDefined();
      expect(user.name).toBe('John Doe');
      expect(user.email).toBe('john@example.com');
      expect(user.isActive).toBe(true);
      expect(user.createdAt).toBeInstanceOf(Date);
    });

    it('should create a user with custom isActive status', () => {
      const options: CreateUserOptions = {
        name: 'Jane Doe',
        email: 'jane@example.com',
        isActive: false,
      };

      const user = userService.createUser(options);
      expect(user.isActive).toBe(false);
    });

    it('should normalize email to lowercase', () => {
      const options: CreateUserOptions = {
        name: 'Test User',
        email: 'TEST@EXAMPLE.COM',
      };

      const user = userService.createUser(options);
      expect(user.email).toBe('test@example.com');
    });

    it('should trim name and email', () => {
      const options: CreateUserOptions = {
        name: '  John Doe  ',
        email: '  john@example.com  ',
      };
      const user = userService.createUser(options);
      expect(user.name).toBe('John Doe');
      expect(user.email).toBe('john@example.com');
    });

    it('should throw error for missing name', () => {
      const options = {
        name: '',
        email: 'test@example.com',
      };

      expect(() => userService.createUser(options)).toThrow(
        'Name and email are required'
      );
    });

    it('should throw error for missing email', () => {
      const options = {
        name: 'Test User',
        email: '',
      };

      expect(() => userService.createUser(options)).toThrow(
        'Name and email are required'
      );
    });
  });

  describe('getUserById', () => {
    it('should return user if found', () => {
      const options: CreateUserOptions = {
        name: 'John Doe',
        email: 'john@example.com',
      };

      const createdUser = userService.createUser(options);
      const foundUser = userService.getUserById(createdUser.id);

      expect(foundUser).toEqual(createdUser);
    });

    it('should return undefined if user not found', () => {
      const foundUser = userService.getUserById('nonexistent');
      expect(foundUser).toBeUndefined();
    });
  });

  describe('getAllUsers', () => {
    it('should return empty array when no users exist', () => {
      const users = userService.getAllUsers();
      expect(users).toEqual([]);
    });

    it('should return all created users', () => {
      const user1 = userService.createUser({
        name: 'User 1',
        email: 'user1@example.com',
      });
      const user2 = userService.createUser({
        name: 'User 2',
        email: 'user2@example.com',
      });

      const users = userService.getAllUsers();
      expect(users).toHaveLength(2);
      expect(users).toContain(user1);
      expect(users).toContain(user2);
    });
  });

  describe('updateUser', () => {
    it('should update user successfully', () => {
      const user = userService.createUser({
        name: 'John Doe',
        email: 'john@example.com',
      });

      const updatedUser = userService.updateUser(user.id, {
        name: 'Jane Doe',
        isActive: false,
      });

      expect(updatedUser).toBeDefined();
      expect(updatedUser?.name).toBe('Jane Doe');
      expect(updatedUser?.email).toBe('john@example.com');
      expect(updatedUser?.isActive).toBe(false);
    });

    it('should return undefined for nonexistent user', () => {
      const updatedUser = userService.updateUser('nonexistent', {
        name: 'New Name',
      });

      expect(updatedUser).toBeUndefined();
    });

    it('should normalize email in updates', () => {
      const user = userService.createUser({
        name: 'John Doe',
        email: 'john@example.com',
      });

      const updatedUser = userService.updateUser(user.id, {
        email: '  UPDATED@EXAMPLE.COM  ',
      });

      expect(updatedUser?.email).toBe('updated@example.com');
    });
  });

  describe('deleteUser', () => {
    it('should delete existing user', () => {
      const user = userService.createUser({
        name: 'John Doe',
        email: 'john@example.com',
      });

      const deleted = userService.deleteUser(user.id);
      expect(deleted).toBe(true);

      const foundUser = userService.getUserById(user.id);
      expect(foundUser).toBeUndefined();
    });

    it('should return false for nonexistent user', () => {
      const deleted = userService.deleteUser('nonexistent');
      expect(deleted).toBe(false);
    });
  });

  describe('getUsersByStatus', () => {
    beforeEach(() => {
      userService.createUser({
        name: 'Active User',
        email: 'active@example.com',
        isActive: true,
      });
      userService.createUser({
        name: 'Inactive User',
        email: 'inactive@example.com',
        isActive: false,
      });
    });

    it('should return only active users', () => {
      const activeUsers = userService.getUsersByStatus(true);
      expect(activeUsers).toHaveLength(1);
      expect(activeUsers[0]?.name).toBe('Active User');
    });

    it('should return only inactive users', () => {
      const inactiveUsers = userService.getUsersByStatus(false);
      expect(inactiveUsers).toHaveLength(1);
      expect(inactiveUsers[0]?.name).toBe('Inactive User');
    });
  });

  describe('getUserCount', () => {
    it('should return 0 when no users exist', () => {
      expect(userService.getUserCount()).toBe(0);
    });

    it('should return correct count after creating users', () => {
      userService.createUser({
        name: 'User 1',
        email: 'user1@example.com',
      });
      userService.createUser({
        name: 'User 2',
        email: 'user2@example.com',
      });

      expect(userService.getUserCount()).toBe(2);
    });
  });
});
