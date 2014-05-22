/* global angular */

'use strict';

angular.module('griddirApp')
  .controller('NggridCtrl', function ($scope) {

   $scope.myData = [{ name: "Moroni", age: 50, birthday: "Oct 28, 1970", salary: "60,000", information: "information", description: "description", definition: "definition", details:"details", database:"database", datetime:"Wednesday October Second of 2013" },
                    { name: "Tiancum", age: 43, birthday: "Feb 12, 1985", salary: "70,000", information: "information", description: "description", definition: "definition", details:"details", database:"database", datetime:"Wednesday October Second of 2013" },
                    { name: "Jacob", age: 27, birthday: "Aug 23, 1983", salary: "50,000", information: "information", description: "description", definition: "definition", details:"details", database:"database", datetime:"Wednesday October Second of 2013" },
                    { name: "Nephi", age: 29, birthday: "May 31, 2010", salary: "40,000", information: "information", description: "description", definition: "definition", details:"details", database:"database", datetime:"Wednesday October Second of 2013" },
                    { name: "Enos", age: 34, birthday: "Aug 3, 2008", salary: "30,000", information: "information", description: "description", definition: "definition", details:"details", database:"database", datetime:"Wednesday October Second of 2013" },
                    { name: "Moroni", age: 50, birthday: "Oct 28, 1970", salary: "60,000", information: "information", description: "description", definition: "definition", details:"details", database:"database", datetime:"Wednesday October Second of 2013" },
                    { name: "Tiancum", age: 43, birthday: "Feb 12, 1985", salary: "70,000", information: "information", description: "description", definition: "definition", details:"details", database:"database", datetime:"Wednesday October Second of 2013" },
                    { name: "Jacob", age: 27, birthday: "Aug 23, 1983", salary: "40,000", information: "information", description: "description", definition: "definition", details:"details", database:"database", datetime:"Wednesday October Second of 2013" },
                    { name: "Nephi", age: 29, birthday: "May 31, 2010", salary: "50,000", information: "information", description: "description", definition: "definition", details:"details", database:"database", datetime:"Wednesday October Second of 2013" },
                    { name: "Enos", age: 34, birthday: "Aug 3, 2008", salary: "30,000", information: "information", description: "description", definition: "definition", details:"details", database:"database", datetime:"Wednesday October Second of 2013" },
                    { name: "Moroni", age: 50, birthday: "Oct 28, 1970", salary: "60,000", information: "information", description: "description", definition: "definition", details:"details", database:"database", datetime:"Wednesday October Second of 2013" },
                    { name: "Tiancum", age: 43, birthday: "Feb 12, 1985", salary: "70,000", information: "information", description: "description", definition: "definition", details:"details", database:"database", datetime:"Wednesday October Second of 2013" },
                    { name: "Jacob", age: 27, birthday: "Aug 23, 1983", salary: "40,000", information: "information", description: "description", definition: "definition", details:"details", database:"database", datetime:"Wednesday October Second of 2013" },
                    { name: "Nephi", age: 29, birthday: "May 31, 2010", salary: "50,000", information: "information", description: "description", definition: "definition", details:"details", database:"database", datetime:"Wednesday October Second of 2013" },
                    { name: "Enos", age: 34, birthday: "Aug 3, 2008", salary: "30,000", information: "information", description: "description", definition: "definition", details:"details", database:"database", datetime:"Wednesday October Second of 2013" }
    ];

    $scope.gridOptions = {
        data: 'myData',
        enablePaging: true,
        showFooter: true,
        enablePinning: true,
        columnDefs: [{field: "name", width: 120, pinned: true },
                    { field: "age", width: 120 },
                    { field: "birthday", width: 120 },
                    { field: "salary", width: 120 },
                    { field: "information", width: 120 },
                    { field: "description", width: 120 },
                    { field: "definition", width: 120 },
                    { field: "details", width: 120 },
                    { field: "database", width: 120 },
                    { field: "datetime", width: 120 }
                    ]
    };
  });
