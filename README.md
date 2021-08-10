# README

## アプリケーション名
NRPG

## アプリケーション概要
TRPGのようなコミュニケーション型RPGを体験できる。

## URL
https://nrpg-session.herokuapp.com/

## テスト用アカウント
- test1 → Email: test1@test, Password: testuser1
- test2 → Email: test2@test, Password: testuser2

## 利用方法
プレイしたい相手を選んで部屋を作成し、会話をしながら思い思いのシナリオを進めていく。
バトルありのシナリオを進める場合は戦闘を行う。

## 目指した課題解決
チャットルームごとにキャラクターを作成することができ、シナリオ、戦闘、システムメッセージ全てが該当ルーム内の処理で完結すること。

## 実装した機能
- チャットをする機能
- チャットルームを作成、削除する機能
- ルームごとに使用するキャラクターを作成する機能

## 実装予定の機能
- 戦闘が発生したときダメージ計算を行い、計算結果が出力される機能
- 作成したキャラクターに切り替えてチャットをする機能
- GM(ゲームマスター)をボットで行う機能、エピソードログの記録、NPCの実装

## ローカルでの動作方法
以下のコマンドを実行
git clone https://github.com/Akifumi-Tsukada/nrpg-session

# データベース設計

## users テーブル

| Column    | Type    | Options     |
| --------  | ------  | ----------- |
| name      | string  | null: false |
| email     | string  | null: false |
| password  | string  | null: false |

### Association

- has_many :room_users
- has_many :rooms, through: room_users
- has_many :messages
- has_many :charas

## rooms テーブル

| Column    | Type    | Options     |
| --------  | ------  | ----------- |
| name      | string  | null: false |

### Association

- has_many :room_users
- has_many :users, through: room_users
- has_many :messages 
- has_many :charas

## room_users テーブル

| Column    | Type       | Options                       |
| --------  | ---------- | ----------------------------- |
| user      | references | null: false,foreign_key: true |
| room      | references | null: false,foreign_key: true |

### Association

- belongs_to :room
- belongs_to :user

## messages テーブル

| Column    | Type       | Options                       |
| --------  | ---------- | ----------------------------- |
| content   | string     | null: false,foreign_key: true |
| user      | references | null: false,foreign_key: true |
| room      | references | null: false,foreign_key: true |

### Association

- belongs_to :room
- belongs_to :user

## charas テーブル

| Column    | Type       | Options                       |
| --------  | ---------- | ----------------------------- |
| name      | string     | null: false                   |
| job       | string     |                               |
| magic     | string     |                               |
| hitpoint  | integer    |                               |
| attack    | integer    |                               |
| defence   | integer    |                               |
| escape    | integer    |                               |
| room      | references | null: false,foreign_key: true |
| user      | references | null: false,foreign_key: true |

### Association

- belongs_to :room
- belongs_to :user
- has_one_attached :image
