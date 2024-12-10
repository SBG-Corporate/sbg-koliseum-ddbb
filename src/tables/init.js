db.createUser({
    user: 'root',
    pwd: 'tj8w7Gffd65poP8h',
    roles: [
        {
            role: 'readWrite',
            db: 'koliseumdb',
        },
    ],
});

db = new Mongo().getDB("koliseumdb");

db.createCollection('permissions', { capped: false });
db.permissions.insertMany([
    { _id: ObjectId(), name: 'menu-btn01', description: 'Menu btn01 permissions' },
    { _id: ObjectId(), name: 'menu-btn02', description: 'Menu btn02 permissions' },
    { _id: ObjectId(), name: 'menu-btn03', description: 'Menu btn03 permissions' },
    { _id: ObjectId(), name: 'menu-btn04', description: 'Menu btn04 permissions' },
]);

const defaultPermissions = db.permissions.find({}, { _id: 1 }).toArray();

db.createCollection('roles', { capped: false });
db.roles.insertMany([
    { _id: ObjectId(), name: 'admin', permissions: defaultPermissions },
    { _id: ObjectId(), name: 'user', permissions: [defaultPermissions[0]] },
    { _id: ObjectId(), name: 'guest', permissions: [defaultPermissions[0]] },
]);

db.createCollection('users', { capped: false });
db.users.insertMany([
    {
        _id: ObjectId(),
        email: 'admin@gmail.com',
        address: '0x0123456789abcdef0123456789abcdef01234567',
        role: db.roles.findOne({ name: 'admin' }),
    },
    {
        _id: ObjectId(),
        email: 'user@gmail.com',
        address: '0xc8B54eC37c35F622C7a23a54d21d8a8c8b2C72f5',
        role: db.roles.findOne({ name: 'user' }),
    },
]);

print("[SETUP] Database `koliseumdb` initialized with permissions, roles, and users.");
