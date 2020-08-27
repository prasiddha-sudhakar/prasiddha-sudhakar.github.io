var aboutPosition = $("#about").offset().top;

$(function() {
  $(".about-link").on('click', function() {
    var aboutPosition = $("#about").offset().top;
    $("HTML, BODY").animate({
      scrollTop: aboutPosition
    }, 1000);
  });
});


var educationPosition = $("#education").offset().top;

$(function() {
  $(".education-link").on('click', function() {
    var educationPosition = $("#education").offset().top;
    $("HTML, BODY").animate({
      scrollTop: educationPosition
    }, 1000);
  });
});

var experiencePosition = $("#experience").offset().top;

$(function() {
  $(".experience-link").on('click', function() {
    var experiencePosition = $("#experience").offset().top;
    $("HTML, BODY").animate({
      scrollTop: experiencePosition
    }, 1000);
  });
});

var skillsPosition = $("#skills").offset().top;

$(function() {
  $(".skills-link").on('click', function() {
    var skillsPosition = $("#skills").offset().top;
    $("HTML, BODY").animate({
      scrollTop: skillsPosition
    }, 1000);
  });
});


var projectsPosition = $("#projects").offset().top;

$(function() {
  $(".projects-link").on('click', function() {
    var projectsPosition = $("#projects").offset().top;
    $("HTML, BODY").animate({
      scrollTop: projectsPosition
    }, 1000);
  });
});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

// Scrollspy
$(document).ready(function(){

  var sectionIds = $('a.nav-link');

    $(document).scroll(function(){
        sectionIds.each(function(){

            var container = $(this).attr('href');
            var containerOffset = $(container).offset().top;
            var containerHeight = $(container).outerHeight();
            var containerBottom = containerOffset + containerHeight;
            var scrollPosition = $(document).scrollTop();

            if(scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20){
                $(this).addClass('active');
            } else{
                $(this).removeClass('active');
            }


        });
    });



});
