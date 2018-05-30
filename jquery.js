$(document).ready(
						function()
						{
							$("#button1").click(
												function()
													{
														$("#para2").hide("slow",function(){
																				alert("this paragraph is hidden");
																			});
													}
												);
							$("#button2").click(
												function()
												{
													$("#para2").show();
												}
												)
							$("#button3").click(
												function()
													{
														$(".head1").hide();			
													}
												)
							$("#button4").click(
												function()
														{
															$("p").toggle("slow");
														}
												)
							$("p").click(
										function()
												{
													$(this).hide();
												}
										)							
							$("h1").dblclick(
												function()
														{
															$("p").show();
														}
												)							
							/* $("#flip").click(
												function()
														{
															$("#panel").slideDown("slow");
														}
												)
							$("#panel").mouseleave(
												function()
														{
															$("#panel").slideUp("fast");
														}
											) */					
							$("#flip").click(
												function()
														{
															$("#panel").slideToggle("slow");
														}
												)					
							$("#div1").on
										(	
											{
												mouseenter:function()
																	{
																		$(this).css("background-color", "red");
																	},
																					
												mouseleave:function()
																	{
																		$(this).css("background-color", "lightgray");
																	}													
											}
										)
						$("#bntAnimate").click(
												function()
														{
															var ad1 = $("#animated1");
															ad1.animate({left:'250px',height:'300px',width:'400px'},'slow');
															ad1.animate({fontSize:'100px'},'slow');
														}
												)				
							
						$("#bntAnimateStop").click(
												function()
														{
															$("#animated1").stop(true);
														}
												)	
												
						$("#bntAnimate2").click(
												function()
														{
															$("#animated2").animate({left:'700px'},'slow')
															.animate({fontSize:'40px'},'slow')
															.animate({top:'0px'})
															.animate({height:'300px',width:'400px'});
														}
												)
						}
				);
						