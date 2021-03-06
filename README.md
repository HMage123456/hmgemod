HMage Mod 
===============================================
ダウンロードは[こちらから](https://hmage123456.github.io/hmgemod/)

![Features](screenshots.png)

for Minecraft Java Edition ver 1.12.2 

HMage Modについて
------
HMage ModはShotbowのAnnihilationを有意義に遊ぶために開発されたModです。
ノックバックの調整やAimアシストなどのPVPが有利になる機能は一切実装されていません。
詳細な機能については、「機能仕様」を御覧ください。

また、HMage ModはMinecraft 1.12.2のForge用Modです。Forge以外のClientでは利用することができません。


機能仕様
------
ゲーム中に「P」キーを押すことでメニューを開くことができます。
メニューの詳細は以下の通りです。

 * HMage Mod: 
    * HMage Modを無効にします。
 * Match History:
    * Annihilationの試合の履歴を閲覧します。キル数やネクダメ数などを確認できます。
 * Layout of HUD:
    * HUDのレイアウトをカスタマイズできます。
 * HideRecipeBook:
    * レシピブックを無効にできます。「enable」を選択した場合は、インベントリ内のレシピブックをクリックしてもレシピブックが開きません。
 * DisableSpeedFOV: 
    * スピードエフェクト効果時に、視野が広くならないようにします。
 * CustomGuiBackground:   
    * GUIの背景色をカラーピッカーで選ぶことができます。
 * ArrowCountHUD:
    * インベントリ内の矢の本数をプレイ中の画面に表示します。
 * StatusEffectHUD:
    * ポーションエフェクトの残り効果時間をプレイ中の画面に表示します。
 * ArmorDurabilityHUD:
    * 防具と手持ちアイテムの耐久値をプレイ中の画面に表示します。
 * CpsCounter:
    * 1秒間当たりのクリック数を表示します。
 * AcroJumpHUD:
    * アクロジャンプの残り時間をプレイ中の画面に表示します。ShotbowのAnnihilationでアクロバットを選択している場合のみ表示されます。
 * KillCountHUD:
    * キル数をプレイ中の画面に表示します。ShotbowのAnnihilationをプレイ中の場合のみ表示されます。
 * NexusDamageHUD: 
    * ネクサスダメージ数を表示します。ShotbowのAnnihilationをプレイ中の場合のみ表示されます。
 * Cape: 
    * 自身が装備するCape(マント)を選択できます。ここで選択したCapeは他のプレイヤーには表示されません。
 * Aim Game: 
    * Aim力を鍛えるゲーム (same as Shoot)をプレイします。Annihilationの待ち時間を有効に使いたい場合などどうぞ。
 * Hurting Armor:
    * 敵を殴ったとき、敵の防具に色が付き分かりやすくなります。また、その色をカラーピッカーで選べます。

デフォルトの挙動の変更
------
HMage Modを導入することで変更になるデフォルトの挙動を紹介します。
 * 明るさの設定の変更
   * デフォルトに存在する「ビデオ設定」の「明るさ」のバーを調整することで、通常以上の明るさで画面を描画できるようになります。
 * 設定画面やインベントリのバックカラー
   * 設定画面やインベントリのバックカラーが透過されます。



コマンド仕様
------
HMage Modで使用できるコマンドを紹介します。
 * /name <mcid>
   * 指定したプレイヤーのmcid変更履歴を表示します。`<mcid>`には現在のmcidを指定する必要があります。


既存のバグ
------
HMage Modには以下のバグが存在します。
 * 現在は特になし。
 
バグを見つけた方は問い合わせから開発者に連絡を下さると助かります。GitHubを使える方はissueから報告してもらえるとありがたいです。

Global Cape
------
HMage Modを導入している場合、特定プレイヤーのCapeは通常のOptifine CapeやMinecon Capeとは別のものが表示されます。
```
例：プレイヤーAはMinecon Capeを持っていませんが、HMage Mod利用者からはプレイヤーAがMinecon Cape2013を設定しているように表示される。
```
HMage Modでは上記のようなCapeをGlobal Capeと呼んでいます。Global Capeの設定には開発者の手間が発生するため、通常利用者は設定することができません。


 通信仕様
------
HMage Modでは以下の外部通信が発生します。HMage Modでは下記以外の通信を行うことはありません。他のModやMinecraftクライアント本体はその限りではありません。
 * github.com
   * Global Cape情報など、全Modで共有する情報をMod起動時にGithubから取得します。
 * api.mojang.com
   * nameコマンド実行時にMojang APIを実行し、mcidの変更履歴を取得します。   

問い合わせ
------
何かありましたら以下の開発者までどうぞ。
 * Onimen ([Twitter](https://twitter.com/Onim_en))
 * Namiken ([Twitter](https://twitter.com/namiken1993))

ライセンス
------
* ソースコード：[MMPL-1.0](https://github.com/BuildCraft/BuildCraft/blob/6.1.x/buildcraft_resources/LICENSE.txt)
* リソース(assets)：CC-BY-NC
