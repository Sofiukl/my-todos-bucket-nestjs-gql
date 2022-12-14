
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class LoginUserInput {
    username?: Nullable<string>;
    email?: Nullable<string>;
    password: string;
}

export class CreateUserInput {
    username: string;
    email: string;
    password: string;
}

export class UpdateUserInput {
    username?: Nullable<string>;
    email?: Nullable<string>;
    password?: Nullable<UpdatePasswordInput>;
    enabled?: Nullable<boolean>;
}

export class UpdatePasswordInput {
    oldPassword: string;
    newPassword: string;
}

export abstract class IQuery {
    abstract login(user: LoginUserInput): LoginResult | Promise<LoginResult>;

    abstract refreshToken(): string | Promise<string>;

    abstract recentBuckets(count?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Bucket>[]> | Promise<Nullable<Nullable<Bucket>[]>>;

    abstract users(): User[] | Promise<User[]>;

    abstract user(username?: Nullable<string>, email?: Nullable<string>): User | Promise<User>;

    abstract forgotPassword(email?: Nullable<string>): Nullable<boolean> | Promise<Nullable<boolean>>;
}

export class LoginResult {
    user: User;
    token: string;
}

export class Bucket {
    id: string;
    name: string;
    category?: Nullable<string>;
}

export abstract class ISubscription {
    abstract bucketCreated(): Nullable<Bucket> | Promise<Nullable<Bucket>>;
}

export abstract class IMutation {
    abstract createBucket(name: string, category?: Nullable<string>): Bucket | Promise<Bucket>;

    abstract createUser(createUserInput?: Nullable<CreateUserInput>): User | Promise<User>;

    abstract updateUser(fieldsToUpdate: UpdateUserInput, username?: Nullable<string>): User | Promise<User>;

    abstract addAdminPermission(username: string): User | Promise<User>;

    abstract removeAdminPermission(username: string): User | Promise<User>;

    abstract resetPassword(username: string, code: string, password: string): User | Promise<User>;
}

export class User {
    username: string;
    email: string;
    permissions: string[];
    createdAt: Date;
    updatedAt: Date;
    lastSeenAt: Date;
    enabled: boolean;
    _id: ObjectId;
}

export type ObjectId = any;
type Nullable<T> = T | null;
