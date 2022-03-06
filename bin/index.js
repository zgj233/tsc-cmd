#!/usr/bin/env node
const {Command} = require('commander');
const program = new Command();
const {exec} = require('child_process');
const fs = require('fs');
const path = require('path');
/*
* 获取文件信息
* */
const getFileStats = fileName => {
  return new Promise((resolve, reject) => {
    fs.stat(fileName, (err, stats) => {
      if (err) return reject(err);
      if (!stats.isFile()) return reject('这不是一个文件')
      resolve(stats)
    })
  })
}

const execNewFile = (pathArgs, printArr) => {
  const temp = exec(`node ${pathArgs}`);
  temp.stdout.on('data', data => {
    printArr.splice(0);
    console.log(data)
  })
}

const watchFile = pathArgs => {
  const dirname = path.dirname(pathArgs);
  const fileName = path.basename(pathArgs);
  const a = fileName.split('.');
  if (a[1] !== 'ts') {
    console.log('这不是.ts文件');
    return;
  }

  console.log(`开始监控：` + fileName)
  const newFile = path.resolve(dirname, a[0] + '.js');

  // 是否是才启动项目
  let times = 3;  // tsc -w 触发监听的次数 （第一次开始监控文件的时候会触发3次，后面每次文件改变之后触发2次）
  const printArr = [];
  const child = exec(`tsc -w ${pathArgs}`);
  // 监听运行是否出错
  child.stderr.on('data', err => {
    console.error(err)
  })

  // 运行成功
  child.stdout.on('data', data => {
    if (printArr.length < times) {
      console.log(data);
      printArr.push('1');
    }
    if (printArr.length === times) {
      execNewFile(newFile, printArr);
      if (times === 3) times = 2;
    }
  })
}


async function run(fileName) {
  try {
    await getFileStats(fileName);
    watchFile(fileName)
  } catch (err) {
    console.log(err)
  }
}


program
  .option('-w, --watch <fileName>', '监控.ts 文件,每当修改后,自动编译运行')
  .parse(process.argv)

const options = program.opts();

if (options.watch) {
  const fileName = options.watch;
  run(fileName)
}