#!/usr/bin/env node
const { Command } = require('commander');
const program = new Command();
const { exec } = require('child_process');
const fs = require('fs');
/*
* 获取文件信息
* */
const getFileStats = (fileName)=>{
  return new Promise((resolve, reject) => {
    fs.stat(fileName, (err, stats)=> {
      if (err) return reject(err);
      if (!stats.isFile()) return reject('这不是一个文件')
      resolve(stats)
    })
  })
}


const watchFile = fileName => {
  const a = fileName.split('.');
  if (a[1] !== 'ts'){
    console.log('这不是.ts文件');
    return;
  }

  console.log(`开始监控：` + fileName)
  const newFile = a[0] + '.js';
  const child = exec(`concurrently "tsc -w ${fileName}" "nodemon ${newFile}"`)
  child.stdout.on('data',  data => {
    console.log(data)
  })
}

program
  .option('-w, --watch <fileName>', '监控.tsc 文件,每当修改后,自动编译运行')
  .parse(process.argv)

const options = program.opts();

if (options.watch){
  const fileName = options.watch;
  run(fileName)
};


async function run(fileName){
  try {
    await getFileStats(fileName);
    watchFile(fileName)
  }catch (err){
    console.log(err)
  }
}
