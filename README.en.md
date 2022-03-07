## tsc-cmd ##
[中文](https://github.com/zgj233/tsc-cmd/master/README.md)
> A terminal that monitors TypeScript files, and compiles automatically when it changes.

### why？ ###
With typescript command-line tools, you can only run TS files, but can't return results in real time after a TS file has been modified.
So I made this little plugin.

### To prepare ###
You need to install TypeScript globally because my plugin also uses TypeScript to compile TS files.
```cmd
npm install typescript -g
```
### How to use ###
```cmd
tsc-cmd -w ../some_Dir/some_file.ts
```
**ps.** When you run this command.

A js file with the same name will be compiled in the same directory as the files you monitor.

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2022-present, zgj233
