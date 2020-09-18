//Kota Start Here (Line no 01)  
var app = angular.module('myApp', []);
 app.controller('myController', function($scope, $http, $filter) {
     $scope.coursearray = [];
     $http.get("/assets/js/course-2020-21/kota-course-details.json").then(function(response) {
         //Kota JEE Main Course 
         $scope.jeemainnur = setData(response, "kota-jeemain-nur");
         $scope.jeemainenth = setData(response, "kota-jeemain-enth");
         $scope.jeemainlead = setData(response, "kota-jeemain-lead");
         $scope.jeemainach = setData(response, "kota-jeemain-ach");                              
         $scope.jeemainfee = setData(response, "kota-jeemain-fee");         
         //Kota Medical Course         
         $scope.mednur = setData(response, "kota-med-nur");
         $scope.medenth = setData(response, "kota-med-enth");
         $scope.medlead = setData(response, "kota-med-lead");
         $scope.medach = setData(response, "kota-med-ach");                              
         $scope.medfee = setData(response, "kota-med-fee");         
         //Kota IIT Course         
         $scope.iitnur = setData(response, "kota-iit-nur");
         $scope.iitenth = setData(response, "kota-iit-enth");
         $scope.iitlead = setData(response, "kota-iit-lead");
         $scope.iitfee = setData(response, "kota-iit-fee");         
         //till and after dates table
         $scope.feetable = setData(response, "fee-table");        

         
     });
     $scope.datehighlight = function(d) {
         var curDate = new Date();
         return curDate.getTime() <= d.getTime();
} 
});

//Ahmedabad Start Here (Line no 32)
 app.controller('adi', function($scope, $http, $filter) {
     $scope.coursearray = [];        
     $http.get("/assets/js/course-2020-21/adi-course-details.json").then(function(response) {

         //Ahemedabad JEE Main Course 
         $scope.jeemainnur      = setData(response, "jeemain-nur");
         $scope.jeemainenth     = setData(response, "jeemain-enth");
         $scope.jeemainlead     = setData(response, "jeemain-lead");
         $scope.jeemainweekend  = setData(response, "jeemain-weekend");
         $scope.jeemainnurguj   = setData(response, "jeemain-nur-guj");
         $scope.jeemainenthguj  = setData(response, "jeemain-enth-guj");
         $scope.jeemainleadguj  = setData(response, "jeemain-lead-guj");
         $scope.jeemainboard    = setData(response, "jeemain-board");
        
         //Ahemedabad Medical Course         
         $scope.mednur          = setData2(response, "med-nur");
         $scope.mednurguj       = setData2(response, "med-nur-guj"); 
         $scope.medenth         = setData2(response, "med-enth");
         $scope.medenthguj      = setData2(response, "med-enth-guj");
         $scope.medlead         = setData2(response, "med-lead"); 
         $scope.medleadguj      = setData2(response, "med-lead-guj");
         $scope.medamb          = setData2(response, "med-amb");
         $scope.medasp          = setData2(response, "med-asp");
         $scope.medboard        = setData2(response, "med-board");
         $scope.medescalator    = setData2(response, "med-escalator");
         
           
         //Ahemedabad IIT Course         
         $scope.iitnur          = setData2(response, "iit-nur");
         $scope.iitenth         = setData2(response, "iit-enth");
         $scope.iitlead         = setData2(response, "iit-lead");
         $scope.iitamb          = setData2(response, "iit-amb");
         $scope.iitasp          = setData2(response, "iit-asp");
         $scope.iitfee          = setData2(response, "iit-fee");
         


         //Ahemedabad PNCF Course         
         $scope.pncfpn 		    = setData2(response, "pncf-pn");
         $scope.pncfcf 		    = setData2(response, "pncf-cf");


         // Ahmedabad Fee
         $scope.medfee          = setData2(response, "med-fee");  
         $scope.jeemainfee      = setData(response, "jeemain-fee");        
         $scope.adicent         = setData2(response, "adi-cent");
         $scope.pncffee         = setData2(response, "pncf-fee");          


         $scope.students        = setData(response, "students");
         
         //Ahemedabad till and after dates table
         $scope.feetable        = setData2(response, "fee-table");    
         
         //Ahemedabad Centers
         $scope.centers         = setData(response, "adi-center");
                  
        
        $scope.students         = setData2(response, "students");
        $scope.abc              = setData2(response, "abc"); 
         

     });
     $scope.datehighlight = function(d) {
         var curDate = new Date();
         return curDate.getTime() <= d.getTime();
        }
 });

   //setdata 2 function 
function setData2(response, param) {
     $data = response.data[param];
     // console.log($data);
     // var courses = $data["Courses"]
    return $data.map(function(value, index) {
        // console.log(value.Courses[index].commdate + " :: " + value.Courses.length)
        for(var i=0; i<value.Courses.length; i++) {
            console.log(value.Courses[i].commdate)
            var commdate = new Date(value.Courses[i].commdate);
            value.Courses[i]["commdate"] = commdate;

            var istdate = new Date(value.Courses[i].commdate);
            istdate.setDate(istdate.getDate() - 2);
            value.Courses[i]["Istinst"] = istdate;

            var iisndate = new Date(value.Courses[i].commdate);
            iisndate.setDate(iisndate.getDate() + 44);
            value.Courses[i]["IIndinst"] = iisndate;

            var istref = new Date(value.Courses[i].commdate);
            istref.setDate(istref.getDate() + 14);
            value.Courses[i]["Iref"] = istref;

            var laststref = new Date(value.Courses[i].commdate);
            laststref.setDate(laststref.getDate() + 29);
            value.Courses[i]["Lastref"] = laststref;
            
            /*******fees-table********/
            var totamt = value.Courses[i].totamt;
            value.Courses[i]["totamt"] = totamt;
             console.log (value.Courses[i]["totamt"] )
            
            var istamt = value.Courses[i].istamt;
            value.Courses[i]["istamt"] = istamt;
            console.log (value.Courses[i]["istamt"] )
            
            
            value.Courses[i]["iiamt"] = totamt-istamt;
            console.log (value.Courses[i]["iiamt"] )
              
            
              var totamt1 = value.Courses[i].totamt1;
            value.Courses[i]["totamt1"] = totamt1;
                         
            var istamt1 = value.Courses[i].istamt1;
            value.Courses[i]["istamt1"] = istamt1;
                        
            
            value.Courses[i]["iiamt1"] = totamt1-istamt1;
            
            
             var totamt2 = value.Courses[i].totamt2;
            value.Courses[i]["totamt2"] = totamt2;
                         
            var istamt2 = value.Courses[i].istamt2;
            value.Courses[i]["istamt2"] = istamt2;
                        
            
            value.Courses[i]["iiamt2"] = totamt2-istamt2;
            
            
                     //Fee Calsculation after date
            
                //value.Courses[i]["totamt"] =totamt;
            
                /*      totamt: value.Courses[i].totamt,
                 istamt: value.Courses[i].istamt,
                 iiamt: value.Courses[i] - value.Courses[i].istamt,*/
                 //iiamt : $filter('currency')( '₹', 2);

                 //Fee Calsculation till date 1
                 /*totamt1: value.Courses[i].totamt1,
                 istamt1: value.Courses[i].istamt1,*/
                 //iiamt1: value.iiamt1,
                 /*iiamt1: value.Courses[i].totamt1 - value.Courses[i].istamt1,*/

                 //Fee Calsculation till date 2
                 /*totamt2: value.Courses[i].totamt2,
                 istamt2: value.Courses[i].istamt2,

                 iiamt2: value.Courses[i].totamt2 - value.Courses[i].istamt2,

                 feecname: value.feecname,*/
                 
        }

        
        console.log(value)
        return value
        
        
    });
}




 function setData(response, param) {
     $data = response.data[param];
     //console.log($data);
     return $data
         .map(function(value, index) {
         var istdate = new Date(value.commdate);
             
             istdate.setDate(istdate.getDate() - 2);
             var iisndate = new Date(value.commdate);
             iisndate.setDate(iisndate.getDate() + 44);
             var istref = new Date(value.commdate);
             istref.setDate(istref.getDate() + 14);
             var laststref = new Date(value.commdate);
             laststref.setDate(laststref.getDate() + 29);
             value.commdate = new Date(value.commdate);

            

             //till and after dates
             value.datetill = new Date(value.datetill);
             value.dateaft = new Date(value.dateaft);
         
         

             return {
                 old: value,
                 Istinst: istdate,
                 IIndinst: iisndate,
                 Iref: istref,
                 Lastref: laststref,


                 //Fee Calsculation after date

                 totamt: value.totamt,
                 istamt: value.istamt,
                 iiamt: value.totamt - value.istamt,
                 //iiamt : $filter('currency')( '₹', 2);

                 //Fee Calsculation till date 1
                 totamt1: value.totamt1,
                 istamt1: value.istamt1,
                 //iiamt1: value.iiamt1,
                 iiamt1: value.totamt1 - value.istamt1,

                 //Fee Calsculation till date 2
                 totamt2: value.totamt2,
                 istamt2: value.istamt2,

                 iiamt2: value.totamt2 - value.istamt2,

                 feecname: value.feecname,
                 
                 centdet : value.centdet, 
                 


             }
         });
 }

