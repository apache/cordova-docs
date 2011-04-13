contactFindOptions
==================

 `contacts.find` 関数で使用されるオプションのパラメータを表します。連絡先の検索時にフィルターをかける場合に使用します。

    { 
		filter: "",
		multiple: true,
		updatedSince: ""
	};

オプション
-------

- __filter:__ フィルターの検索文字列を指定します _(DOMString)_ (Default: "")
- __multiple:__ 検索時に複数の連絡先情報を返すかどうかを指定します _(Boolean)_ (デフォルト: true)
- __updatedSince:__ 指定した日付以降に更新された連絡先のみを返します _(Date)_ (デフォルト: "")

Android に関する注意点
----------
- __updatedSince:__ このプロパティは現在Androidではサポートされていません。

BlackBerry WebWorks に関する注意点
---------------------------------------------
- __updatedSince:__ このプロパティは現在BlackBerry WebWorksではサポートされていません。 