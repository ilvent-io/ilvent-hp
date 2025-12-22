# プロジェクトルール & ガイドライン

このドキュメントは **Ilvent HP** プロジェクトのアーキテクチャおよびコーディング規約を定義するものです。
Antigravity（および他の開発者）は、このルールに従って開発を行います。

## 1. 技術スタック

- **Core**: React, Next.js
- **Styling**: styled-components
- **State Management**: React Context / Hooks (必要に応じて機能ごとに外部ライブラリを検討)
- **Language**: TypeScript

## 2. アーキテクチャ: Bulletproof React

[Bulletproof React](https://github.com/alan2207/bulletproof-react) のアーキテクチャを Next.js 向けに調整して採用します。

### ディレクトリ構造

```
src/
  components/       # 共有コンポーネント (Buttons, Inputs, Layouts など)
  config/           # 環境変数や設定オブジェクト
  features/         # 機能ベースのモジュール (アプリケーションの中核)
    Auth/
      api/          # APIリクエスト定義
      components/   # この機能スコープ内のコンポーネント
      hooks/        # この機能スコープ内のHooks
      routes/       # ルートコンポーネント (Pages routerの場合) または page.tsx (App router)
      types/        # この機能スコープ内の型定義
      index.ts      # 機能のエントリーポイント
  hooks/            # 複数の機能で使用される共有Hooks
  lib/              # ライブラリの再エクスポート (Axios など) と設定
  providers/        # アプリケーションプロバイダー (Theme, Auth など)
  stores/           # グローバルステートストア (必要な場合)
  types/            # 共有 TypeScript 型定義
  utils/            # 共有ユーティリティ関数
  styles/           # グローバルスタイルとテーマ定義
```

## 3. コーディング規約

### スタイリング (styled-components)

- すべてのコンポーネントのスタイリングに `styled-components` を使用してください。
- インラインスタイル (`style={{ ... }}`) は避けてください。
- `src/styles/theme.ts` でグローバルテーマを定義し、色、スペーシング、フォントにはそれを使用してください。
- 例:
  ```tsx
  const Container = styled.div`
    padding: ${({ theme }) => theme.spacing.md};
    background-color: ${({ theme }) => theme.colors.background};
  `;
  ```

### コンポーネント構造

- 関連するファイル（スタイル、テスト、型定義）は可能な限りコンポーネントと同じ場所に配置するか、機能（features）フォルダ構造に厳密に従ってください。
- インポートをきれいにするため、各フォルダの `index.ts` からコンポーネントをエクスポートしてください。

### Next.js 固有のルール

- ルーティングには App Router (`app/` ディレクトリ) を使用してください。
- `styled-components` が Server Components で正しく動作するように設定してください（`next.config.js` の compiler options と registry の設定）。
