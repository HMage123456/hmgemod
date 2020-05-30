HMage Mod
===============================================

Minecraft Java Edition for ver1.2.2 

HMage Modについて
------
HMage ModはShotbowのAnnihilationを有意義に遊ぶために開発されたModです。
ノックバックの調整やAimアシストなどのPVPが有利になる機能は一切実装されていません。
詳細な機能については、「機能紹介」を御覧ください。

また、HMage ModはMinecraft 1.2.2のForge用Modです。Forge以外のClientでは利用することができません。


機能仕様
------
ゲーム中に「p」キーを押すことでメニューを開くことができます。
メニューの詳細は以下の通りです。

 * HMage Mod: 
    * HMage Modを完全に無効にします。
 * MatchHistory: (開発中)
    * Annihilationの試合の履歴を閲覧します。
 * HideRecipeBook:
    * レシピブックを無効にできます。「enable」を選択した場合は、インベントリ内のレシピブックをクリックしてもレシピブックが開きません。
 * DisableSpeedFOV: 
    * スピードエフェクト効果時に、視野が広くならないようにします。
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
    * 他のプレイヤーのキル数をプレイ中の画面に表示します。ShotbowのAnnihilationをプレイ中の場合のみ表示されます。
 * NexusDamageHUD: (開発中)
    * ネクサスダメージ数を表示します。ShotbowのAnnihilationをプレイ中の場合のみ表示されます。
 * Cape: 
    * 自身が装備するCape(マント)を選択できます。ここで選択したCapeは他のプレイヤーには表示されません。
 * Aim Game: 
    * Aim力を鍛えるゲーム (same as Shoot)をプレイします。Annihilationの待ち時間を有効に使いたい場合などどうぞ。

コマンド仕様
------
 * /name <mcid>
   * 指定したプレイヤーのmcid変更履歴を表示します。`<mcid>`には現在のmcidを指定する必要があります。

 通信仕様
------
HMage Modでは以下の外部通信が発生します。HMage Modでは下記以外の通信を行うことはありません。他のModやMinecraftクライアント本体はその限りではありません。
 * github.com
   * Mod起動時に特定プレイヤーのCape情報など、全Modで共有する情報をGithubから取得します。
 * api.mojang.com
   * nameコマンド実行時にMojang APIを実行し、mcidの変更履歴を取得します。   

