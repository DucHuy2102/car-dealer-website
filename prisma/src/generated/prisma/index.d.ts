
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Classified
 * 
 */
export type Classified = $Result.DefaultSelection<Prisma.$ClassifiedPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model CustomerLifecycle
 * 
 */
export type CustomerLifecycle = $Result.DefaultSelection<Prisma.$CustomerLifecyclePayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model PageView
 * 
 */
export type PageView = $Result.DefaultSelection<Prisma.$PageViewPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Make
 * 
 */
export type Make = $Result.DefaultSelection<Prisma.$MakePayload>
/**
 * Model Model
 * 
 */
export type Model = $Result.DefaultSelection<Prisma.$ModelPayload>
/**
 * Model ModelVariant
 * 
 */
export type ModelVariant = $Result.DefaultSelection<Prisma.$ModelVariantPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ClassifiedStatus: {
  LIVE: 'LIVE',
  DRAFT: 'DRAFT',
  SOLD: 'SOLD'
};

export type ClassifiedStatus = (typeof ClassifiedStatus)[keyof typeof ClassifiedStatus]


export const CurrencyCode: {
  GBP: 'GBP',
  EUR: 'EUR',
  USD: 'USD'
};

export type CurrencyCode = (typeof CurrencyCode)[keyof typeof CurrencyCode]


export const OdoUnit: {
  MILES: 'MILES',
  KILOMETERS: 'KILOMETERS'
};

export type OdoUnit = (typeof OdoUnit)[keyof typeof OdoUnit]


export const BodyType: {
  SEDAN: 'SEDAN',
  SUV: 'SUV',
  WAGON: 'WAGON',
  HATCHBACK: 'HATCHBACK',
  COUPLE: 'COUPLE',
  CONVERTIBLE: 'CONVERTIBLE'
};

export type BodyType = (typeof BodyType)[keyof typeof BodyType]


export const FuelType: {
  PETROL: 'PETROL',
  DIESEL: 'DIESEL',
  ELECTRIC: 'ELECTRIC',
  HYBRID: 'HYBRID'
};

export type FuelType = (typeof FuelType)[keyof typeof FuelType]


export const Colour: {
  BLACK: 'BLACK',
  BLUE: 'BLUE',
  BROWN: 'BROWN',
  GOLD: 'GOLD',
  GREEN: 'GREEN',
  GREY: 'GREY',
  ORANGE: 'ORANGE',
  PINK: 'PINK',
  PURPLE: 'PURPLE',
  RED: 'RED',
  SILVER: 'SILVER',
  WHITE: 'WHITE',
  YELLOW: 'YELLOW'
};

export type Colour = (typeof Colour)[keyof typeof Colour]


export const Transmission: {
  MANUAL: 'MANUAL',
  AUTOMATIC: 'AUTOMATIC'
};

export type Transmission = (typeof Transmission)[keyof typeof Transmission]


export const ELEZCompliance: {
  EXEMPT: 'EXEMPT',
  NON_EXEMPT: 'NON_EXEMPT'
};

export type ELEZCompliance = (typeof ELEZCompliance)[keyof typeof ELEZCompliance]


export const CustomerStatus: {
  SUBSCRIBER: 'SUBSCRIBER',
  INTERESTED: 'INTERESTED',
  CONTACTED: 'CONTACTED',
  PURCHASED: 'PURCHASED',
  COLD: 'COLD'
};

export type CustomerStatus = (typeof CustomerStatus)[keyof typeof CustomerStatus]

}

export type ClassifiedStatus = $Enums.ClassifiedStatus

export const ClassifiedStatus: typeof $Enums.ClassifiedStatus

export type CurrencyCode = $Enums.CurrencyCode

export const CurrencyCode: typeof $Enums.CurrencyCode

export type OdoUnit = $Enums.OdoUnit

export const OdoUnit: typeof $Enums.OdoUnit

export type BodyType = $Enums.BodyType

export const BodyType: typeof $Enums.BodyType

export type FuelType = $Enums.FuelType

export const FuelType: typeof $Enums.FuelType

export type Colour = $Enums.Colour

export const Colour: typeof $Enums.Colour

export type Transmission = $Enums.Transmission

export const Transmission: typeof $Enums.Transmission

export type ELEZCompliance = $Enums.ELEZCompliance

export const ELEZCompliance: typeof $Enums.ELEZCompliance

export type CustomerStatus = $Enums.CustomerStatus

export const CustomerStatus: typeof $Enums.CustomerStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Classifieds
 * const classifieds = await prisma.classified.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Classifieds
   * const classifieds = await prisma.classified.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.classified`: Exposes CRUD operations for the **Classified** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classifieds
    * const classifieds = await prisma.classified.findMany()
    * ```
    */
  get classified(): Prisma.ClassifiedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customerLifecycle`: Exposes CRUD operations for the **CustomerLifecycle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerLifecycles
    * const customerLifecycles = await prisma.customerLifecycle.findMany()
    * ```
    */
  get customerLifecycle(): Prisma.CustomerLifecycleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pageView`: Exposes CRUD operations for the **PageView** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PageViews
    * const pageViews = await prisma.pageView.findMany()
    * ```
    */
  get pageView(): Prisma.PageViewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.make`: Exposes CRUD operations for the **Make** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Makes
    * const makes = await prisma.make.findMany()
    * ```
    */
  get make(): Prisma.MakeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.model`: Exposes CRUD operations for the **Model** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Models
    * const models = await prisma.model.findMany()
    * ```
    */
  get model(): Prisma.ModelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.modelVariant`: Exposes CRUD operations for the **ModelVariant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ModelVariants
    * const modelVariants = await prisma.modelVariant.findMany()
    * ```
    */
  get modelVariant(): Prisma.ModelVariantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql


  /**
   * Prisma.skip
   */
  export import skip = runtime.skip


  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

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
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Classified: 'Classified',
    Customer: 'Customer',
    CustomerLifecycle: 'CustomerLifecycle',
    Image: 'Image',
    PageView: 'PageView',
    Session: 'Session',
    Make: 'Make',
    Model: 'Model',
    ModelVariant: 'ModelVariant',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "classified" | "customer" | "customerLifecycle" | "image" | "pageView" | "session" | "make" | "model" | "modelVariant" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Classified: {
        payload: Prisma.$ClassifiedPayload<ExtArgs>
        fields: Prisma.ClassifiedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassifiedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassifiedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassifiedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassifiedPayload>
          }
          findFirst: {
            args: Prisma.ClassifiedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassifiedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassifiedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassifiedPayload>
          }
          findMany: {
            args: Prisma.ClassifiedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassifiedPayload>[]
          }
          create: {
            args: Prisma.ClassifiedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassifiedPayload>
          }
          createMany: {
            args: Prisma.ClassifiedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassifiedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassifiedPayload>[]
          }
          delete: {
            args: Prisma.ClassifiedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassifiedPayload>
          }
          update: {
            args: Prisma.ClassifiedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassifiedPayload>
          }
          deleteMany: {
            args: Prisma.ClassifiedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassifiedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClassifiedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassifiedPayload>[]
          }
          upsert: {
            args: Prisma.ClassifiedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassifiedPayload>
          }
          aggregate: {
            args: Prisma.ClassifiedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClassified>
          }
          groupBy: {
            args: Prisma.ClassifiedGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassifiedGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassifiedCountArgs<ExtArgs>
            result: $Utils.Optional<ClassifiedCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      CustomerLifecycle: {
        payload: Prisma.$CustomerLifecyclePayload<ExtArgs>
        fields: Prisma.CustomerLifecycleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerLifecycleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerLifecyclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerLifecycleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerLifecyclePayload>
          }
          findFirst: {
            args: Prisma.CustomerLifecycleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerLifecyclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerLifecycleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerLifecyclePayload>
          }
          findMany: {
            args: Prisma.CustomerLifecycleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerLifecyclePayload>[]
          }
          create: {
            args: Prisma.CustomerLifecycleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerLifecyclePayload>
          }
          createMany: {
            args: Prisma.CustomerLifecycleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerLifecycleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerLifecyclePayload>[]
          }
          delete: {
            args: Prisma.CustomerLifecycleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerLifecyclePayload>
          }
          update: {
            args: Prisma.CustomerLifecycleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerLifecyclePayload>
          }
          deleteMany: {
            args: Prisma.CustomerLifecycleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerLifecycleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerLifecycleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerLifecyclePayload>[]
          }
          upsert: {
            args: Prisma.CustomerLifecycleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerLifecyclePayload>
          }
          aggregate: {
            args: Prisma.CustomerLifecycleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomerLifecycle>
          }
          groupBy: {
            args: Prisma.CustomerLifecycleGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerLifecycleGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerLifecycleCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerLifecycleCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      PageView: {
        payload: Prisma.$PageViewPayload<ExtArgs>
        fields: Prisma.PageViewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PageViewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PageViewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewPayload>
          }
          findFirst: {
            args: Prisma.PageViewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PageViewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewPayload>
          }
          findMany: {
            args: Prisma.PageViewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewPayload>[]
          }
          create: {
            args: Prisma.PageViewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewPayload>
          }
          createMany: {
            args: Prisma.PageViewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PageViewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewPayload>[]
          }
          delete: {
            args: Prisma.PageViewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewPayload>
          }
          update: {
            args: Prisma.PageViewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewPayload>
          }
          deleteMany: {
            args: Prisma.PageViewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PageViewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PageViewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewPayload>[]
          }
          upsert: {
            args: Prisma.PageViewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewPayload>
          }
          aggregate: {
            args: Prisma.PageViewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePageView>
          }
          groupBy: {
            args: Prisma.PageViewGroupByArgs<ExtArgs>
            result: $Utils.Optional<PageViewGroupByOutputType>[]
          }
          count: {
            args: Prisma.PageViewCountArgs<ExtArgs>
            result: $Utils.Optional<PageViewCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Make: {
        payload: Prisma.$MakePayload<ExtArgs>
        fields: Prisma.MakeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MakeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MakeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakePayload>
          }
          findFirst: {
            args: Prisma.MakeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MakeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakePayload>
          }
          findMany: {
            args: Prisma.MakeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakePayload>[]
          }
          create: {
            args: Prisma.MakeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakePayload>
          }
          createMany: {
            args: Prisma.MakeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MakeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakePayload>[]
          }
          delete: {
            args: Prisma.MakeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakePayload>
          }
          update: {
            args: Prisma.MakeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakePayload>
          }
          deleteMany: {
            args: Prisma.MakeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MakeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MakeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakePayload>[]
          }
          upsert: {
            args: Prisma.MakeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakePayload>
          }
          aggregate: {
            args: Prisma.MakeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMake>
          }
          groupBy: {
            args: Prisma.MakeGroupByArgs<ExtArgs>
            result: $Utils.Optional<MakeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MakeCountArgs<ExtArgs>
            result: $Utils.Optional<MakeCountAggregateOutputType> | number
          }
        }
      }
      Model: {
        payload: Prisma.$ModelPayload<ExtArgs>
        fields: Prisma.ModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          findFirst: {
            args: Prisma.ModelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          findMany: {
            args: Prisma.ModelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>[]
          }
          create: {
            args: Prisma.ModelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          createMany: {
            args: Prisma.ModelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>[]
          }
          delete: {
            args: Prisma.ModelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          update: {
            args: Prisma.ModelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          deleteMany: {
            args: Prisma.ModelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>[]
          }
          upsert: {
            args: Prisma.ModelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          aggregate: {
            args: Prisma.ModelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModel>
          }
          groupBy: {
            args: Prisma.ModelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModelCountArgs<ExtArgs>
            result: $Utils.Optional<ModelCountAggregateOutputType> | number
          }
        }
      }
      ModelVariant: {
        payload: Prisma.$ModelVariantPayload<ExtArgs>
        fields: Prisma.ModelVariantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModelVariantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelVariantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModelVariantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelVariantPayload>
          }
          findFirst: {
            args: Prisma.ModelVariantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelVariantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModelVariantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelVariantPayload>
          }
          findMany: {
            args: Prisma.ModelVariantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelVariantPayload>[]
          }
          create: {
            args: Prisma.ModelVariantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelVariantPayload>
          }
          createMany: {
            args: Prisma.ModelVariantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModelVariantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelVariantPayload>[]
          }
          delete: {
            args: Prisma.ModelVariantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelVariantPayload>
          }
          update: {
            args: Prisma.ModelVariantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelVariantPayload>
          }
          deleteMany: {
            args: Prisma.ModelVariantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModelVariantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModelVariantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelVariantPayload>[]
          }
          upsert: {
            args: Prisma.ModelVariantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModelVariantPayload>
          }
          aggregate: {
            args: Prisma.ModelVariantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModelVariant>
          }
          groupBy: {
            args: Prisma.ModelVariantGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModelVariantGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModelVariantCountArgs<ExtArgs>
            result: $Utils.Optional<ModelVariantCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
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
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    classified?: ClassifiedOmit
    customer?: CustomerOmit
    customerLifecycle?: CustomerLifecycleOmit
    image?: ImageOmit
    pageView?: PageViewOmit
    session?: SessionOmit
    make?: MakeOmit
    model?: ModelOmit
    modelVariant?: ModelVariantOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClassifiedCountOutputType
   */

  export type ClassifiedCountOutputType = {
    images: number
    customers: number
  }

  export type ClassifiedCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | ClassifiedCountOutputTypeCountImagesArgs
    customers?: boolean | ClassifiedCountOutputTypeCountCustomersArgs
  }

  // Custom InputTypes
  /**
   * ClassifiedCountOutputType without action
   */
  export type ClassifiedCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassifiedCountOutputType
     */
    select?: ClassifiedCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassifiedCountOutputType without action
   */
  export type ClassifiedCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput | $Types.Skip
  }

  /**
   * ClassifiedCountOutputType without action
   */
  export type ClassifiedCountOutputTypeCountCustomersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput | $Types.Skip
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    lifecycle: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lifecycle?: boolean | CustomerCountOutputTypeCountLifecycleArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountLifecycleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerLifecycleWhereInput | $Types.Skip
  }


  /**
   * Count Type MakeCountOutputType
   */

  export type MakeCountOutputType = {
    models: number
    classifieds: number
  }

  export type MakeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    models?: boolean | MakeCountOutputTypeCountModelsArgs
    classifieds?: boolean | MakeCountOutputTypeCountClassifiedsArgs
  }

  // Custom InputTypes
  /**
   * MakeCountOutputType without action
   */
  export type MakeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeCountOutputType
     */
    select?: MakeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MakeCountOutputType without action
   */
  export type MakeCountOutputTypeCountModelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelWhereInput | $Types.Skip
  }

  /**
   * MakeCountOutputType without action
   */
  export type MakeCountOutputTypeCountClassifiedsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassifiedWhereInput | $Types.Skip
  }


  /**
   * Count Type ModelCountOutputType
   */

  export type ModelCountOutputType = {
    modelVariants: number
    classifieds: number
  }

  export type ModelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modelVariants?: boolean | ModelCountOutputTypeCountModelVariantsArgs
    classifieds?: boolean | ModelCountOutputTypeCountClassifiedsArgs
  }

  // Custom InputTypes
  /**
   * ModelCountOutputType without action
   */
  export type ModelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelCountOutputType
     */
    select?: ModelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModelCountOutputType without action
   */
  export type ModelCountOutputTypeCountModelVariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelVariantWhereInput | $Types.Skip
  }

  /**
   * ModelCountOutputType without action
   */
  export type ModelCountOutputTypeCountClassifiedsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassifiedWhereInput | $Types.Skip
  }


  /**
   * Count Type ModelVariantCountOutputType
   */

  export type ModelVariantCountOutputType = {
    classifieds: number
  }

  export type ModelVariantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classifieds?: boolean | ModelVariantCountOutputTypeCountClassifiedsArgs
  }

  // Custom InputTypes
  /**
   * ModelVariantCountOutputType without action
   */
  export type ModelVariantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVariantCountOutputType
     */
    select?: ModelVariantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModelVariantCountOutputType without action
   */
  export type ModelVariantCountOutputTypeCountClassifiedsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassifiedWhereInput | $Types.Skip
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Session: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Session?: boolean | UserCountOutputTypeCountSessionArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput | $Types.Skip
  }


  /**
   * Models
   */

  /**
   * Model Classified
   */

  export type AggregateClassified = {
    _count: ClassifiedCountAggregateOutputType | null
    _avg: ClassifiedAvgAggregateOutputType | null
    _sum: ClassifiedSumAggregateOutputType | null
    _min: ClassifiedMinAggregateOutputType | null
    _max: ClassifiedMaxAggregateOutputType | null
  }

  export type ClassifiedAvgAggregateOutputType = {
    id: number | null
    views: number | null
    year: number | null
    odoReading: number | null
    doors: number | null
    seats: number | null
    price: number | null
    makeId: number | null
    modelId: number | null
    modelVariantId: number | null
  }

  export type ClassifiedSumAggregateOutputType = {
    id: number | null
    views: number | null
    year: number | null
    odoReading: number | null
    doors: number | null
    seats: number | null
    price: number | null
    makeId: number | null
    modelId: number | null
    modelVariantId: number | null
  }

  export type ClassifiedMinAggregateOutputType = {
    id: number | null
    views: number | null
    slug: string | null
    vrm: string | null
    title: string | null
    description: string | null
    year: number | null
    odoReading: number | null
    doors: number | null
    seats: number | null
    price: number | null
    makeId: number | null
    modelId: number | null
    modelVariantId: number | null
    ulezCompliance: $Enums.ELEZCompliance | null
    transmission: $Enums.Transmission | null
    colour: $Enums.Colour | null
    fuelType: $Enums.FuelType | null
    bodyType: $Enums.BodyType | null
    odoUnit: $Enums.OdoUnit | null
    currency: $Enums.CurrencyCode | null
    status: $Enums.ClassifiedStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassifiedMaxAggregateOutputType = {
    id: number | null
    views: number | null
    slug: string | null
    vrm: string | null
    title: string | null
    description: string | null
    year: number | null
    odoReading: number | null
    doors: number | null
    seats: number | null
    price: number | null
    makeId: number | null
    modelId: number | null
    modelVariantId: number | null
    ulezCompliance: $Enums.ELEZCompliance | null
    transmission: $Enums.Transmission | null
    colour: $Enums.Colour | null
    fuelType: $Enums.FuelType | null
    bodyType: $Enums.BodyType | null
    odoUnit: $Enums.OdoUnit | null
    currency: $Enums.CurrencyCode | null
    status: $Enums.ClassifiedStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClassifiedCountAggregateOutputType = {
    id: number
    views: number
    slug: number
    vrm: number
    title: number
    description: number
    year: number
    odoReading: number
    doors: number
    seats: number
    price: number
    makeId: number
    modelId: number
    modelVariantId: number
    ulezCompliance: number
    transmission: number
    colour: number
    fuelType: number
    bodyType: number
    odoUnit: number
    currency: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClassifiedAvgAggregateInputType = {
    id?: true | $Types.Skip
    views?: true | $Types.Skip
    year?: true | $Types.Skip
    odoReading?: true | $Types.Skip
    doors?: true | $Types.Skip
    seats?: true | $Types.Skip
    price?: true | $Types.Skip
    makeId?: true | $Types.Skip
    modelId?: true | $Types.Skip
    modelVariantId?: true | $Types.Skip
  }

  export type ClassifiedSumAggregateInputType = {
    id?: true | $Types.Skip
    views?: true | $Types.Skip
    year?: true | $Types.Skip
    odoReading?: true | $Types.Skip
    doors?: true | $Types.Skip
    seats?: true | $Types.Skip
    price?: true | $Types.Skip
    makeId?: true | $Types.Skip
    modelId?: true | $Types.Skip
    modelVariantId?: true | $Types.Skip
  }

  export type ClassifiedMinAggregateInputType = {
    id?: true | $Types.Skip
    views?: true | $Types.Skip
    slug?: true | $Types.Skip
    vrm?: true | $Types.Skip
    title?: true | $Types.Skip
    description?: true | $Types.Skip
    year?: true | $Types.Skip
    odoReading?: true | $Types.Skip
    doors?: true | $Types.Skip
    seats?: true | $Types.Skip
    price?: true | $Types.Skip
    makeId?: true | $Types.Skip
    modelId?: true | $Types.Skip
    modelVariantId?: true | $Types.Skip
    ulezCompliance?: true | $Types.Skip
    transmission?: true | $Types.Skip
    colour?: true | $Types.Skip
    fuelType?: true | $Types.Skip
    bodyType?: true | $Types.Skip
    odoUnit?: true | $Types.Skip
    currency?: true | $Types.Skip
    status?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type ClassifiedMaxAggregateInputType = {
    id?: true | $Types.Skip
    views?: true | $Types.Skip
    slug?: true | $Types.Skip
    vrm?: true | $Types.Skip
    title?: true | $Types.Skip
    description?: true | $Types.Skip
    year?: true | $Types.Skip
    odoReading?: true | $Types.Skip
    doors?: true | $Types.Skip
    seats?: true | $Types.Skip
    price?: true | $Types.Skip
    makeId?: true | $Types.Skip
    modelId?: true | $Types.Skip
    modelVariantId?: true | $Types.Skip
    ulezCompliance?: true | $Types.Skip
    transmission?: true | $Types.Skip
    colour?: true | $Types.Skip
    fuelType?: true | $Types.Skip
    bodyType?: true | $Types.Skip
    odoUnit?: true | $Types.Skip
    currency?: true | $Types.Skip
    status?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type ClassifiedCountAggregateInputType = {
    id?: true | $Types.Skip
    views?: true | $Types.Skip
    slug?: true | $Types.Skip
    vrm?: true | $Types.Skip
    title?: true | $Types.Skip
    description?: true | $Types.Skip
    year?: true | $Types.Skip
    odoReading?: true | $Types.Skip
    doors?: true | $Types.Skip
    seats?: true | $Types.Skip
    price?: true | $Types.Skip
    makeId?: true | $Types.Skip
    modelId?: true | $Types.Skip
    modelVariantId?: true | $Types.Skip
    ulezCompliance?: true | $Types.Skip
    transmission?: true | $Types.Skip
    colour?: true | $Types.Skip
    fuelType?: true | $Types.Skip
    bodyType?: true | $Types.Skip
    odoUnit?: true | $Types.Skip
    currency?: true | $Types.Skip
    status?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type ClassifiedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classified to aggregate.
     */
    where?: ClassifiedWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classifieds to fetch.
     */
    orderBy?: ClassifiedOrderByWithRelationInput | ClassifiedOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassifiedWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classifieds from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classifieds.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classifieds
    **/
    _count?: true | ClassifiedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassifiedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassifiedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassifiedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassifiedMaxAggregateInputType
  }

  export type GetClassifiedAggregateType<T extends ClassifiedAggregateArgs> = {
        [P in keyof T & keyof AggregateClassified]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClassified[P]>
      : GetScalarType<T[P], AggregateClassified[P]>
  }




  export type ClassifiedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassifiedWhereInput | $Types.Skip
    orderBy?: ClassifiedOrderByWithAggregationInput | ClassifiedOrderByWithAggregationInput[] | $Types.Skip
    by: ClassifiedScalarFieldEnum[] | ClassifiedScalarFieldEnum
    having?: ClassifiedScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: ClassifiedCountAggregateInputType | true
    _avg?: ClassifiedAvgAggregateInputType
    _sum?: ClassifiedSumAggregateInputType
    _min?: ClassifiedMinAggregateInputType
    _max?: ClassifiedMaxAggregateInputType
  }

  export type ClassifiedGroupByOutputType = {
    id: number
    views: number
    slug: string
    vrm: string | null
    title: string | null
    description: string | null
    year: number
    odoReading: number
    doors: number
    seats: number
    price: number
    makeId: number
    modelId: number
    modelVariantId: number
    ulezCompliance: $Enums.ELEZCompliance
    transmission: $Enums.Transmission
    colour: $Enums.Colour
    fuelType: $Enums.FuelType
    bodyType: $Enums.BodyType
    odoUnit: $Enums.OdoUnit
    currency: $Enums.CurrencyCode
    status: $Enums.ClassifiedStatus
    createdAt: Date
    updatedAt: Date
    _count: ClassifiedCountAggregateOutputType | null
    _avg: ClassifiedAvgAggregateOutputType | null
    _sum: ClassifiedSumAggregateOutputType | null
    _min: ClassifiedMinAggregateOutputType | null
    _max: ClassifiedMaxAggregateOutputType | null
  }

  type GetClassifiedGroupByPayload<T extends ClassifiedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassifiedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassifiedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassifiedGroupByOutputType[P]>
            : GetScalarType<T[P], ClassifiedGroupByOutputType[P]>
        }
      >
    >


  export type ClassifiedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    views?: boolean | $Types.Skip
    slug?: boolean | $Types.Skip
    vrm?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    year?: boolean | $Types.Skip
    odoReading?: boolean | $Types.Skip
    doors?: boolean | $Types.Skip
    seats?: boolean | $Types.Skip
    price?: boolean | $Types.Skip
    makeId?: boolean | $Types.Skip
    modelId?: boolean | $Types.Skip
    modelVariantId?: boolean | $Types.Skip
    ulezCompliance?: boolean | $Types.Skip
    transmission?: boolean | $Types.Skip
    colour?: boolean | $Types.Skip
    fuelType?: boolean | $Types.Skip
    bodyType?: boolean | $Types.Skip
    odoUnit?: boolean | $Types.Skip
    currency?: boolean | $Types.Skip
    status?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    make?: boolean | MakeDefaultArgs<ExtArgs> | $Types.Skip
    model?: boolean | ModelDefaultArgs<ExtArgs> | $Types.Skip
    modelVariant?: boolean | Classified$modelVariantArgs<ExtArgs> | $Types.Skip
    images?: boolean | Classified$imagesArgs<ExtArgs> | $Types.Skip
    customers?: boolean | Classified$customersArgs<ExtArgs> | $Types.Skip
    _count?: boolean | ClassifiedCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["classified"]>

  export type ClassifiedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    views?: boolean | $Types.Skip
    slug?: boolean | $Types.Skip
    vrm?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    year?: boolean | $Types.Skip
    odoReading?: boolean | $Types.Skip
    doors?: boolean | $Types.Skip
    seats?: boolean | $Types.Skip
    price?: boolean | $Types.Skip
    makeId?: boolean | $Types.Skip
    modelId?: boolean | $Types.Skip
    modelVariantId?: boolean | $Types.Skip
    ulezCompliance?: boolean | $Types.Skip
    transmission?: boolean | $Types.Skip
    colour?: boolean | $Types.Skip
    fuelType?: boolean | $Types.Skip
    bodyType?: boolean | $Types.Skip
    odoUnit?: boolean | $Types.Skip
    currency?: boolean | $Types.Skip
    status?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    make?: boolean | MakeDefaultArgs<ExtArgs> | $Types.Skip
    model?: boolean | ModelDefaultArgs<ExtArgs> | $Types.Skip
    modelVariant?: boolean | Classified$modelVariantArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["classified"]>

  export type ClassifiedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    views?: boolean | $Types.Skip
    slug?: boolean | $Types.Skip
    vrm?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    year?: boolean | $Types.Skip
    odoReading?: boolean | $Types.Skip
    doors?: boolean | $Types.Skip
    seats?: boolean | $Types.Skip
    price?: boolean | $Types.Skip
    makeId?: boolean | $Types.Skip
    modelId?: boolean | $Types.Skip
    modelVariantId?: boolean | $Types.Skip
    ulezCompliance?: boolean | $Types.Skip
    transmission?: boolean | $Types.Skip
    colour?: boolean | $Types.Skip
    fuelType?: boolean | $Types.Skip
    bodyType?: boolean | $Types.Skip
    odoUnit?: boolean | $Types.Skip
    currency?: boolean | $Types.Skip
    status?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    make?: boolean | MakeDefaultArgs<ExtArgs> | $Types.Skip
    model?: boolean | ModelDefaultArgs<ExtArgs> | $Types.Skip
    modelVariant?: boolean | Classified$modelVariantArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["classified"]>

  export type ClassifiedSelectScalar = {
    id?: boolean | $Types.Skip
    views?: boolean | $Types.Skip
    slug?: boolean | $Types.Skip
    vrm?: boolean | $Types.Skip
    title?: boolean | $Types.Skip
    description?: boolean | $Types.Skip
    year?: boolean | $Types.Skip
    odoReading?: boolean | $Types.Skip
    doors?: boolean | $Types.Skip
    seats?: boolean | $Types.Skip
    price?: boolean | $Types.Skip
    makeId?: boolean | $Types.Skip
    modelId?: boolean | $Types.Skip
    modelVariantId?: boolean | $Types.Skip
    ulezCompliance?: boolean | $Types.Skip
    transmission?: boolean | $Types.Skip
    colour?: boolean | $Types.Skip
    fuelType?: boolean | $Types.Skip
    bodyType?: boolean | $Types.Skip
    odoUnit?: boolean | $Types.Skip
    currency?: boolean | $Types.Skip
    status?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }

  export type ClassifiedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "views" | "slug" | "vrm" | "title" | "description" | "year" | "odoReading" | "doors" | "seats" | "price" | "makeId" | "modelId" | "modelVariantId" | "ulezCompliance" | "transmission" | "colour" | "fuelType" | "bodyType" | "odoUnit" | "currency" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["classified"], $Types.Skip>
  export type ClassifiedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    make?: boolean | MakeDefaultArgs<ExtArgs> | $Types.Skip
    model?: boolean | ModelDefaultArgs<ExtArgs> | $Types.Skip
    modelVariant?: boolean | Classified$modelVariantArgs<ExtArgs> | $Types.Skip
    images?: boolean | Classified$imagesArgs<ExtArgs> | $Types.Skip
    customers?: boolean | Classified$customersArgs<ExtArgs> | $Types.Skip
    _count?: boolean | ClassifiedCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type ClassifiedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    make?: boolean | MakeDefaultArgs<ExtArgs> | $Types.Skip
    model?: boolean | ModelDefaultArgs<ExtArgs> | $Types.Skip
    modelVariant?: boolean | Classified$modelVariantArgs<ExtArgs> | $Types.Skip
  }
  export type ClassifiedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    make?: boolean | MakeDefaultArgs<ExtArgs> | $Types.Skip
    model?: boolean | ModelDefaultArgs<ExtArgs> | $Types.Skip
    modelVariant?: boolean | Classified$modelVariantArgs<ExtArgs> | $Types.Skip
  }

  export type $ClassifiedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Classified"
    objects: {
      make: Prisma.$MakePayload<ExtArgs>
      model: Prisma.$ModelPayload<ExtArgs>
      modelVariant: Prisma.$ModelVariantPayload<ExtArgs> | null
      images: Prisma.$ImagePayload<ExtArgs>[]
      customers: Prisma.$CustomerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      views: number
      slug: string
      vrm: string | null
      title: string | null
      description: string | null
      year: number
      odoReading: number
      doors: number
      seats: number
      price: number
      makeId: number
      modelId: number
      modelVariantId: number
      ulezCompliance: $Enums.ELEZCompliance
      transmission: $Enums.Transmission
      colour: $Enums.Colour
      fuelType: $Enums.FuelType
      bodyType: $Enums.BodyType
      odoUnit: $Enums.OdoUnit
      currency: $Enums.CurrencyCode
      status: $Enums.ClassifiedStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["classified"]>
    composites: {}
  }

  type ClassifiedGetPayload<S extends boolean | null | undefined | ClassifiedDefaultArgs> = $Result.GetResult<Prisma.$ClassifiedPayload, S>

  type ClassifiedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClassifiedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClassifiedCountAggregateInputType | true
    }

  export interface ClassifiedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Classified'], meta: { name: 'Classified' } }
    /**
     * Find zero or one Classified that matches the filter.
     * @param {ClassifiedFindUniqueArgs} args - Arguments to find a Classified
     * @example
     * // Get one Classified
     * const classified = await prisma.classified.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassifiedFindUniqueArgs>(args: SelectSubset<T, ClassifiedFindUniqueArgs<ExtArgs>>): Prisma__ClassifiedClient<$Result.GetResult<Prisma.$ClassifiedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Classified that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClassifiedFindUniqueOrThrowArgs} args - Arguments to find a Classified
     * @example
     * // Get one Classified
     * const classified = await prisma.classified.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassifiedFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassifiedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassifiedClient<$Result.GetResult<Prisma.$ClassifiedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classified that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassifiedFindFirstArgs} args - Arguments to find a Classified
     * @example
     * // Get one Classified
     * const classified = await prisma.classified.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassifiedFindFirstArgs>(args?: SelectSubset<T, ClassifiedFindFirstArgs<ExtArgs>>): Prisma__ClassifiedClient<$Result.GetResult<Prisma.$ClassifiedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Classified that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassifiedFindFirstOrThrowArgs} args - Arguments to find a Classified
     * @example
     * // Get one Classified
     * const classified = await prisma.classified.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassifiedFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassifiedFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassifiedClient<$Result.GetResult<Prisma.$ClassifiedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Classifieds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassifiedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classifieds
     * const classifieds = await prisma.classified.findMany()
     * 
     * // Get first 10 Classifieds
     * const classifieds = await prisma.classified.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classifiedWithIdOnly = await prisma.classified.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassifiedFindManyArgs>(args?: SelectSubset<T, ClassifiedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassifiedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Classified.
     * @param {ClassifiedCreateArgs} args - Arguments to create a Classified.
     * @example
     * // Create one Classified
     * const Classified = await prisma.classified.create({
     *   data: {
     *     // ... data to create a Classified
     *   }
     * })
     * 
     */
    create<T extends ClassifiedCreateArgs>(args: SelectSubset<T, ClassifiedCreateArgs<ExtArgs>>): Prisma__ClassifiedClient<$Result.GetResult<Prisma.$ClassifiedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Classifieds.
     * @param {ClassifiedCreateManyArgs} args - Arguments to create many Classifieds.
     * @example
     * // Create many Classifieds
     * const classified = await prisma.classified.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassifiedCreateManyArgs>(args?: SelectSubset<T, ClassifiedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classifieds and returns the data saved in the database.
     * @param {ClassifiedCreateManyAndReturnArgs} args - Arguments to create many Classifieds.
     * @example
     * // Create many Classifieds
     * const classified = await prisma.classified.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classifieds and only return the `id`
     * const classifiedWithIdOnly = await prisma.classified.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassifiedCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassifiedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassifiedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Classified.
     * @param {ClassifiedDeleteArgs} args - Arguments to delete one Classified.
     * @example
     * // Delete one Classified
     * const Classified = await prisma.classified.delete({
     *   where: {
     *     // ... filter to delete one Classified
     *   }
     * })
     * 
     */
    delete<T extends ClassifiedDeleteArgs>(args: SelectSubset<T, ClassifiedDeleteArgs<ExtArgs>>): Prisma__ClassifiedClient<$Result.GetResult<Prisma.$ClassifiedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Classified.
     * @param {ClassifiedUpdateArgs} args - Arguments to update one Classified.
     * @example
     * // Update one Classified
     * const classified = await prisma.classified.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassifiedUpdateArgs>(args: SelectSubset<T, ClassifiedUpdateArgs<ExtArgs>>): Prisma__ClassifiedClient<$Result.GetResult<Prisma.$ClassifiedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Classifieds.
     * @param {ClassifiedDeleteManyArgs} args - Arguments to filter Classifieds to delete.
     * @example
     * // Delete a few Classifieds
     * const { count } = await prisma.classified.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassifiedDeleteManyArgs>(args?: SelectSubset<T, ClassifiedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classifieds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassifiedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classifieds
     * const classified = await prisma.classified.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassifiedUpdateManyArgs>(args: SelectSubset<T, ClassifiedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classifieds and returns the data updated in the database.
     * @param {ClassifiedUpdateManyAndReturnArgs} args - Arguments to update many Classifieds.
     * @example
     * // Update many Classifieds
     * const classified = await prisma.classified.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Classifieds and only return the `id`
     * const classifiedWithIdOnly = await prisma.classified.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClassifiedUpdateManyAndReturnArgs>(args: SelectSubset<T, ClassifiedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassifiedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Classified.
     * @param {ClassifiedUpsertArgs} args - Arguments to update or create a Classified.
     * @example
     * // Update or create a Classified
     * const classified = await prisma.classified.upsert({
     *   create: {
     *     // ... data to create a Classified
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Classified we want to update
     *   }
     * })
     */
    upsert<T extends ClassifiedUpsertArgs>(args: SelectSubset<T, ClassifiedUpsertArgs<ExtArgs>>): Prisma__ClassifiedClient<$Result.GetResult<Prisma.$ClassifiedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Classifieds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassifiedCountArgs} args - Arguments to filter Classifieds to count.
     * @example
     * // Count the number of Classifieds
     * const count = await prisma.classified.count({
     *   where: {
     *     // ... the filter for the Classifieds we want to count
     *   }
     * })
    **/
    count<T extends ClassifiedCountArgs>(
      args?: Subset<T, ClassifiedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassifiedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Classified.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassifiedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassifiedAggregateArgs>(args: Subset<T, ClassifiedAggregateArgs>): Prisma.PrismaPromise<GetClassifiedAggregateType<T>>

    /**
     * Group by Classified.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassifiedGroupByArgs} args - Group by arguments.
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
      T extends ClassifiedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassifiedGroupByArgs['orderBy'] }
        : { orderBy?: ClassifiedGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassifiedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassifiedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Classified model
   */
  readonly fields: ClassifiedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Classified.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassifiedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    make<T extends MakeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MakeDefaultArgs<ExtArgs>>): Prisma__MakeClient<$Result.GetResult<Prisma.$MakePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    model<T extends ModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModelDefaultArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    modelVariant<T extends Classified$modelVariantArgs<ExtArgs> = {}>(args?: Subset<T, Classified$modelVariantArgs<ExtArgs>>): Prisma__ModelVariantClient<$Result.GetResult<Prisma.$ModelVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    images<T extends Classified$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Classified$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customers<T extends Classified$customersArgs<ExtArgs> = {}>(args?: Subset<T, Classified$customersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Classified model
   */
  interface ClassifiedFieldRefs {
    readonly id: FieldRef<"Classified", 'Int'>
    readonly views: FieldRef<"Classified", 'Int'>
    readonly slug: FieldRef<"Classified", 'String'>
    readonly vrm: FieldRef<"Classified", 'String'>
    readonly title: FieldRef<"Classified", 'String'>
    readonly description: FieldRef<"Classified", 'String'>
    readonly year: FieldRef<"Classified", 'Int'>
    readonly odoReading: FieldRef<"Classified", 'Int'>
    readonly doors: FieldRef<"Classified", 'Int'>
    readonly seats: FieldRef<"Classified", 'Int'>
    readonly price: FieldRef<"Classified", 'Int'>
    readonly makeId: FieldRef<"Classified", 'Int'>
    readonly modelId: FieldRef<"Classified", 'Int'>
    readonly modelVariantId: FieldRef<"Classified", 'Int'>
    readonly ulezCompliance: FieldRef<"Classified", 'ELEZCompliance'>
    readonly transmission: FieldRef<"Classified", 'Transmission'>
    readonly colour: FieldRef<"Classified", 'Colour'>
    readonly fuelType: FieldRef<"Classified", 'FuelType'>
    readonly bodyType: FieldRef<"Classified", 'BodyType'>
    readonly odoUnit: FieldRef<"Classified", 'OdoUnit'>
    readonly currency: FieldRef<"Classified", 'CurrencyCode'>
    readonly status: FieldRef<"Classified", 'ClassifiedStatus'>
    readonly createdAt: FieldRef<"Classified", 'DateTime'>
    readonly updatedAt: FieldRef<"Classified", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Classified findUnique
   */
  export type ClassifiedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classified
     */
    select?: ClassifiedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classified
     */
    omit?: ClassifiedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassifiedInclude<ExtArgs> | null
    /**
     * Filter, which Classified to fetch.
     */
    where: ClassifiedWhereUniqueInput
  }

  /**
   * Classified findUniqueOrThrow
   */
  export type ClassifiedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classified
     */
    select?: ClassifiedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classified
     */
    omit?: ClassifiedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassifiedInclude<ExtArgs> | null
    /**
     * Filter, which Classified to fetch.
     */
    where: ClassifiedWhereUniqueInput
  }

  /**
   * Classified findFirst
   */
  export type ClassifiedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classified
     */
    select?: ClassifiedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classified
     */
    omit?: ClassifiedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassifiedInclude<ExtArgs> | null
    /**
     * Filter, which Classified to fetch.
     */
    where?: ClassifiedWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classifieds to fetch.
     */
    orderBy?: ClassifiedOrderByWithRelationInput | ClassifiedOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classifieds.
     */
    cursor?: ClassifiedWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classifieds from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classifieds.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classifieds.
     */
    distinct?: ClassifiedScalarFieldEnum | ClassifiedScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Classified findFirstOrThrow
   */
  export type ClassifiedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classified
     */
    select?: ClassifiedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classified
     */
    omit?: ClassifiedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassifiedInclude<ExtArgs> | null
    /**
     * Filter, which Classified to fetch.
     */
    where?: ClassifiedWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classifieds to fetch.
     */
    orderBy?: ClassifiedOrderByWithRelationInput | ClassifiedOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classifieds.
     */
    cursor?: ClassifiedWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classifieds from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classifieds.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classifieds.
     */
    distinct?: ClassifiedScalarFieldEnum | ClassifiedScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Classified findMany
   */
  export type ClassifiedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classified
     */
    select?: ClassifiedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classified
     */
    omit?: ClassifiedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassifiedInclude<ExtArgs> | null
    /**
     * Filter, which Classifieds to fetch.
     */
    where?: ClassifiedWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classifieds to fetch.
     */
    orderBy?: ClassifiedOrderByWithRelationInput | ClassifiedOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classifieds.
     */
    cursor?: ClassifiedWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classifieds from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classifieds.
     */
    skip?: number | $Types.Skip
    distinct?: ClassifiedScalarFieldEnum | ClassifiedScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Classified create
   */
  export type ClassifiedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classified
     */
    select?: ClassifiedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classified
     */
    omit?: ClassifiedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassifiedInclude<ExtArgs> | null
    /**
     * The data needed to create a Classified.
     */
    data: XOR<ClassifiedCreateInput, ClassifiedUncheckedCreateInput>
  }

  /**
   * Classified createMany
   */
  export type ClassifiedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classifieds.
     */
    data: ClassifiedCreateManyInput | ClassifiedCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Classified createManyAndReturn
   */
  export type ClassifiedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classified
     */
    select?: ClassifiedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classified
     */
    omit?: ClassifiedOmit<ExtArgs> | null
    /**
     * The data used to create many Classifieds.
     */
    data: ClassifiedCreateManyInput | ClassifiedCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassifiedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Classified update
   */
  export type ClassifiedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classified
     */
    select?: ClassifiedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classified
     */
    omit?: ClassifiedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassifiedInclude<ExtArgs> | null
    /**
     * The data needed to update a Classified.
     */
    data: XOR<ClassifiedUpdateInput, ClassifiedUncheckedUpdateInput>
    /**
     * Choose, which Classified to update.
     */
    where: ClassifiedWhereUniqueInput
  }

  /**
   * Classified updateMany
   */
  export type ClassifiedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classifieds.
     */
    data: XOR<ClassifiedUpdateManyMutationInput, ClassifiedUncheckedUpdateManyInput>
    /**
     * Filter which Classifieds to update
     */
    where?: ClassifiedWhereInput | $Types.Skip
    /**
     * Limit how many Classifieds to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Classified updateManyAndReturn
   */
  export type ClassifiedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classified
     */
    select?: ClassifiedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Classified
     */
    omit?: ClassifiedOmit<ExtArgs> | null
    /**
     * The data used to update Classifieds.
     */
    data: XOR<ClassifiedUpdateManyMutationInput, ClassifiedUncheckedUpdateManyInput>
    /**
     * Filter which Classifieds to update
     */
    where?: ClassifiedWhereInput | $Types.Skip
    /**
     * Limit how many Classifieds to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassifiedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Classified upsert
   */
  export type ClassifiedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classified
     */
    select?: ClassifiedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classified
     */
    omit?: ClassifiedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassifiedInclude<ExtArgs> | null
    /**
     * The filter to search for the Classified to update in case it exists.
     */
    where: ClassifiedWhereUniqueInput
    /**
     * In case the Classified found by the `where` argument doesn't exist, create a new Classified with this data.
     */
    create: XOR<ClassifiedCreateInput, ClassifiedUncheckedCreateInput>
    /**
     * In case the Classified was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassifiedUpdateInput, ClassifiedUncheckedUpdateInput>
  }

  /**
   * Classified delete
   */
  export type ClassifiedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classified
     */
    select?: ClassifiedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classified
     */
    omit?: ClassifiedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassifiedInclude<ExtArgs> | null
    /**
     * Filter which Classified to delete.
     */
    where: ClassifiedWhereUniqueInput
  }

  /**
   * Classified deleteMany
   */
  export type ClassifiedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classifieds to delete
     */
    where?: ClassifiedWhereInput | $Types.Skip
    /**
     * Limit how many Classifieds to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Classified.modelVariant
   */
  export type Classified$modelVariantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVariant
     */
    select?: ModelVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVariant
     */
    omit?: ModelVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVariantInclude<ExtArgs> | null
    where?: ModelVariantWhereInput | $Types.Skip
  }

  /**
   * Classified.images
   */
  export type Classified$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput | $Types.Skip
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[] | $Types.Skip
    cursor?: ImageWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Classified.customers
   */
  export type Classified$customersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput | $Types.Skip
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[] | $Types.Skip
    cursor?: CustomerWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Classified without action
   */
  export type ClassifiedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classified
     */
    select?: ClassifiedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classified
     */
    omit?: ClassifiedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassifiedInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    id: number | null
    classifiedId: number | null
  }

  export type CustomerSumAggregateOutputType = {
    id: number | null
    classifiedId: number | null
  }

  export type CustomerMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    mobile: string | null
    bookingDate: Date | null
    termAccepted: boolean | null
    status: $Enums.CustomerStatus | null
    classifiedId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    mobile: string | null
    bookingDate: Date | null
    termAccepted: boolean | null
    status: $Enums.CustomerStatus | null
    classifiedId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    mobile: number
    bookingDate: number
    termAccepted: number
    status: number
    classifiedId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    id?: true | $Types.Skip
    classifiedId?: true | $Types.Skip
  }

  export type CustomerSumAggregateInputType = {
    id?: true | $Types.Skip
    classifiedId?: true | $Types.Skip
  }

  export type CustomerMinAggregateInputType = {
    id?: true | $Types.Skip
    firstName?: true | $Types.Skip
    lastName?: true | $Types.Skip
    email?: true | $Types.Skip
    mobile?: true | $Types.Skip
    bookingDate?: true | $Types.Skip
    termAccepted?: true | $Types.Skip
    status?: true | $Types.Skip
    classifiedId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type CustomerMaxAggregateInputType = {
    id?: true | $Types.Skip
    firstName?: true | $Types.Skip
    lastName?: true | $Types.Skip
    email?: true | $Types.Skip
    mobile?: true | $Types.Skip
    bookingDate?: true | $Types.Skip
    termAccepted?: true | $Types.Skip
    status?: true | $Types.Skip
    classifiedId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type CustomerCountAggregateInputType = {
    id?: true | $Types.Skip
    firstName?: true | $Types.Skip
    lastName?: true | $Types.Skip
    email?: true | $Types.Skip
    mobile?: true | $Types.Skip
    bookingDate?: true | $Types.Skip
    termAccepted?: true | $Types.Skip
    status?: true | $Types.Skip
    classifiedId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput | $Types.Skip
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[] | $Types.Skip
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    email: string
    mobile: string | null
    bookingDate: Date | null
    termAccepted: boolean
    status: $Enums.CustomerStatus
    classifiedId: number | null
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    firstName?: boolean | $Types.Skip
    lastName?: boolean | $Types.Skip
    email?: boolean | $Types.Skip
    mobile?: boolean | $Types.Skip
    bookingDate?: boolean | $Types.Skip
    termAccepted?: boolean | $Types.Skip
    status?: boolean | $Types.Skip
    classifiedId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    Classified?: boolean | Customer$ClassifiedArgs<ExtArgs> | $Types.Skip
    lifecycle?: boolean | Customer$lifecycleArgs<ExtArgs> | $Types.Skip
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    firstName?: boolean | $Types.Skip
    lastName?: boolean | $Types.Skip
    email?: boolean | $Types.Skip
    mobile?: boolean | $Types.Skip
    bookingDate?: boolean | $Types.Skip
    termAccepted?: boolean | $Types.Skip
    status?: boolean | $Types.Skip
    classifiedId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    Classified?: boolean | Customer$ClassifiedArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    firstName?: boolean | $Types.Skip
    lastName?: boolean | $Types.Skip
    email?: boolean | $Types.Skip
    mobile?: boolean | $Types.Skip
    bookingDate?: boolean | $Types.Skip
    termAccepted?: boolean | $Types.Skip
    status?: boolean | $Types.Skip
    classifiedId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    Classified?: boolean | Customer$ClassifiedArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean | $Types.Skip
    firstName?: boolean | $Types.Skip
    lastName?: boolean | $Types.Skip
    email?: boolean | $Types.Skip
    mobile?: boolean | $Types.Skip
    bookingDate?: boolean | $Types.Skip
    termAccepted?: boolean | $Types.Skip
    status?: boolean | $Types.Skip
    classifiedId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "mobile" | "bookingDate" | "termAccepted" | "status" | "classifiedId" | "createdAt" | "updatedAt", ExtArgs["result"]["customer"], $Types.Skip>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Classified?: boolean | Customer$ClassifiedArgs<ExtArgs> | $Types.Skip
    lifecycle?: boolean | Customer$lifecycleArgs<ExtArgs> | $Types.Skip
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Classified?: boolean | Customer$ClassifiedArgs<ExtArgs> | $Types.Skip
  }
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Classified?: boolean | Customer$ClassifiedArgs<ExtArgs> | $Types.Skip
  }

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      Classified: Prisma.$ClassifiedPayload<ExtArgs> | null
      lifecycle: Prisma.$CustomerLifecyclePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string
      mobile: string | null
      bookingDate: Date | null
      termAccepted: boolean
      status: $Enums.CustomerStatus
      classifiedId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Classified<T extends Customer$ClassifiedArgs<ExtArgs> = {}>(args?: Subset<T, Customer$ClassifiedArgs<ExtArgs>>): Prisma__ClassifiedClient<$Result.GetResult<Prisma.$ClassifiedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    lifecycle<T extends Customer$lifecycleArgs<ExtArgs> = {}>(args?: Subset<T, Customer$lifecycleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerLifecyclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'Int'>
    readonly firstName: FieldRef<"Customer", 'String'>
    readonly lastName: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly mobile: FieldRef<"Customer", 'String'>
    readonly bookingDate: FieldRef<"Customer", 'DateTime'>
    readonly termAccepted: FieldRef<"Customer", 'Boolean'>
    readonly status: FieldRef<"Customer", 'CustomerStatus'>
    readonly classifiedId: FieldRef<"Customer", 'Int'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number | $Types.Skip
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput | $Types.Skip
    /**
     * Limit how many Customers to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput | $Types.Skip
    /**
     * Limit how many Customers to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput | $Types.Skip
    /**
     * Limit how many Customers to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Customer.Classified
   */
  export type Customer$ClassifiedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classified
     */
    select?: ClassifiedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classified
     */
    omit?: ClassifiedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassifiedInclude<ExtArgs> | null
    where?: ClassifiedWhereInput | $Types.Skip
  }

  /**
   * Customer.lifecycle
   */
  export type Customer$lifecycleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLifecycle
     */
    select?: CustomerLifecycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerLifecycle
     */
    omit?: CustomerLifecycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLifecycleInclude<ExtArgs> | null
    where?: CustomerLifecycleWhereInput | $Types.Skip
    orderBy?: CustomerLifecycleOrderByWithRelationInput | CustomerLifecycleOrderByWithRelationInput[] | $Types.Skip
    cursor?: CustomerLifecycleWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: CustomerLifecycleScalarFieldEnum | CustomerLifecycleScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model CustomerLifecycle
   */

  export type AggregateCustomerLifecycle = {
    _count: CustomerLifecycleCountAggregateOutputType | null
    _avg: CustomerLifecycleAvgAggregateOutputType | null
    _sum: CustomerLifecycleSumAggregateOutputType | null
    _min: CustomerLifecycleMinAggregateOutputType | null
    _max: CustomerLifecycleMaxAggregateOutputType | null
  }

  export type CustomerLifecycleAvgAggregateOutputType = {
    id: number | null
    customerId: number | null
  }

  export type CustomerLifecycleSumAggregateOutputType = {
    id: number | null
    customerId: number | null
  }

  export type CustomerLifecycleMinAggregateOutputType = {
    id: number | null
    customerId: number | null
    oldStatus: $Enums.CustomerStatus | null
    newStatus: $Enums.CustomerStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerLifecycleMaxAggregateOutputType = {
    id: number | null
    customerId: number | null
    oldStatus: $Enums.CustomerStatus | null
    newStatus: $Enums.CustomerStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerLifecycleCountAggregateOutputType = {
    id: number
    customerId: number
    oldStatus: number
    newStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerLifecycleAvgAggregateInputType = {
    id?: true | $Types.Skip
    customerId?: true | $Types.Skip
  }

  export type CustomerLifecycleSumAggregateInputType = {
    id?: true | $Types.Skip
    customerId?: true | $Types.Skip
  }

  export type CustomerLifecycleMinAggregateInputType = {
    id?: true | $Types.Skip
    customerId?: true | $Types.Skip
    oldStatus?: true | $Types.Skip
    newStatus?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type CustomerLifecycleMaxAggregateInputType = {
    id?: true | $Types.Skip
    customerId?: true | $Types.Skip
    oldStatus?: true | $Types.Skip
    newStatus?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type CustomerLifecycleCountAggregateInputType = {
    id?: true | $Types.Skip
    customerId?: true | $Types.Skip
    oldStatus?: true | $Types.Skip
    newStatus?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type CustomerLifecycleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerLifecycle to aggregate.
     */
    where?: CustomerLifecycleWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerLifecycles to fetch.
     */
    orderBy?: CustomerLifecycleOrderByWithRelationInput | CustomerLifecycleOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerLifecycleWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerLifecycles from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerLifecycles.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerLifecycles
    **/
    _count?: true | CustomerLifecycleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerLifecycleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerLifecycleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerLifecycleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerLifecycleMaxAggregateInputType
  }

  export type GetCustomerLifecycleAggregateType<T extends CustomerLifecycleAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerLifecycle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerLifecycle[P]>
      : GetScalarType<T[P], AggregateCustomerLifecycle[P]>
  }




  export type CustomerLifecycleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerLifecycleWhereInput | $Types.Skip
    orderBy?: CustomerLifecycleOrderByWithAggregationInput | CustomerLifecycleOrderByWithAggregationInput[] | $Types.Skip
    by: CustomerLifecycleScalarFieldEnum[] | CustomerLifecycleScalarFieldEnum
    having?: CustomerLifecycleScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: CustomerLifecycleCountAggregateInputType | true
    _avg?: CustomerLifecycleAvgAggregateInputType
    _sum?: CustomerLifecycleSumAggregateInputType
    _min?: CustomerLifecycleMinAggregateInputType
    _max?: CustomerLifecycleMaxAggregateInputType
  }

  export type CustomerLifecycleGroupByOutputType = {
    id: number
    customerId: number
    oldStatus: $Enums.CustomerStatus
    newStatus: $Enums.CustomerStatus
    createdAt: Date
    updatedAt: Date
    _count: CustomerLifecycleCountAggregateOutputType | null
    _avg: CustomerLifecycleAvgAggregateOutputType | null
    _sum: CustomerLifecycleSumAggregateOutputType | null
    _min: CustomerLifecycleMinAggregateOutputType | null
    _max: CustomerLifecycleMaxAggregateOutputType | null
  }

  type GetCustomerLifecycleGroupByPayload<T extends CustomerLifecycleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerLifecycleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerLifecycleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerLifecycleGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerLifecycleGroupByOutputType[P]>
        }
      >
    >


  export type CustomerLifecycleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    customerId?: boolean | $Types.Skip
    oldStatus?: boolean | $Types.Skip
    newStatus?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    customer?: boolean | CustomerDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["customerLifecycle"]>

  export type CustomerLifecycleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    customerId?: boolean | $Types.Skip
    oldStatus?: boolean | $Types.Skip
    newStatus?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    customer?: boolean | CustomerDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["customerLifecycle"]>

  export type CustomerLifecycleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    customerId?: boolean | $Types.Skip
    oldStatus?: boolean | $Types.Skip
    newStatus?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    customer?: boolean | CustomerDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["customerLifecycle"]>

  export type CustomerLifecycleSelectScalar = {
    id?: boolean | $Types.Skip
    customerId?: boolean | $Types.Skip
    oldStatus?: boolean | $Types.Skip
    newStatus?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }

  export type CustomerLifecycleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "oldStatus" | "newStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["customerLifecycle"], $Types.Skip>
  export type CustomerLifecycleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type CustomerLifecycleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type CustomerLifecycleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $CustomerLifecyclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomerLifecycle"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      customerId: number
      oldStatus: $Enums.CustomerStatus
      newStatus: $Enums.CustomerStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customerLifecycle"]>
    composites: {}
  }

  type CustomerLifecycleGetPayload<S extends boolean | null | undefined | CustomerLifecycleDefaultArgs> = $Result.GetResult<Prisma.$CustomerLifecyclePayload, S>

  type CustomerLifecycleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerLifecycleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerLifecycleCountAggregateInputType | true
    }

  export interface CustomerLifecycleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomerLifecycle'], meta: { name: 'CustomerLifecycle' } }
    /**
     * Find zero or one CustomerLifecycle that matches the filter.
     * @param {CustomerLifecycleFindUniqueArgs} args - Arguments to find a CustomerLifecycle
     * @example
     * // Get one CustomerLifecycle
     * const customerLifecycle = await prisma.customerLifecycle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerLifecycleFindUniqueArgs>(args: SelectSubset<T, CustomerLifecycleFindUniqueArgs<ExtArgs>>): Prisma__CustomerLifecycleClient<$Result.GetResult<Prisma.$CustomerLifecyclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomerLifecycle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerLifecycleFindUniqueOrThrowArgs} args - Arguments to find a CustomerLifecycle
     * @example
     * // Get one CustomerLifecycle
     * const customerLifecycle = await prisma.customerLifecycle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerLifecycleFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerLifecycleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerLifecycleClient<$Result.GetResult<Prisma.$CustomerLifecyclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerLifecycle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerLifecycleFindFirstArgs} args - Arguments to find a CustomerLifecycle
     * @example
     * // Get one CustomerLifecycle
     * const customerLifecycle = await prisma.customerLifecycle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerLifecycleFindFirstArgs>(args?: SelectSubset<T, CustomerLifecycleFindFirstArgs<ExtArgs>>): Prisma__CustomerLifecycleClient<$Result.GetResult<Prisma.$CustomerLifecyclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerLifecycle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerLifecycleFindFirstOrThrowArgs} args - Arguments to find a CustomerLifecycle
     * @example
     * // Get one CustomerLifecycle
     * const customerLifecycle = await prisma.customerLifecycle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerLifecycleFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerLifecycleFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerLifecycleClient<$Result.GetResult<Prisma.$CustomerLifecyclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomerLifecycles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerLifecycleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerLifecycles
     * const customerLifecycles = await prisma.customerLifecycle.findMany()
     * 
     * // Get first 10 CustomerLifecycles
     * const customerLifecycles = await prisma.customerLifecycle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerLifecycleWithIdOnly = await prisma.customerLifecycle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerLifecycleFindManyArgs>(args?: SelectSubset<T, CustomerLifecycleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerLifecyclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomerLifecycle.
     * @param {CustomerLifecycleCreateArgs} args - Arguments to create a CustomerLifecycle.
     * @example
     * // Create one CustomerLifecycle
     * const CustomerLifecycle = await prisma.customerLifecycle.create({
     *   data: {
     *     // ... data to create a CustomerLifecycle
     *   }
     * })
     * 
     */
    create<T extends CustomerLifecycleCreateArgs>(args: SelectSubset<T, CustomerLifecycleCreateArgs<ExtArgs>>): Prisma__CustomerLifecycleClient<$Result.GetResult<Prisma.$CustomerLifecyclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomerLifecycles.
     * @param {CustomerLifecycleCreateManyArgs} args - Arguments to create many CustomerLifecycles.
     * @example
     * // Create many CustomerLifecycles
     * const customerLifecycle = await prisma.customerLifecycle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerLifecycleCreateManyArgs>(args?: SelectSubset<T, CustomerLifecycleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomerLifecycles and returns the data saved in the database.
     * @param {CustomerLifecycleCreateManyAndReturnArgs} args - Arguments to create many CustomerLifecycles.
     * @example
     * // Create many CustomerLifecycles
     * const customerLifecycle = await prisma.customerLifecycle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomerLifecycles and only return the `id`
     * const customerLifecycleWithIdOnly = await prisma.customerLifecycle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerLifecycleCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerLifecycleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerLifecyclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustomerLifecycle.
     * @param {CustomerLifecycleDeleteArgs} args - Arguments to delete one CustomerLifecycle.
     * @example
     * // Delete one CustomerLifecycle
     * const CustomerLifecycle = await prisma.customerLifecycle.delete({
     *   where: {
     *     // ... filter to delete one CustomerLifecycle
     *   }
     * })
     * 
     */
    delete<T extends CustomerLifecycleDeleteArgs>(args: SelectSubset<T, CustomerLifecycleDeleteArgs<ExtArgs>>): Prisma__CustomerLifecycleClient<$Result.GetResult<Prisma.$CustomerLifecyclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomerLifecycle.
     * @param {CustomerLifecycleUpdateArgs} args - Arguments to update one CustomerLifecycle.
     * @example
     * // Update one CustomerLifecycle
     * const customerLifecycle = await prisma.customerLifecycle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerLifecycleUpdateArgs>(args: SelectSubset<T, CustomerLifecycleUpdateArgs<ExtArgs>>): Prisma__CustomerLifecycleClient<$Result.GetResult<Prisma.$CustomerLifecyclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomerLifecycles.
     * @param {CustomerLifecycleDeleteManyArgs} args - Arguments to filter CustomerLifecycles to delete.
     * @example
     * // Delete a few CustomerLifecycles
     * const { count } = await prisma.customerLifecycle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerLifecycleDeleteManyArgs>(args?: SelectSubset<T, CustomerLifecycleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerLifecycles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerLifecycleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerLifecycles
     * const customerLifecycle = await prisma.customerLifecycle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerLifecycleUpdateManyArgs>(args: SelectSubset<T, CustomerLifecycleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerLifecycles and returns the data updated in the database.
     * @param {CustomerLifecycleUpdateManyAndReturnArgs} args - Arguments to update many CustomerLifecycles.
     * @example
     * // Update many CustomerLifecycles
     * const customerLifecycle = await prisma.customerLifecycle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustomerLifecycles and only return the `id`
     * const customerLifecycleWithIdOnly = await prisma.customerLifecycle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerLifecycleUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerLifecycleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerLifecyclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustomerLifecycle.
     * @param {CustomerLifecycleUpsertArgs} args - Arguments to update or create a CustomerLifecycle.
     * @example
     * // Update or create a CustomerLifecycle
     * const customerLifecycle = await prisma.customerLifecycle.upsert({
     *   create: {
     *     // ... data to create a CustomerLifecycle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerLifecycle we want to update
     *   }
     * })
     */
    upsert<T extends CustomerLifecycleUpsertArgs>(args: SelectSubset<T, CustomerLifecycleUpsertArgs<ExtArgs>>): Prisma__CustomerLifecycleClient<$Result.GetResult<Prisma.$CustomerLifecyclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomerLifecycles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerLifecycleCountArgs} args - Arguments to filter CustomerLifecycles to count.
     * @example
     * // Count the number of CustomerLifecycles
     * const count = await prisma.customerLifecycle.count({
     *   where: {
     *     // ... the filter for the CustomerLifecycles we want to count
     *   }
     * })
    **/
    count<T extends CustomerLifecycleCountArgs>(
      args?: Subset<T, CustomerLifecycleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerLifecycleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerLifecycle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerLifecycleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerLifecycleAggregateArgs>(args: Subset<T, CustomerLifecycleAggregateArgs>): Prisma.PrismaPromise<GetCustomerLifecycleAggregateType<T>>

    /**
     * Group by CustomerLifecycle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerLifecycleGroupByArgs} args - Group by arguments.
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
      T extends CustomerLifecycleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerLifecycleGroupByArgs['orderBy'] }
        : { orderBy?: CustomerLifecycleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerLifecycleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerLifecycleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomerLifecycle model
   */
  readonly fields: CustomerLifecycleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerLifecycle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerLifecycleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CustomerLifecycle model
   */
  interface CustomerLifecycleFieldRefs {
    readonly id: FieldRef<"CustomerLifecycle", 'Int'>
    readonly customerId: FieldRef<"CustomerLifecycle", 'Int'>
    readonly oldStatus: FieldRef<"CustomerLifecycle", 'CustomerStatus'>
    readonly newStatus: FieldRef<"CustomerLifecycle", 'CustomerStatus'>
    readonly createdAt: FieldRef<"CustomerLifecycle", 'DateTime'>
    readonly updatedAt: FieldRef<"CustomerLifecycle", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustomerLifecycle findUnique
   */
  export type CustomerLifecycleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLifecycle
     */
    select?: CustomerLifecycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerLifecycle
     */
    omit?: CustomerLifecycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLifecycleInclude<ExtArgs> | null
    /**
     * Filter, which CustomerLifecycle to fetch.
     */
    where: CustomerLifecycleWhereUniqueInput
  }

  /**
   * CustomerLifecycle findUniqueOrThrow
   */
  export type CustomerLifecycleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLifecycle
     */
    select?: CustomerLifecycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerLifecycle
     */
    omit?: CustomerLifecycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLifecycleInclude<ExtArgs> | null
    /**
     * Filter, which CustomerLifecycle to fetch.
     */
    where: CustomerLifecycleWhereUniqueInput
  }

  /**
   * CustomerLifecycle findFirst
   */
  export type CustomerLifecycleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLifecycle
     */
    select?: CustomerLifecycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerLifecycle
     */
    omit?: CustomerLifecycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLifecycleInclude<ExtArgs> | null
    /**
     * Filter, which CustomerLifecycle to fetch.
     */
    where?: CustomerLifecycleWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerLifecycles to fetch.
     */
    orderBy?: CustomerLifecycleOrderByWithRelationInput | CustomerLifecycleOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerLifecycles.
     */
    cursor?: CustomerLifecycleWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerLifecycles from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerLifecycles.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerLifecycles.
     */
    distinct?: CustomerLifecycleScalarFieldEnum | CustomerLifecycleScalarFieldEnum[] | $Types.Skip
  }

  /**
   * CustomerLifecycle findFirstOrThrow
   */
  export type CustomerLifecycleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLifecycle
     */
    select?: CustomerLifecycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerLifecycle
     */
    omit?: CustomerLifecycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLifecycleInclude<ExtArgs> | null
    /**
     * Filter, which CustomerLifecycle to fetch.
     */
    where?: CustomerLifecycleWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerLifecycles to fetch.
     */
    orderBy?: CustomerLifecycleOrderByWithRelationInput | CustomerLifecycleOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerLifecycles.
     */
    cursor?: CustomerLifecycleWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerLifecycles from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerLifecycles.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerLifecycles.
     */
    distinct?: CustomerLifecycleScalarFieldEnum | CustomerLifecycleScalarFieldEnum[] | $Types.Skip
  }

  /**
   * CustomerLifecycle findMany
   */
  export type CustomerLifecycleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLifecycle
     */
    select?: CustomerLifecycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerLifecycle
     */
    omit?: CustomerLifecycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLifecycleInclude<ExtArgs> | null
    /**
     * Filter, which CustomerLifecycles to fetch.
     */
    where?: CustomerLifecycleWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerLifecycles to fetch.
     */
    orderBy?: CustomerLifecycleOrderByWithRelationInput | CustomerLifecycleOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerLifecycles.
     */
    cursor?: CustomerLifecycleWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerLifecycles from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerLifecycles.
     */
    skip?: number | $Types.Skip
    distinct?: CustomerLifecycleScalarFieldEnum | CustomerLifecycleScalarFieldEnum[] | $Types.Skip
  }

  /**
   * CustomerLifecycle create
   */
  export type CustomerLifecycleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLifecycle
     */
    select?: CustomerLifecycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerLifecycle
     */
    omit?: CustomerLifecycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLifecycleInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomerLifecycle.
     */
    data: XOR<CustomerLifecycleCreateInput, CustomerLifecycleUncheckedCreateInput>
  }

  /**
   * CustomerLifecycle createMany
   */
  export type CustomerLifecycleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomerLifecycles.
     */
    data: CustomerLifecycleCreateManyInput | CustomerLifecycleCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * CustomerLifecycle createManyAndReturn
   */
  export type CustomerLifecycleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLifecycle
     */
    select?: CustomerLifecycleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerLifecycle
     */
    omit?: CustomerLifecycleOmit<ExtArgs> | null
    /**
     * The data used to create many CustomerLifecycles.
     */
    data: CustomerLifecycleCreateManyInput | CustomerLifecycleCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLifecycleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomerLifecycle update
   */
  export type CustomerLifecycleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLifecycle
     */
    select?: CustomerLifecycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerLifecycle
     */
    omit?: CustomerLifecycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLifecycleInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomerLifecycle.
     */
    data: XOR<CustomerLifecycleUpdateInput, CustomerLifecycleUncheckedUpdateInput>
    /**
     * Choose, which CustomerLifecycle to update.
     */
    where: CustomerLifecycleWhereUniqueInput
  }

  /**
   * CustomerLifecycle updateMany
   */
  export type CustomerLifecycleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomerLifecycles.
     */
    data: XOR<CustomerLifecycleUpdateManyMutationInput, CustomerLifecycleUncheckedUpdateManyInput>
    /**
     * Filter which CustomerLifecycles to update
     */
    where?: CustomerLifecycleWhereInput | $Types.Skip
    /**
     * Limit how many CustomerLifecycles to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * CustomerLifecycle updateManyAndReturn
   */
  export type CustomerLifecycleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLifecycle
     */
    select?: CustomerLifecycleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerLifecycle
     */
    omit?: CustomerLifecycleOmit<ExtArgs> | null
    /**
     * The data used to update CustomerLifecycles.
     */
    data: XOR<CustomerLifecycleUpdateManyMutationInput, CustomerLifecycleUncheckedUpdateManyInput>
    /**
     * Filter which CustomerLifecycles to update
     */
    where?: CustomerLifecycleWhereInput | $Types.Skip
    /**
     * Limit how many CustomerLifecycles to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLifecycleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomerLifecycle upsert
   */
  export type CustomerLifecycleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLifecycle
     */
    select?: CustomerLifecycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerLifecycle
     */
    omit?: CustomerLifecycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLifecycleInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomerLifecycle to update in case it exists.
     */
    where: CustomerLifecycleWhereUniqueInput
    /**
     * In case the CustomerLifecycle found by the `where` argument doesn't exist, create a new CustomerLifecycle with this data.
     */
    create: XOR<CustomerLifecycleCreateInput, CustomerLifecycleUncheckedCreateInput>
    /**
     * In case the CustomerLifecycle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerLifecycleUpdateInput, CustomerLifecycleUncheckedUpdateInput>
  }

  /**
   * CustomerLifecycle delete
   */
  export type CustomerLifecycleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLifecycle
     */
    select?: CustomerLifecycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerLifecycle
     */
    omit?: CustomerLifecycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLifecycleInclude<ExtArgs> | null
    /**
     * Filter which CustomerLifecycle to delete.
     */
    where: CustomerLifecycleWhereUniqueInput
  }

  /**
   * CustomerLifecycle deleteMany
   */
  export type CustomerLifecycleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerLifecycles to delete
     */
    where?: CustomerLifecycleWhereInput | $Types.Skip
    /**
     * Limit how many CustomerLifecycles to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * CustomerLifecycle without action
   */
  export type CustomerLifecycleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerLifecycle
     */
    select?: CustomerLifecycleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerLifecycle
     */
    omit?: CustomerLifecycleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerLifecycleInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    id: number | null
    classifiedId: number | null
  }

  export type ImageSumAggregateOutputType = {
    id: number | null
    classifiedId: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: number | null
    alt: string | null
    src: string | null
    classifiedId: number | null
    blurhash: string | null
    isMain: boolean | null
  }

  export type ImageMaxAggregateOutputType = {
    id: number | null
    alt: string | null
    src: string | null
    classifiedId: number | null
    blurhash: string | null
    isMain: boolean | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    alt: number
    src: number
    classifiedId: number
    blurhash: number
    isMain: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    id?: true | $Types.Skip
    classifiedId?: true | $Types.Skip
  }

  export type ImageSumAggregateInputType = {
    id?: true | $Types.Skip
    classifiedId?: true | $Types.Skip
  }

  export type ImageMinAggregateInputType = {
    id?: true | $Types.Skip
    alt?: true | $Types.Skip
    src?: true | $Types.Skip
    classifiedId?: true | $Types.Skip
    blurhash?: true | $Types.Skip
    isMain?: true | $Types.Skip
  }

  export type ImageMaxAggregateInputType = {
    id?: true | $Types.Skip
    alt?: true | $Types.Skip
    src?: true | $Types.Skip
    classifiedId?: true | $Types.Skip
    blurhash?: true | $Types.Skip
    isMain?: true | $Types.Skip
  }

  export type ImageCountAggregateInputType = {
    id?: true | $Types.Skip
    alt?: true | $Types.Skip
    src?: true | $Types.Skip
    classifiedId?: true | $Types.Skip
    blurhash?: true | $Types.Skip
    isMain?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput | $Types.Skip
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[] | $Types.Skip
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: number
    alt: string
    src: string
    classifiedId: number
    blurhash: string
    isMain: boolean
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    alt?: boolean | $Types.Skip
    src?: boolean | $Types.Skip
    classifiedId?: boolean | $Types.Skip
    blurhash?: boolean | $Types.Skip
    isMain?: boolean | $Types.Skip
    classified?: boolean | ClassifiedDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["image"]>

  export type ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    alt?: boolean | $Types.Skip
    src?: boolean | $Types.Skip
    classifiedId?: boolean | $Types.Skip
    blurhash?: boolean | $Types.Skip
    isMain?: boolean | $Types.Skip
    classified?: boolean | ClassifiedDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["image"]>

  export type ImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    alt?: boolean | $Types.Skip
    src?: boolean | $Types.Skip
    classifiedId?: boolean | $Types.Skip
    blurhash?: boolean | $Types.Skip
    isMain?: boolean | $Types.Skip
    classified?: boolean | ClassifiedDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean | $Types.Skip
    alt?: boolean | $Types.Skip
    src?: boolean | $Types.Skip
    classifiedId?: boolean | $Types.Skip
    blurhash?: boolean | $Types.Skip
    isMain?: boolean | $Types.Skip
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "alt" | "src" | "classifiedId" | "blurhash" | "isMain", ExtArgs["result"]["image"], $Types.Skip>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classified?: boolean | ClassifiedDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type ImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classified?: boolean | ClassifiedDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type ImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    classified?: boolean | ClassifiedDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      classified: Prisma.$ClassifiedPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      alt: string
      src: string
      classifiedId: number
      blurhash: string
      isMain: boolean
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
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
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    classified<T extends ClassifiedDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassifiedDefaultArgs<ExtArgs>>): Prisma__ClassifiedClient<$Result.GetResult<Prisma.$ClassifiedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'Int'>
    readonly alt: FieldRef<"Image", 'String'>
    readonly src: FieldRef<"Image", 'String'>
    readonly classifiedId: FieldRef<"Image", 'Int'>
    readonly blurhash: FieldRef<"Image", 'String'>
    readonly isMain: FieldRef<"Image", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number | $Types.Skip
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput | $Types.Skip
    /**
     * Limit how many Images to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput | $Types.Skip
    /**
     * Limit how many Images to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput | $Types.Skip
    /**
     * Limit how many Images to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Model PageView
   */

  export type AggregatePageView = {
    _count: PageViewCountAggregateOutputType | null
    _avg: PageViewAvgAggregateOutputType | null
    _sum: PageViewSumAggregateOutputType | null
    _min: PageViewMinAggregateOutputType | null
    _max: PageViewMaxAggregateOutputType | null
  }

  export type PageViewAvgAggregateOutputType = {
    id: number | null
  }

  export type PageViewSumAggregateOutputType = {
    id: number | null
  }

  export type PageViewMinAggregateOutputType = {
    id: number | null
    path: string | null
    viewedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    referrer: string | null
  }

  export type PageViewMaxAggregateOutputType = {
    id: number | null
    path: string | null
    viewedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    referrer: string | null
  }

  export type PageViewCountAggregateOutputType = {
    id: number
    path: number
    viewedAt: number
    ipAddress: number
    userAgent: number
    referrer: number
    _all: number
  }


  export type PageViewAvgAggregateInputType = {
    id?: true | $Types.Skip
  }

  export type PageViewSumAggregateInputType = {
    id?: true | $Types.Skip
  }

  export type PageViewMinAggregateInputType = {
    id?: true | $Types.Skip
    path?: true | $Types.Skip
    viewedAt?: true | $Types.Skip
    ipAddress?: true | $Types.Skip
    userAgent?: true | $Types.Skip
    referrer?: true | $Types.Skip
  }

  export type PageViewMaxAggregateInputType = {
    id?: true | $Types.Skip
    path?: true | $Types.Skip
    viewedAt?: true | $Types.Skip
    ipAddress?: true | $Types.Skip
    userAgent?: true | $Types.Skip
    referrer?: true | $Types.Skip
  }

  export type PageViewCountAggregateInputType = {
    id?: true | $Types.Skip
    path?: true | $Types.Skip
    viewedAt?: true | $Types.Skip
    ipAddress?: true | $Types.Skip
    userAgent?: true | $Types.Skip
    referrer?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type PageViewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageView to aggregate.
     */
    where?: PageViewWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageViews to fetch.
     */
    orderBy?: PageViewOrderByWithRelationInput | PageViewOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PageViewWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageViews from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageViews.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PageViews
    **/
    _count?: true | PageViewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PageViewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PageViewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageViewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageViewMaxAggregateInputType
  }

  export type GetPageViewAggregateType<T extends PageViewAggregateArgs> = {
        [P in keyof T & keyof AggregatePageView]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePageView[P]>
      : GetScalarType<T[P], AggregatePageView[P]>
  }




  export type PageViewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageViewWhereInput | $Types.Skip
    orderBy?: PageViewOrderByWithAggregationInput | PageViewOrderByWithAggregationInput[] | $Types.Skip
    by: PageViewScalarFieldEnum[] | PageViewScalarFieldEnum
    having?: PageViewScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: PageViewCountAggregateInputType | true
    _avg?: PageViewAvgAggregateInputType
    _sum?: PageViewSumAggregateInputType
    _min?: PageViewMinAggregateInputType
    _max?: PageViewMaxAggregateInputType
  }

  export type PageViewGroupByOutputType = {
    id: number
    path: string
    viewedAt: Date
    ipAddress: string | null
    userAgent: string | null
    referrer: string | null
    _count: PageViewCountAggregateOutputType | null
    _avg: PageViewAvgAggregateOutputType | null
    _sum: PageViewSumAggregateOutputType | null
    _min: PageViewMinAggregateOutputType | null
    _max: PageViewMaxAggregateOutputType | null
  }

  type GetPageViewGroupByPayload<T extends PageViewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageViewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageViewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageViewGroupByOutputType[P]>
            : GetScalarType<T[P], PageViewGroupByOutputType[P]>
        }
      >
    >


  export type PageViewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    path?: boolean | $Types.Skip
    viewedAt?: boolean | $Types.Skip
    ipAddress?: boolean | $Types.Skip
    userAgent?: boolean | $Types.Skip
    referrer?: boolean | $Types.Skip
  }, ExtArgs["result"]["pageView"]>

  export type PageViewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    path?: boolean | $Types.Skip
    viewedAt?: boolean | $Types.Skip
    ipAddress?: boolean | $Types.Skip
    userAgent?: boolean | $Types.Skip
    referrer?: boolean | $Types.Skip
  }, ExtArgs["result"]["pageView"]>

  export type PageViewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    path?: boolean | $Types.Skip
    viewedAt?: boolean | $Types.Skip
    ipAddress?: boolean | $Types.Skip
    userAgent?: boolean | $Types.Skip
    referrer?: boolean | $Types.Skip
  }, ExtArgs["result"]["pageView"]>

  export type PageViewSelectScalar = {
    id?: boolean | $Types.Skip
    path?: boolean | $Types.Skip
    viewedAt?: boolean | $Types.Skip
    ipAddress?: boolean | $Types.Skip
    userAgent?: boolean | $Types.Skip
    referrer?: boolean | $Types.Skip
  }

  export type PageViewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "path" | "viewedAt" | "ipAddress" | "userAgent" | "referrer", ExtArgs["result"]["pageView"], $Types.Skip>

  export type $PageViewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PageView"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      path: string
      viewedAt: Date
      ipAddress: string | null
      userAgent: string | null
      referrer: string | null
    }, ExtArgs["result"]["pageView"]>
    composites: {}
  }

  type PageViewGetPayload<S extends boolean | null | undefined | PageViewDefaultArgs> = $Result.GetResult<Prisma.$PageViewPayload, S>

  type PageViewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PageViewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PageViewCountAggregateInputType | true
    }

  export interface PageViewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PageView'], meta: { name: 'PageView' } }
    /**
     * Find zero or one PageView that matches the filter.
     * @param {PageViewFindUniqueArgs} args - Arguments to find a PageView
     * @example
     * // Get one PageView
     * const pageView = await prisma.pageView.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PageViewFindUniqueArgs>(args: SelectSubset<T, PageViewFindUniqueArgs<ExtArgs>>): Prisma__PageViewClient<$Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PageView that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PageViewFindUniqueOrThrowArgs} args - Arguments to find a PageView
     * @example
     * // Get one PageView
     * const pageView = await prisma.pageView.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PageViewFindUniqueOrThrowArgs>(args: SelectSubset<T, PageViewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PageViewClient<$Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PageView that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewFindFirstArgs} args - Arguments to find a PageView
     * @example
     * // Get one PageView
     * const pageView = await prisma.pageView.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PageViewFindFirstArgs>(args?: SelectSubset<T, PageViewFindFirstArgs<ExtArgs>>): Prisma__PageViewClient<$Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PageView that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewFindFirstOrThrowArgs} args - Arguments to find a PageView
     * @example
     * // Get one PageView
     * const pageView = await prisma.pageView.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PageViewFindFirstOrThrowArgs>(args?: SelectSubset<T, PageViewFindFirstOrThrowArgs<ExtArgs>>): Prisma__PageViewClient<$Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PageViews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PageViews
     * const pageViews = await prisma.pageView.findMany()
     * 
     * // Get first 10 PageViews
     * const pageViews = await prisma.pageView.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageViewWithIdOnly = await prisma.pageView.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PageViewFindManyArgs>(args?: SelectSubset<T, PageViewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PageView.
     * @param {PageViewCreateArgs} args - Arguments to create a PageView.
     * @example
     * // Create one PageView
     * const PageView = await prisma.pageView.create({
     *   data: {
     *     // ... data to create a PageView
     *   }
     * })
     * 
     */
    create<T extends PageViewCreateArgs>(args: SelectSubset<T, PageViewCreateArgs<ExtArgs>>): Prisma__PageViewClient<$Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PageViews.
     * @param {PageViewCreateManyArgs} args - Arguments to create many PageViews.
     * @example
     * // Create many PageViews
     * const pageView = await prisma.pageView.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PageViewCreateManyArgs>(args?: SelectSubset<T, PageViewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PageViews and returns the data saved in the database.
     * @param {PageViewCreateManyAndReturnArgs} args - Arguments to create many PageViews.
     * @example
     * // Create many PageViews
     * const pageView = await prisma.pageView.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PageViews and only return the `id`
     * const pageViewWithIdOnly = await prisma.pageView.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PageViewCreateManyAndReturnArgs>(args?: SelectSubset<T, PageViewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PageView.
     * @param {PageViewDeleteArgs} args - Arguments to delete one PageView.
     * @example
     * // Delete one PageView
     * const PageView = await prisma.pageView.delete({
     *   where: {
     *     // ... filter to delete one PageView
     *   }
     * })
     * 
     */
    delete<T extends PageViewDeleteArgs>(args: SelectSubset<T, PageViewDeleteArgs<ExtArgs>>): Prisma__PageViewClient<$Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PageView.
     * @param {PageViewUpdateArgs} args - Arguments to update one PageView.
     * @example
     * // Update one PageView
     * const pageView = await prisma.pageView.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PageViewUpdateArgs>(args: SelectSubset<T, PageViewUpdateArgs<ExtArgs>>): Prisma__PageViewClient<$Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PageViews.
     * @param {PageViewDeleteManyArgs} args - Arguments to filter PageViews to delete.
     * @example
     * // Delete a few PageViews
     * const { count } = await prisma.pageView.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PageViewDeleteManyArgs>(args?: SelectSubset<T, PageViewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PageViews
     * const pageView = await prisma.pageView.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PageViewUpdateManyArgs>(args: SelectSubset<T, PageViewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageViews and returns the data updated in the database.
     * @param {PageViewUpdateManyAndReturnArgs} args - Arguments to update many PageViews.
     * @example
     * // Update many PageViews
     * const pageView = await prisma.pageView.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PageViews and only return the `id`
     * const pageViewWithIdOnly = await prisma.pageView.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PageViewUpdateManyAndReturnArgs>(args: SelectSubset<T, PageViewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PageView.
     * @param {PageViewUpsertArgs} args - Arguments to update or create a PageView.
     * @example
     * // Update or create a PageView
     * const pageView = await prisma.pageView.upsert({
     *   create: {
     *     // ... data to create a PageView
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PageView we want to update
     *   }
     * })
     */
    upsert<T extends PageViewUpsertArgs>(args: SelectSubset<T, PageViewUpsertArgs<ExtArgs>>): Prisma__PageViewClient<$Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PageViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewCountArgs} args - Arguments to filter PageViews to count.
     * @example
     * // Count the number of PageViews
     * const count = await prisma.pageView.count({
     *   where: {
     *     // ... the filter for the PageViews we want to count
     *   }
     * })
    **/
    count<T extends PageViewCountArgs>(
      args?: Subset<T, PageViewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageViewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PageView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PageViewAggregateArgs>(args: Subset<T, PageViewAggregateArgs>): Prisma.PrismaPromise<GetPageViewAggregateType<T>>

    /**
     * Group by PageView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewGroupByArgs} args - Group by arguments.
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
      T extends PageViewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageViewGroupByArgs['orderBy'] }
        : { orderBy?: PageViewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PageViewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageViewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PageView model
   */
  readonly fields: PageViewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PageView.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PageViewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PageView model
   */
  interface PageViewFieldRefs {
    readonly id: FieldRef<"PageView", 'Int'>
    readonly path: FieldRef<"PageView", 'String'>
    readonly viewedAt: FieldRef<"PageView", 'DateTime'>
    readonly ipAddress: FieldRef<"PageView", 'String'>
    readonly userAgent: FieldRef<"PageView", 'String'>
    readonly referrer: FieldRef<"PageView", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PageView findUnique
   */
  export type PageViewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageView
     */
    select?: PageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageView
     */
    omit?: PageViewOmit<ExtArgs> | null
    /**
     * Filter, which PageView to fetch.
     */
    where: PageViewWhereUniqueInput
  }

  /**
   * PageView findUniqueOrThrow
   */
  export type PageViewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageView
     */
    select?: PageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageView
     */
    omit?: PageViewOmit<ExtArgs> | null
    /**
     * Filter, which PageView to fetch.
     */
    where: PageViewWhereUniqueInput
  }

  /**
   * PageView findFirst
   */
  export type PageViewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageView
     */
    select?: PageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageView
     */
    omit?: PageViewOmit<ExtArgs> | null
    /**
     * Filter, which PageView to fetch.
     */
    where?: PageViewWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageViews to fetch.
     */
    orderBy?: PageViewOrderByWithRelationInput | PageViewOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageViews.
     */
    cursor?: PageViewWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageViews from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageViews.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageViews.
     */
    distinct?: PageViewScalarFieldEnum | PageViewScalarFieldEnum[] | $Types.Skip
  }

  /**
   * PageView findFirstOrThrow
   */
  export type PageViewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageView
     */
    select?: PageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageView
     */
    omit?: PageViewOmit<ExtArgs> | null
    /**
     * Filter, which PageView to fetch.
     */
    where?: PageViewWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageViews to fetch.
     */
    orderBy?: PageViewOrderByWithRelationInput | PageViewOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageViews.
     */
    cursor?: PageViewWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageViews from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageViews.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageViews.
     */
    distinct?: PageViewScalarFieldEnum | PageViewScalarFieldEnum[] | $Types.Skip
  }

  /**
   * PageView findMany
   */
  export type PageViewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageView
     */
    select?: PageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageView
     */
    omit?: PageViewOmit<ExtArgs> | null
    /**
     * Filter, which PageViews to fetch.
     */
    where?: PageViewWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageViews to fetch.
     */
    orderBy?: PageViewOrderByWithRelationInput | PageViewOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PageViews.
     */
    cursor?: PageViewWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageViews from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageViews.
     */
    skip?: number | $Types.Skip
    distinct?: PageViewScalarFieldEnum | PageViewScalarFieldEnum[] | $Types.Skip
  }

  /**
   * PageView create
   */
  export type PageViewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageView
     */
    select?: PageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageView
     */
    omit?: PageViewOmit<ExtArgs> | null
    /**
     * The data needed to create a PageView.
     */
    data: XOR<PageViewCreateInput, PageViewUncheckedCreateInput>
  }

  /**
   * PageView createMany
   */
  export type PageViewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PageViews.
     */
    data: PageViewCreateManyInput | PageViewCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * PageView createManyAndReturn
   */
  export type PageViewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageView
     */
    select?: PageViewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PageView
     */
    omit?: PageViewOmit<ExtArgs> | null
    /**
     * The data used to create many PageViews.
     */
    data: PageViewCreateManyInput | PageViewCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * PageView update
   */
  export type PageViewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageView
     */
    select?: PageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageView
     */
    omit?: PageViewOmit<ExtArgs> | null
    /**
     * The data needed to update a PageView.
     */
    data: XOR<PageViewUpdateInput, PageViewUncheckedUpdateInput>
    /**
     * Choose, which PageView to update.
     */
    where: PageViewWhereUniqueInput
  }

  /**
   * PageView updateMany
   */
  export type PageViewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PageViews.
     */
    data: XOR<PageViewUpdateManyMutationInput, PageViewUncheckedUpdateManyInput>
    /**
     * Filter which PageViews to update
     */
    where?: PageViewWhereInput | $Types.Skip
    /**
     * Limit how many PageViews to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * PageView updateManyAndReturn
   */
  export type PageViewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageView
     */
    select?: PageViewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PageView
     */
    omit?: PageViewOmit<ExtArgs> | null
    /**
     * The data used to update PageViews.
     */
    data: XOR<PageViewUpdateManyMutationInput, PageViewUncheckedUpdateManyInput>
    /**
     * Filter which PageViews to update
     */
    where?: PageViewWhereInput | $Types.Skip
    /**
     * Limit how many PageViews to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * PageView upsert
   */
  export type PageViewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageView
     */
    select?: PageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageView
     */
    omit?: PageViewOmit<ExtArgs> | null
    /**
     * The filter to search for the PageView to update in case it exists.
     */
    where: PageViewWhereUniqueInput
    /**
     * In case the PageView found by the `where` argument doesn't exist, create a new PageView with this data.
     */
    create: XOR<PageViewCreateInput, PageViewUncheckedCreateInput>
    /**
     * In case the PageView was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageViewUpdateInput, PageViewUncheckedUpdateInput>
  }

  /**
   * PageView delete
   */
  export type PageViewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageView
     */
    select?: PageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageView
     */
    omit?: PageViewOmit<ExtArgs> | null
    /**
     * Filter which PageView to delete.
     */
    where: PageViewWhereUniqueInput
  }

  /**
   * PageView deleteMany
   */
  export type PageViewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageViews to delete
     */
    where?: PageViewWhereInput | $Types.Skip
    /**
     * Limit how many PageViews to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * PageView without action
   */
  export type PageViewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageView
     */
    select?: PageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageView
     */
    omit?: PageViewOmit<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    requires2FA: boolean | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
    requires2FA: boolean | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    requires2FA: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true | $Types.Skip
    sessionToken?: true | $Types.Skip
    userId?: true | $Types.Skip
    expires?: true | $Types.Skip
    requires2FA?: true | $Types.Skip
  }

  export type SessionMaxAggregateInputType = {
    id?: true | $Types.Skip
    sessionToken?: true | $Types.Skip
    userId?: true | $Types.Skip
    expires?: true | $Types.Skip
    requires2FA?: true | $Types.Skip
  }

  export type SessionCountAggregateInputType = {
    id?: true | $Types.Skip
    sessionToken?: true | $Types.Skip
    userId?: true | $Types.Skip
    expires?: true | $Types.Skip
    requires2FA?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput | $Types.Skip
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[] | $Types.Skip
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    requires2FA: boolean
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    sessionToken?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    expires?: boolean | $Types.Skip
    requires2FA?: boolean | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    sessionToken?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    expires?: boolean | $Types.Skip
    requires2FA?: boolean | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    sessionToken?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    expires?: boolean | $Types.Skip
    requires2FA?: boolean | $Types.Skip
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean | $Types.Skip
    sessionToken?: boolean | $Types.Skip
    userId?: boolean | $Types.Skip
    expires?: boolean | $Types.Skip
    requires2FA?: boolean | $Types.Skip
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires" | "requires2FA", ExtArgs["result"]["session"], $Types.Skip>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
      requires2FA: boolean
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
    readonly requires2FA: FieldRef<"Session", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number | $Types.Skip
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput | $Types.Skip
    /**
     * Limit how many Sessions to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput | $Types.Skip
    /**
     * Limit how many Sessions to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput | $Types.Skip
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Make
   */

  export type AggregateMake = {
    _count: MakeCountAggregateOutputType | null
    _avg: MakeAvgAggregateOutputType | null
    _sum: MakeSumAggregateOutputType | null
    _min: MakeMinAggregateOutputType | null
    _max: MakeMaxAggregateOutputType | null
  }

  export type MakeAvgAggregateOutputType = {
    id: number | null
  }

  export type MakeSumAggregateOutputType = {
    id: number | null
  }

  export type MakeMinAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MakeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MakeCountAggregateOutputType = {
    id: number
    name: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MakeAvgAggregateInputType = {
    id?: true | $Types.Skip
  }

  export type MakeSumAggregateInputType = {
    id?: true | $Types.Skip
  }

  export type MakeMinAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    image?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type MakeMaxAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    image?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type MakeCountAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    image?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type MakeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Make to aggregate.
     */
    where?: MakeWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Makes to fetch.
     */
    orderBy?: MakeOrderByWithRelationInput | MakeOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MakeWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Makes from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Makes.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Makes
    **/
    _count?: true | MakeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MakeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MakeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MakeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MakeMaxAggregateInputType
  }

  export type GetMakeAggregateType<T extends MakeAggregateArgs> = {
        [P in keyof T & keyof AggregateMake]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMake[P]>
      : GetScalarType<T[P], AggregateMake[P]>
  }




  export type MakeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MakeWhereInput | $Types.Skip
    orderBy?: MakeOrderByWithAggregationInput | MakeOrderByWithAggregationInput[] | $Types.Skip
    by: MakeScalarFieldEnum[] | MakeScalarFieldEnum
    having?: MakeScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: MakeCountAggregateInputType | true
    _avg?: MakeAvgAggregateInputType
    _sum?: MakeSumAggregateInputType
    _min?: MakeMinAggregateInputType
    _max?: MakeMaxAggregateInputType
  }

  export type MakeGroupByOutputType = {
    id: number
    name: string
    image: string
    createdAt: Date
    updatedAt: Date
    _count: MakeCountAggregateOutputType | null
    _avg: MakeAvgAggregateOutputType | null
    _sum: MakeSumAggregateOutputType | null
    _min: MakeMinAggregateOutputType | null
    _max: MakeMaxAggregateOutputType | null
  }

  type GetMakeGroupByPayload<T extends MakeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MakeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MakeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MakeGroupByOutputType[P]>
            : GetScalarType<T[P], MakeGroupByOutputType[P]>
        }
      >
    >


  export type MakeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    image?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    models?: boolean | Make$modelsArgs<ExtArgs> | $Types.Skip
    classifieds?: boolean | Make$classifiedsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | MakeCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["make"]>

  export type MakeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    image?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }, ExtArgs["result"]["make"]>

  export type MakeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    image?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }, ExtArgs["result"]["make"]>

  export type MakeSelectScalar = {
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    image?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }

  export type MakeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["make"], $Types.Skip>
  export type MakeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    models?: boolean | Make$modelsArgs<ExtArgs> | $Types.Skip
    classifieds?: boolean | Make$classifiedsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | MakeCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type MakeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MakeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MakePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Make"
    objects: {
      models: Prisma.$ModelPayload<ExtArgs>[]
      classifieds: Prisma.$ClassifiedPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      image: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["make"]>
    composites: {}
  }

  type MakeGetPayload<S extends boolean | null | undefined | MakeDefaultArgs> = $Result.GetResult<Prisma.$MakePayload, S>

  type MakeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MakeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MakeCountAggregateInputType | true
    }

  export interface MakeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Make'], meta: { name: 'Make' } }
    /**
     * Find zero or one Make that matches the filter.
     * @param {MakeFindUniqueArgs} args - Arguments to find a Make
     * @example
     * // Get one Make
     * const make = await prisma.make.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MakeFindUniqueArgs>(args: SelectSubset<T, MakeFindUniqueArgs<ExtArgs>>): Prisma__MakeClient<$Result.GetResult<Prisma.$MakePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Make that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MakeFindUniqueOrThrowArgs} args - Arguments to find a Make
     * @example
     * // Get one Make
     * const make = await prisma.make.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MakeFindUniqueOrThrowArgs>(args: SelectSubset<T, MakeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MakeClient<$Result.GetResult<Prisma.$MakePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Make that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeFindFirstArgs} args - Arguments to find a Make
     * @example
     * // Get one Make
     * const make = await prisma.make.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MakeFindFirstArgs>(args?: SelectSubset<T, MakeFindFirstArgs<ExtArgs>>): Prisma__MakeClient<$Result.GetResult<Prisma.$MakePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Make that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeFindFirstOrThrowArgs} args - Arguments to find a Make
     * @example
     * // Get one Make
     * const make = await prisma.make.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MakeFindFirstOrThrowArgs>(args?: SelectSubset<T, MakeFindFirstOrThrowArgs<ExtArgs>>): Prisma__MakeClient<$Result.GetResult<Prisma.$MakePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Makes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Makes
     * const makes = await prisma.make.findMany()
     * 
     * // Get first 10 Makes
     * const makes = await prisma.make.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const makeWithIdOnly = await prisma.make.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MakeFindManyArgs>(args?: SelectSubset<T, MakeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MakePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Make.
     * @param {MakeCreateArgs} args - Arguments to create a Make.
     * @example
     * // Create one Make
     * const Make = await prisma.make.create({
     *   data: {
     *     // ... data to create a Make
     *   }
     * })
     * 
     */
    create<T extends MakeCreateArgs>(args: SelectSubset<T, MakeCreateArgs<ExtArgs>>): Prisma__MakeClient<$Result.GetResult<Prisma.$MakePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Makes.
     * @param {MakeCreateManyArgs} args - Arguments to create many Makes.
     * @example
     * // Create many Makes
     * const make = await prisma.make.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MakeCreateManyArgs>(args?: SelectSubset<T, MakeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Makes and returns the data saved in the database.
     * @param {MakeCreateManyAndReturnArgs} args - Arguments to create many Makes.
     * @example
     * // Create many Makes
     * const make = await prisma.make.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Makes and only return the `id`
     * const makeWithIdOnly = await prisma.make.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MakeCreateManyAndReturnArgs>(args?: SelectSubset<T, MakeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MakePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Make.
     * @param {MakeDeleteArgs} args - Arguments to delete one Make.
     * @example
     * // Delete one Make
     * const Make = await prisma.make.delete({
     *   where: {
     *     // ... filter to delete one Make
     *   }
     * })
     * 
     */
    delete<T extends MakeDeleteArgs>(args: SelectSubset<T, MakeDeleteArgs<ExtArgs>>): Prisma__MakeClient<$Result.GetResult<Prisma.$MakePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Make.
     * @param {MakeUpdateArgs} args - Arguments to update one Make.
     * @example
     * // Update one Make
     * const make = await prisma.make.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MakeUpdateArgs>(args: SelectSubset<T, MakeUpdateArgs<ExtArgs>>): Prisma__MakeClient<$Result.GetResult<Prisma.$MakePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Makes.
     * @param {MakeDeleteManyArgs} args - Arguments to filter Makes to delete.
     * @example
     * // Delete a few Makes
     * const { count } = await prisma.make.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MakeDeleteManyArgs>(args?: SelectSubset<T, MakeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Makes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Makes
     * const make = await prisma.make.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MakeUpdateManyArgs>(args: SelectSubset<T, MakeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Makes and returns the data updated in the database.
     * @param {MakeUpdateManyAndReturnArgs} args - Arguments to update many Makes.
     * @example
     * // Update many Makes
     * const make = await prisma.make.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Makes and only return the `id`
     * const makeWithIdOnly = await prisma.make.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MakeUpdateManyAndReturnArgs>(args: SelectSubset<T, MakeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MakePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Make.
     * @param {MakeUpsertArgs} args - Arguments to update or create a Make.
     * @example
     * // Update or create a Make
     * const make = await prisma.make.upsert({
     *   create: {
     *     // ... data to create a Make
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Make we want to update
     *   }
     * })
     */
    upsert<T extends MakeUpsertArgs>(args: SelectSubset<T, MakeUpsertArgs<ExtArgs>>): Prisma__MakeClient<$Result.GetResult<Prisma.$MakePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Makes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeCountArgs} args - Arguments to filter Makes to count.
     * @example
     * // Count the number of Makes
     * const count = await prisma.make.count({
     *   where: {
     *     // ... the filter for the Makes we want to count
     *   }
     * })
    **/
    count<T extends MakeCountArgs>(
      args?: Subset<T, MakeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MakeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Make.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MakeAggregateArgs>(args: Subset<T, MakeAggregateArgs>): Prisma.PrismaPromise<GetMakeAggregateType<T>>

    /**
     * Group by Make.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeGroupByArgs} args - Group by arguments.
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
      T extends MakeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MakeGroupByArgs['orderBy'] }
        : { orderBy?: MakeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MakeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMakeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Make model
   */
  readonly fields: MakeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Make.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MakeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    models<T extends Make$modelsArgs<ExtArgs> = {}>(args?: Subset<T, Make$modelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    classifieds<T extends Make$classifiedsArgs<ExtArgs> = {}>(args?: Subset<T, Make$classifiedsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassifiedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Make model
   */
  interface MakeFieldRefs {
    readonly id: FieldRef<"Make", 'Int'>
    readonly name: FieldRef<"Make", 'String'>
    readonly image: FieldRef<"Make", 'String'>
    readonly createdAt: FieldRef<"Make", 'DateTime'>
    readonly updatedAt: FieldRef<"Make", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Make findUnique
   */
  export type MakeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Make
     */
    select?: MakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Make
     */
    omit?: MakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeInclude<ExtArgs> | null
    /**
     * Filter, which Make to fetch.
     */
    where: MakeWhereUniqueInput
  }

  /**
   * Make findUniqueOrThrow
   */
  export type MakeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Make
     */
    select?: MakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Make
     */
    omit?: MakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeInclude<ExtArgs> | null
    /**
     * Filter, which Make to fetch.
     */
    where: MakeWhereUniqueInput
  }

  /**
   * Make findFirst
   */
  export type MakeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Make
     */
    select?: MakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Make
     */
    omit?: MakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeInclude<ExtArgs> | null
    /**
     * Filter, which Make to fetch.
     */
    where?: MakeWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Makes to fetch.
     */
    orderBy?: MakeOrderByWithRelationInput | MakeOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Makes.
     */
    cursor?: MakeWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Makes from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Makes.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Makes.
     */
    distinct?: MakeScalarFieldEnum | MakeScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Make findFirstOrThrow
   */
  export type MakeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Make
     */
    select?: MakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Make
     */
    omit?: MakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeInclude<ExtArgs> | null
    /**
     * Filter, which Make to fetch.
     */
    where?: MakeWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Makes to fetch.
     */
    orderBy?: MakeOrderByWithRelationInput | MakeOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Makes.
     */
    cursor?: MakeWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Makes from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Makes.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Makes.
     */
    distinct?: MakeScalarFieldEnum | MakeScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Make findMany
   */
  export type MakeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Make
     */
    select?: MakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Make
     */
    omit?: MakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeInclude<ExtArgs> | null
    /**
     * Filter, which Makes to fetch.
     */
    where?: MakeWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Makes to fetch.
     */
    orderBy?: MakeOrderByWithRelationInput | MakeOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Makes.
     */
    cursor?: MakeWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Makes from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Makes.
     */
    skip?: number | $Types.Skip
    distinct?: MakeScalarFieldEnum | MakeScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Make create
   */
  export type MakeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Make
     */
    select?: MakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Make
     */
    omit?: MakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeInclude<ExtArgs> | null
    /**
     * The data needed to create a Make.
     */
    data: XOR<MakeCreateInput, MakeUncheckedCreateInput>
  }

  /**
   * Make createMany
   */
  export type MakeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Makes.
     */
    data: MakeCreateManyInput | MakeCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Make createManyAndReturn
   */
  export type MakeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Make
     */
    select?: MakeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Make
     */
    omit?: MakeOmit<ExtArgs> | null
    /**
     * The data used to create many Makes.
     */
    data: MakeCreateManyInput | MakeCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Make update
   */
  export type MakeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Make
     */
    select?: MakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Make
     */
    omit?: MakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeInclude<ExtArgs> | null
    /**
     * The data needed to update a Make.
     */
    data: XOR<MakeUpdateInput, MakeUncheckedUpdateInput>
    /**
     * Choose, which Make to update.
     */
    where: MakeWhereUniqueInput
  }

  /**
   * Make updateMany
   */
  export type MakeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Makes.
     */
    data: XOR<MakeUpdateManyMutationInput, MakeUncheckedUpdateManyInput>
    /**
     * Filter which Makes to update
     */
    where?: MakeWhereInput | $Types.Skip
    /**
     * Limit how many Makes to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Make updateManyAndReturn
   */
  export type MakeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Make
     */
    select?: MakeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Make
     */
    omit?: MakeOmit<ExtArgs> | null
    /**
     * The data used to update Makes.
     */
    data: XOR<MakeUpdateManyMutationInput, MakeUncheckedUpdateManyInput>
    /**
     * Filter which Makes to update
     */
    where?: MakeWhereInput | $Types.Skip
    /**
     * Limit how many Makes to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Make upsert
   */
  export type MakeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Make
     */
    select?: MakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Make
     */
    omit?: MakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeInclude<ExtArgs> | null
    /**
     * The filter to search for the Make to update in case it exists.
     */
    where: MakeWhereUniqueInput
    /**
     * In case the Make found by the `where` argument doesn't exist, create a new Make with this data.
     */
    create: XOR<MakeCreateInput, MakeUncheckedCreateInput>
    /**
     * In case the Make was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MakeUpdateInput, MakeUncheckedUpdateInput>
  }

  /**
   * Make delete
   */
  export type MakeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Make
     */
    select?: MakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Make
     */
    omit?: MakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeInclude<ExtArgs> | null
    /**
     * Filter which Make to delete.
     */
    where: MakeWhereUniqueInput
  }

  /**
   * Make deleteMany
   */
  export type MakeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Makes to delete
     */
    where?: MakeWhereInput | $Types.Skip
    /**
     * Limit how many Makes to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Make.models
   */
  export type Make$modelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    where?: ModelWhereInput | $Types.Skip
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[] | $Types.Skip
    cursor?: ModelWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Make.classifieds
   */
  export type Make$classifiedsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classified
     */
    select?: ClassifiedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classified
     */
    omit?: ClassifiedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassifiedInclude<ExtArgs> | null
    where?: ClassifiedWhereInput | $Types.Skip
    orderBy?: ClassifiedOrderByWithRelationInput | ClassifiedOrderByWithRelationInput[] | $Types.Skip
    cursor?: ClassifiedWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: ClassifiedScalarFieldEnum | ClassifiedScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Make without action
   */
  export type MakeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Make
     */
    select?: MakeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Make
     */
    omit?: MakeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeInclude<ExtArgs> | null
  }


  /**
   * Model Model
   */

  export type AggregateModel = {
    _count: ModelCountAggregateOutputType | null
    _avg: ModelAvgAggregateOutputType | null
    _sum: ModelSumAggregateOutputType | null
    _min: ModelMinAggregateOutputType | null
    _max: ModelMaxAggregateOutputType | null
  }

  export type ModelAvgAggregateOutputType = {
    id: number | null
    makeId: number | null
  }

  export type ModelSumAggregateOutputType = {
    id: number | null
    makeId: number | null
  }

  export type ModelMinAggregateOutputType = {
    id: number | null
    name: string | null
    makeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModelMaxAggregateOutputType = {
    id: number | null
    name: string | null
    makeId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModelCountAggregateOutputType = {
    id: number
    name: number
    makeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ModelAvgAggregateInputType = {
    id?: true | $Types.Skip
    makeId?: true | $Types.Skip
  }

  export type ModelSumAggregateInputType = {
    id?: true | $Types.Skip
    makeId?: true | $Types.Skip
  }

  export type ModelMinAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    makeId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type ModelMaxAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    makeId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type ModelCountAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    makeId?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type ModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Model to aggregate.
     */
    where?: ModelWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModelWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Models
    **/
    _count?: true | ModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModelMaxAggregateInputType
  }

  export type GetModelAggregateType<T extends ModelAggregateArgs> = {
        [P in keyof T & keyof AggregateModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModel[P]>
      : GetScalarType<T[P], AggregateModel[P]>
  }




  export type ModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelWhereInput | $Types.Skip
    orderBy?: ModelOrderByWithAggregationInput | ModelOrderByWithAggregationInput[] | $Types.Skip
    by: ModelScalarFieldEnum[] | ModelScalarFieldEnum
    having?: ModelScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: ModelCountAggregateInputType | true
    _avg?: ModelAvgAggregateInputType
    _sum?: ModelSumAggregateInputType
    _min?: ModelMinAggregateInputType
    _max?: ModelMaxAggregateInputType
  }

  export type ModelGroupByOutputType = {
    id: number
    name: string
    makeId: number
    createdAt: Date
    updatedAt: Date
    _count: ModelCountAggregateOutputType | null
    _avg: ModelAvgAggregateOutputType | null
    _sum: ModelSumAggregateOutputType | null
    _min: ModelMinAggregateOutputType | null
    _max: ModelMaxAggregateOutputType | null
  }

  type GetModelGroupByPayload<T extends ModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModelGroupByOutputType[P]>
            : GetScalarType<T[P], ModelGroupByOutputType[P]>
        }
      >
    >


  export type ModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    makeId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    make?: boolean | MakeDefaultArgs<ExtArgs> | $Types.Skip
    modelVariants?: boolean | Model$modelVariantsArgs<ExtArgs> | $Types.Skip
    classifieds?: boolean | Model$classifiedsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | ModelCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["model"]>

  export type ModelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    makeId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    make?: boolean | MakeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["model"]>

  export type ModelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    makeId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    make?: boolean | MakeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["model"]>

  export type ModelSelectScalar = {
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    makeId?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }

  export type ModelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "makeId" | "createdAt" | "updatedAt", ExtArgs["result"]["model"], $Types.Skip>
  export type ModelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    make?: boolean | MakeDefaultArgs<ExtArgs> | $Types.Skip
    modelVariants?: boolean | Model$modelVariantsArgs<ExtArgs> | $Types.Skip
    classifieds?: boolean | Model$classifiedsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | ModelCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type ModelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    make?: boolean | MakeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type ModelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    make?: boolean | MakeDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $ModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Model"
    objects: {
      make: Prisma.$MakePayload<ExtArgs>
      modelVariants: Prisma.$ModelVariantPayload<ExtArgs>[]
      classifieds: Prisma.$ClassifiedPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      makeId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["model"]>
    composites: {}
  }

  type ModelGetPayload<S extends boolean | null | undefined | ModelDefaultArgs> = $Result.GetResult<Prisma.$ModelPayload, S>

  type ModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModelCountAggregateInputType | true
    }

  export interface ModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Model'], meta: { name: 'Model' } }
    /**
     * Find zero or one Model that matches the filter.
     * @param {ModelFindUniqueArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModelFindUniqueArgs>(args: SelectSubset<T, ModelFindUniqueArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Model that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModelFindUniqueOrThrowArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModelFindUniqueOrThrowArgs>(args: SelectSubset<T, ModelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Model that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindFirstArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModelFindFirstArgs>(args?: SelectSubset<T, ModelFindFirstArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Model that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindFirstOrThrowArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModelFindFirstOrThrowArgs>(args?: SelectSubset<T, ModelFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Models that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Models
     * const models = await prisma.model.findMany()
     * 
     * // Get first 10 Models
     * const models = await prisma.model.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modelWithIdOnly = await prisma.model.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModelFindManyArgs>(args?: SelectSubset<T, ModelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Model.
     * @param {ModelCreateArgs} args - Arguments to create a Model.
     * @example
     * // Create one Model
     * const Model = await prisma.model.create({
     *   data: {
     *     // ... data to create a Model
     *   }
     * })
     * 
     */
    create<T extends ModelCreateArgs>(args: SelectSubset<T, ModelCreateArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Models.
     * @param {ModelCreateManyArgs} args - Arguments to create many Models.
     * @example
     * // Create many Models
     * const model = await prisma.model.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModelCreateManyArgs>(args?: SelectSubset<T, ModelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Models and returns the data saved in the database.
     * @param {ModelCreateManyAndReturnArgs} args - Arguments to create many Models.
     * @example
     * // Create many Models
     * const model = await prisma.model.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Models and only return the `id`
     * const modelWithIdOnly = await prisma.model.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModelCreateManyAndReturnArgs>(args?: SelectSubset<T, ModelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Model.
     * @param {ModelDeleteArgs} args - Arguments to delete one Model.
     * @example
     * // Delete one Model
     * const Model = await prisma.model.delete({
     *   where: {
     *     // ... filter to delete one Model
     *   }
     * })
     * 
     */
    delete<T extends ModelDeleteArgs>(args: SelectSubset<T, ModelDeleteArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Model.
     * @param {ModelUpdateArgs} args - Arguments to update one Model.
     * @example
     * // Update one Model
     * const model = await prisma.model.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModelUpdateArgs>(args: SelectSubset<T, ModelUpdateArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Models.
     * @param {ModelDeleteManyArgs} args - Arguments to filter Models to delete.
     * @example
     * // Delete a few Models
     * const { count } = await prisma.model.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModelDeleteManyArgs>(args?: SelectSubset<T, ModelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Models
     * const model = await prisma.model.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModelUpdateManyArgs>(args: SelectSubset<T, ModelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Models and returns the data updated in the database.
     * @param {ModelUpdateManyAndReturnArgs} args - Arguments to update many Models.
     * @example
     * // Update many Models
     * const model = await prisma.model.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Models and only return the `id`
     * const modelWithIdOnly = await prisma.model.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModelUpdateManyAndReturnArgs>(args: SelectSubset<T, ModelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Model.
     * @param {ModelUpsertArgs} args - Arguments to update or create a Model.
     * @example
     * // Update or create a Model
     * const model = await prisma.model.upsert({
     *   create: {
     *     // ... data to create a Model
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Model we want to update
     *   }
     * })
     */
    upsert<T extends ModelUpsertArgs>(args: SelectSubset<T, ModelUpsertArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelCountArgs} args - Arguments to filter Models to count.
     * @example
     * // Count the number of Models
     * const count = await prisma.model.count({
     *   where: {
     *     // ... the filter for the Models we want to count
     *   }
     * })
    **/
    count<T extends ModelCountArgs>(
      args?: Subset<T, ModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Model.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModelAggregateArgs>(args: Subset<T, ModelAggregateArgs>): Prisma.PrismaPromise<GetModelAggregateType<T>>

    /**
     * Group by Model.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelGroupByArgs} args - Group by arguments.
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
      T extends ModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModelGroupByArgs['orderBy'] }
        : { orderBy?: ModelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Model model
   */
  readonly fields: ModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Model.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    make<T extends MakeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MakeDefaultArgs<ExtArgs>>): Prisma__MakeClient<$Result.GetResult<Prisma.$MakePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    modelVariants<T extends Model$modelVariantsArgs<ExtArgs> = {}>(args?: Subset<T, Model$modelVariantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelVariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    classifieds<T extends Model$classifiedsArgs<ExtArgs> = {}>(args?: Subset<T, Model$classifiedsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassifiedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Model model
   */
  interface ModelFieldRefs {
    readonly id: FieldRef<"Model", 'Int'>
    readonly name: FieldRef<"Model", 'String'>
    readonly makeId: FieldRef<"Model", 'Int'>
    readonly createdAt: FieldRef<"Model", 'DateTime'>
    readonly updatedAt: FieldRef<"Model", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Model findUnique
   */
  export type ModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where: ModelWhereUniqueInput
  }

  /**
   * Model findUniqueOrThrow
   */
  export type ModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where: ModelWhereUniqueInput
  }

  /**
   * Model findFirst
   */
  export type ModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where?: ModelWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Models.
     */
    cursor?: ModelWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Models.
     */
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Model findFirstOrThrow
   */
  export type ModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where?: ModelWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Models.
     */
    cursor?: ModelWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Models.
     */
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Model findMany
   */
  export type ModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Models to fetch.
     */
    where?: ModelWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Models.
     */
    cursor?: ModelWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number | $Types.Skip
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Model create
   */
  export type ModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * The data needed to create a Model.
     */
    data: XOR<ModelCreateInput, ModelUncheckedCreateInput>
  }

  /**
   * Model createMany
   */
  export type ModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Models.
     */
    data: ModelCreateManyInput | ModelCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * Model createManyAndReturn
   */
  export type ModelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * The data used to create many Models.
     */
    data: ModelCreateManyInput | ModelCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Model update
   */
  export type ModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * The data needed to update a Model.
     */
    data: XOR<ModelUpdateInput, ModelUncheckedUpdateInput>
    /**
     * Choose, which Model to update.
     */
    where: ModelWhereUniqueInput
  }

  /**
   * Model updateMany
   */
  export type ModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Models.
     */
    data: XOR<ModelUpdateManyMutationInput, ModelUncheckedUpdateManyInput>
    /**
     * Filter which Models to update
     */
    where?: ModelWhereInput | $Types.Skip
    /**
     * Limit how many Models to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Model updateManyAndReturn
   */
  export type ModelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * The data used to update Models.
     */
    data: XOR<ModelUpdateManyMutationInput, ModelUncheckedUpdateManyInput>
    /**
     * Filter which Models to update
     */
    where?: ModelWhereInput | $Types.Skip
    /**
     * Limit how many Models to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Model upsert
   */
  export type ModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * The filter to search for the Model to update in case it exists.
     */
    where: ModelWhereUniqueInput
    /**
     * In case the Model found by the `where` argument doesn't exist, create a new Model with this data.
     */
    create: XOR<ModelCreateInput, ModelUncheckedCreateInput>
    /**
     * In case the Model was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModelUpdateInput, ModelUncheckedUpdateInput>
  }

  /**
   * Model delete
   */
  export type ModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter which Model to delete.
     */
    where: ModelWhereUniqueInput
  }

  /**
   * Model deleteMany
   */
  export type ModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Models to delete
     */
    where?: ModelWhereInput | $Types.Skip
    /**
     * Limit how many Models to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * Model.modelVariants
   */
  export type Model$modelVariantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVariant
     */
    select?: ModelVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVariant
     */
    omit?: ModelVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVariantInclude<ExtArgs> | null
    where?: ModelVariantWhereInput | $Types.Skip
    orderBy?: ModelVariantOrderByWithRelationInput | ModelVariantOrderByWithRelationInput[] | $Types.Skip
    cursor?: ModelVariantWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: ModelVariantScalarFieldEnum | ModelVariantScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Model.classifieds
   */
  export type Model$classifiedsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classified
     */
    select?: ClassifiedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classified
     */
    omit?: ClassifiedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassifiedInclude<ExtArgs> | null
    where?: ClassifiedWhereInput | $Types.Skip
    orderBy?: ClassifiedOrderByWithRelationInput | ClassifiedOrderByWithRelationInput[] | $Types.Skip
    cursor?: ClassifiedWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: ClassifiedScalarFieldEnum | ClassifiedScalarFieldEnum[] | $Types.Skip
  }

  /**
   * Model without action
   */
  export type ModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Model
     */
    omit?: ModelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelInclude<ExtArgs> | null
  }


  /**
   * Model ModelVariant
   */

  export type AggregateModelVariant = {
    _count: ModelVariantCountAggregateOutputType | null
    _avg: ModelVariantAvgAggregateOutputType | null
    _sum: ModelVariantSumAggregateOutputType | null
    _min: ModelVariantMinAggregateOutputType | null
    _max: ModelVariantMaxAggregateOutputType | null
  }

  export type ModelVariantAvgAggregateOutputType = {
    id: number | null
    modelId: number | null
    yearStart: number | null
    yearEnd: number | null
  }

  export type ModelVariantSumAggregateOutputType = {
    id: number | null
    modelId: number | null
    yearStart: number | null
    yearEnd: number | null
  }

  export type ModelVariantMinAggregateOutputType = {
    id: number | null
    name: string | null
    modelId: number | null
    yearStart: number | null
    yearEnd: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModelVariantMaxAggregateOutputType = {
    id: number | null
    name: string | null
    modelId: number | null
    yearStart: number | null
    yearEnd: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModelVariantCountAggregateOutputType = {
    id: number
    name: number
    modelId: number
    yearStart: number
    yearEnd: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ModelVariantAvgAggregateInputType = {
    id?: true | $Types.Skip
    modelId?: true | $Types.Skip
    yearStart?: true | $Types.Skip
    yearEnd?: true | $Types.Skip
  }

  export type ModelVariantSumAggregateInputType = {
    id?: true | $Types.Skip
    modelId?: true | $Types.Skip
    yearStart?: true | $Types.Skip
    yearEnd?: true | $Types.Skip
  }

  export type ModelVariantMinAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    modelId?: true | $Types.Skip
    yearStart?: true | $Types.Skip
    yearEnd?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type ModelVariantMaxAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    modelId?: true | $Types.Skip
    yearStart?: true | $Types.Skip
    yearEnd?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type ModelVariantCountAggregateInputType = {
    id?: true | $Types.Skip
    name?: true | $Types.Skip
    modelId?: true | $Types.Skip
    yearStart?: true | $Types.Skip
    yearEnd?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type ModelVariantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModelVariant to aggregate.
     */
    where?: ModelVariantWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelVariants to fetch.
     */
    orderBy?: ModelVariantOrderByWithRelationInput | ModelVariantOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModelVariantWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelVariants from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelVariants.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ModelVariants
    **/
    _count?: true | ModelVariantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModelVariantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModelVariantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModelVariantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModelVariantMaxAggregateInputType
  }

  export type GetModelVariantAggregateType<T extends ModelVariantAggregateArgs> = {
        [P in keyof T & keyof AggregateModelVariant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModelVariant[P]>
      : GetScalarType<T[P], AggregateModelVariant[P]>
  }




  export type ModelVariantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelVariantWhereInput | $Types.Skip
    orderBy?: ModelVariantOrderByWithAggregationInput | ModelVariantOrderByWithAggregationInput[] | $Types.Skip
    by: ModelVariantScalarFieldEnum[] | ModelVariantScalarFieldEnum
    having?: ModelVariantScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: ModelVariantCountAggregateInputType | true
    _avg?: ModelVariantAvgAggregateInputType
    _sum?: ModelVariantSumAggregateInputType
    _min?: ModelVariantMinAggregateInputType
    _max?: ModelVariantMaxAggregateInputType
  }

  export type ModelVariantGroupByOutputType = {
    id: number
    name: string
    modelId: number
    yearStart: number
    yearEnd: number
    createdAt: Date
    updatedAt: Date
    _count: ModelVariantCountAggregateOutputType | null
    _avg: ModelVariantAvgAggregateOutputType | null
    _sum: ModelVariantSumAggregateOutputType | null
    _min: ModelVariantMinAggregateOutputType | null
    _max: ModelVariantMaxAggregateOutputType | null
  }

  type GetModelVariantGroupByPayload<T extends ModelVariantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModelVariantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModelVariantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModelVariantGroupByOutputType[P]>
            : GetScalarType<T[P], ModelVariantGroupByOutputType[P]>
        }
      >
    >


  export type ModelVariantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    modelId?: boolean | $Types.Skip
    yearStart?: boolean | $Types.Skip
    yearEnd?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    model?: boolean | ModelDefaultArgs<ExtArgs> | $Types.Skip
    classifieds?: boolean | ModelVariant$classifiedsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | ModelVariantCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["modelVariant"]>

  export type ModelVariantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    modelId?: boolean | $Types.Skip
    yearStart?: boolean | $Types.Skip
    yearEnd?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    model?: boolean | ModelDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["modelVariant"]>

  export type ModelVariantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    modelId?: boolean | $Types.Skip
    yearStart?: boolean | $Types.Skip
    yearEnd?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    model?: boolean | ModelDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["modelVariant"]>

  export type ModelVariantSelectScalar = {
    id?: boolean | $Types.Skip
    name?: boolean | $Types.Skip
    modelId?: boolean | $Types.Skip
    yearStart?: boolean | $Types.Skip
    yearEnd?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }

  export type ModelVariantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "modelId" | "yearStart" | "yearEnd" | "createdAt" | "updatedAt", ExtArgs["result"]["modelVariant"], $Types.Skip>
  export type ModelVariantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | ModelDefaultArgs<ExtArgs> | $Types.Skip
    classifieds?: boolean | ModelVariant$classifiedsArgs<ExtArgs> | $Types.Skip
    _count?: boolean | ModelVariantCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type ModelVariantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | ModelDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type ModelVariantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | ModelDefaultArgs<ExtArgs> | $Types.Skip
  }

  export type $ModelVariantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ModelVariant"
    objects: {
      model: Prisma.$ModelPayload<ExtArgs>
      classifieds: Prisma.$ClassifiedPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      modelId: number
      yearStart: number
      yearEnd: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["modelVariant"]>
    composites: {}
  }

  type ModelVariantGetPayload<S extends boolean | null | undefined | ModelVariantDefaultArgs> = $Result.GetResult<Prisma.$ModelVariantPayload, S>

  type ModelVariantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModelVariantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModelVariantCountAggregateInputType | true
    }

  export interface ModelVariantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ModelVariant'], meta: { name: 'ModelVariant' } }
    /**
     * Find zero or one ModelVariant that matches the filter.
     * @param {ModelVariantFindUniqueArgs} args - Arguments to find a ModelVariant
     * @example
     * // Get one ModelVariant
     * const modelVariant = await prisma.modelVariant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModelVariantFindUniqueArgs>(args: SelectSubset<T, ModelVariantFindUniqueArgs<ExtArgs>>): Prisma__ModelVariantClient<$Result.GetResult<Prisma.$ModelVariantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ModelVariant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModelVariantFindUniqueOrThrowArgs} args - Arguments to find a ModelVariant
     * @example
     * // Get one ModelVariant
     * const modelVariant = await prisma.modelVariant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModelVariantFindUniqueOrThrowArgs>(args: SelectSubset<T, ModelVariantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModelVariantClient<$Result.GetResult<Prisma.$ModelVariantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModelVariant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelVariantFindFirstArgs} args - Arguments to find a ModelVariant
     * @example
     * // Get one ModelVariant
     * const modelVariant = await prisma.modelVariant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModelVariantFindFirstArgs>(args?: SelectSubset<T, ModelVariantFindFirstArgs<ExtArgs>>): Prisma__ModelVariantClient<$Result.GetResult<Prisma.$ModelVariantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ModelVariant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelVariantFindFirstOrThrowArgs} args - Arguments to find a ModelVariant
     * @example
     * // Get one ModelVariant
     * const modelVariant = await prisma.modelVariant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModelVariantFindFirstOrThrowArgs>(args?: SelectSubset<T, ModelVariantFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModelVariantClient<$Result.GetResult<Prisma.$ModelVariantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ModelVariants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelVariantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ModelVariants
     * const modelVariants = await prisma.modelVariant.findMany()
     * 
     * // Get first 10 ModelVariants
     * const modelVariants = await prisma.modelVariant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modelVariantWithIdOnly = await prisma.modelVariant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModelVariantFindManyArgs>(args?: SelectSubset<T, ModelVariantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelVariantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ModelVariant.
     * @param {ModelVariantCreateArgs} args - Arguments to create a ModelVariant.
     * @example
     * // Create one ModelVariant
     * const ModelVariant = await prisma.modelVariant.create({
     *   data: {
     *     // ... data to create a ModelVariant
     *   }
     * })
     * 
     */
    create<T extends ModelVariantCreateArgs>(args: SelectSubset<T, ModelVariantCreateArgs<ExtArgs>>): Prisma__ModelVariantClient<$Result.GetResult<Prisma.$ModelVariantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ModelVariants.
     * @param {ModelVariantCreateManyArgs} args - Arguments to create many ModelVariants.
     * @example
     * // Create many ModelVariants
     * const modelVariant = await prisma.modelVariant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModelVariantCreateManyArgs>(args?: SelectSubset<T, ModelVariantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ModelVariants and returns the data saved in the database.
     * @param {ModelVariantCreateManyAndReturnArgs} args - Arguments to create many ModelVariants.
     * @example
     * // Create many ModelVariants
     * const modelVariant = await prisma.modelVariant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ModelVariants and only return the `id`
     * const modelVariantWithIdOnly = await prisma.modelVariant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModelVariantCreateManyAndReturnArgs>(args?: SelectSubset<T, ModelVariantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelVariantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ModelVariant.
     * @param {ModelVariantDeleteArgs} args - Arguments to delete one ModelVariant.
     * @example
     * // Delete one ModelVariant
     * const ModelVariant = await prisma.modelVariant.delete({
     *   where: {
     *     // ... filter to delete one ModelVariant
     *   }
     * })
     * 
     */
    delete<T extends ModelVariantDeleteArgs>(args: SelectSubset<T, ModelVariantDeleteArgs<ExtArgs>>): Prisma__ModelVariantClient<$Result.GetResult<Prisma.$ModelVariantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ModelVariant.
     * @param {ModelVariantUpdateArgs} args - Arguments to update one ModelVariant.
     * @example
     * // Update one ModelVariant
     * const modelVariant = await prisma.modelVariant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModelVariantUpdateArgs>(args: SelectSubset<T, ModelVariantUpdateArgs<ExtArgs>>): Prisma__ModelVariantClient<$Result.GetResult<Prisma.$ModelVariantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ModelVariants.
     * @param {ModelVariantDeleteManyArgs} args - Arguments to filter ModelVariants to delete.
     * @example
     * // Delete a few ModelVariants
     * const { count } = await prisma.modelVariant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModelVariantDeleteManyArgs>(args?: SelectSubset<T, ModelVariantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModelVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelVariantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ModelVariants
     * const modelVariant = await prisma.modelVariant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModelVariantUpdateManyArgs>(args: SelectSubset<T, ModelVariantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ModelVariants and returns the data updated in the database.
     * @param {ModelVariantUpdateManyAndReturnArgs} args - Arguments to update many ModelVariants.
     * @example
     * // Update many ModelVariants
     * const modelVariant = await prisma.modelVariant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ModelVariants and only return the `id`
     * const modelVariantWithIdOnly = await prisma.modelVariant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ModelVariantUpdateManyAndReturnArgs>(args: SelectSubset<T, ModelVariantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelVariantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ModelVariant.
     * @param {ModelVariantUpsertArgs} args - Arguments to update or create a ModelVariant.
     * @example
     * // Update or create a ModelVariant
     * const modelVariant = await prisma.modelVariant.upsert({
     *   create: {
     *     // ... data to create a ModelVariant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ModelVariant we want to update
     *   }
     * })
     */
    upsert<T extends ModelVariantUpsertArgs>(args: SelectSubset<T, ModelVariantUpsertArgs<ExtArgs>>): Prisma__ModelVariantClient<$Result.GetResult<Prisma.$ModelVariantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ModelVariants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelVariantCountArgs} args - Arguments to filter ModelVariants to count.
     * @example
     * // Count the number of ModelVariants
     * const count = await prisma.modelVariant.count({
     *   where: {
     *     // ... the filter for the ModelVariants we want to count
     *   }
     * })
    **/
    count<T extends ModelVariantCountArgs>(
      args?: Subset<T, ModelVariantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModelVariantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ModelVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelVariantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModelVariantAggregateArgs>(args: Subset<T, ModelVariantAggregateArgs>): Prisma.PrismaPromise<GetModelVariantAggregateType<T>>

    /**
     * Group by ModelVariant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelVariantGroupByArgs} args - Group by arguments.
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
      T extends ModelVariantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModelVariantGroupByArgs['orderBy'] }
        : { orderBy?: ModelVariantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ModelVariantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelVariantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ModelVariant model
   */
  readonly fields: ModelVariantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ModelVariant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModelVariantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    model<T extends ModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModelDefaultArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    classifieds<T extends ModelVariant$classifiedsArgs<ExtArgs> = {}>(args?: Subset<T, ModelVariant$classifiedsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassifiedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ModelVariant model
   */
  interface ModelVariantFieldRefs {
    readonly id: FieldRef<"ModelVariant", 'Int'>
    readonly name: FieldRef<"ModelVariant", 'String'>
    readonly modelId: FieldRef<"ModelVariant", 'Int'>
    readonly yearStart: FieldRef<"ModelVariant", 'Int'>
    readonly yearEnd: FieldRef<"ModelVariant", 'Int'>
    readonly createdAt: FieldRef<"ModelVariant", 'DateTime'>
    readonly updatedAt: FieldRef<"ModelVariant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ModelVariant findUnique
   */
  export type ModelVariantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVariant
     */
    select?: ModelVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVariant
     */
    omit?: ModelVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVariantInclude<ExtArgs> | null
    /**
     * Filter, which ModelVariant to fetch.
     */
    where: ModelVariantWhereUniqueInput
  }

  /**
   * ModelVariant findUniqueOrThrow
   */
  export type ModelVariantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVariant
     */
    select?: ModelVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVariant
     */
    omit?: ModelVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVariantInclude<ExtArgs> | null
    /**
     * Filter, which ModelVariant to fetch.
     */
    where: ModelVariantWhereUniqueInput
  }

  /**
   * ModelVariant findFirst
   */
  export type ModelVariantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVariant
     */
    select?: ModelVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVariant
     */
    omit?: ModelVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVariantInclude<ExtArgs> | null
    /**
     * Filter, which ModelVariant to fetch.
     */
    where?: ModelVariantWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelVariants to fetch.
     */
    orderBy?: ModelVariantOrderByWithRelationInput | ModelVariantOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModelVariants.
     */
    cursor?: ModelVariantWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelVariants from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelVariants.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModelVariants.
     */
    distinct?: ModelVariantScalarFieldEnum | ModelVariantScalarFieldEnum[] | $Types.Skip
  }

  /**
   * ModelVariant findFirstOrThrow
   */
  export type ModelVariantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVariant
     */
    select?: ModelVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVariant
     */
    omit?: ModelVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVariantInclude<ExtArgs> | null
    /**
     * Filter, which ModelVariant to fetch.
     */
    where?: ModelVariantWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelVariants to fetch.
     */
    orderBy?: ModelVariantOrderByWithRelationInput | ModelVariantOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ModelVariants.
     */
    cursor?: ModelVariantWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelVariants from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelVariants.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ModelVariants.
     */
    distinct?: ModelVariantScalarFieldEnum | ModelVariantScalarFieldEnum[] | $Types.Skip
  }

  /**
   * ModelVariant findMany
   */
  export type ModelVariantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVariant
     */
    select?: ModelVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVariant
     */
    omit?: ModelVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVariantInclude<ExtArgs> | null
    /**
     * Filter, which ModelVariants to fetch.
     */
    where?: ModelVariantWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ModelVariants to fetch.
     */
    orderBy?: ModelVariantOrderByWithRelationInput | ModelVariantOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ModelVariants.
     */
    cursor?: ModelVariantWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ModelVariants from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ModelVariants.
     */
    skip?: number | $Types.Skip
    distinct?: ModelVariantScalarFieldEnum | ModelVariantScalarFieldEnum[] | $Types.Skip
  }

  /**
   * ModelVariant create
   */
  export type ModelVariantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVariant
     */
    select?: ModelVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVariant
     */
    omit?: ModelVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVariantInclude<ExtArgs> | null
    /**
     * The data needed to create a ModelVariant.
     */
    data: XOR<ModelVariantCreateInput, ModelVariantUncheckedCreateInput>
  }

  /**
   * ModelVariant createMany
   */
  export type ModelVariantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ModelVariants.
     */
    data: ModelVariantCreateManyInput | ModelVariantCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * ModelVariant createManyAndReturn
   */
  export type ModelVariantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVariant
     */
    select?: ModelVariantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVariant
     */
    omit?: ModelVariantOmit<ExtArgs> | null
    /**
     * The data used to create many ModelVariants.
     */
    data: ModelVariantCreateManyInput | ModelVariantCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVariantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModelVariant update
   */
  export type ModelVariantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVariant
     */
    select?: ModelVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVariant
     */
    omit?: ModelVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVariantInclude<ExtArgs> | null
    /**
     * The data needed to update a ModelVariant.
     */
    data: XOR<ModelVariantUpdateInput, ModelVariantUncheckedUpdateInput>
    /**
     * Choose, which ModelVariant to update.
     */
    where: ModelVariantWhereUniqueInput
  }

  /**
   * ModelVariant updateMany
   */
  export type ModelVariantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ModelVariants.
     */
    data: XOR<ModelVariantUpdateManyMutationInput, ModelVariantUncheckedUpdateManyInput>
    /**
     * Filter which ModelVariants to update
     */
    where?: ModelVariantWhereInput | $Types.Skip
    /**
     * Limit how many ModelVariants to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * ModelVariant updateManyAndReturn
   */
  export type ModelVariantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVariant
     */
    select?: ModelVariantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVariant
     */
    omit?: ModelVariantOmit<ExtArgs> | null
    /**
     * The data used to update ModelVariants.
     */
    data: XOR<ModelVariantUpdateManyMutationInput, ModelVariantUncheckedUpdateManyInput>
    /**
     * Filter which ModelVariants to update
     */
    where?: ModelVariantWhereInput | $Types.Skip
    /**
     * Limit how many ModelVariants to update.
     */
    limit?: number | $Types.Skip
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVariantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ModelVariant upsert
   */
  export type ModelVariantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVariant
     */
    select?: ModelVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVariant
     */
    omit?: ModelVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVariantInclude<ExtArgs> | null
    /**
     * The filter to search for the ModelVariant to update in case it exists.
     */
    where: ModelVariantWhereUniqueInput
    /**
     * In case the ModelVariant found by the `where` argument doesn't exist, create a new ModelVariant with this data.
     */
    create: XOR<ModelVariantCreateInput, ModelVariantUncheckedCreateInput>
    /**
     * In case the ModelVariant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModelVariantUpdateInput, ModelVariantUncheckedUpdateInput>
  }

  /**
   * ModelVariant delete
   */
  export type ModelVariantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVariant
     */
    select?: ModelVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVariant
     */
    omit?: ModelVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVariantInclude<ExtArgs> | null
    /**
     * Filter which ModelVariant to delete.
     */
    where: ModelVariantWhereUniqueInput
  }

  /**
   * ModelVariant deleteMany
   */
  export type ModelVariantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ModelVariants to delete
     */
    where?: ModelVariantWhereInput | $Types.Skip
    /**
     * Limit how many ModelVariants to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * ModelVariant.classifieds
   */
  export type ModelVariant$classifiedsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Classified
     */
    select?: ClassifiedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Classified
     */
    omit?: ClassifiedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassifiedInclude<ExtArgs> | null
    where?: ClassifiedWhereInput | $Types.Skip
    orderBy?: ClassifiedOrderByWithRelationInput | ClassifiedOrderByWithRelationInput[] | $Types.Skip
    cursor?: ClassifiedWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: ClassifiedScalarFieldEnum | ClassifiedScalarFieldEnum[] | $Types.Skip
  }

  /**
   * ModelVariant without action
   */
  export type ModelVariantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelVariant
     */
    select?: ModelVariantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ModelVariant
     */
    omit?: ModelVariantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModelVariantInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    hashedPassword: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    hashedPassword: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    hashedPassword: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true | $Types.Skip
    email?: true | $Types.Skip
    hashedPassword?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type UserMaxAggregateInputType = {
    id?: true | $Types.Skip
    email?: true | $Types.Skip
    hashedPassword?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
  }

  export type UserCountAggregateInputType = {
    id?: true | $Types.Skip
    email?: true | $Types.Skip
    hashedPassword?: true | $Types.Skip
    createdAt?: true | $Types.Skip
    updatedAt?: true | $Types.Skip
    _all?: true | $Types.Skip
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput | $Types.Skip
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[] | $Types.Skip
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    hashedPassword: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    email?: boolean | $Types.Skip
    hashedPassword?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
    Session?: boolean | User$SessionArgs<ExtArgs> | $Types.Skip
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    email?: boolean | $Types.Skip
    hashedPassword?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean | $Types.Skip
    email?: boolean | $Types.Skip
    hashedPassword?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean | $Types.Skip
    email?: boolean | $Types.Skip
    hashedPassword?: boolean | $Types.Skip
    createdAt?: boolean | $Types.Skip
    updatedAt?: boolean | $Types.Skip
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "hashedPassword" | "createdAt" | "updatedAt", ExtArgs["result"]["user"], $Types.Skip>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Session?: boolean | User$SessionArgs<ExtArgs> | $Types.Skip
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs> | $Types.Skip
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Session: Prisma.$SessionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      hashedPassword: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Session<T extends User$SessionArgs<ExtArgs> = {}>(args?: Subset<T, User$SessionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly hashedPassword: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[] | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number | $Types.Skip
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number | $Types.Skip
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * Limit how many Users to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * Limit how many Users to update.
     */
    limit?: number | $Types.Skip
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput | $Types.Skip
    /**
     * Limit how many Users to delete.
     */
    limit?: number | $Types.Skip
  }

  /**
   * User.Session
   */
  export type User$SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput | $Types.Skip
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[] | $Types.Skip
    cursor?: SessionWhereUniqueInput | $Types.Skip
    take?: number | $Types.Skip
    skip?: number | $Types.Skip
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[] | $Types.Skip
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ClassifiedScalarFieldEnum: {
    id: 'id',
    views: 'views',
    slug: 'slug',
    vrm: 'vrm',
    title: 'title',
    description: 'description',
    year: 'year',
    odoReading: 'odoReading',
    doors: 'doors',
    seats: 'seats',
    price: 'price',
    makeId: 'makeId',
    modelId: 'modelId',
    modelVariantId: 'modelVariantId',
    ulezCompliance: 'ulezCompliance',
    transmission: 'transmission',
    colour: 'colour',
    fuelType: 'fuelType',
    bodyType: 'bodyType',
    odoUnit: 'odoUnit',
    currency: 'currency',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClassifiedScalarFieldEnum = (typeof ClassifiedScalarFieldEnum)[keyof typeof ClassifiedScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    mobile: 'mobile',
    bookingDate: 'bookingDate',
    termAccepted: 'termAccepted',
    status: 'status',
    classifiedId: 'classifiedId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const CustomerLifecycleScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    oldStatus: 'oldStatus',
    newStatus: 'newStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerLifecycleScalarFieldEnum = (typeof CustomerLifecycleScalarFieldEnum)[keyof typeof CustomerLifecycleScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    alt: 'alt',
    src: 'src',
    classifiedId: 'classifiedId',
    blurhash: 'blurhash',
    isMain: 'isMain'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const PageViewScalarFieldEnum: {
    id: 'id',
    path: 'path',
    viewedAt: 'viewedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    referrer: 'referrer'
  };

  export type PageViewScalarFieldEnum = (typeof PageViewScalarFieldEnum)[keyof typeof PageViewScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires',
    requires2FA: 'requires2FA'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const MakeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MakeScalarFieldEnum = (typeof MakeScalarFieldEnum)[keyof typeof MakeScalarFieldEnum]


  export const ModelScalarFieldEnum: {
    id: 'id',
    name: 'name',
    makeId: 'makeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ModelScalarFieldEnum = (typeof ModelScalarFieldEnum)[keyof typeof ModelScalarFieldEnum]


  export const ModelVariantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    modelId: 'modelId',
    yearStart: 'yearStart',
    yearEnd: 'yearEnd',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ModelVariantScalarFieldEnum = (typeof ModelVariantScalarFieldEnum)[keyof typeof ModelVariantScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    hashedPassword: 'hashedPassword',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'ELEZCompliance'
   */
  export type EnumELEZComplianceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ELEZCompliance'>
    


  /**
   * Reference to a field of type 'ELEZCompliance[]'
   */
  export type ListEnumELEZComplianceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ELEZCompliance[]'>
    


  /**
   * Reference to a field of type 'Transmission'
   */
  export type EnumTransmissionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Transmission'>
    


  /**
   * Reference to a field of type 'Transmission[]'
   */
  export type ListEnumTransmissionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Transmission[]'>
    


  /**
   * Reference to a field of type 'Colour'
   */
  export type EnumColourFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Colour'>
    


  /**
   * Reference to a field of type 'Colour[]'
   */
  export type ListEnumColourFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Colour[]'>
    


  /**
   * Reference to a field of type 'FuelType'
   */
  export type EnumFuelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FuelType'>
    


  /**
   * Reference to a field of type 'FuelType[]'
   */
  export type ListEnumFuelTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FuelType[]'>
    


  /**
   * Reference to a field of type 'BodyType'
   */
  export type EnumBodyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BodyType'>
    


  /**
   * Reference to a field of type 'BodyType[]'
   */
  export type ListEnumBodyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BodyType[]'>
    


  /**
   * Reference to a field of type 'OdoUnit'
   */
  export type EnumOdoUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OdoUnit'>
    


  /**
   * Reference to a field of type 'OdoUnit[]'
   */
  export type ListEnumOdoUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OdoUnit[]'>
    


  /**
   * Reference to a field of type 'CurrencyCode'
   */
  export type EnumCurrencyCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CurrencyCode'>
    


  /**
   * Reference to a field of type 'CurrencyCode[]'
   */
  export type ListEnumCurrencyCodeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CurrencyCode[]'>
    


  /**
   * Reference to a field of type 'ClassifiedStatus'
   */
  export type EnumClassifiedStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClassifiedStatus'>
    


  /**
   * Reference to a field of type 'ClassifiedStatus[]'
   */
  export type ListEnumClassifiedStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ClassifiedStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'CustomerStatus'
   */
  export type EnumCustomerStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CustomerStatus'>
    


  /**
   * Reference to a field of type 'CustomerStatus[]'
   */
  export type ListEnumCustomerStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CustomerStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type ClassifiedWhereInput = {
    AND?: ClassifiedWhereInput | ClassifiedWhereInput[] | $Types.Skip
    OR?: ClassifiedWhereInput[] | $Types.Skip
    NOT?: ClassifiedWhereInput | ClassifiedWhereInput[] | $Types.Skip
    id?: IntFilter<"Classified"> | number | $Types.Skip
    views?: IntFilter<"Classified"> | number | $Types.Skip
    slug?: StringFilter<"Classified"> | string | $Types.Skip
    vrm?: StringNullableFilter<"Classified"> | string | null | $Types.Skip
    title?: StringNullableFilter<"Classified"> | string | null | $Types.Skip
    description?: StringNullableFilter<"Classified"> | string | null | $Types.Skip
    year?: IntFilter<"Classified"> | number | $Types.Skip
    odoReading?: IntFilter<"Classified"> | number | $Types.Skip
    doors?: IntFilter<"Classified"> | number | $Types.Skip
    seats?: IntFilter<"Classified"> | number | $Types.Skip
    price?: IntFilter<"Classified"> | number | $Types.Skip
    makeId?: IntFilter<"Classified"> | number | $Types.Skip
    modelId?: IntFilter<"Classified"> | number | $Types.Skip
    modelVariantId?: IntFilter<"Classified"> | number | $Types.Skip
    ulezCompliance?: EnumELEZComplianceFilter<"Classified"> | $Enums.ELEZCompliance | $Types.Skip
    transmission?: EnumTransmissionFilter<"Classified"> | $Enums.Transmission | $Types.Skip
    colour?: EnumColourFilter<"Classified"> | $Enums.Colour | $Types.Skip
    fuelType?: EnumFuelTypeFilter<"Classified"> | $Enums.FuelType | $Types.Skip
    bodyType?: EnumBodyTypeFilter<"Classified"> | $Enums.BodyType | $Types.Skip
    odoUnit?: EnumOdoUnitFilter<"Classified"> | $Enums.OdoUnit | $Types.Skip
    currency?: EnumCurrencyCodeFilter<"Classified"> | $Enums.CurrencyCode | $Types.Skip
    status?: EnumClassifiedStatusFilter<"Classified"> | $Enums.ClassifiedStatus | $Types.Skip
    createdAt?: DateTimeFilter<"Classified"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Classified"> | Date | string | $Types.Skip
    make?: XOR<MakeScalarRelationFilter, MakeWhereInput> | $Types.Skip
    model?: XOR<ModelScalarRelationFilter, ModelWhereInput> | $Types.Skip
    modelVariant?: XOR<ModelVariantNullableScalarRelationFilter, ModelVariantWhereInput> | null | $Types.Skip
    images?: ImageListRelationFilter | $Types.Skip
    customers?: CustomerListRelationFilter | $Types.Skip
  }

  export type ClassifiedOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    views?: SortOrder | $Types.Skip
    slug?: SortOrder | $Types.Skip
    vrm?: SortOrderInput | SortOrder | $Types.Skip
    title?: SortOrderInput | SortOrder | $Types.Skip
    description?: SortOrderInput | SortOrder | $Types.Skip
    year?: SortOrder | $Types.Skip
    odoReading?: SortOrder | $Types.Skip
    doors?: SortOrder | $Types.Skip
    seats?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    makeId?: SortOrder | $Types.Skip
    modelId?: SortOrder | $Types.Skip
    modelVariantId?: SortOrder | $Types.Skip
    ulezCompliance?: SortOrder | $Types.Skip
    transmission?: SortOrder | $Types.Skip
    colour?: SortOrder | $Types.Skip
    fuelType?: SortOrder | $Types.Skip
    bodyType?: SortOrder | $Types.Skip
    odoUnit?: SortOrder | $Types.Skip
    currency?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    make?: MakeOrderByWithRelationInput | $Types.Skip
    model?: ModelOrderByWithRelationInput | $Types.Skip
    modelVariant?: ModelVariantOrderByWithRelationInput | $Types.Skip
    images?: ImageOrderByRelationAggregateInput | $Types.Skip
    customers?: CustomerOrderByRelationAggregateInput | $Types.Skip
  }

  export type ClassifiedWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    slug?: string | $Types.Skip
    AND?: ClassifiedWhereInput | ClassifiedWhereInput[] | $Types.Skip
    OR?: ClassifiedWhereInput[] | $Types.Skip
    NOT?: ClassifiedWhereInput | ClassifiedWhereInput[] | $Types.Skip
    views?: IntFilter<"Classified"> | number | $Types.Skip
    vrm?: StringNullableFilter<"Classified"> | string | null | $Types.Skip
    title?: StringNullableFilter<"Classified"> | string | null | $Types.Skip
    description?: StringNullableFilter<"Classified"> | string | null | $Types.Skip
    year?: IntFilter<"Classified"> | number | $Types.Skip
    odoReading?: IntFilter<"Classified"> | number | $Types.Skip
    doors?: IntFilter<"Classified"> | number | $Types.Skip
    seats?: IntFilter<"Classified"> | number | $Types.Skip
    price?: IntFilter<"Classified"> | number | $Types.Skip
    makeId?: IntFilter<"Classified"> | number | $Types.Skip
    modelId?: IntFilter<"Classified"> | number | $Types.Skip
    modelVariantId?: IntFilter<"Classified"> | number | $Types.Skip
    ulezCompliance?: EnumELEZComplianceFilter<"Classified"> | $Enums.ELEZCompliance | $Types.Skip
    transmission?: EnumTransmissionFilter<"Classified"> | $Enums.Transmission | $Types.Skip
    colour?: EnumColourFilter<"Classified"> | $Enums.Colour | $Types.Skip
    fuelType?: EnumFuelTypeFilter<"Classified"> | $Enums.FuelType | $Types.Skip
    bodyType?: EnumBodyTypeFilter<"Classified"> | $Enums.BodyType | $Types.Skip
    odoUnit?: EnumOdoUnitFilter<"Classified"> | $Enums.OdoUnit | $Types.Skip
    currency?: EnumCurrencyCodeFilter<"Classified"> | $Enums.CurrencyCode | $Types.Skip
    status?: EnumClassifiedStatusFilter<"Classified"> | $Enums.ClassifiedStatus | $Types.Skip
    createdAt?: DateTimeFilter<"Classified"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Classified"> | Date | string | $Types.Skip
    make?: XOR<MakeScalarRelationFilter, MakeWhereInput> | $Types.Skip
    model?: XOR<ModelScalarRelationFilter, ModelWhereInput> | $Types.Skip
    modelVariant?: XOR<ModelVariantNullableScalarRelationFilter, ModelVariantWhereInput> | null | $Types.Skip
    images?: ImageListRelationFilter | $Types.Skip
    customers?: CustomerListRelationFilter | $Types.Skip
  }, "id" | "slug">

  export type ClassifiedOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    views?: SortOrder | $Types.Skip
    slug?: SortOrder | $Types.Skip
    vrm?: SortOrderInput | SortOrder | $Types.Skip
    title?: SortOrderInput | SortOrder | $Types.Skip
    description?: SortOrderInput | SortOrder | $Types.Skip
    year?: SortOrder | $Types.Skip
    odoReading?: SortOrder | $Types.Skip
    doors?: SortOrder | $Types.Skip
    seats?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    makeId?: SortOrder | $Types.Skip
    modelId?: SortOrder | $Types.Skip
    modelVariantId?: SortOrder | $Types.Skip
    ulezCompliance?: SortOrder | $Types.Skip
    transmission?: SortOrder | $Types.Skip
    colour?: SortOrder | $Types.Skip
    fuelType?: SortOrder | $Types.Skip
    bodyType?: SortOrder | $Types.Skip
    odoUnit?: SortOrder | $Types.Skip
    currency?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    _count?: ClassifiedCountOrderByAggregateInput | $Types.Skip
    _avg?: ClassifiedAvgOrderByAggregateInput | $Types.Skip
    _max?: ClassifiedMaxOrderByAggregateInput | $Types.Skip
    _min?: ClassifiedMinOrderByAggregateInput | $Types.Skip
    _sum?: ClassifiedSumOrderByAggregateInput | $Types.Skip
  }

  export type ClassifiedScalarWhereWithAggregatesInput = {
    AND?: ClassifiedScalarWhereWithAggregatesInput | ClassifiedScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: ClassifiedScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: ClassifiedScalarWhereWithAggregatesInput | ClassifiedScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"Classified"> | number | $Types.Skip
    views?: IntWithAggregatesFilter<"Classified"> | number | $Types.Skip
    slug?: StringWithAggregatesFilter<"Classified"> | string | $Types.Skip
    vrm?: StringNullableWithAggregatesFilter<"Classified"> | string | null | $Types.Skip
    title?: StringNullableWithAggregatesFilter<"Classified"> | string | null | $Types.Skip
    description?: StringNullableWithAggregatesFilter<"Classified"> | string | null | $Types.Skip
    year?: IntWithAggregatesFilter<"Classified"> | number | $Types.Skip
    odoReading?: IntWithAggregatesFilter<"Classified"> | number | $Types.Skip
    doors?: IntWithAggregatesFilter<"Classified"> | number | $Types.Skip
    seats?: IntWithAggregatesFilter<"Classified"> | number | $Types.Skip
    price?: IntWithAggregatesFilter<"Classified"> | number | $Types.Skip
    makeId?: IntWithAggregatesFilter<"Classified"> | number | $Types.Skip
    modelId?: IntWithAggregatesFilter<"Classified"> | number | $Types.Skip
    modelVariantId?: IntWithAggregatesFilter<"Classified"> | number | $Types.Skip
    ulezCompliance?: EnumELEZComplianceWithAggregatesFilter<"Classified"> | $Enums.ELEZCompliance | $Types.Skip
    transmission?: EnumTransmissionWithAggregatesFilter<"Classified"> | $Enums.Transmission | $Types.Skip
    colour?: EnumColourWithAggregatesFilter<"Classified"> | $Enums.Colour | $Types.Skip
    fuelType?: EnumFuelTypeWithAggregatesFilter<"Classified"> | $Enums.FuelType | $Types.Skip
    bodyType?: EnumBodyTypeWithAggregatesFilter<"Classified"> | $Enums.BodyType | $Types.Skip
    odoUnit?: EnumOdoUnitWithAggregatesFilter<"Classified"> | $Enums.OdoUnit | $Types.Skip
    currency?: EnumCurrencyCodeWithAggregatesFilter<"Classified"> | $Enums.CurrencyCode | $Types.Skip
    status?: EnumClassifiedStatusWithAggregatesFilter<"Classified"> | $Enums.ClassifiedStatus | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"Classified"> | Date | string | $Types.Skip
    updatedAt?: DateTimeWithAggregatesFilter<"Classified"> | Date | string | $Types.Skip
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[] | $Types.Skip
    OR?: CustomerWhereInput[] | $Types.Skip
    NOT?: CustomerWhereInput | CustomerWhereInput[] | $Types.Skip
    id?: IntFilter<"Customer"> | number | $Types.Skip
    firstName?: StringFilter<"Customer"> | string | $Types.Skip
    lastName?: StringFilter<"Customer"> | string | $Types.Skip
    email?: StringFilter<"Customer"> | string | $Types.Skip
    mobile?: StringNullableFilter<"Customer"> | string | null | $Types.Skip
    bookingDate?: DateTimeNullableFilter<"Customer"> | Date | string | null | $Types.Skip
    termAccepted?: BoolFilter<"Customer"> | boolean | $Types.Skip
    status?: EnumCustomerStatusFilter<"Customer"> | $Enums.CustomerStatus | $Types.Skip
    classifiedId?: IntNullableFilter<"Customer"> | number | null | $Types.Skip
    createdAt?: DateTimeFilter<"Customer"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Customer"> | Date | string | $Types.Skip
    Classified?: XOR<ClassifiedNullableScalarRelationFilter, ClassifiedWhereInput> | null | $Types.Skip
    lifecycle?: CustomerLifecycleListRelationFilter | $Types.Skip
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    firstName?: SortOrder | $Types.Skip
    lastName?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    mobile?: SortOrderInput | SortOrder | $Types.Skip
    bookingDate?: SortOrderInput | SortOrder | $Types.Skip
    termAccepted?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    classifiedId?: SortOrderInput | SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    Classified?: ClassifiedOrderByWithRelationInput | $Types.Skip
    lifecycle?: CustomerLifecycleOrderByRelationAggregateInput | $Types.Skip
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    AND?: CustomerWhereInput | CustomerWhereInput[] | $Types.Skip
    OR?: CustomerWhereInput[] | $Types.Skip
    NOT?: CustomerWhereInput | CustomerWhereInput[] | $Types.Skip
    firstName?: StringFilter<"Customer"> | string | $Types.Skip
    lastName?: StringFilter<"Customer"> | string | $Types.Skip
    email?: StringFilter<"Customer"> | string | $Types.Skip
    mobile?: StringNullableFilter<"Customer"> | string | null | $Types.Skip
    bookingDate?: DateTimeNullableFilter<"Customer"> | Date | string | null | $Types.Skip
    termAccepted?: BoolFilter<"Customer"> | boolean | $Types.Skip
    status?: EnumCustomerStatusFilter<"Customer"> | $Enums.CustomerStatus | $Types.Skip
    classifiedId?: IntNullableFilter<"Customer"> | number | null | $Types.Skip
    createdAt?: DateTimeFilter<"Customer"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Customer"> | Date | string | $Types.Skip
    Classified?: XOR<ClassifiedNullableScalarRelationFilter, ClassifiedWhereInput> | null | $Types.Skip
    lifecycle?: CustomerLifecycleListRelationFilter | $Types.Skip
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    firstName?: SortOrder | $Types.Skip
    lastName?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    mobile?: SortOrderInput | SortOrder | $Types.Skip
    bookingDate?: SortOrderInput | SortOrder | $Types.Skip
    termAccepted?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    classifiedId?: SortOrderInput | SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    _count?: CustomerCountOrderByAggregateInput | $Types.Skip
    _avg?: CustomerAvgOrderByAggregateInput | $Types.Skip
    _max?: CustomerMaxOrderByAggregateInput | $Types.Skip
    _min?: CustomerMinOrderByAggregateInput | $Types.Skip
    _sum?: CustomerSumOrderByAggregateInput | $Types.Skip
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: CustomerScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"Customer"> | number | $Types.Skip
    firstName?: StringWithAggregatesFilter<"Customer"> | string | $Types.Skip
    lastName?: StringWithAggregatesFilter<"Customer"> | string | $Types.Skip
    email?: StringWithAggregatesFilter<"Customer"> | string | $Types.Skip
    mobile?: StringNullableWithAggregatesFilter<"Customer"> | string | null | $Types.Skip
    bookingDate?: DateTimeNullableWithAggregatesFilter<"Customer"> | Date | string | null | $Types.Skip
    termAccepted?: BoolWithAggregatesFilter<"Customer"> | boolean | $Types.Skip
    status?: EnumCustomerStatusWithAggregatesFilter<"Customer"> | $Enums.CustomerStatus | $Types.Skip
    classifiedId?: IntNullableWithAggregatesFilter<"Customer"> | number | null | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string | $Types.Skip
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string | $Types.Skip
  }

  export type CustomerLifecycleWhereInput = {
    AND?: CustomerLifecycleWhereInput | CustomerLifecycleWhereInput[] | $Types.Skip
    OR?: CustomerLifecycleWhereInput[] | $Types.Skip
    NOT?: CustomerLifecycleWhereInput | CustomerLifecycleWhereInput[] | $Types.Skip
    id?: IntFilter<"CustomerLifecycle"> | number | $Types.Skip
    customerId?: IntFilter<"CustomerLifecycle"> | number | $Types.Skip
    oldStatus?: EnumCustomerStatusFilter<"CustomerLifecycle"> | $Enums.CustomerStatus | $Types.Skip
    newStatus?: EnumCustomerStatusFilter<"CustomerLifecycle"> | $Enums.CustomerStatus | $Types.Skip
    createdAt?: DateTimeFilter<"CustomerLifecycle"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"CustomerLifecycle"> | Date | string | $Types.Skip
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput> | $Types.Skip
  }

  export type CustomerLifecycleOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    customerId?: SortOrder | $Types.Skip
    oldStatus?: SortOrder | $Types.Skip
    newStatus?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    customer?: CustomerOrderByWithRelationInput | $Types.Skip
  }

  export type CustomerLifecycleWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    AND?: CustomerLifecycleWhereInput | CustomerLifecycleWhereInput[] | $Types.Skip
    OR?: CustomerLifecycleWhereInput[] | $Types.Skip
    NOT?: CustomerLifecycleWhereInput | CustomerLifecycleWhereInput[] | $Types.Skip
    customerId?: IntFilter<"CustomerLifecycle"> | number | $Types.Skip
    oldStatus?: EnumCustomerStatusFilter<"CustomerLifecycle"> | $Enums.CustomerStatus | $Types.Skip
    newStatus?: EnumCustomerStatusFilter<"CustomerLifecycle"> | $Enums.CustomerStatus | $Types.Skip
    createdAt?: DateTimeFilter<"CustomerLifecycle"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"CustomerLifecycle"> | Date | string | $Types.Skip
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput> | $Types.Skip
  }, "id">

  export type CustomerLifecycleOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    customerId?: SortOrder | $Types.Skip
    oldStatus?: SortOrder | $Types.Skip
    newStatus?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    _count?: CustomerLifecycleCountOrderByAggregateInput | $Types.Skip
    _avg?: CustomerLifecycleAvgOrderByAggregateInput | $Types.Skip
    _max?: CustomerLifecycleMaxOrderByAggregateInput | $Types.Skip
    _min?: CustomerLifecycleMinOrderByAggregateInput | $Types.Skip
    _sum?: CustomerLifecycleSumOrderByAggregateInput | $Types.Skip
  }

  export type CustomerLifecycleScalarWhereWithAggregatesInput = {
    AND?: CustomerLifecycleScalarWhereWithAggregatesInput | CustomerLifecycleScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: CustomerLifecycleScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: CustomerLifecycleScalarWhereWithAggregatesInput | CustomerLifecycleScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"CustomerLifecycle"> | number | $Types.Skip
    customerId?: IntWithAggregatesFilter<"CustomerLifecycle"> | number | $Types.Skip
    oldStatus?: EnumCustomerStatusWithAggregatesFilter<"CustomerLifecycle"> | $Enums.CustomerStatus | $Types.Skip
    newStatus?: EnumCustomerStatusWithAggregatesFilter<"CustomerLifecycle"> | $Enums.CustomerStatus | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"CustomerLifecycle"> | Date | string | $Types.Skip
    updatedAt?: DateTimeWithAggregatesFilter<"CustomerLifecycle"> | Date | string | $Types.Skip
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[] | $Types.Skip
    OR?: ImageWhereInput[] | $Types.Skip
    NOT?: ImageWhereInput | ImageWhereInput[] | $Types.Skip
    id?: IntFilter<"Image"> | number | $Types.Skip
    alt?: StringFilter<"Image"> | string | $Types.Skip
    src?: StringFilter<"Image"> | string | $Types.Skip
    classifiedId?: IntFilter<"Image"> | number | $Types.Skip
    blurhash?: StringFilter<"Image"> | string | $Types.Skip
    isMain?: BoolFilter<"Image"> | boolean | $Types.Skip
    classified?: XOR<ClassifiedScalarRelationFilter, ClassifiedWhereInput> | $Types.Skip
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    alt?: SortOrder | $Types.Skip
    src?: SortOrder | $Types.Skip
    classifiedId?: SortOrder | $Types.Skip
    blurhash?: SortOrder | $Types.Skip
    isMain?: SortOrder | $Types.Skip
    classified?: ClassifiedOrderByWithRelationInput | $Types.Skip
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    AND?: ImageWhereInput | ImageWhereInput[] | $Types.Skip
    OR?: ImageWhereInput[] | $Types.Skip
    NOT?: ImageWhereInput | ImageWhereInput[] | $Types.Skip
    alt?: StringFilter<"Image"> | string | $Types.Skip
    src?: StringFilter<"Image"> | string | $Types.Skip
    classifiedId?: IntFilter<"Image"> | number | $Types.Skip
    blurhash?: StringFilter<"Image"> | string | $Types.Skip
    isMain?: BoolFilter<"Image"> | boolean | $Types.Skip
    classified?: XOR<ClassifiedScalarRelationFilter, ClassifiedWhereInput> | $Types.Skip
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    alt?: SortOrder | $Types.Skip
    src?: SortOrder | $Types.Skip
    classifiedId?: SortOrder | $Types.Skip
    blurhash?: SortOrder | $Types.Skip
    isMain?: SortOrder | $Types.Skip
    _count?: ImageCountOrderByAggregateInput | $Types.Skip
    _avg?: ImageAvgOrderByAggregateInput | $Types.Skip
    _max?: ImageMaxOrderByAggregateInput | $Types.Skip
    _min?: ImageMinOrderByAggregateInput | $Types.Skip
    _sum?: ImageSumOrderByAggregateInput | $Types.Skip
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: ImageScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"Image"> | number | $Types.Skip
    alt?: StringWithAggregatesFilter<"Image"> | string | $Types.Skip
    src?: StringWithAggregatesFilter<"Image"> | string | $Types.Skip
    classifiedId?: IntWithAggregatesFilter<"Image"> | number | $Types.Skip
    blurhash?: StringWithAggregatesFilter<"Image"> | string | $Types.Skip
    isMain?: BoolWithAggregatesFilter<"Image"> | boolean | $Types.Skip
  }

  export type PageViewWhereInput = {
    AND?: PageViewWhereInput | PageViewWhereInput[] | $Types.Skip
    OR?: PageViewWhereInput[] | $Types.Skip
    NOT?: PageViewWhereInput | PageViewWhereInput[] | $Types.Skip
    id?: IntFilter<"PageView"> | number | $Types.Skip
    path?: StringFilter<"PageView"> | string | $Types.Skip
    viewedAt?: DateTimeFilter<"PageView"> | Date | string | $Types.Skip
    ipAddress?: StringNullableFilter<"PageView"> | string | null | $Types.Skip
    userAgent?: StringNullableFilter<"PageView"> | string | null | $Types.Skip
    referrer?: StringNullableFilter<"PageView"> | string | null | $Types.Skip
  }

  export type PageViewOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    path?: SortOrder | $Types.Skip
    viewedAt?: SortOrder | $Types.Skip
    ipAddress?: SortOrderInput | SortOrder | $Types.Skip
    userAgent?: SortOrderInput | SortOrder | $Types.Skip
    referrer?: SortOrderInput | SortOrder | $Types.Skip
  }

  export type PageViewWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    AND?: PageViewWhereInput | PageViewWhereInput[] | $Types.Skip
    OR?: PageViewWhereInput[] | $Types.Skip
    NOT?: PageViewWhereInput | PageViewWhereInput[] | $Types.Skip
    path?: StringFilter<"PageView"> | string | $Types.Skip
    viewedAt?: DateTimeFilter<"PageView"> | Date | string | $Types.Skip
    ipAddress?: StringNullableFilter<"PageView"> | string | null | $Types.Skip
    userAgent?: StringNullableFilter<"PageView"> | string | null | $Types.Skip
    referrer?: StringNullableFilter<"PageView"> | string | null | $Types.Skip
  }, "id">

  export type PageViewOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    path?: SortOrder | $Types.Skip
    viewedAt?: SortOrder | $Types.Skip
    ipAddress?: SortOrderInput | SortOrder | $Types.Skip
    userAgent?: SortOrderInput | SortOrder | $Types.Skip
    referrer?: SortOrderInput | SortOrder | $Types.Skip
    _count?: PageViewCountOrderByAggregateInput | $Types.Skip
    _avg?: PageViewAvgOrderByAggregateInput | $Types.Skip
    _max?: PageViewMaxOrderByAggregateInput | $Types.Skip
    _min?: PageViewMinOrderByAggregateInput | $Types.Skip
    _sum?: PageViewSumOrderByAggregateInput | $Types.Skip
  }

  export type PageViewScalarWhereWithAggregatesInput = {
    AND?: PageViewScalarWhereWithAggregatesInput | PageViewScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: PageViewScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: PageViewScalarWhereWithAggregatesInput | PageViewScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"PageView"> | number | $Types.Skip
    path?: StringWithAggregatesFilter<"PageView"> | string | $Types.Skip
    viewedAt?: DateTimeWithAggregatesFilter<"PageView"> | Date | string | $Types.Skip
    ipAddress?: StringNullableWithAggregatesFilter<"PageView"> | string | null | $Types.Skip
    userAgent?: StringNullableWithAggregatesFilter<"PageView"> | string | null | $Types.Skip
    referrer?: StringNullableWithAggregatesFilter<"PageView"> | string | null | $Types.Skip
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[] | $Types.Skip
    OR?: SessionWhereInput[] | $Types.Skip
    NOT?: SessionWhereInput | SessionWhereInput[] | $Types.Skip
    id?: StringFilter<"Session"> | string | $Types.Skip
    sessionToken?: StringFilter<"Session"> | string | $Types.Skip
    userId?: StringFilter<"Session"> | string | $Types.Skip
    expires?: DateTimeFilter<"Session"> | Date | string | $Types.Skip
    requires2FA?: BoolFilter<"Session"> | boolean | $Types.Skip
    user?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    sessionToken?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    expires?: SortOrder | $Types.Skip
    requires2FA?: SortOrder | $Types.Skip
    user?: UserOrderByWithRelationInput | $Types.Skip
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    sessionToken?: string | $Types.Skip
    AND?: SessionWhereInput | SessionWhereInput[] | $Types.Skip
    OR?: SessionWhereInput[] | $Types.Skip
    NOT?: SessionWhereInput | SessionWhereInput[] | $Types.Skip
    userId?: StringFilter<"Session"> | string | $Types.Skip
    expires?: DateTimeFilter<"Session"> | Date | string | $Types.Skip
    requires2FA?: BoolFilter<"Session"> | boolean | $Types.Skip
    user?: XOR<UserScalarRelationFilter, UserWhereInput> | $Types.Skip
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    sessionToken?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    expires?: SortOrder | $Types.Skip
    requires2FA?: SortOrder | $Types.Skip
    _count?: SessionCountOrderByAggregateInput | $Types.Skip
    _max?: SessionMaxOrderByAggregateInput | $Types.Skip
    _min?: SessionMinOrderByAggregateInput | $Types.Skip
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: SessionScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"Session"> | string | $Types.Skip
    sessionToken?: StringWithAggregatesFilter<"Session"> | string | $Types.Skip
    userId?: StringWithAggregatesFilter<"Session"> | string | $Types.Skip
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string | $Types.Skip
    requires2FA?: BoolWithAggregatesFilter<"Session"> | boolean | $Types.Skip
  }

  export type MakeWhereInput = {
    AND?: MakeWhereInput | MakeWhereInput[] | $Types.Skip
    OR?: MakeWhereInput[] | $Types.Skip
    NOT?: MakeWhereInput | MakeWhereInput[] | $Types.Skip
    id?: IntFilter<"Make"> | number | $Types.Skip
    name?: StringFilter<"Make"> | string | $Types.Skip
    image?: StringFilter<"Make"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"Make"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Make"> | Date | string | $Types.Skip
    models?: ModelListRelationFilter | $Types.Skip
    classifieds?: ClassifiedListRelationFilter | $Types.Skip
  }

  export type MakeOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    image?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    models?: ModelOrderByRelationAggregateInput | $Types.Skip
    classifieds?: ClassifiedOrderByRelationAggregateInput | $Types.Skip
  }

  export type MakeWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    name?: string | $Types.Skip
    AND?: MakeWhereInput | MakeWhereInput[] | $Types.Skip
    OR?: MakeWhereInput[] | $Types.Skip
    NOT?: MakeWhereInput | MakeWhereInput[] | $Types.Skip
    image?: StringFilter<"Make"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"Make"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Make"> | Date | string | $Types.Skip
    models?: ModelListRelationFilter | $Types.Skip
    classifieds?: ClassifiedListRelationFilter | $Types.Skip
  }, "id" | "name">

  export type MakeOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    image?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    _count?: MakeCountOrderByAggregateInput | $Types.Skip
    _avg?: MakeAvgOrderByAggregateInput | $Types.Skip
    _max?: MakeMaxOrderByAggregateInput | $Types.Skip
    _min?: MakeMinOrderByAggregateInput | $Types.Skip
    _sum?: MakeSumOrderByAggregateInput | $Types.Skip
  }

  export type MakeScalarWhereWithAggregatesInput = {
    AND?: MakeScalarWhereWithAggregatesInput | MakeScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: MakeScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: MakeScalarWhereWithAggregatesInput | MakeScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"Make"> | number | $Types.Skip
    name?: StringWithAggregatesFilter<"Make"> | string | $Types.Skip
    image?: StringWithAggregatesFilter<"Make"> | string | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"Make"> | Date | string | $Types.Skip
    updatedAt?: DateTimeWithAggregatesFilter<"Make"> | Date | string | $Types.Skip
  }

  export type ModelWhereInput = {
    AND?: ModelWhereInput | ModelWhereInput[] | $Types.Skip
    OR?: ModelWhereInput[] | $Types.Skip
    NOT?: ModelWhereInput | ModelWhereInput[] | $Types.Skip
    id?: IntFilter<"Model"> | number | $Types.Skip
    name?: StringFilter<"Model"> | string | $Types.Skip
    makeId?: IntFilter<"Model"> | number | $Types.Skip
    createdAt?: DateTimeFilter<"Model"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Model"> | Date | string | $Types.Skip
    make?: XOR<MakeScalarRelationFilter, MakeWhereInput> | $Types.Skip
    modelVariants?: ModelVariantListRelationFilter | $Types.Skip
    classifieds?: ClassifiedListRelationFilter | $Types.Skip
  }

  export type ModelOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    makeId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    make?: MakeOrderByWithRelationInput | $Types.Skip
    modelVariants?: ModelVariantOrderByRelationAggregateInput | $Types.Skip
    classifieds?: ClassifiedOrderByRelationAggregateInput | $Types.Skip
  }

  export type ModelWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    makeId_name?: ModelMakeIdNameCompoundUniqueInput | $Types.Skip
    AND?: ModelWhereInput | ModelWhereInput[] | $Types.Skip
    OR?: ModelWhereInput[] | $Types.Skip
    NOT?: ModelWhereInput | ModelWhereInput[] | $Types.Skip
    name?: StringFilter<"Model"> | string | $Types.Skip
    makeId?: IntFilter<"Model"> | number | $Types.Skip
    createdAt?: DateTimeFilter<"Model"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Model"> | Date | string | $Types.Skip
    make?: XOR<MakeScalarRelationFilter, MakeWhereInput> | $Types.Skip
    modelVariants?: ModelVariantListRelationFilter | $Types.Skip
    classifieds?: ClassifiedListRelationFilter | $Types.Skip
  }, "id" | "makeId_name">

  export type ModelOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    makeId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    _count?: ModelCountOrderByAggregateInput | $Types.Skip
    _avg?: ModelAvgOrderByAggregateInput | $Types.Skip
    _max?: ModelMaxOrderByAggregateInput | $Types.Skip
    _min?: ModelMinOrderByAggregateInput | $Types.Skip
    _sum?: ModelSumOrderByAggregateInput | $Types.Skip
  }

  export type ModelScalarWhereWithAggregatesInput = {
    AND?: ModelScalarWhereWithAggregatesInput | ModelScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: ModelScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: ModelScalarWhereWithAggregatesInput | ModelScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"Model"> | number | $Types.Skip
    name?: StringWithAggregatesFilter<"Model"> | string | $Types.Skip
    makeId?: IntWithAggregatesFilter<"Model"> | number | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"Model"> | Date | string | $Types.Skip
    updatedAt?: DateTimeWithAggregatesFilter<"Model"> | Date | string | $Types.Skip
  }

  export type ModelVariantWhereInput = {
    AND?: ModelVariantWhereInput | ModelVariantWhereInput[] | $Types.Skip
    OR?: ModelVariantWhereInput[] | $Types.Skip
    NOT?: ModelVariantWhereInput | ModelVariantWhereInput[] | $Types.Skip
    id?: IntFilter<"ModelVariant"> | number | $Types.Skip
    name?: StringFilter<"ModelVariant"> | string | $Types.Skip
    modelId?: IntFilter<"ModelVariant"> | number | $Types.Skip
    yearStart?: IntFilter<"ModelVariant"> | number | $Types.Skip
    yearEnd?: IntFilter<"ModelVariant"> | number | $Types.Skip
    createdAt?: DateTimeFilter<"ModelVariant"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"ModelVariant"> | Date | string | $Types.Skip
    model?: XOR<ModelScalarRelationFilter, ModelWhereInput> | $Types.Skip
    classifieds?: ClassifiedListRelationFilter | $Types.Skip
  }

  export type ModelVariantOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    modelId?: SortOrder | $Types.Skip
    yearStart?: SortOrder | $Types.Skip
    yearEnd?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    model?: ModelOrderByWithRelationInput | $Types.Skip
    classifieds?: ClassifiedOrderByRelationAggregateInput | $Types.Skip
  }

  export type ModelVariantWhereUniqueInput = Prisma.AtLeast<{
    id?: number | $Types.Skip
    modelId_name?: ModelVariantModelIdNameCompoundUniqueInput | $Types.Skip
    AND?: ModelVariantWhereInput | ModelVariantWhereInput[] | $Types.Skip
    OR?: ModelVariantWhereInput[] | $Types.Skip
    NOT?: ModelVariantWhereInput | ModelVariantWhereInput[] | $Types.Skip
    name?: StringFilter<"ModelVariant"> | string | $Types.Skip
    modelId?: IntFilter<"ModelVariant"> | number | $Types.Skip
    yearStart?: IntFilter<"ModelVariant"> | number | $Types.Skip
    yearEnd?: IntFilter<"ModelVariant"> | number | $Types.Skip
    createdAt?: DateTimeFilter<"ModelVariant"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"ModelVariant"> | Date | string | $Types.Skip
    model?: XOR<ModelScalarRelationFilter, ModelWhereInput> | $Types.Skip
    classifieds?: ClassifiedListRelationFilter | $Types.Skip
  }, "id" | "modelId_name">

  export type ModelVariantOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    modelId?: SortOrder | $Types.Skip
    yearStart?: SortOrder | $Types.Skip
    yearEnd?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    _count?: ModelVariantCountOrderByAggregateInput | $Types.Skip
    _avg?: ModelVariantAvgOrderByAggregateInput | $Types.Skip
    _max?: ModelVariantMaxOrderByAggregateInput | $Types.Skip
    _min?: ModelVariantMinOrderByAggregateInput | $Types.Skip
    _sum?: ModelVariantSumOrderByAggregateInput | $Types.Skip
  }

  export type ModelVariantScalarWhereWithAggregatesInput = {
    AND?: ModelVariantScalarWhereWithAggregatesInput | ModelVariantScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: ModelVariantScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: ModelVariantScalarWhereWithAggregatesInput | ModelVariantScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: IntWithAggregatesFilter<"ModelVariant"> | number | $Types.Skip
    name?: StringWithAggregatesFilter<"ModelVariant"> | string | $Types.Skip
    modelId?: IntWithAggregatesFilter<"ModelVariant"> | number | $Types.Skip
    yearStart?: IntWithAggregatesFilter<"ModelVariant"> | number | $Types.Skip
    yearEnd?: IntWithAggregatesFilter<"ModelVariant"> | number | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"ModelVariant"> | Date | string | $Types.Skip
    updatedAt?: DateTimeWithAggregatesFilter<"ModelVariant"> | Date | string | $Types.Skip
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[] | $Types.Skip
    OR?: UserWhereInput[] | $Types.Skip
    NOT?: UserWhereInput | UserWhereInput[] | $Types.Skip
    id?: StringFilter<"User"> | string | $Types.Skip
    email?: StringFilter<"User"> | string | $Types.Skip
    hashedPassword?: StringFilter<"User"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"User"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"User"> | Date | string | $Types.Skip
    Session?: SessionListRelationFilter | $Types.Skip
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    hashedPassword?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    Session?: SessionOrderByRelationAggregateInput | $Types.Skip
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string | $Types.Skip
    email?: string | $Types.Skip
    AND?: UserWhereInput | UserWhereInput[] | $Types.Skip
    OR?: UserWhereInput[] | $Types.Skip
    NOT?: UserWhereInput | UserWhereInput[] | $Types.Skip
    hashedPassword?: StringFilter<"User"> | string | $Types.Skip
    createdAt?: DateTimeFilter<"User"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"User"> | Date | string | $Types.Skip
    Session?: SessionListRelationFilter | $Types.Skip
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    hashedPassword?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
    _count?: UserCountOrderByAggregateInput | $Types.Skip
    _max?: UserMaxOrderByAggregateInput | $Types.Skip
    _min?: UserMinOrderByAggregateInput | $Types.Skip
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[] | $Types.Skip
    OR?: UserScalarWhereWithAggregatesInput[] | $Types.Skip
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[] | $Types.Skip
    id?: StringWithAggregatesFilter<"User"> | string | $Types.Skip
    email?: StringWithAggregatesFilter<"User"> | string | $Types.Skip
    hashedPassword?: StringWithAggregatesFilter<"User"> | string | $Types.Skip
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string | $Types.Skip
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string | $Types.Skip
  }

  export type ClassifiedCreateInput = {
    views?: number | $Types.Skip
    slug: string
    vrm?: string | null | $Types.Skip
    title?: string | null | $Types.Skip
    description?: string | null | $Types.Skip
    year: number
    odoReading?: number | $Types.Skip
    doors?: number | $Types.Skip
    seats?: number | $Types.Skip
    price?: number | $Types.Skip
    ulezCompliance?: $Enums.ELEZCompliance | $Types.Skip
    transmission?: $Enums.Transmission | $Types.Skip
    colour?: $Enums.Colour | $Types.Skip
    fuelType?: $Enums.FuelType | $Types.Skip
    bodyType?: $Enums.BodyType | $Types.Skip
    odoUnit?: $Enums.OdoUnit | $Types.Skip
    currency?: $Enums.CurrencyCode | $Types.Skip
    status?: $Enums.ClassifiedStatus | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    make: MakeCreateNestedOneWithoutClassifiedsInput
    model: ModelCreateNestedOneWithoutClassifiedsInput
    modelVariant?: ModelVariantCreateNestedOneWithoutClassifiedsInput | $Types.Skip
    images?: ImageCreateNestedManyWithoutClassifiedInput | $Types.Skip
    customers?: CustomerCreateNestedManyWithoutClassifiedInput | $Types.Skip
  }

  export type ClassifiedUncheckedCreateInput = {
    id?: number | $Types.Skip
    views?: number | $Types.Skip
    slug: string
    vrm?: string | null | $Types.Skip
    title?: string | null | $Types.Skip
    description?: string | null | $Types.Skip
    year: number
    odoReading?: number | $Types.Skip
    doors?: number | $Types.Skip
    seats?: number | $Types.Skip
    price?: number | $Types.Skip
    makeId: number
    modelId: number
    modelVariantId: number
    ulezCompliance?: $Enums.ELEZCompliance | $Types.Skip
    transmission?: $Enums.Transmission | $Types.Skip
    colour?: $Enums.Colour | $Types.Skip
    fuelType?: $Enums.FuelType | $Types.Skip
    bodyType?: $Enums.BodyType | $Types.Skip
    odoUnit?: $Enums.OdoUnit | $Types.Skip
    currency?: $Enums.CurrencyCode | $Types.Skip
    status?: $Enums.ClassifiedStatus | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    images?: ImageUncheckedCreateNestedManyWithoutClassifiedInput | $Types.Skip
    customers?: CustomerUncheckedCreateNestedManyWithoutClassifiedInput | $Types.Skip
  }

  export type ClassifiedUpdateInput = {
    views?: IntFieldUpdateOperationsInput | number | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    vrm?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    title?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    year?: IntFieldUpdateOperationsInput | number | $Types.Skip
    odoReading?: IntFieldUpdateOperationsInput | number | $Types.Skip
    doors?: IntFieldUpdateOperationsInput | number | $Types.Skip
    seats?: IntFieldUpdateOperationsInput | number | $Types.Skip
    price?: IntFieldUpdateOperationsInput | number | $Types.Skip
    ulezCompliance?: EnumELEZComplianceFieldUpdateOperationsInput | $Enums.ELEZCompliance | $Types.Skip
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | $Types.Skip
    colour?: EnumColourFieldUpdateOperationsInput | $Enums.Colour | $Types.Skip
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | $Types.Skip
    bodyType?: EnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType | $Types.Skip
    odoUnit?: EnumOdoUnitFieldUpdateOperationsInput | $Enums.OdoUnit | $Types.Skip
    currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode | $Types.Skip
    status?: EnumClassifiedStatusFieldUpdateOperationsInput | $Enums.ClassifiedStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    make?: MakeUpdateOneRequiredWithoutClassifiedsNestedInput | $Types.Skip
    model?: ModelUpdateOneRequiredWithoutClassifiedsNestedInput | $Types.Skip
    modelVariant?: ModelVariantUpdateOneWithoutClassifiedsNestedInput | $Types.Skip
    images?: ImageUpdateManyWithoutClassifiedNestedInput | $Types.Skip
    customers?: CustomerUpdateManyWithoutClassifiedNestedInput | $Types.Skip
  }

  export type ClassifiedUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    views?: IntFieldUpdateOperationsInput | number | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    vrm?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    title?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    year?: IntFieldUpdateOperationsInput | number | $Types.Skip
    odoReading?: IntFieldUpdateOperationsInput | number | $Types.Skip
    doors?: IntFieldUpdateOperationsInput | number | $Types.Skip
    seats?: IntFieldUpdateOperationsInput | number | $Types.Skip
    price?: IntFieldUpdateOperationsInput | number | $Types.Skip
    makeId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    modelId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    modelVariantId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    ulezCompliance?: EnumELEZComplianceFieldUpdateOperationsInput | $Enums.ELEZCompliance | $Types.Skip
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | $Types.Skip
    colour?: EnumColourFieldUpdateOperationsInput | $Enums.Colour | $Types.Skip
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | $Types.Skip
    bodyType?: EnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType | $Types.Skip
    odoUnit?: EnumOdoUnitFieldUpdateOperationsInput | $Enums.OdoUnit | $Types.Skip
    currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode | $Types.Skip
    status?: EnumClassifiedStatusFieldUpdateOperationsInput | $Enums.ClassifiedStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    images?: ImageUncheckedUpdateManyWithoutClassifiedNestedInput | $Types.Skip
    customers?: CustomerUncheckedUpdateManyWithoutClassifiedNestedInput | $Types.Skip
  }

  export type ClassifiedCreateManyInput = {
    id?: number | $Types.Skip
    views?: number | $Types.Skip
    slug: string
    vrm?: string | null | $Types.Skip
    title?: string | null | $Types.Skip
    description?: string | null | $Types.Skip
    year: number
    odoReading?: number | $Types.Skip
    doors?: number | $Types.Skip
    seats?: number | $Types.Skip
    price?: number | $Types.Skip
    makeId: number
    modelId: number
    modelVariantId: number
    ulezCompliance?: $Enums.ELEZCompliance | $Types.Skip
    transmission?: $Enums.Transmission | $Types.Skip
    colour?: $Enums.Colour | $Types.Skip
    fuelType?: $Enums.FuelType | $Types.Skip
    bodyType?: $Enums.BodyType | $Types.Skip
    odoUnit?: $Enums.OdoUnit | $Types.Skip
    currency?: $Enums.CurrencyCode | $Types.Skip
    status?: $Enums.ClassifiedStatus | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type ClassifiedUpdateManyMutationInput = {
    views?: IntFieldUpdateOperationsInput | number | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    vrm?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    title?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    year?: IntFieldUpdateOperationsInput | number | $Types.Skip
    odoReading?: IntFieldUpdateOperationsInput | number | $Types.Skip
    doors?: IntFieldUpdateOperationsInput | number | $Types.Skip
    seats?: IntFieldUpdateOperationsInput | number | $Types.Skip
    price?: IntFieldUpdateOperationsInput | number | $Types.Skip
    ulezCompliance?: EnumELEZComplianceFieldUpdateOperationsInput | $Enums.ELEZCompliance | $Types.Skip
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | $Types.Skip
    colour?: EnumColourFieldUpdateOperationsInput | $Enums.Colour | $Types.Skip
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | $Types.Skip
    bodyType?: EnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType | $Types.Skip
    odoUnit?: EnumOdoUnitFieldUpdateOperationsInput | $Enums.OdoUnit | $Types.Skip
    currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode | $Types.Skip
    status?: EnumClassifiedStatusFieldUpdateOperationsInput | $Enums.ClassifiedStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ClassifiedUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    views?: IntFieldUpdateOperationsInput | number | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    vrm?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    title?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    year?: IntFieldUpdateOperationsInput | number | $Types.Skip
    odoReading?: IntFieldUpdateOperationsInput | number | $Types.Skip
    doors?: IntFieldUpdateOperationsInput | number | $Types.Skip
    seats?: IntFieldUpdateOperationsInput | number | $Types.Skip
    price?: IntFieldUpdateOperationsInput | number | $Types.Skip
    makeId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    modelId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    modelVariantId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    ulezCompliance?: EnumELEZComplianceFieldUpdateOperationsInput | $Enums.ELEZCompliance | $Types.Skip
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | $Types.Skip
    colour?: EnumColourFieldUpdateOperationsInput | $Enums.Colour | $Types.Skip
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | $Types.Skip
    bodyType?: EnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType | $Types.Skip
    odoUnit?: EnumOdoUnitFieldUpdateOperationsInput | $Enums.OdoUnit | $Types.Skip
    currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode | $Types.Skip
    status?: EnumClassifiedStatusFieldUpdateOperationsInput | $Enums.ClassifiedStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type CustomerCreateInput = {
    firstName: string
    lastName: string
    email: string
    mobile?: string | null | $Types.Skip
    bookingDate?: Date | string | null | $Types.Skip
    termAccepted?: boolean | $Types.Skip
    status?: $Enums.CustomerStatus | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    Classified?: ClassifiedCreateNestedOneWithoutCustomersInput | $Types.Skip
    lifecycle?: CustomerLifecycleCreateNestedManyWithoutCustomerInput | $Types.Skip
  }

  export type CustomerUncheckedCreateInput = {
    id?: number | $Types.Skip
    firstName: string
    lastName: string
    email: string
    mobile?: string | null | $Types.Skip
    bookingDate?: Date | string | null | $Types.Skip
    termAccepted?: boolean | $Types.Skip
    status?: $Enums.CustomerStatus | $Types.Skip
    classifiedId?: number | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    lifecycle?: CustomerLifecycleUncheckedCreateNestedManyWithoutCustomerInput | $Types.Skip
  }

  export type CustomerUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    lastName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    mobile?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    bookingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    termAccepted?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    status?: EnumCustomerStatusFieldUpdateOperationsInput | $Enums.CustomerStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    Classified?: ClassifiedUpdateOneWithoutCustomersNestedInput | $Types.Skip
    lifecycle?: CustomerLifecycleUpdateManyWithoutCustomerNestedInput | $Types.Skip
  }

  export type CustomerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    firstName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    lastName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    mobile?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    bookingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    termAccepted?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    status?: EnumCustomerStatusFieldUpdateOperationsInput | $Enums.CustomerStatus | $Types.Skip
    classifiedId?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    lifecycle?: CustomerLifecycleUncheckedUpdateManyWithoutCustomerNestedInput | $Types.Skip
  }

  export type CustomerCreateManyInput = {
    id?: number | $Types.Skip
    firstName: string
    lastName: string
    email: string
    mobile?: string | null | $Types.Skip
    bookingDate?: Date | string | null | $Types.Skip
    termAccepted?: boolean | $Types.Skip
    status?: $Enums.CustomerStatus | $Types.Skip
    classifiedId?: number | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type CustomerUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    lastName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    mobile?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    bookingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    termAccepted?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    status?: EnumCustomerStatusFieldUpdateOperationsInput | $Enums.CustomerStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    firstName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    lastName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    mobile?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    bookingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    termAccepted?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    status?: EnumCustomerStatusFieldUpdateOperationsInput | $Enums.CustomerStatus | $Types.Skip
    classifiedId?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type CustomerLifecycleCreateInput = {
    oldStatus: $Enums.CustomerStatus
    newStatus: $Enums.CustomerStatus
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    customer: CustomerCreateNestedOneWithoutLifecycleInput
  }

  export type CustomerLifecycleUncheckedCreateInput = {
    id?: number | $Types.Skip
    customerId: number
    oldStatus: $Enums.CustomerStatus
    newStatus: $Enums.CustomerStatus
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type CustomerLifecycleUpdateInput = {
    oldStatus?: EnumCustomerStatusFieldUpdateOperationsInput | $Enums.CustomerStatus | $Types.Skip
    newStatus?: EnumCustomerStatusFieldUpdateOperationsInput | $Enums.CustomerStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    customer?: CustomerUpdateOneRequiredWithoutLifecycleNestedInput | $Types.Skip
  }

  export type CustomerLifecycleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    customerId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    oldStatus?: EnumCustomerStatusFieldUpdateOperationsInput | $Enums.CustomerStatus | $Types.Skip
    newStatus?: EnumCustomerStatusFieldUpdateOperationsInput | $Enums.CustomerStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type CustomerLifecycleCreateManyInput = {
    id?: number | $Types.Skip
    customerId: number
    oldStatus: $Enums.CustomerStatus
    newStatus: $Enums.CustomerStatus
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type CustomerLifecycleUpdateManyMutationInput = {
    oldStatus?: EnumCustomerStatusFieldUpdateOperationsInput | $Enums.CustomerStatus | $Types.Skip
    newStatus?: EnumCustomerStatusFieldUpdateOperationsInput | $Enums.CustomerStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type CustomerLifecycleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    customerId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    oldStatus?: EnumCustomerStatusFieldUpdateOperationsInput | $Enums.CustomerStatus | $Types.Skip
    newStatus?: EnumCustomerStatusFieldUpdateOperationsInput | $Enums.CustomerStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ImageCreateInput = {
    alt: string
    src: string
    blurhash: string
    isMain?: boolean | $Types.Skip
    classified: ClassifiedCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateInput = {
    id?: number | $Types.Skip
    alt: string
    src: string
    classifiedId: number
    blurhash: string
    isMain?: boolean | $Types.Skip
  }

  export type ImageUpdateInput = {
    alt?: StringFieldUpdateOperationsInput | string | $Types.Skip
    src?: StringFieldUpdateOperationsInput | string | $Types.Skip
    blurhash?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isMain?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    classified?: ClassifiedUpdateOneRequiredWithoutImagesNestedInput | $Types.Skip
  }

  export type ImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    alt?: StringFieldUpdateOperationsInput | string | $Types.Skip
    src?: StringFieldUpdateOperationsInput | string | $Types.Skip
    classifiedId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    blurhash?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isMain?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
  }

  export type ImageCreateManyInput = {
    id?: number | $Types.Skip
    alt: string
    src: string
    classifiedId: number
    blurhash: string
    isMain?: boolean | $Types.Skip
  }

  export type ImageUpdateManyMutationInput = {
    alt?: StringFieldUpdateOperationsInput | string | $Types.Skip
    src?: StringFieldUpdateOperationsInput | string | $Types.Skip
    blurhash?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isMain?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    alt?: StringFieldUpdateOperationsInput | string | $Types.Skip
    src?: StringFieldUpdateOperationsInput | string | $Types.Skip
    classifiedId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    blurhash?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isMain?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
  }

  export type PageViewCreateInput = {
    path: string
    viewedAt?: Date | string | $Types.Skip
    ipAddress?: string | null | $Types.Skip
    userAgent?: string | null | $Types.Skip
    referrer?: string | null | $Types.Skip
  }

  export type PageViewUncheckedCreateInput = {
    id?: number | $Types.Skip
    path: string
    viewedAt?: Date | string | $Types.Skip
    ipAddress?: string | null | $Types.Skip
    userAgent?: string | null | $Types.Skip
    referrer?: string | null | $Types.Skip
  }

  export type PageViewUpdateInput = {
    path?: StringFieldUpdateOperationsInput | string | $Types.Skip
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    referrer?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
  }

  export type PageViewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    path?: StringFieldUpdateOperationsInput | string | $Types.Skip
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    referrer?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
  }

  export type PageViewCreateManyInput = {
    id?: number | $Types.Skip
    path: string
    viewedAt?: Date | string | $Types.Skip
    ipAddress?: string | null | $Types.Skip
    userAgent?: string | null | $Types.Skip
    referrer?: string | null | $Types.Skip
  }

  export type PageViewUpdateManyMutationInput = {
    path?: StringFieldUpdateOperationsInput | string | $Types.Skip
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    referrer?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
  }

  export type PageViewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    path?: StringFieldUpdateOperationsInput | string | $Types.Skip
    viewedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    referrer?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
  }

  export type SessionCreateInput = {
    id?: string | $Types.Skip
    sessionToken: string
    expires: Date | string
    requires2FA: boolean
    user: UserCreateNestedOneWithoutSessionInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string | $Types.Skip
    sessionToken: string
    userId: string
    expires: Date | string
    requires2FA: boolean
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    sessionToken?: StringFieldUpdateOperationsInput | string | $Types.Skip
    expires?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    requires2FA?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    user?: UserUpdateOneRequiredWithoutSessionNestedInput | $Types.Skip
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    sessionToken?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    expires?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    requires2FA?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
  }

  export type SessionCreateManyInput = {
    id?: string | $Types.Skip
    sessionToken: string
    userId: string
    expires: Date | string
    requires2FA: boolean
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    sessionToken?: StringFieldUpdateOperationsInput | string | $Types.Skip
    expires?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    requires2FA?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    sessionToken?: StringFieldUpdateOperationsInput | string | $Types.Skip
    userId?: StringFieldUpdateOperationsInput | string | $Types.Skip
    expires?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    requires2FA?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
  }

  export type MakeCreateInput = {
    name: string
    image: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    models?: ModelCreateNestedManyWithoutMakeInput | $Types.Skip
    classifieds?: ClassifiedCreateNestedManyWithoutMakeInput | $Types.Skip
  }

  export type MakeUncheckedCreateInput = {
    id?: number | $Types.Skip
    name: string
    image: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    models?: ModelUncheckedCreateNestedManyWithoutMakeInput | $Types.Skip
    classifieds?: ClassifiedUncheckedCreateNestedManyWithoutMakeInput | $Types.Skip
  }

  export type MakeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    image?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    models?: ModelUpdateManyWithoutMakeNestedInput | $Types.Skip
    classifieds?: ClassifiedUpdateManyWithoutMakeNestedInput | $Types.Skip
  }

  export type MakeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    image?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    models?: ModelUncheckedUpdateManyWithoutMakeNestedInput | $Types.Skip
    classifieds?: ClassifiedUncheckedUpdateManyWithoutMakeNestedInput | $Types.Skip
  }

  export type MakeCreateManyInput = {
    id?: number | $Types.Skip
    name: string
    image: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type MakeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    image?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type MakeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    image?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ModelCreateInput = {
    name: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    make: MakeCreateNestedOneWithoutModelsInput
    modelVariants?: ModelVariantCreateNestedManyWithoutModelInput | $Types.Skip
    classifieds?: ClassifiedCreateNestedManyWithoutModelInput | $Types.Skip
  }

  export type ModelUncheckedCreateInput = {
    id?: number | $Types.Skip
    name: string
    makeId: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    modelVariants?: ModelVariantUncheckedCreateNestedManyWithoutModelInput | $Types.Skip
    classifieds?: ClassifiedUncheckedCreateNestedManyWithoutModelInput | $Types.Skip
  }

  export type ModelUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    make?: MakeUpdateOneRequiredWithoutModelsNestedInput | $Types.Skip
    modelVariants?: ModelVariantUpdateManyWithoutModelNestedInput | $Types.Skip
    classifieds?: ClassifiedUpdateManyWithoutModelNestedInput | $Types.Skip
  }

  export type ModelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    makeId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    modelVariants?: ModelVariantUncheckedUpdateManyWithoutModelNestedInput | $Types.Skip
    classifieds?: ClassifiedUncheckedUpdateManyWithoutModelNestedInput | $Types.Skip
  }

  export type ModelCreateManyInput = {
    id?: number | $Types.Skip
    name: string
    makeId: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type ModelUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ModelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    makeId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ModelVariantCreateInput = {
    name: string
    yearStart: number
    yearEnd: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    model: ModelCreateNestedOneWithoutModelVariantsInput
    classifieds?: ClassifiedCreateNestedManyWithoutModelVariantInput | $Types.Skip
  }

  export type ModelVariantUncheckedCreateInput = {
    id?: number | $Types.Skip
    name: string
    modelId: number
    yearStart: number
    yearEnd: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    classifieds?: ClassifiedUncheckedCreateNestedManyWithoutModelVariantInput | $Types.Skip
  }

  export type ModelVariantUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    yearStart?: IntFieldUpdateOperationsInput | number | $Types.Skip
    yearEnd?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    model?: ModelUpdateOneRequiredWithoutModelVariantsNestedInput | $Types.Skip
    classifieds?: ClassifiedUpdateManyWithoutModelVariantNestedInput | $Types.Skip
  }

  export type ModelVariantUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    modelId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    yearStart?: IntFieldUpdateOperationsInput | number | $Types.Skip
    yearEnd?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    classifieds?: ClassifiedUncheckedUpdateManyWithoutModelVariantNestedInput | $Types.Skip
  }

  export type ModelVariantCreateManyInput = {
    id?: number | $Types.Skip
    name: string
    modelId: number
    yearStart: number
    yearEnd: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type ModelVariantUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    yearStart?: IntFieldUpdateOperationsInput | number | $Types.Skip
    yearEnd?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ModelVariantUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    modelId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    yearStart?: IntFieldUpdateOperationsInput | number | $Types.Skip
    yearEnd?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type UserCreateInput = {
    id?: string | $Types.Skip
    email: string
    hashedPassword: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    Session?: SessionCreateNestedManyWithoutUserInput | $Types.Skip
  }

  export type UserUncheckedCreateInput = {
    id?: string | $Types.Skip
    email: string
    hashedPassword: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    Session?: SessionUncheckedCreateNestedManyWithoutUserInput | $Types.Skip
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    hashedPassword?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    Session?: SessionUpdateManyWithoutUserNestedInput | $Types.Skip
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    hashedPassword?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    Session?: SessionUncheckedUpdateManyWithoutUserNestedInput | $Types.Skip
  }

  export type UserCreateManyInput = {
    id?: string | $Types.Skip
    email: string
    hashedPassword: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    hashedPassword?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    hashedPassword?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntFilter<$PrismaModel> | number | $Types.Skip
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    mode?: QueryMode | $Types.Skip
    not?: NestedStringFilter<$PrismaModel> | string | $Types.Skip
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    mode?: QueryMode | $Types.Skip
    not?: NestedStringNullableFilter<$PrismaModel> | string | null | $Types.Skip
  }

  export type EnumELEZComplianceFilter<$PrismaModel = never> = {
    equals?: $Enums.ELEZCompliance | EnumELEZComplianceFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.ELEZCompliance[] | ListEnumELEZComplianceFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.ELEZCompliance[] | ListEnumELEZComplianceFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumELEZComplianceFilter<$PrismaModel> | $Enums.ELEZCompliance | $Types.Skip
  }

  export type EnumTransmissionFilter<$PrismaModel = never> = {
    equals?: $Enums.Transmission | EnumTransmissionFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumTransmissionFilter<$PrismaModel> | $Enums.Transmission | $Types.Skip
  }

  export type EnumColourFilter<$PrismaModel = never> = {
    equals?: $Enums.Colour | EnumColourFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.Colour[] | ListEnumColourFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.Colour[] | ListEnumColourFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumColourFilter<$PrismaModel> | $Enums.Colour | $Types.Skip
  }

  export type EnumFuelTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FuelType | EnumFuelTypeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumFuelTypeFilter<$PrismaModel> | $Enums.FuelType | $Types.Skip
  }

  export type EnumBodyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BodyType | EnumBodyTypeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.BodyType[] | ListEnumBodyTypeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.BodyType[] | ListEnumBodyTypeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumBodyTypeFilter<$PrismaModel> | $Enums.BodyType | $Types.Skip
  }

  export type EnumOdoUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.OdoUnit | EnumOdoUnitFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.OdoUnit[] | ListEnumOdoUnitFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.OdoUnit[] | ListEnumOdoUnitFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumOdoUnitFilter<$PrismaModel> | $Enums.OdoUnit | $Types.Skip
  }

  export type EnumCurrencyCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencyCode | EnumCurrencyCodeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumCurrencyCodeFilter<$PrismaModel> | $Enums.CurrencyCode | $Types.Skip
  }

  export type EnumClassifiedStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ClassifiedStatus | EnumClassifiedStatusFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.ClassifiedStatus[] | ListEnumClassifiedStatusFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.ClassifiedStatus[] | ListEnumClassifiedStatusFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumClassifiedStatusFilter<$PrismaModel> | $Enums.ClassifiedStatus | $Types.Skip
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string | $Types.Skip
  }

  export type MakeScalarRelationFilter = {
    is?: MakeWhereInput | $Types.Skip
    isNot?: MakeWhereInput | $Types.Skip
  }

  export type ModelScalarRelationFilter = {
    is?: ModelWhereInput | $Types.Skip
    isNot?: ModelWhereInput | $Types.Skip
  }

  export type ModelVariantNullableScalarRelationFilter = {
    is?: ModelVariantWhereInput | null | $Types.Skip
    isNot?: ModelVariantWhereInput | null | $Types.Skip
  }

  export type ImageListRelationFilter = {
    every?: ImageWhereInput | $Types.Skip
    some?: ImageWhereInput | $Types.Skip
    none?: ImageWhereInput | $Types.Skip
  }

  export type CustomerListRelationFilter = {
    every?: CustomerWhereInput | $Types.Skip
    some?: CustomerWhereInput | $Types.Skip
    none?: CustomerWhereInput | $Types.Skip
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder | $Types.Skip
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type CustomerOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type ClassifiedCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    views?: SortOrder | $Types.Skip
    slug?: SortOrder | $Types.Skip
    vrm?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    year?: SortOrder | $Types.Skip
    odoReading?: SortOrder | $Types.Skip
    doors?: SortOrder | $Types.Skip
    seats?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    makeId?: SortOrder | $Types.Skip
    modelId?: SortOrder | $Types.Skip
    modelVariantId?: SortOrder | $Types.Skip
    ulezCompliance?: SortOrder | $Types.Skip
    transmission?: SortOrder | $Types.Skip
    colour?: SortOrder | $Types.Skip
    fuelType?: SortOrder | $Types.Skip
    bodyType?: SortOrder | $Types.Skip
    odoUnit?: SortOrder | $Types.Skip
    currency?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type ClassifiedAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    views?: SortOrder | $Types.Skip
    year?: SortOrder | $Types.Skip
    odoReading?: SortOrder | $Types.Skip
    doors?: SortOrder | $Types.Skip
    seats?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    makeId?: SortOrder | $Types.Skip
    modelId?: SortOrder | $Types.Skip
    modelVariantId?: SortOrder | $Types.Skip
  }

  export type ClassifiedMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    views?: SortOrder | $Types.Skip
    slug?: SortOrder | $Types.Skip
    vrm?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    year?: SortOrder | $Types.Skip
    odoReading?: SortOrder | $Types.Skip
    doors?: SortOrder | $Types.Skip
    seats?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    makeId?: SortOrder | $Types.Skip
    modelId?: SortOrder | $Types.Skip
    modelVariantId?: SortOrder | $Types.Skip
    ulezCompliance?: SortOrder | $Types.Skip
    transmission?: SortOrder | $Types.Skip
    colour?: SortOrder | $Types.Skip
    fuelType?: SortOrder | $Types.Skip
    bodyType?: SortOrder | $Types.Skip
    odoUnit?: SortOrder | $Types.Skip
    currency?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type ClassifiedMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    views?: SortOrder | $Types.Skip
    slug?: SortOrder | $Types.Skip
    vrm?: SortOrder | $Types.Skip
    title?: SortOrder | $Types.Skip
    description?: SortOrder | $Types.Skip
    year?: SortOrder | $Types.Skip
    odoReading?: SortOrder | $Types.Skip
    doors?: SortOrder | $Types.Skip
    seats?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    makeId?: SortOrder | $Types.Skip
    modelId?: SortOrder | $Types.Skip
    modelVariantId?: SortOrder | $Types.Skip
    ulezCompliance?: SortOrder | $Types.Skip
    transmission?: SortOrder | $Types.Skip
    colour?: SortOrder | $Types.Skip
    fuelType?: SortOrder | $Types.Skip
    bodyType?: SortOrder | $Types.Skip
    odoUnit?: SortOrder | $Types.Skip
    currency?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type ClassifiedSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    views?: SortOrder | $Types.Skip
    year?: SortOrder | $Types.Skip
    odoReading?: SortOrder | $Types.Skip
    doors?: SortOrder | $Types.Skip
    seats?: SortOrder | $Types.Skip
    price?: SortOrder | $Types.Skip
    makeId?: SortOrder | $Types.Skip
    modelId?: SortOrder | $Types.Skip
    modelVariantId?: SortOrder | $Types.Skip
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _avg?: NestedFloatFilter<$PrismaModel> | $Types.Skip
    _sum?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _max?: NestedIntFilter<$PrismaModel> | $Types.Skip
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    mode?: QueryMode | $Types.Skip
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringFilter<$PrismaModel> | $Types.Skip
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    mode?: QueryMode | $Types.Skip
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type EnumELEZComplianceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ELEZCompliance | EnumELEZComplianceFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.ELEZCompliance[] | ListEnumELEZComplianceFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.ELEZCompliance[] | ListEnumELEZComplianceFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumELEZComplianceWithAggregatesFilter<$PrismaModel> | $Enums.ELEZCompliance | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumELEZComplianceFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumELEZComplianceFilter<$PrismaModel> | $Types.Skip
  }

  export type EnumTransmissionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Transmission | EnumTransmissionFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumTransmissionWithAggregatesFilter<$PrismaModel> | $Enums.Transmission | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumTransmissionFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumTransmissionFilter<$PrismaModel> | $Types.Skip
  }

  export type EnumColourWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Colour | EnumColourFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.Colour[] | ListEnumColourFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.Colour[] | ListEnumColourFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumColourWithAggregatesFilter<$PrismaModel> | $Enums.Colour | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumColourFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumColourFilter<$PrismaModel> | $Types.Skip
  }

  export type EnumFuelTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FuelType | EnumFuelTypeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumFuelTypeWithAggregatesFilter<$PrismaModel> | $Enums.FuelType | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumFuelTypeFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumFuelTypeFilter<$PrismaModel> | $Types.Skip
  }

  export type EnumBodyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BodyType | EnumBodyTypeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.BodyType[] | ListEnumBodyTypeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.BodyType[] | ListEnumBodyTypeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumBodyTypeWithAggregatesFilter<$PrismaModel> | $Enums.BodyType | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumBodyTypeFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumBodyTypeFilter<$PrismaModel> | $Types.Skip
  }

  export type EnumOdoUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OdoUnit | EnumOdoUnitFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.OdoUnit[] | ListEnumOdoUnitFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.OdoUnit[] | ListEnumOdoUnitFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumOdoUnitWithAggregatesFilter<$PrismaModel> | $Enums.OdoUnit | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumOdoUnitFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumOdoUnitFilter<$PrismaModel> | $Types.Skip
  }

  export type EnumCurrencyCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencyCode | EnumCurrencyCodeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumCurrencyCodeWithAggregatesFilter<$PrismaModel> | $Enums.CurrencyCode | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumCurrencyCodeFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumCurrencyCodeFilter<$PrismaModel> | $Types.Skip
  }

  export type EnumClassifiedStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClassifiedStatus | EnumClassifiedStatusFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.ClassifiedStatus[] | ListEnumClassifiedStatusFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.ClassifiedStatus[] | ListEnumClassifiedStatusFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumClassifiedStatusWithAggregatesFilter<$PrismaModel> | $Enums.ClassifiedStatus | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumClassifiedStatusFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumClassifiedStatusFilter<$PrismaModel> | $Types.Skip
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedDateTimeFilter<$PrismaModel> | $Types.Skip
    _max?: NestedDateTimeFilter<$PrismaModel> | $Types.Skip
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null | $Types.Skip
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedBoolFilter<$PrismaModel> | boolean | $Types.Skip
  }

  export type EnumCustomerStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerStatus | EnumCustomerStatusFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.CustomerStatus[] | ListEnumCustomerStatusFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.CustomerStatus[] | ListEnumCustomerStatusFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumCustomerStatusFilter<$PrismaModel> | $Enums.CustomerStatus | $Types.Skip
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntNullableFilter<$PrismaModel> | number | null | $Types.Skip
  }

  export type ClassifiedNullableScalarRelationFilter = {
    is?: ClassifiedWhereInput | null | $Types.Skip
    isNot?: ClassifiedWhereInput | null | $Types.Skip
  }

  export type CustomerLifecycleListRelationFilter = {
    every?: CustomerLifecycleWhereInput | $Types.Skip
    some?: CustomerLifecycleWhereInput | $Types.Skip
    none?: CustomerLifecycleWhereInput | $Types.Skip
  }

  export type CustomerLifecycleOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    firstName?: SortOrder | $Types.Skip
    lastName?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    mobile?: SortOrder | $Types.Skip
    bookingDate?: SortOrder | $Types.Skip
    termAccepted?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    classifiedId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type CustomerAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    classifiedId?: SortOrder | $Types.Skip
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    firstName?: SortOrder | $Types.Skip
    lastName?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    mobile?: SortOrder | $Types.Skip
    bookingDate?: SortOrder | $Types.Skip
    termAccepted?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    classifiedId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    firstName?: SortOrder | $Types.Skip
    lastName?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    mobile?: SortOrder | $Types.Skip
    bookingDate?: SortOrder | $Types.Skip
    termAccepted?: SortOrder | $Types.Skip
    status?: SortOrder | $Types.Skip
    classifiedId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type CustomerSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    classifiedId?: SortOrder | $Types.Skip
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedDateTimeNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedDateTimeNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedBoolFilter<$PrismaModel> | $Types.Skip
    _max?: NestedBoolFilter<$PrismaModel> | $Types.Skip
  }

  export type EnumCustomerStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerStatus | EnumCustomerStatusFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.CustomerStatus[] | ListEnumCustomerStatusFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.CustomerStatus[] | ListEnumCustomerStatusFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumCustomerStatusWithAggregatesFilter<$PrismaModel> | $Enums.CustomerStatus | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumCustomerStatusFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumCustomerStatusFilter<$PrismaModel> | $Types.Skip
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _avg?: NestedFloatNullableFilter<$PrismaModel> | $Types.Skip
    _sum?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput | $Types.Skip
    isNot?: CustomerWhereInput | $Types.Skip
  }

  export type CustomerLifecycleCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    customerId?: SortOrder | $Types.Skip
    oldStatus?: SortOrder | $Types.Skip
    newStatus?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type CustomerLifecycleAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    customerId?: SortOrder | $Types.Skip
  }

  export type CustomerLifecycleMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    customerId?: SortOrder | $Types.Skip
    oldStatus?: SortOrder | $Types.Skip
    newStatus?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type CustomerLifecycleMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    customerId?: SortOrder | $Types.Skip
    oldStatus?: SortOrder | $Types.Skip
    newStatus?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type CustomerLifecycleSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    customerId?: SortOrder | $Types.Skip
  }

  export type ClassifiedScalarRelationFilter = {
    is?: ClassifiedWhereInput | $Types.Skip
    isNot?: ClassifiedWhereInput | $Types.Skip
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    alt?: SortOrder | $Types.Skip
    src?: SortOrder | $Types.Skip
    classifiedId?: SortOrder | $Types.Skip
    blurhash?: SortOrder | $Types.Skip
    isMain?: SortOrder | $Types.Skip
  }

  export type ImageAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    classifiedId?: SortOrder | $Types.Skip
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    alt?: SortOrder | $Types.Skip
    src?: SortOrder | $Types.Skip
    classifiedId?: SortOrder | $Types.Skip
    blurhash?: SortOrder | $Types.Skip
    isMain?: SortOrder | $Types.Skip
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    alt?: SortOrder | $Types.Skip
    src?: SortOrder | $Types.Skip
    classifiedId?: SortOrder | $Types.Skip
    blurhash?: SortOrder | $Types.Skip
    isMain?: SortOrder | $Types.Skip
  }

  export type ImageSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    classifiedId?: SortOrder | $Types.Skip
  }

  export type PageViewCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    path?: SortOrder | $Types.Skip
    viewedAt?: SortOrder | $Types.Skip
    ipAddress?: SortOrder | $Types.Skip
    userAgent?: SortOrder | $Types.Skip
    referrer?: SortOrder | $Types.Skip
  }

  export type PageViewAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
  }

  export type PageViewMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    path?: SortOrder | $Types.Skip
    viewedAt?: SortOrder | $Types.Skip
    ipAddress?: SortOrder | $Types.Skip
    userAgent?: SortOrder | $Types.Skip
    referrer?: SortOrder | $Types.Skip
  }

  export type PageViewMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    path?: SortOrder | $Types.Skip
    viewedAt?: SortOrder | $Types.Skip
    ipAddress?: SortOrder | $Types.Skip
    userAgent?: SortOrder | $Types.Skip
    referrer?: SortOrder | $Types.Skip
  }

  export type PageViewSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput | $Types.Skip
    isNot?: UserWhereInput | $Types.Skip
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    sessionToken?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    expires?: SortOrder | $Types.Skip
    requires2FA?: SortOrder | $Types.Skip
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    sessionToken?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    expires?: SortOrder | $Types.Skip
    requires2FA?: SortOrder | $Types.Skip
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    sessionToken?: SortOrder | $Types.Skip
    userId?: SortOrder | $Types.Skip
    expires?: SortOrder | $Types.Skip
    requires2FA?: SortOrder | $Types.Skip
  }

  export type ModelListRelationFilter = {
    every?: ModelWhereInput | $Types.Skip
    some?: ModelWhereInput | $Types.Skip
    none?: ModelWhereInput | $Types.Skip
  }

  export type ClassifiedListRelationFilter = {
    every?: ClassifiedWhereInput | $Types.Skip
    some?: ClassifiedWhereInput | $Types.Skip
    none?: ClassifiedWhereInput | $Types.Skip
  }

  export type ModelOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type ClassifiedOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type MakeCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    image?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type MakeAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
  }

  export type MakeMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    image?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type MakeMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    image?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type MakeSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
  }

  export type ModelVariantListRelationFilter = {
    every?: ModelVariantWhereInput | $Types.Skip
    some?: ModelVariantWhereInput | $Types.Skip
    none?: ModelVariantWhereInput | $Types.Skip
  }

  export type ModelVariantOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type ModelMakeIdNameCompoundUniqueInput = {
    makeId: number
    name: string
  }

  export type ModelCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    makeId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type ModelAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    makeId?: SortOrder | $Types.Skip
  }

  export type ModelMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    makeId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type ModelMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    makeId?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type ModelSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    makeId?: SortOrder | $Types.Skip
  }

  export type ModelVariantModelIdNameCompoundUniqueInput = {
    modelId: number
    name: string
  }

  export type ModelVariantCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    modelId?: SortOrder | $Types.Skip
    yearStart?: SortOrder | $Types.Skip
    yearEnd?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type ModelVariantAvgOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    modelId?: SortOrder | $Types.Skip
    yearStart?: SortOrder | $Types.Skip
    yearEnd?: SortOrder | $Types.Skip
  }

  export type ModelVariantMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    modelId?: SortOrder | $Types.Skip
    yearStart?: SortOrder | $Types.Skip
    yearEnd?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type ModelVariantMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    name?: SortOrder | $Types.Skip
    modelId?: SortOrder | $Types.Skip
    yearStart?: SortOrder | $Types.Skip
    yearEnd?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type ModelVariantSumOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    modelId?: SortOrder | $Types.Skip
    yearStart?: SortOrder | $Types.Skip
    yearEnd?: SortOrder | $Types.Skip
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput | $Types.Skip
    some?: SessionWhereInput | $Types.Skip
    none?: SessionWhereInput | $Types.Skip
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder | $Types.Skip
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    hashedPassword?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    hashedPassword?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder | $Types.Skip
    email?: SortOrder | $Types.Skip
    hashedPassword?: SortOrder | $Types.Skip
    createdAt?: SortOrder | $Types.Skip
    updatedAt?: SortOrder | $Types.Skip
  }

  export type MakeCreateNestedOneWithoutClassifiedsInput = {
    create?: XOR<MakeCreateWithoutClassifiedsInput, MakeUncheckedCreateWithoutClassifiedsInput> | $Types.Skip
    connectOrCreate?: MakeCreateOrConnectWithoutClassifiedsInput | $Types.Skip
    connect?: MakeWhereUniqueInput | $Types.Skip
  }

  export type ModelCreateNestedOneWithoutClassifiedsInput = {
    create?: XOR<ModelCreateWithoutClassifiedsInput, ModelUncheckedCreateWithoutClassifiedsInput> | $Types.Skip
    connectOrCreate?: ModelCreateOrConnectWithoutClassifiedsInput | $Types.Skip
    connect?: ModelWhereUniqueInput | $Types.Skip
  }

  export type ModelVariantCreateNestedOneWithoutClassifiedsInput = {
    create?: XOR<ModelVariantCreateWithoutClassifiedsInput, ModelVariantUncheckedCreateWithoutClassifiedsInput> | $Types.Skip
    connectOrCreate?: ModelVariantCreateOrConnectWithoutClassifiedsInput | $Types.Skip
    connect?: ModelVariantWhereUniqueInput | $Types.Skip
  }

  export type ImageCreateNestedManyWithoutClassifiedInput = {
    create?: XOR<ImageCreateWithoutClassifiedInput, ImageUncheckedCreateWithoutClassifiedInput> | ImageCreateWithoutClassifiedInput[] | ImageUncheckedCreateWithoutClassifiedInput[] | $Types.Skip
    connectOrCreate?: ImageCreateOrConnectWithoutClassifiedInput | ImageCreateOrConnectWithoutClassifiedInput[] | $Types.Skip
    createMany?: ImageCreateManyClassifiedInputEnvelope | $Types.Skip
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[] | $Types.Skip
  }

  export type CustomerCreateNestedManyWithoutClassifiedInput = {
    create?: XOR<CustomerCreateWithoutClassifiedInput, CustomerUncheckedCreateWithoutClassifiedInput> | CustomerCreateWithoutClassifiedInput[] | CustomerUncheckedCreateWithoutClassifiedInput[] | $Types.Skip
    connectOrCreate?: CustomerCreateOrConnectWithoutClassifiedInput | CustomerCreateOrConnectWithoutClassifiedInput[] | $Types.Skip
    createMany?: CustomerCreateManyClassifiedInputEnvelope | $Types.Skip
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[] | $Types.Skip
  }

  export type ImageUncheckedCreateNestedManyWithoutClassifiedInput = {
    create?: XOR<ImageCreateWithoutClassifiedInput, ImageUncheckedCreateWithoutClassifiedInput> | ImageCreateWithoutClassifiedInput[] | ImageUncheckedCreateWithoutClassifiedInput[] | $Types.Skip
    connectOrCreate?: ImageCreateOrConnectWithoutClassifiedInput | ImageCreateOrConnectWithoutClassifiedInput[] | $Types.Skip
    createMany?: ImageCreateManyClassifiedInputEnvelope | $Types.Skip
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[] | $Types.Skip
  }

  export type CustomerUncheckedCreateNestedManyWithoutClassifiedInput = {
    create?: XOR<CustomerCreateWithoutClassifiedInput, CustomerUncheckedCreateWithoutClassifiedInput> | CustomerCreateWithoutClassifiedInput[] | CustomerUncheckedCreateWithoutClassifiedInput[] | $Types.Skip
    connectOrCreate?: CustomerCreateOrConnectWithoutClassifiedInput | CustomerCreateOrConnectWithoutClassifiedInput[] | $Types.Skip
    createMany?: CustomerCreateManyClassifiedInputEnvelope | $Types.Skip
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[] | $Types.Skip
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number | $Types.Skip
    increment?: number | $Types.Skip
    decrement?: number | $Types.Skip
    multiply?: number | $Types.Skip
    divide?: number | $Types.Skip
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string | $Types.Skip
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null | $Types.Skip
  }

  export type EnumELEZComplianceFieldUpdateOperationsInput = {
    set?: $Enums.ELEZCompliance | $Types.Skip
  }

  export type EnumTransmissionFieldUpdateOperationsInput = {
    set?: $Enums.Transmission | $Types.Skip
  }

  export type EnumColourFieldUpdateOperationsInput = {
    set?: $Enums.Colour | $Types.Skip
  }

  export type EnumFuelTypeFieldUpdateOperationsInput = {
    set?: $Enums.FuelType | $Types.Skip
  }

  export type EnumBodyTypeFieldUpdateOperationsInput = {
    set?: $Enums.BodyType | $Types.Skip
  }

  export type EnumOdoUnitFieldUpdateOperationsInput = {
    set?: $Enums.OdoUnit | $Types.Skip
  }

  export type EnumCurrencyCodeFieldUpdateOperationsInput = {
    set?: $Enums.CurrencyCode | $Types.Skip
  }

  export type EnumClassifiedStatusFieldUpdateOperationsInput = {
    set?: $Enums.ClassifiedStatus | $Types.Skip
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string | $Types.Skip
  }

  export type MakeUpdateOneRequiredWithoutClassifiedsNestedInput = {
    create?: XOR<MakeCreateWithoutClassifiedsInput, MakeUncheckedCreateWithoutClassifiedsInput> | $Types.Skip
    connectOrCreate?: MakeCreateOrConnectWithoutClassifiedsInput | $Types.Skip
    upsert?: MakeUpsertWithoutClassifiedsInput | $Types.Skip
    connect?: MakeWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<MakeUpdateToOneWithWhereWithoutClassifiedsInput, MakeUpdateWithoutClassifiedsInput>, MakeUncheckedUpdateWithoutClassifiedsInput> | $Types.Skip
  }

  export type ModelUpdateOneRequiredWithoutClassifiedsNestedInput = {
    create?: XOR<ModelCreateWithoutClassifiedsInput, ModelUncheckedCreateWithoutClassifiedsInput> | $Types.Skip
    connectOrCreate?: ModelCreateOrConnectWithoutClassifiedsInput | $Types.Skip
    upsert?: ModelUpsertWithoutClassifiedsInput | $Types.Skip
    connect?: ModelWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<ModelUpdateToOneWithWhereWithoutClassifiedsInput, ModelUpdateWithoutClassifiedsInput>, ModelUncheckedUpdateWithoutClassifiedsInput> | $Types.Skip
  }

  export type ModelVariantUpdateOneWithoutClassifiedsNestedInput = {
    create?: XOR<ModelVariantCreateWithoutClassifiedsInput, ModelVariantUncheckedCreateWithoutClassifiedsInput> | $Types.Skip
    connectOrCreate?: ModelVariantCreateOrConnectWithoutClassifiedsInput | $Types.Skip
    upsert?: ModelVariantUpsertWithoutClassifiedsInput | $Types.Skip
    disconnect?: ModelVariantWhereInput | boolean | $Types.Skip
    delete?: ModelVariantWhereInput | boolean | $Types.Skip
    connect?: ModelVariantWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<ModelVariantUpdateToOneWithWhereWithoutClassifiedsInput, ModelVariantUpdateWithoutClassifiedsInput>, ModelVariantUncheckedUpdateWithoutClassifiedsInput> | $Types.Skip
  }

  export type ImageUpdateManyWithoutClassifiedNestedInput = {
    create?: XOR<ImageCreateWithoutClassifiedInput, ImageUncheckedCreateWithoutClassifiedInput> | ImageCreateWithoutClassifiedInput[] | ImageUncheckedCreateWithoutClassifiedInput[] | $Types.Skip
    connectOrCreate?: ImageCreateOrConnectWithoutClassifiedInput | ImageCreateOrConnectWithoutClassifiedInput[] | $Types.Skip
    upsert?: ImageUpsertWithWhereUniqueWithoutClassifiedInput | ImageUpsertWithWhereUniqueWithoutClassifiedInput[] | $Types.Skip
    createMany?: ImageCreateManyClassifiedInputEnvelope | $Types.Skip
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[] | $Types.Skip
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[] | $Types.Skip
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[] | $Types.Skip
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[] | $Types.Skip
    update?: ImageUpdateWithWhereUniqueWithoutClassifiedInput | ImageUpdateWithWhereUniqueWithoutClassifiedInput[] | $Types.Skip
    updateMany?: ImageUpdateManyWithWhereWithoutClassifiedInput | ImageUpdateManyWithWhereWithoutClassifiedInput[] | $Types.Skip
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[] | $Types.Skip
  }

  export type CustomerUpdateManyWithoutClassifiedNestedInput = {
    create?: XOR<CustomerCreateWithoutClassifiedInput, CustomerUncheckedCreateWithoutClassifiedInput> | CustomerCreateWithoutClassifiedInput[] | CustomerUncheckedCreateWithoutClassifiedInput[] | $Types.Skip
    connectOrCreate?: CustomerCreateOrConnectWithoutClassifiedInput | CustomerCreateOrConnectWithoutClassifiedInput[] | $Types.Skip
    upsert?: CustomerUpsertWithWhereUniqueWithoutClassifiedInput | CustomerUpsertWithWhereUniqueWithoutClassifiedInput[] | $Types.Skip
    createMany?: CustomerCreateManyClassifiedInputEnvelope | $Types.Skip
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[] | $Types.Skip
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[] | $Types.Skip
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[] | $Types.Skip
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[] | $Types.Skip
    update?: CustomerUpdateWithWhereUniqueWithoutClassifiedInput | CustomerUpdateWithWhereUniqueWithoutClassifiedInput[] | $Types.Skip
    updateMany?: CustomerUpdateManyWithWhereWithoutClassifiedInput | CustomerUpdateManyWithWhereWithoutClassifiedInput[] | $Types.Skip
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[] | $Types.Skip
  }

  export type ImageUncheckedUpdateManyWithoutClassifiedNestedInput = {
    create?: XOR<ImageCreateWithoutClassifiedInput, ImageUncheckedCreateWithoutClassifiedInput> | ImageCreateWithoutClassifiedInput[] | ImageUncheckedCreateWithoutClassifiedInput[] | $Types.Skip
    connectOrCreate?: ImageCreateOrConnectWithoutClassifiedInput | ImageCreateOrConnectWithoutClassifiedInput[] | $Types.Skip
    upsert?: ImageUpsertWithWhereUniqueWithoutClassifiedInput | ImageUpsertWithWhereUniqueWithoutClassifiedInput[] | $Types.Skip
    createMany?: ImageCreateManyClassifiedInputEnvelope | $Types.Skip
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[] | $Types.Skip
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[] | $Types.Skip
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[] | $Types.Skip
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[] | $Types.Skip
    update?: ImageUpdateWithWhereUniqueWithoutClassifiedInput | ImageUpdateWithWhereUniqueWithoutClassifiedInput[] | $Types.Skip
    updateMany?: ImageUpdateManyWithWhereWithoutClassifiedInput | ImageUpdateManyWithWhereWithoutClassifiedInput[] | $Types.Skip
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[] | $Types.Skip
  }

  export type CustomerUncheckedUpdateManyWithoutClassifiedNestedInput = {
    create?: XOR<CustomerCreateWithoutClassifiedInput, CustomerUncheckedCreateWithoutClassifiedInput> | CustomerCreateWithoutClassifiedInput[] | CustomerUncheckedCreateWithoutClassifiedInput[] | $Types.Skip
    connectOrCreate?: CustomerCreateOrConnectWithoutClassifiedInput | CustomerCreateOrConnectWithoutClassifiedInput[] | $Types.Skip
    upsert?: CustomerUpsertWithWhereUniqueWithoutClassifiedInput | CustomerUpsertWithWhereUniqueWithoutClassifiedInput[] | $Types.Skip
    createMany?: CustomerCreateManyClassifiedInputEnvelope | $Types.Skip
    set?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[] | $Types.Skip
    disconnect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[] | $Types.Skip
    delete?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[] | $Types.Skip
    connect?: CustomerWhereUniqueInput | CustomerWhereUniqueInput[] | $Types.Skip
    update?: CustomerUpdateWithWhereUniqueWithoutClassifiedInput | CustomerUpdateWithWhereUniqueWithoutClassifiedInput[] | $Types.Skip
    updateMany?: CustomerUpdateManyWithWhereWithoutClassifiedInput | CustomerUpdateManyWithWhereWithoutClassifiedInput[] | $Types.Skip
    deleteMany?: CustomerScalarWhereInput | CustomerScalarWhereInput[] | $Types.Skip
  }

  export type ClassifiedCreateNestedOneWithoutCustomersInput = {
    create?: XOR<ClassifiedCreateWithoutCustomersInput, ClassifiedUncheckedCreateWithoutCustomersInput> | $Types.Skip
    connectOrCreate?: ClassifiedCreateOrConnectWithoutCustomersInput | $Types.Skip
    connect?: ClassifiedWhereUniqueInput | $Types.Skip
  }

  export type CustomerLifecycleCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerLifecycleCreateWithoutCustomerInput, CustomerLifecycleUncheckedCreateWithoutCustomerInput> | CustomerLifecycleCreateWithoutCustomerInput[] | CustomerLifecycleUncheckedCreateWithoutCustomerInput[] | $Types.Skip
    connectOrCreate?: CustomerLifecycleCreateOrConnectWithoutCustomerInput | CustomerLifecycleCreateOrConnectWithoutCustomerInput[] | $Types.Skip
    createMany?: CustomerLifecycleCreateManyCustomerInputEnvelope | $Types.Skip
    connect?: CustomerLifecycleWhereUniqueInput | CustomerLifecycleWhereUniqueInput[] | $Types.Skip
  }

  export type CustomerLifecycleUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerLifecycleCreateWithoutCustomerInput, CustomerLifecycleUncheckedCreateWithoutCustomerInput> | CustomerLifecycleCreateWithoutCustomerInput[] | CustomerLifecycleUncheckedCreateWithoutCustomerInput[] | $Types.Skip
    connectOrCreate?: CustomerLifecycleCreateOrConnectWithoutCustomerInput | CustomerLifecycleCreateOrConnectWithoutCustomerInput[] | $Types.Skip
    createMany?: CustomerLifecycleCreateManyCustomerInputEnvelope | $Types.Skip
    connect?: CustomerLifecycleWhereUniqueInput | CustomerLifecycleWhereUniqueInput[] | $Types.Skip
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null | $Types.Skip
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean | $Types.Skip
  }

  export type EnumCustomerStatusFieldUpdateOperationsInput = {
    set?: $Enums.CustomerStatus | $Types.Skip
  }

  export type ClassifiedUpdateOneWithoutCustomersNestedInput = {
    create?: XOR<ClassifiedCreateWithoutCustomersInput, ClassifiedUncheckedCreateWithoutCustomersInput> | $Types.Skip
    connectOrCreate?: ClassifiedCreateOrConnectWithoutCustomersInput | $Types.Skip
    upsert?: ClassifiedUpsertWithoutCustomersInput | $Types.Skip
    disconnect?: ClassifiedWhereInput | boolean | $Types.Skip
    delete?: ClassifiedWhereInput | boolean | $Types.Skip
    connect?: ClassifiedWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<ClassifiedUpdateToOneWithWhereWithoutCustomersInput, ClassifiedUpdateWithoutCustomersInput>, ClassifiedUncheckedUpdateWithoutCustomersInput> | $Types.Skip
  }

  export type CustomerLifecycleUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerLifecycleCreateWithoutCustomerInput, CustomerLifecycleUncheckedCreateWithoutCustomerInput> | CustomerLifecycleCreateWithoutCustomerInput[] | CustomerLifecycleUncheckedCreateWithoutCustomerInput[] | $Types.Skip
    connectOrCreate?: CustomerLifecycleCreateOrConnectWithoutCustomerInput | CustomerLifecycleCreateOrConnectWithoutCustomerInput[] | $Types.Skip
    upsert?: CustomerLifecycleUpsertWithWhereUniqueWithoutCustomerInput | CustomerLifecycleUpsertWithWhereUniqueWithoutCustomerInput[] | $Types.Skip
    createMany?: CustomerLifecycleCreateManyCustomerInputEnvelope | $Types.Skip
    set?: CustomerLifecycleWhereUniqueInput | CustomerLifecycleWhereUniqueInput[] | $Types.Skip
    disconnect?: CustomerLifecycleWhereUniqueInput | CustomerLifecycleWhereUniqueInput[] | $Types.Skip
    delete?: CustomerLifecycleWhereUniqueInput | CustomerLifecycleWhereUniqueInput[] | $Types.Skip
    connect?: CustomerLifecycleWhereUniqueInput | CustomerLifecycleWhereUniqueInput[] | $Types.Skip
    update?: CustomerLifecycleUpdateWithWhereUniqueWithoutCustomerInput | CustomerLifecycleUpdateWithWhereUniqueWithoutCustomerInput[] | $Types.Skip
    updateMany?: CustomerLifecycleUpdateManyWithWhereWithoutCustomerInput | CustomerLifecycleUpdateManyWithWhereWithoutCustomerInput[] | $Types.Skip
    deleteMany?: CustomerLifecycleScalarWhereInput | CustomerLifecycleScalarWhereInput[] | $Types.Skip
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null | $Types.Skip
    increment?: number | $Types.Skip
    decrement?: number | $Types.Skip
    multiply?: number | $Types.Skip
    divide?: number | $Types.Skip
  }

  export type CustomerLifecycleUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerLifecycleCreateWithoutCustomerInput, CustomerLifecycleUncheckedCreateWithoutCustomerInput> | CustomerLifecycleCreateWithoutCustomerInput[] | CustomerLifecycleUncheckedCreateWithoutCustomerInput[] | $Types.Skip
    connectOrCreate?: CustomerLifecycleCreateOrConnectWithoutCustomerInput | CustomerLifecycleCreateOrConnectWithoutCustomerInput[] | $Types.Skip
    upsert?: CustomerLifecycleUpsertWithWhereUniqueWithoutCustomerInput | CustomerLifecycleUpsertWithWhereUniqueWithoutCustomerInput[] | $Types.Skip
    createMany?: CustomerLifecycleCreateManyCustomerInputEnvelope | $Types.Skip
    set?: CustomerLifecycleWhereUniqueInput | CustomerLifecycleWhereUniqueInput[] | $Types.Skip
    disconnect?: CustomerLifecycleWhereUniqueInput | CustomerLifecycleWhereUniqueInput[] | $Types.Skip
    delete?: CustomerLifecycleWhereUniqueInput | CustomerLifecycleWhereUniqueInput[] | $Types.Skip
    connect?: CustomerLifecycleWhereUniqueInput | CustomerLifecycleWhereUniqueInput[] | $Types.Skip
    update?: CustomerLifecycleUpdateWithWhereUniqueWithoutCustomerInput | CustomerLifecycleUpdateWithWhereUniqueWithoutCustomerInput[] | $Types.Skip
    updateMany?: CustomerLifecycleUpdateManyWithWhereWithoutCustomerInput | CustomerLifecycleUpdateManyWithWhereWithoutCustomerInput[] | $Types.Skip
    deleteMany?: CustomerLifecycleScalarWhereInput | CustomerLifecycleScalarWhereInput[] | $Types.Skip
  }

  export type CustomerCreateNestedOneWithoutLifecycleInput = {
    create?: XOR<CustomerCreateWithoutLifecycleInput, CustomerUncheckedCreateWithoutLifecycleInput> | $Types.Skip
    connectOrCreate?: CustomerCreateOrConnectWithoutLifecycleInput | $Types.Skip
    connect?: CustomerWhereUniqueInput | $Types.Skip
  }

  export type CustomerUpdateOneRequiredWithoutLifecycleNestedInput = {
    create?: XOR<CustomerCreateWithoutLifecycleInput, CustomerUncheckedCreateWithoutLifecycleInput> | $Types.Skip
    connectOrCreate?: CustomerCreateOrConnectWithoutLifecycleInput | $Types.Skip
    upsert?: CustomerUpsertWithoutLifecycleInput | $Types.Skip
    connect?: CustomerWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutLifecycleInput, CustomerUpdateWithoutLifecycleInput>, CustomerUncheckedUpdateWithoutLifecycleInput> | $Types.Skip
  }

  export type ClassifiedCreateNestedOneWithoutImagesInput = {
    create?: XOR<ClassifiedCreateWithoutImagesInput, ClassifiedUncheckedCreateWithoutImagesInput> | $Types.Skip
    connectOrCreate?: ClassifiedCreateOrConnectWithoutImagesInput | $Types.Skip
    connect?: ClassifiedWhereUniqueInput | $Types.Skip
  }

  export type ClassifiedUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ClassifiedCreateWithoutImagesInput, ClassifiedUncheckedCreateWithoutImagesInput> | $Types.Skip
    connectOrCreate?: ClassifiedCreateOrConnectWithoutImagesInput | $Types.Skip
    upsert?: ClassifiedUpsertWithoutImagesInput | $Types.Skip
    connect?: ClassifiedWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<ClassifiedUpdateToOneWithWhereWithoutImagesInput, ClassifiedUpdateWithoutImagesInput>, ClassifiedUncheckedUpdateWithoutImagesInput> | $Types.Skip
  }

  export type UserCreateNestedOneWithoutSessionInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
  }

  export type UserUpdateOneRequiredWithoutSessionNestedInput = {
    create?: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput> | $Types.Skip
    connectOrCreate?: UserCreateOrConnectWithoutSessionInput | $Types.Skip
    upsert?: UserUpsertWithoutSessionInput | $Types.Skip
    connect?: UserWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionInput, UserUpdateWithoutSessionInput>, UserUncheckedUpdateWithoutSessionInput> | $Types.Skip
  }

  export type ModelCreateNestedManyWithoutMakeInput = {
    create?: XOR<ModelCreateWithoutMakeInput, ModelUncheckedCreateWithoutMakeInput> | ModelCreateWithoutMakeInput[] | ModelUncheckedCreateWithoutMakeInput[] | $Types.Skip
    connectOrCreate?: ModelCreateOrConnectWithoutMakeInput | ModelCreateOrConnectWithoutMakeInput[] | $Types.Skip
    createMany?: ModelCreateManyMakeInputEnvelope | $Types.Skip
    connect?: ModelWhereUniqueInput | ModelWhereUniqueInput[] | $Types.Skip
  }

  export type ClassifiedCreateNestedManyWithoutMakeInput = {
    create?: XOR<ClassifiedCreateWithoutMakeInput, ClassifiedUncheckedCreateWithoutMakeInput> | ClassifiedCreateWithoutMakeInput[] | ClassifiedUncheckedCreateWithoutMakeInput[] | $Types.Skip
    connectOrCreate?: ClassifiedCreateOrConnectWithoutMakeInput | ClassifiedCreateOrConnectWithoutMakeInput[] | $Types.Skip
    createMany?: ClassifiedCreateManyMakeInputEnvelope | $Types.Skip
    connect?: ClassifiedWhereUniqueInput | ClassifiedWhereUniqueInput[] | $Types.Skip
  }

  export type ModelUncheckedCreateNestedManyWithoutMakeInput = {
    create?: XOR<ModelCreateWithoutMakeInput, ModelUncheckedCreateWithoutMakeInput> | ModelCreateWithoutMakeInput[] | ModelUncheckedCreateWithoutMakeInput[] | $Types.Skip
    connectOrCreate?: ModelCreateOrConnectWithoutMakeInput | ModelCreateOrConnectWithoutMakeInput[] | $Types.Skip
    createMany?: ModelCreateManyMakeInputEnvelope | $Types.Skip
    connect?: ModelWhereUniqueInput | ModelWhereUniqueInput[] | $Types.Skip
  }

  export type ClassifiedUncheckedCreateNestedManyWithoutMakeInput = {
    create?: XOR<ClassifiedCreateWithoutMakeInput, ClassifiedUncheckedCreateWithoutMakeInput> | ClassifiedCreateWithoutMakeInput[] | ClassifiedUncheckedCreateWithoutMakeInput[] | $Types.Skip
    connectOrCreate?: ClassifiedCreateOrConnectWithoutMakeInput | ClassifiedCreateOrConnectWithoutMakeInput[] | $Types.Skip
    createMany?: ClassifiedCreateManyMakeInputEnvelope | $Types.Skip
    connect?: ClassifiedWhereUniqueInput | ClassifiedWhereUniqueInput[] | $Types.Skip
  }

  export type ModelUpdateManyWithoutMakeNestedInput = {
    create?: XOR<ModelCreateWithoutMakeInput, ModelUncheckedCreateWithoutMakeInput> | ModelCreateWithoutMakeInput[] | ModelUncheckedCreateWithoutMakeInput[] | $Types.Skip
    connectOrCreate?: ModelCreateOrConnectWithoutMakeInput | ModelCreateOrConnectWithoutMakeInput[] | $Types.Skip
    upsert?: ModelUpsertWithWhereUniqueWithoutMakeInput | ModelUpsertWithWhereUniqueWithoutMakeInput[] | $Types.Skip
    createMany?: ModelCreateManyMakeInputEnvelope | $Types.Skip
    set?: ModelWhereUniqueInput | ModelWhereUniqueInput[] | $Types.Skip
    disconnect?: ModelWhereUniqueInput | ModelWhereUniqueInput[] | $Types.Skip
    delete?: ModelWhereUniqueInput | ModelWhereUniqueInput[] | $Types.Skip
    connect?: ModelWhereUniqueInput | ModelWhereUniqueInput[] | $Types.Skip
    update?: ModelUpdateWithWhereUniqueWithoutMakeInput | ModelUpdateWithWhereUniqueWithoutMakeInput[] | $Types.Skip
    updateMany?: ModelUpdateManyWithWhereWithoutMakeInput | ModelUpdateManyWithWhereWithoutMakeInput[] | $Types.Skip
    deleteMany?: ModelScalarWhereInput | ModelScalarWhereInput[] | $Types.Skip
  }

  export type ClassifiedUpdateManyWithoutMakeNestedInput = {
    create?: XOR<ClassifiedCreateWithoutMakeInput, ClassifiedUncheckedCreateWithoutMakeInput> | ClassifiedCreateWithoutMakeInput[] | ClassifiedUncheckedCreateWithoutMakeInput[] | $Types.Skip
    connectOrCreate?: ClassifiedCreateOrConnectWithoutMakeInput | ClassifiedCreateOrConnectWithoutMakeInput[] | $Types.Skip
    upsert?: ClassifiedUpsertWithWhereUniqueWithoutMakeInput | ClassifiedUpsertWithWhereUniqueWithoutMakeInput[] | $Types.Skip
    createMany?: ClassifiedCreateManyMakeInputEnvelope | $Types.Skip
    set?: ClassifiedWhereUniqueInput | ClassifiedWhereUniqueInput[] | $Types.Skip
    disconnect?: ClassifiedWhereUniqueInput | ClassifiedWhereUniqueInput[] | $Types.Skip
    delete?: ClassifiedWhereUniqueInput | ClassifiedWhereUniqueInput[] | $Types.Skip
    connect?: ClassifiedWhereUniqueInput | ClassifiedWhereUniqueInput[] | $Types.Skip
    update?: ClassifiedUpdateWithWhereUniqueWithoutMakeInput | ClassifiedUpdateWithWhereUniqueWithoutMakeInput[] | $Types.Skip
    updateMany?: ClassifiedUpdateManyWithWhereWithoutMakeInput | ClassifiedUpdateManyWithWhereWithoutMakeInput[] | $Types.Skip
    deleteMany?: ClassifiedScalarWhereInput | ClassifiedScalarWhereInput[] | $Types.Skip
  }

  export type ModelUncheckedUpdateManyWithoutMakeNestedInput = {
    create?: XOR<ModelCreateWithoutMakeInput, ModelUncheckedCreateWithoutMakeInput> | ModelCreateWithoutMakeInput[] | ModelUncheckedCreateWithoutMakeInput[] | $Types.Skip
    connectOrCreate?: ModelCreateOrConnectWithoutMakeInput | ModelCreateOrConnectWithoutMakeInput[] | $Types.Skip
    upsert?: ModelUpsertWithWhereUniqueWithoutMakeInput | ModelUpsertWithWhereUniqueWithoutMakeInput[] | $Types.Skip
    createMany?: ModelCreateManyMakeInputEnvelope | $Types.Skip
    set?: ModelWhereUniqueInput | ModelWhereUniqueInput[] | $Types.Skip
    disconnect?: ModelWhereUniqueInput | ModelWhereUniqueInput[] | $Types.Skip
    delete?: ModelWhereUniqueInput | ModelWhereUniqueInput[] | $Types.Skip
    connect?: ModelWhereUniqueInput | ModelWhereUniqueInput[] | $Types.Skip
    update?: ModelUpdateWithWhereUniqueWithoutMakeInput | ModelUpdateWithWhereUniqueWithoutMakeInput[] | $Types.Skip
    updateMany?: ModelUpdateManyWithWhereWithoutMakeInput | ModelUpdateManyWithWhereWithoutMakeInput[] | $Types.Skip
    deleteMany?: ModelScalarWhereInput | ModelScalarWhereInput[] | $Types.Skip
  }

  export type ClassifiedUncheckedUpdateManyWithoutMakeNestedInput = {
    create?: XOR<ClassifiedCreateWithoutMakeInput, ClassifiedUncheckedCreateWithoutMakeInput> | ClassifiedCreateWithoutMakeInput[] | ClassifiedUncheckedCreateWithoutMakeInput[] | $Types.Skip
    connectOrCreate?: ClassifiedCreateOrConnectWithoutMakeInput | ClassifiedCreateOrConnectWithoutMakeInput[] | $Types.Skip
    upsert?: ClassifiedUpsertWithWhereUniqueWithoutMakeInput | ClassifiedUpsertWithWhereUniqueWithoutMakeInput[] | $Types.Skip
    createMany?: ClassifiedCreateManyMakeInputEnvelope | $Types.Skip
    set?: ClassifiedWhereUniqueInput | ClassifiedWhereUniqueInput[] | $Types.Skip
    disconnect?: ClassifiedWhereUniqueInput | ClassifiedWhereUniqueInput[] | $Types.Skip
    delete?: ClassifiedWhereUniqueInput | ClassifiedWhereUniqueInput[] | $Types.Skip
    connect?: ClassifiedWhereUniqueInput | ClassifiedWhereUniqueInput[] | $Types.Skip
    update?: ClassifiedUpdateWithWhereUniqueWithoutMakeInput | ClassifiedUpdateWithWhereUniqueWithoutMakeInput[] | $Types.Skip
    updateMany?: ClassifiedUpdateManyWithWhereWithoutMakeInput | ClassifiedUpdateManyWithWhereWithoutMakeInput[] | $Types.Skip
    deleteMany?: ClassifiedScalarWhereInput | ClassifiedScalarWhereInput[] | $Types.Skip
  }

  export type MakeCreateNestedOneWithoutModelsInput = {
    create?: XOR<MakeCreateWithoutModelsInput, MakeUncheckedCreateWithoutModelsInput> | $Types.Skip
    connectOrCreate?: MakeCreateOrConnectWithoutModelsInput | $Types.Skip
    connect?: MakeWhereUniqueInput | $Types.Skip
  }

  export type ModelVariantCreateNestedManyWithoutModelInput = {
    create?: XOR<ModelVariantCreateWithoutModelInput, ModelVariantUncheckedCreateWithoutModelInput> | ModelVariantCreateWithoutModelInput[] | ModelVariantUncheckedCreateWithoutModelInput[] | $Types.Skip
    connectOrCreate?: ModelVariantCreateOrConnectWithoutModelInput | ModelVariantCreateOrConnectWithoutModelInput[] | $Types.Skip
    createMany?: ModelVariantCreateManyModelInputEnvelope | $Types.Skip
    connect?: ModelVariantWhereUniqueInput | ModelVariantWhereUniqueInput[] | $Types.Skip
  }

  export type ClassifiedCreateNestedManyWithoutModelInput = {
    create?: XOR<ClassifiedCreateWithoutModelInput, ClassifiedUncheckedCreateWithoutModelInput> | ClassifiedCreateWithoutModelInput[] | ClassifiedUncheckedCreateWithoutModelInput[] | $Types.Skip
    connectOrCreate?: ClassifiedCreateOrConnectWithoutModelInput | ClassifiedCreateOrConnectWithoutModelInput[] | $Types.Skip
    createMany?: ClassifiedCreateManyModelInputEnvelope | $Types.Skip
    connect?: ClassifiedWhereUniqueInput | ClassifiedWhereUniqueInput[] | $Types.Skip
  }

  export type ModelVariantUncheckedCreateNestedManyWithoutModelInput = {
    create?: XOR<ModelVariantCreateWithoutModelInput, ModelVariantUncheckedCreateWithoutModelInput> | ModelVariantCreateWithoutModelInput[] | ModelVariantUncheckedCreateWithoutModelInput[] | $Types.Skip
    connectOrCreate?: ModelVariantCreateOrConnectWithoutModelInput | ModelVariantCreateOrConnectWithoutModelInput[] | $Types.Skip
    createMany?: ModelVariantCreateManyModelInputEnvelope | $Types.Skip
    connect?: ModelVariantWhereUniqueInput | ModelVariantWhereUniqueInput[] | $Types.Skip
  }

  export type ClassifiedUncheckedCreateNestedManyWithoutModelInput = {
    create?: XOR<ClassifiedCreateWithoutModelInput, ClassifiedUncheckedCreateWithoutModelInput> | ClassifiedCreateWithoutModelInput[] | ClassifiedUncheckedCreateWithoutModelInput[] | $Types.Skip
    connectOrCreate?: ClassifiedCreateOrConnectWithoutModelInput | ClassifiedCreateOrConnectWithoutModelInput[] | $Types.Skip
    createMany?: ClassifiedCreateManyModelInputEnvelope | $Types.Skip
    connect?: ClassifiedWhereUniqueInput | ClassifiedWhereUniqueInput[] | $Types.Skip
  }

  export type MakeUpdateOneRequiredWithoutModelsNestedInput = {
    create?: XOR<MakeCreateWithoutModelsInput, MakeUncheckedCreateWithoutModelsInput> | $Types.Skip
    connectOrCreate?: MakeCreateOrConnectWithoutModelsInput | $Types.Skip
    upsert?: MakeUpsertWithoutModelsInput | $Types.Skip
    connect?: MakeWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<MakeUpdateToOneWithWhereWithoutModelsInput, MakeUpdateWithoutModelsInput>, MakeUncheckedUpdateWithoutModelsInput> | $Types.Skip
  }

  export type ModelVariantUpdateManyWithoutModelNestedInput = {
    create?: XOR<ModelVariantCreateWithoutModelInput, ModelVariantUncheckedCreateWithoutModelInput> | ModelVariantCreateWithoutModelInput[] | ModelVariantUncheckedCreateWithoutModelInput[] | $Types.Skip
    connectOrCreate?: ModelVariantCreateOrConnectWithoutModelInput | ModelVariantCreateOrConnectWithoutModelInput[] | $Types.Skip
    upsert?: ModelVariantUpsertWithWhereUniqueWithoutModelInput | ModelVariantUpsertWithWhereUniqueWithoutModelInput[] | $Types.Skip
    createMany?: ModelVariantCreateManyModelInputEnvelope | $Types.Skip
    set?: ModelVariantWhereUniqueInput | ModelVariantWhereUniqueInput[] | $Types.Skip
    disconnect?: ModelVariantWhereUniqueInput | ModelVariantWhereUniqueInput[] | $Types.Skip
    delete?: ModelVariantWhereUniqueInput | ModelVariantWhereUniqueInput[] | $Types.Skip
    connect?: ModelVariantWhereUniqueInput | ModelVariantWhereUniqueInput[] | $Types.Skip
    update?: ModelVariantUpdateWithWhereUniqueWithoutModelInput | ModelVariantUpdateWithWhereUniqueWithoutModelInput[] | $Types.Skip
    updateMany?: ModelVariantUpdateManyWithWhereWithoutModelInput | ModelVariantUpdateManyWithWhereWithoutModelInput[] | $Types.Skip
    deleteMany?: ModelVariantScalarWhereInput | ModelVariantScalarWhereInput[] | $Types.Skip
  }

  export type ClassifiedUpdateManyWithoutModelNestedInput = {
    create?: XOR<ClassifiedCreateWithoutModelInput, ClassifiedUncheckedCreateWithoutModelInput> | ClassifiedCreateWithoutModelInput[] | ClassifiedUncheckedCreateWithoutModelInput[] | $Types.Skip
    connectOrCreate?: ClassifiedCreateOrConnectWithoutModelInput | ClassifiedCreateOrConnectWithoutModelInput[] | $Types.Skip
    upsert?: ClassifiedUpsertWithWhereUniqueWithoutModelInput | ClassifiedUpsertWithWhereUniqueWithoutModelInput[] | $Types.Skip
    createMany?: ClassifiedCreateManyModelInputEnvelope | $Types.Skip
    set?: ClassifiedWhereUniqueInput | ClassifiedWhereUniqueInput[] | $Types.Skip
    disconnect?: ClassifiedWhereUniqueInput | ClassifiedWhereUniqueInput[] | $Types.Skip
    delete?: ClassifiedWhereUniqueInput | ClassifiedWhereUniqueInput[] | $Types.Skip
    connect?: ClassifiedWhereUniqueInput | ClassifiedWhereUniqueInput[] | $Types.Skip
    update?: ClassifiedUpdateWithWhereUniqueWithoutModelInput | ClassifiedUpdateWithWhereUniqueWithoutModelInput[] | $Types.Skip
    updateMany?: ClassifiedUpdateManyWithWhereWithoutModelInput | ClassifiedUpdateManyWithWhereWithoutModelInput[] | $Types.Skip
    deleteMany?: ClassifiedScalarWhereInput | ClassifiedScalarWhereInput[] | $Types.Skip
  }

  export type ModelVariantUncheckedUpdateManyWithoutModelNestedInput = {
    create?: XOR<ModelVariantCreateWithoutModelInput, ModelVariantUncheckedCreateWithoutModelInput> | ModelVariantCreateWithoutModelInput[] | ModelVariantUncheckedCreateWithoutModelInput[] | $Types.Skip
    connectOrCreate?: ModelVariantCreateOrConnectWithoutModelInput | ModelVariantCreateOrConnectWithoutModelInput[] | $Types.Skip
    upsert?: ModelVariantUpsertWithWhereUniqueWithoutModelInput | ModelVariantUpsertWithWhereUniqueWithoutModelInput[] | $Types.Skip
    createMany?: ModelVariantCreateManyModelInputEnvelope | $Types.Skip
    set?: ModelVariantWhereUniqueInput | ModelVariantWhereUniqueInput[] | $Types.Skip
    disconnect?: ModelVariantWhereUniqueInput | ModelVariantWhereUniqueInput[] | $Types.Skip
    delete?: ModelVariantWhereUniqueInput | ModelVariantWhereUniqueInput[] | $Types.Skip
    connect?: ModelVariantWhereUniqueInput | ModelVariantWhereUniqueInput[] | $Types.Skip
    update?: ModelVariantUpdateWithWhereUniqueWithoutModelInput | ModelVariantUpdateWithWhereUniqueWithoutModelInput[] | $Types.Skip
    updateMany?: ModelVariantUpdateManyWithWhereWithoutModelInput | ModelVariantUpdateManyWithWhereWithoutModelInput[] | $Types.Skip
    deleteMany?: ModelVariantScalarWhereInput | ModelVariantScalarWhereInput[] | $Types.Skip
  }

  export type ClassifiedUncheckedUpdateManyWithoutModelNestedInput = {
    create?: XOR<ClassifiedCreateWithoutModelInput, ClassifiedUncheckedCreateWithoutModelInput> | ClassifiedCreateWithoutModelInput[] | ClassifiedUncheckedCreateWithoutModelInput[] | $Types.Skip
    connectOrCreate?: ClassifiedCreateOrConnectWithoutModelInput | ClassifiedCreateOrConnectWithoutModelInput[] | $Types.Skip
    upsert?: ClassifiedUpsertWithWhereUniqueWithoutModelInput | ClassifiedUpsertWithWhereUniqueWithoutModelInput[] | $Types.Skip
    createMany?: ClassifiedCreateManyModelInputEnvelope | $Types.Skip
    set?: ClassifiedWhereUniqueInput | ClassifiedWhereUniqueInput[] | $Types.Skip
    disconnect?: ClassifiedWhereUniqueInput | ClassifiedWhereUniqueInput[] | $Types.Skip
    delete?: ClassifiedWhereUniqueInput | ClassifiedWhereUniqueInput[] | $Types.Skip
    connect?: ClassifiedWhereUniqueInput | ClassifiedWhereUniqueInput[] | $Types.Skip
    update?: ClassifiedUpdateWithWhereUniqueWithoutModelInput | ClassifiedUpdateWithWhereUniqueWithoutModelInput[] | $Types.Skip
    updateMany?: ClassifiedUpdateManyWithWhereWithoutModelInput | ClassifiedUpdateManyWithWhereWithoutModelInput[] | $Types.Skip
    deleteMany?: ClassifiedScalarWhereInput | ClassifiedScalarWhereInput[] | $Types.Skip
  }

  export type ModelCreateNestedOneWithoutModelVariantsInput = {
    create?: XOR<ModelCreateWithoutModelVariantsInput, ModelUncheckedCreateWithoutModelVariantsInput> | $Types.Skip
    connectOrCreate?: ModelCreateOrConnectWithoutModelVariantsInput | $Types.Skip
    connect?: ModelWhereUniqueInput | $Types.Skip
  }

  export type ClassifiedCreateNestedManyWithoutModelVariantInput = {
    create?: XOR<ClassifiedCreateWithoutModelVariantInput, ClassifiedUncheckedCreateWithoutModelVariantInput> | ClassifiedCreateWithoutModelVariantInput[] | ClassifiedUncheckedCreateWithoutModelVariantInput[] | $Types.Skip
    connectOrCreate?: ClassifiedCreateOrConnectWithoutModelVariantInput | ClassifiedCreateOrConnectWithoutModelVariantInput[] | $Types.Skip
    createMany?: ClassifiedCreateManyModelVariantInputEnvelope | $Types.Skip
    connect?: ClassifiedWhereUniqueInput | ClassifiedWhereUniqueInput[] | $Types.Skip
  }

  export type ClassifiedUncheckedCreateNestedManyWithoutModelVariantInput = {
    create?: XOR<ClassifiedCreateWithoutModelVariantInput, ClassifiedUncheckedCreateWithoutModelVariantInput> | ClassifiedCreateWithoutModelVariantInput[] | ClassifiedUncheckedCreateWithoutModelVariantInput[] | $Types.Skip
    connectOrCreate?: ClassifiedCreateOrConnectWithoutModelVariantInput | ClassifiedCreateOrConnectWithoutModelVariantInput[] | $Types.Skip
    createMany?: ClassifiedCreateManyModelVariantInputEnvelope | $Types.Skip
    connect?: ClassifiedWhereUniqueInput | ClassifiedWhereUniqueInput[] | $Types.Skip
  }

  export type ModelUpdateOneRequiredWithoutModelVariantsNestedInput = {
    create?: XOR<ModelCreateWithoutModelVariantsInput, ModelUncheckedCreateWithoutModelVariantsInput> | $Types.Skip
    connectOrCreate?: ModelCreateOrConnectWithoutModelVariantsInput | $Types.Skip
    upsert?: ModelUpsertWithoutModelVariantsInput | $Types.Skip
    connect?: ModelWhereUniqueInput | $Types.Skip
    update?: XOR<XOR<ModelUpdateToOneWithWhereWithoutModelVariantsInput, ModelUpdateWithoutModelVariantsInput>, ModelUncheckedUpdateWithoutModelVariantsInput> | $Types.Skip
  }

  export type ClassifiedUpdateManyWithoutModelVariantNestedInput = {
    create?: XOR<ClassifiedCreateWithoutModelVariantInput, ClassifiedUncheckedCreateWithoutModelVariantInput> | ClassifiedCreateWithoutModelVariantInput[] | ClassifiedUncheckedCreateWithoutModelVariantInput[] | $Types.Skip
    connectOrCreate?: ClassifiedCreateOrConnectWithoutModelVariantInput | ClassifiedCreateOrConnectWithoutModelVariantInput[] | $Types.Skip
    upsert?: ClassifiedUpsertWithWhereUniqueWithoutModelVariantInput | ClassifiedUpsertWithWhereUniqueWithoutModelVariantInput[] | $Types.Skip
    createMany?: ClassifiedCreateManyModelVariantInputEnvelope | $Types.Skip
    set?: ClassifiedWhereUniqueInput | ClassifiedWhereUniqueInput[] | $Types.Skip
    disconnect?: ClassifiedWhereUniqueInput | ClassifiedWhereUniqueInput[] | $Types.Skip
    delete?: ClassifiedWhereUniqueInput | ClassifiedWhereUniqueInput[] | $Types.Skip
    connect?: ClassifiedWhereUniqueInput | ClassifiedWhereUniqueInput[] | $Types.Skip
    update?: ClassifiedUpdateWithWhereUniqueWithoutModelVariantInput | ClassifiedUpdateWithWhereUniqueWithoutModelVariantInput[] | $Types.Skip
    updateMany?: ClassifiedUpdateManyWithWhereWithoutModelVariantInput | ClassifiedUpdateManyWithWhereWithoutModelVariantInput[] | $Types.Skip
    deleteMany?: ClassifiedScalarWhereInput | ClassifiedScalarWhereInput[] | $Types.Skip
  }

  export type ClassifiedUncheckedUpdateManyWithoutModelVariantNestedInput = {
    create?: XOR<ClassifiedCreateWithoutModelVariantInput, ClassifiedUncheckedCreateWithoutModelVariantInput> | ClassifiedCreateWithoutModelVariantInput[] | ClassifiedUncheckedCreateWithoutModelVariantInput[] | $Types.Skip
    connectOrCreate?: ClassifiedCreateOrConnectWithoutModelVariantInput | ClassifiedCreateOrConnectWithoutModelVariantInput[] | $Types.Skip
    upsert?: ClassifiedUpsertWithWhereUniqueWithoutModelVariantInput | ClassifiedUpsertWithWhereUniqueWithoutModelVariantInput[] | $Types.Skip
    createMany?: ClassifiedCreateManyModelVariantInputEnvelope | $Types.Skip
    set?: ClassifiedWhereUniqueInput | ClassifiedWhereUniqueInput[] | $Types.Skip
    disconnect?: ClassifiedWhereUniqueInput | ClassifiedWhereUniqueInput[] | $Types.Skip
    delete?: ClassifiedWhereUniqueInput | ClassifiedWhereUniqueInput[] | $Types.Skip
    connect?: ClassifiedWhereUniqueInput | ClassifiedWhereUniqueInput[] | $Types.Skip
    update?: ClassifiedUpdateWithWhereUniqueWithoutModelVariantInput | ClassifiedUpdateWithWhereUniqueWithoutModelVariantInput[] | $Types.Skip
    updateMany?: ClassifiedUpdateManyWithWhereWithoutModelVariantInput | ClassifiedUpdateManyWithWhereWithoutModelVariantInput[] | $Types.Skip
    deleteMany?: ClassifiedScalarWhereInput | ClassifiedScalarWhereInput[] | $Types.Skip
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[] | $Types.Skip
    createMany?: SessionCreateManyUserInputEnvelope | $Types.Skip
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[] | $Types.Skip
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[] | $Types.Skip
    createMany?: SessionCreateManyUserInputEnvelope | $Types.Skip
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[] | $Types.Skip
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[] | $Types.Skip
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[] | $Types.Skip
    createMany?: SessionCreateManyUserInputEnvelope | $Types.Skip
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[] | $Types.Skip
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[] | $Types.Skip
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[] | $Types.Skip
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[] | $Types.Skip
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[] | $Types.Skip
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[] | $Types.Skip
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[] | $Types.Skip
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[] | $Types.Skip
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[] | $Types.Skip
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[] | $Types.Skip
    createMany?: SessionCreateManyUserInputEnvelope | $Types.Skip
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[] | $Types.Skip
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[] | $Types.Skip
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[] | $Types.Skip
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[] | $Types.Skip
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[] | $Types.Skip
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[] | $Types.Skip
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[] | $Types.Skip
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntFilter<$PrismaModel> | number | $Types.Skip
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringFilter<$PrismaModel> | string | $Types.Skip
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringNullableFilter<$PrismaModel> | string | null | $Types.Skip
  }

  export type NestedEnumELEZComplianceFilter<$PrismaModel = never> = {
    equals?: $Enums.ELEZCompliance | EnumELEZComplianceFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.ELEZCompliance[] | ListEnumELEZComplianceFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.ELEZCompliance[] | ListEnumELEZComplianceFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumELEZComplianceFilter<$PrismaModel> | $Enums.ELEZCompliance | $Types.Skip
  }

  export type NestedEnumTransmissionFilter<$PrismaModel = never> = {
    equals?: $Enums.Transmission | EnumTransmissionFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumTransmissionFilter<$PrismaModel> | $Enums.Transmission | $Types.Skip
  }

  export type NestedEnumColourFilter<$PrismaModel = never> = {
    equals?: $Enums.Colour | EnumColourFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.Colour[] | ListEnumColourFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.Colour[] | ListEnumColourFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumColourFilter<$PrismaModel> | $Enums.Colour | $Types.Skip
  }

  export type NestedEnumFuelTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FuelType | EnumFuelTypeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumFuelTypeFilter<$PrismaModel> | $Enums.FuelType | $Types.Skip
  }

  export type NestedEnumBodyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BodyType | EnumBodyTypeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.BodyType[] | ListEnumBodyTypeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.BodyType[] | ListEnumBodyTypeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumBodyTypeFilter<$PrismaModel> | $Enums.BodyType | $Types.Skip
  }

  export type NestedEnumOdoUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.OdoUnit | EnumOdoUnitFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.OdoUnit[] | ListEnumOdoUnitFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.OdoUnit[] | ListEnumOdoUnitFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumOdoUnitFilter<$PrismaModel> | $Enums.OdoUnit | $Types.Skip
  }

  export type NestedEnumCurrencyCodeFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencyCode | EnumCurrencyCodeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumCurrencyCodeFilter<$PrismaModel> | $Enums.CurrencyCode | $Types.Skip
  }

  export type NestedEnumClassifiedStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ClassifiedStatus | EnumClassifiedStatusFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.ClassifiedStatus[] | ListEnumClassifiedStatusFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.ClassifiedStatus[] | ListEnumClassifiedStatusFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumClassifiedStatusFilter<$PrismaModel> | $Enums.ClassifiedStatus | $Types.Skip
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string | $Types.Skip
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _avg?: NestedFloatFilter<$PrismaModel> | $Types.Skip
    _sum?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _max?: NestedIntFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedFloatFilter<$PrismaModel> | number | $Types.Skip
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    contains?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    startsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    endsWith?: string | StringFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedStringNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedStringNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntNullableFilter<$PrismaModel> | number | null | $Types.Skip
  }

  export type NestedEnumELEZComplianceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ELEZCompliance | EnumELEZComplianceFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.ELEZCompliance[] | ListEnumELEZComplianceFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.ELEZCompliance[] | ListEnumELEZComplianceFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumELEZComplianceWithAggregatesFilter<$PrismaModel> | $Enums.ELEZCompliance | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumELEZComplianceFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumELEZComplianceFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedEnumTransmissionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Transmission | EnumTransmissionFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.Transmission[] | ListEnumTransmissionFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumTransmissionWithAggregatesFilter<$PrismaModel> | $Enums.Transmission | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumTransmissionFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumTransmissionFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedEnumColourWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Colour | EnumColourFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.Colour[] | ListEnumColourFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.Colour[] | ListEnumColourFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumColourWithAggregatesFilter<$PrismaModel> | $Enums.Colour | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumColourFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumColourFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedEnumFuelTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FuelType | EnumFuelTypeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.FuelType[] | ListEnumFuelTypeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumFuelTypeWithAggregatesFilter<$PrismaModel> | $Enums.FuelType | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumFuelTypeFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumFuelTypeFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedEnumBodyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BodyType | EnumBodyTypeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.BodyType[] | ListEnumBodyTypeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.BodyType[] | ListEnumBodyTypeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumBodyTypeWithAggregatesFilter<$PrismaModel> | $Enums.BodyType | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumBodyTypeFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumBodyTypeFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedEnumOdoUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OdoUnit | EnumOdoUnitFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.OdoUnit[] | ListEnumOdoUnitFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.OdoUnit[] | ListEnumOdoUnitFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumOdoUnitWithAggregatesFilter<$PrismaModel> | $Enums.OdoUnit | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumOdoUnitFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumOdoUnitFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedEnumCurrencyCodeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CurrencyCode | EnumCurrencyCodeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.CurrencyCode[] | ListEnumCurrencyCodeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumCurrencyCodeWithAggregatesFilter<$PrismaModel> | $Enums.CurrencyCode | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumCurrencyCodeFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumCurrencyCodeFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedEnumClassifiedStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ClassifiedStatus | EnumClassifiedStatusFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.ClassifiedStatus[] | ListEnumClassifiedStatusFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.ClassifiedStatus[] | ListEnumClassifiedStatusFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumClassifiedStatusWithAggregatesFilter<$PrismaModel> | $Enums.ClassifiedStatus | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumClassifiedStatusFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumClassifiedStatusFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedDateTimeFilter<$PrismaModel> | $Types.Skip
    _max?: NestedDateTimeFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null | $Types.Skip
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedBoolFilter<$PrismaModel> | boolean | $Types.Skip
  }

  export type NestedEnumCustomerStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerStatus | EnumCustomerStatusFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.CustomerStatus[] | ListEnumCustomerStatusFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.CustomerStatus[] | ListEnumCustomerStatusFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumCustomerStatusFilter<$PrismaModel> | $Enums.CustomerStatus | $Types.Skip
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedDateTimeNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedDateTimeNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedBoolFilter<$PrismaModel> | $Types.Skip
    _max?: NestedBoolFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedEnumCustomerStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CustomerStatus | EnumCustomerStatusFieldRefInput<$PrismaModel> | $Types.Skip
    in?: $Enums.CustomerStatus[] | ListEnumCustomerStatusFieldRefInput<$PrismaModel> | $Types.Skip
    notIn?: $Enums.CustomerStatus[] | ListEnumCustomerStatusFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedEnumCustomerStatusWithAggregatesFilter<$PrismaModel> | $Enums.CustomerStatus | $Types.Skip
    _count?: NestedIntFilter<$PrismaModel> | $Types.Skip
    _min?: NestedEnumCustomerStatusFilter<$PrismaModel> | $Types.Skip
    _max?: NestedEnumCustomerStatusFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | IntFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null | $Types.Skip
    _count?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _avg?: NestedFloatNullableFilter<$PrismaModel> | $Types.Skip
    _sum?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _min?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
    _max?: NestedIntNullableFilter<$PrismaModel> | $Types.Skip
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null | $Types.Skip
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null | $Types.Skip
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null | $Types.Skip
    lt?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    lte?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    gt?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    gte?: number | FloatFieldRefInput<$PrismaModel> | $Types.Skip
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null | $Types.Skip
  }

  export type MakeCreateWithoutClassifiedsInput = {
    name: string
    image: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    models?: ModelCreateNestedManyWithoutMakeInput | $Types.Skip
  }

  export type MakeUncheckedCreateWithoutClassifiedsInput = {
    id?: number | $Types.Skip
    name: string
    image: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    models?: ModelUncheckedCreateNestedManyWithoutMakeInput | $Types.Skip
  }

  export type MakeCreateOrConnectWithoutClassifiedsInput = {
    where: MakeWhereUniqueInput
    create: XOR<MakeCreateWithoutClassifiedsInput, MakeUncheckedCreateWithoutClassifiedsInput>
  }

  export type ModelCreateWithoutClassifiedsInput = {
    name: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    make: MakeCreateNestedOneWithoutModelsInput
    modelVariants?: ModelVariantCreateNestedManyWithoutModelInput | $Types.Skip
  }

  export type ModelUncheckedCreateWithoutClassifiedsInput = {
    id?: number | $Types.Skip
    name: string
    makeId: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    modelVariants?: ModelVariantUncheckedCreateNestedManyWithoutModelInput | $Types.Skip
  }

  export type ModelCreateOrConnectWithoutClassifiedsInput = {
    where: ModelWhereUniqueInput
    create: XOR<ModelCreateWithoutClassifiedsInput, ModelUncheckedCreateWithoutClassifiedsInput>
  }

  export type ModelVariantCreateWithoutClassifiedsInput = {
    name: string
    yearStart: number
    yearEnd: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    model: ModelCreateNestedOneWithoutModelVariantsInput
  }

  export type ModelVariantUncheckedCreateWithoutClassifiedsInput = {
    id?: number | $Types.Skip
    name: string
    modelId: number
    yearStart: number
    yearEnd: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type ModelVariantCreateOrConnectWithoutClassifiedsInput = {
    where: ModelVariantWhereUniqueInput
    create: XOR<ModelVariantCreateWithoutClassifiedsInput, ModelVariantUncheckedCreateWithoutClassifiedsInput>
  }

  export type ImageCreateWithoutClassifiedInput = {
    alt: string
    src: string
    blurhash: string
    isMain?: boolean | $Types.Skip
  }

  export type ImageUncheckedCreateWithoutClassifiedInput = {
    id?: number | $Types.Skip
    alt: string
    src: string
    blurhash: string
    isMain?: boolean | $Types.Skip
  }

  export type ImageCreateOrConnectWithoutClassifiedInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutClassifiedInput, ImageUncheckedCreateWithoutClassifiedInput>
  }

  export type ImageCreateManyClassifiedInputEnvelope = {
    data: ImageCreateManyClassifiedInput | ImageCreateManyClassifiedInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type CustomerCreateWithoutClassifiedInput = {
    firstName: string
    lastName: string
    email: string
    mobile?: string | null | $Types.Skip
    bookingDate?: Date | string | null | $Types.Skip
    termAccepted?: boolean | $Types.Skip
    status?: $Enums.CustomerStatus | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    lifecycle?: CustomerLifecycleCreateNestedManyWithoutCustomerInput | $Types.Skip
  }

  export type CustomerUncheckedCreateWithoutClassifiedInput = {
    id?: number | $Types.Skip
    firstName: string
    lastName: string
    email: string
    mobile?: string | null | $Types.Skip
    bookingDate?: Date | string | null | $Types.Skip
    termAccepted?: boolean | $Types.Skip
    status?: $Enums.CustomerStatus | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    lifecycle?: CustomerLifecycleUncheckedCreateNestedManyWithoutCustomerInput | $Types.Skip
  }

  export type CustomerCreateOrConnectWithoutClassifiedInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutClassifiedInput, CustomerUncheckedCreateWithoutClassifiedInput>
  }

  export type CustomerCreateManyClassifiedInputEnvelope = {
    data: CustomerCreateManyClassifiedInput | CustomerCreateManyClassifiedInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type MakeUpsertWithoutClassifiedsInput = {
    update: XOR<MakeUpdateWithoutClassifiedsInput, MakeUncheckedUpdateWithoutClassifiedsInput>
    create: XOR<MakeCreateWithoutClassifiedsInput, MakeUncheckedCreateWithoutClassifiedsInput>
    where?: MakeWhereInput | $Types.Skip
  }

  export type MakeUpdateToOneWithWhereWithoutClassifiedsInput = {
    where?: MakeWhereInput | $Types.Skip
    data: XOR<MakeUpdateWithoutClassifiedsInput, MakeUncheckedUpdateWithoutClassifiedsInput>
  }

  export type MakeUpdateWithoutClassifiedsInput = {
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    image?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    models?: ModelUpdateManyWithoutMakeNestedInput | $Types.Skip
  }

  export type MakeUncheckedUpdateWithoutClassifiedsInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    image?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    models?: ModelUncheckedUpdateManyWithoutMakeNestedInput | $Types.Skip
  }

  export type ModelUpsertWithoutClassifiedsInput = {
    update: XOR<ModelUpdateWithoutClassifiedsInput, ModelUncheckedUpdateWithoutClassifiedsInput>
    create: XOR<ModelCreateWithoutClassifiedsInput, ModelUncheckedCreateWithoutClassifiedsInput>
    where?: ModelWhereInput | $Types.Skip
  }

  export type ModelUpdateToOneWithWhereWithoutClassifiedsInput = {
    where?: ModelWhereInput | $Types.Skip
    data: XOR<ModelUpdateWithoutClassifiedsInput, ModelUncheckedUpdateWithoutClassifiedsInput>
  }

  export type ModelUpdateWithoutClassifiedsInput = {
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    make?: MakeUpdateOneRequiredWithoutModelsNestedInput | $Types.Skip
    modelVariants?: ModelVariantUpdateManyWithoutModelNestedInput | $Types.Skip
  }

  export type ModelUncheckedUpdateWithoutClassifiedsInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    makeId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    modelVariants?: ModelVariantUncheckedUpdateManyWithoutModelNestedInput | $Types.Skip
  }

  export type ModelVariantUpsertWithoutClassifiedsInput = {
    update: XOR<ModelVariantUpdateWithoutClassifiedsInput, ModelVariantUncheckedUpdateWithoutClassifiedsInput>
    create: XOR<ModelVariantCreateWithoutClassifiedsInput, ModelVariantUncheckedCreateWithoutClassifiedsInput>
    where?: ModelVariantWhereInput | $Types.Skip
  }

  export type ModelVariantUpdateToOneWithWhereWithoutClassifiedsInput = {
    where?: ModelVariantWhereInput | $Types.Skip
    data: XOR<ModelVariantUpdateWithoutClassifiedsInput, ModelVariantUncheckedUpdateWithoutClassifiedsInput>
  }

  export type ModelVariantUpdateWithoutClassifiedsInput = {
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    yearStart?: IntFieldUpdateOperationsInput | number | $Types.Skip
    yearEnd?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    model?: ModelUpdateOneRequiredWithoutModelVariantsNestedInput | $Types.Skip
  }

  export type ModelVariantUncheckedUpdateWithoutClassifiedsInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    modelId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    yearStart?: IntFieldUpdateOperationsInput | number | $Types.Skip
    yearEnd?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ImageUpsertWithWhereUniqueWithoutClassifiedInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutClassifiedInput, ImageUncheckedUpdateWithoutClassifiedInput>
    create: XOR<ImageCreateWithoutClassifiedInput, ImageUncheckedCreateWithoutClassifiedInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutClassifiedInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutClassifiedInput, ImageUncheckedUpdateWithoutClassifiedInput>
  }

  export type ImageUpdateManyWithWhereWithoutClassifiedInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutClassifiedInput>
  }

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[] | $Types.Skip
    OR?: ImageScalarWhereInput[] | $Types.Skip
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[] | $Types.Skip
    id?: IntFilter<"Image"> | number | $Types.Skip
    alt?: StringFilter<"Image"> | string | $Types.Skip
    src?: StringFilter<"Image"> | string | $Types.Skip
    classifiedId?: IntFilter<"Image"> | number | $Types.Skip
    blurhash?: StringFilter<"Image"> | string | $Types.Skip
    isMain?: BoolFilter<"Image"> | boolean | $Types.Skip
  }

  export type CustomerUpsertWithWhereUniqueWithoutClassifiedInput = {
    where: CustomerWhereUniqueInput
    update: XOR<CustomerUpdateWithoutClassifiedInput, CustomerUncheckedUpdateWithoutClassifiedInput>
    create: XOR<CustomerCreateWithoutClassifiedInput, CustomerUncheckedCreateWithoutClassifiedInput>
  }

  export type CustomerUpdateWithWhereUniqueWithoutClassifiedInput = {
    where: CustomerWhereUniqueInput
    data: XOR<CustomerUpdateWithoutClassifiedInput, CustomerUncheckedUpdateWithoutClassifiedInput>
  }

  export type CustomerUpdateManyWithWhereWithoutClassifiedInput = {
    where: CustomerScalarWhereInput
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyWithoutClassifiedInput>
  }

  export type CustomerScalarWhereInput = {
    AND?: CustomerScalarWhereInput | CustomerScalarWhereInput[] | $Types.Skip
    OR?: CustomerScalarWhereInput[] | $Types.Skip
    NOT?: CustomerScalarWhereInput | CustomerScalarWhereInput[] | $Types.Skip
    id?: IntFilter<"Customer"> | number | $Types.Skip
    firstName?: StringFilter<"Customer"> | string | $Types.Skip
    lastName?: StringFilter<"Customer"> | string | $Types.Skip
    email?: StringFilter<"Customer"> | string | $Types.Skip
    mobile?: StringNullableFilter<"Customer"> | string | null | $Types.Skip
    bookingDate?: DateTimeNullableFilter<"Customer"> | Date | string | null | $Types.Skip
    termAccepted?: BoolFilter<"Customer"> | boolean | $Types.Skip
    status?: EnumCustomerStatusFilter<"Customer"> | $Enums.CustomerStatus | $Types.Skip
    classifiedId?: IntNullableFilter<"Customer"> | number | null | $Types.Skip
    createdAt?: DateTimeFilter<"Customer"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Customer"> | Date | string | $Types.Skip
  }

  export type ClassifiedCreateWithoutCustomersInput = {
    views?: number | $Types.Skip
    slug: string
    vrm?: string | null | $Types.Skip
    title?: string | null | $Types.Skip
    description?: string | null | $Types.Skip
    year: number
    odoReading?: number | $Types.Skip
    doors?: number | $Types.Skip
    seats?: number | $Types.Skip
    price?: number | $Types.Skip
    ulezCompliance?: $Enums.ELEZCompliance | $Types.Skip
    transmission?: $Enums.Transmission | $Types.Skip
    colour?: $Enums.Colour | $Types.Skip
    fuelType?: $Enums.FuelType | $Types.Skip
    bodyType?: $Enums.BodyType | $Types.Skip
    odoUnit?: $Enums.OdoUnit | $Types.Skip
    currency?: $Enums.CurrencyCode | $Types.Skip
    status?: $Enums.ClassifiedStatus | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    make: MakeCreateNestedOneWithoutClassifiedsInput
    model: ModelCreateNestedOneWithoutClassifiedsInput
    modelVariant?: ModelVariantCreateNestedOneWithoutClassifiedsInput | $Types.Skip
    images?: ImageCreateNestedManyWithoutClassifiedInput | $Types.Skip
  }

  export type ClassifiedUncheckedCreateWithoutCustomersInput = {
    id?: number | $Types.Skip
    views?: number | $Types.Skip
    slug: string
    vrm?: string | null | $Types.Skip
    title?: string | null | $Types.Skip
    description?: string | null | $Types.Skip
    year: number
    odoReading?: number | $Types.Skip
    doors?: number | $Types.Skip
    seats?: number | $Types.Skip
    price?: number | $Types.Skip
    makeId: number
    modelId: number
    modelVariantId: number
    ulezCompliance?: $Enums.ELEZCompliance | $Types.Skip
    transmission?: $Enums.Transmission | $Types.Skip
    colour?: $Enums.Colour | $Types.Skip
    fuelType?: $Enums.FuelType | $Types.Skip
    bodyType?: $Enums.BodyType | $Types.Skip
    odoUnit?: $Enums.OdoUnit | $Types.Skip
    currency?: $Enums.CurrencyCode | $Types.Skip
    status?: $Enums.ClassifiedStatus | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    images?: ImageUncheckedCreateNestedManyWithoutClassifiedInput | $Types.Skip
  }

  export type ClassifiedCreateOrConnectWithoutCustomersInput = {
    where: ClassifiedWhereUniqueInput
    create: XOR<ClassifiedCreateWithoutCustomersInput, ClassifiedUncheckedCreateWithoutCustomersInput>
  }

  export type CustomerLifecycleCreateWithoutCustomerInput = {
    oldStatus: $Enums.CustomerStatus
    newStatus: $Enums.CustomerStatus
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type CustomerLifecycleUncheckedCreateWithoutCustomerInput = {
    id?: number | $Types.Skip
    oldStatus: $Enums.CustomerStatus
    newStatus: $Enums.CustomerStatus
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type CustomerLifecycleCreateOrConnectWithoutCustomerInput = {
    where: CustomerLifecycleWhereUniqueInput
    create: XOR<CustomerLifecycleCreateWithoutCustomerInput, CustomerLifecycleUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerLifecycleCreateManyCustomerInputEnvelope = {
    data: CustomerLifecycleCreateManyCustomerInput | CustomerLifecycleCreateManyCustomerInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type ClassifiedUpsertWithoutCustomersInput = {
    update: XOR<ClassifiedUpdateWithoutCustomersInput, ClassifiedUncheckedUpdateWithoutCustomersInput>
    create: XOR<ClassifiedCreateWithoutCustomersInput, ClassifiedUncheckedCreateWithoutCustomersInput>
    where?: ClassifiedWhereInput | $Types.Skip
  }

  export type ClassifiedUpdateToOneWithWhereWithoutCustomersInput = {
    where?: ClassifiedWhereInput | $Types.Skip
    data: XOR<ClassifiedUpdateWithoutCustomersInput, ClassifiedUncheckedUpdateWithoutCustomersInput>
  }

  export type ClassifiedUpdateWithoutCustomersInput = {
    views?: IntFieldUpdateOperationsInput | number | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    vrm?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    title?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    year?: IntFieldUpdateOperationsInput | number | $Types.Skip
    odoReading?: IntFieldUpdateOperationsInput | number | $Types.Skip
    doors?: IntFieldUpdateOperationsInput | number | $Types.Skip
    seats?: IntFieldUpdateOperationsInput | number | $Types.Skip
    price?: IntFieldUpdateOperationsInput | number | $Types.Skip
    ulezCompliance?: EnumELEZComplianceFieldUpdateOperationsInput | $Enums.ELEZCompliance | $Types.Skip
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | $Types.Skip
    colour?: EnumColourFieldUpdateOperationsInput | $Enums.Colour | $Types.Skip
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | $Types.Skip
    bodyType?: EnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType | $Types.Skip
    odoUnit?: EnumOdoUnitFieldUpdateOperationsInput | $Enums.OdoUnit | $Types.Skip
    currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode | $Types.Skip
    status?: EnumClassifiedStatusFieldUpdateOperationsInput | $Enums.ClassifiedStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    make?: MakeUpdateOneRequiredWithoutClassifiedsNestedInput | $Types.Skip
    model?: ModelUpdateOneRequiredWithoutClassifiedsNestedInput | $Types.Skip
    modelVariant?: ModelVariantUpdateOneWithoutClassifiedsNestedInput | $Types.Skip
    images?: ImageUpdateManyWithoutClassifiedNestedInput | $Types.Skip
  }

  export type ClassifiedUncheckedUpdateWithoutCustomersInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    views?: IntFieldUpdateOperationsInput | number | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    vrm?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    title?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    year?: IntFieldUpdateOperationsInput | number | $Types.Skip
    odoReading?: IntFieldUpdateOperationsInput | number | $Types.Skip
    doors?: IntFieldUpdateOperationsInput | number | $Types.Skip
    seats?: IntFieldUpdateOperationsInput | number | $Types.Skip
    price?: IntFieldUpdateOperationsInput | number | $Types.Skip
    makeId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    modelId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    modelVariantId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    ulezCompliance?: EnumELEZComplianceFieldUpdateOperationsInput | $Enums.ELEZCompliance | $Types.Skip
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | $Types.Skip
    colour?: EnumColourFieldUpdateOperationsInput | $Enums.Colour | $Types.Skip
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | $Types.Skip
    bodyType?: EnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType | $Types.Skip
    odoUnit?: EnumOdoUnitFieldUpdateOperationsInput | $Enums.OdoUnit | $Types.Skip
    currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode | $Types.Skip
    status?: EnumClassifiedStatusFieldUpdateOperationsInput | $Enums.ClassifiedStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    images?: ImageUncheckedUpdateManyWithoutClassifiedNestedInput | $Types.Skip
  }

  export type CustomerLifecycleUpsertWithWhereUniqueWithoutCustomerInput = {
    where: CustomerLifecycleWhereUniqueInput
    update: XOR<CustomerLifecycleUpdateWithoutCustomerInput, CustomerLifecycleUncheckedUpdateWithoutCustomerInput>
    create: XOR<CustomerLifecycleCreateWithoutCustomerInput, CustomerLifecycleUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerLifecycleUpdateWithWhereUniqueWithoutCustomerInput = {
    where: CustomerLifecycleWhereUniqueInput
    data: XOR<CustomerLifecycleUpdateWithoutCustomerInput, CustomerLifecycleUncheckedUpdateWithoutCustomerInput>
  }

  export type CustomerLifecycleUpdateManyWithWhereWithoutCustomerInput = {
    where: CustomerLifecycleScalarWhereInput
    data: XOR<CustomerLifecycleUpdateManyMutationInput, CustomerLifecycleUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomerLifecycleScalarWhereInput = {
    AND?: CustomerLifecycleScalarWhereInput | CustomerLifecycleScalarWhereInput[] | $Types.Skip
    OR?: CustomerLifecycleScalarWhereInput[] | $Types.Skip
    NOT?: CustomerLifecycleScalarWhereInput | CustomerLifecycleScalarWhereInput[] | $Types.Skip
    id?: IntFilter<"CustomerLifecycle"> | number | $Types.Skip
    customerId?: IntFilter<"CustomerLifecycle"> | number | $Types.Skip
    oldStatus?: EnumCustomerStatusFilter<"CustomerLifecycle"> | $Enums.CustomerStatus | $Types.Skip
    newStatus?: EnumCustomerStatusFilter<"CustomerLifecycle"> | $Enums.CustomerStatus | $Types.Skip
    createdAt?: DateTimeFilter<"CustomerLifecycle"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"CustomerLifecycle"> | Date | string | $Types.Skip
  }

  export type CustomerCreateWithoutLifecycleInput = {
    firstName: string
    lastName: string
    email: string
    mobile?: string | null | $Types.Skip
    bookingDate?: Date | string | null | $Types.Skip
    termAccepted?: boolean | $Types.Skip
    status?: $Enums.CustomerStatus | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    Classified?: ClassifiedCreateNestedOneWithoutCustomersInput | $Types.Skip
  }

  export type CustomerUncheckedCreateWithoutLifecycleInput = {
    id?: number | $Types.Skip
    firstName: string
    lastName: string
    email: string
    mobile?: string | null | $Types.Skip
    bookingDate?: Date | string | null | $Types.Skip
    termAccepted?: boolean | $Types.Skip
    status?: $Enums.CustomerStatus | $Types.Skip
    classifiedId?: number | null | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type CustomerCreateOrConnectWithoutLifecycleInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutLifecycleInput, CustomerUncheckedCreateWithoutLifecycleInput>
  }

  export type CustomerUpsertWithoutLifecycleInput = {
    update: XOR<CustomerUpdateWithoutLifecycleInput, CustomerUncheckedUpdateWithoutLifecycleInput>
    create: XOR<CustomerCreateWithoutLifecycleInput, CustomerUncheckedCreateWithoutLifecycleInput>
    where?: CustomerWhereInput | $Types.Skip
  }

  export type CustomerUpdateToOneWithWhereWithoutLifecycleInput = {
    where?: CustomerWhereInput | $Types.Skip
    data: XOR<CustomerUpdateWithoutLifecycleInput, CustomerUncheckedUpdateWithoutLifecycleInput>
  }

  export type CustomerUpdateWithoutLifecycleInput = {
    firstName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    lastName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    mobile?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    bookingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    termAccepted?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    status?: EnumCustomerStatusFieldUpdateOperationsInput | $Enums.CustomerStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    Classified?: ClassifiedUpdateOneWithoutCustomersNestedInput | $Types.Skip
  }

  export type CustomerUncheckedUpdateWithoutLifecycleInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    firstName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    lastName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    mobile?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    bookingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    termAccepted?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    status?: EnumCustomerStatusFieldUpdateOperationsInput | $Enums.CustomerStatus | $Types.Skip
    classifiedId?: NullableIntFieldUpdateOperationsInput | number | null | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ClassifiedCreateWithoutImagesInput = {
    views?: number | $Types.Skip
    slug: string
    vrm?: string | null | $Types.Skip
    title?: string | null | $Types.Skip
    description?: string | null | $Types.Skip
    year: number
    odoReading?: number | $Types.Skip
    doors?: number | $Types.Skip
    seats?: number | $Types.Skip
    price?: number | $Types.Skip
    ulezCompliance?: $Enums.ELEZCompliance | $Types.Skip
    transmission?: $Enums.Transmission | $Types.Skip
    colour?: $Enums.Colour | $Types.Skip
    fuelType?: $Enums.FuelType | $Types.Skip
    bodyType?: $Enums.BodyType | $Types.Skip
    odoUnit?: $Enums.OdoUnit | $Types.Skip
    currency?: $Enums.CurrencyCode | $Types.Skip
    status?: $Enums.ClassifiedStatus | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    make: MakeCreateNestedOneWithoutClassifiedsInput
    model: ModelCreateNestedOneWithoutClassifiedsInput
    modelVariant?: ModelVariantCreateNestedOneWithoutClassifiedsInput | $Types.Skip
    customers?: CustomerCreateNestedManyWithoutClassifiedInput | $Types.Skip
  }

  export type ClassifiedUncheckedCreateWithoutImagesInput = {
    id?: number | $Types.Skip
    views?: number | $Types.Skip
    slug: string
    vrm?: string | null | $Types.Skip
    title?: string | null | $Types.Skip
    description?: string | null | $Types.Skip
    year: number
    odoReading?: number | $Types.Skip
    doors?: number | $Types.Skip
    seats?: number | $Types.Skip
    price?: number | $Types.Skip
    makeId: number
    modelId: number
    modelVariantId: number
    ulezCompliance?: $Enums.ELEZCompliance | $Types.Skip
    transmission?: $Enums.Transmission | $Types.Skip
    colour?: $Enums.Colour | $Types.Skip
    fuelType?: $Enums.FuelType | $Types.Skip
    bodyType?: $Enums.BodyType | $Types.Skip
    odoUnit?: $Enums.OdoUnit | $Types.Skip
    currency?: $Enums.CurrencyCode | $Types.Skip
    status?: $Enums.ClassifiedStatus | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    customers?: CustomerUncheckedCreateNestedManyWithoutClassifiedInput | $Types.Skip
  }

  export type ClassifiedCreateOrConnectWithoutImagesInput = {
    where: ClassifiedWhereUniqueInput
    create: XOR<ClassifiedCreateWithoutImagesInput, ClassifiedUncheckedCreateWithoutImagesInput>
  }

  export type ClassifiedUpsertWithoutImagesInput = {
    update: XOR<ClassifiedUpdateWithoutImagesInput, ClassifiedUncheckedUpdateWithoutImagesInput>
    create: XOR<ClassifiedCreateWithoutImagesInput, ClassifiedUncheckedCreateWithoutImagesInput>
    where?: ClassifiedWhereInput | $Types.Skip
  }

  export type ClassifiedUpdateToOneWithWhereWithoutImagesInput = {
    where?: ClassifiedWhereInput | $Types.Skip
    data: XOR<ClassifiedUpdateWithoutImagesInput, ClassifiedUncheckedUpdateWithoutImagesInput>
  }

  export type ClassifiedUpdateWithoutImagesInput = {
    views?: IntFieldUpdateOperationsInput | number | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    vrm?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    title?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    year?: IntFieldUpdateOperationsInput | number | $Types.Skip
    odoReading?: IntFieldUpdateOperationsInput | number | $Types.Skip
    doors?: IntFieldUpdateOperationsInput | number | $Types.Skip
    seats?: IntFieldUpdateOperationsInput | number | $Types.Skip
    price?: IntFieldUpdateOperationsInput | number | $Types.Skip
    ulezCompliance?: EnumELEZComplianceFieldUpdateOperationsInput | $Enums.ELEZCompliance | $Types.Skip
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | $Types.Skip
    colour?: EnumColourFieldUpdateOperationsInput | $Enums.Colour | $Types.Skip
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | $Types.Skip
    bodyType?: EnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType | $Types.Skip
    odoUnit?: EnumOdoUnitFieldUpdateOperationsInput | $Enums.OdoUnit | $Types.Skip
    currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode | $Types.Skip
    status?: EnumClassifiedStatusFieldUpdateOperationsInput | $Enums.ClassifiedStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    make?: MakeUpdateOneRequiredWithoutClassifiedsNestedInput | $Types.Skip
    model?: ModelUpdateOneRequiredWithoutClassifiedsNestedInput | $Types.Skip
    modelVariant?: ModelVariantUpdateOneWithoutClassifiedsNestedInput | $Types.Skip
    customers?: CustomerUpdateManyWithoutClassifiedNestedInput | $Types.Skip
  }

  export type ClassifiedUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    views?: IntFieldUpdateOperationsInput | number | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    vrm?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    title?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    year?: IntFieldUpdateOperationsInput | number | $Types.Skip
    odoReading?: IntFieldUpdateOperationsInput | number | $Types.Skip
    doors?: IntFieldUpdateOperationsInput | number | $Types.Skip
    seats?: IntFieldUpdateOperationsInput | number | $Types.Skip
    price?: IntFieldUpdateOperationsInput | number | $Types.Skip
    makeId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    modelId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    modelVariantId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    ulezCompliance?: EnumELEZComplianceFieldUpdateOperationsInput | $Enums.ELEZCompliance | $Types.Skip
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | $Types.Skip
    colour?: EnumColourFieldUpdateOperationsInput | $Enums.Colour | $Types.Skip
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | $Types.Skip
    bodyType?: EnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType | $Types.Skip
    odoUnit?: EnumOdoUnitFieldUpdateOperationsInput | $Enums.OdoUnit | $Types.Skip
    currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode | $Types.Skip
    status?: EnumClassifiedStatusFieldUpdateOperationsInput | $Enums.ClassifiedStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    customers?: CustomerUncheckedUpdateManyWithoutClassifiedNestedInput | $Types.Skip
  }

  export type UserCreateWithoutSessionInput = {
    id?: string | $Types.Skip
    email: string
    hashedPassword: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type UserUncheckedCreateWithoutSessionInput = {
    id?: string | $Types.Skip
    email: string
    hashedPassword: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type UserCreateOrConnectWithoutSessionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
  }

  export type UserUpsertWithoutSessionInput = {
    update: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
    create: XOR<UserCreateWithoutSessionInput, UserUncheckedCreateWithoutSessionInput>
    where?: UserWhereInput | $Types.Skip
  }

  export type UserUpdateToOneWithWhereWithoutSessionInput = {
    where?: UserWhereInput | $Types.Skip
    data: XOR<UserUpdateWithoutSessionInput, UserUncheckedUpdateWithoutSessionInput>
  }

  export type UserUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    hashedPassword?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type UserUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    hashedPassword?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ModelCreateWithoutMakeInput = {
    name: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    modelVariants?: ModelVariantCreateNestedManyWithoutModelInput | $Types.Skip
    classifieds?: ClassifiedCreateNestedManyWithoutModelInput | $Types.Skip
  }

  export type ModelUncheckedCreateWithoutMakeInput = {
    id?: number | $Types.Skip
    name: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    modelVariants?: ModelVariantUncheckedCreateNestedManyWithoutModelInput | $Types.Skip
    classifieds?: ClassifiedUncheckedCreateNestedManyWithoutModelInput | $Types.Skip
  }

  export type ModelCreateOrConnectWithoutMakeInput = {
    where: ModelWhereUniqueInput
    create: XOR<ModelCreateWithoutMakeInput, ModelUncheckedCreateWithoutMakeInput>
  }

  export type ModelCreateManyMakeInputEnvelope = {
    data: ModelCreateManyMakeInput | ModelCreateManyMakeInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type ClassifiedCreateWithoutMakeInput = {
    views?: number | $Types.Skip
    slug: string
    vrm?: string | null | $Types.Skip
    title?: string | null | $Types.Skip
    description?: string | null | $Types.Skip
    year: number
    odoReading?: number | $Types.Skip
    doors?: number | $Types.Skip
    seats?: number | $Types.Skip
    price?: number | $Types.Skip
    ulezCompliance?: $Enums.ELEZCompliance | $Types.Skip
    transmission?: $Enums.Transmission | $Types.Skip
    colour?: $Enums.Colour | $Types.Skip
    fuelType?: $Enums.FuelType | $Types.Skip
    bodyType?: $Enums.BodyType | $Types.Skip
    odoUnit?: $Enums.OdoUnit | $Types.Skip
    currency?: $Enums.CurrencyCode | $Types.Skip
    status?: $Enums.ClassifiedStatus | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    model: ModelCreateNestedOneWithoutClassifiedsInput
    modelVariant?: ModelVariantCreateNestedOneWithoutClassifiedsInput | $Types.Skip
    images?: ImageCreateNestedManyWithoutClassifiedInput | $Types.Skip
    customers?: CustomerCreateNestedManyWithoutClassifiedInput | $Types.Skip
  }

  export type ClassifiedUncheckedCreateWithoutMakeInput = {
    id?: number | $Types.Skip
    views?: number | $Types.Skip
    slug: string
    vrm?: string | null | $Types.Skip
    title?: string | null | $Types.Skip
    description?: string | null | $Types.Skip
    year: number
    odoReading?: number | $Types.Skip
    doors?: number | $Types.Skip
    seats?: number | $Types.Skip
    price?: number | $Types.Skip
    modelId: number
    modelVariantId: number
    ulezCompliance?: $Enums.ELEZCompliance | $Types.Skip
    transmission?: $Enums.Transmission | $Types.Skip
    colour?: $Enums.Colour | $Types.Skip
    fuelType?: $Enums.FuelType | $Types.Skip
    bodyType?: $Enums.BodyType | $Types.Skip
    odoUnit?: $Enums.OdoUnit | $Types.Skip
    currency?: $Enums.CurrencyCode | $Types.Skip
    status?: $Enums.ClassifiedStatus | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    images?: ImageUncheckedCreateNestedManyWithoutClassifiedInput | $Types.Skip
    customers?: CustomerUncheckedCreateNestedManyWithoutClassifiedInput | $Types.Skip
  }

  export type ClassifiedCreateOrConnectWithoutMakeInput = {
    where: ClassifiedWhereUniqueInput
    create: XOR<ClassifiedCreateWithoutMakeInput, ClassifiedUncheckedCreateWithoutMakeInput>
  }

  export type ClassifiedCreateManyMakeInputEnvelope = {
    data: ClassifiedCreateManyMakeInput | ClassifiedCreateManyMakeInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type ModelUpsertWithWhereUniqueWithoutMakeInput = {
    where: ModelWhereUniqueInput
    update: XOR<ModelUpdateWithoutMakeInput, ModelUncheckedUpdateWithoutMakeInput>
    create: XOR<ModelCreateWithoutMakeInput, ModelUncheckedCreateWithoutMakeInput>
  }

  export type ModelUpdateWithWhereUniqueWithoutMakeInput = {
    where: ModelWhereUniqueInput
    data: XOR<ModelUpdateWithoutMakeInput, ModelUncheckedUpdateWithoutMakeInput>
  }

  export type ModelUpdateManyWithWhereWithoutMakeInput = {
    where: ModelScalarWhereInput
    data: XOR<ModelUpdateManyMutationInput, ModelUncheckedUpdateManyWithoutMakeInput>
  }

  export type ModelScalarWhereInput = {
    AND?: ModelScalarWhereInput | ModelScalarWhereInput[] | $Types.Skip
    OR?: ModelScalarWhereInput[] | $Types.Skip
    NOT?: ModelScalarWhereInput | ModelScalarWhereInput[] | $Types.Skip
    id?: IntFilter<"Model"> | number | $Types.Skip
    name?: StringFilter<"Model"> | string | $Types.Skip
    makeId?: IntFilter<"Model"> | number | $Types.Skip
    createdAt?: DateTimeFilter<"Model"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Model"> | Date | string | $Types.Skip
  }

  export type ClassifiedUpsertWithWhereUniqueWithoutMakeInput = {
    where: ClassifiedWhereUniqueInput
    update: XOR<ClassifiedUpdateWithoutMakeInput, ClassifiedUncheckedUpdateWithoutMakeInput>
    create: XOR<ClassifiedCreateWithoutMakeInput, ClassifiedUncheckedCreateWithoutMakeInput>
  }

  export type ClassifiedUpdateWithWhereUniqueWithoutMakeInput = {
    where: ClassifiedWhereUniqueInput
    data: XOR<ClassifiedUpdateWithoutMakeInput, ClassifiedUncheckedUpdateWithoutMakeInput>
  }

  export type ClassifiedUpdateManyWithWhereWithoutMakeInput = {
    where: ClassifiedScalarWhereInput
    data: XOR<ClassifiedUpdateManyMutationInput, ClassifiedUncheckedUpdateManyWithoutMakeInput>
  }

  export type ClassifiedScalarWhereInput = {
    AND?: ClassifiedScalarWhereInput | ClassifiedScalarWhereInput[] | $Types.Skip
    OR?: ClassifiedScalarWhereInput[] | $Types.Skip
    NOT?: ClassifiedScalarWhereInput | ClassifiedScalarWhereInput[] | $Types.Skip
    id?: IntFilter<"Classified"> | number | $Types.Skip
    views?: IntFilter<"Classified"> | number | $Types.Skip
    slug?: StringFilter<"Classified"> | string | $Types.Skip
    vrm?: StringNullableFilter<"Classified"> | string | null | $Types.Skip
    title?: StringNullableFilter<"Classified"> | string | null | $Types.Skip
    description?: StringNullableFilter<"Classified"> | string | null | $Types.Skip
    year?: IntFilter<"Classified"> | number | $Types.Skip
    odoReading?: IntFilter<"Classified"> | number | $Types.Skip
    doors?: IntFilter<"Classified"> | number | $Types.Skip
    seats?: IntFilter<"Classified"> | number | $Types.Skip
    price?: IntFilter<"Classified"> | number | $Types.Skip
    makeId?: IntFilter<"Classified"> | number | $Types.Skip
    modelId?: IntFilter<"Classified"> | number | $Types.Skip
    modelVariantId?: IntFilter<"Classified"> | number | $Types.Skip
    ulezCompliance?: EnumELEZComplianceFilter<"Classified"> | $Enums.ELEZCompliance | $Types.Skip
    transmission?: EnumTransmissionFilter<"Classified"> | $Enums.Transmission | $Types.Skip
    colour?: EnumColourFilter<"Classified"> | $Enums.Colour | $Types.Skip
    fuelType?: EnumFuelTypeFilter<"Classified"> | $Enums.FuelType | $Types.Skip
    bodyType?: EnumBodyTypeFilter<"Classified"> | $Enums.BodyType | $Types.Skip
    odoUnit?: EnumOdoUnitFilter<"Classified"> | $Enums.OdoUnit | $Types.Skip
    currency?: EnumCurrencyCodeFilter<"Classified"> | $Enums.CurrencyCode | $Types.Skip
    status?: EnumClassifiedStatusFilter<"Classified"> | $Enums.ClassifiedStatus | $Types.Skip
    createdAt?: DateTimeFilter<"Classified"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"Classified"> | Date | string | $Types.Skip
  }

  export type MakeCreateWithoutModelsInput = {
    name: string
    image: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    classifieds?: ClassifiedCreateNestedManyWithoutMakeInput | $Types.Skip
  }

  export type MakeUncheckedCreateWithoutModelsInput = {
    id?: number | $Types.Skip
    name: string
    image: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    classifieds?: ClassifiedUncheckedCreateNestedManyWithoutMakeInput | $Types.Skip
  }

  export type MakeCreateOrConnectWithoutModelsInput = {
    where: MakeWhereUniqueInput
    create: XOR<MakeCreateWithoutModelsInput, MakeUncheckedCreateWithoutModelsInput>
  }

  export type ModelVariantCreateWithoutModelInput = {
    name: string
    yearStart: number
    yearEnd: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    classifieds?: ClassifiedCreateNestedManyWithoutModelVariantInput | $Types.Skip
  }

  export type ModelVariantUncheckedCreateWithoutModelInput = {
    id?: number | $Types.Skip
    name: string
    yearStart: number
    yearEnd: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    classifieds?: ClassifiedUncheckedCreateNestedManyWithoutModelVariantInput | $Types.Skip
  }

  export type ModelVariantCreateOrConnectWithoutModelInput = {
    where: ModelVariantWhereUniqueInput
    create: XOR<ModelVariantCreateWithoutModelInput, ModelVariantUncheckedCreateWithoutModelInput>
  }

  export type ModelVariantCreateManyModelInputEnvelope = {
    data: ModelVariantCreateManyModelInput | ModelVariantCreateManyModelInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type ClassifiedCreateWithoutModelInput = {
    views?: number | $Types.Skip
    slug: string
    vrm?: string | null | $Types.Skip
    title?: string | null | $Types.Skip
    description?: string | null | $Types.Skip
    year: number
    odoReading?: number | $Types.Skip
    doors?: number | $Types.Skip
    seats?: number | $Types.Skip
    price?: number | $Types.Skip
    ulezCompliance?: $Enums.ELEZCompliance | $Types.Skip
    transmission?: $Enums.Transmission | $Types.Skip
    colour?: $Enums.Colour | $Types.Skip
    fuelType?: $Enums.FuelType | $Types.Skip
    bodyType?: $Enums.BodyType | $Types.Skip
    odoUnit?: $Enums.OdoUnit | $Types.Skip
    currency?: $Enums.CurrencyCode | $Types.Skip
    status?: $Enums.ClassifiedStatus | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    make: MakeCreateNestedOneWithoutClassifiedsInput
    modelVariant?: ModelVariantCreateNestedOneWithoutClassifiedsInput | $Types.Skip
    images?: ImageCreateNestedManyWithoutClassifiedInput | $Types.Skip
    customers?: CustomerCreateNestedManyWithoutClassifiedInput | $Types.Skip
  }

  export type ClassifiedUncheckedCreateWithoutModelInput = {
    id?: number | $Types.Skip
    views?: number | $Types.Skip
    slug: string
    vrm?: string | null | $Types.Skip
    title?: string | null | $Types.Skip
    description?: string | null | $Types.Skip
    year: number
    odoReading?: number | $Types.Skip
    doors?: number | $Types.Skip
    seats?: number | $Types.Skip
    price?: number | $Types.Skip
    makeId: number
    modelVariantId: number
    ulezCompliance?: $Enums.ELEZCompliance | $Types.Skip
    transmission?: $Enums.Transmission | $Types.Skip
    colour?: $Enums.Colour | $Types.Skip
    fuelType?: $Enums.FuelType | $Types.Skip
    bodyType?: $Enums.BodyType | $Types.Skip
    odoUnit?: $Enums.OdoUnit | $Types.Skip
    currency?: $Enums.CurrencyCode | $Types.Skip
    status?: $Enums.ClassifiedStatus | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    images?: ImageUncheckedCreateNestedManyWithoutClassifiedInput | $Types.Skip
    customers?: CustomerUncheckedCreateNestedManyWithoutClassifiedInput | $Types.Skip
  }

  export type ClassifiedCreateOrConnectWithoutModelInput = {
    where: ClassifiedWhereUniqueInput
    create: XOR<ClassifiedCreateWithoutModelInput, ClassifiedUncheckedCreateWithoutModelInput>
  }

  export type ClassifiedCreateManyModelInputEnvelope = {
    data: ClassifiedCreateManyModelInput | ClassifiedCreateManyModelInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type MakeUpsertWithoutModelsInput = {
    update: XOR<MakeUpdateWithoutModelsInput, MakeUncheckedUpdateWithoutModelsInput>
    create: XOR<MakeCreateWithoutModelsInput, MakeUncheckedCreateWithoutModelsInput>
    where?: MakeWhereInput | $Types.Skip
  }

  export type MakeUpdateToOneWithWhereWithoutModelsInput = {
    where?: MakeWhereInput | $Types.Skip
    data: XOR<MakeUpdateWithoutModelsInput, MakeUncheckedUpdateWithoutModelsInput>
  }

  export type MakeUpdateWithoutModelsInput = {
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    image?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    classifieds?: ClassifiedUpdateManyWithoutMakeNestedInput | $Types.Skip
  }

  export type MakeUncheckedUpdateWithoutModelsInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    image?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    classifieds?: ClassifiedUncheckedUpdateManyWithoutMakeNestedInput | $Types.Skip
  }

  export type ModelVariantUpsertWithWhereUniqueWithoutModelInput = {
    where: ModelVariantWhereUniqueInput
    update: XOR<ModelVariantUpdateWithoutModelInput, ModelVariantUncheckedUpdateWithoutModelInput>
    create: XOR<ModelVariantCreateWithoutModelInput, ModelVariantUncheckedCreateWithoutModelInput>
  }

  export type ModelVariantUpdateWithWhereUniqueWithoutModelInput = {
    where: ModelVariantWhereUniqueInput
    data: XOR<ModelVariantUpdateWithoutModelInput, ModelVariantUncheckedUpdateWithoutModelInput>
  }

  export type ModelVariantUpdateManyWithWhereWithoutModelInput = {
    where: ModelVariantScalarWhereInput
    data: XOR<ModelVariantUpdateManyMutationInput, ModelVariantUncheckedUpdateManyWithoutModelInput>
  }

  export type ModelVariantScalarWhereInput = {
    AND?: ModelVariantScalarWhereInput | ModelVariantScalarWhereInput[] | $Types.Skip
    OR?: ModelVariantScalarWhereInput[] | $Types.Skip
    NOT?: ModelVariantScalarWhereInput | ModelVariantScalarWhereInput[] | $Types.Skip
    id?: IntFilter<"ModelVariant"> | number | $Types.Skip
    name?: StringFilter<"ModelVariant"> | string | $Types.Skip
    modelId?: IntFilter<"ModelVariant"> | number | $Types.Skip
    yearStart?: IntFilter<"ModelVariant"> | number | $Types.Skip
    yearEnd?: IntFilter<"ModelVariant"> | number | $Types.Skip
    createdAt?: DateTimeFilter<"ModelVariant"> | Date | string | $Types.Skip
    updatedAt?: DateTimeFilter<"ModelVariant"> | Date | string | $Types.Skip
  }

  export type ClassifiedUpsertWithWhereUniqueWithoutModelInput = {
    where: ClassifiedWhereUniqueInput
    update: XOR<ClassifiedUpdateWithoutModelInput, ClassifiedUncheckedUpdateWithoutModelInput>
    create: XOR<ClassifiedCreateWithoutModelInput, ClassifiedUncheckedCreateWithoutModelInput>
  }

  export type ClassifiedUpdateWithWhereUniqueWithoutModelInput = {
    where: ClassifiedWhereUniqueInput
    data: XOR<ClassifiedUpdateWithoutModelInput, ClassifiedUncheckedUpdateWithoutModelInput>
  }

  export type ClassifiedUpdateManyWithWhereWithoutModelInput = {
    where: ClassifiedScalarWhereInput
    data: XOR<ClassifiedUpdateManyMutationInput, ClassifiedUncheckedUpdateManyWithoutModelInput>
  }

  export type ModelCreateWithoutModelVariantsInput = {
    name: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    make: MakeCreateNestedOneWithoutModelsInput
    classifieds?: ClassifiedCreateNestedManyWithoutModelInput | $Types.Skip
  }

  export type ModelUncheckedCreateWithoutModelVariantsInput = {
    id?: number | $Types.Skip
    name: string
    makeId: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    classifieds?: ClassifiedUncheckedCreateNestedManyWithoutModelInput | $Types.Skip
  }

  export type ModelCreateOrConnectWithoutModelVariantsInput = {
    where: ModelWhereUniqueInput
    create: XOR<ModelCreateWithoutModelVariantsInput, ModelUncheckedCreateWithoutModelVariantsInput>
  }

  export type ClassifiedCreateWithoutModelVariantInput = {
    views?: number | $Types.Skip
    slug: string
    vrm?: string | null | $Types.Skip
    title?: string | null | $Types.Skip
    description?: string | null | $Types.Skip
    year: number
    odoReading?: number | $Types.Skip
    doors?: number | $Types.Skip
    seats?: number | $Types.Skip
    price?: number | $Types.Skip
    ulezCompliance?: $Enums.ELEZCompliance | $Types.Skip
    transmission?: $Enums.Transmission | $Types.Skip
    colour?: $Enums.Colour | $Types.Skip
    fuelType?: $Enums.FuelType | $Types.Skip
    bodyType?: $Enums.BodyType | $Types.Skip
    odoUnit?: $Enums.OdoUnit | $Types.Skip
    currency?: $Enums.CurrencyCode | $Types.Skip
    status?: $Enums.ClassifiedStatus | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    make: MakeCreateNestedOneWithoutClassifiedsInput
    model: ModelCreateNestedOneWithoutClassifiedsInput
    images?: ImageCreateNestedManyWithoutClassifiedInput | $Types.Skip
    customers?: CustomerCreateNestedManyWithoutClassifiedInput | $Types.Skip
  }

  export type ClassifiedUncheckedCreateWithoutModelVariantInput = {
    id?: number | $Types.Skip
    views?: number | $Types.Skip
    slug: string
    vrm?: string | null | $Types.Skip
    title?: string | null | $Types.Skip
    description?: string | null | $Types.Skip
    year: number
    odoReading?: number | $Types.Skip
    doors?: number | $Types.Skip
    seats?: number | $Types.Skip
    price?: number | $Types.Skip
    makeId: number
    modelId: number
    ulezCompliance?: $Enums.ELEZCompliance | $Types.Skip
    transmission?: $Enums.Transmission | $Types.Skip
    colour?: $Enums.Colour | $Types.Skip
    fuelType?: $Enums.FuelType | $Types.Skip
    bodyType?: $Enums.BodyType | $Types.Skip
    odoUnit?: $Enums.OdoUnit | $Types.Skip
    currency?: $Enums.CurrencyCode | $Types.Skip
    status?: $Enums.ClassifiedStatus | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
    images?: ImageUncheckedCreateNestedManyWithoutClassifiedInput | $Types.Skip
    customers?: CustomerUncheckedCreateNestedManyWithoutClassifiedInput | $Types.Skip
  }

  export type ClassifiedCreateOrConnectWithoutModelVariantInput = {
    where: ClassifiedWhereUniqueInput
    create: XOR<ClassifiedCreateWithoutModelVariantInput, ClassifiedUncheckedCreateWithoutModelVariantInput>
  }

  export type ClassifiedCreateManyModelVariantInputEnvelope = {
    data: ClassifiedCreateManyModelVariantInput | ClassifiedCreateManyModelVariantInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type ModelUpsertWithoutModelVariantsInput = {
    update: XOR<ModelUpdateWithoutModelVariantsInput, ModelUncheckedUpdateWithoutModelVariantsInput>
    create: XOR<ModelCreateWithoutModelVariantsInput, ModelUncheckedCreateWithoutModelVariantsInput>
    where?: ModelWhereInput | $Types.Skip
  }

  export type ModelUpdateToOneWithWhereWithoutModelVariantsInput = {
    where?: ModelWhereInput | $Types.Skip
    data: XOR<ModelUpdateWithoutModelVariantsInput, ModelUncheckedUpdateWithoutModelVariantsInput>
  }

  export type ModelUpdateWithoutModelVariantsInput = {
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    make?: MakeUpdateOneRequiredWithoutModelsNestedInput | $Types.Skip
    classifieds?: ClassifiedUpdateManyWithoutModelNestedInput | $Types.Skip
  }

  export type ModelUncheckedUpdateWithoutModelVariantsInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    makeId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    classifieds?: ClassifiedUncheckedUpdateManyWithoutModelNestedInput | $Types.Skip
  }

  export type ClassifiedUpsertWithWhereUniqueWithoutModelVariantInput = {
    where: ClassifiedWhereUniqueInput
    update: XOR<ClassifiedUpdateWithoutModelVariantInput, ClassifiedUncheckedUpdateWithoutModelVariantInput>
    create: XOR<ClassifiedCreateWithoutModelVariantInput, ClassifiedUncheckedCreateWithoutModelVariantInput>
  }

  export type ClassifiedUpdateWithWhereUniqueWithoutModelVariantInput = {
    where: ClassifiedWhereUniqueInput
    data: XOR<ClassifiedUpdateWithoutModelVariantInput, ClassifiedUncheckedUpdateWithoutModelVariantInput>
  }

  export type ClassifiedUpdateManyWithWhereWithoutModelVariantInput = {
    where: ClassifiedScalarWhereInput
    data: XOR<ClassifiedUpdateManyMutationInput, ClassifiedUncheckedUpdateManyWithoutModelVariantInput>
  }

  export type SessionCreateWithoutUserInput = {
    id?: string | $Types.Skip
    sessionToken: string
    expires: Date | string
    requires2FA: boolean
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string | $Types.Skip
    sessionToken: string
    expires: Date | string
    requires2FA: boolean
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean | $Types.Skip
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[] | $Types.Skip
    OR?: SessionScalarWhereInput[] | $Types.Skip
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[] | $Types.Skip
    id?: StringFilter<"Session"> | string | $Types.Skip
    sessionToken?: StringFilter<"Session"> | string | $Types.Skip
    userId?: StringFilter<"Session"> | string | $Types.Skip
    expires?: DateTimeFilter<"Session"> | Date | string | $Types.Skip
    requires2FA?: BoolFilter<"Session"> | boolean | $Types.Skip
  }

  export type ImageCreateManyClassifiedInput = {
    id?: number | $Types.Skip
    alt: string
    src: string
    blurhash: string
    isMain?: boolean | $Types.Skip
  }

  export type CustomerCreateManyClassifiedInput = {
    id?: number | $Types.Skip
    firstName: string
    lastName: string
    email: string
    mobile?: string | null | $Types.Skip
    bookingDate?: Date | string | null | $Types.Skip
    termAccepted?: boolean | $Types.Skip
    status?: $Enums.CustomerStatus | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type ImageUpdateWithoutClassifiedInput = {
    alt?: StringFieldUpdateOperationsInput | string | $Types.Skip
    src?: StringFieldUpdateOperationsInput | string | $Types.Skip
    blurhash?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isMain?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
  }

  export type ImageUncheckedUpdateWithoutClassifiedInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    alt?: StringFieldUpdateOperationsInput | string | $Types.Skip
    src?: StringFieldUpdateOperationsInput | string | $Types.Skip
    blurhash?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isMain?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
  }

  export type ImageUncheckedUpdateManyWithoutClassifiedInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    alt?: StringFieldUpdateOperationsInput | string | $Types.Skip
    src?: StringFieldUpdateOperationsInput | string | $Types.Skip
    blurhash?: StringFieldUpdateOperationsInput | string | $Types.Skip
    isMain?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
  }

  export type CustomerUpdateWithoutClassifiedInput = {
    firstName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    lastName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    mobile?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    bookingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    termAccepted?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    status?: EnumCustomerStatusFieldUpdateOperationsInput | $Enums.CustomerStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    lifecycle?: CustomerLifecycleUpdateManyWithoutCustomerNestedInput | $Types.Skip
  }

  export type CustomerUncheckedUpdateWithoutClassifiedInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    firstName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    lastName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    mobile?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    bookingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    termAccepted?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    status?: EnumCustomerStatusFieldUpdateOperationsInput | $Enums.CustomerStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    lifecycle?: CustomerLifecycleUncheckedUpdateManyWithoutCustomerNestedInput | $Types.Skip
  }

  export type CustomerUncheckedUpdateManyWithoutClassifiedInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    firstName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    lastName?: StringFieldUpdateOperationsInput | string | $Types.Skip
    email?: StringFieldUpdateOperationsInput | string | $Types.Skip
    mobile?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    bookingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null | $Types.Skip
    termAccepted?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
    status?: EnumCustomerStatusFieldUpdateOperationsInput | $Enums.CustomerStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type CustomerLifecycleCreateManyCustomerInput = {
    id?: number | $Types.Skip
    oldStatus: $Enums.CustomerStatus
    newStatus: $Enums.CustomerStatus
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type CustomerLifecycleUpdateWithoutCustomerInput = {
    oldStatus?: EnumCustomerStatusFieldUpdateOperationsInput | $Enums.CustomerStatus | $Types.Skip
    newStatus?: EnumCustomerStatusFieldUpdateOperationsInput | $Enums.CustomerStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type CustomerLifecycleUncheckedUpdateWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    oldStatus?: EnumCustomerStatusFieldUpdateOperationsInput | $Enums.CustomerStatus | $Types.Skip
    newStatus?: EnumCustomerStatusFieldUpdateOperationsInput | $Enums.CustomerStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type CustomerLifecycleUncheckedUpdateManyWithoutCustomerInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    oldStatus?: EnumCustomerStatusFieldUpdateOperationsInput | $Enums.CustomerStatus | $Types.Skip
    newStatus?: EnumCustomerStatusFieldUpdateOperationsInput | $Enums.CustomerStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ModelCreateManyMakeInput = {
    id?: number | $Types.Skip
    name: string
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type ClassifiedCreateManyMakeInput = {
    id?: number | $Types.Skip
    views?: number | $Types.Skip
    slug: string
    vrm?: string | null | $Types.Skip
    title?: string | null | $Types.Skip
    description?: string | null | $Types.Skip
    year: number
    odoReading?: number | $Types.Skip
    doors?: number | $Types.Skip
    seats?: number | $Types.Skip
    price?: number | $Types.Skip
    modelId: number
    modelVariantId: number
    ulezCompliance?: $Enums.ELEZCompliance | $Types.Skip
    transmission?: $Enums.Transmission | $Types.Skip
    colour?: $Enums.Colour | $Types.Skip
    fuelType?: $Enums.FuelType | $Types.Skip
    bodyType?: $Enums.BodyType | $Types.Skip
    odoUnit?: $Enums.OdoUnit | $Types.Skip
    currency?: $Enums.CurrencyCode | $Types.Skip
    status?: $Enums.ClassifiedStatus | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type ModelUpdateWithoutMakeInput = {
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    modelVariants?: ModelVariantUpdateManyWithoutModelNestedInput | $Types.Skip
    classifieds?: ClassifiedUpdateManyWithoutModelNestedInput | $Types.Skip
  }

  export type ModelUncheckedUpdateWithoutMakeInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    modelVariants?: ModelVariantUncheckedUpdateManyWithoutModelNestedInput | $Types.Skip
    classifieds?: ClassifiedUncheckedUpdateManyWithoutModelNestedInput | $Types.Skip
  }

  export type ModelUncheckedUpdateManyWithoutMakeInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ClassifiedUpdateWithoutMakeInput = {
    views?: IntFieldUpdateOperationsInput | number | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    vrm?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    title?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    year?: IntFieldUpdateOperationsInput | number | $Types.Skip
    odoReading?: IntFieldUpdateOperationsInput | number | $Types.Skip
    doors?: IntFieldUpdateOperationsInput | number | $Types.Skip
    seats?: IntFieldUpdateOperationsInput | number | $Types.Skip
    price?: IntFieldUpdateOperationsInput | number | $Types.Skip
    ulezCompliance?: EnumELEZComplianceFieldUpdateOperationsInput | $Enums.ELEZCompliance | $Types.Skip
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | $Types.Skip
    colour?: EnumColourFieldUpdateOperationsInput | $Enums.Colour | $Types.Skip
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | $Types.Skip
    bodyType?: EnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType | $Types.Skip
    odoUnit?: EnumOdoUnitFieldUpdateOperationsInput | $Enums.OdoUnit | $Types.Skip
    currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode | $Types.Skip
    status?: EnumClassifiedStatusFieldUpdateOperationsInput | $Enums.ClassifiedStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    model?: ModelUpdateOneRequiredWithoutClassifiedsNestedInput | $Types.Skip
    modelVariant?: ModelVariantUpdateOneWithoutClassifiedsNestedInput | $Types.Skip
    images?: ImageUpdateManyWithoutClassifiedNestedInput | $Types.Skip
    customers?: CustomerUpdateManyWithoutClassifiedNestedInput | $Types.Skip
  }

  export type ClassifiedUncheckedUpdateWithoutMakeInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    views?: IntFieldUpdateOperationsInput | number | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    vrm?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    title?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    year?: IntFieldUpdateOperationsInput | number | $Types.Skip
    odoReading?: IntFieldUpdateOperationsInput | number | $Types.Skip
    doors?: IntFieldUpdateOperationsInput | number | $Types.Skip
    seats?: IntFieldUpdateOperationsInput | number | $Types.Skip
    price?: IntFieldUpdateOperationsInput | number | $Types.Skip
    modelId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    modelVariantId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    ulezCompliance?: EnumELEZComplianceFieldUpdateOperationsInput | $Enums.ELEZCompliance | $Types.Skip
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | $Types.Skip
    colour?: EnumColourFieldUpdateOperationsInput | $Enums.Colour | $Types.Skip
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | $Types.Skip
    bodyType?: EnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType | $Types.Skip
    odoUnit?: EnumOdoUnitFieldUpdateOperationsInput | $Enums.OdoUnit | $Types.Skip
    currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode | $Types.Skip
    status?: EnumClassifiedStatusFieldUpdateOperationsInput | $Enums.ClassifiedStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    images?: ImageUncheckedUpdateManyWithoutClassifiedNestedInput | $Types.Skip
    customers?: CustomerUncheckedUpdateManyWithoutClassifiedNestedInput | $Types.Skip
  }

  export type ClassifiedUncheckedUpdateManyWithoutMakeInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    views?: IntFieldUpdateOperationsInput | number | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    vrm?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    title?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    year?: IntFieldUpdateOperationsInput | number | $Types.Skip
    odoReading?: IntFieldUpdateOperationsInput | number | $Types.Skip
    doors?: IntFieldUpdateOperationsInput | number | $Types.Skip
    seats?: IntFieldUpdateOperationsInput | number | $Types.Skip
    price?: IntFieldUpdateOperationsInput | number | $Types.Skip
    modelId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    modelVariantId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    ulezCompliance?: EnumELEZComplianceFieldUpdateOperationsInput | $Enums.ELEZCompliance | $Types.Skip
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | $Types.Skip
    colour?: EnumColourFieldUpdateOperationsInput | $Enums.Colour | $Types.Skip
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | $Types.Skip
    bodyType?: EnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType | $Types.Skip
    odoUnit?: EnumOdoUnitFieldUpdateOperationsInput | $Enums.OdoUnit | $Types.Skip
    currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode | $Types.Skip
    status?: EnumClassifiedStatusFieldUpdateOperationsInput | $Enums.ClassifiedStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ModelVariantCreateManyModelInput = {
    id?: number | $Types.Skip
    name: string
    yearStart: number
    yearEnd: number
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type ClassifiedCreateManyModelInput = {
    id?: number | $Types.Skip
    views?: number | $Types.Skip
    slug: string
    vrm?: string | null | $Types.Skip
    title?: string | null | $Types.Skip
    description?: string | null | $Types.Skip
    year: number
    odoReading?: number | $Types.Skip
    doors?: number | $Types.Skip
    seats?: number | $Types.Skip
    price?: number | $Types.Skip
    makeId: number
    modelVariantId: number
    ulezCompliance?: $Enums.ELEZCompliance | $Types.Skip
    transmission?: $Enums.Transmission | $Types.Skip
    colour?: $Enums.Colour | $Types.Skip
    fuelType?: $Enums.FuelType | $Types.Skip
    bodyType?: $Enums.BodyType | $Types.Skip
    odoUnit?: $Enums.OdoUnit | $Types.Skip
    currency?: $Enums.CurrencyCode | $Types.Skip
    status?: $Enums.ClassifiedStatus | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type ModelVariantUpdateWithoutModelInput = {
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    yearStart?: IntFieldUpdateOperationsInput | number | $Types.Skip
    yearEnd?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    classifieds?: ClassifiedUpdateManyWithoutModelVariantNestedInput | $Types.Skip
  }

  export type ModelVariantUncheckedUpdateWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    yearStart?: IntFieldUpdateOperationsInput | number | $Types.Skip
    yearEnd?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    classifieds?: ClassifiedUncheckedUpdateManyWithoutModelVariantNestedInput | $Types.Skip
  }

  export type ModelVariantUncheckedUpdateManyWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    name?: StringFieldUpdateOperationsInput | string | $Types.Skip
    yearStart?: IntFieldUpdateOperationsInput | number | $Types.Skip
    yearEnd?: IntFieldUpdateOperationsInput | number | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ClassifiedUpdateWithoutModelInput = {
    views?: IntFieldUpdateOperationsInput | number | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    vrm?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    title?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    year?: IntFieldUpdateOperationsInput | number | $Types.Skip
    odoReading?: IntFieldUpdateOperationsInput | number | $Types.Skip
    doors?: IntFieldUpdateOperationsInput | number | $Types.Skip
    seats?: IntFieldUpdateOperationsInput | number | $Types.Skip
    price?: IntFieldUpdateOperationsInput | number | $Types.Skip
    ulezCompliance?: EnumELEZComplianceFieldUpdateOperationsInput | $Enums.ELEZCompliance | $Types.Skip
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | $Types.Skip
    colour?: EnumColourFieldUpdateOperationsInput | $Enums.Colour | $Types.Skip
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | $Types.Skip
    bodyType?: EnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType | $Types.Skip
    odoUnit?: EnumOdoUnitFieldUpdateOperationsInput | $Enums.OdoUnit | $Types.Skip
    currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode | $Types.Skip
    status?: EnumClassifiedStatusFieldUpdateOperationsInput | $Enums.ClassifiedStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    make?: MakeUpdateOneRequiredWithoutClassifiedsNestedInput | $Types.Skip
    modelVariant?: ModelVariantUpdateOneWithoutClassifiedsNestedInput | $Types.Skip
    images?: ImageUpdateManyWithoutClassifiedNestedInput | $Types.Skip
    customers?: CustomerUpdateManyWithoutClassifiedNestedInput | $Types.Skip
  }

  export type ClassifiedUncheckedUpdateWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    views?: IntFieldUpdateOperationsInput | number | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    vrm?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    title?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    year?: IntFieldUpdateOperationsInput | number | $Types.Skip
    odoReading?: IntFieldUpdateOperationsInput | number | $Types.Skip
    doors?: IntFieldUpdateOperationsInput | number | $Types.Skip
    seats?: IntFieldUpdateOperationsInput | number | $Types.Skip
    price?: IntFieldUpdateOperationsInput | number | $Types.Skip
    makeId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    modelVariantId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    ulezCompliance?: EnumELEZComplianceFieldUpdateOperationsInput | $Enums.ELEZCompliance | $Types.Skip
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | $Types.Skip
    colour?: EnumColourFieldUpdateOperationsInput | $Enums.Colour | $Types.Skip
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | $Types.Skip
    bodyType?: EnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType | $Types.Skip
    odoUnit?: EnumOdoUnitFieldUpdateOperationsInput | $Enums.OdoUnit | $Types.Skip
    currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode | $Types.Skip
    status?: EnumClassifiedStatusFieldUpdateOperationsInput | $Enums.ClassifiedStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    images?: ImageUncheckedUpdateManyWithoutClassifiedNestedInput | $Types.Skip
    customers?: CustomerUncheckedUpdateManyWithoutClassifiedNestedInput | $Types.Skip
  }

  export type ClassifiedUncheckedUpdateManyWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    views?: IntFieldUpdateOperationsInput | number | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    vrm?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    title?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    year?: IntFieldUpdateOperationsInput | number | $Types.Skip
    odoReading?: IntFieldUpdateOperationsInput | number | $Types.Skip
    doors?: IntFieldUpdateOperationsInput | number | $Types.Skip
    seats?: IntFieldUpdateOperationsInput | number | $Types.Skip
    price?: IntFieldUpdateOperationsInput | number | $Types.Skip
    makeId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    modelVariantId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    ulezCompliance?: EnumELEZComplianceFieldUpdateOperationsInput | $Enums.ELEZCompliance | $Types.Skip
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | $Types.Skip
    colour?: EnumColourFieldUpdateOperationsInput | $Enums.Colour | $Types.Skip
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | $Types.Skip
    bodyType?: EnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType | $Types.Skip
    odoUnit?: EnumOdoUnitFieldUpdateOperationsInput | $Enums.OdoUnit | $Types.Skip
    currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode | $Types.Skip
    status?: EnumClassifiedStatusFieldUpdateOperationsInput | $Enums.ClassifiedStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type ClassifiedCreateManyModelVariantInput = {
    id?: number | $Types.Skip
    views?: number | $Types.Skip
    slug: string
    vrm?: string | null | $Types.Skip
    title?: string | null | $Types.Skip
    description?: string | null | $Types.Skip
    year: number
    odoReading?: number | $Types.Skip
    doors?: number | $Types.Skip
    seats?: number | $Types.Skip
    price?: number | $Types.Skip
    makeId: number
    modelId: number
    ulezCompliance?: $Enums.ELEZCompliance | $Types.Skip
    transmission?: $Enums.Transmission | $Types.Skip
    colour?: $Enums.Colour | $Types.Skip
    fuelType?: $Enums.FuelType | $Types.Skip
    bodyType?: $Enums.BodyType | $Types.Skip
    odoUnit?: $Enums.OdoUnit | $Types.Skip
    currency?: $Enums.CurrencyCode | $Types.Skip
    status?: $Enums.ClassifiedStatus | $Types.Skip
    createdAt?: Date | string | $Types.Skip
    updatedAt?: Date | string | $Types.Skip
  }

  export type ClassifiedUpdateWithoutModelVariantInput = {
    views?: IntFieldUpdateOperationsInput | number | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    vrm?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    title?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    year?: IntFieldUpdateOperationsInput | number | $Types.Skip
    odoReading?: IntFieldUpdateOperationsInput | number | $Types.Skip
    doors?: IntFieldUpdateOperationsInput | number | $Types.Skip
    seats?: IntFieldUpdateOperationsInput | number | $Types.Skip
    price?: IntFieldUpdateOperationsInput | number | $Types.Skip
    ulezCompliance?: EnumELEZComplianceFieldUpdateOperationsInput | $Enums.ELEZCompliance | $Types.Skip
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | $Types.Skip
    colour?: EnumColourFieldUpdateOperationsInput | $Enums.Colour | $Types.Skip
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | $Types.Skip
    bodyType?: EnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType | $Types.Skip
    odoUnit?: EnumOdoUnitFieldUpdateOperationsInput | $Enums.OdoUnit | $Types.Skip
    currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode | $Types.Skip
    status?: EnumClassifiedStatusFieldUpdateOperationsInput | $Enums.ClassifiedStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    make?: MakeUpdateOneRequiredWithoutClassifiedsNestedInput | $Types.Skip
    model?: ModelUpdateOneRequiredWithoutClassifiedsNestedInput | $Types.Skip
    images?: ImageUpdateManyWithoutClassifiedNestedInput | $Types.Skip
    customers?: CustomerUpdateManyWithoutClassifiedNestedInput | $Types.Skip
  }

  export type ClassifiedUncheckedUpdateWithoutModelVariantInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    views?: IntFieldUpdateOperationsInput | number | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    vrm?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    title?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    year?: IntFieldUpdateOperationsInput | number | $Types.Skip
    odoReading?: IntFieldUpdateOperationsInput | number | $Types.Skip
    doors?: IntFieldUpdateOperationsInput | number | $Types.Skip
    seats?: IntFieldUpdateOperationsInput | number | $Types.Skip
    price?: IntFieldUpdateOperationsInput | number | $Types.Skip
    makeId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    modelId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    ulezCompliance?: EnumELEZComplianceFieldUpdateOperationsInput | $Enums.ELEZCompliance | $Types.Skip
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | $Types.Skip
    colour?: EnumColourFieldUpdateOperationsInput | $Enums.Colour | $Types.Skip
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | $Types.Skip
    bodyType?: EnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType | $Types.Skip
    odoUnit?: EnumOdoUnitFieldUpdateOperationsInput | $Enums.OdoUnit | $Types.Skip
    currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode | $Types.Skip
    status?: EnumClassifiedStatusFieldUpdateOperationsInput | $Enums.ClassifiedStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    images?: ImageUncheckedUpdateManyWithoutClassifiedNestedInput | $Types.Skip
    customers?: CustomerUncheckedUpdateManyWithoutClassifiedNestedInput | $Types.Skip
  }

  export type ClassifiedUncheckedUpdateManyWithoutModelVariantInput = {
    id?: IntFieldUpdateOperationsInput | number | $Types.Skip
    views?: IntFieldUpdateOperationsInput | number | $Types.Skip
    slug?: StringFieldUpdateOperationsInput | string | $Types.Skip
    vrm?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    title?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    description?: NullableStringFieldUpdateOperationsInput | string | null | $Types.Skip
    year?: IntFieldUpdateOperationsInput | number | $Types.Skip
    odoReading?: IntFieldUpdateOperationsInput | number | $Types.Skip
    doors?: IntFieldUpdateOperationsInput | number | $Types.Skip
    seats?: IntFieldUpdateOperationsInput | number | $Types.Skip
    price?: IntFieldUpdateOperationsInput | number | $Types.Skip
    makeId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    modelId?: IntFieldUpdateOperationsInput | number | $Types.Skip
    ulezCompliance?: EnumELEZComplianceFieldUpdateOperationsInput | $Enums.ELEZCompliance | $Types.Skip
    transmission?: EnumTransmissionFieldUpdateOperationsInput | $Enums.Transmission | $Types.Skip
    colour?: EnumColourFieldUpdateOperationsInput | $Enums.Colour | $Types.Skip
    fuelType?: EnumFuelTypeFieldUpdateOperationsInput | $Enums.FuelType | $Types.Skip
    bodyType?: EnumBodyTypeFieldUpdateOperationsInput | $Enums.BodyType | $Types.Skip
    odoUnit?: EnumOdoUnitFieldUpdateOperationsInput | $Enums.OdoUnit | $Types.Skip
    currency?: EnumCurrencyCodeFieldUpdateOperationsInput | $Enums.CurrencyCode | $Types.Skip
    status?: EnumClassifiedStatusFieldUpdateOperationsInput | $Enums.ClassifiedStatus | $Types.Skip
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
  }

  export type SessionCreateManyUserInput = {
    id?: string | $Types.Skip
    sessionToken: string
    expires: Date | string
    requires2FA: boolean
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    sessionToken?: StringFieldUpdateOperationsInput | string | $Types.Skip
    expires?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    requires2FA?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    sessionToken?: StringFieldUpdateOperationsInput | string | $Types.Skip
    expires?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    requires2FA?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string | $Types.Skip
    sessionToken?: StringFieldUpdateOperationsInput | string | $Types.Skip
    expires?: DateTimeFieldUpdateOperationsInput | Date | string | $Types.Skip
    requires2FA?: BoolFieldUpdateOperationsInput | boolean | $Types.Skip
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}