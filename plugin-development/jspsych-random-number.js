jsPsych['random-number'] = (function(){

  var plugin = {};

  plugin.create = function(params){
    var trials = [];

    trials.push({
      number: Math.random() * params.multiplier
    });

    return trials;
  }

  plugin.trial = function(display_element, trial){
    display_element.html(
      '<p>The number is: ' + trial.number + '</p>'
    );
    setTimeout(function(){
      display_element.empty();
      jsPsych.data.write({
        number: trial.number
      });
      jsPsych.finishTrial();
    }, 1000);
  }

  return plugin;

})();
