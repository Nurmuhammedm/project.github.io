document.addEventListener("DOMContentLoaded", function() {
    // Получаем все заголовки новостей
    var newsHeadlines = document.querySelectorAll("#latest-news h3");

    // Добавляем обработчик события для каждого заголовка
    newsHeadlines.forEach(function(headline) {
        headline.addEventListener("click", function() {
            // Получаем родительский элемент li, чтобы изменять его класс
            var newsItem = this.parentNode;

            // Переключаем класс для отображения/скрытия деталей новости
            newsItem.classList.toggle("expanded");
        });
    });
});
