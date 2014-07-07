* * *

license: Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements. See the NOTICE file distributed with this work for additional information regarding copyright ownership. ASF は、Version 2.0 (「ライセンス」）; Apache ライセンスの下であなたにこのファイルをライセンスします。ライセンスに従う場合、このファイルを使用可能性があります。 You may obtain a copy of the License at

           http://www.apache.org/licenses/LICENSE-2.0
    
         Unless required by applicable law or agreed to in writing,
         software distributed under the License is distributed on an
         "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
         KIND, either express or implied.  See the License for the
         specific language governing permissions and limitations
    

## under the License.

# Windows Phone のアップグレード

このガイドは、コルドバの旧バージョンからアップグレードする、Windows Phone 8 プロジェクトを変更する方法を示します。 これらの手順のいくつか古いの前にあるコマンド ライン ツールのセットで作成されたプロジェクトに適用されます、 `cordova` CLI ユーティリティ。 CLI のバージョンを更新する方法については、コマンド ライン インターフェイス参照してください。 次のセクションは非 CLI プロジェクトからアップグレードする方法を示します。

## 3.1.0 から 3.2.0 にアップグレードします。

コルドバ CLI で作成されたプロジェクト。

1.  更新、 `cordova` CLI バージョン。コマンド ライン インターフェイスを参照してください。

2.  実行`cordova platform update wp8`

コルドバ CLI で作成されていないプロジェクトの場合に実行します。

        bin\update < project_path >
    

## 3.1.0 3.0.0 からアップグレードします。

コルドバ CLI で作成されたプロジェクト。

1.  更新、 `cordova` CLI バージョン。コマンド ライン インターフェイスを参照してください。

2.  実行`cordova platform update wp8`

コルドバ CLI で作成されていないプロジェクトの場合に実行します。

        bin\update < project_path >
    

## 2.9.0 から CLI (3.0.0) へのアップグレード

1.  コマンド ライン インターフェイスで説明されているようにコルドバ、CLI を使用して新しい Apache コルドバ 3.0.0 プロジェクトを作成します。

2.  たとえばコルドバ プロジェクトにあなたのプラットフォームを追加します。`cordova
platform add wp8`.

3.  プロジェクトの内容をコピー `www` ディレクトリを `www` で作成したコルドバ プロジェクトのルート ディレクトリ。

4.  コピーまたは元のプロジェクトから任意のネイティブの資産を上書き ( `SplashScreen` 、 `ApplicationIcon` 、等)、確かに新しいファイルを追加する、 `.csproj` ファイル。 携帯電話の窓の内部プロジェクトのビルドは `platforms\wp8` ディレクトリ。

5.  コルドバ CLI ツールを使用して、必要な任意のプラグインをインストールします。CLI が処理するすべてのコア Api のプラグインとして追加する必要がありますので注意してください。のみ 3.0.0 プラグインは CLI と互換性があります。

6.  ビルドおよびテストします。

## 2.x から (非 CLI) 3.0.0 にアップグレードします。

Visual Studio のソリューション エクスプ ローラー ウィンドウで次

1.  作成新しい Apache コルドバ WP8 3.0.0 プロジェクトします。

2.  内容をコピー、 `www` ディレクトリを新規プロジェクト対プロジェクトにこれらの項目を追加してください。

3.  コピーし、スプラッシュ スクリーンまたはアイコン イメージを上書きします。

4.  任意のプラグイン経由でのコピー、 `plugins` ディレクトリを新しいプロジェクトし、VS プロジェクトにも追加されることを確認します。

5.  ビルドおよびテストします。

**注**： すべてのコア Api コルドバは、バージョン 3.0 から削除され、別のプラグインとしてインストールする必要があります。 非 CLI ワークフローでこれらの機能を再度有効にする方法の詳細については、管理プラグインを使用して Plugman を参照してください。