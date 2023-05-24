console.log("Script loaded");
document.addEventListener("DOMContentLoaded", function() {
  var cofounder1NameInput = document.getElementById('Cofounder1-Name');
  var cofounder2NameInput = document.getElementById('Cofounder2-Name');
  var cofounder3NameInput = document.getElementById('Cofounder3-Name');
  var cofounder4NameInput = document.getElementById('Cofounder4-Name');

  var cofounder3NameLabel = document.getElementById('Cofounder3NameLabel');
  var cofounder4NameLabel = document.getElementById('Cofounder4NameLabel');
  
  // Get the radio buttons
  var seekingInvestmentYes = document.getElementById('SeekingInvestmentRadioYes');
  var seekingInvestmentNo = document.getElementById('SeekingInvestmentRadioNo');

  var ceoLabel1 = document.getElementById('CEOCofounder1Label');
  var ceoLabel2 = document.getElementById('CEOCofounder2Label');
  var ceoLabel3 = document.getElementById('CEOCofounder3Label');
  var ceoLabel4 = document.getElementById('CEOCofounder4Label');

  var ideaLabel1 = document.getElementById('IdeaLabelCofounder1');
  var ideaLabel2 = document.getElementById('IdeaLabelCofounder2');
  var ideaLabel3 = document.getElementById('IdeaLabelCofounder3');
  var ideaLabel4 = document.getElementById('IdeaLabelCofounder4');

  var ideasGuyLabel1 = document.getElementById('IdeasGuyLabel1');
  var ideasGuyLabel2 = document.getElementById('IdeasGuyLabel2');
  var ideasGuyLabel3 = document.getElementById('IdeasGuyLabel3');
  var ideasGuyLabel4 = document.getElementById('IdeasGuyLabel4');

  var industryExpertiseLabel1 = document.getElementById('IndustryExpertiseLabel1');
  var industryExpertiseLabel2 = document.getElementById('IndustryExpertiseLabel2');
  var industryExpertiseLabel3 = document.getElementById('IndustryExpertiseLabel3');
  var industryExpertiseLabel4 = document.getElementById('IndustryExpertiseLabel4');

  var startupExperienceLabel1 = document.getElementById('StartupExperienceLabel1');
  var startupExperienceLabel2 = document.getElementById('StartupExperienceLabel2');
  var startupExperienceLabel3 = document.getElementById('StartupExperienceLabel3');
  var startupExperienceLabel4 = document.getElementById('StartupExperienceLabel4');

  var ceoInput1 = document.getElementById('CEOCofounder1');
  var ceoInput2 = document.getElementById('CEOCofounder2');
  var ceoInput3 = document.getElementById('CEOCofounder3');
  var ceoInput4 = document.getElementById('CEOCofounder4');

  var ideaInput1 = document.getElementById('IdeaBoxCofounder1');
  var ideaInput2 = document.getElementById('IdeaBoxCofounder2');
  var ideaInput3 = document.getElementById('IdeaBoxCofounder3');
  var ideaInput4 = document.getElementById('IdeaBoxCofounder4');

  var ideasGuyInput1 = document.getElementById('IdeasGuyBox1');
  var ideasGuyInput2 = document.getElementById('IdeasGuyBox2');
  var ideasGuyInput3 = document.getElementById('IdeasGuyBox3');
  var ideasGuyInput4 = document.getElementById('IdeasGuyBox4');

  var industryExpertiseInput1 = document.getElementById('IndustryExpertiseBox1');
  var industryExpertiseInput2 = document.getElementById('IndustryExpertiseBox2');
  var industryExpertiseInput3 = document.getElementById('IndustryExpertiseBox3');
  var industryExpertiseInput4 = document.getElementById('.IndustryExpertiseBox4');

var startupExperienceInput1 = document.getElementById('StartupExperienceBox1');
var startupExperienceInput2 = document.getElementById('StartupExperienceBox2');
var startupExperienceInput3 = document.getElementById('StartupExperienceBox3');
var startupExperienceInput4 = document.getElementById('StartupExperienceBox4');

// Add event listeners to the radio buttons
seekingInvestmentYes.addEventListener('change', function() {
if (seekingInvestmentYes.checked) {
cofounder3NameLabel.style.display = 'block';
cofounder4NameLabel.style.display = 'block';
ceoLabel3.style.display = 'block';
ceoLabel4.style.display = 'block';
ideaLabel3.style.display = 'block';
ideaLabel4.style.display = 'block';
ideasGuyLabel3.style.display = 'block';
ideasGuyLabel4.style.display = 'block';
industryExpertiseLabel3.style.display = 'block';
industryExpertiseLabel4.style.display = 'block';
startupExperienceLabel3.style.display = 'block';
startupExperienceLabel4.style.display = 'block';
}
});

seekingInvestmentNo.addEventListener('change', function() {
if (seekingInvestmentNo.checked) {
cofounder3NameLabel.style.display = 'none';
cofounder4NameLabel.style.display = 'none';
ceoLabel3.style.display = 'none';
ceoLabel4.style.display = 'none';
ideaLabel3.style.display = 'none';
ideaLabel4.style.display = 'none';
ideasGuyLabel3.style.display = 'none';
ideasGuyLabel4.style.display = 'none';
industryExpertiseLabel3.style.display = 'none';
industryExpertiseLabel4.style.display = 'none';
startupExperienceLabel3.style.display = 'none';
startupExperienceLabel4.style.display = 'none';
}
});

// Add event listeners to the input fields
cofounder1NameInput.addEventListener('input', function() {
ceoInput1.value = cofounder1NameInput.value;
ideasGuyInput1.value = cofounder1NameInput.value;
});

cofounder2NameInput.addEventListener('input', function() {
ceoInput2.value = cofounder2NameInput.value;
ideasGuyInput2.value = cofounder2NameInput.value;
});

cofounder3NameInput.addEventListener('input', function() {
ceoInput3.value = cofounder3NameInput.value;
ideasGuyInput3.value = cofounder3NameInput.value;
});

cofounder4NameInput.addEventListener('input', function() {
ceoInput4.value = cofounder4NameInput.value;
ideasGuyInput4.value = cofounder4NameInput.value;
});
});
