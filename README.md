# - Smart Moving -

**Gifや画像 を添付**

**引越しが Smart に管理できるアプリケーションです。**

初めての引越し。初めての土地。そんな「初めて」の不安をまとめて管理！

引越しの「何をやればいい？」「いつまでに終わればいい？」を解決する！
引越しのお手伝いをし Smart に終わらすことがコンセプトのアプリケーションです。

### ※夜間・土日は停止しています。

URL : [Smart Moving](https://portfolio-three-dusky-33.vercel.app)

Test User : test@test.com

## Target users
初めての引越しなどで「何をすればいいか」や「何をしなければいけなかったか」など悩む人
引越しに関する情報などを一つにまとめておきたい人

## Functions

（以下 例）
飲食店検索機能
飲食店をランダムで9件表示します。
気分に合わせて洋食・和食・中華などの絞り込みが行えます。
予算に合わせて絞り込みが行えます。
現在の位置情報を利用しても絞り込みが行えます。
マップを指定しても絞り込みが行えます。（住所から検索・マップを動かして指定可） 飲食店サーチ動画

コメント機能
コメントが投稿・削除が出来ます。
コメントへのイイね・削除が出来ます。
コメントに画像を添付してアップロード出来ます。 コメント・削除機能

お気に入り機能
いつか行きたい、行ってよかったお店をお気に入りに登録・削除出来ます。
過去にしたお気に入りを全て表示出来ます。

訪問機能
行ったことがあるお店を登録・削除出来ます。
過去に行ったことがあるお店を全て表示出来ます。 お気に入り・訪問機能

プロフィール機能
ユーザーを登録、プロフィールを編集・削除出来ます。
ユーザー画像をアップロード出来ます。
プロフィール画面で、直近お気に入り・行ったことがある・コメントしたお店を表示出来ます。
プロフィール画面で、直近行ったことがあるお店のマップを表示出来ます。

タグ機能
プロフィールで登録したユーザーにタグ情報を付与出来ます。
飲食店に紐づけられたタグ情報を検索出来ます。
ログインユーザー以外が過去に入力したタグを入力時にレコメンド出来ます。
選択飲食店以外の他のユーザーが過去に入力したタグを入力時にレコメンド出来ます。 プロフィール画面・ユーザタグ検索

検索機能
ユーザーに紐づけられたタグ情報を検索出来ます。
飲食店に紐づけられたタグ情報を検索出来ます。
ユーザーネームからユーザーを検索出来ます。

フォロー機能
ユーザー同士でフォロー・フォロー解除出来ます。
相互フォローだった場合、アイコンがつきます。
フォローしている人が直近お気に入りしたお店りがレコメンドされます。
フォローしている人が直近訪れたお店がレコメンドされます。 

フォロー機能・インビテーション機能
フォローしているユーザーに招待状を送れます。

通知機能
フォローされていると、プロフィールアイコンに新着バッジがつきます。
プロフィールページ閲覧時にリアルタイムで通知が消滅します。
インビテーションが来ていると、インビテーションアイコンに新着バッジがつきます。
インビテーションページ閲覧時にリアルタイムで通知が消滅します。 

管理画面機能(active admin利用)
DBの閲覧・操作が可能です。各テーブルで可能な機能は下記記載。
Users: View/Edit/Destroy
UserTags: View/Edit/Destroy/Create
Notifications: View/Edit
Comments: View/Edit/Destroy
CommentFavorite: View
Favorites: View
VisitedShops: View
FollowRelationships: View
Invitations: View/Destroy
ShopTags: View/Edit/Destroy/Create
LoggedShops: View/Edit/Destroy

## Selling points
- Next.jsを用いてSPAを実現。
- UIUX・デザインにこだわり、より少ない導線・心地よい使用感でのサービス提供の実現。
- レスポンシブデザインに対応している。
- 外部API（HotPepperAPI、GoogleAPI、firebase）を用いて機能を実現している。

## Architecture

インフラ構成 / ER図をいれる

## Technology used
（以下 例）

### Infrastructure
vercel

### Infrastructure As Code

### CI/CD

### Frontend
- node:12.5.0
- React.js
- Typescript
- Next.js:2.12.2
- MUI Material-UI

### Backend
Firebase / Authentication, Firestore Database,

### IDE
Visual Studio Code
