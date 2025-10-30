# 基于 Vite 构建的 vue3 模板

## 项目简介

vue-temp 是基于 Vue 3 搭建的前端模板项目，旨在快速搭建前端项目。采用现代化的前端技术栈，具备良好的可扩展性。

## 技术栈

- **前端框架**: Vue 3.5.22
- **UI 组件库**: Element Plus 2.11.5
- **路由管理**: Vue Router 4.0
- **状态管理**: Pinia 3.0.3
- **HTTP 客户端**: Axios 1.13.1
- **构建工具**: Vite 7.1.7
- **样式预处理**: TailwindCSS 4.1.16, Sass 1.93.2

## 项目结构

```
wms-frontend/
├── src/                          # 源代码目录
│   ├── api/                      # API接口定义
│   ├── assets/                   # 静态资源
│   ├── components/               # 公共组件
│   ├── layout/                   # 布局组件
│   ├── router/                   # 路由配置
│   ├── store/                    # Vuex状态管理
│   ├── utils/                    # 工具函数
│   ├── view/                     # 页面组件
│   └── styles/                   # 样式文件
├── library/                      # 自定义组件库
├── public/                       # 公共静态资源
├── deploy/                       # 部署配置
│   ├── docker/                   # Docker相关配置
│   └── k8s/                      # Kubernetes配置
└── build/                        # 构建配置
```

## 安装部署

### 环境要求

- Node.js >= 22.15.0
- npm >= 10.9.2 或 yarn >= 10.7.1
- Docker (可选，用于容器化部署)

### 本地开发

1. **克隆项目**

```bash
git clone http://github.com/isDuiker/vue-temp.git
cd vue-temp
```

2. **安装依赖**

```bash
nvm use 22

npm install
# 或
pnpm install
```

3. **启动开发服务器**

```bash
npm run dev
# 或
pnpm dev
```

4. **访问应用**
   打开浏览器访问 `http://localhost:8080`

### 构建生产版本

```bash
# 构建项目
npm run build
# 或
pnpm build

# 构建并预览
npm run build -- --mode preview
```

### Docker 部署

1. **构建 Docker 镜像**

```bash
npm run docker
```

2. **使用 Docker Compose 部署**

```bash
cd deploy/docker
docker-compose up -d
```

3. **Kubernetes 部署**

```bash
kubectl apply -f deploy/k8s/whdc-web.yaml
```

## 开发指南

### 代码规范

- 遵循 ESLint 和 Prettier 配置
- 使用中文注释说明关键功能和复杂逻辑
- 按功能模块组织代码，保持单一职责原则
- 异步操作需添加错误处理和加载状态

### 组件开发

项目采用组件化开发模式，包含以下组件类型：

- **业务组件**: 位于`src/components/`目录
- **布局组件**: 位于`src/layout/`目录
- **自定义组件**: 位于`library/components/`目录

### API 调用

- API 接口定义在`src/api/`目录
- 使用统一的 HTTP 客户端进行接口调用
- 支持请求拦截、响应拦截和错误处理

### 状态管理

- 使用 Vuex 进行全局状态管理
- 状态模块化组织，位于`src/store/`目录
- 支持持久化存储和状态重置

## 脚本命令

| 命令             | 说明             |
| ---------------- | ---------------- |
| `npm run serve`  | 启动开发服务器   |
| `npm run build`  | 构建生产版本     |
| `npm run lint`   | 代码检查         |
| `npm run clean`  | 清理构建文件     |
| `npm run format` | 代码格式化       |
| `npm run docker` | 构建 Docker 镜像 |

## 贡献指南

1. Fork 项目到你的 GitHub 仓库
2. 创建功能分支：`git checkout -b feature/新功能名`
3. 提交更改：`git commit -m 'feat: 添加新功能'`
4. 推送分支：`git push origin feature/新功能名`
5. 创建 Pull Request

### 提交信息规范

- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

**注意**: 请在使用前仔细阅读相关文档，确保符合使用要求。
