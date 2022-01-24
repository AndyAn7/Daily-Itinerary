$('#currentDay').text(moment().format('MMM Do YYYY'));
$('#currentTime').text(moment().format('LT'));

var itineraryTime = moment().startOf('day').add(12, 'hour');
var hourly = moment().format('H');

for(var i = 6; i < 18; i++) {
    var hourlyPlan = itineraryTime.add(1, 'hour').format('hh:mm A')
    var ItineraryState;
}