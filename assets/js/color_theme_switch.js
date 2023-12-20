function change_color_theme() {
    const body = document.body;
    const currentTheme = body.getAttribute('color_theme');

    if (currentTheme === 'dark') {
        body.setAttribute('color_theme', 'light');
    } else {
        body.setAttribute('color_theme', 'dark');
    }

    // 添加调用更新主题样式的函数（例如 updateThemeStyles()）
    // 这个函数需要根据当前的主题切换相应的样式
    updateThemeStyles();
}

// 添加一个更新主题样式的函数
function updateThemeStyles() {
    const body = document.body;
    const currentTheme = body.getAttribute('color_theme');
    const themeToggle = document.getElementById('theme-toggle');

    // 根据当前主题切换样式
    if (currentTheme === 'dark') {
        // 切换为浅色主题样式
        themeToggle.innerHTML = '<span class="material-symbols-outlined">light_mode</span>';
        // 添加切换样式的其他逻辑...
    } else {
        // 切换为深色主题样式
        themeToggle.innerHTML = '<span class="material-symbols-outlined">dark_mode</span>';
        // 添加切换样式的其他逻辑...
    }
}

// 页面加载时初始化主题样式
document.addEventListener('DOMContentLoaded', function () {
    updateThemeStyles();
});