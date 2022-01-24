$('#currentDay').text(moment().format('MMM Do YYYY'));
$('#currentTime').text(moment().format('LT'));

var itineraryTime = moment().startOf('day').add(12, 'hour');
var hourly = moment().format('H');

for(var i = 6; i < 18; i++) {
    var hourlyPlan = itineraryTime.add(1, 'hour').format('hh:mm A')
    var ItineraryState;

if (hourly < i) {
    ItineraryState = 'past';
} else if (hourly == i) {
    ItineraryState = 'present';
} else if (hourly > i) {
    ItineraryState = 'future';
}

var containerClasses =
`<container class="row" id='hour-${i}'>
<div class="col-2"></div>
<div class="hour w-25 p-4 col-1">${hourlyPlan}</div>
<textarea class="description w-50 p-4 col-6 ${ItineraryState} hour-${i}"></textarea>
<button class="save w-25 p-4 col-1 fas fa-save fa-2x"></button>
<div class="col-2"></div>  
</container>
<p></p>`;

$("#all").append(containerClasses);
};

$('.save').on('click', function () {
    var valSib = $(this).siblings('.description').val();
    var timePar = $(this).parent().attr('id');
    localStorage.setItem(timePar, valSib);
});

// for (var i = 6; i < 18; i++) {
//     $('#hour-${i}').val(localStorage.getItem('hour-${i}'));
// }