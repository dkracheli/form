$(document).ready(function () {
	$(".button1").click(function () {
		$("#titel").fadeOut();
		$(".formStart").fadeIn(3000);
	});
});
$(document).ready(function () {
	$(".MuggleStudies").click(function () {
		$(".MuggleStudies").thisValue = "you cadinf???";
	});
});
$(document).ready(function () {
	$(".button2").click(function () {
		$("#titel").fadeOut();
		$(".noEnter").fadeIn(3000);
	});
});

$(document).ready(function () {
	$(".button1").click(function () {
		$("#titel").fadeOut();
		$(".p").fadeIn(3000);
	});
});

$(document).ready(function () {
	$("#AnimagusYes").click(function () {
		$(".AnimagusWhich").fadeIn(1000);
	});
});
$(document).ready(function () {
	$("#AnimagusNo").click(function () {
		$(".AnimagusWhich").fadeOut(0);
	});
});
$(document).ready(function () {
	$(".AnimagusIMG").click(function () {
		$(".AnimagusExplanation").fadeIn(0);
	});
});
$(document).ready(function () {
	$(".AnimagusExplanation").click(function () {
		$(".AnimagusExplanation").fadeOut(0);

	});
});
$(function () {
	$('#fullName').keydown(function (e) {
		if (e.shiftKey || e.ctrlKey || e.altKey) {
			e.preventDefault();
		} else {
			var key = e.keyCode;
			if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
				e.preventDefault();
			}
		}
	});
});
let page = 1;
jQuery(document).ready(function () {
	// click on next button
	jQuery('.form-wizard-next-btn').click(function () {
		let parentFieldset = jQuery(this).parents('.wizard-fieldset');
		let currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
		let next = jQuery(this);
		let nextWizardStep = true;
		parentFieldset.find('.wizard-required').each(function () {
			var thisValue = jQuery(this).val();

			if (thisValue == "") {
				jQuery(this).siblings(".wizard-form-error").slideDown();
				nextWizardStep = false;
			} else {
				jQuery(this).siblings(".wizard-form-error").slideUp();

			}
			if (page == 1) {

				let fullName = document.getElementById("fullName");
				let pass = document.getElementById("pass");
				let age = document.getElementById("age");
				if (hasWhiteSpace(fullName.value) == false) {
					jQuery(this).siblings(".fullNameError").slideDown();
					nextWizardStep = false;
				} else {
					jQuery(this).siblings(".fullNameError").slideUp();
				}
				if (pass.value.length < 8) {
					nextWizardStep = false;
					jQuery(this).siblings(".passError").slideDown();
				} else {
					jQuery(this).siblings(".passError").slideUp();
				}
				if (age.value < 21 || age.value > 28) {
					jQuery(this).siblings(".ageError").slideDown();
					nextWizardStep = false;
				}else{
					jQuery(this).siblings(".ageError").slideUp();
				}
			}
			if (page == 2) {
				var mailC = document.getElementById("mail");
				if (mailCheack(mailC.value) == false) {
					jQuery(this).siblings(".mailError").slideDown();
					nextWizardStep = false;
				} else {
					jQuery(this).siblings(".mailError").slideUp();
				}
				var phon = document.getElementById("phone");
				if (phoneCheack(phon.value)) {
					nextWizardStep = false;
					jQuery(this).siblings(".phonError").slideDown();
				} else {
					jQuery(this).siblings(".phonError").slideUp();
				}
			}
			if (page == 3) {
				var form_data = new FormData(document.querySelector("form"));
				if (form_data.getAll("interests[]").length < 2) {

					nextWizardStep = false;
				} else {
					nextWizardStep = true;
				}
			}

		});
		if (nextWizardStep) {
			page++;
			next.parents('.wizard-fieldset').removeClass("show", "400");
			currentActiveStep.removeClass('active').addClass('activated').next().addClass('active', "400");
			next.parents('.wizard-fieldset').next('.wizard-fieldset').addClass("show", "400");
			jQuery(document).find('.wizard-fieldset').each(function () {
				if (jQuery(this).hasClass('show')) {
					var formAtrr = jQuery(this).attr('data-tab-content');
					jQuery(document).find('.form-wizard-steps .form-wizard-step-item').each(function () {
						if (jQuery(this).attr('data-attr') == formAtrr) {
							jQuery(this).addClass('active');
							var innerWidth = jQuery(this).innerWidth();
							var position = jQuery(this).position();
							jQuery(document).find('.form-wizard-step-move').css({
								"left": position.left,
								"width": innerWidth
							});
						} else {
							jQuery(this).removeClass('active');
						}
					});
				}
			});
		}
	});
	//click on previous button
	jQuery('.form-wizard-previous-btn').click(function () {

		page--;
		var counter = parseInt(jQuery(".wizard-counter").text());;
		var prev = jQuery(this);
		var currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
		prev.parents('.wizard-fieldset').removeClass("show", "400");
		prev.parents('.wizard-fieldset').prev('.wizard-fieldset').addClass("show", "400");
		currentActiveStep.removeClass('active').prev().removeClass('activated').addClass('active', "400");
		jQuery(document).find('.wizard-fieldset').each(function () {
			if (jQuery(this).hasClass('show')) {
				var formAtrr = jQuery(this).attr('data-tab-content');
				jQuery(document).find('.form-wizard-steps .form-wizard-step-item').each(function () {
					if (jQuery(this).attr('data-attr') == formAtrr) {
						jQuery(this).addClass('active');
						var innerWidth = jQuery(this).innerWidth();
						var position = jQuery(this).position();
						jQuery(document).find('.form-wizard-step-move').css({
							"left": position.left,
							"width": innerWidth
						});
					} else {
						jQuery(this).removeClass('active');
					}
				});
			}
		});
	});
	//click on form submit button
	jQuery(document).on("click", ".form-wizard .form-wizard-submit", function () {
		var parentFieldset = jQuery(this).parents('.wizard-fieldset');
		var currentActiveStep = jQuery(this).parents('.form-wizard').find('.form-wizard-steps .active');
		parentFieldset.find('.wizard-required').each(function () {
			var thisValue = jQuery(this).val();
			if (thisValue == "") {
				jQuery(this).siblings(".wizard-form-error").slideDown();
			} else {
				jQuery(this).siblings(".wizard-form-error").slideUp();
			}
		});
	});
	// focus on input field check empty or not
	jQuery(".form-control").on('focus', function () {
		var tmpThis = jQuery(this).val();
		if (tmpThis == '') {
			jQuery(this).parent().addClass("focus-input");
		} else if (tmpThis != '') {
			jQuery(this).parent().addClass("focus-input");
		}

	}).on('blur', function () {
		var tmpThis = jQuery(this).val();
		if (tmpThis == '') {
			jQuery(this).parent().removeClass("focus-input");
			jQuery(this).siblings('.wizard-form-error').slideDown("3000");
		} else if (tmpThis != '') {
			jQuery(this).parent().addClass("focus-input");
			jQuery(this).siblings('.wizard-form-error').slideUp("3000");
		}
	});
});

function hasWhiteSpace(s) {
	let space = ' ';
	for (let i = 0; i < s.length; i++)
		if (s[i] == space)
			return true

	return false;
}

function mailCheack(s) {
	let mail = '@';
	for (let i = 0; i < s.length; i++)
		if (s[i] == mail)
			return true

	return false;
}

function phoneCheack(s) {
	let phone = '-';
	for (let i = 0; i < s.length; i++)
		if (s[i] == phone)
			return true

	return false;
}

function showPass() {
	let input = document.getElementById("pass");
	let show = document.getElementById("hidden1");
	let hidden = document.getElementById("hidden2");
	console.log(input.type);
	if (input.type === "password") {
		input.type = "text"
		show.style.display = "block"
		hidden.style.display = "none"
	} else {
		input.type = "password"
		show.style.display = "none"
		hidden.style.display = "block"
	}
}