// import config from '@application/config';

// import {
//     ActivityLogTable,
//     AdminTable,
//     AdminInviteTable,
//     BrandTable,
//     CartItemTable,
//     CategoryTable,
//     OrderTable,
//     OrderProductTable,
//     OTPTable,
//     PaymentTable,
//     PickupCenterTable,
//     ProductTable,
//     ProductConfigurationTable,
//     ProductMediaTable,
//     StoreFrontItemTable,
//     UserTable,
//     PermissionTable,
//     RoleTable,
//     RolePermissionTable,
// } from '@domain/Models';
// import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

// export interface IDatabase {
//     sequelize: Sequelize;
//     Sequelize: typeof Sequelize;
//     activityLog: typeof ActivityLogTable;
//     admin: typeof AdminTable;
//     adminInvite: typeof AdminInviteTable;
//     brand: typeof BrandTable;
//     cart: typeof CartItemTable;
//     category: typeof CategoryTable;
//     order: typeof OrderTable;
//     orderProduct: typeof OrderProductTable;
//     otp: typeof OTPTable;
//     payment: typeof PaymentTable;
//     pickupCenter: typeof PickupCenterTable;
//     permission: typeof PermissionTable;
//     product: typeof ProductTable;
//     productConfig: typeof ProductConfigurationTable;
//     productMedia: typeof ProductMediaTable;
//     role: typeof RoleTable;
//     rolePermission: typeof RolePermissionTable;
//     storeFront: typeof StoreFrontItemTable;
//     user: typeof UserTable;
// }

// const models = [
//     ActivityLogTable,
//     AdminTable,
//     AdminInviteTable,
//     BrandTable,
//     CartItemTable,
//     CategoryTable,
//     OrderTable,
//     OrderProductTable,
//     OTPTable,
//     PaymentTable,
//     PickupCenterTable,
//     PermissionTable,
//     ProductTable,
//     ProductConfigurationTable,
//     ProductMediaTable,
//     RoleTable,
//     RolePermissionTable,
//     StoreFrontItemTable,
//     UserTable,
// ];

// const options: SequelizeOptions = {
//     host: config.DATABASE.host,
//     port: config.DATABASE.port,
//     database: config.DATABASE.database,
//     dialect: 'mysql',
//     username: config.DATABASE.user,
//     password:
//         config.ENVIRONMENT === 'local_development'
//             ? undefined
//             : config.DATABASE.password,
//     storage: ':memory:',
//     models,
// };

// const sequelize = new Sequelize(options);

// const Database: IDatabase = {
//     sequelize,
//     Sequelize: Sequelize,
//     activityLog: ActivityLogTable,
//     admin: AdminTable,
//     adminInvite: AdminInviteTable,
//     brand: BrandTable,
//     cart: CartItemTable,
//     category: CategoryTable,
//     order: OrderTable,
//     orderProduct: OrderProductTable,
//     otp: OTPTable,
//     payment: PaymentTable,
//     pickupCenter: PickupCenterTable,
//     permission: PermissionTable,
//     product: ProductTable,
//     productConfig: ProductConfigurationTable,
//     productMedia: ProductMediaTable,
//     role: RoleTable,
//     rolePermission: RolePermissionTable,
//     storeFront: StoreFrontItemTable,
//     user: UserTable,
// };

// export { Database };
