/* tslint:disable:use-default-type-parameter */

import {Test, C} from '../src/index'

const {checks, check} = Test

// ///////////////////////////////////////////////////////////////////////////////////////
// CLASS /////////////////////////////////////////////////////////////////////////////////

// ---------------------------------------------------------------------------------------
// INSTANCEOF

class TestClass {}

checks([
    check<C.InstanceOf<typeof TestClass>,   TestClass,          Test.Pass>(TestClass),
    check<C.InstanceOf<typeof TestClass>,   TestClass,          Test.Pass>(new TestClass()),
])

// ---------------------------------------------------------------------------------------
// PROMISEOF

checks([
    check<C.PromiseOf<Promise<TestClass>>,  TestClass,  Test.Pass>(),
])
