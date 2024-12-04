$ = jQuery;function loaderInitializationRes() {
				jQuery(".grid-item").slice(0, 12).show();
				if (jQuery(".grid-item:hidden").length != 0) {
					jQuery("#loadMore").show();
				} else {
					jQuery("#loadMore").hide();
				}
			}
			function loaderInitialization() {
				jQuery(".cr-grid-item").slice(0, 12).show();
				if (jQuery(".cr-grid-item:hidden").length !== 0) {
					jQuery("#loadMore").show();
				} else {
					jQuery("#loadMore").hide();
				}
			}
			const ArchiveSearch = (industry = '', technology_domain = '', resource = '', s = '') => {
				const loader = document.querySelector(".cta-section .loader");
				loader.innerText = "";
				loader.classList.add('active');
				$('.industry-selected-taxonomy-slug').text(industry);
				$('.technology-domain-selected-taxonomy-slug').text(technology_domain);
				$('.resource-selected-taxonomy-slug').text(resource);
			
				let category = $('#selected_category').val();
				let query_parts = `&category=${category ?? ''}&industry=${industry ?? ''}&technology_domain=${technology_domain ?? ''}&resource=${resource ?? ''}&search=${s}`;
				var html_string = '<div class="onload-container"><span class="onload-content"> Fetching Posts... </span></div>';
				let ajaxurl = '/wp-json/nashtech/v1/blog_search_results?' + query_parts;
				$.ajax({
					type: 'GET',
					url: ajaxurl,
					success: function (response, textStatus, jqXHR) {
						if (response.results.length > 0) {
							cards = response.results;
							if (resource === '-1') {
								cards.forEach((card, index, array) => {
									html_string += '<div class="grid-item" style="display:none">';
									html_string += '<div class="grid-item-inner">';
									html_string += '<div class="thumbWrap">';
									html_string += `<a class="postThumbnail" href="${card.url}">`;
									html_string += `<img loading="lazy" width="1130" height="424" src="${card.featured_image}" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" decoding="async"/>`;
									html_string += `</a>`;
									html_string += `</div>`;
									html_string += `<div class="gridContent">`;
									html_string += `<div class="postDescOuter">`;
									html_string += `<div class="postDesc">`;
									html_string += `<div class="case-study-logo colored">`;
									html_string += `<img decoding="async" src="${card.logo_image}" alt="">`;
									html_string += `</div>`;
									html_string += `<h5 class="postTitle" title="${card.title}">`;
									const fullTitle = card.title;
									var shortenedTitle = fullTitle.substring(0, 100);
									if (fullTitle.length > 100) {
										var lastSpaceIndex = shortenedTitle.lastIndexOf(' ');
										if (lastSpaceIndex !== -1) {
											shortenedTitle = shortenedTitle.substring(0, lastSpaceIndex) + "...";
										}
									}
									const fullexceprt = card.excerpt;
									var shortexceprt = fullexceprt.substring(0, 150);
									if (fullexceprt.length > 150) {
										var lastSpaceIndex = shortexceprt.lastIndexOf(' ');
										if (lastSpaceIndex !== -1) {
											shortexceprt = shortexceprt.substring(0, lastSpaceIndex) + "...";
										}
									}
									html_string += `<a href="${card.url}">${shortenedTitle}</a>`;
									html_string += `</h5>`;
									html_string += `<p class="postExcerpt">${shortexceprt}</p>`;
									html_string += `<div class="techUsed">`;
									// Split the tech_terms string into an array
									// debugger;
									const techTermsArray = card.tech_terms.split(', ');
									// console.log("links array: ", card.term_links);
									const techTermLinks = card.term_links.length?card.term_links.split(', '):[];
			
									// Loop through the array and create an HTML element for each term
									let ind = 0;
									techTermsArray.forEach(term => {
										html_string += `<a class = "techLink" href = ${techTermLinks[ind]}><span class="tech">${term}</span></a>`;
										ind++;
									});
									html_string += `</div>`;
									html_string += `</div>`;
			
									html_string += `<div class="footerTech">`;
									html_string += `<div class="techUsed">`;
									const footerTechTermsArray = card.tech_terms.split(', ');
			
									ind = 0;
									footerTechTermsArray.forEach(term => {
										html_string += `<a class = "techLink" href = ${techTermLinks[ind]}><span class="tech">${term}</span></a>`;
										ind++;
									});
									html_string += `</div>`;
									html_string += `</div>`;
									html_string += `<a class="postNav" href="${card.url}">`;
									html_string += `<img decoding="async" src="wp-content/uploads/2023/03/red-arrow.svg">`;
									html_string += `</a>`;
									html_string += `</div>`;
									html_string += `</div></div></div>`;
			
								});

							}
							else {
								cards.forEach((card, index, array) => {
									if (card.isSingle) {
										html_string += '<div class="cr-grid-item lightweight" style="display:none"> <div class="cr-grid-item-inner"><div class="cr-thumbWrap">';
										html_string += `<a class="cr-postThumbnail" href="${card.download_url}"  target="_blank">
									<img loading="lazy" width="1536" height="581" src="${card.featured_image}" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" decoding="async"/></a>`;
			
										html_string += '<div class="resourceType">'
										// 						html_string += `<a style="color:white" href = '${card.download_url}' target="_blank"> Download </a>`;
			
										//all resource terms
										const resTerms = card.res_terms.split(', ');
										resTerms.forEach(term => {
											html_string += `<span class="resource downloadable"><a class="dCTA" style="pointer-events:none">${term}</a></span>`;
										});
			
										html_string += "</div>";
										html_string += "</div>";
										html_string += "<div class='cr-gridContent'> <div class='cr-postDescOuter'>";
			
										html_string += "<div class='resourceFooter'> <div class='cr-cat'>";
										if (card.categories.length > 0) {
											const categList = card.categories;
											categList.forEach((categ) => {
												// Check if the category name is "Our thinking" and skip printing it
												if (categ.name === "Our thinking") {
													// 												continue;
												}
												else if (categ.name === "News") {
													html_string += `<span class='category news'>${categ.name}</span>`;
												}
												else if (categ.name === "Insights") {
													html_string += `<span class='category insights'>${categ.name}</span>`
												}
												else if (categ.name === "Case studies") {
													html_string += `<span class='category caseStudy'>${categ.name}</span>`
												}
												else if (categ.name === "Resources") {
													html_string += `<span class='category resources'>${categ.name}</span>`
												}
											})
										}
										else {
											html_string += "<span class='categ'> NA </span>";
										}
			
										html_string += `</div>`;
										// 							html_string += `<span class = 'grid-date'> ${card.date}</span>`
										html_string += "</div>";
			
										html_string += "<div class='cr-postDesc'>";
										html_string += `<h5 class= 'cr-postTitle' title='${card.title}'><a href='${card.download_url}'  target='_blank'> ${card.title} </a></h5>`;
										html_string += "</div>";
			
			
										html_string += "</div>";
										html_string += "</div>";
										html_string += "</div>";
										html_string += "</div>";
									}
									else {
										html_string += '<div class="cr-grid-item" style="display:none"> <div class="cr-grid-item-inner"><div class="cr-thumbWrap">';
										html_string += `<a class="cr-postThumbnail" href="${card.url}">
									<img loading="lazy" width="1536" height="581" src="${card.featured_image}" class="attachment-post-thumbnail size-post-thumbnail wp-post-image" decoding="async"/></a>`;
			
										html_string += '<div class="resourceType">'
										// 						html_string += `<a style="color:white" href = '${card.download_url}' target="_blank"> Download </a>`;
			
										//all resource terms
										const resTerms = card.res_terms.split(', ');
										resTerms.forEach(term => {
											html_string += `<span class="resource downloadable"><a class="dCTA" style="pointer-events:none">${term}</a></span>`;
										});
			
										html_string += "</div>";
										html_string += "</div>";
										html_string += "<div class='cr-gridContent'> <div class='cr-postDescOuter'>";
										html_string += "<div class='resourceFooter'> <div class='cr-cat'>";
										if (card.categories.length > 0) {
											const categList = card.categories;
											categList.forEach((categ) => {
												// Check if the category name is "Our thinking" and skip printing it
												if (categ.name === "Our thinking") {
													// 												continue;
												}
												else if (categ.name === "News") {
													html_string += `<span class='category news'>${categ.name}</span>`;
												}
												else if (categ.name === "Insights") {
													html_string += `<span class='category insights'>${categ.name}</span>`
												}
												else if (categ.name === "Case studies") {
													html_string += `<span class='category caseStudy'>${categ.name}</span>`
												}
												else if (categ.name === "Resources") {
													html_string += `<span class='category resources'>${categ.name}</span>`
												}
											})
										}
										else {
											html_string += "<span class='categ'> NA </span>";
										}
			
										html_string += `</div>`;
										// 					html_string += `<span class = 'grid-date'> ${card.date} </span>`;
										html_string += "</div>";
			
			
										html_string += "<div class='cr-postDesc'>";
										html_string += `<h5 class= 'cr-postTitle' title='${card.title}'><a href='${card.url}'> ${card.title} </a></h5>`;
										html_string += "</div>";
			
			
										html_string += "</div>";
										html_string += "</div>";
										html_string += "</div>";
										html_string += "</div>";
									}
								});
							}
						}
						else {
							html_string += `<div class="no_result_found">No Results Found</div>`;
						}
						if (resource === '-1') {
							$('.customPostGrid').html(html_string);
							loaderInitializationRes();
							const urlParams = new URLSearchParams(window.location.search);
							let allEmpty = true;
							if (industry !== '') {
								urlParams.set('industry', industry);
								allEmpty = false;
							}
							else {
								urlParams.delete('industry');
							}
							if (technology_domain !== '') {
								urlParams.set('technology_domain', technology_domain);
								allEmpty = false;
							}
							else {
								urlParams.delete('technology_domain');
							}
							if (industry === '' && technology_domain === '' && s !== '') {
								urlParams.set('search', s);
								allEmpty = false;
							}
							else {
								urlParams.delete('search');
							}
							const newUrl = window.location.pathname + (allEmpty===true?'':('?' + urlParams.toString()));
							window.history.pushState({ path: newUrl }, '', newUrl);
						}
						else {
							$('.customResourceGrid').html(html_string);
							loaderInitialization();
						}
						$('.pagination').hide();
						loader.classList.remove('active');
						document.querySelector(".onload-container").classList.remove("onload-container-show");
						truncTitle();
					}
				})
				
			}
			
			$(function () {
				$(".search_form").submit(function (event) {
					event.preventDefault();
					document.querySelector(".onload-container").classList.add("onload-container-show");
					if ($('#selected_category').val() === 'resources') {//for resources
						ArchiveSearch('', '-1', '', $(".blog-search").val(),);
					}
					else {//for case-studies
						ArchiveSearch('', '', '-1', $(".blog-search").val(),);
					}
				});
			});
			function truncTitle(){
				jQuery('.customPostGrid .grid-item').each(function() {
					const grid = jQuery(this);
					const title = grid.find(".postTitle");
					const originalText = title.text();
					const fullText = title.attr('title');
					var shortenedTitle = fullText.substring(0, 120); 
					if (fullText.length > 120) {
						// Truncate to 100 characters
							// Find the last space within the limit
							var lastSpaceIndex = shortenedTitle.lastIndexOf(' ');
							if (lastSpaceIndex !== -1) {
							  // If a space was found within the limit, truncate at that point
							  shortenedTitle = shortenedTitle.substring(0, lastSpaceIndex)+"...";
							}
					}
					grid.hover(function() {
						title.find("a").eq(0).text(shortenedTitle);
					}, function() {
						title.find("a").eq(0).text(originalText);
					});
				});
			}truncTitle();
			jQuery("#loadMore a").on('click', function(e) {
				e.preventDefault();
				if(jQuery(".grid-item").length>0){
					jQuery(".grid-item:hidden").slice(0, 12).slideDown();
				if (jQuery(".grid-item:hidden").length == 0) {
					jQuery("#loadMore").fadeOut('slow');
				}
				}
				else if(jQuery(".cr-grid-item").length>0){
					jQuery(".cr-grid-item:hidden").slice(0, 12).slideDown();
				if (jQuery(".cr-grid-item:hidden").length == 0) {
					jQuery("#loadMore").fadeOut('slow');
				}
				}
				
			});			