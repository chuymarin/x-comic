$( document ).ready(function() {

    $('.prev').click(function(e){
        e.preventDefault();

        issue = $('#issue');
        container = $('#container');
        page = $('.page-active');
        prevPage = $(page).prev();
        frame = $(page).find('.frame-active');
        prevFrame = $(frame).prev();
        nextFrame = $(frame).next();
        duration = 500;

        if ($(page).hasClass('page-20')) {
            duration = 3000;
        }

        if (prevFrame.length <= 0 && prevPage.length > 0) {
            $(page).removeClass('page-active');
            $(prevPage).addClass('page-active');
            prevFrame = $(prevPage).find('.frame').last();
            $(prevFrame).addClass('frame-active');
            page = $('.page-active');
        }

        $(nextFrame).removeAttr('style');

        issueData = {
            backgroundColor: prevFrame.attr('data-issue-background')
        }
        console.log(issueData);

        containerData = {
            'width': prevFrame.attr('data-container-width'),
            'height': prevFrame.attr('data-container-height'),
            'top': prevFrame.attr('data-container-top'),
            'left': prevFrame.attr('data-container-left')
        }

        pageData = {
            'top': prevFrame.attr('data-page-top'),
            'left': prevFrame.attr('data-page-left')
        }

        $(issue).animate(issueData, duration);
        $(container).animate(containerData, duration);
        $(page).animate(pageData, duration);
        $(frame).removeClass('frame-active');
        $(prevFrame).addClass('frame-active');

        frame = $(page).find('.frame-active');
        prevFrame = $(frame).prev();
        nextFrame = $(frame).next();
        prevPage = $(page).prev();

        if (prevFrame.length <= 0 && prevPage.length <= 0) {
            $('.prev').hide();
        }

        if (nextFrame.length) {
            $('.next').show();
        }

    });

    $('.next').click(function(e){
        e.preventDefault();

        issue = $('#issue');
        container = $('#container');
        page = $('.page-active');
        nextPage = $(page).next();
        frame = $(page).find('.frame-active');
        nextFrame = $(frame).next();
        prevFrame = $(frame).prev();
        duration = 500;

        if ($(page).hasClass('page-20')) {
            duration = 3000;
        }

        if (nextFrame.length <= 0 && nextPage.length > 0) {
            $(page).removeClass('page-active');
            $(nextPage).addClass('page-active');
            nextFrame = $(nextPage).find('.frame').first();
            $(nextFrame).addClass('frame-active');
            page = $('.page-active');
        }

        $(prevFrame).removeAttr('style');

        issueData = {
            backgroundColor: nextFrame.attr('data-issue-background')
        }
        console.log(issueData);

        containerData = {
            'width': nextFrame.attr('data-container-width'),
            'height': nextFrame.attr('data-container-height'),
            'top': nextFrame.attr('data-container-top'),
            'left': nextFrame.attr('data-container-left')
        }

        pageData = {
            'top': nextFrame.attr('data-page-top'),
            'left': nextFrame.attr('data-page-left')
        }

        $(issue).animate(issueData, duration);
        $(container).animate(containerData, duration);
        $(page).animate(pageData, duration);
        $(frame).removeClass('frame-active');
        $(nextFrame).addClass('frame-active');

        frame = $(page).find('.frame-active');
        nextFrame = $(frame).next();
        prevFrame = $(frame).prev();
        nextPage = $(page).next();

        if (nextFrame.length <= 0 && nextPage.length <= 0) {
            $('.next').hide();
        }

        if (prevFrame.length > 0) {
            $('.prev').show();
        }

    });

    $("body").keydown(function(e) {
        if(e.which == 37) {
            $(".prev").trigger("click");
        } else if(e.which == 39) {
            $(".next").trigger("click");
        }
    });

});
