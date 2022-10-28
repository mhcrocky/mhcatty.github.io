
	//# sourceURL=IND/misc/customscript.js
	
( function( interdeal ) {

	function customScript() {

		/*********************
		 *   Custom Script   *
		 *********************/
			try{
				/**Start platform js */
				
				/**Start site Custom js */
				$IND(function() {








    // datePicker
    $IND('body').delegate('.ui-state-default.ui-state-highlight.ui-state-active', 'keypress keydown', function(e) {
        var $this = $IND(this);
        if (e.which == 37) {
            $this.parent().children('a').simulate('focus');
        }

    })













    //add error id to input
    $IND('.val-group > div').each(function(i) {
        var $this = $IND(this);
        $this.attr('id', 'error' + (i + 1));
    });
    $IND(' input[aria-required="true"]').each(function() {
        var $this = $IND(this);
        var id = $this.attr('id');
        $this.attr('aria-describedby', id);
    });

























    $IND('.ui-datepicker-calendar tr td:not(.ui-state-disabled) a').each(function(e) {
        var $this = $IND(this);
        var day = $this.text();
        var month = $this.parents('.ui-datepicker-calendar').prev().find('.ui-datepicker-title').children('span.ui-datepicker-month').text();
        var year = $this.parents('.ui-datepicker-calendar').prev().find('.ui-datepicker-title').children('span.ui-datepicker-year').text();
        $this.parent().append("<span class='INDhiddenText'>" + day + '/' + year + '/' + month + "</span>");
    })

    $IND(document).delegate('#ComparisonDate', 'focusin', function(e) {
        setTimeout(function() {

            if ($IND('#ui-datepicker-div').is(':visible')) {

                $IND('.ui-datepicker-calendar td > a.ui-state-active').simulate('focus');
            }

        }, 800);



        $IND('body').delegate('.ui-datepicker-calendar tr td:not(.ui-state-disabled) a', 'keydown click keypress', function(e) {
            var $this = $IND(this);
            if (e.keyCode == 39) {
                if ($this.is(':first-child')) {
                    $this.parent().parent().prev().children('td:last').children('a').simulate('focus');
                }
                $this.parent().prev().children('a').simulate('focus');

            }
            if (e.keyCode == 37) {
                if ($this.is(':last-child')) {
                    $this.parent().parent().next().children('td:first').children('a').simulate('focus');
                }
                $this.parent().next().children('a').simulate('focus');

            }

        })


    })
    //

    $IND('body').delegate('.ui-datepicker-header  .ui-datepicker-prev', 'keypress keydown click keyup', function(e) {
        var $this = $IND(this);
        setTimeout(function() {
            if (e.keyCode == 13) {
                $this.simulate('focus');
            }
        }, 1300);

    })

    $IND('body').delegate('#btnLead', 'keydown click keypress', function(e) {
        if (e.keyCode == 13 || e.type == 'click') {
            $IND('[aria-required="true"]').each(function() {
                var $this = $IND(this);
                if ($this.val().length == 0) {
                    $this.attr('aria-invalid', true);
                } else {
                    $this.attr('aria-invalid', false);
                }

            });

        }

        $IND('[aria-invalid="true"]:first').simulate('focus');

    })




    // // add dicrybay to errore message 

    // $IND('#ValEmail').each(function(i) {
    //     var $this = $IND(this);
    //     $this.attr('id', 'error' + (i + 1));
    // });

    // $IND('input[aria-required]').each(function() {
    //     var $this = $IND(this);
    //     var id = $this.attr('id');
    //     $this.attr('aria-describedby', id);
    // });








    //autocomplete
    $IND('body').delegate('#ProductName', 'input focus', function() {
        var $this = $IND(this);
        var $span = $IND('#INDnumRes');
        setTimeout(function() {
            var result = $IND('#ui-id-2');
            var amount = result.find('li').length;
            if (!result.is(':visible')) {
                amount = 0;
            }
            $span.text('התקבלו ' + amount + ' תוצאות');
        }, 500);
    });
    clickcart - search - results









});
				
			}
			catch(error){
				INDLog(error,'error');
			}
		/**********************
		 *   /Custom Script   *
		 **********************/

	}

	interdeal.setCustomScript = function() {

		if ( interdeal.setCustomScript.active ) {
			INDLog( 'CustomScript already activated.', 'err' );
			return;
		}
		interdeal.setCustomScript.active = true;
		try {
			customScript();
		}
		catch (error){ 
			INDLog(error,'error');
		}

	};

} )( interdeal );


