$(document).ready(function(){


/* Обработчик выбранной даты */
$(function(){
	$(".datepicker-here").datepicker({
		onSelect: function(date){
			$('#datepicker_value').val(date)
		}
	});
	$(".datepicker-here").datepicker("setDate", $('#datepicker_value').val());

});

/* Локализация datepicker */

$.fn.datepicker.language['ru'] =  {
    days: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
    daysShort: ['Вос','Пон','Вто','Сре','Чет','Пят','Суб'],
    daysMin: ['Su','Mo','Tu','We','Th','Fr','Sa'],
    months: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
    monthsShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
    today: 'Сегодня',
    clear: 'Очистить',
    dateFormat: 'yyyy.mm.dd',
    timeFormat: 'hh:ii',
    firstDay: 1
};


});