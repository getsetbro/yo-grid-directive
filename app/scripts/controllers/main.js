/* global angular, console, $ */

'use strict';

angular.module('griddirApp')
  .controller('MainCtrl', function ($scope) {
    $scope.expanded = null;
    $scope.select = function(val, span, row){
      var xtra = $('#xtra');
      if( xtra.length ){
        //remove it
        xtra.remove();
      }
      if($scope.expanded === val){
        //keep it removed
        $scope.expanded = null;
        return;
      }
      $scope.expanded = val;
      var tr = '<tr id=xtra><td colspan="' + (span+1) + '">'+
      '<b>name: {{row[0]}}</b>'+
      '<div>{{row[1]}}</span>'+
      '<div>{{row[2]}}</span>'+
      '<div>{{row[3]}}</span>'+
      '<div>{{row[4]}}</span>'+
      '<div>{{row[5]}}</span>'+
      '</td></tr>';
      $('#tr'+val).after(tr);
    };
  $scope.tabular = [
    ['item name 001 title details desciption information','october','120000','Tuesday','1/1/14','1:15','5%'],
    ['item name 002 title details desciption information','november', '130000','Wednesday','1/2/14','2:15','7%'],
    ['item name 003 title details desciption information','december', '140000','Thursday','1/3/14','3:15','9%'],
    ['item name 004 title details desciption information','january','150000','Friday','1/4/14','4:15','11%'],
    ['item name 005 title details desciption information','february', '160000','Saturday','1/5/14','5:15','13%'],
    ['item name 006 title details desciption information','march','170000','Sunday','1/6/14','6:15','15%'],
    ['item name 007 title details desciption information','april','180000','Monday','1/7/14','7:15','17%'],
    ['item name 008 title details desciption information','may','190000','Tuesday','1/8/14','8:15','19%'],
    ['item name 009 title details desciption information','june', '200000','Wednesday','1/9/14','9:15','21%'],
    ['item name 010 title details desciption information','july', '210000','Thursday','1/10/14','10:15','23%'],
    ['item name 011 title details desciption information','august', '220000','Friday','1/11/14','11:15','25%'],
    ['item name 012 title details desciption information','september','230000','Saturday','1/12/14','12:15','27%'],
    ['item name 013 title details desciption information','october','240000','Sunday','1/13/14','13:15','29%'],
    ['item name 014 title details desciption information','november', '250000','Monday','1/14/14','14:15','31%'],
    ['item name 015 title details desciption information','december', '260000','Tuesday','1/15/14','15:15','33%'],
    ['item name 016 title details desciption information','january','270000','Wednesday','1/16/14','16:15','35%'],
    ['item name 017 title details desciption information','february', '280000','Thursday','1/17/14','17:15','37%'],
    ['item name 018 title details desciption information','march','290000','Friday','1/18/14','18:15','39%'],
    ['item name 019 title details desciption information','april','300000','Saturday','1/19/14','19:15','41%'],
    ['item name 020 title details desciption information','may','310000','Sunday','1/20/14','20:15','43%'],
    ['item name 021 title details desciption information','june', '320000','Monday','1/21/14','21:15','45%'],
    ['item name 022 title details desciption information','july', '330000','Tuesday','1/22/14','22:15','47%'],
    ['item name 023 title details desciption information','august', '340000','Wednesday','1/23/14','23:15','49%'],
    ['item name 024 title details desciption information','september','350000','Thursday','1/24/14','0:15','51%'],
    ['item name 025 title details desciption information','october','360000','Friday','1/25/14','1:15','53%'],
    ['item name 026 title details desciption information','november', '370000','Saturday','1/26/14','2:15','55%'],
    ['item name 027 title details desciption information','december', '380000','Sunday','1/27/14','3:15','57%'],
    ['item name 028 title details desciption information','january','390000','Monday','1/28/14','4:15','59%'],
    ['item name 029 title details desciption information','february', '400000','Tuesday','1/29/14','5:15','61%'],
    ['item name 030 title details desciption information','march','410000','Wednesday','1/30/14','6:15','63%'],
    ['item name 031 title details desciption information','april','420000','Thursday','1/31/14','7:15','65%'],
    ['item name 032 title details desciption information','may','430000','Friday','2/1/14','8:15','67%'],
    ['item name 033 title details desciption information','june', '440000','Saturday','2/2/14','9:15','69%'],
    ['item name 034 title details desciption information','july', '450000','Sunday','2/3/14','10:15','71%'],
    ['item name 035 title details desciption information','august', '460000','Monday','2/4/14','11:15','73%'],
    ['item name 036 title details desciption information','september','470000','Tuesday','2/5/14','12:15','75%'],
    ['item name 037 title details desciption information','october','480000','Wednesday','2/6/14','13:15','77%'],
  ];
  $scope.tabularHDR = [
    'Name','Month','Amount','Day','Date','Time','Percent'
  ];
  $('#pdTabs a').click(function(e) {
    e.preventDefault();
    $(this).tab('show');
  });

});
