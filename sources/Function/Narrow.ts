import {Extends} from '../Any/Extends'
import {If} from '../Any/If'
import {Narrowable} from './_Internal'

/**
 * @hidden
 */
type NarrowRaw<A> =
| A
| (A extends Narrowable ? A : never)
| ({[K in keyof A]: NarrowRaw<A[K]>})

/**
 * Prevent type widening on generic function parameters
 * @param A to narrow
 * @returns `A`
 * @example
 * ```ts
 * import {F} from 'ts-toolbelt'
 *
 * declare function foo<A extends any[]>(x: F.Narrow<A | []>): A;
 * declare function bar<A extends object>(x: F.Narrow<A>): A;
 *
 * const test0 = foo(['e', 2, true, {f: ['g', ['h']]}])
 * // `A` inferred : ['e', 2, true, {f: ['g']}]
 *
 * const test1 = bar({a: 1, b: 'c', d: ['e', 2, true, {f: ['g']}]})
 * // `A` inferred : {a: 1, b: 'c', d: ['e', 2, true, {f: ['g']}]}
 * ```
 */
type Narrow<A extends any> =
    NarrowRaw<If<Extends<A, any[]>, A | [], A>>

export {Narrow}
