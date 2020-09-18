 var app = angular.module('myApp', []);
 app.controller('myController', function($scope, $http, $filter) {
     $scope.coursearray = [];
     //$scope.coursearray.commdate = $filter('date')("EEE, d MMM y");
     //$scope.coursearray = new Date();
     //$scope.coursearray =   $filter('date')($scope.coursearray, 'dd-MM-yyyy');

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
         
         //till and after dates table
         $scope.feetable = setData(response, "fee-table");
         

     });

     $scope.datehighlight = function(d) {
         var curDate = new Date();
         return curDate.getTime() <= d.getTime();
        }
  


 });
   
 /*function integer_to_roman(num) {
 if (typeof num !== 'number') 
 return false; 

 var digits = String(+num).split(""),
 key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
 "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
 "","I","II","III","IV","V","VI","VII","VIII","IX"],
 roman_num = "",
 i = 3;
 while (i--)
 roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;
 return Array(+digits.join("") + 1).join("M") + roman_num;
 }
 console.log(integer_to_roman(1));*/

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
                 iiamt1: value.iiamt1,
                 iiamt1: value.totamt1 - value.istamt1,

                 //Fee Calsculation till date 2
                 totamt2: value.totamt2,
                 istamt2: value.istamt2,

                 iiamt2: value.totamt2 - value.istamt2,

                 feecname: value.feecname,


             }
         });
 }