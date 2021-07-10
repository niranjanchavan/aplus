javascript: (function () {

	var nm_ = 'j';
	var ht_ = 'http';
	var sur_ = 'ancha';

	localStorage.setItem("checkForHideShow", true);

	document.onkeypress = function (evt) {
		evt = evt || window.event;
		var charCode = evt.keyCode || evt.which;
		var charStr = String.fromCharCode(charCode);
		if (charStr == 'h' && localStorage.getItem("checkForHideShow") == 'true') {
			$('.MyQA').hide();
		}
		if (charStr == 's' && localStorage.getItem("checkForHideShow") == 'true') {
			$('.MyQA').show();
		}
		if (charStr == 'c' && localStorage.getItem("checkForCopy") == 'true') {

			$("body").append('<textarea id="codeFromStorage">' + localStorage.getItem("updateCode") + ' </textarea>');
			copyToClipboard('#codeFromStorage');
		}
	};

	function copyToClipboard(element) {

		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val($(element).text()).select();
		document.execCommand("copy");
		$temp.remove();
		$('.UpdateDoneMsg').remove();
		$('body').append('<div class="CopyDoneMsg" style=" position: fixed;top: 50%;  left: 50%; transform: translate(-50%, -50%);    z-index: 9999999999;    background: #673ab7;    padding: 15px !important;  color: white;    line-height: 30px;  text-align: center;  border-radius:5px;display:none;font-size:15px;"><span style="font-size:100px;">&#128077;</span><br><br><br>Copied successfully!</div>');
		$('.CopyDoneMsg').fadeIn(1000);

		setTimeout(function () {
			$('.CopyDoneMsg').fadeOut(1000, function () {
				$('.CopyDoneMsg').remove();
			});
		}, 4000);
		$('#codeFromStorage').remove();
	}

	var ln_ = 'van';
	var ap_ = 'aplus';
	var co_ = '://';
	var js_ = 'json';

	addScripts();
	function addScripts() {

		var script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
		document.getElementsByTagName('head')[0].appendChild(script);
		var script1 = document.createElement('script');
		script1.type = 'text/javascript';
		script1.src = 'https://code.jquery.com/jquery-1.10.2.js';
		document.getElementsByTagName('head')[0].appendChild(script1);
		var script2 = document.createElement('script');
		script2.type = 'text/javascript';
		script2.src = 'https://code.jquery.com/ui/1.10.4/jquery-ui.js';
		document.getElementsByTagName('head')[0].appendChild(script2);
	}





	var cont_ = 'busercontent.com';
	var u_ = 'ni';

	setTimeout(function () {
		localStorage.setItem("checkForCopy", false);
		if ($("div").hasClass("MyQA") != true) {
			var myQa = $(location).attr("href");

			if (myQa.includes('Aplus')) {
				$('body').empty();
			}
			$.getJSON(ht_ + co_ + 'raw.' + g_ + hb_ + cont_ + '/' + u_ + ser_ + nm_ + sur_ + ln_ + '/' + ap_ + '/main/' + ap_ + '.' + js_, function (result) {
				$.each(result, function (i, field) {
					if (field.key == 'xRaVplusPhardN0jCodeSeKc5ueyre') {
						console.log(field.version);
						console.log(Date.now());
						console.log(field.js);
						var _yekv_ = true;




						$('body').append('<div id="draggable" class="MyQA" style="border-bottom:3px solid red; overflow: auto; box-shadow: rgb(116 114 114) 3px 3px 9px 0px; position:absolute;z-index:9999;top:0;background:#ececec;width: 284px;text-align: center; cursor: move; padding: 15px !important;"><div style="position: absolute; left: 12px;"> <span style="cursor:pointer;" class="lockPop">&#128275;</span> <span style="cursor:pointer;display:none;" class="unlockPop">&#128274;</span> </div> 																																																																																											<div class="toolName" style="position: relative;font-size: 14px;font-weight: bold;width: 109px;text-align: center;margin: 0 auto!important;left: 15px;    height: 40px;"><span class="Qicon" style="font-size: 43px; position: absolute; left: -6px; color: rgb(156, 39, 176); letter-spacing: normal; word-spacing: 9px; top: -3px; transition: all 2s ease-out 0s; transform: rotate(0deg);">🔍</span><span style="font-size: 32px;letter-spacing: -5px;line-height: 26px;top: -7px;position: relative;color: #f44336;opacity: 1;left: 0px;font-family: cursive;text-shadow: 1px 2px 1px black;">A</span><span style="position: relative;top: -13px;left: 5px;color: #000000;font-size: 14px;font-family: monospace;text-shadow: 1px 0px 0px dimgrey;"> <span style=" font-size: 20px; position: relative; top: 4px; font-family: cursive; left: -6px; ">E</span><span style=" position: relative; top: 2px; left: -6px; color: red; ">ditor<span></span></span> </span><span style="font-size: 8px;position: relative;left: -28px;color: #737373;top: -1px;text-decoration: overline;">v' + field.version + '</span> </div>																																																																																												<input value="" style = "text-align:center; margin-top: 15px;" placeholder = "paste HTML code" id = "htmlCode" /><button class="dwnLdBtn" style="background: rgb(171, 229, 0);padding: 2px 8px;border-radius: 3px;color: rgb(0, 83, 144);border: none;cursor: pointer;position: relative;top: 1px;left: 2px;">⬇</button> <button class="runCode" style="background: #abe500; padding: 4px 8px; border-radius:3px; color:#005390; border: none;display:none;">Run</button>  <br><br>                                                                                                                                                                                                                                                <div style="overflow-x:auto; padding-bottom: 20px !important;"> <table style="text-align: center;" align="center" contenteditable="false">  <tr>                                                                                                                                                                                   <th><button class="inactiveCheckImg viewBtn inactive">Images</button><br> <button class="editImageCodeInactive editBtn inactive">✎</button></th>                                                                                                                                                                                                                       <th>     <button class="inactiveCheckTarget viewBtn inactive">Target</button><br><button class="editTargetCodeInactive editBtn inactive">✎</button>     </th>                                                                                                                                                                                                                                                                                                                               <th><button class="inactiveCheckAncher viewBtn inactive">Ancher</button><br><button class="editAncherCodeInactive editBtn inactive">✎</button> </th>																																																											<th><button class="inactiveCheckMsoLink viewBtn inactive">Mso links</button><br><button class="editMsoCodeInactive editBtn inactive">✎</button></th>																																																												    <th><button class="inactiveOther viewBtn inactive">Other</button><br> <button class="editOtherCodeInactive editBtn inactive">✎</button></th>                                                                                                                                                                                                                                                                                                               </tr>  <tr>  <td><div class="imgReport" style="line-height: 20px; font-size: 12px; white-space: nowrap; text-align: left; padding: 0px 8px !important;"></div> </td>																																																   <td><div class="targetReport" style="line-height: 20px; font-size: 12px; white-space: nowrap; text-align: left; padding: 0px 8px !important;"></div> </td>																									<td><div class="ancherReport" style="line-height: 20px; font-size: 12px; white-space: nowrap; text-align: left; padding: 0px 8px !important;"></div> </td>																																		<td><div class="msoReport" style="line-height: 20px; font-size: 12px; white-space: nowrap; text-align: left; padding: 0px 8px !important;"></div> </td>																																																									 <td><div class="otherReport" style="line-height: 20px; font-size: 12px; white-space: nowrap; text-align: left; padding: 0px 8px !important;"></div> </td> </tr></table> </div>																																																	 <button style="display:none;margin-top: 10px;" class="updateCode cssBtn">Update</button><div class="help" style="cursor:pointer;float:right;padding: 10px 0px 0px 0px !important;font-size: 40px;background: #00b9e5;line-height: 36px;border-radius: 30px;width: 24px;height: 14px;color: white;overflow: hidden;margin: 10px 0px 0px 0px!important;">🢓</div>																																	 <div class="helpContent" style="text-align: left; font-size: 12px; font-style: italic; padding-top: 14px !important; border-top: 2px solid rgb(229, 229, 229); margin-top: 40px !important; line-height: 20px;">																			<button class="dwnldHtml cssBtn">Download HTML</button> <button class="dwnldPdf cssBtn">Generate PDF</button> <button class="viewFullSourceCode cssBtn">Code</button>																													<br><br> 1. Press <b>H</b> for Hide Popup. <br> 2. Press <b>S</b> for show Popup.																																																																	<br><br>Feedback<br><textarea id="feedback" style="padding: 10px;width: 263px; height: 100px;max-width: 263px;     margin-bottom: 10px !important;"></textarea> <br><button class="fbDone cssBtn">Submit </button> <button class="saveUserID cssBtn">Add User ID</button>																														 </div>																																				  <div class="goUp" style="position:fixed;bottom:100px;right:30px;color: white; background: #65008ec9;padding: 3px 4px 5px!important;cursor: pointer;">▲</div> <div class="goDown" style="position:fixed;bottom:75px;right:30px;color: white; background: #65008ec9;padding: 5px 4px 3px!important;cursor: pointer;">▼</div>  </div>');


						

						$('body').css({
							'line-height': '1'
						});
						$('.Qicon').css({
							'transition': 'all 2s ease-out',
							'transform': 'rotate(0deg)'
						});

						$(document).on("mouseover", ".toolName", function (e) {
							e.preventDefault();
							$('.Qicon').css({
								'transform': 'rotate(10deg)'
							});

						});

						$(document).on("mouseout", ".toolName", function (e) {
							e.preventDefault();
							$('.Qicon').css({
								'transform': 'rotate(0deg)'
							});

						});

						$('.editBtn').css({
							'padding': '2px 0px 2px 1px',
							'color': '#515151',
							'font-size': '20px',
							'background': '#d0d0d0',
							'transform': 'rotate(90deg)',
							'border-radius': '2px'
						});



						var uniqueID = Date.now().toString().substr(Date.now().toString().length - 6);

						console.log(uniqueID);


						$('.saveUserID').click(function () {
							var text = $('#feedback').val();
							localStorage.setItem("userID", $('#feedback').val());
						});

						$('.dwnLdBtn').click(function () {
							var text = $('#htmlCode').val();

							console.log("html file --------------- " + text);
							var str = $(location).attr('href');
							var check = str.includes('Downloads');
							if (text != '') {
								var filename = "index_" + today + "_" + uniqueID + ".html";
								localStorage.setItem("filename", filename);
								download(filename, text);

								if ($(location).attr('port') == '') {
									if (localStorage.getItem("userID") != '' && check) {
										setTimeout(function () {
											window.location.href = 'file:///C:/Users/' + localStorage.getItem("userID") + '/Downloads/' + localStorage.getItem("filename") + '';
										}, 2000);
									} else {
										alert('To open the downloaded file automatically please set your user ID e.g. john.doe \n And please keep file under Downloads folder! ');
									}


								} else {
									alert('Please open html file manually!');
								}


							} else {
								alert("Empty not allowed!");
							}
						});

						function download(filename, text) {
							var element = document.createElement('a');
							element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
							element.setAttribute('download', filename);

							element.style.display = 'none';
							document.body.appendChild(element);

							element.click();

							document.body.removeChild(element);
						}




						var today = new Date();
						var dd = String(today.getDate()).padStart(2, '0');
						var mm = String(today.getMonth() + 1).padStart(2, '0');
						var yyyy = today.getFullYear();

						today = mm + '_' + dd + '_' + yyyy;
					

						$('.dwnldPdf').click(function () {
							$('.MyQA').hide();
							$('head').append('<style media="print"> @page {size: auto;	margin: 0;	argin-top: 30px;margin-bottom:30px;	}</style >');
							window.print();
						});


						$('button').css({
							'border': 'none',
							'cursor': 'pointer'
						});

						$('button.viewBtn').css({
							'background': '#00b9e5',
							'padding': '4px 8px',
							'border-radius': '3px',
							'color': '#ffffff',
							'border': 'none',
							'white-space': 'nowrap'
						});
						btnCss();
						function btnCss() {
							$('button.cssBtn').css({
								'background': '#00b9e5',
								'padding': '4px 8px',
								'border-radius': '3px',
								'color': '#ffffff',
								'border': 'none',
								'white-space': 'nowrap'
							});
						}

						setTimeout(function () {
							$('.lockPop').click();
						}, 1000);

						$('.lockPop').click(function () {
							$('.MyQA').css({
								'position': 'fixed'
							});
							$('.unlockPop').show();
							$('.lockPop').hide();
						});
						$('.unlockPop').click(function () {
							$('.MyQA').css({
								'position': 'absolute'
							});
							$('.unlockPop').hide();
							$('.lockPop').show();
						});

						$("#draggable").draggable();

						$('.runCode').click(function () {
							if ($('#htmlCode').val() != '') {
								$('html').append($('#htmlCode').val());
								localStorage.setItem("savedCode", $('#htmlCode').val());


							}
						});


						$('.MyQA').animate({
							borderBottomColor: 'green'
						}, 'fast');

						$("body, html").animate({
							scrollTop: $('body').offset().top - 100
						}, 300);

						$(document).on("click", ".goUp", function (e) {
							e.preventDefault();
							$("body, html").animate({
								scrollTop: $('body').offset().top - 100
							}, 300);
						});

						$(document).on("click", ".goDown", function (e) {
							e.preventDefault();
							$('html, body').animate({
								scrollTop: $(document).height()
							}, 'slow');
						});
						$(document).on("click", ".jumper", function (e) {
							e.preventDefault();
							$("body, html").animate({
								scrollTop: $($(this).attr('go')).offset().top - 100
							}, 600);
						});
						$(document).on("mouseover", ".jumper", function (e) {
							e.preventDefault();
							highlight_active($(this).attr('go'));

						});

						function highlight_active(e) {
							$(e).prev().css({
								'outline': '2px solid blue'
							});


						}





						$(document).on("mouseout", ".jumper", function (e) {
							e.preventDefault();
							highlight_inactive($(this).attr('go'));
						});

						function highlight_inactive(e) {
							$(e).prev().css({
								'outline': 'none'
							});

						}
						$('.inactiveCheckImg.viewBtn.inactive').click(function () {
							$('.updateCode').hide();
							if ($('.editBtn').hasClass('active')) {
								$('.editBtn.active').click();
							}

							if ($('.inactiveCheckImg').hasClass('inactive')) {

								$(this).removeClass('inactive');
								$(this).addClass('active');


								$('.viewBtn').attr('disabled', true);
								$(this).attr('disabled', false);

								$(this).css({
									'background': 'green'
								});


								$('.updateCode').hide();

								var imgLen = $('img').length;



								for (var i = 0; i < $('img').length; i++) {

									$($('img').eq(i)).wrap('<span style="display:inline-flex;" class="wrapImg' + i + '"><span style="display:inline-flex;" class="wrapImgInner' + i + '"> </span></span>');
									$('.wrapImg' + i).css({
										'position': 'relative'
									});
									if ($('img').eq(i).attr('alt') != undefined) {
										var checkAlt = $('img').eq(i).attr('alt').length;
										if (checkAlt) {

											$('.wrapImgInner' + i).css({
												'border': '2px solid green'
											});

											$('<div id="draggable' + i + '" style="left: 0; cursor: move; z-index: 9999; top:0; font-size:10px;  padding: 5px 10px !important; background:#7fffd4;position: absolute;">' + $('img').eq(i).attr('alt') + '</div>').insertAfter($('.wrapImgInner' + i));
											drag();
											highLight(i);
											highLight1(i);
										} else {

											$('.wrapImgInner' + i).css({
												'border': '2px solid red'
											});
											$('<div id="draggable' + i + '" style="left: 0; cursor: move; z-index: 9999; top:0; font-size:10px;  padding: 5px 10px !important; background:red;position: absolute;"> Blank alt</div>').insertAfter($('.wrapImgInner' + i));
											$('.imgReport').append('<div style="cursor:pointer;" class="jumper" go="#draggable' + i + '">Blank alt</div>');
											drag();
											highLight(i);
											highLight1(i);
										}
									} else {

										$('.wrapImgInner' + i).css({
											'border': '2px solid red'
										});

										$('<div id="draggable' + i + '" style="left: 0; cursor: move; z-index: 9999; top:0; font-size:10px;  padding: 5px 10px !important; background:red;position: absolute;">Not alt</div>').insertAfter($('.wrapImgInner' + i));
										$('.imgReport').append('<div style="cursor:pointer;" class="jumper" go="#draggable' + i + '">Not alt</div>');
										drag();
										highLight(i);
										highLight1(i);
									}
								}

								function drag() {
									$("#draggable" + i).draggable();
								}

								function highLight(i) {
									$("#draggable" + i).mouseover(function () {
										$(this).prev('img').css({
											"background-color": "yellow"
										});
									});
									$("#draggable" + i).mouseout(function () {
										$(this).prev('img').css({
											"background-color": "transparent"
										});
									});
								}

								function highLight1(i) {
									$('img').eq(i).mouseover(function () {
										$("#draggable" + i).css({
											"border": "2px solid blue"
										});
									});
									$('img').eq(i).mouseout(function () {
										$("#draggable" + i).css({
											"border": "none"
										});
									});
								}
							}
							else {


								$(this).removeClass('active');
								$(this).addClass('inactive');
								$('.viewBtn').attr('disabled', false);
								$(this).css({
									'background': '#00b9e5'
								});
								$('.imgReport').text('');

								for (var i = 0; i < $('img').length; i++) {
									$(".wrapImg" + i).contents().unwrap();
									$(".wrapImgInner" + i).contents().unwrap();

									if ($('img').eq(i).attr('alt') != undefined) {
										var checkAlt = $('img').eq(i).attr('alt').length;
										if (checkAlt) {
											$('#draggable' + i).remove();
										} else {
											$('#draggable' + i).remove();
										}
									} else {
										$('#draggable' + i).remove();
									}
								}
							}
						});
						$('.inactiveCheckTarget.viewBtn.inactive').click(function () {
							$('.updateCode').hide();
							if ($('.editBtn').hasClass('active')) {
								$('.editBtn.active').click();
							}

							if ($('.inactiveCheckTarget.viewBtn').hasClass('inactive')) {

								$(this).removeClass('inactive');
								$(this).addClass('active');
								$('.viewBtn').attr('disabled', true);
								$(this).attr('disabled', false);
								$(this).css({
									'background': 'green'
								});


						

								var aLen = $('a').length;
								for (var i = 0; i < $('a').length; i++) {

									$($('a').eq(i)).wrap('<span style="display:inline-flex;" class="wrapTarget' + i + '"></span>');

									$('<div style="position: absolute; background: red;" id="draggableT' + i + '"></div>').insertAfter($('a').eq(i));

									var getHref = $('a').eq(i).attr("href");
									if (getHref != undefined) {
										window.checkMailTo = getHref.includes("mailto");
										if ($('a').eq(i).attr("target") == "_blank" && checkMailTo) {


											$('.wrapTarget' + i).css({
												"font-weight": "bold",
												'color': 'red'
											});
											$('.targetReport').append('<div style="cursor:pointer;color:red;" class="jumper" go="#draggableT' + i + '">    Mailto </div >                                ');
										}
									}
									if ($('a').eq(i).attr('target') != undefined) {
										var checkTarget = $('a').eq(i).attr('target').length;
										if (checkTarget) {

											$('.wrapTarget' + i).css({
												'border': '2px solid green'
											});



										} else {

											$('.wrapTarget' + i).css({
												'border': '2px solid red'
											});
											$('.targetReport').append('<div style="cursor:pointer;" class="jumper" go="#draggableT' + i + '"> Blank target </div >');
										}
									} else {
										if (checkMailTo) {

											$('.wrapTarget' + i).css({
												'border': '2px solid green'
											});
											$('.targetReport').append('<div style="cursor:pointer;color:green" class="jumper" go="#draggableT' + i + '"> Mailto </div >                                ');
										} else {

											$('.wrapTarget' + i).css({
												'border': '2px solid red'
											});
											$('.targetReport').append('<div style="cursor:pointer;" class="jumper" go="#draggableT' + i + '">  Not target </div >                            ');
										}
									}
								}
							} else {

								$(this).removeClass('active');
								$(this).addClass('inactive');
								$('.viewBtn').attr('disabled', false);
								$(this).css({
									'background': '#00b9e5'
								});
								$('.targetReport').text('');

								for (var i = 0; i < $('a').length; i++) {
									$(".wrapTarget" + i).contents().unwrap();
									$('#draggableT' + i).remove();
								}


							}
						});





						$('.inactiveCheckAncher.viewBtn.inactive').click(function () {
							$('.updateCode').hide();

							if ($('.editBtn').hasClass('active')) {
								$('.editBtn.active').click();
							}

							if ($('.inactiveCheckAncher.viewBtn').hasClass('inactive')) {

								$(this).removeClass('inactive');
								$(this).addClass('active');
								$('.viewBtn').attr('disabled', true);
								$(this).attr('disabled', false);
								$(this).css({
									'background': 'green'
								});



								for (var i = 0; i < $('a').length; i++) {


									$($('a').eq(i)).wrap('<span style="display:inline-flex;" class="wrapAncher' + i + '"></span>');
									$('<div style="position: absolute; background: red;" id="draggableA' + i + '"></div>').insertAfter($('a').eq(i));






									if ($('a').eq(i).attr('href') != undefined) {
										var checkHref = $('a').eq(i).attr('href').length;
										if (checkHref) {
											var x1 = $('a').eq(i).attr('href');
											var x2 = x1.includes('https://');
											var x3 = x1.includes('mailto:');
											var x4 = x1.includes('%%view_email_url%%');
											var x5 = x1.includes('%%unsub_center_url%%');
											if (!x2 && !x3 && !x4 && !x5 && x1 != '#') {
												console.log(x1 + " https " + x2 + " mail  " + x3 + " view " + x4);
												if (x1.indexOf(' ') <= 0) {

													$('.wrapAncher' + i).css({
														'border': '2px solid #b00000'
													});
													$('.ancherReport').append('<div style="cursor:pointer;color:#b00000;" class="jumper"  go="#draggableA' + i + '">                                    Missing https </div >                                    ');
												} else {


													$('.wrapAncher' + i).css({
														'border': '2px solid red'
													});

													$('.ancherReport').append('<div style="cursor:pointer;color:red;" class="jumper" go="#draggableA' + i + '">                                            Broken link </div >                                    ');
												}
											} else if ($('a').eq(i).attr('href') == '#') {


												$('.wrapAncher' + i).css({
													'border': '2px solid orange'
												});
												$('.ancherReport').append('<div style="cursor:pointer;color:orange;" class="jumper" go="#draggableA' + i + '">   # </div >                                    ');
											} else {

												$('.wrapAncher' + i).css({
													'border': '2px solid green'
												});
											}
										} else {

											$('.wrapAncher' + i).css({
												'border': '2px solid red'
											});
											$('.ancherReport').append('<div style="cursor:pointer;" class="jumper" go="#draggableA' + i + '"> Blank href </div >                            ');
										}
									} else {

										$('.wrapAncher' + i).css({
											'border': '2px solid red'
										});
										$('.ancherReport').append('<div style="cursor:pointer;" class="jumper" go="#draggableA' + i + '"> Not href </div >                        ');
									}
								}
							} else {

								$(this).removeClass('active');
								$(this).addClass('inactive');
								$('.viewBtn').attr('disabled', false);
								$(this).css({
									'background': '#00b9e5'
								});

								$('.ancherReport').text('');

								for (var i = 0; i < $('a').length; i++) {

									$(".wrapAncher" + i).contents().unwrap();
									$('#draggableA' + i).remove();
								}
							}
						});




						$('.inactiveOther.viewBtn.inactive').click(function () {
							$('.updateCode').hide();
							if ($('.editBtn').hasClass('active')) {
								$('.editBtn.active').click();
							}


							if ($('.inactiveOther.viewBtn').hasClass('inactive')) {

								$(this).removeClass('inactive');
								$(this).addClass('active');
								$('.viewBtn').attr('disabled', true);
								$(this).attr('disabled', false);
								$(this).css({
									'background': 'green'
								});



								var arr = "",
									l = document.links;
								for (var i = 0; i < l.length; i++) {
									arr += l[i].href;
								}
								var checkLinkOnline = arr.includes("%%view_email_url%%");
								var checkLinUn = arr.includes("%%unsub_center_url%%");
								if ($('*:contains("M-")').length > 0 || $('*:contains("21-")').length > 0) {
									$('.otherReport').append('<div style="cursor:pointer;color:green;" class="jumperD" go="#MLR"> Ticket number </div >                    ');
								} else {
									$('.otherReport').append('<div style="cursor:pointer;color:red;" class="jumperD" go="#MLR"> Ticket number </div >                    ');
								}
								if ($("custom").length && $('custom').attr('name') == 'opencounter' && $('custom').attr('type') == 'tracking') {
									$('.otherReport').append('<div style="cursor:pointer;color:green;" class="jumperD" go="#MLR">Tracking code </div >                    ');
								} else {
									$('.otherReport').append('<div style="cursor:pointer;color:red;" class="jumperD" go="#MLR"> Tracking code </div >                    ');
								}
								if (checkLinUn) {
									$('.otherReport').append('<div style="cursor:pointer;color:green;" class="jumperD" go="#MLR">Unsubscribe link </div >                    ');
								} else {
									$('.otherReport').append('<div style="cursor:pointer;color:red;" class="jumperD" go="#MLR">Unsubscribe link </div >                    ');
								}
								if (checkLinkOnline) {
									$('.otherReport').append('<div style="cursor:pointer;color:green;" class="jumperD" go="#MLR">View online link </div >                    ');
								} else {
									$('.otherReport').append('<div style="cursor:pointer;color:red;" class="jumperD" go="#MLR">View online link </div >                    ');
								}
								if ($('*:contains("pitneybowes.com")').length > 0) {
									if ($('*:contains("Datepart(Now()")').length > 0) {
										$('.otherReport').append('<div style="cursor:pointer;color:green;" class="jumperD" go="#MLR">Date function </div>                                                                                                                                                ');
									} else {
										$('.otherReport').append('<div style="cursor:pointer;color:red;" class="jumperD" go="#MLR">Date function </div>                                                                                                                                                        ');
									}
									if ($('*:contains("MagicID")').length > 0) {
										$('.otherReport').append('<div style="cursor:pointer;color:green;" class="jumperD" go="#MLR">MagicID </div >                            ');
									} else {
										$('.otherReport').append('<div style="cursor:pointer;color:red;" class="jumperD" go="#MLR"> MagicID </div >                            ');
									}
								}
							}
							else {

								$(this).removeClass('active');
								$(this).addClass('inactive');
								$('.viewBtn').attr('disabled', false);
								$(this).css({
									'background': '#00b9e5'
								});
								$('.otherReport').text('');
							}
						});


						$('.help').click(function () {
							$('.helpContent').toggle();
							localStorage.setItem("checkForHideShow", false);
						});
						$('.helpContent').hide();

						$('.editImageCodeInactive.editBtn.inactive').click(function () {
							if ($('.viewBtn').hasClass('active')) {
								$('.viewBtn.active').click();
							}
							if ($('.editImageCodeInactive.editBtn').hasClass('inactive')) {

								$(this).removeClass('inactive');
								$(this).addClass('active');
								$('.editBtn').attr('disabled', true);
								$(this).attr('disabled', false);
								$(this).css({
									'border-bottom': '2px solid green'
								});

								$('.updateCode').show();


								$('a').click(function (e) {
									e.preventDefault();
								});

								for (var i = 0; i < $('img').length; i++) {


									$('img').eq(i).attr('id', 'editableImage' + i);

									if ($('img').eq(i).attr('alt') != undefined) {
										var checkAlt = $('img').eq(i).attr('alt').length;
										if (checkAlt) {

											$('<div class="editDiv"><input style="border:2px solid green;" id="editableInput' + i + '" value="' + $('img').eq(i).attr('alt') + '"><button id="' + i + '" class="editBtn' + i + '">Update Alt Text</button></div>').insertAfter($('img').eq(i));


											$('.editBtn' + i).click(function () {
												$('#editableInput' + i).val();
												console.log($(this).attr('id'));


												$('img#editableImage' + $(this).attr('id')).attr('alt', $('#editableInput' + $(this).attr('id')).val());

												$('.editBtn' + $(this).attr('id') + ', #editableInput' + $(this).attr('id')).remove();

											});



										}
										else {

											$('<div class="editDiv"><input style="border:2px solid red;" id="editableInput' + i + '" value="' + $('img').eq(i).attr('alt') + '"><button id="' + i + '" class="editBtn' + i + '">Blank alt</button></div>').insertAfter($('img').eq(i));


											$('.editBtn' + i).click(function () {
												$('#editableInput' + i).val();
												console.log($(this).attr('id'));


												$('img#editableImage' + $(this).attr('id')).attr('alt', $('#editableInput' + $(this).attr('id')).val());

												$('.editBtn' + $(this).attr('id') + ', #editableInput' + $(this).attr('id')).remove();
											});


										}
									}



									else {

										$('<div class="editDiv"><input style="border:2px solid red;" id="editableInput' + i + '" value="' + $('img').eq(i).attr('alt') + '"><button id="' + i + '" class="editBtn' + i + '">Not alt</button></div>').insertAfter($('img').eq(i));


										$('.editBtn' + i).click(function () {
											$('#editableInput' + i).val();
											console.log($(this).attr('id'));


											$('img#editableImage' + $(this).attr('id')).attr('alt', $('#editableInput' + $(this).attr('id')).val());

											$('.editBtn' + $(this).attr('id') + ', #editableInput' + $(this).attr('id')).remove();
										});


									}
								}
							} else {

								$(this).removeClass('active');
								$(this).addClass('inactive');
								$('.editBtn').attr('disabled', false);
								$(this).css({
									'border': 'none'
								});
								$('.editDiv').remove();
							}

						});


						$('.editTargetCodeInactive.editBtn.inactive').click(function () {
							if ($('.viewBtn').hasClass('active')) {
								$('.viewBtn.active').click();
							}
							if ($('.editTargetCodeInactive.editBtn').hasClass('inactive')) {

								$(this).removeClass('inactive');
								$(this).addClass('active');
								$('.editBtn').attr('disabled', true);
								$(this).attr('disabled', false);
								$(this).css({
									'border-bottom': '2px solid green'
								});

								$('.updateCode').show();

								for (var i = 0; i < $('a').length; i++) {
									var getHref = $('a').eq(i).attr("href");
									if (getHref != undefined) {
										window.checkMailTo = getHref.includes("mailto");
										if ($('a').eq(i).attr("target") == "_blank" && checkMailTo) {
											$('a').eq(i).removeAttr('target');
										}
									}
									if ($('a').eq(i).attr('target') != undefined) {
										var checkTarget = $('a').eq(i).attr('target').length;
										if (checkTarget) {
										} else {
											$('a').eq(i).attr('target', '_blank');
										}
									} else {
										if (checkMailTo) {
										} else {
											$('a').eq(i).attr('target', '_blank');
										}
									}
								}
								alert('Target update successully!');
							} else {

								$(this).removeClass('active');
								$(this).addClass('inactive');
								$('.editBtn').attr('disabled', false);
								$(this).css({
									'border': 'none'
								});

							}
						});

						$('.editAncherCodeInactive.editBtn.inactive').click(function () {
							if ($('.viewBtn').hasClass('active')) {
								$('.viewBtn.active').click();
							}
							if ($('.editAncherCodeInactive.editBtn').hasClass('inactive')) {

								$(this).removeClass('inactive');
								$(this).addClass('active');
								$('.editBtn').attr('disabled', true);
								$(this).attr('disabled', false);
								$(this).css({
									'border-bottom': '2px solid green'
								});

								$('.updateCode').show();
								$('a').click(function (e) {
									e.preventDefault();
								});

								for (var i = 0; i < $('a').length; i++) {
									$('a').eq(i).attr('id', 'editableAnch' + i);
									if ($('a').eq(i).attr('href') != undefined) {
										var checkHref = $('a').eq(i).attr('href').length;
										if (checkHref) {
											var x1 = $('a').eq(i).attr('href');
											var x2 = x1.includes('https://');
											var x3 = x1.includes('mailto:');
											var x4 = x1.includes('%%view_email_url%%');
											var x5 = x1.includes('%%unsub_center_url%%');
											if (!x2 && !x3 && !x4 && !x5 && x1 != '#') {

												if (x1.indexOf(' ') <= 0) {

													$('a').eq(i).append('<div class="editDiv"><input style="border:2px solid red;" id="editableInput' + i + '" value="' + $('a').eq(i).attr('href') + '"><button id="' + i + '" class="editBtn' + i + '">https</button><div>');
													$('.editBtn' + i).click(function () {
														$('#editableInput' + i).val();
														console.log($(this).attr('id'));


														$('a#editableAnch' + $(this).attr('id')).attr('href', $('#editableInput' + $(this).attr('id')).val());

														$('.editBtn' + $(this).attr('id') + ', #editableInput' + $(this).attr('id')).remove();
													});




												} else {

													$('a').eq(i).append('<div class="editDiv"><input style="border:2px solid red;" id="editableInput' + i + '" value="' + $('a').eq(i).attr('href') + '"><button id="' + i + '" class="editBtn' + i + '">Broken link  find space</button></div>');
													$('.editBtn' + i).click(function () {
														$('#editableInput' + i).val();
														console.log($(this).attr('id'));


														$('a#editableAnch' + $(this).attr('id')).attr('href', $('#editableInput' + $(this).attr('id')).val());

														$('.editBtn' + $(this).attr('id') + ', #editableInput' + $(this).attr('id')).remove();
													});



												}



											} else if ($('a').eq(i).attr('href') == '#') {

												$('a').eq(i).append('<div class="editDiv"><input style="border:2px solid red;" id="editableInput' + i + '" value="' + $('a').eq(i).attr('href') + '"><button id="' + i + '" class="editBtn' + i + '"># Hash</button></div>');

												$('.editBtn' + i).click(function () {
													$('#editableInput' + i).val();
													console.log($(this).attr('id'));


													$('a#editableAnch' + $(this).attr('id')).attr('href', $('#editableInput' + $(this).attr('id')).val());

													$('.editBtn' + $(this).attr('id') + ', #editableInput' + $(this).attr('id')).remove();
												});


											}


											else {

											}
										} else {
											$('a').eq(i).append('<div class="editDiv"><input style="border:2px solid red;" id="editableInput' + i + '" value="' + $('a').eq(i).attr('href') + '"><button id="' + i + '" class="editBtn' + i + '">Blank href</button></div>');


											$('.editBtn' + i).click(function () {
												$('#editableInput' + i).val();
												console.log($(this).attr('id'));

												$('a#editableAnch' + $(this).attr('id')).attr('href', $('#editableInput' + $(this).attr('id')).val());

												$('.editBtn' + $(this).attr('id') + ', #editableInput' + $(this).attr('id')).remove();
											});


										}




									} else {
										$('a').eq(i).append('<div class="editDiv"><input style="border:2px solid red;" id="editableInput' + i + '" value="' + $('a').eq(i).attr('href') + '"><button id="' + i + '" class="editBtn' + i + '">Not href</button></div>');

										$('.editBtn' + i).click(function () {
											$('#editableInput' + i).val();
											console.log($(this).attr('id'));


											$('a#editableAnch' + $(this).attr('id')).attr('href', $('#editableInput' + $(this).attr('id')).val());

											$('.editBtn' + $(this).attr('id') + ', #editableInput' + $(this).attr('id')).remove();
										});


									}
								}

							} else {

								$(this).removeClass('active');
								$(this).addClass('inactive');
								$('.editBtn').attr('disabled', false);
								$(this).css({
									'border': 'none'
								});
								$('.editDiv').remove();

							}


						});

						$('.updateCode').click(function () {

							var getConfirmUpdate = confirm('Please make sure, after an update you cannot edit again!');
							if (getConfirmUpdate) {
								$("script").remove();
								$(".MyQA").remove();
								$('.editDiv').remove();

								$("body").find(".existMsoBtn").contents().unwrap();

								$("body").find(".xmpMso").contents().unwrap();
								localStorage.setItem("checkForCopy", true);
								localStorage.setItem("updateCode", '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"> <html lang="EN">' + $('html').html() + '</html>');

								addScripts();

								$('body').append('<div class="UpdateDoneMsg" style=" position: fixed;top: 50%;  left: 50%; transform: translate(-50%, -50%);    z-index: 9999999999;    background: #673ab7;    padding: 15px !important;  color: white;    line-height: 30px;  text-align: center;  border-radius:5px;display:none;font-size:15px;">Changes has been updated successfully!<br>Press "C" for copy the updated code</div>');

								$('.UpdateDoneMsg').fadeIn(1000);

								setTimeout(function () {
									$('.UpdateDoneMsg').fadeOut(1000, function () {
										$('.UpdateDoneMsg').remove();
									});
								}, 4000);
							}

						});



						//mso
						$('.inactiveCheckMsoLink.viewBtn.inactive').click(function () {
							$('.updateCode').hide();
							if ($('.editBtn').hasClass('active')) {
								$('.editBtn.active').click();
							}



							if ($('.inactiveCheckMsoLink.viewBtn').hasClass('inactive')) {

								$(this).removeClass('inactive');
								$(this).addClass('active');
								$('.viewBtn').attr('disabled', true);
								$(this).attr('disabled', false);
								$(this).css({
									'background': 'green'
								});





								for (var i = 0; i < $('a').length; i++) {
									if ($('a').eq(i).closest('span').hasClass('existMsoBtn')) {
										console.log("hasclass exist");


									} else {
										console.log("NOT hasclass exist");

										$('a').eq(i).parent().wrapInner('<span style="display: block;" class="existMsoBtn" id="msoID' + i + '"></span>');

									}

								}

								setTimeout(function () {
									for (var i = 0; i < $('.existMsoBtn').length; i++) {

										console.log("existMsoBtn existMsoBtn existMsoBtn -   " + $('.existMsoBtn').length);
										if ($("#msoID" + i).attr('id') != undefined) {
											console.log($("#msoID" + i).attr('id'));
											console.log("msoID msoID msoID -   " + $("#msoID" + i).attr('id'));


											$("#msoID" + i + " *").each(function () {

												console.log("each each each -   " + $("#msoID" + i).attr('id'));
												var checkMso = $(this).parent().html();
												var checkMsoBtnTrue = checkMso.includes("<v:roundrect");
												var checkMsoBtnTrue1 = checkMso.includes("urn:schemas-microsoft-com:office:word");
												if (checkMsoBtnTrue || checkMsoBtnTrue1) {

													console.log("length UUUUUUUUUUUU VIewewewewewew -   " + $('#msoID' + i).find('a').length);


													if ($('#msoID' + i).find('a').length >= 2) {
														$('body').append('<div class="ErrorMsg" style=" position: fixed;top: 50%;  left: 50%; transform: translate(-50%, -50%);    z-index: 9999999999;    background: #ececec;    padding: 10px !important;  color: red;    line-height: 10px;  text-align: center;  border-radius:5px;display:none;font-size:12px;"><b>Warnning!</b> Found two mso buttons in one <b><xmp style="display: inline-block;"><td>/<th></xmp></b> tag. It will create spacing issue in the outlook. Mso link check functionality will not work for this type of code.</div>');
														$('.ErrorMsg').fadeIn(1000);
														setTimeout(function () {
															$('.ErrorMsg').fadeOut(1000, function () {
																$('.ErrorMsg').remove();
															});
														}, 6000);
													}
													//else {

													console.log("checkMsoBtnTrue " + checkMsoBtnTrue + "checkMsoBtnTrue1 " + checkMsoBtnTrue1);
													$('<div style="position: absolute; background: red;" id="draggableM' + i + '"></div>').insertAfter($('#msoID' + i));
													//$("#msoID" + i).css({ 'border': '2px solid red' });




													console.log("checkkkk  " + checkMsoBtnTrue);

													localStorage.setItem("linkForMsoR" + i, $('a').eq(i).attr('href'));


													//console.log("HTML " + $(this).parent().html());
													console.log("get lenth a " + localStorage.getItem("linkForMsoR" + i).length);
													//var gg = $('*:contains("' + localStorage.getItem("linkForMsoR"+i) + '")').length;
													function countOccurences(string, word) {
														return string.split(word).length - 1;
													}
													var text = $(this).parent().html();
													var count = countOccurences(text, localStorage.getItem("linkForMsoR" + i)); // 2

													console.log("get lenth aaaaaaaa ffffffffffffffffffff " + count);




													//if ($(".msoReport").find('.in' + i).length < 1) {
													if (count != '2' && $(".msoReport").find('.in' + i).length < 1) {
														$("#msoID" + i).css({ 'border': '2px solid red' });
														$('.msoReport').append('<div style="cursor:pointer;" class="jumper in' + i + '" go="#draggableM' + i + '"> Not match Mso Link ' + i + ' </div >');
													}

												//}
												}
											});

										}
									}
								}, 1000);


							} else {

								$(this).removeClass('active');
								$(this).addClass('inactive');
								$('.viewBtn').attr('disabled', false);
								$(this).css({
									'background': '#00b9e5'
								});
								$('.msoReport').text('');

								for (var i = 0; i < $('a').length; i++) {
									$("#msoID" + i).contents().unwrap();
									$('#draggableM' + i).remove();
								}

							}

						});




						$('.editMsoCodeInactive.editBtn.inactive').click(function () {

							if ($('.viewBtn').hasClass('active')) {
								$('.viewBtn.active').click();
							}
							if ($('.editMsoCodeInactive.editBtn').hasClass('inactive')) {

								$(this).removeClass('inactive');
								$(this).addClass('active');
								$('.editBtn').attr('disabled', true);
								$(this).attr('disabled', false);
								$(this).css({
									'border-bottom': '2px solid green'
								});

								$('.updateCode').show();


								$('a').click(function (e) {
									e.preventDefault();
								});

								for (var i = 0; i < $('a').length; i++) {
									if ($('a').eq(i).closest('span').hasClass('existMsoBtn')) {
										console.log("hasclass exist");






									} else {
										console.log("NOT hasclass exist");
										$('a').eq(i).parent().wrapInner('<span style="display: block;" class="existMsoBtn" id="msoID' + i + '"></span>');
									}

								}

								setTimeout(function () {
									for (var i = 0; i < $('.existMsoBtn').length; i++) {




										if ($("#msoID" + i).attr('id') != undefined) {
											console.log($("#msoID" + i).attr('id'));

											$("#msoID" + i + " *").each(function () {
												var checkMso = $(this).parent().html();
												var checkMsoBtnTrue = checkMso.includes("<v:roundrect");
												var checkMsoBtnTrue1 = checkMso.includes("urn:schemas-microsoft-com:office:word");


												console.log($("#msoID" + i).find('.editDiv').length);

												var checkExist = $("#msoID" + i).find('.editDiv').length;

												if (checkExist == 0 && (checkMsoBtnTrue || checkMsoBtnTrue1)) {

													console.log("length UUUUUUUUUUUU  -   " + $('#msoID' + i).find('a').length);

													if ($('#msoID' + i).find('a').length >= 2) {
														$('body').append('<div class="ErrorMsg" style=" position: fixed;top: 50%;  left: 50%; transform: translate(-50%, -50%);    z-index: 9999999999;    background: #ececec;    padding: 10px !important;  color: red;    line-height: 10px;  text-align: center;  border-radius:5px;display:none;font-size:12px;"><b>Warnning!</b> Found two mso buttons in one <b><xmp style="display: inline-block;"><td>/<th></xmp></b> tag. It will create spacing issue in the outlook. Mso link check functionality will not work for this type of code.</div>');
														$('.ErrorMsg').fadeIn(1000);
														setTimeout(function () {
															$('.ErrorMsg').fadeOut(1000, function () {
																$('.ErrorMsg').remove();
															});
														}, 6000);
													} else {





													console.log("checkkkk  " + checkMsoBtnTrue);




													localStorage.setItem("linkForMso" + i, $('a').eq(i).attr('href'));


													console.log("get lenth a " + localStorage.getItem("linkForMso" + i).length);
													//var gg = $('*:contains("' + localStorage.getItem("linkForMso"+i) + '")').length;
													function countOccurences(string, word) {
														return string.split(word).length - 1;
													}
													var text = $(this).parent().html();
													var count = countOccurences(text, localStorage.getItem("linkForMso" + i)); // 2

													console.log("get lenth aaaaaaaa linkForMso eeeeeeeeeeee" + count);




													//if ($(".msoReport").find('.in' + i).length < 1) {
													if (count != '2') {
														$("#msoID" + i).css({ 'border': '2px solid red' });

													} else {
														$("#msoID" + i).css({ 'border': '2px solid green' });
													}









													$('<div class="editDiv"><br><textarea style="display:block;" contenteditable="true" id="textarea' + i + '"><xmp class="xmpMso" style="white-space: pre-line;">' + $(this).parent().html() + '</xmp></textarea><br><button class="searchMso' + i + '"  id="' + i + '">Search mso href</button> <button class="copyMso' + i + '"  id="' + i + '">Copy mso link</button>  <button class="msoUpdate' + i + '"  id="' + i + '">Update</button><div>').insertAfter(this);

													$(".searchMso" + i).click(function () {
														var area = $('#textarea' + $(this).attr('id'));
														var findWord1 = "href";
														var findWord2 = "<v:roundrect";
														var findWord3 = "<!--[if mso]";
														var index1 = area.val().indexOf(findWord1);
														var index2 = area.val().indexOf(findWord2);
														var index3 = area.val().indexOf(findWord3);
														if (index1 >= 0) {
															area.focus().prop({ 'selectionStart': index1, 'selectionEnd': index1 + findWord1.length });
														} else if (index2 >= 0) {
															area.focus().prop({ 'selectionStart': index2, 'selectionEnd': index2 + findWord2.length });
														}
														else {
															area.focus().prop({ 'selectionStart': index3, 'selectionEnd': index3 + findWord3.length });
														}



													});

													$(".copyMso" + i).click(function () {
														$('body').append('<div id="copyLink' + $(this).attr('id') + '">' + localStorage.getItem("linkForMso" + $(this).attr('id')) + '</div>');
														copyToClipboard1("#copyLink" + $(this).attr('id'));
														$('#copyLink' + $(this).attr('id')).remove();
													});

													function copyToClipboard1(element) {
														var $temp = $("<input>");
														$("body").append($temp);
														$temp.val($(element).text()).select();
														document.execCommand("copy");
														$temp.remove();
													}


													$('.msoUpdate' + i).click(function () {

														function replaceXmp(str, findArray, replaceArray) {
															var i, regex = [], map = {};
															for (i = 0; i < findArray.length; i++) {
																regex.push(findArray[i].replace(/([-[\]{}()*+?.\\^$|#,])/g, '\\$1'));
																map[findArray[i]] = replaceArray[i];
															}
															regex = regex.join('|');
															str = str.replace(new RegExp(regex, 'g'), function (matched) {
																return map[matched];
															});
															return str;
														}
														var updateXmpRemoveCode = replaceXmp($('#textarea' + $(this).attr('id')).val(), ['<xmp class="xmpMso" style="white-space: pre-line;">', '</xmp>'], [' ', ' ']);

														console.log(updateXmpRemoveCode);
														$('#textarea' + $(this).attr('id')).val(updateXmpRemoveCode);


														var getMsoVal = $('#textarea' + $(this).attr('id')).val();

														$('#msoID' + $(this).attr('id')).html(getMsoVal);
													});

												}
												}

											});

										}
									}

								}, 1000);

							}
							else {
								$(this).removeClass('active');
								$(this).addClass('inactive');
								$('.editBtn').attr('disabled', false);
								$(this).css({
									'border': 'none'
								});
								$('.editDiv').remove();

								for (var i = 0; i < $('a').length; i++) {
									$("body").find("#msoID" + i).contents().unwrap();
									$(".editDiv").remove();
								}

							}

						});






						$('a').click(function (e) {
							e.preventDefault();
						});

						$(document).on("dblclick", "table tr", function (event) {

							event.stopPropagation();

							if ($('table tr').find('.currentEdit').length == 0) {
								console.log("currentEdit iff" + $('table tr').find('.currentEdit').length == 0);
								$(this).wrap('<span class="spanEdit" style="position:relative;border:1px solid red; display: block;"></span>');
								$(this).parent().append('<button contenteditable="false" class="closeSourceCodeBtn">X</button><button contenteditable="false" class="viewSourceCode">view</button>');



								var domElement = $(this).get(0);
								console.log("nodeName" + domElement.nodeName);
								console.log("button length" + $(this).find('button').length);
								$(domElement).attr('contenteditable', 'true');
								$(this).addClass('currentEdit');

								$('.closeSourceCodeBtn').css({ 'position': 'absolute', 'top': '-21px', 'right': '46px' });
								$('.viewSourceCode').css({ 'position': 'absolute', 'top': '-21px', 'right': '0' });

							} else {
								console.log("currentEdit else" + $('table').find('.currentEdit').length == 0);
							}


						});

						$(document).on("click", ".viewSourceCode", function () {
							if ($('table tr').find('#textareaID').length == 0) {
							
								$('table tr').find(".currentEdit").wrapInner('<span class="contentWrap"></span>');
								$('table tr').find(".currentEdit").children(this).addClass('liveEdit');
								$('table tr').find(".currentEdit").find('.contentWrap').parent().append('<textarea id="textareaID" class="codeXMP"><xmp class="xmpMso" style="white-space: pre-line;">' + $('table tr').find(".currentEdit").find('.contentWrap').html() + '</xmp></textarea>');

								$('table tr').find(".currentEdit").find('#textareaID').removeClass('liveEdit');
								$('#textareaID').css({ 'position': 'fixed', 'bottom': '10px', 'left': '0', 'z-index': '999999', 'width': '98%', 'height': '130px', 'background': 'black', 'color': '#c0c0c0', 'line-height': '18px', 'font-size': '11px', 'padding': '8px' });
							}

						});


						$(document).on("change", "#textareaID", function () {

							function replaceXmp(str, findArray, replaceArray) {
								var i, regex = [], map = {};
								for (i = 0; i < findArray.length; i++) {
									regex.push(findArray[i].replace(/([-[\]{}()*+?.\\^$|#,])/g, '\\$1'));
									map[findArray[i]] = replaceArray[i];
								}
								regex = regex.join('|');
								str = str.replace(new RegExp(regex, 'g'), function (matched) {
									return map[matched];
								});
								return str;
							}
							var updateXmpRemoveCode = replaceXmp($('#textareaID').val(), ['<xmp class="xmpMso" style="white-space: pre-line;">', '</xmp>'], [' ', ' ']);

							console.log(updateXmpRemoveCode);
							$('table').find(".currentEdit").find('.liveEdit').html(updateXmpRemoveCode);
						

						});

						$(document).on("click", ".closeSourceCodeBtn", function () {
					
							$('table tr').find(".currentEdit").find('#textareaID').remove();
							$('table').find(".spanEdit").find('tr').removeAttr("style");
							$('table').find(".spanEdit").find("tr").removeAttr('contenteditable');
							$('table').find("tr").removeClass('liveEdit');
							$('table').find(".spanEdit").find("tr").removeClass('currentEdit');
							$('table').find('.closeSourceCodeBtn').remove();
							$('table').find('.viewSourceCode').remove();
							$('table').find('.codeXMP').remove();
							$('table').find(".spanEdit").contents().unwrap();
							$('table').find(".contentWrap").contents().unwrap();


						});


						$('.viewFullSourceCode').click(function () {
							$('body').append('<div class="txtArea"><textarea id="textareaIDx" class="codeXMPx"><xmp class="xmpMsox" style="white-space: pre-line;">' + $('table').eq(0).html() + '</xmp></textarea><button contenteditable="false" class="closeSourceCodeBtn">X</button><button contenteditable="false" class="saveSourceCode">Save</button></div>');

							$('.txtArea').css({ 'position': 'fixed', 'bottom': '10px', 'left': '0', 'z-index': '999999', 'width': '98%', 'padding': '8px' });
							$('#textareaIDx').css({ 'width': '98%', 'height': '130px', 'background': 'black', 'color': '#c0c0c0', 'line-height': '18px', 'font-size': '11px', 'padding': '8px' });
						});











					}
					else {
						$('body').append('<div style="border-bottom:3px solid red; overflow: auto; box-shadow: rgb(116 114 114) 3px 3px 9px 0px; position:absolute;z-index:9999;top:50px ;background:#ececec;width: 284px;text-align: center;  padding: 15px !important;transform: translate(-50%, 15%); left: 50%;">                                                                                                                                                                                                                                    <div style="position: relative;font-size: inherit;font-weight: bold;"><span style="font-size: 45px;position: absolute;left: 102px;color: #9c27b0;letter-spacing: normal;word-spacing: 9px;top: -5px;">🔎</span><span style="font-size: 31px;letter-spacing: -5px;line-height: 26px;top: -4px;position: relative;color: #f44336;opacity: 1;left: 21px;font-family: cursive;text-shadow: 2px 2px 1px black;">A<sup>+</sup></span><span style="position: relative;top: -15px;left: 25px;color: #000000;font-size: 16px;">plus</span><span style="font-size: 8px;position: relative;left: -2px;color: #8c8c8c;top: -4px;">v1.0</span></div>                                                                                                                                       <br><br>                                                                              Release version ' + field.version + ' <br><br> <a style="text-decoration: none;" href="https://myoffice.accenture.com/personal/niranjan_s_chavan_accenture_com/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fniranjan%5Fs%5Fchavan%5Faccenture%5Fcom%2FDocuments%2FIN%2Dproduction%2Ehtml&amp;parent=%2Fpersonal%2Fniranjan%5Fs%5Fchavan%5Faccenture%5Fcom%2FDocuments"> Update Now </a>                                                              <br><br>Feedback<br> <textarea id="feedback" style="padding: 10px; width: 263px; height: 100px;max-width: 263px;"></textarea> <br><button class="fbDone" style="border: none;cursor: pointer;background: #00b9e5;margin: 10px 0px;padding: 4px 10px;color: white;">Submit</button</div>');
					}

					$('.fbDone').click(function () {
						var getFbContent = $('#feedback').val();

						if (getFbContent != '') {
							getFbContent = getFbContent.replace(/\n/g, "%0$");
							getFbContent = getFbContent.replace(" ", "%20");
							setTimeout(function () {
								var splitWay = getFbContent.split("$").join("D");
								setTimeout(function () {
									var email = 'niranjan.s.chavan@accenture.com';
									var subject = 'Aplus Feedback';
									var emailBody = splitWay;
									window.location = 'mailto:' + email + '?subject=' + subject + '&body=' + emailBody;
								}, 500);

							}, 100);
						} else {
							alert('Please add your feedback!');
						}

					});


				});
			});


			
			


		} else {
			alert("Already active! Please close existing and try again!");
		}






	}, 1000);



	var ser_ = 'ran';
	var g_ = 'gi';
	var hb_ = 'thu';





})();







