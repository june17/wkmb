var firequestion = document.getElementById("questions");

var questionRef = firebase.database().ref().child("questions");

var i=2;
questionRef.child(i).once("value", getData, errData);

function getData(datasnapshot){
    var name = datasnapshot.val();
    console.log(name.title);
    console.log(name.options);
};

// function getData(datasnapshot){
//     var questionShown = datasnapshot.val();
//     var op = questionShown.options;
//     var newItem = document.createElement("p");
//     newItem.appendChild(document.createTextNode(questionShown.title));
//     firequestion.appendChild(newItem);
//     //var formItem = document.createElement("form");
    
//     for(var p in op){
//         var optionsShown = document.createElement("input");
//         var label = document.createElement("label");
//         optionsShown.type = 'radio';
//         optionsShown.name = 'radio';
//         label.appendChild(optionsShown);
//         label.appendChild(document.createTextNode(p));
//         firequestion.appendChild(label);
//         //console.log(p + "   "+ op[p]);
//    }
// };

function errData(err){
    console.log("cannot fetch due to " + err);
}