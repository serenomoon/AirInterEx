


export const datepicker = () => {
    var dateFrom = null;
var dateTo = null;

$("#date1").val('06/10/2015');
$("#date2").val('10/10/2015');
var selectedDate = null;
var tempDateFrom = null;
var tempDateTo = null;
$(".datepicker").datepicker({
    minDate: 0,
    numberOfMonths: [2,1],
    defaultDate: '06/10/2015',
    beforeShowDay: function(date) {           
        dateFrom = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#date1").val());
        dateTo = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#date2").val());
        
        if(dateFrom != null){
            if(date.getTime() == dateFrom.getTime()){
                return [true,"dateFrom"];                     
            }
        }
        if(dateTo != null){
            if(date.getTime() == dateTo.getTime()){
                return [true,"dateTo"];
            } 
        }   
        return [true, dateFrom && ((date.getTime() == dateFrom.getTime()) || (dateTo && date >= dateFrom && date <= dateTo)) ? "dp-highlight" : ""];   
    },
    onSelect: function(dateText, inst) {
        console.log('onSelect');
        dateFrom = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#date1").val());
        dateTo = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $("#date2").val());
        selectedDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, dateText);               
        if (!dateFrom || dateTo) {
            $("#date1").val(dateText);
            $("#date2").val("");
            $(this).datepicker();
        } else if( selectedDate < dateFrom ) {
            $("#date2").val( $("#date1").val() );
            $("#date1").val( dateText );
            $(this).datepicker();
        } else {
            $("#date2").val(dateText);
            $(this).datepicker();
        }           
        setTimeout(function() {                
            highlightBetweenDates(); 
        }, 0); 
    },
    refresh: function() {
       alert('sdfdsf');
    }
});

var currentDate = null;
var allTds = null;

function highlightBetweenDates() {
    if(dateFrom == null || dateTo == null ){ 
        $(".ui-datepicker-calendar td").mouseover(function() {
            if(dateFrom != null && !$(this).hasClass('ui-datepicker-unselectable')){
                currentDate = $.datepicker.parseDate($.datepicker._defaults.dateFormat, $(this).children().text() + '/' + (parseInt($(this).attr('data-month'))+1) + '/' + parseInt($(this).attr('data-year')));
                if(currentDate != selectedDate){
                    if (selectedDate === null) {
                        selectedDate = new Date();
                    }
                    allTds = $('.ui-datepicker').find('td');            
                    allTds.removeClass('dp-highlight')
                    found = false;
                    if (currentDate < selectedDate) {
                        for (i = 0; i < allTds.length; i++) {
                            if (allTds[i] == this) {
                                found = true;
                            }
                            if ($(allTds[i]).hasClass('ui-datepicker-current-day')) {
                                break;
                            }
                            if (found) {
                                $(allTds[i]).addClass('dp-highlight');
                            }
                        }
                    } else if (currentDate > selectedDate) {
                        for (i = 0; i < allTds.length; i++) {
                            if (found) {
                                $(allTds[i]).addClass('dp-highlight');
                            }
                            if ($(allTds[i]).hasClass('ui-datepicker-current-day') ) {
                                found = true;
                            }
                            if (allTds[i] == this) {
                                break;
                            }
                        }
                    }                
                } else {
                    console.log('same');  
                }    
            } else {
                console.log('NOT');   
            }    
        });
    }  else {
        $(".ui-datepicker-calendar td").unbind('mouseover');
        $(".ui-datepicker-calendar td").off('mouseover');
    } 
}

highlightBetweenDates();
}


