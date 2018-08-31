$(document).foundation()

// more click
$('.card-profile-stats-more-link').click(function(e){
  e.preventDefault();
  if ( $(".card-profile-stats-more-content").is(':hidden') ) {
    $('.card-profile-stats-more-link').find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
  } else {
    $('.card-profile-stats-more-link').find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
  }
  $(this).next('.card-profile-stats-more-content').slideToggle();
});

$('[data-open-details]').click(function (e) {
  e.preventDefault();
  $(this).next().toggleClass('is-active');
  $(this).toggleClass('is-active');
});

var ctx = document.getElementById("myRaderChart");
var myRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
    labels: ['自分', '他者', '社会'],
    datasets: [{
        label:"貢献度",
        data: [20, 10, 4, 2]
    }]
}
});