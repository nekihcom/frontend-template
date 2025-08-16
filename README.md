# Frontend Template

このプロジェクトは、モダンなフロントエンドアプリケーションを迅速に開発するためのテンプレートです。
Next.js をベースに、TypeScript、Tailwind CSS、shadcn/ui、Storybook、Vitest などの最新技術スタックを組み合わせています。

## 概要

このテンプレートには以下の技術が統合されています：
- **Framework** - Next.js 15(App Router)
- **Language** - Typescript
- **Styling** - Tailwind CSS v4
- **UI Components** - shadcn/ui
- **UI Calatalog** - Storybook
- **Test** - Vitest

## 導入方法

### 1. リポジトリのクローン

```bash
git clone <このリポジトリのURL>
cd frontend-template
```

### 2. 依存関係のインストール

```bash
npm install
```

### 3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いて結果を確認してください。

## 使い方

### 開発の開始

メインページは `src/app/page.tsx` を編集することで変更できます。ファイルを編集すると自動的にページが更新されます。

### コンポーネントの作成

新しいコンポーネントは `src/components/` ディレクトリに作成してください。

**例: Sample コンポーネント**
```tsx
// src/components/sample/Sample.tsx
import { Button } from "@/components/ui/button";

type Props = {
  name: string;
}

const Sample = ({ name }: Props) => {
  return (
    <>
      <Button variant="destructive">Destructive</Button>
      <h1>Hello, {name}</h1>
    </>
  )
}

export default Sample;
```

### テストの実行

#### 単体テストの実行
```bash
# 全テストの実行
npm run test

# テストの監視モード
npm run test:watch

# カバレッジレポートの生成
npm run test:coverage
```

**テストの例:**
```tsx
// src/test/Sample.test.tsx
import { render, screen } from "@testing-library/react";
import Sample from "@/components/sample/Sample";

describe("Hello component", () => {
  it("renders with given name", () => {
    render(<Sample name="Mochiken" />);
    expect(screen.getByText("Hello, Mochiken")).toBeInTheDocument();
  });
});
```

### Storybook の使用

#### Storybook の起動
```bash
npm run storybook
```

ブラウザで [http://localhost:6006](http://localhost:6006) を開いて Storybook を確認してください。

#### ビルド
```bash
npm run build-storybook
```

**Story ファイルの例:**
```tsx
// src/stories/Circle.stories.tsx
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Circle from './Circle';

const meta: Meta<typeof Circle> = {
  component: Circle,
  title: 'Example/Circle',
  argTypes: {
    variant: {
      control: "select",
      options: ['orange', 'green', 'yellow'],
    },
  },
  tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseCircle: Story = {
  args: {
    variant: 'orange',
  },
};
```

### UI コンポーネント（shadcn/ui）

shadcn/ui のコンポーネントは `src/components/ui/` ディレクトリに配置されています。

```tsx
import { Button } from "@/components/ui/button";

// 使用例
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
```

新しい shadcn/ui コンポーネントを追加する場合：
```bash
npx shadcn@latest add <component-name>
```

## 利用可能なスクリプト

| スクリプト | 説明 |
|---|---|
| `npm run dev` | 開発サーバーの起動（Turbopack 使用） |
| `npm run build` | 本番用ビルド |
| `npm run start` | 本番サーバーの起動 |
| `npm run lint` | ESLint による静的解析 |
| `npm run test` | Vitest によるテスト実行 |
| `npm run test:watch` | テストの監視モード |
| `npm run test:coverage` | テストカバレッジの生成 |
| `npm run storybook` | Storybook 開発サーバーの起動 |
| `npm run build-storybook` | Storybook のビルド |

## プロジェクト構成

```
src/
├── app/                 # Next.js App Router ページ
├── components/          # 再利用可能なコンポーネント
│   ├── sample/         # サンプルコンポーネント
│   └── ui/             # shadcn/ui コンポーネント
├── lib/                # ユーティリティ関数
├── stories/            # Storybook ストーリー
└── test/               # テストファイル
```

## 追加の学習リソース

- [Next.js Documentation](https://nextjs.org/docs) - Next.js の機能と API について
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - CSS フレームワークについて
- [shadcn/ui Documentation](https://ui.shadcn.com/) - UI コンポーネントライブラリについて
- [Storybook Documentation](https://storybook.js.org/docs) - コンポーネント開発について
- [Vitest Documentation](https://vitest.dev/) - テストフレームワークについて

## デプロイ

最も簡単なデプロイ方法は、Next.js の作成者による [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) を使用することです。

詳細については [Next.js デプロイメントドキュメント](https://nextjs.org/docs/app/building-your-application/deploying) を確認してください。