#!/usr/bin/env node
const { Command } = require('commander');
const program = new Command();


program
  .command('init <templateName> [envs...]') // 创建命令 <> 必填参数 [] 选填参数 ... 可接收多个
  .alias('i') // 命令取别名
  .description('this is a init command') // 命令的描述
  .option('-j, --jade', 'this is a jade option') // 该命令相关的选项配置
  .action((templateName, envs, cmdObj) => {
    console.log(templateName);
    console.log(envs); // 如果有命令两个参数 第二个参数就是该变量。 如果没有第二个参数 且包含 option 选项配置的时候 第二个参数就是 command 本身
  });

program.parse(process.argv);