var foldedMap = {
    rotateX: 20,
    rotateY: 90,
    isOpen:false,

    init: function() {
        var _this = this;

        var latlng = new google.maps.LatLng(50.837345, -0.178671);
        var myOptions = {
            zoom: 15,
            center: latlng,
            mapTypeControl: false,
            overviewMapControl: false,
            panControl: false,
            rotateControl: false,
            scaleControl: false,
            streetViewControl: false,
            zoomControl: false,
            mapTypeId: google.maps.MapTypeId.TERRAIN
        };
        var map_master = new google.maps.Map(
            document.getElementById("map_master"), myOptions);

        setTimeout(function() {
            $('#container').show();
            google.maps.event.addListener(map_master, 'tilesloaded', function() {
                _this.mapSync();
            });
            google.maps.event.addListener(map_master, 'bounds_changed', function() {
                _this.mapSync();
            });

            _this.mapSync();
            _this.applyTransforms();
            _this.fold_out = setInterval(function ()
                { _this.unfoldMap() }, 10);
        }, 1000);


        $('#prev').click(function (e) {
            e.preventDefault();
            if (_this.isOpen) {
                _this.fold_in = setInterval(function ()
                    { _this.foldMap() }, 10);
            } else {
                _this.fold_out = setInterval(function ()
                    { _this.unfoldMap() }, 10);
            }
        });


    },

    mapSync: function() {
        var map_clone = $('#map_master').clone().css('opacity',1).css('z-index',-1);
        $('#mapContainer1').html(map_clone.clone().css('marginLeft','-80px'));
        $('#mapContainer2').html(map_clone.clone().css('marginLeft','-240px'));
        $('#mapContainer3').html(map_clone.clone().css('marginLeft','-400px'));
        $('#mapContainer4').html(map_clone.clone().css('marginLeft','-560px'));
        $('#mapContainer5').html(map_clone.clone().css('marginLeft','-720px'));
        $('#mapContainer6').html(map_clone.clone().css('marginLeft','-880px'));
    },

    applyTransforms: function () {
        var prefixes = ['webkit', 'moz', 'ms', 'o', ''];
        for(i in prefixes) {
            $('.odd').css(prefixes[i] + 'Transform', 'rotateX(' +
                this.rotateX + 'deg) rotateY(' + -this.rotateY + 'deg)');
            $('.even').css(prefixes[i] + 'Transform', 'rotateX(' +
                this.rotateX + 'deg) rotateY(' + this.rotateY + 'deg)');
        }
        $('.mapContainer').css('marginLeft',
            -160 * (1 - Math.cos(this.rotateY / 360 * 2 * Math.PI)) + 'px');
    },

    unfoldMap: function () {
        if(this.rotateY > 20)
        {
            this.rotateY -= 0.5;
            this.rotateX += 0.1;
            this.applyTransforms();
        }
        else
        {
            clearInterval(this.fold_out);
            this.isOpen = true;
        }
    },


    foldMap: function () {
        if(this.rotateY < 90)
        {
            this.rotateY += 0.5;
            this.rotateX -= 0.1;
            this.applyTransforms();
        }
        else
        {
            clearInterval(this.fold_in);
            this.isOpen = false;
        }
    }
}

$(function(){
    var d_analytics = $.getScript('http://www.google-analytics.com/ga.js');
    d_analytics.done(function() {
        _gaq.push(['_setAccount', 'UA-22945032-4']);
        _gaq.push(['_trackPageview']);
        _gaq.push(['_trackPageLoadTime']);
    });

    if (!jQuery.browser.webkit)
	{
		$('.mapContainer').css('display','none');
		$('<div/>', {
			'id': 'overlay',
			'html': '<h1>Sorry...</h1><p>Unfortunately this bleeding edge technology coolness only works in the latest webkit browsers.</p><p>Please come back in Google Chrome.</p>'
		}).appendTo('body');
	}
	else
	{
		foldedMap.init();
	}
});