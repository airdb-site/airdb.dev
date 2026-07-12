# airdb.dev — 研发门户

airdb 团队的研发门户（Astro 静态站点）：

- **对外（公开层）**：开发者文档、教程、资产台账，无需登录，可被索引；
- **对内（内部层）**：组件库、运维手册、CI/CD、管理后台等入口，统一跳转到 SSO 之后的子域，本站不做鉴权。

环境约定：**国内走 airdb.net（已备案），海外走 airdb.dev**（`.dev` 无法 ICP 备案，仅部署海外节点），两边系统一一对应。

## 开发

```bash
pnpm install
pnpm dev      # 或 make run
pnpm build    # 构建产物输出到 dist/，Netlify 使用相同命令
```

## 目录结构

- `src/config/portal.ts` — **系统台账与门户能力清单（域名/系统的权威来源，改这里）**
- `src/pages/index.astro` — 门户首页
- `src/pages/docs/` — 开发文档（中文，从 `portal.ts` 渲染环境约定 / 系统台账 / 能力状态）
- `src/layouts/ProductLayout.astro` — 站点外壳（导航 / 页脚 / SSO 入口）
- `src/styles/product.css` — 设计体系（paper/ink 配色，Fraunces + IBM Plex）
- `static/` — 静态资源（`publicDir`）

## 归档

原公益组织站点（Hugo 迁移内容、`content/` Markdown、BaseLayout 渲染链路）已整体移入
`archive/legacy-nonprofit/`，不参与构建。如需恢复参考，直接从该目录取。

从 airdb.io 复制来的 API 申请表单（`get-access/`）已移入 `archive/legacy-io-copy/`。
