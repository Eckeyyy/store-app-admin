module.exports = {
    // ...其他配置
    env: {
        browser: true,
        node: true // 告诉 ESLint 代码是在浏览器环境中运行的
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint', // 使用 Babel 解析器
    },
    plugins: ['vue'],
    extends: ['eslint:recommended', 'plugin:vue/recommended'],
    rules: {
        // 设置最大行长度为 100
        'max-len': ['error', { code: 300 }],
        // ...其他规则
    },
};
