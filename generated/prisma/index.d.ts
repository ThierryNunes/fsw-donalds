/**
 * Client
 **/

import * as runtime from "./runtime/library.js";
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model Restaurant
 *
 */
export type Restaurant = $Result.DefaultSelection<Prisma.$RestaurantPayload>;
/**
 * Model MenuCategory
 *
 */
export type MenuCategory =
  $Result.DefaultSelection<Prisma.$MenuCategoryPayload>;
/**
 * Model Product
 *
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>;
/**
 * Model Ingredient
 *
 */
export type Ingredient = $Result.DefaultSelection<Prisma.$IngredientPayload>;
/**
 * Model Order
 *
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>;
/**
 * Model OrderProduct
 *
 */
export type OrderProduct =
  $Result.DefaultSelection<Prisma.$OrderProductPayload>;

/**
 * Enums
 */
export namespace $Enums {
  export const OrderStatus: {
    PENDING: "PENDING";
    IN_PREPARATION: "IN_PREPARATION";
    FINISHED: "FINISHED";
  };

  export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];

  export const ConsumptionMethod: {
    TAKEAWAY: "TAKEAWAY";
    DINE_IN: "DINE_IN";
  };

  export type ConsumptionMethod =
    (typeof ConsumptionMethod)[keyof typeof ConsumptionMethod];
}

export type OrderStatus = $Enums.OrderStatus;

export const OrderStatus: typeof $Enums.OrderStatus;

export type ConsumptionMethod = $Enums.ConsumptionMethod;

export const ConsumptionMethod: typeof $Enums.ConsumptionMethod;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Restaurants
 * const restaurants = await prisma.restaurant.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = "log" extends keyof ClientOptions
    ? ClientOptions["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<ClientOptions["log"]>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Restaurants
   * const restaurants = await prisma.restaurant.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(
    optionsArg?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>,
  );
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<
    "extends",
    Prisma.TypeMapCb,
    ExtArgs,
    $Utils.Call<
      Prisma.TypeMapCb,
      {
        extArgs: ExtArgs;
      }
    >,
    ClientOptions
  >;

  /**
   * `prisma.restaurant`: Exposes CRUD operations for the **Restaurant** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Restaurants
   * const restaurants = await prisma.restaurant.findMany()
   * ```
   */
  get restaurant(): Prisma.RestaurantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menuCategory`: Exposes CRUD operations for the **MenuCategory** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more MenuCategories
   * const menuCategories = await prisma.menuCategory.findMany()
   * ```
   */
  get menuCategory(): Prisma.MenuCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
   * ```
   */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingredient`: Exposes CRUD operations for the **Ingredient** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Ingredients
   * const ingredients = await prisma.ingredient.findMany()
   * ```
   */
  get ingredient(): Prisma.IngredientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Orders
   * const orders = await prisma.order.findMany()
   * ```
   */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderProduct`: Exposes CRUD operations for the **OrderProduct** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more OrderProducts
   * const orderProducts = await prisma.orderProduct.findMany()
   * ```
   */
  get orderProduct(): Prisma.OrderProductDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 6.2.1
   * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  export import JsonObject = runtime.JsonObject;
  export import JsonArray = runtime.JsonArray;
  export import JsonValue = runtime.JsonValue;
  export import InputJsonObject = runtime.InputJsonObject;
  export import InputJsonArray = runtime.InputJsonArray;
  export import InputJsonValue = runtime.InputJsonValue;

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  type SelectAndOmit = {
    select: any;
    omit: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> =
    T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : T extends SelectAndOmit
      ? "Please either choose `select` or `omit`."
      : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> =
    T extends Array<any>
      ? False
      : T extends Date
        ? False
        : T extends Uint8Array
          ? False
          : T extends bigint
            ? False
            : T extends object
              ? True
              : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends Boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    Restaurant: "Restaurant";
    MenuCategory: "MenuCategory";
    Product: "Product";
    Ingredient: "Ingredient";
    Order: "Order";
    OrderProduct: "OrderProduct";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<
    { extArgs: $Extensions.InternalArgs; clientOptions: PrismaClientOptions },
    $Utils.Record<string, any>
  > {
    returns: Prisma.TypeMap<
      this["params"]["extArgs"],
      this["params"]["clientOptions"]
    >;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > = {
    meta: {
      modelProps:
        | "restaurant"
        | "menuCategory"
        | "product"
        | "ingredient"
        | "order"
        | "orderProduct";
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      Restaurant: {
        payload: Prisma.$RestaurantPayload<ExtArgs>;
        fields: Prisma.RestaurantFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.RestaurantFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.RestaurantFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>;
          };
          findFirst: {
            args: Prisma.RestaurantFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.RestaurantFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>;
          };
          findMany: {
            args: Prisma.RestaurantFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>[];
          };
          create: {
            args: Prisma.RestaurantCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>;
          };
          createMany: {
            args: Prisma.RestaurantCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.RestaurantDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>;
          };
          update: {
            args: Prisma.RestaurantUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>;
          };
          deleteMany: {
            args: Prisma.RestaurantDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.RestaurantUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.RestaurantUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>;
          };
          aggregate: {
            args: Prisma.RestaurantAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateRestaurant>;
          };
          groupBy: {
            args: Prisma.RestaurantGroupByArgs<ExtArgs>;
            result: $Utils.Optional<RestaurantGroupByOutputType>[];
          };
          count: {
            args: Prisma.RestaurantCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<RestaurantCountAggregateOutputType>
              | number;
          };
        };
      };
      MenuCategory: {
        payload: Prisma.$MenuCategoryPayload<ExtArgs>;
        fields: Prisma.MenuCategoryFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.MenuCategoryFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.MenuCategoryFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>;
          };
          findFirst: {
            args: Prisma.MenuCategoryFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.MenuCategoryFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>;
          };
          findMany: {
            args: Prisma.MenuCategoryFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>[];
          };
          create: {
            args: Prisma.MenuCategoryCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>;
          };
          createMany: {
            args: Prisma.MenuCategoryCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.MenuCategoryDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>;
          };
          update: {
            args: Prisma.MenuCategoryUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>;
          };
          deleteMany: {
            args: Prisma.MenuCategoryDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.MenuCategoryUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.MenuCategoryUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$MenuCategoryPayload>;
          };
          aggregate: {
            args: Prisma.MenuCategoryAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMenuCategory>;
          };
          groupBy: {
            args: Prisma.MenuCategoryGroupByArgs<ExtArgs>;
            result: $Utils.Optional<MenuCategoryGroupByOutputType>[];
          };
          count: {
            args: Prisma.MenuCategoryCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<MenuCategoryCountAggregateOutputType>
              | number;
          };
        };
      };
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>;
        fields: Prisma.ProductFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
          };
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
          };
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[];
          };
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
          };
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
          };
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
          };
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>;
          };
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateProduct>;
          };
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ProductGroupByOutputType>[];
          };
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>;
            result: $Utils.Optional<ProductCountAggregateOutputType> | number;
          };
        };
      };
      Ingredient: {
        payload: Prisma.$IngredientPayload<ExtArgs>;
        fields: Prisma.IngredientFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.IngredientFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.IngredientFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>;
          };
          findFirst: {
            args: Prisma.IngredientFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.IngredientFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>;
          };
          findMany: {
            args: Prisma.IngredientFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[];
          };
          create: {
            args: Prisma.IngredientCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>;
          };
          createMany: {
            args: Prisma.IngredientCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.IngredientDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>;
          };
          update: {
            args: Prisma.IngredientUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>;
          };
          deleteMany: {
            args: Prisma.IngredientDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.IngredientUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.IngredientUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>;
          };
          aggregate: {
            args: Prisma.IngredientAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateIngredient>;
          };
          groupBy: {
            args: Prisma.IngredientGroupByArgs<ExtArgs>;
            result: $Utils.Optional<IngredientGroupByOutputType>[];
          };
          count: {
            args: Prisma.IngredientCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<IngredientCountAggregateOutputType>
              | number;
          };
        };
      };
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>;
        fields: Prisma.OrderFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>;
          };
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>;
          };
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[];
          };
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>;
          };
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>;
          };
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>;
          };
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>;
          };
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrder>;
          };
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrderGroupByOutputType>[];
          };
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>;
            result: $Utils.Optional<OrderCountAggregateOutputType> | number;
          };
        };
      };
      OrderProduct: {
        payload: Prisma.$OrderProductPayload<ExtArgs>;
        fields: Prisma.OrderProductFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.OrderProductFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.OrderProductFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>;
          };
          findFirst: {
            args: Prisma.OrderProductFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.OrderProductFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>;
          };
          findMany: {
            args: Prisma.OrderProductFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>[];
          };
          create: {
            args: Prisma.OrderProductCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>;
          };
          createMany: {
            args: Prisma.OrderProductCreateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          delete: {
            args: Prisma.OrderProductDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>;
          };
          update: {
            args: Prisma.OrderProductUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>;
          };
          deleteMany: {
            args: Prisma.OrderProductDeleteManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          updateMany: {
            args: Prisma.OrderProductUpdateManyArgs<ExtArgs>;
            result: BatchPayload;
          };
          upsert: {
            args: Prisma.OrderProductUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>;
          };
          aggregate: {
            args: Prisma.OrderProductAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOrderProduct>;
          };
          groupBy: {
            args: Prisma.OrderProductGroupByArgs<ExtArgs>;
            result: $Utils.Optional<OrderProductGroupByOutputType>[];
          };
          count: {
            args: Prisma.OrderProductCountArgs<ExtArgs>;
            result:
              | $Utils.Optional<OrderProductCountAggregateOutputType>
              | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    "define",
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    };
    /**
     * Global configuration for omitting model fields by default.
     *
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig;
  }
  export type GlobalOmitConfig = {
    restaurant?: RestaurantOmit;
    menuCategory?: MenuCategoryOmit;
    product?: ProductOmit;
    ingredient?: IngredientOmit;
    order?: OrderOmit;
    orderProduct?: OrderProductOmit;
  };

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T["emit"] extends "event"
        ? T["level"]
        : never
      : never;
  export type GetEvents<T extends any> =
    T extends Array<LogLevel | LogDefinition>
      ?
          | GetLogType<T[0]>
          | GetLogType<T[1]>
          | GetLogType<T[2]>
          | GetLogType<T[3]>
      : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "createManyAndReturn"
    | "update"
    | "updateMany"
    | "updateManyAndReturn"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy";

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type RestaurantCountOutputType
   */

  export type RestaurantCountOutputType = {
    menuCategories: number;
    products: number;
    orders: number;
  };

  export type RestaurantCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    menuCategories?: boolean | RestaurantCountOutputTypeCountMenuCategoriesArgs;
    products?: boolean | RestaurantCountOutputTypeCountProductsArgs;
    orders?: boolean | RestaurantCountOutputTypeCountOrdersArgs;
  };

  // Custom InputTypes
  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the RestaurantCountOutputType
     */
    select?: RestaurantCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountMenuCategoriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MenuCategoryWhereInput;
  };

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountProductsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProductWhereInput;
  };

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountOrdersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrderWhereInput;
  };

  /**
   * Count Type MenuCategoryCountOutputType
   */

  export type MenuCategoryCountOutputType = {
    products: number;
  };

  export type MenuCategoryCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    products?: boolean | MenuCategoryCountOutputTypeCountProductsArgs;
  };

  // Custom InputTypes
  /**
   * MenuCategoryCountOutputType without action
   */
  export type MenuCategoryCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MenuCategoryCountOutputType
     */
    select?: MenuCategoryCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * MenuCategoryCountOutputType without action
   */
  export type MenuCategoryCountOutputTypeCountProductsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProductWhereInput;
  };

  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    ingredients: number;
    orderProducts: number;
  };

  export type ProductCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    ingredients?: boolean | ProductCountOutputTypeCountIngredientsArgs;
    orderProducts?: boolean | ProductCountOutputTypeCountOrderProductsArgs;
  };

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountIngredientsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: IngredientWhereInput;
  };

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrderProductsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrderProductWhereInput;
  };

  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    orderProducts: number;
  };

  export type OrderCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    orderProducts?: boolean | OrderCountOutputTypeCountOrderProductsArgs;
  };

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderProductsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrderProductWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model Restaurant
   */

  export type AggregateRestaurant = {
    _count: RestaurantCountAggregateOutputType | null;
    _min: RestaurantMinAggregateOutputType | null;
    _max: RestaurantMaxAggregateOutputType | null;
  };

  export type RestaurantMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    description: string | null;
    avatarImageUrl: string | null;
    coverImageUrl: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type RestaurantMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    description: string | null;
    avatarImageUrl: string | null;
    coverImageUrl: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type RestaurantCountAggregateOutputType = {
    id: number;
    name: number;
    slug: number;
    description: number;
    avatarImageUrl: number;
    coverImageUrl: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type RestaurantMinAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    description?: true;
    avatarImageUrl?: true;
    coverImageUrl?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type RestaurantMaxAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    description?: true;
    avatarImageUrl?: true;
    coverImageUrl?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type RestaurantCountAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    description?: true;
    avatarImageUrl?: true;
    coverImageUrl?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type RestaurantAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Restaurant to aggregate.
     */
    where?: RestaurantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Restaurants to fetch.
     */
    orderBy?:
      | RestaurantOrderByWithRelationInput
      | RestaurantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: RestaurantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Restaurants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Restaurants
     **/
    _count?: true | RestaurantCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: RestaurantMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: RestaurantMaxAggregateInputType;
  };

  export type GetRestaurantAggregateType<T extends RestaurantAggregateArgs> = {
    [P in keyof T & keyof AggregateRestaurant]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurant[P]>
      : GetScalarType<T[P], AggregateRestaurant[P]>;
  };

  export type RestaurantGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: RestaurantWhereInput;
    orderBy?:
      | RestaurantOrderByWithAggregationInput
      | RestaurantOrderByWithAggregationInput[];
    by: RestaurantScalarFieldEnum[] | RestaurantScalarFieldEnum;
    having?: RestaurantScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RestaurantCountAggregateInputType | true;
    _min?: RestaurantMinAggregateInputType;
    _max?: RestaurantMaxAggregateInputType;
  };

  export type RestaurantGroupByOutputType = {
    id: string;
    name: string;
    slug: string;
    description: string;
    avatarImageUrl: string;
    coverImageUrl: string;
    createdAt: Date;
    updatedAt: Date;
    _count: RestaurantCountAggregateOutputType | null;
    _min: RestaurantMinAggregateOutputType | null;
    _max: RestaurantMaxAggregateOutputType | null;
  };

  type GetRestaurantGroupByPayload<T extends RestaurantGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<RestaurantGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof RestaurantGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
            : GetScalarType<T[P], RestaurantGroupByOutputType[P]>;
        }
      >
    >;

  export type RestaurantSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      slug?: boolean;
      description?: boolean;
      avatarImageUrl?: boolean;
      coverImageUrl?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      menuCategories?: boolean | Restaurant$menuCategoriesArgs<ExtArgs>;
      products?: boolean | Restaurant$productsArgs<ExtArgs>;
      orders?: boolean | Restaurant$ordersArgs<ExtArgs>;
      _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["restaurant"]
  >;

  export type RestaurantSelectScalar = {
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    description?: boolean;
    avatarImageUrl?: boolean;
    coverImageUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type RestaurantOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "name"
    | "slug"
    | "description"
    | "avatarImageUrl"
    | "coverImageUrl"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["restaurant"]
  >;
  export type RestaurantInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    menuCategories?: boolean | Restaurant$menuCategoriesArgs<ExtArgs>;
    products?: boolean | Restaurant$productsArgs<ExtArgs>;
    orders?: boolean | Restaurant$ordersArgs<ExtArgs>;
    _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $RestaurantPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Restaurant";
    objects: {
      menuCategories: Prisma.$MenuCategoryPayload<ExtArgs>[];
      products: Prisma.$ProductPayload<ExtArgs>[];
      orders: Prisma.$OrderPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        slug: string;
        description: string;
        avatarImageUrl: string;
        coverImageUrl: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["restaurant"]
    >;
    composites: {};
  };

  type RestaurantGetPayload<
    S extends boolean | null | undefined | RestaurantDefaultArgs,
  > = $Result.GetResult<Prisma.$RestaurantPayload, S>;

  type RestaurantCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    RestaurantFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: RestaurantCountAggregateInputType | true;
  };

  export interface RestaurantDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Restaurant"];
      meta: { name: "Restaurant" };
    };
    /**
     * Find zero or one Restaurant that matches the filter.
     * @param {RestaurantFindUniqueArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestaurantFindUniqueArgs>(
      args: SelectSubset<T, RestaurantFindUniqueArgs<ExtArgs>>,
    ): Prisma__RestaurantClient<
      $Result.GetResult<
        Prisma.$RestaurantPayload<ExtArgs>,
        T,
        "findUnique",
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find one Restaurant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RestaurantFindUniqueOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestaurantFindUniqueOrThrowArgs>(
      args: SelectSubset<T, RestaurantFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__RestaurantClient<
      $Result.GetResult<
        Prisma.$RestaurantPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first Restaurant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindFirstArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestaurantFindFirstArgs>(
      args?: SelectSubset<T, RestaurantFindFirstArgs<ExtArgs>>,
    ): Prisma__RestaurantClient<
      $Result.GetResult<
        Prisma.$RestaurantPayload<ExtArgs>,
        T,
        "findFirst",
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first Restaurant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindFirstOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestaurantFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RestaurantFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__RestaurantClient<
      $Result.GetResult<
        Prisma.$RestaurantPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find zero or more Restaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Restaurants
     * const restaurants = await prisma.restaurant.findMany()
     *
     * // Get first 10 Restaurants
     * const restaurants = await prisma.restaurant.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const restaurantWithIdOnly = await prisma.restaurant.findMany({ select: { id: true } })
     *
     */
    findMany<T extends RestaurantFindManyArgs>(
      args?: SelectSubset<T, RestaurantFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$RestaurantPayload<ExtArgs>,
        T,
        "findMany",
        ClientOptions
      >
    >;

    /**
     * Create a Restaurant.
     * @param {RestaurantCreateArgs} args - Arguments to create a Restaurant.
     * @example
     * // Create one Restaurant
     * const Restaurant = await prisma.restaurant.create({
     *   data: {
     *     // ... data to create a Restaurant
     *   }
     * })
     *
     */
    create<T extends RestaurantCreateArgs>(
      args: SelectSubset<T, RestaurantCreateArgs<ExtArgs>>,
    ): Prisma__RestaurantClient<
      $Result.GetResult<
        Prisma.$RestaurantPayload<ExtArgs>,
        T,
        "create",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Create many Restaurants.
     * @param {RestaurantCreateManyArgs} args - Arguments to create many Restaurants.
     * @example
     * // Create many Restaurants
     * const restaurant = await prisma.restaurant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RestaurantCreateManyArgs>(
      args?: SelectSubset<T, RestaurantCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Restaurant.
     * @param {RestaurantDeleteArgs} args - Arguments to delete one Restaurant.
     * @example
     * // Delete one Restaurant
     * const Restaurant = await prisma.restaurant.delete({
     *   where: {
     *     // ... filter to delete one Restaurant
     *   }
     * })
     *
     */
    delete<T extends RestaurantDeleteArgs>(
      args: SelectSubset<T, RestaurantDeleteArgs<ExtArgs>>,
    ): Prisma__RestaurantClient<
      $Result.GetResult<
        Prisma.$RestaurantPayload<ExtArgs>,
        T,
        "delete",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Update one Restaurant.
     * @param {RestaurantUpdateArgs} args - Arguments to update one Restaurant.
     * @example
     * // Update one Restaurant
     * const restaurant = await prisma.restaurant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RestaurantUpdateArgs>(
      args: SelectSubset<T, RestaurantUpdateArgs<ExtArgs>>,
    ): Prisma__RestaurantClient<
      $Result.GetResult<
        Prisma.$RestaurantPayload<ExtArgs>,
        T,
        "update",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Delete zero or more Restaurants.
     * @param {RestaurantDeleteManyArgs} args - Arguments to filter Restaurants to delete.
     * @example
     * // Delete a few Restaurants
     * const { count } = await prisma.restaurant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RestaurantDeleteManyArgs>(
      args?: SelectSubset<T, RestaurantDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Restaurants
     * const restaurant = await prisma.restaurant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RestaurantUpdateManyArgs>(
      args: SelectSubset<T, RestaurantUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Restaurant.
     * @param {RestaurantUpsertArgs} args - Arguments to update or create a Restaurant.
     * @example
     * // Update or create a Restaurant
     * const restaurant = await prisma.restaurant.upsert({
     *   create: {
     *     // ... data to create a Restaurant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Restaurant we want to update
     *   }
     * })
     */
    upsert<T extends RestaurantUpsertArgs>(
      args: SelectSubset<T, RestaurantUpsertArgs<ExtArgs>>,
    ): Prisma__RestaurantClient<
      $Result.GetResult<
        Prisma.$RestaurantPayload<ExtArgs>,
        T,
        "upsert",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Count the number of Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantCountArgs} args - Arguments to filter Restaurants to count.
     * @example
     * // Count the number of Restaurants
     * const count = await prisma.restaurant.count({
     *   where: {
     *     // ... the filter for the Restaurants we want to count
     *   }
     * })
     **/
    count<T extends RestaurantCountArgs>(
      args?: Subset<T, RestaurantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], RestaurantCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends RestaurantAggregateArgs>(
      args: Subset<T, RestaurantAggregateArgs>,
    ): Prisma.PrismaPromise<GetRestaurantAggregateType<T>>;

    /**
     * Group by Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends RestaurantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestaurantGroupByArgs["orderBy"] }
        : { orderBy?: RestaurantGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, RestaurantGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetRestaurantGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Restaurant model
     */
    readonly fields: RestaurantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Restaurant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestaurantClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    menuCategories<T extends Restaurant$menuCategoriesArgs<ExtArgs> = {}>(
      args?: Subset<T, Restaurant$menuCategoriesArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$MenuCategoryPayload<ExtArgs>,
          T,
          "findMany",
          ClientOptions
        >
      | Null
    >;
    products<T extends Restaurant$productsArgs<ExtArgs> = {}>(
      args?: Subset<T, Restaurant$productsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ProductPayload<ExtArgs>,
          T,
          "findMany",
          ClientOptions
        >
      | Null
    >;
    orders<T extends Restaurant$ordersArgs<ExtArgs> = {}>(
      args?: Subset<T, Restaurant$ordersArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$OrderPayload<ExtArgs>,
          T,
          "findMany",
          ClientOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Restaurant model
   */
  interface RestaurantFieldRefs {
    readonly id: FieldRef<"Restaurant", "String">;
    readonly name: FieldRef<"Restaurant", "String">;
    readonly slug: FieldRef<"Restaurant", "String">;
    readonly description: FieldRef<"Restaurant", "String">;
    readonly avatarImageUrl: FieldRef<"Restaurant", "String">;
    readonly coverImageUrl: FieldRef<"Restaurant", "String">;
    readonly createdAt: FieldRef<"Restaurant", "DateTime">;
    readonly updatedAt: FieldRef<"Restaurant", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Restaurant findUnique
   */
  export type RestaurantFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null;
    /**
     * Filter, which Restaurant to fetch.
     */
    where: RestaurantWhereUniqueInput;
  };

  /**
   * Restaurant findUniqueOrThrow
   */
  export type RestaurantFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null;
    /**
     * Filter, which Restaurant to fetch.
     */
    where: RestaurantWhereUniqueInput;
  };

  /**
   * Restaurant findFirst
   */
  export type RestaurantFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null;
    /**
     * Filter, which Restaurant to fetch.
     */
    where?: RestaurantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Restaurants to fetch.
     */
    orderBy?:
      | RestaurantOrderByWithRelationInput
      | RestaurantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Restaurants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[];
  };

  /**
   * Restaurant findFirstOrThrow
   */
  export type RestaurantFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null;
    /**
     * Filter, which Restaurant to fetch.
     */
    where?: RestaurantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Restaurants to fetch.
     */
    orderBy?:
      | RestaurantOrderByWithRelationInput
      | RestaurantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Restaurants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[];
  };

  /**
   * Restaurant findMany
   */
  export type RestaurantFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null;
    /**
     * Filter, which Restaurants to fetch.
     */
    where?: RestaurantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Restaurants to fetch.
     */
    orderBy?:
      | RestaurantOrderByWithRelationInput
      | RestaurantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Restaurants.
     */
    skip?: number;
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[];
  };

  /**
   * Restaurant create
   */
  export type RestaurantCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null;
    /**
     * The data needed to create a Restaurant.
     */
    data: XOR<RestaurantCreateInput, RestaurantUncheckedCreateInput>;
  };

  /**
   * Restaurant createMany
   */
  export type RestaurantCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Restaurants.
     */
    data: RestaurantCreateManyInput | RestaurantCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Restaurant update
   */
  export type RestaurantUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null;
    /**
     * The data needed to update a Restaurant.
     */
    data: XOR<RestaurantUpdateInput, RestaurantUncheckedUpdateInput>;
    /**
     * Choose, which Restaurant to update.
     */
    where: RestaurantWhereUniqueInput;
  };

  /**
   * Restaurant updateMany
   */
  export type RestaurantUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Restaurants.
     */
    data: XOR<
      RestaurantUpdateManyMutationInput,
      RestaurantUncheckedUpdateManyInput
    >;
    /**
     * Filter which Restaurants to update
     */
    where?: RestaurantWhereInput;
  };

  /**
   * Restaurant upsert
   */
  export type RestaurantUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null;
    /**
     * The filter to search for the Restaurant to update in case it exists.
     */
    where: RestaurantWhereUniqueInput;
    /**
     * In case the Restaurant found by the `where` argument doesn't exist, create a new Restaurant with this data.
     */
    create: XOR<RestaurantCreateInput, RestaurantUncheckedCreateInput>;
    /**
     * In case the Restaurant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestaurantUpdateInput, RestaurantUncheckedUpdateInput>;
  };

  /**
   * Restaurant delete
   */
  export type RestaurantDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null;
    /**
     * Filter which Restaurant to delete.
     */
    where: RestaurantWhereUniqueInput;
  };

  /**
   * Restaurant deleteMany
   */
  export type RestaurantDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Restaurants to delete
     */
    where?: RestaurantWhereInput;
  };

  /**
   * Restaurant.menuCategories
   */
  export type Restaurant$menuCategoriesArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MenuCategory
     */
    omit?: MenuCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null;
    where?: MenuCategoryWhereInput;
    orderBy?:
      | MenuCategoryOrderByWithRelationInput
      | MenuCategoryOrderByWithRelationInput[];
    cursor?: MenuCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: MenuCategoryScalarFieldEnum | MenuCategoryScalarFieldEnum[];
  };

  /**
   * Restaurant.products
   */
  export type Restaurant$productsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    where?: ProductWhereInput;
    orderBy?:
      | ProductOrderByWithRelationInput
      | ProductOrderByWithRelationInput[];
    cursor?: ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[];
  };

  /**
   * Restaurant.orders
   */
  export type Restaurant$ordersArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
    where?: OrderWhereInput;
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[];
    cursor?: OrderWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[];
  };

  /**
   * Restaurant without action
   */
  export type RestaurantDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null;
  };

  /**
   * Model MenuCategory
   */

  export type AggregateMenuCategory = {
    _count: MenuCategoryCountAggregateOutputType | null;
    _min: MenuCategoryMinAggregateOutputType | null;
    _max: MenuCategoryMaxAggregateOutputType | null;
  };

  export type MenuCategoryMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    restaurantId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type MenuCategoryMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    restaurantId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type MenuCategoryCountAggregateOutputType = {
    id: number;
    name: number;
    restaurantId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type MenuCategoryMinAggregateInputType = {
    id?: true;
    name?: true;
    restaurantId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type MenuCategoryMaxAggregateInputType = {
    id?: true;
    name?: true;
    restaurantId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type MenuCategoryCountAggregateInputType = {
    id?: true;
    name?: true;
    restaurantId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type MenuCategoryAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which MenuCategory to aggregate.
     */
    where?: MenuCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MenuCategories to fetch.
     */
    orderBy?:
      | MenuCategoryOrderByWithRelationInput
      | MenuCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: MenuCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MenuCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MenuCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned MenuCategories
     **/
    _count?: true | MenuCategoryCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: MenuCategoryMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: MenuCategoryMaxAggregateInputType;
  };

  export type GetMenuCategoryAggregateType<
    T extends MenuCategoryAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateMenuCategory]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenuCategory[P]>
      : GetScalarType<T[P], AggregateMenuCategory[P]>;
  };

  export type MenuCategoryGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: MenuCategoryWhereInput;
    orderBy?:
      | MenuCategoryOrderByWithAggregationInput
      | MenuCategoryOrderByWithAggregationInput[];
    by: MenuCategoryScalarFieldEnum[] | MenuCategoryScalarFieldEnum;
    having?: MenuCategoryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MenuCategoryCountAggregateInputType | true;
    _min?: MenuCategoryMinAggregateInputType;
    _max?: MenuCategoryMaxAggregateInputType;
  };

  export type MenuCategoryGroupByOutputType = {
    id: string;
    name: string;
    restaurantId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: MenuCategoryCountAggregateOutputType | null;
    _min: MenuCategoryMinAggregateOutputType | null;
    _max: MenuCategoryMaxAggregateOutputType | null;
  };

  type GetMenuCategoryGroupByPayload<T extends MenuCategoryGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<MenuCategoryGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof MenuCategoryGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], MenuCategoryGroupByOutputType[P]>;
        }
      >
    >;

  export type MenuCategorySelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      restaurantId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>;
      products?: boolean | MenuCategory$productsArgs<ExtArgs>;
      _count?: boolean | MenuCategoryCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["menuCategory"]
  >;

  export type MenuCategorySelectScalar = {
    id?: boolean;
    name?: boolean;
    restaurantId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type MenuCategoryOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "name" | "restaurantId" | "createdAt" | "updatedAt",
    ExtArgs["result"]["menuCategory"]
  >;
  export type MenuCategoryInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>;
    products?: boolean | MenuCategory$productsArgs<ExtArgs>;
    _count?: boolean | MenuCategoryCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $MenuCategoryPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "MenuCategory";
    objects: {
      restaurant: Prisma.$RestaurantPayload<ExtArgs>;
      products: Prisma.$ProductPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        restaurantId: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["menuCategory"]
    >;
    composites: {};
  };

  type MenuCategoryGetPayload<
    S extends boolean | null | undefined | MenuCategoryDefaultArgs,
  > = $Result.GetResult<Prisma.$MenuCategoryPayload, S>;

  type MenuCategoryCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    MenuCategoryFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: MenuCategoryCountAggregateInputType | true;
  };

  export interface MenuCategoryDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["MenuCategory"];
      meta: { name: "MenuCategory" };
    };
    /**
     * Find zero or one MenuCategory that matches the filter.
     * @param {MenuCategoryFindUniqueArgs} args - Arguments to find a MenuCategory
     * @example
     * // Get one MenuCategory
     * const menuCategory = await prisma.menuCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuCategoryFindUniqueArgs>(
      args: SelectSubset<T, MenuCategoryFindUniqueArgs<ExtArgs>>,
    ): Prisma__MenuCategoryClient<
      $Result.GetResult<
        Prisma.$MenuCategoryPayload<ExtArgs>,
        T,
        "findUnique",
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find one MenuCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MenuCategoryFindUniqueOrThrowArgs} args - Arguments to find a MenuCategory
     * @example
     * // Get one MenuCategory
     * const menuCategory = await prisma.menuCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuCategoryFindUniqueOrThrowArgs>(
      args: SelectSubset<T, MenuCategoryFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__MenuCategoryClient<
      $Result.GetResult<
        Prisma.$MenuCategoryPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first MenuCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCategoryFindFirstArgs} args - Arguments to find a MenuCategory
     * @example
     * // Get one MenuCategory
     * const menuCategory = await prisma.menuCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuCategoryFindFirstArgs>(
      args?: SelectSubset<T, MenuCategoryFindFirstArgs<ExtArgs>>,
    ): Prisma__MenuCategoryClient<
      $Result.GetResult<
        Prisma.$MenuCategoryPayload<ExtArgs>,
        T,
        "findFirst",
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first MenuCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCategoryFindFirstOrThrowArgs} args - Arguments to find a MenuCategory
     * @example
     * // Get one MenuCategory
     * const menuCategory = await prisma.menuCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuCategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MenuCategoryFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__MenuCategoryClient<
      $Result.GetResult<
        Prisma.$MenuCategoryPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find zero or more MenuCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MenuCategories
     * const menuCategories = await prisma.menuCategory.findMany()
     *
     * // Get first 10 MenuCategories
     * const menuCategories = await prisma.menuCategory.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const menuCategoryWithIdOnly = await prisma.menuCategory.findMany({ select: { id: true } })
     *
     */
    findMany<T extends MenuCategoryFindManyArgs>(
      args?: SelectSubset<T, MenuCategoryFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$MenuCategoryPayload<ExtArgs>,
        T,
        "findMany",
        ClientOptions
      >
    >;

    /**
     * Create a MenuCategory.
     * @param {MenuCategoryCreateArgs} args - Arguments to create a MenuCategory.
     * @example
     * // Create one MenuCategory
     * const MenuCategory = await prisma.menuCategory.create({
     *   data: {
     *     // ... data to create a MenuCategory
     *   }
     * })
     *
     */
    create<T extends MenuCategoryCreateArgs>(
      args: SelectSubset<T, MenuCategoryCreateArgs<ExtArgs>>,
    ): Prisma__MenuCategoryClient<
      $Result.GetResult<
        Prisma.$MenuCategoryPayload<ExtArgs>,
        T,
        "create",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Create many MenuCategories.
     * @param {MenuCategoryCreateManyArgs} args - Arguments to create many MenuCategories.
     * @example
     * // Create many MenuCategories
     * const menuCategory = await prisma.menuCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends MenuCategoryCreateManyArgs>(
      args?: SelectSubset<T, MenuCategoryCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a MenuCategory.
     * @param {MenuCategoryDeleteArgs} args - Arguments to delete one MenuCategory.
     * @example
     * // Delete one MenuCategory
     * const MenuCategory = await prisma.menuCategory.delete({
     *   where: {
     *     // ... filter to delete one MenuCategory
     *   }
     * })
     *
     */
    delete<T extends MenuCategoryDeleteArgs>(
      args: SelectSubset<T, MenuCategoryDeleteArgs<ExtArgs>>,
    ): Prisma__MenuCategoryClient<
      $Result.GetResult<
        Prisma.$MenuCategoryPayload<ExtArgs>,
        T,
        "delete",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Update one MenuCategory.
     * @param {MenuCategoryUpdateArgs} args - Arguments to update one MenuCategory.
     * @example
     * // Update one MenuCategory
     * const menuCategory = await prisma.menuCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends MenuCategoryUpdateArgs>(
      args: SelectSubset<T, MenuCategoryUpdateArgs<ExtArgs>>,
    ): Prisma__MenuCategoryClient<
      $Result.GetResult<
        Prisma.$MenuCategoryPayload<ExtArgs>,
        T,
        "update",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Delete zero or more MenuCategories.
     * @param {MenuCategoryDeleteManyArgs} args - Arguments to filter MenuCategories to delete.
     * @example
     * // Delete a few MenuCategories
     * const { count } = await prisma.menuCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends MenuCategoryDeleteManyArgs>(
      args?: SelectSubset<T, MenuCategoryDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more MenuCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MenuCategories
     * const menuCategory = await prisma.menuCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends MenuCategoryUpdateManyArgs>(
      args: SelectSubset<T, MenuCategoryUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one MenuCategory.
     * @param {MenuCategoryUpsertArgs} args - Arguments to update or create a MenuCategory.
     * @example
     * // Update or create a MenuCategory
     * const menuCategory = await prisma.menuCategory.upsert({
     *   create: {
     *     // ... data to create a MenuCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MenuCategory we want to update
     *   }
     * })
     */
    upsert<T extends MenuCategoryUpsertArgs>(
      args: SelectSubset<T, MenuCategoryUpsertArgs<ExtArgs>>,
    ): Prisma__MenuCategoryClient<
      $Result.GetResult<
        Prisma.$MenuCategoryPayload<ExtArgs>,
        T,
        "upsert",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Count the number of MenuCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCategoryCountArgs} args - Arguments to filter MenuCategories to count.
     * @example
     * // Count the number of MenuCategories
     * const count = await prisma.menuCategory.count({
     *   where: {
     *     // ... the filter for the MenuCategories we want to count
     *   }
     * })
     **/
    count<T extends MenuCategoryCountArgs>(
      args?: Subset<T, MenuCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], MenuCategoryCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a MenuCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends MenuCategoryAggregateArgs>(
      args: Subset<T, MenuCategoryAggregateArgs>,
    ): Prisma.PrismaPromise<GetMenuCategoryAggregateType<T>>;

    /**
     * Group by MenuCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends MenuCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuCategoryGroupByArgs["orderBy"] }
        : { orderBy?: MenuCategoryGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, MenuCategoryGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetMenuCategoryGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the MenuCategory model
     */
    readonly fields: MenuCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MenuCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuCategoryClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>,
    ): Prisma__RestaurantClient<
      | $Result.GetResult<
          Prisma.$RestaurantPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          ClientOptions
        >
      | Null,
      Null,
      ExtArgs,
      ClientOptions
    >;
    products<T extends MenuCategory$productsArgs<ExtArgs> = {}>(
      args?: Subset<T, MenuCategory$productsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$ProductPayload<ExtArgs>,
          T,
          "findMany",
          ClientOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the MenuCategory model
   */
  interface MenuCategoryFieldRefs {
    readonly id: FieldRef<"MenuCategory", "String">;
    readonly name: FieldRef<"MenuCategory", "String">;
    readonly restaurantId: FieldRef<"MenuCategory", "String">;
    readonly createdAt: FieldRef<"MenuCategory", "DateTime">;
    readonly updatedAt: FieldRef<"MenuCategory", "DateTime">;
  }

  // Custom InputTypes
  /**
   * MenuCategory findUnique
   */
  export type MenuCategoryFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MenuCategory
     */
    omit?: MenuCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which MenuCategory to fetch.
     */
    where: MenuCategoryWhereUniqueInput;
  };

  /**
   * MenuCategory findUniqueOrThrow
   */
  export type MenuCategoryFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MenuCategory
     */
    omit?: MenuCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which MenuCategory to fetch.
     */
    where: MenuCategoryWhereUniqueInput;
  };

  /**
   * MenuCategory findFirst
   */
  export type MenuCategoryFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MenuCategory
     */
    omit?: MenuCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which MenuCategory to fetch.
     */
    where?: MenuCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MenuCategories to fetch.
     */
    orderBy?:
      | MenuCategoryOrderByWithRelationInput
      | MenuCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MenuCategories.
     */
    cursor?: MenuCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MenuCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MenuCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MenuCategories.
     */
    distinct?: MenuCategoryScalarFieldEnum | MenuCategoryScalarFieldEnum[];
  };

  /**
   * MenuCategory findFirstOrThrow
   */
  export type MenuCategoryFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MenuCategory
     */
    omit?: MenuCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which MenuCategory to fetch.
     */
    where?: MenuCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MenuCategories to fetch.
     */
    orderBy?:
      | MenuCategoryOrderByWithRelationInput
      | MenuCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for MenuCategories.
     */
    cursor?: MenuCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MenuCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MenuCategories.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of MenuCategories.
     */
    distinct?: MenuCategoryScalarFieldEnum | MenuCategoryScalarFieldEnum[];
  };

  /**
   * MenuCategory findMany
   */
  export type MenuCategoryFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MenuCategory
     */
    omit?: MenuCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null;
    /**
     * Filter, which MenuCategories to fetch.
     */
    where?: MenuCategoryWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of MenuCategories to fetch.
     */
    orderBy?:
      | MenuCategoryOrderByWithRelationInput
      | MenuCategoryOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing MenuCategories.
     */
    cursor?: MenuCategoryWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` MenuCategories from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` MenuCategories.
     */
    skip?: number;
    distinct?: MenuCategoryScalarFieldEnum | MenuCategoryScalarFieldEnum[];
  };

  /**
   * MenuCategory create
   */
  export type MenuCategoryCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MenuCategory
     */
    omit?: MenuCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null;
    /**
     * The data needed to create a MenuCategory.
     */
    data: XOR<MenuCategoryCreateInput, MenuCategoryUncheckedCreateInput>;
  };

  /**
   * MenuCategory createMany
   */
  export type MenuCategoryCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many MenuCategories.
     */
    data: MenuCategoryCreateManyInput | MenuCategoryCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * MenuCategory update
   */
  export type MenuCategoryUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MenuCategory
     */
    omit?: MenuCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null;
    /**
     * The data needed to update a MenuCategory.
     */
    data: XOR<MenuCategoryUpdateInput, MenuCategoryUncheckedUpdateInput>;
    /**
     * Choose, which MenuCategory to update.
     */
    where: MenuCategoryWhereUniqueInput;
  };

  /**
   * MenuCategory updateMany
   */
  export type MenuCategoryUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update MenuCategories.
     */
    data: XOR<
      MenuCategoryUpdateManyMutationInput,
      MenuCategoryUncheckedUpdateManyInput
    >;
    /**
     * Filter which MenuCategories to update
     */
    where?: MenuCategoryWhereInput;
  };

  /**
   * MenuCategory upsert
   */
  export type MenuCategoryUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MenuCategory
     */
    omit?: MenuCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null;
    /**
     * The filter to search for the MenuCategory to update in case it exists.
     */
    where: MenuCategoryWhereUniqueInput;
    /**
     * In case the MenuCategory found by the `where` argument doesn't exist, create a new MenuCategory with this data.
     */
    create: XOR<MenuCategoryCreateInput, MenuCategoryUncheckedCreateInput>;
    /**
     * In case the MenuCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuCategoryUpdateInput, MenuCategoryUncheckedUpdateInput>;
  };

  /**
   * MenuCategory delete
   */
  export type MenuCategoryDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MenuCategory
     */
    omit?: MenuCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null;
    /**
     * Filter which MenuCategory to delete.
     */
    where: MenuCategoryWhereUniqueInput;
  };

  /**
   * MenuCategory deleteMany
   */
  export type MenuCategoryDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which MenuCategories to delete
     */
    where?: MenuCategoryWhereInput;
  };

  /**
   * MenuCategory.products
   */
  export type MenuCategory$productsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    where?: ProductWhereInput;
    orderBy?:
      | ProductOrderByWithRelationInput
      | ProductOrderByWithRelationInput[];
    cursor?: ProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[];
  };

  /**
   * MenuCategory without action
   */
  export type MenuCategoryDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the MenuCategory
     */
    select?: MenuCategorySelect<ExtArgs> | null;
    /**
     * Omit specific fields from the MenuCategory
     */
    omit?: MenuCategoryOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuCategoryInclude<ExtArgs> | null;
  };

  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
  };

  export type ProductAvgAggregateOutputType = {
    price: number | null;
  };

  export type ProductSumAggregateOutputType = {
    price: number | null;
  };

  export type ProductMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    price: number | null;
    imageUrl: string | null;
    restaurantId: string | null;
    menuCategoryId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ProductMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    price: number | null;
    imageUrl: string | null;
    restaurantId: string | null;
    menuCategoryId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type ProductCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    price: number;
    imageUrl: number;
    restaurantId: number;
    menuCategoryId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type ProductAvgAggregateInputType = {
    price?: true;
  };

  export type ProductSumAggregateInputType = {
    price?: true;
  };

  export type ProductMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    imageUrl?: true;
    restaurantId?: true;
    menuCategoryId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ProductMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    imageUrl?: true;
    restaurantId?: true;
    menuCategoryId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type ProductCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    price?: true;
    imageUrl?: true;
    restaurantId?: true;
    menuCategoryId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type ProductAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?:
      | ProductOrderByWithRelationInput
      | ProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Products
     **/
    _count?: true | ProductCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: ProductAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: ProductSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ProductMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ProductMaxAggregateInputType;
  };

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
    [P in keyof T & keyof AggregateProduct]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>;
  };

  export type ProductGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: ProductWhereInput;
    orderBy?:
      | ProductOrderByWithAggregationInput
      | ProductOrderByWithAggregationInput[];
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum;
    having?: ProductScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ProductCountAggregateInputType | true;
    _avg?: ProductAvgAggregateInputType;
    _sum?: ProductSumAggregateInputType;
    _min?: ProductMinAggregateInputType;
    _max?: ProductMaxAggregateInputType;
  };

  export type ProductGroupByOutputType = {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    restaurantId: string;
    menuCategoryId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ProductCountAggregateOutputType | null;
    _avg: ProductAvgAggregateOutputType | null;
    _sum: ProductSumAggregateOutputType | null;
    _min: ProductMinAggregateOutputType | null;
    _max: ProductMaxAggregateOutputType | null;
  };

  type GetProductGroupByPayload<T extends ProductGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<ProductGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof ProductGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>;
        }
      >
    >;

  export type ProductSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      description?: boolean;
      price?: boolean;
      imageUrl?: boolean;
      restaurantId?: boolean;
      menuCategoryId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      ingredients?: boolean | Product$ingredientsArgs<ExtArgs>;
      orderProducts?: boolean | Product$orderProductsArgs<ExtArgs>;
      restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>;
      menuCategory?: boolean | MenuCategoryDefaultArgs<ExtArgs>;
      _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["product"]
  >;

  export type ProductSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    price?: boolean;
    imageUrl?: boolean;
    restaurantId?: boolean;
    menuCategoryId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type ProductOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "name"
    | "description"
    | "price"
    | "imageUrl"
    | "restaurantId"
    | "menuCategoryId"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["product"]
  >;
  export type ProductInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    ingredients?: boolean | Product$ingredientsArgs<ExtArgs>;
    orderProducts?: boolean | Product$orderProductsArgs<ExtArgs>;
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>;
    menuCategory?: boolean | MenuCategoryDefaultArgs<ExtArgs>;
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $ProductPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Product";
    objects: {
      ingredients: Prisma.$IngredientPayload<ExtArgs>[];
      orderProducts: Prisma.$OrderProductPayload<ExtArgs>[];
      restaurant: Prisma.$RestaurantPayload<ExtArgs>;
      menuCategory: Prisma.$MenuCategoryPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        description: string;
        price: number;
        imageUrl: string;
        restaurantId: string;
        menuCategoryId: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["product"]
    >;
    composites: {};
  };

  type ProductGetPayload<
    S extends boolean | null | undefined | ProductDefaultArgs,
  > = $Result.GetResult<Prisma.$ProductPayload, S>;

  type ProductCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<ProductFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: ProductCountAggregateInputType | true;
  };

  export interface ProductDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Product"];
      meta: { name: "Product" };
    };
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(
      args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        "findUnique",
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(
      args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(
      args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        "findFirst",
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     *
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     *
     */
    findMany<T extends ProductFindManyArgs>(
      args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        "findMany",
        ClientOptions
      >
    >;

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     *
     */
    create<T extends ProductCreateArgs>(
      args: SelectSubset<T, ProductCreateArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        "create",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends ProductCreateManyArgs>(
      args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     *
     */
    delete<T extends ProductDeleteArgs>(
      args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        "delete",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends ProductUpdateArgs>(
      args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        "update",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends ProductDeleteManyArgs>(
      args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends ProductUpdateManyArgs>(
      args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(
      args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      $Result.GetResult<
        Prisma.$ProductPayload<ExtArgs>,
        T,
        "upsert",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
     **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], ProductCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ProductAggregateArgs>(
      args: Subset<T, ProductAggregateArgs>,
    ): Prisma.PrismaPromise<GetProductAggregateType<T>>;

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs["orderBy"] }
        : { orderBy?: ProductGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetProductGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Product model
     */
    readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ingredients<T extends Product$ingredientsArgs<ExtArgs> = {}>(
      args?: Subset<T, Product$ingredientsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$IngredientPayload<ExtArgs>,
          T,
          "findMany",
          ClientOptions
        >
      | Null
    >;
    orderProducts<T extends Product$orderProductsArgs<ExtArgs> = {}>(
      args?: Subset<T, Product$orderProductsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$OrderProductPayload<ExtArgs>,
          T,
          "findMany",
          ClientOptions
        >
      | Null
    >;
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>,
    ): Prisma__RestaurantClient<
      | $Result.GetResult<
          Prisma.$RestaurantPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          ClientOptions
        >
      | Null,
      Null,
      ExtArgs,
      ClientOptions
    >;
    menuCategory<T extends MenuCategoryDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, MenuCategoryDefaultArgs<ExtArgs>>,
    ): Prisma__MenuCategoryClient<
      | $Result.GetResult<
          Prisma.$MenuCategoryPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          ClientOptions
        >
      | Null,
      Null,
      ExtArgs,
      ClientOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", "String">;
    readonly name: FieldRef<"Product", "String">;
    readonly description: FieldRef<"Product", "String">;
    readonly price: FieldRef<"Product", "Float">;
    readonly imageUrl: FieldRef<"Product", "String">;
    readonly restaurantId: FieldRef<"Product", "String">;
    readonly menuCategoryId: FieldRef<"Product", "String">;
    readonly createdAt: FieldRef<"Product", "DateTime">;
    readonly updatedAt: FieldRef<"Product", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput;
  };

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput;
  };

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?:
      | ProductOrderByWithRelationInput
      | ProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[];
  };

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?:
      | ProductOrderByWithRelationInput
      | ProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[];
  };

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Products to fetch.
     */
    orderBy?:
      | ProductOrderByWithRelationInput
      | ProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Products from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Products.
     */
    skip?: number;
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[];
  };

  /**
   * Product create
   */
  export type ProductCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>;
  };

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Product update
   */
  export type ProductUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>;
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput;
  };

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>;
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput;
  };

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput;
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>;
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>;
  };

  /**
   * Product delete
   */
  export type ProductDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput;
  };

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput;
  };

  /**
   * Product.ingredients
   */
  export type Product$ingredientsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null;
    where?: IngredientWhereInput;
    orderBy?:
      | IngredientOrderByWithRelationInput
      | IngredientOrderByWithRelationInput[];
    cursor?: IngredientWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[];
  };

  /**
   * Product.orderProducts
   */
  export type Product$orderProductsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null;
    where?: OrderProductWhereInput;
    orderBy?:
      | OrderProductOrderByWithRelationInput
      | OrderProductOrderByWithRelationInput[];
    cursor?: OrderProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OrderProductScalarFieldEnum | OrderProductScalarFieldEnum[];
  };

  /**
   * Product without action
   */
  export type ProductDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null;
  };

  /**
   * Model Ingredient
   */

  export type AggregateIngredient = {
    _count: IngredientCountAggregateOutputType | null;
    _avg: IngredientAvgAggregateOutputType | null;
    _sum: IngredientSumAggregateOutputType | null;
    _min: IngredientMinAggregateOutputType | null;
    _max: IngredientMaxAggregateOutputType | null;
  };

  export type IngredientAvgAggregateOutputType = {
    id: number | null;
  };

  export type IngredientSumAggregateOutputType = {
    id: number | null;
  };

  export type IngredientMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    productId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type IngredientMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    productId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type IngredientCountAggregateOutputType = {
    id: number;
    name: number;
    productId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type IngredientAvgAggregateInputType = {
    id?: true;
  };

  export type IngredientSumAggregateInputType = {
    id?: true;
  };

  export type IngredientMinAggregateInputType = {
    id?: true;
    name?: true;
    productId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type IngredientMaxAggregateInputType = {
    id?: true;
    name?: true;
    productId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type IngredientCountAggregateInputType = {
    id?: true;
    name?: true;
    productId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type IngredientAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Ingredient to aggregate.
     */
    where?: IngredientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Ingredients to fetch.
     */
    orderBy?:
      | IngredientOrderByWithRelationInput
      | IngredientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: IngredientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Ingredients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Ingredients
     **/
    _count?: true | IngredientCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: IngredientAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: IngredientSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: IngredientMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: IngredientMaxAggregateInputType;
  };

  export type GetIngredientAggregateType<T extends IngredientAggregateArgs> = {
    [P in keyof T & keyof AggregateIngredient]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredient[P]>
      : GetScalarType<T[P], AggregateIngredient[P]>;
  };

  export type IngredientGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: IngredientWhereInput;
    orderBy?:
      | IngredientOrderByWithAggregationInput
      | IngredientOrderByWithAggregationInput[];
    by: IngredientScalarFieldEnum[] | IngredientScalarFieldEnum;
    having?: IngredientScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: IngredientCountAggregateInputType | true;
    _avg?: IngredientAvgAggregateInputType;
    _sum?: IngredientSumAggregateInputType;
    _min?: IngredientMinAggregateInputType;
    _max?: IngredientMaxAggregateInputType;
  };

  export type IngredientGroupByOutputType = {
    id: number;
    name: string;
    productId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: IngredientCountAggregateOutputType | null;
    _avg: IngredientAvgAggregateOutputType | null;
    _sum: IngredientSumAggregateOutputType | null;
    _min: IngredientMinAggregateOutputType | null;
    _max: IngredientMaxAggregateOutputType | null;
  };

  type GetIngredientGroupByPayload<T extends IngredientGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<IngredientGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof IngredientGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientGroupByOutputType[P]>;
        }
      >
    >;

  export type IngredientSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      productId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      product?: boolean | ProductDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["ingredient"]
  >;

  export type IngredientSelectScalar = {
    id?: boolean;
    name?: boolean;
    productId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type IngredientOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    "id" | "name" | "productId" | "createdAt" | "updatedAt",
    ExtArgs["result"]["ingredient"]
  >;
  export type IngredientInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    product?: boolean | ProductDefaultArgs<ExtArgs>;
  };

  export type $IngredientPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Ingredient";
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        productId: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["ingredient"]
    >;
    composites: {};
  };

  type IngredientGetPayload<
    S extends boolean | null | undefined | IngredientDefaultArgs,
  > = $Result.GetResult<Prisma.$IngredientPayload, S>;

  type IngredientCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    IngredientFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: IngredientCountAggregateInputType | true;
  };

  export interface IngredientDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Ingredient"];
      meta: { name: "Ingredient" };
    };
    /**
     * Find zero or one Ingredient that matches the filter.
     * @param {IngredientFindUniqueArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngredientFindUniqueArgs>(
      args: SelectSubset<T, IngredientFindUniqueArgs<ExtArgs>>,
    ): Prisma__IngredientClient<
      $Result.GetResult<
        Prisma.$IngredientPayload<ExtArgs>,
        T,
        "findUnique",
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find one Ingredient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngredientFindUniqueOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngredientFindUniqueOrThrowArgs>(
      args: SelectSubset<T, IngredientFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__IngredientClient<
      $Result.GetResult<
        Prisma.$IngredientPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first Ingredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngredientFindFirstArgs>(
      args?: SelectSubset<T, IngredientFindFirstArgs<ExtArgs>>,
    ): Prisma__IngredientClient<
      $Result.GetResult<
        Prisma.$IngredientPayload<ExtArgs>,
        T,
        "findFirst",
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first Ingredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngredientFindFirstOrThrowArgs>(
      args?: SelectSubset<T, IngredientFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__IngredientClient<
      $Result.GetResult<
        Prisma.$IngredientPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find zero or more Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredients
     * const ingredients = await prisma.ingredient.findMany()
     *
     * // Get first 10 Ingredients
     * const ingredients = await prisma.ingredient.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.findMany({ select: { id: true } })
     *
     */
    findMany<T extends IngredientFindManyArgs>(
      args?: SelectSubset<T, IngredientFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$IngredientPayload<ExtArgs>,
        T,
        "findMany",
        ClientOptions
      >
    >;

    /**
     * Create a Ingredient.
     * @param {IngredientCreateArgs} args - Arguments to create a Ingredient.
     * @example
     * // Create one Ingredient
     * const Ingredient = await prisma.ingredient.create({
     *   data: {
     *     // ... data to create a Ingredient
     *   }
     * })
     *
     */
    create<T extends IngredientCreateArgs>(
      args: SelectSubset<T, IngredientCreateArgs<ExtArgs>>,
    ): Prisma__IngredientClient<
      $Result.GetResult<
        Prisma.$IngredientPayload<ExtArgs>,
        T,
        "create",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Create many Ingredients.
     * @param {IngredientCreateManyArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends IngredientCreateManyArgs>(
      args?: SelectSubset<T, IngredientCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Ingredient.
     * @param {IngredientDeleteArgs} args - Arguments to delete one Ingredient.
     * @example
     * // Delete one Ingredient
     * const Ingredient = await prisma.ingredient.delete({
     *   where: {
     *     // ... filter to delete one Ingredient
     *   }
     * })
     *
     */
    delete<T extends IngredientDeleteArgs>(
      args: SelectSubset<T, IngredientDeleteArgs<ExtArgs>>,
    ): Prisma__IngredientClient<
      $Result.GetResult<
        Prisma.$IngredientPayload<ExtArgs>,
        T,
        "delete",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Update one Ingredient.
     * @param {IngredientUpdateArgs} args - Arguments to update one Ingredient.
     * @example
     * // Update one Ingredient
     * const ingredient = await prisma.ingredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends IngredientUpdateArgs>(
      args: SelectSubset<T, IngredientUpdateArgs<ExtArgs>>,
    ): Prisma__IngredientClient<
      $Result.GetResult<
        Prisma.$IngredientPayload<ExtArgs>,
        T,
        "update",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Delete zero or more Ingredients.
     * @param {IngredientDeleteManyArgs} args - Arguments to filter Ingredients to delete.
     * @example
     * // Delete a few Ingredients
     * const { count } = await prisma.ingredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends IngredientDeleteManyArgs>(
      args?: SelectSubset<T, IngredientDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends IngredientUpdateManyArgs>(
      args: SelectSubset<T, IngredientUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Ingredient.
     * @param {IngredientUpsertArgs} args - Arguments to update or create a Ingredient.
     * @example
     * // Update or create a Ingredient
     * const ingredient = await prisma.ingredient.upsert({
     *   create: {
     *     // ... data to create a Ingredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingredient we want to update
     *   }
     * })
     */
    upsert<T extends IngredientUpsertArgs>(
      args: SelectSubset<T, IngredientUpsertArgs<ExtArgs>>,
    ): Prisma__IngredientClient<
      $Result.GetResult<
        Prisma.$IngredientPayload<ExtArgs>,
        T,
        "upsert",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Count the number of Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientCountArgs} args - Arguments to filter Ingredients to count.
     * @example
     * // Count the number of Ingredients
     * const count = await prisma.ingredient.count({
     *   where: {
     *     // ... the filter for the Ingredients we want to count
     *   }
     * })
     **/
    count<T extends IngredientCountArgs>(
      args?: Subset<T, IngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], IngredientCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends IngredientAggregateArgs>(
      args: Subset<T, IngredientAggregateArgs>,
    ): Prisma.PrismaPromise<GetIngredientAggregateType<T>>;

    /**
     * Group by Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends IngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredientGroupByArgs["orderBy"] }
        : { orderBy?: IngredientGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, IngredientGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetIngredientGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Ingredient model
     */
    readonly fields: IngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ingredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngredientClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProductDefaultArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      | $Result.GetResult<
          Prisma.$ProductPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          ClientOptions
        >
      | Null,
      Null,
      ExtArgs,
      ClientOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Ingredient model
   */
  interface IngredientFieldRefs {
    readonly id: FieldRef<"Ingredient", "Int">;
    readonly name: FieldRef<"Ingredient", "String">;
    readonly productId: FieldRef<"Ingredient", "String">;
    readonly createdAt: FieldRef<"Ingredient", "DateTime">;
    readonly updatedAt: FieldRef<"Ingredient", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Ingredient findUnique
   */
  export type IngredientFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null;
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput;
  };

  /**
   * Ingredient findUniqueOrThrow
   */
  export type IngredientFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null;
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput;
  };

  /**
   * Ingredient findFirst
   */
  export type IngredientFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null;
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Ingredients to fetch.
     */
    orderBy?:
      | IngredientOrderByWithRelationInput
      | IngredientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Ingredients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[];
  };

  /**
   * Ingredient findFirstOrThrow
   */
  export type IngredientFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null;
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Ingredients to fetch.
     */
    orderBy?:
      | IngredientOrderByWithRelationInput
      | IngredientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Ingredients.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[];
  };

  /**
   * Ingredient findMany
   */
  export type IngredientFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null;
    /**
     * Filter, which Ingredients to fetch.
     */
    where?: IngredientWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Ingredients to fetch.
     */
    orderBy?:
      | IngredientOrderByWithRelationInput
      | IngredientOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Ingredients.
     */
    cursor?: IngredientWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Ingredients.
     */
    skip?: number;
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[];
  };

  /**
   * Ingredient create
   */
  export type IngredientCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null;
    /**
     * The data needed to create a Ingredient.
     */
    data: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>;
  };

  /**
   * Ingredient createMany
   */
  export type IngredientCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientCreateManyInput | IngredientCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Ingredient update
   */
  export type IngredientUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null;
    /**
     * The data needed to update a Ingredient.
     */
    data: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>;
    /**
     * Choose, which Ingredient to update.
     */
    where: IngredientWhereUniqueInput;
  };

  /**
   * Ingredient updateMany
   */
  export type IngredientUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Ingredients.
     */
    data: XOR<
      IngredientUpdateManyMutationInput,
      IngredientUncheckedUpdateManyInput
    >;
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientWhereInput;
  };

  /**
   * Ingredient upsert
   */
  export type IngredientUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null;
    /**
     * The filter to search for the Ingredient to update in case it exists.
     */
    where: IngredientWhereUniqueInput;
    /**
     * In case the Ingredient found by the `where` argument doesn't exist, create a new Ingredient with this data.
     */
    create: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>;
    /**
     * In case the Ingredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>;
  };

  /**
   * Ingredient delete
   */
  export type IngredientDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null;
    /**
     * Filter which Ingredient to delete.
     */
    where: IngredientWhereUniqueInput;
  };

  /**
   * Ingredient deleteMany
   */
  export type IngredientDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Ingredients to delete
     */
    where?: IngredientWhereInput;
  };

  /**
   * Ingredient without action
   */
  export type IngredientDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null;
  };

  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null;
    _avg: OrderAvgAggregateOutputType | null;
    _sum: OrderSumAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
  };

  export type OrderAvgAggregateOutputType = {
    id: number | null;
    total: number | null;
  };

  export type OrderSumAggregateOutputType = {
    id: number | null;
    total: number | null;
  };

  export type OrderMinAggregateOutputType = {
    id: number | null;
    total: number | null;
    status: $Enums.OrderStatus | null;
    consumptionMethod: $Enums.ConsumptionMethod | null;
    restaurantId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type OrderMaxAggregateOutputType = {
    id: number | null;
    total: number | null;
    status: $Enums.OrderStatus | null;
    consumptionMethod: $Enums.ConsumptionMethod | null;
    restaurantId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type OrderCountAggregateOutputType = {
    id: number;
    total: number;
    status: number;
    consumptionMethod: number;
    restaurantId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type OrderAvgAggregateInputType = {
    id?: true;
    total?: true;
  };

  export type OrderSumAggregateInputType = {
    id?: true;
    total?: true;
  };

  export type OrderMinAggregateInputType = {
    id?: true;
    total?: true;
    status?: true;
    consumptionMethod?: true;
    restaurantId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type OrderMaxAggregateInputType = {
    id?: true;
    total?: true;
    status?: true;
    consumptionMethod?: true;
    restaurantId?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type OrderCountAggregateInputType = {
    id?: true;
    total?: true;
    status?: true;
    consumptionMethod?: true;
    restaurantId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type OrderAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Orders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Orders
     **/
    _count?: true | OrderCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: OrderAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: OrderSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrderMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrderMaxAggregateInputType;
  };

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
    [P in keyof T & keyof AggregateOrder]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>;
  };

  export type OrderGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrderWhereInput;
    orderBy?:
      | OrderOrderByWithAggregationInput
      | OrderOrderByWithAggregationInput[];
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum;
    having?: OrderScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderCountAggregateInputType | true;
    _avg?: OrderAvgAggregateInputType;
    _sum?: OrderSumAggregateInputType;
    _min?: OrderMinAggregateInputType;
    _max?: OrderMaxAggregateInputType;
  };

  export type OrderGroupByOutputType = {
    id: number;
    total: number;
    status: $Enums.OrderStatus;
    consumptionMethod: $Enums.ConsumptionMethod;
    restaurantId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: OrderCountAggregateOutputType | null;
    _avg: OrderAvgAggregateOutputType | null;
    _sum: OrderSumAggregateOutputType | null;
    _min: OrderMinAggregateOutputType | null;
    _max: OrderMaxAggregateOutputType | null;
  };

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<OrderGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof OrderGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>;
        }
      >
    >;

  export type OrderSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      total?: boolean;
      status?: boolean;
      consumptionMethod?: boolean;
      restaurantId?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>;
      orderProducts?: boolean | Order$orderProductsArgs<ExtArgs>;
      _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["order"]
  >;

  export type OrderSelectScalar = {
    id?: boolean;
    total?: boolean;
    status?: boolean;
    consumptionMethod?: boolean;
    restaurantId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type OrderOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "total"
    | "status"
    | "consumptionMethod"
    | "restaurantId"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["order"]
  >;
  export type OrderInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>;
    orderProducts?: boolean | Order$orderProductsArgs<ExtArgs>;
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $OrderPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Order";
    objects: {
      restaurant: Prisma.$RestaurantPayload<ExtArgs>;
      orderProducts: Prisma.$OrderProductPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        total: number;
        status: $Enums.OrderStatus;
        consumptionMethod: $Enums.ConsumptionMethod;
        restaurantId: string;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["order"]
    >;
    composites: {};
  };

  type OrderGetPayload<
    S extends boolean | null | undefined | OrderDefaultArgs,
  > = $Result.GetResult<Prisma.$OrderPayload, S>;

  type OrderCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<OrderFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
    select?: OrderCountAggregateInputType | true;
  };

  export interface OrderDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Order"];
      meta: { name: "Order" };
    };
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(
      args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>,
    ): Prisma__OrderClient<
      $Result.GetResult<
        Prisma.$OrderPayload<ExtArgs>,
        T,
        "findUnique",
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(
      args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__OrderClient<
      $Result.GetResult<
        Prisma.$OrderPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(
      args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>,
    ): Prisma__OrderClient<
      $Result.GetResult<
        Prisma.$OrderPayload<ExtArgs>,
        T,
        "findFirst",
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__OrderClient<
      $Result.GetResult<
        Prisma.$OrderPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     *
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     *
     */
    findMany<T extends OrderFindManyArgs>(
      args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrderPayload<ExtArgs>,
        T,
        "findMany",
        ClientOptions
      >
    >;

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     *
     */
    create<T extends OrderCreateArgs>(
      args: SelectSubset<T, OrderCreateArgs<ExtArgs>>,
    ): Prisma__OrderClient<
      $Result.GetResult<
        Prisma.$OrderPayload<ExtArgs>,
        T,
        "create",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends OrderCreateManyArgs>(
      args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     *
     */
    delete<T extends OrderDeleteArgs>(
      args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>,
    ): Prisma__OrderClient<
      $Result.GetResult<
        Prisma.$OrderPayload<ExtArgs>,
        T,
        "delete",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends OrderUpdateArgs>(
      args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>,
    ): Prisma__OrderClient<
      $Result.GetResult<
        Prisma.$OrderPayload<ExtArgs>,
        T,
        "update",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends OrderDeleteManyArgs>(
      args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends OrderUpdateManyArgs>(
      args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(
      args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>,
    ): Prisma__OrderClient<
      $Result.GetResult<
        Prisma.$OrderPayload<ExtArgs>,
        T,
        "upsert",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
     **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], OrderCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends OrderAggregateArgs>(
      args: Subset<T, OrderAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrderAggregateType<T>>;

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs["orderBy"] }
        : { orderBy?: OrderGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetOrderGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Order model
     */
    readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>,
    ): Prisma__RestaurantClient<
      | $Result.GetResult<
          Prisma.$RestaurantPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          ClientOptions
        >
      | Null,
      Null,
      ExtArgs,
      ClientOptions
    >;
    orderProducts<T extends Order$orderProductsArgs<ExtArgs> = {}>(
      args?: Subset<T, Order$orderProductsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      | $Result.GetResult<
          Prisma.$OrderProductPayload<ExtArgs>,
          T,
          "findMany",
          ClientOptions
        >
      | Null
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", "Int">;
    readonly total: FieldRef<"Order", "Float">;
    readonly status: FieldRef<"Order", "OrderStatus">;
    readonly consumptionMethod: FieldRef<"Order", "ConsumptionMethod">;
    readonly restaurantId: FieldRef<"Order", "String">;
    readonly createdAt: FieldRef<"Order", "DateTime">;
    readonly updatedAt: FieldRef<"Order", "DateTime">;
  }

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput;
  };

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput;
  };

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Orders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[];
  };

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Orders.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[];
  };

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Orders.
     */
    skip?: number;
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[];
  };

  /**
   * Order create
   */
  export type OrderCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>;
  };

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Order update
   */
  export type OrderUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>;
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput;
  };

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>;
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput;
  };

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput;
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>;
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>;
  };

  /**
   * Order delete
   */
  export type OrderDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput;
  };

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput;
  };

  /**
   * Order.orderProducts
   */
  export type Order$orderProductsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null;
    where?: OrderProductWhereInput;
    orderBy?:
      | OrderProductOrderByWithRelationInput
      | OrderProductOrderByWithRelationInput[];
    cursor?: OrderProductWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: OrderProductScalarFieldEnum | OrderProductScalarFieldEnum[];
  };

  /**
   * Order without action
   */
  export type OrderDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null;
  };

  /**
   * Model OrderProduct
   */

  export type AggregateOrderProduct = {
    _count: OrderProductCountAggregateOutputType | null;
    _avg: OrderProductAvgAggregateOutputType | null;
    _sum: OrderProductSumAggregateOutputType | null;
    _min: OrderProductMinAggregateOutputType | null;
    _max: OrderProductMaxAggregateOutputType | null;
  };

  export type OrderProductAvgAggregateOutputType = {
    orderId: number | null;
    quantity: number | null;
    price: number | null;
  };

  export type OrderProductSumAggregateOutputType = {
    orderId: number | null;
    quantity: number | null;
    price: number | null;
  };

  export type OrderProductMinAggregateOutputType = {
    id: string | null;
    productId: string | null;
    orderId: number | null;
    quantity: number | null;
    price: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type OrderProductMaxAggregateOutputType = {
    id: string | null;
    productId: string | null;
    orderId: number | null;
    quantity: number | null;
    price: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
  };

  export type OrderProductCountAggregateOutputType = {
    id: number;
    productId: number;
    orderId: number;
    quantity: number;
    price: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
  };

  export type OrderProductAvgAggregateInputType = {
    orderId?: true;
    quantity?: true;
    price?: true;
  };

  export type OrderProductSumAggregateInputType = {
    orderId?: true;
    quantity?: true;
    price?: true;
  };

  export type OrderProductMinAggregateInputType = {
    id?: true;
    productId?: true;
    orderId?: true;
    quantity?: true;
    price?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type OrderProductMaxAggregateInputType = {
    id?: true;
    productId?: true;
    orderId?: true;
    quantity?: true;
    price?: true;
    createdAt?: true;
    updatedAt?: true;
  };

  export type OrderProductCountAggregateInputType = {
    id?: true;
    productId?: true;
    orderId?: true;
    quantity?: true;
    price?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
  };

  export type OrderProductAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which OrderProduct to aggregate.
     */
    where?: OrderProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrderProducts to fetch.
     */
    orderBy?:
      | OrderProductOrderByWithRelationInput
      | OrderProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: OrderProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrderProducts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrderProducts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned OrderProducts
     **/
    _count?: true | OrderProductCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: OrderProductAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: OrderProductSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: OrderProductMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: OrderProductMaxAggregateInputType;
  };

  export type GetOrderProductAggregateType<
    T extends OrderProductAggregateArgs,
  > = {
    [P in keyof T & keyof AggregateOrderProduct]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderProduct[P]>
      : GetScalarType<T[P], AggregateOrderProduct[P]>;
  };

  export type OrderProductGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: OrderProductWhereInput;
    orderBy?:
      | OrderProductOrderByWithAggregationInput
      | OrderProductOrderByWithAggregationInput[];
    by: OrderProductScalarFieldEnum[] | OrderProductScalarFieldEnum;
    having?: OrderProductScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OrderProductCountAggregateInputType | true;
    _avg?: OrderProductAvgAggregateInputType;
    _sum?: OrderProductSumAggregateInputType;
    _min?: OrderProductMinAggregateInputType;
    _max?: OrderProductMaxAggregateInputType;
  };

  export type OrderProductGroupByOutputType = {
    id: string;
    productId: string;
    orderId: number;
    quantity: number;
    price: number;
    createdAt: Date;
    updatedAt: Date;
    _count: OrderProductCountAggregateOutputType | null;
    _avg: OrderProductAvgAggregateOutputType | null;
    _sum: OrderProductSumAggregateOutputType | null;
    _min: OrderProductMinAggregateOutputType | null;
    _max: OrderProductMaxAggregateOutputType | null;
  };

  type GetOrderProductGroupByPayload<T extends OrderProductGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<OrderProductGroupByOutputType, T["by"]> & {
          [P in keyof T &
            keyof OrderProductGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderProductGroupByOutputType[P]>
            : GetScalarType<T[P], OrderProductGroupByOutputType[P]>;
        }
      >
    >;

  export type OrderProductSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      productId?: boolean;
      orderId?: boolean;
      quantity?: boolean;
      price?: boolean;
      createdAt?: boolean;
      updatedAt?: boolean;
      product?: boolean | ProductDefaultArgs<ExtArgs>;
      order?: boolean | OrderDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["orderProduct"]
  >;

  export type OrderProductSelectScalar = {
    id?: boolean;
    productId?: boolean;
    orderId?: boolean;
    quantity?: boolean;
    price?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  };

  export type OrderProductOmit<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetOmit<
    | "id"
    | "productId"
    | "orderId"
    | "quantity"
    | "price"
    | "createdAt"
    | "updatedAt",
    ExtArgs["result"]["orderProduct"]
  >;
  export type OrderProductInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    product?: boolean | ProductDefaultArgs<ExtArgs>;
    order?: boolean | OrderDefaultArgs<ExtArgs>;
  };

  export type $OrderProductPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "OrderProduct";
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>;
      order: Prisma.$OrderPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        productId: string;
        orderId: number;
        quantity: number;
        price: number;
        createdAt: Date;
        updatedAt: Date;
      },
      ExtArgs["result"]["orderProduct"]
    >;
    composites: {};
  };

  type OrderProductGetPayload<
    S extends boolean | null | undefined | OrderProductDefaultArgs,
  > = $Result.GetResult<Prisma.$OrderProductPayload, S>;

  type OrderProductCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<
    OrderProductFindManyArgs,
    "select" | "include" | "distinct" | "omit"
  > & {
    select?: OrderProductCountAggregateInputType | true;
  };

  export interface OrderProductDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["OrderProduct"];
      meta: { name: "OrderProduct" };
    };
    /**
     * Find zero or one OrderProduct that matches the filter.
     * @param {OrderProductFindUniqueArgs} args - Arguments to find a OrderProduct
     * @example
     * // Get one OrderProduct
     * const orderProduct = await prisma.orderProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderProductFindUniqueArgs>(
      args: SelectSubset<T, OrderProductFindUniqueArgs<ExtArgs>>,
    ): Prisma__OrderProductClient<
      $Result.GetResult<
        Prisma.$OrderProductPayload<ExtArgs>,
        T,
        "findUnique",
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find one OrderProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderProductFindUniqueOrThrowArgs} args - Arguments to find a OrderProduct
     * @example
     * // Get one OrderProduct
     * const orderProduct = await prisma.orderProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderProductFindUniqueOrThrowArgs>(
      args: SelectSubset<T, OrderProductFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__OrderProductClient<
      $Result.GetResult<
        Prisma.$OrderProductPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first OrderProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductFindFirstArgs} args - Arguments to find a OrderProduct
     * @example
     * // Get one OrderProduct
     * const orderProduct = await prisma.orderProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderProductFindFirstArgs>(
      args?: SelectSubset<T, OrderProductFindFirstArgs<ExtArgs>>,
    ): Prisma__OrderProductClient<
      $Result.GetResult<
        Prisma.$OrderProductPayload<ExtArgs>,
        T,
        "findFirst",
        ClientOptions
      > | null,
      null,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find the first OrderProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductFindFirstOrThrowArgs} args - Arguments to find a OrderProduct
     * @example
     * // Get one OrderProduct
     * const orderProduct = await prisma.orderProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderProductFindFirstOrThrowArgs>(
      args?: SelectSubset<T, OrderProductFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__OrderProductClient<
      $Result.GetResult<
        Prisma.$OrderProductPayload<ExtArgs>,
        T,
        "findFirstOrThrow",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Find zero or more OrderProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderProducts
     * const orderProducts = await prisma.orderProduct.findMany()
     *
     * // Get first 10 OrderProducts
     * const orderProducts = await prisma.orderProduct.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const orderProductWithIdOnly = await prisma.orderProduct.findMany({ select: { id: true } })
     *
     */
    findMany<T extends OrderProductFindManyArgs>(
      args?: SelectSubset<T, OrderProductFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<
        Prisma.$OrderProductPayload<ExtArgs>,
        T,
        "findMany",
        ClientOptions
      >
    >;

    /**
     * Create a OrderProduct.
     * @param {OrderProductCreateArgs} args - Arguments to create a OrderProduct.
     * @example
     * // Create one OrderProduct
     * const OrderProduct = await prisma.orderProduct.create({
     *   data: {
     *     // ... data to create a OrderProduct
     *   }
     * })
     *
     */
    create<T extends OrderProductCreateArgs>(
      args: SelectSubset<T, OrderProductCreateArgs<ExtArgs>>,
    ): Prisma__OrderProductClient<
      $Result.GetResult<
        Prisma.$OrderProductPayload<ExtArgs>,
        T,
        "create",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Create many OrderProducts.
     * @param {OrderProductCreateManyArgs} args - Arguments to create many OrderProducts.
     * @example
     * // Create many OrderProducts
     * const orderProduct = await prisma.orderProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends OrderProductCreateManyArgs>(
      args?: SelectSubset<T, OrderProductCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a OrderProduct.
     * @param {OrderProductDeleteArgs} args - Arguments to delete one OrderProduct.
     * @example
     * // Delete one OrderProduct
     * const OrderProduct = await prisma.orderProduct.delete({
     *   where: {
     *     // ... filter to delete one OrderProduct
     *   }
     * })
     *
     */
    delete<T extends OrderProductDeleteArgs>(
      args: SelectSubset<T, OrderProductDeleteArgs<ExtArgs>>,
    ): Prisma__OrderProductClient<
      $Result.GetResult<
        Prisma.$OrderProductPayload<ExtArgs>,
        T,
        "delete",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Update one OrderProduct.
     * @param {OrderProductUpdateArgs} args - Arguments to update one OrderProduct.
     * @example
     * // Update one OrderProduct
     * const orderProduct = await prisma.orderProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends OrderProductUpdateArgs>(
      args: SelectSubset<T, OrderProductUpdateArgs<ExtArgs>>,
    ): Prisma__OrderProductClient<
      $Result.GetResult<
        Prisma.$OrderProductPayload<ExtArgs>,
        T,
        "update",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Delete zero or more OrderProducts.
     * @param {OrderProductDeleteManyArgs} args - Arguments to filter OrderProducts to delete.
     * @example
     * // Delete a few OrderProducts
     * const { count } = await prisma.orderProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends OrderProductDeleteManyArgs>(
      args?: SelectSubset<T, OrderProductDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more OrderProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderProducts
     * const orderProduct = await prisma.orderProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends OrderProductUpdateManyArgs>(
      args: SelectSubset<T, OrderProductUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one OrderProduct.
     * @param {OrderProductUpsertArgs} args - Arguments to update or create a OrderProduct.
     * @example
     * // Update or create a OrderProduct
     * const orderProduct = await prisma.orderProduct.upsert({
     *   create: {
     *     // ... data to create a OrderProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderProduct we want to update
     *   }
     * })
     */
    upsert<T extends OrderProductUpsertArgs>(
      args: SelectSubset<T, OrderProductUpsertArgs<ExtArgs>>,
    ): Prisma__OrderProductClient<
      $Result.GetResult<
        Prisma.$OrderProductPayload<ExtArgs>,
        T,
        "upsert",
        ClientOptions
      >,
      never,
      ExtArgs,
      ClientOptions
    >;

    /**
     * Count the number of OrderProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductCountArgs} args - Arguments to filter OrderProducts to count.
     * @example
     * // Count the number of OrderProducts
     * const count = await prisma.orderProduct.count({
     *   where: {
     *     // ... the filter for the OrderProducts we want to count
     *   }
     * })
     **/
    count<T extends OrderProductCountArgs>(
      args?: Subset<T, OrderProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], OrderProductCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a OrderProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends OrderProductAggregateArgs>(
      args: Subset<T, OrderProductAggregateArgs>,
    ): Prisma.PrismaPromise<GetOrderProductAggregateType<T>>;

    /**
     * Group by OrderProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends OrderProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderProductGroupByArgs["orderBy"] }
        : { orderBy?: OrderProductGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, OrderProductGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetOrderProductGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the OrderProduct model
     */
    readonly fields: OrderProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderProductClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
    ClientOptions = {},
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, ProductDefaultArgs<ExtArgs>>,
    ): Prisma__ProductClient<
      | $Result.GetResult<
          Prisma.$ProductPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          ClientOptions
        >
      | Null,
      Null,
      ExtArgs,
      ClientOptions
    >;
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, OrderDefaultArgs<ExtArgs>>,
    ): Prisma__OrderClient<
      | $Result.GetResult<
          Prisma.$OrderPayload<ExtArgs>,
          T,
          "findUniqueOrThrow",
          ClientOptions
        >
      | Null,
      Null,
      ExtArgs,
      ClientOptions
    >;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the OrderProduct model
   */
  interface OrderProductFieldRefs {
    readonly id: FieldRef<"OrderProduct", "String">;
    readonly productId: FieldRef<"OrderProduct", "String">;
    readonly orderId: FieldRef<"OrderProduct", "Int">;
    readonly quantity: FieldRef<"OrderProduct", "Int">;
    readonly price: FieldRef<"OrderProduct", "Float">;
    readonly createdAt: FieldRef<"OrderProduct", "DateTime">;
    readonly updatedAt: FieldRef<"OrderProduct", "DateTime">;
  }

  // Custom InputTypes
  /**
   * OrderProduct findUnique
   */
  export type OrderProductFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null;
    /**
     * Filter, which OrderProduct to fetch.
     */
    where: OrderProductWhereUniqueInput;
  };

  /**
   * OrderProduct findUniqueOrThrow
   */
  export type OrderProductFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null;
    /**
     * Filter, which OrderProduct to fetch.
     */
    where: OrderProductWhereUniqueInput;
  };

  /**
   * OrderProduct findFirst
   */
  export type OrderProductFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null;
    /**
     * Filter, which OrderProduct to fetch.
     */
    where?: OrderProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrderProducts to fetch.
     */
    orderBy?:
      | OrderProductOrderByWithRelationInput
      | OrderProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OrderProducts.
     */
    cursor?: OrderProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrderProducts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrderProducts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OrderProducts.
     */
    distinct?: OrderProductScalarFieldEnum | OrderProductScalarFieldEnum[];
  };

  /**
   * OrderProduct findFirstOrThrow
   */
  export type OrderProductFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null;
    /**
     * Filter, which OrderProduct to fetch.
     */
    where?: OrderProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrderProducts to fetch.
     */
    orderBy?:
      | OrderProductOrderByWithRelationInput
      | OrderProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OrderProducts.
     */
    cursor?: OrderProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrderProducts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrderProducts.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OrderProducts.
     */
    distinct?: OrderProductScalarFieldEnum | OrderProductScalarFieldEnum[];
  };

  /**
   * OrderProduct findMany
   */
  export type OrderProductFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null;
    /**
     * Filter, which OrderProducts to fetch.
     */
    where?: OrderProductWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OrderProducts to fetch.
     */
    orderBy?:
      | OrderProductOrderByWithRelationInput
      | OrderProductOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing OrderProducts.
     */
    cursor?: OrderProductWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OrderProducts from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OrderProducts.
     */
    skip?: number;
    distinct?: OrderProductScalarFieldEnum | OrderProductScalarFieldEnum[];
  };

  /**
   * OrderProduct create
   */
  export type OrderProductCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null;
    /**
     * The data needed to create a OrderProduct.
     */
    data: XOR<OrderProductCreateInput, OrderProductUncheckedCreateInput>;
  };

  /**
   * OrderProduct createMany
   */
  export type OrderProductCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many OrderProducts.
     */
    data: OrderProductCreateManyInput | OrderProductCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * OrderProduct update
   */
  export type OrderProductUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null;
    /**
     * The data needed to update a OrderProduct.
     */
    data: XOR<OrderProductUpdateInput, OrderProductUncheckedUpdateInput>;
    /**
     * Choose, which OrderProduct to update.
     */
    where: OrderProductWhereUniqueInput;
  };

  /**
   * OrderProduct updateMany
   */
  export type OrderProductUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update OrderProducts.
     */
    data: XOR<
      OrderProductUpdateManyMutationInput,
      OrderProductUncheckedUpdateManyInput
    >;
    /**
     * Filter which OrderProducts to update
     */
    where?: OrderProductWhereInput;
  };

  /**
   * OrderProduct upsert
   */
  export type OrderProductUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null;
    /**
     * The filter to search for the OrderProduct to update in case it exists.
     */
    where: OrderProductWhereUniqueInput;
    /**
     * In case the OrderProduct found by the `where` argument doesn't exist, create a new OrderProduct with this data.
     */
    create: XOR<OrderProductCreateInput, OrderProductUncheckedCreateInput>;
    /**
     * In case the OrderProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderProductUpdateInput, OrderProductUncheckedUpdateInput>;
  };

  /**
   * OrderProduct delete
   */
  export type OrderProductDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null;
    /**
     * Filter which OrderProduct to delete.
     */
    where: OrderProductWhereUniqueInput;
  };

  /**
   * OrderProduct deleteMany
   */
  export type OrderProductDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which OrderProducts to delete
     */
    where?: OrderProductWhereInput;
  };

  /**
   * OrderProduct without action
   */
  export type OrderProductDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: "ReadUncommitted";
    ReadCommitted: "ReadCommitted";
    RepeatableRead: "RepeatableRead";
    Serializable: "Serializable";
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const RestaurantScalarFieldEnum: {
    id: "id";
    name: "name";
    slug: "slug";
    description: "description";
    avatarImageUrl: "avatarImageUrl";
    coverImageUrl: "coverImageUrl";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type RestaurantScalarFieldEnum =
    (typeof RestaurantScalarFieldEnum)[keyof typeof RestaurantScalarFieldEnum];

  export const MenuCategoryScalarFieldEnum: {
    id: "id";
    name: "name";
    restaurantId: "restaurantId";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type MenuCategoryScalarFieldEnum =
    (typeof MenuCategoryScalarFieldEnum)[keyof typeof MenuCategoryScalarFieldEnum];

  export const ProductScalarFieldEnum: {
    id: "id";
    name: "name";
    description: "description";
    price: "price";
    imageUrl: "imageUrl";
    restaurantId: "restaurantId";
    menuCategoryId: "menuCategoryId";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type ProductScalarFieldEnum =
    (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum];

  export const IngredientScalarFieldEnum: {
    id: "id";
    name: "name";
    productId: "productId";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type IngredientScalarFieldEnum =
    (typeof IngredientScalarFieldEnum)[keyof typeof IngredientScalarFieldEnum];

  export const OrderScalarFieldEnum: {
    id: "id";
    total: "total";
    status: "status";
    consumptionMethod: "consumptionMethod";
    restaurantId: "restaurantId";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type OrderScalarFieldEnum =
    (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum];

  export const OrderProductScalarFieldEnum: {
    id: "id";
    productId: "productId";
    orderId: "orderId";
    quantity: "quantity";
    price: "price";
    createdAt: "createdAt";
    updatedAt: "updatedAt";
  };

  export type OrderProductScalarFieldEnum =
    (typeof OrderProductScalarFieldEnum)[keyof typeof OrderProductScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const RestaurantOrderByRelevanceFieldEnum: {
    id: "id";
    name: "name";
    slug: "slug";
    description: "description";
    avatarImageUrl: "avatarImageUrl";
    coverImageUrl: "coverImageUrl";
  };

  export type RestaurantOrderByRelevanceFieldEnum =
    (typeof RestaurantOrderByRelevanceFieldEnum)[keyof typeof RestaurantOrderByRelevanceFieldEnum];

  export const MenuCategoryOrderByRelevanceFieldEnum: {
    id: "id";
    name: "name";
    restaurantId: "restaurantId";
  };

  export type MenuCategoryOrderByRelevanceFieldEnum =
    (typeof MenuCategoryOrderByRelevanceFieldEnum)[keyof typeof MenuCategoryOrderByRelevanceFieldEnum];

  export const ProductOrderByRelevanceFieldEnum: {
    id: "id";
    name: "name";
    description: "description";
    imageUrl: "imageUrl";
    restaurantId: "restaurantId";
    menuCategoryId: "menuCategoryId";
  };

  export type ProductOrderByRelevanceFieldEnum =
    (typeof ProductOrderByRelevanceFieldEnum)[keyof typeof ProductOrderByRelevanceFieldEnum];

  export const IngredientOrderByRelevanceFieldEnum: {
    name: "name";
    productId: "productId";
  };

  export type IngredientOrderByRelevanceFieldEnum =
    (typeof IngredientOrderByRelevanceFieldEnum)[keyof typeof IngredientOrderByRelevanceFieldEnum];

  export const OrderOrderByRelevanceFieldEnum: {
    restaurantId: "restaurantId";
  };

  export type OrderOrderByRelevanceFieldEnum =
    (typeof OrderOrderByRelevanceFieldEnum)[keyof typeof OrderOrderByRelevanceFieldEnum];

  export const OrderProductOrderByRelevanceFieldEnum: {
    id: "id";
    productId: "productId";
  };

  export type OrderProductOrderByRelevanceFieldEnum =
    (typeof OrderProductOrderByRelevanceFieldEnum)[keyof typeof OrderProductOrderByRelevanceFieldEnum];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String"
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime"
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float"
  >;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int"
  >;

  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "OrderStatus"
  >;

  /**
   * Reference to a field of type 'ConsumptionMethod'
   */
  export type EnumConsumptionMethodFieldRefInput<$PrismaModel> =
    FieldRefInputType<$PrismaModel, "ConsumptionMethod">;

  /**
   * Deep Input Types
   */

  export type RestaurantWhereInput = {
    AND?: RestaurantWhereInput | RestaurantWhereInput[];
    OR?: RestaurantWhereInput[];
    NOT?: RestaurantWhereInput | RestaurantWhereInput[];
    id?: StringFilter<"Restaurant"> | string;
    name?: StringFilter<"Restaurant"> | string;
    slug?: StringFilter<"Restaurant"> | string;
    description?: StringFilter<"Restaurant"> | string;
    avatarImageUrl?: StringFilter<"Restaurant"> | string;
    coverImageUrl?: StringFilter<"Restaurant"> | string;
    createdAt?: DateTimeFilter<"Restaurant"> | Date | string;
    updatedAt?: DateTimeFilter<"Restaurant"> | Date | string;
    menuCategories?: MenuCategoryListRelationFilter;
    products?: ProductListRelationFilter;
    orders?: OrderListRelationFilter;
  };

  export type RestaurantOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    slug?: SortOrder;
    description?: SortOrder;
    avatarImageUrl?: SortOrder;
    coverImageUrl?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    menuCategories?: MenuCategoryOrderByRelationAggregateInput;
    products?: ProductOrderByRelationAggregateInput;
    orders?: OrderOrderByRelationAggregateInput;
    _relevance?: RestaurantOrderByRelevanceInput;
  };

  export type RestaurantWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      slug?: string;
      AND?: RestaurantWhereInput | RestaurantWhereInput[];
      OR?: RestaurantWhereInput[];
      NOT?: RestaurantWhereInput | RestaurantWhereInput[];
      name?: StringFilter<"Restaurant"> | string;
      description?: StringFilter<"Restaurant"> | string;
      avatarImageUrl?: StringFilter<"Restaurant"> | string;
      coverImageUrl?: StringFilter<"Restaurant"> | string;
      createdAt?: DateTimeFilter<"Restaurant"> | Date | string;
      updatedAt?: DateTimeFilter<"Restaurant"> | Date | string;
      menuCategories?: MenuCategoryListRelationFilter;
      products?: ProductListRelationFilter;
      orders?: OrderListRelationFilter;
    },
    "id" | "slug"
  >;

  export type RestaurantOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    slug?: SortOrder;
    description?: SortOrder;
    avatarImageUrl?: SortOrder;
    coverImageUrl?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: RestaurantCountOrderByAggregateInput;
    _max?: RestaurantMaxOrderByAggregateInput;
    _min?: RestaurantMinOrderByAggregateInput;
  };

  export type RestaurantScalarWhereWithAggregatesInput = {
    AND?:
      | RestaurantScalarWhereWithAggregatesInput
      | RestaurantScalarWhereWithAggregatesInput[];
    OR?: RestaurantScalarWhereWithAggregatesInput[];
    NOT?:
      | RestaurantScalarWhereWithAggregatesInput
      | RestaurantScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Restaurant"> | string;
    name?: StringWithAggregatesFilter<"Restaurant"> | string;
    slug?: StringWithAggregatesFilter<"Restaurant"> | string;
    description?: StringWithAggregatesFilter<"Restaurant"> | string;
    avatarImageUrl?: StringWithAggregatesFilter<"Restaurant"> | string;
    coverImageUrl?: StringWithAggregatesFilter<"Restaurant"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"Restaurant"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Restaurant"> | Date | string;
  };

  export type MenuCategoryWhereInput = {
    AND?: MenuCategoryWhereInput | MenuCategoryWhereInput[];
    OR?: MenuCategoryWhereInput[];
    NOT?: MenuCategoryWhereInput | MenuCategoryWhereInput[];
    id?: StringFilter<"MenuCategory"> | string;
    name?: StringFilter<"MenuCategory"> | string;
    restaurantId?: StringFilter<"MenuCategory"> | string;
    createdAt?: DateTimeFilter<"MenuCategory"> | Date | string;
    updatedAt?: DateTimeFilter<"MenuCategory"> | Date | string;
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>;
    products?: ProductListRelationFilter;
  };

  export type MenuCategoryOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    restaurantId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    restaurant?: RestaurantOrderByWithRelationInput;
    products?: ProductOrderByRelationAggregateInput;
    _relevance?: MenuCategoryOrderByRelevanceInput;
  };

  export type MenuCategoryWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: MenuCategoryWhereInput | MenuCategoryWhereInput[];
      OR?: MenuCategoryWhereInput[];
      NOT?: MenuCategoryWhereInput | MenuCategoryWhereInput[];
      name?: StringFilter<"MenuCategory"> | string;
      restaurantId?: StringFilter<"MenuCategory"> | string;
      createdAt?: DateTimeFilter<"MenuCategory"> | Date | string;
      updatedAt?: DateTimeFilter<"MenuCategory"> | Date | string;
      restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>;
      products?: ProductListRelationFilter;
    },
    "id"
  >;

  export type MenuCategoryOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    restaurantId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: MenuCategoryCountOrderByAggregateInput;
    _max?: MenuCategoryMaxOrderByAggregateInput;
    _min?: MenuCategoryMinOrderByAggregateInput;
  };

  export type MenuCategoryScalarWhereWithAggregatesInput = {
    AND?:
      | MenuCategoryScalarWhereWithAggregatesInput
      | MenuCategoryScalarWhereWithAggregatesInput[];
    OR?: MenuCategoryScalarWhereWithAggregatesInput[];
    NOT?:
      | MenuCategoryScalarWhereWithAggregatesInput
      | MenuCategoryScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"MenuCategory"> | string;
    name?: StringWithAggregatesFilter<"MenuCategory"> | string;
    restaurantId?: StringWithAggregatesFilter<"MenuCategory"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"MenuCategory"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"MenuCategory"> | Date | string;
  };

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[];
    OR?: ProductWhereInput[];
    NOT?: ProductWhereInput | ProductWhereInput[];
    id?: StringFilter<"Product"> | string;
    name?: StringFilter<"Product"> | string;
    description?: StringFilter<"Product"> | string;
    price?: FloatFilter<"Product"> | number;
    imageUrl?: StringFilter<"Product"> | string;
    restaurantId?: StringFilter<"Product"> | string;
    menuCategoryId?: StringFilter<"Product"> | string;
    createdAt?: DateTimeFilter<"Product"> | Date | string;
    updatedAt?: DateTimeFilter<"Product"> | Date | string;
    ingredients?: IngredientListRelationFilter;
    orderProducts?: OrderProductListRelationFilter;
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>;
    menuCategory?: XOR<
      MenuCategoryScalarRelationFilter,
      MenuCategoryWhereInput
    >;
  };

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    imageUrl?: SortOrder;
    restaurantId?: SortOrder;
    menuCategoryId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    ingredients?: IngredientOrderByRelationAggregateInput;
    orderProducts?: OrderProductOrderByRelationAggregateInput;
    restaurant?: RestaurantOrderByWithRelationInput;
    menuCategory?: MenuCategoryOrderByWithRelationInput;
    _relevance?: ProductOrderByRelevanceInput;
  };

  export type ProductWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: ProductWhereInput | ProductWhereInput[];
      OR?: ProductWhereInput[];
      NOT?: ProductWhereInput | ProductWhereInput[];
      name?: StringFilter<"Product"> | string;
      description?: StringFilter<"Product"> | string;
      price?: FloatFilter<"Product"> | number;
      imageUrl?: StringFilter<"Product"> | string;
      restaurantId?: StringFilter<"Product"> | string;
      menuCategoryId?: StringFilter<"Product"> | string;
      createdAt?: DateTimeFilter<"Product"> | Date | string;
      updatedAt?: DateTimeFilter<"Product"> | Date | string;
      ingredients?: IngredientListRelationFilter;
      orderProducts?: OrderProductListRelationFilter;
      restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>;
      menuCategory?: XOR<
        MenuCategoryScalarRelationFilter,
        MenuCategoryWhereInput
      >;
    },
    "id"
  >;

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    imageUrl?: SortOrder;
    restaurantId?: SortOrder;
    menuCategoryId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: ProductCountOrderByAggregateInput;
    _avg?: ProductAvgOrderByAggregateInput;
    _max?: ProductMaxOrderByAggregateInput;
    _min?: ProductMinOrderByAggregateInput;
    _sum?: ProductSumOrderByAggregateInput;
  };

  export type ProductScalarWhereWithAggregatesInput = {
    AND?:
      | ProductScalarWhereWithAggregatesInput
      | ProductScalarWhereWithAggregatesInput[];
    OR?: ProductScalarWhereWithAggregatesInput[];
    NOT?:
      | ProductScalarWhereWithAggregatesInput
      | ProductScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"Product"> | string;
    name?: StringWithAggregatesFilter<"Product"> | string;
    description?: StringWithAggregatesFilter<"Product"> | string;
    price?: FloatWithAggregatesFilter<"Product"> | number;
    imageUrl?: StringWithAggregatesFilter<"Product"> | string;
    restaurantId?: StringWithAggregatesFilter<"Product"> | string;
    menuCategoryId?: StringWithAggregatesFilter<"Product"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string;
  };

  export type IngredientWhereInput = {
    AND?: IngredientWhereInput | IngredientWhereInput[];
    OR?: IngredientWhereInput[];
    NOT?: IngredientWhereInput | IngredientWhereInput[];
    id?: IntFilter<"Ingredient"> | number;
    name?: StringFilter<"Ingredient"> | string;
    productId?: StringFilter<"Ingredient"> | string;
    createdAt?: DateTimeFilter<"Ingredient"> | Date | string;
    updatedAt?: DateTimeFilter<"Ingredient"> | Date | string;
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>;
  };

  export type IngredientOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    productId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    product?: ProductOrderByWithRelationInput;
    _relevance?: IngredientOrderByRelevanceInput;
  };

  export type IngredientWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: IngredientWhereInput | IngredientWhereInput[];
      OR?: IngredientWhereInput[];
      NOT?: IngredientWhereInput | IngredientWhereInput[];
      name?: StringFilter<"Ingredient"> | string;
      productId?: StringFilter<"Ingredient"> | string;
      createdAt?: DateTimeFilter<"Ingredient"> | Date | string;
      updatedAt?: DateTimeFilter<"Ingredient"> | Date | string;
      product?: XOR<ProductScalarRelationFilter, ProductWhereInput>;
    },
    "id"
  >;

  export type IngredientOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    productId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: IngredientCountOrderByAggregateInput;
    _avg?: IngredientAvgOrderByAggregateInput;
    _max?: IngredientMaxOrderByAggregateInput;
    _min?: IngredientMinOrderByAggregateInput;
    _sum?: IngredientSumOrderByAggregateInput;
  };

  export type IngredientScalarWhereWithAggregatesInput = {
    AND?:
      | IngredientScalarWhereWithAggregatesInput
      | IngredientScalarWhereWithAggregatesInput[];
    OR?: IngredientScalarWhereWithAggregatesInput[];
    NOT?:
      | IngredientScalarWhereWithAggregatesInput
      | IngredientScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"Ingredient"> | number;
    name?: StringWithAggregatesFilter<"Ingredient"> | string;
    productId?: StringWithAggregatesFilter<"Ingredient"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"Ingredient"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Ingredient"> | Date | string;
  };

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[];
    OR?: OrderWhereInput[];
    NOT?: OrderWhereInput | OrderWhereInput[];
    id?: IntFilter<"Order"> | number;
    total?: FloatFilter<"Order"> | number;
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus;
    consumptionMethod?:
      | EnumConsumptionMethodFilter<"Order">
      | $Enums.ConsumptionMethod;
    restaurantId?: StringFilter<"Order"> | string;
    createdAt?: DateTimeFilter<"Order"> | Date | string;
    updatedAt?: DateTimeFilter<"Order"> | Date | string;
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>;
    orderProducts?: OrderProductListRelationFilter;
  };

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder;
    total?: SortOrder;
    status?: SortOrder;
    consumptionMethod?: SortOrder;
    restaurantId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    restaurant?: RestaurantOrderByWithRelationInput;
    orderProducts?: OrderProductOrderByRelationAggregateInput;
    _relevance?: OrderOrderByRelevanceInput;
  };

  export type OrderWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      AND?: OrderWhereInput | OrderWhereInput[];
      OR?: OrderWhereInput[];
      NOT?: OrderWhereInput | OrderWhereInput[];
      total?: FloatFilter<"Order"> | number;
      status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus;
      consumptionMethod?:
        | EnumConsumptionMethodFilter<"Order">
        | $Enums.ConsumptionMethod;
      restaurantId?: StringFilter<"Order"> | string;
      createdAt?: DateTimeFilter<"Order"> | Date | string;
      updatedAt?: DateTimeFilter<"Order"> | Date | string;
      restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>;
      orderProducts?: OrderProductListRelationFilter;
    },
    "id"
  >;

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder;
    total?: SortOrder;
    status?: SortOrder;
    consumptionMethod?: SortOrder;
    restaurantId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: OrderCountOrderByAggregateInput;
    _avg?: OrderAvgOrderByAggregateInput;
    _max?: OrderMaxOrderByAggregateInput;
    _min?: OrderMinOrderByAggregateInput;
    _sum?: OrderSumOrderByAggregateInput;
  };

  export type OrderScalarWhereWithAggregatesInput = {
    AND?:
      | OrderScalarWhereWithAggregatesInput
      | OrderScalarWhereWithAggregatesInput[];
    OR?: OrderScalarWhereWithAggregatesInput[];
    NOT?:
      | OrderScalarWhereWithAggregatesInput
      | OrderScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"Order"> | number;
    total?: FloatWithAggregatesFilter<"Order"> | number;
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus;
    consumptionMethod?:
      | EnumConsumptionMethodWithAggregatesFilter<"Order">
      | $Enums.ConsumptionMethod;
    restaurantId?: StringWithAggregatesFilter<"Order"> | string;
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string;
  };

  export type OrderProductWhereInput = {
    AND?: OrderProductWhereInput | OrderProductWhereInput[];
    OR?: OrderProductWhereInput[];
    NOT?: OrderProductWhereInput | OrderProductWhereInput[];
    id?: StringFilter<"OrderProduct"> | string;
    productId?: StringFilter<"OrderProduct"> | string;
    orderId?: IntFilter<"OrderProduct"> | number;
    quantity?: IntFilter<"OrderProduct"> | number;
    price?: FloatFilter<"OrderProduct"> | number;
    createdAt?: DateTimeFilter<"OrderProduct"> | Date | string;
    updatedAt?: DateTimeFilter<"OrderProduct"> | Date | string;
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>;
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>;
  };

  export type OrderProductOrderByWithRelationInput = {
    id?: SortOrder;
    productId?: SortOrder;
    orderId?: SortOrder;
    quantity?: SortOrder;
    price?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    product?: ProductOrderByWithRelationInput;
    order?: OrderOrderByWithRelationInput;
    _relevance?: OrderProductOrderByRelevanceInput;
  };

  export type OrderProductWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: OrderProductWhereInput | OrderProductWhereInput[];
      OR?: OrderProductWhereInput[];
      NOT?: OrderProductWhereInput | OrderProductWhereInput[];
      productId?: StringFilter<"OrderProduct"> | string;
      orderId?: IntFilter<"OrderProduct"> | number;
      quantity?: IntFilter<"OrderProduct"> | number;
      price?: FloatFilter<"OrderProduct"> | number;
      createdAt?: DateTimeFilter<"OrderProduct"> | Date | string;
      updatedAt?: DateTimeFilter<"OrderProduct"> | Date | string;
      product?: XOR<ProductScalarRelationFilter, ProductWhereInput>;
      order?: XOR<OrderScalarRelationFilter, OrderWhereInput>;
    },
    "id"
  >;

  export type OrderProductOrderByWithAggregationInput = {
    id?: SortOrder;
    productId?: SortOrder;
    orderId?: SortOrder;
    quantity?: SortOrder;
    price?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
    _count?: OrderProductCountOrderByAggregateInput;
    _avg?: OrderProductAvgOrderByAggregateInput;
    _max?: OrderProductMaxOrderByAggregateInput;
    _min?: OrderProductMinOrderByAggregateInput;
    _sum?: OrderProductSumOrderByAggregateInput;
  };

  export type OrderProductScalarWhereWithAggregatesInput = {
    AND?:
      | OrderProductScalarWhereWithAggregatesInput
      | OrderProductScalarWhereWithAggregatesInput[];
    OR?: OrderProductScalarWhereWithAggregatesInput[];
    NOT?:
      | OrderProductScalarWhereWithAggregatesInput
      | OrderProductScalarWhereWithAggregatesInput[];
    id?: StringWithAggregatesFilter<"OrderProduct"> | string;
    productId?: StringWithAggregatesFilter<"OrderProduct"> | string;
    orderId?: IntWithAggregatesFilter<"OrderProduct"> | number;
    quantity?: IntWithAggregatesFilter<"OrderProduct"> | number;
    price?: FloatWithAggregatesFilter<"OrderProduct"> | number;
    createdAt?: DateTimeWithAggregatesFilter<"OrderProduct"> | Date | string;
    updatedAt?: DateTimeWithAggregatesFilter<"OrderProduct"> | Date | string;
  };

  export type RestaurantCreateInput = {
    id?: string;
    name: string;
    slug: string;
    description: string;
    avatarImageUrl: string;
    coverImageUrl: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    menuCategories?: MenuCategoryCreateNestedManyWithoutRestaurantInput;
    products?: ProductCreateNestedManyWithoutRestaurantInput;
    orders?: OrderCreateNestedManyWithoutRestaurantInput;
  };

  export type RestaurantUncheckedCreateInput = {
    id?: string;
    name: string;
    slug: string;
    description: string;
    avatarImageUrl: string;
    coverImageUrl: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    menuCategories?: MenuCategoryUncheckedCreateNestedManyWithoutRestaurantInput;
    products?: ProductUncheckedCreateNestedManyWithoutRestaurantInput;
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput;
  };

  export type RestaurantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    avatarImageUrl?: StringFieldUpdateOperationsInput | string;
    coverImageUrl?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    menuCategories?: MenuCategoryUpdateManyWithoutRestaurantNestedInput;
    products?: ProductUpdateManyWithoutRestaurantNestedInput;
    orders?: OrderUpdateManyWithoutRestaurantNestedInput;
  };

  export type RestaurantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    avatarImageUrl?: StringFieldUpdateOperationsInput | string;
    coverImageUrl?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    menuCategories?: MenuCategoryUncheckedUpdateManyWithoutRestaurantNestedInput;
    products?: ProductUncheckedUpdateManyWithoutRestaurantNestedInput;
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput;
  };

  export type RestaurantCreateManyInput = {
    id?: string;
    name: string;
    slug: string;
    description: string;
    avatarImageUrl: string;
    coverImageUrl: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type RestaurantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    avatarImageUrl?: StringFieldUpdateOperationsInput | string;
    coverImageUrl?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type RestaurantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    avatarImageUrl?: StringFieldUpdateOperationsInput | string;
    coverImageUrl?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MenuCategoryCreateInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    restaurant: RestaurantCreateNestedOneWithoutMenuCategoriesInput;
    products?: ProductCreateNestedManyWithoutMenuCategoryInput;
  };

  export type MenuCategoryUncheckedCreateInput = {
    id?: string;
    name: string;
    restaurantId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    products?: ProductUncheckedCreateNestedManyWithoutMenuCategoryInput;
  };

  export type MenuCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    restaurant?: RestaurantUpdateOneRequiredWithoutMenuCategoriesNestedInput;
    products?: ProductUpdateManyWithoutMenuCategoryNestedInput;
  };

  export type MenuCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    restaurantId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    products?: ProductUncheckedUpdateManyWithoutMenuCategoryNestedInput;
  };

  export type MenuCategoryCreateManyInput = {
    id?: string;
    name: string;
    restaurantId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type MenuCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MenuCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    restaurantId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProductCreateInput = {
    id?: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ingredients?: IngredientCreateNestedManyWithoutProductInput;
    orderProducts?: OrderProductCreateNestedManyWithoutProductInput;
    restaurant: RestaurantCreateNestedOneWithoutProductsInput;
    menuCategory: MenuCategoryCreateNestedOneWithoutProductsInput;
  };

  export type ProductUncheckedCreateInput = {
    id?: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    restaurantId: string;
    menuCategoryId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ingredients?: IngredientUncheckedCreateNestedManyWithoutProductInput;
    orderProducts?: OrderProductUncheckedCreateNestedManyWithoutProductInput;
  };

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    ingredients?: IngredientUpdateManyWithoutProductNestedInput;
    orderProducts?: OrderProductUpdateManyWithoutProductNestedInput;
    restaurant?: RestaurantUpdateOneRequiredWithoutProductsNestedInput;
    menuCategory?: MenuCategoryUpdateOneRequiredWithoutProductsNestedInput;
  };

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    restaurantId?: StringFieldUpdateOperationsInput | string;
    menuCategoryId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    ingredients?: IngredientUncheckedUpdateManyWithoutProductNestedInput;
    orderProducts?: OrderProductUncheckedUpdateManyWithoutProductNestedInput;
  };

  export type ProductCreateManyInput = {
    id?: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    restaurantId: string;
    menuCategoryId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    restaurantId?: StringFieldUpdateOperationsInput | string;
    menuCategoryId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type IngredientCreateInput = {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    product: ProductCreateNestedOneWithoutIngredientsInput;
  };

  export type IngredientUncheckedCreateInput = {
    id?: number;
    name: string;
    productId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type IngredientUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    product?: ProductUpdateOneRequiredWithoutIngredientsNestedInput;
  };

  export type IngredientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    productId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type IngredientCreateManyInput = {
    id?: number;
    name: string;
    productId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type IngredientUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type IngredientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    productId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrderCreateInput = {
    total: number;
    status: $Enums.OrderStatus;
    consumptionMethod: $Enums.ConsumptionMethod;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    restaurant: RestaurantCreateNestedOneWithoutOrdersInput;
    orderProducts?: OrderProductCreateNestedManyWithoutOrderInput;
  };

  export type OrderUncheckedCreateInput = {
    id?: number;
    total: number;
    status: $Enums.OrderStatus;
    consumptionMethod: $Enums.ConsumptionMethod;
    restaurantId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderProducts?: OrderProductUncheckedCreateNestedManyWithoutOrderInput;
  };

  export type OrderUpdateInput = {
    total?: FloatFieldUpdateOperationsInput | number;
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    consumptionMethod?:
      | EnumConsumptionMethodFieldUpdateOperationsInput
      | $Enums.ConsumptionMethod;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    restaurant?: RestaurantUpdateOneRequiredWithoutOrdersNestedInput;
    orderProducts?: OrderProductUpdateManyWithoutOrderNestedInput;
  };

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    total?: FloatFieldUpdateOperationsInput | number;
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    consumptionMethod?:
      | EnumConsumptionMethodFieldUpdateOperationsInput
      | $Enums.ConsumptionMethod;
    restaurantId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    orderProducts?: OrderProductUncheckedUpdateManyWithoutOrderNestedInput;
  };

  export type OrderCreateManyInput = {
    id?: number;
    total: number;
    status: $Enums.OrderStatus;
    consumptionMethod: $Enums.ConsumptionMethod;
    restaurantId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrderUpdateManyMutationInput = {
    total?: FloatFieldUpdateOperationsInput | number;
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    consumptionMethod?:
      | EnumConsumptionMethodFieldUpdateOperationsInput
      | $Enums.ConsumptionMethod;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    total?: FloatFieldUpdateOperationsInput | number;
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    consumptionMethod?:
      | EnumConsumptionMethodFieldUpdateOperationsInput
      | $Enums.ConsumptionMethod;
    restaurantId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrderProductCreateInput = {
    id?: string;
    quantity: number;
    price: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    product: ProductCreateNestedOneWithoutOrderProductsInput;
    order: OrderCreateNestedOneWithoutOrderProductsInput;
  };

  export type OrderProductUncheckedCreateInput = {
    id?: string;
    productId: string;
    orderId: number;
    quantity: number;
    price: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrderProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    price?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    product?: ProductUpdateOneRequiredWithoutOrderProductsNestedInput;
    order?: OrderUpdateOneRequiredWithoutOrderProductsNestedInput;
  };

  export type OrderProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    productId?: StringFieldUpdateOperationsInput | string;
    orderId?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    price?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrderProductCreateManyInput = {
    id?: string;
    productId: string;
    orderId: number;
    quantity: number;
    price: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrderProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    price?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrderProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    productId?: StringFieldUpdateOperationsInput | string;
    orderId?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    price?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type MenuCategoryListRelationFilter = {
    every?: MenuCategoryWhereInput;
    some?: MenuCategoryWhereInput;
    none?: MenuCategoryWhereInput;
  };

  export type ProductListRelationFilter = {
    every?: ProductWhereInput;
    some?: ProductWhereInput;
    none?: ProductWhereInput;
  };

  export type OrderListRelationFilter = {
    every?: OrderWhereInput;
    some?: OrderWhereInput;
    none?: OrderWhereInput;
  };

  export type MenuCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type RestaurantOrderByRelevanceInput = {
    fields:
      | RestaurantOrderByRelevanceFieldEnum
      | RestaurantOrderByRelevanceFieldEnum[];
    sort: SortOrder;
    search: string;
  };

  export type RestaurantCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    slug?: SortOrder;
    description?: SortOrder;
    avatarImageUrl?: SortOrder;
    coverImageUrl?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type RestaurantMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    slug?: SortOrder;
    description?: SortOrder;
    avatarImageUrl?: SortOrder;
    coverImageUrl?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type RestaurantMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    slug?: SortOrder;
    description?: SortOrder;
    avatarImageUrl?: SortOrder;
    coverImageUrl?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type RestaurantScalarRelationFilter = {
    is?: RestaurantWhereInput;
    isNot?: RestaurantWhereInput;
  };

  export type MenuCategoryOrderByRelevanceInput = {
    fields:
      | MenuCategoryOrderByRelevanceFieldEnum
      | MenuCategoryOrderByRelevanceFieldEnum[];
    sort: SortOrder;
    search: string;
  };

  export type MenuCategoryCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    restaurantId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type MenuCategoryMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    restaurantId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type MenuCategoryMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    restaurantId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type IngredientListRelationFilter = {
    every?: IngredientWhereInput;
    some?: IngredientWhereInput;
    none?: IngredientWhereInput;
  };

  export type OrderProductListRelationFilter = {
    every?: OrderProductWhereInput;
    some?: OrderProductWhereInput;
    none?: OrderProductWhereInput;
  };

  export type MenuCategoryScalarRelationFilter = {
    is?: MenuCategoryWhereInput;
    isNot?: MenuCategoryWhereInput;
  };

  export type IngredientOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type OrderProductOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type ProductOrderByRelevanceInput = {
    fields:
      | ProductOrderByRelevanceFieldEnum
      | ProductOrderByRelevanceFieldEnum[];
    sort: SortOrder;
    search: string;
  };

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    imageUrl?: SortOrder;
    restaurantId?: SortOrder;
    menuCategoryId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder;
  };

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    imageUrl?: SortOrder;
    restaurantId?: SortOrder;
    menuCategoryId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    price?: SortOrder;
    imageUrl?: SortOrder;
    restaurantId?: SortOrder;
    menuCategoryId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder;
  };

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput;
    isNot?: ProductWhereInput;
  };

  export type IngredientOrderByRelevanceInput = {
    fields:
      | IngredientOrderByRelevanceFieldEnum
      | IngredientOrderByRelevanceFieldEnum[];
    sort: SortOrder;
    search: string;
  };

  export type IngredientCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    productId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type IngredientAvgOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type IngredientMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    productId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type IngredientMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    productId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type IngredientSumOrderByAggregateInput = {
    id?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OrderStatus[];
    notIn?: $Enums.OrderStatus[];
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus;
  };

  export type EnumConsumptionMethodFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.ConsumptionMethod
      | EnumConsumptionMethodFieldRefInput<$PrismaModel>;
    in?: $Enums.ConsumptionMethod[];
    notIn?: $Enums.ConsumptionMethod[];
    not?:
      | NestedEnumConsumptionMethodFilter<$PrismaModel>
      | $Enums.ConsumptionMethod;
  };

  export type OrderOrderByRelevanceInput = {
    fields: OrderOrderByRelevanceFieldEnum | OrderOrderByRelevanceFieldEnum[];
    sort: SortOrder;
    search: string;
  };

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder;
    total?: SortOrder;
    status?: SortOrder;
    consumptionMethod?: SortOrder;
    restaurantId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder;
    total?: SortOrder;
  };

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder;
    total?: SortOrder;
    status?: SortOrder;
    consumptionMethod?: SortOrder;
    restaurantId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder;
    total?: SortOrder;
    status?: SortOrder;
    consumptionMethod?: SortOrder;
    restaurantId?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder;
    total?: SortOrder;
  };

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OrderStatus[];
    notIn?: $Enums.OrderStatus[];
    not?:
      | NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel>
      | $Enums.OrderStatus;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>;
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>;
  };

  export type EnumConsumptionMethodWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?:
        | $Enums.ConsumptionMethod
        | EnumConsumptionMethodFieldRefInput<$PrismaModel>;
      in?: $Enums.ConsumptionMethod[];
      notIn?: $Enums.ConsumptionMethod[];
      not?:
        | NestedEnumConsumptionMethodWithAggregatesFilter<$PrismaModel>
        | $Enums.ConsumptionMethod;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumConsumptionMethodFilter<$PrismaModel>;
      _max?: NestedEnumConsumptionMethodFilter<$PrismaModel>;
    };

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput;
    isNot?: OrderWhereInput;
  };

  export type OrderProductOrderByRelevanceInput = {
    fields:
      | OrderProductOrderByRelevanceFieldEnum
      | OrderProductOrderByRelevanceFieldEnum[];
    sort: SortOrder;
    search: string;
  };

  export type OrderProductCountOrderByAggregateInput = {
    id?: SortOrder;
    productId?: SortOrder;
    orderId?: SortOrder;
    quantity?: SortOrder;
    price?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type OrderProductAvgOrderByAggregateInput = {
    orderId?: SortOrder;
    quantity?: SortOrder;
    price?: SortOrder;
  };

  export type OrderProductMaxOrderByAggregateInput = {
    id?: SortOrder;
    productId?: SortOrder;
    orderId?: SortOrder;
    quantity?: SortOrder;
    price?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type OrderProductMinOrderByAggregateInput = {
    id?: SortOrder;
    productId?: SortOrder;
    orderId?: SortOrder;
    quantity?: SortOrder;
    price?: SortOrder;
    createdAt?: SortOrder;
    updatedAt?: SortOrder;
  };

  export type OrderProductSumOrderByAggregateInput = {
    orderId?: SortOrder;
    quantity?: SortOrder;
    price?: SortOrder;
  };

  export type MenuCategoryCreateNestedManyWithoutRestaurantInput = {
    create?:
      | XOR<
          MenuCategoryCreateWithoutRestaurantInput,
          MenuCategoryUncheckedCreateWithoutRestaurantInput
        >
      | MenuCategoryCreateWithoutRestaurantInput[]
      | MenuCategoryUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?:
      | MenuCategoryCreateOrConnectWithoutRestaurantInput
      | MenuCategoryCreateOrConnectWithoutRestaurantInput[];
    createMany?: MenuCategoryCreateManyRestaurantInputEnvelope;
    connect?: MenuCategoryWhereUniqueInput | MenuCategoryWhereUniqueInput[];
  };

  export type ProductCreateNestedManyWithoutRestaurantInput = {
    create?:
      | XOR<
          ProductCreateWithoutRestaurantInput,
          ProductUncheckedCreateWithoutRestaurantInput
        >
      | ProductCreateWithoutRestaurantInput[]
      | ProductUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?:
      | ProductCreateOrConnectWithoutRestaurantInput
      | ProductCreateOrConnectWithoutRestaurantInput[];
    createMany?: ProductCreateManyRestaurantInputEnvelope;
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
  };

  export type OrderCreateNestedManyWithoutRestaurantInput = {
    create?:
      | XOR<
          OrderCreateWithoutRestaurantInput,
          OrderUncheckedCreateWithoutRestaurantInput
        >
      | OrderCreateWithoutRestaurantInput[]
      | OrderUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?:
      | OrderCreateOrConnectWithoutRestaurantInput
      | OrderCreateOrConnectWithoutRestaurantInput[];
    createMany?: OrderCreateManyRestaurantInputEnvelope;
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
  };

  export type MenuCategoryUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?:
      | XOR<
          MenuCategoryCreateWithoutRestaurantInput,
          MenuCategoryUncheckedCreateWithoutRestaurantInput
        >
      | MenuCategoryCreateWithoutRestaurantInput[]
      | MenuCategoryUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?:
      | MenuCategoryCreateOrConnectWithoutRestaurantInput
      | MenuCategoryCreateOrConnectWithoutRestaurantInput[];
    createMany?: MenuCategoryCreateManyRestaurantInputEnvelope;
    connect?: MenuCategoryWhereUniqueInput | MenuCategoryWhereUniqueInput[];
  };

  export type ProductUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?:
      | XOR<
          ProductCreateWithoutRestaurantInput,
          ProductUncheckedCreateWithoutRestaurantInput
        >
      | ProductCreateWithoutRestaurantInput[]
      | ProductUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?:
      | ProductCreateOrConnectWithoutRestaurantInput
      | ProductCreateOrConnectWithoutRestaurantInput[];
    createMany?: ProductCreateManyRestaurantInputEnvelope;
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
  };

  export type OrderUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?:
      | XOR<
          OrderCreateWithoutRestaurantInput,
          OrderUncheckedCreateWithoutRestaurantInput
        >
      | OrderCreateWithoutRestaurantInput[]
      | OrderUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?:
      | OrderCreateOrConnectWithoutRestaurantInput
      | OrderCreateOrConnectWithoutRestaurantInput[];
    createMany?: OrderCreateManyRestaurantInputEnvelope;
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type MenuCategoryUpdateManyWithoutRestaurantNestedInput = {
    create?:
      | XOR<
          MenuCategoryCreateWithoutRestaurantInput,
          MenuCategoryUncheckedCreateWithoutRestaurantInput
        >
      | MenuCategoryCreateWithoutRestaurantInput[]
      | MenuCategoryUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?:
      | MenuCategoryCreateOrConnectWithoutRestaurantInput
      | MenuCategoryCreateOrConnectWithoutRestaurantInput[];
    upsert?:
      | MenuCategoryUpsertWithWhereUniqueWithoutRestaurantInput
      | MenuCategoryUpsertWithWhereUniqueWithoutRestaurantInput[];
    createMany?: MenuCategoryCreateManyRestaurantInputEnvelope;
    set?: MenuCategoryWhereUniqueInput | MenuCategoryWhereUniqueInput[];
    disconnect?: MenuCategoryWhereUniqueInput | MenuCategoryWhereUniqueInput[];
    delete?: MenuCategoryWhereUniqueInput | MenuCategoryWhereUniqueInput[];
    connect?: MenuCategoryWhereUniqueInput | MenuCategoryWhereUniqueInput[];
    update?:
      | MenuCategoryUpdateWithWhereUniqueWithoutRestaurantInput
      | MenuCategoryUpdateWithWhereUniqueWithoutRestaurantInput[];
    updateMany?:
      | MenuCategoryUpdateManyWithWhereWithoutRestaurantInput
      | MenuCategoryUpdateManyWithWhereWithoutRestaurantInput[];
    deleteMany?: MenuCategoryScalarWhereInput | MenuCategoryScalarWhereInput[];
  };

  export type ProductUpdateManyWithoutRestaurantNestedInput = {
    create?:
      | XOR<
          ProductCreateWithoutRestaurantInput,
          ProductUncheckedCreateWithoutRestaurantInput
        >
      | ProductCreateWithoutRestaurantInput[]
      | ProductUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?:
      | ProductCreateOrConnectWithoutRestaurantInput
      | ProductCreateOrConnectWithoutRestaurantInput[];
    upsert?:
      | ProductUpsertWithWhereUniqueWithoutRestaurantInput
      | ProductUpsertWithWhereUniqueWithoutRestaurantInput[];
    createMany?: ProductCreateManyRestaurantInputEnvelope;
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    update?:
      | ProductUpdateWithWhereUniqueWithoutRestaurantInput
      | ProductUpdateWithWhereUniqueWithoutRestaurantInput[];
    updateMany?:
      | ProductUpdateManyWithWhereWithoutRestaurantInput
      | ProductUpdateManyWithWhereWithoutRestaurantInput[];
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[];
  };

  export type OrderUpdateManyWithoutRestaurantNestedInput = {
    create?:
      | XOR<
          OrderCreateWithoutRestaurantInput,
          OrderUncheckedCreateWithoutRestaurantInput
        >
      | OrderCreateWithoutRestaurantInput[]
      | OrderUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?:
      | OrderCreateOrConnectWithoutRestaurantInput
      | OrderCreateOrConnectWithoutRestaurantInput[];
    upsert?:
      | OrderUpsertWithWhereUniqueWithoutRestaurantInput
      | OrderUpsertWithWhereUniqueWithoutRestaurantInput[];
    createMany?: OrderCreateManyRestaurantInputEnvelope;
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    update?:
      | OrderUpdateWithWhereUniqueWithoutRestaurantInput
      | OrderUpdateWithWhereUniqueWithoutRestaurantInput[];
    updateMany?:
      | OrderUpdateManyWithWhereWithoutRestaurantInput
      | OrderUpdateManyWithWhereWithoutRestaurantInput[];
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[];
  };

  export type MenuCategoryUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?:
      | XOR<
          MenuCategoryCreateWithoutRestaurantInput,
          MenuCategoryUncheckedCreateWithoutRestaurantInput
        >
      | MenuCategoryCreateWithoutRestaurantInput[]
      | MenuCategoryUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?:
      | MenuCategoryCreateOrConnectWithoutRestaurantInput
      | MenuCategoryCreateOrConnectWithoutRestaurantInput[];
    upsert?:
      | MenuCategoryUpsertWithWhereUniqueWithoutRestaurantInput
      | MenuCategoryUpsertWithWhereUniqueWithoutRestaurantInput[];
    createMany?: MenuCategoryCreateManyRestaurantInputEnvelope;
    set?: MenuCategoryWhereUniqueInput | MenuCategoryWhereUniqueInput[];
    disconnect?: MenuCategoryWhereUniqueInput | MenuCategoryWhereUniqueInput[];
    delete?: MenuCategoryWhereUniqueInput | MenuCategoryWhereUniqueInput[];
    connect?: MenuCategoryWhereUniqueInput | MenuCategoryWhereUniqueInput[];
    update?:
      | MenuCategoryUpdateWithWhereUniqueWithoutRestaurantInput
      | MenuCategoryUpdateWithWhereUniqueWithoutRestaurantInput[];
    updateMany?:
      | MenuCategoryUpdateManyWithWhereWithoutRestaurantInput
      | MenuCategoryUpdateManyWithWhereWithoutRestaurantInput[];
    deleteMany?: MenuCategoryScalarWhereInput | MenuCategoryScalarWhereInput[];
  };

  export type ProductUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?:
      | XOR<
          ProductCreateWithoutRestaurantInput,
          ProductUncheckedCreateWithoutRestaurantInput
        >
      | ProductCreateWithoutRestaurantInput[]
      | ProductUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?:
      | ProductCreateOrConnectWithoutRestaurantInput
      | ProductCreateOrConnectWithoutRestaurantInput[];
    upsert?:
      | ProductUpsertWithWhereUniqueWithoutRestaurantInput
      | ProductUpsertWithWhereUniqueWithoutRestaurantInput[];
    createMany?: ProductCreateManyRestaurantInputEnvelope;
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    update?:
      | ProductUpdateWithWhereUniqueWithoutRestaurantInput
      | ProductUpdateWithWhereUniqueWithoutRestaurantInput[];
    updateMany?:
      | ProductUpdateManyWithWhereWithoutRestaurantInput
      | ProductUpdateManyWithWhereWithoutRestaurantInput[];
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[];
  };

  export type OrderUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?:
      | XOR<
          OrderCreateWithoutRestaurantInput,
          OrderUncheckedCreateWithoutRestaurantInput
        >
      | OrderCreateWithoutRestaurantInput[]
      | OrderUncheckedCreateWithoutRestaurantInput[];
    connectOrCreate?:
      | OrderCreateOrConnectWithoutRestaurantInput
      | OrderCreateOrConnectWithoutRestaurantInput[];
    upsert?:
      | OrderUpsertWithWhereUniqueWithoutRestaurantInput
      | OrderUpsertWithWhereUniqueWithoutRestaurantInput[];
    createMany?: OrderCreateManyRestaurantInputEnvelope;
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[];
    update?:
      | OrderUpdateWithWhereUniqueWithoutRestaurantInput
      | OrderUpdateWithWhereUniqueWithoutRestaurantInput[];
    updateMany?:
      | OrderUpdateManyWithWhereWithoutRestaurantInput
      | OrderUpdateManyWithWhereWithoutRestaurantInput[];
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[];
  };

  export type RestaurantCreateNestedOneWithoutMenuCategoriesInput = {
    create?: XOR<
      RestaurantCreateWithoutMenuCategoriesInput,
      RestaurantUncheckedCreateWithoutMenuCategoriesInput
    >;
    connectOrCreate?: RestaurantCreateOrConnectWithoutMenuCategoriesInput;
    connect?: RestaurantWhereUniqueInput;
  };

  export type ProductCreateNestedManyWithoutMenuCategoryInput = {
    create?:
      | XOR<
          ProductCreateWithoutMenuCategoryInput,
          ProductUncheckedCreateWithoutMenuCategoryInput
        >
      | ProductCreateWithoutMenuCategoryInput[]
      | ProductUncheckedCreateWithoutMenuCategoryInput[];
    connectOrCreate?:
      | ProductCreateOrConnectWithoutMenuCategoryInput
      | ProductCreateOrConnectWithoutMenuCategoryInput[];
    createMany?: ProductCreateManyMenuCategoryInputEnvelope;
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
  };

  export type ProductUncheckedCreateNestedManyWithoutMenuCategoryInput = {
    create?:
      | XOR<
          ProductCreateWithoutMenuCategoryInput,
          ProductUncheckedCreateWithoutMenuCategoryInput
        >
      | ProductCreateWithoutMenuCategoryInput[]
      | ProductUncheckedCreateWithoutMenuCategoryInput[];
    connectOrCreate?:
      | ProductCreateOrConnectWithoutMenuCategoryInput
      | ProductCreateOrConnectWithoutMenuCategoryInput[];
    createMany?: ProductCreateManyMenuCategoryInputEnvelope;
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
  };

  export type RestaurantUpdateOneRequiredWithoutMenuCategoriesNestedInput = {
    create?: XOR<
      RestaurantCreateWithoutMenuCategoriesInput,
      RestaurantUncheckedCreateWithoutMenuCategoriesInput
    >;
    connectOrCreate?: RestaurantCreateOrConnectWithoutMenuCategoriesInput;
    upsert?: RestaurantUpsertWithoutMenuCategoriesInput;
    connect?: RestaurantWhereUniqueInput;
    update?: XOR<
      XOR<
        RestaurantUpdateToOneWithWhereWithoutMenuCategoriesInput,
        RestaurantUpdateWithoutMenuCategoriesInput
      >,
      RestaurantUncheckedUpdateWithoutMenuCategoriesInput
    >;
  };

  export type ProductUpdateManyWithoutMenuCategoryNestedInput = {
    create?:
      | XOR<
          ProductCreateWithoutMenuCategoryInput,
          ProductUncheckedCreateWithoutMenuCategoryInput
        >
      | ProductCreateWithoutMenuCategoryInput[]
      | ProductUncheckedCreateWithoutMenuCategoryInput[];
    connectOrCreate?:
      | ProductCreateOrConnectWithoutMenuCategoryInput
      | ProductCreateOrConnectWithoutMenuCategoryInput[];
    upsert?:
      | ProductUpsertWithWhereUniqueWithoutMenuCategoryInput
      | ProductUpsertWithWhereUniqueWithoutMenuCategoryInput[];
    createMany?: ProductCreateManyMenuCategoryInputEnvelope;
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    update?:
      | ProductUpdateWithWhereUniqueWithoutMenuCategoryInput
      | ProductUpdateWithWhereUniqueWithoutMenuCategoryInput[];
    updateMany?:
      | ProductUpdateManyWithWhereWithoutMenuCategoryInput
      | ProductUpdateManyWithWhereWithoutMenuCategoryInput[];
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[];
  };

  export type ProductUncheckedUpdateManyWithoutMenuCategoryNestedInput = {
    create?:
      | XOR<
          ProductCreateWithoutMenuCategoryInput,
          ProductUncheckedCreateWithoutMenuCategoryInput
        >
      | ProductCreateWithoutMenuCategoryInput[]
      | ProductUncheckedCreateWithoutMenuCategoryInput[];
    connectOrCreate?:
      | ProductCreateOrConnectWithoutMenuCategoryInput
      | ProductCreateOrConnectWithoutMenuCategoryInput[];
    upsert?:
      | ProductUpsertWithWhereUniqueWithoutMenuCategoryInput
      | ProductUpsertWithWhereUniqueWithoutMenuCategoryInput[];
    createMany?: ProductCreateManyMenuCategoryInputEnvelope;
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[];
    update?:
      | ProductUpdateWithWhereUniqueWithoutMenuCategoryInput
      | ProductUpdateWithWhereUniqueWithoutMenuCategoryInput[];
    updateMany?:
      | ProductUpdateManyWithWhereWithoutMenuCategoryInput
      | ProductUpdateManyWithWhereWithoutMenuCategoryInput[];
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[];
  };

  export type IngredientCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<
          IngredientCreateWithoutProductInput,
          IngredientUncheckedCreateWithoutProductInput
        >
      | IngredientCreateWithoutProductInput[]
      | IngredientUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | IngredientCreateOrConnectWithoutProductInput
      | IngredientCreateOrConnectWithoutProductInput[];
    createMany?: IngredientCreateManyProductInputEnvelope;
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[];
  };

  export type OrderProductCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<
          OrderProductCreateWithoutProductInput,
          OrderProductUncheckedCreateWithoutProductInput
        >
      | OrderProductCreateWithoutProductInput[]
      | OrderProductUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | OrderProductCreateOrConnectWithoutProductInput
      | OrderProductCreateOrConnectWithoutProductInput[];
    createMany?: OrderProductCreateManyProductInputEnvelope;
    connect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[];
  };

  export type RestaurantCreateNestedOneWithoutProductsInput = {
    create?: XOR<
      RestaurantCreateWithoutProductsInput,
      RestaurantUncheckedCreateWithoutProductsInput
    >;
    connectOrCreate?: RestaurantCreateOrConnectWithoutProductsInput;
    connect?: RestaurantWhereUniqueInput;
  };

  export type MenuCategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<
      MenuCategoryCreateWithoutProductsInput,
      MenuCategoryUncheckedCreateWithoutProductsInput
    >;
    connectOrCreate?: MenuCategoryCreateOrConnectWithoutProductsInput;
    connect?: MenuCategoryWhereUniqueInput;
  };

  export type IngredientUncheckedCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<
          IngredientCreateWithoutProductInput,
          IngredientUncheckedCreateWithoutProductInput
        >
      | IngredientCreateWithoutProductInput[]
      | IngredientUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | IngredientCreateOrConnectWithoutProductInput
      | IngredientCreateOrConnectWithoutProductInput[];
    createMany?: IngredientCreateManyProductInputEnvelope;
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[];
  };

  export type OrderProductUncheckedCreateNestedManyWithoutProductInput = {
    create?:
      | XOR<
          OrderProductCreateWithoutProductInput,
          OrderProductUncheckedCreateWithoutProductInput
        >
      | OrderProductCreateWithoutProductInput[]
      | OrderProductUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | OrderProductCreateOrConnectWithoutProductInput
      | OrderProductCreateOrConnectWithoutProductInput[];
    createMany?: OrderProductCreateManyProductInputEnvelope;
    connect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[];
  };

  export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type IngredientUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<
          IngredientCreateWithoutProductInput,
          IngredientUncheckedCreateWithoutProductInput
        >
      | IngredientCreateWithoutProductInput[]
      | IngredientUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | IngredientCreateOrConnectWithoutProductInput
      | IngredientCreateOrConnectWithoutProductInput[];
    upsert?:
      | IngredientUpsertWithWhereUniqueWithoutProductInput
      | IngredientUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: IngredientCreateManyProductInputEnvelope;
    set?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[];
    disconnect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[];
    delete?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[];
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[];
    update?:
      | IngredientUpdateWithWhereUniqueWithoutProductInput
      | IngredientUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?:
      | IngredientUpdateManyWithWhereWithoutProductInput
      | IngredientUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: IngredientScalarWhereInput | IngredientScalarWhereInput[];
  };

  export type OrderProductUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<
          OrderProductCreateWithoutProductInput,
          OrderProductUncheckedCreateWithoutProductInput
        >
      | OrderProductCreateWithoutProductInput[]
      | OrderProductUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | OrderProductCreateOrConnectWithoutProductInput
      | OrderProductCreateOrConnectWithoutProductInput[];
    upsert?:
      | OrderProductUpsertWithWhereUniqueWithoutProductInput
      | OrderProductUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: OrderProductCreateManyProductInputEnvelope;
    set?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[];
    disconnect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[];
    delete?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[];
    connect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[];
    update?:
      | OrderProductUpdateWithWhereUniqueWithoutProductInput
      | OrderProductUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?:
      | OrderProductUpdateManyWithWhereWithoutProductInput
      | OrderProductUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: OrderProductScalarWhereInput | OrderProductScalarWhereInput[];
  };

  export type RestaurantUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<
      RestaurantCreateWithoutProductsInput,
      RestaurantUncheckedCreateWithoutProductsInput
    >;
    connectOrCreate?: RestaurantCreateOrConnectWithoutProductsInput;
    upsert?: RestaurantUpsertWithoutProductsInput;
    connect?: RestaurantWhereUniqueInput;
    update?: XOR<
      XOR<
        RestaurantUpdateToOneWithWhereWithoutProductsInput,
        RestaurantUpdateWithoutProductsInput
      >,
      RestaurantUncheckedUpdateWithoutProductsInput
    >;
  };

  export type MenuCategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<
      MenuCategoryCreateWithoutProductsInput,
      MenuCategoryUncheckedCreateWithoutProductsInput
    >;
    connectOrCreate?: MenuCategoryCreateOrConnectWithoutProductsInput;
    upsert?: MenuCategoryUpsertWithoutProductsInput;
    connect?: MenuCategoryWhereUniqueInput;
    update?: XOR<
      XOR<
        MenuCategoryUpdateToOneWithWhereWithoutProductsInput,
        MenuCategoryUpdateWithoutProductsInput
      >,
      MenuCategoryUncheckedUpdateWithoutProductsInput
    >;
  };

  export type IngredientUncheckedUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<
          IngredientCreateWithoutProductInput,
          IngredientUncheckedCreateWithoutProductInput
        >
      | IngredientCreateWithoutProductInput[]
      | IngredientUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | IngredientCreateOrConnectWithoutProductInput
      | IngredientCreateOrConnectWithoutProductInput[];
    upsert?:
      | IngredientUpsertWithWhereUniqueWithoutProductInput
      | IngredientUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: IngredientCreateManyProductInputEnvelope;
    set?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[];
    disconnect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[];
    delete?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[];
    connect?: IngredientWhereUniqueInput | IngredientWhereUniqueInput[];
    update?:
      | IngredientUpdateWithWhereUniqueWithoutProductInput
      | IngredientUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?:
      | IngredientUpdateManyWithWhereWithoutProductInput
      | IngredientUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: IngredientScalarWhereInput | IngredientScalarWhereInput[];
  };

  export type OrderProductUncheckedUpdateManyWithoutProductNestedInput = {
    create?:
      | XOR<
          OrderProductCreateWithoutProductInput,
          OrderProductUncheckedCreateWithoutProductInput
        >
      | OrderProductCreateWithoutProductInput[]
      | OrderProductUncheckedCreateWithoutProductInput[];
    connectOrCreate?:
      | OrderProductCreateOrConnectWithoutProductInput
      | OrderProductCreateOrConnectWithoutProductInput[];
    upsert?:
      | OrderProductUpsertWithWhereUniqueWithoutProductInput
      | OrderProductUpsertWithWhereUniqueWithoutProductInput[];
    createMany?: OrderProductCreateManyProductInputEnvelope;
    set?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[];
    disconnect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[];
    delete?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[];
    connect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[];
    update?:
      | OrderProductUpdateWithWhereUniqueWithoutProductInput
      | OrderProductUpdateWithWhereUniqueWithoutProductInput[];
    updateMany?:
      | OrderProductUpdateManyWithWhereWithoutProductInput
      | OrderProductUpdateManyWithWhereWithoutProductInput[];
    deleteMany?: OrderProductScalarWhereInput | OrderProductScalarWhereInput[];
  };

  export type ProductCreateNestedOneWithoutIngredientsInput = {
    create?: XOR<
      ProductCreateWithoutIngredientsInput,
      ProductUncheckedCreateWithoutIngredientsInput
    >;
    connectOrCreate?: ProductCreateOrConnectWithoutIngredientsInput;
    connect?: ProductWhereUniqueInput;
  };

  export type ProductUpdateOneRequiredWithoutIngredientsNestedInput = {
    create?: XOR<
      ProductCreateWithoutIngredientsInput,
      ProductUncheckedCreateWithoutIngredientsInput
    >;
    connectOrCreate?: ProductCreateOrConnectWithoutIngredientsInput;
    upsert?: ProductUpsertWithoutIngredientsInput;
    connect?: ProductWhereUniqueInput;
    update?: XOR<
      XOR<
        ProductUpdateToOneWithWhereWithoutIngredientsInput,
        ProductUpdateWithoutIngredientsInput
      >,
      ProductUncheckedUpdateWithoutIngredientsInput
    >;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type RestaurantCreateNestedOneWithoutOrdersInput = {
    create?: XOR<
      RestaurantCreateWithoutOrdersInput,
      RestaurantUncheckedCreateWithoutOrdersInput
    >;
    connectOrCreate?: RestaurantCreateOrConnectWithoutOrdersInput;
    connect?: RestaurantWhereUniqueInput;
  };

  export type OrderProductCreateNestedManyWithoutOrderInput = {
    create?:
      | XOR<
          OrderProductCreateWithoutOrderInput,
          OrderProductUncheckedCreateWithoutOrderInput
        >
      | OrderProductCreateWithoutOrderInput[]
      | OrderProductUncheckedCreateWithoutOrderInput[];
    connectOrCreate?:
      | OrderProductCreateOrConnectWithoutOrderInput
      | OrderProductCreateOrConnectWithoutOrderInput[];
    createMany?: OrderProductCreateManyOrderInputEnvelope;
    connect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[];
  };

  export type OrderProductUncheckedCreateNestedManyWithoutOrderInput = {
    create?:
      | XOR<
          OrderProductCreateWithoutOrderInput,
          OrderProductUncheckedCreateWithoutOrderInput
        >
      | OrderProductCreateWithoutOrderInput[]
      | OrderProductUncheckedCreateWithoutOrderInput[];
    connectOrCreate?:
      | OrderProductCreateOrConnectWithoutOrderInput
      | OrderProductCreateOrConnectWithoutOrderInput[];
    createMany?: OrderProductCreateManyOrderInputEnvelope;
    connect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[];
  };

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus;
  };

  export type EnumConsumptionMethodFieldUpdateOperationsInput = {
    set?: $Enums.ConsumptionMethod;
  };

  export type RestaurantUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<
      RestaurantCreateWithoutOrdersInput,
      RestaurantUncheckedCreateWithoutOrdersInput
    >;
    connectOrCreate?: RestaurantCreateOrConnectWithoutOrdersInput;
    upsert?: RestaurantUpsertWithoutOrdersInput;
    connect?: RestaurantWhereUniqueInput;
    update?: XOR<
      XOR<
        RestaurantUpdateToOneWithWhereWithoutOrdersInput,
        RestaurantUpdateWithoutOrdersInput
      >,
      RestaurantUncheckedUpdateWithoutOrdersInput
    >;
  };

  export type OrderProductUpdateManyWithoutOrderNestedInput = {
    create?:
      | XOR<
          OrderProductCreateWithoutOrderInput,
          OrderProductUncheckedCreateWithoutOrderInput
        >
      | OrderProductCreateWithoutOrderInput[]
      | OrderProductUncheckedCreateWithoutOrderInput[];
    connectOrCreate?:
      | OrderProductCreateOrConnectWithoutOrderInput
      | OrderProductCreateOrConnectWithoutOrderInput[];
    upsert?:
      | OrderProductUpsertWithWhereUniqueWithoutOrderInput
      | OrderProductUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: OrderProductCreateManyOrderInputEnvelope;
    set?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[];
    disconnect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[];
    delete?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[];
    connect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[];
    update?:
      | OrderProductUpdateWithWhereUniqueWithoutOrderInput
      | OrderProductUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?:
      | OrderProductUpdateManyWithWhereWithoutOrderInput
      | OrderProductUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: OrderProductScalarWhereInput | OrderProductScalarWhereInput[];
  };

  export type OrderProductUncheckedUpdateManyWithoutOrderNestedInput = {
    create?:
      | XOR<
          OrderProductCreateWithoutOrderInput,
          OrderProductUncheckedCreateWithoutOrderInput
        >
      | OrderProductCreateWithoutOrderInput[]
      | OrderProductUncheckedCreateWithoutOrderInput[];
    connectOrCreate?:
      | OrderProductCreateOrConnectWithoutOrderInput
      | OrderProductCreateOrConnectWithoutOrderInput[];
    upsert?:
      | OrderProductUpsertWithWhereUniqueWithoutOrderInput
      | OrderProductUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: OrderProductCreateManyOrderInputEnvelope;
    set?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[];
    disconnect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[];
    delete?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[];
    connect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[];
    update?:
      | OrderProductUpdateWithWhereUniqueWithoutOrderInput
      | OrderProductUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?:
      | OrderProductUpdateManyWithWhereWithoutOrderInput
      | OrderProductUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: OrderProductScalarWhereInput | OrderProductScalarWhereInput[];
  };

  export type ProductCreateNestedOneWithoutOrderProductsInput = {
    create?: XOR<
      ProductCreateWithoutOrderProductsInput,
      ProductUncheckedCreateWithoutOrderProductsInput
    >;
    connectOrCreate?: ProductCreateOrConnectWithoutOrderProductsInput;
    connect?: ProductWhereUniqueInput;
  };

  export type OrderCreateNestedOneWithoutOrderProductsInput = {
    create?: XOR<
      OrderCreateWithoutOrderProductsInput,
      OrderUncheckedCreateWithoutOrderProductsInput
    >;
    connectOrCreate?: OrderCreateOrConnectWithoutOrderProductsInput;
    connect?: OrderWhereUniqueInput;
  };

  export type ProductUpdateOneRequiredWithoutOrderProductsNestedInput = {
    create?: XOR<
      ProductCreateWithoutOrderProductsInput,
      ProductUncheckedCreateWithoutOrderProductsInput
    >;
    connectOrCreate?: ProductCreateOrConnectWithoutOrderProductsInput;
    upsert?: ProductUpsertWithoutOrderProductsInput;
    connect?: ProductWhereUniqueInput;
    update?: XOR<
      XOR<
        ProductUpdateToOneWithWhereWithoutOrderProductsInput,
        ProductUpdateWithoutOrderProductsInput
      >,
      ProductUncheckedUpdateWithoutOrderProductsInput
    >;
  };

  export type OrderUpdateOneRequiredWithoutOrderProductsNestedInput = {
    create?: XOR<
      OrderCreateWithoutOrderProductsInput,
      OrderUncheckedCreateWithoutOrderProductsInput
    >;
    connectOrCreate?: OrderCreateOrConnectWithoutOrderProductsInput;
    upsert?: OrderUpsertWithoutOrderProductsInput;
    connect?: OrderWhereUniqueInput;
    update?: XOR<
      XOR<
        OrderUpdateToOneWithWhereWithoutOrderProductsInput,
        OrderUpdateWithoutOrderProductsInput
      >,
      OrderUncheckedUpdateWithoutOrderProductsInput
    >;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    search?: string;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.OrderStatus[];
    notIn?: $Enums.OrderStatus[];
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus;
  };

  export type NestedEnumConsumptionMethodFilter<$PrismaModel = never> = {
    equals?:
      | $Enums.ConsumptionMethod
      | EnumConsumptionMethodFieldRefInput<$PrismaModel>;
    in?: $Enums.ConsumptionMethod[];
    notIn?: $Enums.ConsumptionMethod[];
    not?:
      | NestedEnumConsumptionMethodFilter<$PrismaModel>
      | $Enums.ConsumptionMethod;
  };

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> =
    {
      equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>;
      in?: $Enums.OrderStatus[];
      notIn?: $Enums.OrderStatus[];
      not?:
        | NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel>
        | $Enums.OrderStatus;
      _count?: NestedIntFilter<$PrismaModel>;
      _min?: NestedEnumOrderStatusFilter<$PrismaModel>;
      _max?: NestedEnumOrderStatusFilter<$PrismaModel>;
    };

  export type NestedEnumConsumptionMethodWithAggregatesFilter<
    $PrismaModel = never,
  > = {
    equals?:
      | $Enums.ConsumptionMethod
      | EnumConsumptionMethodFieldRefInput<$PrismaModel>;
    in?: $Enums.ConsumptionMethod[];
    notIn?: $Enums.ConsumptionMethod[];
    not?:
      | NestedEnumConsumptionMethodWithAggregatesFilter<$PrismaModel>
      | $Enums.ConsumptionMethod;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedEnumConsumptionMethodFilter<$PrismaModel>;
    _max?: NestedEnumConsumptionMethodFilter<$PrismaModel>;
  };

  export type MenuCategoryCreateWithoutRestaurantInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    products?: ProductCreateNestedManyWithoutMenuCategoryInput;
  };

  export type MenuCategoryUncheckedCreateWithoutRestaurantInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    products?: ProductUncheckedCreateNestedManyWithoutMenuCategoryInput;
  };

  export type MenuCategoryCreateOrConnectWithoutRestaurantInput = {
    where: MenuCategoryWhereUniqueInput;
    create: XOR<
      MenuCategoryCreateWithoutRestaurantInput,
      MenuCategoryUncheckedCreateWithoutRestaurantInput
    >;
  };

  export type MenuCategoryCreateManyRestaurantInputEnvelope = {
    data:
      | MenuCategoryCreateManyRestaurantInput
      | MenuCategoryCreateManyRestaurantInput[];
    skipDuplicates?: boolean;
  };

  export type ProductCreateWithoutRestaurantInput = {
    id?: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ingredients?: IngredientCreateNestedManyWithoutProductInput;
    orderProducts?: OrderProductCreateNestedManyWithoutProductInput;
    menuCategory: MenuCategoryCreateNestedOneWithoutProductsInput;
  };

  export type ProductUncheckedCreateWithoutRestaurantInput = {
    id?: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    menuCategoryId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ingredients?: IngredientUncheckedCreateNestedManyWithoutProductInput;
    orderProducts?: OrderProductUncheckedCreateNestedManyWithoutProductInput;
  };

  export type ProductCreateOrConnectWithoutRestaurantInput = {
    where: ProductWhereUniqueInput;
    create: XOR<
      ProductCreateWithoutRestaurantInput,
      ProductUncheckedCreateWithoutRestaurantInput
    >;
  };

  export type ProductCreateManyRestaurantInputEnvelope = {
    data: ProductCreateManyRestaurantInput | ProductCreateManyRestaurantInput[];
    skipDuplicates?: boolean;
  };

  export type OrderCreateWithoutRestaurantInput = {
    total: number;
    status: $Enums.OrderStatus;
    consumptionMethod: $Enums.ConsumptionMethod;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderProducts?: OrderProductCreateNestedManyWithoutOrderInput;
  };

  export type OrderUncheckedCreateWithoutRestaurantInput = {
    id?: number;
    total: number;
    status: $Enums.OrderStatus;
    consumptionMethod: $Enums.ConsumptionMethod;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderProducts?: OrderProductUncheckedCreateNestedManyWithoutOrderInput;
  };

  export type OrderCreateOrConnectWithoutRestaurantInput = {
    where: OrderWhereUniqueInput;
    create: XOR<
      OrderCreateWithoutRestaurantInput,
      OrderUncheckedCreateWithoutRestaurantInput
    >;
  };

  export type OrderCreateManyRestaurantInputEnvelope = {
    data: OrderCreateManyRestaurantInput | OrderCreateManyRestaurantInput[];
    skipDuplicates?: boolean;
  };

  export type MenuCategoryUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: MenuCategoryWhereUniqueInput;
    update: XOR<
      MenuCategoryUpdateWithoutRestaurantInput,
      MenuCategoryUncheckedUpdateWithoutRestaurantInput
    >;
    create: XOR<
      MenuCategoryCreateWithoutRestaurantInput,
      MenuCategoryUncheckedCreateWithoutRestaurantInput
    >;
  };

  export type MenuCategoryUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: MenuCategoryWhereUniqueInput;
    data: XOR<
      MenuCategoryUpdateWithoutRestaurantInput,
      MenuCategoryUncheckedUpdateWithoutRestaurantInput
    >;
  };

  export type MenuCategoryUpdateManyWithWhereWithoutRestaurantInput = {
    where: MenuCategoryScalarWhereInput;
    data: XOR<
      MenuCategoryUpdateManyMutationInput,
      MenuCategoryUncheckedUpdateManyWithoutRestaurantInput
    >;
  };

  export type MenuCategoryScalarWhereInput = {
    AND?: MenuCategoryScalarWhereInput | MenuCategoryScalarWhereInput[];
    OR?: MenuCategoryScalarWhereInput[];
    NOT?: MenuCategoryScalarWhereInput | MenuCategoryScalarWhereInput[];
    id?: StringFilter<"MenuCategory"> | string;
    name?: StringFilter<"MenuCategory"> | string;
    restaurantId?: StringFilter<"MenuCategory"> | string;
    createdAt?: DateTimeFilter<"MenuCategory"> | Date | string;
    updatedAt?: DateTimeFilter<"MenuCategory"> | Date | string;
  };

  export type ProductUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: ProductWhereUniqueInput;
    update: XOR<
      ProductUpdateWithoutRestaurantInput,
      ProductUncheckedUpdateWithoutRestaurantInput
    >;
    create: XOR<
      ProductCreateWithoutRestaurantInput,
      ProductUncheckedCreateWithoutRestaurantInput
    >;
  };

  export type ProductUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: ProductWhereUniqueInput;
    data: XOR<
      ProductUpdateWithoutRestaurantInput,
      ProductUncheckedUpdateWithoutRestaurantInput
    >;
  };

  export type ProductUpdateManyWithWhereWithoutRestaurantInput = {
    where: ProductScalarWhereInput;
    data: XOR<
      ProductUpdateManyMutationInput,
      ProductUncheckedUpdateManyWithoutRestaurantInput
    >;
  };

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[];
    OR?: ProductScalarWhereInput[];
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[];
    id?: StringFilter<"Product"> | string;
    name?: StringFilter<"Product"> | string;
    description?: StringFilter<"Product"> | string;
    price?: FloatFilter<"Product"> | number;
    imageUrl?: StringFilter<"Product"> | string;
    restaurantId?: StringFilter<"Product"> | string;
    menuCategoryId?: StringFilter<"Product"> | string;
    createdAt?: DateTimeFilter<"Product"> | Date | string;
    updatedAt?: DateTimeFilter<"Product"> | Date | string;
  };

  export type OrderUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: OrderWhereUniqueInput;
    update: XOR<
      OrderUpdateWithoutRestaurantInput,
      OrderUncheckedUpdateWithoutRestaurantInput
    >;
    create: XOR<
      OrderCreateWithoutRestaurantInput,
      OrderUncheckedCreateWithoutRestaurantInput
    >;
  };

  export type OrderUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: OrderWhereUniqueInput;
    data: XOR<
      OrderUpdateWithoutRestaurantInput,
      OrderUncheckedUpdateWithoutRestaurantInput
    >;
  };

  export type OrderUpdateManyWithWhereWithoutRestaurantInput = {
    where: OrderScalarWhereInput;
    data: XOR<
      OrderUpdateManyMutationInput,
      OrderUncheckedUpdateManyWithoutRestaurantInput
    >;
  };

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[];
    OR?: OrderScalarWhereInput[];
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[];
    id?: IntFilter<"Order"> | number;
    total?: FloatFilter<"Order"> | number;
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus;
    consumptionMethod?:
      | EnumConsumptionMethodFilter<"Order">
      | $Enums.ConsumptionMethod;
    restaurantId?: StringFilter<"Order"> | string;
    createdAt?: DateTimeFilter<"Order"> | Date | string;
    updatedAt?: DateTimeFilter<"Order"> | Date | string;
  };

  export type RestaurantCreateWithoutMenuCategoriesInput = {
    id?: string;
    name: string;
    slug: string;
    description: string;
    avatarImageUrl: string;
    coverImageUrl: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    products?: ProductCreateNestedManyWithoutRestaurantInput;
    orders?: OrderCreateNestedManyWithoutRestaurantInput;
  };

  export type RestaurantUncheckedCreateWithoutMenuCategoriesInput = {
    id?: string;
    name: string;
    slug: string;
    description: string;
    avatarImageUrl: string;
    coverImageUrl: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    products?: ProductUncheckedCreateNestedManyWithoutRestaurantInput;
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput;
  };

  export type RestaurantCreateOrConnectWithoutMenuCategoriesInput = {
    where: RestaurantWhereUniqueInput;
    create: XOR<
      RestaurantCreateWithoutMenuCategoriesInput,
      RestaurantUncheckedCreateWithoutMenuCategoriesInput
    >;
  };

  export type ProductCreateWithoutMenuCategoryInput = {
    id?: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ingredients?: IngredientCreateNestedManyWithoutProductInput;
    orderProducts?: OrderProductCreateNestedManyWithoutProductInput;
    restaurant: RestaurantCreateNestedOneWithoutProductsInput;
  };

  export type ProductUncheckedCreateWithoutMenuCategoryInput = {
    id?: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    restaurantId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ingredients?: IngredientUncheckedCreateNestedManyWithoutProductInput;
    orderProducts?: OrderProductUncheckedCreateNestedManyWithoutProductInput;
  };

  export type ProductCreateOrConnectWithoutMenuCategoryInput = {
    where: ProductWhereUniqueInput;
    create: XOR<
      ProductCreateWithoutMenuCategoryInput,
      ProductUncheckedCreateWithoutMenuCategoryInput
    >;
  };

  export type ProductCreateManyMenuCategoryInputEnvelope = {
    data:
      | ProductCreateManyMenuCategoryInput
      | ProductCreateManyMenuCategoryInput[];
    skipDuplicates?: boolean;
  };

  export type RestaurantUpsertWithoutMenuCategoriesInput = {
    update: XOR<
      RestaurantUpdateWithoutMenuCategoriesInput,
      RestaurantUncheckedUpdateWithoutMenuCategoriesInput
    >;
    create: XOR<
      RestaurantCreateWithoutMenuCategoriesInput,
      RestaurantUncheckedCreateWithoutMenuCategoriesInput
    >;
    where?: RestaurantWhereInput;
  };

  export type RestaurantUpdateToOneWithWhereWithoutMenuCategoriesInput = {
    where?: RestaurantWhereInput;
    data: XOR<
      RestaurantUpdateWithoutMenuCategoriesInput,
      RestaurantUncheckedUpdateWithoutMenuCategoriesInput
    >;
  };

  export type RestaurantUpdateWithoutMenuCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    avatarImageUrl?: StringFieldUpdateOperationsInput | string;
    coverImageUrl?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    products?: ProductUpdateManyWithoutRestaurantNestedInput;
    orders?: OrderUpdateManyWithoutRestaurantNestedInput;
  };

  export type RestaurantUncheckedUpdateWithoutMenuCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    avatarImageUrl?: StringFieldUpdateOperationsInput | string;
    coverImageUrl?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    products?: ProductUncheckedUpdateManyWithoutRestaurantNestedInput;
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput;
  };

  export type ProductUpsertWithWhereUniqueWithoutMenuCategoryInput = {
    where: ProductWhereUniqueInput;
    update: XOR<
      ProductUpdateWithoutMenuCategoryInput,
      ProductUncheckedUpdateWithoutMenuCategoryInput
    >;
    create: XOR<
      ProductCreateWithoutMenuCategoryInput,
      ProductUncheckedCreateWithoutMenuCategoryInput
    >;
  };

  export type ProductUpdateWithWhereUniqueWithoutMenuCategoryInput = {
    where: ProductWhereUniqueInput;
    data: XOR<
      ProductUpdateWithoutMenuCategoryInput,
      ProductUncheckedUpdateWithoutMenuCategoryInput
    >;
  };

  export type ProductUpdateManyWithWhereWithoutMenuCategoryInput = {
    where: ProductScalarWhereInput;
    data: XOR<
      ProductUpdateManyMutationInput,
      ProductUncheckedUpdateManyWithoutMenuCategoryInput
    >;
  };

  export type IngredientCreateWithoutProductInput = {
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type IngredientUncheckedCreateWithoutProductInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type IngredientCreateOrConnectWithoutProductInput = {
    where: IngredientWhereUniqueInput;
    create: XOR<
      IngredientCreateWithoutProductInput,
      IngredientUncheckedCreateWithoutProductInput
    >;
  };

  export type IngredientCreateManyProductInputEnvelope = {
    data: IngredientCreateManyProductInput | IngredientCreateManyProductInput[];
    skipDuplicates?: boolean;
  };

  export type OrderProductCreateWithoutProductInput = {
    id?: string;
    quantity: number;
    price: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    order: OrderCreateNestedOneWithoutOrderProductsInput;
  };

  export type OrderProductUncheckedCreateWithoutProductInput = {
    id?: string;
    orderId: number;
    quantity: number;
    price: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrderProductCreateOrConnectWithoutProductInput = {
    where: OrderProductWhereUniqueInput;
    create: XOR<
      OrderProductCreateWithoutProductInput,
      OrderProductUncheckedCreateWithoutProductInput
    >;
  };

  export type OrderProductCreateManyProductInputEnvelope = {
    data:
      | OrderProductCreateManyProductInput
      | OrderProductCreateManyProductInput[];
    skipDuplicates?: boolean;
  };

  export type RestaurantCreateWithoutProductsInput = {
    id?: string;
    name: string;
    slug: string;
    description: string;
    avatarImageUrl: string;
    coverImageUrl: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    menuCategories?: MenuCategoryCreateNestedManyWithoutRestaurantInput;
    orders?: OrderCreateNestedManyWithoutRestaurantInput;
  };

  export type RestaurantUncheckedCreateWithoutProductsInput = {
    id?: string;
    name: string;
    slug: string;
    description: string;
    avatarImageUrl: string;
    coverImageUrl: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    menuCategories?: MenuCategoryUncheckedCreateNestedManyWithoutRestaurantInput;
    orders?: OrderUncheckedCreateNestedManyWithoutRestaurantInput;
  };

  export type RestaurantCreateOrConnectWithoutProductsInput = {
    where: RestaurantWhereUniqueInput;
    create: XOR<
      RestaurantCreateWithoutProductsInput,
      RestaurantUncheckedCreateWithoutProductsInput
    >;
  };

  export type MenuCategoryCreateWithoutProductsInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    restaurant: RestaurantCreateNestedOneWithoutMenuCategoriesInput;
  };

  export type MenuCategoryUncheckedCreateWithoutProductsInput = {
    id?: string;
    name: string;
    restaurantId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type MenuCategoryCreateOrConnectWithoutProductsInput = {
    where: MenuCategoryWhereUniqueInput;
    create: XOR<
      MenuCategoryCreateWithoutProductsInput,
      MenuCategoryUncheckedCreateWithoutProductsInput
    >;
  };

  export type IngredientUpsertWithWhereUniqueWithoutProductInput = {
    where: IngredientWhereUniqueInput;
    update: XOR<
      IngredientUpdateWithoutProductInput,
      IngredientUncheckedUpdateWithoutProductInput
    >;
    create: XOR<
      IngredientCreateWithoutProductInput,
      IngredientUncheckedCreateWithoutProductInput
    >;
  };

  export type IngredientUpdateWithWhereUniqueWithoutProductInput = {
    where: IngredientWhereUniqueInput;
    data: XOR<
      IngredientUpdateWithoutProductInput,
      IngredientUncheckedUpdateWithoutProductInput
    >;
  };

  export type IngredientUpdateManyWithWhereWithoutProductInput = {
    where: IngredientScalarWhereInput;
    data: XOR<
      IngredientUpdateManyMutationInput,
      IngredientUncheckedUpdateManyWithoutProductInput
    >;
  };

  export type IngredientScalarWhereInput = {
    AND?: IngredientScalarWhereInput | IngredientScalarWhereInput[];
    OR?: IngredientScalarWhereInput[];
    NOT?: IngredientScalarWhereInput | IngredientScalarWhereInput[];
    id?: IntFilter<"Ingredient"> | number;
    name?: StringFilter<"Ingredient"> | string;
    productId?: StringFilter<"Ingredient"> | string;
    createdAt?: DateTimeFilter<"Ingredient"> | Date | string;
    updatedAt?: DateTimeFilter<"Ingredient"> | Date | string;
  };

  export type OrderProductUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderProductWhereUniqueInput;
    update: XOR<
      OrderProductUpdateWithoutProductInput,
      OrderProductUncheckedUpdateWithoutProductInput
    >;
    create: XOR<
      OrderProductCreateWithoutProductInput,
      OrderProductUncheckedCreateWithoutProductInput
    >;
  };

  export type OrderProductUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderProductWhereUniqueInput;
    data: XOR<
      OrderProductUpdateWithoutProductInput,
      OrderProductUncheckedUpdateWithoutProductInput
    >;
  };

  export type OrderProductUpdateManyWithWhereWithoutProductInput = {
    where: OrderProductScalarWhereInput;
    data: XOR<
      OrderProductUpdateManyMutationInput,
      OrderProductUncheckedUpdateManyWithoutProductInput
    >;
  };

  export type OrderProductScalarWhereInput = {
    AND?: OrderProductScalarWhereInput | OrderProductScalarWhereInput[];
    OR?: OrderProductScalarWhereInput[];
    NOT?: OrderProductScalarWhereInput | OrderProductScalarWhereInput[];
    id?: StringFilter<"OrderProduct"> | string;
    productId?: StringFilter<"OrderProduct"> | string;
    orderId?: IntFilter<"OrderProduct"> | number;
    quantity?: IntFilter<"OrderProduct"> | number;
    price?: FloatFilter<"OrderProduct"> | number;
    createdAt?: DateTimeFilter<"OrderProduct"> | Date | string;
    updatedAt?: DateTimeFilter<"OrderProduct"> | Date | string;
  };

  export type RestaurantUpsertWithoutProductsInput = {
    update: XOR<
      RestaurantUpdateWithoutProductsInput,
      RestaurantUncheckedUpdateWithoutProductsInput
    >;
    create: XOR<
      RestaurantCreateWithoutProductsInput,
      RestaurantUncheckedCreateWithoutProductsInput
    >;
    where?: RestaurantWhereInput;
  };

  export type RestaurantUpdateToOneWithWhereWithoutProductsInput = {
    where?: RestaurantWhereInput;
    data: XOR<
      RestaurantUpdateWithoutProductsInput,
      RestaurantUncheckedUpdateWithoutProductsInput
    >;
  };

  export type RestaurantUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    avatarImageUrl?: StringFieldUpdateOperationsInput | string;
    coverImageUrl?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    menuCategories?: MenuCategoryUpdateManyWithoutRestaurantNestedInput;
    orders?: OrderUpdateManyWithoutRestaurantNestedInput;
  };

  export type RestaurantUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    avatarImageUrl?: StringFieldUpdateOperationsInput | string;
    coverImageUrl?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    menuCategories?: MenuCategoryUncheckedUpdateManyWithoutRestaurantNestedInput;
    orders?: OrderUncheckedUpdateManyWithoutRestaurantNestedInput;
  };

  export type MenuCategoryUpsertWithoutProductsInput = {
    update: XOR<
      MenuCategoryUpdateWithoutProductsInput,
      MenuCategoryUncheckedUpdateWithoutProductsInput
    >;
    create: XOR<
      MenuCategoryCreateWithoutProductsInput,
      MenuCategoryUncheckedCreateWithoutProductsInput
    >;
    where?: MenuCategoryWhereInput;
  };

  export type MenuCategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: MenuCategoryWhereInput;
    data: XOR<
      MenuCategoryUpdateWithoutProductsInput,
      MenuCategoryUncheckedUpdateWithoutProductsInput
    >;
  };

  export type MenuCategoryUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    restaurant?: RestaurantUpdateOneRequiredWithoutMenuCategoriesNestedInput;
  };

  export type MenuCategoryUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    restaurantId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProductCreateWithoutIngredientsInput = {
    id?: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderProducts?: OrderProductCreateNestedManyWithoutProductInput;
    restaurant: RestaurantCreateNestedOneWithoutProductsInput;
    menuCategory: MenuCategoryCreateNestedOneWithoutProductsInput;
  };

  export type ProductUncheckedCreateWithoutIngredientsInput = {
    id?: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    restaurantId: string;
    menuCategoryId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    orderProducts?: OrderProductUncheckedCreateNestedManyWithoutProductInput;
  };

  export type ProductCreateOrConnectWithoutIngredientsInput = {
    where: ProductWhereUniqueInput;
    create: XOR<
      ProductCreateWithoutIngredientsInput,
      ProductUncheckedCreateWithoutIngredientsInput
    >;
  };

  export type ProductUpsertWithoutIngredientsInput = {
    update: XOR<
      ProductUpdateWithoutIngredientsInput,
      ProductUncheckedUpdateWithoutIngredientsInput
    >;
    create: XOR<
      ProductCreateWithoutIngredientsInput,
      ProductUncheckedCreateWithoutIngredientsInput
    >;
    where?: ProductWhereInput;
  };

  export type ProductUpdateToOneWithWhereWithoutIngredientsInput = {
    where?: ProductWhereInput;
    data: XOR<
      ProductUpdateWithoutIngredientsInput,
      ProductUncheckedUpdateWithoutIngredientsInput
    >;
  };

  export type ProductUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    orderProducts?: OrderProductUpdateManyWithoutProductNestedInput;
    restaurant?: RestaurantUpdateOneRequiredWithoutProductsNestedInput;
    menuCategory?: MenuCategoryUpdateOneRequiredWithoutProductsNestedInput;
  };

  export type ProductUncheckedUpdateWithoutIngredientsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    restaurantId?: StringFieldUpdateOperationsInput | string;
    menuCategoryId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    orderProducts?: OrderProductUncheckedUpdateManyWithoutProductNestedInput;
  };

  export type RestaurantCreateWithoutOrdersInput = {
    id?: string;
    name: string;
    slug: string;
    description: string;
    avatarImageUrl: string;
    coverImageUrl: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    menuCategories?: MenuCategoryCreateNestedManyWithoutRestaurantInput;
    products?: ProductCreateNestedManyWithoutRestaurantInput;
  };

  export type RestaurantUncheckedCreateWithoutOrdersInput = {
    id?: string;
    name: string;
    slug: string;
    description: string;
    avatarImageUrl: string;
    coverImageUrl: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    menuCategories?: MenuCategoryUncheckedCreateNestedManyWithoutRestaurantInput;
    products?: ProductUncheckedCreateNestedManyWithoutRestaurantInput;
  };

  export type RestaurantCreateOrConnectWithoutOrdersInput = {
    where: RestaurantWhereUniqueInput;
    create: XOR<
      RestaurantCreateWithoutOrdersInput,
      RestaurantUncheckedCreateWithoutOrdersInput
    >;
  };

  export type OrderProductCreateWithoutOrderInput = {
    id?: string;
    quantity: number;
    price: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    product: ProductCreateNestedOneWithoutOrderProductsInput;
  };

  export type OrderProductUncheckedCreateWithoutOrderInput = {
    id?: string;
    productId: string;
    quantity: number;
    price: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrderProductCreateOrConnectWithoutOrderInput = {
    where: OrderProductWhereUniqueInput;
    create: XOR<
      OrderProductCreateWithoutOrderInput,
      OrderProductUncheckedCreateWithoutOrderInput
    >;
  };

  export type OrderProductCreateManyOrderInputEnvelope = {
    data: OrderProductCreateManyOrderInput | OrderProductCreateManyOrderInput[];
    skipDuplicates?: boolean;
  };

  export type RestaurantUpsertWithoutOrdersInput = {
    update: XOR<
      RestaurantUpdateWithoutOrdersInput,
      RestaurantUncheckedUpdateWithoutOrdersInput
    >;
    create: XOR<
      RestaurantCreateWithoutOrdersInput,
      RestaurantUncheckedCreateWithoutOrdersInput
    >;
    where?: RestaurantWhereInput;
  };

  export type RestaurantUpdateToOneWithWhereWithoutOrdersInput = {
    where?: RestaurantWhereInput;
    data: XOR<
      RestaurantUpdateWithoutOrdersInput,
      RestaurantUncheckedUpdateWithoutOrdersInput
    >;
  };

  export type RestaurantUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    avatarImageUrl?: StringFieldUpdateOperationsInput | string;
    coverImageUrl?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    menuCategories?: MenuCategoryUpdateManyWithoutRestaurantNestedInput;
    products?: ProductUpdateManyWithoutRestaurantNestedInput;
  };

  export type RestaurantUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    slug?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    avatarImageUrl?: StringFieldUpdateOperationsInput | string;
    coverImageUrl?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    menuCategories?: MenuCategoryUncheckedUpdateManyWithoutRestaurantNestedInput;
    products?: ProductUncheckedUpdateManyWithoutRestaurantNestedInput;
  };

  export type OrderProductUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderProductWhereUniqueInput;
    update: XOR<
      OrderProductUpdateWithoutOrderInput,
      OrderProductUncheckedUpdateWithoutOrderInput
    >;
    create: XOR<
      OrderProductCreateWithoutOrderInput,
      OrderProductUncheckedCreateWithoutOrderInput
    >;
  };

  export type OrderProductUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderProductWhereUniqueInput;
    data: XOR<
      OrderProductUpdateWithoutOrderInput,
      OrderProductUncheckedUpdateWithoutOrderInput
    >;
  };

  export type OrderProductUpdateManyWithWhereWithoutOrderInput = {
    where: OrderProductScalarWhereInput;
    data: XOR<
      OrderProductUpdateManyMutationInput,
      OrderProductUncheckedUpdateManyWithoutOrderInput
    >;
  };

  export type ProductCreateWithoutOrderProductsInput = {
    id?: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ingredients?: IngredientCreateNestedManyWithoutProductInput;
    restaurant: RestaurantCreateNestedOneWithoutProductsInput;
    menuCategory: MenuCategoryCreateNestedOneWithoutProductsInput;
  };

  export type ProductUncheckedCreateWithoutOrderProductsInput = {
    id?: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    restaurantId: string;
    menuCategoryId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ingredients?: IngredientUncheckedCreateNestedManyWithoutProductInput;
  };

  export type ProductCreateOrConnectWithoutOrderProductsInput = {
    where: ProductWhereUniqueInput;
    create: XOR<
      ProductCreateWithoutOrderProductsInput,
      ProductUncheckedCreateWithoutOrderProductsInput
    >;
  };

  export type OrderCreateWithoutOrderProductsInput = {
    total: number;
    status: $Enums.OrderStatus;
    consumptionMethod: $Enums.ConsumptionMethod;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    restaurant: RestaurantCreateNestedOneWithoutOrdersInput;
  };

  export type OrderUncheckedCreateWithoutOrderProductsInput = {
    id?: number;
    total: number;
    status: $Enums.OrderStatus;
    consumptionMethod: $Enums.ConsumptionMethod;
    restaurantId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrderCreateOrConnectWithoutOrderProductsInput = {
    where: OrderWhereUniqueInput;
    create: XOR<
      OrderCreateWithoutOrderProductsInput,
      OrderUncheckedCreateWithoutOrderProductsInput
    >;
  };

  export type ProductUpsertWithoutOrderProductsInput = {
    update: XOR<
      ProductUpdateWithoutOrderProductsInput,
      ProductUncheckedUpdateWithoutOrderProductsInput
    >;
    create: XOR<
      ProductCreateWithoutOrderProductsInput,
      ProductUncheckedCreateWithoutOrderProductsInput
    >;
    where?: ProductWhereInput;
  };

  export type ProductUpdateToOneWithWhereWithoutOrderProductsInput = {
    where?: ProductWhereInput;
    data: XOR<
      ProductUpdateWithoutOrderProductsInput,
      ProductUncheckedUpdateWithoutOrderProductsInput
    >;
  };

  export type ProductUpdateWithoutOrderProductsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    ingredients?: IngredientUpdateManyWithoutProductNestedInput;
    restaurant?: RestaurantUpdateOneRequiredWithoutProductsNestedInput;
    menuCategory?: MenuCategoryUpdateOneRequiredWithoutProductsNestedInput;
  };

  export type ProductUncheckedUpdateWithoutOrderProductsInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    restaurantId?: StringFieldUpdateOperationsInput | string;
    menuCategoryId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    ingredients?: IngredientUncheckedUpdateManyWithoutProductNestedInput;
  };

  export type OrderUpsertWithoutOrderProductsInput = {
    update: XOR<
      OrderUpdateWithoutOrderProductsInput,
      OrderUncheckedUpdateWithoutOrderProductsInput
    >;
    create: XOR<
      OrderCreateWithoutOrderProductsInput,
      OrderUncheckedCreateWithoutOrderProductsInput
    >;
    where?: OrderWhereInput;
  };

  export type OrderUpdateToOneWithWhereWithoutOrderProductsInput = {
    where?: OrderWhereInput;
    data: XOR<
      OrderUpdateWithoutOrderProductsInput,
      OrderUncheckedUpdateWithoutOrderProductsInput
    >;
  };

  export type OrderUpdateWithoutOrderProductsInput = {
    total?: FloatFieldUpdateOperationsInput | number;
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    consumptionMethod?:
      | EnumConsumptionMethodFieldUpdateOperationsInput
      | $Enums.ConsumptionMethod;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    restaurant?: RestaurantUpdateOneRequiredWithoutOrdersNestedInput;
  };

  export type OrderUncheckedUpdateWithoutOrderProductsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    total?: FloatFieldUpdateOperationsInput | number;
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    consumptionMethod?:
      | EnumConsumptionMethodFieldUpdateOperationsInput
      | $Enums.ConsumptionMethod;
    restaurantId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type MenuCategoryCreateManyRestaurantInput = {
    id?: string;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProductCreateManyRestaurantInput = {
    id?: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    menuCategoryId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrderCreateManyRestaurantInput = {
    id?: number;
    total: number;
    status: $Enums.OrderStatus;
    consumptionMethod: $Enums.ConsumptionMethod;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type MenuCategoryUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    products?: ProductUpdateManyWithoutMenuCategoryNestedInput;
  };

  export type MenuCategoryUncheckedUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    products?: ProductUncheckedUpdateManyWithoutMenuCategoryNestedInput;
  };

  export type MenuCategoryUncheckedUpdateManyWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProductUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    ingredients?: IngredientUpdateManyWithoutProductNestedInput;
    orderProducts?: OrderProductUpdateManyWithoutProductNestedInput;
    menuCategory?: MenuCategoryUpdateOneRequiredWithoutProductsNestedInput;
  };

  export type ProductUncheckedUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    menuCategoryId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    ingredients?: IngredientUncheckedUpdateManyWithoutProductNestedInput;
    orderProducts?: OrderProductUncheckedUpdateManyWithoutProductNestedInput;
  };

  export type ProductUncheckedUpdateManyWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    menuCategoryId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrderUpdateWithoutRestaurantInput = {
    total?: FloatFieldUpdateOperationsInput | number;
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    consumptionMethod?:
      | EnumConsumptionMethodFieldUpdateOperationsInput
      | $Enums.ConsumptionMethod;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    orderProducts?: OrderProductUpdateManyWithoutOrderNestedInput;
  };

  export type OrderUncheckedUpdateWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number;
    total?: FloatFieldUpdateOperationsInput | number;
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    consumptionMethod?:
      | EnumConsumptionMethodFieldUpdateOperationsInput
      | $Enums.ConsumptionMethod;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    orderProducts?: OrderProductUncheckedUpdateManyWithoutOrderNestedInput;
  };

  export type OrderUncheckedUpdateManyWithoutRestaurantInput = {
    id?: IntFieldUpdateOperationsInput | number;
    total?: FloatFieldUpdateOperationsInput | number;
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    consumptionMethod?:
      | EnumConsumptionMethodFieldUpdateOperationsInput
      | $Enums.ConsumptionMethod;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type ProductCreateManyMenuCategoryInput = {
    id?: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    restaurantId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type ProductUpdateWithoutMenuCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    ingredients?: IngredientUpdateManyWithoutProductNestedInput;
    orderProducts?: OrderProductUpdateManyWithoutProductNestedInput;
    restaurant?: RestaurantUpdateOneRequiredWithoutProductsNestedInput;
  };

  export type ProductUncheckedUpdateWithoutMenuCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    restaurantId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    ingredients?: IngredientUncheckedUpdateManyWithoutProductNestedInput;
    orderProducts?: OrderProductUncheckedUpdateManyWithoutProductNestedInput;
  };

  export type ProductUncheckedUpdateManyWithoutMenuCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: StringFieldUpdateOperationsInput | string;
    price?: FloatFieldUpdateOperationsInput | number;
    imageUrl?: StringFieldUpdateOperationsInput | string;
    restaurantId?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type IngredientCreateManyProductInput = {
    id?: number;
    name: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrderProductCreateManyProductInput = {
    id?: string;
    orderId: number;
    quantity: number;
    price: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type IngredientUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type IngredientUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type IngredientUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrderProductUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    price?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    order?: OrderUpdateOneRequiredWithoutOrderProductsNestedInput;
  };

  export type OrderProductUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string;
    orderId?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    price?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrderProductUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string;
    orderId?: IntFieldUpdateOperationsInput | number;
    quantity?: IntFieldUpdateOperationsInput | number;
    price?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrderProductCreateManyOrderInput = {
    id?: string;
    productId: string;
    quantity: number;
    price: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type OrderProductUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    price?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    product?: ProductUpdateOneRequiredWithoutOrderProductsNestedInput;
  };

  export type OrderProductUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    productId?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    price?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type OrderProductUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string;
    productId?: StringFieldUpdateOperationsInput | string;
    quantity?: IntFieldUpdateOperationsInput | number;
    price?: FloatFieldUpdateOperationsInput | number;
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
