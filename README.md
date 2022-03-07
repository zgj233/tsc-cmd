## tsc-cmd ##
[English](https://github.com/zgj233/tsc-cmd/master/README.en.md)
> 一个监视TypeScript文件的终端，当文件发生变化时自动编译

### why？ ###
光有 typescript 命令行工具，只能运行 ts文件，但是无法在ts 文件修改之后实时返回结果。
所以我做了这个小插件

### 使用前提 ###
你需要全局安装 TypeScript, 因为我这个插件也是使用 TypeScript 来编译的ts文件
```cmd
npm install typescript -g
```
### 使用方法 ###
```cmd
tsc-cmd -w ../some_Dir/some_file.ts
```
**备注：** tsc-cmd 会在你监控文件的同级目录下面，编译出一个同名的js文件

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2022-present, zgj233
