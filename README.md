# 组件库模版

基于[xs-components-lib](https://github.com/jsxiaosi/xs-components-lib)搭建的vue3+TS组件库。

## 安装使用

- 获取项目代码（https or ssh）

```bash
git clone https://github.com/xmweijh/xm-components.git

git clone git@github.com:xmweijh/xm-components.git
```


- 安装依赖

```bash
npm install --legacy-peer-deps
```

### Developer

- 组件库调试

```bash
npm run dev
```

- 运行 VitePress 文档

```bash
npm run docs:dev
```

- 创建组件模板

```bash
npm run ct '组件名称'
```

## 单元测试

模版内置了vitest，通过`npm run ct`创建的组件默认会在组件的目录下创建一个名为`__tests__`的目录，里面有一个简单的测试模版

测试命令：

``` bash
# 运行test测试
npm run test
# 覆盖率输出
npm run test:coverage
```


### Production

- 打包组件库

```bash
npm run build
```

- 打包 VitePress 文档

```bash
npm run docs:build
```

## 使用教程
运行`npm run docs:dev`即可查看使用教程

## Git 提交规范

- 参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范

  - `feat` 新增功能
  - `fix` 修复缺陷
  - `docs` 文档变更
  - `style` 代码格式
  - `refactor` 代码重构
  - `perf` 性能优化
  - `test` 添加疏漏测试或已有测试改动
  - `build` 构建流程、外部依赖变更 (如升级 npm 包、修改打包配置等)
  - `ci` 修改 CI 配置、脚本
  - `revert` 回滚 commit
  - `chore` 对构建过程或辅助工具和库的更改 (不影响源文件)
  - `wip` 正在开发中
  - `types` 类型定义文件修改

- 或使用指令提交

```bash
npm run cz
```

### 规范相关

- [EsLint](https://eslint.org/) - js 语法检测
- [StyleLint](https://stylelint.io/) - 样式语法检测
- [CommitLint](https://commitlint.js.org/#/) - git commit 提交规范检测

## 目录

```bash
.
├── LICENSE
├── README.md
├── build
├── commitlint.config.js
├── docs                                # vitepress文档目录
├── effect                              # 调试模板
├── lib
├── node_modules
├── package-lock.json
├── package.json
├── packages                            # 公共组件目录
│   ├── components                      # 组件存放目录
│   ├── hooks                           # hooks存放目录
│   ├── theme-default                   # 组件样式存放目录
│   ├── utils                           # 公共方法存放目录
├── postcss.config.js
├── prettier.config.js
├── script
├── stylelint.config.js
├── tsconfig.json
└── typings
```

## License

[MIT © 2022](./LICENSE)
