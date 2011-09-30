contactSuccess
==============

 `contacts.find` メソッドの実行に成功した場合に呼び出されるコールバック関数です。

    function(contacts) {
        // 処理を記述
    }

パラメータ
----------

- __contacts:__ 作成される連絡先情報がセットされた配列 (`Contact`)

使用例
-------

    function contactSuccess(contacts) {
		for (var i=0; i<contacts.length; i++) {
			console.log("表示名 = " + contacts[i].displayName;
    }