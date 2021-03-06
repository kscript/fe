---
title: 前端基础篇之js
date: 2016-12-15
tags:
 - 前端
 - js
categories: 
 - 前端
---
简单概述js的一些基础概念。
<!-- more -->
## js是什么?
js的全称是JavaScript, 是一种解释型、弱类型的脚本语言。  
当js运行于浏览器环境时, 用于给用户提供一些交互效果, 提升用户体验, 其用途包括:  
表单验证、网页内容控制、音频/视频控制、2D/3D动画、响应用户事件、与服务器端交互等。

## js有哪些基本要素?

- 数据类型
- 变量
- 表达式和运算符
- 语句和声明
- 函数
- 内置对象
- ...

## 数据类型
js中的数据类型分为: 基本类型 和 引用类型 两种。基本类型存放于栈内存, 引用类型存放于堆内存。  
- 值类型(基本类型):   
字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol、BigInt。  
- 引用数据类型:   
对象(Object)、数组(Array)、函数(Function)。

> Symbol 是 ES6 引入了一种新的原始数据类型，表示独一无二的值。  
  BigInt 是尚处于标准化阶段的新类型, 表示比Number数据类型支持的范围更大的整数值(>2^53 - 1)
::: tip 兼容性提示
    在使用 Symbol、BigInt 类型时, 需考虑其兼容性
:::

## 变量
变量是什么? 变量，就是一个用于存放值的容器。
变量的使用可以参考示例:
``` js
var name = 'tom';
var age = 20;
```

### 变量声明
---
- **var** 声明一个变量，可同时将其初始化为一个值。
- **let** 声明一个块级本地变量，可同时将其初始化为一个值。
- **const** 声明一个只读的命名常量。
::: tip 关于const声明的常量的说明
常量可以理解为是不可变的变量  
引用类型的不可变是指: 指向堆内存的引用地址不可变
:::

### 变量名
---

一般使用以下四种进行组合:
- 大小写字母
- $
- _
- 数字0到9

**需要注意的是**:
- 数字不能为第一位
- 变量区分大小写
- 不能使用[关键字和保留字](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Lexical_grammar#%E5%85%B3%E9%94%AE%E5%AD%97)
- 尽量可读、有意义

详细的命名规则说明参见: [关于变量命名的规则](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/First_steps/Variables#关于变量命名的规则)

### 变量值的类型
---
参考[数据类型](#数据类型)。

## 表达式和运算符
### 算术运算符
>算术运算符以数值（字面量或变量）作为其操作数，并返回一个单个数值。标准算术运算符是加法（+），减法（-），乘法（*）和除法（/）。
- 加减乘除 +-*/
- 取余 %
- 递增 ++
- 递减 --
- 幂 **
---
    + 除了用于数值求和, 还可用于连接字符串  
    ++ 和 -- 在前置/后置时, 得到的结果会有所不同.  
    前置表示: 先运算再返回值, 后置表示: 先返回值再运算. 例如
    var a = 1;
    var b = 1;
    alert(++a); // 弹出2, a最终的值是2
    alert(b++); // 弹出1, b最终的值也是2
---
### 按位操作符
>按位操作符（Bitwise operators） 将其操作数（operands）当作32位的比特序列（由0和1组成），而不是十进制、十六进制或八进制数值。例如，十进制数9，用二进制表示则为1001。按位操作符操作数字的二进制形式，但是返回值依然是标准的JavaScript数值。
- 按位与 &
- 按位或 |
- 按位异或 ^
- 左移 <<
- 有符号右移 \>>
- 无符号右移 \>>>
### 赋值运算符  
>基本的赋值运算符是等号（=），该运算符把它右边的运算值赋给左边。即，x = y 把 y 的值赋给 x。 其他的赋值运算符通常是标准运算符的简写形式  
- 赋值 =
- 加赋值 += 减赋值 -= 乘赋值 *= 除赋值 /= 
- 模赋值 %=
- 指数赋值 **=
- 左移赋值 <<= 右移赋值 >>=
- 无符号右移赋值 >>>=
- 按位与赋值 &=
- 按位或赋值 |=
- 按位异或赋值 ^=
---
    =以外的运算符, 可以看做 运算并赋值的简写形式. 如:
    var a = 1;  
    a += 2;  
    相当于 a = a + 2  
---
详细说明参见: [赋值运算符概述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#概述)
### 逻辑运算符
> 逻辑运算符通常用于布尔型（逻辑）值。这种情况下，它们返回一个布尔值。然而，&& 和 || 运算符会返回一个指定操作数的值，因此，这些运算符也用于非布尔值。这时，它们也就会返回一个非布尔型值。
- 逻辑与&&
- 逻辑或||
- 逻辑非!

    **短路计算**  
    js中逻辑表达式的运算顺序是从左到右的, 如果表达式满足其中一条  
    - 逻辑运算符&&左侧结果为false  
    - 逻辑运算符||左侧结果为true  

    那么由于已经不满足继续向右判定的条件, 导致其右侧的表达式将被忽略不再执行, 造成短路, 此时直接返回左侧结果(不一定是布尔类型)

        逻辑或|| 通常被用来设定 参数/变量/对象属性 的默认值  
        但在使用过程中需要注意: 如果想要默认值为true时, 用||将无法得到false  
        var a = false;
        var b = true;
        var c = a || true; // c的最终值是true
        var d = b || true; // d是最终值也是true

### 比较操作符
>JavaScript 有两种比较方式：严格比较运算符和转换类型比较运算符。对于严格比较运算符（===）来说，仅当两个操作数的类型相同且值相等为 true，而对于被广泛使用的比较运算符（==）来说，会在进行比较之前，将两个操作数转换成相同的类型。对于关系运算符（比如 <=）来说，会先将操作数转为原始值，使它们类型相同，再进行比较运算。
- 相等 =
- 不相等 !=
- 严格相等 ===
- 严格不相等 !==

- 大于 >
- 大于等于 >=
- 小于 <
- 小于等于 <=

::: tip 需要注意的点  
1. 严格比较和转换类型比较的区别在于:  
  严格比较时, **不会对操作数进行类型转换**, 而转换类型比较时, **会进行类型转换**  
2. 比较引用类型时, 比较的是**引用指向的内存地址**  
    [] === [] // 引用指向的内存地址不一样, 返回false  
3. NaN和任何值(包括其自身)都不相等, 请使用isNaN判断 (也可以利用前面的特性, 比较自身)  
4. +0 和 -0 在严格比较时返回 true
5. 使用[Object.is](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is)进行比较时, NaN与其自身的比较结果为true, +0和-0的比较结果为false
:::
关于转换类型比较时的各种比较结果, 参见: [非严格相等](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Equality_comparisons_and_sameness#%E9%9D%9E%E4%B8%A5%E6%A0%BC%E7%9B%B8%E7%AD%89)

## 语句和声明

## 函数

## 内置对象

## 浏览器API
