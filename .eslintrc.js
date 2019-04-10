module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['plugin:vue/essential', '@vue/prettier'],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'prettier/prettier': [
			'error',
			{
				singleQuote: true, //（使用单引号，默认false);
				trailingComma: 'all', //（多行使用拖尾逗号，默认none）;
				printWidth: 180, //（每行代码长度，默认80）;
				tabWidth: 4, //（每个tab代表多少空格）;
				useTabs: true, //（是否使用tab作为缩进，默认false）;
				semi: false, //（声明结尾是用分号）;
				breaketSpace: true, //（对象自变量的大括号间使用空格，默认为true）;
				jsxBreaketSameLine: true, //（多行jsx的>放在最后一行的末尾，不另起一行，默认false）;
				arrowParens: 'avoid', //(只有一个参数的箭头函数的参数是否带圆括号);
			},
		],
		'no-multiple-empty-lines': [2, { max: 2 }], //空行最多不能超过两行

		'no-irregular-whitespace': 2, //不允许出现不规则的空格

		'no-new': 'off', // 禁止在使用new构造一个实例后不赋值
		'space-before-function-paren': 'off', // 函数定义时括号前面不要有空格

		camelcase: [2, { properties: 'always' }], //强制驼峰命名规则

		'brace-style': [2, '1tbs', { allowSingleLine: false }], //大括号风格

		'no-var': 1, //使用let和const代替var

		'no-extra-parens': 2, //禁止不必要的括号

		'no-eval': 2, //禁止使用eval（）

		'no-unused-expressions': 2, //禁止无用的表达式
		'array-bracket-spacing': [2, 'never'], //是否允许非空数组里面有多余的空格
		'lines-around-comment': 0, //行前/行后备注
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
}
