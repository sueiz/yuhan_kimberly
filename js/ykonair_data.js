$(function () {
    $.ajax({
        url: '/ykonair_data.xml',
        type: 'GET',
        success: function (ykonair_data) {
            console.log('성공');

            var news = '',
                type, kind, imgSrc, title, url;

            function funList(code) {
                news = '';
                $(ykonair_data).find('item').each(function () {

                    type = $(this).find('type').text();
                    kind = $(this).find('kind').text();
                    imgSrc = $(this).find('imgSrc').text();
                    title = $(this).find('title').text();
                    url = $(this).find('url').text();

                    title = title.substr(0, 25);
                    title = title.replace(title, title + '...');

                    if (code == type || code == 'all') {
                    news += "<figure>";
                    news += "<a href='" + url + "'>";
                    news += "<i><img src='" + kind + "' alt=''></i>";
                    news += "<p><img src='" + imgSrc + "' alt=''></p>";
                    news += "<figcaption>";

                    news += "<p>" + title + "</p>";
                    news += "</figcaption>";
                    news += "</a>";
                    news += "</figure>";
                    }
                })
                $('.onair_list').html(news);
            }
            funList('all');

            $('.onair_tab ul li').eq(0).addClass('active');
            $('.onair_tab ul li').on('click',function(e){
                e.preventDefault();
                var type = $(this).children('a').attr('href');
                console.log(type);
                funList(type);

                $('.onair_tab ul li').removeClass('active');
                $(this).addClass('active');
            })
        }
    })
});