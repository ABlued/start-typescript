# 타입스크립트 연습

### 타입스크립트 시작하는 방법

1. yarn init -y 또는 npm init -y
2. 타입스크립트 설정파일 생성하기
   <br>
   <br>
   직접 입력 방법 : tscofig.json을 만든 후 그 위에 아래의 코드처럼 입력한다.

```
// tscofig.json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true
  }
}
```

혹은 자동으로 생성

```
(터미널 입력) yarn global add typescript ->
(터미널 입력) tsc --init ->
```

### tsconfig.json 안에 기본 속성들 설명

<br>

> - target: 컴파일된 코드가 어떤 환경에서 실행될 지 정의합니다. 예를들어서 화살표 함수를 > 사용하고 target 을 es5 로 한다면 일반 function 키워드를 사용하는 함수로 변환을 해줍니다. 하지만 이를 es6 로 설정한다면 화살표 함수를 그대로 유지해줍니다.
>   <br> > <br>
> - module: 컴파일된 코드가 어던 모듈 시스템을 사용할지 정의합니다. 예를 들어서 이 값을 common 으로 하면 `export default Sample` 을 하게 됐을 때 컴파일 된 코드에서는 `exports.default = helloWorld` 로 변환해주지만 이 값을 es2015 로 하면 `export default Sample` 을 그대로 유지하게 됩니다.
>   <br> > <br>
> - strict: 모든 타입 체킹 옵션을 활성화한다는 것을 의미합니다.
>   <br> > <br>
> - esModuleInterop: commonjs 모듈 형태로 이루어진 파일을 es2015 모듈 형태로 불러올 수 있게 해줍니다.

3. tsconfig.json에 outDir 추가하기
   <br>

`outdir`은 컴파일된 파일들이 저장되는 경로를 지정할 수 있습니다.

```
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "outDir": "./dist"      //추가
  }
}
```

4. 기본적인 타입스크립트 파일 만들기

```
// src/practice.ts
const message: string = 'hello world';
console.log(message);
```

이렇게 입력한 후 터미널에 `tsc` 명령어를 입력하면<br>
dist/practics.js 가 추가되며 그 안에 코드는 이와 같다.

```
"use strict";
var message = 'hello world';
console.log(message);
```
