(function($) {
    "use strict";

    var CalendarApp = function() {
        this.$body = $("body");
        this.$modal = $('#event-modal');
        this.$event = $('#external-events div.external-event');
        this.$calendar = $('#calendar');
        this.$saveCategoryBtn = $('.save-category');
        this.$categoryForm = $('#add-category form');
        this.$extEvents = $('#external-events');
        this.$calendarObj = null;
    };

    /* on drop */
    CalendarApp.prototype.onDrop = function (eventObj, date) { 
        var $this = this;
        var originalEventObject = eventObj.data('eventObject');
        var $categoryClass = eventObj.attr('data-class');
        var copiedEventObject = $.extend({}, originalEventObject);
        copiedEventObject.start = date;
        if ($categoryClass) {
            copiedEventObject['classNames'] = [$categoryClass];
        }
        $this.$calendarObj.fullCalendar('renderEvent', copiedEventObject, true);
        if ($('#drop-remove').is(':checked')) {
            eventObj.remove();
        }
    };

    /* on click on event */
    CalendarApp.prototype.onEventClick = function (calEvent, jsEvent, view) {
        var $this = this;
        var form = $("<form class='event-form'></form>");
        form.append("<label>Change event name</label>");
        form.append("<div class='input-group'><input class='form-control' type=text value='" + calEvent.title + "' /><span class='input-group-append'><button type='submit' class='btn btn-success btn-md'>Save</button></span></div>");
        $this.$modal.modal({
            backdrop: 'static'
        });
        $this.$modal.find('.delete-event').show().end().find('.save-event').hide().end().find('.modal-body').empty().prepend(form).end().find('.delete-event').unbind('click').click(function () {
            $this.$calendarObj.fullCalendar('removeEvents', function (ev) {
                return (ev._id == calEvent._id);
            });
            $this.$modal.modal('hide');
        });
        $this.$modal.find('form').on('submit', function () {
            calEvent.title = form.find("input[type=text]").val();
            $this.$calendarObj.fullCalendar('updateEvent', calEvent);
            $this.$modal.modal('hide');
            return false;
        });
    };

    /* on select */
    CalendarApp.prototype.onSelect = function (start, end, allDay) {
        var $this = this;
        $this.$modal.modal({
            backdrop: 'static'
        });
        var form = $("<form></form>");
        form.append("<div class='row'></div>");
        form.find(".row")
            .append("<div class='col-md-12'><div class='form-group'><label class='control-label'>Event Name</label><input class='form-control' type='text' name='title'/></div></div>")
            .append("<div class='col-md-12'><div class='form-group'><label class='control-label'>Category</label><select class='select form-control' name='category'></select></div></div>")
            .find("select[name='category']")
            .append("<option value='bg-danger'>Danger</option>")
            .append("<option value='bg-success'>Success</option>")
            .append("<option value='bg-purple'>Purple</option>")
            .append("<option value='bg-primary'>Primary</option>")
            .append("<option value='bg-pink'>Pink</option>")
            .append("<option value='bg-info'>Info</option>")
            .append("<option value='bg-inverse'>Inverse</option>")
            .append("<option value='bg-orange'>Orange</option>")
            .append("<option value='bg-brown'>Brown</option>")
            .append("<option value='bg-teal'>Teal</option>")
            .append("<option value='bg-warning'>Warning</option></div></div>");
        $this.$modal.find('.delete-event').hide().end().find('.save-event').show().end().find('.modal-body').empty().prepend(form).end().find('.save-event').unbind('click').click(function () {
            form.submit();
        });
        $this.$modal.find('form').on('submit', function () {
            var title = form.find("input[name='title']").val();
            var categoryClass = form.find("select[name='category'] option:checked").val();
            if (title !== null && title.length != 0) {
                $this.$calendarObj.fullCalendar('renderEvent', {
                    title: title,
                    start:start,
                    end: end,
                    allDay: false,
                    classNames: [categoryClass]
                }, true);  
                $this.$modal.modal('hide');
            }
            else{
                alert('You have to give a title to your event');
            }
            return false;
        });
        $this.$calendarObj.fullCalendar('unselect');
    };

    CalendarApp.prototype.enableDrag = function() {
        var $this = this;
        $(this.$event).each(function () {
            var eventObject = {
                title: $.trim($(this).text())
            };
            $(this).data('eventObject', eventObject);
            $(this).draggable({
                zIndex: 999,
                revert: true,
                revertDuration: 0
            });
        });
    };

    /* Initializing */
    CalendarApp.prototype.init = function() {
        this.enableDrag();
        var $this = this;
        $this.$calendarObj = $this.$calendar.fullCalendar({
            slotDuration: '00:15:00',
            minTime: '08:00:00',
            maxTime: '19:00:00',  
            defaultView: 'month',  
            handleWindowResize: true,   
            height: $(window).height() - 200,   
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            editable: true,
            droppable: true, 
            eventLimit: true, 
            selectable: true,
            drop: function(date) { $this.onDrop($(this), date); },
            select: function (start, end, allDay) { $this.onSelect(start, end, allDay); },
            eventClick: function(calEvent, jsEvent, view) { $this.onEventClick(calEvent, jsEvent, view); }

        });

        // Save category button click handler
        this.$saveCategoryBtn.on('click', function(){
            var categoryName = $this.$categoryForm.find("input[name='category-name']").val();
            var categoryColor = $this.$categoryForm.find("select[name='category-color']").val();
            if (categoryName !== null && categoryName.length != 0) {
                $this.$extEvents.append('<div class="external-event bg-' + categoryColor + '" data-class="bg-' + categoryColor + '" style="position: relative;"><i class="mdi mdi-checkbox-blank-circle m-r-10 vertical-middle"></i>' + categoryName + '</div>')
                $this.enableDrag();
            }

        });
   
    };

    // Initialize CalendarApp
    $.CalendarApp = new CalendarApp();
    $.CalendarApp.init();

})(jQuery);
