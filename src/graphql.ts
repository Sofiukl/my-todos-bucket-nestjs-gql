
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

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

export class Bucket {
    __typename?: 'Bucket';
    id: string;
    name: string;
    category?: Nullable<string>;
}

export abstract class ISubscription {
    __typename?: 'ISubscription';
    bucketCreated?: Nullable<Bucket>;
}

export abstract class IQuery {
    __typename?: 'IQuery';
    recentBuckets?: Nullable<Nullable<Bucket>[]>;
    users: User[];
    user: User;
    forgotPassword?: Nullable<boolean>;
}

export abstract class IMutation {
    __typename?: 'IMutation';
    createBucket: Bucket;
    createUser: User;
    updateUser: User;
    addAdminPermission: User;
    removeAdminPermission: User;
    resetPassword: User;
}

export class User {
    __typename?: 'User';
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
